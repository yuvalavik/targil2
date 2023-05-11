import Logout from "../images/logout.png"
import { Link } from 'react-router-dom';

function Logoutbtn(){
    return(
        <Link to="/">


        <img src={Logout} className="button" alt="Log out of your account" />
      
       </Link>
    );
}
export default Logoutbtn;
