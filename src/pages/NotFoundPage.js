import React from "react";

const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <h1>404 - PAGE NOT FOUND</h1>
      <img src={require("../assets/images/404-not-found.jpg")} alt="404" />
    </div>
  );
};

export default NotFoundPage;
