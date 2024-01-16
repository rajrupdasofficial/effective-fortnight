import React from "react";

import { Img, Line, Text } from "components";

const AppIntroLandingLTRCard = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-[74px] md:h-auto object-cover rounded-lg w-[74px]"
          alt="image"
          src={props?.userimage}
        />
        <div className="flex flex-col gap-[5.48px] items-start justify-start pl-[8.22px] w-full">
          <div className="flex flex-row items-center justify-between w-full">
            {!!props?.doctorname ? (
              <Text
                className="text-base text-blue_gray-900_01 w-auto"
                size="txtInterBold16"
              >
                {props?.doctorname}
              </Text>
            ) : null}
            {!!props?.favoriteicon ? (
              <Img
                className="h-[9px] w-2.5"
                alt="favorite"
                src={props?.favoriteicon}
              />
            ) : null}
          </div>
          {!!props?.linefour ? (
            <Line className="bg-gray-200 h-px w-full" />
          ) : null}
          <div className="flex flex-col gap-[2.74px] items-start justify-start w-full">
            {!!props?.specialization ? (
              <Text
                className="text-blue_gray-700_01 text-sm w-full"
                size="txtInterSemiBold14"
              >
                {props?.specialization}
              </Text>
            ) : null}
            <div className="flex flex-row gap-[2.74px] items-center justify-start w-full">
              {!!props?.settingsicon ? (
                <Img
                  className="h-[9px] w-[9px]"
                  alt="settings"
                  src={props?.settingsicon}
                />
              ) : null}
              {!!props?.hospitalname ? (
                <Text
                  className="flex-1 text-blue_gray-700_01 text-sm w-auto"
                  size="txtInterRegular14"
                >
                  {props?.hospitalname}
                </Text>
              ) : null}
            </div>
            <div className="flex flex-row gap-[5.48px] items-center justify-start w-full">
              <div className="flex flex-row gap-[2.74px] items-center justify-start w-auto">
                {!!props?.signalicon ? (
                  <Img
                    className="h-2.5 w-2.5"
                    alt="signal"
                    src={props?.signalicon}
                  />
                ) : null}
                {!!props?.rating ? (
                  <Text
                    className="text-gray-600_01 text-xs w-auto"
                    size="txtInterRegular12"
                  >
                    {props?.rating}
                  </Text>
                ) : null}
              </div>
              {!!props?.linetwo ? (
                <Line className="bg-gray-200 h-2 rotate-[-90deg] w-px" />
              ) : null}
              {!!props?.reviewscounter ? (
                <Text
                  className="text-gray-600_01 text-xs w-auto"
                  size="txtInterRegular12"
                >
                  {props?.reviewscounter}
                </Text>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

AppIntroLandingLTRCard.defaultProps = {
  userimage: "images/img_image_74x74.png",
};

export default AppIntroLandingLTRCard;
