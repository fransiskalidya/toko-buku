import React, { useState } from 'react'
// import { Auth } from 'firebase/auth';
import { Link } from 'react-router-dom'
import firebase from '../../../firebase.config';
import { register } from "../../../firebase.config";
import '../../frontend/auth/Register.css';
import Navbar from "./Navbar";


export const Signup = (props) => {

    // defining state
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');


    // signup
    const signup = (e) => {
        e.preventDefault();
        register(email, password).then((cred) => {
            firebase.firestore().collection('signinUser').doc(cred.user.uid).set({
                Name: name,
                Email: email,
                Password: password
            }).then(() => {
                setName('');
                setEmail('');
                setPassword('');
                setError('');
                props.history.push('/login');
            }).catch(err => setError(err.message));
        }).catch(err => setError(err.message));
    }

    return (
        <div>
            <Navbar />
            <div className="containerRegister">
                <div className="col-lg-2"></div>
                <form autoComplete="off" className='form-group' onSubmit={signup}>

                    <div className="titleText">
                        <h3><b>Register Akun User</b></h3><br></br>
                    </div>
                    <div style={{ marginLeft: "20pt", color: "red" }}>
                        {error}
                    </div>
                    <div className="ui divider"></div>
                    <div className="ui form"></div>


                    <div className="fieldRegister">
                        <label>Nama</label><br></br><br></br>
                        <input type='text' className='form-control' required onChange={(e) => setName(e.target.value)} value={name} placeholder="Nama Akun" />
                    </div>
                    <div className="fieldRegister">
                        <label>Email</label><br></br><br></br>
                        <input type='email' className='form-control' required onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Email" />
                    </div>
                    <div className="fieldRegister">
                        <label>Password</label><br></br><br></br>
                        <input type='password' className='form-control' required onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Password" />
                    </div>
                    <br></br>

                    <div className="container mt-3 center-block">
                        <div className="btn">
                            <button type="submit" className="btn btn-success center-block">Submit</button>
                        </div>
                        {/* <div style={{color:"red"}}>{error}</div> */}
                        <br></br>
                    </div>
                    {error && <span className='error-msg'>{error}</span>}
                <br />
                <span>Sudah memiliki akun? Login
                    <Link to="login"> Disini</Link>
                </span>
                </form>
            </div>
        </div>
    );
    // }
}


export default Signup;
