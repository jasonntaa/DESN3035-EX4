import React from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';

export default function Page() {
    return <div className="container py-4">
        <div className="row">
            <Header />
            <Nav />
            <div className="col-9">
                <h1>About</h1>
                <p>
                    This is an example project for DESN 3035 E4.</p>
            </div>
        </div>
    </div>
}