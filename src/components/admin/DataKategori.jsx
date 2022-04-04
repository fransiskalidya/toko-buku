import React, { Component } from 'react';
//import React from "react";
import { Link } from 'react-router-dom';

class kategori extends Component {

  render() {
    
    const prmData = this.props.data;
    return (
        <tr>
            <td>{prmData.id}</td>
            <td>{prmData.nama}</td>
            <td>
                <button className="btn btn-sm btn-danger" style={{ marginRight: '10px' }} onClick={() => this.props.hapusDataKategori(prmData.id)}>Hapus</button>
                <button className="btn btn-sm btn-warning" onClick={() => this.props.EditDataKategori(prmData)}>Edit</button>

            </td>
            <td>

            </td>
        </tr>


    )
}
}

export default kategori;