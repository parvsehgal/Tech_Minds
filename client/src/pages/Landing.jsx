import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Landing = () => {
  const [tip, setTip] = useState('');
  const getData = async () => {
    const response = await axios.get('http://localhost:4000/api/v1/dailyTip')
    console.log(response.data);
    setTip(response.data.tip)
  }
  useEffect(() => {
    getData();
  }, [])
  return (
    <div>
      <div>todays tip - {tip}</div>
    </div>
  )
}

export default Landing
