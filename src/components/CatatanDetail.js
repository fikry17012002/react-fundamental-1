import React from 'react';
import PropTypes from 'prop-types';
import { showFormatDate } from "../utils/data.js";

function CatatanDetail({name, body, createdAt}) {
  return (
    <div className="catatan-item__body">
     <h3 className="catatan-item__title">{name}</h3>
     <h6 className="catatan-item__createdAt">{showFormatDate(createdAt)}</h6>
     <p className="catatan-item__username">{body}</p>
   </div>
  );
}

CatatanDetail.propTypes = {
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired
};

export default CatatanDetail;
