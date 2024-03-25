import { useState } from "react";

const DetailsModal = (props) => {
  const { mousePosition, handleModalClose } = props;

  const [text, setText] = useState("")
  const [description, setDescription] = useState("")

  const handleNodeAdd = (event) => {
    console.log("add node", event)
    console.log("text ", text)
  }
  return (
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
          <button style={{ float: "right" }} onClick={handleModalClose()}>
            X
          </button>
        </div>
        <section>
          <input type="text" placeholder="Enter text" onChange={(e) => setText(e.target)} />
          <input type="text" placeholder="Enter description" />
        </section>
        <section>
          <button onClick={handleNodeAdd}>Add node</button>
        </section>
      </div>
    </div>
  );
};

export default DetailsModal;
