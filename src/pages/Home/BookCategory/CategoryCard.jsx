

const CategoryCard = ({category}) => {
    const {category_name, img, button} = category;
    
    return (
        <div className="card card-side bg-base-100 shadow-xl mt-10">
            <figure><img className="h-[500px] w-96 " src={img} alt="Movie"/></figure>
            <div className="card-body my-auto">
                <h2 className="card-title text-2xl">{category_name}</h2>
                
                <div className="card-actions ">
                   <button className="btn btn-outline btn-info">{button}</button>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;