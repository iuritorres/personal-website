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
      "
    >
      <LiIcon reference={detailRef} />

      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl">
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

            dark:text-light/75
          "
        >
          {time} | {address}
        </span>

        <p className="font-medium w-full">{work}</p>
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
        <h2 className="font-bold text-8xl mb-32 w-full text-center">
          Experience
        </h2>

        <div className="w-[75%] mx-auto relative">
          <motion.div
            ref={lineRef}
            style={{ scaleY: scrollYProgress }}
            className="
              absolute left-9 top-4 w-[4px] h-full bg-dark origin-top

              dark:bg-light
            "
          />

          <ul className="w-full flex flex-col items-center justify-between ml-4">
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
