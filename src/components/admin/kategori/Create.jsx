import React, { Component } from 'react';
import firebase from '../../../firebase.config';
import { Link } from 'react-router-dom';

class Create extends Component {

  constructor() {
    super();
    this.ref = firebase.firestore().collection('kategori');
    this.state = {
      idKategori: '',
      nama: '',
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { idKategori, nama } = this.state;

    this.ref.add({
      idKategori: '',
      nama: '',
      
    }).then((docRef) => {
      this.setState({
        idKategori: '',
        nama: '',
      });
      this.props.history.push("/admin/kategori")
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }

  render() {
    const { idKategori, nama } = this.state;
    return (
        <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title"><b>
              Data Kategori Buku</b>
            </h3>
          </div>
          <br></br>
          <div class="panel-body">
            <h4><Link to= "/" class="btn btn-primary">Data Kategori Buku</Link></h4>
            <form onSubmit={this.onSubmit}>
                <br></br>
              <div class="form-group">
                <label for="idKategori">idKategori:</label>
                <input type="idKategori" class="form-control" name="idKategori" value={this.state.idKategori} onChange={this.onChange} placeholder="ID" />
              </div>
              <br></br>
              <div class="form-group">
                <label for="nama">Nama:</label>
                <input type="text" class="form-control" name="nama" value={this.state.nama} onChange={this.onChange} placeholder="Nama" />
              </div>
              <br></br>
              <button type="simpan" class="btn btn-success">Simpan</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Create;
