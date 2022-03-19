import React, { Component } from "react";
import DataKategori from './DataKategori';

class Kategori extends Component {
    state = {
        kategoriBuku:[]
    }

    componentDidMount(){
        fetch('http://localhost:3001/kategori')
            .then(response => response.json())
            .then(jsonHasilAmbilDariAPI =>{
                this.setState({
                    kategoriBuku: jsonHasilAmbilDariAPI
                })
            })
    }

  render() {
    return (
      <div>
        <div class="col-lg-12 margin-tb">
          <div class="pull-left mt-2">
            <h2>Kategori Buku</h2>
          </div>
        </div>
        {
            this.state.kategoriBuku.map(kategori=>{
                return <DataKategori key={kategori.id} id={kategori.id} nama={kategori.nama}/>
            })
        }
      </div>
    );
  }
}

export default Kategori;