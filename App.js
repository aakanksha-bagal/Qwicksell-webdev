
import './App.css';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
// import { TbCircleDashed } from "react-icons/tb";
import User from './User'
import Priority from './Priority'


import Pageone from './Pageone';



function App() {
 
const [maindropdown, setMaindropdown]  = useState(false);
const [grouping, setGrouping] = useState(false);

const toggleMainDropdown = ()=>{
  setMaindropdown(!maindropdown);

}
const toggleGrouping = () =>{
  setGrouping(!grouping)
}

const[status,setStatus] = useState(true)
const[user, setUser] = useState(false)
const [priority,setPriority] = useState(false)

// useEffect(()=>{
//   if(status){
//     setStatus(true);
//   }
//   if(user){
//     setUser(true);
//   }
//   if(priority){
//     setPriority(true);
//   }
// })

const toggleStatus = () => {
  setStatus(true);
  setUser(false);
  setPriority(false);
}
const toggleuser = () => {
  setUser(true);
  setStatus(false);
  setPriority(false);
}
const togglePriority = () => {
  setPriority(true);
  setStatus(false);
  setUser(false);
}

 
  return (
    <div className='containter'>
      <div className="page-header">
      
      <div className='dropdown-box' >
        <button onClick={toggleMainDropdown} className='drop-btn'>
          <HiAdjustmentsHorizontal className='btn-icon'/>
          Display
          <MdKeyboardArrowDown className='btn-icon'/>
          
          
          </button>
         {maindropdown && (
          <div >
            <div className='dropdown-menu'>
              <div className='grouping'>Grouping</div> 
              <button onClick={toggleGrouping} className='group-btn'>
                {status ? <p className='btn-label'>Status</p> : null}
                {user? <p className='btn-label'>User</p>: null}
                {priority? <p className='btn-label'>Priority</p>: null}
                {
                  grouping && (
                    <div className='second-menu'>
                      <div className='menu-opn' onClick={toggleStatus}>Status</div>
                      <div className='menu-opn' onClick={toggleuser}>User</div>
                      <div className='menu-opn' onClick={togglePriority}>Priority</div>
                    </div>
                    
                  )
                }
                
              </button>
            </div>
            
          </div>
         )}
      </div>
    </div>



    <div>
      {status && (<Pageone/>)}
      {user && (<User/>)}
      {priority && (<Priority/>)}
      
     

    </div>
    </div>
    
    
  );
}

export default App;
