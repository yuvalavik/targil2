import Chatslist from '../chatslist/Chatslist';
import React, { useRef, useEffect } from 'react';


function contactArr({ curuser }) { 


  if (!curuser || !curuser.contacts || curuser.contacts.length === 0) {
    console.log(curuser.contacts);
    return null;
  }
  

  const contactComponents = curuser.contacts.map((contact, index) => (

    <Chatslist
      key={index}
      iname={contact.name} 
      itime="10/11/2023 12:33 PM" 
      iicon="user-icon-male"
    />
    
  ));

  return(

    <div>
        {contactComponents}
    </div>
   
  );
}

export default contactArr;