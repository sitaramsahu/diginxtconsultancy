import React from "react";
import Navbar from "@/components/Navbar";

const page = () => {
  return (
    <div className="bg-black text-white min-h-screen py-20">
      <Navbar />
      <h1 className="text-4xl font-bold text-center text-yellow-400  p-8 rounded-lg">
        404 - Page Not Found
      </h1>
      <p className="text-center mt-4 text-gray-500">
        The page you are looking for does not exist.
      </p>
      <div className="text-center mt-6">
        <a
          href="/"
          className="text-yellow-400 hover:text-yellow-300 transition"
        >
          Go back to Home
        </a>
      </div>
    </div>
  );
};

export default page;
