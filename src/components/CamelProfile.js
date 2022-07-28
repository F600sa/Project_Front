import React from 'react'
import logo from '../assets/img/logo.png';
import { HashLink } from 'react-router-hash-link';
import { Comments } from './Comments';
import { useState ,useEffect} from 'react';
import axios from 'axios'

export  function CamelProfile() {
  const [data, setData] = useState([[]])
    const[getanimal,setGetanimal]=useState([[]])

      
  useEffect(()=>{
    axios.get("https://nasel.herokuapp.com/animal/get/5")
    .then((res)=>{
      console.log(res.data.games);
      setGetanimal(res.data.games)
    })
  },[])

  return (<>
  
  {getanimal.map((e)=>(
       
      
     <div className="w3-content w3-margin-top" >
        <br/><br/><br/><br/><br/><br/><br/>
    <div class="w3-row-padding">
      
  
      <div class="w3-twothird">
      
       <div class="w3-container w3-card w3-white w3-margin-bottom">
         <h2 class="w3-text-grey w3-padding-16"><i class="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>حول الجمل</h2>
         <div class="w3-container">
           <h5 class="w3-opacity"><b>موصفاته</b></h5>
           <p>متوسط مأمول الحياة للجمل هو 30 إلى 40 سنة. وطول الجمل كامل النمو هو 1.85م عند الأكتاف، و2.15 م عند السنام.يرتفع السنام لحوالي 76سم عن الجسم. وتصل سرعة الإبل إلى 65 كيلومتر في الساعة، ويمكنها أن تستمر على سرعة 40 كم/ساعة. والجمل حيوان سريع الانقياد ينهض بالحمل الثقيل ويبرك به.</p>
           <hr/>
         </div>
         <div class="w3-container">
           <h5 class="w3-opacity"><b>انجازات قرائب الجمل  </b></h5>
           <p>المركز الاول بمزايين الابل 2014</p>
         </div>
       </div>
 
       <div class="w3-container w3-card w3-white">
         <h2 class="w3-text-grey w3-padding-16"><i class="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>اهم اللقاب</h2>
         <div class="w3-container">
           <h5 class="w3-opacity"><b>اللقب الاول</b></h5>
           <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>{e.awards}</h6>
           <p></p>
           <hr/>
         </div>
         <div class="w3-container">
           <h5 class="w3-opacity"><b>اللقب الثاني </b></h5>
           <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>{e.award1}</h6>
           <p></p>
           <hr/>
         </div>
         <div class="w3-container">
           <h5 class="w3-opacity"><b>اللقب الثالث</b></h5>
           <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>{e.award2} </h6>
           <p>المركز الثاني </p><br/>
         </div>
         
       </div>
       <br/>
       <div class="w3-container w3-card w3-white">
         <h2 class="w3-text-grey w3-padding-16"><i class="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>للتواصل مع المالك </h2>
         <div class="w3-container">
           <h5 class="w3-opacity"><b>لتواصل مع المالك</b></h5>
           <p><i class="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i>الرقم:{e.phone}</p>
           <p><i class="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i>البريد الالكتروني:Faisal@gmail.com</p>
         </div>
         <div class="w3-container">
           <h5 class="w3-opacity"><b>لتواصل  مع مدرب</b></h5>
           <p><i class="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i>الرقم:050037733</p>
           <p><i class="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i>البريد الالكتروني:</p>
         </div>
        </div>
         <br/>
        </div>
        <div class="w3-third">
     
     <div class="w3-white w3-text-grey w3-card-4">
       <div class="w3-display-container">
         <img src={logo} alt="Avatar"/>
         <div class="w3-margin-right w3- w3-container w3-text-black">
           <h2>اسم الجمل: {e.name}</h2>
         </div>
       </div>
       <div class="w3-container">
         <p><i class="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i>النسب:{e.family}</p>
         <p><i class="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i>الموقع:الرياض</p>
         <p><i class="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i>العمر:{e.age} </p>
         <p><i class="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>اللقب:اجمل جمل</p>
         <p><i class="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>المالك:قعيد</p>
         <p><i class="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>المدرب:قعيد</p>
         <hr/>

         <p class="w3-large"><b><i class="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"></i>العائله</b></p>
         <p><i class="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i>الاب:{e.father}</p>
         <p><i class="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i>الام:{e.mother}</p>
         <hr/>
         <p><i class="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i>سعر :{e.price}</p>
         <p><i class="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i>يقبل التفاوض على التلقيح الطبيعي:</p>

       </div>
       
     </div><br/>
     <span >
         <HashLink to='edit'>
        <button className="  button-order" onClick={() => console.log('connect')}>&nbsp;  تعديل  &nbsp;</button>
       </HashLink>
       </span>
    </div>

      </div>
      <span >
         <HashLink to='Order'>
        <button className="  button-order" onClick={() => console.log('connect')}>&nbsp;  اطلب  &nbsp;</button>
       </HashLink>
       </span>
       <br/><br/> <br/><br/><br/> <br/>
        <Comments/>

    </div>
  
  ))} 
   </>
   
       )
    }
 