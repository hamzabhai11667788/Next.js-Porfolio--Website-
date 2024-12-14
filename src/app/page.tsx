'use client';

export default function Portfolio() {
  return (
    <div>
      {/* Navbar */}
      <header className="bg-gray-900 text-white fixed w-full z-10 shadow-md">
        <div className="container mx-auto flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold">My Portfolio</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#home" className="hover:text-blue-400">Home</a></li>
              <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
              <li><a href="#about" className="hover:text-blue-400">About</a></li>
              <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-gray-800 text-white h-screen flex flex-col justify-center items-center pt-20">
        {/* Replace with your picture */}
        <img
          src="/picture.png"
          alt="Your Picture"
          className="w-40 h-40 rounded-full border-4 border-blue-500 mb-6"
        />
        <h2 className="text-4xl font-bold mb-4">Hi, I'm [Hamza Salam]!</h2>
        <p className="text-xl text-gray-300">A Passionate Web Developer</p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src="/dell.png" alt="Project 1" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold">Project One</h3>
                <p className="text-gray-600">a previus project.</p>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src="/zee.png" alt="Project 2" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold">Project Two</h3>
                <p className="text-gray-600">A prevoius project.</p>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src="/make.png" alt="Project 3" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold">Project Three</h3>
                <p className="text-gray-600">A prevoues project.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I'm a web developer with experience in building modern, responsive websites using
            technologies like React, Next.js, and Tailwind CSS. I love crafting beautiful user
            interfaces and solving real-world problems.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
          <form className="max-w-md mx-auto">
            <input
              type="text"
              placeholder="Hamza salam"
              className="w-full mb-4 p-3 border rounded-lg"
            />
            <input
              type="text"
              placeholder="hamzabhai16789@gmail.com"
              className="w-full mb-4 p-3 border rounded-lg"
            />
            <textarea
              placeholder="Any quary pease inbox"
              className="w-full mb-4 p-3 border rounded-lg"
              rows="5"
            ></textarea>
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

