import React,{useState} from 'react'
import './About.css'; 

export default function Modal() {
    const [modal, setModal] = useState(false);
  
    const toggleModal = () => {
      setModal(!modal);
    };
  
    if(modal) {
      document.body.classList.add('active-modal')
    } else {
      document.body.classList.remove('active-modal')
    }
  
    return (
      <>
        <button onClick={toggleModal} className="btn-modal">
          About
        </button>
  
        {modal && (
          <div className="modal">
            <div onClick={toggleModal} className="overlay"></div>
            <div className="modal-content ">
              <div className='text-2xl mb-6'>About SqlGPT</div>
              <p>
              SQLGPT is your intelligent database query companion, built to turn natural language into precise SQL queries in seconds. Whether you're a beginner or a data pro, SQLGPT helps you focus on the logic, not the syntax—making database interaction simpler, faster, and more intuitive.  </p>
              <button className="close-modal" onClick={toggleModal}>
                Close
              </button>
            </div>
          </div>
        )}
        
      </>
    );
  }