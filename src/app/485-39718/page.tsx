// id="485:39718"
import React from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvgI4853971824110294325732562960 from "@designSystem/icon/svg/QodeSvgI4853971824110294325732562960"
import { QodeButton } from "@designSystem/ant/QodeButton"
import { QodeTag } from "@designSystem/ant/QodeTag"
import QodeSvgI485397182211841921923526 from "@designSystem/icon/svg/QodeSvgI485397182211841921923526"
import QodeSvgI485397182211842021923826 from "@designSystem/icon/svg/QodeSvgI485397182211842021923826"
import QodeSvgI485397182211842121923844 from "@designSystem/icon/svg/QodeSvgI485397182211842121923844"
import { QodeSteps } from "@designSystem/ant/QodeSteps"
import QodeSvg191983 from "@designSystem/icon/svg/QodeSvg191983"
import QodeSvg191975 from "@designSystem/icon/svg/QodeSvg191975"

export interface Qode48539718PageProps {}

export const Qode48539718Page: React.FC<Qode48539718PageProps> = ({
  ...rest
}) => {
  return (
    <>
      {/* name="Profile" id="485:39718" type="INSTANCE" */}
      <Flex
        style={{
          display: "flex",
          padding: "20px",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
          borderLeft:
            "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
          background: "var(--background-bg-white, #fff)",
        }}
      >
        {/* name="Profile/Header" id="I485:39718;24:11029" type="INSTANCE" */}
        <Flex
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "24px",
            alignSelf: "stretch",
          }}
        >
          {/* name="Wrap" id="I485:39718;24:11029;43:25731" type="FRAME" */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "16px",
              flex: "1 0 0",
            }}
          >
            {/* name="avatar" id="I485:39718;24:11029;43:25732" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                width: "72px",
                height: "72px",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--font-size-large, 16px)",
                borderRadius: "999px",
                background: "var(--color-success-colorsuccesshover, #a3c73e)",
              }}
            >
              <span
                style={{
                  alignSelf: "stretch",
                  color: "var(--color-neutral-text-colortext, #000)",
                  textAlign: "center",
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-small, 12px)",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight:
                    "var(--line-height-lineheighsm, 16px) /* 133.333% */",
                }}
              >{`AW`}</span>
              {/* name="user-large" id="I485:39718;24:11029;43:25732;5629:57" type="INSTANCE" */}
              <Icon.QodeUserLarge
                style={{
                  display: "flex",
                  width: "36px",
                  height: "36px",
                  padding: "3.6px",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  left: "18px",
                  top: "18px",
                }}
                {...{}}
              />
              {/* name="img" id="I485:39718;24:11029;43:25732;5629:58" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  width: "72px",
                  height: "72px",
                  padding: "var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "18px",
                  position: "absolute",
                  borderRadius: "999px",
                  background:
                    "url(<path-to-image>) lightgray 50% / cover no-repeat, url(<path-to-image>) lightgray 50% / cover no-repeat",
                }}
              >
                {/* name="img" id=I485:39718;24:11029;43:25732;5629:58 type=FRAME */}
                <></>
              </div>
              {/* name="Badge" id="I485:39718;24:11029;43:25732;5629:59" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  width: "13.5px",
                  height: "13.5px",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  right: "2.25px",
                  bottom: "2.25px",
                  borderRadius: "8px",
                  border:
                    "2.25px solid var(--color-neutral-background-colorbgcontainer, #fff)",
                  background: "var(--color-error-colorerror, #ff6542)",
                }}
              >
                {/* name="Badge" id=I485:39718;24:11029;43:25732;5629:59 type=INSTANCE */}
                <></>
              </Flex>
              {/* name="opentoWork" id="I485:39718;24:11029;43:25732;5629:60" type="FRAME" */}
              <QodeSvgI4853971824110294325732562960
                style={{ width: "72px", height: "72px", position: "absolute" }}
                {...{}}
              />
            </Flex>
            {/* name="Wrap" id="I485:39718;24:11029;43:25733" type="FRAME" */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "8px",
                flex: "1 0 0",
              }}
            >
              {/* name="Name yoe" id="I485:39718;24:11029;43:25734" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  alignSelf: "stretch",
                }}
              >
                <span
                  style={{
                    flex: "1 0 0",
                    color: "var(--text-text-neutral-10, #bfbfbf)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-heading6, 16px)",
                    fontStyle: "normal",
                    fontWeight: "600",
                    lineHeight: "var(--lineheight-lineheight-h6, 22px)",
                  }}
                >{`Nguyen Quoc Thai  · 12 YoE`}</span>
              </div>
              {/* name="Brief" id="I485:39718;24:11029;47:6603" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  paddingRight: "24px",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  gap: "2px",
                  alignSelf: "stretch",
                }}
              >
                <span
                  style={{
                    alignSelf: "stretch",
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Senior Software Developer at The Chemico Vietnam`}</span>
                {/* name="Location" id="I485:39718;24:11029;47:6605" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "4px",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name="location-dot" id="I485:39718;24:11029;69:8761" type="INSTANCE" */}
                  <Icon.QodeLocationDot
                    style={{ width: "16px", height: "16px" }}
                    {...{}}
                  />
                  <span
                    style={{
                      flex: "1 0 0",
                      color: "var(--text-text-neutral-40, #464646)",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    }}
                  >{`Ho Chi Minh city, Vietnam`}</span>
                </div>
              </div>
            </div>
          </div>
          {/* name="Button" id="I485:39718;24:11029;43:25741" type="INSTANCE" */}
          <QodeButton
            style={{
              display: "flex",
              height: "var(--size-height-controlheight, 32px)",
              padding: "4px 16px",
              justifyContent: "center",
              alignItems: "center",
              gap: "8px",
              borderRadius: "var(--border-radius-rounded, 999px)",
              border: "1px solid var(--border-border-primary-30, #107ecc)",
              background: "var(--background-bg-primary, #1597f4)",
            }}
            {...{
              onlyIcon: <Icon.QodeMagnifyingGlass />,
              iconLeft: true,
              iconRight: false,
              buttonname: "Shortlist",
              selectIconRight: <Icon.QodeMagnifyingGlass />,
              selectIconLeft: <Icon.QodeHeart />,
              type: "primary",
              size: "default",
              state: "default",
              content: "default",
              danger: false,
              ghost: false,
            }}
          />
        </Flex>
        {/* name="Body" id="I485:39718;20:4775" type="FRAME" */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "24px",
            alignSelf: "stretch",
          }}
        >
          {/* name="Skils" id="I485:39718;20:4776" type="FRAME" */}
          <div
            style={{
              display: "flex",
              paddingBottom: "16px",
              flexDirection: "column",
              alignItems: "flex-end",
              alignSelf: "stretch",
            }}
          >
            {/* name="skills" id="I485:39718;20:4784" type="FRAME" */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                alignContent: "center",
                gap: "8px",
                alignSelf: "stretch",
                flexWrap: "wrap",
              }}
            >
              {/* name="Tag" id="I485:39718;24:4378" type="INSTANCE" */}
              <QodeTag
                style={{
                  display: "flex",
                  height: "30px",
                  padding: "0px 12px",
                  alignItems: "center",
                  gap: "var(--size-size-sizexxs-6px, 6px)",
                  borderRadius: "4px",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--primary-primary-40, #64b9f5)",
                  background: "var(--primary-primary-10, #d6eeff)",
                }}
                {...{
                  rIcon: <Icon.QodeXmark />,
                  showRIcon: false,
                  color: "primary",
                  state: "default",
                  size: "Default",
                  rounded: "False",
                }}
              />
              {/* name="Tag" id="I485:39718;24:4438" type="INSTANCE" */}
              <QodeTag
                style={{
                  display: "flex",
                  height: "30px",
                  padding: "0px 12px",
                  alignItems: "center",
                  gap: "var(--size-size-sizexxs-6px, 6px)",
                  borderRadius: "4px",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--primary-primary-40, #64b9f5)",
                  background: "var(--primary-primary-10, #d6eeff)",
                }}
                {...{
                  rIcon: <Icon.QodeXmark />,
                  showRIcon: false,
                  color: "primary",
                  state: "default",
                  size: "Default",
                  rounded: "False",
                }}
              />
              {/* name="Tag" id="I485:39718;24:4414" type="INSTANCE" */}
              <QodeTag
                style={{
                  display: "flex",
                  height: "30px",
                  padding: "0px 12px",
                  alignItems: "center",
                  gap: "var(--size-size-sizexxs-6px, 6px)",
                  borderRadius: "4px",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--primary-primary-40, #64b9f5)",
                  background: "var(--primary-primary-10, #d6eeff)",
                }}
                {...{
                  rIcon: <Icon.QodeXmark />,
                  showRIcon: false,
                  color: "primary",
                  state: "default",
                  size: "Default",
                  rounded: "False",
                }}
              />
              {/* name="Tag" id="I485:39718;34:7205" type="INSTANCE" */}
              <QodeTag
                style={{
                  display: "flex",
                  height: "30px",
                  padding: "0px 12px",
                  alignItems: "center",
                  gap: "var(--size-size-sizexxs-6px, 6px)",
                  borderRadius: "4px",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--primary-primary-40, #64b9f5)",
                  background: "var(--primary-primary-10, #d6eeff)",
                }}
                {...{
                  rIcon: <Icon.QodeXmark />,
                  showRIcon: false,
                  color: "primary",
                  state: "default",
                  size: "Default",
                  rounded: "False",
                }}
              />
              {/* name="Tag" id="I485:39718;24:4384" type="INSTANCE" */}
              <QodeTag
                style={{
                  display: "flex",
                  height: "30px",
                  padding: "0px 12px",
                  alignItems: "center",
                  gap: "var(--size-size-sizexxs-6px, 6px)",
                  borderRadius: "4px",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--neutral-gray-30, #bfbfbf)",
                  background: "var(--neutral-gray-5, #f8f6f6)",
                }}
                {...{
                  rIcon: <Icon.QodeXmark />,
                  showRIcon: false,
                  color: "neutral",
                  state: "default",
                  size: "Default",
                  rounded: "False",
                }}
              />
              {/* name="Tag" id="I485:39718;24:4402" type="INSTANCE" */}
              <QodeTag
                style={{
                  display: "flex",
                  height: "30px",
                  padding: "0px 12px",
                  alignItems: "center",
                  gap: "var(--size-size-sizexxs-6px, 6px)",
                  borderRadius: "4px",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--neutral-gray-30, #bfbfbf)",
                  background: "var(--neutral-gray-5, #f8f6f6)",
                }}
                {...{
                  rIcon: <Icon.QodeXmark />,
                  showRIcon: false,
                  color: "neutral",
                  state: "default",
                  size: "Default",
                  rounded: "False",
                }}
              />
              {/* name="Tag" id="I485:39718;24:4426" type="INSTANCE" */}
              <QodeTag
                style={{
                  display: "flex",
                  height: "30px",
                  padding: "0px 12px",
                  alignItems: "center",
                  gap: "var(--size-size-sizexxs-6px, 6px)",
                  borderRadius: "4px",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--neutral-gray-30, #bfbfbf)",
                  background: "var(--neutral-gray-5, #f8f6f6)",
                }}
                {...{
                  rIcon: <Icon.QodeXmark />,
                  showRIcon: false,
                  color: "neutral",
                  state: "default",
                  size: "Default",
                  rounded: "False",
                }}
              />
              {/* name="Tag" id="I485:39718;24:4420" type="INSTANCE" */}
              <QodeTag
                style={{
                  display: "flex",
                  height: "30px",
                  padding: "0px 12px",
                  alignItems: "center",
                  gap: "var(--size-size-sizexxs-6px, 6px)",
                  borderRadius: "4px",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--neutral-gray-30, #bfbfbf)",
                  background: "var(--neutral-gray-5, #f8f6f6)",
                }}
                {...{
                  rIcon: <Icon.QodeXmark />,
                  showRIcon: false,
                  color: "neutral",
                  state: "default",
                  size: "Default",
                  rounded: "False",
                }}
              />
              {/* name="Tag" id="I485:39718;24:4432" type="INSTANCE" */}
              <QodeTag
                style={{
                  display: "flex",
                  height: "30px",
                  padding: "0px 12px",
                  alignItems: "center",
                  gap: "var(--size-size-sizexxs-6px, 6px)",
                  borderRadius: "4px",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--neutral-gray-30, #bfbfbf)",
                  background: "var(--neutral-gray-5, #f8f6f6)",
                }}
                {...{
                  rIcon: <Icon.QodeXmark />,
                  showRIcon: false,
                  color: "neutral",
                  state: "default",
                  size: "Default",
                  rounded: "False",
                }}
              />
              {/* name="Tag" id="I485:39718;24:4408" type="INSTANCE" */}
              <QodeTag
                style={{
                  display: "flex",
                  height: "30px",
                  padding: "0px 12px",
                  alignItems: "center",
                  gap: "var(--size-size-sizexxs-6px, 6px)",
                  borderRadius: "4px",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--neutral-gray-30, #bfbfbf)",
                  background: "var(--neutral-gray-5, #f8f6f6)",
                }}
                {...{
                  rIcon: <Icon.QodeXmark />,
                  showRIcon: false,
                  color: "neutral",
                  state: "default",
                  size: "Default",
                  rounded: "False",
                }}
              />
              {/* name="Tag" id="I485:39718;24:4372" type="INSTANCE" */}
              <QodeTag
                style={{
                  display: "flex",
                  height: "30px",
                  padding: "0px 12px",
                  alignItems: "center",
                  gap: "var(--size-size-sizexxs-6px, 6px)",
                  borderRadius: "4px",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--neutral-gray-30, #bfbfbf)",
                  background: "var(--neutral-gray-5, #f8f6f6)",
                }}
                {...{
                  rIcon: <Icon.QodeXmark />,
                  showRIcon: false,
                  color: "neutral",
                  state: "default",
                  size: "Default",
                  rounded: "False",
                }}
              />
              {/* name="Tag" id="I485:39718;24:4390" type="INSTANCE" */}
              <QodeTag
                style={{
                  display: "flex",
                  height: "30px",
                  padding: "0px 12px",
                  alignItems: "center",
                  gap: "var(--size-size-sizexxs-6px, 6px)",
                  borderRadius: "4px",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--neutral-gray-30, #bfbfbf)",
                  background: "var(--neutral-gray-5, #f8f6f6)",
                }}
                {...{
                  rIcon: <Icon.QodeXmark />,
                  showRIcon: false,
                  color: "neutral",
                  state: "default",
                  size: "Default",
                  rounded: "False",
                }}
              />
              {/* name="Tag" id="I485:39718;24:4366" type="INSTANCE" */}
              <QodeTag
                style={{
                  display: "flex",
                  height: "30px",
                  padding: "0px 12px",
                  alignItems: "center",
                  gap: "var(--size-size-sizexxs-6px, 6px)",
                  borderRadius: "4px",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--neutral-gray-30, #bfbfbf)",
                  background: "var(--neutral-gray-5, #f8f6f6)",
                }}
                {...{
                  rIcon: <Icon.QodeXmark />,
                  showRIcon: false,
                  color: "neutral",
                  state: "default",
                  size: "Default",
                  rounded: "False",
                }}
              />
            </div>
          </div>
          {/* name="Reason" id="I485:39718;20:4798" type="FRAME" */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "12px",
              alignSelf: "stretch",
            }}
          >
            {/* name="Header" id="I485:39718;20:4802" type="FRAME" */}
            <div
              style={{
                display: "flex",
                height: "28px",
                justifyContent: "space-between",
                alignItems: "center",
                alignSelf: "stretch",
              }}
            >
              <span
                style={{
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-size-sizemd-20px, 20px)",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight:
                    "var(--lineheight-lineheight-xl, 28px) /* 140% */",
                }}
              >{`Reason to hire`}</span>
              {/* name="Frame 37294" id="I485:39718;233:22721" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  padding: "4px 12px",
                  alignItems: "center",
                  gap: "2px",
                  borderRadius: "var(--border-radius-rounded, 999px)",
                  background: "var(--blue-techblue-5, #f8fcff)",
                }}
              >
                {/* name="star" id="I485:39718;30:6017" type="INSTANCE" */}
                <Icon.QodeStar
                  style={{ width: "16px", height: "16px" }}
                  {...{}}
                />
                {/* name="star" id="I485:39718;30:6015" type="INSTANCE" */}
                <Icon.QodeStar
                  style={{ width: "16px", height: "16px" }}
                  {...{}}
                />
                {/* name="star" id="I485:39718;30:6013" type="INSTANCE" */}
                <Icon.QodeStar
                  style={{ width: "16px", height: "16px" }}
                  {...{}}
                />
                {/* name="star" id="I485:39718;40:7554" type="INSTANCE" */}
                <Icon.QodeStar
                  style={{ width: "16px", height: "16px" }}
                  {...{}}
                />
                {/* name="star" id="I485:39718;30:6009" type="INSTANCE" */}
                <Icon.QodeStar
                  style={{ width: "16px", height: "16px" }}
                  {...{}}
                />
              </div>
            </div>
            {/* name="Reason" id="I485:39718;30:5968" type="FRAME" */}
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                alignSelf: "stretch",
                borderRadius: "var(--border-radius-base, 8px)",
                border: "1px solid var(--border-border-neutral-20, #e3e3e3)",
              }}
            >
              {/* name="Reason to hire" id="I485:39718;221:18419" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  padding: "16px",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "12px",
                  flex: "1 0 0",
                  alignSelf: "stretch",
                }}
              >
                {/* name="Header" id="I485:39718;221:18419;40:7494" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name="Icon/Expertise" id="I485:39718;221:18419;219:23526" type="FRAME" */}
                  <QodeSvgI485397182211841921923526
                    style={{
                      width: "24px",
                      height: "24px",
                      fill: "var(--neutral-gray-90, #464646)",
                    }}
                    {...{}}
                  />
                  <span
                    style={{
                      flex: "1 0 0",
                      color: "var(--text-text-neutral-50, #1d1d1d)",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "500",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    }}
                  >{`Expertise`}</span>
                </div>
                <span
                  style={{
                    alignSelf: "stretch",
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    fontFamily: '"SF Pro Display"',
                    fontSize: "var(--font-size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheight, 20px) /* 142.857% */",
                  }}
                >{`Expertise with deep experiences & certificates, awards including Employee of the year.`}</span>
              </Flex>
              {/* name="Line 6" id="I485:39718;233:17946" type="LINE" */}
              <Flex
                style={{
                  width: "1px",
                  height: "128px",
                  background: "var(--border-border-neutral-20, #e3e3e3)",
                }}
              >
                {/* name="Line 6" id=I485:39718;233:17946 type=LINE */}
                <></>
              </Flex>
              {/* name="Reason to hire" id="I485:39718;221:18420" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  padding: "16px",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "12px",
                  flex: "1 0 0",
                  alignSelf: "stretch",
                }}
              >
                {/* name="Header" id="I485:39718;221:18420;216:21818" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name="Icon/Industry experience" id="I485:39718;221:18420;219:23826" type="FRAME" */}
                  <QodeSvgI485397182211842021923826
                    style={{
                      width: "24px",
                      height: "24px",
                      fill: "var(--neutral-gray-90, #464646)",
                    }}
                    {...{}}
                  />
                  <span
                    style={{
                      flex: "1 0 0",
                      color: "var(--text-text-neutral-50, #1d1d1d)",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "500",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    }}
                  >{`Industry Experience`}</span>
                </div>
                <span
                  style={{
                    alignSelf: "stretch",
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    fontFamily: '"SF Pro Display"',
                    fontSize: "var(--font-size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheight, 20px) /* 142.857% */",
                  }}
                >{`Over 5 years of experience in Banking domain and other CRM applications.`}</span>
              </Flex>
              {/* name="Line 7" id="I485:39718;233:18569" type="LINE" */}
              <Flex
                style={{
                  width: "1px",
                  height: "128px",
                  background: "var(--border-border-neutral-20, #e3e3e3)",
                }}
              >
                {/* name="Line 7" id=I485:39718;233:18569 type=LINE */}
                <></>
              </Flex>
              {/* name="Reason to hire" id="I485:39718;221:18421" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  padding: "16px",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "12px",
                  flex: "1 0 0",
                  alignSelf: "stretch",
                }}
              >
                {/* name="Header" id="I485:39718;221:18421;219:23502" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name="Icon/Techstack" id="I485:39718;221:18421;219:23844" type="FRAME" */}
                  <QodeSvgI485397182211842121923844
                    style={{
                      width: "24px",
                      height: "24px",
                      fill: "var(--neutral-gray-90, #464646)",
                    }}
                    {...{}}
                  />
                  <span
                    style={{
                      flex: "1 0 0",
                      color: "var(--text-text-neutral-50, #1d1d1d)",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "500",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    }}
                  >{`Tech stack`}</span>
                </div>
                <span
                  style={{
                    alignSelf: "stretch",
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    fontFamily: '"SF Pro Display"',
                    fontSize: "var(--font-size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheight, 20px) /* 142.857% */",
                  }}
                >{`Back-end: Java, PHP, Python, Go and other langauges.`}</span>
              </Flex>
            </div>
          </div>
          {/* name="Experience" id="I485:39718;30:6110" type="INSTANCE" */}
          <Flex
            style={{
              display: "flex",
              paddingBottom: "12px",
              flexDirection: "column",
              alignItems: "flex-end",
              gap: "16px",
              alignSelf: "stretch",
              borderBottom:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
            }}
          >
            {/* name="body" id="I485:39718;30:6110;24:5085" type="FRAME" */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "12px",
                alignSelf: "stretch",
              }}
            >
              {/* name="Profile/Section header" id="I485:39718;30:6110;531:30152" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "stretch",
                  borderRadius: "var(--border-radius-small, 4px)",
                }}
              >
                <span
                  style={{
                    flex: "1 0 0",
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-size-sizemd-20px, 20px)",
                    fontStyle: "normal",
                    fontWeight: "600",
                    lineHeight:
                      "var(--lineheight-lineheight-xl, 28px) /* 140% */",
                  }}
                >{`Experience`}</span>
              </Flex>
              {/* name="jobItem" id="I485:39718;30:6110;24:5093" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  paddingBottom: "var(--size-padding-paddingsm, 12px)",
                  alignItems: "flex-start",
                  gap: "var(--size-margin-marginsm, 12px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name="avatar" id="I485:39718;30:6110;24:5093;24:4863" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "42px",
                    height: "42px",
                    padding: "0px var(--size-padding-paddingxxs, 4px)",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--font-size-large, 16px)",
                    borderRadius: "var(--style-radius-borderround, 999px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
                    background: "var(--neutral-white, #fff)",
                  }}
                >
                  <span
                    style={{
                      alignSelf: "stretch",
                      color: "var(--color-neutral-text-colortext, #000)",
                      textAlign: "center",
                      fontFamily:
                        'var(--font-family-fontfamily, "sf pro display")',
                      fontSize: "var(--font-size-small, 12px)",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight:
                        "var(--line-height-lineheighsm, 20px) /* 166.667% */",
                    }}
                  >{`AW`}</span>
                  {/* name="user-large" id="I485:39718;30:6110;24:5093;24:4863;2785:8296" type="INSTANCE" */}
                  <Icon.QodeUserLarge
                    style={{
                      width: "21px",
                      height: "21px",
                      position: "absolute",
                      left: "10.5px",
                      top: "10.5px",
                    }}
                    {...{}}
                  />
                  {/* name="img" id="I485:39718;30:6110;24:5093;24:4863;2785:8297" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      width: "42px",
                      height: "42px",
                      padding: "var(--size-padding-paddingxs, 8px)",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "8px",
                      position: "absolute",
                      borderRadius: "var(--style-radius-borderradius, 8px)",
                      background:
                        "url(<path-to-image>) lightgray 5px 5px / 76.19% 76.19% no-repeat",
                    }}
                  >
                    {/* name="img" id=I485:39718;30:6110;24:5093;24:4863;2785:8297 type=FRAME */}
                    <></>
                  </div>
                  {/* name="Badge" id="I485:39718;30:6110;24:5093;24:4863;2820:1281" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "var(--size-size-sizexxs-6px, 6px)",
                      height: "var(--size-size-sizexxs-6px, 6px)",
                      justifyContent: "center",
                      alignItems: "center",
                      position: "absolute",
                      right: "1px",
                      bottom: "1px",
                      borderRadius: "var(--style-radius-borderradiuslg, 8px)",
                      border:
                        "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-background-colorbgcontainer, #fff)",
                      background: "var(--color-error-colorerror, #ff6542)",
                    }}
                  >
                    {/* name="Badge" id=I485:39718;30:6110;24:5093;24:4863;2820:1281 type=INSTANCE */}
                    <></>
                  </Flex>
                </Flex>
                {/* name="content" id="I485:39718;30:6110;24:5093;24:4864" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-end",
                    flex: "1 0 0",
                  }}
                >
                  {/* name="Title" id="I485:39718;30:6110;24:5093;24:4865" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      alignItems: "flex-start",
                      alignSelf: "stretch",
                    }}
                  >
                    <span
                      style={{
                        flex: "1 0 0",
                        color: "var(--text-text-neutral-40, #464646)",
                        fontFamily:
                          'var(--font-family-fontfamily, "sf pro display")',
                        fontSize: "var(--font-size-large, 16px)",
                        fontStyle: "normal",
                        fontWeight: "700",
                        lineHeight:
                          "var(--line-height-lineheighlg, 24px) /* 150% */",
                      }}
                    >{`Software Engineer`}</span>
                  </div>
                  <span
                    style={{
                      alignSelf: "stretch",
                      color: "var(--text-text-neutral-40, #464646)",
                      fontFamily:
                        'var(--font-family-fontfamily, "sf pro display")',
                      fontSize: "var(--font-size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--line-height-lineheight, 22px) /* 157.143% */",
                    }}
                  >{`qode.world · Full-time`}</span>
                  <span
                    style={{
                      alignSelf: "stretch",
                      color:
                        "var(--color-neutral-text-colortextlabel, rgba(0, 0, 0, 0.88))",
                      fontFamily:
                        'var(--font-family-fontfamily, "sf pro display")',
                      fontSize: "var(--font-size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--line-height-lineheight, 22px) /* 157.143% */",
                    }}
                  >{`Sep 2023 - Present · 9 mos`}</span>
                  <span
                    style={{
                      alignSelf: "stretch",
                      color:
                        "var(--color-neutral-text-colortextlabel, rgba(0, 0, 0, 0.88))",
                      fontFamily:
                        'var(--font-family-fontfamily, "sf pro display")',
                      fontSize: "var(--font-size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--line-height-lineheight, 22px) /* 157.143% */",
                    }}
                  >{`Ho Chi Minh City, Vietnam · Hybrid`}</span>
                  {/* name="experienceDescription" id="I485:39718;30:6110;24:5093;24:4870" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-end",
                      gap: "var(--size-margin-marginxs, 8px)",
                      alignSelf: "stretch",
                    }}
                  >
                    <span
                      style={{
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: "2",
                        flex: "1 0 0",
                        overflow: "hidden",
                        color: "var(--text-text-neutral-50, #1d1d1d)",
                        textOverflow: "ellipsis",
                        fontFamily:
                          'var(--font-family-fontfamily, "sf pro display")',
                        fontSize: "var(--font-size-base, 14px)",
                        fontStyle: "normal",
                        fontWeight: "700",
                        lineHeight: "var(--line-height-lineheight, 20px)",
                      }}
                    >{`Founding Engineer at Qode, specializing in full-stack development, infrastructure design, and DevOps. Key architect of the core product, contributing to both development and operational efficiency. Working towards establishing the technical foundation for Qode, balancing innovation and scalability.`}</span>
                    {/* name="Button" id="I485:39718;30:6110;24:5093;24:4872" type="INSTANCE" */}
                    <QodeButton
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "var(--size-padding-paddingxxs, 4px)",
                        borderRadius: "var(--style-radius-borderround, 999px)",
                      }}
                      {...{
                        icononly: <Icon.QodeMagnifyingGlass />,
                        title: "See More",
                        iconR: <Icon.QodeMagnifyingGlass />,
                        iconL: false,
                        type: "text",
                        size: "small",
                        state: "default",
                        content: "default",
                        danger: false,
                        ghost: false,
                      }}
                    />
                  </div>
                </div>
              </Flex>
              {/* name="groupExp" id="I485:39718;30:6110;24:5094" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "8px",
                  alignSelf: "stretch",
                }}
              >
                {/* name="companyItem" id="I485:39718;30:6110;24:5095" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "var(--size-margin-marginsm, 12px)",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name="avatar" id="I485:39718;30:6110;24:5095;24:4888" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "42px",
                      height: "42px",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "var(--font-size-large, 16px)",
                      borderRadius: "var(--style-radius-borderround, 999px)",
                      border:
                        "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
                      background: "var(--neutral-white, #fff)",
                    }}
                  >
                    <span
                      style={{
                        alignSelf: "stretch",
                        color: "var(--color-neutral-text-colortext, #000)",
                        textAlign: "center",
                        fontFamily:
                          'var(--font-family-fontfamily, "sf pro display")',
                        fontSize: "var(--font-size-small, 12px)",
                        fontStyle: "normal",
                        fontWeight: "700",
                        lineHeight:
                          "var(--line-height-lineheighsm, 16px) /* 133.333% */",
                      }}
                    >{`AW`}</span>
                    {/* name="user-large" id="I485:39718;30:6110;24:5095;24:4888;2681:40498" type="INSTANCE" */}
                    <Icon.QodeUserLarge
                      style={{
                        display: "flex",
                        width: "21px",
                        height: "21px",
                        padding: "2.1px",
                        justifyContent: "center",
                        alignItems: "center",
                        position: "absolute",
                        left: "10.5px",
                        top: "10.5px",
                      }}
                      {...{}}
                    />
                    {/* name="img" id="I485:39718;30:6110;24:5095;24:4888;2681:40501" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        width: "42px",
                        height: "42px",
                        padding: "var(--size-padding-paddingxs, 8px)",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "8px",
                        position: "absolute",
                        borderRadius: "var(--style-radius-borderround, 999px)",
                        background:
                          "url(<path-to-image>) lightgray 7px 7px / 66.667% 66.667% no-repeat",
                      }}
                    >
                      {/* name="img" id=I485:39718;30:6110;24:5095;24:4888;2681:40501 type=FRAME */}
                      <></>
                    </div>
                    {/* name="Badge" id="I485:39718;30:6110;24:5095;24:4888;2820:1278" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        width: "var(--size-size-sizexxs-6px, 6px)",
                        height: "var(--size-size-sizexxs-6px, 6px)",
                        justifyContent: "center",
                        alignItems: "center",
                        position: "absolute",
                        right: "1px",
                        bottom: "1px",
                        borderRadius: "var(--style-radius-borderradiuslg, 8px)",
                        border:
                          "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-background-colorbgcontainer, #fff)",
                        background: "var(--color-error-colorerror, #ff6542)",
                      }}
                    >
                      {/* name="Badge" id=I485:39718;30:6110;24:5095;24:4888;2820:1278 type=INSTANCE */}
                      <></>
                    </Flex>
                    {/* name="opentoWork" id="I485:39718;30:6110;24:5095;24:4888;2894:1086" type="FRAME" */}
                    <div
                      style={{
                        width: "42px",
                        height: "42px",
                        position: "absolute",
                      }}
                    >
                      {/* name="Ellipse 2 (Stroke)" id="I485:39718;30:6110;24:5095;24:4888;2894:1087" type="VECTOR" */}
                      <Flex
                        style={{
                          width: "42px",
                          height: "42px",
                          transform: "rotate(9.982deg)",
                          flexShrink: "0",
                          fill: "linear-gradient(232deg, rgba(141, 185, 17, 0.00) 42.64%, #8DB911 85.8%)",
                        }}
                      >
                        {/* name="Ellipse 2 (Stroke)" id=I485:39718;30:6110;24:5095;24:4888;2894:1087 type=VECTOR */}
                        <></>
                      </Flex>
                      {/* name="Vector" id="I485:39718;30:6110;24:5095;24:4888;2894:1088" type="VECTOR" */}
                      <Flex
                        style={{
                          width: "28.151px",
                          height: "28.64px",
                          transform: "rotate(9.982deg)",
                          flexShrink: "0",
                          fill: "var(--color-neutral-text-colortextsolid, #fff)",
                        }}
                      >
                        {/* name="Vector" id=I485:39718;30:6110;24:5095;24:4888;2894:1088 type=VECTOR */}
                        <></>
                      </Flex>
                    </div>
                  </Flex>
                  {/* name="content" id="I485:39718;30:6110;24:5095;24:4889" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "flex-end",
                      flex: "1 0 0",
                    }}
                  >
                    <span
                      style={{
                        alignSelf: "stretch",
                        color: "var(--text-text-neutral-40, #464646)",
                        fontFamily:
                          'var(--font-family-fontfamily, "sf pro display")',
                        fontSize: "var(--font-size-large, 16px)",
                        fontStyle: "normal",
                        fontWeight: "700",
                        lineHeight:
                          "var(--line-height-lineheighlg, 24px) /* 150% */",
                      }}
                    >{`Google`}</span>
                    <span
                      style={{
                        alignSelf: "stretch",
                        color: "var(--text-text-neutral-40, #464646)",
                        fontFamily:
                          'var(--font-family-fontfamily, "sf pro display")',
                        fontSize: "var(--font-size-base, 14px)",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight:
                          "var(--line-height-lineheight, 20px) /* 142.857% */",
                      }}
                    >{`Singapore · Remote`}</span>
                  </div>
                </Flex>
                {/* name="expItem" id="I485:39718;30:6110;24:5096" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    paddingLeft: "var(--size-padding-padding, 16px)",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "8px",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name=".exp_item_vertical" id="I485:39718;30:6110;24:5097" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "var(--size-padding-paddingxl, 32px)",
                      alignSelf: "stretch",
                    }}
                  >
                    {/* name="Icon Wrapper" id="I485:39718;30:6110;24:5097;2787:9058" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        width: "8px",
                        padding: "7px 0px 9px 0px",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "6px",
                        alignSelf: "stretch",
                      }}
                    >
                      {/* name=".steps__item_progress" id="I485:39718;30:6110;24:5097;2787:9059" type="INSTANCE" */}
                      <QodeSteps
                        style={{
                          display: "flex",
                          width: "8px",
                          height: "8px",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius: "999px",
                          background: "var(--neutral-gray-40, #a7a7a7)",
                        }}
                        {...{ step: "2", status: "wait", size: "dot" }}
                      />
                      {/* name=".steps__item_tail" id="I485:39718;30:6110;24:5097;2787:9060" type="INSTANCE" */}
                      <QodeSvg191983
                        style={{
                          width: "var(--size-size-size5xs-1px, 1px)",
                          flex: "1 0 0",
                        }}
                        {...{
                          direction: "vertical",
                          style: "default",
                          state: "waiting",
                        }}
                      />
                    </div>
                    {/* name="Text Wrapper" id="I485:39718;30:6110;24:5097;2787:9061" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        paddingBottom: "var(--size-padding-paddingxs, 8px)",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        gap: "var(--size-margin-marginxxs, 4px)",
                        flex: "1 0 0",
                      }}
                    >
                      <span
                        style={{
                          width: "248px",
                          height: "24px",
                          color: "var(--text-text-neutral-40, #464646)",
                          fontFamily:
                            'var(--font-family-fontfamily, "sf pro display")',
                          fontSize: "var(--font-size-large, 16px)",
                          fontStyle: "normal",
                          fontWeight: "700",
                          lineHeight:
                            "var(--line-height-lineheighlg, 24px) /* 150% */",
                        }}
                      >{`Lead Technical Software Engineer`}</span>
                      <span
                        style={{
                          alignSelf: "stretch",
                          color: "var(--color-neutral-text-colortext, #000)",
                          fontFamily:
                            'var(--font-family-fontfamily, "sf pro display")',
                          fontSize: "var(--font-size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--line-height-lineheight, 20px) /* 142.857% */",
                        }}
                      >{`Location`}</span>
                      <span
                        style={{
                          alignSelf: "stretch",
                          color: "var(--text-text-neutral-20, #878787)",
                          fontFamily:
                            'var(--font-family-fontfamily, "sf pro display")',
                          fontSize: "var(--font-size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--line-height-lineheight, 20px) /* 142.857% */",
                        }}
                      >{`Apr 2022 - Sep 2023 · 1 yr 6 mos`}</span>
                      {/* name="Description" id="I485:39718;30:6110;24:5097;2787:9277" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "flex-end",
                          gap: "var(--size-margin-marginxs, 8px)",
                          alignSelf: "stretch",
                        }}
                      >
                        <span
                          style={{
                            flex: "1 0 0",
                            color: "var(--text-text-neutral-40, #464646)",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-base, 14px)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight:
                              "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          }}
                        >{`As the Lead Technical Engineer of Google, I play a crucial role in shaping the technical direction of the company. By implementing best practices in full-sta...`}</span>
                        {/* name="Button" id="I485:39718;30:6110;24:5097;2787:9279" type="INSTANCE" */}
                        <QodeButton
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "var(--size-padding-paddingxxs, 4px)",
                            borderRadius:
                              "var(--style-radius-borderround, 999px)",
                          }}
                          {...{
                            icononly: <Icon.QodeMagnifyingGlass />,
                            title: "See More",
                            iconR: <Icon.QodeMagnifyingGlass />,
                            iconL: false,
                            type: "text",
                            size: "small",
                            state: "default",
                            content: "default",
                            danger: false,
                            ghost: false,
                          }}
                        />
                      </div>
                    </div>
                  </Flex>
                  {/* name=".exp_item_vertical" id="I485:39718;30:6110;24:5098" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "var(--size-padding-paddingxl, 32px)",
                      alignSelf: "stretch",
                    }}
                  >
                    {/* name="Icon Wrapper" id="I485:39718;30:6110;24:5098;2787:9058" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        width: "8px",
                        padding: "7px 0px 9px 0px",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "6px",
                        alignSelf: "stretch",
                      }}
                    >
                      {/* name=".steps__item_progress" id="I485:39718;30:6110;24:5098;2787:9059" type="INSTANCE" */}
                      <QodeSteps
                        style={{
                          display: "flex",
                          width: "8px",
                          height: "8px",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius: "999px",
                          background: "var(--neutral-gray-40, #a7a7a7)",
                        }}
                        {...{ step: "2", status: "wait", size: "dot" }}
                      />
                      {/* name=".steps__item_tail" id="I485:39718;30:6110;24:5098;2787:9060" type="INSTANCE" */}
                      <QodeSvg191975
                        style={{
                          width: "var(--size-size-size5xs-1px, 1px)",
                          flex: "1 0 0",
                        }}
                        {...{
                          direction: "horizontal",
                          style: "default",
                          state: "waiting",
                        }}
                      />
                    </div>
                    {/* name="Text Wrapper" id="I485:39718;30:6110;24:5098;2787:9061" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        paddingBottom: "var(--size-padding-paddingxs, 8px)",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        gap: "var(--size-margin-marginxxs, 4px)",
                        flex: "1 0 0",
                      }}
                    >
                      <span
                        style={{
                          width: "248px",
                          height: "24px",
                          color: "var(--text-text-neutral-40, #464646)",
                          fontFamily:
                            'var(--font-family-fontfamily, "sf pro display")',
                          fontSize: "var(--font-size-large, 16px)",
                          fontStyle: "normal",
                          fontWeight: "700",
                          lineHeight:
                            "var(--line-height-lineheighlg, 24px) /* 150% */",
                        }}
                      >{`Software Engineer`}</span>
                      <span
                        style={{
                          alignSelf: "stretch",
                          color: "var(--color-neutral-text-colortext, #000)",
                          fontFamily:
                            'var(--font-family-fontfamily, "sf pro display")',
                          fontSize: "var(--font-size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--line-height-lineheight, 20px) /* 142.857% */",
                        }}
                      >{`Location`}</span>
                      <span
                        style={{
                          alignSelf: "stretch",
                          color: "var(--text-text-neutral-20, #878787)",
                          fontFamily:
                            'var(--font-family-fontfamily, "sf pro display")',
                          fontSize: "var(--font-size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--line-height-lineheight, 20px) /* 142.857% */",
                        }}
                      >{`Apr 2021 - Mar 2023 · 1 yr`}</span>
                      {/* name="Description" id="I485:39718;30:6110;24:5098;2787:9277" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "flex-end",
                          gap: "var(--size-margin-marginxs, 8px)",
                          alignSelf: "stretch",
                        }}
                      >
                        <span
                          style={{
                            flex: "1 0 0",
                            color: "var(--text-text-neutral-40, #464646)",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-base, 14px)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight:
                              "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          }}
                        >{`As the software engineer, I oversaw the entire product lifecycle. I implemented new features, enhanced application security, and transitioned to a serverless architect...`}</span>
                        {/* name="Button" id="I485:39718;30:6110;24:5098;2787:9279" type="INSTANCE" */}
                        <QodeButton
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "var(--size-padding-paddingxxs, 4px)",
                            borderRadius:
                              "var(--style-radius-borderround, 999px)",
                          }}
                          {...{
                            icononly: <Icon.QodeMagnifyingGlass />,
                            title: "See More",
                            iconR: <Icon.QodeMagnifyingGlass />,
                            iconL: false,
                            type: "text",
                            size: "small",
                            state: "default",
                            content: "default",
                            danger: false,
                            ghost: false,
                          }}
                        />
                      </div>
                    </div>
                  </Flex>
                </div>
              </div>
            </div>
            <span
              style={{
                color: "var(--text-text-neutral-20, #878787)",
                textAlign: "center",
                fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                fontSize: "var(--font-size-small, 12px)",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight:
                  "var(--line-height-lineheighsm, 16px) /* 133.333% */",
              }}
            >{`Show all 3 experiences`}</span>
          </Flex>
          {/* name="Education" id="I485:39718;24:10341" type="INSTANCE" */}
          <Flex
            style={{
              display: "flex",
              paddingBottom: "12px",
              flexDirection: "column",
              alignItems: "flex-end",
              gap: "var(--size-margin-margin, 16px)",
              alignSelf: "stretch",
              borderBottom:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
            }}
          >
            {/* name="body" id="I485:39718;24:10341;24:5120" type="FRAME" */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "12px",
                alignSelf: "stretch",
              }}
            >
              {/* name="Profile/Section header" id="I485:39718;24:10341;531:32092" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "stretch",
                  borderRadius: "var(--border-radius-small, 4px)",
                }}
              >
                <span
                  style={{
                    flex: "1 0 0",
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-size-sizemd-20px, 20px)",
                    fontStyle: "normal",
                    fontWeight: "600",
                    lineHeight:
                      "var(--lineheight-lineheight-xl, 28px) /* 140% */",
                  }}
                >{`Education`}</span>
              </Flex>
              {/* name="educationItem" id="I485:39718;24:10341;24:5128" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--size-margin-marginsm, 12px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name="avatar" id="I485:39718;24:10341;24:5128;24:4901" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "42px",
                    height: "42px",
                    padding: "0px var(--size-padding-paddingxxs, 4px)",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--font-size-large, 16px)",
                    borderRadius: "var(--style-radius-borderround, 999px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
                    background: "var(--neutral-white, #fff)",
                  }}
                >
                  <span
                    style={{
                      alignSelf: "stretch",
                      color: "var(--color-neutral-text-colortext, #000)",
                      textAlign: "center",
                      fontFamily:
                        'var(--font-family-fontfamily, "sf pro display")',
                      fontSize: "var(--font-size-small, 12px)",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight:
                        "var(--line-height-lineheighsm, 16px) /* 133.333% */",
                    }}
                  >{`AW`}</span>
                  {/* name="user-large" id="I485:39718;24:10341;24:5128;24:4901;2785:8296" type="INSTANCE" */}
                  <Icon.QodeUserLarge
                    style={{
                      display: "flex",
                      width: "21px",
                      height: "21px",
                      padding: "2.1px",
                      justifyContent: "center",
                      alignItems: "center",
                      position: "absolute",
                      left: "10.5px",
                      top: "10.5px",
                    }}
                    {...{}}
                  />
                  {/* name="img" id="I485:39718;24:10341;24:5128;24:4901;2785:8297" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      width: "42px",
                      height: "42px",
                      padding: "var(--size-padding-paddingxs, 8px)",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "8px",
                      position: "absolute",
                      borderRadius: "var(--style-radius-borderradius, 8px)",
                      background:
                        "url(<path-to-image>) lightgray 5px 5px / 76.19% 76.19% no-repeat",
                    }}
                  >
                    {/* name="img" id=I485:39718;24:10341;24:5128;24:4901;2785:8297 type=FRAME */}
                    <></>
                  </div>
                  {/* name="Badge" id="I485:39718;24:10341;24:5128;24:4901;2820:1281" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "var(--size-size-sizexxs-6px, 6px)",
                      height: "var(--size-size-sizexxs-6px, 6px)",
                      justifyContent: "center",
                      alignItems: "center",
                      position: "absolute",
                      right: "1px",
                      bottom: "1px",
                      borderRadius: "var(--style-radius-borderradiuslg, 8px)",
                      border:
                        "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-background-colorbgcontainer, #fff)",
                      background: "var(--color-error-colorerror, #ff6542)",
                    }}
                  >
                    {/* name="Badge" id=I485:39718;24:10341;24:5128;24:4901;2820:1281 type=INSTANCE */}
                    <></>
                  </Flex>
                </Flex>
                {/* name="content" id="I485:39718;24:10341;24:5128;24:4902" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-end",
                    flex: "1 0 0",
                  }}
                >
                  <span
                    style={{
                      alignSelf: "stretch",
                      color: "var(--text-text-neutral-50, #1d1d1d)",
                      fontFamily:
                        'var(--font-family-fontfamily, "sf pro display")',
                      fontSize: "var(--font-size-large, 16px)",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight:
                        "var(--line-height-lineheighlg, 24px) /* 150% */",
                    }}
                  >{`University`}</span>
                  <span
                    style={{
                      alignSelf: "stretch",
                      color: "var(--text-text-neutral-50, #1d1d1d)",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    }}
                  >{`Degree - Major`}</span>
                  <span
                    style={{
                      alignSelf: "stretch",
                      color: "var(--text-text-neutral-20, #878787)",
                      fontFamily:
                        'var(--font-family-fontfamily, "sf pro display")',
                      fontSize: "var(--font-size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--line-height-lineheight, 20px) /* 142.857% */",
                    }}
                  >{`2012-2016`}</span>
                  {/* name="experienceDescription" id="I485:39718;24:10341;24:5128;24:4906" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-end",
                      gap: "var(--size-margin-marginxs, 8px)",
                      alignSelf: "stretch",
                    }}
                  >
                    <span
                      style={{
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: "2",
                        flex: "1 0 0",
                        overflow: "hidden",
                        color: "var(--text-text-neutral-40, #464646)",
                        textOverflow: "ellipsis",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-base, 14px)",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight:
                          "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                      }}
                    >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation zxva...Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation zxva...`}</span>
                    {/* name="Button" id="I485:39718;24:10341;24:5128;24:4908" type="INSTANCE" */}
                    <QodeButton
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "var(--size-padding-paddingxxs, 4px)",
                        borderRadius: "var(--style-radius-borderround, 999px)",
                      }}
                      {...{
                        icononly: <Icon.QodeMagnifyingGlass />,
                        title: "See More",
                        iconR: <Icon.QodeMagnifyingGlass />,
                        iconL: false,
                        type: "text",
                        size: "small",
                        state: "default",
                        content: "default",
                        danger: false,
                        ghost: false,
                      }}
                    />
                  </div>
                </div>
                {/* name="Button" id="I485:39718;24:10341;24:5128;24:4909" type="INSTANCE" */}
                <QodeButton
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxxs, 4px)",
                    borderRadius: "var(--style-radius-borderround, 999px)",
                  }}
                  {...{
                    iconR: "630:8727",
                    icononly: <Icon.QodePencil />,
                    title: "Edit",
                    iconL: true,
                    type: "link",
                    size: "small",
                    state: "default",
                    content: "default",
                    danger: false,
                    ghost: false,
                  }}
                />
              </Flex>
            </div>
          </Flex>
          {/* name="Certificates" id="I485:39718;28:9329" type="INSTANCE" */}
          <Flex
            style={{
              display: "flex",
              
              paddingBottom: "12px",
              flexDirection: "column",
              alignItems: "flex-end",
              gap: "16px",
              borderBottom:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
            }}
          >
            {/* name="body" id="I485:39718;28:9329;24:5142" type="FRAME" */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "12px",
                alignSelf: "stretch",
              }}
            >
              {/* name="Profile/Section header" id="I485:39718;28:9329;531:33176" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "stretch",
                  borderRadius: "var(--border-radius-small, 4px)",
                }}
              >
                <span
                  style={{
                    flex: "1 0 0",
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-size-sizemd-20px, 20px)",
                    fontStyle: "normal",
                    fontWeight: "600",
                    lineHeight:
                      "var(--lineheight-lineheight-xl, 28px) /* 140% */",
                  }}
                >{`Licenses & Certifications`}</span>
              </Flex>
              {/* name="educationItem" id="I485:39718;28:9329;24:5150" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--size-margin-marginsm, 12px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name="avatar" id="I485:39718;28:9329;24:5151" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "42px",
                    height: "42px",
                    padding: "0px var(--size-padding-paddingxxs, 4px)",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--font-size-large, 16px)",
                    borderRadius: "var(--style-radius-borderround, 999px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
                    background: "var(--neutral-white, #fff)",
                  }}
                >
                  <span
                    style={{
                      alignSelf: "stretch",
                      color: "var(--color-neutral-text-colortext, #000)",
                      textAlign: "center",
                      fontFamily:
                        'var(--font-family-fontfamily, "sf pro display")',
                      fontSize: "var(--font-size-small, 12px)",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight:
                        "var(--line-height-lineheighsm, 16px) /* 133.333% */",
                    }}
                  >{`AW`}</span>
                  {/* name="user-large" id="I485:39718;28:9329;24:5151;2785:8296" type="INSTANCE" */}
                  <Icon.QodeUserLarge
                    style={{
                      display: "flex",
                      width: "21px",
                      height: "21px",
                      padding: "2.1px",
                      justifyContent: "center",
                      alignItems: "center",
                      position: "absolute",
                      left: "10.5px",
                      top: "10.5px",
                    }}
                    {...{}}
                  />
                  {/* name="img" id="I485:39718;28:9329;24:5151;2785:8297" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      width: "42px",
                      height: "42px",
                      padding: "var(--size-padding-paddingxs, 8px)",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "8px",
                      position: "absolute",
                      borderRadius: "var(--style-radius-borderradius, 8px)",
                      background:
                        "url(<path-to-image>) lightgray 5px 5px / 76.19% 76.19% no-repeat",
                    }}
                  >
                    {/* name="img" id=I485:39718;28:9329;24:5151;2785:8297 type=FRAME */}
                    <></>
                  </div>
                  {/* name="Badge" id="I485:39718;28:9329;24:5151;2820:1281" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "var(--size-size-sizexxs-6px, 6px)",
                      height: "var(--size-size-sizexxs-6px, 6px)",
                      justifyContent: "center",
                      alignItems: "center",
                      position: "absolute",
                      right: "1px",
                      bottom: "1px",
                      borderRadius: "var(--style-radius-borderradiuslg, 8px)",
                      border:
                        "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-background-colorbgcontainer, #fff)",
                      background: "var(--color-error-colorerror, #ff6542)",
                    }}
                  >
                    {/* name="Badge" id=I485:39718;28:9329;24:5151;2820:1281 type=INSTANCE */}
                    <></>
                  </Flex>
                </Flex>
                {/* name="content" id="I485:39718;28:9329;24:5152" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    gap: "var(--size-margin-marginxs, 8px)",
                    flex: "1 0 0",
                  }}
                >
                  {/* name="content" id="I485:39718;28:9329;24:5153" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      alignSelf: "stretch",
                    }}
                  >
                    <span
                      style={{
                        alignSelf: "stretch",
                        color: "var(--text-text-neutral-50, #1d1d1d)",
                        fontFamily:
                          'var(--font-family-fontfamily, "sf pro display")',
                        fontSize: "var(--font-size-large, 16px)",
                        fontStyle: "normal",
                        fontWeight: "700",
                        lineHeight:
                          "var(--line-height-lineheighlg, 24px) /* 150% */",
                      }}
                    >{`License / Certification Name`}</span>
                    <span
                      style={{
                        alignSelf: "stretch",
                        color: "var(--text-text-neutral-40, #464646)",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-base, 14px)",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight:
                          "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                      }}
                    >{`Company`}</span>
                    <span
                      style={{
                        alignSelf: "stretch",
                        color: "var(--text-text-neutral-20, #878787)",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-base, 14px)",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight:
                          "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                      }}
                    >{`2012-2016`}</span>
                    <span
                      style={{
                        alignSelf: "stretch",
                        color: "var(--text-text-neutral-20, #878787)",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-base, 14px)",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight:
                          "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                      }}
                    >{`Credential ID`}</span>
                  </div>
                  {/* name="Button" id="I485:39718;28:9329;67:3161" type="INSTANCE" */}
                  <QodeButton
                    style={{
                      display: "flex",
                      height: "var(--size-height-controlheightsm, 24px)",
                      padding: "4px 8px",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "4px",
                      borderRadius: "var(--border-radius-rounded, 999px)",
                      border:
                        "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                      background: "var(--background-bg-white, #fff)",
                    }}
                    {...{
                      selectIconRight: <Icon.QodeUpRightFromSquare />,
                      onlyIcon: <Icon.QodeMagnifyingGlass />,
                      iconRight: true,
                      buttonname: "Show credentials",
                      selectIconLeft: <Icon.QodeMagnifyingGlass />,
                      iconLeft: false,
                      type: "default",
                      size: "small",
                      state: "default",
                      content: "default",
                      danger: false,
                      ghost: false,
                    }}
                  />
                </div>
              </div>
            </div>
          </Flex>
          {/* name="Awards" id="I485:39718;28:9668" type="INSTANCE" */}
          <Flex
            style={{
              display: "flex",
              
              paddingBottom: "12px",
              flexDirection: "column",
              alignItems: "flex-end",
              gap: "var(--size-margin-margin, 16px)",
              borderBottom:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
            }}
          >
            {/* name="body" id="I485:39718;28:9668;24:5196" type="FRAME" */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "12px",
                alignSelf: "stretch",
              }}
            >
              {/* name="Profile/Section header" id="I485:39718;28:9668;531:35058" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "stretch",
                  borderRadius: "var(--border-radius-small, 4px)",
                }}
              >
                <span
                  style={{
                    flex: "1 0 0",
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-size-sizemd-20px, 20px)",
                    fontStyle: "normal",
                    fontWeight: "600",
                    lineHeight:
                      "var(--lineheight-lineheight-xl, 28px) /* 140% */",
                  }}
                >{`Honors & Awards`}</span>
              </Flex>
              {/* name="awardItem" id="I485:39718;28:9668;24:5204" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "104px",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "var(--size-margin-marginxxs, 4px)",
                  alignSelf: "stretch",
                }}
              >
                <span
                  style={{
                    width: "496px",
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-heading6, 16px)",
                    fontStyle: "normal",
                    fontWeight: "600",
                    lineHeight:
                      "var(--lineheight-lineheight-h6, 22px) /* 137.5% */",
                  }}
                >{`Staff of the year`}</span>
                <span
                  style={{
                    alignSelf: "stretch",
                    color: "var(--text-text-neutral-40, #464646)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Timeframe - Total Time`}</span>
                {/* name="company" id="I485:39718;28:9668;24:5204;24:4926" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--size-margin-marginxs, 8px)",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name="avatar" id="I485:39718;28:9668;24:5204;24:4927" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "24px",
                      height: "24px",
                      padding: "0px var(--size-padding-paddingxxs, 4px)",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "var(--font-size-large, 16px)",
                      borderRadius: "var(--style-radius-borderround, 999px)",
                      border:
                        "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
                      background: "var(--neutral-white, #fff)",
                    }}
                  >
                    <span
                      style={{
                        alignSelf: "stretch",
                        color: "var(--color-neutral-text-colortext, #000)",
                        textAlign: "center",
                        fontFamily:
                          'var(--font-family-fontfamily, "sf pro display")',
                        fontSize: "var(--font-size-small, 12px)",
                        fontStyle: "normal",
                        fontWeight: "700",
                        lineHeight:
                          "var(--line-height-lineheighsm, 16px) /* 133.333% */",
                      }}
                    >{`AW`}</span>
                    {/* name="user-large" id="I485:39718;28:9668;24:5204;24:4927;2785:8296" type="INSTANCE" */}
                    <Icon.QodeUserLarge
                      style={{
                        display: "flex",
                        width: "12px",
                        height: "12px",
                        padding: "1.2px",
                        justifyContent: "center",
                        alignItems: "center",
                        position: "absolute",
                        left: "6px",
                        top: "6px",
                      }}
                      {...{}}
                    />
                    {/* name="img" id="I485:39718;28:9668;24:5204;24:4927;2785:8297" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        width: "24px",
                        height: "24px",
                        padding: "var(--size-padding-paddingxs, 8px)",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "8px",
                        position: "absolute",
                        borderRadius: "var(--style-radius-borderradius, 8px)",
                        background:
                          "url(<path-to-image>) lightgray 4px 4px / 66.667% 66.667% no-repeat",
                      }}
                    >
                      {/* name="img" id=I485:39718;28:9668;24:5204;24:4927;2785:8297 type=FRAME */}
                      <></>
                    </div>
                    {/* name="Badge" id="I485:39718;28:9668;24:5204;24:4927;2820:1281" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        width: "var(--size-size-sizexxs-6px, 6px)",
                        height: "var(--size-size-sizexxs-6px, 6px)",
                        justifyContent: "center",
                        alignItems: "center",
                        position: "absolute",
                        right: "1px",
                        bottom: "1px",
                        borderRadius: "var(--style-radius-borderradiuslg, 8px)",
                        border:
                          "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-background-colorbgcontainer, #fff)",
                        background: "var(--color-error-colorerror, #ff6542)",
                      }}
                    >
                      {/* name="Badge" id=I485:39718;28:9668;24:5204;24:4927;2820:1281 type=INSTANCE */}
                      <></>
                    </Flex>
                  </Flex>
                  <span
                    style={{
                      flex: "1 0 0",
                      color: "var(--text-text-neutral-40, #464646)",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    }}
                  >{`3 Experiences across Google & 2 other companies`}</span>
                </div>
                <span
                  style={{
                    alignSelf: "stretch",
                    color: "var(--text-text-neutral-40, #464646)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Description`}</span>
              </Flex>
            </div>
          </Flex>
          {/* name="sectionVolunteering" id="I485:39718;28:10258" type="INSTANCE" */}
          <Flex
            style={{
              display: "flex",
              
              paddingBottom: "12px",
              flexDirection: "column",
              alignItems: "flex-end",
              gap: "16px",
              borderBottom:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
            }}
          >
            {/* name="body" id="I485:39718;28:10258;24:5169" type="FRAME" */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "12px",
                alignSelf: "stretch",
              }}
            >
              {/* name="Profile/Section header" id="I485:39718;28:10258;531:33851" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "stretch",
                  borderRadius: "var(--border-radius-small, 4px)",
                }}
              >
                <span
                  style={{
                    flex: "1 0 0",
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-size-sizemd-20px, 20px)",
                    fontStyle: "normal",
                    fontWeight: "600",
                    lineHeight:
                      "var(--lineheight-lineheight-xl, 28px) /* 140% */",
                  }}
                >{`Volunteering`}</span>
              </Flex>
              {/* name="educationItem" id="I485:39718;28:10258;24:5177" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--size-margin-marginsm, 12px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name="avatar" id="I485:39718;28:10258;24:5178" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "42px",
                    height: "42px",
                    padding: "0px var(--size-padding-paddingxxs, 4px)",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--font-size-large, 16px)",
                    borderRadius: "var(--style-radius-borderround, 999px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
                    background: "var(--neutral-white, #fff)",
                  }}
                >
                  <span
                    style={{
                      alignSelf: "stretch",
                      color: "var(--color-neutral-text-colortext, #000)",
                      textAlign: "center",
                      fontFamily:
                        'var(--font-family-fontfamily, "sf pro display")',
                      fontSize: "var(--font-size-small, 12px)",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight:
                        "var(--line-height-lineheighsm, 16px) /* 133.333% */",
                    }}
                  >{`AW`}</span>
                  {/* name="user-large" id="I485:39718;28:10258;24:5178;2785:8296" type="INSTANCE" */}
                  <Icon.QodeUserLarge
                    style={{
                      display: "flex",
                      width: "21px",
                      height: "21px",
                      padding: "2.1px",
                      justifyContent: "center",
                      alignItems: "center",
                      position: "absolute",
                      left: "10.5px",
                      top: "10.5px",
                    }}
                    {...{}}
                  />
                  {/* name="img" id="I485:39718;28:10258;24:5178;2785:8297" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      width: "42px",
                      height: "42px",
                      padding: "var(--size-padding-paddingxs, 8px)",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "8px",
                      position: "absolute",
                      borderRadius: "var(--style-radius-borderradius, 8px)",
                      background:
                        "url(<path-to-image>) lightgray 5px 5px / 76.19% 76.19% no-repeat",
                    }}
                  >
                    {/* name="img" id=I485:39718;28:10258;24:5178;2785:8297 type=FRAME */}
                    <></>
                  </div>
                  {/* name="Badge" id="I485:39718;28:10258;24:5178;2820:1281" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "var(--size-size-sizexxs-6px, 6px)",
                      height: "var(--size-size-sizexxs-6px, 6px)",
                      justifyContent: "center",
                      alignItems: "center",
                      position: "absolute",
                      right: "1px",
                      bottom: "1px",
                      borderRadius: "var(--style-radius-borderradiuslg, 8px)",
                      border:
                        "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-background-colorbgcontainer, #fff)",
                      background: "var(--color-error-colorerror, #ff6542)",
                    }}
                  >
                    {/* name="Badge" id=I485:39718;28:10258;24:5178;2820:1281 type=INSTANCE */}
                    <></>
                  </Flex>
                </Flex>
                {/* name="content" id="I485:39718;28:10258;24:5179" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    gap: "var(--size-margin-marginxs, 8px)",
                    flex: "1 0 0",
                  }}
                >
                  {/* name="content" id="I485:39718;28:10258;24:5180" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      alignSelf: "stretch",
                    }}
                  >
                    <span
                      style={{
                        alignSelf: "stretch",
                        color: "var(--text-text-neutral-50, #1d1d1d)",
                        fontFamily:
                          'var(--font-family-fontfamily, "sf pro display")',
                        fontSize: "var(--font-size-large, 16px)",
                        fontStyle: "normal",
                        fontWeight: "700",
                        lineHeight:
                          "var(--line-height-lineheighlg, 24px) /* 150% */",
                      }}
                    >{`Role`}</span>
                    <span
                      style={{
                        alignSelf: "stretch",
                        color: "var(--text-text-neutral-40, #464646)",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-base, 14px)",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight:
                          "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                      }}
                    >{`Organization name`}</span>
                    <span
                      style={{
                        alignSelf: "stretch",
                        color: "var(--text-text-neutral-20, #878787)",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-base, 14px)",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight:
                          "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                      }}
                    >{`From Dec 2021 - To Dec 2023`}</span>
                    <span
                      style={{
                        alignSelf: "stretch",
                        color: "var(--text-text-neutral-20, #878787)",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-base, 14px)",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight:
                          "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                      }}
                    >{`Activity Name`}</span>
                  </div>
                  {/* name="Button" id="I485:39718;28:10258;24:5185" type="INSTANCE" */}
                  <QodeButton
                    style={{
                      display: "flex",
                      height: "var(--size-height-controlheightsm, 24px)",
                      padding:
                        "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "var(--size-padding-paddingxxs, 4px)",
                      borderRadius: "var(--style-radius-borderround, 999px)",
                      border:
                        "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                      background:
                        "var(--color-neutral-background-colorbgcontainer, #fff)",
                    }}
                    {...{
                      iconR: true,
                      icononly: <Icon.QodeMagnifyingGlass />,
                      title: "Show credential",
                      iconL: false,
                      type: "default",
                      size: "small",
                      state: "default",
                      content: "default",
                      danger: false,
                      ghost: false,
                    }}
                  />
                </div>
              </div>
            </div>
          </Flex>
        </div>
      </Flex>
    </>
  )
}

export default Qode48539718Page
