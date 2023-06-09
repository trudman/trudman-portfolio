import React from "react";
import movieImg from "./images/movie.jpg";
import travelImg from "./images/travel.jpg";
import databaseImg from "./images/database.jpg";
import socialImg from "./images/social.jpg";

const Project = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-5" style={{ fontSize: "3rem" }}>
        Portfolio
      </h2>
      <div className="row">
        <div className="col-md-6 mb-5">
          <div className="card h-100">
            <a href="https://github.com/trudman/movie-director-search-engine">
              <img
                src={movieImg}
                className="card-img-top"
                alt="Project 1"
                style={{ width: "100%", height: "300px" }}
              />
            </a>
            <div className="card-body">
              <h5 className="card-title text-center">Movie Director Search Engine</h5>
              <p className="card-text text-center">
                Movie director search engine using the OMDB API and Wikipedia API.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-5">
          <div className="card h-100">
            <a href="https://travel-forum-p2.herokuapp.com/">
              <img
                src={travelImg}
                className="card-img-top"
                alt="Project 2"
                style={{ width: "100%", height: "300px" }}
              />
            </a>
            <div className="card-body">
              <h5 className="card-title text-center">Travel Blog</h5>
              <p className="card-text text-center">
                Application for travelers and vacation seekers to blog about locations they have
                visited.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-5">
          <div className="card h-100">
            <a href="https://github.com/trudman/e-commerce-back-end">
              <img
                src={databaseImg}
                className="card-img-top"
                alt="Project 3"
                style={{ width: "100%", height: "300px" }}
              />
            </a>
            <div className="card-body">
              <h5 className="card-title text-center">(ORM): E-Commerce Back End</h5>
              <p className="card-text text-center">
                Object-Relational Mapping (ORM): E-Commerce Back End application using MySQL.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-5">
          <div className="card h-100">
            <a href="https://github.com/trudman/social-network-api">
              <img
                src={socialImg}
                className="card-img-top"
                alt="Project 4"
                style={{ width: "100%", height: "300px" }}
              />
            </a>
            <div className="card-body">
              <h5 className="card-title text-center">NoSQL: Social Network API</h5>
              <p className="card-text text-center">NoSQL Social Network API using MongoDB.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
