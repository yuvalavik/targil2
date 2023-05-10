import Message from "../message/Message";
import React, { useRef, useEffect } from 'react';


function MesArr({ curuser }) {

    const containerRef = useRef(null);
    useEffect(() => {
      if (containerRef.current) {
        console.log("hgf")
        containerRef.current.scrollTop = containerRef.current.scrollHeight;
      }
    }, [curuser.messages]); 


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

  return(

<div className="message-container" ref={containerRef}>
        <div className="flex-row justify-content-start mb-4 mr-16">
          <time dateTime="YYYY-MM-DDTHH:MM:SS" id="chatDate" className="">
            10/11/2023
          </time>
        </div>
    {messageComponents}
    </div>
   
  );
}

export default MesArr;
