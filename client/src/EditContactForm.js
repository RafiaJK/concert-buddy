import React, { useState, useEffect } from "react";
function EditContactForm({contact}) {
  //EDIT CURRENT CONTACT INFO
  const [editedContact, setEditedContact] = useState(contact)

  function editContact(e) {
    e.preventDefault()
      fetch(`/contacts/${contact.id}`, {
      method: "PATCH",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formInput)
    });
    //setEditedContact(editedContact)
  }

  function handleChange(e) {
    setFormInput({ ...formInput, [e.target.name]: e.target.value })
}

  const [formInput, setFormInput] = useState({
    bio: "",
    photo: "",
    email: "",
    instagram: "",
    twitter: ""
  })


  return (
    <div className="contact-form">
      <h2></h2>
      <form onSubmit={editContact}>
        <input onChange={handleChange} value={formInput.bio} type="text" name="bio" placeholder="Bio" />
        <input onChange={handleChange} value={formInput.photo} type="text" name="photo" placeholder="photo" />
        <input onChange={handleChange} value={formInput.email} type="text" name="email" placeholder="Email" />
        <input onChange={handleChange} value={formInput.instagram} type="text" name="instagram" placeholder="Instagram" />
        <input onChange={handleChange} value={formInput.twitter} type="text" name="twitter" placeholder="Twitter" />
        <button type="submit">Save</button>
      </form>
    </div>

  );
}

export default EditContactForm;