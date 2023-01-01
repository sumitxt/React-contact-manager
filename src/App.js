import ContactManager from "./components/ContactManager";

function App() {
    const contacts = ["James Smith", "Thomas Anderson", "Bruce Wayne"];

    return (
        <div>
            <ContactManager data={contacts}></ContactManager>
        </div>
    );
}


export default App;
