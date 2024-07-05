import { Link } from "react-router-dom";

const HomePage = () => {
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
        <h1 className="text-3xl font-bold mb-4">Welcome to TutorMatch</h1>
        <p className="text-lg">Find the best tutors or students for your needs.</p>
      </main>
      <footer className="p-4 bg-gray-800 text-white text-center">
        <p>Contact us: info@tutormatch.com</p>
        <p>Follow us on social media</p>
      </footer>
    </div>
  );
};

export default HomePage;