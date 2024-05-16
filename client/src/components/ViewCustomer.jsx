import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import {ListGroup, Button, Container, Card } from 'react-bootstrap'; 

function ViewCustomer() {
    const  { id } = useParams();
    const [info, setInfo ] = useState({});


    const fetchAPI = async () => {
        const response = await axios.get(`http://localhost:5000/customer/${id}`);
        console.log(response.data.email);
        // ====================================================================================================================================
        // CANNOT GET THIS TO WORK TO SAVE MY LIFE CAN i JUST GET A TIP PLEASE
        setInfo(response.data.email)
        // ====================================================================================================================================

        console.log(info)
      };
    
      useEffect(() => {
        fetchAPI();
      },[]);

      

  return (
    <div>
        {/* <Card className="border rounded mx-auto my-4 w-50" defaultActiveKey="#link1">
            <Card.Body>
            <Card.Title className="d-flex justify-content-around align-items-center" >
                {info.name}
            </Card.Title>
            <Card.Text>
                <p>Email: </p>{info.email}
                <p>Phone Number: </p>{info.phone}
            </Card.Text>
            <Button className='w-50' as={Link} to={`../Characterdetails/${index}`} variant='outline-success' onClick={() => setDetailToggle(!detailToggle)}>View Details</Button>

            </Card.Body>
        </Card> */}

    </div>
  )
}

export default ViewCustomer
