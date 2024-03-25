import { useState } from "react";
import "./DetailsModal.css";

const DetailsModal = (props) => {
  const { mousePosition, handleModalClose, handleNodeSubmit } = props;

  const [text, setText] = useState("");
  const [description, setDescription] = useState("");

  const handleNodeAdd = (event) => {
    const userInput = {
        text,
        data: description
    }
    handleNodeSubmit(userInput)
  };
  return (
    <div
      style={{
        position: "fixed",
        left: mousePosition.x,
        top: mousePosition.y,
      }}
    >
      <div className="card">
        <div>
          <button className="close-btn" onClick={handleModalClose}>
            X
          </button>
        </div>
        <section className="text-box">
          <input
            type="text"
            placeholder="Enter text"
            onChange={(e) => setText(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter description"
            onChange={(e) => setDescription(e.target.value)}
          />
        </section>
        <section className="submit-btn">
          <button onClick={handleNodeAdd}>Add node</button>
        </section>
      </div>
    </div>
  );
};

export default DetailsModal;
