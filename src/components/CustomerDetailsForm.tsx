import { useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';

export default function CustomerDetailsForm() {
    const params = useParams<{ id: string }>();
    // console.log(params);
    return (
        <div className="wrapper">
            <h1>Customer Details Form #{params.id}</h1>
        </div>
    );
}