import React, { Component } from "react";
// import './Kategori.css'
//import DataKategori from '../../../components/admin/DataKategori';
//import Alert from '../../../components/Alert';
import { Link } from 'react-router-dom';
import firebase from '../../../firebase.config';
import { toHaveDisplayValue } from "@testing-library/jest-dom/dist/matchers";

class DataUser extends Component {
    constructor(props) {
        super(props);
        this.ref = firebase.firestore().collection('signinUser');
        this.unsubscribe = null;
        this.state = {
            signinUser: []       // Untuk tampung Get all data  
        };
    }

    onCollectionUpdate = (querySnapshot) => {
        const signinUser = [];
        querySnapshot.forEach((doc) => {
            const { Name, Email, Password, Role } = doc.data();
            signinUser.push({
                key: doc.id,
                doc, // DocumentSnapshot
                Name,
                Email,
                Password,
                Role,
            });
        });
        this.setState({
            signinUser
        });
    }

    componentDidMount() {
        this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
    }


    render() {
        return (
            <div class="container-fluid px-4">
                <h1 class="mt-4">Data User</h1>
                <ol class="breadcrumb mb-4">
                    <li class="breadcrumb-item active">Data User</li>
                </ol>
                <div className="card mb-4"></div>

                {/* tabel read data */}

                <div class="card mb-4">
                    <div class="card-header">
                        <i class="fa fa-table me-1"></i>
                        Data User
                    </div>

                    <br />
                    <form class="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
                        <div class="input-group">
                            <input type="text" class="form-control" placeholder="Cari" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                            <button class="btn btn-primary" id="btnNavbarSearch" type="button">Cari</button>
                            <button><Link to="/admin/datauser/create" class="btn btn-primary" id="btnNavbarSearch" type="button">Tambah Data</Link></button>
                        </div>
                    </form>

                    <div class="card-body">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>Nama</th>
                                    <th>E-mail</th>
                                    <th>Password</th>

                                    <th>Role</th>
                                
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    this.state.signinUser.map(signinUser =>   // looping dan masukkan untuk setiap data yang ada di listBuku ke variabel Buku
                                        <tr>
                                            <td>{signinUser.Name}</td>
                                            <td>{signinUser.Email}</td>
                                            <td>{signinUser.Password}</td>
                                            <td>{signinUser.Role}</td>
                                            <td><Link to={`/admin/datauser/edit/${signinUser.key}`} class="btn btn-warning">Edit</Link>&nbsp;
                                                <Link to={`/admin/datauser/detail/${signinUser.key}`} class="btn btn-success">Detail</Link>&nbsp;
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

export default DataUser;