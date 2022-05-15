import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';
import { useParams } from 'react-router-dom'

export default function Home() {

    //state is

    const [data,setData] = useState([]);
    let params =useParams();
    console.log(params.id)
    useEffect(()=>{
        getData();
    },[])
    let getData =async()=>{
        try {

            let mydata = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
            setData(mydata.data)
            
          } catch (error) {
            console.log(error)
            
          }
        
    }


    //function

    //return statment
  return (
      <div>
            <h3>userId = {data.userId}</h3>
        <h3>id = {data.id}</h3>
        <h3>title = {data.title}</h3>
        <h3>body = {data.body}</h3>

      </div>
   
      
     
  )
}
