import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import featuredProject1 from "../../public/images/projects/crypto-screener-cover-image.jpg";
import featuredProject2 from "../../public/images/projects/portfolio-cover-image.jpg";

const MotionImage = motion(Image);

function FeaturedProject({ type, title, summary, img, link, github }) {
  return (
    <article
      className="
        w-full flex items-center justify-between
        rounded-3xl border border-solid border-dark
        bg-light shadow-2xl p-12 relative rounded-br-2xl

        dark:border-light dark:bg-dark
      "
    >
      <div
        className="
          absolute top-0 -right-3 -z-10 rounded-br-3xl
          w-[101%] h-[103%] rounded-[2.5rem] bg-dark

          dark:bg-light
        "
      />

      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <MotionImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span
          className="
            text-primary font-medium text-xl
            
            dark:text-primaryDark
          "
        >
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="
            hover:underline underline-offset-2
            
            dark:text-light
          "
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold">{title}</h2>
        </Link>

        <p
          className="
            my-2 font-medium text-dark

            dark:text-light
          "
        >
          {summary}
        </p>

        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="
              ml-4 rounded-lg bg-dark text-light
              p-2 px-6 text-lg font-semibold

              dark:bg-light dark:text-dark
            "
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
}

function Project({ type, title, img, link, github }) {
  return (
    <article
      className="
        w-full flex flex-col items-center justify-center rounded-2xl
        border border-solid border-dark bg-light p-6 relative rounded-br-2xl

        dark:border-light dark:bg-dark
      "
    >
      <div
        className="
          absolute top-0 -right-3 -z-10 rounded-br-3xl
          w-[101%] h-[103%] rounded-[2rem] bg-dark
          
          dark:bg-light
        "
      />

      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <MotionImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span
          className="
            text-primary font-medium text-xl

            dark:text-primaryDark
          "
        >
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="
            hover:underline underline-offset-2

            dark:text-light
          "
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold">{title}</h2>
        </Link>

        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="
              text-lg font-semibold underline decoration-2 underline-offset-2

              dark:text-light
            "
          >
            Visit
          </Link>

          <Link href={github} target="_blank" className="w-8">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <>
      <Head>
        <title>Iuri Torres | Projects</title>
        <meta name="description" content="Projects page" />
      </Head>

      <main
        className="
          w-full mb-16 flex flex-col items-center justify-center

          dark:text-light
        "
      >
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16"
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32">
            <div className="col-span-12">
              <FeaturedProject
                type="Featured Project"
                title="Crypto Screener Application"
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                local currency."
                img={featuredProject1}
                link="#"
                github="#"
              />
            </div>

            <div className="col-span-6">
              <Project
                type="Featured Project"
                title="Crypto Screener Application"
                img={featuredProject1}
                link="#"
                github="#"
              />
            </div>
            <div className="col-span-6">
              <Project
                type="Featured Project"
                title="Crypto Screener Application"
                img={featuredProject1}
                link="#"
                github="#"
              />
            </div>

            <div className="col-span-12">
              <FeaturedProject
                type="Featured Project"
                title="React Portfolio Website"
                summary="A professional portfolio website using React JS, Framer-motion, and Styled-components. It has smooth 
                page transitions, cool background effects, unique design and it is mobile responsive."
                img={featuredProject2}
                link="#"
                github="#"
              />
            </div>

            <div className="col-span-6">
              <Project
                type="Featured Project"
                title="Crypto Screener Application"
                img={featuredProject1}
                link="#"
                github="#"
              />
            </div>
            <div className="col-span-6">
              <Project
                type="Featured Project"
                title="Crypto Screener Application"
                img={featuredProject1}
                link="#"
                github="#"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
