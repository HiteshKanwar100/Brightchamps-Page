import React from "react";
import { Link } from "react-router-dom";

export default function ProductLeft() {
  return (
    <div className="pl">
      <h1 className="css-13p9kmq-heading1-titleStyle">
        Power Your Child with
        <br />
        <span className="css-1bsvc3o-subStyle">Important Life Skills</span>
      </h1>
      <div className="captionStyle">
        Empower your kids with important next-gen life skills through adeptly
        crafted live learning program
      </div>

      <form className="PhoneForm">
        <input
          name="phone"
          type="tel"
          placeholder="Your phone number"
          className="css-fc8v63-fieldStyle"
        />
          <Link to="/bookfreetrial">
            <button className="buttonStyle">
              <span className="css-16vswua-ctaTextStyle">
                Book Free Trial Class
              </span>
            </button>
            <span className="css-15i6oef-errorMsgStyle" />
          </Link>
      </form>
    </div>
  );
}
