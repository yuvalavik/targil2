import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';

function Subbutton(props) {
  const [error, setError] = useState(null); // state to store error message

  
  function handleClient(event) {

    const form = event.target.form;
    if (form.checkValidity()) { // Check if all required inputs are filled
      
      const passwordRegex = /^(?=.*[A-Z]).{8,}$/; // Regular expression to match a password with at least one capital letter and a length of at least 8 characters
      const passwordInput = document.getElementById('password');
      const confirmPasswordInput = document.getElementById('confirm-password');
      const displayNameInput = document.getElementById('display-name');
      const picture = document.getElementById('picture');
      const name = document.getElementById('name');
      const logname= document.getElementById('logname');
      const logpass=document.getElementById('logpassword');

  
      if (props.itype === 'Register') {
        
        if (!passwordRegex.test(passwordInput.value)) { // Check if the password meets the criteria
          setError('Password should be at least 8 characters long and contain at least one uppercase letter.');
          event.preventDefault();
        } else if (passwordInput.value !== confirmPasswordInput.value) {
          setError('Password and confirm password do not match.');
          event.preventDefault();
        } else {
          setError(null); // clear the error

          // continue with form submission
        const existingUser = props.user.find(u => u.name === name.value);
        if(existingUser){
            setError('This username allready exist');
            event.preventDefault();
        } else{
          const newUser = {
            name: name.value,
            password: passwordInput.value,
            displayName: displayNameInput.value,
            picture: props.image,
            contacts: [],
            messages: []
          };
          props.setUser([...  props.user,newUser]);
          }
        }
      } else { {/* LOGIN*/}
        setError(null); // clear the error
        // continue with form submission
        const existingUser = props.user.find(u => u.name === logname.value && u.password ===  logpass.value);

        if(!existingUser){
            setError('invalid username or password');
            event.preventDefault();
        } else{
          existingUser.contacts.push({ name: "John Doe"});
          // existingUser.contacts.forEach(contact => {
          //   console.log(`Name: ${contact.name}`);
          // });
          props.setcuruser(existingUser);
        }
      }
    } else{
      setError('Please fill all the fields');
      event.preventDefault();
    }
  }
  useEffect(() => {
    console.log('New user added:', props.user);
  }, [props.user]);


  return(
    <div className="row">
      <div className="col-6 mx-auto text-center">
      <Link to={props.itype === 'Register' ? '/' : '/chat'}>
        <button type="submit" className="btn btn-primary btn-block" onClick={handleClient}>
          {props.itype};
        </button>
        </Link>
        {error && <div className="text-danger">{error}</div>} {/* show error message */}

      </div>
    </div>
  );
}

export default Subbutton;

