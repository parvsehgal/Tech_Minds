import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ClipLoader from "react-spinners/ClipLoader";
const Assistent = () => {

  const [ques, setQues] = useState('')
  const [ans, setAns] = useState('')
  const [isLoading, setLoading] = useState(false)
  const getAns = async () => {
    setLoading(true)
    const { data } = await axios.post('http://localhost:4000/api/v1/assistent', { ques: ques })
    console.log(data)
    setAns(data.ans);
    setLoading(false)
  }

  let currentStep = { title: '', content: [] };
  const steps = [];

  const lines = ans.split('\n');

  lines.forEach((line) => {
    if (line.startsWith('*')) {
      // New step title (remove asterisk and trim)
      currentStep = { title: line.slice(1).trim(), content: [] };
      steps.push(currentStep); // Add previous step if it has content
    } else {
      // Instruction line (trim)
      currentStep.content.push(line.trim());
    }
  });

  // Add the last step if it has content
  if (currentStep.content.length > 0) {
    steps.push(currentStep);
  }

  const toView = steps.map((each) => {
    return (
      <div>
        <h2>{each.title}</h2>
        <div>{each.content}</div>
      </div>
    )
  })

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '50px',
  };

  const inputContainerStyle = {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    marginBottom: '20px',
  };

  const inputStyle = {
    width: '300px',
    height: '40px',
    padding: '8px',
    marginRight: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '16px',
  };

  const buttonStyle = {
    width: '100px',
    height: '40px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
  };

  return (
    <div style={containerStyle}>
      <h1>Helper</h1>
      <div style={inputContainerStyle}>
        <input type="text" onChange={(event) => setQues(event.target.value)} placeholder="Enter your query" style={inputStyle} />
        <button onClick={getAns} style={buttonStyle}>Submit</button>
      </div>
      {
        (isLoading) ? (<ClipLoader color="#36d7b7" />) : (<div>{toView}</div>)
      }
    </div >
  )
}

export default Assistent
