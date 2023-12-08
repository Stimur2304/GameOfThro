import { useParams } from 'react-router-dom'
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './detailed.css';

const DetailedInfo = () => {
  const{ id } = useParams();
  const[info,setInfo] = useState({});
  const getOneCharacterInfo =  async()=>{
    const response = await axios.get(`https://thronesapi.com/api/v2/Characters/${id}`);
    const data  =  response.data;
    setInfo(data)
    console.log(info)
  }
  console.log(id)

  useEffect(()=>{
    getOneCharacterInfo()
  },[])
  return (
    <div>
      <div className='photoAndFullName'>
        <h2>{info.fullName}</h2>
        <img src={info.imageUrl} alt="" />
      </div>
      <div className='desc'>
        <p className='header'>ID:</p>
        <p className='info'>{info.id}</p>
      </div>
      <div className='desc'>
        <p className='header'>Full name:</p>
        <p className='info'>{info.fullName}</p>
      </div>
      <div className='desc'>
        <p className='header'>Family:</p>
        <p className='info'>{info.family}</p>
      </div>
      <div className='desc'>
        <p className='header'>Title:</p>
        <p className='info'>{info.title}</p>
      </div>
    </div>
  )
}

export default DetailedInfo