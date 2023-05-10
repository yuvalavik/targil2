import React, { useState,useEffect } from 'react';

function Message({curuser, setcuruser}) {

  function sendMessage() {
    const date = new Date();
    const time = date.toLocaleTimeString();
    const mesa = document.getElementById('message');
    const mes = mesa.value + ' ' + time;
    const userMes = {...curuser};
    setcuruser(userMes);
    userMes.messages = userMes.messages ? [...userMes.messages, mes] : [mes];
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