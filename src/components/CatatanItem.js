import React from 'react';
import PropTypes from 'prop-types';
import CatatanItemBody from './CatatanItemBody';
import DeleteButton from './DeleteButton';
 
function CatatanItem({name, body, createdAt, id, onDelete }) {
 return (
   <div className="catatan-item">
     <CatatanItemBody name={name} createdAt={createdAt} body={body} />
     <DeleteButton id={id} onDelete={onDelete} />
   </div>
 );
}
 
CatatanItem.propTypes = {
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default CatatanItem;
