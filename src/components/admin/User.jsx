import React, { Component } from 'react';
//import React from "react";
import { Link } from 'react-router-dom';

class user extends Component {

    render() {
        const prmData = this.props.data;
        return (
            <tr>
                <td>{prmData.id}</td>
                <td><img class="rounded-image" src={prmData.gambar} alt="GambarUser" /></td>
                <td>{prmData.nama}</td>
                <td>{prmData.nomor_telp}</td>
                <td>{prmData.email}</td>
                <td>{prmData.password}</td>
                <td>{prmData.alamat}</td>
                <td>
                    <button className="btn btn-sm btn-danger" style={{ marginRight: '10px' }} onClick={() => this.props.hapusDataUser(prmData.id)}>Hapus</button>
                    <button className="btn btn-sm btn-warning" onClick={() => this.props.EditDataUser(prmData)}>Edit</button>

                </td>
                <td>

                </td>
            </tr>


        )
    }
}

export default user;