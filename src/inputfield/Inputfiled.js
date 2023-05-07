function Inputfield({itype, id, iplaceholder, ilabel, iicon}){
    return(
        <div className="form-group">
        <label htmlFor={id}>
          <span className={iicon}/> {ilabel}:
        </label>
        <input
          type={itype}
          className="form-control"
          id={id}
          placeholder={iplaceholder}
          required
        />
      </div>
    );
}
export default Inputfield;
