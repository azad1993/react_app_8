import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [myApi, setMyapi] = useState([]);
  const [text, setText] = useState('');
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        "https://5ea5ca472d86f00016b4626d.mockapi.io/brotherhood"
      );
      res.json().then((res) => setMyapi(res));
    }

    fetchData();
  }, []);
  console.log(myApi)

  const handleChange = (e) =>{
    setText(e.target.value)
  }

  const options = []
  myApi.map(item => options.push(item.department))

  const dropChange = (e) =>{
     return e.target.value
  }
  
  
  const defaultOption = myApi.map((item) => item.id == 1);
  return (
    
    <div className="App">
      <input onChange={handleChange} />
      <Dropdown options={options} value={'Departments'} onChange={dropChange} placeholder="Select an option" />
      {myApi.map((item) => (item.name.includes(text) ?
        <div key={item.id}>{item.name}</div> : null
      ))}
    </div>
  );
}

export default App;
