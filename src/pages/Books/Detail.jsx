const Detail = ({ detail }) => {
    const { _id, photo, name, quantity, author, category, description, rating } = detail;
    return (
       <div className="w-5/12 mx-auto my-16">
         <div className="card card-side bg-base-100 shadow-xl">
            <figure><img className="h-96 w-96" src={photo} alt="Movie"/></figure>
            <div className= "mx-10 m-auto">
                <h2 className="card-title text-4xl font-bold">{name}</h2>
                <p className="text-xl my-3 font-semibold">Author: {author}</p>
                <div className="flex justify-between gap-5">
                <h3 className="text-xl">Quantity: {quantity}</h3>
                <p className="text-xl">{category}</p>
                </div>
                <p className="my-3 text-start text-lg"></p>
                <div className="flex justify-between
                 ">

                {/* You can open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn btn-outline btn-info" onClick={()=>document.getElementById('my_modal_4').showModal()}>Read</button>
                <dialog id="my_modal_4" className="modal  modal-bottom sm:modal-middle">
                <div className="modal-box w-11/12 max-w-5xl">
                    <h3 className="font-bold text-4xl text-center">{name}</h3> <hr />
                    <p className="py-4">{description}</p>
                    <div className="modal-action">
                    <form method="dialog">
                        {/* if there is a button, it will close the modal */}
                        <button className="btn btn-outline btn-info">Back</button>
                    </form>
                    </div>
                </div>
                </dialog>
                {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn btn-outline btn-info" onClick={()=>document.getElementById('my_modal_5').showModal()}>Borrow</button>
                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Borrow Date</h3>
                    <input className="border" type="date" name="" id="" />
                    <div className="modal-action">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-outline btn-info">Submit</button>
                    </form>
                    </div>
                </div>
                </dialog>
                </div>
            </div>
        </div>
       </div>
    );
};

export default Detail;