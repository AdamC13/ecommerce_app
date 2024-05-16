import axios from 'axios';
import React, { useEffect } from 'react'
import { formToJSON } from 'axios';

function AddCustomer() {

    const fetchAPI = async () => {
        const hello = {"name": "Adam", "email": "acif333@gmail.com", "phone": "585-409-7283"}
        const response = await axios.post(`http://localhost:5000/add_customer`);
        body: hello
    };
    
    useEffect(() => {
        fetchAPI();
      },[]);

  return (
    <div>
      
    </div>
  )
}

export default AddCustomer
