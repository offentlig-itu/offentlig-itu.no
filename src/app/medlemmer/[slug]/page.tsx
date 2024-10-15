"use client";

import React from 'react';

const MembersPage = () => {
  const members = [
    {
      name: "Lorem Ipsum",
      role: "Dolor Sit Amet",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque commodo, urna id facilisis posuere, sapien enim luctus purus, nec pharetra lorem quam vel lorem.",
    },
    {
      name: "Consectetur Adipiscing",
      role: "Elit Sed Do",
      bio: "Consectetur adipiscing elit. Fusce vel ligula nec justo pharetra volutpat a in velit. Donec auctor nulla eget velit sagittis tristique.",
    },
    {
      name: "Eiusmod Tempor",
      role: "Incididunt Labore",
      bio: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8">Medlemmer</h1>
      <ul className="space-y-8">
        {members.map((member, index) => (
          <li key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">{member.name}</h2>
            <p className="text-sm text-gray-500 mb-2">{member.role}</p>
            <p className="text-gray-600">{member.bio}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MembersPage;
