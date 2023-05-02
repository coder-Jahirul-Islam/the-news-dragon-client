import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useLoaderData,  } from 'react-router-dom';

const News = () => {
    const news = useLoaderData();
    const { _id, title, image_url, details, author, total_view, rating } = news;
    console.log(news)

    return (

        <Card>
            <Card.Img variant="top" src={image_url} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                  {details}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>

    );
};

export default News;