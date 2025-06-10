import React from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';

export default function Page() {
    return <div className="container py-4">
        <div className="row">
            <Header />
            <Nav />
            <div className="col-9">
                <h1>Contact</h1>
                <p>
                    This is the contact page, contact me at 123-456-7890</p>
            </div>
        </div>
    </div>
}