import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import firebase from '../../../firebase.config';
import { login } from "../../../firebase.config";
import '../../frontend/auth/Register.css';
import Navbar from "./Navbar";
import { getDocs, updateDoc, deleteDoc, doc } from 'firebase/firestore';

export const Login = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [error, setError] = useState('');
    const userCollectionRef = firebase.firestore().collection('signinUser');
    const db = firebase.firestore();

    const logincus = (e) => {
        e.preventDefault();
        login(email, password).then((cred) => {
            firebase.firestore().collection('signinUser').doc(cred.user.uid)
            .then(() => {
                setEmail('');
                setPassword('');
                setRole('');
                setError('');
                // db.collection('signinUser')
                //     .get()
                    // .then(snapshot => {
                        // const data = await getDocs(userCollectionRef);
                        if (role = "admin") {
                            props.history.push('/admin/Dashboard');
                        }
                    })
            }).catch(err => setError(err.message));
        }

return (
            <div>
                <Navbar />
                <div className="containerRegister">
                    <div className="col-lg-2"></div>
                    <form autoComplete="off" className='form-group' onSubmit={logincus}>

                        <div className="titleText">
                            <h3><b>Login Akun User</b></h3><br></br>
                        </div>
                        <div style={{ marginLeft: "20pt", color: "red" }}>
                            {error}
                        </div>
                        <div className="ui divider"></div>
                        <div className="ui form"></div>

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
                                <button type="submit" className='btn btn-success btn-md mybtn'>LOGIN</button>
                            </div>
                            {/* <div style={{color:"red"}}>{error}</div> */}
                            <br></br>
                        </div>
                        {error && <span className='error-msg'>{error}</span>}
                        <br />
                        <span>Belum memiliki akun? Register
                            <Link to="Register"> Disini</Link>
                        </span>
                    </form>
                </div>
            </div>
        );
        // }

    }

    export default Login
