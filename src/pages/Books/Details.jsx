
import { useLoaderData } from 'react-router-dom';
import Detail from './Detail';
import { useEffect, useState } from 'react';

const Details = () => {
    const [bookDetails, setBookDetails] = useState([])
    useEffect(() => {
        fetch()
    }, [])
    return (
        <div>
            {
                detail.map((detail) => <Detail key={detail.id} detail={detail}></Detail>)
            }
        </div>
    );
};

export default Details;