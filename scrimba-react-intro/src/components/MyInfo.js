import React from 'react';
import Navbar from './Navbar';
import MainContent from './MainContent';
import Footer from './Footer';
import Jokes from './Jokes';

function MyInfo() {
    return (
        <div>
            <Navbar />
            <MainContent />
            <Footer />
            <Jokes />
        </div>
    )
}

export default MyInfo;