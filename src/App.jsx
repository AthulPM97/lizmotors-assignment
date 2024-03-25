import { useCallback, useEffect, useRef, useState } from "react";
import { Canvas, Node } from "reaflow";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const canvasRef = useRef(null);

  useEffect(() => {
    // canvasRef.current.scrollIntoView({ behavior: "smooth", block: "nearest" })
    // console.log(canvasRef);
  }, []);
  const nodes = [
    {
      id: "1",
      text: "root",
    },
    {
      id: "1-1",
      text: "Research",
    },
    {
      id: "1-2",
      text: "planning",
    },
    {
      id: "1-3",
      text: "designing",
    },
    {
      id: "1-4",
      text: "manufacturing",
    },
    {
      id: "1-5",
      text: "Sales/Marketing",
    },
    {
      id: "1-1-1",
      text: "External",
    },
    {
      id: "1-1-2",
      text: "Internal",
    },
  ];

  const edges = [
    {
      id: "1-1",
      from: "1",
      to: "1-1",
    },
    {
      id: "1-2",
      from: "1",
      to: "1-2",
    },
    {
      id: "1-3",
      from: "1",
      to: "1-3",
    },
    {
      id: "1-4",
      from: "1",
      to: "1-4",
    },
    {
      id: "1-5",
      from: "1",
      to: "1-5",
    },
    {
      id: "1-1-1",
      from: "1-1",
      to: "1-1-1",
    },
    {
      id: "1-1-2",
      from: "1-1",
      to: "1-1-2",
    },
  ];

  const handleMouseEnter = useCallback((event, node) => {
    console.log("event ", node);
    setMousePosition({ x: event.clientX, y: event.clientY });

    setIsModalOpen(true);
  }, []);

  const handleModalClose = (event) => {
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
          <div className="modal-content">
            <span className="close-btn" onClick={handleModalClose}>
              ×
            </span>
            <h2>Modal Title</h2>
            <p>Modal Content</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
