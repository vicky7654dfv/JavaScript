import { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
        ...formData,
        [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Contact form submitted:', formData);
        setFormData({ name: '', email: '', phone: '', message: '' });
    };

    return (
        <Container maxWidth="sm">
        <Box sx={{ my: 4 }}>
            <Typography variant="h4" component="h1" gutterBottom>
            Contact Us
            </Typography>
            <form onSubmit={handleSubmit}>
            <TextField
                fullWidth
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                margin="normal"
                required
            />
            <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                margin="normal"
                required
            />
            <TextField
                fullWidth
                label="Phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                margin="normal"
                required
            />
            <TextField
                fullWidth
                label="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                margin="normal"
                multiline
                rows={4}
                required
            />
            <Box sx={{ mt: 2 }}>
                <Button variant="contained" color="primary" type="submit">
                Submit
                </Button>
            </Box>
            </form>
        </Box>
        </Container>
    );
};

export default ContactForm;