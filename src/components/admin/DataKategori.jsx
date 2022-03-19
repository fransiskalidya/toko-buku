import React from "react";

const DataKategori = (props)=>{
    <div className="row">
        <div className="float-right my-2">
              <a className="btn btn-success" href="">
                Input Kategori
              </a>
        </div>
        <table className="table table-bordered">
          <tr>
            <th>id</th>
            <th>Nama</th>
            <th width="280px">Action</th>
          </tr>
          <tr>
            <td>{props.id}</td>
            <td>{props.isi}</td>
            <td>
              <button type="submit" className="btn btn-danger">
                Delete
              </button>
            </td>
          </tr>
        </table>
    </div>
}

export default DataKategori;