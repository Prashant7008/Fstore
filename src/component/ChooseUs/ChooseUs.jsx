import React from "react";
import "./ChooseUs.css";
import pburgger from "../../asset/images/hero1.png";
const ChooseUs = () => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <img src={pburgger} alt="pburgger" className="w-100" />
          </div>
          <div className="col-lg-6">
            <div className="choose-content">
              <h4>who we are?</h4>
              <h2>take a look at the benefit we offer you</h2>
              <p>All type furniture product are buy at low cost of price </p>
            </div>
            <div className="feature mt-3">
              <div className="feature1 d-flex align-items-center gap-5">
                <div className="single_feature">
                  <span>
                    <i className="ri-truck-line"></i>
                  </span>
                  <h5>Transport & Fitting</h5>
                  <p>
                    We are provide own transport vechicle so transport cost is
                    very low & fruniture product are fitting free of cost
                  </p>
                </div>
                <div className="single_feature">
                  <span className="">
                    <i
                      className="ri-money-dollar-circle-line"
                      id="feature_icon-two"
                    ></i>
                  </span>
                  <h5>Return & Exchange</h5>
                  <p>Any defective product are Exchange easily</p>
                </div>
              </div>
              <div className="feature1 mt-3 d-flex align-items-center gap-5">
                <div className="single_feature">
                  <span className="">
                    <i
                      className="ri-secure-payment-line"
                      id="feature_icon-3"
                    ></i>
                  </span>
                  <h5></h5>
                  <p></p>
                </div>
                <div className="single_feature">
                  <span className=""></span>
                  <h5>7.00Am to 7.00Pm Customer Service </h5>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
