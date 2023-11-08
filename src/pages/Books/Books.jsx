
import { useLoaderData } from 'react-router-dom';
import BookCard from './BookCard';

const Books = () => {
    const books = useLoaderData();
    
    return (
        
        <div className='grid md:grid-cols-2 gap-8'>
            {
                books.map(book => <BookCard key={book.id} book={book}></BookCard>)
            }
            
        </div>
    );
};

export default Books;