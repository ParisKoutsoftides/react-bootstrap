import React from 'react';
import '../App.css';
import SearchForm from '../components/SearchForm.js';



const Home = () => (

<div>
    <header className="App-header">
        <div className="bottomAlign fadedGrayContainer container">
            <SearchForm/>
        </div>
    </header>
    <div className="grayContainer">
        <div className="container servicesContainer">
            <div className="row">
                <div className="col-lg-4">
                    <h1>
                        First
                    </h1>
                    <p>
                        Test
                    </p>
                </div>

                <div className="col-lg-4">
                    <h1>
                        Second
                    </h1>
                    <p>
                        Test
                    </p>
                </div>

                <div className="col-lg-4">
                    <h1>
                        Third
                    </h1>
                    <p>
                        Test
                    </p>
                </div>


            </div>
        </div>
    </div>
</div>
);

export default Home;