import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="bg-gradient-to-b from-black to-gray-800 py-16 px-8 md:h-screen md:pt-0"
    >
      <div className="md:max-w-screen-lg mx-auto flex flex-col">
        <div>
          <h1 className="inline text-4xl font-bold text-white border-b-4 border-gray-400">
            Contact
          </h1>
        </div>
        <p className="text-white pt-6 pb-12">
          Submit the form below to get in touch with me
        </p>
        <div className="w-full">
          <form
            action="https://getform.io/f/c6e09a3e-26c1-4559-a76f-7a5788022015"
            method="POST"
            className="flex flex-col items-center gap-4 md:w-3/4 mx-auto"
          >
            <input
              type="text"
              name="name"
              id="name"
              className="w-full p-2 rounded-md border-2 border-white outline-none text-gray-400 bg-transparent"
              placeholder="Enter your name"
            />
            <input
              type="text"
              name="email"
              id="email"
              className="w-full p-2 rounded-md border-2 border-white outline-none text-gray-400 bg-transparent"
              placeholder="Enter your email"
            />
            <textarea
              name="content"
              id="content"
              cols="30"
              rows="10"
              className="w-full p-2 rounded-md border-2 border-white outline-none text-gray-400 bg-transparent"
              placeholder="Enter your message"
            ></textarea>
            <div className="flex justify-center mt-4">
              <button className="py-4 px-8 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-md hover:scale-105 text-white duration-300">
                Let's talk
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
