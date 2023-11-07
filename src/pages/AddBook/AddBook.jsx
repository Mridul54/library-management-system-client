import Swal from "sweetalert2";


const AddBook = () => {
    const handleAddBook = event => {
        event.preventDefault();

        const form = event.target;
        const photo = form.photo.value;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const author = form.author.value;
        const category = form.category.value;
        const description = form.description.value;
        const rating = form.rating.value;
        

        const newBook = {photo, name, quantity, author, category, description, rating};
        console.log(newBook);

        fetch('http://localhost:5000/book', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newBook)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    Swal.fire({
                        title: 'Success',
                        text: "user added successfully",
                        icon: "success",
                        confirmButtonText: "Cool"
                    })
                }
            })
    }
    return (
        <div className="bg-sky-200 p-24 mt-10 max-w-5xl mx-auto">
        <h2 className="text-5xl font-bold text-center pb-10 ">Add a Book</h2>
        <form onSubmit={handleAddBook}>
        <div className="form-control md:w-full">
                    <label className="label">
                        <span className="label-text font-semibold text-xl">Photo URL</span>
                    </label>
                    <label className="input-group">
                        
                        <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
                    </label>
                </div>
            <div className="flex gap-5 pb-5">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text font-semibold text-xl"> Name</span>
                    </label>
                    <label className="input-group">
                        
                        <input type="text" name="name" placeholder="Name" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text font-semibold text-xl">Quantity </span>
                    </label>
                    <label className="input-group">
                        
                        <input type="text" placeholder="Quantity of the book" name="quantity" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            <div className="flex gap-5 pb-5">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text font-semibold text-xl"> Author Name</span>
                    </label>
                    <label className="input-group">
                        
                        <input type="text" name="author" placeholder="Author Name" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text font-semibold text-xl">Category</span>
                    </label>
                    <label className="input-group">
                        
                        <input type="text" placeholder="Category" name="category" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            <div className="flex gap-5 pb-10">
                <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-semibold text-xl">Short Description</span>
                        </label>
                        <label className="input-group">
                            
                            <input type="text" placeholder="Short Description" name="description" className="input input-bordered w-full" />
                        </label>
                </div>
                <div>
                    <label className="label">
                        <span className="label-text font-semibold text-xl">Rating</span>
                    </label>
                    <div className="rating rating-lg rating-half">
                        
                        <input type="radio" name="rating" className="rating-hidden" />
                        <input type="radio" name="rating" className="bg-green-500 mask mask-star-2 mask-half-1" />
                        <input type="radio" name="rating" className="bg-green-500 mask mask-star-2 mask-half-2" />
                        <input type="radio" name="rating" className="bg-green-500 mask mask-star-2 mask-half-1" checked />
                        <input type="radio" name="rating" className="bg-green-500 mask mask-star-2 mask-half-2" />
                        <input type="radio" name="rating" className="bg-green-500 mask mask-star-2 mask-half-1" />
                        <input type="radio" name="rating" className="bg-green-500 mask mask-star-2 mask-half-2" />
                        <input type="radio" name="rating" className="bg-green-500 mask mask-star-2 mask-half-1" />
                        <input type="radio" name="rating" className="bg-green-500 mask mask-star-2 mask-half-2" />
                        <input type="radio" name="rating" className="bg-green-500 mask mask-star-2 mask-half-1" />
                        <input type="radio" name="rating" className="bg-green-500 mask mask-star-2 mask-half-2" />
                    </div>
                </div>
            </div>
            
            <input type="submit" value="Add Book" className="btn btn-block bg-sky-500 hover:bg-sky-700 text-white" />
        </form>
    </div>
    );
};

export default AddBook;