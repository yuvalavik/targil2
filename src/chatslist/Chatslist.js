function Chatslist({iname, itime, iicon}){
    return(
        <a
        href="#"
        className="list-group-item list-group-item-action d-flex align-items-center contactss"
      >
        <div className={iicon} />
        <span className="ml-2">{iname}</span>
        <span className="ml-auto">
          <time dateTime="YYYY-MM-DDTHH:MM:SS">{itime}</time>
        </span>
      </a>
    );
}
export default Chatslist;
