import Profile from '../images/profile.png';

function Modal({setcuruser, user}) {
  
  return (
    <>
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
                  data-bs-dismiss="modal"
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
    </>
  );
}

export default Modal;
