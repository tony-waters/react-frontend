import Sammy from "../images/small-profile.jpeg"
import "../css/main.css"

export default function Welcome() {
    return (
        <>
            <div className="wrapper">
                <h1>Welcome To My App</h1>
                <p>Blah blah blah</p>
                <img src={Sammy} alt="Sammy Image" width={200} height={200} />
            </div>
        </>
    );
}