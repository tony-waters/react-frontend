import { useParams } from "react-router-dom";

export default function CustomerDetails() {
    const params = useParams<{ id: string }>();
    // console.log(params);
    return (
        <div className="wrapper">
            <h1>Customer Details {params.id}</h1>
        </div>
    );
}