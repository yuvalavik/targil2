import './Register.css';
import Inputfield from './inputfield/Inputfiled';
import friends from './friends.jpeg';

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
              <div className="form-group">
                <label htmlFor="name">
                  <span className="glyphicon glyphicon-user" /> Username:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter name"
                  required=""
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">
                  <span className="glyphicon glyphicon-lock" /> Password:
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter password"
                  required=""
                />
              </div>
              <div className="form-group">
                <label htmlFor="confirm-password">
                  <span className="glyphicon glyphicon-lock" /> Confirm Password:
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="confirm-password"
                  placeholder="Confirm password"
                  required=""
                />
              </div>
              <div className="form-group">
                <label htmlFor="display-name">
                  <span className="glyphicon glyphicon-user" /> Display name:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="display-name"
                  placeholder="Display name"
                  required=""
                />
              </div>
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