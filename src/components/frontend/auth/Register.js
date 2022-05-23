import { useRef, useState } from "react";
import './Register.css';
import Navbar from "./Navbar";
import { register } from "../../../firebase.config";

export default function Register (props){
    // const [loading, setLoading] = useState(false);
    const emailRef = useRef();
    const passwordRef = useRef();
    const [error, setError] = useState("");


    async function handleSubmit (e){
        // setLoading(true)
        try{
        await register(emailRef.current.value,passwordRef.current.value);
        props.history.push('/login')
        } catch(e){
            setError(e.message);
            // alert(error);
        }
        // setLoading(false);

    }
   
    // render() {
        // const {gambar, nama, nomor_telp, email, role, password, alamat} = this.state
        return (
            <div>
                <Navbar />
                <div className="containerRegister">
                    <div className="col-lg-2"></div>
                    <form>

                        <div className="titleText">
                            <h3><b>Register Akun User</b></h3><br></br>
                        </div>
                        <div style={{marginLeft:"20pt", color:"red"}}>
                            {error}
                        </div>
                        <div className="ui divider"></div>
                        <div className="ui form"></div>

                        <div className="fieldRegister">
                            <label>Email</label><br></br><br></br>
                            <input ref={emailRef} type="email" className="form-control" id="email" name="email" placeholder="Email" />
                        </div>
                        <div className="fieldRegister">
                            <label>Password</label><br></br><br></br>
                            <input ref={passwordRef} type="password" className="form-control" id="password" name="password" placeholder="Password" />
                        </div>
                        <br></br>


                        <div className="container mt-3 center-block">
                            <div className="btn">
                                <button type="button" className="btn btn-primary center-block" onClick={handleSubmit}>Register</button>    
                            </div>
                            {/* <div style={{color:"red"}}>{error}</div> */}
                            <br></br>
                            <p className="forgot-password text-right">
                                Data sudah pernah terdaftar <a href="/login">Login ?</a>
                            </p>
                            
                        </div>
                    </form>
                </div>
            </div>
        );
    // }
}
