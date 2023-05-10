import Message from "../message/Message";
import React, { useRef, useEffect } from 'react';


function MesArr({ curuser }) {
    // const mesRef = useRef(null)
    // useEffect (()=>{
    //     mesRef.current.scrollTop = mesRef.current.scrollHeight

    // },[curuser.messages])
    console.log(curuser.messages);
  if (!curuser || !curuser.messages || curuser.messages.length === 0) {
    console.log(curuser);
    console.log("ff");
    return null;
  }

  const messageComponents = curuser.messages.map((message, index) => (
    <Message
      key={index}
      side="user-ms ml-84"
      content={message}
      color="rgba(26, 6, 241, 0.575)"
    />
  ));

  return <>{messageComponents}</>;
}

export default MesArr;
