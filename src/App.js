import logo from './logo.svg';
import './App.css';

function App() {
  
  const styles = {
    border: "1px solid #eee",
    padding: "20px",
    width: "300px",
    margin: "30px auto"
  };
  return (
    <div className="App">
      <div style={styles}>

      <p style={{color: "green", fontWeight:"700", fontSize:"50px"}}>안녕하세요!</p>
      <hr style={{margin:"0 50px"}} />
      <p style={{textAlign:"left", margin:"20px 50px"}}>이름을 입력해주세요.</p>
      <input type="text" />
    
      </div>
    </div>
  );
}

export default App;
