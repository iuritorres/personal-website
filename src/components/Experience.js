import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import LiIcon from "./LiIcon";

function Details({ position, company, companyLink, time, address, work }) {
  const detailRef = useRef(null);

  return (
    <li
      ref={detailRef}
      className="
        my-8 first:mt-0 last:mb-0 w-[60%] mx-auto
        flex flex-col items-center justify-between

        md:w-[80%]
      "
    >
      <LiIcon reference={detailRef} />

      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3
          className="
            capitalize font-bold text-2xl

            sm:text-xl xs:text-lg
          "
        >
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="
              text-primary capitalize

              dark:text-primaryDark
            "
          >
            @{company}
          </a>
        </h3>

        <span
          className="
            capitalize font-medium text-dark/75

            xs:text-sm

            dark:text-light/75
          "
        >
          {time} | {address}
        </span>

        <p
          className="
            font-medium w-full

            md:text-sm
          "
        >
          {work}
        </p>
      </motion.div>
    </li>
  );
}

export default function Experience() {
  const lineRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: lineRef,
    offset: ["start end", "center start"],
  });

  return (
    <>
      <div className="my-64">
        <h2
          className="
            font-bold text-8xl mb-32 w-full text-center

            md:text-6xl xs:text-4xl md:mb-16
          "
        >
          Experience
        </h2>

        <div
          className="
            w-[75%] mx-auto relative

            lg:w-[90%] md:w-full
          "
        >
          <motion.div
            ref={lineRef}
            style={{ scaleY: scrollYProgress }}
            className="
              absolute left-9 top-4 w-[4px] h-full bg-dark origin-top

              md:w-[2px] md:left-[30px] xs:left-[20px]

              dark:bg-light
            "
          />

          <ul
            className="
              w-full flex flex-col items-center justify-between ml-4

              xs:ml-2
            "
          >
            <Details
              position="Software Engineer"
              company="Google"
              companyLink="https://www.google.com"
              time="2022-Present"
              address="Mountain View, CA"
              work="
                Worked on a team responsible for developing new features for Google's 
                search engine, including improving the accuracy and relevance of search results and 
                developing new tools for data analysis and visualization.
              "
            />

            <Details
              position="Software Engineer"
              company="Google"
              companyLink="https://www.google.com"
              time="2022-Present"
              address="Mountain View, CA"
              work="
                Worked on a team responsible for developing new features for Google's 
                search engine, including improving the accuracy and relevance of search results and 
                developing new tools for data analysis and visualization.
              "
            />

            <Details
              position="Software Engineer"
              company="Google"
              companyLink="https://www.google.com"
              time="2022-Present"
              address="Mountain View, CA"
              work="
                Worked on a team responsible for developing new features for Google's 
                search engine, including improving the accuracy and relevance of search results and 
                developing new tools for data analysis and visualization.
              "
            />

            <Details
              position="Software Engineer"
              company="Google"
              companyLink="https://www.google.com"
              time="2022-Present"
              address="Mountain View, CA"
              work="
                Worked on a team responsible for developing new features for Google's 
                search engine, including improving the accuracy and relevance of search results and 
                developing new tools for data analysis and visualization.
              "
            />

            <Details
              position="Software Engineer"
              company="Google"
              companyLink="https://www.google.com"
              time="2022-Present"
              address="Mountain View, CA"
              work="
                Worked on a team responsible for developing new features for Google's 
                search engine, including improving the accuracy and relevance of search results and 
                developing new tools for data analysis and visualization.
              "
            />
          </ul>
        </div>
      </div>
    </>
  );
}
