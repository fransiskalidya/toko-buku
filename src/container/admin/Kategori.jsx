import React, { Component } from "react";
// import './Kategori.css'
import DataKategori from '../../components/admin/DataKategori';
import Alert from '../../components/Alert';
import { toHaveDisplayValue } from "@testing-library/jest-dom/dist/matchers";

class Kategori extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listKategori: [],       // Untuk tampung Get all data
      totalData: 0,       // Untuk Hitung All Data
      isUpdate: false,    // Untuk Fileter Fungsi 
      Notif: {            // Untuk Tampung respon Dari Server
        alertShow: false,
        actionType: '',
        responCode: 0,
      },
      insertKategori: {      // untuk Tampung data Update / New data
        id: 1,
        nama: ""
      }
    }

  }

  ambilDataDariServerAPI = () => {
    fetch('http://localhost:3001/kategori')  // alamat URL API yang ingin kita ambil datanya
      .then(response => response.json())  // ubah response data dari URL API menjadi sebuah data json
      .then(jsonHasilAmbilDariAPI => {    // data json hasil ambil dari API kita masukkan ke dalam listUserpada state 
        this.setState({
          listKategori: jsonHasilAmbilDariAPI,
          totalData: jsonHasilAmbilDariAPI.length
        })
      })
  }

  componentDidMount() {
    this.ambilDataDariServerAPI()

  }

  SaveNewDataKategori = () => {        // fungsi untuk meng-handle tombol simpan
    fetch('http://localhost:3001/kategori', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'

      },
      body: JSON.stringify(this.state.insertKategori)      // kirimkan ke body request untuk data Useryang akan ditambahkan (insert)
    })
      .then((Response) => {
        console.log(Response)
        console.log("Status Create", Response.status)
        this.setState({
          Notif: {
            alertShow: true,
            actionType: 'created',
            responCode: Response.status,
          }
        })

        this.ambilDataDariServerAPI();      // reload / refresh data
        this.ClearForm();
        this.closeDialog();

      });
  }

  EditDataKategori = () => {
    const dataUpdate = this.state.insertKategori;
    const id = dataUpdate.id;
    fetch('http://localhost:3001/kategori/' + id, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dataUpdate)
    })
      .then((Response) => {
        console.log(Response)
        console.log("Status Update", Response.status)
        this.setState({
          Notif: {
            alertShow: true,
            actionType: 'updated',
            responCode: Response.status,
          }
        })

        this.ambilDataDariServerAPI();      // reload / refresh data
        this.ClearForm();
        this.closeDialog();
      });
  }



  HapusDataKategori = (data) => {
    const id = data;

    fetch('http://localhost:3001/kategori/' + id, {
      method: 'DELETE'
    })  // alamat URL API yang ingin kita HAPUS datanya
      .then(Response => {      // ketika proses hapus berhasil, maka ambil data dari server API lokal 
        console.log(Response)
        console.log("Status Delete", Response.status)

        // Untuk Tampung respon Dari Server
        this.setState({
          Notif: {
            alertShow: true,
            actionType: 'deleted',
            responCode: Response.status,
          }
        })
        this.ambilDataDariServerAPI();
        this.ClearForm();
      });
  }

  handleChange = (event) => {      // fungsi untuk meng-handle form tambah data User
    const NumberingId = this.state.totalData + 1;
    let formInsertKategori = { ...this.state.insertKategori };
    if (!this.state.isUpdate) { //Cek Jika Update Data Idnya Tidak Di Ubah
      formInsertKategori['id'] = NumberingId;
    }
    formInsertKategori[event.target.name] = event.target.value;      // menyimpan data onchange ke formInsertUsersesuai dengan target yang diisi
    this.setState({
      insertKategori: formInsertKategori
    });
  }

  ClearForm = () => {

    this.setState({
      isUpdate: false,
      insertKategori: {
        id: 1,
        nama: "",
      }
    })
    // Mengembalikan Nilai Awal Notif
    setInterval(() => {
      this.setState({
        Notif: {
          alertShow: false,
          actionType: '',
          responCode: 0,
        }
      })
    }, 4500);
  }

  handleSaveButton = () => {
    if (this.state.isUpdate) {
      this.EditDataKategori();
    } else {
      this.SaveNewDataKategori();
    }
  }

  handleEditKategori = (data) => {
    console.log('Update id', data.id);
    console.log('Update arry', data);
    this.setState({
      insertKategori: data,
      isUpdate: true
    })
  }

  handleHapusKategori = (data) => {
    console.log('Id delete =', data)
    const id = data;

    if (window.confirm('Apakah data ' + id + ' ?')) {
      this.HapusDataKategori(id)
    }
  }
  //close modal
  closeDialog = () => {
    console.log("masuk");
    window.location.reload();
  }

  render() {
    return (

      <div className="card mb-4">

        <div className="modal fade" id="exampleModalLong" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">Form Data Buku</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">

                <div className="card">
                <img src="https://img.jakpost.net/c/2020/04/21/2020_04_21_93387_1587459137._large.jpg" class="card-img-top" alt="bookStore"></img>

                  <div className="card-body">
                    {/* form pengisian */}
                    <form>
                    <Alert data={this.state.Notif} />
                    <div className="form-floating mb-3">
                      <input disabled className="form-control" id="id" name="id" placeholder="ID" />
                      <label htmlFor="id" for="id">ID</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input className="form-control" id="nama" name="nama" type="text" placeholder="Kategori" onChange={this.handleChange} value={this.state.insertKategori.nama} />
                      <label htmlFor="nama_kategori" for="inputPassword">Kategori</label>
                    </div>
                    {/* <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                      <button type="submit" className="btn btn-primary center-block" onClick={this.handleSaveButton}>Submit</button>
                    </div> */}
                  </form>
                  </div>



                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" id="close" data-dismiss="modal">Close</button>
                <button type="submit" className="btn btn-primary center-block" onClick={this.handleSaveButton}>Simpan</button>
              </div>
            </div>
          </div>
        </div>

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
              <button className="btn btn-success" id="btnNavbarSearch" type="button" style={{ marginInlineStart: '10px' }} data-toggle="modal" data-target="#exampleModalLong">Tambah data</button>
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
                    return (
                      <DataKategori key={kategori.id}
                        data={kategori}
                        hapusDataKategori={this.handleHapusKategori} EditDataKategori={this.handleEditKategori} />     // mappingkan data json dari API sesuai dengan kategorinya
                    )
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