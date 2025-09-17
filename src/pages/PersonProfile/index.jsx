import HireForm from './components/HireForm'
import {useParams} from "react-router-dom";

function PersonProfile(props) {
    const {people} = props;
    const {id} = useParams();
    const person = people.find((person) => (person.name.first + "_" + person.name.last) === id);

    if (!person) return <p>Loading...</p>

    return (
        <article>
            <h2>
                {person.name.first} {person.name.last}
            </h2>
            <HireForm person={person} onHire={() => props.onHire(person)} />
        </article>
    )
}

export default PersonProfile
