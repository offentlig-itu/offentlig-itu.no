"use client";

import React from 'react';
import Link from 'next/link';

const HomePage = () => {
  const images = [
    "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080",
    "https://images.unsplash.com/photo-1518837695005-2083093ee35b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080",
    "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080",
  ];

  const articles = [
    {
      title: "Lorem Ipsum Dolor Sit Amet",
      date: "1. januar 2024",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget nisl tincidunt, fermentum justo in, viverra arcu. Ut pretium dui non massa volutpat, vel tincidunt tortor lobortis.",
      url: "/articles/lorem-ipsum-1",
    },
    {
      title: "Sed Do Eiusmod Tempor Incididunt",
      date: "12. februar 2024",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      url: "/articles/lorem-ipsum-2",
    },
    {
      title: "Ut Enim Ad Minim Veniam",
      date: "23. mars 2024",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
      url: "/articles/lorem-ipsum-3",
    },
  ];

  return (
    <div className="flex flex-col justify-start items-center min-h-screen pt-12 text-center">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-10">
        Lorem Ipsum Dolor Sit Amet
      </h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mb-16">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.
      </p>


      <div className="w-full mt-10 overflow-hidden">
        <div className="animate-scroll flex space-x-4">
          {images.concat(images).map((image, index) => (
            <div key={index} className="w-1/3 flex-shrink-0">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>
      </div>


      <div className="mt-20 text-left w-full max-w-4xl space-y-8">
        {articles.map((article, index) => (
          <div key={index} className="p-6 bg-white rounded-lg shadow-md">
            <p className="text-sm text-gray-500">{article.date}</p>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              {article.title}
            </h3>
            <p className="text-gray-600 mb-4">{article.description}</p>
            <Link href={article.url} className="text-green-600 hover:text-green-800 font-medium">
              Les artikkel &rsaquo;
            </Link>
          </div>
        ))}
      </div>

      <style jsx>{`
        .animate-scroll {
          display: inline-flex;
          white-space: nowrap;
          animation: scroll 30s linear infinite;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
};

export default HomePage;
