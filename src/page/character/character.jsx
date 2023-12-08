import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

function Character() {
  const [character,setCharacter] = useState([])

  const navigate = useNavigate()


  const getCharacterInfo =  async()=>{
    const response = await axios.get('https://thronesapi.com/api/v2/Characters');
    const data  =  response.data;
    setCharacter(data)
  }

  useEffect(()=>{
    getCharacterInfo()
  },[])

  const goToDetailedInfo = (id)=>{
    navigate(`/${id}`)
  }
  return (
    <div className="App">
      <div>
        {character.map((item,idx)=>{
          return(
            <div 
            key={idx}
            className="div-list"
            onClick={()=> goToDetailedInfo(item.id)}
            >
              {item.fullName}
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default Character;
