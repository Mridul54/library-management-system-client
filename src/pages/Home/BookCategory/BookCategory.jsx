import { useEffect, useState } from "react";
import CategoryCard from "./categoryCard";
import { Link } from "react-router-dom";


const BookCategory = () => {
    const [bookCategory, setBookCategory] = useState([]);

    useEffect(() => {
        fetch('https://library-management-system-server-6appjq3so-mridul544564.vercel.app/category')
        .then(res => res.json())
        .then(data => setBookCategory(data))
    }, [])
    console.log(bookCategory)
    return (
        <div className='text-center my-16'>
            <div>
                <div>
                    <h1 className='text-5xl font-bold'>Our Books Services</h1>
                    <p className='text-2xl mt-5'>
                    Books are windows to the imagination, transporting readers to uncharted realms, and are the timeless vessels of knowledge, offering endless adventures through the magic of words.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {
                        bookCategory.map((category) => <><Link to={`/book-category/${category.category_name}`}><CategoryCard 
                        key={category.id} 
                        category={category}></CategoryCard></Link></>)
                    }
                </div>
            </div>
        </div>
    );
};

export default BookCategory;