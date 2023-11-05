import { useEffect, useState } from "react";
import CategoryCard from "./categoryCard";


const BookCategory = () => {
    const [bookCategory, setBookCategory] = useState([]);

    useEffect(() => {
        fetch('category.json')
        .then(res => res.json())
        .then(data => setBookCategory(data))
    }, [])
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
                        bookCategory.map(category => <CategoryCard 
                            key={category.id} 
                            category={category}></CategoryCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default BookCategory;