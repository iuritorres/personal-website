import { motion } from "framer-motion";

function Skill({ name, xPosition, yPosition }) {
  return (
    <motion.div
      className="
            flex items-center justify-center
            rounded-full font-semibold bg-dark text-light
            py-3 px-6 shadow-dark cursor-pointer absolute

            lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent
            xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold

            dark:text-dark dark:bg-light
          "
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{
        x: xPosition,
        y: yPosition,
        transition: {
          duration: 1.5,
        },
      }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
}

export default function Skills() {
  return (
    <>
      <h2
        className="
          font-bold text-8xl mt-64 w-full text-center
          
          md:text-6xl md:mt-32
        "
      >
        Skills
      </h2>

      <div
        className="
          w-full h-screen relative rounded-full
          flex items-center justify-center bg-circularLight

          lg:h-[80vh] sm:h-[60vh] sx:h-[50vh]
          lg:bg-circularLightLg lg:dark:bg-circularDarkLg
          md:bg-circularLightMd md:dark:bg-circularDarkMd
          sm:bg-circularLightSm sm:dark:bg-circularDarkSm

          dark:bg-circularDark
        "
      >
        <motion.div
          className="
            flex items-center justify-center
            rounded-full font-semibold bg-dark text-light
            py-3 px-6 shadow-dark cursor-pointer absolute

            lg:p-6 md:p-4 xs:text-xs xs:p-2

            dark:text-dark dark:bg-light
          "
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>

        <Skill name="HTML" xPosition="-25vw" yPosition="2vw" />
        <Skill name="CSS" xPosition="-5vw" yPosition="-10vw" />
        <Skill name="Javascript" xPosition="20vw" yPosition="6vw" />
        <Skill name="ReactJS" xPosition="0vw" yPosition="15vw" />
        <Skill name="NextJS" xPosition="-20vw" yPosition="-15vw" />
        <Skill name="GatsbyJS" xPosition="15vw" yPosition="-12vw" />
        <Skill name="Web Design" xPosition="32vw" yPosition="-5vw" />
        <Skill name="Figma" xPosition="0vw" yPosition="-20vw" />
        <Skill name="Firebase" xPosition="-25vw" yPosition="18vw" />
        <Skill name="Tailwind CSS" xPosition="18vw" yPosition="18vw" />
      </div>
    </>
  );
}
