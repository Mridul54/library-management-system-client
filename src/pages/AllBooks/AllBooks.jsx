import { useLoaderData } from "react-router-dom";
import BooksCard from "./BooksCard";


const AllBooks = () => {
    const books = useLoaderData();
    return (
        <div className="m-20">
            <h1 className="text-6xl text-center font-bold text-emerald-700 mb-20" >Our all books</h1>
            <div className="grid md:grid-cols-2 gap-6">
                {
                    books.map(book => <BooksCard
                    key={book._id}
                    book={book}></BooksCard>)
                }
            </div>
        </div>
    );
};

export default AllBooks;