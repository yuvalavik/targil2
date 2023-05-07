function Subbutton({itype}){
    return(
        <div className="row">
        <div className="col-md-6 col-md-offset-3">
          <button type="submit" className="btn btn-primary btn-block">
            {itype}
          </button>
        </div>
      </div>
    );
}
export default Subbutton;
