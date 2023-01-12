
import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function UserList() {


    const [data, setData] = useState([]); // where to store the returned data
    const [error, setError] = useState(null); // where to store the coming errors
useEffect(() => {
const fetchUsers=async() =>{
const response = await fetch('https://jsonplaceholder.typicode.com/users')
const postsData = await response.json();
setData(postsData);

};
fetchUsers();
    }, []);
  return (
    <div style={{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"space-evenly",width:"1000px"}}>
      {data.map(course => (
          <Card style={{ width: '18rem' }}>
      
      <Card.Body>
        <Card.Title>{course.name}</Card.Title>
        <h3>{course.username}</h3>
        <Card.Text>
        {course.email}
        </Card.Text>
        <h5>{course.address.street}</h5>
        <Card.Text>
        {course.phone}
        </Card.Text>
        <h6>  {course.website}</h6>
        <Button variant="primary">  {course.company.name}</Button>
      </Card.Body>
    </Card>
       
      ))}
  </div>
  )
}
