import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { showFormatDate } from "../utils/data.js";
 
function CatatanItemBody({id, name, body, createdAt}) {
 return (
   <div className="catatan-item__body">
     <h3 className="catatan-item__title">
     <Link to={`/catatans/${name}`}>{name}</Link>
     </h3>
     <h6 className="catatan-item__createdAt">{showFormatDate(createdAt)}</h6>
     <p className="catatan-item__username">{body}</p>
   </div>
 );
}

CatatanItemBody.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
}
 
export default CatatanItemBody;