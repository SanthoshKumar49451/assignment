import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Glance from './components/Glance'
import Insights from './components/Insights'
import Tables from './components/Tables'
import Aside from './components/Aside'
import Chatbot from './components/Chatbot'



const App = () => {
  return (
    <div className='flex w-full ' >
      <div>
      <Aside/>
      <Chatbot/>
      </div>
      <div>
      <Navbar/>
      <Glance/>
      <Insights/>
      <Tables/>

      </div>
         
    
      
    </div>
  )
}

export default App