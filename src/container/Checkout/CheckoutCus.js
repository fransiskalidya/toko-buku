import React from "react";
import { render } from "react-dom";
import 'font-awesome/css/font-awesome.min.css';
import "./Checkout.css";
import { Link } from "react-router-dom";
import Navbar from "../../components/frontend/auth/Navbar";
import { disableNetwork } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db, fs } from '../../firebase.config';
import firebase from "../../firebase.config";
import { useHistory } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const auth = getAuth();

const CheckoutCus = () => {
    useEffect(() => {
        db.collection("CheckoutCus")
            .onSnapshot((querySnapshot) => {
                var p = [];
                querySnapshot.forEach((doc) => {
                    p.push(doc.data());
                    cart.map((i) => {
                        if (i.id == doc.data().id) {
                            i.CheckoutCus = true
                        }
                    })
                });

                setCheckoutCus(p)
            });

    }, []);
    const [cart, setCart] = useState([])
    const [CheckoutCus, setCheckoutCus] = useState([]);
    const cartCollectionRef = db.collection('cart');
    const history = useHistory();


    function total() {
        let setTotal = 0
        CheckoutCus.map((i) => {
            setTotal += ((i.harga) * (i.quantity))

        })
        return setTotal
    }

    const [name, setName] = useState('');
    const [nickname, setNickName] = useState('');
    const [email, setEmail] = useState('');
    const [telepon, setTelepon] = useState('');
    const [alamat, setAlamat] = useState('');
    const [pos, setPos] = useState('');
    // const [totalBelanja, setTotal] = useState('');
    const [error, setError] = useState('');
    const [successMsg, setSuccessMsg] = useState('');

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if (user) {
                firebase.firestore().collection('signinUser').doc(user.uid).onSnapshot(snapshot => {
                    setName(snapshot.data().Name);
                    setEmail(snapshot.data().Email);
                })
            }
            else {
                history.push('/logincustomer')
            }
        })
    })

    const checkoutSubmit = (e) => {
        e.preventDefault();
        auth.onAuthStateChanged(user => {
            if (user) {
                const date = new Date();
                const time = date.getTime();
                db.collection('CheckoutCus ' + user.uid).doc('_' + time).set({
                    BuyerName: name,
                    BuyerNickName: nickname,
                    BuyerEmail: email,
                    BuyerTelepon: telepon,
                    BuyerAlamat: alamat,
                    BuyerPos: pos, 
                    // BuyerTotalBelanja: total
                }).then(() => {
                    setNickName('');
                    setTelepon('');
                    setAlamat('');
                    setPos('');
                    // dispatch({ type: 'EMPTY' })
                    setSuccessMsg('Your order has been placed successfully. Thanks for visiting us. You will be redirected to home page after 5 seconds');
                    setTimeout(() => {
                        history.push('/')
                    }, 5000)
                }).catch(err => setError(err.message))
            }
        })
    }

   

    return (
        <div style={{ marginTop: '90px' }}>
            <Navbar />
            <div className="middle-inner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2 col-md-col-12">
                            <div className="d-flex flex-row my-md-4">
                                <div className="judul">
                                    <h1>BookTown</h1>
                                </div>
                                <form>
                                    <div className="my-md-2">
                                        <div className="box">
                                            <div className="input-group">
                                                <input type="text" className="form-control" placeholder="Search Products Here....." aria-label="Recipient's username" aria-describedby="basic-addon4" />
                                                <button className="btn btn-warning" id="btnNavbarSearch" type="button">Search</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <div className="d-flex flex-row my-md-2">
                                    <div className="my-md-2">
                                        <div className="font-heart">
                                            <a href="#" className="single-icon"><i className="fa fa-heart-o fa-lg" aria-hidden="true"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex flex-row my-md-2">
                                    <div className="my-md-2">
                                        <div className="font-user">
                                            <a href="#" className="single-icon"><i className="fa fa-user-circle-o fa-lg" aria-hidden="true"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex flex-row my-md-2">
                                    <div className="my-md-2">
                                        <div className="font-user">
                                            <a href="#" className="single-icon"><i className="fa fa-shopping-bag fa-lg" aria-hidden="true"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="header">
                            <h1></h1>
                        </div>
                        <div className="header1">
                            <h1></h1>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-col-12">
                        <div className="d-flex flex-row my-md-3">
                            <div className="bread-inner">
                                <Link className="nav-link" to="/">Home</Link>
                            </div>
                            <div className="my-md-2">
                                <div className="arrow"></div>
                                <i className="fa fa-arrow-right fa lg"></i>
                            </div>
                            <div className="my-md-0">
                                <div className="bread-inner">
                                    <Link className="nav-link" to="/checkout">Checkout</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <section className="shop checkout section">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 col-12">
                                    <div className="checkout-form">
                                        <div className="text-main">
                                            <b><h2>Silahkan Checkout Di Sini !</h2></b>
                                        </div>
                                        <p>Mohon untuk melengkapi data berikut dengan benar</p>
                                        <br></br>
                                        <br></br>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {successMsg && <div className='success-msg'>{successMsg}</div>}
                    <form autoComplete="off" className='form-group' onSubmit={checkoutSubmit}>
                        <div className="row">
                            <div className="col-75">
                                <div className="container">

                                    <div className="row">
                                        <div className="form-group col-md-6">
                                            <div className="column-name">
                                                <label htmlFor="name"><i className="fa fa-user"></i>  Nama Lengkap</label>
                                            </div>
                                            <input className="form-control" id="name" name="name" placeholder="Nama Lengkap" required value={name} disabled/>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <div className="column-name">
                                                <label htmlFor="nickname"><i className="fa fa-user"></i>  Nama Panggilan</label>
                                            </div>
                                            <input className="form-control" id="nickname" name="nickname" placeholder="Nama Panggilan" required onChange={(e)=>setNickName(e.target.value)} value={nickname}/>
                                        </div>
                                    </div>
                                    <br></br>

                                    <div className="row">
                                        <div className="form-group col-md-6">
                                            <div className="column-name">
                                                <label htmlFor="email"><i className="fa fa-envelope" aria-hidden="true"></i>  Email</label>
                                            </div>
                                            <input className="form-control" id="email" name="email" placeholder="Email" required value={email} disabled/>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <div className="column-name">
                                                <label htmlFor="telepon"><i className="fa fa-mobile fa-lg" aria-hidden="true"></i>  Nomor Telepon</label>
                                            </div>
                                            <input className="form-control" id="telepon" name="telepon" placeholder="Nomor Telepon" required onChange={(e)=>setTelepon(e.target.value)} value={telepon} />
                                        </div>
                                    </div>
                                    <br></br>

                                    <div className="row">
                                        <div className="form-group col-md-6">
                                            <div className="column-name">
                                                <label htmlFor="alamat"><i className="fa fa-map-marker" aria-hidden="true"></i>  Alamat Lengkap</label>
                                            </div>
                                            <input className="form-control" id="alamat" name="alamat" placeholder="Alamat Lengkap" required onChange={(e)=>setAlamat(e.target.value)} value={alamat}/>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <div className="column-name">
                                                <label htmlFor="pos"><i className="fa fa-building" aria-hidden="true"></i>  Kode Pos</label>
                                            </div>
                                            <input className="form-control" id="pos" name="pos" placeholder="Kode Pos" required onChange={(e)=>setPos(e.target.value)} value={pos}/>
                                            <br></br>
                                        </div>
                                      
                                            <br></br>
                                        <label>
                                            <input type="checkbox" name="konfirmasi" /> Saya yakin alamat pengiriman di atas sudah sesuai
                                            <br></br><br></br></label>
                                        <button className="btn btn-warning" id="btnNavbarSearch" type="submit"><b>Checkout</b></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <form>
                        {error && <span className='error-msg'>{error}</span>}
                            <div className="row">
                                <div className="col-25">
                                    <div className="container">
                                        <h2 className="title">CART  TOTALS
                                            <span className="price">
                                                < i className="fa fa-shopping-cart"></i>
                                            </span>
                                        </h2>
                                        <br></br>
                                        <br></br>
                                    </div>
                                </div>
                            </div>

                            <div className='container mt-2'>
                                <div className='row justify-content-center'>


                                </div>

                                <div className='row mt-3'>
                                    <table className="table  text-center">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Buku</th>
                                                <th scope="col">Judul</th>
                                                <th scope="col">harga</th>
                                                <th scope="col">Quantity</th>
                                                {/* <th scope="col">Remove</th> */}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                CheckoutCus.map((i, index) => (

                                                    < tr key={i.id}>
                                                        <th scope="row">{index + 1}</th>
                                                        <th scope="row">
                                                            <img src={i.gambar} style={{ width: '4rem' }} />
                                                        </th>
                                                        <td>{i.judul}</td>
                                                        <td>
                                                            {i.harga}
                                                        </td>
                                                        <td>
                                                            {i.quantity}

                                                            {/* <button
                                                                onClick={() => decrease(i)}
                                                                className="btn btn-primary btn-sm"
                                                            >
                                                                -
                                                            </button>
                                                            {i.quantity}
                                                            <button
                                                                onClick={() => increase(i)}

                                                                className="btn btn-primary btn-sm"
                                                                size="sm"
                                                            >
                                                                +
                                                            </button> */}
                                                        </td>

                                                     
                                                        {/* <td>
                                                            <button className='btn btn-primary' onClick={() => addtoCheckoutCus(cart)}>Checkout</button>
                                                        </td> */}
                                                    </tr >
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                </div>
                                <div className="row">
                                    <div className="col text-center">
                                        <h4>TOTAL: {total()}</h4>
                                    </div>
                                </div>
                            </div >
                        </form>
                    </form>
                </div>
            </div>
        </div>
    );

}

export default CheckoutCus;