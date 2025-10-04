"use client"
import HomePage from "@/components/pages/Home/Home";
import dynamic from "next/dynamic";
const Chatbot = dynamic(() => import("@/components/Chatbot/Chatbot"), {
  ssr: false,
});
export default function Home() {
  return (
    <>
      <HomePage />
      <Chatbot /></>
  );
}
