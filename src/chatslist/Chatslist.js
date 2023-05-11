import { useState,useEffect } from 'react';

function Chatslist({ iname, itime, iicon, iclass, curuser, setcuruser, setcurContact,curContact }) {
  const [isSelected, setIsSelected] = useState(false);

  function handleClick(event) {
    event.preventDefault();
    setcurContact(iname);
    setIsSelected(true);
  }

  // Update isSelected state of other components
  function updateSelectedStatus() {
    if (curContact === iname) {
      setIsSelected(true);
    } else {
      setIsSelected(false);
    }
  }

  // Call updateSelectedStatus when curuser changes
  useEffect(() => {
    updateSelectedStatus();
  }, [curContact]);

  return (
    <a
      href="#"
      className={`list-group-item list-group-item-action d-flex align-items-center contactss ${isSelected ? 'active' : ''}`}
      onClick={handleClick}
    >
      <div className={iicon} />
      <span className={`ml-2 chatcontacts `}>{iname}</span>
      <span className="ml-auto">
        <time dateTime="YYYY-MM-DDTHH:MM:SS">{itime}</time>
      </span>
    </a>
  );
}

export default Chatslist;