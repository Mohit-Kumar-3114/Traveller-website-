"use client"

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-white border-b border-gray-200 h-24">
      <div className="text-4xl px-10">
        <span className=" text-sky-950">HIMALE</span>
        <span className="text-sky-400">∩</span>
        <span className=" text-sky-950">S</span>
      </div>

     
      <div className="hidden md:flex space-x-8 font-sans text-lg  text-sky-950  px-10">
        <a href="#c5" className="hover:text-sky-400 transition">Tours</a>
        <a href="#c2" className="hover:text-sky-400 transition">Personalized Travel</a>
        <a href="" className="hover:text-sky-400 transition">Our Story</a>
        <a href="#c7" className="hover:text-sky-400 transition">Contact Us</a>
      </div>
    </nav>
  );
}
