import React, { Component } from "react";
import './Index.css';
import IndexBuku from '../../components/frontend/IndexBuku';
import Footer from './Footer'
import Navbar from "../../components/frontend/auth/Navbar";

export default class Index extends Component {
    state = {
        listBuku: [],
        insertBuku: {
            id: 1,
            gambar: "",
            nama_buku: "",
            kategori_buku: "",
            harga: "",
            stok: "",
            pengarang: "",
            penerbit: "",
            deskripsi: ""
        }
    }

    componentDidMount() {
        fetch('http://localhost:3003/buku')  // alamat URL API yang ingin kita ambil datanya
            .then(response => response.json())  // ubah response data dari URL API menjadi sebuah data json
            .then(jsonHasilAmbilDariAPI => {    // data json hasil ambil dari API kita masukkan ke dalam listUserpada state 
                this.setState({
                    listBuku: jsonHasilAmbilDariAPI
                })
            })
    }
    render() {
        return (
            <div>
                <Navbar />
                <div className="jumbotron">
                    <div className="container">
                        <h1 className="display-4"><b>Welcome to <br />BookTown Store</b></h1>
                        <p className="lead"><b>Berbelanja buku kini lebih mudah dengan BookTown Store</b></p>
                        <hr className="my-4" />
                        {/* <p>It uses utility classNamees for typography and spacing to space content out within the larger container.</p> */}
                        <a className="btn btn-danger btn-lg" href="#" role="button">Shop Now</a>
                    </div>

                </div>

                <body>
                    <div className="container">
                        <div className="row text-center">
                            <div className="col" style={{ marginTop: '30px' }}>
                                <h2>SHOP</h2>
                            </div>
                        </div>

                        {/* <div className="row row-cols-2">
                            <div className="col-3"> */}
                                {
                                    this.state.listBuku.map(buku => {    // looping dan masukkan untuk setiap data yang ada di listBuku ke variabel Buku

                                        return <IndexBuku key={buku.id} gambar={buku.gambar} nama_buku={buku.nama_buku} kategori_buku={buku.kategori_buku} harga={buku.harga} stok={buku.stok} pengarang={buku.pengarang} penerbit={buku.penerbit} deskripsi={buku.deskripsi} idBuku={buku.id} />     // mappingkan data json dari API sesuai dengan kategorinya
                                    })
                                }
                            {/* </div>
                        </div> */}

                    </div>
                </body>
                <Footer />
            </div>

        )
    }
}

