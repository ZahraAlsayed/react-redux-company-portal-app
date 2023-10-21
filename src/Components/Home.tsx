import React from 'react';
import { Link } from 'react-router-dom'; 

import '../home.css'
const Home = () => {
  return (
    <div>
    <section id="home" className="section">
        <div className="content">
            <div className="text">
                <h1>Welcome to Company Portal</h1>
                <h3>Your gateway to explore and manage companies.</h3>
                <p>Explore a wide range of companies and their details..</p>
                <Link to="/companies" className="navbar-link">Browse Companies</Link>
            </div>
            <div className="image">
                <img src="src/Components/company-cuate.png" alt="Company Portal Image" />
            </div>
        </div>
    </section>
    <footer>
        <p>&copy; 2023 Company Portal App</p>
    </footer>
</div>

  );
};

export default Home;
