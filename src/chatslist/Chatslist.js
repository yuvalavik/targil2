import { useState,useEffect } from 'react';

function Chatslist({ iname, itime, iicon, iclass, curuser, setcuruser, setcurContact,curContact, user }) {
  const [isSelected, setIsSelected] = useState(false);

  function handleClick(event) {
    event.preventDefault();
    const temp = user.find(usera => usera.name === iname);
    setcurContact(temp);
    setIsSelected(true);
  }

  // Update isSelected state of other components
  function updateSelectedStatus() {
    if (curContact.name === iname) {
      setIsSelected(true);
    } else {
      setIsSelected(false);
    }
  }

  // Call updateSelectconedStatus when curuser changes
  useEffect(() => {
    updateSelectedStatus();
  }, [curContact]);

  const tempUs = user.find(usera => usera.name === iname);
  const print = curuser.contacts.find(i => i.name == iname);
  const lastMessage = print.messages[print.messages.length - 1];


  return (
    <a
    href="#"
    className={`list-group-item list-group-item-action d-flex align-items-center contactss ${isSelected ? 'active' : ''}`}
    onClick={handleClick}
  >
    <img src={tempUs.picture} className='curcontact'/>
    
      <span className={`chatcontacts `}>{iname}</span>
      {lastMessage && (
        <div className='lastmss'>{lastMessage.content}</div>
      )}
      {lastMessage && (
        <span className='ml-auto'><time  dateTime="YYYY-MM-DDTHH:MM:SS">{lastMessage.time}</time></span>
      )}

    
  </a>
  );
}

export default Chatslist;