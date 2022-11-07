import React, { useState } from 'react';

function ContactForm({updateContacts, addContact}) {
    const [formInput, setFormInput] = useState({
        bio: "",
        photo: "",
        email: "",
        instagram: "",
        twitter: ""
    })

    function handleChange(e) {
        setFormInput({ ...formInput, [e.target.name]: e.target.value })
    }

    const newContact = {
        bio: formInput.bio,
        photo: formInput.photo, 
        email: formInput.email,
        instagram: formInput.instagram,
        twitter: formInput.twitter
    }

    function addContact(e) {
        e.preventDefault()
        updateContacts(newContact)

        fetch('/contacts', {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newContact)
        });
    }

    return (
        <div className="contact-form">
            <h2>Add Your Info</h2>
            <form onSubmit={addContact}>
                 <input onChange={handleChange} value={formInput.bio} type="text" name="bio" placeholder="Bio" />
                 <input onChange={handleChange} value={formInput.photo} type="text" name="photo" placeholder="photo" />
                <input onChange={handleChange} value={formInput.email} type="text" name="email" placeholder="Email" />
                <input onChange={handleChange} value={formInput.instagram} type="text" name="instagram" placeholder="Instagram" />
                <input onChange={handleChange} value={formInput.twitter} type="text" name="twitter" placeholder="Twitter" />
                <button type="submit">Submit</button>
            </form>
        </div>

    );

}

export default ContactForm;