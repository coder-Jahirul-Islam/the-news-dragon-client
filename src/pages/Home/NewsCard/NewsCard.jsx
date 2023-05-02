import moment from 'moment';
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { FaRegBookmark, FaShareAlt, FaEye, FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {

    const { _id, title, image_url, details, author, total_view, rating } = news;
    return (
        <Card className="mb-4">
            <Card.Header className='d-flex align-items-center'>
                <Image className='justify-content-center ' style={{ height: '40px' }} src={author?.img} roundedCircle />
                <div className='ps-2 mt-3 flex-grow-1 justify-content-center'>
                    <p className='mb-0'>{author?.name}</p>
                    <p><small>{moment(author?.published_date).format('yyy-m-D')}</small></p>
                </div>
                <div>
                    <FaRegBookmark className='me-2'></FaRegBookmark>
                    <><FaShareAlt></FaShareAlt></>
                </div>

            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    {details.length < 250 ? <>{details}</> :
                        <>{details.slice(0, 250)}...<Link to={`/news/${_id}`}>Read More</Link> </>
                    }
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted d-flex align-items-center">
                <div className='flex-grow-1 d-flex align-items-center'>
                    <Rating
                        placeholderRating={rating.number}
                        readonly
                        emptySymbol={<FaRegStar></FaRegStar>}
                        placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                        fullSymbol={<FaStar></FaStar>}
                    >
                    </Rating>
                    <p className='mt-4'>{rating?.number}</p>
                </div>
                <div>
                    <FaEye className='me-2'></FaEye>{total_view}
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsCard;