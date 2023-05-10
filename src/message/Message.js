function Message({ side, content, color, time }) {
  return (
    <div className={`d-flex flex-row justify-content-${side} mb-4 ${side === "start" ? "mr-8" : ""}`}>
      <div
        className={`p-3 text-white ${side}`}
        style={{
          borderRadius: 15,
          display: "inline-block",
          backgroundColor: color
        }}
      >
        <p className="small mb-0">{content}</p>
        <span className="small text-muted">{time}</span>
      </div>
    </div>
  );
}
  
export default Message;
