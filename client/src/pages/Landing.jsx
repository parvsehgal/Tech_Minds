import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Landing = () => {

  const [advice, setAdvice] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();
  const getAdvice = async () => {
    setLoading(true)
    const { data } = await axios.get('http://localhost:4000/api/v1/dailyTip')
    setAdvice(data.tip)
    setLoading(false)
  }
  useEffect(() => {
    getAdvice();
  }, [])
  const titleBarStyle = {
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
  };

  const titleStyle = {
    marginLeft: '20px', // Adjust as needed
  };


  const containerStyle = {
    backgroundImage: "url('https://www.cleverbucksolutions.com/wp-content/uploads/2022/05/banner2-1536x864.jpeg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '933px', // Set the height as per your requirement
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const squareStyle = {
    width: '300px',
    height: '300px',
    margin: '50px',
    backgroundColor: 'transparent',
    border: '2px solid red',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    color: 'white', // Text color
    marginTop: '300px',
    fontSize: '43px',
  };
  const hoverEffect = {
    transform: 'translateY(-5px)', // Translate the square upwards on hover
  };

  const headingStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: '20px',
  };

  const adviceStyle = {
    color: "white",
    position: 'fixed',
    fontSize: '50px',
    marginTop: '-500px',
    marginLeft: '50px',
  }

  return (
    <div>
      {/*title bar*/}
      <div style={titleBarStyle}>
        <h1 style={titleStyle}>AI BIN -> AI based Waste Management System </h1>
      </div>
      {/*title bar*/}
      <div style={containerStyle} >
        <div style={containerStyle}>
          <div style={adviceStyle}>Advice -> {(loading) ? ('Loading') : (advice)} </div>
          <div style={{ ...squareStyle, ...hoverEffect }} onClick={() => navigate('/assistent')}>Ask a Question</div>
          <div onClick={() => navigate('/classify')} style={{ ...squareStyle, ...hoverEffect }}>Dispose Waste</div>
          <div style={{ ...squareStyle, ...hoverEffect }}>Text 3</div>
        </div>
      </div>

    </div>
  )
}

export default Landing
