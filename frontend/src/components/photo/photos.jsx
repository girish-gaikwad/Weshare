import React, { useState } from 'react';
import Masonry from 'react-masonry-css';
import Modal from 'react-modal';
import './photos.css';

const PHOTOS = ({ photos }) => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };

  const handleClick = (photo) => {
    setSelectedPhoto(photo);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };

  return (
    <>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid p-3"
        columnClassName="my-masonry-grid_column"
        >
        {photos.map((photo, index) => (
            <div key={index} className="photo-item border-2 border-primary rounded-lg" onClick={() => handleClick(photo)}>
            <img src={photo.src} alt={photo.alt} />
            <div className="photo-info">
              <span>Likes: {photo.likes}</span>
              <span>Comments: {photo.comments}</span>
            </div>
          </div>
        ))}
      </Masonry>

      {selectedPhoto && (
          <Modal
          isOpen={!!selectedPhoto}
          onRequestClose={closeModal}
          contentLabel="Photo Modal"
          className="modal-content "
          overlayClassName="modal-overlay"
          >
          <img src={selectedPhoto.src} alt={selectedPhoto.alt} />
          <div className="modal-actions">
            <button>Like</button>
            <button>Comment</button>
            <button>Download</button>
          </div>
        </Modal>
      )}
    
      </>
  );
};

export default PHOTOS;
