function Message({side, content, time, color}) {

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
      <p className="small mb-0 mesTime" style={{ fontSize: '9px', color: 'white' }}>{time}</p>

      
    </div>
  </div>
  );
}
  
export default Message;
