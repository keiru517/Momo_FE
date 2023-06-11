import { useState } from "react";
import axios from "axios";

function Chat() {
  const [inputValue, setInputValue] = useState("");
  const [outputValue, setOutputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleClick = () => {
    setOutputValue('Thinking...')
    axios.post('http://localhost:5000', {
      prompt:inputValue,
    },
    {
      headers:{
        'Content-Type': 'application/json',
      }
    }
    ).then(response=>{
      setOutputValue(response.data);
    })
  };

  return (
    <div>
      <p>MOMO GPT</p>
        <textarea
          placeholder="output"
          rows={20}
          style={{
            width: "400px",
            borderRadius: "10px",
            backgroundColor: "#E6E6E6",
          }}
          readOnly
          value={outputValue}
        ></textarea>
        <br></br>
        <input
          placeholder="Input"
          style={{
            width: "400px",
            height: "30px",
            borderRadius: "5px",
            backgroundColor: "#E6E6E6",
          }}
          value={inputValue}
          onChange={handleChange}
        ></input>
        <br />
        <button
          style={{ width: "50px", height: "40px", borderRadius: "10px" }}
          onClick={handleClick}
        >
          Ask
        </button>
    </div>
  );
}

export default Chat;
