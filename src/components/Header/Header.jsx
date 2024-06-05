import { Link } from "react-router-dom";

  
const Header = () => {
    return (
        <div className="flex gap-10 text-3xl font-bold ">
             <Link to='/'><a href="">Home</a></Link>
             <Link to='/login'><a href="">Login</a></Link>
             <Link to='/singin'><a href="">Sing-In</a></Link>
        </div>
    );
};

export default Header;