import React from "react";

import { InstructorData } from "../../utils/instructors";

import { Container, Image, InstructorCard } from "./styled-component";

interface InstructorCardProps {
  instructors: InstructorData[];
  setVisible: (b: boolean) => void;
  setData: (i: InstructorData) => void;
}

export const InstructorCards: React.FC<InstructorCardProps> = (props) => {
  const { instructors, setVisible, setData } = props;

  return (
    <Container>
      {instructors.map((i) => (
        <InstructorCard
          onClick={() => {
            setData(i);
            setVisible(true);
          }}
        >
          <Image src={i.image} alt={"fireSpot"} />
        </InstructorCard>
      ))}
    </Container>
  );
};
