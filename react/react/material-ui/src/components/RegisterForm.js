import { Button, Stack, TextField } from "@mui/material";
import React, { useState } from "react";

const RegisterForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`
      User name is ${firstName} ${lastName} logged in with the mail ${email} and his birthday is ${dateOfBirth} and set a loosuku ${password}`
    );
  };

  return (
    <React.Fragment>
      <h2>Register Form</h2>
      <form onSubmit={handleSubmit}>
        <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
          <TextField
            type="text"
            variant="outlined"
            color="secondary"
            label="First Name"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
            fullWidth
            required
          />
          <TextField
            type="text"
            variant="outlined"
            color="secondary"
            label="Last Name"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
            fullWidth
            required
          />
        </Stack>
        <TextField
          type="email"
          variant="outlined"
          color="secondary"
          label="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          fullWidth
          required
          sx={{ mb: 4 }}
        />
        <TextField
          type="password"
          variant="outlined"
          color="secondary"
          label="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
          fullWidth
          sx={{ mb: 4 }}
        />
        <TextField
          type="date"
          variant="outlined"
          color="secondary"
          label="Date of Birth"
          onChange={(e) => setDateOfBirth(e.target.value)}
          value={dateOfBirth}
          fullWidth
          required
          sx={{ mb: 4 }}
        />
        <Button variant="outlined" color="secondary" type="submit">Register</Button>
      </form>
    </React.Fragment>
  );
};

export default RegisterForm;