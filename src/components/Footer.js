import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-8 text-center text-gray-400 border-t border-gray-800">
      <p className="text-md mb-4">&copy; {new Date().getFullYear()} TOP DJ CRATES. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
