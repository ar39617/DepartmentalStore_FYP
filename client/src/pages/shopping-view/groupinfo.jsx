import React from 'react'
import { Link } from 'react-router-dom'

function Groupinfo() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-gray-800 via-gray-900 to-black p-6">
      <div className="bg-gray-900 text-white p-8 rounded-lg shadow-lg max-w-lg w-full">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-100 mt-4">
            Final Year Project
            <br />
            Project Name: Departmental Store
          </h1>
          <div className="mt-6 space-y-2">
            <h2 className="text-2xl font-semibold text-gray-300">Hafiz Anas Bin Malik F22_33_POST-ADP</h2>
            <h2 className="text-2xl font-semibold text-gray-300">Abdul Musawar F22_25_POST-ADP</h2>
            <h2 className="text-2xl font-semibold text-gray-300">M. Ahmed Raza F22_26_POST-ADP</h2>
          </div>
          <p className="mt-6 text-lg text-gray-400">
            Go to the <Link
              className="font-medium text-blue-400 hover:underline"
              to="/auth/login"
            >
              Login Page
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Groupinfo;
