import React, { useState,useEffect } from 'react';

function Message({curuser, setcuruser}) {

function sendMessage() {

    const mes = document.getElementById('message');
    // console.log(mes.value);
    const userMes = {...curuser};
    setcuruser(userMes);
    //console.log(`Name: ${curuser.name}`);
    //setMessage
    userMes.messages = userMes.messages ? [...userMes.messages, mes.value] : [mes.value];
    //userMes.messages = [...userMes.messages, mes.value]; 
    //user.messages = [...user.messages, new_msg]{...user}
    setcuruser(userMes);
    // console.log(userMes.messages);
    // console.log(curuser.messages);
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