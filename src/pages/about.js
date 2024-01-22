import AnimatedText from "@/components/AnimatedText";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Layout from "@/components/Layout";
import Skills from "@/components/Skills";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useRef } from "react";
import profilePicture from "../../public/images/profile/developer-pic-2.jpg";

function AnimatedNumbers({ value }) {
  const numberRef = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(numberRef, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [value, isInView, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (numberRef.current && latest.toFixed(0) <= value) {
        numberRef.current.textContent = latest.toFixed(0);
      }
    });
  }, [value, springValue]);

  return <span ref={numberRef}></span>;
}

export default function About() {
  return (
    <>
      <Head>
        <title>Iuri Torres | About</title>
        <meta name="description" content="About page" />
      </Head>

      <main
        className="
          flex w-full flex-col items-center justify-center

          dark:text-light
        "
      >
        <Layout className="pt-16">
          <AnimatedText
            text="Passion Fuels Purpose!"
            className="
              mb-16

              lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8
            "
          />

          <div
            className="
              grid w-full grid-cols-8 gap-16

              sm:gap-8
            "
          >
            <div
              className="
                col-span-3 flex flex-col items-start justify-start

                xl:col-span-4 md:order-2 md:col-span-8
              "
            >
              <h2
                className="
                  mb-4 text-lg font-bold uppercase text-dark/75

                  dark:text-light/75
                "
              >
                About me
              </h2>

              <p className="font-medium">
                Hi, I&rsquo;m CodeBucks, a web developer and UI/UX designer with
                a passion for creating beautiful, functional, and user-centered
                digital experiences. With 4 years of experience in the field. I
                am always looking for new and innovative ways to bring my
                clients&rsquo; visions to life.
              </p>
              <p className="font-medium my-4">
                I believe that design is about more than just making things look
                pretty - it&rsquo;s about solving problems and creating
                intuitive, enjoyable experiences for users.
              </p>
              <p className="font-medium">
                Whether I&rsquo;m working on a website, mobile app, or other
                digital product, I bring my commitment to design excellence and
                user-centered thinking to every project I work on. I look
                forward to the opportunity to bring my skills and passion to
                your next project.
              </p>
            </div>

            <div
              className="
                col-span-3 relative h-max rounded-2xl
                border-2 border-solid border-dark
                bg-light p-8 rounded-br-2xl

                xl:col-span-4 md:order-1 md:col-span-8

                dark:bg-dark dark:border-light
              "
            >
              <div
                className="
                  absolute top-0 -right-3 -z-10
                  w-[102%] h-[103%] rounded-[2rem] bg-dark
                  rounded-br-3xl

                  dark:bg-light
                "
              />

              <Image
                src={profilePicture}
                alt="Iuri Torres"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="
                      (max-width: 768px) 100vw,
                      (max-width: 1200) 50vw,
                      33vw
                    "
              />
            </div>

            <div
              className="
                col-span-2 flex flex-col items-end justify-between

                xl:col-span-8 xl:flex-row xl:items-center md:order-3
              "
            >
              <div
                className="
                  flex flex-col items-end justify-center

                  xl:items-center
                "
              >
                <span
                  className="
                    inline-block text-6xl font-bold

                    md:text-6xl sm:text-5xl xs:text-4xl
                  "
                >
                  <AnimatedNumbers value={50} />+
                </span>
                <h2
                  className="
                    text-lg font-medium capitalize text-dark/75

                    xl:text-center md:text-lg sm:text-base xs:text-sm

                    dark:text-light/75
                  "
                >
                  satisfied clients
                </h2>
              </div>

              <div
                className="
                  flex flex-col items-end justify-center

                  xl:items-center
                "
              >
                <span
                  className="
                    inline-block text-6xl font-bold

                    md:text-6xl sm:text-5xl xs:text-4xl
                  "
                >
                  <AnimatedNumbers value={40} />+
                </span>
                <h2
                  className="
                    text-lg font-medium capitalize text-dark/75

                    xl:text-center md:text-lg sm:text-base xs:text-sm

                    dark:text-light/75
                  "
                >
                  projects completed
                </h2>
              </div>

              <div
                className="
                  flex flex-col items-end justify-center

                  xl:items-center
                "
              >
                <span
                  className="
                    inline-block text-6xl font-bold

                    md:text-6xl sm:text-5xl xs:text-4xl
                  "
                >
                  <AnimatedNumbers value={2} />+
                </span>
                <h2
                  className="
                    text-lg font-medium capitalize text-dark/75

                    xl:text-center md:text-lg sm:text-base xs:text-sm

                    dark:text-light/75
                  "
                >
                  years of experience
                </h2>
              </div>
            </div>
          </div>

          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
}
