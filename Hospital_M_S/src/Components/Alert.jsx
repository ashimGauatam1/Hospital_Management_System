import React, { useState } from 'react';

const Alert = () => {
  const [close, setClose] = useState(true);
  const handleClose = () => {
    setClose(false);
  };

  return (
    close && (
      <div className="font-[sans-serif] space-y-6 py-20 -mb-20">
        <div className="flex items-start max-sm:flex-col bg-green-100 text-green-800 p-4 rounded-lg relative" role="alert">
          <div className="flex items-center max-sm:mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-[18px] fill-green-500 inline mr-3" viewBox="0 0 512 512">
              <ellipse cx="256" cy="256" fill="#32bea6" data-original="#32bea6" rx="256" ry="255.832" />
              <path fill="#fff" d="m235.472 392.08-121.04-94.296 34.416-44.168 74.328 57.904 122.672-177.016 46.032 31.888z"
                data-original="#ffffff" />
            </svg>
            <strong className="font-bold text-sm">Success!</strong>
          </div>

          <span className="block sm:inline text-sm ml-4 mr-8 max-sm:ml-0 max-sm:mt-2">
            This is a success message that requires your attention requires your attention.
          </span>

          <svg xmlns="http://www.w3.org/2000/svg" onClick={handleClose}
            className="w-7 hover:bg-green-200 rounded-lg transition-all p-2 cursor-pointer fill-green-500 absolute right-4 top-1/2 -translate-y-1/2" viewBox="0 0 320.591 320.591">
            <path
              d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
              data-original="#000000" />
            <path
              d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
              data-original="#000000" />
          </svg>
        </div>
      </div>
    )
  );
};

export default Alert;
