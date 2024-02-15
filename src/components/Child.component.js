// ParentComponent.js
import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  const [messageFromChild, setMessageFromChild] = useState("");

  const handleCallback = (message) => {
    setMessageFromChild(message);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <ChildComponent callback={handleCallback} />
      <p>Message from Child: {messageFromChild}</p>
    </div>
  );
};

// export default ParentComponent;

// ChildComponent.js
import React from "react";

const ChildComponent = ({ callback }) => {
  const sendMessageToParent = () => {
    callback("Hello from Child!");
  };

  return (
    <div>
      <h2>Child Component</h2>
      <button onClick={sendMessageToParent}>Send Message to Parent</button>
    </div>
  );
};

// export default ChildComponent;
