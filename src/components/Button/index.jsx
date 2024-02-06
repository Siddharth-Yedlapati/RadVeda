import React from "react";
import PropTypes from "prop-types";

const shapes = { square: "rounded-none", round: "rounded-[10px]" };
const variants = {
  fill: {
    cyan_400: "bg-cyan-400 text-white-A700",
    blue_gray_800_01: "bg-blue_gray-800_01 text-white-A700",
    yellow_400: "bg-yellow-400",
    deep_purple_A200: "bg-deep_purple-A200",
    black_900: "bg-black-900 text-white-A700",
    gray_50: "bg-gray-50 shadow-bs text-red-A700",
    blue_gray_100: "bg-blue_gray-100 text-black-900",
    teal_200: "bg-teal-200 text-black-900_01",
    cyan_300: "bg-cyan-300",
    indigo_A400: "bg-indigo-A400 shadow-bs text-white-A700",
  },
  outline: { gray_300: "border border-gray-300 border-solid text-gray-800" },
  gradient: { green_500_teal_400: "bg-gradient  text-white-A700" },
};
const sizes = {
  xs: "p-0.5",
  sm: "p-[5px]",
  md: "p-2",
  lg: "pl-[15px] pr-3 py-[35px]",
  xl: "px-2 py-4",
  "2xl": "p-[18px]",
  "3xl": "p-[21px] sm:px-5",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "gradient",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["square", "round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "2xl", "3xl"]),
  variant: PropTypes.oneOf(["fill", "outline", "gradient"]),
  color: PropTypes.oneOf([
    "cyan_400",
    "blue_gray_800_01",
    "yellow_400",
    "deep_purple_A200",
    "black_900",
    "gray_50",
    "blue_gray_100",
    "teal_200",
    "cyan_300",
    "indigo_A400",
    "gray_300",
    "green_500_teal_400",
  ]),
};

export { Button };
