import React from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaFigma } from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiBulma,
  SiTypescript,
  SiExpo,
} from "react-icons/si";

const TechBadge = ({ tech }) => {
  // Tech stack color mapping with icons
  const techInfo = {
    react: {
      bg: "bg-blue-900/40",
      text: "text-blue-300",
      border: "border-blue-700/30",
      icon: FaReact,
    },
    javascript: {
      bg: "bg-amber-900/40",
      text: "text-amber-300",
      border: "border-amber-700/30",
      icon: SiJavascript,
    },
    js: {
      bg: "bg-amber-900/40",
      text: "text-amber-300",
      border: "border-amber-700/30",
      icon: SiJavascript,
    },
    html: {
      bg: "bg-orange-900/40",
      text: "text-orange-300",
      border: "border-orange-700/30",
      icon: FaHtml5,
    },
    css: {
      bg: "bg-sky-900/40",
      text: "text-sky-300",
      border: "border-sky-700/30",
      icon: FaCss3Alt,
    },
    tailwind: {
      bg: "bg-teal-900/40",
      text: "text-teal-300",
      border: "border-teal-700/30",
      icon: SiTailwindcss,
    },
    bulma: {
      bg: "bg-green-900/40",
      text: "text-green-300",
      border: "border-green-700/30",
      icon: SiBulma,
    },
    figma: {
      bg: "bg-purple-900/40",
      text: "text-purple-300",
      border: "border-purple-700/30",
      icon: FaFigma,
    },
    node: {
      bg: "bg-emerald-900/40",
      text: "text-emerald-300",
      border: "border-emerald-700/30",
      icon: FaNodeJs,
    },
    typescript: {
      bg: "bg-blue-900/40",
      text: "text-blue-300",
      border: "border-blue-700/30",
      icon: SiTypescript,
    },
    ts: {
      bg: "bg-blue-900/40",
      text: "text-blue-300",
      border: "border-blue-700/30",
      icon: SiTypescript,
    },
    expo: {
      bg: "bg-zinc-900",
      text: "text-white",
      border: "border-blue-700/30",
      icon: SiExpo,
    },
  };

  // Get tech info based on tech name
  const getTechInfo = (tech) => {
    const key = tech.toLowerCase().replace(/\s+/g, "");

    // Check for partial matches
    for (const techKey in techInfo) {
      if (key.includes(techKey)) {
        return techInfo[techKey];
      }
    }

    return {
      bg: "bg-gray-800/40",
      text: "text-gray-300",
      border: "border-gray-700/30",
      icon: null,
    };
  };

  const info = getTechInfo(tech);
  const IconComponent = info.icon;

  return (
    <span
      className={`flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full border transition-all duration-300 hover:-translate-y-1 hover:brightness-110 ${info.bg} ${info.text} ${info.border}`}
    >
      {IconComponent && <IconComponent className="text-sm" />}
      {tech}
    </span>
  );
};

export default TechBadge;
