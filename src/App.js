import React, { useState } from "react";
import FetchAPI from "./FetchAPI";
import CardContainer from "./CardContainer";
import Button from "@material-ui/core/Button";

function App() {
  const [val, updateVal] = useState([]);
  function onSubmit(newVal) {
    updateVal(newVal);
  }
  function resetToDefault() {
    updateVal([]);
  }
  return (
    <div className="App">
      <CardContainer val={val} />
      <Button variant="contained" color="secondary" onClick={resetToDefault}>
        Remove News Cards
      </Button>
      <FetchAPI pushToApp={onSubmit} />
    </div>
  );
}

export default App;
