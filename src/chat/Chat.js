import './Chat.css';
import Message from '../message/Message';
import ContactArr from '../contactarr/ContactArr';

import Chatslist from '../chatslist/Chatslist';
import Modal from '../modal/Modal';
import Logoutbtn from '../logoutbtn/Logoutbtn';
import Send from '../send/Send';
import React, { useRef, useEffect,useState } from 'react';
import MesArr from '../mesarr/MesArr';


function Chat({curuser, setcuruser,user}) {
  const [curContact, setcurContact] = useState(); // Initialize user state as an empty array
  console.log(curuser);
  return (
<>
  <title>Friends</title>
  <center>
    <h1 style={{ fontSize: 60 }}>Friends</h1>
  </center>
  <Logoutbtn />
  <div className="container">
    <div className="row rowChat">
      
      <div className="col-md-5 padd">
        <div className="list-group">
          <a
            href="#"
            id="myInfo"
            className="list-group-item-action d-flex align-items-center me"
          >
            <img src={curuser.picture} id='userpic'/>
            <span className="ml-2">{curuser.displayName}</span>
            <span className="ml-auto">
            
              <Modal setcuruser={setcuruser}  user={user} curuser={curuser}/>

            </span>
          </a>
          <ContactArr curuser={curuser} setcurser={setcuruser} setcurContact={setcurContact} curContact={curContact}/>

        </div>
      </div>
      <div className="col-md-7 padd ">
        <a
          href="#"
          id="chatInfo"
          className="list-group-item list-group-item-action d-flex align-items-center me"
        >
          <div className="user-icon-female" />
          <span className="ml-2">{curContact}</span>
        </a> 
          
        <MesArr curuser={curuser} />
        <div className="input-group mt-auto ">
          <input
            type="text"
            id='message'
            className="form-control"
            placeholder="Type a message"
            aria-label="Type a message"
            aria-describedby="button-send"
          />
          <Send curuser={curuser} setcuruser={setcuruser} />
        </div>
      </div>
    </div>
  </div>
</>
  );
}

export default Chat;
