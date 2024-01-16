import React from "react";

const sizeClasses = {
  txtInterRegular815: "font-inter font-normal",
  txtInterSemiBold959: "font-inter font-semibold",
  txtInterBold24Bluegray900: "font-bold font-inter",
  txtInterRegular818: "font-inter font-normal",
  txtInterBold1218: "font-bold font-inter",
  txtInterRegular812: "font-inter font-normal",
  txtInterRegular20: "font-inter font-normal",
  txtPoppinsRegular959: "font-normal font-poppins",
  txtInterMedium24: "font-inter font-medium",
  txtInterSemiBold951: "font-inter font-semibold",
  txtInterSemiBold24: "font-inter font-semibold",
  txtInterBold24: "font-bold font-inter",
  txtInterBold1095: "font-bold font-inter",
  txtInterBold1086Bluegray80001: "font-bold font-inter",
  txtInterRegular20Gray60002: "font-inter font-normal",
  txtInterBold48WhiteA700: "font-bold font-inter",
  txtInterMedium948: "font-inter font-medium",
  txtInterBold60: "font-bold font-inter",
  txtInterRegular24: "font-inter font-normal",
  txtInterRegular32Bluegray70002: "font-inter font-normal",
  txtInterBold951: "font-bold font-inter",
  txtInterSemiBold109: "font-inter font-semibold",
  txtInterSemiBold815Bluegray70001: "font-inter font-semibold",
  txtPoppinsRegular948: "font-normal font-poppins",
  txtInterBold954: "font-bold font-inter",
  txtInterRegular818Bluegray70001: "font-inter font-normal",
  txtInterSemiBold959Gray60001: "font-inter font-semibold",
  txtInterBold16: "font-bold font-inter",
  txtInterSemiBold1358Bluegray90001: "font-inter font-semibold",
  txtInterBold1086: "font-bold font-inter",
  txtInterRegular24WhiteA700: "font-inter font-normal",
  txtInterBold1083: "font-bold font-inter",
  txtInterRegular12: "font-inter font-normal",
  txtInterRegular14: "font-inter font-normal",
  txtPoppinsRegular954: "font-normal font-poppins",
  txtPoppinsRegular951: "font-normal font-poppins",
  txtRobotoRomanMedium14: "font-medium font-roboto",
  txtInterSemiBold818: "font-inter font-semibold",
  txtInterSemiBold1363: "font-inter font-semibold",
  txtInterSemiBold815: "font-inter font-semibold",
  txtInterRegular40: "font-inter font-normal",
  txtInterBold48: "font-bold font-inter",
  txtInterRegular951: "font-inter font-normal",
  txtInterBold948: "font-bold font-inter",
  txtInterBold815Gray60001: "font-bold font-inter",
  txtInterBold951Gray90002: "font-bold font-inter",
  txtInterSemiBold109Bluegray900: "font-inter font-semibold",
  txtInterSemiBold1358: "font-inter font-semibold",
  txtInterSemiBold1358Bluegray900: "font-inter font-semibold",
  txtInterRegular948: "font-inter font-normal",
  txtInterRegular32: "font-inter font-normal",
  txtInterSemiBold14: "font-inter font-semibold",
  txtInterBold812: "font-bold font-inter",
  txtInterMedium32: "font-inter font-medium",
  txtInterBold815: "font-bold font-inter",
  txtInterBold815WhiteA70001: "font-bold font-inter",
  txtInterSemiBold951Gray60001: "font-inter font-semibold",
  txtInterSemiBold1369: "font-inter font-semibold",
  txtInterMedium951: "font-inter font-medium",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
