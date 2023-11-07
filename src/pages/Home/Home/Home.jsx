import Banner from "../Banner/Banner";
import BookCategory from "../BookCategory/BookCategory";
import PopularAuthor from "../PopularAuthor/PopularAuthor";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BookCategory></BookCategory>
            <PopularAuthor></PopularAuthor>
        </div>
    );
};

export default Home;