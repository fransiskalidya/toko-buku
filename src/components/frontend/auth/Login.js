import { useRef, useState } from "react";
import './Login.css';
import './Layout.css';
import { toHaveDisplayValue } from "@testing-library/jest-dom/dist/matchers";
import { login } from "../../../firebase.config";

// import {Link} from 'react-router-dom';
import Navbar from "./Navbar";
export default function Login (props) {
    const emailRef = useRef();
    const passwordRef = useRef();
    const [error, setError] = useState("");

    async function handleSubmit (e){
        // setLoading(true)
        try{
        await login(emailRef.current.value,passwordRef.current.value);
        alert("welcome to our shop")
        props.history.push('/')
        } catch(e){
            setError(e.message);
            // alert(error);
        }
        // setLoading(false);

    }
        return (
            <div>
            <Navbar />
            <div class="containerLogin">
                <div className="col-lg-2"></div>
                <form>
                    <div className="title">
                        <h3><b>Login</b></h3><br></br>
                    </div>
                    <div style={{marginLeft:"20pt", color:"red"}}>
                            {error}
                        </div>
                    <div className="field">
                        <label>Email ID</label><br></br><br></br>
                        <input ref={emailRef} type="email" className="form-control" placeholder="Email" />
                    </div>

                    <div className="field">
                        <label>Password</label><br></br><br></br>
                        <input ref={passwordRef} type="password" className="form-control" placeholder="Password" />
                    </div>

                    <br>
                    </br>
                    <div className="view">
                        <div className="container mt-3 center-block">
                            <div className="btn1">
                                <button type="button" onClick={handleSubmit} className="btn btn-primary center-block">Login</button></div>
                            <br></br>
                            <p className="forgot-password text-right">
                                Data belum pernah terdaftar <a href="/register">Register ?</a>
                            </p>
                        </div>
                    </div>
                </form>
            </div>
            </div>

        );
}