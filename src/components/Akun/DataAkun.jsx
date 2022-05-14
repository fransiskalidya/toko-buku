import React, { Component } from 'react';
//import React from "react";
import { Link } from 'react-router-dom';

class akun extends Component {

    render() {
        const prmData = this.props.data;
        return (
            <tr>
                <td><img class="rounded-image" src={prmData.gambar} alt="GambarUser" text-align="center"/></td><br></br><br></br>
                <td>{prmData.nama}</td><br></br>
                <td>{prmData.hp}</td><br></br>
                <td>{prmData.email}</td><br></br>
                <td>{prmData.alamat}</td><br></br>
                <td>
                    <button className="btn btn-sm btn-warning" onClick={() => this.props.EditDataAkun(prmData)} data-toggle="modal" data-target="#exampleModalLong">Edit Profile</button>

                </td>
                <td>

                </td>
            </tr>


        )
    }
}

export default akun;