import React, { useState,useEffect } from 'react';

function Subbutton({itype, setUser, user}) {
  const [error, setError] = useState(null); // state to store error message

  function handleClient(event) {
     // prevent form submission


    const form = event.target.form;
    if (form.checkValidity()) { // Check if all required inputs are filled
      event.preventDefault();
      const passwordRegex = /^(?=.*[A-Z]).{8,}$/; // Regular expression to match a password with at least one capital letter and a length of at least 8 characters
      const passwordInput = document.getElementById('password');
      const confirmPasswordInput = document.getElementById('confirm-password');
      const displayNameInput = document.getElementById('display-name');
      const picture = document.getElementById('picture');
      const name = document.getElementById('name');
  
      if (itype === 'Register') {
        if (!passwordRegex.test(passwordInput.value)) { // Check if the password meets the criteria
          setError('Password should be at least 8 characters long and contain at least one uppercase letter.');
        } else if (passwordInput.value !== confirmPasswordInput.value) {
          setError('Password and confirm password do not match.');
        } else {
          setError(null); // clear the error
          
          const newUser = {
            name: name.value,
            password: passwordInput.value,
            displayName: displayNameInput.value,
            picture: picture.value
          };
          setUser([...user, newUser]);
        }
      } else { {/* LOGIN*/}
        setError(null); // clear the error
        // continue with form submission
      }
    } else{
      setError(null);
    }
  }
  useEffect(() => {
    console.log('New user added:', user);
  }, [user]);

  return(
    <div className="row">
      <div className="col-6 mx-auto text-center">
        <button type="submit" className="btn btn-primary btn-block" onClick={handleClient}>
          {itype}
        </button>
        {error && <div className="text-danger">{error}</div>} {/* show error message */}
      </div>
    </div>
  );
}

export default Subbutton;

