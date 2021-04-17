import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({
    show: false,
    msg: "",
    type: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    if (!name) {
      //display alert if not typed
      showAlert(true, "danger", "please enter value");
    } else if (name && isEditing) {
      //deal with edit
    } else {
    }
    //show alert
    const newItem = {
      id: new Date().getTime(),
      title: name,
    };
    setList([...list, newItem]);
    setName("");
  }

  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };

  return (
    <section className='section-center'>
      <form className='grocery-form' onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} />}
        <h3>Grocery list</h3>
        <div className='form-control'>
          <input
            className='grocery'
            value={name}
            placeholder='e.g. cereal'
            type='text'
            onChange={(e) => setName(e.target.value)}
          />
          <button type='submit' className='submit-btn'>
            {isEditing.show ? "Edit" : "Submit"}
          </button>
        </div>
      </form>
      <div className='grocery-container'>
        <List items={list} />
        <button className='clear-btn' onClick={() => setList([])}>
          clear all
        </button>
      </div>
    </section>
  );
}

export default App;
