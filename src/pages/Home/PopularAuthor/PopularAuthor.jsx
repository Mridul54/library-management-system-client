import React from 'react';
import author1 from "../../../assets/American-writer-George-RR-Martin-2011.webp";
import author2 from "../../../assets/8cigckin175jtpsk3gs361r4ss._SY300_.jpg";
import author3 from "../../../assets/1677785736.png";
import author4 from "../../../assets/74mZWhn3_400x400.jpg";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram} from "react-icons/fa";

const PopularAuthor = () => {
    return (
        <div className=''>
            <h1 className='text-5xl font-bold text-center'>Most Popular Authors</h1>
            <div className='grid md:grid-cols-4 gap-10 my-16 bg-slate-100'>
                <div className=" w-72 bg-base-100 shadow-xl text-center  ">
                    <figure><img className='w-full h-[350px]' src={author1} alt="Shoes" /></figure>
                    <div className="my-6">
                        <h2 className="font-bold text-2xl">George R.R. Martin</h2>
                        <p className='py-3'>17+ published book</p>
                        <h3 className='flex gap-3 justify-center'>
                            <FaFacebook></FaFacebook>
                            <FaTwitter></FaTwitter>
                            <FaLinkedin></FaLinkedin>
                            <FaInstagram></FaInstagram>
                        </h3>
                    </div>
                </div>
                <div className="w-72 bg-base-100 shadow-xl text-center  ">
                    <figure><img className='w-full h-[350px]' src={author2} alt="Shoes" /></figure>
                    <div className="my-6">
                        <h2 className="font-bold text-2xl">J.K. Rowling</h2>
                        <p className='py-3'>17+ published book</p>
                        <h3 className='flex gap-3 justify-center'>
                            <FaFacebook></FaFacebook>
                            <FaTwitter></FaTwitter>
                            <FaLinkedin></FaLinkedin>
                            <FaInstagram></FaInstagram>
                        </h3>
                    </div>
                </div>
                <div className=" w-72 bg-base-100 shadow-xl text-center  ">
                    <figure><img className='w-full h-[350px]' src={author3} alt="Shoes" /></figure>
                    <div className="my-6">
                        <h2 className="font-bold text-2xl">J.R.R. Tolkien</h2>
                        <p className='py-3'>17+ published book</p>
                        <h3 className='flex gap-3 justify-center'>
                            <FaFacebook></FaFacebook>
                            <FaTwitter></FaTwitter>
                            <FaLinkedin></FaLinkedin>
                            <FaInstagram></FaInstagram>
                        </h3>
                    </div>
                </div>
                <div className=" w-72 bg-base-100 shadow-xl text-center  ">
                    <figure><img className='w-full h-[350px]' src={author4} alt="Shoes" /></figure>
                    <div className="my-6">
                        <h2 className="font-bold text-2xl">Alex Michaelides</h2>
                        <p className='py-3'>17+ published book</p>
                        <h3 className='flex gap-3 justify-center'>
                            <FaFacebook></FaFacebook>
                            <FaTwitter></FaTwitter>
                            <FaLinkedin></FaLinkedin>
                            <FaInstagram></FaInstagram>
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularAuthor;