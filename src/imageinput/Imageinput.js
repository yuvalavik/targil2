function Imageinput({setimage}){
  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        document.getElementById("friendspic").src = event.target.result;
        setimage(event.target.result);

      };
      reader.readAsDataURL(file);
    }
  }

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
        onChange={handleFileInputChange}
      />
    </div>
  );
}
export default Imageinput;
