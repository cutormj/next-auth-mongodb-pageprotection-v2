// components/NavBar.tsx
"use client"

import { useState } from 'react';
import Image from 'next/image';
import Logout from './Logout';

interface User {
  name: string;
  email: string;
  image: string;
}

const NavBar: React.FC<{ user: User }> = ({ user }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-white p-3 flex justify-between items-center shadow-lg">
      <div className=" text-lg">APP NAME Update me! Components/NavBar.tsx</div>
      <div className="relative">
        <div className="w-10 h-10 rounded-full cursor-pointer overflow-hidden" onClick={() => setDropdownOpen(!dropdownOpen)}>
          <Image
            src={user.image}
            alt="User"
            width={40}
            height={40}
            className="object-cover"
          />
        </div>
        {dropdownOpen && (
          <div className="absolute right-0  w-64 bg-gray-200 rounded-md shadow-md">
            <div className="flex flex-row p-2 ">
                <div className='basis-3/4'>
                    {user.name}
                    <div><code>{user.email}</code></div>
                </div>
                <div className='basis-1/4'>
                    <Logout />
                </div>
            </div>
            
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
