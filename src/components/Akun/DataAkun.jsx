import React, { Component } from 'react';
//import React from "react";
import { Link } from 'react-router-dom';

class akun extends Component {

    render() {
        const prmData = this.props.data;
        return (
            <tr>
                
                <h1><center><img class="rounded-image" src={prmData.gambar} alt="GambarUser" text-align="center"/></center></h1><br></br><br></br>
                <h5><center>{prmData.nama}</center></h5><br></br>
                <h5><center>{prmData.hp}</center></h5><br></br>
                <h5><center>{prmData.email}</center></h5><br></br>
                <h5><center>{prmData.alamat}</center></h5><br></br>
                <h5>
                    <center>
                    <button className="btn btn-sm btn-warning" onClick={() => this.props.EditDataAkun(prmData)} data-toggle="modal" data-target="#exampleModalLong">Edit Profile</button>
                    </center>
                </h5>
                <td>

                </td>
            </tr>


        )
    }
}

export default akun;