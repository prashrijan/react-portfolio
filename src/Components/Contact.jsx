import React from "react";

const Contact = () => {
  return (
    <div className="flex items-center justify-center min-h-screen-minus-80 bg-gray-100 p-4 md:p-0">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-lg w-full text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">
          Let's Connect!
        </h2>
        <p className="text-gray-600 mb-6">
          Have a project idea or just want to say hi? Drop me a message, and
          I'll get back to you soon!
        </p>
        <form>
          <div className="w-full mb-5">
            <label
              htmlFor="name"
              className="block text-left text-gray-700 font-medium mb-2"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="w-full mb-5">
            <label
              htmlFor="email"
              className="block text-left text-gray-700 font-medium mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="w-full mb-5">
            <label
              htmlFor="message"
              className="block text-left text-gray-700 font-medium mb-2"
            >
              Your Message
            </label>
            <textarea
              id="message"
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Write your message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
