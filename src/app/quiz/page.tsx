import type { Metadata } from "next";
import QuizClient from "@/components/quiz/QuizClient";

export const metadata: Metadata = {
  title: "Find My Gear",
  description:
    "Answer three quick questions and we'll match you with the perfect HEMPAC equipment.",
};

export default function QuizPage() {
  return <QuizClient />;
}
