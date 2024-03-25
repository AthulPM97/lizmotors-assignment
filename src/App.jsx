import { useCallback, useRef, useState } from "react";
import { Canvas, Node } from "reaflow";
import { storedEdges, storedNodes } from "./data";
import DetailsModal from "./components/modal/DetailsModal";

function App() {
  const [nodes, setNodes] = useState(storedNodes);
  const [edges, setEdges] = useState(storedEdges);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [editedNode, setEditedNode] = useState(null);

  const canvasRef = useRef(null);

  const handleMouseEnter = useCallback((event, node) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
    setEditedNode(node);
    setIsModalOpen(true);
  }, []);

  const handleModalClose = (event) => {
    setIsModalOpen(false);
  };
  const handleEditModalClose = (event) => {
    setIsEditOpen(false);
  };

  const handleNodeRemove = (event) => {
    const newNodes = nodes.filter((item) => !item.id.startsWith(editedNode.id));
    const newEdges = edges.filter((item) => !item.id.startsWith(editedNode.id));
    setNodes(newNodes);
    setEdges(newEdges);
    setIsModalOpen(false);
  };

  const handleNodeAdd = () => {
    setIsModalOpen(false);
    setIsEditOpen(true);
  };

  return (
    <div>
      <Canvas
        defaultPosition="top"
        nodes={nodes}
        edges={edges}
        direction="RIGHT"
        zoomable={false}
        fit={true}
        ref={canvasRef}
        node={(node) => <Node {...node} onEnter={handleMouseEnter} />}
      />
      {isModalOpen && (
        <div
          style={{
            position: "fixed",
            left: mousePosition.x,
            top: mousePosition.y,
          }}
        >
          <div
            style={{
              width: "18rem",
              background: "grey",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div>
              <button
                style={{
                  float: "right",
                  marginTop: "10px",
                  marginRight: "10px",
                }}
                onClick={handleModalClose}
              >
                X
              </button>
            </div>
            <section style={{ marginLeft: "10px", marginBottom: "10px" }}>
              {editedNode.data}
            </section>
            <section style={{ marginLeft: "10px", marginBottom: "10px" }}>
              <button
                onClick={handleNodeRemove}
                style={{ marginRight: "10px" }}
              >
                Remove
              </button>
              <button onClick={handleNodeAdd}>Add node</button>
            </section>
          </div>
        </div>
      )}
      {isEditOpen && (
        <DetailsModal
          mousePosition={mousePosition}
          handleModalClose={handleEditModalClose}
        />
      )}
    </div>
  );
}

export default App;
