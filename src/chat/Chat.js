import './Chat.css';

import Profile from '../images/profile.png';
import Logout from '../images/logout.png';

function Chat() {
  return (
<>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
    integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
    crossOrigin="anonymous"
  />
  <link href="chat.css" rel="stylesheet" />
  <link rel="icon" type="image/jpg" href="message.jpg" />
  <title>Friends</title>
  <center>
    <h1 style={{ fontSize: 60 }}>Friends</h1>
  </center>
  <a href="loginFrame.html">


  <img src={Logout} className="button" alt="Log out of your account" />

  </a>
  <div className="container">
    <div className="row">
      <div className="col-md-5 padd">
        <div className="list-group">
          <a
            href="#"
            id="myInfo"
            className="list-group-item-action d-flex align-items-center me"
          >
            <div className="user-icon" />
            <span className="ml-2">me</span>
            <span className="ml-auto">
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
              {/* Modal */}
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
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">×</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <center>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          placeholder="Contact ID"
                        />
                      </center>
                    </div>
                    <div className="modal-footer">
                      <div className="col-md-6">
                        <button
                          type="button"
                          className="btn btn-danger"
                          data-dismiss="modal"
                        >
                          Cancel
                        </button>
                      </div>
                      <div className="col-md-6 text-right">
                        <button type="button" className="btn btn-success">
                          Add
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </span>
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action d-flex align-items-center contactss"
          >
            <div className="user-icon-male" />
            <span className="ml-2">Yossi</span>
            <span className="ml-auto">
              <time dateTime="YYYY-MM-DDTHH:MM:SS">10/11/2023 12:33 PM</time>
            </span>
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action active d-flex align-items-center contactss"
          >
            <div className="user-icon-female" />
            <span className="ml-2">Tal</span>
            <span className="ml-auto">
              <time dateTime="YYYY-MM-DDTHH:MM:SS">10/11/2023 12:33 PM</time>
            </span>
          </a>
        </div>
      </div>
      <div className="col-md-7 padd">
        <a
          href="#"
          id="chatInfo"
          className="list-group-item list-group-item-action d-flex align-items-center me"
        >
          <div className="user-icon-female" />
          <span className="ml-2">Tal</span>
        </a>
        <div className="flex-row justify-content-start mb-4 mr-16">
          <time dateTime="YYYY-MM-DDTHH:MM:SS" id="chatDate" className="">
            10/11/2023
          </time>
        </div>
        <div className="d-flex flex-row justify-content-start mb-4 mr-8 ms">
          <div
            className="p-3 ms-3 text-white user-ms ml-84"
            style={{
              borderRadius: 15,
              display: "inline-block",
              backgroundColor: "rgba(26, 6, 241, 0.575)"
            }}
          >
            <p className="small mb-0">Hello, how are you?.</p>
          </div>
        </div>
        <div className="d-flex flex-row justify-content-start mb-4 mr-8 ms">
          <div
            className="p-3 ml-auto ms-3 text-white friend-ms"
            style={{
              borderRadius: 15,
              display: "inline-block",
              backgroundColor: "rgba(26, 241, 6, 0.668)"
            }}
          >
            <p className="small mb-0">Hello, how are you?.</p>
          </div>
        </div>
        <div className="ms d-flex flex-row justify-content-start mb-4 mr-8 ms">
          <div
            className="p-3 ms-3 text-white user-ms ml-84"
            style={{
              borderRadius: 15,
              display: "inline-block",
              backgroundColor: "rgba(26, 6, 241, 0.575)"
            }}
          >
            <p className="small mb-0">Hello, how are you?.</p>
          </div>
        </div>
        <div className="input-group mt-auto ">
          <input
            type="text"
            className="form-control"
            placeholder="Type a message"
            aria-label="Type a message"
            aria-describedby="button-send"
          />
          <div className="input-group-append">
            <button className="btn btn-success" type="button" id="button-send">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</>
  );
}

export default Chat;
