import Message from "../message/Message";
import React, { useRef, useEffect } from 'react';

function MesArr({ curuser }) {


  if (!curuser || !curuser.messages || curuser.messages.length === 0) {
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

  return (
    <div >
      {messageComponents}
    </div>
  );
}

export default MesArr;
