import React, { Component } from "react";

import Navbar from "../../components/frontend/auth/Navbar";
import Footer from "./Footer";
import DataKeranjang from "../../components/frontend/Keranjang";

export default class Keranjang extends Component {
    render (){
        return (
            <div style={{ marginTop: '90px' }}>
                <Navbar />
                <div className="page-header">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                            <a href="{{ url('/') }}" class="btn btn-primary"><i class="tf-ion-android-delet"></i>Kembali</a>
                            </div>
                            {/* looping data jika sudah ada database */}
                            <DataKeranjang />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}