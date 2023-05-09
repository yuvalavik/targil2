import './Chat.css';
import Message from '../message/Message';
import MesArr from '../mesarr/MesArr';
import Profile from '../images/profile.png';
import Chatslist from '../chatslist/Chatslist';
import Modal from '../modal/Modal';
import Logoutbtn from '../logoutbtn/Logoutbtn';
import Send from '../send/Send';

function Chat({curuser, setcuruser}) {
  console.log(curuser.name);
  return (
<>
  <title>Friends</title>
  <center>
    <h1 style={{ fontSize: 60 }}>Friends</h1>
  </center>
  <Logoutbtn />
  <div className="container">
    <div className="row rowChat">
      <div className="col-md-5 padd">
        <div className="list-group">
          <a
            href="#"
            id="myInfo"
            className="list-group-item-action d-flex align-items-center me"
          >
            <div className="user-icon" />
            <span className="ml-2">{curuser.displayName}</span>
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
              <Modal />

            </span>
          </a>
          <Chatslist iname="Yossi" itime="10/11/2023 12:33 PM" iicon="user-icon-male" />
          <Chatslist iname="Tal" itime="10/11/2023 11:33 PM" iicon="user-icon-female" />
        </div>
      </div>
      <div className="col-md-7 padd scroll">
        <a
          href="#"
          id="chatInfo"
          className="list-group-item list-group-item-action d-flex align-items-center me"
        >
          <div className="user-icon-female" />
          <span className="ml-2">Tal</span>
        </a>
        <div className="message-container">
        <div className="flex-row justify-content-start mb-4 mr-16">
          <time dateTime="YYYY-MM-DDTHH:MM:SS" id="chatDate" className="">
            10/11/2023
          </time>
        </div>
        
        <MesArr curuser={curuser} />
        <Message side = "user-ms ml-84" content="hellow" color="rgba(26, 6, 241, 0.575)" />
        <Message side = "ml-auto friend-ms" content="hellow ffffff" color="rgba(26, 241, 6, 0.668)" />
    </div>
        <div className="input-group mt-auto ">
          <input
            type="text"
            id='message'
            className="form-control"
            placeholder="Type a message"
            aria-label="Type a message"
            aria-describedby="button-send"
          />
          <Send curuser={curuser} setcuruser={setcuruser} />
          {/* <div className="input-group-append">
            <button className="btn btn-success" type="button" id="button-send">
              Send
            </button>
          </div> */}
        </div>
      </div>
    </div>
  </div>
</>
  );
}

export default Chat;
