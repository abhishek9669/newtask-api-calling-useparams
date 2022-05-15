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
    <Table striped bordered hover>
    <thead>
      <tr>
        <th>UserID</th>
        <th>id</th>
        <th>Title</th>
        <th>Body</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{data.userId}</td>
        <td>{data.id}</td>
        <td>{data.title}</td>
        <td>{data.body}</td>
      </tr>
    </tbody>
  </Table> 
  )
}
