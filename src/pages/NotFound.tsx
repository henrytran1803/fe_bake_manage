import React from 'react';
import { Link } from 'react-router-dom';
import { Alert } from "antd";
const NotFound = () => (
  <div className="not-found">
    <img
      src="https://www.pngitem.com/pimgs/m/561-5616833_image-not-found-png-not-found-404-png.png"
      alt="not-found"
    />
    <Alert message="Success Text" type="success" />
    <Link to="/" className="link-home">
      Go Home
    </Link>
  </div>
);

export default NotFound;