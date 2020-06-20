import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

export default function Home() {

    const history = useHistory();

    return (
        <Jumbotron className="mt-5">
            <h1>Data Visualization Demo App</h1>
            <p>
                This app utilizes data fetched from a SQL Database for data visualization purposes.
            </p>
            <p>
                <Button variant="primary" onClick={() => history.push('/map')} >Click Here For Geo Data Visualization!</Button>
            </p>
        </Jumbotron>
    )
}