// App.jsx

import React, { useState, useEffect } from 'react';
import DataTable from './datatable';
import './styles/App.css'
import Modal from 'react-modal'
import MyModal from './Modal/Modal';




function App() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const openModal = () => {
    setModalIsOpen(true)
  };

  const closeModal = () => {
    setModalIsOpen(false)
  };


  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:3000/api/standings")
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setGames(data); // Assuming the API response is an object with a 'matches' property
      })
      .catch(error => {
        console.error('An error occured:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>     
    <body>
      <dialog data-modal>
        <div>Choose team</div>
        <button data-close-modal>Close</button>
      </dialog>


      <div className='container'>
      <header>
        
        <nav className='navBar'>
        <img className='logo' height='40px' width='40px' src='https://speckyboy.com/wp-content/uploads/2021/09/simple-logo-design-03.jpg' alt='logo'></img>
          <ul>
            <li className='item'><a href='#'>About</a></li>
            <li className='item'><a href='#'>Help</a></li>
          </ul>
          <a className='login' href='#'><button>Login</button></a>
        </nav>
        
      </header>
      
      <div>
        <button onClick={openModal}>Open Modal</button>
        <MyModal isOpen={modalIsOpen} closeModal={closeModal} />
      </div>

      <div className='main'>
        <nav className='leftPanel'>
          <ul>
          <li>Premier League</li>
          <li>Championship</li>
          <li>League 1</li>
          <li>League 2</li>
          </ul>
        </nav>

       
        {/*put in the gw slider using match.matchday from the api*/}
        <div className='table'>
        <DataTable data={games} />
        
        </div>
        
        <div className='rightPanel'>right panel</div>
      </div>
   
      

      <div className='footer'>footer</div>
      </div>
      </body>
    </>
  );
}

export default App;
