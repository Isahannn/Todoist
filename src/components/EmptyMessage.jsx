
import React from 'react';
import emptyImg from '/images/notfound.png'
 const EmptyMessage = () => (
  <div className="empty-message">
    <img src={emptyImg} alt="Nothing Found" />
  </div>
);

export default EmptyMessage;
