import React, { Component } from 'react';
import firebase from '../../../firebase.config';
import { Link } from 'react-router-dom';

class Edit extends Component {

    constructor(props) {
        super(props);
        this.state = {
            key: '',
            Name: '',
            Email: '',
            Password: '',
            Role: ''
        };
    }

    componentDidMount() {
        const ref = firebase.firestore().collection('signinUser').doc(this.props.match.params.id);
        ref.get().then((doc) => {
            if (doc.exists) {
                const signinUser = doc.data();
                this.setState({
                    key: doc.id,
                    Name: signinUser.Name,
                    Email : signinUser.Email,
                    Password : signinUser.Password,
                    Role: signinUser.Role,
                });
            } else {
                console.log("No such document!");
            }
        });
    }

    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState({ signinUser: state });
    }

    onSubmit = (e) => {
        e.preventDefault();

        const { Name, Email, Password, Role } = this.state;

        const updateRef = firebase.firestore().collection('signinUser').doc(this.state.key);
        updateRef.set({
            Name,
            Email,
            Password,
            Role
        }).then((docRef) => {
            this.setState({
                key: '',
                Name: '',
                Email: '',
                Password: '',
                Role:'',
            });
            this.props.history.push("/admin/datauser/DataUser")
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
                  Edit Data User</b>
                </h3>
              </div>
              <br></br>
              <div class="panel-body">
                <h4><Link to={`/admin/datauser/DetailUser/${this.state.key}`} class="btn btn-primary">Detail Data User</Link></h4>
                <form onSubmit={this.onSubmit}>
                    <br></br>
                  <div class="form-group">
                    <label for="nama">Nama:</label>
                    <input type="text" class="form-control" name="nama" value={this.state.Name} onChange={this.onChange} placeholder="Nama" />
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

export default Edit;
