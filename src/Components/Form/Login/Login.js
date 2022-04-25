import axios from 'axios';
import { useLocation, useNavigate , Link} from 'react-router-dom';
import { useAuth } from '../Authentication/Auth-Context';
import '../Form.css';
const Login = () => {
        const {  setLogin, state , dispatch, passVisible, setPassVisible} = useAuth();
        let {valEmail , setValEmail, setValPassword, valPassword} = useAuth();
        const className = "input-icon "; 
        const location = useLocation();
        const navigate = useNavigate();
        const defNavigate = useNavigate();
        const getInput = (e) => {
            dispatch(
            {
            type : "HANDLE INPUT",
            name: e.target.id,
            payload : e.target.value,
            }
            )
        }

        const loginHandler = async (e) => {
                 e.preventDefault();
                 const {email , password} = state;
                 try {
                     const response = await axios.post('/api/auth/login' ,{email :email, password: password});
                     console.log(response.status);
                     console.log(response);
                     if(response.status === 200) {
                     setLogin(true);
                     defNavigate("/");
                     navigate(location.state.from.pathname); 
                    }
                    
                     localStorage.setItem("token", response.data.encodedToken);

                    } catch (error) {
                      console.log(error);
                    } 
                    state.email = "";
                    state.password = "";         
                    
        }
        const guestLoginHandler = async (e) => {
            e.preventDefault();
            try {
                const response = await axios.post(`/api/auth/login`, {email: "adarshbalika@gmail.com", password: "adarshbalika"})
                console.log(response);
                setLogin(true);
                defNavigate("/");
                navigate(location.state.from.pathname);
                localStorage.setItem("token", response.data.encodedToken);
               } catch (error) {
                 console.log(error);
               }
   }
if(!state.email) {
    setValEmail = "please enter your email";
    valEmail = "error";
}
if(!state.password) {
 setValPassword = "please enter your password";
 valPassword = "error";
}
     return (
         <>
        <div className="container">
        <div className="form-box">
            <form className="form form-primary" onSubmit={loginHandler}>
                <div className={"form-control " + valEmail}>
                    <label for="email" className="input-label">Email</label>
                    <input type="text" placeholder="Enter your email" id="email" className="input" 
                    value={state.email}
                    onChange={(e) => getInput(e) }/>
                    <small>{setValEmail}</small>
                </div>
                <div className={"form-control " + valPassword}>
                    <label for="password" className="input-label">password</label>
                   
                    <span className={className + `${passVisible ? "color" : "active"}`}><i onClick={() => setPassVisible(!passVisible)} 
                    className="fas fa-eye-slash"></i></span>
                    <input type={passVisible ? "text" : "password"}
                     placeholder="Enter your password" id="password" className="input"
                    value={state.password}
                     onChange={(e) => getInput(e)}
                    />
                     <small>{setValPassword}</small> 
                </div>
                <div className="form-control">
                    <div className="form-info">
                        <label>
                            <input type="checkbox" 
                                    name="remember" />Remember me
                          </label>
                       <small>Forgot your password?</small>
                    </div>
                     <button className="btn btn-primary btn-large">Login</button> 
                    <button  className="btn btn-primary-outline btn-large" onClick={(e) => guestLoginHandler(e)}>test login</button>
                    <Link to="/Signup" className="btn btn-secondary-outline text-center">Sign up</Link>
                </div>
            </form>
        </div>
    </div>
    </>
     )
}

export default Login;