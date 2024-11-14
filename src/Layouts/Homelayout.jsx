import React from 'react';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';

const Homelayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
                <section className='w-11/12 mx-auto py-7'>
                    <LatestNews></LatestNews>
                </section>
            </header>
            <nav>

            </nav>
            <main>

            </main>
        </div>
    );
};

export default Homelayout;