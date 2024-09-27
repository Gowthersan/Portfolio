/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

import { testimonials } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image
}) => (
  <motion.div
    variants={fadeIn("", "spring", 0.5 * index, 0.75)}
    className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
  >
    <p className="text-white font-black text-[48px]">"</p>
    <div>
      <p className="text-white tracking-wider text-[18px]">{testimonial}</p>

      <div className="flex items-center justify-between gap-1 mt-7">
        <div className="flex flex-col flex-1">
          <p className="text-white font-medium text-[16px]">
            <span className="blue-text-gradient">@</span> {name}
          </p>
          <p className="mt-1 text-secondary text-[12px]">
            {designation} of {company}
          </p>
        </div>
        <img
          src={image}
          alt={`feedback_by-${name}-image`}
          className={`w-10 h-10 rounded-full object-cover`}
        />
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div
        className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
      </div>
      <div
        className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7 justify-center`}
      >
        {testimonials.map((testimonials, index) => (
          <FeedbackCard
            key={testimonials.name}
            {...testimonials}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");