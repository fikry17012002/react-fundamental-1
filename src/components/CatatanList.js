import React from 'react';
import PropTypes from 'prop-types';
import CatatanItem from './CatatanItem';
 
function CatatanList({ catatans, onDelete }) {
 return (
   <div className="catatan-list">
     {
      catatans.length === 0 ? (
        <p className="catatan-list__empty-message">Tidak Ada Catatan</p>
    ) : (
       catatans.map((catatan) => (
         <CatatanItem 
         key={catatan.id}
         id={catatan.id}
            onDelete={onDelete}
         {...catatan} />
       ))
    )
     }
   </div>
 );
}

CatatanList.propTypes = {
  catatans: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired,
}
 
export default CatatanList;