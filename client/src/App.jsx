import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import { Routes, Route } from 'react-router-dom';
import ViewCustomer from './components/ViewCustomer';
import AddCustomer from './components/AddCustomer';



function App() {

  // const fetchAPI = async () => {
  //   const response = await axios.get('http://localhost:5000/users');
  //   console.log(response.data);
  // };

  // useEffect(() => {
  //   fetchAPI();
  // },[]);


  return (
    <>
      <Routes>
      <Route path='/customer/:id' element={<ViewCustomer />} />
      <Route path='/add_customer' element={<AddCustomer />}></Route>
      </Routes>
    </>
  )
}

export default App
