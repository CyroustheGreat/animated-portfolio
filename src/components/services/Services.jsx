import "./Services.scss";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opcaity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChilderen: 0.1,
    },
  },
};

/*This section has three containers: text, title, list */
const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });
  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      //   whileInView="animate"
      ref={ref}
      animate={isInView && "animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I leverage my strong programming skills, passion for creating
          innovative web solutions, <br />
          and dedication to delivering high-quality websites that enhance user
          experiences.
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="people" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your </motion.b>
            Business.
          </h1>
          <button>WHAT I DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Online Visibility</h2>
          <p>
            As a web developer, I enhance your online presence by creating
            engaging and responsive websites that increase brand recognition,
            widen your audience, and drive more traffic.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>User-Friendliness</h2>
          <p>
            A user-friendly website is pivotal for business success. I optimize
            your site's aesthetics and navigation, enhancing user experience.
            This boosts customer satisfaction, lowers bounce rates, and
            ultimately increases conversion rates, fostering business growth.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Custom Solutions</h2>
          <p>
            I tailor web solutions to your unique business needs. Whether it's
            e-commerce, content management, or intricate web applications, I
            align solutions with your goals, streamlining operations and
            enhancing efficiency to better serve your customers.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Technical Excellence</h2>
          <p>
            In the dynamic realm of web development, I stay updated with the
            latest technologies and trends. I'm dedicated to using cutting-edge
            tools, frameworks, and best practices to keep your website secure,
            fast, and adaptable.
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
