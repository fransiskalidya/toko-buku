import React, { Component, useEffect } from "react";
import DataBuku from '../../components/Buku/DataBuku';
import Navbar from "./Navbar";
import Alert from '../../components/Alert';
import { useState } from "react";
import { toHaveDisplayValue } from "@testing-library/jest-dom/dist/matchers";
import "bootstrap/dist/css/bootstrap.min.css"
import firebase from "../../firebase.config";
import { getDocs, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { storage } from "../../firebase.config";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { Link } from 'react-router-dom';


export default function DaftarBuku() {
    // close modal
    const closeDialog = () => {
        console.log("masuk");
        window.location.reload();
    }

    const [judul, setJudul] = useState('');
    const [gambar, setGambar] = useState(null);
    const [kategori, setKategori] = useState('');
    const [pengarang, setPengarang] = useState('');
    const [penerbit, setPenerbit] = useState('');
    const [harga, setHarga] = useState(0);
    const [stok, setStok] = useState(0);
    const [deskripsi, setDeskripsi] = useState('');
    const [error, setError] = useState('');

    const [buku, setBuku] = useState([]);
    const bukuCollectionRef = firebase.firestore().collection('buku');

    const types = ['image/png', 'image/jpeg']


    const handleBookImage = (e) => {
        let selectedFile = e.target.files[0];
        console.log(selectedFile);
        if (selectedFile && types.includes(selectedFile.type)) {
            setGambar(selectedFile);
            setError('')
        }
        else {
            setGambar(null);
            setError('Please select a valid image type (jpg or png)');
        }
    }

    const addBuku = (e) => {
        e.preventDefault();
        const uploadTask = ref(storage, `images/${gambar.name}`);
        uploadBytes(uploadTask, gambar).then((snapshot) => {
            alert("sukses");
            getDownloadURL(snapshot.ref).then((url) => {
                firebase.firestore().collection('buku').add({
                    judul: judul,
                    harga: Number(harga),
                    penerbit: penerbit,
                    pengarang: pengarang,
                    deskripsi: deskripsi,
                    stok: Number(stok),
                    kategori: kategori,
                    gambar: url
                }).then(() => {
                    setJudul('');
                    setHarga(0);
                    setStok(0);
                    setPenerbit('');
                    setDeskripsi('');
                    setPengarang('');
                    setKategori('');
                    setGambar('');
                    setError('');
                    document.getElementById('file').value = '';
                    closeDialog();
                }).catch(err => setError(err.message))
            })
        }, err => setError(err.message))
    }

    const deleteBuku = async (id) => {
        const db = firebase.firestore();
        const bukuDoc = doc(db, "buku", id);
        try {
            await deleteDoc(bukuDoc);
            window.location.reload();
        } catch (err) {
            alert(err)
        }
    };

    useEffect(() => {
        const getBuku = async () => {
            const data = await getDocs(bukuCollectionRef);
            setBuku(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getBuku();
    }, []);

    return (

        <div class="container-fluid px-4">
            <h1 class="mt-4">Daftar Buku</h1>
            <ol class="breadcrumb mb-4">
                <li class="breadcrumb-item active">Daftar Buku</li>
            </ol>
            <div className="card mb-4">
                {/* modal */}

                <div className="modal fade" id="exampleModalLong" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLongTitle">Form Data Buku</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">

                                <div className="card">
                                    <img src="https://img.jakpost.net/c/2020/04/21/2020_04_21_93387_1587459137._large.jpg" alt="bookStore" />
                                    <div className="card-body">
                                        {/* form pengisian */}

                                        <form>
                                            <b><label htmlFor="gambar" form="gambar">Gambar Buku</label></b><br></br><br></br>
                                            <div className="form-floating mb-3">
                                                <input type="file" id="file" placeholder="gambar" onChange={handleBookImage} className="form-control" name="gambar" />

                                                <label htmlFor="gambar">Gambar</label>
                                            </div>
                                            <br></br>
                                            <div className="form-floating mb-3">
                                                <input className="form-control" id="judul" name="judul" type="text" placeholder="Judul" onChange={(e) => setJudul(e.target.value)} value={judul} />
                                                <label htmlFor="judul" >Judul</label>
                                            </div>
                                            <div className="form-floating mb-3">
                                                <input className="form-control" id="kategori" name="kategori" type="text" placeholder="Kategori Buku" onChange={(e) => setKategori(e.target.value)} value={kategori} />
                                                <label htmlFor="kategori" >Kategori</label>
                                            </div>
                                            <div className="form-floating mb-3">
                                                <input className="form-control" type="text" id="harga" name="harga" placeholder="Harga Buku" onChange={(e) => setHarga(e.target.value)} value={harga} />
                                                <label htmlFor="harga" >Harga</label>
                                            </div>
                                            <div className="form-floating mb-3">
                                                <input className="form-control" type="text" id="stok" name="stok" placeholder="Stok Buku" onChange={(e) => setStok(e.target.value)} value={stok} />
                                                <label htmlFor="stok" >Stok</label>
                                            </div>
                                            <div className="form-floating mb-3">
                                                <input className="form-control" type="text" id="pengarang" name="pengarang" placeholder="Pengarang" onChange={(e) => setPengarang(e.target.value)} value={pengarang} />
                                                <label htmlFor="pengarang" >Pengarang</label>
                                            </div>
                                            <div className="form-floating mb-3">
                                                <input className="form-control" type="text" id="penerbit" name="penerbit" placeholder="Penerbit" onChange={(e) => setPenerbit(e.target.value)} value={penerbit} />
                                                <label htmlFor="penerbit" >Penerbit</label>
                                            </div>
                                            <div className="form-floating mb-3">
                                                <textarea className="form-control" type="text" id="deskripsi" name="deskripsi" placeholder="Deskripsi Buku" onChange={(e) => setDeskripsi(e.target.value)} value={deskripsi} />
                                                <label htmlFor="deskripsi">Deskripsi</label>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" id="close" onClick={closeDialog} data-dismiss="modal">Close</button>
                                <button type="submit" className="btn btn-primary center-block" onClick={addBuku}>Simpan</button>
                            </div>
                            {error && <span className='error-msg'>{error}</span>}
                        </div>
                    </div>
                </div>
                {/* data buku */}
                <div className="card mb-4">
                    <div className="card-header">
                        <i className="fa fa-table me-1"></i>
                        Daftar Buku BookTown
                    </div>
                    <br></br>

                    <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Cari" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                            <button className="btn btn-primary" id="btnNavbarSearch" type="button">Cari</button>
                            <button className="btn btn-success" id="btnNavbarSearch" type="button" style={{ marginInlineStart: '10px' }} data-toggle="modal" data-target="#exampleModalLong">Tambah data</button>
                        </div>
                    </form>
                    <div className="card-body">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>GAMBAR BUKU</th>
                                    <th>JUDUL BUKU</th>
                                    <th>KATEGORI BUKU</th>
                                    <th>HARGA</th>
                                    <th>STOK</th>
                                    <th>PENGARANG</th>
                                    <th>PENERBIT</th>
                                    <th>DESKRIPSI</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    buku.map(buku => {    // looping dan masukkan untuk setiap data yang ada di listBuku ke variabel Buku
                                        // return <DataBuku key={buku.id} gambar={buku.gambar} judul={buku.judul} kategori={buku.kategori} harga={buku.harga} stok={buku.stok} pengarang={buku.pengarang} penerbit={buku.penerbit} deskripsi={buku.deskripsi} idBuku={buku.id} hapusDataBuku={this.handleHapusBuku} editDataBuku={this.handleEditBuku}/>     // mappingkan data json dari API sesuai dengan kategorinya
                                        // return <DataBuku key={buku.id} data={buku} hapusDataBuku={this.handleHapusBuku} EditDataBuku={this.handleEditBuku} />
                                        return (
                                            <tr>
                                                <td><img src={buku.gambar} alt="GambarBuku" width="150px" height="200px" /></td>
                                                <td>{buku.judul}</td>
                                                <td>{buku.kategori}</td>
                                                <td>{buku.harga}</td>
                                                <td>{buku.stok}</td>
                                                <td>{buku.pengarang}</td>
                                                <td>{buku.penerbit}</td>
                                                <td>{buku.deskripsi}</td>
                                                <td>
                                                    <button className="btn btn-sm btn-danger" style={{ marginRight: '10px' }} onClick={() => { deleteBuku(buku.id) }}>Hapus</button>
                                                    <button className="btn btn-sm btn-warning" data-toggle="modal" data-target="#exampleModalLong"><Link to= {`/admin/EditBuku/${buku.id}`}>Edit</Link></button>

                                                </td>
                                                <td>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};
// }
// export default DaftarBuku;