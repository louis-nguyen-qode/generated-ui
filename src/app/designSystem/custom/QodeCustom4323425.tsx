// id="43:23425"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvgI4323682562960 from "@designSystem/icon/svg/QodeSvgI4323682562960"
import QodeSvg698863 from "@designSystem/icon/svg/QodeSvg698863"
import QodeSvgI6964371143130 from "@designSystem/icon/svg/QodeSvgI6964371143130"
import QodeSvgI49029092562960 from "@designSystem/icon/svg/QodeSvgI49029092562960"
import QodeSvg49029100 from "@designSystem/icon/svg/QodeSvg49029100"
import QodeSvgI246168581143130 from "@designSystem/icon/svg/QodeSvgI246168581143130"
import QodeSvgI49029137562960 from "@designSystem/icon/svg/QodeSvgI49029137562960"
import QodeSvg49029145 from "@designSystem/icon/svg/QodeSvg49029145"
import QodeSvgI6965841143130 from "@designSystem/icon/svg/QodeSvgI6965841143130"

export interface QodeCustom4323425Props {
  showDelete?: boolean
  property_1?: "active" | "default" | "hover"
}

export const QodeCustom4323425: React.FC<
  QodeCustom4323425Props & { style?: CSSProperties }
> = ({ showDelete = true, property_1 = "default", ...rest }) => {
  return (
    <>
      {/* name="Shortlisted/List item" id="43:23425" type="COMPONENT_SET" */}
      {/* id="43:23424" */}
      {`${property_1}` === `default` && (
        <>
          {/* name="Property 1=default" id="43:23424" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "358px",
              padding: "12px 16px",
              alignItems: "flex-start",
              gap: "24px",
              borderRadius: "var(--border-radius-base, 8px)",
              border:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
              background: "#FFF",
            }}
          >
            {/* name="Header" id="43:23681" type="FRAME" */}
            <div
              style={{
                display: "flex",
                width: "300px",
                alignItems: "flex-start",
                gap: "12px",
                flexShrink: "0",
              }}
            >
              {/* name="avatar" id="43:23682" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  width: "36px",
                  height: "36px",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--font-size-large, 16px)",
                  flexShrink: "0",
                  borderRadius: "499.5px",
                  background: "var(--color-success-colorsuccesshover, #a3c73e)",
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
                {/* name="user-large" id="I43:23682;5629:57" type="INSTANCE" */}
                <Flex
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
                >
                  {/* name="Vector" id="I43:23682;5629:57;2828:6334" type="VECTOR" */}
                  <Flex
                    style={{
                      width: "14.4px",
                      height: "14.4px",
                      flexShrink: "0",
                      fill: "var(--color-neutral-background-colorbgcontainer, #fff)",
                    }}
                  >
                    {/* name="Vector" id=I43:23682;5629:57;2828:6334 type=VECTOR */}
                    <></>
                  </Flex>
                </Flex>
                {/* name="img" id="I43:23682;5629:58" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    width: "36px",
                    height: "36px",
                    padding: "var(--size-padding-paddingxs, 9px)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "9px",
                    position: "absolute",
                    borderRadius: "499.5px",
                    background:
                      "url(<path-to-image>) lightgray 50% / cover no-repeat, url(<path-to-image>) lightgray 50% / cover no-repeat",
                  }}
                >
                  {/* name="img" id=I43:23682;5629:58 type=FRAME */}
                  <></>
                </div>
                {/* name="Badge" id="I43:23682;5629:59" type="INSTANCE" */}
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
                  {/* name="Badge" id=I43:23682;5629:59 type=INSTANCE */}
                  <></>
                </Flex>
                {/* name="opentoWork" id="I43:23682;5629:60" type="FRAME" */}
                <QodeSvgI4323682562960
                  style={{
                    width: "36px",
                    height: "36px",
                    position: "absolute",
                  }}
                  {...{}}
                />
              </Flex>
              {/* name="R" id="43:23683" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "4px",
                  flex: "1 0 0",
                }}
              >
                {/* name="wrap" id="43:23684" type="FRAME" */}
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
                  <span
                    style={{
                      color: "var(--text-text-neutral-40, #464646)",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-heading6, 16px)",
                      fontStyle: "normal",
                      fontWeight: "600",
                      lineHeight:
                        "var(--lineheight-lineheight-h6, 22px) /* 137.5% */",
                    }}
                  >{`Nguyen Quoc Thai`}</span>
                  {/* name="YoE" id="490:28738" type="FRAME" */}
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
                {/* name="Location" id="69:8862" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "4px",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name="location-dot" id="69:8863" type="INSTANCE" */}
                  <QodeSvg698863
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
            {/* name="Frame 37201" id="43:23365" type="FRAME" */}
            <div
              style={{
                display: "flex",
                padding: "12px 20px",
                justifyContent: "flex-end",
                alignItems: "center",
                gap: "8px",
                flex: "1 0 0",
              }}
            >
              {/* name="Button" id="43:23366" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding:
                    "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  borderRadius: "var(--style-radius-borderround, 999px)",
                  background: "var(--color-info-colorinfo, #2e2e2e)",
                }}
              >
                {/* name="plus" id="I43:23366;35:13236" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "2.8px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {/* name="Vector" id="I43:23366;35:13236;2828:4752" type="VECTOR" */}
                  <Flex
                    style={{
                      width: "10.4px",
                      height: "10.4px",
                      flexShrink: "0",
                      fill: "var(--color-neutral-text-colortextsolid, #fff)",
                    }}
                  >
                    {/* name="Vector" id=I43:23366;35:13236;2828:4752 type=VECTOR */}
                    <></>
                  </Flex>
                </Flex>
                <span
                  style={{
                    color: "var(--color-neutral-text-colortextsolid, #fff)",
                    textAlign: "center",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--line-height-lineheight, 20px) /* 142.857% */",
                  }}
                >{`Add notes`}</span>
                {/* name="🎰 icon" id="I43:23366;2906:15123" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "1.6px 1.601px 1.598px 1.6px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {/* name="Vector" id="I43:23366;2906:15123;2828:3908" type="VECTOR" */}
                  <Flex
                    style={{
                      width: "12.799px",
                      height: "12.802px",
                      flexShrink: "0",
                      fill: "var(--color-neutral-text-colortextsolid, #fff)",
                    }}
                  >
                    {/* name="Vector" id=I43:23366;2906:15123;2828:3908 type=VECTOR */}
                    <></>
                  </Flex>
                </Flex>
              </Flex>
              {/* name="Upload CV" id="43:23367" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  width: "124px",
                  alignItems: "flex-start",
                }}
              >
                {/* name="Button" id="I43:23367;11588:3979" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    height: "var(--size-height-controlheight, 32px)",
                    padding:
                      "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    flex: "1 0 0",
                    borderRadius: "var(--style-radius-borderround, 999px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                    background:
                      "var(--color-neutral-background-colorbgcontainer, #fff)",
                  }}
                >
                  {/* name="🎰 icon" id="I43:23367;11588:3979;114:1808" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "16px",
                      height: "16px",
                      padding: "1.601px 1.6px 1.6px 1.6px",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {/* name="Vector" id="I43:23367;11588:3979;114:1808;2828:6280" type="VECTOR" */}
                    <Flex
                      style={{
                        width: "12.8px",
                        height: "12.799px",
                        flexShrink: "0",
                        fill: "var(--color-neutral-text-colortext, #000)",
                      }}
                    >
                      {/* name="Vector" id=I43:23367;11588:3979;114:1808;2828:6280 type=VECTOR */}
                      <></>
                    </Flex>
                  </Flex>
                  <span
                    style={{
                      color: "var(--color-neutral-text-colortext, #000)",
                      textAlign: "center",
                      fontFamily:
                        'var(--font-family-fontfamily, "sf pro display")',
                      fontSize: "var(--font-size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight:
                        "var(--line-height-lineheight, 22px) /* 157.143% */",
                    }}
                  >{`Upload CV`}</span>
                  {/* name="🎰 icon" id="I43:23367;11588:3979;2906:15520" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "16px",
                      height: "16px",
                      padding: "1.6px 1.601px 1.598px 1.6px",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {/* name="Vector" id="I43:23367;11588:3979;2906:15520;2828:3908" type="VECTOR" */}
                    <Flex
                      style={{
                        width: "12.799px",
                        height: "12.802px",
                        flexShrink: "0",
                        fill: "var(--color-neutral-text-colortext, #000)",
                      }}
                    >
                      {/* name="Vector" id=I43:23367;11588:3979;2906:15520;2828:3908 type=VECTOR */}
                      <></>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
            </div>
            {/* name="Indicator" id="43:23368" type="ELLIPSE" */}
            <Flex
              style={{
                width: "8px",
                height: "8px",
                position: "absolute",
                left: "40px",
                bottom: "35px",
                borderRadius: "8px",
                background: "#FF7878",
              }}
            >
              {/* name="Indicator" id=43:23368 type=ELLIPSE */}
              <></>
            </Flex>
            {/* name="Button" id="69:6437" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                width: "24px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "var(--size-padding-paddingxxs, 4px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                position: "absolute",
                right: "10px",
                top: "10px",
                borderRadius: "var(--border-radius-rounded, 999px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                opacity: "0.5",
                background: "var(--background-bg-white, #fff)",
              }}
            >
              {/* name="trash" id="I69:6437;114:3130" type="INSTANCE" */}
              <QodeSvgI6964371143130
                style={{
                  width: "var(--font-size-base, 14px)",
                  height: "var(--font-size-base, 14px)",
                  flexShrink: "0",
                }}
                {...{}}
              />
            </Flex>
          </div>
        </>
      )}
      {/* id="246:16842" */}
      {`${property_1}` === `hover` && (
        <>
          {/* name="Property 1=hover" id="246:16842" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "358px",
              padding: "12px 16px",
              alignItems: "flex-start",
              gap: "24px",
              borderRadius: "var(--border-radius-base, 8px)",
              border: "2px solid var(--border-border-neutral-40, #bfbfbf)",
              background: "var(--neutral-white, #fff)",
            }}
          >
            {/* name="Header" id="490:29091" type="FRAME" */}
            <div
              style={{
                display: "flex",
                width: "300px",
                alignItems: "flex-start",
                gap: "12px",
                flexShrink: "0",
              }}
            >
              {/* name="avatar" id="490:29092" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  width: "36px",
                  height: "36px",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--font-size-large, 16px)",
                  flexShrink: "0",
                  borderRadius: "499.5px",
                  background: "var(--color-success-colorsuccesshover, #a3c73e)",
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
                {/* name="user-large" id="I490:29092;5629:57" type="INSTANCE" */}
                <Flex
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
                >
                  {/* name="Vector" id="I490:29092;5629:57;2828:6334" type="VECTOR" */}
                  <Flex
                    style={{
                      width: "14.4px",
                      height: "14.4px",
                      flexShrink: "0",
                      fill: "var(--color-neutral-background-colorbgcontainer, #fff)",
                    }}
                  >
                    {/* name="Vector" id=I490:29092;5629:57;2828:6334 type=VECTOR */}
                    <></>
                  </Flex>
                </Flex>
                {/* name="img" id="I490:29092;5629:58" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    width: "36px",
                    height: "36px",
                    padding: "var(--size-padding-paddingxs, 9px)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "9px",
                    position: "absolute",
                    borderRadius: "499.5px",
                    background:
                      "url(<path-to-image>) lightgray 50% / cover no-repeat, url(<path-to-image>) lightgray 50% / cover no-repeat",
                  }}
                >
                  {/* name="img" id=I490:29092;5629:58 type=FRAME */}
                  <></>
                </div>
                {/* name="Badge" id="I490:29092;5629:59" type="INSTANCE" */}
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
                  {/* name="Badge" id=I490:29092;5629:59 type=INSTANCE */}
                  <></>
                </Flex>
                {/* name="opentoWork" id="I490:29092;5629:60" type="FRAME" */}
                <QodeSvgI49029092562960
                  style={{
                    width: "36px",
                    height: "36px",
                    position: "absolute",
                  }}
                  {...{}}
                />
              </Flex>
              {/* name="R" id="490:29093" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "4px",
                  flex: "1 0 0",
                }}
              >
                {/* name="wrap" id="490:29094" type="FRAME" */}
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
                  <span
                    style={{
                      color: "var(--text-text-neutral-40, #464646)",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-heading6, 16px)",
                      fontStyle: "normal",
                      fontWeight: "600",
                      lineHeight:
                        "var(--lineheight-lineheight-h6, 22px) /* 137.5% */",
                    }}
                  >{`Nguyen Quoc Thai`}</span>
                  {/* name="YoE" id="490:29096" type="FRAME" */}
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
                {/* name="Location" id="490:29099" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "4px",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name="location-dot" id="490:29100" type="INSTANCE" */}
                  <QodeSvg49029100
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
            {/* name="Frame 37201" id="246:16854" type="FRAME" */}
            <div
              style={{
                display: "flex",
                padding: "12px 20px",
                justifyContent: "flex-end",
                alignItems: "center",
                gap: "8px",
                flex: "1 0 0",
              }}
            >
              {/* name="Button" id="246:16855" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding:
                    "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  borderRadius: "var(--style-radius-borderround, 999px)",
                  background: "var(--color-info-colorinfo, #2e2e2e)",
                }}
              >
                {/* name="plus" id="I246:16855;35:13236" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "2.8px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {/* name="Vector" id="I246:16855;35:13236;2828:4752" type="VECTOR" */}
                  <Flex
                    style={{
                      width: "10.4px",
                      height: "10.4px",
                      flexShrink: "0",
                      fill: "var(--color-neutral-text-colortextsolid, #fff)",
                    }}
                  >
                    {/* name="Vector" id=I246:16855;35:13236;2828:4752 type=VECTOR */}
                    <></>
                  </Flex>
                </Flex>
                <span
                  style={{
                    color: "var(--color-neutral-text-colortextsolid, #fff)",
                    textAlign: "center",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--line-height-lineheight, 20px) /* 142.857% */",
                  }}
                >{`Add notes`}</span>
                {/* name="🎰 icon" id="I246:16855;2906:15123" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "1.6px 1.601px 1.598px 1.6px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {/* name="Vector" id="I246:16855;2906:15123;2828:3908" type="VECTOR" */}
                  <Flex
                    style={{
                      width: "12.799px",
                      height: "12.802px",
                      flexShrink: "0",
                      fill: "var(--color-neutral-text-colortextsolid, #fff)",
                    }}
                  >
                    {/* name="Vector" id=I246:16855;2906:15123;2828:3908 type=VECTOR */}
                    <></>
                  </Flex>
                </Flex>
              </Flex>
              {/* name="Upload CV" id="246:16856" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  width: "124px",
                  alignItems: "flex-start",
                }}
              >
                {/* name="Button" id="I246:16856;11588:3979" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    height: "var(--size-height-controlheight, 32px)",
                    padding:
                      "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    flex: "1 0 0",
                    borderRadius: "var(--style-radius-borderround, 999px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                    background:
                      "var(--color-neutral-background-colorbgcontainer, #fff)",
                  }}
                >
                  {/* name="🎰 icon" id="I246:16856;11588:3979;114:1808" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "16px",
                      height: "16px",
                      padding: "1.601px 1.6px 1.6px 1.6px",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {/* name="Vector" id="I246:16856;11588:3979;114:1808;2828:6280" type="VECTOR" */}
                    <Flex
                      style={{
                        width: "12.8px",
                        height: "12.799px",
                        flexShrink: "0",
                        fill: "var(--color-neutral-text-colortext, #000)",
                      }}
                    >
                      {/* name="Vector" id=I246:16856;11588:3979;114:1808;2828:6280 type=VECTOR */}
                      <></>
                    </Flex>
                  </Flex>
                  <span
                    style={{
                      color: "var(--color-neutral-text-colortext, #000)",
                      textAlign: "center",
                      fontFamily:
                        'var(--font-family-fontfamily, "sf pro display")',
                      fontSize: "var(--font-size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight:
                        "var(--line-height-lineheight, 22px) /* 157.143% */",
                    }}
                  >{`Upload CV`}</span>
                  {/* name="🎰 icon" id="I246:16856;11588:3979;2906:15520" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "16px",
                      height: "16px",
                      padding: "1.6px 1.601px 1.598px 1.6px",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {/* name="Vector" id="I246:16856;11588:3979;2906:15520;2828:3908" type="VECTOR" */}
                    <Flex
                      style={{
                        width: "12.799px",
                        height: "12.802px",
                        flexShrink: "0",
                        fill: "var(--color-neutral-text-colortext, #000)",
                      }}
                    >
                      {/* name="Vector" id=I246:16856;11588:3979;2906:15520;2828:3908 type=VECTOR */}
                      <></>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
            </div>
            {/* name="Indicator" id="246:16857" type="ELLIPSE" */}
            <Flex
              style={{
                width: "8px",
                height: "8px",
                position: "absolute",
                left: "40px",
                bottom: "35px",
                borderRadius: "8px",
                background: "#FF7878",
              }}
            >
              {/* name="Indicator" id=246:16857 type=ELLIPSE */}
              <></>
            </Flex>
            {/* name="Button" id="246:16858" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                width: "24px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "var(--size-padding-paddingxxs, 4px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                position: "absolute",
                right: "10px",
                top: "10px",
                borderRadius: "var(--border-radius-rounded, 999px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                opacity: "0.5",
                background: "var(--background-bg-white, #fff)",
              }}
            >
              {/* name="trash" id="I246:16858;114:3130" type="INSTANCE" */}
              <QodeSvgI246168581143130
                style={{
                  width: "var(--font-size-base, 14px)",
                  height: "var(--font-size-base, 14px)",
                  flexShrink: "0",
                }}
                {...{}}
              />
            </Flex>
          </div>
        </>
      )}
      {/* id="43:23423" */}
      {`${property_1}` === `active` && (
        <>
          {/* name="Property 1=active" id="43:23423" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "358px",
              padding: "12px 16px",
              alignItems: "flex-start",
              gap: "24px",
              borderRadius: "var(--border-radius-base, 8px)",
              border: "2px solid var(--border-border-primary-20, #158de2)",
              background: "var(--blue-techblue-5, #f8fcff)",
            }}
          >
            {/* name="Header" id="490:29136" type="FRAME" */}
            <div
              style={{
                display: "flex",
                width: "300px",
                alignItems: "flex-start",
                gap: "12px",
                flexShrink: "0",
              }}
            >
              {/* name="avatar" id="490:29137" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  width: "36px",
                  height: "36px",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--font-size-large, 16px)",
                  flexShrink: "0",
                  borderRadius: "499.5px",
                  background: "var(--color-success-colorsuccesshover, #a3c73e)",
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
                {/* name="user-large" id="I490:29137;5629:57" type="INSTANCE" */}
                <Flex
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
                >
                  {/* name="Vector" id="I490:29137;5629:57;2828:6334" type="VECTOR" */}
                  <Flex
                    style={{
                      width: "14.4px",
                      height: "14.4px",
                      flexShrink: "0",
                      fill: "var(--color-neutral-background-colorbgcontainer, #fff)",
                    }}
                  >
                    {/* name="Vector" id=I490:29137;5629:57;2828:6334 type=VECTOR */}
                    <></>
                  </Flex>
                </Flex>
                {/* name="img" id="I490:29137;5629:58" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    width: "36px",
                    height: "36px",
                    padding: "var(--size-padding-paddingxs, 9px)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "9px",
                    position: "absolute",
                    borderRadius: "499.5px",
                    background:
                      "url(<path-to-image>) lightgray 50% / cover no-repeat, url(<path-to-image>) lightgray 50% / cover no-repeat",
                  }}
                >
                  {/* name="img" id=I490:29137;5629:58 type=FRAME */}
                  <></>
                </div>
                {/* name="Badge" id="I490:29137;5629:59" type="INSTANCE" */}
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
                  {/* name="Badge" id=I490:29137;5629:59 type=INSTANCE */}
                  <></>
                </Flex>
                {/* name="opentoWork" id="I490:29137;5629:60" type="FRAME" */}
                <QodeSvgI49029137562960
                  style={{
                    width: "36px",
                    height: "36px",
                    position: "absolute",
                  }}
                  {...{}}
                />
              </Flex>
              {/* name="R" id="490:29138" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "4px",
                  flex: "1 0 0",
                }}
              >
                {/* name="wrap" id="490:29139" type="FRAME" */}
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
                  <span
                    style={{
                      color: "var(--text-text-neutral-40, #464646)",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-heading6, 16px)",
                      fontStyle: "normal",
                      fontWeight: "600",
                      lineHeight:
                        "var(--lineheight-lineheight-h6, 22px) /* 137.5% */",
                    }}
                  >{`Nguyen Quoc Thai`}</span>
                  {/* name="YoE" id="490:29141" type="FRAME" */}
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
                {/* name="Location" id="490:29144" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "4px",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name="location-dot" id="490:29145" type="INSTANCE" */}
                  <QodeSvg49029145
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
            {/* name="Frame 37201" id="43:23395" type="FRAME" */}
            <div
              style={{
                display: "flex",
                width: "794px",
                padding: "12px 20px",
                justifyContent: "flex-end",
                alignItems: "center",
                gap: "8px",
                flexShrink: "0",
              }}
            >
              {/* name="Button" id="43:23396" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding:
                    "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  borderRadius: "var(--style-radius-borderround, 999px)",
                  background: "var(--color-info-colorinfo, #2e2e2e)",
                }}
              >
                {/* name="plus" id="I43:23396;35:13236" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "2.8px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {/* name="Vector" id="I43:23396;35:13236;2828:4752" type="VECTOR" */}
                  <Flex
                    style={{
                      width: "10.4px",
                      height: "10.4px",
                      flexShrink: "0",
                      fill: "var(--color-neutral-text-colortextsolid, #fff)",
                    }}
                  >
                    {/* name="Vector" id=I43:23396;35:13236;2828:4752 type=VECTOR */}
                    <></>
                  </Flex>
                </Flex>
                <span
                  style={{
                    color: "var(--color-neutral-text-colortextsolid, #fff)",
                    textAlign: "center",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--line-height-lineheight, 20px) /* 142.857% */",
                  }}
                >{`Add notes`}</span>
                {/* name="🎰 icon" id="I43:23396;2906:15123" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "1.6px 1.601px 1.598px 1.6px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {/* name="Vector" id="I43:23396;2906:15123;2828:3908" type="VECTOR" */}
                  <Flex
                    style={{
                      width: "12.799px",
                      height: "12.802px",
                      flexShrink: "0",
                      fill: "var(--color-neutral-text-colortextsolid, #fff)",
                    }}
                  >
                    {/* name="Vector" id=I43:23396;2906:15123;2828:3908 type=VECTOR */}
                    <></>
                  </Flex>
                </Flex>
              </Flex>
              {/* name="Upload CV" id="43:23397" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  width: "124px",
                  alignItems: "flex-start",
                  flexShrink: "0",
                }}
              >
                {/* name="Button" id="I43:23397;11588:3979" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    height: "var(--size-height-controlheight, 32px)",
                    padding:
                      "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    flex: "1 0 0",
                    borderRadius: "var(--style-radius-borderround, 999px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                    background:
                      "var(--color-neutral-background-colorbgcontainer, #fff)",
                  }}
                >
                  {/* name="🎰 icon" id="I43:23397;11588:3979;114:1808" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "16px",
                      height: "16px",
                      padding: "1.601px 1.6px 1.6px 1.6px",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {/* name="Vector" id="I43:23397;11588:3979;114:1808;2828:6280" type="VECTOR" */}
                    <Flex
                      style={{
                        width: "12.8px",
                        height: "12.799px",
                        flexShrink: "0",
                        fill: "var(--color-neutral-text-colortext, #000)",
                      }}
                    >
                      {/* name="Vector" id=I43:23397;11588:3979;114:1808;2828:6280 type=VECTOR */}
                      <></>
                    </Flex>
                  </Flex>
                  <span
                    style={{
                      color: "var(--color-neutral-text-colortext, #000)",
                      textAlign: "center",
                      fontFamily:
                        'var(--font-family-fontfamily, "sf pro display")',
                      fontSize: "var(--font-size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight:
                        "var(--line-height-lineheight, 22px) /* 157.143% */",
                    }}
                  >{`Upload CV`}</span>
                  {/* name="🎰 icon" id="I43:23397;11588:3979;2906:15520" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "16px",
                      height: "16px",
                      padding: "1.6px 1.601px 1.598px 1.6px",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {/* name="Vector" id="I43:23397;11588:3979;2906:15520;2828:3908" type="VECTOR" */}
                    <Flex
                      style={{
                        width: "12.799px",
                        height: "12.802px",
                        flexShrink: "0",
                        fill: "var(--color-neutral-text-colortext, #000)",
                      }}
                    >
                      {/* name="Vector" id=I43:23397;11588:3979;2906:15520;2828:3908 type=VECTOR */}
                      <></>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
            </div>
            {/* name="Indicator" id="43:23398" type="ELLIPSE" */}
            <Flex
              style={{
                width: "8px",
                height: "8px",
                position: "absolute",
                left: "40px",
                bottom: "35px",
                borderRadius: "8px",
                background: "#FF7878",
              }}
            >
              {/* name="Indicator" id=43:23398 type=ELLIPSE */}
              <></>
            </Flex>
            {/* name="Button" id="69:6584" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                width: "24px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "var(--size-padding-paddingxxs, 4px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                position: "absolute",
                right: "10px",
                top: "10px",
                borderRadius: "var(--border-radius-rounded, 999px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                background: "var(--background-bg-white, #fff)",
              }}
            >
              {/* name="trash" id="I69:6584;114:3130" type="INSTANCE" */}
              <QodeSvgI6965841143130
                style={{
                  width: "var(--font-size-base, 14px)",
                  height: "var(--font-size-base, 14px)",
                  flexShrink: "0",
                }}
                {...{}}
              />
            </Flex>
          </div>
        </>
      )}
    </>
  )
}
