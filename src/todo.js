import react,{useState,useEffect} from 'react';
import axios from 'axios';
import List from './list.js'
import {useParams} from 'react-router-dom';
import {useNavigate} from 'react-router';
import './todolist.css'

function Todo(){
 const {name}= useParams();
 let navigate=useNavigate();
 const PORT = 5000;
  const [list,setList]=useState(
   {
    date:"",
    title:"",
    task:""
   })

  const [res,setRes]=useState({})

  useEffect(()=>{
   axios.get(`https://todolistapi.zebsy.in/todo`,{headers:{'usertoken':localStorage.getItem('token')}}).then(res=>setRes(res.data))},[res]);

  const {date,title,task}=list;

  function change(e){
   var name=e.target.name;
   var value=e.target.value;
   setList({...list,[name]:value})
  }

   function getCurrentDate(){
   let newDate = new Date()
   let date = newDate.getDate();
   let month = newDate.getMonth() + 1;
   let year = newDate.getFullYear();

   return `${year}-${month<10?`0${month}`:`${month}`}-${date}`
   }

  function fore(values){
    return <List title={res[values].title} task={res[values].task}/>
  }

  async function deletetask(e){
   let a=Number(e.target.id);
  await axios.delete(`https://todolistapi.zebsy.in/todo/${a}`,{headers:{'usertoken':localStorage.getItem('token')}},{});
  }


  async function todosub(e)
  {
   e.preventDefault();  
   await axios.post(`https://todolistapi.zebsy.in/todo`,list,{headers:{'usertoken':localStorage.getItem('token')}})
   setList({title:"",
   task:""})

  }

  function logout()
  {
   localStorage.setItem('token',null)
   navigate('/login')
  }

  return(
  <div>
   <center>
   <form onSubmit={todosub}>

    <br/>

   <input type="text" name="title" value={title} onChange={change} placeholder="title" />

   <br/>

   <input style={{margin:"10px"}} type="text" name="task" value={task} onChange={change} placeholder="task" />

   <br/>

   <input className="logininput" type="submit"/>

   </form>

   <button className="logininput" onClick={logout} >logout</button>

   </center>

   <br/>

   <br/>

   <div className="list">

   {Object.keys(res).map((values,i)=> {return(<div> 

    <List key={i} date={getCurrentDate()} title={res[values].title} task={res[values].task} />

     <button className='logininput' id={i} onClick={deletetask} >delete</button> 

     <br/>

     <hr></hr>

     </div> )})}

   </div>  

   

  </div>



 )

}



export default Todo;
