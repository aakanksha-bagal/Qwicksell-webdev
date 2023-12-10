import React, {useState,useEffect} from "react";
import { IoPersonCircle } from "react-icons/io5";
import { HiDotsHorizontal } from "react-icons/hi";
import { FaPlus } from "react-icons/fa6";

import { FaCircle } from "react-icons/fa";

import { BsBarChartFill } from "react-icons/bs";
import { BsExclamationSquareFill } from "react-icons/bs";
import { MdSignalCellularAlt2Bar } from "react-icons/md";
import { MdOutlineSignalCellularAlt1Bar } from "react-icons/md";
import { BiDotsHorizontal } from "react-icons/bi";
import './App.css';


function Priority(){
    
        const [data, setData] = useState({ tickets: [], users: [] });
        
        useEffect(() => {
          const apiUrl = 'https://api.quicksell.co/v1/internal/frontend-assignment';
      
          fetch(apiUrl)
            .then(response => {
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              return response.json(); 
            })
            .then(data => {
            //   console.log(data);
      
              setData(data);
            })
            .catch(error => {
              console.error('There was a problem with the fetch operation:', error);
            });

           
            
        }, []); 

        const Urgent = data.tickets.filter(ticket => ticket.priority === 4);
        const High = data.tickets.filter(ticket => ticket.priority === 3);
        const Medium = data.tickets.filter(ticket => ticket.priority === 2);
        const Low = data.tickets.filter(ticket => ticket.priority === 1);
        const NoPriority = data.tickets.filter(ticket => ticket.priority === 0);

       

   return (
  <div className="page-bottom">
    <div className='col-3 first'>
        <div className='header-class'>
          <div className='con col-2'><BsExclamationSquareFill/></div>
          <div className='con-text  col-12' >Urgent </div>
          <div className='col-1 con-text con '>1</div>
          <div className='con col-2'><FaPlus/></div>
          <div className='con col-2'><HiDotsHorizontal/></div>
            

        </div>
      
      {Urgent.map((tickets)=>(
        
        <div className='card'>
        <div className='line-one'>
          <div>{tickets.id}</div>
          <div><IoPersonCircle/></div>
        </div>

        <div className='line-two'>
          <p className='text-text'>{tickets.title}</p>
        </div>

        <div className='line-three'>
          <button className='card-btn'><HiDotsHorizontal/></button>
          <button className='feat-req'> 
          <div className='col-2'><FaCircle/> </div>
          <div className='col-10'>Feature request</div>
          </button>
        </div>

    </div>
      ))}
      </div> 
      <div className='col-3 second'>
        <div className='header-class'>
          <div className='con col-2'><BsBarChartFill/></div>
          <div className='con-text  col-12' >High </div>
          <div className='col-1 con-text con '>3</div>
          <div className='con col-2'><FaPlus/></div>
          <div className='con col-2'><HiDotsHorizontal/></div>
            

        </div>
        {High.map((tickets)=>(
             <div className='card'>
             <div className='line-one'>
               <div>{tickets.id}</div>
               <div><IoPersonCircle/></div>
             </div>
 
             <div className='line-two'>
               <p className='text-text'>{tickets.title}</p>
               
             </div>
 
             <div className='line-three'>
               <button className='card-btn'><HiDotsHorizontal/></button>
               <button className='feat-req'> 
               <div className='col-2'><FaCircle/> </div>
               <div className='col-10'>Feature request</div>
               </button>
             </div>
 
         </div>
        ))}
       
        
      </div>
      <div className='col-3 third'>
        <div className='header-class'>
          <div className='con col-2'><MdSignalCellularAlt2Bar/></div>
          <div className='con-text  col-12' >Medium</div>
          <div className='col-1 con-text con '>2</div>
          <div className='con col-2'><FaPlus/></div>
          <div className='con col-2'><HiDotsHorizontal/></div>
            

        </div>
        {Medium.map((tickets)=>(
        <div className='card'>
            <div className='line-one'>
              <div>{tickets.id}</div>
              <div><IoPersonCircle/></div>
            </div>

            <div className='line-two'>
              <p className='text-text'>{tickets.title}</p>
              
            </div>

            <div className='line-three'>
              <button className='card-btn'><HiDotsHorizontal/></button>
              <button className='feat-req'> 
              <div className='col-2'><FaCircle/> </div>
              <div className='col-10'>Feature request</div>
              </button>
            </div>

        </div>

        ))}
        

      </div>
      <div className='col-3 fourth'>
        <div className='header-class'>
          <div className='con col-2'><MdOutlineSignalCellularAlt1Bar/></div>
          <div className='con-text  col-12' >Low</div>
          <div className='col-1 con-text con '>3</div>
          <div className='con col-2'><FaPlus/></div>
          <div className='con col-2'><HiDotsHorizontal/></div>
            

        </div>
        {Low.map((tickets)=>(
            <div className='card'>
            <div className='line-one'>
              <div>{tickets.id}</div>
              <div><IoPersonCircle/></div>
            </div>

            <div className='line-two'>
              <p className='text-text'>{tickets.title}</p>
              
            </div>

            <div className='line-three'>
              <button className='card-btn'><HiDotsHorizontal/></button>
              <button className='feat-req'> 
              <div className='col-2'><FaCircle/> </div>
              <div className='col-10'>Feature request</div>
              </button>
            </div>

        </div>
        ))}
        
        
        

      </div>
      <div className='col-3 fifth'>
        <div className='header-class'>
          <div className='con col-2'><BiDotsHorizontal/></div>
          <div className='con-text  col-12' >No Priority</div>
          <div className='col-1 con-text con '>1</div>
          <div className='con col-2'><FaPlus/></div>
          <div className='con col-2'><HiDotsHorizontal/></div>
            

        </div>
        {NoPriority.map((tickets)=>(
            <div className='card'>
            <div className='line-one'>
              <div>{tickets.id}</div>
              <div><IoPersonCircle/></div>
            </div>

            <div className='line-two'>
              <p className='text-text'>{tickets.title}</p>
              
            </div>

            <div className='line-three'>
              <button className='card-btn'><HiDotsHorizontal/></button>
              <button className='feat-req'> 
              <div className='col-2'><FaCircle/> </div>
              <div className='col-10'>Feature request</div>
              </button>
            </div>

        </div>
        ))}
       
        

      </div>
    </div>
   );
}

export default Priority;