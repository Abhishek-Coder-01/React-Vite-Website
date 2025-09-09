import React from "react";
import { scrollToTop } from "../utils/scrollToTop";

const BackToTop = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      <button
        onClick={scrollToTop}
        className="w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center shadow-lg overflow-hidden relative transition-all duration-300 hover:w-36 hover:rounded-3xl hover:bg-purple-400"
      >
        <svg
          viewBox="0 0 384 512"
          className="w-3 transition-transform duration-300 transform group-hover:-translate-y-8"
        >
          <path
            d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
            fill="white"
          />
        </svg>
        <span className="absolute right-12 text-xs font-semibold text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
          Back to Top
        </span>
      </button>
    </div>
  );
};

export default BackToTop;
