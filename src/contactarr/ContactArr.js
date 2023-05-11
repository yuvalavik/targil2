import Chatslist from '../chatslist/Chatslist';
import React, { useRef, useEffect } from 'react';


function contactArr({ curuser, setcurser, setcurContact,curContact,user }) { 


  if (!curuser || !curuser.contacts || curuser.contacts.length === 0) {
    console.log(curuser.contacts);
    return null;
  }
  

  const contactComponents = curuser.contacts.map((contact, index) => (

    <Chatslist
      key={index}
      iname={contact.name} 
      itime="10/11/2023 12:33" 
      iicon="user-icon-male"
      curuser={curuser}
      setcuruser={setcurser}
      setcurContact={setcurContact}
      curContact={curContact}
      user={user}
    />
    
  ));

  return(

    <div>
        {contactComponents}
    </div>
   
  );
}

export default contactArr;