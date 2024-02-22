import React from "react";
import { useParams } from "react-router-dom";
function Add() {
  const { a, b } = useParams(); // Returns an object of key/value pairs of URL parameters
  // keys are a & b, and values are the actual values of the parameters
  return (
    <div id="add">
      <h2>Add Path Parameters</h2>
      {a} + {b} = {parseInt(a as string) + parseInt(b as string)}
      {/* As string is because the parameters are always strings */}
    </div>
  );
}
export default Add;
