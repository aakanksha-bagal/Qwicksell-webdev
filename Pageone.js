import React, {useState,useEffect} from "react";
import { IoPersonCircle } from "react-icons/io5";
import { HiDotsHorizontal } from "react-icons/hi";
import { FaPlus } from "react-icons/fa6";
import { PiTicketBold } from "react-icons/pi";
import { FaCircle } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa";
import { BsCircleHalf } from "react-icons/bs";
import { BsCheckCircleFill } from "react-icons/bs";
import { RxCrossCircled } from "react-icons/rx";
import './App.css';


function Pageone(){
    
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

        const backlogTickets = data.tickets.filter(ticket => ticket.status === 'Backlog');
        const todoTickets = data.tickets.filter(ticket => ticket.status === 'Todo');
        const inProgressTickets = data.tickets.filter(ticket => ticket.status === 'In progress');
        const doneTickets = data.tickets.filter(ticket => ticket.status === 'Done');
        const cancelledTickets = data.tickets.filter(ticket => ticket.status === 'Cancelled');

       

   return (
  <div className="page-bottom">
    <div className='col-3 first'>
        <div className='header-class'>
          <div className='con col-2'><PiTicketBold/></div>
          <div className='con-text  col-12' >Backlog </div>
          <div className='col-1 con-text con '>2</div>
          <div className='con col-2'><FaPlus/></div>
          <div className='con col-2'><HiDotsHorizontal/></div>
            

        </div>
      
      {backlogTickets.map((tickets)=>(
        
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
          <div className='con col-2'><FaRegCircle/></div>
          <div className='con-text  col-12' >Todo </div>
          <div className='col-1 con-text con '>3</div>
          <div className='con col-2'><FaPlus/></div>
          <div className='con col-2'><HiDotsHorizontal/></div>
            

        </div>
        {todoTickets.map((tickets)=>(
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
          <div className='con col-2'><BsCircleHalf/></div>
          <div className='con-text  col-12' >In Progress </div>
          <div className='col-1 con-text con '>5</div>
          <div className='con col-2'><FaPlus/></div>
          <div className='con col-2'><HiDotsHorizontal/></div>
            

        </div>
        {inProgressTickets.map((tickets)=>(
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
          <div className='con col-2'><BsCheckCircleFill/></div>
          <div className='con-text  col-12' >Done</div>
          <div className='col-1 con-text con '>0</div>
          <div className='con col-2'><FaPlus/></div>
          <div className='con col-2'><HiDotsHorizontal/></div>
            

        </div>
        {doneTickets.map((tickets)=>(
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
          <div className='con col-2'><RxCrossCircled/></div>
          <div className='con-text  col-12' >Cancelled</div>
          <div className='col-1 con-text con '>0</div>
          <div className='con col-2'><FaPlus/></div>
          <div className='con col-2'><HiDotsHorizontal/></div>
            

        </div>
        {cancelledTickets.map((tickets)=>(
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

export default Pageone;