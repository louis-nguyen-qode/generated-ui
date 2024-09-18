// id="40:9539"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvgI409542562960 from "@designSystem/icon/svg/QodeSvgI409542562960"
import QodeSvg698839 from "@designSystem/icon/svg/QodeSvg698839"
import QodeSvgI7111142562960 from "@designSystem/icon/svg/QodeSvgI7111142562960"
import QodeSvg7111150 from "@designSystem/icon/svg/QodeSvg7111150"
import QodeSvgI409555562960 from "@designSystem/icon/svg/QodeSvgI409555562960"
import QodeSvg699010 from "@designSystem/icon/svg/QodeSvg699010"

export interface QodeCustom409539Props {
  visisted?: boolean
  state?: "active" | "default" | "hover"
}

export const QodeCustom409539: React.FC<
  QodeCustom409539Props & { style?: CSSProperties }
> = ({ visisted = false, state = "default", ...rest }) => {
  return (
    <>
      {/* name="Profile/List item" id="40:9539" type="COMPONENT_SET" */}
      {/* id="40:9540" */}
      {`${state}` === `default` && (
        <>
          {/* name="State=default" id="40:9540" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "350px",
              padding: "12px 16px",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "12px",
              borderBottom:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
              background: "var(--background-bg-white, #fff)",
            }}
          >
            {/* name="Header" id="40:9541" type="FRAME" */}
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "var(--font-size-base, 14px)",
                alignSelf: "stretch",
              }}
            >
              {/* name="avatar" id="40:9542" type="INSTANCE" */}
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
                {/* name="user-large" id="I40:9542;5629:57" type="INSTANCE" */}
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
                  {/* name="Vector" id="I40:9542;5629:57;2828:6334" type="VECTOR" */}
                  <Flex
                    style={{
                      width: "14.4px",
                      height: "14.4px",
                      flexShrink: "0",
                      fill: "var(--color-neutral-background-colorbgcontainer, #fff)",
                    }}
                  >
                    {/* name="Vector" id=I40:9542;5629:57;2828:6334 type=VECTOR */}
                    <></>
                  </Flex>
                </Flex>
                {/* name="img" id="I40:9542;5629:58" type="FRAME" */}
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
                  {/* name="img" id=I40:9542;5629:58 type=FRAME */}
                  <></>
                </div>
                {/* name="Badge" id="I40:9542;5629:59" type="INSTANCE" */}
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
                  {/* name="Badge" id=I40:9542;5629:59 type=INSTANCE */}
                  <></>
                </Flex>
                {/* name="opentoWork" id="I40:9542;5629:60" type="FRAME" */}
                <QodeSvgI409542562960
                  style={{
                    width: "36px",
                    height: "36px",
                    position: "absolute",
                  }}
                  {...{}}
                />
              </Flex>
              {/* name="Content" id="40:9582" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "4px",
                  flex: "1 0 0",
                }}
              >
                {/* name="wrap" id="40:9583" type="FRAME" */}
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
                  {/* name="YoE" id="40:9585" type="FRAME" */}
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
                {/* name="Location" id="40:9588" type="FRAME" */}
                <div
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  {/* name="location-dot" id="69:8839" type="INSTANCE" */}
                  <QodeSvg698839
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
            {/* name="eye" id="71:9955" type="INSTANCE" */}
            <Flex
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
            >
              {/* name="Vector" id="I71:9955;2828:2354" type="VECTOR" */}
              <Flex
                style={{
                  width: "10.801px",
                  height: "8.4px",
                  flexShrink: "0",
                  fill: "var(--purple-purple-40, #9254de)",
                }}
              >
                {/* name="Vector" id=I71:9955;2828:2354 type=VECTOR */}
                <></>
              </Flex>
            </Flex>
          </div>
        </>
      )}
      {/* id="71:11140" */}
      {`${state}` === `hover` && (
        <>
          {/* name="State=hover" id="71:11140" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "350px",
              padding: "12px 16px",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "12px",
              borderBottom:
                "2px solid var(--border-border-neutral-30, #d5d5d5)",
              background: "var(--background-bg-neutral-5, #f8f6f6)",
            }}
          >
            {/* name="Header" id="71:11141" type="FRAME" */}
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "var(--font-size-base, 14px)",
                alignSelf: "stretch",
              }}
            >
              {/* name="avatar" id="71:11142" type="INSTANCE" */}
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
                {/* name="user-large" id="I71:11142;5629:57" type="INSTANCE" */}
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
                  {/* name="Vector" id="I71:11142;5629:57;2828:6334" type="VECTOR" */}
                  <Flex
                    style={{
                      width: "14.4px",
                      height: "14.4px",
                      flexShrink: "0",
                      fill: "var(--color-neutral-background-colorbgcontainer, #fff)",
                    }}
                  >
                    {/* name="Vector" id=I71:11142;5629:57;2828:6334 type=VECTOR */}
                    <></>
                  </Flex>
                </Flex>
                {/* name="img" id="I71:11142;5629:58" type="FRAME" */}
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
                  {/* name="img" id=I71:11142;5629:58 type=FRAME */}
                  <></>
                </div>
                {/* name="Badge" id="I71:11142;5629:59" type="INSTANCE" */}
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
                  {/* name="Badge" id=I71:11142;5629:59 type=INSTANCE */}
                  <></>
                </Flex>
                {/* name="opentoWork" id="I71:11142;5629:60" type="FRAME" */}
                <QodeSvgI7111142562960
                  style={{
                    width: "36px",
                    height: "36px",
                    position: "absolute",
                  }}
                  {...{}}
                />
              </Flex>
              {/* name="Content" id="71:11143" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "4px",
                  flex: "1 0 0",
                }}
              >
                {/* name="wrap" id="500:27442" type="FRAME" */}
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
                  {/* name="YoE" id="500:27444" type="FRAME" */}
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
                {/* name="Location" id="71:11149" type="FRAME" */}
                <div
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  {/* name="location-dot" id="71:11150" type="INSTANCE" */}
                  <QodeSvg7111150
                    style={{ width: "16px", height: "16px" }}
                    {...{}}
                  />
                  <span
                    style={{
                      color: "var(--text-text-neutral-50, #1d1d1d)",
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
            {/* name="eye" id="71:11152" type="INSTANCE" */}
            <Flex
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
            >
              {/* name="Vector" id="I71:11152;2828:2354" type="VECTOR" */}
              <Flex
                style={{
                  width: "10.801px",
                  height: "8.4px",
                  flexShrink: "0",
                  fill: "var(--purple-purple-40, #9254de)",
                }}
              >
                {/* name="Vector" id=I71:11152;2828:2354 type=VECTOR */}
                <></>
              </Flex>
            </Flex>
          </div>
        </>
      )}
      {/* id="40:9553" */}
      {`${state}` === `active` && (
        <>
          {/* name="State=active" id="40:9553" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "350px",
              padding: "12px 16px",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "12px",
              borderBottom:
                "2px solid var(--border-border-primary-20, #158de2)",
              background: "#F6FBFF",
            }}
          >
            {/* name="Header" id="40:9554" type="FRAME" */}
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "var(--font-size-base, 14px)",
                alignSelf: "stretch",
              }}
            >
              {/* name="avatar" id="40:9555" type="INSTANCE" */}
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
                {/* name="user-large" id="I40:9555;5629:57" type="INSTANCE" */}
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
                  {/* name="Vector" id="I40:9555;5629:57;2828:6334" type="VECTOR" */}
                  <Flex
                    style={{
                      width: "14.4px",
                      height: "14.4px",
                      flexShrink: "0",
                      fill: "var(--color-neutral-background-colorbgcontainer, #fff)",
                    }}
                  >
                    {/* name="Vector" id=I40:9555;5629:57;2828:6334 type=VECTOR */}
                    <></>
                  </Flex>
                </Flex>
                {/* name="img" id="I40:9555;5629:58" type="FRAME" */}
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
                  {/* name="img" id=I40:9555;5629:58 type=FRAME */}
                  <></>
                </div>
                {/* name="Badge" id="I40:9555;5629:59" type="INSTANCE" */}
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
                  {/* name="Badge" id=I40:9555;5629:59 type=INSTANCE */}
                  <></>
                </Flex>
                {/* name="opentoWork" id="I40:9555;5629:60" type="FRAME" */}
                <QodeSvgI409555562960
                  style={{
                    width: "36px",
                    height: "36px",
                    position: "absolute",
                  }}
                  {...{}}
                />
              </Flex>
              {/* name="Frame 37215" id="40:9556" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "4px",
                  flex: "1 0 0",
                }}
              >
                {/* name="wrap" id="500:27456" type="FRAME" */}
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
                  {/* name="YoE" id="500:27458" type="FRAME" */}
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
                {/* name="Location" id="69:9009" type="FRAME" */}
                <div
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  {/* name="location-dot" id="69:9010" type="INSTANCE" */}
                  <QodeSvg699010
                    style={{ width: "16px", height: "16px" }}
                    {...{}}
                  />
                  <span
                    style={{
                      color: "var(--text-text-neutral-50, #1d1d1d)",
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
          </div>
        </>
      )}
    </>
  )
}