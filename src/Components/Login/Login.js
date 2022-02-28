import { useState } from "react"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import { loginUser } from "../../Reducers/ActionCreators/loginUser"
import './Login.css'

const Login = () =>{
    const [email, setEmail] = useState("")
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = () => {
        // edit redux
        dispatch(loginUser(email))
        history.push('/')
    }
    
    
    return(
        <div className="login-container">
            <div className="login-form">
                <div className="login-content">
                    <div className="login text">
                        ĐĂNG NHẬP
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="login-form-group">
                            <babel>Tên đăng nhập</babel>
                            <input type="email" placeholder="Nhập tên đăng nhập" required
                            onChange={(e) => setEmail(e.target.value)}/>
                            <i class="fa-solid fa-user"></i>
                        </div>
                        <div className="login-form-group">
                            <babel>Mật khẩu</babel>
                            <input type="password" placeholder="Nhập mật khẩu" required/>
                            <i class="fa-solid fa-key"></i>
                        </div>
                        <button>Đăng Nhập</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Login