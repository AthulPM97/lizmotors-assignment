import { useCallback, useRef, useState } from "react";
import { Canvas, Node } from "reaflow";
import { storedEdges, storedNodes } from "./data";

function App() {
  const [nodes, setNodes] = useState(storedNodes);
  const [edges, setEdges] = useState(storedEdges);
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  const handleNodeRemove = (event) => {
    const newNodes = nodes.filter((item) => !item.id.startsWith(editedNode.id));
    const newEdges = edges.filter((item) => !item.id.startsWith(editedNode.id));
    setNodes(newNodes);
    setEdges(newEdges);
    setIsModalOpen(false);
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
              <button style={{ float: "right" }} onClick={handleModalClose}>
                X
              </button>
            </div>
            <section>{editedNode.data}</section>
            <section>
              <button onClick={handleNodeRemove}>Remove</button>
              <button onClick={handleNodeRemove}>Add node</button>
            </section>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
