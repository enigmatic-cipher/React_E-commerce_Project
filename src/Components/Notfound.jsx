import React from 'react';
import err from './error_page.png';

function Notfound() {
  return (
    <>
    <div className="position-absolute top-50 start-50 translate-middle">
    <img src={err} alt="logo" />
    </div>
    </>
  )
}

export default Notfound;