import React from "react";

const sizeClasses = {
  txtKanitBold19: "font-bold font-kanit",
  txtPoppinsBold18: "font-bold font-poppins",
  txtSFProTextRegular17: "font-normal font-sfprotext",
  txtPoppinsMedium6: "font-medium font-poppins",
  txtPoppinsMedium16Indigo300: "font-medium font-poppins",
  txtOpenSansRomanSemiBold24: "font-opensans font-semibold",
  txtPoppinsSemiBold14: "font-poppins font-semibold",
  txtPoppinsSemiBold16: "font-poppins font-semibold",
  txtPoppinsSemiBold10: "font-poppins font-semibold",
  txtPoppinsSemiBold12: "font-poppins font-semibold",
  txtPoppinsSemiBold17: "font-poppins font-semibold",
  txtPoppinsBold3336: "font-bold font-poppins",
  txtJuliusSansOneRegular36: "font-juliussansone font-normal",
  txtPoppinsMedium16: "font-medium font-poppins",
  txtPoppinsBold40: "font-bold font-poppins",
  txtOpenSansRomanRegular15: "font-normal font-opensans",
  txtPoppinsSemiBold24Black900: "font-poppins font-semibold",
  txtPoppinsBold24: "font-bold font-poppins",
  txtInterMedium14: "font-inter font-medium",
  txtPoppinsBold25: "font-bold font-poppins",
  txtPoppinsSemiBold24: "font-poppins font-semibold",
  txtPoppinsMedium23: "font-medium font-poppins",
  txtPoppinsSemiBold10WhiteA700: "font-poppins font-semibold",
  txtOutfitSemiBold18: "font-outfit font-semibold",
  txtPoppinsSemiBold21: "font-poppins font-semibold",
  txtPoppinsSemiBold23: "font-poppins font-semibold",
  txtInterRegular13: "font-inter font-normal",
  txtInterRegular16: "font-inter font-normal",
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
