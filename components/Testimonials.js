import Testimonial from "./Testimonial";
import TestimonialsWrapper from "./TestimonialsWrapper";
import styles from "../styles/Testimonials.module.css";

function Testimonials() {
  return (
    <>
      <div className={styles.heading}>
        <h2>Testimonials</h2>
      </div>
      <TestimonialsWrapper>
        <Testimonial
          img="/images/runner_000.jpg"
          name="Eduardo Silva"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas amet deleniti velit omnis doloremque aliquid, ipsum temporibus ullam quia repellendus."
          desc="Ultra-marathoner"
        />
        <Testimonial
          img="/images/runner_001.jpg"
          name="Camilla Morales"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas amet deleniti velit omnis doloremque aliquid, ipsum temporibus ullam quia repellendus."
          desc="marathoner"
        />
        <Testimonial
          img="/images/runner_002.jpg"
          name="Barton Moore"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas amet deleniti velit omnis doloremque aliquid, ipsum temporibus ullam quia repellendus."
          desc="marathoner"
        />
        <Testimonial
          img="/images/runner_003.jpg"
          name="Monica Mendez"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas amet deleniti velit omnis doloremque aliquid, ipsum temporibus ullam quia repellendus."
          desc="Half-marathoner"
        />
        <Testimonial
          img="/images/runner_004.jpg"
          name="Victor Alamo"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas amet deleniti velit omnis doloremque aliquid, ipsum temporibus ullam quia repellendus."
          desc="marathoner"
        />
        <Testimonial
          img="/images/runner_005.jpg"
          name="Stefan Szwarz"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas amet deleniti velit omnis doloremque aliquid, ipsum temporibus ullam quia repellendus."
          desc="Ultra-marathoner"
        />
      </TestimonialsWrapper>
    </>
  );
}

export default Testimonials;
