function Message({side, content, color}) {

  return(
    <div className="d-flex flex-row justify-content-start mb-4 mr-8 ms">
    <div
      className={`p-3 text-white ${side}`}
      style={{
        borderRadius: 15,
        display: "inline-block",
        backgroundColor: color
      }}
    >
      <p className="small mb-0">{content}</p>
    </div>
  </div>
  );
}
  
export default Message;
