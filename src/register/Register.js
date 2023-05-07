import './Register.css';
import Inputfield from '../inputfield/Inputfiled';
import friends from '../images/friends.jpeg';

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
        
              
              <div className="form-group">
                <label htmlFor="picture">
                  <span className="glyphicon glyphicon-picture" /> Picture:
                </label>
                <input
                  type="file"
                  id="picture"
                  name="picture"
                  className="form-control-file"
                  accept="image/*"
                  required=""
                />
              </div>
              <div className="row">
                <div className="col-md-6 col-md-offset-3">
                  <img
                    src={friends}
                    id="friendspic"
                    alt="Friends"
                    className="img-responsive center-block"
                  />
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-md-6 col-md-offset-3">
                  <button type="submit" className="btn btn-primary btn-block">
                    Register
                  </button>
                </div>
              </div>
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