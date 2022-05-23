import React, { Component } from 'react';
import firebase from '../../../firebase.config';
import { Link } from 'react-router-dom';

class Edit extends Component {

    constructor(props) {
        super(props);
        this.state = {
            key: '',
            idKategori: '',
            nama: ''
        };
    }

    componentDidMount() {
        const ref = firebase.firestore().collection('kategori').doc(this.props.match.params.id);
        ref.get().then((doc) => {
            if (doc.exists) {
                const kategori = doc.data();
                this.setState({
                    key: doc.id,
                    idKategori : kategori.idKategori,
                    nama: kategori.nama
                });
            } else {
                console.log("No such document!");
            }
        });
    }

    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState({ kategori: state });
    }

    onSubmit = (e) => {
        e.preventDefault();

        const { idKategori, nama } = this.state;

        const updateRef = firebase.firestore().collection('kategori').doc(this.state.key);
        updateRef.set({
            idKategori,
            nama
        }).then((docRef) => {
            this.setState({
                key: '',
                idKategori: '',
                nama: ''
            });
            this.props.history.push("/admin/kategori")
        })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });
    }

    render() {
        return (
          <div class="container">
            <div class="panel panel-default">
              <div class="panel-heading">
                <h3 class="panel-title"><b>
                  Edit Kategori Buku</b>
                </h3>
              </div>
              <br></br>
              <div class="panel-body">
                <h4><Link to={`/admin/dashboard/show/${this.state.key}`} class="btn btn-primary">Detail Data</Link></h4>
                <form onSubmit={this.onSubmit}>
                    <br></br>
                  <div class="form-group">
                    <label for="idKategori">ID:</label>
                    <input disabled type="id" class="form-control" name="idKategori" value={this.state.idKategori} onChange={this.onChange} placeholder="ID" />
                  </div>
                  <br></br>
                  <div class="form-group">
                    <label for="nama">Nama:</label>
                    <input type="text" class="form-control" name="nama" value={this.state.nama} onChange={this.onChange} placeholder="Nama" />
                  </div>
                  <br></br>
                  <button type="submit" class="btn btn-success">Submit</button>
                </form>
              </div>
            </div>
          </div>
        );
      }
    }

export default Edit;
