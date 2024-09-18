// id="434:30029"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvgI7110346409555562960 from "@designSystem/icon/svg/QodeSvgI7110346409555562960"
import QodeSvgI7110347409542562960 from "@designSystem/icon/svg/QodeSvgI7110347409542562960"
import QodeSvgI7110348409542562960 from "@designSystem/icon/svg/QodeSvgI7110348409542562960"
import QodeSvgI7110349409542562960 from "@designSystem/icon/svg/QodeSvgI7110349409542562960"
import QodeSvgI7110350409542562960 from "@designSystem/icon/svg/QodeSvgI7110350409542562960"
import QodeSvgI7110555409542562960 from "@designSystem/icon/svg/QodeSvgI7110555409542562960"
import QodeSvgI7110889409542562960 from "@designSystem/icon/svg/QodeSvgI7110889409542562960"
import QodeSvgI7110557409542562960 from "@designSystem/icon/svg/QodeSvgI7110557409542562960"
import QodeSvgI7110558409542562960 from "@designSystem/icon/svg/QodeSvgI7110558409542562960"
import QodeSvgI7110559409542562960 from "@designSystem/icon/svg/QodeSvgI7110559409542562960"
import QodeSvgI43430031409555562960 from "@designSystem/icon/svg/QodeSvgI43430031409555562960"
import QodeSvgI43430032409542562960 from "@designSystem/icon/svg/QodeSvgI43430032409542562960"
import QodeSvgI43430033409542562960 from "@designSystem/icon/svg/QodeSvgI43430033409542562960"

export interface QodeCustom43430029Props {
  property_1?: "Default" | "Variant2"
}

export const QodeCustom43430029: React.FC<
  QodeCustom43430029Props & { style?: CSSProperties }
> = ({ property_1 = "Default", ...rest }) => {
  return (
    <>
      {/* name="List | Profile" id="434:30029" type="COMPONENT_SET" */}
      {/* id="71:10910" */}
      {`${property_1}` === `Default` && (
        <>
          {/* name="Property 1=Default" id="71:10910" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "353px",
              flexDirection: "column",
              alignItems: "center",
              background: "#FFF",
            }}
          >
            {/* name="Profile/List item" id="71:10346" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                padding: "12px 16px",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "12px",
                alignSelf: "stretch",
                borderBottom:
                  "2px solid var(--border-border-primary-20, #158de2)",
                background: "#F6FBFF",
              }}
            >
              {/* name="Header" id="I71:10346;40:9554" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--font-size-base, 14px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name="avatar" id="I71:10346;40:9555" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "36px",
                    height: "36px",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--font-size-large, 16px)",
                    borderRadius: "499.5px",
                    background:
                      "var(--color-success-colorsuccesshover, #a3c73e)",
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
                  {/* name="user-large" id="I71:10346;40:9555;5629:57" type="INSTANCE" */}
                  <Icon.QodeUserLarge
                    style={{
                      display: "flex",
                      width: "18px",
                      height: "18px",
                      padding: "1.8px",
                      justifyContent: "center",
                      alignItems: "center",
                      position: "absolute",
                      left: "9px",
                      top: "9px",
                    }}
                    {...{}}
                  />
                  {/* name="img" id="I71:10346;40:9555;5629:58" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      width: "36px",
                      height: "36px",
                      padding: "var(--size-padding-paddingxs, 8px)",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "9px",
                      position: "absolute",
                      borderRadius: "499.5px",
                      background:
                        "url(<path-to-image>) lightgray 50% / cover no-repeat, url(<path-to-image>) lightgray 50% / cover no-repeat",
                    }}
                  >
                    {/* name="img" id=I71:10346;40:9555;5629:58 type=FRAME */}
                    <></>
                  </div>
                  {/* name="Badge" id="I71:10346;40:9555;5629:59" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "6.75px",
                      height: "6.75px",
                      justifyContent: "center",
                      alignItems: "center",
                      position: "absolute",
                      right: "1.125px",
                      bottom: "1.125px",
                      borderRadius: "4px",
                      border:
                        "1.125px solid var(--color-neutral-background-colorbgcontainer, #fff)",
                      background: "var(--color-error-colorerror, #ff6542)",
                    }}
                  >
                    {/* name="Badge" id=I71:10346;40:9555;5629:59 type=INSTANCE */}
                    <></>
                  </Flex>
                  {/* name="opentoWork" id="I71:10346;40:9555;5629:60" type="FRAME" */}
                  <QodeSvgI7110346409555562960
                    style={{
                      width: "36px",
                      height: "36px",
                      position: "absolute",
                    }}
                    {...{}}
                  />
                </Flex>
                {/* name="Frame 37215" id="I71:10346;40:9556" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "4px",
                    flex: "1 0 0",
                  }}
                >
                  {/* name="wrap" id="I71:10346;500:27456" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      alignContent: "flex-start",
                      gap: "8px",
                      alignSelf: "stretch",
                      flexWrap: "wrap",
                    }}
                  >
                    <span
                      style={{
                        maxHeight: "44px",
                        color: "var(--text-text-neutral-40, #464646)",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-heading6, 16px)",
                        fontStyle: "normal",
                        fontWeight: "600",
                        lineHeight:
                          "var(--lineheight-lineheight-h6, 22px) /* 137.5% */",
                      }}
                    >{`Nguyen Quoc Thai`}</span>
                    {/* name="YoE" id="I71:10346;500:27458" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding: "2px 7px",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "10px",
                        borderRadius: "12px",
                        background: "var(--neutral-gray-10, #e3e3e3)",
                      }}
                    >
                      <span
                        style={{
                          color: "var(--text-text-neutral-50, #1d1d1d)",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-small, 12px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                        }}
                      >{`12 YoE`}</span>
                    </div>
                  </div>
                  <span
                    style={{
                      maxHeight: "40px",
                      alignSelf: "stretch",
                      color: "var(--text-text-neutral-40, #464646)",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    }}
                  >{`Senior Software Developer at The Chemico Vietnam Co., Ltd.`}</span>
                  {/* name="Location" id="I71:10346;69:9009" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    {/* name="location-dot" id="I71:10346;69:9010" type="INSTANCE" */}
                    <Icon.QodeLocationDot
                      style={{ width: "16px", height: "16px" }}
                      {...{}}
                    />
                    <span
                      style={{
                        color: "var(--text-text-neutral-40, #464646)",
                        textAlign: "center",
                        fontFamily:
                          'var(--font-family-fontfamily, "sf pro display")',
                        fontSize: "var(--font-size-base, 14px)",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight:
                          "var(--line-height-lineheight, 20px) /* 142.857% */",
                      }}
                    >{`Ho Chi Minh city, Vietnam`}</span>
                  </div>
                </div>
              </div>
            </Flex>
            {/* name="Profile/List item" id="71:10347" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                padding: "12px 16px",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "12px",
                alignSelf: "stretch",
                borderBottom:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
                background: "var(--background-bg-white, #fff)",
              }}
            >
              {/* name="Header" id="I71:10347;40:9541" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--font-size-base, 14px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name="avatar" id="I71:10347;40:9542" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "36px",
                    height: "36px",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--font-size-large, 16px)",
                    borderRadius: "499.5px",
                    background:
                      "var(--color-success-colorsuccesshover, #a3c73e)",
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
                  {/* name="user-large" id="I71:10347;40:9542;5629:57" type="INSTANCE" */}
                  <Icon.QodeUserLarge
                    style={{
                      display: "flex",
                      width: "18px",
                      height: "18px",
                      padding: "1.8px",
                      justifyContent: "center",
                      alignItems: "center",
                      position: "absolute",
                      left: "9px",
                      top: "9px",
                    }}
                    {...{}}
                  />
                  {/* name="img" id="I71:10347;40:9542;5629:58" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      width: "36px",
                      height: "36px",
                      padding: "var(--size-padding-paddingxs, 8px)",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "9px",
                      position: "absolute",
                      borderRadius: "499.5px",
                      background:
                        "url(<path-to-image>) lightgray 50% / cover no-repeat",
                    }}
                  >
                    {/* name="img" id=I71:10347;40:9542;5629:58 type=FRAME */}
                    <></>
                  </div>
                  {/* name="Badge" id="I71:10347;40:9542;5629:59" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "6.75px",
                      height: "6.75px",
                      justifyContent: "center",
                      alignItems: "center",
                      position: "absolute",
                      right: "1.125px",
                      bottom: "1.125px",
                      borderRadius: "4px",
                      border:
                        "1.125px solid var(--color-neutral-background-colorbgcontainer, #fff)",
                      background: "var(--color-error-colorerror, #ff6542)",
                    }}
                  >
                    {/* name="Badge" id=I71:10347;40:9542;5629:59 type=INSTANCE */}
                    <></>
                  </Flex>
                  {/* name="opentoWork" id="I71:10347;40:9542;5629:60" type="FRAME" */}
                  <QodeSvgI7110347409542562960
                    style={{
                      width: "36px",
                      height: "36px",
                      position: "absolute",
                    }}
                    {...{}}
                  />
                </Flex>
                {/* name="Content" id="I71:10347;40:9582" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "4px",
                    flex: "1 0 0",
                  }}
                >
                  {/* name="wrap" id="I71:10347;40:9583" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      alignContent: "flex-start",
                      gap: "8px",
                      alignSelf: "stretch",
                      flexWrap: "wrap",
                    }}
                  >
                    <span
                      style={{
                        maxHeight: "44px",
                        color: "var(--text-text-neutral-40, #464646)",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-heading6, 16px)",
                        fontStyle: "normal",
                        fontWeight: "600",
                        lineHeight:
                          "var(--lineheight-lineheight-h6, 22px) /* 137.5% */",
                      }}
                    >{`Nguyen Thi Tuyet Trang`}</span>
                    {/* name="YoE" id="I71:10347;40:9585" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding: "2px 7px",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "10px",
                        borderRadius: "12px",
                        background: "var(--neutral-gray-10, #e3e3e3)",
                      }}
                    >
                      <span
                        style={{
                          color: "var(--text-text-neutral-50, #1d1d1d)",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-small, 12px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                        }}
                      >{`4 YoE`}</span>
                    </div>
                  </div>
                  <span
                    style={{
                      maxHeight: "40px",
                      alignSelf: "stretch",
                      color: "var(--text-text-neutral-40, #464646)",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    }}
                  >{`Senior Fullstack Engineer at Pinnacle Strategic Consulting`}</span>
                  {/* name="Location" id="I71:10347;40:9588" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    {/* name="location-dot" id="I71:10347;69:8839" type="INSTANCE" */}
                    <Icon.QodeLocationDot
                      style={{ width: "16px", height: "16px" }}
                      {...{}}
                    />
                    <span
                      style={{
                        color: "var(--text-text-neutral-40, #464646)",
                        textAlign: "center",
                        fontFamily:
                          'var(--font-family-fontfamily, "sf pro display")',
                        fontSize: "var(--font-size-base, 14px)",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight:
                          "var(--line-height-lineheight, 20px) /* 142.857% */",
                      }}
                    >{`Thu Duc, Vietnam`}</span>
                  </div>
                </div>
              </div>
              {/* name="eye" id="I71:10347;71:9955" type="INSTANCE" */}
              <Icon.QodeEye
                style={{
                  display: "flex",
                  width: "12px",
                  height: "12px",
                  padding: "1.8px 0.599px 1.8px 0.6px",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  left: "28px",
                  bottom: "46px",
                }}
                {...{}}
              />
            </Flex>
            {/* name="Profile/List item" id="71:10348" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                padding: "12px 16px",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "12px",
                alignSelf: "stretch",
                borderBottom:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
                background: "var(--background-bg-white, #fff)",
              }}
            >
              {/* name="Header" id="I71:10348;40:9541" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--font-size-base, 14px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name="avatar" id="I71:10348;40:9542" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "36px",
                    height: "36px",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--font-size-large, 16px)",
                    borderRadius: "499.5px",
                    background:
                      "var(--color-success-colorsuccesshover, #a3c73e)",
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
                  {/* name="user-large" id="I71:10348;40:9542;5629:57" type="INSTANCE" */}
                  <Icon.QodeUserLarge
                    style={{
                      display: "flex",
                      width: "18px",
                      height: "18px",
                      padding: "1.8px",
                      justifyContent: "center",
                      alignItems: "center",
                      position: "absolute",
                      left: "9px",
                      top: "9px",
                    }}
                    {...{}}
                  />
                  {/* name="img" id="I71:10348;40:9542;5629:58" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      width: "36px",
                      height: "36px",
                      padding: "var(--size-padding-paddingxs, 8px)",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "9px",
                      position: "absolute",
                      borderRadius: "499.5px",
                      background:
                        "url(<path-to-image>) lightgray 50% / cover no-repeat",
                    }}
                  >
                    {/* name="img" id=I71:10348;40:9542;5629:58 type=FRAME */}
                    <></>
                  </div>
                  {/* name="Badge" id="I71:10348;40:9542;5629:59" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "6.75px",
                      height: "6.75px",
                      justifyContent: "center",
                      alignItems: "center",
                      position: "absolute",
                      right: "1.125px",
                      bottom: "1.125px",
                      borderRadius: "4px",
                      border:
                        "1.125px solid var(--color-neutral-background-colorbgcontainer, #fff)",
                      background: "var(--color-error-colorerror, #ff6542)",
                    }}
                  >
                    {/* name="Badge" id=I71:10348;40:9542;5629:59 type=INSTANCE */}
                    <></>
                  </Flex>
                  {/* name="opentoWork" id="I71:10348;40:9542;5629:60" type="FRAME" */}
                  <QodeSvgI7110348409542562960
                    style={{
                      width: "36px",
                      height: "36px",
                      position: "absolute",
                    }}
                    {...{}}
                  />
                </Flex>
                {/* name="Content" id="I71:10348;40:9582" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "4px",
                    flex: "1 0 0",
                  }}
                >
                  {/* name="wrap" id="I71:10348;40:9583" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      alignContent: "flex-start",
                      gap: "8px",
                      alignSelf: "stretch",
                      flexWrap: "wrap",
                    }}
                  >
                    <span
                      style={{
                        maxHeight: "44px",
                        color: "var(--text-text-neutral-40, #464646)",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-heading6, 16px)",
                        fontStyle: "normal",
                        fontWeight: "600",
                        lineHeight:
                          "var(--lineheight-lineheight-h6, 22px) /* 137.5% */",
                      }}
                    >{`Dang Thanh An`}</span>
                    {/* name="YoE" id="I71:10348;40:9585" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding: "2px 7px",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "10px",
                        borderRadius: "12px",
                        background: "var(--neutral-gray-10, #e3e3e3)",
                      }}
                    >
                      <span
                        style={{
                          color: "var(--text-text-neutral-50, #1d1d1d)",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-small, 12px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                        }}
                      >{`7 YoE`}</span>
                    </div>
                  </div>
                  <span
                    style={{
                      maxHeight: "40px",
                      alignSelf: "stretch",
                      color: "var(--text-text-neutral-40, #464646)",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    }}
                  >{`Senior Software Developer at Superbank`}</span>
                  {/* name="Location" id="I71:10348;40:9588" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    {/* name="location-dot" id="I71:10348;69:8839" type="INSTANCE" */}
                    <Icon.QodeLocationDot
                      style={{ width: "16px", height: "16px" }}
                      {...{}}
                    />
                    <span
                      style={{
                        color: "var(--text-text-neutral-40, #464646)",
                        textAlign: "center",
                        fontFamily:
                          'var(--font-family-fontfamily, "sf pro display")',
                        fontSize: "var(--font-size-base, 14px)",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight:
                          "var(--line-height-lineheight, 20px) /* 142.857% */",
                      }}
                    >{`Ho Chi Minh city, Vietnam`}</span>
                  </div>
                </div>
              </div>
              {/* name="eye" id="I71:10348;71:9955" type="INSTANCE" */}
              <Icon.QodeEye
                style={{
                  display: "flex",
                  width: "12px",
                  height: "12px",
                  padding: "1.8px 0.599px 1.8px 0.6px",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  left: "28px",
                  bottom: "26px",
                }}
                {...{}}
              />
            </Flex>
            {/* name="Profile/List item" id="71:10349" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                padding: "12px 16px",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "12px",
                alignSelf: "stretch",
                borderBottom:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
                background: "var(--background-bg-white, #fff)",
              }}
            >
              {/* name="Header" id="I71:10349;40:9541" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--font-size-base, 14px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name="avatar" id="I71:10349;40:9542" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "36px",
                    height: "36px",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--font-size-large, 16px)",
                    borderRadius: "499.5px",
                    background:
                      "var(--color-success-colorsuccesshover, #a3c73e)",
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
                  {/* name="user-large" id="I71:10349;40:9542;5629:57" type="INSTANCE" */}
                  <Icon.QodeUserLarge
                    style={{
                      display: "flex",
                      width: "18px",
                      height: "18px",
                      padding: "1.8px",
                      justifyContent: "center",
                      alignItems: "center",
                      position: "absolute",
                      left: "9px",
                      top: "9px",
                    }}
                    {...{}}
                  />
                  {/* name="img" id="I71:10349;40:9542;5629:58" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      width: "36px",
                      height: "36px",
                      padding: "var(--size-padding-paddingxs, 8px)",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "9px",
                      position: "absolute",
                      borderRadius: "499.5px",
                      background:
                        "url(<path-to-image>) lightgray 50% / cover no-repeat",
                    }}
                  >
                    {/* name="img" id=I71:10349;40:9542;5629:58 type=FRAME */}
                    <></>
                  </div>
                  {/* name="Badge" id="I71:10349;40:9542;5629:59" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "6.75px",
                      height: "6.75px",
                      justifyContent: "center",
                      alignItems: "center",
                      position: "absolute",
                      right: "1.125px",
                      bottom: "1.125px",
                      borderRadius: "4px",
                      border:
                        "1.125px solid var(--color-neutral-background-colorbgcontainer, #fff)",
                      background: "var(--color-error-colorerror, #ff6542)",
                    }}
                  >
                    {/* name="Badge" id=I71:10349;40:9542;5629:59 type=INSTANCE */}
                    <></>
                  </Flex>
                  {/* name="opentoWork" id="I71:10349;40:9542;5629:60" type="FRAME" */}
                  <QodeSvgI7110349409542562960
                    style={{
                      width: "36px",
                      height: "36px",
                      position: "absolute",
                    }}
                    {...{}}
                  />
                </Flex>
                {/* name="Content" id="I71:10349;40:9582" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "4px",
                    flex: "1 0 0",
                  }}
                >
                  {/* name="wrap" id="I71:10349;40:9583" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      alignContent: "flex-start",
                      gap: "8px",
                      alignSelf: "stretch",
                      flexWrap: "wrap",
                    }}
                  >
                    <span
                      style={{
                        maxHeight: "44px",
                        color: "var(--text-text-neutral-40, #464646)",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-heading6, 16px)",
                        fontStyle: "normal",
                        fontWeight: "600",
                        lineHeight:
                          "var(--lineheight-lineheight-h6, 22px) /* 137.5% */",
                      }}
                    >{`Jennifer Truong`}</span>
                    {/* name="YoE" id="I71:10349;40:9585" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding: "2px 7px",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "10px",
                        borderRadius: "12px",
                        background: "var(--neutral-gray-10, #e3e3e3)",
                      }}
                    >
                      <span
                        style={{
                          color: "var(--text-text-neutral-50, #1d1d1d)",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-small, 12px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                        }}
                      >{`5 YoE`}</span>
                    </div>
                  </div>
                  <span
                    style={{
                      maxHeight: "40px",
                      alignSelf: "stretch",
                      color: "var(--text-text-neutral-40, #464646)",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    }}
                  >{`Fullstack developer at The Synthesis`}</span>
                  {/* name="Location" id="I71:10349;40:9588" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    {/* name="location-dot" id="I71:10349;69:8839" type="INSTANCE" */}
                    <Icon.QodeLocationDot
                      style={{ width: "16px", height: "16px" }}
                      {...{}}
                    />
                    <span
                      style={{
                        color: "var(--text-text-neutral-40, #464646)",
                        textAlign: "center",
                        fontFamily:
                          'var(--font-family-fontfamily, "sf pro display")',
                        fontSize: "var(--font-size-base, 14px)",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight:
                          "var(--line-height-lineheight, 20px) /* 142.857% */",
                      }}
                    >{`Bien Hoa, Vietnam`}</span>
                  </div>
                </div>
              </div>
              {/* name="eye" id="I71:10349;71:9955" type="INSTANCE" */}
              <Icon.QodeEye
                style={{
                  display: "flex",
                  width: "12px",
                  height: "12px",
                  padding: "1.8px 0.599px 1.8px 0.6px",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  left: "28px",
                  bottom: "26px",
                }}
                {...{}}
              />
            </Flex>
            {/* name="Profile/List item" id="71:10350" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                padding: "12px 16px",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "12px",
                alignSelf: "stretch",
                borderBottom:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
                background: "var(--background-bg-white, #fff)",
              }}
            >
              {/* name="Header" id="I71:10350;40:9541" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--font-size-base, 14px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name="avatar" id="I71:10350;40:9542" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "36px",
                    height: "36px",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--font-size-large, 16px)",
                    borderRadius: "499.5px",
                    background:
                      "var(--color-success-colorsuccesshover, #a3c73e)",
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
                  {/* name="user-large" id="I71:10350;40:9542;5629:57" type="INSTANCE" */}
                  <Icon.QodeUserLarge
                    style={{
                      display: "flex",
                      width: "18px",
                      height: "18px",
                      padding: "1.8px",
                      justifyContent: "center",
                      alignItems: "center",
                      position: "absolute",
                      left: "9px",
                      top: "9px",
                    }}
                    {...{}}
                  />
                  {/* name="img" id="I71:10350;40:9542;5629:58" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      width: "36px",
                      height: "36px",
                      padding: "var(--size-padding-paddingxs, 8px)",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "9px",
                      position: "absolute",
                      borderRadius: "499.5px",
                      background:
                        "url(<path-to-image>) lightgray 50% / cover no-repeat",
                    }}
                  >
                    {/* name="img" id=I71:10350;40:9542;5629:58 type=FRAME */}
                    <></>
                  </div>
                  {/* name="Badge" id="I71:10350;40:9542;5629:59" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "6.75px",
                      height: "6.75px",
                      justifyContent: "center",
                      alignItems: "center",
                      position: "absolute",
                      right: "1.125px",
                      bottom: "1.125px",
                      borderRadius: "4px",
                      border:
                        "1.125px solid var(--color-neutral-background-colorbgcontainer, #fff)",
                      background: "var(--color-error-colorerror, #ff6542)",
                    }}
                  >
                    {/* name="Badge" id=I71:10350;40:9542;5629:59 type=INSTANCE */}
                    <></>
                  </Flex>
                  {/* name="opentoWork" id="I71:10350;40:9542;5629:60" type="FRAME" */}
                  <QodeSvgI7110350409542562960
                    style={{
                      width: "36px",
                      height: "36px",
                      position: "absolute",
                    }}
                    {...{}}
                  />
                </Flex>
                {/* name="Content" id="I71:10350;40:9582" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "4px",
                    flex: "1 0 0",
                  }}
                >
                  {/* name="wrap" id="I71:10350;40:9583" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      alignContent: "flex-start",
                      gap: "8px",
                      alignSelf: "stretch",
                      flexWrap: "wrap",
                    }}
                  >
                    <span
                      style={{
                        maxHeight: "44px",
                        color: "var(--text-text-neutral-40, #464646)",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-heading6, 16px)",
                        fontStyle: "normal",
                        fontWeight: "600",
                        lineHeight:
                          "var(--lineheight-lineheight-h6, 22px) /* 137.5% */",
                      }}
                    >{`Alexander James Monroe`}</span>
                    {/* name="YoE" id="I71:10350;40:9585" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding: "2px 7px",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "10px",
                        borderRadius: "12px",
                        background: "var(--neutral-gray-10, #e3e3e3)",
                      }}
                    >
                      <span
                        style={{
                          color: "var(--text-text-neutral-50, #1d1d1d)",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-small, 12px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                        }}
                      >{`10 YoE`}</span>
                    </div>
                  </div>
                  <span
                    style={{
                      maxHeight: "40px",
                      alignSelf: "stretch",
                      color: "var(--text-text-neutral-40, #464646)",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    }}
                  >{`Senior Fullstack developer at very long name corporation that could exceed two lines like t...`}</span>
                  {/* name="Location" id="I71:10350;40:9588" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    {/* name="location-dot" id="I71:10350;69:8839" type="INSTANCE" */}
                    <Icon.QodeLocationDot
                      style={{ width: "16px", height: "16px" }}
                      {...{}}
                    />
                    <span
                      style={{
                        color: "var(--text-text-neutral-40, #464646)",
                        textAlign: "center",
                        fontFamily:
                          'var(--font-family-fontfamily, "sf pro display")',
                        fontSize: "var(--font-size-base, 14px)",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight:
                          "var(--line-height-lineheight, 20px) /* 142.857% */",
                      }}
                    >{`Dong Nai, Vietnam`}</span>
                  </div>
                </div>
              </div>
              {/* name="eye" id="I71:10350;71:9955" type="INSTANCE" */}
              <Icon.QodeEye
                style={{
                  display: "flex",
                  width: "12px",
                  height: "12px",
                  padding: "1.8px 0.599px 1.8px 0.6px",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  left: "28px",
                  bottom: "46px",
                }}
                {...{}}
              />
            </Flex>
            {/* name="Profile/List item" id="71:10555" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                padding: "12px 16px",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "12px",
                alignSelf: "stretch",
                borderBottom:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
                background: "var(--background-bg-white, #fff)",
              }}
            >
              {/* name="Header" id="I71:10555;40:9541" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--font-size-base, 14px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name="avatar" id="I71:10555;40:9542" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "36px",
                    height: "36px",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--font-size-large, 16px)",
                    borderRadius: "499.5px",
                    background:
                      "var(--color-success-colorsuccesshover, #a3c73e)",
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
                  {/* name="user-large" id="I71:10555;40:9542;5629:57" type="INSTANCE" */}
                  <Icon.QodeUserLarge
                    style={{
                      display: "flex",
                      width: "18px",
                      height: "18px",
                      padding: "1.8px",
                      justifyContent: "center",
                      alignItems: "center",
                      position: "absolute",
                      left: "9px",
                      top: "9px",
                    }}
                    {...{}}
                  />
                  {/* name="img" id="I71:10555;40:9542;5629:58" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      width: "36px",
                      height: "36px",
                      padding: "var(--size-padding-paddingxs, 8px)",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "9px",
                      position: "absolute",
                      borderRadius: "499.5px",
                      background:
                        "url(<path-to-image>) lightgray 50% / cover no-repeat, url(<path-to-image>) lightgray 50% / cover no-repeat",
                    }}
                  >
                    {/* name="img" id=I71:10555;40:9542;5629:58 type=FRAME */}
                    <></>
                  </div>
                  {/* name="Badge" id="I71:10555;40:9542;5629:59" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "6.75px",
                      height: "6.75px",
                      justifyContent: "center",
                      alignItems: "center",
                      position: "absolute",
                      right: "1.125px",
                      bottom: "1.125px",
                      borderRadius: "4px",
                      border:
                        "1.125px solid var(--color-neutral-background-colorbgcontainer, #fff)",
                      background: "var(--color-error-colorerror, #ff6542)",
                    }}
                  >
                    {/* name="Badge" id=I71:10555;40:9542;5629:59 type=INSTANCE */}
                    <></>
                  </Flex>
                  {/* name="opentoWork" id="I71:10555;40:9542;5629:60" type="FRAME" */}
                  <QodeSvgI7110555409542562960
                    style={{
                      width: "36px",
                      height: "36px",
                      position: "absolute",
                    }}
                    {...{}}
                  />
                </Flex>
                {/* name="Content" id="I71:10555;40:9582" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "4px",
                    flex: "1 0 0",
                  }}
                >
                  {/* name="wrap" id="I71:10555;40:9583" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      alignContent: "flex-start",
                      gap: "8px",
                      alignSelf: "stretch",
                      flexWrap: "wrap",
                    }}
                  >
                    <span
                      style={{
                        maxHeight: "44px",
                        color: "var(--text-text-neutral-40, #464646)",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-heading6, 16px)",
                        fontStyle: "normal",
                        fontWeight: "600",
                        lineHeight:
                          "var(--lineheight-lineheight-h6, 22px) /* 137.5% */",
                      }}
                    >{`Nguyen Quoc Thai`}</span>
                    {/* name="YoE" id="I71:10555;40:9585" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding: "2px 7px",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "10px",
                        borderRadius: "12px",
                        background: "var(--neutral-gray-10, #e3e3e3)",
                      }}
                    >
                      <span
                        style={{
                          color: "var(--text-text-neutral-50, #1d1d1d)",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-small, 12px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                        }}
                      >{`12 YoE`}</span>
                    </div>
                  </div>
                  <span
                    style={{
                      maxHeight: "40px",
                      alignSelf: "stretch",
                      color: "var(--text-text-neutral-40, #464646)",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    }}
                  >{`Senior Software Developer at The Chemico Vietnam Co., Ltd.`}</span>
                  {/* name="Location" id="I71:10555;40:9588" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    {/* name="location-dot" id="I71:10555;69:8839" type="INSTANCE" */}
                    <Icon.QodeLocationDot
                      style={{ width: "16px", height: "16px" }}
                      {...{}}
                    />
                    <span
                      style={{
                        color: "var(--text-text-neutral-40, #464646)",
                        textAlign: "center",
                        fontFamily:
                          'var(--font-family-fontfamily, "sf pro display")',
                        fontSize: "var(--font-size-base, 14px)",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight:
                          "var(--line-height-lineheight, 20px) /* 142.857% */",
                      }}
                    >{`Ho Chi Minh city, Vietnam`}</span>
                  </div>
                </div>
              </div>
              {/* name="eye" id="I71:10555;71:9955" type="INSTANCE" */}
              <Icon.QodeEye
                style={{
                  display: "flex",
                  width: "12px",
                  height: "12px",
                  padding: "1.8px 0.599px 1.8px 0.6px",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  left: "28px",
                  bottom: "46px",
                }}
                {...{}}
              />
            </Flex>
            {/* name="Profile/List item" id="71:10889" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                padding: "12px 16px",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "12px",
                alignSelf: "stretch",
                borderBottom:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
                background: "var(--background-bg-white, #fff)",
              }}
            >
              {/* name="Header" id="I71:10889;40:9541" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--font-size-base, 14px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name="avatar" id="I71:10889;40:9542" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "36px",
                    height: "36px",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--font-size-large, 16px)",
                    borderRadius: "499.5px",
                    background:
                      "var(--color-success-colorsuccesshover, #a3c73e)",
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
                  {/* name="user-large" id="I71:10889;40:9542;5629:57" type="INSTANCE" */}
                  <Icon.QodeUserLarge
                    style={{
                      display: "flex",
                      width: "18px",
                      height: "18px",
                      padding: "1.8px",
                      justifyContent: "center",
                      alignItems: "center",
                      position: "absolute",
                      left: "9px",
                      top: "9px",
                    }}
                    {...{}}
                  />
                  {/* name="img" id="I71:10889;40:9542;5629:58" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      width: "36px",
                      height: "36px",
                      padding: "var(--size-padding-paddingxs, 8px)",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "9px",
                      position: "absolute",
                      borderRadius: "499.5px",
                      background:
                        "url(<path-to-image>) lightgray 50% / cover no-repeat, url(<path-to-image>) lightgray 50% / cover no-repeat, url(<path-to-image>) lightgray 50% / cover no-repeat",
                    }}
                  >
                    {/* name="img" id=I71:10889;40:9542;5629:58 type=FRAME */}
                    <></>
                  </div>
                  {/* name="Badge" id="I71:10889;40:9542;5629:59" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "6.75px",
                      height: "6.75px",
                      justifyContent: "center",
                      alignItems: "center",
                      position: "absolute",
                      right: "1.125px",
                      bottom: "1.125px",
                      borderRadius: "4px",
                      border:
                        "1.125px solid var(--color-neutral-background-colorbgcontainer, #fff)",
                      background: "var(--color-error-colorerror, #ff6542)",
                    }}
                  >
                    {/* name="Badge" id=I71:10889;40:9542;5629:59 type=INSTANCE */}
                    <></>
                  </Flex>
                  {/* name="opentoWork" id="I71:10889;40:9542;5629:60" type="FRAME" */}
                  <QodeSvgI7110889409542562960
                    style={{
                      width: "36px",
                      height: "36px",
                      position: "absolute",
                    }}
                    {...{}}
                  />
                </Flex>
                {/* name="Content" id="I71:10889;40:9582" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "4px",
                    flex: "1 0 0",
                  }}
                >
                  {/* name="wrap" id="I71:10889;40:9583" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      alignContent: "flex-start",
                      gap: "8px",
                      alignSelf: "stretch",
                      flexWrap: "wrap",
                    }}
                  >
                    <span
                      style={{
                        maxHeight: "44px",
                        color: "var(--text-text-neutral-40, #464646)",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-heading6, 16px)",
                        fontStyle: "normal",
                        fontWeight: "600",
                        lineHeight:
                          "var(--lineheight-lineheight-h6, 22px) /* 137.5% */",
                      }}
                    >{`Nguyen Thi Tuyet Trang`}</span>
                    {/* name="YoE" id="I71:10889;40:9585" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding: "2px 7px",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "10px",
                        borderRadius: "12px",
                        background: "var(--neutral-gray-10, #e3e3e3)",
                      }}
                    >
                      <span
                        style={{
                          color: "var(--text-text-neutral-50, #1d1d1d)",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-small, 12px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                        }}
                      >{`4 YoE`}</span>
                    </div>
                  </div>
                  <span
                    style={{
                      maxHeight: "40px",
                      alignSelf: "stretch",
                      color: "var(--text-text-neutral-40, #464646)",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    }}
                  >{`Senior Fullstack Engineer at Pinnacle Strategic Consulting`}</span>
                  {/* name="Location" id="I71:10889;40:9588" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    {/* name="location-dot" id="I71:10889;69:8839" type="INSTANCE" */}
                    <Icon.QodeLocationDot
                      style={{ width: "16px", height: "16px" }}
                      {...{}}
                    />
                    <span
                      style={{
                        color: "var(--text-text-neutral-40, #464646)",
                        textAlign: "center",
                        fontFamily:
                          'var(--font-family-fontfamily, "sf pro display")',
                        fontSize: "var(--font-size-base, 14px)",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight:
                          "var(--line-height-lineheight, 20px) /* 142.857% */",
                      }}
                    >{`Thu Duc, Vietnam`}</span>
                  </div>
                </div>
              </div>
              {/* name="eye" id="I71:10889;71:9955" type="INSTANCE" */}
              <Icon.QodeEye
                style={{
                  display: "flex",
                  width: "12px",
                  height: "12px",
                  padding: "1.8px 0.599px 1.8px 0.6px",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  left: "28px",
                  bottom: "46px",
                }}
                {...{}}
              />
            </Flex>
            {/* name="Profile/List item" id="71:10557" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                padding: "12px 16px",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "12px",
                alignSelf: "stretch",
                borderBottom:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
                background: "var(--background-bg-white, #fff)",
              }}
            >
              {/* name="Header" id="I71:10557;40:9541" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--font-size-base, 14px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name="avatar" id="I71:10557;40:9542" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "36px",
                    height: "36px",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--font-size-large, 16px)",
                    borderRadius: "499.5px",
                    background:
                      "var(--color-success-colorsuccesshover, #a3c73e)",
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
                  {/* name="user-large" id="I71:10557;40:9542;5629:57" type="INSTANCE" */}
                  <Icon.QodeUserLarge
                    style={{
                      display: "flex",
                      width: "18px",
                      height: "18px",
                      padding: "1.8px",
                      justifyContent: "center",
                      alignItems: "center",
                      position: "absolute",
                      left: "9px",
                      top: "9px",
                    }}
                    {...{}}
                  />
                  {/* name="img" id="I71:10557;40:9542;5629:58" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      width: "36px",
                      height: "36px",
                      padding: "var(--size-padding-paddingxs, 8px)",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "9px",
                      position: "absolute",
                      borderRadius: "499.5px",
                      background:
                        "url(<path-to-image>) lightgray 50% / cover no-repeat, url(<path-to-image>) lightgray 50% / cover no-repeat, url(<path-to-image>) lightgray 50% / cover no-repeat",
                    }}
                  >
                    {/* name="img" id=I71:10557;40:9542;5629:58 type=FRAME */}
                    <></>
                  </div>
                  {/* name="Badge" id="I71:10557;40:9542;5629:59" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "6.75px",
                      height: "6.75px",
                      justifyContent: "center",
                      alignItems: "center",
                      position: "absolute",
                      right: "1.125px",
                      bottom: "1.125px",
                      borderRadius: "4px",
                      border:
                        "1.125px solid var(--color-neutral-background-colorbgcontainer, #fff)",
                      background: "var(--color-error-colorerror, #ff6542)",
                    }}
                  >
                    {/* name="Badge" id=I71:10557;40:9542;5629:59 type=INSTANCE */}
                    <></>
                  </Flex>
                  {/* name="opentoWork" id="I71:10557;40:9542;5629:60" type="FRAME" */}
                  <QodeSvgI7110557409542562960
                    style={{
                      width: "36px",
                      height: "36px",
                      position: "absolute",
                    }}
                    {...{}}
                  />
                </Flex>
                {/* name="Content" id="I71:10557;40:9582" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "4px",
                    flex: "1 0 0",
                  }}
                >
                  {/* name="wrap" id="I71:10557;40:9583" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      alignContent: "flex-start",
                      gap: "8px",
                      alignSelf: "stretch",
                      flexWrap: "wrap",
                    }}
                  >
                    <span
                      style={{
                        maxHeight: "44px",
                        color: "var(--text-text-neutral-40, #464646)",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-heading6, 16px)",
                        fontStyle: "normal",
                        fontWeight: "600",
                        lineHeight:
                          "var(--lineheight-lineheight-h6, 22px) /* 137.5% */",
                      }}
                    >{`Dang Thanh An`}</span>
                    {/* name="YoE" id="I71:10557;40:9585" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding: "2px 7px",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "10px",
                        borderRadius: "12px",
                        background: "var(--neutral-gray-10, #e3e3e3)",
                      }}
                    >
                      <span
                        style={{
                          color: "var(--text-text-neutral-50, #1d1d1d)",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-small, 12px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                        }}
                      >{`7 YoE`}</span>
                    </div>
                  </div>
                  <span
                    style={{
                      maxHeight: "40px",
                      alignSelf: "stretch",
                      color: "var(--text-text-neutral-40, #464646)",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    }}
                  >{`Senior Software Developer at Superbank`}</span>
                  {/* name="Location" id="I71:10557;40:9588" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    {/* name="location-dot" id="I71:10557;69:8839" type="INSTANCE" */}
                    <Icon.QodeLocationDot
                      style={{ width: "16px", height: "16px" }}
                      {...{}}
                    />
                    <span
                      style={{
                        color: "var(--text-text-neutral-40, #464646)",
                        textAlign: "center",
                        fontFamily:
                          'var(--font-family-fontfamily, "sf pro display")',
                        fontSize: "var(--font-size-base, 14px)",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight:
                          "var(--line-height-lineheight, 20px) /* 142.857% */",
                      }}
                    >{`Ho Chi Minh city, Vietnam`}</span>
                  </div>
                </div>
              </div>
              {/* name="eye" id="I71:10557;71:9955" type="INSTANCE" */}
              <Icon.QodeEye
                style={{
                  display: "flex",
                  width: "12px",
                  height: "12px",
                  padding: "1.8px 0.599px 1.8px 0.6px",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  left: "28px",
                  bottom: "26px",
                }}
                {...{}}
              />
            </Flex>
            {/* name="Profile/List item" id="71:10558" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                padding: "12px 16px",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "12px",
                alignSelf: "stretch",
                borderBottom:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
                background: "var(--background-bg-white, #fff)",
              }}
            >
              {/* name="Header" id="I71:10558;40:9541" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--font-size-base, 14px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name="avatar" id="I71:10558;40:9542" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "36px",
                    height: "36px",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--font-size-large, 16px)",
                    borderRadius: "499.5px",
                    background:
                      "var(--color-success-colorsuccesshover, #a3c73e)",
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
                  {/* name="user-large" id="I71:10558;40:9542;5629:57" type="INSTANCE" */}
                  <Icon.QodeUserLarge
                    style={{
                      display: "flex",
                      width: "18px",
                      height: "18px",
                      padding: "1.8px",
                      justifyContent: "center",
                      alignItems: "center",
                      position: "absolute",
                      left: "9px",
                      top: "9px",
                    }}
                    {...{}}
                  />
                  {/* name="img" id="I71:10558;40:9542;5629:58" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      width: "36px",
                      height: "36px",
                      padding: "var(--size-padding-paddingxs, 8px)",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "9px",
                      position: "absolute",
                      borderRadius: "499.5px",
                      background:
                        "url(<path-to-image>) lightgray 50% / cover no-repeat, url(<path-to-image>) lightgray 50% / cover no-repeat, url(<path-to-image>) lightgray 50% / cover no-repeat",
                    }}
                  >
                    {/* name="img" id=I71:10558;40:9542;5629:58 type=FRAME */}
                    <></>
                  </div>
                  {/* name="Badge" id="I71:10558;40:9542;5629:59" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "6.75px",
                      height: "6.75px",
                      justifyContent: "center",
                      alignItems: "center",
                      position: "absolute",
                      right: "1.125px",
                      bottom: "1.125px",
                      borderRadius: "4px",
                      border:
                        "1.125px solid var(--color-neutral-background-colorbgcontainer, #fff)",
                      background: "var(--color-error-colorerror, #ff6542)",
                    }}
                  >
                    {/* name="Badge" id=I71:10558;40:9542;5629:59 type=INSTANCE */}
                    <></>
                  </Flex>
                  {/* name="opentoWork" id="I71:10558;40:9542;5629:60" type="FRAME" */}
                  <QodeSvgI7110558409542562960
                    style={{
                      width: "36px",
                      height: "36px",
                      position: "absolute",
                    }}
                    {...{}}
                  />
                </Flex>
                {/* name="Content" id="I71:10558;40:9582" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "4px",
                    flex: "1 0 0",
                  }}
                >
                  {/* name="wrap" id="I71:10558;40:9583" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      alignContent: "flex-start",
                      gap: "8px",
                      alignSelf: "stretch",
                      flexWrap: "wrap",
                    }}
                  >
                    <span
                      style={{
                        maxHeight: "44px",
                        color: "var(--text-text-neutral-40, #464646)",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-heading6, 16px)",
                        fontStyle: "normal",
                        fontWeight: "600",
                        lineHeight:
                          "var(--lineheight-lineheight-h6, 22px) /* 137.5% */",
                      }}
                    >{`Jennifer Truong`}</span>
                    {/* name="YoE" id="I71:10558;40:9585" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding: "2px 7px",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "10px",
                        borderRadius: "12px",
                        background: "var(--neutral-gray-10, #e3e3e3)",
                      }}
                    >
                      <span
                        style={{
                          color: "var(--text-text-neutral-50, #1d1d1d)",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-small, 12px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                        }}
                      >{`5 YoE`}</span>
                    </div>
                  </div>
                  <span
                    style={{
                      maxHeight: "40px",
                      alignSelf: "stretch",
                      color: "var(--text-text-neutral-40, #464646)",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    }}
                  >{`Fullstack developer at The Synthesis`}</span>
                  {/* name="Location" id="I71:10558;40:9588" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    {/* name="location-dot" id="I71:10558;69:8839" type="INSTANCE" */}
                    <Icon.QodeLocationDot
                      style={{ width: "16px", height: "16px" }}
                      {...{}}
                    />
                    <span
                      style={{
                        color: "var(--text-text-neutral-40, #464646)",
                        textAlign: "center",
                        fontFamily:
                          'var(--font-family-fontfamily, "sf pro display")',
                        fontSize: "var(--font-size-base, 14px)",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight:
                          "var(--line-height-lineheight, 20px) /* 142.857% */",
                      }}
                    >{`Bien Hoa, Vietnam`}</span>
                  </div>
                </div>
              </div>
              {/* name="eye" id="I71:10558;71:9955" type="INSTANCE" */}
              <Icon.QodeEye
                style={{
                  display: "flex",
                  width: "12px",
                  height: "12px",
                  padding: "1.8px 0.599px 1.8px 0.6px",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  left: "28px",
                  bottom: "26px",
                }}
                {...{}}
              />
            </Flex>
            {/* name="Profile/List item" id="71:10559" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                padding: "12px 16px",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "12px",
                alignSelf: "stretch",
                borderBottom:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
                background: "var(--background-bg-white, #fff)",
              }}
            >
              {/* name="Header" id="I71:10559;40:9541" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--font-size-base, 14px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name="avatar" id="I71:10559;40:9542" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "36px",
                    height: "36px",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--font-size-large, 16px)",
                    borderRadius: "499.5px",
                    background:
                      "var(--color-success-colorsuccesshover, #a3c73e)",
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
                  {/* name="user-large" id="I71:10559;40:9542;5629:57" type="INSTANCE" */}
                  <Icon.QodeUserLarge
                    style={{
                      display: "flex",
                      width: "18px",
                      height: "18px",
                      padding: "1.8px",
                      justifyContent: "center",
                      alignItems: "center",
                      position: "absolute",
                      left: "9px",
                      top: "9px",
                    }}
                    {...{}}
                  />
                  {/* name="img" id="I71:10559;40:9542;5629:58" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      width: "36px",
                      height: "36px",
                      padding: "var(--size-padding-paddingxs, 8px)",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "9px",
                      position: "absolute",
                      borderRadius: "499.5px",
                      background:
                        "url(<path-to-image>) lightgray 50% / cover no-repeat, url(<path-to-image>) lightgray 50% / cover no-repeat, url(<path-to-image>) lightgray 50% / cover no-repeat",
                    }}
                  >
                    {/* name="img" id=I71:10559;40:9542;5629:58 type=FRAME */}
                    <></>
                  </div>
                  {/* name="Badge" id="I71:10559;40:9542;5629:59" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "6.75px",
                      height: "6.75px",
                      justifyContent: "center",
                      alignItems: "center",
                      position: "absolute",
                      right: "1.125px",
                      bottom: "1.125px",
                      borderRadius: "4px",
                      border:
                        "1.125px solid var(--color-neutral-background-colorbgcontainer, #fff)",
                      background: "var(--color-error-colorerror, #ff6542)",
                    }}
                  >
                    {/* name="Badge" id=I71:10559;40:9542;5629:59 type=INSTANCE */}
                    <></>
                  </Flex>
                  {/* name="opentoWork" id="I71:10559;40:9542;5629:60" type="FRAME" */}
                  <QodeSvgI7110559409542562960
                    style={{
                      width: "36px",
                      height: "36px",
                      position: "absolute",
                    }}
                    {...{}}
                  />
                </Flex>
                {/* name="Content" id="I71:10559;40:9582" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "4px",
                    flex: "1 0 0",
                  }}
                >
                  {/* name="wrap" id="I71:10559;40:9583" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      alignContent: "flex-start",
                      gap: "8px",
                      alignSelf: "stretch",
                      flexWrap: "wrap",
                    }}
                  >
                    <span
                      style={{
                        maxHeight: "44px",
                        color: "var(--text-text-neutral-40, #464646)",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-heading6, 16px)",
                        fontStyle: "normal",
                        fontWeight: "600",
                        lineHeight:
                          "var(--lineheight-lineheight-h6, 22px) /* 137.5% */",
                      }}
                    >{`Alexander James Monroe`}</span>
                    {/* name="YoE" id="I71:10559;40:9585" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding: "2px 7px",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "10px",
                        borderRadius: "12px",
                        background: "var(--neutral-gray-10, #e3e3e3)",
                      }}
                    >
                      <span
                        style={{
                          color: "var(--text-text-neutral-50, #1d1d1d)",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-small, 12px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                        }}
                      >{`10 YoE`}</span>
                    </div>
                  </div>
                  <span
                    style={{
                      maxHeight: "40px",
                      alignSelf: "stretch",
                      color: "var(--text-text-neutral-40, #464646)",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    }}
                  >{`Senior Fullstack developer at very long name corporation that could exceed two lines like t...`}</span>
                  {/* name="Location" id="I71:10559;40:9588" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    {/* name="location-dot" id="I71:10559;69:8839" type="INSTANCE" */}
                    <Icon.QodeLocationDot
                      style={{ width: "16px", height: "16px" }}
                      {...{}}
                    />
                    <span
                      style={{
                        color: "var(--text-text-neutral-40, #464646)",
                        textAlign: "center",
                        fontFamily:
                          'var(--font-family-fontfamily, "sf pro display")',
                        fontSize: "var(--font-size-base, 14px)",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight:
                          "var(--line-height-lineheight, 20px) /* 142.857% */",
                      }}
                    >{`Dong Nai, Vietnam`}</span>
                  </div>
                </div>
              </div>
              {/* name="eye" id="I71:10559;71:9955" type="INSTANCE" */}
              <Icon.QodeEye
                style={{
                  display: "flex",
                  width: "12px",
                  height: "12px",
                  padding: "1.8px 0.599px 1.8px 0.6px",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  left: "28px",
                  bottom: "46px",
                }}
                {...{}}
              />
            </Flex>
            {/* name="Footer" id="71:11438" type="FRAME" */}
            <div
              style={{
                display: "flex",
                padding: "12px 16px",
                justifyContent: "space-between",
                alignItems: "center",
                alignSelf: "stretch",
                borderBottom:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
              }}
            >
              {/* name="Frame 37294" id="73:7669" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "flex-start",
                }}
              >
                <span
                  style={{
                    color: "var(--text-text-neutral-30, #656565)",
                    textAlign: "center",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Page: 1/5`}</span>
              </div>
              {/* name="Pagination" id="71:11991" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  width: "208px",
                  height: "var(--size-height-controlheightsm, 24px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                }}
              >
                {/* name="🧬 left" id="I71:11991;171:27242" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "24px",
                    height: "var(--size-height-controlheightsm, 24px)",
                    padding: "var(--size-padding-paddingxxs, 4px)",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    flexShrink: "0",
                    borderRadius: "var(--style-radius-borderradius, 8px)",
                  }}
                >
                  {/* name="chevron-left" id="I71:11991;171:27242;171:26645" type="INSTANCE" */}
                  <Icon.QodeChevronLeft
                    style={{
                      width: "var(--font-size-base, 14px)",
                      height: "var(--font-size-base, 14px)",
                      flexShrink: "0",
                    }}
                    {...{}}
                  />
                </Flex>
                {/* name="pages" id="I71:11991;2747:12312" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-margin-marginxs, 8px)",
                    flex: "1 0 0",
                  }}
                >
                  {/* name=".pagination__number" id="I71:11991;171:27243" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "24px",
                      height: "var(--size-height-controlheightsm, 24px)",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "var(--style-radius-borderround, 999px)",
                      background: "var(--neutral-gray-100, #1d1d1d)",
                    }}
                  >
                    <span
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        flex: "1 0 0",
                        alignSelf: "stretch",
                        color: "#FFF",
                        textAlign: "center",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-base, 14px)",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight:
                          "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                      }}
                    >{`1`}</span>
                  </Flex>
                  {/* name="🧬 item 2" id="I71:11991;171:27244" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "24px",
                      height: "var(--size-height-controlheightsm, 24px)",
                      padding: "var(--size-padding-paddingxxs, 4px)",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "var(--style-radius-borderradius, 8px)",
                    }}
                  >
                    <span
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        flex: "1 0 0",
                        alignSelf: "stretch",
                        color: "var(--text-text-neutral-50, #1d1d1d)",
                        textAlign: "center",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-base, 14px)",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight:
                          "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                      }}
                    >{`2`}</span>
                  </Flex>
                  {/* name="🧬 item 3" id="I71:11991;171:27245" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "24px",
                      height: "var(--size-height-controlheightsm, 24px)",
                      padding: "var(--size-padding-paddingxxs, 4px)",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "var(--style-radius-borderradius, 8px)",
                    }}
                  >
                    <span
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        flex: "1 0 0",
                        alignSelf: "stretch",
                        color: "var(--text-text-neutral-50, #1d1d1d)",
                        textAlign: "center",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-base, 14px)",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight:
                          "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                      }}
                    >{`3`}</span>
                  </Flex>
                  {/* name="🧬 item 4" id="I71:11991;171:27246" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "24px",
                      height: "var(--size-height-controlheightsm, 24px)",
                      padding: "var(--size-padding-paddingxxs, 4px)",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "var(--style-radius-borderradius, 8px)",
                    }}
                  >
                    <span
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        flex: "1 0 0",
                        alignSelf: "stretch",
                        color: "var(--text-text-neutral-50, #1d1d1d)",
                        textAlign: "center",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-base, 14px)",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight:
                          "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                      }}
                    >{`4`}</span>
                  </Flex>
                  {/* name="🧬 item 5" id="I71:11991;171:27247" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "24px",
                      height: "var(--size-height-controlheightsm, 24px)",
                      padding: "var(--size-padding-paddingxxs, 4px)",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "var(--style-radius-borderradius, 8px)",
                    }}
                  >
                    <span
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        flex: "1 0 0",
                        alignSelf: "stretch",
                        color: "var(--text-text-neutral-50, #1d1d1d)",
                        textAlign: "center",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-base, 14px)",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight:
                          "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                      }}
                    >{`5`}</span>
                  </Flex>
                </div>
                {/* name="🧬 right" id="I71:11991;171:27248" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "24px",
                    height: "var(--size-height-controlheightsm, 24px)",
                    padding: "var(--size-padding-paddingxxs, 4px)",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    flexShrink: "0",
                    borderRadius: "var(--style-radius-borderradius, 8px)",
                  }}
                >
                  {/* name="chevron-right" id="I71:11991;171:27248;171:26647" type="INSTANCE" */}
                  <Icon.QodeChevronRight
                    style={{
                      width: "var(--font-size-base, 14px)",
                      height: "var(--font-size-base, 14px)",
                      flexShrink: "0",
                    }}
                    {...{}}
                  />
                </Flex>
              </Flex>
            </div>
          </div>
        </>
      )}
      {/* id="434:30030" */}
      {`${property_1}` === `Variant2` && (
        <>
          {/* name="Property 1=Variant2" id="434:30030" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "353px",
              height: "1108px",
              flexDirection: "column",
              alignItems: "center",
              flexShrink: "0",
              background: "#FFF",
            }}
          >
            {/* name="Profile/List item" id="434:30031" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                padding: "12px 16px",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "12px",
                alignSelf: "stretch",
                borderBottom:
                  "2px solid var(--border-border-primary-20, #158de2)",
                background: "#F6FBFF",
              }}
            >
              {/* name="Header" id="I434:30031;40:9554" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--font-size-base, 14px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name="avatar" id="I434:30031;40:9555" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "36px",
                    height: "36px",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--font-size-large, 16px)",
                    borderRadius: "499.5px",
                    background:
                      "var(--color-success-colorsuccesshover, #a3c73e)",
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
                  {/* name="user-large" id="I434:30031;40:9555;5629:57" type="INSTANCE" */}
                  <Icon.QodeUserLarge
                    style={{
                      display: "flex",
                      width: "18px",
                      height: "18px",
                      padding: "1.8px",
                      justifyContent: "center",
                      alignItems: "center",
                      position: "absolute",
                      left: "9px",
                      top: "9px",
                    }}
                    {...{}}
                  />
                  {/* name="img" id="I434:30031;40:9555;5629:58" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      width: "36px",
                      height: "36px",
                      padding: "var(--size-padding-paddingxs, 8px)",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "9px",
                      position: "absolute",
                      borderRadius: "499.5px",
                      background:
                        "url(<path-to-image>) lightgray 50% / cover no-repeat, url(<path-to-image>) lightgray 50% / cover no-repeat",
                    }}
                  >
                    {/* name="img" id=I434:30031;40:9555;5629:58 type=FRAME */}
                    <></>
                  </div>
                  {/* name="Badge" id="I434:30031;40:9555;5629:59" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "6.75px",
                      height: "6.75px",
                      justifyContent: "center",
                      alignItems: "center",
                      position: "absolute",
                      right: "1.125px",
                      bottom: "1.125px",
                      borderRadius: "4px",
                      border:
                        "1.125px solid var(--color-neutral-background-colorbgcontainer, #fff)",
                      background: "var(--color-error-colorerror, #ff6542)",
                    }}
                  >
                    {/* name="Badge" id=I434:30031;40:9555;5629:59 type=INSTANCE */}
                    <></>
                  </Flex>
                  {/* name="opentoWork" id="I434:30031;40:9555;5629:60" type="FRAME" */}
                  <QodeSvgI43430031409555562960
                    style={{
                      width: "36px",
                      height: "36px",
                      position: "absolute",
                    }}
                    {...{}}
                  />
                </Flex>
                {/* name="Frame 37215" id="I434:30031;40:9556" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "4px",
                    flex: "1 0 0",
                  }}
                >
                  {/* name="wrap" id="I434:30031;500:27456" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      alignContent: "flex-start",
                      gap: "8px",
                      alignSelf: "stretch",
                      flexWrap: "wrap",
                    }}
                  >
                    <span
                      style={{
                        maxHeight: "44px",
                        color: "var(--text-text-neutral-40, #464646)",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-heading6, 16px)",
                        fontStyle: "normal",
                        fontWeight: "600",
                        lineHeight:
                          "var(--lineheight-lineheight-h6, 22px) /* 137.5% */",
                      }}
                    >{`Nguyen Quoc Thai`}</span>
                    {/* name="YoE" id="I434:30031;500:27458" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding: "2px 7px",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "10px",
                        borderRadius: "12px",
                        background: "var(--neutral-gray-10, #e3e3e3)",
                      }}
                    >
                      <span
                        style={{
                          color: "var(--text-text-neutral-50, #1d1d1d)",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-small, 12px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                        }}
                      >{`12 YoE`}</span>
                    </div>
                  </div>
                  <span
                    style={{
                      maxHeight: "40px",
                      alignSelf: "stretch",
                      color: "var(--text-text-neutral-40, #464646)",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    }}
                  >{`Senior Software Developer at The Chemico Vietnam Co., Ltd.`}</span>
                  {/* name="Location" id="I434:30031;69:9009" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    {/* name="location-dot" id="I434:30031;69:9010" type="INSTANCE" */}
                    <Icon.QodeLocationDot
                      style={{ width: "16px", height: "16px" }}
                      {...{}}
                    />
                    <span
                      style={{
                        color: "var(--text-text-neutral-40, #464646)",
                        textAlign: "center",
                        fontFamily:
                          'var(--font-family-fontfamily, "sf pro display")',
                        fontSize: "var(--font-size-base, 14px)",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight:
                          "var(--line-height-lineheight, 20px) /* 142.857% */",
                      }}
                    >{`Ho Chi Minh city, Vietnam`}</span>
                  </div>
                </div>
              </div>
            </Flex>
            {/* name="Profile/List item" id="434:30032" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                padding: "12px 16px",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "12px",
                alignSelf: "stretch",
                borderBottom:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
                background: "var(--background-bg-white, #fff)",
              }}
            >
              {/* name="Header" id="I434:30032;40:9541" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--font-size-base, 14px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name="avatar" id="I434:30032;40:9542" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "36px",
                    height: "36px",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--font-size-large, 16px)",
                    borderRadius: "499.5px",
                    background:
                      "var(--color-success-colorsuccesshover, #a3c73e)",
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
                  {/* name="user-large" id="I434:30032;40:9542;5629:57" type="INSTANCE" */}
                  <Icon.QodeUserLarge
                    style={{
                      display: "flex",
                      width: "18px",
                      height: "18px",
                      padding: "1.8px",
                      justifyContent: "center",
                      alignItems: "center",
                      position: "absolute",
                      left: "9px",
                      top: "9px",
                    }}
                    {...{}}
                  />
                  {/* name="img" id="I434:30032;40:9542;5629:58" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      width: "36px",
                      height: "36px",
                      padding: "var(--size-padding-paddingxs, 8px)",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "9px",
                      position: "absolute",
                      borderRadius: "499.5px",
                      background:
                        "url(<path-to-image>) lightgray 50% / cover no-repeat",
                    }}
                  >
                    {/* name="img" id=I434:30032;40:9542;5629:58 type=FRAME */}
                    <></>
                  </div>
                  {/* name="Badge" id="I434:30032;40:9542;5629:59" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "6.75px",
                      height: "6.75px",
                      justifyContent: "center",
                      alignItems: "center",
                      position: "absolute",
                      right: "1.125px",
                      bottom: "1.125px",
                      borderRadius: "4px",
                      border:
                        "1.125px solid var(--color-neutral-background-colorbgcontainer, #fff)",
                      background: "var(--color-error-colorerror, #ff6542)",
                    }}
                  >
                    {/* name="Badge" id=I434:30032;40:9542;5629:59 type=INSTANCE */}
                    <></>
                  </Flex>
                  {/* name="opentoWork" id="I434:30032;40:9542;5629:60" type="FRAME" */}
                  <QodeSvgI43430032409542562960
                    style={{
                      width: "36px",
                      height: "36px",
                      position: "absolute",
                    }}
                    {...{}}
                  />
                </Flex>
                {/* name="Content" id="I434:30032;40:9582" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "4px",
                    flex: "1 0 0",
                  }}
                >
                  {/* name="wrap" id="I434:30032;40:9583" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      alignContent: "flex-start",
                      gap: "8px",
                      alignSelf: "stretch",
                      flexWrap: "wrap",
                    }}
                  >
                    <span
                      style={{
                        maxHeight: "44px",
                        color: "var(--text-text-neutral-40, #464646)",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-heading6, 16px)",
                        fontStyle: "normal",
                        fontWeight: "600",
                        lineHeight:
                          "var(--lineheight-lineheight-h6, 22px) /* 137.5% */",
                      }}
                    >{`Nguyen Thi Tuyet Trang`}</span>
                    {/* name="YoE" id="I434:30032;40:9585" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding: "2px 7px",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "10px",
                        borderRadius: "12px",
                        background: "var(--neutral-gray-10, #e3e3e3)",
                      }}
                    >
                      <span
                        style={{
                          color: "var(--text-text-neutral-50, #1d1d1d)",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-small, 12px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                        }}
                      >{`4 YoE`}</span>
                    </div>
                  </div>
                  <span
                    style={{
                      maxHeight: "40px",
                      alignSelf: "stretch",
                      color: "var(--text-text-neutral-40, #464646)",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    }}
                  >{`Senior Fullstack Engineer at Pinnacle Strategic Consulting`}</span>
                  {/* name="Location" id="I434:30032;40:9588" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    {/* name="location-dot" id="I434:30032;69:8839" type="INSTANCE" */}
                    <Icon.QodeLocationDot
                      style={{ width: "16px", height: "16px" }}
                      {...{}}
                    />
                    <span
                      style={{
                        color: "var(--text-text-neutral-40, #464646)",
                        textAlign: "center",
                        fontFamily:
                          'var(--font-family-fontfamily, "sf pro display")',
                        fontSize: "var(--font-size-base, 14px)",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight:
                          "var(--line-height-lineheight, 20px) /* 142.857% */",
                      }}
                    >{`Thu Duc, Vietnam`}</span>
                  </div>
                </div>
              </div>
              {/* name="eye" id="I434:30032;71:9955" type="INSTANCE" */}
              <Icon.QodeEye
                style={{
                  display: "flex",
                  width: "12px",
                  height: "12px",
                  padding: "1.8px 0.599px 1.8px 0.6px",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  left: "28px",
                  bottom: "46px",
                }}
                {...{}}
              />
            </Flex>
            {/* name="Profile/List item" id="434:30033" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                padding: "12px 16px",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "12px",
                alignSelf: "stretch",
                borderBottom:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
                background: "var(--background-bg-white, #fff)",
              }}
            >
              {/* name="Header" id="I434:30033;40:9541" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--font-size-base, 14px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name="avatar" id="I434:30033;40:9542" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "36px",
                    height: "36px",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--font-size-large, 16px)",
                    borderRadius: "499.5px",
                    background:
                      "var(--color-success-colorsuccesshover, #a3c73e)",
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
                  {/* name="user-large" id="I434:30033;40:9542;5629:57" type="INSTANCE" */}
                  <Icon.QodeUserLarge
                    style={{
                      display: "flex",
                      width: "18px",
                      height: "18px",
                      padding: "1.8px",
                      justifyContent: "center",
                      alignItems: "center",
                      position: "absolute",
                      left: "9px",
                      top: "9px",
                    }}
                    {...{}}
                  />
                  {/* name="img" id="I434:30033;40:9542;5629:58" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      width: "36px",
                      height: "36px",
                      padding: "var(--size-padding-paddingxs, 8px)",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "9px",
                      position: "absolute",
                      borderRadius: "499.5px",
                      background:
                        "url(<path-to-image>) lightgray 50% / cover no-repeat",
                    }}
                  >
                    {/* name="img" id=I434:30033;40:9542;5629:58 type=FRAME */}
                    <></>
                  </div>
                  {/* name="Badge" id="I434:30033;40:9542;5629:59" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "6.75px",
                      height: "6.75px",
                      justifyContent: "center",
                      alignItems: "center",
                      position: "absolute",
                      right: "1.125px",
                      bottom: "1.125px",
                      borderRadius: "4px",
                      border:
                        "1.125px solid var(--color-neutral-background-colorbgcontainer, #fff)",
                      background: "var(--color-error-colorerror, #ff6542)",
                    }}
                  >
                    {/* name="Badge" id=I434:30033;40:9542;5629:59 type=INSTANCE */}
                    <></>
                  </Flex>
                  {/* name="opentoWork" id="I434:30033;40:9542;5629:60" type="FRAME" */}
                  <QodeSvgI43430033409542562960
                    style={{
                      width: "36px",
                      height: "36px",
                      position: "absolute",
                    }}
                    {...{}}
                  />
                </Flex>
                {/* name="Content" id="I434:30033;40:9582" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "4px",
                    flex: "1 0 0",
                  }}
                >
                  {/* name="wrap" id="I434:30033;40:9583" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      alignContent: "flex-start",
                      gap: "8px",
                      alignSelf: "stretch",
                      flexWrap: "wrap",
                    }}
                  >
                    <span
                      style={{
                        maxHeight: "44px",
                        color: "var(--text-text-neutral-40, #464646)",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-heading6, 16px)",
                        fontStyle: "normal",
                        fontWeight: "600",
                        lineHeight:
                          "var(--lineheight-lineheight-h6, 22px) /* 137.5% */",
                      }}
                    >{`Dang Thanh An`}</span>
                    {/* name="YoE" id="I434:30033;40:9585" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding: "2px 7px",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "10px",
                        borderRadius: "12px",
                        background: "var(--neutral-gray-10, #e3e3e3)",
                      }}
                    >
                      <span
                        style={{
                          color: "var(--text-text-neutral-50, #1d1d1d)",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-small, 12px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                        }}
                      >{`7 YoE`}</span>
                    </div>
                  </div>
                  <span
                    style={{
                      maxHeight: "40px",
                      alignSelf: "stretch",
                      color: "var(--text-text-neutral-40, #464646)",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    }}
                  >{`Senior Software Developer at Superbank`}</span>
                  {/* name="Location" id="I434:30033;40:9588" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    {/* name="location-dot" id="I434:30033;69:8839" type="INSTANCE" */}
                    <Icon.QodeLocationDot
                      style={{ width: "16px", height: "16px" }}
                      {...{}}
                    />
                    <span
                      style={{
                        color: "var(--text-text-neutral-40, #464646)",
                        textAlign: "center",
                        fontFamily:
                          'var(--font-family-fontfamily, "sf pro display")',
                        fontSize: "var(--font-size-base, 14px)",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight:
                          "var(--line-height-lineheight, 20px) /* 142.857% */",
                      }}
                    >{`Ho Chi Minh city, Vietnam`}</span>
                  </div>
                </div>
              </div>
              {/* name="eye" id="I434:30033;71:9955" type="INSTANCE" */}
              <Icon.QodeEye
                style={{
                  display: "flex",
                  width: "12px",
                  height: "12px",
                  padding: "1.8px 0.599px 1.8px 0.6px",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  left: "28px",
                  bottom: "26px",
                }}
                {...{}}
              />
            </Flex>
            {/* name="End of list" id="434:30288" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                padding: "20px 0px",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                alignSelf: "stretch",
              }}
            >
              <span
                style={{
                  color: "var(--text-text-neutral-30, #656565)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`End of result`}</span>
            </Flex>
          </div>
        </>
      )}
    </>
  )
}
