import Link from "next/link";
import Logo from "../logo";

function WebHeader() {
  return (
    <header className="fixed w-[85%] top-6 left-0 right-0 mx-auto rounded-2xl z-20 h-[60px] bg-white/70 backdrop-blur-md">
      <div className="flex align-center items-center justify-between w-full px-20 h-full">

        <div className="flex items-center space-x-2">
          <Logo />
          <span className="text-3xl font-semibold font-instrument-serif tracking-[0.1rem]">Lucid</span>
        </div>

        <div className="flex flex-row items-center space-x-6">
          <Link href="" className="text-gray-900">Benefits</Link>
          <Link href="" className="text-gray-900">Testimonials</Link>
          <Link href="" className="text-gray-900">Membership</Link>
          <Link href="" className="text-gray-900">FAQ</Link>
        </div>

        <div className="flex flex-row items-center space-x-6">
          <Link href="">Log In</Link>
          <Link href="" className="border border-[#4a236c] px-4 py-2 rounded-lg">Start Writing</Link>
        </div>
      </div>
    </header>
  );
}

export default WebHeader
