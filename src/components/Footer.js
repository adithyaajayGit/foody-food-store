import React from 'react';

function Footer() {
  return (
    <div>
      <footer className="text-center text-white" style={{ backgroundColor: '#45637d', paddingTop: '10px', paddingBottom: '10px' }}>
        {/* <!-- Grid container --> */}
        <div className="container p-4">
          {/* <!-- Section: Iframe --> */}
          <section>
            <div className="row d-flex justify-content-center">
              <div className="col-lg-6">
                <div className="ratio ratio-16x9">
                  <iframe
                    className="shadow-1-strong rounded"
                    src="https://www.youtube.com/embed/WSTf9Bja7is?autoplay=1&enablejsapi=1"
                    title="YouTube video"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- Section: Iframe --> */}
        </div>
        {/* <!-- Grid container --> */}

        {/* <!-- Copyright --> */}
        <div className="text-center p-2" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          © 2020 Copyright:
          <a className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
        </div>
        {/* <!-- Copyright --> */}
      </footer>
    </div>
  );
}

export default Footer;
