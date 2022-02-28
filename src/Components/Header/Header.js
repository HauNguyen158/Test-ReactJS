import { Link } from 'react-router-dom';
import './Header.css'
import { useDispatch } from "react-redux"
import { logoutUser } from "../../Reducers/ActionCreators/logoutUser"
import { useState } from 'react';

const Header = (props) => {
    const dispatch = useDispatch();

    const checkLogin = () =>{
        if(props.name == null){
            return(
                <Link to="/login">Đăng nhập</Link>
            )
        }
        return(
            <div className="header-right">
                <Link to="/">{props.name}</Link>
                <Link to="/" onClick={e=>dispatch(logoutUser())}>Đăng xuất</Link>
            </div>
            
        )
    }

    //Hiển thị nav mobile
    const [show, setShow] = useState(false)
    const showNavbar = () => {
        var x = document.getElementsByClassName("header-center")[0];
        if(show)
            x.style.display = "none"
        else
            x.style.display = "block"
        setShow(!show);
      }

    return(
        <div className="header">
            <div className="header-logo">
                <Link to="/">LOGO</Link>
            </div>
            <div className="header-center">
                <Link to="/">Trang chủ</Link>
                <Link to="/">Giới thiệu</Link>
                <Link to="/">Về chúng tôi</Link>
                {checkLogin()}
            </div>
            <div className="icon" onClick={showNavbar}><i class="fa fa-bars"></i></div>
        </div>
    )
}
export default Header;