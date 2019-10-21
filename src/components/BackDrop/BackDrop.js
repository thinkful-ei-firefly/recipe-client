import React from 'react';

import './backDrop.css'

const BackDrop = props => (
    <div className="backdrop" onClick = { props.click }></div>
);

export default BackDrop;