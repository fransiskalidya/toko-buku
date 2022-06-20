import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import React, { Component } from 'react';
import firebase from '../../firebase.config';
import {storage} from '../../firebase.config';

// import { Link } from 'react-router-dom';

class Editbuku extends Component {

    constructor(props) {
        super(props);
        this.state = {
            key: '',
            judul: '',
            gambar: '',
            kategori: '',
            pengarang: '',
            penerbit: '',
            harga: '',
            stok: '',
            deskripsi: ''
        };
    }

    componentDidMount() {
        const ref = firebase.firestore().collection('buku').doc(this.props.match.params.id);
        ref.get().then((doc) => {
            if (doc.exists) {
                const buku = doc.data();
                this.setState({
                    key: doc.id,
                    judul: buku.judul,
                    gambar: buku.gambar,
                    kategori: buku.kategori,
                    pengarang: buku.pengarang,
                    penerbit: buku.penerbit,
                    harga: buku.harga,
                    stok: buku.stok,
                    deskripsi: buku.deskripsi
                });
            } else {
                console.log("No such document!");
            }
        });
    }

    onChange = (e) => {
        let state = this.state
        state[e.target.name] = e.target.value;
        this.setState({ buku: state });


    }
    // handleBookImage = (e) => {
    //     const { gambar } = this.state;
    //     let state = this.state



    //     const types = ['image/png', 'image/jpeg'];
    //     let selectedFile = e.target.files[0];
    //     console.log(selectedFile);
    //     if (selectedFile && types.includes(selectedFile.type)) {
    //         state[e.target.name.gambar] = selectedFile;
            
    //         // const uploadTask = ref(storage, `images/${gambar.name}`);
    //         // uploadBytes(uploadTask, gambar).then((snapshot) => {
    //         //     alert("sukses");
    //         //     getDownloadURL(snapshot.ref).then((url) => {
    //         //         // this.state.gambar = url;

    //         //         console.log(url);
    //         //     })
    //         // })
    //     }
    // }


    onSubmit = (e) => {
        e.preventDefault();

        const { judul, gambar, kategori, pengarang, penerbit, harga, stok, deskripsi } = this.state;

        const updateRef = firebase.firestore().collection('buku').doc(this.state.key);
        updateRef.set({
            judul,
            gambar,
            kategori,
            pengarang,
            penerbit,
            harga,
            stok,
            deskripsi
        }).then((docRef) => {
            this.setState({
                key: '',
                judul: '',
                gambar: '',
                kategori: '',
                pengarang: '',
                penerbit: '',
                harga: '',
                stok: '',
                deskripsi: ''
            });
            this.props.history.push("/admin/DaftarBuku")
        })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });
    }

    render() {
        return (
            <div class="container" style={{ marginTop: '30px' }}>
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h3 class="panel-title"><b>
                            Edit Buku</b>
                        </h3>
                    </div>
                    <br></br>
                    <div class="panel-body">
                        {/* <h4><Link to={`/admin/dashboard/show/${this.state.key}`} class="btn btn-primary">Detail Data</Link></h4> */}
                        <form onSubmit={this.onSubmit}>
                            <div class="form-group">
                                <label for="gambar">Gambar:</label>
                                <input type="file" id="file" class="form-control" name="gambar" value={this.onChange} onChange={this.handleBookImage} placeholder="gambar" />
                            </div>
                            <br></br>

                            <div class="form-group">
                                <label for="judul">Judul:</label>
                                <input type="text" class="form-control" name="judul" value={this.state.judul} onChange={this.onChange} placeholder="Judul" />
                            </div>
                            <br></br>
                            <div class="form-group">
                                <label for="kategori">Kategori:</label>
                                <input type="text" class="form-control" name="kategori" value={this.state.kategori} onChange={this.onChange} placeholder="kategori" />
                            </div>
                            <br></br>
                            <div class="form-group">
                                <label for="harga">Harga:</label>
                                <input type="text" class="form-control" name="harga" value={this.state.harga} onChange={this.onChange} placeholder="harga" />
                            </div>
                            <br></br>
                            <div class="form-group">
                                <label for="stok">Stok:</label>
                                <input type="text" class="form-control" name="stok" value={this.state.stok} onChange={this.onChange} placeholder="stok" />
                            </div>
                            <br></br>
                            <div class="form-group">
                                <label for="pengarang">Pengarang:</label>
                                <input type="text" class="form-control" name="pengarang" value={this.state.pengarang} onChange={this.onChange} placeholder="pengarang" />
                            </div>
                            <br></br>
                            <div class="form-group">
                                <label for="penerbit">penerbit:</label>
                                <input type="text" class="form-control" name="penerbit" value={this.state.penerbit} onChange={this.onChange} placeholder="penerbit" />
                            </div>
                            <br></br>
                            <div class="form-group">
                                <label for="deskripsi">Deskripsi:</label>
                                <input type="text" class="form-control" name="deskripsi" value={this.state.deskripsi} onChange={this.onChange} placeholder="deskripsi" />
                            </div>
                            <br></br>
                            <button type="submit" class="btn btn-success">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Editbuku;
