import React from "react";

const Footer = () => {
  return (
    <div className="text-gray-500 text-center flex flex-col justify-center items-center gap-2 mt-16 text-xs mb-5">
      <div>© 2023 Wessam. All rights reserved.</div>

      <div>
        About this website: built with React & Next.js, TypeScript, Tailwind CSS, Framer Motion, EmailJs and
        Vercel hosting.
      </div>
    </div>
  );
};

export default Footer;
