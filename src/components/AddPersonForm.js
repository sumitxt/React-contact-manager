import React, {useState} from 'react';

const AddPersonForm = (props) => {
    const [person, setPerson] = useState("");

    function handleChange(e) {
        setPerson(e.target.value)
    }

    function handleSubmit(e) {
        if (person !== '') {
            props.handleSubmit(person);
            setPerson('')
        }
        e.preventDefault()
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <form onSubmit={handleSubmit} className="form-control">
                    <input type="text" className="col-8" placeholder="Add new contact" onChange={handleChange}
                           value={person}/>
                    <button className="btn btn-primary col-4" type="submit">Add</button>
                </form>
            </div>
        </div>
    );
};

export default AddPersonForm;