import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import LiIcon from "./LiIcon";

function Details({ type, time, place, info }) {
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
          {type}
        </h3>

        <span
          className="
            capitalize font-medium text-dark/75

            xs:text-sm

            dark:text-light/75
          "
        >
          {time} | {place}
        </span>

        <p
          className="
            font-medium w-full

            md:text-sm
          "
        >
          {info}
        </p>
      </motion.div>
    </li>
  );
}

export default function Education() {
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
          Education
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
              type="Bachelor Of Science In Computer Science"
              time="2016-2020"
              place="Massachusetts Institute Of Technology (MIT)"
              info="
                Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence.
              "
            />

            <Details
              type="Master Of Computer Science"
              time="2020-2022"
              place="Stanford University"
              info="
                Completed a master's project on deep learning, developing a new neural network architecture for natural 
                language understanding.
              "
            />

            <Details
              type="Online Coursework"
              time="2016-2020"
              place="Coursera And EdX"
              info="
              Completed coursework in advanced topics such as Reinforcement Learning, Computer Vision, and Machine 
              Learning Engineering.
              "
            />
          </ul>
        </div>
      </div>
    </>
  );
}
