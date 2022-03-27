import React from "react";
import image from './booktown.jpg';

const Dashboard=()=>{
    return(
        <div>
        <h1>Selamat Datang Di BookTown</h1>
        <h3>Toko buku Online terbesar dan terlengkap di Indonesia, dengan harga yang murah dari toko buku lainnya.</h3>
        <img src={image} height={1000} width={1500}>

        </img>
    
        </div>
    )
}

export default Dashboard;