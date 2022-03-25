import React from "react";

const daftarUser = (props) => {
    return (
            <tr>
                <td><img class="rounded-image" src={props.gambar} alt="GambarUser"/></td>
                <td>{props.nama}</td>
                <td>{props.nomor_telp}</td>
                <td>{props.email}</td>
                <td>{props.password}</td>
                <td>{props.alamat}</td>
                <td>
                <button className="btn btn-sm btn-danger" onClick={() => props.hapusDataUser(props.idUser)}>Hapus</button>      
                </td>
                <td>      
                <button className="btn btn-sm btn-success" onClick={() => props.hapusDataUser(props.idUser)}>Edit</button>
                </td>
                </tr>
              
          
    )
}

export default daftarUser;