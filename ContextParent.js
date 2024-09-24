import React, { useState, createContext, useContext } from "react";

// Create the context
const StepContext = createContext();

function ContextParent() {
  const [name, setName] = useState('karthick');
  const [dept, setDept] = useState('CSD');

  return (
    // Provide both `name` and `dept` values to the context
    <StepContext.Provider value={{ name, dept }}>
      <h1>Parent Component</h1>
      <ChildA />
    </StepContext.Provider>
  );
}

function ChildA() {
  return (
    <>
      <h1>ChildA Component</h1>
      <ChildB />
    </>
  );
}

function ChildB() {
  // Consume the context values using `useContext`
  const { name, dept } = useContext(StepContext);

  return (
    <>
      <h1>ChildB Component</h1>
      <div>Name: {name}</div>
      <div>Department: {dept}</div>
    </>
  );
}

export default ContextParent;

