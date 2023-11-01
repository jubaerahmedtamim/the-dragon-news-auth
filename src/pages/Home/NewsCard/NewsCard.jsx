import moment from 'moment';
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { Fa500Px, FaBookmark, FaRegEye, FaRegStar, FaShare, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {
    const { title, details, _id, image_url, author, total_view, rating } = news;
    return (
        <Card className="mb-5">
            <Card.Header className='d-flex align-items-center'>
                <Image style={{ height: "40px" }} src={author?.img} roundedCircle />
                <div className='ps-2 flex-grow-1'>
                    <p className='mb-0'>{author?.name}</p>
                    <p> <small> {moment(author?.published_date).format('yyyy-mm-d')}</small></p>
                </div>
                <div className=''>
                    <FaBookmark className='me-2'></FaBookmark>
                    <FaShare></FaShare>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    {details.length < 250 ?
                        <>{details}</> :
                        <>{details.slice(0, 250)}... <Link to={`/news/${_id}`}>Read more</Link> </>}
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted d-flex">
                <div className='flex-grow-1'>
                    <Rating
                        className='me-2 text-warning'
                        placeholderRating={rating.number}
                        emptySymbol={<FaRegStar></FaRegStar>}
                        placeholderSymbol={<FaStar></FaStar>}
                        fullSymbol={<FaStar></FaStar>}
                        readonly
                    >
                    </Rating>
                    <span>{rating?.number}</span>
                </div>
                <div>
                    <FaRegEye className='me-2'></FaRegEye>{total_view}
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsCard;