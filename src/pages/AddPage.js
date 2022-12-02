import React from 'react';
import { addCatatan } from '../utils/data';
import CatatanInput from '../components/CatatanInput';
import { useNavigate } from 'react-router-dom'; 

function AddPage() {

    const navigate = useNavigate();

  function onAddCatatanHandler(catatan) {
    addCatatan(catatan)
    navigate('/');
  }
 
  return (
    <section>
      <h2>Tambah Catatan</h2>
      <CatatanInput addCatatan={onAddCatatanHandler} />
    </section>
  )
}
 
export default AddPage;