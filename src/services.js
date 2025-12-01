import React from 'react';

function Service() {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Our Services</h2>

      <div className="row">
        {/* Card 1 */}
        <div className="col-md-4">
          <div className="card shadow-sm">
            <img
              src="https://picsum.photos/id/1/200/300"
              className="card-img-top"
              alt="Service 1"
            />
            <div className="card-body">
              <h5 className="card-title">Web Development</h5>
              <p className="card-text">
                We create responsive and modern websites using the latest technologies.
              </p>
              <a href="#" className="btn btn-primary">Learn More</a>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-4">
          <div className="card shadow-sm">
            <img
              src="https://picsum.photos/id/1/200/300"
              className="card-img-top"
              alt="Service 2"
            />
            <div className="card-body">
              <h5 className="card-title">App Development</h5>
              <p className="card-text">
                Build fast, reliable mobile applications for iOS and Android.
              </p>
              <a href="#" className="btn btn-primary">Learn More</a>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-md-4">
          <div className="card shadow-sm">
            <img
              src="https://picsum.photos/id/1/200/300"
              className="card-img-top"
              alt="Service 3"
            />
            <div className="card-body">
              <h5 className="card-title">UI/UX Design</h5>
              <p className="card-text">
                We design beautiful, user-friendly interfaces for your digital products.
              </p>
              <a href="#" className="btn btn-primary">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
