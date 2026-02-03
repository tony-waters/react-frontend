import { useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';

export default function CustomerDetailsEditForm() {
    const params = useParams<{ id: string }>();
    // console.log(params);
    return (
        <div className="wrapper">
            <h1>Customer Details Edit #{params.id}</h1>
        </div>
    );
}