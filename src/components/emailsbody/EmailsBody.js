import React from "react";
import "./emailbody.css";

const EmailsBody = () => {
  return (
    <div className="emailbody-container-left">
          <div className="left-emailbody-container">
            <h1>F</h1>
          </div>
          <div className="right-emailbody-container">
            <p>
              From: <span>Foo Bar {`<foo.bar@gmail.com>`}</span>
            </p>
            <p>
              Subject: <span>{`Lorem Ipsum`}</span>
            </p>
            <p className="word-wrap">
              Vestibulum sit amet ipsum aliquet, lacinia nulla malesuada,
              ullamcorper massa
            </p>
            <p>
              26/06/2020 10:30am{" "}
              <span className="favorite-color">Favorite</span>
            </p>
          </div>
        </div>
  );
};

export default EmailsBody;
