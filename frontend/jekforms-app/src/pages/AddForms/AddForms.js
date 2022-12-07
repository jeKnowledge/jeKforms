import { useState } from "react";
import axios from "axios";
import "./AddForms.css";

const AddForms = () => {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [admin, setAdmin] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = { name, link, admin };
    console.log(form);
    axios.post(`http://127.0.0.1:8000/home/forms/`,
        {
          forms_name: name,
          forms_admin: admin,
          date_limit: "2022-11-27",
          forms_url: link,
          externo: false,
          closed: false,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(() => {
        console.log("new form added");
      });
  };
  return (
    <div className="create">
      <h2> Add new form </h2>
      <form onSubmit={handleSubmit}>
        <label>Form name:</label>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Form link: </label>
        <input
          type="text"
          required
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
        <label>Form admin:</label>
        <input
          type="text"
          required
          value={admin}
          onChange={(e) => setAdmin(e.target.value)}
        />
        <button>Add Form</button>
      </form>
    </div>
  );
};
export default AddForms;
