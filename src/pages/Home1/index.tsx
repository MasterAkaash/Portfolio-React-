import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, List, Text } from "components";

const Home1Page: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-heebo items-center justify-end mx-auto pt-[25px] w-full">
        <div className="flex flex-col md:gap-10 gap-[71px] justify-start w-full">
          <div className="flex flex-col gap-[11px] items-start justify-start md:ml-[0] ml-[148px] md:px-5 w-[82%] md:w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
              <div className="flex flex-col gap-10 items-center justify-start md:mt-0 mt-[202px]">
                <Text
                  className="leading-[60.00px] relative sm:text-[34px] md:text-[40px] text-[50px] text-blue_gray-900"
                  size="txtHeeboBold44"
                >
                  <>
                    Hi, I am Aakash,
                    <br />
                    Full Stack Developer
                  </>
                </Text>
                <Text
                  className="text-[25px] text-blue_gray-900 w-[99%] sm:w-full"
                  size="txtHeeboRegular16"
                >
                  Welcome to the intersection of creativity and technology. As a
                  seasoned full-stack developer, I specialize in transforming
                  complex ideas into seamless digital experiences.
                </Text>
              </div>
              <div className="flex md:flex-1 flex-col md:gap-10 gap-[153px] justify-start w-[36%] md:w-full">
                <div className="flex flex-row items-start justify-end md:ml-[0] ml-[101px] w-[71%] md:w-full">
                  <Text
                    className="common-pointer text-black-900 text-right text-xl"
                    size="txtHeeboMedium20"
                    onClick={() => navigate("/workdetail")}
                  >
                    Works
                  </Text>
                  <Text
                    className="common-pointer ml-[34px] text-black-900 text-right text-xl"
                    size="txtHeeboMedium20"
                    onClick={() => navigate("/blog")}
                  >
                    Blog
                  </Text>
                  <Text
                    className="ml-[33px] text-black-900 text-right text-xl"
                    size="txtHeeboMedium20"
                  >
                    Contact
                  </Text>
                </div>
                <div className="h-64 md:h-[243px] mr-[89px] relative w-[74%]">
                  <div className="absolute bg-gray-100 bottom-[0] h-[243px] inset-x-[0] mx-auto rounded-[121px] w-[243px]"></div>
                  <Img
                    className="absolute h-[243px] inset-x-[0] mx-auto rounded-[50%] top-[0] w-[243px]"
                    src="images/img_ellipse1.png"
                    alt="ellipseOne"
                  />
                </div>
              </div>
            </div>
            <Button className="cursor-pointer font-medium leading-[normal] min-w-[208px] text-center text-xl">
              Download Resume
            </Button>
          </div>
          <div className="flex flex-col items-start justify-start w-full">
            <div className="bg-gray-100 flex flex-col items-center justify-start p-[21px] sm:px-5 w-full">
              <div className="flex flex-col gap-3.5 items-center justify-start max-w-[856px] mb-2.5 mx-auto md:px-5 w-full">
                <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                  <Text
                    className="text-[22px] text-blue_gray-900 sm:text-lg md:text-xl"
                    size="txtHeeboRegular22"
                  >
                    Recent posts
                  </Text>
                  <a
                    href="javascript:"
                    className="text-base text-cyan-600 text-right"
                  >
                    <Text size="txtHeeboRegular16Cyan600">View all</Text>
                  </a>
                </div>
                <List
                  className="sm:flex-col flex-row gap-5 grid md:grid-cols-1 grid-cols-2 justify-center w-full"
                  orientation="horizontal"
                >
                  <div className="bg-white-A700 hover:cursor-pointer flex flex-1 flex-col items-center justify-end p-[7px] rounded hover:shadow-bs shadow-bs hover:w-full w-full">
                    <div className="flex flex-col gap-[15px] items-start justify-start mt-[17px] w-[93%] md:w-full">
                      <Text
                        className="md:text-2xl sm:text-[22px] text-[26px] text-blue_gray-900 w-full"
                        size="txtHeeboBold26"
                      >
                        Making a design system from scratch
                      </Text>
                      <div className="flex flex-row items-start justify-start w-3/4 md:w-full">
                        <Text
                          className="mb-0.5 text-blue_gray-900 text-lg"
                          size="txtHeeboRegular18"
                        >
                          12 Feb 2020
                        </Text>
                        <Line className="bg-black-900 h-[21px] ml-[30px] my-[3px] w-px" />
                        <Text
                          className="ml-[25px] mt-0.5 text-blue_gray-900 text-lg"
                          size="txtHeeboRegular18"
                        >
                          Design, Pattern
                        </Text>
                      </div>
                      <Text
                        className="text-base text-blue_gray-900 w-[99%] sm:w-full"
                        size="txtHeeboRegular16"
                      >
                        Amet minim mollit non deserunt ullamco est sit aliqua
                        dolor do amet sint. Velit officia consequat duis enim
                        velit mollit. Exercitation veniam consequat sunt nostrud
                        amet.
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white-A700 hover:cursor-pointer flex flex-1 flex-col items-center justify-end p-[7px] rounded hover:shadow-bs hover:w-full w-full">
                    <div className="flex flex-col gap-[15px] items-start justify-start mt-[17px] w-[93%] md:w-full">
                      <Text
                        className="md:text-2xl sm:text-[22px] text-[26px] text-blue_gray-900 w-full"
                        size="txtHeeboBold26"
                      >
                        Creating pixel perfect icons in Figma
                      </Text>
                      <div className="flex flex-row items-start justify-start w-[83%] md:w-full">
                        <Text
                          className="mb-0.5 text-blue_gray-900 text-lg"
                          size="txtHeeboRegular18"
                        >
                          12 Feb 2020
                        </Text>
                        <Line className="bg-black-900 h-[21px] mb-[5px] ml-[31px] mt-0.5 w-px" />
                        <Text
                          className="ml-6 mt-0.5 text-blue_gray-900 text-lg"
                          size="txtHeeboRegular18"
                        >
                          Figma, Icon Design
                        </Text>
                      </div>
                      <Text
                        className="text-base text-blue_gray-900 w-[99%] sm:w-full"
                        size="txtHeeboRegular16"
                      >
                        Amet minim mollit non deserunt ullamco est sit aliqua
                        dolor do amet sint. Velit officia consequat duis enim
                        velit mollit. Exercitation veniam consequat sunt nostrud
                        amet.
                      </Text>
                    </div>
                  </div>
                </List>
              </div>
            </div>
            <Text
              className="md:ml-[0] ml-[148px] mt-[27px] text-[22px] text-blue_gray-900 sm:text-lg md:text-xl"
              size="txtHeeboRegular22"
            >
              Featured works
            </Text>
            <List
              className="flex flex-col gap-3.5 items-center max-w-[858px] mt-[26px] mx-auto md:px-5 w-full"
              orientation="vertical"
            >
              <div className="flex flex-1 md:flex-col flex-row gap-[18px] items-center justify-between w-full">
                <Img
                  className="h-[180px] md:h-auto object-cover rounded-md"
                  src="images/img_rectangle30.png"
                  alt="rectangleThirty"
                />
                <div className="flex flex-col items-start justify-start">
                  <Text
                    className="text-3xl sm:text-[26px] md:text-[28px] text-blue_gray-900"
                    size="txtHeeboBold30"
                  >
                    Designing Dashboards
                  </Text>
                  <div className="flex flex-row gap-[26px] items-start justify-start mt-[13px] w-[31%] md:w-full">
                    <div className="h-[27px] md:h-[30px] mt-[3px] relative w-[34%]">
                      <div className="absolute bg-blue_gray-900_01 bottom-[0] h-[25px] inset-x-[0] mx-auto rounded-[12px] w-full"></div>
                      <Text
                        className="absolute h-full inset-[0] justify-center m-auto text-lg text-white-A700 w-max"
                        size="txtHeeboBlack18"
                      >
                        2020
                      </Text>
                    </div>
                    <Text
                      className="text-blue_gray-400 text-xl"
                      size="txtHeeboRegular20"
                    >
                      Dashboard
                    </Text>
                  </div>
                  <Text
                    className="mt-[21px] text-base text-blue_gray-900 w-full"
                    size="txtHeeboRegular16"
                  >
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                  </Text>
                </div>
              </div>
              <Line className="self-center h-px bg-gray-300 w-full" />
              <div className="flex flex-1 md:flex-col flex-row gap-[18px] items-start justify-between w-full">
                <Img
                  className="h-[180px] md:h-auto md:mt-0 mt-1 object-cover rounded-md"
                  src="images/img_rectangle32.png"
                  alt="rectangleThirtyTwo"
                />
                <div className="flex flex-col items-start justify-start">
                  <Text
                    className="text-3xl sm:text-[26px] md:text-[28px] text-blue_gray-900"
                    size="txtHeeboBold30"
                  >
                    Vibrant Portraits of 2020
                  </Text>
                  <div className="flex flex-row gap-[26px] items-start justify-start mt-3 w-[31%] md:w-full">
                    <div className="h-[27px] md:h-[30px] mt-[3px] relative w-[35%]">
                      <div className="absolute bg-blue_gray-900_01 bottom-[0] h-[25px] inset-x-[0] mx-auto rounded-[12px] w-full"></div>
                      <Text
                        className="absolute h-full inset-[0] justify-center m-auto text-lg text-white-A700 w-max"
                        size="txtHeeboBlack18"
                      >
                        2018
                      </Text>
                    </div>
                    <Text
                      className="text-blue_gray-400 text-xl"
                      size="txtHeeboRegular20"
                    >
                      Illustration
                    </Text>
                  </div>
                  <Text
                    className="mt-[21px] text-base text-blue_gray-900 w-full"
                    size="txtHeeboRegular16"
                  >
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                  </Text>
                </div>
              </div>
              <Line className="self-center h-px bg-gray-300 w-full" />
              <div className="flex md:flex-1 md:flex-col flex-row gap-[18px] items-start justify-start w-[91%] md:w-full">
                <Img
                  className="h-[184px] sm:h-auto object-cover rounded-md w-[32%] md:w-full"
                  src="images/img_rectangle34.png"
                  alt="rectangleThirtyFour"
                />
                <div className="flex flex-col items-start justify-start w-[66%] md:w-full">
                  <Text
                    className="text-3xl sm:text-[26px] md:text-[28px] text-blue_gray-900"
                    size="txtHeeboBold30"
                  >
                    36 Days of Malayalam type
                  </Text>
                  <div className="flex flex-row gap-[26px] items-center justify-start mt-2 w-[38%] md:w-full">
                    <div className="h-[27px] relative w-[33%]">
                      <div className="absolute bg-blue_gray-900_01 bottom-[0] h-[25px] inset-x-[0] mx-auto rounded-[12px] w-full"></div>
                      <Text
                        className="absolute h-full inset-[0] justify-center m-auto text-lg text-white-A700 w-max"
                        size="txtHeeboBlack18"
                      >
                        2018
                      </Text>
                    </div>
                    <Text
                      className="text-blue_gray-400 text-xl"
                      size="txtHeeboRegular20"
                    >
                      Typography
                    </Text>
                  </div>
                  <Text
                    className="md:ml-[0] ml-[3px] mt-[35px] text-base text-blue_gray-900 w-full"
                    size="txtHeeboRegular16"
                  >
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                  </Text>
                </div>
              </div>
            </List>
            <footer className="bg-white-A700 flex items-center justify-center mt-[87px] md:px-5 w-full">
              <div className="flex flex-col items-center justify-center mb-[33px] mt-[51px] mx-auto w-[21%]">
                <div className="flex flex-col gap-[26px] items-center justify-center w-full">
                  <div className="flex flex-row items-center justify-between w-full">
                    <Img
                      className="h-[30px] w-[30px]"
                      src="images/img_facebook.svg"
                      alt="facebook"
                    />
                    <Img
                      className="h-[30px] w-[30px]"
                      src="images/img_info.svg"
                      alt="info"
                    />
                    <Img
                      className="h-[30px]"
                      src="images/img_trash.svg"
                      alt="trash"
                    />
                    <Img
                      className="h-[30px] w-[30px]"
                      src="images/img_thumbsup.svg"
                      alt="thumbsup"
                    />
                  </div>
                  <Text
                    className="text-blue_gray-900 text-center text-sm"
                    size="txtHeeboRegular14"
                  >
                    <>
                      Copyright ©2024 All rights reserved
                      <br />
                      Developed by Aakash{" "}
                    </>
                  </Text>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home1Page;
