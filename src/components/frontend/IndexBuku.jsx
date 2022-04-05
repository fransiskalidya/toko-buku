import React from "react";
import { Link } from "react-router-dom";

const IndexBuku = (props) => {
    return (

        // <div className="row">
        //     <div className="col-3">
                <div className="card">
                    <img src={props.gambar} className="card-img-top"/>
                    <div className="card-body">
                        <h5 className="card-title">{props.nama_buku}</h5>
                        <p className="card-text">{props.deskripsi}</p>
                        <h4 classNameName="card-title">{props.harga}</h4>
                        <Link to="#" className="btn btn-primary">keranjang</Link>
                    </div>
                </div>
        //     </div>
        // </div>
    )
}

export default IndexBuku;