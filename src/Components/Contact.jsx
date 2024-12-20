import React from "react";

const Contact = ({ isDarkMode }) => {
  return (
    <div
      className={`flex items-center justify-center min-h-screen-minus-80 p-4 md:p-0 ${
        isDarkMode ? "bg-gray-800" : "bg-gray-100"
      }`}
    >
      <div
        className={`shadow-md rounded-lg p-8 max-w-lg w-full text-center ${
          isDarkMode ? "bg-gray-900 text-gray-200" : "bg-white text-gray-800"
        }`}
      >
        <h2
          className={`text-3xl font-bold mb-4 ${
            isDarkMode ? "text-white" : "text-gray-800"
          }`}
        >
          Let's Connect!
        </h2>
        <p className={`mb-6 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
          Have a project idea or just want to say hi? Drop me a message, and
          I'll get back to you soon!
        </p>
        <form>
          <div className="w-full mb-5">
            <label
              htmlFor="name"
              className={`block text-left font-medium mb-2 ${
                isDarkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                isDarkMode
                  ? "border-gray-600 bg-gray-800 text-gray-200 focus:ring-blue-500"
                  : "border-gray-300 focus:ring-blue-500"
              }`}
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="w-full mb-5">
            <label
              htmlFor="email"
              className={`block text-left font-medium mb-2 ${
                isDarkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                isDarkMode
                  ? "border-gray-600 bg-gray-800 text-gray-200 focus:ring-blue-500"
                  : "border-gray-300 focus:ring-blue-500"
              }`}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="w-full mb-5">
            <label
              htmlFor="message"
              className={`block text-left font-medium mb-2 ${
                isDarkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Your Message
            </label>
            <textarea
              id="message"
              rows="4"
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                isDarkMode
                  ? "border-gray-600 bg-gray-800 text-gray-200 focus:ring-blue-500"
                  : "border-gray-300 focus:ring-blue-500"
              }`}
              placeholder="Write your message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className={`font-medium rounded-lg text-sm w-full px-5 py-2.5 focus:ring-4 ${
              isDarkMode
                ? "text-white bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
                : "text-white bg-blue-600 hover:bg-blue-700 focus:ring-blue-300"
            }`}
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
