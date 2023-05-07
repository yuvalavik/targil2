import { useState } from 'react';

function Inputfield({itype, id, iplaceholder, ilabel, iicon}) {
  const [error, setError] = useState(false);
 
  function handleInputChange(event) {
    if (id === 'password' && event.target.value.length < 8) {
      setError(true);
    } else if (id === 'confirm-password') {
      if (event.target.value !== document.getElementById('password').value) {
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
      {error && <p>{id === 'password' ? 'Password must be at least 8 characters' : 'Passwords do not match'}</p>}
      
    </div>
  );
}

export default Inputfield;
