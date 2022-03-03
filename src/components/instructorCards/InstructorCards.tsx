import React from "react";

import { InstructorData } from "../../utils/instructors";

import { Container, Image, InstructorCard } from "./styled-component";

interface InstructorCardProps {
  instructors: InstructorData[];
}

export const InstructorCards: React.FC<InstructorCardProps> = (props) => {
  const { instructors } = props;

  return (
    <Container>
      {instructors.map((i) => (
        <InstructorCard>
          <Image src={i.image} alt={"fireSpot"} />
        </InstructorCard>
      ))}
    </Container>
  );
};
