import React from "react";
import "components/App.css";
import useApplicationData from "hooks/useApplicationData";

import CardGroup from "components/CardGroup";

function App(props) {
  const { state } = useApplicationData();
  console.log(state.heroes);
  return (
    <main>
      <h1>DOTA 2</h1>
      <CardGroup heroes={state.heroes} />)
    </main>
  );
}

export default App;
