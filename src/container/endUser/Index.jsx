import React, { Component } from "react";
import './Index.css';
// import IndexBuku from '../../components/frontend/IndexBuku';
import Footer from './Footer'
import Navbar from "../../components/frontend/auth/Navbar";
import { getDocs, updateDoc, deleteDoc } from 'firebase/firestore';
// import {storage} from "../../firebase.config";
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import firebase from "../../firebase.config";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

import { useHistory } from 'react-router-dom'

const auth = getAuth();

export const Index = ({ user }) => {

    const history = useHistory();

    useEffect(() => {
        // forcing user to signup
        auth.onAuthStateChanged(user => {
            if (!user) {
                history.push('/logincustomer');
            }
        })
    })

    const [buku, setBuku] = useState([]);
    const bukuCollectionRef = firebase.firestore().collection('buku');

    useEffect(() => {
        const getBuku = async () => {
            const data = await getDocs(bukuCollectionRef);
            setBuku(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getBuku();
    }, []);


    return (
        <div>
            <Navbar />
            <div className="jumbotron">
                <div className="container" id="jb">
                    <h1 className="display-4"><b>Welcome to <br />BookTown Store</b></h1>
                    <p className="lead"><b>Berbelanja buku kini lebih mudah dengan BookTown Store</b></p>
                    <hr className="my-4" />
                    {/* <p>It uses utility classNamees for typography and spacing to space content out within the larger container.</p> */}
                    <a className="btn btn-danger btn-lg" href="#" role="button">Shop Now</a>
                </div>

            </div>

            <body>
                <div className="container" style={{ border: "none" }}>
                    <div className="row text-center">
                        <div className="col" style={{ marginTop: '30px' }}>
                            <h2>SHOP</h2>
                        </div>
                    </div>
                    <br />
                    <br />
                    <div className="row">
                        {
                            buku.map(buku => {    // looping dan masukkan untuk setiap data yang ada di listBuku ke variabel Buku
                                return (
                                    // <div className="row">
                                    <div className="col-6 col-md-3">
                                        <div className="card" style={{ margin: '10px', height: '540px' }}>
                                            <img src={buku.gambar} className="card-img-top" style={{ height: '300px' }} />
                                            <div className="card-body">
                                                <h5 className="card-title">{buku.judul}</h5>
                                                <p className="card-text">{buku.pengarang}</p>
                                                <h6 classNameName="card-title">Rp. {buku.harga}</h6>
                                                <Link to="#" className="btn btn-primary">keranjang</Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                                // return <IndexBuku key={buku.id} gambar={buku.gambar} nama_buku={buku.nama_buku} kategori_buku={buku.kategori_buku} harga={buku.harga} stok={buku.stok} pengarang={buku.pengarang} penerbit={buku.penerbit} deskripsi={buku.deskripsi} idBuku={buku.id} />     // mappingkan data json dari API sesuai dengan kategorinya
                            })
                        }
                        {/* </div>
                        </div> */}
                    </div>

                </div>
            </body>
            <Footer />
        </div>

    )
}

export default Index;


