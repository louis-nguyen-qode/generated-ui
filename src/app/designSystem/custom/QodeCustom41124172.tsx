// id="411:24172"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvgI41619892272038013 from "@designSystem/icon/svg/QodeSvgI41619892272038013"
import QodeSvgI41620931272038032 from "@designSystem/icon/svg/QodeSvgI41620931272038032"
import QodeSvgI41620833272038032 from "@designSystem/icon/svg/QodeSvgI41620833272038032"
import QodeSvgI4112411717023793 from "@designSystem/icon/svg/QodeSvgI4112411717023793"
import QodeSvgI4112411817023793 from "@designSystem/icon/svg/QodeSvgI4112411817023793"
import QodeSvgI41620875272038013 from "@designSystem/icon/svg/QodeSvgI41620875272038013"

export interface QodeCustom41124172Props {
  state?: "Selected" | "Open" | "Worldwide" | "Filtered" | "Start typing"
}

export const QodeCustom41124172: React.FC<
  QodeCustom41124172Props & { style?: CSSProperties }
> = ({ state = "Open", ...rest }) => {
  return (
    <>
      {/* name="Filter | Location" id="411:24172" type="COMPONENT_SET" */}
      {/* id="411:24171" */}
      {`${state}` === `Open` && (
        <>
          {/* name="State=Open" id="411:24171" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "320px",
              flexDirection: "column",
              alignItems: "flex-start",
              borderRadius: "var(--border-radius-base, 8px)",
              background: "var(--neutral-white, #fff)",
              boxShadow:
                "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 6px 16px 0px rgba(0, 0, 0, 0.08)",
            }}
          >
            {/* name="body" id="411:23991" type="FRAME" */}
            <div
              style={{
                display: "flex",
                padding: "20px",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "12px",
                alignSelf: "stretch",
              }}
            >
              {/* name="Search bar" id="416:19892" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "10px 12px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "8px",
                  alignSelf: "stretch",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                  background: "var(--background-bg-white, #fff)",
                }}
              >
                {/* name="🎰 icon left" id="I416:19892;2720:38013" type="INSTANCE" */}
                <QodeSvgI41619892272038013
                  style={{ width: "16px", height: "16px" }}
                  {...{}}
                />
                <span
                  style={{
                    color: "var(--color-neutral-text-colortext, #000)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`PRE`}</span>
                <span
                  style={{
                    flex: "1 0 0",
                    color: "var(--text-text-placeholder, #a7a7a7)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Search location`}</span>
                <span
                  style={{
                    color:
                      "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`SUF`}</span>
                {/* name="🎰 icon right" id="I416:19892;2720:38017" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "1.6px 2.4px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {/* name="Vector" id="I416:19892;2720:38017;2828:6396" type="VECTOR" */}
                  <Flex
                    style={{
                      width: "11.2px",
                      height: "12.8px",
                      flexShrink: "0",
                      fill: "var(--color-neutral-text-colortext, #000)",
                    }}
                  >
                    {/* name="Vector" id=I416:19892;2720:38017;2828:6396 type=VECTOR */}
                    <></>
                  </Flex>
                </Flex>
              </Flex>
              {/* name="---" id="411:24004" type="LINE" */}
              <Flex
                style={{
                  width: "280px",
                  height: "1px",
                  background: "var(--border-border-neutral-20, #e3e3e3)",
                }}
              >
                {/* name="---" id=411:24004 type=LINE */}
                <></>
              </Flex>
              {/* name="worldwide" id="411:24005" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  alignSelf: "stretch",
                }}
              >
                <span
                  style={{
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Worldwide`}</span>
                {/* name="Switch" id="411:24007" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    borderRadius: "999px",
                    background: "var(--text-text-placeholder, #a7a7a7)",
                  }}
                >
                  {/* name="Switch Dot" id="I411:24007;157:3830" type="RECTANGLE" */}
                  <Flex
                    style={{
                      width: "18px",
                      height: "18px",
                      position: "absolute",
                      left: "2px",
                      top: "2px",
                      borderRadius: "200px",
                      background: "var(--text-text-white, #fff)",
                      boxShadow:
                        "0px 2px 4px 0px rgba(0, 0, 0, 0.02), 0px 1px 6px -1px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.03)",
                    }}
                  >
                    {/* name="Switch Dot" id=I411:24007;157:3830 type=RECTANGLE */}
                    <></>
                  </Flex>
                </Flex>
              </div>
            </div>
            {/* name="Action" id="411:24159" type="FRAME" */}
            <div
              style={{
                display: "flex",
                padding: "12px",
                justifyContent: "flex-end",
                alignItems: "center",
                gap: "3px",
                alignSelf: "stretch",
                borderTop:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--neutral-gray-5, #f8f6f6)",
              }}
            >
              {/* name="Button" id="411:24160" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "4px 16px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "8px",
                  borderRadius: "var(--border-radius-rounded, 999px)",
                }}
              >
                {/* name="🎰 icon" id="I411:24160;114:1816" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "1.599px 1.599px 1.599px 1.6px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {/* name="Vector" id="I411:24160;114:1816;2828:3516" type="VECTOR" */}
                  <Flex
                    style={{
                      width: "12.801px",
                      height: "12.803px",
                      flexShrink: "0",
                      fill: "var(--color-neutral-text-colortext, #000)",
                    }}
                  >
                    {/* name="Vector" id=I411:24160;114:1816;2828:3516 type=VECTOR */}
                    <></>
                  </Flex>
                </Flex>
                <span
                  style={{
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    textAlign: "center",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Cancel`}</span>
                {/* name="🎰 icon" id="I411:24160;2906:15868" type="INSTANCE" */}
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
                  {/* name="Vector" id="I411:24160;2906:15868;2828:3908" type="VECTOR" */}
                  <Flex
                    style={{
                      width: "12.799px",
                      height: "12.802px",
                      flexShrink: "0",
                      fill: "var(--color-neutral-text-colortext, #000)",
                    }}
                  >
                    {/* name="Vector" id=I411:24160;2906:15868;2828:3908 type=VECTOR */}
                    <></>
                  </Flex>
                </Flex>
              </Flex>
              {/* name="Button" id="411:24161" type="INSTANCE" */}
              <Flex
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
              >
                {/* name="🎰 icon" id="I411:24161;35:13236" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "1.599px 1.599px 1.599px 1.6px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {/* name="Vector" id="I411:24161;35:13236;2828:3516" type="VECTOR" */}
                  <Flex
                    style={{
                      width: "12.801px",
                      height: "12.803px",
                      flexShrink: "0",
                      fill: "var(--background-bg-white, #fff)",
                    }}
                  >
                    {/* name="Vector" id=I411:24161;35:13236;2828:3516 type=VECTOR */}
                    <></>
                  </Flex>
                </Flex>
                <span
                  style={{
                    color: "var(--text-text-white, #fff)",
                    textAlign: "center",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Show result`}</span>
                {/* name="🎰 icon" id="I411:24161;2906:15123" type="INSTANCE" */}
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
                  {/* name="Vector" id="I411:24161;2906:15123;2828:3908" type="VECTOR" */}
                  <Flex
                    style={{
                      width: "12.799px",
                      height: "12.802px",
                      flexShrink: "0",
                      fill: "var(--background-bg-white, #fff)",
                    }}
                  >
                    {/* name="Vector" id=I411:24161;2906:15123;2828:3908 type=VECTOR */}
                    <></>
                  </Flex>
                </Flex>
              </Flex>
            </div>
          </div>
        </>
      )}
      {/* id="416:20929" */}
      {`${state}` === `Start typing` && (
        <>
          {/* name="State=Start typing" id="416:20929" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "320px",
              flexDirection: "column",
              alignItems: "flex-start",
              borderRadius: "var(--border-radius-base, 8px)",
              background: "var(--neutral-white, #fff)",
              boxShadow:
                "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 6px 16px 0px rgba(0, 0, 0, 0.08)",
            }}
          >
            {/* name="body" id="416:20930" type="FRAME" */}
            <div
              style={{
                display: "flex",
                padding: "20px",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "12px",
                alignSelf: "stretch",
              }}
            >
              {/* name="Search bar" id="416:20931" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "10px 12px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "8px",
                  alignSelf: "stretch",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-50, #6f6f6f)",
                  background: "var(--background-bg-white, #fff)",
                }}
              >
                {/* name="🎰 icon left" id="I416:20931;2720:38032" type="INSTANCE" */}
                <QodeSvgI41620931272038032
                  style={{ width: "16px", height: "16px" }}
                  {...{}}
                />
                <span
                  style={{
                    color: "var(--color-neutral-text-colortext, #000)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`PRE`}</span>
                <span
                  style={{
                    flex: "1 0 0",
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Vi`}</span>
                <span
                  style={{
                    color:
                      "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`SUF`}</span>
                {/* name="🎰 icon right" id="I416:20931;2720:38036" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "1.6px 2.4px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {/* name="Vector" id="I416:20931;2720:38036;2828:6396" type="VECTOR" */}
                  <Flex
                    style={{
                      width: "11.2px",
                      height: "12.8px",
                      flexShrink: "0",
                      fill: "var(--color-neutral-text-colortext, #000)",
                    }}
                  >
                    {/* name="Vector" id=I416:20931;2720:38036;2828:6396 type=VECTOR */}
                    <></>
                  </Flex>
                </Flex>
                {/* name="Focus Ring" id="I416:20931;2720:38037" type="RECTANGLE" */}
                <Flex
                  style={{
                    width: "280px",
                    height: "32px",
                    position: "absolute",
                    borderRadius: "var(--border-radius-base, 8px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  }}
                >
                  {/* name="Focus Ring" id=I416:20931;2720:38037 type=RECTANGLE */}
                  <></>
                </Flex>
              </Flex>
              {/* name="list" id="416:20932" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "4px",
                  alignSelf: "stretch",
                }}
              >
                {/* name="🧬 item 1" id="416:20933" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    height: "var(--size-height-controlheight, 32px)",
                    padding: "0px var(--size-padding-paddingsm, 12px)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    alignSelf: "stretch",
                    borderRadius: "var(--style-radius-borderradius, 8px)",
                    background:
                      "var(--color-neutral-fill-colorfilltertiary, rgba(0, 0, 0, 0.04))",
                  }}
                >
                  <span
                    style={{
                      flex: "1 0 0",
                      color: "var(--text-text-neutral-50, #1d1d1d)",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    }}
                  >{`Bolivia`}</span>
                </Flex>
                {/* name="🧬 item 2" id="416:20934" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    height: "var(--size-height-controlheight, 32px)",
                    padding: "0px var(--size-padding-paddingsm, 12px)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    alignSelf: "stretch",
                    borderRadius: "var(--style-radius-borderradius, 8px)",
                  }}
                >
                  <span
                    style={{
                      flex: "1 0 0",
                      color: "var(--text-text-neutral-50, #1d1d1d)",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    }}
                  >{`Latvia`}</span>
                </Flex>
                {/* name="🧬 item 8" id="416:20935" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    height: "var(--size-height-controlheight, 32px)",
                    padding: "0px var(--size-padding-paddingsm, 12px)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    alignSelf: "stretch",
                    borderRadius: "var(--style-radius-borderradius, 8px)",
                  }}
                >
                  <span
                    style={{
                      flex: "1 0 0",
                      color: "var(--text-text-neutral-50, #1d1d1d)",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    }}
                  >{`Vietnam`}</span>
                </Flex>
                {/* name="🧬 item 10" id="416:20936" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    height: "var(--size-height-controlheight, 32px)",
                    padding: "0px var(--size-padding-paddingsm, 12px)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    alignSelf: "stretch",
                    borderRadius: "var(--style-radius-borderradius, 8px)",
                  }}
                >
                  <span
                    style={{
                      flex: "1 0 0",
                      color: "var(--text-text-neutral-50, #1d1d1d)",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    }}
                  >{`Vietnam, Ho Chi Minh city`}</span>
                </Flex>
                {/* name="🧬 item 9" id="416:20937" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    height: "var(--size-height-controlheight, 32px)",
                    padding: "0px var(--size-padding-paddingsm, 12px)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    alignSelf: "stretch",
                    borderRadius: "var(--style-radius-borderradius, 8px)",
                  }}
                >
                  <span
                    style={{
                      flex: "1 0 0",
                      color: "var(--text-text-neutral-50, #1d1d1d)",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    }}
                  >{`Virgin Islands (US)`}</span>
                </Flex>
                {/* name="🧬 item 7" id="416:20938" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    height: "var(--size-height-controlheight, 32px)",
                    padding: "0px var(--size-padding-paddingsm, 12px)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    alignSelf: "stretch",
                    borderRadius: "var(--style-radius-borderradius, 8px)",
                  }}
                >
                  <span
                    style={{
                      flex: "1 0 0",
                      color: "var(--text-text-neutral-50, #1d1d1d)",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    }}
                  >{`Virgin Islands (British)`}</span>
                </Flex>
              </div>
              {/* name="---" id="416:20939" type="LINE" */}
              <Flex
                style={{
                  width: "280px",
                  height: "1px",
                  background: "var(--border-border-neutral-20, #e3e3e3)",
                }}
              >
                {/* name="---" id=416:20939 type=LINE */}
                <></>
              </Flex>
              {/* name="worldwide" id="416:20940" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  alignSelf: "stretch",
                }}
              >
                <span
                  style={{
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Worldwide`}</span>
                {/* name="Switch" id="416:20942" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    borderRadius: "999px",
                    background: "var(--text-text-placeholder, #a7a7a7)",
                  }}
                >
                  {/* name="Switch Dot" id="I416:20942;157:3830" type="RECTANGLE" */}
                  <Flex
                    style={{
                      width: "18px",
                      height: "18px",
                      position: "absolute",
                      left: "2px",
                      top: "2px",
                      borderRadius: "200px",
                      background: "var(--text-text-white, #fff)",
                      boxShadow:
                        "0px 2px 4px 0px rgba(0, 0, 0, 0.02), 0px 1px 6px -1px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.03)",
                    }}
                  >
                    {/* name="Switch Dot" id=I416:20942;157:3830 type=RECTANGLE */}
                    <></>
                  </Flex>
                </Flex>
              </div>
            </div>
            {/* name="Action" id="416:20943" type="FRAME" */}
            <div
              style={{
                display: "flex",
                padding: "12px",
                justifyContent: "flex-end",
                alignItems: "center",
                gap: "3px",
                alignSelf: "stretch",
                borderTop:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--neutral-gray-5, #f8f6f6)",
              }}
            >
              {/* name="Button" id="416:20944" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "4px 16px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "8px",
                  borderRadius: "var(--border-radius-rounded, 999px)",
                }}
              >
                {/* name="🎰 icon" id="I416:20944;114:1816" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "1.599px 1.599px 1.599px 1.6px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {/* name="Vector" id="I416:20944;114:1816;2828:3516" type="VECTOR" */}
                  <Flex
                    style={{
                      width: "12.801px",
                      height: "12.803px",
                      flexShrink: "0",
                      fill: "var(--color-neutral-text-colortext, #000)",
                    }}
                  >
                    {/* name="Vector" id=I416:20944;114:1816;2828:3516 type=VECTOR */}
                    <></>
                  </Flex>
                </Flex>
                <span
                  style={{
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    textAlign: "center",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Cancel`}</span>
                {/* name="🎰 icon" id="I416:20944;2906:15868" type="INSTANCE" */}
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
                  {/* name="Vector" id="I416:20944;2906:15868;2828:3908" type="VECTOR" */}
                  <Flex
                    style={{
                      width: "12.799px",
                      height: "12.802px",
                      flexShrink: "0",
                      fill: "var(--color-neutral-text-colortext, #000)",
                    }}
                  >
                    {/* name="Vector" id=I416:20944;2906:15868;2828:3908 type=VECTOR */}
                    <></>
                  </Flex>
                </Flex>
              </Flex>
              {/* name="Button" id="416:20945" type="INSTANCE" */}
              <Flex
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
              >
                {/* name="🎰 icon" id="I416:20945;35:13236" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "1.599px 1.599px 1.599px 1.6px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {/* name="Vector" id="I416:20945;35:13236;2828:3516" type="VECTOR" */}
                  <Flex
                    style={{
                      width: "12.801px",
                      height: "12.803px",
                      flexShrink: "0",
                      fill: "var(--background-bg-white, #fff)",
                    }}
                  >
                    {/* name="Vector" id=I416:20945;35:13236;2828:3516 type=VECTOR */}
                    <></>
                  </Flex>
                </Flex>
                <span
                  style={{
                    color: "var(--text-text-white, #fff)",
                    textAlign: "center",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Show result`}</span>
                {/* name="🎰 icon" id="I416:20945;2906:15123" type="INSTANCE" */}
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
                  {/* name="Vector" id="I416:20945;2906:15123;2828:3908" type="VECTOR" */}
                  <Flex
                    style={{
                      width: "12.799px",
                      height: "12.802px",
                      flexShrink: "0",
                      fill: "var(--background-bg-white, #fff)",
                    }}
                  >
                    {/* name="Vector" id=I416:20945;2906:15123;2828:3908 type=VECTOR */}
                    <></>
                  </Flex>
                </Flex>
              </Flex>
            </div>
          </div>
        </>
      )}
      {/* id="411:24170" */}
      {`${state}` === `Selected` && (
        <>
          {/* name="State=Selected" id="411:24170" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "320px",
              flexDirection: "column",
              alignItems: "flex-start",
              borderRadius: "var(--border-radius-base, 8px)",
              background: "var(--neutral-white, #fff)",
              boxShadow:
                "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 6px 16px 0px rgba(0, 0, 0, 0.08)",
            }}
          >
            {/* name="body" id="411:24111" type="FRAME" */}
            <div
              style={{
                display: "flex",
                padding: "20px",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "12px",
                alignSelf: "stretch",
              }}
            >
              {/* name="Search bar" id="416:20833" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "10px 12px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "8px",
                  alignSelf: "stretch",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-50, #6f6f6f)",
                  background: "var(--background-bg-white, #fff)",
                }}
              >
                {/* name="🎰 icon left" id="I416:20833;2720:38032" type="INSTANCE" */}
                <QodeSvgI41620833272038032
                  style={{ width: "16px", height: "16px" }}
                  {...{}}
                />
                <span
                  style={{
                    color: "var(--color-neutral-text-colortext, #000)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`PRE`}</span>
                <span
                  style={{
                    flex: "1 0 0",
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Vi`}</span>
                <span
                  style={{
                    color:
                      "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`SUF`}</span>
                {/* name="🎰 icon right" id="I416:20833;2720:38036" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "1.6px 2.4px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {/* name="Vector" id="I416:20833;2720:38036;2828:6396" type="VECTOR" */}
                  <Flex
                    style={{
                      width: "11.2px",
                      height: "12.8px",
                      flexShrink: "0",
                      fill: "var(--color-neutral-text-colortext, #000)",
                    }}
                  >
                    {/* name="Vector" id=I416:20833;2720:38036;2828:6396 type=VECTOR */}
                    <></>
                  </Flex>
                </Flex>
                {/* name="Focus Ring" id="I416:20833;2720:38037" type="RECTANGLE" */}
                <Flex
                  style={{
                    width: "280px",
                    height: "32px",
                    position: "absolute",
                    borderRadius: "var(--border-radius-base, 8px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  }}
                >
                  {/* name="Focus Ring" id=I416:20833;2720:38037 type=RECTANGLE */}
                  <></>
                </Flex>
              </Flex>
              {/* name="list" id="411:24116" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "4px",
                  alignSelf: "stretch",
                }}
              >
                {/* name="🧬 item 1" id="411:24117" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    height: "var(--size-height-controlheight, 32px)",
                    padding: "0px var(--size-padding-paddingsm, 12px)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    alignSelf: "stretch",
                    borderRadius: "var(--style-radius-borderradius, 8px)",
                    background: "var(--primary-primary-10, #d6eeff)",
                  }}
                >
                  <span
                    style={{
                      flex: "1 0 0",
                      color: "var(--text-text-neutral-50, #1d1d1d)",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    }}
                  >{`Bolivia`}</span>
                  {/* name="check" id="I411:24117;170:23793" type="INSTANCE" */}
                  <QodeSvgI4112411717023793
                    style={{ width: "20px", height: "20px" }}
                    {...{}}
                  />
                </Flex>
                {/* name="🧬 item 2" id="411:24118" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    height: "var(--size-height-controlheight, 32px)",
                    padding: "0px var(--size-padding-paddingsm, 12px)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    alignSelf: "stretch",
                    borderRadius: "var(--style-radius-borderradius, 8px)",
                    background: "var(--primary-primary-10, #d6eeff)",
                  }}
                >
                  <span
                    style={{
                      flex: "1 0 0",
                      color: "var(--text-text-neutral-50, #1d1d1d)",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    }}
                  >{`Latvia`}</span>
                  {/* name="check" id="I411:24118;170:23793" type="INSTANCE" */}
                  <QodeSvgI4112411817023793
                    style={{ width: "20px", height: "20px" }}
                    {...{}}
                  />
                </Flex>
                {/* name="🧬 item 8" id="411:24119" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    height: "var(--size-height-controlheight, 32px)",
                    padding: "0px var(--size-padding-paddingsm, 12px)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    alignSelf: "stretch",
                    borderRadius: "var(--style-radius-borderradius, 8px)",
                  }}
                >
                  <span
                    style={{
                      flex: "1 0 0",
                      color: "var(--text-text-neutral-50, #1d1d1d)",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    }}
                  >{`Vietnam`}</span>
                </Flex>
                {/* name="🧬 item 10" id="416:20501" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    height: "var(--size-height-controlheight, 32px)",
                    padding: "0px var(--size-padding-paddingsm, 12px)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    alignSelf: "stretch",
                    borderRadius: "var(--style-radius-borderradius, 8px)",
                  }}
                >
                  <span
                    style={{
                      flex: "1 0 0",
                      color: "var(--text-text-neutral-50, #1d1d1d)",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    }}
                  >{`Vietnam, Ho Chi Minh city`}</span>
                </Flex>
                {/* name="🧬 item 9" id="411:24120" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    height: "var(--size-height-controlheight, 32px)",
                    padding: "0px var(--size-padding-paddingsm, 12px)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    alignSelf: "stretch",
                    borderRadius: "var(--style-radius-borderradius, 8px)",
                  }}
                >
                  <span
                    style={{
                      flex: "1 0 0",
                      color: "var(--text-text-neutral-50, #1d1d1d)",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    }}
                  >{`Virgin Islands (US)`}</span>
                </Flex>
                {/* name="🧬 item 7" id="411:24121" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    height: "var(--size-height-controlheight, 32px)",
                    padding: "0px var(--size-padding-paddingsm, 12px)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    alignSelf: "stretch",
                    borderRadius: "var(--style-radius-borderradius, 8px)",
                  }}
                >
                  <span
                    style={{
                      flex: "1 0 0",
                      color: "var(--text-text-neutral-50, #1d1d1d)",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    }}
                  >{`Virgin Islands (British)`}</span>
                </Flex>
              </div>
              {/* name="---" id="411:24115" type="LINE" */}
              <Flex
                style={{
                  width: "280px",
                  height: "1px",
                  background: "var(--border-border-neutral-20, #e3e3e3)",
                }}
              >
                {/* name="---" id=411:24115 type=LINE */}
                <></>
              </Flex>
              {/* name="worldwide" id="411:24112" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  alignSelf: "stretch",
                }}
              >
                <span
                  style={{
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Worldwide`}</span>
                {/* name="Switch" id="411:24114" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    borderRadius: "999px",
                    background: "var(--text-text-placeholder, #a7a7a7)",
                  }}
                >
                  {/* name="Switch Dot" id="I411:24114;157:3830" type="RECTANGLE" */}
                  <Flex
                    style={{
                      width: "18px",
                      height: "18px",
                      position: "absolute",
                      left: "2px",
                      top: "2px",
                      borderRadius: "200px",
                      background: "var(--text-text-white, #fff)",
                      boxShadow:
                        "0px 2px 4px 0px rgba(0, 0, 0, 0.02), 0px 1px 6px -1px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.03)",
                    }}
                  >
                    {/* name="Switch Dot" id=I411:24114;157:3830 type=RECTANGLE */}
                    <></>
                  </Flex>
                </Flex>
              </div>
            </div>
            {/* name="Action" id="411:24149" type="FRAME" */}
            <div
              style={{
                display: "flex",
                padding: "12px",
                justifyContent: "flex-end",
                alignItems: "center",
                gap: "3px",
                alignSelf: "stretch",
                borderTop:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--neutral-gray-5, #f8f6f6)",
              }}
            >
              {/* name="Button" id="411:24150" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "4px 16px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "8px",
                  borderRadius: "var(--border-radius-rounded, 999px)",
                }}
              >
                {/* name="🎰 icon" id="I411:24150;114:1816" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "1.599px 1.599px 1.599px 1.6px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {/* name="Vector" id="I411:24150;114:1816;2828:3516" type="VECTOR" */}
                  <Flex
                    style={{
                      width: "12.801px",
                      height: "12.803px",
                      flexShrink: "0",
                      fill: "var(--color-neutral-text-colortext, #000)",
                    }}
                  >
                    {/* name="Vector" id=I411:24150;114:1816;2828:3516 type=VECTOR */}
                    <></>
                  </Flex>
                </Flex>
                <span
                  style={{
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    textAlign: "center",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Cancel`}</span>
                {/* name="🎰 icon" id="I411:24150;2906:15868" type="INSTANCE" */}
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
                  {/* name="Vector" id="I411:24150;2906:15868;2828:3908" type="VECTOR" */}
                  <Flex
                    style={{
                      width: "12.799px",
                      height: "12.802px",
                      flexShrink: "0",
                      fill: "var(--color-neutral-text-colortext, #000)",
                    }}
                  >
                    {/* name="Vector" id=I411:24150;2906:15868;2828:3908 type=VECTOR */}
                    <></>
                  </Flex>
                </Flex>
              </Flex>
              {/* name="Button" id="411:24151" type="INSTANCE" */}
              <Flex
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
              >
                {/* name="🎰 icon" id="I411:24151;35:13236" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "1.599px 1.599px 1.599px 1.6px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {/* name="Vector" id="I411:24151;35:13236;2828:3516" type="VECTOR" */}
                  <Flex
                    style={{
                      width: "12.801px",
                      height: "12.803px",
                      flexShrink: "0",
                      fill: "var(--background-bg-white, #fff)",
                    }}
                  >
                    {/* name="Vector" id=I411:24151;35:13236;2828:3516 type=VECTOR */}
                    <></>
                  </Flex>
                </Flex>
                <span
                  style={{
                    color: "var(--text-text-white, #fff)",
                    textAlign: "center",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Show result`}</span>
                {/* name="🎰 icon" id="I411:24151;2906:15123" type="INSTANCE" */}
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
                  {/* name="Vector" id="I411:24151;2906:15123;2828:3908" type="VECTOR" */}
                  <Flex
                    style={{
                      width: "12.799px",
                      height: "12.802px",
                      flexShrink: "0",
                      fill: "var(--background-bg-white, #fff)",
                    }}
                  >
                    {/* name="Vector" id=I411:24151;2906:15123;2828:3908 type=VECTOR */}
                    <></>
                  </Flex>
                </Flex>
              </Flex>
            </div>
          </div>
        </>
      )}
      {/* id="416:20873" */}
      {`${state}` === `Filtered` && (
        <>
          {/* name="State=Filtered" id="416:20873" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "320px",
              flexDirection: "column",
              alignItems: "flex-start",
              borderRadius: "var(--border-radius-base, 8px)",
              background: "var(--neutral-white, #fff)",
              boxShadow:
                "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 6px 16px 0px rgba(0, 0, 0, 0.08)",
            }}
          >
            {/* name="body" id="416:20874" type="FRAME" */}
            <div
              style={{
                display: "flex",
                padding: "20px",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "12px",
                alignSelf: "stretch",
              }}
            >
              {/* name="Frame 37372" id="416:21038" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  alignSelf: "stretch",
                }}
              >
                <span
                  style={{
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    textDecorationLine: "underline",
                  }}
                >{`12 location selected`}</span>
                {/* name="Button" id="416:21031" type="INSTANCE" */}
                <Flex
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
                >
                  {/* name="🎰 icon" id="I416:21031;114:1867" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "var(--font-size-base, 14px)",
                      height: "var(--font-size-base, 14px)",
                      padding: "1.399px 1.399px 1.399px 1.4px",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {/* name="Vector" id="I416:21031;114:1867;2828:3516" type="VECTOR" */}
                    <Flex
                      style={{
                        width: "11.201px",
                        height: "11.202px",
                        flexShrink: "0",
                        fill: "var(--color-neutral-text-colortext, #000)",
                      }}
                    >
                      {/* name="Vector" id=I416:21031;114:1867;2828:3516 type=VECTOR */}
                      <></>
                    </Flex>
                  </Flex>
                  <span
                    style={{
                      color: "var(--text-text-neutral-50, #1d1d1d)",
                      textAlign: "center",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-small, 12px)",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight:
                        "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                    }}
                  >{`Clear`}</span>
                  {/* name="🎰 icon" id="I416:21031;2906:15522" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "var(--font-size-base, 14px)",
                      height: "var(--font-size-base, 14px)",
                      padding: "1.4px 1.401px 1.398px 1.4px",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {/* name="Vector" id="I416:21031;2906:15522;2828:3908" type="VECTOR" */}
                    <Flex
                      style={{
                        width: "11.199px",
                        height: "11.202px",
                        flexShrink: "0",
                        fill: "var(--color-neutral-text-colortext, #000)",
                      }}
                    >
                      {/* name="Vector" id=I416:21031;2906:15522;2828:3908 type=VECTOR */}
                      <></>
                    </Flex>
                  </Flex>
                </Flex>
              </div>
              {/* name="Search bar" id="416:20875" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "10px 12px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "8px",
                  alignSelf: "stretch",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                  background: "var(--background-bg-white, #fff)",
                }}
              >
                {/* name="🎰 icon left" id="I416:20875;2720:38013" type="INSTANCE" */}
                <QodeSvgI41620875272038013
                  style={{ width: "16px", height: "16px" }}
                  {...{}}
                />
                <span
                  style={{
                    color: "var(--color-neutral-text-colortext, #000)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`PRE`}</span>
                <span
                  style={{
                    flex: "1 0 0",
                    color: "var(--text-text-placeholder, #a7a7a7)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Search location`}</span>
                <span
                  style={{
                    color:
                      "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`SUF`}</span>
                {/* name="🎰 icon right" id="I416:20875;2720:38017" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "1.6px 2.4px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {/* name="Vector" id="I416:20875;2720:38017;2828:6396" type="VECTOR" */}
                  <Flex
                    style={{
                      width: "11.2px",
                      height: "12.8px",
                      flexShrink: "0",
                      fill: "var(--color-neutral-text-colortext, #000)",
                    }}
                  >
                    {/* name="Vector" id=I416:20875;2720:38017;2828:6396 type=VECTOR */}
                    <></>
                  </Flex>
                </Flex>
              </Flex>
              {/* name="worldwide" id="416:20884" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  alignSelf: "stretch",
                }}
              >
                <span
                  style={{
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Worldwide`}</span>
                {/* name="Switch" id="416:20886" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    borderRadius: "999px",
                    background: "var(--text-text-placeholder, #a7a7a7)",
                  }}
                >
                  {/* name="Switch Dot" id="I416:20886;157:3830" type="RECTANGLE" */}
                  <Flex
                    style={{
                      width: "18px",
                      height: "18px",
                      position: "absolute",
                      left: "2px",
                      top: "2px",
                      borderRadius: "200px",
                      background: "var(--text-text-white, #fff)",
                      boxShadow:
                        "0px 2px 4px 0px rgba(0, 0, 0, 0.02), 0px 1px 6px -1px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.03)",
                    }}
                  >
                    {/* name="Switch Dot" id=I416:20886;157:3830 type=RECTANGLE */}
                    <></>
                  </Flex>
                </Flex>
              </div>
            </div>
            {/* name="Action" id="416:20887" type="FRAME" */}
            <div
              style={{
                display: "flex",
                padding: "12px",
                justifyContent: "flex-end",
                alignItems: "center",
                gap: "3px",
                alignSelf: "stretch",
                borderTop:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--neutral-gray-5, #f8f6f6)",
              }}
            >
              {/* name="Button" id="416:20888" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "4px 16px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "8px",
                  borderRadius: "var(--border-radius-rounded, 999px)",
                }}
              >
                {/* name="🎰 icon" id="I416:20888;114:1816" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "1.599px 1.599px 1.599px 1.6px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {/* name="Vector" id="I416:20888;114:1816;2828:3516" type="VECTOR" */}
                  <Flex
                    style={{
                      width: "12.801px",
                      height: "12.803px",
                      flexShrink: "0",
                      fill: "var(--color-neutral-text-colortext, #000)",
                    }}
                  >
                    {/* name="Vector" id=I416:20888;114:1816;2828:3516 type=VECTOR */}
                    <></>
                  </Flex>
                </Flex>
                <span
                  style={{
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    textAlign: "center",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Cancel`}</span>
                {/* name="🎰 icon" id="I416:20888;2906:15868" type="INSTANCE" */}
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
                  {/* name="Vector" id="I416:20888;2906:15868;2828:3908" type="VECTOR" */}
                  <Flex
                    style={{
                      width: "12.799px",
                      height: "12.802px",
                      flexShrink: "0",
                      fill: "var(--color-neutral-text-colortext, #000)",
                    }}
                  >
                    {/* name="Vector" id=I416:20888;2906:15868;2828:3908 type=VECTOR */}
                    <></>
                  </Flex>
                </Flex>
              </Flex>
              {/* name="Button" id="416:20889" type="INSTANCE" */}
              <Flex
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
              >
                {/* name="🎰 icon" id="I416:20889;35:13236" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "1.599px 1.599px 1.599px 1.6px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {/* name="Vector" id="I416:20889;35:13236;2828:3516" type="VECTOR" */}
                  <Flex
                    style={{
                      width: "12.801px",
                      height: "12.803px",
                      flexShrink: "0",
                      fill: "var(--background-bg-white, #fff)",
                    }}
                  >
                    {/* name="Vector" id=I416:20889;35:13236;2828:3516 type=VECTOR */}
                    <></>
                  </Flex>
                </Flex>
                <span
                  style={{
                    color: "var(--text-text-white, #fff)",
                    textAlign: "center",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Show result`}</span>
                {/* name="🎰 icon" id="I416:20889;2906:15123" type="INSTANCE" */}
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
                  {/* name="Vector" id="I416:20889;2906:15123;2828:3908" type="VECTOR" */}
                  <Flex
                    style={{
                      width: "12.799px",
                      height: "12.802px",
                      flexShrink: "0",
                      fill: "var(--background-bg-white, #fff)",
                    }}
                  >
                    {/* name="Vector" id=I416:20889;2906:15123;2828:3908 type=VECTOR */}
                    <></>
                  </Flex>
                </Flex>
              </Flex>
            </div>
          </div>
        </>
      )}
      {/* id="411:24169" */}
      {`${state}` === `Worldwide` && (
        <>
          {/* name="State=Worldwide" id="411:24169" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "320px",
              flexDirection: "column",
              alignItems: "flex-start",
              borderRadius: "var(--border-radius-base, 8px)",
              background: "var(--neutral-white, #fff)",
              boxShadow:
                "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 6px 16px 0px rgba(0, 0, 0, 0.08)",
            }}
          >
            {/* name="body" id="411:24049" type="FRAME" */}
            <div
              style={{
                display: "flex",
                padding: "20px",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "12px",
                alignSelf: "stretch",
              }}
            >
              {/* name="worldwide" id="411:24050" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  alignSelf: "stretch",
                }}
              >
                <span
                  style={{
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Worldwide`}</span>
                {/* name="Switch" id="411:24052" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    borderRadius: "999px",
                    background: "var(--background-bg-primary, #1597f4)",
                  }}
                >
                  {/* name="Switch Dot" id="I411:24052;157:3797" type="RECTANGLE" */}
                  <Flex
                    style={{
                      width: "18px",
                      height: "18px",
                      position: "absolute",
                      right: "2px",
                      top: "2px",
                      borderRadius: "200px",
                      background: "var(--text-text-white, #fff)",
                      boxShadow:
                        "0px 2px 4px 0px rgba(0, 0, 0, 0.02), 0px 1px 6px -1px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.03)",
                    }}
                  >
                    {/* name="Switch Dot" id=I411:24052;157:3797 type=RECTANGLE */}
                    <></>
                  </Flex>
                </Flex>
              </div>
            </div>
            {/* name="Action" id="411:24095" type="FRAME" */}
            <div
              style={{
                display: "flex",
                padding: "12px",
                justifyContent: "flex-end",
                alignItems: "center",
                gap: "3px",
                alignSelf: "stretch",
                borderTop:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--neutral-gray-5, #f8f6f6)",
              }}
            >
              {/* name="Button" id="411:24096" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "4px 16px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "8px",
                  borderRadius: "var(--border-radius-rounded, 999px)",
                }}
              >
                {/* name="🎰 icon" id="I411:24096;114:1816" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "1.599px 1.599px 1.599px 1.6px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {/* name="Vector" id="I411:24096;114:1816;2828:3516" type="VECTOR" */}
                  <Flex
                    style={{
                      width: "12.801px",
                      height: "12.803px",
                      flexShrink: "0",
                      fill: "var(--color-neutral-text-colortext, #000)",
                    }}
                  >
                    {/* name="Vector" id=I411:24096;114:1816;2828:3516 type=VECTOR */}
                    <></>
                  </Flex>
                </Flex>
                <span
                  style={{
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    textAlign: "center",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Cancel`}</span>
                {/* name="🎰 icon" id="I411:24096;2906:15868" type="INSTANCE" */}
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
                  {/* name="Vector" id="I411:24096;2906:15868;2828:3908" type="VECTOR" */}
                  <Flex
                    style={{
                      width: "12.799px",
                      height: "12.802px",
                      flexShrink: "0",
                      fill: "var(--color-neutral-text-colortext, #000)",
                    }}
                  >
                    {/* name="Vector" id=I411:24096;2906:15868;2828:3908 type=VECTOR */}
                    <></>
                  </Flex>
                </Flex>
              </Flex>
              {/* name="Button" id="411:24097" type="INSTANCE" */}
              <Flex
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
              >
                {/* name="🎰 icon" id="I411:24097;35:13236" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "1.599px 1.599px 1.599px 1.6px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {/* name="Vector" id="I411:24097;35:13236;2828:3516" type="VECTOR" */}
                  <Flex
                    style={{
                      width: "12.801px",
                      height: "12.803px",
                      flexShrink: "0",
                      fill: "var(--background-bg-white, #fff)",
                    }}
                  >
                    {/* name="Vector" id=I411:24097;35:13236;2828:3516 type=VECTOR */}
                    <></>
                  </Flex>
                </Flex>
                <span
                  style={{
                    color: "var(--text-text-white, #fff)",
                    textAlign: "center",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Show result`}</span>
                {/* name="🎰 icon" id="I411:24097;2906:15123" type="INSTANCE" */}
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
                  {/* name="Vector" id="I411:24097;2906:15123;2828:3908" type="VECTOR" */}
                  <Flex
                    style={{
                      width: "12.799px",
                      height: "12.802px",
                      flexShrink: "0",
                      fill: "var(--background-bg-white, #fff)",
                    }}
                  >
                    {/* name="Vector" id=I411:24097;2906:15123;2828:3908 type=VECTOR */}
                    <></>
                  </Flex>
                </Flex>
              </Flex>
            </div>
          </div>
        </>
      )}
    </>
  )
}
