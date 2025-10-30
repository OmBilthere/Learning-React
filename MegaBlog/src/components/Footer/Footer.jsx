import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-800 text-white text-center p-3 text-sm">
      © {new Date().getFullYear()} My Appwrite App. All rights reserved.
    </footer>
  )
}

export default Footer
