import React, {useState, useEffect, useRef} from "react"
import Modal from 'react-modal'

//Initialise modal
Modal.setAppElement('#root');

function MyModal({isOpen, closeModal}) {
    return (
        <Modal isOpen={isOpen} onRequestClose={closeModal} contentLabel="Team Select Modal">
        <h2>Modal Content</h2>
        <p>This is modal content</p>
        <button onClick={closeModal}>Close Modal</button>

        </Modal>
      
    )
}


export default MyModal