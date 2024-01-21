import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import { motion, useMotionValue } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import reduxSimplifiedArticle from "../../public/images/articles/What is Redux with easy explanation.png";
import orderComponentArticle from "../../public/images/articles/What is higher order component in React.jpg";
import featuredArticle2 from "../../public/images/articles/create loading screen in react js.jpg";
import efficientModalArticle from "../../public/images/articles/create modal component in react using react portals.png";
import formValidationArticle from "../../public/images/articles/form validation in reactjs using custom react hook.png";
import featuredArticle1 from "../../public/images/articles/pagination component in reactjs.jpg";
import smoothScrollingArticle from "../../public/images/articles/smooth scrolling in reactjs.png";
import todoListArticle from "../../public/images/articles/todo list app built using react redux and framer motion.png";

const MotionImage = motion(Image);

function MovingImage({ title, img, link }) {
  const imageRef = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove(event) {
    imageRef.current.style.display = "inline-block";
    mouseX.set(event.pageX - 100);
    mouseY.set(-280);
  }

  function handleMouseLeave(event) {
    imageRef.current.style.display = "none";
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <Link
      href={link}
      target="_blank"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="capitalize text-lg font-semibold hover:underline">
        {title}
      </h2>

      <MotionImage
        ref={imageRef}
        src={img}
        alt={title}
        style={{ x: mouseX, y: mouseY }}
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: {
            duration: 0.2,
          },
        }}
        className="w-96 h-auto hidden absolute rounded-lg z-10"
      />
    </Link>
  );
}

function FeaturedArticle({ img, title, time, summary, link }) {
  return (
    <li
      className="
        col-span-1 w-full p-4 bg-light relative
        border border-solid border-dark rounded-2xl

        dark:bg-dark dark:border-light
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
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
      >
        <MotionImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>

      <Link
        href={link}
        target="_blank"
        className="
          w-full cursor-pointer overflow-hidden rounded-lg hover:underline

          dark:text-light
        "
      >
        <h2 className="capitalize text-2xl font-bold my-2 mt-4">{title}</h2>
      </Link>

      <p
        className="
          text-sm mb-2

          dark:text-light/75
        "
      >
        {summary}
      </p>

      <span
        className="
          text-primary font-semibold

          dark:text-primaryDark
        "
      >
        {time}
      </span>
    </li>
  );
}

function Article({ img, title, date, link }) {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{
        y: 0,
        transition: {
          duration: 0.5,
          ease: "easeInOut",
        },
      }}
      viewport={{ once: true }}
      className="
        relative w-full p-4 py-6 my-4 rounded-xl
        flex items-center justify-between
        bg-light text-dark first:mt-0
        border border-solid border-dark
        border-r-4 border-b-4

        dark:bg-dark dark:text-light dark:border-light
      "
    >
      <MovingImage title={title} img={img} link={link} />

      <span
        className="
          text-primary font-semibold pl-4

          dark:text-primaryDark
        "
      >
        {date}
      </span>
    </motion.li>
  );
}

export default function Articles() {
  return (
    <>
      <Head>
        <title>Iuri Torres | Articles</title>
        <meta name="description" content="Articles page" />
      </Head>

      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden">
        <Layout className="pt-16">
          <AnimatedText text="Words Can Change The World!" className="mb-16" />

          <ul className="grid grid-cols-2 gap-16">
            <FeaturedArticle
              img={featuredArticle1}
              title="Build A Custom Pagination Component In ReactJS From Scratch"
              time="9 min read"
              summary="
                Learn how to build a custom pagination component in ReactJS from scratch. 
                Follow this step-by-step guide to integrate Pagination component in your ReactJS project.
              "
              link="#"
            />

            <FeaturedArticle
              img={featuredArticle2}
              title="Creating Stunning Loading Screens In React: Build 3 Types Of Loading Screens"
              time="10 min read"
              summary="
                Learn how to create stunning loading screens in React with 3 different methods.
                Discover how to use React-Loading, React-Lottie & build a custom loading screen.
                Improve the user experience.
              "
              link="#"
            />
          </ul>

          <h2
            className="
              font-bold text-4xl w-full text-center my-16 mt-32

              dark:text-light
            "
          >
            All articles
          </h2>

          <ul>
            <Article
              img={formValidationArticle}
              title="Form Validation In ReactJS: Build A Reusable Custom Hook For Inputs And Error Handling"
              date="March 22, 2023"
              link="#"
            />
            <Article
              img={smoothScrollingArticle}
              title="Silky Smooth Scrolling In ReactJS: A Step-By-Step Guide For React Developers"
              date="March 22, 2023"
              link="#"
            />
            <Article
              img={efficientModalArticle}
              title="Creating An Efficient Modal Component In React Using Hooks And Portals"
              date="March 22, 2023"
              link="#"
            />
            <Article
              img={todoListArticle}
              title="Build A Fabulous Todo List App With React, Redux And Framer-Motion"
              date="March 22, 2023"
              link="#"
            />
            <Article
              img={reduxSimplifiedArticle}
              title="Redux Simplified: A Beginner's Guide For Web Developers"
              date="March 22, 2023"
              link="#"
            />
            <Article
              img={orderComponentArticle}
              title="What Is Higher Order Component (Hoc) In React?"
              date="March 22, 2023"
              link="#"
            />
          </ul>
        </Layout>
      </main>
    </>
  );
}
