//import { IoIosArrowRoundForward } from "react-icons/io";

interface ButtonProps {
  children: string;
}

export default function ButtonAnimated({ children }: ButtonProps) {
  return (
    <button className="group pl-5 pr-5 py-2 bg-primary-600 hover:bg-black transition-colors duration-500 delay-[0.1s] ease-[cubic-bezier(0.19,1,0.22,1)]">
      <div className="overflow-hidden relative">
        <p className="text-white group-hover:translate-y-[-20px] duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] flex items-center">
          {children}
          {/* <IoIosArrowRoundForward className="text-3xl" /> */}
        </p>
        <p
          aria-hidden
          className="absolute left-0 top-5 text-white group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]"
        >
          {children}
          {/* <IoIosArrowRoundForward className="text-3xl" /> */}
        </p>
      </div>
    </button>
  );
}
