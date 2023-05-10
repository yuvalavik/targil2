import React, { useState,useEffect } from 'react';

function Message({curuser, setcuruser}) {

function sendMessage() {

    const mes = document.getElementById('message');
    const userMes = {...curuser};
    setcuruser(userMes);
    // const messageContainer = document.querySelector('.message-container');
    // messageContainer.scrollTop = messageContainer.scrollHeight; 
    userMes.messages = userMes.messages ? [...userMes.messages, mes.value] : [mes.value];
    setcuruser(userMes);
    console.log(curuser.messages);
    }
    return(
<div className="input-group-append">
<button className="btn btn-success" type="button" id="button-send" onClick={sendMessage}>
  Send
</button>
</div>
  );
}
  
export default Message;