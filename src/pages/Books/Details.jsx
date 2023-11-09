import { useLoaderData } from 'react-router-dom';
import Detail from './Detail';

const Details = () => {
    const details = useLoaderData();

    console.log(details);

    return (
        <div>
            <Detail key={details._id} detail={details}></Detail>
        </div>
    );
};

export default Details;