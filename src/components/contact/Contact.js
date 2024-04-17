import React, { useState } from "react";

const Contact = () => {
  const wrapperStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "9rem 0 5rem 0",
  };

  const containerStyle = {
    width: "100%",
    maxWidth: "600px", // Adjust the max-width as needed
    textAlign: "center",
    display: "flex",
    flexDirection: "column", // Set the container to a column layout
    paddingBottom: "2rem",
    boxShadow: "-2rem -1rem 15px rgba(128, 0, 128, 0.5)",
  };

  const contactFormStyle = {
    border: "1px solid #a334e6",
    padding: "1em",
    paddingBottom: "2rem",
  };

  const inputStyle = {
    width: "calc(50% - 10px)", // Adjust width as needed
    marginBottom: "10px",
    padding: "10px",
    border: "1px solid #a334e6", // Add border for username and email inputs
    borderRadius: "2rem",
  };

  const textareaStyle = {
    width: "calc(100% - 20px)", // Adjust width as needed
    height: "150px", // Adjust height as needed
    marginBottom: "10px",
    padding: "10px",
    border: "1px solid rgba(163, 52, 230, 0.5)", // Add faded border for textarea
    borderRadius: "1rem",
  };

  const submitButtonStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "6rem", // Adjust width as needed
    padding: "5px",
    border: "1px solid #789abc", // Add border for submit button
    cursor: "pointer",
    transition: "background-color 0.3s, color 0.3s", // Add transition effect
    borderRadius: "1rem",
    fontWeight: "bold",
  };

  const divStyle = {
    display: "flex",
    gap:"2rem",
    textAlign: "center",
  };


  const formStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "661072fe-ff6e-4d16-a97c-3d6f81fa90be");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div style={wrapperStyle}>
      <h1>
        <strong className="main-name">Feel Free to Contact us</strong>
      </h1>

      <div style={containerStyle}>
        <div style={contactFormStyle}>
          <form onSubmit={onSubmit} className="contactInputs" style={formStyle}>
            <div className="flex" style={divStyle}>
              <input
                type="text"
                name="username"
                placeholder="Username"
                autoComplete="off"
                required
                style={inputStyle}
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                autoComplete="off"
                required
                style={inputStyle}
              />
            </div>

            <textarea
              name="message"
              cols="50"
              rows="10"
              autoComplete="off"
              placeholder="Enter your message"
              required
              style={textareaStyle}
            ></textarea>

            <button type="submit" style={submitButtonStyle} className="submitButton">Send</button>
          </form>
          <span>{result}</span>
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15126.28620995241!2d73.92422475000001!3d18.59334505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c14df5c70e0d%3A0x2d19689e09e2fced!2sPhoenix%20Mall%20Washrooms!5e0!3m2!1sen!2sin!4v1658905192255!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Contact;
