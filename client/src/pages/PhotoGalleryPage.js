import React, { useState } from "react";
import TheModal from "../components/TheModal";

const PhotoGalleryPage = () => {
  const [modalShow, setModalShow] = useState(false);
  const [imageUrl, setImageUrl] = useState(
    "https://mdbootstrap.com/img/Photos/Vertical/mountain1.jpg"
  );

  const handleClick = ({ target }) => {
    setImageUrl(target.src);
    setModalShow(true);
  };

  return (
    <div className="row">
      <TheModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        imageurl={imageUrl}
      />
      <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
        <img
          src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(73).jpg"
          className="w-100 shadow-1-strong rounded mb-4"
          alt=""
          onClick={handleClick}
        />

        <img
          src="https://mdbootstrap.com/img/Photos/Vertical/mountain1.jpg"
          className="w-100 shadow-1-strong rounded mb-4"
          alt=""
          onClick={handleClick}
        />
      </div>

      <div className="col-lg-4 mb-4 mb-lg-0">
        <img
          src="https://mdbootstrap.com/img/Photos/Vertical/mountain2.jpg"
          className="w-100 shadow-1-strong rounded mb-4"
          alt=""
          onClick={handleClick}
        />

        <img
          src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(73).jpg"
          className="w-100 shadow-1-strong rounded mb-4"
          alt=""
          onClick={handleClick}
        />
      </div>

      <div className="col-lg-4 mb-4 mb-lg-0">
        <img
          src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg"
          className="w-100 shadow-1-strong rounded mb-4"
          alt=""
          onClick={handleClick}
        />

        <img
          src="https://mdbootstrap.com/img/Photos/Vertical/mountain3.jpg"
          className="w-100 shadow-1-strong rounded mb-4"
          alt=""
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default PhotoGalleryPage;
