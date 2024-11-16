import React, { useState } from "react";

function TestForm() {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const scriptURL =
      "https://script.google.com/macros/s/AKfycbyrOzs8Q6aMlGqzWoMV_BEh3FbSvhDbekc0H3jxuVTwCyJBaPPTeeM_ikwb1WrKBe5w/exec"; // Replace with your web app URL

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        body: JSON.stringify({
          name: "John Doe",
          number: "1234567890",
          email: "john.doe@example.com",
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = await response.json();
      if (result.status === "success") {
        alert("Form submitted successfully!");
      }
    } catch (error) {
      console.error("Error!", error);
      alert("Failed to submit the form.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 w-[90%] justify-center items-center"
    >
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="number"
        name="number"
        placeholder="Number"
        value={formData.number}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default TestForm;
