import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Profile ()  {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-400 via-blue-500 to-blue-600">
      <div className="bg-white rounded-b-3xl px-4 py-6 mb-0">
        <div className="flex items-center justify-between">
          <button
            variant="ghost"
            size="icon"
            className="text-sky-500 hover:bg-sky-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <NavLink to="/">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
              </NavLink>

            </svg>
          </button>
          <h1 className="text-xl font-semibold text-sky-500">Perfil</h1>
          <div className="w-10"></div>
        </div>
      </div>

      <div className="px-6 pt-8">
        <h2 className="text-white text-lg font-semibold mb-4">Perfil</h2>
        <p className="text-white text-sm leading-relaxed opacity-90">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>
      </div>
    </div>
  );
};

