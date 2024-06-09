import { Form, Button } from "react-bootstrap";

import { useState } from "react";

export default function ContactForm() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: ""
    })
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        message: ""
    });


    function validateEmail(email) {
        return /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(email.trim().toLowerCase());
    }

    function validateForm() {
        let valid = true;
        // Reset all error messages
        setErrors({ name: "", email: "", message: "" });

        // Check if email entered is valid
        if (!validateEmail(form.email)) {
            setErrors({
                ...errors,
                email: "email must be valid address"
            })
            valid = false
        }

        // Check all fields are filled
        Object.keys(form).map(field => {
            if (form[field].length === 0) {
                setErrors({
                    ...errors,
                    [field]: `${field} is a required field`
                })
                valid = false
            }
        })
        // return true if no errors were found
        return valid
    }

    const handleSubmit = e => {
        e.preventDefault()

        // Check all fields are valid
        if (!validateForm()) {
            console.log('Errors detected');
            return;
        }

        // Succesfully send message
        console.log("Message sent");
        // Clear form
        handleReset();
    }

    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    const handleReset = () => {
        Array.from(document.querySelectorAll("input, textarea")).forEach(
            input => (input.value = "")
        );
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                    name="name"
                    type="text"
                    onChange={handleChange}
                    placeholder="Enter name" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    name="email"
                    type="email"
                    onChange={handleChange}
                    placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control
                    name="message"
                    as="textarea"
                    rows={3}
                    onChange={handleChange}
                    placeholder="Send me a message" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
        // <form onSubmit={handleSubmit}>
        //     <input
        //         name="name"
        //         type="text"
        //         onChange={handleChange}
        //         placeholder="Name" />
        //     <input
        //         name="email"
        //         type="text"
        //         onChange={handleChange}
        //         placeholder="Email Address" />
        //     <textarea
        //         name="message"
        //         type="text"
        //         onChange={handleChange}
        //         placeholder="Send me a message" />
        //     <button type="submit">
        //         Submit
        //     </button>
        // </form>

    )
}