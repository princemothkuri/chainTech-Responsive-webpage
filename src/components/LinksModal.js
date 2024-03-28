import React from "react";

const LinksModal = () => {
  return (
    <React.Fragment>
      <div className="sideBar-modal-wrapper"></div>
      <div className="sideBar-modal-container">
        <nav>
          <p className="links active">Company</p>
          <p className="links">Services</p>
          <p className="links">Business Models</p>
          <p className="links">Blogs</p>
          <p className="links">Contact Us</p>
        </nav>
      </div>
    </React.Fragment>
  );
};

export default LinksModal;
