import React, { useState, useContext } from 'react';
import {useHistory} from "react-router-dom";
import UserContext from './UserContext';

function ContactForm({updateContacts, addContact}) {
    const { user, setUser } = useContext(UserContext)

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

    const history = useHistory();

    function addContact(e) {
        e.preventDefault()
        updateContacts(newContact)
        history.push('/home');

        fetch('/contacts', {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newContact)
        });
    }

    const [contacts, setContacts] = useState([])
    function updateContacts(newContact) {
        const contactToAdd = { ...newContact, id: updateContacts.length + 1 }
        setContacts([...contacts], contactToAdd)
    }

    return (
        <div className="contact-form">
            <h2></h2>
            <form onSubmit={addContact}>
                <input className="contact-bio" onChange={handleChange} value={formInput.bio} type="text" name="bio" placeholder="Bio" />
                <input className="contact-photo" onChange={handleChange} value={formInput.photo} type="text" name="photo" placeholder="Photo" />
                <input className="contact-email" onChange={handleChange} value={formInput.email} type="text" name="email" placeholder="Email" />
                <input className="contact-insta" onChange={handleChange} value={formInput.instagram} type="text" name="instagram" placeholder="Instagram" />
                <input className="contact-twitter" onChange={handleChange} value={formInput.twitter} type="text" name="twitter" placeholder="Twitter" />
                <button className="contact-submit" type="submit">Submit</button>
            </form>
        </div>

    );

}

export default ContactForm;