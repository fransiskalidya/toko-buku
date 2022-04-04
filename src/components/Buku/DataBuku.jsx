import React from "react";
import { Link } from 'react-router-dom';


const daftarBuku = (props) => {
    return (
            <tr>
                <td><img src={props.gambar} alt="GambarBuku" width="150px" height="200px"/></td>
                <td>{props.nama_buku}</td>
                <td>{props.kategori_buku}</td>
                <td>{props.harga}</td>
                <td>{props.stok}</td>
                <td>{props.pengarang}</td>
                <td>{props.penerbit}</td>
                <td>{props.deskripsi}</td>
                <td>
                <button className="btn btn-sm btn-danger" onClick={() => props.hapusDataBuku(props.idBuku)}>Hapus</button>              
                {/* <Link className="nav-link" to="/admin/EditBuku"> */}
                <button className="btn btn-sm btn-warning" onClick={() => props.editDataBuku(props)}>Edit</button>

                {/* </Link> */}
                </td>
               
                </tr>
              
          
    )
}

export default daftarBuku;