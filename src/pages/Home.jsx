import React from "react";
import Layout from "../components/layout/Layout";
import { Link } from "react-router-dom";
import Banner from "../assets/banner.jpeg";
import "../style/Home.css";

const Home = () => {
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="headerContainer">
          <h1>Food Website</h1>
          <p>Best Food of India</p>
          <Link to="menu">
            <button>Order Now</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
