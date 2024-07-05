import { useState } from "react";
import { Link } from "react-router-dom";

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showAvailableOnly, setShowAvailableOnly] = useState(false);

  const tutors = [
    {
      name: "John Doe",
      description: "Experienced Math Tutor",
      available: true,
    },
    {
      name: "Jane Smith",
      description: "Looking for a Science Tutor",
      available: false,
    },
    // Add more tutors as needed
  ];

  const filteredTutors = tutors.filter(
    (tutor) =>
      tutor.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (!showAvailableOnly || tutor.available)
  );

  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center justify-between p-4 bg-gray-800 text-white">
        <div className="text-2xl font-bold">TutorMatch</div>
        <nav className="space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/search" className="hover:underline">Search</Link>
          <Link to="/profile" className="hover:underline">Profile</Link>
        </nav>
      </header>
      <main className="flex-grow p-4">
        <h1 className="text-3xl font-bold mb-4">Search for Tutors or Students</h1>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />
        <label className="flex items-center mb-4">
          <input
            type="checkbox"
            checked={showAvailableOnly}
            onChange={(e) => setShowAvailableOnly(e.target.checked)}
            className="mr-2"
          />
          Show available tutors only
        </label>
        <div className="grid gap-4">
          {filteredTutors.map((tutor, index) => (
            <div key={index} className="p-4 border border-gray-300 rounded">
              <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[100px] mb-2" />
              <h2 className="text-xl font-bold">{tutor.name}</h2>
              <p>{tutor.description}</p>
              <Link to="/profile" className="text-blue-500 hover:underline">View Profile</Link>
            </div>
          ))}
          
        </div>
      </main>
      <footer className="p-4 bg-gray-800 text-white text-center">
        <p>Contact us: info@tutormatch.com</p>
        <p>Follow us on social media</p>
      </footer>
    </div>
  );
};

export default SearchPage;