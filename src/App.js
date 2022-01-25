import React from "react";
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";

import Circle from "./Circle";
import Grade from "./Grade";

function App() {
  const [week, setWeek] = React.useState(['일','월','화',
  '수','목','금','토']);

  let date = new Date();
  let toWeek = date.getDay();
  let del = week.splice(0,toWeek);

  del.forEach((item, i) => {
    week.push(item);
  });
  
  return (
    <div className="App">
      <Container>
        <Switch>
          <Route path="/" exact render={(props) => (
            <Circle week={week}/>
          )}/>          
          <Route path="/grade" component={Grade}/>
        </Switch>
      </Container>
    </div>
  );
}


const Container = styled.div`
  width: 300px;
  height: 80vh;
  margin: 50px auto;
  border: 1px solid orange;
  border-radius: 30px;
  text-align: center;
  padding: 20px;
`;



export default App;
