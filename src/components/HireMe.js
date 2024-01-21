import Link from "next/link";
import { CircularText } from "./Icons";

export default function HireMe() {
  return (
    <div className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden">
      <div className="w-48 h-auto flex items-center justify-center relative">
        <CircularText
          className="
            fill-dark animate-spin-slow

            dark:fill-light
          "
        />

        <Link
          href="mailto:iuri.t1000@gmail.com"
          className="
            flex items-center justify-center absolute
            left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
            bg-dark text-light hover:bg-light hover:text-dark
            border border-solid border-dark rounded-full
            w-20 h-20 font-semibold shadow-md

            dark:bg-light dark:text-dark dark:hover:bg-dark
            dark:hover:text-light dark:border-light
          "
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
}
