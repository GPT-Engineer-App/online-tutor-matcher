import { Link } from "react-router-dom";

const ProfilePage = () => {
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
        <div className="flex flex-col items-center">
          <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[200px] mb-4" />
          <h1 className="text-3xl font-bold mb-2">John Doe</h1>
          <p className="text-lg mb-4">Experienced Math Tutor</p>
          <p className="text-lg mb-4">Subjects: Math, Algebra, Geometry</p>
          <p className="text-lg mb-4">Contact: johndoe@example.com</p>
        </div>
      </main>
      <footer className="p-4 bg-gray-800 text-white text-center">
        <p>Contact us: info@tutormatch.com</p>
        <p>Follow us on social media</p>
      </footer>
    </div>
  );
};

export default ProfilePage;