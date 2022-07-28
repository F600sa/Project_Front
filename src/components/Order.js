import React from 'react'
import { Col, Row, Container } from "react-bootstrap";
import headerImg from "../assets/img/logo.png";
import TrackVisibility from 'react-on-screen';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import { useState ,useEffect} from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


export  function Order() {

  // const [order, setOrder] = useState();
  const [city, setCity] = useState();
  const [price, setPrice] = useState();
  const [iban, setIban] = useState();
  const [delivery, setDerlivery] = useState();
  
  


 const navigate = useNavigate("")


 const token =localStorage.getItem("token")


 const Sendorder=() =>{
   axios.post ('https://nasel.herokuapp.com/order/add', {
    city,price,iban,delivery
   },{headers: { 'Authorization': `Bearer ${token}`}}).then(res=>{
     
     navigate("/")
   })
 }




 
  return (
    <section className="banner" >

    <Container>
     <Row className="aligh-items-center">
      <Col xs={12} md={6} xl={7}>
      <div>
    <Container>
      <Row className="vh-100 d-flex justify-content-center align-items-center">
        <Col md={8} lg={6} xs={12}>
        <div class="order-form">
                

                    <h4 class="mb-5 text-secondary">اطلب الان </h4>
                    <div class="row">
                        <div class="mb-3 col-md-12">
                            <label>الكميه <span class="text-danger">*</span></label><br/>
                            <input type="number" class="form-control" id="quantity" name="quantity" min="1" max="100" onChange={(e)=> {setPrice(e.target.value);}}/>  
                        </div>
                        <div class="mb-3 col-md-12">
                            <label>التوصيل <span class="text-danger">*</span></label><br/>
                            <select name="delivery" id="delivery" class="form-control" onChange={(e)=> {setDerlivery(e.target.value);}}>
                              <option value="yes">نعم احتاج لشركة توصيل</option>
                              <option value="no">سوف استلم الطلب بنفسي</option>
                            </select>
                        </div>
                        <div class="mb-3 col-md-12">
                            <label>المجموع </label><br/>
                            <label id="total"><span class="text-danger">0</span></label>

                        </div>

                        <hr/>
                        <div class="mb-3 col-md-12">
                            <label>الاسم <span class="text-danger">*</span></label>
                            <input type="text" name="username" class="form-control" placeholder="ادخل الاسم  "/>
                        </div>
                        <div class="mb-3 col-md-12">
                            <label>الموقع <span class="text-danger">*</span></label>
                            <input type="text" name="username" class="form-control" placeholder="Geolocation API  "onChange={(e)=> {setCity(e.target.value);}}/>
                        </div>                       
                        <div class="mb-3 col-md-12">
                            <label>الايبان<span class="text-danger">*</span></label>
                            <input type="text" name="card-number" class="form-control" placeholder=" SA..." onChange={(e)=> {setIban(e.target.value);}}/>
                        </div>
                       
                        <div class="col-md-12">
                        <button onClick={Sendorder}>&nbsp;    ادفع &nbsp; <ArrowRightCircle size={25} /></button>
                        </div>
                    </div>
              
                <p class=" mt-3 text-secondary"><a href="#">لدي مشاكل في الدفع </a></p>
            </div>
          </Col>
      </Row>
    </Container>
  </div>

      </Col>
      <Col xs={12} md={6} xl={5}>
       <TrackVisibility>
        {({ isVisible }) =>
          <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
            <img src={headerImg} alt="Header Img"/>
          </div>}
      </TrackVisibility>
    </Col>
  </Row>
</Container>
    </section>
  )
}
