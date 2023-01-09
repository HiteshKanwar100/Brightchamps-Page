import React from "react";
import ReactDOM from 'react-dom/client';
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import FApp from './FApp';
const router = createBrowserRouter([
  {
    path: "fapp",
    element: <FApp />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

function PurchaseCourse() {
  return (
   
    <>
      <Navbar></Navbar>
      <section style={{ backgroundColor: "#eee" }}>
        <div className="container py-5">
          <div className="row justify-content-center mb-3">
            <div className="col-md-12 col-xl-10">
              <div className="card shadow-0 border rounded-3">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                      <div className="bg-image hover-zoom ripple rounded ripple-surface">
                        <img
                          src="https://d1ng1bucl7w66k.cloudfront.net/ghost-blog/2022/08/Screen-Shot-2022-08-25-at-11.01.30-AM.png"
                          className="w-100"
                        />
                        <a href="#!">
                          <div className="hover-overlay">
                            <div
                              className="mask"
                              style={{
                                backgroundColor: "rgba(253, 253, 253, 0.15)",
                              }}
                            />
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-6">
                      <h5>Introduction to Coding</h5>
                      <div className="d-flex flex-row">
                        <div className="text-danger mb-1 me-2">
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                        </div>
                        <span>30 classes</span>
                      </div>
                      <div className="mt-1 mb-0 text-muted small">
                        <span>Curriculum Includes</span>
                        <span className="text-primary"> • </span>
                        <span>Sequence </span>
                        <span className="text-primary"> • </span>
                        <span>
                          Fundamentals Coding Blocks
                          <br />
                        </span>
                      </div>
                      <div className="mb-2 text-muted small">
                        <span className="text-primary"> • </span>
                        <span>Loops</span>

                        <br />
                      </div>
                      <p className="text-truncate mb-4 mb-md-0">
                        This course introduces students to visual coding with
                        emphasis on logic development with programming concepts
                        of variables, loops, conditions, functions and machine
                        vision. 'pkve;jaojaojoljesvan's[j']
                      </p>
                    </div>
                    <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                      <div className="d-flex flex-row align-items-center mb-1">
                        <h4 className="mb-1 me-1">₹8999</h4>
                        <span className="text-danger">
                          <s>₹18999</s>
                        </span>
                      </div>
                      <h6 className="text-success">Free HeadPhone</h6>
                      <div className="d-flex flex-column mt-4">
                       <Link to="/fapp">
                        <button
                          className="btn btn-primary btn-sm"
                          type="button"
                        >
                         Buy This course
                        </button>
                        </Link>
                
                        {/* <button
                          className="btn btn-outline-primary btn-sm mt-2"
                          type="button"
                        >
                          Learn More 
                        </button> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center mb-3">
            <div className="col-md-12 col-xl-10">
              <div className="card shadow-0 border rounded-3">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                      <div className="bg-image hover-zoom ripple rounded ripple-surface">
                        <img
                          src="https://buildfire.com/wp-content/uploads/2017/10/become-mobile-app-developer.jpg"
                          className="w-100"
                        />
                        <a href="#!">
                          <div className="hover-overlay">
                            <div
                              className="mask"
                              style={{
                                backgroundColor: "rgba(253, 253, 253, 0.15)",
                              }}
                            />
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-6">
                      <h5>Learn App Development</h5>
                      <div className="d-flex flex-row">
                        <div className="text-danger mb-1 me-2">
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                        </div>
                        <span>90 Classes</span>
                      </div>
                      <div className="mt-1 mb-0 text-muted small">
                        <span>Curriculum Includes
</span>
                        <span className="text-primary"> • </span>
                        <span>Introduction to Coding
</span>
                        <span className="text-primary"> • </span>
                        <span>
                        Events / UI 
                          <br />
                        </span>
                      </div>
                      <div className="mb-2 text-muted small">
                        <span></span>
                        <span className="text-primary"> • </span>
                        <span>Conditionals </span>
                        <span className="text-primary"> • </span>
                        <span>
                        Logic Structures
                          <br />
                        </span>
                      </div>
                      <p className="text-truncate mb-4 mb-md-0">
                      This course introduces students to app development with
                        emphasis on logic development with programming concepts
                        of variables, loops, conditions, functions and machine
                        vision. 'pkve;jaojaojoljesvat
                      </p>
                    </div>
                    <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                      <div className="d-flex flex-row align-items-center mb-1">
                        <h4 className="mb-1 me-1">₹24999</h4>
                        <span className="text-danger">
                          <s>₹39999</s>
                        </span>
                      </div>
                      <h6 className="text-success">Free Tablet</h6>
                      <div className="d-flex flex-column mt-4">
                      <Link to="/fapp">
                        <button
                          className="btn btn-primary btn-sm"
                          type="button"
                        >
                        Buy This Course
                        </button>
                        </Link>
                        {/* <button
                          className="btn btn-outline-primary btn-sm mt-2"
                          type="button"
                        >
                          Learn More
                        </button> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-12 col-xl-10">
              <div className="card shadow-0 border rounded-3">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                      <div className="bg-image hover-zoom ripple rounded ripple-surface">
                        <img
                          src="https://static.javatpoint.com/tutorial/machine-learning/images/ai-vs-machine-learning.png"
                          className="w-100"
                        />
                        <a href="#!">
                          <div className="hover-overlay">
                            <div
                              className="mask"
                              style={{
                                backgroundColor: "rgba(253, 253, 253, 0.15)",
                              }}
                            />
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-6">
                      <h5>Learn ML and AI</h5>
                      <div className="d-flex flex-row">
                        <div className="text-danger mb-1 me-2">
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                        </div>
                        <span>120 Classes</span>
                      </div>
                      <div className="mt-1 mb-0 text-muted small">
                        <span>Curriculum Includes</span>
                        <span className="text-primary"> • </span>
                        <span>Python</span>
                        <span className="text-primary"> • </span>
                        <span>
                          Supervised ML
                          <br />
                        </span>
                      </div>
                      <div className="mb-2 text-muted small">
                    
                        <span className="text-primary"> • </span>
                        <span>Unsupervised ML</span>
                        <span className="text-primary"> • </span>
                        <span>
                          Artifical Intelligence
                          <br />
                        </span>
                      </div>
                      <p className="text-truncate mb-4 mb-md-0">
                      Learn Artificial Intelligence & Machine Learning Online with World's #1. Do You Want to Learn AI & ML?of variables, loops, conditions, functions and machine
                        vision. 'pkve;jaojaojoljesvathdkjldl fddnzdn 
                      </p>
                    </div>
                    <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                      <div className="d-flex flex-row align-items-center mb-1">
                        <h4 className="mb-1 me-1">₹29999</h4>
                        <span className="text-danger">
                          <s>₹47999</s>
                        </span>
                      </div>
                      <h6 className="text-success">Free Tablet</h6>
                      <div className="d-flex flex-column mt-4">
                      <Link to="/fapp">
                        <button
                          className="btn btn-primary btn-sm"
                          type="button"
                        >
                          Buy This Course
                        </button>
                        </Link>
                        {/* <button
                          className="btn btn-outline-primary btn-sm mt-2"
                          type="button"
                        >
                          Learn More
                        </button> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PurchaseCourse;
