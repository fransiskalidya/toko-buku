import React from "react";

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
                <button className="btn btn-sm btn-warning" onClick={() => props.hapusDataBuku(props.idBuku)}>Hapus</button><br></br><br></br>                
                <button className="btn btn-sm btn-warning" onClick={() => props.hapusDataBuku(props.idBuku)}>Edit</button>
                </td>
                </tr>
              
          
    )
}

export default daftarBuku;