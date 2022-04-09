import React, { Component } from "react";

class Keranjang extends Component {
    render() {
        return (
            <div className="col-md-12 mt-2">
                <nav className="card text-dark bg-light mb-3">
                    <div className="card-header">
                        <span className="breadcrumb-item">
                            <a href="#">Home /</a>
                        </span>
                        <span className="breadcrumb-item active" aria-current="page">Seni Beranjak diri</span>
                    </div>

                </nav>
                <div className="col-md=12 mt-1">
                    <div className="card">
                        <div className="card-header">
                            <h4>Seni Beranjak diri</h4>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <img src="https://cdn.gramedia.com/uploads/items/Seni_Beranjak__w149_hauto.png" className="rounded mx-auto d-block" width="400px" alt="" />
                                </div>
                                <div className="col-md-6 mt-5">
                                    <h3>Seni Beranjak diri</h3>
                                    <table className="table">
                                        <tbody>
                                            <tr>
                                                <td>Harga</td>
                                                <td>:</td>
                                                <td>Rp 39.500,00</td>
                                            </tr>
                                            <tr>
                                                <td>Deskripsi</td>
                                                <td>:</td>
                                                <td><p align="justify">Move on” sering dianggap sebagai orang-orang yang sudah berhasil melalukan proses “perpindahan hati” dari satu orang ke orang yang lain. Contohnya: si A yang sempat berpacaran dengan si B, harus putus, dan selang beberapa waktu berhasil memiliki pasangan baru. Proses itulah yang orang-orang amini sebagai makna dari frasa move on. Tapi benarkah move on hanya berkutat pada permasalahan relasi antara seseorang dengan mantan kekasihnya di masa lalu?</p></td>
                                            </tr>
                                            <td>Stok</td>
                                            <td>:</td>
                                            <td><p align="justify">20</p></td>
                                            <tr>
                                                <td>Jumlah Beli</td>
                                                <td>:</td>
                                                <td>
                                                    {/* <form action="#" method="post"> */}
                                                        {/* @csrf */}
                                                        <input type="text" name="jumlah_pesan" className="form-control" required="" />
                                                        <button type="submit" className="btn btn-primary mt-3"><i className="tf-ion-android-cart">
                                                        </i>Masukkan Keranjang</button>
                                                    {/* </form> */}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Keranjang;