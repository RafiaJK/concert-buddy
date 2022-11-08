import React, { useState, useEffect } from "react";
function EditContactForm(){
    //EDIT CURRENT CONTACT INFO
    const [editedContact, setEditedContact] = useState(contact)

    function editContact(e) {
        e.preventDefault()
    
        fetch(`/${contact.id}`, {
          method: "PATCH",
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(editedContact),
        });
        setEditedContact(editedContact)
      }
}



    export default EditContactForm;