import React from "react";

const Footer = () => {
  return (
    <div className="container mt-[72px] mb-[112px] flex items-center justify-between">
      <img src="/images/logo.svg" alt="footer logo" className="w-[200px]" />

      <div className="flex items-center space-x-4 text-sm">
        <p className="underline underline-offset-2">Terms and Conditions</p>
        <p className="underline underline-offset-2">Privacy Policy</p>
        <p className="underline underline-offset-2">Contact Us</p>
        <p>Copyright © 2024. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
