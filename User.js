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
import { TbCircleDashed } from "react-icons/tb";

import './App.css';

function User(){
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
              console.log(data);
      
              setData(data);
            })
            .catch(error => {
              console.error('There was a problem with the fetch operation:', error);
            });

           
            
        }, []); 

        const user1 = data.tickets.filter(user => user.userId === 'usr-1');
        const user2 = data.tickets.filter(user => user.userId === 'usr-2');
        const user3 = data.tickets.filter(user => user.userId === 'usr-3');
        const user4 = data.tickets.filter(user => user.userId === 'usr-4');
        const user5 = data.tickets.filter(user => user.userId === 'usr-5');

        console.log(user1,"user1")

        

    return(
        <>
      
            <div className="page-bottom">
            <div className='col-3 first'>    
                <div className='header-class'>
                  <div className='con col-2'><IoPersonCircle/></div>
                  <div className='con-text  col-12' >Anoop Sharma</div>
                  <div className='col-1 con-text con '>3</div>
                  <div className='con col-2'><FaPlus/></div>
                  <div className='con col-2'><HiDotsHorizontal/></div>
                </div>
               {
                user1.map((user)=>(
                <div className='card'>
                <div className='line-one'>
                  <div>{user.id}</div>
                 
                </div>
        
                <div className='line-two'>
                    <TbCircleDashed/>
                  <p className='text-text'>{user.title}</p>
                </div>
        
                <div className='line-three'>
                  <button className='card-btn'><HiDotsHorizontal/></button>
                  <button className='feat-req'> 
                  <div className='col-2'><FaCircle/> </div>
                  <div className='col-10'>Feature request</div>
                  </button>
                </div>
        
            </div>

                ))
               }
          
              </div> 
              <div className='col-3 second'>    
                <div className='header-class'>
                  <div className='con col-2'><IoPersonCircle/></div>
                  <div className='con-text  col-12' >Yogesh</div>
                  <div className='col-1 con-text con '>3</div>
                  <div className='con col-2'><FaPlus/></div>
                  <div className='con col-2'><HiDotsHorizontal/></div>
                </div>
               {
                user2.map((user)=>(
                <div className='card'>
                <div className='line-one'>
                  <div>{user.id}</div>
                 
                </div>
        
                <div className='line-two'>
                    <TbCircleDashed/>
                  <p className='text-text'>{user.title}</p>
                </div>
        
                <div className='line-three'>
                  <button className='card-btn'><HiDotsHorizontal/></button>
                  <button className='feat-req'> 
                  <div className='col-2'><FaCircle/> </div>
                  <div className='col-10'>Feature request</div>
                  </button>
                </div>
        
            </div>

                ))
               }
          
              </div> 
              <div className='col-3 third'>    
                <div className='header-class'>
                  <div className='con col-2'><IoPersonCircle/></div>
                  <div className='con-text  col-12' >Shankar Kumar</div>
                  <div className='col-1 con-text con '>1</div>
                  <div className='con col-2'><FaPlus/></div>
                  <div className='con col-2'><HiDotsHorizontal/></div>
                </div>
               {
                user3.map((user)=>(
                <div className='card'>
                <div className='line-one'>
                  <div>{user.id}</div>
                 
                </div>
        
                <div className='line-two'>
                    <TbCircleDashed/>
                  <p className='text-text'>{user.title}</p>
                </div>
        
                <div className='line-three'>
                  <button className='card-btn'><HiDotsHorizontal/></button>
                  <button className='feat-req'> 
                  <div className='col-2'><FaCircle/> </div>
                  <div className='col-10'>Feature request</div>
                  </button>
                </div>
        
            </div>

                ))
               }
          
              </div> 
              <div className='col-3 fourth'>    
                <div className='header-class'>
                  <div className='con col-2'><IoPersonCircle/></div>
                  <div className='con-text  col-12' >Ramesh</div>
                  <div className='col-1 con-text con '>1</div>
                  <div className='con col-2'><FaPlus/></div>
                  <div className='con col-2'><HiDotsHorizontal/></div>
                </div>
               {
                user4.map((user)=>(
                <div className='card'>
                <div className='line-one'>
                  <div>{user.id}</div>
                 
                </div>
        
                <div className='line-two'>
                    <TbCircleDashed/>
                  <p className='text-text'>{user.title}</p>
                </div>
        
                <div className='line-three'>
                  <button className='card-btn'><HiDotsHorizontal/></button>
                  <button className='feat-req'> 
                  <div className='col-2'><FaCircle/> </div>
                  <div className='col-10'>Feature request</div>
                  </button>
                </div>
        
            </div>

                ))
               }
          
              </div> 
              <div className='col-3 fifth'>    
                <div className='header-class'>
                  <div className='con col-2'><IoPersonCircle/></div>
                  <div className='con-text  col-12' >Suresh</div>
                  <div className='col-1 con-text con '>2</div>
                  <div className='con col-2'><FaPlus/></div>
                  <div className='con col-2'><HiDotsHorizontal/></div>
                </div>
               {
                user5.map((user)=>(
                <div className='card'>
                <div className='line-one'>
                  <div>{user.id}</div>
                 
                </div>
        
                <div className='line-two'>
                    <TbCircleDashed/>
                  <p className='text-text'>{user.title}</p>
                </div>
        
                <div className='line-three'>
                  <button className='card-btn'><HiDotsHorizontal/></button>
                  <button className='feat-req'> 
                  <div className='col-2'><FaCircle/> </div>
                  <div className='col-10'>Feature request</div>
                  </button>
                </div>
        
            </div>

                ))
               }
          
              </div> 
        
            </div>
        
        </>
        
    )
}

export default User;