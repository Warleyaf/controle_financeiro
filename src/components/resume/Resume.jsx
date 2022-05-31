import React from "react";
import { Container } from "./resumestyled";
import { ResumeCard } from "../resumecard/ResumeCard";
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaDollarSign,
} from 'react-icons/fa';

export const Resume = ({ income, expense, total }) => {
  return (
    <Container>
      <ResumeCard title="Entradas" Icon={FaRegArrowAltCircleUp} value={income} />
      <ResumeCard title="Saídas" Icon={FaRegArrowAltCircleDown} value={expense} />
      <ResumeCard title="Total" Icon={FaDollarSign} value={total} />
    </Container>
  )
}