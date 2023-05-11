import Message from "../message/Message";
import React, { useRef, useEffect } from 'react';


function MesArr({ curuser, curContact }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if ((!curuser || !curuser.contacts || curuser.contacts.length === 0) || !curContact || curContact.name === '') {
      return;
    }

    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [curuser, curContact]);

  if ((!curuser || !curuser.contacts || curuser.contacts.length === 0)) {
    return null;
  }

  if (!curContact || curContact.name === '') {
    return null;
  }


  const contact = curuser.contacts.find(c => c.name === curContact.name);


  const messageComponents = contact.messages.map((message, index) => (
    <Message
      key={index}
      side="user-ms ml-84"
      content={message.content}
      time={message.time}
      color="rgba(26, 6, 241, 0.575)"
    />
  ));

  return (
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