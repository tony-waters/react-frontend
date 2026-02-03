import {NavLink, useParams} from "react-router-dom";
import Button from 'react-bootstrap/Button';

export default function CustomerDetails() {
    const params = useParams<{ id: string }>();
    // console.log(params);
    return (
        <div className="wrapper">
            <h1>
                Customer Details #{params.id}
                <NavLink key={params.id} to={`/customers/${params.id}/edit`}>Edit</NavLink>
            </h1>

        </div>
    );
}