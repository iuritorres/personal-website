import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  DribbbleIcon,
  GithubIcon,
  LinkedInIcon,
  MoonIcon,
  PinterestIcon,
  SunIcon,
  TwitterIcon,
} from "./Icons";
import Logo from "./Logo";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

function CustomLink({ href, title, className = "" }) {
  const router = useRouter();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}

      <span
        className={`
          h-[2px] inline-block bg-dark absolute
          left-0 -bottom-0.5 group-hover:w-full
          transition-[width] ease duration-300
          ${router.asPath === href ? "w-full" : "w-0"}
          
          dark:bg-light
        `}
      >
        &nbsp;
      </span>
    </Link>
  );
}

export default function NavBar() {
  const [theme, setTheme] = useThemeSwitcher();

  return (
    <header
      className="
        w-full px-32 py-8 font-medium flex items-center justify-between

        dark:text-light
      "
    >
      <nav className="flex items-center justify-center gap-8">
        <CustomLink href="/" title="Home" />
        <CustomLink href="/about" title="About" />
        <CustomLink href="/projects" title="Projects" />
        <CustomLink href="/articles" title="Articles" />
      </nav>

      <nav className="flex items-center justify-center gap-6 flex-wrap">
        <motion.a
          href="https://twiter.com/"
          target="_blank"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6"
        >
          <TwitterIcon />
        </motion.a>

        <motion.a
          href="https://twiter.com/"
          target="_blank"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6"
        >
          <GithubIcon />
        </motion.a>

        <motion.a
          href="https://twiter.com/"
          target="_blank"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6"
        >
          <LinkedInIcon />
        </motion.a>

        <motion.a
          href="https://twiter.com/"
          target="_blank"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="
            w-6

            bg-light rounded-full
          "
        >
          <PinterestIcon />
        </motion.a>

        <motion.a
          href="https://twiter.com/"
          target="_blank"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6"
        >
          <DribbbleIcon />
        </motion.a>

        <button
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className={`
            flex items-center justify-center
            rounded-full p-1 bg-dark text-light

            dark:bg-light dark:text-dark
          `}
        >
          {theme === "dark" && <SunIcon className="fill-dark" />}
          {theme === "light" && <MoonIcon className="fill-dark" />}
        </button>
      </nav>

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
}
