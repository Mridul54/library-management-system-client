import img1 from "../../../assets/library banner1.jpg";
import img2 from "../../../assets/library banner2.jpg";
import img3 from "../../../assets/library banner3.jpg";
import img4 from "../../../assets/library banner4.jpg";

const Banner = () => {
    return (
        <div className="carousel w-full h-[600px]">
             
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img2} className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <div className="text-white space-y-7 w-1/2 pl-12">
                        <h2 className="text-6xl font-bold">
                        Books open doors to new worlds and endless possibilities.</h2>
                        <p> Libraries are havens of knowledge, where the past and present coexist in the form of books, offering boundless opportunities for learning and exploration.</p>
                        <div className="">
                            <button className="btn btn-outline btn-info  mr-5">Discover More </button>
                            
                        </div>
                    </div>

                </div>
                <div className="absolute flex gap-x-96 transform -translate-y-1/2  right-96 bottom-0">
                <a href="#slide4" className="btn btn-outline btn-success  mr-5">❮</a> 
                <a href="#slide2" className="btn btn-outline btn-success ">❯</a>
                </div>
            </div><div id="slide2" className="carousel-item relative w-full">
                <img src={img1} className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <div className="text-white space-y-7 w-1/2 pl-12">
                        <h2 className="text-6xl font-bold">
                        Books open doors to new worlds and endless possibilities.</h2>
                        <p> Libraries are havens of knowledge, where the past and present coexist in the form of books, offering boundless opportunities for learning and exploration.</p>
                        <div className="">
                            <button className="btn btn-outline btn-info  mr-5">Discover More </button>
                            
                        </div>
                    </div>

                </div>
                <div className="absolute flex gap-x-96 transform -translate-y-1/2  right-96 bottom-0">
                <a href="#slide1" className="btn btn-outline btn-success  mr-5">❮</a> 
                <a href="#slide3" className="btn btn-outline btn-success ">❯</a>
                </div>
            </div><div id="slide3" className="carousel-item relative w-full">
                <img src={img4} className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <div className="text-white space-y-7 w-1/2 pl-12">
                        <h2 className="text-6xl font-bold">
                        Books open doors to new worlds and endless possibilities.</h2>
                        <p> Libraries are havens of knowledge, where the past and present coexist in the form of books, offering boundless opportunities for learning and exploration.</p>
                        <div className="">
                            <button className="btn btn-outline btn-info mr-5">Discover More </button>
                            
                        </div>
                    </div>

                </div>
                <div className="absolute flex gap-x-96 transform -translate-y-1/2  right-96 bottom-0">
                <a href="#slide2" className="btn btn-outline btn-success  mr-5">❮</a> 
                <a href="#slide4" className="btn btn-outline btn-success ">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img3} className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <div className="text-white space-y-7 w-1/2 pl-12">
                        <h2 className="text-6xl font-bold">
                        Books open doors to new worlds and endless possibilities.</h2>
                        <p> Libraries are havens of knowledge, where the past and present coexist in the form of books, offering boundless opportunities for learning and exploration.</p>
                        <div className="">
                            <button className="btn btn-outline btn-info  mr-5">Discover More </button>
                            
                        </div>
                    </div>

                </div>
                <div className="absolute flex gap-x-96 transform -translate-y-1/2  right-96 bottom-0">
                <a href="#slide3" className="btn btn-outline btn-success  mr-5">❮</a> 
                <a href="#slide1" className="btn btn-outline btn-success ">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;