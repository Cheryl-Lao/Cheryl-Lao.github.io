import React from "react";
import { Link } from "react-router-dom";
import PageTitle from "../components/PageTitle";

const NotFound = () => {
  return (
    <>
      <PageTitle title="404" />
      {/* End page title for seo */}

      <div className="not-found-wrapper">
            <div className="tokyo_tm_section">
              <div className="container">
                <div className="tokyo_tm_error">
                  <div className="tokyo_tm_error_inner">
                    <h1>404!</h1>
                    <h3>Page not found</h3>
                    <p>Whoops! The page you were looking for could not be found.</p>
                    <Link to="/" className="ib-button">
                      Go to Home
                    </Link>
                  </div>
                </div>
              </div>
            </div>
        {/* END RIGHT PART */}
      </div>
    </>
  );
};

export default NotFound;
