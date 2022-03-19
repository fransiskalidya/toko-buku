import React, { Component } from "react";
import './Kategori.css'
import DataKategori from '../../components/admin/DataKategori';

class Kategori extends Component {
  state = {
    listKategori: [],
    insertKategori: {
    id:1,
    nama:"Novel"
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

      <div className="containerForm">
        <div className="col-lg-4">
          <span id="tabelKategori">
            <div className="content">
              <form>
                <h3><b>Input Data Kategori</b></h3><br></br>
                <div className="bookStore">
                  <img src="https://img.jakpost.net/c/2020/04/21/2020_04_21_93387_1587459137._large.jpg" alt="bookStore" />
                </div>
                <div className="field">
                  <label htmlFor="id" className="col-sm-2 col-form-label">ID Kategori</label>
                  <input className="form-control" id="id" name="id" placeholder="ID Kategori" />
                </div>
                <div className="field">
                  <label htmlFor="nama_kategori" className="col-sm-2 col-form-label">Nama</label>
                  <input type="text" className="form-control" id="nama_kategori" name="nama_kategori" placeholder="Nama Kategori" />
                </div>

                <br>
                </br>


                <div className="container mt-3 center-block">
                  <button type="submit" className="btn btn-primary center-block" onClick={this.handleSaveButton}>Submit</button>
                </div>
              </form>
            </div>
          </span>
        </div>


        {/* //       <div className="containerForm">
//       <div className="col-lg-4">

//       {/* // <div>
//       //   <div class="col-lg-12 margin-tb">
//       //     <div class="pull-left mt-2"> */}
        {/* //       <div className="containerTable">
//       <div className="py-4">
//             <h2>Kategori Buku</h2>
//         { */}
        {/* //             this.state.kategoriBuku.map(kategori=>{
//                 return <DataKategori key={kategori.id} id={kategori.id} nama={kategori.nama}/>
//             })
//         }
//       </div>
//       </div>
//       </div>
//       </div>
//     );
//   }
// } */}

        <div className="containerTable">
          <div className="py-4">
          <h2>Kategori Buku</h2>
          </div>
                </div>
                <br></br>
                <br></br>

               <a href="#tabelData"><button className="buttonInput" type="button">Input Kategori
                </button></a>
                <div className="table">
                    <table className="table border shadow">
                        <thead className="thead-dark">
                            <tr>

                                <th>ID KATEGORI</th>
                                <th>NAMA KATEGORI</th>
                                <th width="120px">Action</th>
                            </tr>
                            {
                                this.state.listKategori.map(kategori=>{  // looping dan masukkan untuk setiap data yang ada di listBuku ke variabel Buku
                                return <DataKategori key={kategori.id} idKategori={kategori.id} nama={kategori.nama}/>
                            })
                        }
                    </thead>
                </table>
            </div>
        </div>
   );
  };
}

          export default Kategori;