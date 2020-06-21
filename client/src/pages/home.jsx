import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

export default function Home() {

    return (
        <Jumbotron className="mt-5">
            <h1>Data Visualization Demo App</h1>
            <p>
                This app utilizes data fetched from a SQL Database for data visualization purposes.
            </p>
            <p>
                <Button variant="primary" href="https://github.com/singhmi4/ws-product-nodejs-EQWorks" target="_blank" >Source Code</Button>
            </p>
        </Jumbotron>
    )
}