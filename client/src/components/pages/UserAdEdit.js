import React, { useState } from "react";
import UserAdCard from "./UserAdCard";

const adInfo = [{
    name: 'title1',
    username: 'username1',
    location: 'location1'
},
{
    name: 'title2',
    username: 'username2',
    location: 'location2'
}
]

export default function Form() {
    //Create state variables for the fields in the form
    //We are also setting their initial values to an empty string
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        //Getting the value and name of the input which triggered the change
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        //Based on the input type, we set the state of either name, email, or message
        if (inputType === 'title') {
            setTitle(inputValue);
        }

        if (inputType === 'description') {
            setDescription(inputValue)
        }
    };

    const handleFormSubmit = (e) => {
        //preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();
        //We also want to check that name and message are empty.
        //We want to set an error message to display when needed.

        if (!title) {
            setErrorMessage('Please enter your post title');
            return;
        }

        if (!description) {
            setErrorMessage('Please enter a description');
            return;
        }
        alert(`${title} has been posted to Classifieds!`)

        //To clear out form after user is done using it
        setTitle('');
        setDescription('');

    };

    const titleInputCheck = (e) => {
        //preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();
        // Send error message if cursor moves away and input is empty 
        if (!title) {
            setErrorMessage('Please enter your post title');
            return;
        }
    };

    const descriptionInputCheck = (e) => {
        //preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();
        // Send error message if cursor moves away and input is empty 
        if (!description) {
            setErrorMessage('Please enter your description');
            return;
        }
    };

    return (
        <>
            <div>
                <form className='form'>
                    <input
                        value={title}
                        name="title"
                        onChange={handleInputChange}
                        type="text"
                        placeholder='Title'
                        onBlur={titleInputCheck}
                    />
                    <textarea
                        value={description}
                        name="description"
                        onChange={handleInputChange}
                        type="text"
                        placeholder='Description'
                        onBlur={descriptionInputCheck}
                    />
                    <button type='button' onClick={handleFormSubmit}>Submit</button>
                </form>
                {errorMessage && (
                    <div>
                        <p className='error-text'>{errorMessage}</p>
                    </div>
                )}
            </div>
            <div>
                {adInfo.map((ad) => (
                    <UserAdCard name={ad.title} />
                ))}
            </div>
        </>


    );

}
