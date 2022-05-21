import React, { Component } from 'react';
import firebase from '../../../firebase.config';
import { Link } from 'react-router-dom';

class Detail extends Component {

  constructor(props) {
    super(props);
    this.state = {
      kategori: {},
      key: ''
    };
  }

  componentDidMount() {
    const ref = firebase.firestore().collection('kategori').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        this.setState({
          kategori: doc.data(),
          key: doc.id,
          isLoading: false
        });
      } else {
        console.log("No such document!");
      }
    });
  }

  delete(id) {
    firebase.firestore().collection('kategori').doc(id).delete().then(() => {
      console.log("Document successfully deleted!");
      this.props.history.push("/admin/kategori")
    }).catch((error) => {
      console.error("Error removing document: ", error);
    });
  }


  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4><Link to="/admin/kategori" class="btn btn-warning" >Kategori List</Link></h4><br></br>
            <h3 class="panel-title">
              <b> {this.state.kategori.nama} </b>
            </h3>
          </div>
          <div class="form-group">
            <label for="idKategori">ID:</label>
            <input type="id" class="form-control" name="idKategori" value={this.state.kategori.idKategori} disabled></input>
          </div>
          <br></br>
          <div class="form-group">
            <label for="nama">Nama:</label>
            <input type="text" class="form-control" name="nama" value={this.state.kategori.nama} disabled></input>
          </div>
          <br></br>
          <Link to={`/admin/kategori`} class="btn btn-success">Kembali</Link>&nbsp;
          <button onClick={this.delete.bind(this, this.state.key)} class="btn btn-danger">Delete</button>
        </div>
      </div>
    );
  }
}

export default Detail;