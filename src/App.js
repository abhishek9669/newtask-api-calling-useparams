
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function App() {
  //state
  const [data,setData] = useState([]);

  let navigate = useNavigate();
  useEffect(() => {
    getData();
  },[])



  //function
  let getData = async()=>{
    try {

      let mydata = await axios.get("https://jsonplaceholder.typicode.com/posts")
      setData(mydata.data)
      
    } catch (error) {
      console.log(error)
      
    }

  }

  let getid = (id) => {
    navigate("/home/"+id+"")
  }


  //return
  return (
    <div className="App">
      <h1>api calling task</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>userId</th>
            <th>id</th>
            <th>title</th>
            <th>body</th>
          </tr>
        </thead>
        <tbody>

          {
            data.length > 0 && 
            data.map((cv)=>{
              console.log(cv)
              var id = cv.id
              return (
                <tr>
                  <td>{cv.userId}</td>
                  <td>{cv.id}</td>
                  <td onClick={()=>{getid(id)}}>{cv.title}</td>
                  <td>{cv.body}</td>
                </tr>


              )

            })
          }
         
        </tbody>
      </Table>

    </div>
  );
}

export default App;
