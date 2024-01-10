import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

const transition = {
  ease: "easeOut",
  duration: 0.6,
};

export default function Carousel({ slides }) {
  const [current, setCurrent] = useState(0);

  const previousSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(intervalId);
  }, [current]);

  return (
    <div className="overflow-hidden relative top-0 left-0 w-screen h-screen max-w-screen max-h-screen">
    <AnimatePresence initial={false} exitBeforeEnter>
        <motion.div
          key={current}
          className="flex w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={transition}
          style={{
            transform: `translateX(-${current * 100}%)`,
          }}
        >
          {slides.map((s, i) => (
            <img
              key={i}
              src={s}
              alt={`Slide ${i + 1}`}
            />
          ))}
        </motion.div>
      </AnimatePresence>

      <div className="absolute top-0 h-full w-full flex justify-between items-center text-white px-10 text-3xl">
        <button onClick={previousSlide}>
          <BsFillArrowLeftCircleFill />
        </button>
        <button onClick={nextSlide}>
          <BsFillArrowRightCircleFill />
        </button>
      </div>

      <div className="absolute py-4 flex justify-center gap-3 w-full">
        {slides.map((_, i) => (
          <div
            onClick={() => setCurrent(i)}
            key={"circle" + i}
            className={`rounded-full w-4 h-4 cursor-pointer  ${
              i === current ? "bg-white" : "bg-gray-500"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
