import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [notes, setNotes] = useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/notes")
      .then((res) => {
        console.log(res.data);
        setNotes(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <ul>
        {notes
          ? notes.map((note) => <li key={note._id}>{note.title}</li>)
          : "loading..."}
      </ul>
    </div>
  );
}

export default App;
