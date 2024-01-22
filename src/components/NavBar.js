import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
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

function CustomMobileLink({ href, title, className = "", closeMenuFunction }) {
  const router = useRouter();

  function handleClick() {
    closeMenuFunction();
    router.push(href);
  }

  return (
    <button
      onClick={handleClick}
      href={href}
      className={`
        ${className} relative group text-light

        dark:text-dark
      `}
    >
      {title}

      <span
        className={`
          h-[2px] inline-block bg-light absolute
          left-0 -bottom-0.5 group-hover:w-full
          transition-[width] ease duration-300
          ${router.asPath === href ? "w-full" : "w-0"}

          dark:bg-dark
        `}
      >
        &nbsp;
      </span>
    </button>
  );
}

export default function NavBar() {
  const [theme, setTheme] = useThemeSwitcher();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleClickMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <header
      className="
        w-full px-32 py-8 font-medium flex items-center justify-between
        relative z-10

        lg:px-16 md:px-12 sm:px-8

        dark:text-light
      "
    >
      {/* Hamburger Menu */}
      <button
        onClick={handleClickMenu}
        className="
          flex-col justify-center items-center hidden

          lg:flex
        "
      >
        <span
          className={`
            bg-dark block h-0.5 w-6 rounded-sm
            transition-all duration-300 ease-out
            ${isMenuOpen ? "rotate-45 translate-y-1 " : "-translate-y-0.5"}

            dark:bg-light
          `}
        ></span>
        <span
          style={{ opacity: isMenuOpen ? 0 : 1 }}
          className="
            bg-dark block h-0.5 w-6 rounded-sm my-0.5
            transition-all duration-300 ease-out

            dark:bg-light
            "
        ></span>
        <span
          className={`
            bg-dark block h-0.5 w-6 rounded-sm
            transition-all duration-300 ease-out
            ${isMenuOpen ? "-rotate-45 -translate-y-1 " : "translate-y-0.5"}

            dark:bg-light
            `}
        ></span>
      </button>

      {/* Desktop Menu */}
      <div
        className="
          w-full flex justify-between items-center

          lg:hidden
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
      </div>

      {/* Mobile Menu (lg) */}
      {isMenuOpen && (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="
          min-w-[70vw] flex flex-col justify-between items-center
          fixed top-1/2 left-1/2 z-30
          bg-dark/90 rounded-lg backdrop-blur-md py-32

          dark:bg-light/75
        "
        >
          <nav className="flex flex-col items-center justify-center gap-4">
            <CustomMobileLink
              href="/"
              title="Home"
              closeMenuFunction={handleClickMenu}
            />
            <CustomMobileLink
              href="/about"
              title="About"
              closeMenuFunction={handleClickMenu}
            />
            <CustomMobileLink
              href="/projects"
              title="Projects"
              closeMenuFunction={handleClickMenu}
            />
            <CustomMobileLink
              href="/articles"
              title="Articles"
              closeMenuFunction={handleClickMenu}
            />
          </nav>

          <nav
            className="
              flex items-center justify-center gap-6 flex-wrap mt-4

              sm:gap-2
            "
          >
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
              className="
                w-6 rounded-full bg-light

                dark:bg-dark
              "
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
        </motion.div>
      )}

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
}
