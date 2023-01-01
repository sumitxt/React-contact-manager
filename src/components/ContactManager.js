import React, {useState} from 'react';
import AddPersonForm from "./AddPersonForm";
import PeopleList from "./PeopleList";

const ContactManager = (props) => {
    const [contacts, setContacts] = useState(props.data);

    function addPerson(name) {
        setContacts([...contacts, name]);
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <AddPersonForm handleSubmit={addPerson}></AddPersonForm>
                    <PeopleList data={contacts}></PeopleList>
                </div>
            </div>
        </div>
    );
};


export default ContactManager;