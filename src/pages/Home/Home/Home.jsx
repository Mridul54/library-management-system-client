import Banner from "../Banner/Banner";
import BookCategory from "../BookCategory/BookCategory";
import Offer from "../PopularAuthor/Offer";
import PopularAuthor from "../PopularAuthor/PopularAuthor";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BookCategory></BookCategory>
            <Offer></Offer>
            <PopularAuthor></PopularAuthor>
            
        </div>
    );
};

export default Home;