import React, { Component } from "react";
// import './Kategori.css'
//import DataKategori from '../../../components/admin/DataKategori';
//import Alert from '../../../components/Alert';
import { Link } from 'react-router-dom';
import firebase from '../../../firebase.config';
import { toHaveDisplayValue } from "@testing-library/jest-dom/dist/matchers";

class Kategori extends Component {
    constructor(props) {
        super(props);
        this.ref = firebase.firestore().collection('kategori');
        this.unsubscribe = null;
        this.state = {
            kategori: []       // Untuk tampung Get all data  
        };
    }

    onCollectionUpdate = (querySnapshot) => {
        const kategori = [];
        querySnapshot.forEach((doc) => {
            const { idKategori, nama } = doc.data();
            kategori.push({
                key: doc.id,
                doc, // DocumentSnapshot
                idKategori,
                nama,
            });
        });
        this.setState({
            kategori
        });
    }

    componentDidMount() {
        this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
    }


    render() {
        return (
            <div class="container-fluid px-4">
                <h1 class="mt-4">Data Kategori Buku</h1>
                <ol class="breadcrumb mb-4">
                    <li class="breadcrumb-item active">Data Kategori Buku</li>
                </ol>
                <div className="card mb-4"></div>

                {/* tabel read data */}

                <div class="card mb-4">
                    <div class="card-header">
                        <i class="fa fa-table me-1"></i>
                        Data Kategori Buku
                    </div>

                    <br />
                    <form class="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
                        <div class="input-group">
                            <input type="text" class="form-control" placeholder="Cari" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                            <button class="btn btn-primary" id="btnNavbarSearch" type="button">Cari</button>
                            <button><Link to="/admin/dashboard/create" class="btn btn-primary" id="btnNavbarSearch" type="button">Tambah Data</Link></button>
                        </div>
                    </form>

                    <div class="card-body">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th width="600px">ID</th>
                                    <th width="800px">Kategori</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    this.state.kategori.map(kategori =>   // looping dan masukkan untuk setiap data yang ada di listBuku ke variabel Buku
                                        <tr>
                                            <td>{kategori.idKategori}</td>
                                            <td>{kategori.nama}</td>
                                            <td><Link to={`/admin/dashboard/edit/${kategori.key}`} class="btn btn-warning">Edit</Link>&nbsp;
                                                <Link to={`/admin/dashboard/show/${kategori.key}`} class="btn btn-success">Detail</Link>&nbsp;
                                            </td>

                                        </tr>
                                    )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    };
}

export default Kategori;