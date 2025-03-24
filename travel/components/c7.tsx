"use client";

export default function C7() {
  return (
    <div className="w-full mt-20" id="c7">
      <div className="bg-gray-200 text-center py-10 px-4">
        <h2 className="text-3xl font-semibold text-sky-950">
          Contact our Travel Planner
        </h2>
        <p className="text-gray-600 mt-2">
          Move one step closer to your dream vacation
        </p>
        <div className="mt-4 flex justify-center space-x-4">
          <button className="bg-gray-900 text-white px-6 py-2 rounded-full text-sm font-semibold  hover:bg-white hover:text-black hover:border border-1 border-black transition duration-300">
            GET IN TOUCH NOW
          </button>
          <button className="border border-gray-900 text-gray-900 px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-900 hover:text-white transition">
            CALL US
          </button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center py-10 px-6 md:px-20 space-y-6 md:space-y-0 md:space-x-32">
        <div className="flex flex-col items-center md:items-start text-center md:text-left ">
          <img
            src="https://files.oaiusercontent.com/file-QTpBBrw2qw7nFd99BmV6Mk?se=2025-03-24T17%3A21%3A14Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D57957e32-9c54-4b8e-b5d8-08c43d051436.webp&sig=pBcYweorrFKuYTKVI2h2UwruH3mia7BRCaiv3hkclzo%3D" 
            alt="Himalens Logo"
            className="w-40 h-40 object-contain"
          />
          <h3 className="text-xl font-semibold text-aky-950 mt-4">
            Travel, Culture & Experiences
          </h3>
          <p className="text-gray-600 mt-2 max-w-sm">
            Let Himalens be your trusted guide as you step into the unexplored
            and create memories that last a lifetime.
          </p>
        </div>

        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold text-skyy-950">+91 12345 09876</h3>
          <p className="text-gray-600 mt-1">
            Hiamlens, 216, Sanket Colony, Ajabpur Kalan, <br />
            Dehradun, Uttarakhand 248121
          </p>
            <button className="mt-2 bg-gray-900 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-white hover:text-black hover:border border-1 border-black transition duration-300 ">
              SUBSCRIBE
            </button>
        </div>
      </div>
    </div>
  );
}
