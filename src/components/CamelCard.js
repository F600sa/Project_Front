import React from 'react'
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState ,useEffect} from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
export   function CamelCard({ title, description, imgUrl ,id}) {
  const[getanimal,setGetanimal]=useState([[]])

      
  useEffect(()=>{
    axios.get("https://nasel.herokuapp.com/animal/all").then((res)=>{
      console.log(res.data.Animal);
      setGetanimal(res.data.comment.Animal)
    })
  },[])
  return (
    <Col size={12} sm={6} md={4} onClick={() => console.log("lll")}>
      
    <Link to={`/CamelProfile/${id}`} >
    <div className="proj-imgbx" >
      <img src={imgUrl}  />
      <div className="proj-txtx">
        <h4>{title}</h4>
        <span>{description}</span>
      </div>
    </div>
    </Link>

  </Col>
  )
}
