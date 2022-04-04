import { render } from "@testing-library/react";
import React, { Component } from "react";
import { Link } from 'react-router-dom';


class daftarBuku extends Component{
    render() {
        const prmData = this.props.data;
        return (
            <tr>
                <td><img src={prmData.gambar} alt="GambarBuku" width="150px" height="200px" /></td>
                <td>{prmData.nama_buku}</td>
                <td>{prmData.kategori_buku}</td>
                <td>{prmData.harga}</td>
                <td>{prmData.stok}</td>
                <td>{prmData.pengarang}</td>
                <td>{prmData.penerbit}</td>
                <td>{prmData.deskripsi}</td>
                <td>
                    <button className="btn btn-sm btn-danger" style={{ marginRight: '10px' }} onClick={() => this.props.hapusDataBuku(prmData.id)}>Hapus</button>
                    <button className="btn btn-sm btn-warning" onClick={() => this.props.EditDataBuku(prmData)}>Edit</button>

                </td>
                <td>

                </td>
            </tr>


        )
    }
}

export default daftarBuku;