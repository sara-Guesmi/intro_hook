import React, { useEffect, useState } from "react";

const FormHook = () => {
  const [name, setName] = useState("no name");
  // -----------------------------------
  const handleName = (event) => {
    setName(event.target.value);
  };
  // componentDiMount
  useEffect(() => {
    alert("updated");
  }, []);
  // componentDidUpdate
  useEffect(() => {
    alert("updated");
  }, [name]);
  useEffect(() => {
    return () => {};
  }, []);
  return (
    <div>
      <input type="text" onChange={handleName} />
      <h3>{name}</h3>
    </div>
  );
};

export default FormHook;
