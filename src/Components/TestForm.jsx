import { useState } from "react";

const TestForm = () => {
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbz9sojySgm-2MnNNyQTZT88wczoAAV2i9JkMtT1QH4c4Ja3B-xIfm7oL9vcaOKAp9g/exec";
  const [formData, setFormData] = useState({
    name: "",
    nationality: "",
    countryCode: "",
    number: "",
    email: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(scriptURL, {
      method: "POST",
      body: new FormData(e.target),
    })
      .then(() => {
        setStatus("Thank you! Your form was submitted successfully.");
        setFormData({
          name: "",
          nationality: "",
          countryCode: "",
          number: "",
          email: "",
        });
        console.log(formData);
      })
      .catch((error) => {
        setStatus(`Error: ${error.message}`);
      });
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <form name="contact-form" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="nationality"
            className="block text-sm font-medium text-gray-700"
          >
            nationality
          </label>
          <input
            type="text"
            name="nationality"
            id="nationality"
            value={formData.nationality}
            onChange={handleChange}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="countryCode"
            className="block text-sm font-medium text-gray-700"
          >
            CountryCode
          </label>
          <input
            type="number"
            name="countryCode"
            id="countryCode"
            value={formData.countryCode}
            onChange={handleChange}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="number"
            className="block text-sm font-medium text-gray-700"
          >
            number
          </label>
          <input
            type="number"
            name="number"
            id="number"
            value={formData.number}
            onChange={handleChange}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            email
          </label>
          <input
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          ></input>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
      {status && <p className="mt-4 text-green-600">{status}</p>}
    </div>
  );
};

export default TestForm;
