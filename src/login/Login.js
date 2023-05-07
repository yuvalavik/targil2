import './Login.css';
import Inputfield from '../inputfield/Inputfiled';

function App() {
  return (
<>
{/* 
  //const fields = [{type: 'ddd', placeholder: 'vv'}]; */}


  <link href="loginFrame.css" rel="stylesheet" />
  <link href="background.css" rel="stylesheet" />
  <title>Friends</title>
  <link rel="icon" type="image/jpg" href="message.jpg" />
  <center>
    <h1 style={{ fontSize: 60 }}>Friends</h1>
  </center>
  <link
    rel="stylesheet"
    href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
  />
  
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="card">
          <h2>Login</h2>
          <form>

            <Inputfield itype = "text" id="name" iplaceholder="Enter name" ilabel = "Username" iicon = "glyphicon glyphicon-user" />
            <Inputfield itype = "password" id="password" iplaceholder="Enter password" ilabel = "Username" iicon = "glyphicon glyphicon-lock" />
            <br/>
            <div className="row">
              <div className="col-md-6 col-md-offset-3">
                <button type="submit" className="btn btn-primary btn-block">
                  Login
                </button>
              </div>
            </div>
            <center>
              <p>
                Not registered? <a href="register.html">Click here</a> to
                register
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

export default App;
