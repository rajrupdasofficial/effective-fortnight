import React from "react";
import PropTypes from "prop-types";

const shapes = { circle: "rounded-[50%]", round: "rounded" };
const variants = {
  gradient: {
    blue_gray_300_02_blue_gray_300: "bg-gradient ",
    blue_gray_700_blue_gray_300: "bg-gradient1  text-blue_gray-900",
  },
  fill: {
    gray_100: "bg-gray-100",
    blue_gray_300_02: "bg-blue_gray-300_02",
    blue_gray_900: "bg-blue_gray-900 text-white-A700_01",
    gray_50_01: "bg-gray-50_01 text-gray-600_01",
  },
  outline: {
    blue_gray_900:
      "border border-blue_gray-900 border-solid text-blue_gray-900",
  },
};
const sizes = { xs: "p-[7px]", sm: "p-[11px]", md: "p-[17px]", lg: "p-5" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "xs",
  variant = "fill",
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
  shape: PropTypes.oneOf(["circle", "round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
  variant: PropTypes.oneOf(["gradient", "fill", "outline"]),
  color: PropTypes.oneOf([
    "blue_gray_300_02_blue_gray_300",
    "blue_gray_700_blue_gray_300",
    "gray_100",
    "blue_gray_300_02",
    "blue_gray_900",
    "gray_50_01",
  ]),
};

export { Button };
