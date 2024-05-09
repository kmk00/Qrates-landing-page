import { useEffect, useState } from "react";
import styled from "styled-components";

import image1 from "../assets/testimonial1.jpg";
import image2 from "../assets/testimonial2.jpg";
import TestimonialCard from "./TestimonialCard";

const Section = styled.section`
  background-color: #fff804;
  border-top: 3px solid #000;
  display: flex;
  justify-content: center;
  position: relative;

  @media (max-width: 768px) {
    padding-bottom: 4rem;
  }
`;

const Testimonials = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handleClick = (e: any) => {
    setCurrentPage(parseInt(e.target.value));
  };

  return (
    <Section>
      {currentPage === 1 ? (
        <TestimonialCard
          image={image1}
          action={handleClick}
          currentPage={currentPage}
          text={
            "The response was overwhelming. It made me wonder why I hadn't pressed any records on vinyl before now. It felt like something that people had been waiting for for a long time."
          }
          name="SOL"
        />
      ) : (
        <TestimonialCard
          image={image2}
          action={handleClick}
          currentPage={currentPage}
          text={
            "We hit our goal of 100 Records in the first 32 minutes. And I have to be honest, I didn't expect that. There's no world where I would have thought that we were about to sell north of 2800 copies."
          }
          name="Mason Lieberman (The Real Folk Blues, 2020)"
        />
      )}
    </Section>
  );
};

export default Testimonials;
