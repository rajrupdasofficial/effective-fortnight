import React from "react";

import {
  Button,
  Img,
  Input,
  Line,
  List,
  PagerIndicator,
  Text,
} from "components";
import AppIntroLandingLTRCard from "components/AppIntroLandingLTRCard";

const AppIntroLandingLTRPage = () => {
  const appIntroLandingLtrCardPropList = [
    {
      signalicon: "images/img_signal.svg",
      reviewscounter: "1,872 Reviews",
      specialization: "Cardiologist",
      rating: "5",
      hospitalname: "Cardiology Center, USA",
      doctorname: "Dr. David Patel",
    },
    {
      doctorname: "Dr. Jessica Turner",
      specialization: "Gynecologist",
      hospitalname: <>Women&#39;s Clinic,Seatle,USA</>,
      rating: "4.9",
      userimage: "images/img_image_2.png",
      reviewscounter: "127 Reviews",
      signalicon: "images/img_signal.svg",
    },
  ];

  return (
    <>
      <div className="bg-white-A700 font-inter h-[6501px] mx-auto relative w-full">
        <div className="flex flex-col h-full items-center justify-start m-auto w-full">
          <div className="flex flex-col md:gap-10 gap-[4735px] items-center justify-start w-full">
            <Img
              className="h-[857px] sm:h-auto object-cover md:w-full"
              src="images/img_headerbg.png"
              alt="headerbg"
            />
            <Img
              className="h-[909px] sm:h-auto object-cover md:w-full"
              src="images/img_footerbg.png"
              alt="footerbg"
            />
          </div>
        </div>
        <div className="absolute flex flex-col gap-8 h-max inset-[0] items-center justify-start m-auto w-auto md:w-full mt-11">
          <div className="flex flex-col md:gap-10 gap-[218px] items-center justify-start w-auto md:w-full">
            <div className="flex flex-col md:gap-10 gap-[72px] items-center justify-start w-auto md:w-full">
              <div className="flex flex-col gap-14 items-start justify-start max-w-[1120px] mx-auto md:px-5 w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1120px] w-full">
                  {/* navbar header */}
                  <div className="flex flex-col font-roboto gap-1 h-[60px] md:h-auto items-center justify-center w-[67px]">
                    <Img
                      className="h-9 w-[38px]"
                      src="images/img_thumbsup.svg"
                      alt="thumbsup"
                    />
                    <Text
                      className="text-sm text-white-A700_01 w-auto"
                      size="txtRobotoRomanMedium14"
                    >
                      <span className="text-white-A700_b2 font-poppins text-left font-normal">
                        Health
                      </span>
                      <span className="text-white-A700_01 font-poppins text-left font-normal">
                        Pal
                      </span>
                    </Text>
                  </div>
                  <div className="flex sm:flex-1 sm:flex-col flex-row font-inter gap-10 items-start justify-start w-auto sm:w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-blue_gray-300 sm:text-xl w-auto"
                      size="txtInterBold24"
                    >
                      Home
                    </Text>
                    <Text
                      className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                      size="txtInterMedium24"
                    >
                      About
                    </Text>
                    <Text
                      className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                      size="txtInterMedium24"
                    >
                      Services
                    </Text>
                    <Text
                      className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                      size="txtInterMedium24"
                    >
                      Contacts
                    </Text>
                  </div>
                  <Button
                    className="cursor-pointer font-inter font-medium h-[52px] text-2xl md:text-[22px] text-center sm:text-xl w-[205px]"
                    shape="round"
                    size="sm"
                    variant="gradient"
                    color="blue_gray_700_blue_gray_300"
                  >
                    Download Now
                  </Button>
                </div>
                {/* header end */}
                <div className="flex flex-col items-center justify-between w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
                    <div className="flex md:flex-1 flex-col gap-[25px] items-start justify-start md:mt-0 mt-[62px] w-[74%] md:w-full">
                      <div className="flex flex-col gap-14 h-[476px] md:h-auto items-start justify-start max-w-[820px] w-full">
                        <div className="flex flex-col gap-4 items-start justify-start w-full">
                          <Text
                            className="leading-[150.00%] md:text-5xl text-6xl text-white-A700"
                            size="txtInterBold60"
                          >
                            <span className="text-white-A700 font-inter text-left font-bold">
                              <>
                                Meet Your Favorite <br />
                              </>
                            </span>
                            <span className="text-blue_gray-300 font-inter text-left font-bold">
                              Doctors
                            </span>
                            <span className="text-white-A700 font-inter text-left font-bold">
                              {" "}
                              Online.
                            </span>
                          </Text>
                          <Text
                            className="leading-[150.00%] md:text-3xl sm:text-[28px] text-[32px] text-gray-50"
                            size="txtInterRegular32"
                          >
                            <>
                              With HealthPal app, you can easily and quickly{" "}
                              <br />
                              access the medical specialties and hospital
                              services you need on all days of the week.
                            </>
                          </Text>
                        </div>
                        <Button
                          className="cursor-pointer font-medium h-20 md:text-3xl sm:text-[28px] text-[32px] text-center w-[302px]"
                          shape="round"
                          size="lg"
                          variant="gradient"
                          color="blue_gray_700_blue_gray_300"
                        >
                          Download App
                        </Button>
                      </div>
                      <Img
                        className="h-[57px] w-[17px]"
                        src="images/img_close.svg"
                        alt="close"
                      />
                    </div>
                    <div className="font-poppins h-[601px] md:h-[620px] mb-[19px] relative w-[27%] md:w-full">
                      <Img
                        className="h-[601px] m-auto"
                        src="images/img_iphone14mockup.svg"
                        alt="iphone14mockup"
                      />
                      <div className="absolute bg-white-A700_01 flex flex-col h-max inset-[0] items-center justify-center m-auto rounded-[36px] w-[88%]">
                        <div className="flex flex-row items-start justify-between p-1.5 w-full">
                          <Text
                            className="ml-2.5 mt-[5px] text-[9.48px] text-black-900 text-center tracking-[-0.19px]"
                            size="txtPoppinsRegular948"
                          >
                            9:41
                          </Text>
                          <Img
                            className="h-[7px] mr-[3px] mt-[7px] w-[45px]"
                            src="images/img_settings.svg"
                            alt="settings"
                          />
                        </div>
                        <div className="bg-white-A700_01 flex flex-col font-inter gap-[10.83px] h-[485px] md:h-auto items-start justify-start w-[263px]">
                          <div className="flex flex-col gap-[9.48px] items-center justify-start px-[16.24px] w-full">
                            <div className="flex flex-row items-end justify-between w-full">
                              <div className="flex flex-col gap-[2.71px] items-start justify-start w-auto">
                                <Text
                                  className="text-[9.48px] text-center text-gray-600_01 w-auto"
                                  size="txtInterRegular948"
                                >
                                  Location
                                </Text>
                                <Input
                                  name="frame1000000926"
                                  placeholder="Seattle, USA"
                                  className="font-semibold p-0 placeholder:text-blue_gray-800_01 text-[9.48px] text-blue_gray-800_01 text-center w-full"
                                  wrapClassName="flex w-full"
                                  prefix={
                                    <div className="mr-1 w-3 bg-blue_gray-900">
                                      <Img
                                        className="my-auto"
                                        src="images/img_linkedin.svg"
                                        alt="linkedin"
                                      />
                                    </div>
                                  }
                                  suffix={
                                    <Img
                                      className="h-[9px] ml-[5px] my-0.5"
                                      src="images/img_checkmark.svg"
                                      alt="checkmark"
                                    />
                                  }
                                ></Input>
                              </div>
                              <Img
                                className="rounded-[50%] w-[23px]"
                                src="images/img_notification.svg"
                                alt="notification"
                              />
                            </div>
                            <Input
                              name="searchbar"
                              placeholder="Search doctor..."
                              className="p-0 placeholder:text-blue_gray-300_01 text-[9.48px] text-left w-full"
                              wrapClassName="flex w-full"
                              prefix={
                                <Img
                                  className="h-4 mr-2 my-auto"
                                  src="images/img_contrast.svg"
                                  alt="contrast"
                                />
                              }
                              shape="round"
                              color="gray_100"
                              size="sm"
                              variant="fill"
                            ></Input>
                            <div className="h-[110px] relative w-full">
                              <div className="m-auto w-full">
                                <Img
                                  className="h-full m-auto object-cover rounded-lg w-full"
                                  src="images/img_image.png"
                                  alt="image"
                                />
                                <div className="absolute bg-blue_gray-100_33 h-[67px] left-[0] rounded-[38px] top-[0] w-[34%]"></div>
                                <div className="absolute bg-blue_gray-100_33 bottom-[0] h-2 left-[20%] rounded-[28px] w-1/4"></div>
                              </div>
                              <div className="absolute bottom-[0] flex flex-col items-start justify-start left-[0] w-[56%] md:w-full">
                                <Text
                                  className="leading-[150.00%] text-[12.18px] text-white-A700_01"
                                  size="txtInterBold1218"
                                >
                                  <>
                                    Looking for
                                    <br />
                                    Specialist Doctors?
                                  </>
                                </Text>
                                <Text
                                  className="leading-[150.00%] mt-[5px] text-[8.12px] text-white-A700_01 w-[93%] sm:w-full"
                                  size="txtInterRegular812"
                                >
                                  Schedule an appointment with our top doctors.
                                </Text>
                                <PagerIndicator
                                  className="flex gap-[2.71px] h-1 items-start justify-start md:ml-[0] ml-[87px] mt-3.5 w-10"
                                  count={4}
                                  activeCss="inline-block cursor-pointer h-1 bg-white-A700_01 w-5 rounded-sm"
                                  activeIndex={1}
                                  inactiveCss="inline-block cursor-pointer rounded-[50%] h-1 bg-gray-200 w-1"
                                  selectedWrapperCss="inline-block"
                                  unselectedWrapperCss="inline-block"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col gap-[6.77px] items-start justify-start px-[16.24px] w-full">
                            <div className="flex flex-row gap-[6.77px] items-start justify-between w-full">
                              <Text
                                className="text-[10.83px] text-blue_gray-900 w-auto"
                                size="txtInterBold1083"
                              >
                                Categories
                              </Text>
                              <a
                                href="javascript:"
                                className="text-[9.48px] text-center text-gray-600_01 w-auto"
                              >
                                <Text size="txtInterMedium948">See All</Text>
                              </a>
                            </div>
                            <div className="flex flex-col items-start justify-start w-full">
                              <div className="gap-[21px] grid grid-cols-4 justify-center min-h-[auto] w-full">
                                <div className="flex flex-1 flex-col gap-[2.71px] items-center justify-start w-full">
                                  <Img
                                    className="h-[41px] rounded-bl-[5px] rounded-br-[5px] w-[41px]"
                                    src="images/img_image_red_200.svg"
                                    alt="image"
                                  />
                                  <Text
                                    className="text-[8.12px] text-blue_gray-700_01 text-center w-auto"
                                    size="txtInterBold812"
                                  >
                                    Dentistry
                                  </Text>
                                </div>
                                <div className="flex flex-1 flex-col gap-[2.71px] items-center justify-start w-full">
                                  <Img
                                    className="h-[41px] rounded-bl-[5px] rounded-br-[5px] w-[41px]"
                                    src="images/img_image_green_200.svg"
                                    alt="image"
                                  />
                                  <Text
                                    className="text-[8.12px] text-blue_gray-700_01 text-center w-auto"
                                    size="txtInterBold812"
                                  >
                                    Cardiolo..
                                  </Text>
                                </div>
                                <div className="flex flex-1 flex-col gap-[2.71px] items-center justify-start w-full">
                                  <Img
                                    className="h-[41px] rounded-bl-[5px] rounded-br-[5px] w-[41px]"
                                    src="images/img_image_deep_orange_a100.svg"
                                    alt="image"
                                  />
                                  <Text
                                    className="text-[8.12px] text-blue_gray-700_01 text-center w-auto"
                                    size="txtInterBold812"
                                  >
                                    Pulmono..
                                  </Text>
                                </div>
                                <div className="flex flex-1 flex-col gap-[2.71px] items-center justify-start w-full">
                                  <Img
                                    className="h-[41px] rounded-bl-[5px] rounded-br-[5px] w-[41px]"
                                    src="images/img_image_deep_purple_200.svg"
                                    alt="image"
                                  />
                                  <Text
                                    className="text-[8.12px] text-blue_gray-700_01 text-center w-auto"
                                    size="txtInterBold812"
                                  >
                                    General
                                  </Text>
                                </div>
                                <div className="flex flex-1 flex-col gap-[2.71px] items-center justify-start w-full">
                                  <Img
                                    className="h-[41px] rounded-[5px] w-[41px]"
                                    src="images/img_image_blue_gray_500.svg"
                                    alt="image"
                                  />
                                  <Text
                                    className="text-[8.12px] text-blue_gray-700_01 text-center w-auto"
                                    size="txtInterBold812"
                                  >
                                    Neurology
                                  </Text>
                                </div>
                                <div className="flex flex-1 flex-col gap-[2.71px] items-center justify-start w-full">
                                  <Img
                                    className="h-[41px] rounded-[5px] w-[41px]"
                                    src="images/img_image_indigo_900.svg"
                                    alt="image"
                                  />
                                  <Text
                                    className="text-[8.12px] text-blue_gray-700_01 text-center w-auto"
                                    size="txtInterBold812"
                                  >
                                    Gastroen..
                                  </Text>
                                </div>
                                <div className="flex flex-1 flex-col gap-[2.71px] items-center justify-start w-full">
                                  <Img
                                    className="h-[41px] rounded-bl-[5px] rounded-br-[5px] w-[41px]"
                                    src="images/img_image_gray_400.svg"
                                    alt="image"
                                  />
                                  <Text
                                    className="text-[8.12px] text-blue_gray-700_01 text-center w-auto"
                                    size="txtInterBold812"
                                  >
                                    Laborato..
                                  </Text>
                                </div>
                                <div className="flex flex-1 flex-col gap-[2.71px] items-center justify-start w-full">
                                  <Img
                                    className="h-[41px] rounded-bl-[5px] rounded-br-[5px] w-[41px]"
                                    src="images/img_image_teal_200.svg"
                                    alt="image"
                                  />
                                  <Text
                                    className="text-[8.12px] text-blue_gray-700_01 text-center w-auto"
                                    size="txtInterBold812"
                                  >
                                    Vaccinat..
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col gap-[6.77px] items-start justify-start pl-[16.24px] w-[263px]">
                            <div className="flex flex-row gap-[10.83px] items-center justify-between w-[231px]">
                              <Text
                                className="text-[10.83px] text-blue_gray-900 w-auto"
                                size="txtInterBold1083"
                              >
                                Nearby Medical Centers
                              </Text>
                              <a
                                href="javascript:"
                                className="text-[9.48px] text-center text-gray-600_01 w-auto"
                              >
                                <Text size="txtInterMedium948">See All</Text>
                              </a>
                            </div>
                            <div className="flex flex-row gap-[10.83px] items-start justify-start pb-[2.71px] pr-[2.71px] w-[247px]">
                              <div className="bg-white-A700_01 flex flex-col items-start justify-start rounded-[5px] shadow-bs2 w-[157px]">
                                <div className="relative w-full">
                                  <Img
                                    className="h-full m-auto object-cover rounded-tl-[5px] rounded-tr-[5px] w-[157px]"
                                    src="images/img_image_81x157.png"
                                    alt="image_One"
                                  />
                                  <div className="absolute bg-blue_gray-900_33 flex flex-col items-center justify-center p-[4.06px] right-[3%] rounded-lg top-[6%] w-[18px]">
                                    <Img
                                      className="h-[9px] w-2.5"
                                      src="images/img_favorite.svg"
                                      alt="favorite"
                                    />
                                  </div>
                                </div>
                                <div className="flex flex-col items-start justify-start pb-[8.12px] pt-[5.41px] px-[8.12px] w-full">
                                  <div className="flex flex-col items-start justify-start w-full">
                                    <div className="flex flex-col items-start justify-start w-full">
                                      <Text
                                        className="text-[9.48px] text-blue_gray-700_01 w-full"
                                        size="txtInterBold948"
                                      >
                                        Sunrise Health Clinic
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="bg-white-A700_01 flex flex-col items-start justify-start rounded-[5px] shadow-bs2 w-[79px]">
                                <Img
                                  className="h-[81px] md:h-auto object-cover rounded-tl-[5px] rounded-tr-[5px] w-full"
                                  src="images/img_image_81x79.png"
                                  alt="image_Two"
                                />
                                <div className="flex flex-col items-start justify-start pb-[8.12px] pt-[5.41px] px-[8.12px] w-full">
                                  <div className="flex flex-col items-start justify-start w-full">
                                    <div className="flex flex-col items-start justify-start w-full">
                                      <Text
                                        className="text-[9.48px] text-blue_gray-700_01 w-full"
                                        size="txtInterBold948"
                                      >
                                        Golden Cardiology Center
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <Img
                          className="h-[51px] rounded-bl-[36px] rounded-br-[36px] w-[263px]"
                          src="images/img_menubar.svg"
                          alt="menubar"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:gap-10 gap-[161px] items-center justify-start w-auto md:w-full">
                <div className="flex flex-col md:gap-10 gap-[88px] items-center justify-start w-auto md:w-full">
                  <div className="flex flex-col md:gap-10 gap-16 items-center justify-start max-w-[1117px] mx-auto md:px-5 w-full">
                    <div className="flex flex-row gap-4 items-center justify-center w-full">
                      <Line className="bg-blue_gray-300 h-1 rotate-[-180deg] w-[6%]" />
                      <Text
                        className="text-5xl sm:text-[38px] md:text-[44px] text-blue_gray-900 w-auto"
                        size="txtInterBold48"
                      >
                        Features
                      </Text>
                      <Line className="bg-blue_gray-300 h-1 rotate-[-180deg] w-[6%]" />
                    </div>
                    <List
                      className="sm:flex-col flex-row md:gap-10 gap-20 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start w-full"
                      orientation="horizontal"
                    >
                      <div className="bg-white-A700_01 flex flex-1 md:flex-1 flex-col items-center justify-center sm:px-5 px-8 py-14 rounded shadow-bs3 w-auto md:w-full">
                        <div className="flex flex-col gap-6 items-center justify-start w-auto">
                          <Button
                            className="flex h-[72px] items-center justify-center w-[72px]"
                            shape="circle"
                            color="blue_gray_300_02"
                            size="md"
                          >
                            <Img
                              className="h-9"
                              src="images/img_checkmark_blue_gray_900.svg"
                              alt="checkmark"
                            />
                          </Button>
                          <Text
                            className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-auto"
                            size="txtInterBold24Bluegray900"
                          >
                            Easy Use
                          </Text>
                          <Text
                            className="leading-[150.00%] max-w-[255px] md:max-w-full text-blue_gray-700_02 text-center text-xl"
                            size="txtInterRegular20"
                          >
                            Using this application is very simple for all people
                            at any ages.
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white-A700_01 flex flex-1 md:flex-1 flex-col items-center justify-center sm:px-5 px-8 py-14 rounded shadow-bs3 w-auto md:w-full">
                        <div className="flex flex-col gap-6 items-center justify-start w-auto">
                          <Button
                            className="flex h-[72px] items-center justify-center w-[72px]"
                            shape="circle"
                            color="blue_gray_300_02"
                            size="md"
                          >
                            <Img
                              className="h-9"
                              src="images/img_settings_blue_gray_900.svg"
                              alt="settings"
                            />
                          </Button>
                          <Text
                            className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-auto"
                            size="txtInterBold24Bluegray900"
                          >
                            24/7 Support
                          </Text>
                          <Text
                            className="leading-[150.00%] max-w-[255px] md:max-w-full text-blue_gray-700_02 text-center text-xl"
                            size="txtInterRegular20"
                          >
                            Access to support services on all days of the week
                            at all hours.
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white-A700_01 flex flex-1 md:flex-1 flex-col items-center justify-center sm:px-5 px-8 py-14 rounded shadow-bs3 w-auto md:w-full">
                        <div className="flex flex-col gap-6 items-center justify-start w-auto">
                          <Button
                            className="flex h-[72px] items-center justify-center w-[72px]"
                            shape="circle"
                            size="md"
                            variant="gradient"
                            color="blue_gray_300_02_blue_gray_300"
                          >
                            <Img
                              className="h-9"
                              src="images/img_clock.svg"
                              alt="clock"
                            />
                          </Button>
                          <Text
                            className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-auto"
                            size="txtInterBold24Bluegray900"
                          >
                            Quick Access
                          </Text>
                          <Text
                            className="leading-[150.00%] max-w-[255px] md:max-w-full text-blue_gray-700_02 text-center text-xl"
                            size="txtInterRegular20"
                          >
                            Quick access to the doctors and medical services you
                            want.
                          </Text>
                        </div>
                      </div>
                    </List>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full">
                    <div
                      className="bg-cover bg-no-repeat flex md:flex-col flex-row md:gap-10 h-[696px] items-center justify-between max-w-[1440px] md:px-10 px-40 sm:px-5 py-12 w-full"
                      style={{
                        backgroundImage: "url('images/img_section2.png')",
                      }}
                    >
                      <div
                        className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[603px] items-center justify-start p-3 md:px-5 w-[27%] md:w-full"
                        style={{
                          backgroundImage:
                            "url('images/img_iphone14mockup.svg')",
                        }}
                      >
                        <div className="bg-white-A700_01 flex flex-col items-center justify-start mb-1 rounded-[36px] w-[96%] md:w-full">
                          <div className="flex flex-col h-[573px] md:h-auto items-start justify-start rounded-[36px] w-[264px]">
                            <div className="bg-white-A700_01 h-[521px] md:h-auto relative w-full">
                              <Img
                                className="h-full m-auto object-cover w-full"
                                src="images/img_mapimage.png"
                                alt="mapimage"
                              />
                              <div className="absolute bottom-[3%] flex flex-row gap-[10.86px] items-center justify-between pb-[2.72px] pr-[2.72px] right-[0] w-[248px]">
                                <div className="h-[170px] md:h-[85px] relative w-[157px]">
                                  <div className="absolute bg-white-A700_01 flex flex-col h-full inset-[0] items-center justify-start m-auto rounded-[5px] shadow-bs2 w-[157px]">
                                    <div className="relative w-full">
                                      <Img
                                        className="h-full m-auto object-cover rounded-tl-[5px] rounded-tr-[5px] w-[157px]"
                                        src="images/img_image_82x157.png"
                                        alt="image_Three"
                                      />
                                      <div className="absolute bg-blue_gray-900_33 flex flex-col items-center justify-center p-[4.07px] right-[3%] rounded-lg top-[6%] w-[18px]">
                                        <Img
                                          className="h-[9px] w-2.5"
                                          src="images/img_favorite.svg"
                                          alt="favorite_One"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="absolute bottom-[0] flex flex-col gap-[8.15px] inset-x-[0] items-center justify-start mx-auto pb-[8.15px] pt-[5.43px] px-[8.15px] w-full">
                                    <div className="flex flex-col gap-[2.72px] items-start justify-start w-full">
                                      <div className="flex flex-col gap-[5.43px] items-start justify-start w-full">
                                        <Text
                                          className="text-[9.51px] text-blue_gray-700_01 w-full"
                                          size="txtInterBold951"
                                        >
                                          Sunrise Health Clinic
                                        </Text>
                                        <Input
                                          name="frame1000000930"
                                          placeholder="123 Oak Street, CA 98765"
                                          className="p-0 placeholder:text-gray-600_01 text-[8.15px] text-gray-600_01 text-left w-full"
                                          wrapClassName="flex w-full"
                                          prefix={
                                            <Img
                                              className="mt-auto mb-px h-[9px] mr-0.5"
                                              src="images/img_settings_gray_600_01.svg"
                                              alt="settings"
                                            />
                                          }
                                        ></Input>
                                      </div>
                                      <div className="flex flex-row gap-[2.72px] items-center justify-start w-full">
                                        <div className="flex flex-row gap-[2.72px] items-center justify-start w-auto">
                                          <Text
                                            className="text-[8.15px] text-gray-600_01 w-auto"
                                            size="txtInterSemiBold815"
                                          >
                                            5.0
                                          </Text>
                                          <Img
                                            className="h-1.5 w-[39px]"
                                            src="images/img_television.svg"
                                            alt="television"
                                          />
                                        </div>
                                        <Text
                                          className="text-[8.15px] text-gray-600_01 w-auto"
                                          size="txtInterRegular815"
                                        >
                                          (58 Reviews)
                                        </Text>
                                      </div>
                                    </div>
                                    <Line className="bg-gray-200 h-px w-full" />
                                    <div className="flex flex-row gap-[24.45px] items-start justify-between w-full">
                                      <div className="flex flex-row gap-[2.72px] items-center justify-start w-auto">
                                        <Img
                                          className="h-2.5 w-2.5"
                                          src="images/img_television_blue_gray_300_01.svg"
                                          alt="television_One"
                                        />
                                        <Text
                                          className="text-[8.15px] text-gray-600_01 w-auto"
                                          size="txtInterRegular815"
                                        >
                                          2.5 km/40min
                                        </Text>
                                      </div>
                                      <div className="flex flex-row gap-[2.72px] items-center justify-start w-auto">
                                        <Img
                                          className="h-2.5 w-2.5"
                                          src="images/img_thumbsup_blue_gray_300_01.svg"
                                          alt="thumbsup_One"
                                        />
                                        <Text
                                          className="text-[8.15px] text-gray-600_01 w-auto"
                                          size="txtInterRegular815"
                                        >
                                          Hospital
                                        </Text>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="h-[170px] relative w-20">
                                  <div className="absolute inset-[0] justify-center m-auto overflow-x-auto w-full">
                                    <div className="h-[170px] relative w-full">
                                      <div className="bg-white-A700_01 h-[170px] ml-auto my-auto rounded-[5px] shadow-bs2 w-full"></div>
                                      <Img
                                        className="absolute h-full object-cover right-[0] rounded-tl-[5px] rounded-tr-[5px] top-[0] w-[157px]"
                                        src="images/img_image_1.png"
                                        alt="image_Four"
                                      />
                                    </div>
                                  </div>
                                  <div className="absolute bottom-[0] flex flex-col gap-[8.15px] inset-x-[0] items-start justify-start mx-auto pb-[8.15px] pt-[5.43px] px-[8.15px] w-full">
                                    <div className="flex flex-col gap-[2.72px] items-start justify-start w-full">
                                      <div className="flex flex-col gap-[5.43px] items-start justify-start w-full">
                                        <Text
                                          className="text-[9.51px] text-blue_gray-700_01 w-full"
                                          size="txtInterBold951"
                                        >
                                          Golden Cardiology Center
                                        </Text>
                                        <Input
                                          name="frame1000000930_One"
                                          placeholder="555 Bridge Street, Golden Gate"
                                          className="p-0 placeholder:text-gray-600_01 text-[8.15px] text-gray-600_01 text-left w-full"
                                          wrapClassName="flex w-full"
                                          prefix={
                                            <Img
                                              className="mt-auto mb-px h-[9px] mr-0.5"
                                              src="images/img_settings_gray_600_01.svg"
                                              alt="settings"
                                            />
                                          }
                                        ></Input>
                                      </div>
                                      <div className="flex flex-row gap-[2.72px] items-center justify-start w-full">
                                        <div className="flex flex-row gap-[2.72px] items-center justify-start w-auto">
                                          <Text
                                            className="text-[8.15px] text-gray-600_01 w-auto"
                                            size="txtInterSemiBold815"
                                          >
                                            4.9
                                          </Text>
                                          <Img
                                            className="h-1.5 w-[39px]"
                                            src="images/img_television.svg"
                                            alt="television_Two"
                                          />
                                        </div>
                                        <Text
                                          className="text-[8.15px] text-gray-600_01 w-auto"
                                          size="txtInterRegular815"
                                        >
                                          (108 Reviews)
                                        </Text>
                                      </div>
                                    </div>
                                    <Line className="bg-gray-200 h-px w-full" />
                                    <div className="flex flex-col items-start justify-between w-full">
                                      <div className="flex flex-row gap-[2.72px] items-center justify-start w-auto">
                                        <Img
                                          className="h-2.5 w-2.5"
                                          src="images/img_television_blue_gray_300_01.svg"
                                          alt="television_Three"
                                        />
                                        <Text
                                          className="text-[8.15px] text-gray-600_01 w-auto"
                                          size="txtInterRegular815"
                                        >
                                          2.5 km/40min
                                        </Text>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="absolute flex flex-row font-poppins inset-x-[0] items-start justify-between mx-auto p-[7px] top-[0] w-full">
                                <Text
                                  className="ml-2.5 mt-[5px] text-[9.51px] text-black-900 text-center tracking-[-0.19px]"
                                  size="txtPoppinsRegular951"
                                >
                                  9:41
                                </Text>
                                <Img
                                  className="h-[7px] mr-0.5 mt-[7px] w-[45px]"
                                  src="images/img_settings.svg"
                                  alt="settings_Three"
                                />
                              </div>
                              <div className="flex flex-col gap-[11px] justify-start ml-auto relative w-3/5 md:w-full">
                                <div
                                  className="bg-cover bg-no-repeat flex flex-col h-[34px] items-center justify-start md:ml-[0] ml-[127px] p-[3px] w-[19%] md:w-full"
                                  style={{
                                    backgroundImage:
                                      "url('images/img_locationimage.svg')",
                                  }}
                                >
                                  <Img
                                    className="h-[22px] md:h-auto mb-[5px] rounded-[50%] w-[22px]"
                                    src="images/img_frame1000000943.png"
                                    alt="frame1000000943"
                                  />
                                </div>
                                <div className="flex flex-col gap-[42px] items-start justify-start mr-2.5 w-[93%] md:w-full">
                                  <div
                                    className="bg-cover bg-no-repeat flex flex-col h-[34px] items-center justify-start md:ml-[0] ml-[3px] p-[3px] w-1/5 md:w-full"
                                    style={{
                                      backgroundImage:
                                        "url('images/img_locationimage.svg')",
                                    }}
                                  >
                                    <Img
                                      className="h-[22px] md:h-auto mb-[5px] rounded-[50%] w-[22px]"
                                      src="images/img_frame1000000943_22x22.png"
                                      alt="frame1000000943_One"
                                    />
                                  </div>
                                  <div className="flex flex-row items-start justify-between w-full">
                                    <div
                                      className="bg-cover bg-no-repeat flex flex-col h-[34px] items-center justify-start mt-[17px] p-[3px] w-1/5"
                                      style={{
                                        backgroundImage:
                                          "url('images/img_locationimage.svg')",
                                      }}
                                    >
                                      <Img
                                        className="h-[22px] md:h-auto mb-[5px] rounded-[50%] w-[22px]"
                                        src="images/img_frame1000000943_1.png"
                                        alt="frame1000000943_Two"
                                      />
                                    </div>
                                    <div
                                      className="bg-cover bg-no-repeat flex flex-col h-[34px] items-center justify-start mb-[17px] p-[3px] w-1/5"
                                      style={{
                                        backgroundImage:
                                          "url('images/img_locationimage.svg')",
                                      }}
                                    >
                                      <Img
                                        className="h-[22px] md:h-auto mb-[5px] rounded-[50%] w-[22px]"
                                        src="images/img_frame1000000943_2.png"
                                        alt="frame1000000943_Three"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="absolute flex flex-col font-inter inset-x-[0] items-center justify-start mx-auto px-[16.3px] top-[10%] w-[264px] sm:w-full">
                                <Input
                                  name="frameNine"
                                  placeholder="Search Doctor, Hospital"
                                  className="p-0 placeholder:text-blue_gray-300_01 text-[9.51px] text-left w-full"
                                  wrapClassName="flex w-full"
                                  prefix={
                                    <Img
                                      className="h-4 mr-2 my-auto"
                                      src="images/img_contrast.svg"
                                      alt="contrast"
                                    />
                                  }
                                  shape="round"
                                  color="white_A700_01"
                                  size="sm"
                                  variant="fill"
                                ></Input>
                              </div>
                            </div>
                            <div className="flex flex-row gap-[10.19px] h-full items-center justify-between sm:px-5 px-[32.59px] w-full">
                              <Img
                                className="h-4 w-4"
                                src="images/img_user.svg"
                                alt="user"
                              />
                              <Button
                                className="flex h-8 items-center justify-center rounded-[50%] w-8"
                                shape="circle"
                                color="gray_100"
                                size="sm"
                              >
                                <Img
                                  src="images/img_linkedin_blue_gray_700_01.svg"
                                  alt="linkedin_One"
                                />
                              </Button>
                              <Img
                                className="h-4 w-4"
                                src="images/img_calendar.svg"
                                alt="calendar"
                              />
                              <Img
                                className="h-4 w-4"
                                src="images/img_television_blue_gray_300_01_16x16.svg"
                                alt="television_Four"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex md:flex-1 flex-col gap-4 items-center justify-start w-auto md:w-full">
                        <div className="flex md:flex-col flex-row gap-4 items-center justify-start w-auto md:w-full">
                          <Line className="bg-blue_gray-300 h-1 rotate-[-180deg] w-[10%]" />
                          <Text
                            className="leading-[150.00%] max-w-[493px] md:max-w-full text-5xl sm:text-[38px] md:text-[44px] text-blue_gray-900 text-center"
                            size="txtInterBold48"
                          >
                            Quick access to the services you need
                          </Text>
                          <Line className="bg-blue_gray-300 h-1 rotate-[-180deg] w-[10%]" />
                        </div>
                        <Text
                          className="leading-[150.00%] max-w-[573px] md:max-w-full md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-700_02 text-center"
                          size="txtInterRegular32Bluegray70002"
                        >
                          Easily find the doctors and medical centers you need,
                          on the map.
                        </Text>
                      </div>
                    </div>
                    <div className="h-[608px] sm:h-[696px] md:h-[912px] mt-[88px] md:px-5 relative w-full">
                      <div className="absolute bg-green-50 h-[366px] inset-[0] justify-center m-auto w-full"></div>
                      <div className="absolute flex md:flex-col flex-row md:gap-10 h-full inset-[0] items-center justify-between m-auto max-w-[1122px] w-full">
                        <div className="flex flex-1 flex-col gap-4 items-start justify-start max-w-[667px] w-full">
                          <Text
                            className="text-5xl sm:text-[38px] md:text-[44px] text-blue_gray-900 w-full"
                            size="txtInterBold48"
                          >
                            Access to specialist doctors
                          </Text>
                          <Text
                            className="leading-[150.00%] max-w-[667px] md:max-w-full md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-700_02"
                            size="txtInterRegular32Bluegray70002"
                          >
                            You have easy access to various medical specialties
                            and doctors.
                          </Text>
                        </div>
                        <div
                          className="bg-cover bg-no-repeat flex md:flex-1 flex-col font-poppins h-[608px] items-center justify-start p-[15px] w-[27%] md:w-full"
                          style={{
                            backgroundImage:
                              "url('images/img_iphone14mockup.svg')",
                          }}
                        >
                          <div className="bg-white-A700_01 flex flex-col items-center justify-start rounded-[36px] w-[99%] md:w-full">
                            <div className="flex flex-col gap-[5.48px] h-[577px] md:h-auto items-start justify-start rounded-[36px] w-[267px]">
                              <div className="flex flex-row items-start justify-between p-[7px] w-full">
                                <Text
                                  className="ml-2.5 mt-[5px] text-[9.59px] text-black-900 text-center tracking-[-0.19px]"
                                  size="txtPoppinsRegular959"
                                >
                                  9:41
                                </Text>
                                <Img
                                  className="h-[7px] mr-0.5 mt-[7px] w-[45px]"
                                  src="images/img_settings_black_900.svg"
                                  alt="settings_Four"
                                />
                              </div>
                              <div className="bg-white-A700_01 flex flex-col font-inter gap-[10.95px] h-full items-start justify-start w-full">
                                <div className="flex flex-col gap-[16.43px] items-center justify-start px-[16.43px] w-full">
                                  <div className="flex flex-col gap-[9.59px] items-center justify-start w-full">
                                    <div className="flex flex-row gap-[9.59px] items-center justify-between w-full">
                                      <Img
                                        className="h-4 w-4"
                                        src="images/img_arrowdown.svg"
                                        alt="arrowdown"
                                      />
                                      <Text
                                        className="text-[13.69px] text-blue_gray-800_01 w-auto"
                                        size="txtInterSemiBold1369"
                                      >
                                        All Doctors
                                      </Text>
                                    </div>
                                    <Input
                                      name="searchbar_One"
                                      placeholder="Search doctor..."
                                      className="p-0 placeholder:text-blue_gray-300_01 text-[9.59px] text-left w-full"
                                      wrapClassName="flex w-full"
                                      prefix={
                                        <Img
                                          className="h-4 mr-2 my-auto"
                                          src="images/img_contrast.svg"
                                          alt="contrast"
                                        />
                                      }
                                      shape="round"
                                      color="gray_100"
                                      size="sm"
                                      variant="fill"
                                    ></Input>
                                  </div>
                                  <div className="flex flex-row gap-[5.48px] items-start justify-start pl-[16.43px] w-[267px]">
                                    <Button
                                      className="cursor-pointer font-semibold min-w-[39px] rounded-[12px] text-[9.59px] text-center"
                                      color="blue_gray_900"
                                    >
                                      All
                                    </Button>
                                    <Button
                                      className="cursor-pointer font-semibold min-w-[64px] rounded-[12px] text-[9.59px] text-center"
                                      color="blue_gray_900"
                                      variant="outline"
                                    >
                                      General
                                    </Button>
                                    <Button
                                      className="cursor-pointer font-semibold min-w-[84px] rounded-[12px] text-[9.59px] text-center"
                                      color="blue_gray_900"
                                      variant="outline"
                                    >
                                      Cardiologist
                                    </Button>
                                    <Text
                                      className="border border-blue_gray-900 border-solid pl-[13px] py-1.5 rounded-[12px] text-[9.59px] text-blue_gray-900 w-auto"
                                      size="txtInterSemiBold959"
                                    >
                                      Dentist
                                    </Text>
                                  </div>
                                </div>
                                <div className="flex flex-col gap-[5.48px] items-start justify-start px-[16.43px] py-[6.85px] w-full">
                                  <div className="flex flex-row gap-[6.85px] items-start justify-between w-full">
                                    <Text
                                      className="text-[10.95px] text-blue_gray-900_01 w-auto"
                                      size="txtInterBold1095"
                                    >
                                      532 founds
                                    </Text>
                                    <div className="flex flex-row gap-[2.74px] items-center justify-start w-auto">
                                      <Text
                                        className="text-[9.59px] text-gray-600_01 w-auto"
                                        size="txtInterSemiBold959Gray60001"
                                      >
                                        Default
                                      </Text>
                                      <Img
                                        className="h-[9px] w-[9px]"
                                        src="images/img_share.svg"
                                        alt="share"
                                      />
                                    </div>
                                  </div>
                                  <List
                                    className="flex flex-col gap-[5px] items-center w-full"
                                    orientation="vertical"
                                  >
                                    {appIntroLandingLtrCardPropList.map(
                                      (props, index) => (
                                        <React.Fragment
                                          key={`AppIntroLandingLTRCard${index}`}
                                        >
                                          <AppIntroLandingLTRCard
                                            className="bg-white-A700_01 border border-gray-100 border-solid flex flex-row items-center justify-start p-[8.22px] rounded-lg shadow-bs1 w-[234px]"
                                            favoriteicon="images/img_favorite_blue_gray_900_01.svg"
                                            settingsicon="images/img_settings_blue_gray_700_01.svg"
                                            {...props}
                                          />
                                        </React.Fragment>
                                      )
                                    )}
                                  </List>
                                  <AppIntroLandingLTRCard
                                    className="bg-white-A700_01 border border-gray-100 border-solid flex flex-col items-center justify-start p-[8.22px] rounded-md shadow-bs1 w-[234px]"
                                    userimage="images/img_image_4x74.png"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex md:flex-col flex-row font-poppins md:gap-10 gap-[140px] items-center justify-start mt-20 md:px-10 px-40 sm:px-5 w-auto md:w-full">
                      <div
                        className="bg-cover bg-no-repeat flex flex-col h-[605px] items-center justify-start p-[11px] md:px-5 w-[27%] md:w-full"
                        style={{
                          backgroundImage:
                            "url('images/img_iphone14mockup.svg')",
                        }}
                      >
                        <div className="bg-white-A700_01 flex flex-col items-center justify-start mb-1.5 rounded-[36px] w-[95%] md:w-full">
                          <div className="flex flex-col gap-[5.45px] h-[575px] md:h-auto items-start justify-start rounded-[36px] w-[265px]">
                            <div className="flex flex-row items-start justify-between p-[7px] w-full">
                              <Text
                                className="ml-2.5 mt-[5px] text-[9.54px] text-black-900 text-center tracking-[-0.19px]"
                                size="txtPoppinsRegular954"
                              >
                                9:41
                              </Text>
                              <Img
                                className="h-[7px] mr-0.5 mt-[7px] w-[45px]"
                                src="images/img_settings.svg"
                                alt="settings_Five"
                              />
                            </div>
                            <div className="bg-white-A700_01 flex flex-col font-inter gap-[16.35px] h-full items-start justify-start w-full">
                              <div className="flex flex-row gap-[9.54px] items-center justify-between px-[16.35px] w-full">
                                <Img
                                  className="h-4 w-4"
                                  src="images/img_arrowdown.svg"
                                  alt="arrowdown_One"
                                />
                                <Text
                                  className="text-[13.63px] text-blue_gray-800_01 w-auto"
                                  size="txtInterSemiBold1363"
                                >
                                  Favorites
                                </Text>
                              </div>
                              <div className="relative w-full">
                                <Line className="absolute bg-blue_gray-900 h-0.5 right-[15%] rounded-tl-[34px] rounded-tr-[34px] top-[5%] w-[22%]" />
                                <div className="flex flex-col gap-[10.9px] items-center justify-start m-auto relative w-[265px]">
                                  <div className="flex flex-row gap-[27.25px] items-start justify-center px-[16.35px] w-full">
                                    <Text
                                      className="flex-1 text-[10.9px] text-blue_gray-300_01 text-center w-auto"
                                      size="txtInterSemiBold109"
                                    >
                                      Doctors
                                    </Text>
                                    <Text
                                      className="flex-1 text-[10.9px] text-blue_gray-900 text-center w-auto"
                                      size="txtInterSemiBold109Bluegray900"
                                    >
                                      Hospitals
                                    </Text>
                                  </div>
                                  <Line className="bg-gray-200 h-px w-full" />
                                  <div className="flex flex-col gap-[6.81px] items-start justify-start px-[16.35px] w-full">
                                    <div className="flex flex-col relative w-full">
                                      <div className="bg-white-A700_01 flex flex-col items-center justify-start mx-auto rounded-[5px] shadow-bs4 w-[233px]">
                                        <Img
                                          className="h-[82px] md:h-auto object-cover rounded-tl-[5px] rounded-tr-[5px] w-full"
                                          src="images/img_image_82x233.png"
                                          alt="image_Six"
                                        />
                                        <div className="flex flex-col gap-[8.18px] items-start justify-start pb-[8.18px] pt-[5.45px] px-[8.18px] w-full">
                                          <div className="flex flex-col gap-[5.45px] items-start justify-start w-full">
                                            <Text
                                              className="text-[9.54px] text-blue_gray-700_01 w-full"
                                              size="txtInterBold954"
                                            >
                                              Sunrise Health Clinic
                                            </Text>
                                            <Input
                                              name="location_One"
                                              placeholder="123 Oak Street, CA 98765"
                                              className="p-0 placeholder:text-gray-600_01 text-[8.18px] text-gray-600_01 text-left w-full"
                                              wrapClassName="flex w-full"
                                              prefix={
                                                <Img
                                                  className="mt-auto mb-px h-[9px] mr-0.5"
                                                  src="images/img_settings_gray_600_01.svg"
                                                  alt="settings"
                                                />
                                              }
                                            ></Input>
                                            <div className="flex flex-row gap-[5.45px] items-center justify-start w-full">
                                              <div className="flex flex-row gap-[2.73px] items-center justify-start w-auto">
                                                <Text
                                                  className="text-[8.18px] text-gray-600_01 w-auto"
                                                  size="txtInterSemiBold818"
                                                >
                                                  5.0
                                                </Text>
                                                <Img
                                                  className="h-1.5 w-[39px]"
                                                  src="images/img_television.svg"
                                                  alt="television_Five"
                                                />
                                              </div>
                                              <Text
                                                className="text-[8.18px] text-gray-600_01 w-auto"
                                                size="txtInterRegular818"
                                              >
                                                (128 Reviews)
                                              </Text>
                                            </div>
                                          </div>
                                          <Line className="bg-gray-200 h-px w-full" />
                                          <div className="flex flex-row gap-[24.53px] items-start justify-between w-full">
                                            <div className="flex flex-row gap-[2.73px] items-center justify-start w-auto">
                                              <Img
                                                className="h-2.5 w-2.5"
                                                src="images/img_television_blue_gray_300_01.svg"
                                                alt="television_Six"
                                              />
                                              <Text
                                                className="text-[8.18px] text-gray-600_01 w-auto"
                                                size="txtInterRegular818"
                                              >
                                                2.5 km/40min
                                              </Text>
                                            </div>
                                            <div className="flex flex-row gap-[2.73px] items-center justify-start w-auto">
                                              <Img
                                                className="h-2.5 w-2.5"
                                                src="images/img_thumbsup_blue_gray_300_01.svg"
                                                alt="thumbsup_Two"
                                              />
                                              <Text
                                                className="text-[8.18px] text-gray-600_01 w-auto"
                                                size="txtInterRegular818"
                                              >
                                                Hospital
                                              </Text>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="flex flex-col md:gap-10 gap-[158px] justify-start mb-auto mt-[-168.97px] mx-auto w-[233px] z-[1]">
                                        <div className="bg-blue_gray-900_33 flex flex-col items-center justify-center p-[4.09px] rounded-lg w-[18px]">
                                          <Img
                                            className="h-[9px] w-2.5"
                                            src="images/img_user_white_a700_01.svg"
                                            alt="user_One"
                                          />
                                        </div>
                                        <div className="bg-white-A700_01 flex flex-col items-start justify-start rounded-[5px] shadow-bs4 w-full">
                                          <div className="relative w-full">
                                            <Img
                                              className="h-full m-auto object-cover rounded-tl-[5px] rounded-tr-[5px] w-[233px]"
                                              src="images/img_image_5.png"
                                              alt="image_Seven"
                                            />
                                            <div className="absolute bg-blue_gray-900_33 flex flex-col items-center justify-center p-[4.09px] right-[2%] rounded-lg top-[6%] w-[18px]">
                                              <Img
                                                className="h-[9px] w-2.5"
                                                src="images/img_user_white_a700_01.svg"
                                                alt="user_Two"
                                              />
                                            </div>
                                          </div>
                                          <div className="flex flex-col gap-[8.18px] items-start justify-start pb-[8.18px] pt-[5.45px] px-[8.18px] w-full">
                                            <div className="flex flex-col gap-[5.45px] items-start justify-start w-full">
                                              <Text
                                                className="text-[9.54px] text-blue_gray-700_01 w-full"
                                                size="txtInterBold954"
                                              >
                                                Golden Cardiology Center
                                              </Text>
                                              <Input
                                                name="location_Two"
                                                placeholder="555 Bridge Street, Golden Gate"
                                                className="p-0 placeholder:text-gray-600_01 text-[8.18px] text-gray-600_01 text-left w-full"
                                                wrapClassName="flex w-full"
                                                prefix={
                                                  <Img
                                                    className="mt-auto mb-px h-[9px] mr-0.5"
                                                    src="images/img_settings_gray_600_01.svg"
                                                    alt="settings"
                                                  />
                                                }
                                              ></Input>
                                              <div className="flex flex-row gap-[5.45px] items-center justify-start w-full">
                                                <div className="flex flex-row gap-[2.73px] items-center justify-start w-auto">
                                                  <Text
                                                    className="text-[8.18px] text-gray-600_01 w-auto"
                                                    size="txtInterSemiBold818"
                                                  >
                                                    4.9
                                                  </Text>
                                                  <Img
                                                    className="h-1.5 w-[39px]"
                                                    src="images/img_television.svg"
                                                    alt="television_Seven"
                                                  />
                                                </div>
                                                <Text
                                                  className="text-[8.18px] text-gray-600_01 w-auto"
                                                  size="txtInterRegular818"
                                                >
                                                  (58 Reviews)
                                                </Text>
                                              </div>
                                            </div>
                                            <Line className="bg-gray-200 h-px w-full" />
                                            <div className="flex flex-row gap-[24.53px] items-start justify-between w-full">
                                              <div className="flex flex-row gap-[2.73px] items-center justify-start w-auto">
                                                <Img
                                                  className="h-2.5 w-2.5"
                                                  src="images/img_television_blue_gray_300_01.svg"
                                                  alt="television_Eight"
                                                />
                                                <Text
                                                  className="text-[8.18px] text-gray-600_01 w-auto"
                                                  size="txtInterRegular818"
                                                >
                                                  2.5 km/40min
                                                </Text>
                                              </div>
                                              <div className="flex flex-row gap-[2.73px] items-center justify-start w-auto">
                                                <Img
                                                  className="h-2.5 w-2.5"
                                                  src="images/img_thumbsup_blue_gray_300_01.svg"
                                                  alt="thumbsup_Three"
                                                />
                                                <Text
                                                  className="text-[8.18px] text-blue_gray-700_01 w-auto"
                                                  size="txtInterRegular818Bluegray70001"
                                                >
                                                  Clinic
                                                </Text>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="bg-white-A700_01 flex flex-col items-start justify-start rounded-[5px] shadow-bs4 w-full">
                                      <div className="relative w-full">
                                        <Img
                                          className="h-full m-auto object-cover rounded-tl-[5px] rounded-tr-[5px] w-[233px]"
                                          src="images/img_image_6.png"
                                          alt="image_Eight"
                                        />
                                        <div className="absolute bg-blue_gray-900_33 flex flex-col items-center justify-center p-[4.09px] right-[2%] rounded-lg top-[6%] w-[18px]">
                                          <Img
                                            className="h-[9px] w-2.5"
                                            src="images/img_user_white_a700_01.svg"
                                            alt="user_Three"
                                          />
                                        </div>
                                      </div>
                                      <div className="flex flex-col items-start justify-start pb-[8.18px] pt-[5.45px] px-[8.18px] w-full">
                                        <div className="flex flex-col items-start justify-start w-full">
                                          <Text
                                            className="text-[9.54px] text-blue_gray-700_01 w-full"
                                            size="txtInterBold954"
                                          >
                                            Orthopedic Surgery Center
                                          </Text>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col font-inter gap-8 items-start justify-start max-w-[680px] w-full">
                        <div className="flex flex-col gap-4 items-start justify-start w-full">
                          <div className="flex flex-row gap-4 items-center justify-start w-full">
                            <Line className="bg-blue_gray-300 h-1 rotate-[-180deg] w-[10%]" />
                            <Text
                              className="text-5xl sm:text-[38px] md:text-[44px] text-blue_gray-900 w-auto"
                              size="txtInterBold48"
                            >
                              About
                            </Text>
                            <Line className="bg-blue_gray-300 h-1 rotate-[-180deg] w-[10%]" />
                          </div>
                          <Text
                            className="leading-[150.00%] max-w-[680px] md:max-w-full md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-700_02"
                            size="txtInterRegular32Bluegray70002"
                          >
                            Our platform connects you with qualified doctors who
                            can provide medical consultations from the
                            convenience of your own home. With our user-friendly
                            interface, you can book appointments, chat with
                            doctors via video call, and even receive
                            e-prescriptions.
                          </Text>
                        </div>
                        <Text
                          className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-500 w-auto"
                          size="txtInterMedium32"
                        >
                          Read More
                        </Text>
                      </div>
                    </div>
                    <div
                      className="bg-cover bg-no-repeat flex md:flex-col flex-row font-inter md:gap-10 h-[366px] items-center justify-between max-w-[1440px] mt-[83px] md:px-10 px-40 sm:px-5 py-[109px] w-full"
                      style={{
                        backgroundImage: "url('images/img_section5.png')",
                      }}
                    >
                      <div className="flex flex-col gap-4 items-center justify-start w-auto">
                        <Text
                          className="text-5xl sm:text-[38px] md:text-[44px] text-blue_gray-900 text-center w-auto"
                          size="txtInterBold48"
                        >
                          300+
                        </Text>
                        <Text
                          className="sm:text-4xl md:text-[38px] text-[40px] text-blue_gray-800_02 text-center w-auto"
                          size="txtInterRegular40"
                        >
                          Medical Centers
                        </Text>
                      </div>
                      <div className="flex sm:flex-1 flex-col gap-4 items-center justify-start w-auto sm:w-full">
                        <Text
                          className="text-5xl sm:text-[38px] md:text-[44px] text-blue_gray-900 text-center w-auto"
                          size="txtInterBold48"
                        >
                          200+
                        </Text>
                        <Text
                          className="sm:text-4xl md:text-[38px] text-[40px] text-blue_gray-800_02 text-center w-auto"
                          size="txtInterRegular40"
                        >
                          Professional Doctors
                        </Text>
                      </div>
                      <div className="flex flex-col gap-4 items-center justify-start w-auto">
                        <Text
                          className="text-5xl sm:text-[38px] md:text-[44px] text-blue_gray-900 text-center w-auto"
                          size="txtInterBold48"
                        >
                          3k+
                        </Text>
                        <Text
                          className="sm:text-4xl md:text-[38px] text-[40px] text-blue_gray-800_02 text-center w-auto"
                          size="txtInterRegular40"
                        >
                          Customers
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col font-inter items-center justify-start mt-[88px] w-full">
                      <div className="h-[824px] pt-20 md:px-5 relative w-full">
                        <div className="flex flex-col md:gap-10 gap-20 items-center justify-start mb-[-293px] mt-auto mx-auto w-auto z-[1]">
                          <div className="flex md:flex-col flex-row gap-4 items-center justify-start w-auto md:w-full">
                            <Line className="bg-blue_gray-300 h-1 rotate-[-180deg] w-[8%]" />
                            <Text
                              className="text-5xl sm:text-[38px] md:text-[44px] text-blue_gray-900 w-auto"
                              size="txtInterBold48"
                            >
                              Easily Book Your Appointment
                            </Text>
                            <Line className="bg-blue_gray-300 h-1 rotate-[-180deg] w-[8%]" />
                          </div>
                          <div className="flex md:flex-col flex-row font-poppins md:gap-10 gap-[110px] items-start justify-between w-auto md:w-full">
                            <div
                              className="bg-cover bg-no-repeat flex flex-col h-[592px] items-center justify-end p-[3px]"
                              style={{
                                backgroundImage:
                                  "url('images/img_iphone14mockup.svg')",
                              }}
                            >
                              <div className="bg-white-A700_01 flex flex-col items-center justify-start mt-[11px] rounded-[36px] w-[90%] md:w-full">
                                <div className="flex flex-col gap-[5.43px] h-[573px] md:h-auto items-start justify-start rounded-[36px] w-[264px]">
                                  <div className="flex flex-row items-start justify-between p-[7px] w-full">
                                    <Text
                                      className="ml-2.5 mt-[5px] text-[9.51px] text-black-900 text-center tracking-[-0.19px]"
                                      size="txtPoppinsRegular951"
                                    >
                                      9:41
                                    </Text>
                                    <Img
                                      className="h-[7px] mr-0.5 mt-[7px] w-[45px]"
                                      src="images/img_settings.svg"
                                      alt="settings_Six"
                                    />
                                  </div>
                                  <div className="bg-white-A700_01 flex flex-col font-inter gap-[10.86px] h-full items-start justify-start w-full">
                                    <div className="flex flex-col gap-[10.86px] items-start justify-start px-[16.3px] py-[6.79px] w-full">
                                      <div className="flex flex-row gap-[9.51px] items-center justify-between w-full">
                                        <Img
                                          className="h-4 w-4"
                                          src="images/img_arrowdown.svg"
                                          alt="arrowdown_Two"
                                        />
                                        <Text
                                          className="text-[13.58px] text-blue_gray-800_01 w-auto"
                                          size="txtInterSemiBold1358"
                                        >
                                          Doctor Details
                                        </Text>
                                        <Img
                                          className="h-3 w-4"
                                          src="images/img_favorite_blue_gray_800_01.svg"
                                          alt="favorite_Two"
                                        />
                                      </div>
                                      <div className="bg-white-A700_01 border border-gray-100 border-solid flex flex-row items-center justify-start p-[8.15px] rounded-lg shadow-bs5 w-[232px]">
                                        <Img
                                          className="h-[74px] md:h-auto object-cover rounded-lg w-[74px]"
                                          src="images/img_image_7.png"
                                          alt="image_Nine"
                                        />
                                        <div className="flex flex-col gap-[5.43px] items-start justify-start pl-[8.15px] w-full">
                                          <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                                            <Text
                                              className="text-[10.86px] text-blue_gray-900_01 w-auto"
                                              size="txtInterBold1086"
                                            >
                                              Dr. David Patel
                                            </Text>
                                            <Line className="bg-gray-200 h-px w-full" />
                                          </div>
                                          <Text
                                            className="text-[9.51px] text-blue_gray-700_01 w-full"
                                            size="txtInterSemiBold951"
                                          >
                                            Cardiologist
                                          </Text>
                                          <Input
                                            name="frame1000000963"
                                            placeholder="Golden Cardiology Center"
                                            className="p-0 placeholder:text-blue_gray-700_01 text-[9.51px] text-blue_gray-700_01 text-left w-full"
                                            wrapClassName="flex w-full"
                                            prefix={
                                              <Img
                                                className="h-[9px] mr-0.5 my-px"
                                                src="images/img_settings_blue_gray_700_01.svg"
                                                alt="settings"
                                              />
                                            }
                                          ></Input>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="bg-white-A700_01 flex flex-row gap-[6.79px] items-start justify-between px-[16.3px] w-full">
                                      <List
                                        className="sm:flex-col flex-row gap-5 grid grid-cols-2 w-[47%]"
                                        orientation="horizontal"
                                      >
                                        <div className="flex flex-col gap-[1.36px] items-center justify-center w-[38px]">
                                          <Img
                                            className="rounded-[50%] w-[38px]"
                                            src="images/img_vuesaxboldprofile2user.svg"
                                            alt="vuesaxboldprofi"
                                          />
                                          <Text
                                            className="text-[9.51px] text-blue_gray-700_01 w-auto"
                                            size="txtInterSemiBold951"
                                          >
                                            2,000+
                                          </Text>
                                          <Text
                                            className="text-[9.51px] text-gray-600_01 w-auto"
                                            size="txtInterRegular951"
                                          >
                                            patients
                                          </Text>
                                        </div>
                                        <div className="flex flex-col gap-[1.36px] items-center justify-center w-[50px]">
                                          <Img
                                            className="rounded-[50%] w-[38px]"
                                            src="images/img_vuesaxboldmedal.svg"
                                            alt="vuesaxboldmedal"
                                          />
                                          <Text
                                            className="text-[9.51px] text-blue_gray-700_01 w-auto"
                                            size="txtInterSemiBold951"
                                          >
                                            10+
                                          </Text>
                                          <Text
                                            className="text-[9.51px] text-gray-600_01 w-auto"
                                            size="txtInterRegular951"
                                          >
                                            experience
                                          </Text>
                                        </div>
                                      </List>
                                      <div className="flex flex-col gap-[1.36px] items-center justify-center w-auto">
                                        <Img
                                          className="rounded-[50%] w-[37px]"
                                          src="images/img_close_gray_100.svg"
                                          alt="close_One"
                                        />
                                        <Text
                                          className="text-[9.51px] text-blue_gray-700_01 w-auto"
                                          size="txtInterSemiBold951"
                                        >
                                          5
                                        </Text>
                                        <Text
                                          className="text-[9.51px] text-gray-600_01 w-auto"
                                          size="txtInterRegular951"
                                        >
                                          rating
                                        </Text>
                                      </div>
                                      <div className="flex flex-col gap-[1.36px] items-center justify-start w-[38px]">
                                        <Img
                                          className="rounded-[50%] w-[38px]"
                                          src="images/img_vuesaxboldmessages.svg"
                                          alt="vuesaxboldmessa"
                                        />
                                        <Text
                                          className="text-[9.51px] text-blue_gray-700_01 w-auto"
                                          size="txtInterSemiBold951"
                                        >
                                          1,872
                                        </Text>
                                        <Text
                                          className="text-[9.51px] text-gray-600_01 w-auto"
                                          size="txtInterRegular951"
                                        >
                                          reviews
                                        </Text>
                                      </div>
                                    </div>
                                    <div className="flex flex-col gap-[5.43px] items-start justify-start px-[16.3px] w-full">
                                      <Text
                                        className="text-[13.58px] text-blue_gray-900_01 w-auto"
                                        size="txtInterSemiBold1358Bluegray90001"
                                      >
                                        About me
                                      </Text>
                                      <Text
                                        className="leading-[150.00%] max-w-[232px] md:max-w-full text-[9.51px] text-gray-600_01"
                                        size="txtInterRegular951"
                                      >
                                        <span className="text-gray-600_01 font-inter text-left font-normal">
                                          Dr. David Patel, a dedicated
                                          cardiologist, brings a wealth of
                                          experience to Golden Gate Cardiology
                                          Center in Golden Gate, CA.{" "}
                                        </span>
                                        <a
                                          href="javascript:"
                                          className="text-gray-900_02 font-inter text-left font-normal underline"
                                        >
                                          view more
                                        </a>
                                      </Text>
                                    </div>
                                    <div className="flex flex-col gap-[5.43px] items-start justify-start px-[16.3px] w-full">
                                      <Text
                                        className="text-[13.58px] text-blue_gray-900_01 w-auto"
                                        size="txtInterSemiBold1358Bluegray90001"
                                      >
                                        Working Time
                                      </Text>
                                      <Text
                                        className="text-[9.51px] text-gray-600_01 w-full"
                                        size="txtInterRegular951"
                                      >
                                        Monday-Friday, 08.00 AM-18.00 pM
                                      </Text>
                                    </div>
                                    <div className="flex flex-col gap-[10.86px] items-start justify-start w-full">
                                      <div className="flex flex-row gap-[10.86px] items-center justify-between px-[16.3px] w-full">
                                        <Text
                                          className="text-[13.58px] text-blue_gray-900_01 w-auto"
                                          size="txtInterSemiBold1358Bluegray90001"
                                        >
                                          Reviews
                                        </Text>
                                        <a
                                          href="javascript:"
                                          className="text-[9.51px] text-center text-gray-600_01 w-auto"
                                        >
                                          <Text size="txtInterMedium951">
                                            See All
                                          </Text>
                                        </a>
                                      </div>
                                      <div className="flex flex-col gap-[5.43px] items-start justify-start px-[16.3px] w-full">
                                        <div className="flex flex-row gap-[10.86px] items-center justify-start w-auto">
                                          <Img
                                            className="h-[38px] md:h-auto rounded-[50%] w-[38px]"
                                            src="images/img_frame1000000981.png"
                                            alt="frame1000000981"
                                          />
                                          <div className="flex flex-col gap-[5.43px] items-start justify-center w-auto">
                                            <Text
                                              className="text-[10.86px] text-blue_gray-800_01 w-auto"
                                              size="txtInterBold1086Bluegray80001"
                                            >
                                              Emily Anderson
                                            </Text>
                                            <div className="flex flex-row gap-[2.72px] items-center justify-start w-auto">
                                              <Text
                                                className="text-[8.15px] text-gray-600_01 w-auto"
                                                size="txtInterSemiBold815"
                                              >
                                                5.0
                                              </Text>
                                              <Img
                                                className="h-2 w-[51px]"
                                                src="images/img_television.svg"
                                                alt="television_Nine"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                        <Text
                                          className="leading-[150.00%] max-w-[232px] md:max-w-full text-[9.51px] text-gray-600_01"
                                          size="txtInterRegular951"
                                        >
                                          Dr. Patel is a true professional who
                                          genuinely cares about his patients. I
                                          highly recommend Dr. Patel to anyone
                                          seeking exceptional cardiac care.
                                        </Text>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="bg-white-A700_01 flex flex-col font-inter items-center justify-center p-[16.3px] shadow-bs6 w-[264px]">
                                    <Button
                                      className="cursor-pointer font-medium rounded-[16px] text-[10.86px] text-center w-full"
                                      color="blue_gray_900"
                                      size="sm"
                                    >
                                      Book Appointment
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <Img
                              className="h-[17px]"
                              src="images/img_group.svg"
                              alt="group"
                            />
                            <div
                              className="bg-cover bg-no-repeat flex flex-col h-[592px] items-center justify-end p-[3px]"
                              style={{
                                backgroundImage:
                                  "url('images/img_iphone14mockup.svg')",
                              }}
                            >
                              <div className="bg-white-A700_01 flex flex-col items-center justify-start mt-[11px] rounded-[36px] w-[90%] md:w-full">
                                <div className="flex flex-col gap-[5.43px] h-[573px] md:h-auto items-start justify-start rounded-[36px] w-[264px]">
                                  <div className="flex flex-row items-start justify-between p-[7px] w-full">
                                    <Text
                                      className="ml-2.5 mt-[5px] text-[9.51px] text-black-900 text-center tracking-[-0.19px]"
                                      size="txtPoppinsRegular951"
                                    >
                                      9:41
                                    </Text>
                                    <Img
                                      className="h-[7px] mr-0.5 mt-[7px] w-[45px]"
                                      src="images/img_settings.svg"
                                      alt="settings_Eight"
                                    />
                                  </div>
                                  <div className="bg-white-A700_01 flex flex-col font-inter gap-[10.86px] h-full items-start justify-start w-full">
                                    <div className="flex flex-row gap-[10.86px] items-center justify-between px-[16.3px] py-[6.79px] w-full">
                                      <Img
                                        className="h-4 w-4"
                                        src="images/img_arrowdown.svg"
                                        alt="arrowdown_Three"
                                      />
                                      <Text
                                        className="text-[13.58px] text-blue_gray-800_01 w-auto"
                                        size="txtInterSemiBold1358"
                                      >
                                        Book Appointment
                                      </Text>
                                    </div>
                                    <div className="flex flex-col gap-[10.86px] h-full items-start justify-between w-full">
                                      <div className="flex flex-col gap-[21.73px] items-start justify-start w-full">
                                        <div className="flex flex-col gap-[5.43px] items-start justify-start px-[16.3px] w-full">
                                          <Text
                                            className="text-[13.58px] text-blue_gray-900 w-auto"
                                            size="txtInterSemiBold1358Bluegray900"
                                          >
                                            Select Date
                                          </Text>
                                          <div className="bg-gray-50_01 flex flex-col gap-[5.43px] items-center justify-start p-[10.86px] rounded-lg shadow-bs5 w-full">
                                            <div className="flex flex-row gap-[16.3px] items-center justify-between py-[1.36px] w-full">
                                              <Text
                                                className="text-[9.51px] text-gray-900_02 w-auto"
                                                size="txtInterBold951Gray90002"
                                              >
                                                June 2023
                                              </Text>
                                              <Img
                                                className="h-[9px] w-[19px]"
                                                src="images/img_forward.svg"
                                                alt="forward"
                                              />
                                            </div>
                                            <List
                                              className="flex flex-col items-start w-full"
                                              orientation="vertical"
                                            >
                                              <div className="flex flex-1 flex-row items-start justify-between my-0 w-full">
                                                <div className="flex flex-1 flex-col items-center justify-start px-[2.72px] py-[5.43px] w-full">
                                                  <Text
                                                    className="text-[8.15px] text-blue_gray-700_01 text-center w-full"
                                                    size="txtInterSemiBold815Bluegray70001"
                                                  >
                                                    Sun
                                                  </Text>
                                                </div>
                                                <div className="flex flex-1 flex-col items-center justify-start px-[2.72px] py-[5.43px] w-full">
                                                  <Text
                                                    className="text-[8.15px] text-blue_gray-700_01 text-center w-full"
                                                    size="txtInterSemiBold815Bluegray70001"
                                                  >
                                                    Mon
                                                  </Text>
                                                </div>
                                                <div className="flex flex-1 flex-col items-center justify-start px-[2.72px] py-[5.43px] w-full">
                                                  <Text
                                                    className="text-[8.15px] text-blue_gray-700_01 text-center w-full"
                                                    size="txtInterSemiBold815Bluegray70001"
                                                  >
                                                    Tue
                                                  </Text>
                                                </div>
                                                <div className="flex flex-1 flex-col items-center justify-start px-[2.72px] py-[5.43px] w-full">
                                                  <Text
                                                    className="text-[8.15px] text-blue_gray-700_01 text-center w-full"
                                                    size="txtInterSemiBold815Bluegray70001"
                                                  >
                                                    Wed
                                                  </Text>
                                                </div>
                                                <div className="flex flex-1 flex-col items-center justify-start px-[2.72px] py-[5.43px] w-full">
                                                  <Text
                                                    className="text-[8.15px] text-blue_gray-700_01 text-center w-full"
                                                    size="txtInterSemiBold815Bluegray70001"
                                                  >
                                                    Thu
                                                  </Text>
                                                </div>
                                                <div className="flex flex-1 flex-col items-center justify-start px-[2.72px] py-[5.43px] w-full">
                                                  <Text
                                                    className="text-[8.15px] text-blue_gray-700_01 text-center"
                                                    size="txtInterSemiBold815Bluegray70001"
                                                  >
                                                    Fri
                                                  </Text>
                                                </div>
                                                <div className="flex flex-1 flex-col items-center justify-start px-[2.72px] py-[5.43px] w-full">
                                                  <Text
                                                    className="text-[8.15px] text-blue_gray-700_01 text-center w-full"
                                                    size="txtInterSemiBold815Bluegray70001"
                                                  >
                                                    Sat
                                                  </Text>
                                                </div>
                                              </div>
                                              <div className="flex flex-1 flex-row gap-[7px] items-center justify-between my-0 w-full">
                                                <div className="flex flex-1 flex-col items-center justify-start px-[2.72px] py-[5.43px] w-full">
                                                  <Text
                                                    className="text-[8.15px] text-blue_gray-100 text-center w-full"
                                                    size="txtInterBold815"
                                                  >
                                                    1
                                                  </Text>
                                                </div>
                                                <div className="flex flex-1 flex-col items-center justify-start px-[2.72px] py-[5.43px] w-full">
                                                  <Text
                                                    className="text-[8.15px] text-center text-gray-600_01 w-full"
                                                    size="txtInterBold815Gray60001"
                                                  >
                                                    2
                                                  </Text>
                                                </div>
                                                <div className="flex flex-1 flex-col items-center justify-start px-[2.72px] py-[5.43px] w-full">
                                                  <Text
                                                    className="text-[8.15px] text-center text-gray-600_01 w-full"
                                                    size="txtInterBold815Gray60001"
                                                  >
                                                    3
                                                  </Text>
                                                </div>
                                                <div className="flex flex-1 flex-col items-center justify-start px-[2.72px] py-[5.43px] w-full">
                                                  <Text
                                                    className="text-[8.15px] text-center text-gray-600_01 w-full"
                                                    size="txtInterBold815Gray60001"
                                                  >
                                                    4
                                                  </Text>
                                                </div>
                                                <div className="flex flex-1 flex-col items-center justify-start px-[2.72px] py-[5.43px] w-full">
                                                  <Text
                                                    className="text-[8.15px] text-center text-gray-600_01 w-full"
                                                    size="txtInterBold815Gray60001"
                                                  >
                                                    5
                                                  </Text>
                                                </div>
                                                <div className="flex flex-1 flex-col items-center justify-start px-[2.72px] py-[5.43px] w-full">
                                                  <Text
                                                    className="text-[8.15px] text-center text-gray-600_01 w-full"
                                                    size="txtInterBold815Gray60001"
                                                  >
                                                    6
                                                  </Text>
                                                </div>
                                                <div className="flex flex-1 flex-col items-center justify-start px-[2.72px] py-[5.43px] w-full">
                                                  <Text
                                                    className="text-[8.15px] text-blue_gray-100 text-center w-full"
                                                    size="txtInterBold815"
                                                  >
                                                    7
                                                  </Text>
                                                </div>
                                              </div>
                                              <div className="flex flex-1 flex-row gap-[7px] items-center justify-between my-0 w-full">
                                                <div className="flex flex-1 flex-col items-center justify-start px-[2.72px] py-[5.43px] w-full">
                                                  <Text
                                                    className="text-[8.15px] text-blue_gray-100 text-center w-auto"
                                                    size="txtInterBold815"
                                                  >
                                                    8
                                                  </Text>
                                                </div>
                                                <div className="flex flex-1 flex-col items-center justify-start px-[2.72px] py-[5.43px] w-full">
                                                  <Text
                                                    className="text-[8.15px] text-center text-gray-600_01 w-auto"
                                                    size="txtInterBold815Gray60001"
                                                  >
                                                    9
                                                  </Text>
                                                </div>
                                                <div className="flex flex-1 flex-col items-center justify-start px-[2.72px] py-[5.43px] w-full">
                                                  <Text
                                                    className="text-[8.15px] text-center text-gray-600_01"
                                                    size="txtInterBold815Gray60001"
                                                  >
                                                    10
                                                  </Text>
                                                </div>
                                                <div className="flex flex-1 flex-col items-center justify-start px-[2.72px] py-[5.43px] w-full">
                                                  <Text
                                                    className="text-[8.15px] text-center text-gray-600_01 w-auto"
                                                    size="txtInterBold815Gray60001"
                                                  >
                                                    11
                                                  </Text>
                                                </div>
                                                <div className="flex flex-1 flex-col items-center justify-start px-[2.72px] py-[5.43px] w-full">
                                                  <Text
                                                    className="text-[8.15px] text-center text-gray-600_01"
                                                    size="txtInterBold815Gray60001"
                                                  >
                                                    12
                                                  </Text>
                                                </div>
                                                <div className="flex flex-1 flex-col items-center justify-start px-[2.72px] py-[5.43px] w-full">
                                                  <Text
                                                    className="text-[8.15px] text-center text-gray-600_01"
                                                    size="txtInterBold815Gray60001"
                                                  >
                                                    13
                                                  </Text>
                                                </div>
                                                <div className="flex flex-1 flex-col items-center justify-start px-[2.72px] py-[5.43px] w-full">
                                                  <Text
                                                    className="text-[8.15px] text-blue_gray-100 text-center"
                                                    size="txtInterBold815"
                                                  >
                                                    14
                                                  </Text>
                                                </div>
                                              </div>
                                              <div className="flex flex-1 flex-row gap-[7px] items-center justify-between my-0 w-full">
                                                <div className="flex flex-1 flex-col items-center justify-start px-[2.72px] py-[5.43px] w-full">
                                                  <Text
                                                    className="text-[8.15px] text-blue_gray-100 text-center"
                                                    size="txtInterBold815"
                                                  >
                                                    15
                                                  </Text>
                                                </div>
                                                <div className="flex flex-1 flex-col items-center justify-start px-[2.72px] py-[5.43px] w-full">
                                                  <Text
                                                    className="text-[8.15px] text-center text-gray-600_01"
                                                    size="txtInterBold815Gray60001"
                                                  >
                                                    16
                                                  </Text>
                                                </div>
                                                <div className="flex flex-1 flex-col items-center justify-start px-[2.72px] py-[5.43px] w-full">
                                                  <Text
                                                    className="text-[8.15px] text-center text-gray-600_01"
                                                    size="txtInterBold815Gray60001"
                                                  >
                                                    17
                                                  </Text>
                                                </div>
                                                <div className="flex flex-1 flex-col items-center justify-start px-[2.72px] py-[5.43px] w-full">
                                                  <Text
                                                    className="text-[8.15px] text-center text-gray-600_01"
                                                    size="txtInterBold815Gray60001"
                                                  >
                                                    18
                                                  </Text>
                                                </div>
                                                <div className="flex flex-1 flex-col items-center justify-start px-[2.72px] py-[5.43px] w-full">
                                                  <Text
                                                    className="text-[8.15px] text-center text-gray-600_01"
                                                    size="txtInterBold815Gray60001"
                                                  >
                                                    19
                                                  </Text>
                                                </div>
                                                <div className="flex flex-1 flex-col items-center justify-start px-[2.72px] py-[5.43px] w-full">
                                                  <Text
                                                    className="text-[8.15px] text-center text-gray-600_01"
                                                    size="txtInterBold815Gray60001"
                                                  >
                                                    20
                                                  </Text>
                                                </div>
                                                <div className="flex flex-1 flex-col items-center justify-start px-[2.72px] py-[5.43px] w-full">
                                                  <Text
                                                    className="text-[8.15px] text-blue_gray-100 text-center"
                                                    size="txtInterBold815"
                                                  >
                                                    21
                                                  </Text>
                                                </div>
                                              </div>
                                              <div className="flex flex-1 flex-row gap-[7px] items-center justify-between my-0 w-full">
                                                <div className="flex flex-1 flex-col items-center justify-start px-[2.72px] py-[5.43px] w-full">
                                                  <Text
                                                    className="text-[8.15px] text-blue_gray-100 text-center"
                                                    size="txtInterBold815"
                                                  >
                                                    22
                                                  </Text>
                                                </div>
                                                <div className="flex flex-1 flex-col items-center justify-start px-[2.72px] py-[5.43px] w-full">
                                                  <Text
                                                    className="text-[8.15px] text-center text-gray-600_01"
                                                    size="txtInterBold815Gray60001"
                                                  >
                                                    23
                                                  </Text>
                                                </div>
                                                <div className="flex flex-1 flex-col items-center justify-start px-[2.72px] py-[5.43px] w-full">
                                                  <Text
                                                    className="text-[8.15px] text-center text-gray-600_01"
                                                    size="txtInterBold815Gray60001"
                                                  >
                                                    24
                                                  </Text>
                                                </div>
                                                <Button
                                                  className="cursor-pointer flex-1 font-bold rounded-[5px] text-[8.15px] text-center w-full"
                                                  shape="round"
                                                  color="blue_gray_900"
                                                >
                                                  30
                                                </Button>
                                                <div className="flex flex-1 flex-col items-center justify-start px-[2.72px] py-[5.43px] w-full">
                                                  <Text
                                                    className="text-[8.15px] text-center text-gray-600_01"
                                                    size="txtInterBold815Gray60001"
                                                  >
                                                    26
                                                  </Text>
                                                </div>
                                                <div className="flex flex-1 flex-col items-center justify-start px-[2.72px] py-[5.43px] w-full">
                                                  <Text
                                                    className="text-[8.15px] text-center text-gray-600_01"
                                                    size="txtInterBold815Gray60001"
                                                  >
                                                    27
                                                  </Text>
                                                </div>
                                                <div className="flex flex-1 flex-col items-center justify-start px-[2.72px] py-[5.43px] w-full">
                                                  <Text
                                                    className="text-[8.15px] text-blue_gray-100 text-center"
                                                    size="txtInterBold815"
                                                  >
                                                    28
                                                  </Text>
                                                </div>
                                              </div>
                                              <div className="flex flex-1 flex-row gap-[7px] items-center justify-between my-0 w-full">
                                                <div className="flex flex-1 flex-col items-center justify-start px-[2.72px] py-[5.43px] w-full">
                                                  <Text
                                                    className="text-[8.15px] text-blue_gray-100 text-center"
                                                    size="txtInterBold815"
                                                  >
                                                    29
                                                  </Text>
                                                </div>
                                                <div className="flex flex-1 flex-col items-center justify-start px-[2.72px] py-[5.43px] w-full">
                                                  <Text
                                                    className="text-[8.15px] text-center text-gray-600_01"
                                                    size="txtInterBold815Gray60001"
                                                  >
                                                    30
                                                  </Text>
                                                </div>
                                                <div className="flex flex-1 flex-col items-center justify-start px-[2.72px] py-[5.43px] w-full">
                                                  <Text
                                                    className="text-[8.15px] text-center text-gray-600_01 w-auto"
                                                    size="txtInterBold815Gray60001"
                                                  >
                                                    1
                                                  </Text>
                                                </div>
                                                <div className="flex flex-1 flex-col items-center justify-start px-[2.72px] py-[5.43px] w-full">
                                                  <Text
                                                    className="text-[8.15px] text-center text-gray-600_01 w-auto"
                                                    size="txtInterBold815Gray60001"
                                                  >
                                                    2
                                                  </Text>
                                                </div>
                                                <div className="flex flex-1 flex-col items-center justify-start px-[2.72px] py-[5.43px] w-full">
                                                  <Text
                                                    className="text-[8.15px] text-center text-gray-600_01 w-auto"
                                                    size="txtInterBold815Gray60001"
                                                  >
                                                    3
                                                  </Text>
                                                </div>
                                                <div className="flex flex-1 flex-col items-center justify-start px-[2.72px] py-[5.43px] w-full">
                                                  <Text
                                                    className="text-[8.15px] text-center text-gray-600_01 w-auto"
                                                    size="txtInterBold815Gray60001"
                                                  >
                                                    4
                                                  </Text>
                                                </div>
                                                <div className="flex flex-1 flex-col items-center justify-start px-[2.72px] py-[5.43px] w-full">
                                                  <Text
                                                    className="text-[8.15px] text-blue_gray-100 text-center w-auto"
                                                    size="txtInterBold815"
                                                  >
                                                    5
                                                  </Text>
                                                </div>
                                              </div>
                                            </List>
                                          </div>
                                        </div>
                                        <div className="flex flex-col gap-[10.86px] items-start justify-start px-[16.3px] w-full">
                                          <Text
                                            className="text-[13.58px] text-blue_gray-900 w-auto"
                                            size="txtInterSemiBold1358Bluegray900"
                                          >
                                            Select Hour
                                          </Text>
                                          <List
                                            className="flex flex-col gap-[10.86px] items-start w-full"
                                            orientation="vertical"
                                          >
                                            <div className="flex flex-1 flex-row gap-[8.15px] items-start justify-between my-0 w-full">
                                              <Button
                                                className="cursor-pointer flex-1 font-semibold rounded-[5px] text-[9.51px] text-center w-full"
                                                shape="round"
                                                color="gray_50_01"
                                              >
                                                09.00 AM
                                              </Button>
                                              <Button
                                                className="cursor-pointer flex-1 font-semibold rounded-[5px] text-[9.51px] text-center w-full"
                                                shape="round"
                                                color="gray_50_01"
                                              >
                                                09.30 AM
                                              </Button>
                                              <Button
                                                className="cursor-pointer flex-1 font-semibold rounded-[5px] text-[9.51px] text-center w-full"
                                                shape="round"
                                                color="blue_gray_900"
                                              >
                                                10.00 AM
                                              </Button>
                                            </div>
                                            <div className="flex flex-1 flex-row gap-[8.15px] items-start justify-between my-0 w-full">
                                              <Button
                                                className="cursor-pointer flex-1 font-semibold rounded-[5px] text-[9.51px] text-center w-full"
                                                shape="round"
                                                color="gray_50_01"
                                              >
                                                10.30 AM
                                              </Button>
                                              <Button
                                                className="cursor-pointer flex-1 font-semibold rounded-[5px] text-[9.51px] text-center w-full"
                                                shape="round"
                                                color="gray_50_01"
                                              >
                                                11.00 AM
                                              </Button>
                                              <Button
                                                className="cursor-pointer flex-1 font-semibold rounded-[5px] text-[9.51px] text-center w-full"
                                                shape="round"
                                                color="gray_50_01"
                                              >
                                                11.30 AM
                                              </Button>
                                            </div>
                                            <div className="flex flex-1 flex-row gap-[8.15px] items-start justify-between my-0 w-full">
                                              <Button
                                                className="cursor-pointer flex-1 font-semibold rounded-[5px] text-[9.51px] text-center w-full"
                                                shape="round"
                                                color="gray_50_01"
                                              >
                                                3.00 PM
                                              </Button>
                                              <Button
                                                className="cursor-pointer flex-1 font-semibold rounded-[5px] text-[9.51px] text-center w-full"
                                                shape="round"
                                                color="gray_50_01"
                                              >
                                                3.30 PM
                                              </Button>
                                              <Button
                                                className="cursor-pointer flex-1 font-semibold rounded-[5px] text-[9.51px] text-center w-full"
                                                shape="round"
                                                color="gray_50_01"
                                              >
                                                4.00 PM
                                              </Button>
                                            </div>
                                            <div className="flex flex-1 flex-row gap-[8.15px] items-start justify-between my-0 w-full">
                                              <Button
                                                className="cursor-pointer flex-1 font-semibold rounded-[5px] text-[9.51px] text-center w-full"
                                                shape="round"
                                                color="gray_50_01"
                                              >
                                                4.30 PM
                                              </Button>
                                              <Button
                                                className="cursor-pointer flex-1 font-semibold rounded-[5px] text-[9.51px] text-center w-full"
                                                shape="round"
                                                color="gray_50_01"
                                              >
                                                5.00 PM
                                              </Button>
                                              <Button
                                                className="cursor-pointer flex-1 font-semibold rounded-[5px] text-[9.51px] text-center w-full"
                                                shape="round"
                                                color="gray_50_01"
                                              >
                                                5.30 PM
                                              </Button>
                                            </div>
                                          </List>
                                        </div>
                                      </div>
                                      <div className="bg-white-A700_01 flex flex-col items-center justify-center p-[16.3px] shadow-bs6 w-[264px]">
                                        <Button
                                          className="cursor-pointer font-medium rounded-[16px] text-[10.86px] text-center w-full"
                                          color="blue_gray_900"
                                          size="sm"
                                        >
                                          Confirm
                                        </Button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <Img
                              className="h-[17px]"
                              src="images/img_group.svg"
                              alt="group_One"
                            />
                            <div
                              className="bg-cover bg-no-repeat md:h-[534px] h-[592px] p-[3px] relative w-[27%] md:w-full"
                              style={{
                                backgroundImage:
                                  "url('images/img_iphone14mockup.svg')",
                              }}
                            >
                              <div className="absolute bg-white-A700_01 flex flex-col h-max inset-[0] items-center justify-center m-auto rounded-[36px] w-[88%]">
                                <div className="flex flex-col gap-[5.43px] h-[573px] md:h-auto items-start justify-start rounded-[36px] w-[264px]">
                                  <div className="flex flex-row items-start justify-between p-[7px] w-full">
                                    <Text
                                      className="ml-2.5 mt-[5px] text-[9.51px] text-black-900 text-center tracking-[-0.19px]"
                                      size="txtPoppinsRegular951"
                                    >
                                      9:41
                                    </Text>
                                    <Img
                                      className="h-[7px] mr-0.5 mt-[7px] w-[45px]"
                                      src="images/img_settings.svg"
                                      alt="settings_Nine"
                                    />
                                  </div>
                                  <div className="bg-white-A700_01 flex flex-col font-inter gap-[10.86px] h-full items-start justify-start w-full">
                                    <div className="flex flex-row gap-[10.86px] items-center justify-between px-[16.3px] py-[6.79px] w-full">
                                      <Img
                                        className="h-4 w-4"
                                        src="images/img_arrowdown.svg"
                                        alt="arrowdown_Four"
                                      />
                                      <Text
                                        className="text-[13.58px] text-blue_gray-800_01 w-auto"
                                        size="txtInterSemiBold1358"
                                      >
                                        Book Appointment
                                      </Text>
                                    </div>
                                    <div className="flex flex-col gap-[21.73px] items-start justify-start w-full">
                                      <div className="flex flex-col gap-[5.43px] items-start justify-start px-[16.3px] w-full">
                                        <Text
                                          className="text-[13.58px] text-blue_gray-900 w-auto"
                                          size="txtInterSemiBold1358Bluegray900"
                                        >
                                          Select Date
                                        </Text>
                                        <div className="bg-gray-50_01 flex flex-col gap-[5.43px] items-center justify-start p-[10.86px] rounded-lg shadow-bs5 w-full">
                                          <div className="flex flex-row gap-[16.3px] items-center justify-between py-[1.36px] w-full">
                                            <Text
                                              className="text-[9.51px] text-gray-900_02 w-auto"
                                              size="txtInterBold951Gray90002"
                                            >
                                              June 2023
                                            </Text>
                                            <Img
                                              className="h-[9px] w-[19px]"
                                              src="images/img_forward.svg"
                                              alt="forward_One"
                                            />
                                          </div>
                                          <List
                                            className="flex flex-col items-start w-full"
                                            orientation="vertical"
                                          >
                                            <div className="flex flex-1 flex-row items-start justify-between my-0 w-full">
                                              <div className="flex flex-1 flex-col items-center justify-start px-[2.72px] py-[5.43px] w-full">
                                                <Text
                                                  className="text-[8.15px] text-blue_gray-700_01 text-center w-full"
                                                  size="txtInterSemiBold815Bluegray70001"
                                                >
                                                  Sun
                                                </Text>
                                              </div>
                                              <div className="flex flex-1 flex-col items-center justify-start px-[2.72px] py-[5.43px] w-full">
                                                <Text
                                                  className="text-[8.15px] text-blue_gray-700_01 text-center w-full"
                                                  size="txtInterSemiBold815Bluegray70001"
                                                >
                                                  Mon
                                                </Text>
                                              </div>
                                              <div className="flex flex-1 flex-col items-center justify-start px-[2.72px] py-[5.43px] w-full">
                                                <Text
                                                  className="text-[8.15px] text-blue_gray-700_01 text-center w-full"
                                                  size="txtInterSemiBold815Bluegray70001"
                                                >
                                                  Tue
                                                </Text>
                                              </div>
                                              <div className="flex flex-1 flex-col items-center justify-start px-[2.72px] py-[5.43px] w-full">
                                                <Text
                                                  className="text-[8.15px] text-blue_gray-700_01 text-center w-full"
                                                  size="txtInterSemiBold815Bluegray70001"
                                                >
                                                  Wed
                                                </Text>
                                              </div>
                                              <div className="flex flex-1 flex-col items-center justify-start px-[2.72px] py-[5.43px] w-full">
                                                <Text
                                                  className="text-[8.15px] text-blue_gray-700_01 text-center w-full"
                                                  size="txtInterSemiBold815Bluegray70001"
                                                >
                                                  Thu
                                                </Text>
                                              </div>
                                              <div className="flex flex-1 flex-col items-center justify-start px-[2.72px] py-[5.43px] w-full">
                                                <Text
                                                  className="text-[8.15px] text-blue_gray-700_01 text-center"
                                                  size="txtInterSemiBold815Bluegray70001"
                                                >
                                                  Fri
                                                </Text>
                                              </div>
                                              <div className="flex flex-1 flex-col items-center justify-start px-[2.72px] py-[5.43px] w-full">
                                                <Text
                                                  className="text-[8.15px] text-blue_gray-700_01 text-center w-full"
                                                  size="txtInterSemiBold815Bluegray70001"
                                                >
                                                  Sat
                                                </Text>
                                              </div>
                                            </div>
                                            <div className="flex flex-1 flex-row items-center justify-between my-0 w-full">
                                              <div className="flex flex-1 flex-col items-center justify-start px-[2.72px] py-[5.43px] w-full">
                                                <Text
                                                  className="text-[8.15px] text-center text-gray-600_01 w-full"
                                                  size="txtInterBold815Gray60001"
                                                >
                                                  1
                                                </Text>
                                              </div>
                                              <div className="flex flex-1 flex-col items-center justify-start px-[2.72px] py-[5.43px] w-full">
                                                <Text
                                                  className="text-[8.15px] text-center text-gray-600_01 w-full"
                                                  size="txtInterBold815Gray60001"
                                                >
                                                  2
                                                </Text>
                                              </div>
                                              <div className="flex flex-1 flex-col items-center justify-start px-[2.72px] py-[5.43px] w-full">
                                                <Text
                                                  className="text-[8.15px] text-center text-gray-600_01 w-full"
                                                  size="txtInterBold815Gray60001"
                                                >
                                                  3
                                                </Text>
                                              </div>
                                              <div className="flex flex-1 flex-col items-center justify-start px-[2.72px] py-[5.43px] w-full">
                                                <Text
                                                  className="text-[8.15px] text-center text-gray-600_01 w-full"
                                                  size="txtInterBold815Gray60001"
                                                >
                                                  4
                                                </Text>
                                              </div>
                                              <div className="flex flex-1 flex-col items-center justify-start px-[2.72px] py-[5.43px] w-full">
                                                <Text
                                                  className="text-[8.15px] text-center text-gray-600_01 w-full"
                                                  size="txtInterBold815Gray60001"
                                                >
                                                  5
                                                </Text>
                                              </div>
                                              <div className="flex flex-1 flex-col items-center justify-start px-[2.72px] py-[5.43px] w-full">
                                                <Text
                                                  className="text-[8.15px] text-center text-gray-600_01 w-full"
                                                  size="txtInterBold815Gray60001"
                                                >
                                                  6
                                                </Text>
                                              </div>
                                              <div className="flex flex-1 flex-col items-center justify-start px-[2.72px] py-[5.43px] w-full">
                                                <Text
                                                  className="text-[8.15px] text-center text-gray-600_01 w-full"
                                                  size="txtInterBold815Gray60001"
                                                >
                                                  7
                                                </Text>
                                              </div>
                                            </div>
                                            <div className="flex flex-1 flex-row items-center justify-between my-0 w-full">
                                              <div className="flex flex-1 flex-col items-center justify-start px-[2.72px] py-[5.43px] w-full">
                                                <Text
                                                  className="text-[8.15px] text-center text-gray-600_01 w-auto"
                                                  size="txtInterBold815Gray60001"
                                                >
                                                  8
                                                </Text>
                                              </div>
                                              <div className="flex flex-1 flex-col items-center justify-start px-[2.72px] py-[5.43px] w-full">
                                                <Text
                                                  className="text-[8.15px] text-center text-gray-600_01 w-auto"
                                                  size="txtInterBold815Gray60001"
                                                >
                                                  9
                                                </Text>
                                              </div>
                                              <div className="flex flex-1 flex-col items-center justify-start px-[2.72px] py-[5.43px] w-full">
                                                <Text
                                                  className="text-[8.15px] text-center text-gray-600_01"
                                                  size="txtInterBold815Gray60001"
                                                >
                                                  10
                                                </Text>
                                              </div>
                                              <div className="flex flex-1 flex-col items-center justify-start px-[2.72px] py-[5.43px] w-full">
                                                <Text
                                                  className="text-[8.15px] text-center text-gray-600_01 w-auto"
                                                  size="txtInterBold815Gray60001"
                                                >
                                                  11
                                                </Text>
                                              </div>
                                              <div className="flex flex-1 flex-col items-center justify-start px-[2.72px] py-[5.43px] w-full">
                                                <Text
                                                  className="text-[8.15px] text-center text-gray-600_01"
                                                  size="txtInterBold815Gray60001"
                                                >
                                                  12
                                                </Text>
                                              </div>
                                              <div className="flex flex-1 flex-col items-center justify-start px-[2.72px] py-[5.43px] w-full">
                                                <Text
                                                  className="text-[8.15px] text-center text-gray-600_01"
                                                  size="txtInterBold815Gray60001"
                                                >
                                                  13
                                                </Text>
                                              </div>
                                              <div className="flex flex-1 flex-col items-center justify-start px-[2.72px] py-[5.43px] w-full">
                                                <Text
                                                  className="text-[8.15px] text-center text-gray-600_01"
                                                  size="txtInterBold815Gray60001"
                                                >
                                                  14
                                                </Text>
                                              </div>
                                            </div>
                                            <div className="flex flex-1 flex-row items-center justify-between my-0 w-full">
                                              <div className="flex flex-1 flex-col items-center justify-start px-[2.72px] py-[5.43px] w-full">
                                                <Text
                                                  className="text-[8.15px] text-center text-gray-600_01"
                                                  size="txtInterBold815Gray60001"
                                                >
                                                  15
                                                </Text>
                                              </div>
                                              <div className="flex flex-1 flex-col items-center justify-start px-[2.72px] py-[5.43px] w-full">
                                                <Text
                                                  className="text-[8.15px] text-center text-gray-600_01"
                                                  size="txtInterBold815Gray60001"
                                                >
                                                  16
                                                </Text>
                                              </div>
                                              <div className="flex flex-1 flex-col items-center justify-start px-[2.72px] py-[5.43px] w-full">
                                                <Text
                                                  className="text-[8.15px] text-center text-gray-600_01"
                                                  size="txtInterBold815Gray60001"
                                                >
                                                  17
                                                </Text>
                                              </div>
                                              <div className="flex flex-1 flex-col items-center justify-start px-[2.72px] py-[5.43px] w-full">
                                                <Text
                                                  className="text-[8.15px] text-center text-gray-600_01"
                                                  size="txtInterBold815Gray60001"
                                                >
                                                  18
                                                </Text>
                                              </div>
                                              <div className="flex flex-1 flex-col items-center justify-start px-[2.72px] py-[5.43px] w-full">
                                                <Text
                                                  className="text-[8.15px] text-center text-gray-600_01"
                                                  size="txtInterBold815Gray60001"
                                                >
                                                  19
                                                </Text>
                                              </div>
                                              <div className="flex flex-1 flex-col items-center justify-start px-[2.72px] py-[5.43px] w-full">
                                                <Text
                                                  className="text-[8.15px] text-center text-gray-600_01"
                                                  size="txtInterBold815Gray60001"
                                                >
                                                  20
                                                </Text>
                                              </div>
                                              <div className="flex flex-1 flex-col items-center justify-start px-[2.72px] py-[5.43px] w-full">
                                                <Text
                                                  className="text-[8.15px] text-center text-gray-600_01"
                                                  size="txtInterBold815Gray60001"
                                                >
                                                  21
                                                </Text>
                                              </div>
                                            </div>
                                            <div className="flex flex-1 flex-row items-center justify-between my-0 w-full">
                                              <div className="flex flex-1 flex-col items-center justify-start px-[2.72px] py-[5.43px] w-full">
                                                <Text
                                                  className="text-[8.15px] text-center text-gray-600_01"
                                                  size="txtInterBold815Gray60001"
                                                >
                                                  22
                                                </Text>
                                              </div>
                                              <div className="flex flex-1 flex-col items-center justify-start px-[2.72px] py-[5.43px] w-full">
                                                <Text
                                                  className="text-[8.15px] text-center text-gray-600_01"
                                                  size="txtInterBold815Gray60001"
                                                >
                                                  23
                                                </Text>
                                              </div>
                                              <div className="flex flex-1 flex-col items-center justify-start px-[2.72px] py-[5.43px] w-full">
                                                <Text
                                                  className="text-[8.15px] text-center text-gray-600_01"
                                                  size="txtInterBold815Gray60001"
                                                >
                                                  24
                                                </Text>
                                              </div>
                                              <div className="bg-blue_gray-900 flex flex-1 flex-col items-center justify-start px-[1.36px] py-[4.07px] rounded-[5px] w-full">
                                                <Text
                                                  className="text-[8.15px] text-center text-white-A700_01"
                                                  size="txtInterBold815WhiteA70001"
                                                >
                                                  30
                                                </Text>
                                              </div>
                                              <div className="flex flex-1 flex-col items-center justify-start px-[2.72px] py-[5.43px] w-full">
                                                <Text
                                                  className="text-[8.15px] text-center text-gray-600_01"
                                                  size="txtInterBold815Gray60001"
                                                >
                                                  26
                                                </Text>
                                              </div>
                                              <div className="flex flex-1 flex-col items-center justify-start px-[2.72px] py-[5.43px] w-full">
                                                <Text
                                                  className="text-[8.15px] text-center text-gray-600_01"
                                                  size="txtInterBold815Gray60001"
                                                >
                                                  27
                                                </Text>
                                              </div>
                                              <div className="flex flex-1 flex-col items-center justify-start px-[2.72px] py-[5.43px] w-full">
                                                <Text
                                                  className="text-[8.15px] text-center text-gray-600_01"
                                                  size="txtInterBold815Gray60001"
                                                >
                                                  28
                                                </Text>
                                              </div>
                                            </div>
                                            <div className="flex flex-1 flex-row items-center justify-between my-0 w-full">
                                              <div className="flex flex-1 flex-col items-center justify-start px-[2.72px] py-[5.43px] w-full">
                                                <Text
                                                  className="text-[8.15px] text-center text-gray-600_01"
                                                  size="txtInterBold815Gray60001"
                                                >
                                                  29
                                                </Text>
                                              </div>
                                              <div className="flex flex-1 flex-col items-center justify-start px-[2.72px] py-[5.43px] w-full">
                                                <Text
                                                  className="text-[8.15px] text-center text-gray-600_01"
                                                  size="txtInterBold815Gray60001"
                                                >
                                                  30
                                                </Text>
                                              </div>
                                              <div className="flex flex-1 flex-col items-center justify-start px-[2.72px] py-[5.43px] w-full">
                                                <Text
                                                  className="text-[8.15px] text-center text-gray-600_01 w-auto"
                                                  size="txtInterBold815Gray60001"
                                                >
                                                  1
                                                </Text>
                                              </div>
                                              <div className="flex flex-1 flex-col items-center justify-start px-[2.72px] py-[5.43px] w-full">
                                                <Text
                                                  className="text-[8.15px] text-center text-gray-600_01 w-auto"
                                                  size="txtInterBold815Gray60001"
                                                >
                                                  2
                                                </Text>
                                              </div>
                                              <div className="flex flex-1 flex-col items-center justify-start px-[2.72px] py-[5.43px] w-full">
                                                <Text
                                                  className="text-[8.15px] text-center text-gray-600_01 w-auto"
                                                  size="txtInterBold815Gray60001"
                                                >
                                                  3
                                                </Text>
                                              </div>
                                              <div className="flex flex-1 flex-col items-center justify-start px-[2.72px] py-[5.43px] w-full">
                                                <Text
                                                  className="text-[8.15px] text-center text-gray-600_01 w-auto"
                                                  size="txtInterBold815Gray60001"
                                                >
                                                  4
                                                </Text>
                                              </div>
                                              <div className="flex flex-1 flex-col items-center justify-start px-[2.72px] py-[5.43px] w-full">
                                                <Text
                                                  className="text-[8.15px] text-center text-gray-600_01 w-auto"
                                                  size="txtInterBold815Gray60001"
                                                >
                                                  5
                                                </Text>
                                              </div>
                                            </div>
                                          </List>
                                        </div>
                                      </div>
                                      <div className="flex flex-col gap-[10.86px] items-start justify-start px-[16.3px] w-full">
                                        <Text
                                          className="text-[13.58px] text-blue_gray-900 w-auto"
                                          size="txtInterSemiBold1358Bluegray900"
                                        >
                                          Select Hour
                                        </Text>
                                        <div className="flex flex-col gap-[10.86px] items-start justify-start w-full">
                                          <div className="flex flex-row gap-[8.15px] items-start justify-between w-full">
                                            <Button
                                              className="cursor-pointer flex-1 font-semibold rounded-[5px] text-[9.51px] text-center w-full"
                                              shape="round"
                                              color="gray_50_01"
                                            >
                                              09.00 AM
                                            </Button>
                                            <div className="bg-gray-50_01 flex flex-1 flex-col items-center justify-center px-[9.51px] py-[6.79px] rounded-[5px] w-full">
                                              <Text
                                                className="text-[9.51px] text-gray-600_01 w-auto"
                                                size="txtInterSemiBold951Gray60001"
                                              >
                                                09.30 AM
                                              </Text>
                                            </div>
                                            <Button
                                              className="cursor-pointer flex-1 font-semibold rounded-[5px] text-[9.51px] text-center w-full"
                                              shape="round"
                                              color="blue_gray_900"
                                            >
                                              10.00 AM
                                            </Button>
                                          </div>
                                          <List
                                            className="sm:flex-col flex-row md:gap-[8.15px] grid grid-cols-3 justify-between w-full"
                                            orientation="horizontal"
                                          >
                                            <div className="bg-gray-50_01 flex flex-1 flex-col items-center justify-center px-[9.51px] py-[6.79px] rounded-[5px] w-full">
                                              <Text
                                                className="text-[9.51px] text-gray-600_01 w-auto"
                                                size="txtInterSemiBold951Gray60001"
                                              >
                                                10.30 AM
                                              </Text>
                                            </div>
                                            <div className="bg-gray-50_01 flex flex-1 flex-col items-center justify-center px-[9.51px] py-[6.79px] rounded-[5px] w-full">
                                              <Text
                                                className="text-[9.51px] text-gray-600_01 w-auto"
                                                size="txtInterSemiBold951Gray60001"
                                              >
                                                11.00 AM
                                              </Text>
                                            </div>
                                            <div className="bg-gray-50_01 flex flex-1 flex-col items-center justify-center px-[9.51px] py-[6.79px] rounded-[5px] w-full">
                                              <Text
                                                className="text-[9.51px] text-gray-600_01 w-auto"
                                                size="txtInterSemiBold951Gray60001"
                                              >
                                                11.30 AM
                                              </Text>
                                            </div>
                                          </List>
                                          <List
                                            className="flex flex-col gap-2.5 items-center w-full"
                                            orientation="vertical"
                                          >
                                            <div className="flex flex-1 flex-row gap-[8.15px] items-start justify-between w-full">
                                              <Button
                                                className="cursor-pointer flex-1 font-semibold rounded-[5px] text-[9.51px] text-center w-full"
                                                shape="round"
                                                color="gray_50_01"
                                              >
                                                15.00 PM
                                              </Button>
                                              <Button
                                                className="cursor-pointer flex-1 font-semibold rounded-[5px] text-[9.51px] text-center w-full"
                                                shape="round"
                                                color="gray_50_01"
                                              >
                                                15.30 pM
                                              </Button>
                                              <Button
                                                className="cursor-pointer flex-1 font-semibold rounded-[5px] text-[9.51px] text-center w-full"
                                                shape="round"
                                                color="gray_50_01"
                                              >
                                                16.00 PM
                                              </Button>
                                            </div>
                                            <div className="flex flex-1 flex-row gap-[8.15px] items-start justify-between w-full">
                                              <Button
                                                className="cursor-pointer flex-1 font-semibold rounded-[5px] text-[9.51px] text-center w-full"
                                                shape="round"
                                                color="gray_50_01"
                                              >
                                                16.30 PM
                                              </Button>
                                              <Button
                                                className="cursor-pointer flex-1 font-semibold rounded-[5px] text-[9.51px] text-center w-full"
                                                shape="round"
                                                color="gray_50_01"
                                              >
                                                17.00 PM
                                              </Button>
                                              <Button
                                                className="cursor-pointer flex-1 font-semibold rounded-[5px] text-[9.51px] text-center w-full"
                                                shape="round"
                                                color="gray_50_01"
                                              >
                                                17.30 PM
                                              </Button>
                                            </div>
                                          </List>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="bg-white-A700_01 flex flex-col font-inter items-center justify-center p-[16.3px] shadow-bs6 w-[264px]">
                                    <Button
                                      className="cursor-pointer font-medium rounded-[16px] text-[10.86px] text-center w-full"
                                      color="blue_gray_900"
                                      size="sm"
                                    >
                                      Confirm
                                    </Button>
                                  </div>
                                </div>
                              </div>
                              <div className="absolute bg-black-900_4c flex flex-col font-inter h-max inset-[0] items-center justify-center m-auto p-4 w-[88%]">
                                <div className="bg-white-A700_01 flex flex-col gap-[21.73px] items-center justify-start mb-[141px] mt-[98px] sm:px-5 px-[32.59px] py-[21.73px] rounded-[32px] w-[231px]">
                                  <div className="bg-blue_gray-200 flex flex-col h-[88px] md:h-auto items-center justify-center p-[6.79px] rounded-[50%] w-[88px]">
                                    <Img
                                      className="h-12 w-12"
                                      src="images/img_checkmark_white_a700_01.svg"
                                      alt="checkmark"
                                    />
                                  </div>
                                  <div className="flex flex-col gap-[22px] items-center justify-start w-full">
                                    <div className="flex flex-col gap-[5.43px] items-center justify-start w-auto">
                                      <Text
                                        className="text-[13.58px] text-blue_gray-900 w-auto"
                                        size="txtInterSemiBold1358Bluegray900"
                                      >
                                        Congratulations!
                                      </Text>
                                      <Text
                                        className="leading-[150.00%] max-w-[171px] md:max-w-full text-[9.51px] text-center text-gray-600_01"
                                        size="txtInterRegular951"
                                      >
                                        Your appointment with Dr. David Patel is
                                        confirmed for June 30, 2023, at 10:00
                                        AM.
                                      </Text>
                                    </div>
                                    <div className="flex flex-col gap-[10.86px] items-center justify-start w-full">
                                      <Button
                                        className="cursor-pointer font-medium h-8 rounded-[16px] text-[10.86px] text-center w-full"
                                        color="blue_gray_900"
                                        size="sm"
                                      >
                                        Done
                                      </Button>
                                      <Text
                                        className="text-[9.51px] text-gray-600_01 w-auto"
                                        size="txtInterRegular951"
                                      >
                                        Edit your appointment{" "}
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-green-50 h-[293px] mt-auto mx-auto w-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col md:gap-10 gap-40 items-center justify-start md:px-5 w-auto md:w-full">
                  <div className="flex md:flex-col flex-row gap-4 items-center justify-start w-auto md:w-full">
                    <Line className="bg-blue_gray-300 h-1 rotate-[-180deg] w-[9%]" />
                    <Text
                      className="text-5xl sm:text-[38px] md:text-[44px] text-blue_gray-900 w-auto"
                      size="txtInterBold48"
                    >
                      Our Customers’ Reviews
                    </Text>
                    <Line className="bg-blue_gray-300 h-1 rotate-[-180deg] w-[9%]" />
                  </div>
                  <div className="flex flex-col items-end justify-start w-auto md:w-full">
                    <div className="flex flex-col items-center justify-center w-auto md:w-full">
                      <div className="flex md:flex-col flex-row md:gap-14 items-start justify-between w-full">
                        <div className="relative w-[35%] md:w-full">
                          <div className="absolute bg-green-50 h-[430px] inset-y-[0] left-[0] my-auto w-[76%]"></div>
                          <Img
                            className="h-[252px] ml-auto my-auto object-cover relative rounded w-[226px]"
                            src="images/img_rectangle29.png"
                            alt="rectangleTwentyNine"
                          />
                        </div>
                        <div className="flex md:flex-1 flex-col gap-[37px] items-center justify-start md:mt-0 mt-[86px] w-3/5 md:w-full">
                          <div className="flex flex-col gap-3 items-start justify-start w-auto md:w-full">
                            <Text
                              className="leading-[150.00%] max-w-[597px] md:max-w-full text-2xl md:text-[22px] text-blue_gray-700_02 sm:text-xl"
                              size="txtInterRegular24"
                            >
                              <span className="text-blue_gray-700_02 font-inter text-left font-normal">
                                Using{" "}
                              </span>
                              <span className="text-blue_gray-700_02 font-inter text-left font-normal">
                                HealthPal
                              </span>
                              <span className="text-blue_gray-700_02 font-inter text-left font-normal">
                                {" "}
                                has been a game-changer for me. As a busy
                                working professional, finding time to visit a
                                doctor was always a challenge. With this app, I
                                can book appointments and receive medical
                                consultations without the hassle of commuting
                                and waiting rooms.
                              </span>
                            </Text>
                            <Text
                              className="text-gray-600_02 text-xl w-auto"
                              size="txtInterRegular20Gray60002"
                            >
                              Alice Farmer / Designer
                            </Text>
                          </div>
                          <div className="flex flex-row sm:gap-10 items-center justify-between w-[597px] md:w-full">
                            <PagerIndicator
                              className="flex gap-4 h-1 items-start justify-start w-[184px]"
                              count={4}
                              activeCss="inline-block cursor-pointer h-1 bg-blue_gray-500 w-[34px]"
                              activeIndex={1}
                              inactiveCss="inline-block cursor-pointer h-1 bg-blue_gray-100_01 w-[34px]"
                              selectedWrapperCss="inline-block"
                              unselectedWrapperCss="inline-block"
                            />
                            <a
                              href="javascript:"
                              className="text-2xl md:text-[22px] text-blue_gray-500 sm:text-xl w-auto"
                            >
                              <Text size="txtInterSemiBold24">See All</Text>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="flex md:flex-col flex-row md:gap-10 gap-[100px] items-center justify-start max-w-[1120px] mx-auto md:px-5 w-full">
                <div className="flex sm:flex-1 flex-col gap-6 items-start justify-start w-auto sm:w-full">
                  <div className="flex sm:flex-col flex-row gap-4 items-center justify-start w-auto sm:w-full">
                    <Line className="bg-blue_gray-300 h-1 rotate-[-180deg] w-[16%]" />
                    <Text
                      className="text-5xl sm:text-[38px] md:text-[44px] text-white-A700 w-auto"
                      size="txtInterBold48WhiteA700"
                    >
                      Contact Us
                    </Text>
                    <Line className="bg-blue_gray-300 h-1 rotate-[-180deg] w-[16%]" />
                  </div>
                  <div className="flex flex-col gap-10 items-start justify-start w-auto sm:w-full">
                    <Text
                      className="leading-[150.00%] max-w-[538px] md:max-w-full text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                      size="txtInterRegular24WhiteA700"
                    >
                      We are honored to receive your comments and suggestions.
                      Please feel free to contact us :
                    </Text>
                    <Img
                      className="h-12 w-[368px]"
                      src="images/img_frame1000001084.svg"
                      alt="frame1000001084"
                    />
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-8 items-start justify-start w-full">
                  <div className="flex flex-col gap-4 items-start justify-start w-full">
                    <div className="flex flex-col gap-2 items-start justify-start w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-full"
                        size="txtInterRegular24WhiteA700"
                      >
                        <span className="text-white-A700 font-inter text-left font-normal">
                          Name
                        </span>
                        <span className="text-blue_gray-300 font-inter text-left font-normal">
                          *
                        </span>
                      </Text>
                      <div className="bg-white-A700 h-16 rounded w-full"></div>
                    </div>
                    <div className="flex flex-col gap-2 items-start justify-start w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-full"
                        size="txtInterRegular24WhiteA700"
                      >
                        <span className="text-white-A700 font-inter text-left font-normal">
                          Email
                        </span>
                        <span className="text-blue_gray-300 font-inter text-left font-normal">
                          *
                        </span>
                      </Text>
                      <div className="bg-white-A700 h-16 rounded w-full"></div>
                    </div>
                    <div className="flex flex-col gap-2 items-start justify-start w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-full"
                        size="txtInterRegular24WhiteA700"
                      >
                        <span className="text-white-A700 font-inter text-left font-normal">
                          Message
                        </span>
                        <span className="text-blue_gray-300 font-inter text-left font-normal">
                          *
                        </span>
                      </Text>
                      <div className="bg-white-A700 h-[200px] rounded w-full"></div>
                    </div>
                  </div>
                  <Button
                    className="cursor-pointer font-medium h-16 md:text-3xl sm:text-[28px] text-[32px] text-center w-[302px]"
                    shape="round"
                    size="sm"
                    variant="gradient"
                    color="blue_gray_700_blue_gray_300"
                  >
                    Submit
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-8 items-center justify-start max-w-[1440px] w-full bg-blue_gray-900_33">
              <Line className="bg-blue_gray-900_33 h-px rotate-[-180deg] w-full" />
              <Text
                className="text-2xl md:text-[22px]text-blue_gray-300 sm:text-xl w-auto"
                size="txtInterRegular24WhiteA700"
              >
                ©2023, All rights reserved.
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppIntroLandingLTRPage;
