import react,{useState} from 'react'
import axios from 'axios'
import './todolist.css'

function List(prop){

  return(
    <div style={{width:'80vw'}} className="todolist">
    <p>
    date:{prop.date}
    </p>
    <h4>
    title:{prop.title}
    </h4>
    <div style={{
width: '90vw',
wordWrap: 'break-word'
}}>task:{prop.task}
    </div>
    </div>
  )
}

export default List;