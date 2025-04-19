import { useActiveTab } from "@/context/ActiveTabContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface ScrollToSectionProps {
  id: string;
  setIsOpen: (isOpen: boolean) => void;
}
export const ScrollToSection = ({ id, setIsOpen }: ScrollToSectionProps) => {
  const { setActiveTab } = useActiveTab()
  const navigate = useNavigate()


  if (id === "articles") {
    window.scrollTo(0, 0)
    setIsOpen(false)
    setActiveTab(id)
    navigate("/articles")
    return;
  }
  navigate("/")
  setIsOpen(false)
  setActiveTab(id)
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};