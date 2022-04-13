import React, { Component } from 'react';
//import React from "react";
import { Link } from 'react-router-dom';

class invoice extends Component {

    render() {
        const prmData = this.props.data;
        return (
            <tr>
                <td>{prmData.id}</td>
                <td><img class="rounded-image" src={prmData.gambar} alt="GambarUser" /></td>
                <td>{prmData.nama}</td>
                <td>{prmData.total}</td>
                <td> <button className="btn btn-sm btn-success">{prmData.status}</button></td>
                <td>{prmData.tanggal}</td>
                <td>
                    <button className="btn btn-sm btn-danger" style={{ marginRight: '10px' }} onClick={() => this.props.hapusDataInvoice(prmData.id)}>Hapus</button>
                    <button className="btn btn-sm btn-warning" onClick={() => this.props.EditDataInvoice(prmData)} data-toggle="modal" data-target="#exampleModalLong">Detail</button>

                </td>
                <td>

                </td>
            </tr>


        )
    }
}

export default invoice;