import React, { Component } from 'react';
import firebase from '../../../firebase.config';
import { Link } from 'react-router-dom';

class Detail extends Component {

  constructor(props) {
    super(props);
    this.state = {
      signinUser: {},
      key: ''
    };
  }


  componentDidMount() {
    const ref = firebase.firestore().collection('signinUser').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        this.setState({
          signinUser: doc.data(),
          key: doc.id,
          isLoading: false
        });
      } else {
        console.log("No such document!");
      }
    });
  }

  delete(id) {
    firebase.firestore().collection('signinUser').doc(id).delete().then(() => {
      console.log("Document successfully deleted!");
      this.props.history.push("/admin/datauser/DataUser")
    }).catch((error) => {
      console.error("Error removing document: ", error);
    });
  }


  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4><Link to="/admin/datauser/DataUser" class="btn btn-warning" >Data User List</Link></h4><br></br>
            <h3 class="panel-title">
              <b> {this.state.signinUser.Name} </b>
            </h3>
          </div>
          <div class="form-group">
            <label for="nama">Nama:</label>
            <input type="text" class="form-control" name="nama" value={this.state.signinUser.Name} disabled></input>
          </div>
          <br></br>
          <div class="form-group">
            <label for="email">Email:</label>
            <input type="text" class="form-control" name="email" value={this.state.signinUser.Email} disabled></input>
          </div>
          <br></br>
          <div class="form-group">
            <label for="password">Password:</label>
            <input type="text" class="form-control" name="password" value={this.state.signinUser.Password} disabled></input>
          </div>
          <br></br>
          <div class="form-group">
            <label for="role">Role:</label>
            <input type="id" class="form-control" name="role" value={this.state.signinUser.Role} disabled></input>
          </div>
          <br></br>
          <Link to={`/admin/datauser/DataUser`} class="btn btn-success">Kembali</Link>&nbsp;
          <button onClick={this.delete.bind(this, this.state.key)} class="btn btn-danger">Delete</button>
        </div>
      </div>
    );
  }
}

export default Detail;