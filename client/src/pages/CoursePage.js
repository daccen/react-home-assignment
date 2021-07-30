import React from "react";
import { Link } from "react-router-dom";

const CoursePage = () => {
  return (
    <div className="container">
      <div className="row mb-5">
        <div className="col-sm">
          <div className="card">
            <img
              className="card-img-top"
              src="https://i.stack.imgur.com/y9DpT.jpg"
              alt="some alt"
            />
            <div className="card-body">
              <h5 className="card-title">Learn about MERN</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed
                nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis
                ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.
                Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent
                taciti sociosqu ad litora torquent per conubia nostra, per
                inceptos himenaeos. Curabitur sodales ligula in libero.
              </p>
              <Link to="/courses/mern" className="btn btn-primary">
                Learn more
              </Link>
            </div>
          </div>
        </div>
        <div className="col-sm">
          <div className="card">
            <img
              className="card-img-top"
              src="https://i.stack.imgur.com/y9DpT.jpg"
              alt="some alt"
            />
            <div className="card-body">
              <h5 className="card-title">Learn about MEVN</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed
                nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis
                ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.
                Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent
                taciti sociosqu ad litora torquent per conubia nostra, per
                inceptos himenaeos. Curabitur sodales ligula in libero.
              </p>
              <Link to="/courses/mevn" className="btn btn-primary">
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="row mb-5">
        <div className="col-sm">
          <div className="card">
            <img
              className="card-img-top"
              src="https://i.stack.imgur.com/y9DpT.jpg"
              alt="some alt"
            />
            <div className="card-body">
              <h5 className="card-title">Learn about MEAN</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed
                nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis
                ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.
                Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent
                taciti sociosqu ad litora torquent per conubia nostra, per
                inceptos himenaeos. Curabitur sodales ligula in libero.
              </p>
              <Link to="/courses/mean" className="btn btn-primary">
                Learn more
              </Link>
            </div>
          </div>
        </div>
        <div className="col-sm">
          <div className="card">
            <img
              className="card-img-top"
              src="https://i.stack.imgur.com/y9DpT.jpg"
              alt="some alt"
            />
            <div className="card-body">
              <h5 className="card-title">Learn about our courses</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed
                nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis
                ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.
                Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent
                taciti sociosqu ad litora torquent per conubia nostra, per
                inceptos himenaeos. Curabitur sodales ligula in libero.
              </p>
              <Link to="/courses" className="btn btn-primary">
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
