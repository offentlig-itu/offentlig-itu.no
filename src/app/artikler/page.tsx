
import Link from 'next/link';

const ArticlesPage = () => {
  const articles = [
    {
      title: "Lorem Ipsum Dolor Sit Amet",
      date: "1. januar 2024",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget nisl tincidunt, fermentum justo in, viverra arcu.",
      url: "/articles/lorem-ipsum-1",
    },
    {
      title: "Sed Do Eiusmod Tempor Incididunt",
      date: "12. februar 2024",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
      url: "/articles/lorem-ipsum-2",
    },
    {
      title: "Ut Enim Ad Minim Veniam",
      date: "23. mars 2024",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      url: "/articles/lorem-ipsum-3",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8">Artikler</h1>
      <ul className="space-y-8">
        {articles.map((article, index) => (
          <li key={index} className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-sm text-gray-500">{article.date}</p>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">{article.title}</h2>
            <p className="text-gray-600 mb-4">{article.description}</p>
            <Link href={article.url} className="text-green-600 hover:text-green-800 font-medium">
              Les artikkel &rsaquo;
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArticlesPage;
