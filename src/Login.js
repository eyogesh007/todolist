import {useState} from 'react';

import {Link,Navigate,useNavigate} from 'react-router';

import axios from 'axios';

import todo from './todo.js'

import Signup from './signup.js'

import Pagenotfound from './Pagenotfound.js';

import './login.css';



//const PORT = process.env.PORT || 5000;



const Login = (parms)=>{

  const[token,setToken]=useState(null)

  let navigate=useNavigate();

  const[data,setData]=useState({

   username:"",

   password:""

  })



   

  const {username,password}=data;



  function loginfun(e){

   var name=e.target.name;

   var value=e.target.value;

   setData({...data,[name]:value});

  }



  function backtosignup(){

   navigate('/');

  }





  async function submitform (e){

   e.preventDefault();

   await axios.post(`https://todolistapi.zebsy.in/login`,data).then(

    res => {

    setToken(res.data);

    localStorage.setItem("token",res.data);}

  )

  if(localStorage.getItem('token')){  

   navigate('/todo');

    }

    else

    navigate('/')

  }



  return(

   <div>

   <center>

    <form className="loginform" onSubmit={submitform}>

     <input className="logininput" onChange={loginfun} type="text" name="username" placeholder="username" value={username}/>

     <br/>

    <input className="logininput" onChange={loginfun} type="password" name="password" placeholder="password" value={password}/>

     <br/>

    <input className="logininput" type="submit" onClick={submitform}/>

    </form>

    <br/>

     <button className="logininput" onClick={backtosignup}>don't have an account</button>

    </center>

   </div>

  );



}



export default Login;