import React, { Component } from "react";
// import './Kategori.css'
import DataKategori from '../../components/admin/DataKategori';
import { toHaveDisplayValue } from "@testing-library/jest-dom/dist/matchers";

class Kategori extends Component {
  state = {
    listKategori: [],
    insertKategori: {
      id: 1,
      nama: "Novel"
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/kategori')
      .then(response => response.json())
      .then(jsonHasilAmbilDariAPI => {
        this.setState({
          listKategori: jsonHasilAmbilDariAPI
        })
      })
  }

  render() {
    return (

      <div className="card mb-4">

        {/* input data */}
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5">
              <div className="card shadow-lg border-0 rounded-lg mt-5">
                <div className="card-header"><h3 className="text-center font-weight-light my-4">Input data Kategori</h3></div>
                <img src="https://img.jakpost.net/c/2020/04/21/2020_04_21_93387_1587459137._large.jpg" class="card-img-top" alt="bookStore"></img>
                <div className="card-body">
                  <form>
                    <div className="form-floating mb-3">
                      <input disabled className="form-control" id="id" name="id" placeholder="ID" />
                      <label htmlFor="id" for="id">ID</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input className="form-control" id="nama_kategori" name="nama_kategori" type="text" placeholder="Kategori" />
                      <label htmlFor="nama_kategori" for="inputPassword">Kategori</label>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                      <button type="submit" className="btn btn-primary center-block" onClick={this.handleSaveButton}>Submit</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />

        {/* tabel read data */}

        <div class="card mb-4">
          <div class="card-header">
            <i class="fas fa-table me-1"></i>
            Data Kategori Buku
          </div>
          
          <br />
          <form class="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
            <div class="input-group">
              <input type="text" class="form-control" placeholder="Cari" aria-label="Recipient's username" aria-describedby="basic-addon2" />
              <button class="btn btn-primary" id="btnNavbarSearch" type="button">Cari</button>
            </div>
          </form>

          <div class="card-body">
            <table class="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Kategori</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>

                {
                  this.state.listKategori.map(kategori => {  // looping dan masukkan untuk setiap data yang ada di listBuku ke variabel Buku
                    return <DataKategori key={kategori.id} idKategori={kategori.id} nama={kategori.nama} />
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };
}

export default Kategori;