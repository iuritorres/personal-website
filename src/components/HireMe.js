import Link from "next/link";
import { CircularText } from "./Icons";

export default function HireMe() {
  return (
    <div
      className="
        fixed left-4 bottom-4 flex items-center justify-center overflow-hidden

        md:right-8 md:left-auto md:top-0 md:bottom-auto md:absolute sm:right-0
      "
    >
      <div
        className="
          w-48 h-auto flex items-center justify-center relative

          md:w-24
        "
      >
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

            md:w-12 md:h-12 md:text-[10px]

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
