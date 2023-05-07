function Imageinput(){
    return(
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
                  required
                />
              </div>
    );
}
export default Imageinput;
