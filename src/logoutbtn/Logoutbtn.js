import Logout from "../images/logout.png"
function Logoutbtn(){
    return(
        <a href="loginFrame.html">


        <img src={Logout} className="button" alt="Log out of your account" />
      
        </a>
    );
}
export default Logoutbtn;
