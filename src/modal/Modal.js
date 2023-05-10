
import Profile from '../images/profile.png';
import React, { useState } from 'react';

function Modal({setcuruser, user, curuser ,setcurContact}) {
  const [error, setError] = useState(null);
  function handleAddClick(event){

    const inputEl = document.getElementById('newname');
    const inputValue = inputEl.value;
    const userNames = user.map(u => u.name);
    if (!userNames.includes(inputValue)) {
      setError('Contact ID does not match any user.');
    }
    else {
      const contactNames = curuser.contacts.map(c => c.name);
      if (contactNames.includes(inputValue)) {
        setError('This user is already a contact.');
      }else{
        const curcontucts= curuser.contacts;
        if(curcontucts.includes(inputValue)){
          setError('This user is already a contact.');
          return;
        }
        const temp = { ...curuser };
        temp.contacts.push({ name: inputValue });
        setcuruser(temp);
        document.getElementById('newname').value = '';
        setError(null);
        document.getElementById('exampleModal').classList.remove('show');
        document.body.classList.remove('modal-open');
        document.querySelector('.modal-backdrop').remove();
        setcurContact(inputValue);
      }
    }
    
    

  }
  return (
    <>
      <button
        type="button"
        className="btn btn-link p-0"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <img
          src={Profile}
          alt="prof"
          width="15px"
          className="icon"
        />
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Add new contact
              </h5>
 
            </div>
            <div className="modal-body">
              <center>
                <input
                  type="text"
                  id="newname"
                  name="name"
                  placeholder="Contact ID"
                />
                 {error && <div className="text-danger">{error}</div>} 
              </center>
            </div>
            <div className="modal-footer">
              <div className="col-md-6">
                <button
                  type="button"
                  className="btn btn-danger"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
              </div>
              <div className="col-md-6 text-right">
                <button type="button" className="btn btn-success" onClick={handleAddClick}>
                  Add
                </button>
              </div>
              <br></br>
             
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}
export default Modal;
