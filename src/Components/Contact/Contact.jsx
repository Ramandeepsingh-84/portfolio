import React from "react";
import Swal from "sweetalert2";

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "26fcb97b-c709-42a7-9f03-a75223e7741c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      Swal.fire({
        title: "Success!",
        text: "Message Sent Successfully to Ramandeep Singh 😊",
        icon: "success"
      });
      event.target.reset();
    } else {
      Swal.fire({
        title: "OOPS",
        text: "Failed ,Try again",
        icon: "error"
      });
      event.target.reset();
    }
  };

  return (
    <div id="Contact" className="bg-[#1D3557] text-white min-h-screen flex flex-col justify-center items-center px-6 py-12 md:px-12">
      
      {/* Contact Heading */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-5xl font-bold">Contact Us</h1>
        <p className="text-sm md:text-lg mt-2">Feel Free to Reach Out!!</p>
      </div>

      {/* Contact Form */}
      <div className="w-full max-w-2xl bg-white p-6 md:p-10 rounded-lg shadow-lg text-black">
        <form onSubmit={onSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your name"
              required
              name='name'
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
              required
              name='email'
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Phone Number
            </label>
            <input
              name="phone_number"
              type="tel"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your phone number"
              required
            />
          </div>

          {/* <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Subject
            </label>
            <input
              name="subject"
              type="text"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter subject"
              required
            />
          </div> */}

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Message
            </label>
            <textarea
              name="message"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              rows="4"
              placeholder="Enter your message"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-md text-lg font-semibold transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
