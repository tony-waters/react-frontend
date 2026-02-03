import { useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';

export default function CustomerDetailsNewForm() {
    const params = useParams<{ id: string }>();
    // console.log(params);
    return (
        <div className="wrapper">
            <h1>New Customer</h1>
        </div>
    );
}