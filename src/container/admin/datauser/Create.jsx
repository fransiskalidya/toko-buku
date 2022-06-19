import React, { Component } from 'react';
import firebase from '../../../firebase.config';
import { Link } from 'react-router-dom';

class Create extends Component {

  constructor() {
    super();
    this.ref = firebase.firestore().collection('signinUser');
    this.state = {
      Name: '',
      Email: '',
      Password: '',
      Role: '',
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { Name, Email, Password, Role } = this.state;

    this.ref.add({
      Name,
      Email,
      Password,
      Role,

    }).then((docRef) => {
      this.setState({
        Name: '',
        Email: '',
        Password: '',
        Role: '',
      });
      this.props.history.push("/admin/datauser/DataUser")
    })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  }

  render() {
    const { Name, Email, Password, Role } = this.state;
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h2 class="panel-title">
              <b>Tambah Data User</b>
            </h2>
            <br></br>
          </div>
          <div class="panel-body">
            <h4><Link to="/admin/datauser/create" class="btn btn-primary">DATA USER</Link></h4>
            <br></br>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="nama">Nama:</label>
                <input type="text" class="form-control" name="nama" value={this.state.Name} onChange={this.onChange} placeholder="Judul" />
              </div>
              <br></br>
              <div class="form-group">
                <label for="email">Email:</label>
                <input type="text" class="form-control" name="email" value={this.state.Email} onChange={this.onChange} placeholder="Email" />
              </div>
              <br></br>
              <div class="form-group">
                <label for="password">Password:</label>
                <input type="text" class="form-control" name="password" value={this.state.Password} onChange={this.onChange} placeholder="Password" />
              </div>
              <br></br>
              <div class="form-group">
                <label for="role">Role:</label>
                <input type="text" class="form-control" name="role" value={this.state.Role} onChange={this.onChange} placeholder="Role" />
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

export default Create;
