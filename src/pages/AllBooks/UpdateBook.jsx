import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateBook = () => {
    const book = useLoaderData();
    const {_id, photo, name, quantity, author, category, description, rating} = book;

    const handleUpdateBook = event => {
        event.preventDefault();

        const form = event.target;
        const photo = form.photo.value;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const author = form.author.value;
        const category = form.category.value;
        const description = form.description.value;
        const rating = form.rating.value;
        

        const updateBook = {photo, name, quantity, author, category, description, rating};
        console.log(updateBook);

        fetch(`http://localhost:5000/book/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateBook)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.modifiedCount > 0){
                    Swal.fire({
                        title: 'Success',
                        text: "Book updated successfully",
                        icon: "success",
                        confirmButtonText: "Cool"
                    })
                }
            })
    }


    return (
        <div className="bg-sky-200 p-24 mt-10 max-w-5xl mx-auto">
        <h2 className="text-5xl font-bold text-center pb-10 ">Update Book: {name}</h2>
        <form onSubmit={handleUpdateBook}>
        <div className="form-control md:w-full">
                    <label className="label">
                        <span className="label-text font-semibold text-xl">Photo URL</span>
                    </label>
                    <label className="input-group">
                        
                        <input type="text" name="photo" defaultValue={photo} placeholder="Photo URL" className="input input-bordered w-full" />
                    </label>
                </div>
            <div className="flex gap-5 pb-5">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text font-semibold text-xl"> Name</span>
                    </label>
                    <label className="input-group">
                        
                        <input type="text" name="name" defaultValue={name} placeholder="Name" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text font-semibold text-xl">Quantity </span>
                    </label>
                    <label className="input-group">
                        
                        <input type="text" defaultValue={quantity} placeholder="Quantity of the book" name="quantity" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            <div className="flex gap-5 pb-5">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text font-semibold text-xl"> Author Name</span>
                    </label>
                    <label className="input-group">
                        
                        <input type="text" defaultValue={author} name="author" placeholder="Author Name" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text font-semibold text-xl">Category</span>
                    </label>
                    <label className="input-group">
                        
                        <input type="text" defaultValue={category} placeholder="Category" name="category" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            <div className="flex gap-5 pb-10">
                <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-semibold text-xl">Short Description</span>
                        </label>
                        <label className="input-group">
                            
                            <input type="text" defaultValue={description} placeholder="Short Description" name="description" className="input input-bordered w-full" />
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
            
            <input type="submit" value="Update Book" className="btn btn-block bg-sky-500 hover:bg-sky-700 text-white" />
        </form>
    </div>
    );
};

export default UpdateBook;