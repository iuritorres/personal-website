import Link from "next/link";
import Layout from "./Layout";

export default function Footer() {
  return (
    <footer
      className="
        w-full border-t-2 border-solid border-dark
        font-medium text-lg

        dark:border-light dark:text-light
      "
    >
      <Layout className="py-8 flex items-center justify-between">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>

        <div className="flex items-center">
          Build With{" "}
          <span
            className="
            text-primary text-2xl px-1

              dark:text-primaryDark
            "
          >
            &#9825;
          </span>
          &nbsp;by&nbsp;
          <Link
            href="/"
            target="_blank"
            className="underline decoration-2 underline-offset-2"
          >
            Iuri Torres
          </Link>
        </div>

        <Link
          href="/"
          target="_blank"
          className="underline decoration-2 underline-offset-2"
        >
          Say hello
        </Link>
      </Layout>
    </footer>
  );
}
