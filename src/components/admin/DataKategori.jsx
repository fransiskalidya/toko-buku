import React from "react";

const DataKategori = (props)=>{
  return (
          <tr>
            <td>{props.idKategori}</td>
            <td>{props.nama}</td>
            <td>
              <button type="submit" className="btn btn-danger">
                Delete
              </button>
            </td>
          </tr>
          
          )
}

export default DataKategori;