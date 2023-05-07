import './Register.css';
import Inputfield from '../inputfield/Inputfiled';
import friends from '../images/friends.jpeg';
import Subbutton from '../subbutton/Subbuttun';
import Imageinput from '../imageinput/Imageinput';

function Register() {
  return (
    <>
    <title>Friends Registration</title>
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
    />
    <link rel="stylesheet" type="text/css" href="register.css" />
    <h1 style={{ fontSize: 35 }} className="name">
      Friends
    </h1>
    <link rel="icon" type="image/jpg" href="message.jpg" />
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <h2>Register</h2>
            <form>
            <Inputfield itype = "text" id="name" iplaceholder="Enter name" ilabel = "Username" iicon = "glyphicon glyphicon-user" />
            <Inputfield itype = "password" id="password" iplaceholder="Enter password" ilabel = "password" iicon = "glyphicon glyphicon-lock" />
            <Inputfield itype = "password" id="confirm-password" iplaceholder="Confirm password" ilabel = "confirm-password" iicon = "glyphicon glyphicon-lock" />
            <Inputfield itype = "text" id="display-name" iplaceholder="Display name" ilabel = "Display name" iicon = "glyphicon glyphicon-user" />
            <Imageinput />
              

              <div className="row">
                <div className="col-md-6 col-md-offset-3">
                  <img                 
                    id="friendspic"                  
                    className="img-responsive center-block"
                  />
                </div>
              </div>
              <br />
              <Subbutton itype = "Register"/>
              <center>
                <p>
                  Already registered? <a href="loginFrame.html">Click here</a> to
                  login
                </p>
              </center>
            </form>
          </div>
        </div>
      </div>
    </div>
  </>
  
  );
}

export default Register;