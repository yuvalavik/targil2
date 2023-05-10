import Message from "../message/Message";

function MesArr(curuser) {

    const messages = curuser.messages;
    const messageComponents = [];
    if (!curuser.messages) {
        console.log(curuser.messages);
        console.log("ff");
        return null;
        
      }
  
    for (let i = 0; i < curuser.messages.length; i++) {
      const message = messages[i];
      messageComponents.push(
        <Message
          key={i}
          side="user-ms ml-84"
          content={message.value}
          color="rgba(26, 6, 241, 0.575)"
        />
      );
    }
  
    return (
      <>
        {messageComponents}
    </>
    );
  }

export default MesArr;