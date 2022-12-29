
import './App.css';
import ContactManager from "./components/ContactManager";

function App() {
  const contacts = ["James Smith", "Thomas Anderson", "Bruce Wayne"];

  return (
    <div>
      {/* <HomePage></HomePage> */}
      {/* <Gitgoo></Gitgoo> */}
    <ContactManager data={contacts}></ContactManager>
    </div>
    );
}


export default App;
