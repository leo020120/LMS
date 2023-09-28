import React, {useState, useEffect, useRef} from "react";
import Modal from '../Modal/Modal';

// const initialteamSelectData = {
//     team: '',
//     user:'',
//     gw:''
// }

const teamSelect = (isOpen, onSubmit, onClose) => {

return (
    <Modal hasCloseBtn={true} isOpen={isOpen} onClose={onClose}>
        <form>
            <div><img src={match.homeTeam.crest}/></div>
          
            <button type='submit'>Confirm</button>
        </form>
    </Modal>
)
}

export default teamSelect 