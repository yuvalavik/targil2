import { useState } from 'react';

function Inputfield({itype, id, iplaceholder, ilabel, iicon}) {
  const [error, setError] = useState(false);
 
  function handleInputChange(event) {
    const passwordRegex = /^(?=.*[A-Z]).{8,}$/; // Regular expression to match a password with at least one capital letter and a length of at least 8 characters
    const value = event.target.value;
    if (id === 'password') {
      if (value.length < 8 || !passwordRegex.test(value)) { // Check if the password meets the criteria
        setError(true);
      } else {
        setError(false);
      }
    } else if (id === 'confirm-password') {
      if (value !== document.getElementById('password').value) {
        setError(true);
      } else {
        setError(false);
      }
    } else {
      setError(false);
    }
  }

  return(
    <div className="form-group">
      <label htmlFor={id}>
        <span className={iicon}/> {ilabel}:
      </label>
      <input
        type={itype}
        className="form-control"
        id={id}
        placeholder={iplaceholder}
        required
        onChange={handleInputChange}
      />
      {error && <p>{id === 'password' ? 'Password must be at least 8 characters with at list one capital letter' : 'Passwords do not match'}</p>}
      
    </div>
  );
}

export default Inputfield;
