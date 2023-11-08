
import { Link } from 'react-router-dom';

const BookCard = ({book}) => {
    const { photo, name, author, category, rating} = book;
    return (
        <div>
            <h1></h1>
            <div className=" card-side bg-base-100 shadow-xl">
            <figure><img className="h-[800px] w-76" src={photo} alt="Movie"/></figure>
            <div className="card-body px-10 text-center">
                <h2 className=" text-3xl font-bold">{name}</h2>
                <p className="text-2xl font-semibold">Author: {author}</p>
                <p className="text-xl">Category: {category}</p>
                <h3>{rating}</h3>
                <div className="">
                    <Link to={'/details'}>
                    <button className="text-lg font-bold w-full btn btn-outline btn-success">Details</button>
                    </Link>
                
                </div>
            </div>
        </div>
        </div>
    );
};

export default BookCard;