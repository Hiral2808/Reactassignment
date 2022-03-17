import React from "react";

const Footer2 = () => {
  return (
      <>
    <div>
      <footer
        className="page-footer font-small blue pt-5"
        style={{ backgroundColor: "#002c3e", color: "white" }}
      >
        <div className="container-fluid text-center text-md-left">
          <div className="row">
            <div className="col-md-4 mt-md-0 mt-3">
              <h4 style={{ fontWeight: "bold" }}>Reach at..</h4>
              <p>Location</p>
              <p>call +01123456789</p>
              <p>demo@gmail.com </p>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
              <h4 style={{ fontWeight: "bold" }}>Famms</h4>
              <p>
                Necessary, making this the first true generator on the Internet.
                It uses a dictionary of over 200 Latin words, combined with
              </p>
            </div>
          </div>
        </div>

        <div className="footer-copyright text-center py-3">
          © 2022 All Rights Reserved By Free Html Templates
        </div>
      </footer>
    </div>
    </>
  );
};

export default Footer2;
