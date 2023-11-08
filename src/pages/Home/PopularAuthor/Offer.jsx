

const Offer = () => {
    return (
        <div className="bg-sky-200 rounded-xl my-20">
            <div className="flex justify-evenly">
            <div className="m-auto">
                <h3 className="text-3xl font-bold">Deal of The Day</h3>
                <h1 className="text-5xl font-bold py-6">Upto 50% Off</h1>
                <p className="text-xl"> Libraries are havens of knowledge, where the <br /> past and present coexist in the form of books,  offering boundless <br /> opportunities for learning and exploration.</p>
                <input className="btn bg-sky-500 mt-6 hover:bg-sky-700"  type="button" value="Shop now" />
            </div>
            <div>
                <img className="h-96 p-10 rounded-xl" src="https://i.ibb.co/K73TfY7/2019-03-02-66706-1551461528-large.jpg" alt="" />
            </div>
        </div>
        </div>
    );
};

export default Offer;