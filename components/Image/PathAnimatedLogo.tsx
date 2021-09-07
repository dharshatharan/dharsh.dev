import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { ReactElement, useEffect, useState } from "react";

const strokeIcon = {
  hidden: {
    pathLength: 0,
  },
  visible: {
    pathLength: 1,
  },
};

const fillIcon = {
  hidden: {
    fill: "rgba(233,174,140, 0)",
  },
  visible: {
    fill: "rgba(233,174,140, 1)",
  },
};

const transition = {
  default: { duration: 2, ease: "easeInOut" },
  fill: { duration: 2, ease: [1, 0, 0.8, 1] },
};

export default function PathAnimatedLogo(): ReactElement {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();
  useEffect(() => setMounted(true), []);
  return (
    <>
      {mounted && (
        <motion.svg
          width="240"
          height="91"
          viewBox="0 0 240 91"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="mask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="240"
            height="91"
          >
            <rect width="240" height="91" fill="white" />
          </mask>
          <g mask="url(#mask0)">
            <motion.path
              d="M36 24.6506L4 28L61 78.6506L36 24.6506Z"
              fill="#E9AE8C"
              variants={fillIcon}
              initial="hidden"
              animate="visible"
              transition={transition}
            />
            <motion.path
              d="M64 4V85.5L4.5 32"
              stroke={`${resolvedTheme === "dark" ? "#FBFBFB" : "#151515"}`}
              strokeWidth="8"
              strokeLinecap="round"
              strokeLinejoin="round"
              variants={strokeIcon}
              initial="hidden"
              animate="visible"
              transition={transition}
            />
            <motion.path
              d="M115.095 73.982L145.526 84.4306L115.181 14.4757L115.095 73.982Z"
              fill="#E9AE8C"
              variants={fillIcon}
              initial="hidden"
              animate="visible"
              transition={transition}
            />
            <motion.path
              d="M81 80.909L115.347 7.00019L146.758 80.5926"
              stroke={`${resolvedTheme === "dark" ? "#FBFBFB" : "#151515"}`}
              strokeWidth="8"
              strokeLinecap="round"
              strokeLinejoin="round"
              variants={strokeIcon}
              initial="hidden"
              animate="visible"
              transition={transition}
            />
            <motion.path
              d="M168.131 43.0664L157.806 73.5396L227.637 42.9107L168.131 43.0664Z"
              fill="#E9AE8C"
              variants={fillIcon}
              initial="hidden"
              animate="visible"
              transition={transition}
            />
            <motion.path
              d="M161.065 8.99985L235.113 43.0464L161.649 74.7563"
              stroke={`${resolvedTheme === "dark" ? "#FBFBFB" : "#151515"}`}
              strokeWidth="8"
              strokeLinecap="round"
              strokeLinejoin="round"
              variants={strokeIcon}
              initial="hidden"
              animate="visible"
              transition={transition}
            />
          </g>
        </motion.svg>
      )}
    </>
  );
}
