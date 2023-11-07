import { Link } from "react-router-dom";


const BooksCard = ({book}) => {

    const {_id, photo, name, author, category, rating} = book;
    return (
        <div className=" card-side bg-base-100 shadow-xl">
            <figure><img className="h-[800px] w-76" src={photo} alt="Movie"/></figure>
            <div className="card-body px-10 text-center">
                <h2 className=" text-3xl font-bold">{name}</h2>
                <p className="text-2xl font-semibold">Author: {author}</p>
                <p className="text-xl">Category: {category}</p>
                <h3>{rating}</h3>
                <div className="">
                    <Link to={`/updateBook/${_id}`}>
                    <button className=" w-full btn btn-outline btn-success">Update Book</button>
                    </Link>
                
                </div>
            </div>
        </div>
    );
};

export default BooksCard;