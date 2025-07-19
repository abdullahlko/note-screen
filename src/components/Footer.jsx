import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="text-center text-sm text-gray-500 py-4 mt-10 border-t border-gray-300">
      © {year} <span className="font-semibold text-gray-700">TodoFlow</span> by{" "}
      <a
        href="https://www.linkedin.com/in/abdullahlko"
        target="_blank"
        rel="noopener noreferrer"
        className="font-bold text-indigo-600 hover:underline"
      >
        Abdullah Ansari
      </a>
      . All rights reserved.
    </footer>
  );
}

export default Footer;
