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
  // const pic = tempUs.picture;
 

  return (
    <a
      href="#"
      className={`list-group-item list-group-item-action d-flex align-items-center contactss ${isSelected ? 'active' : ''}`}
      onClick={handleClick}
    >
      <img src={tempUs.picture} className='curcontact'/>
      <span className={`ml-2 chatcontacts `}>{iname}</span>
      <span className="ml-auto">
        <time dateTime="YYYY-MM-DDTHH:MM:SS">{itime}</time>
      </span>
    </a>
  );
}

export default Chatslist;