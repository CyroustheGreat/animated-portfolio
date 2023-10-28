import { useRef } from "react";
import "./Portfolio.scss";
import { motion, useSpring, useScroll } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Sushi Restaurant",
    img: "/sushiburst.png",
    desc: "Our mission is to bring true japaneses flavors to our website",
    adr: "https://sushiburst.com/",
  },
  {
    id: 2,
    title: "Financial Institute",
    img: "/institute.png",
    desc: "A stunishing design for a financial institute",
    adr: "https://samplesite-aminaeen.online/",
  },
  {
    id: 3,
    title: "GPT-3 AI",
    img: "/gpt3.png",
    desc: "Building Something amazing with GPT-3 OpenAI",
    adr: "https://gpt3-aminaeen.online/",
  },
  {
    id: 4,
    title: "Stylish Restaurant",
    img: "/restaurant.png",
    desc: "Stylish design of a restaurant website",
    adr: "https://restaurant-aminaeen.online/",
  },
  {
    id: 5,
    title: "Summerizer",
    img: "/summarizer.png",
    desc: "Usage of AI to get a summary from websites and articles",
    adr: "https://summarizer-aminaeen.online/",
  },
];

const Single = ({ item }) => {
  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer">
            <img src={item.img} alt={item.title} />
          </div>
          <div className="textContainer">
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button
              onTouchStart={() => window.open(item.adr, "_blank")}
              onClick={() => window.open(item.adr, "_blank")}
            >
              See Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
