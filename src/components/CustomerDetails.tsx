import { useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';

export default function CustomerDetails() {
    const params = useParams<{ id: string }>();
    // console.log(params);
    return (
        <div className="wrapper">
            <h1>Customer Details #{params.id} <Button>Edit</Button></h1>
        </div>
    );
}