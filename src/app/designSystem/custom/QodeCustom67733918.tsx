// id="677:33918"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvgI6773374466431806 from "@designSystem/icon/svg/QodeSvgI6773374466431806"
import QodeSvgI677337521141820 from "@designSystem/icon/svg/QodeSvgI677337521141820"
import QodeSvgI6773386167733619 from "@designSystem/icon/svg/QodeSvgI6773386167733619"
import QodeSvgI6773376966431653 from "@designSystem/icon/svg/QodeSvgI6773376966431653"
import QodeSvgI677337761141820 from "@designSystem/icon/svg/QodeSvgI677337761141820"
import QodeSvgI7453600667733619 from "@designSystem/icon/svg/QodeSvgI7453600667733619"
import QodeSvgI6773402167733736 from "@designSystem/icon/svg/QodeSvgI6773402167733736"

export interface QodeCustom67733918Props {
  property_1?: "Upcoming" | "Canceled" | "Finished"
}

export const QodeCustom67733918: React.FC<
  QodeCustom67733918Props & { style?: CSSProperties }
> = ({ property_1 = "Upcoming", ...rest }) => {
  return (
    <>
      {/* name="Interview/Timeline" id="677:33918" type="COMPONENT_SET" */}
      {/* id="677:33917" */}
      {`${property_1}` === `Upcoming` && (
        <>
          {/* name="Property 1=Upcoming" id="677:33917" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "714px",
              height: "80px",
              padding: "12px 24px",
              alignItems: "flex-start",
              gap: "20px",
              flexShrink: "0",
              borderRadius: "var(--border-radius-base, 8px)",
              border: "1px solid var(--border-border-neutral-30, #d5d5d5)",
              background: "var(--neutral-white, #fff)",
            }}
          >
            {/* name="Datetime" id="677:33740" type="FRAME" */}
            <div
              style={{
                display: "flex",
                width: "150px",
                flexDirection: "column",
                alignItems: "flex-end",
                gap: "4px",
                flexShrink: "0",
              }}
            >
              <span
                style={{
                  color: "var(--text-text-neutral-40, #464646)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Sunday, Sep 15`}</span>
              {/* name="Time" id="745:36368" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  padding: "2px 10px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                  borderRadius: "var(--border-radius-rounded, 999px)",
                  background: "var(--neutral-gray-5, #f8f6f6)",
                }}
              >
                <span
                  style={{
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    textAlign: "right",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`10:00 – 11:00 AM`}</span>
              </div>
            </div>
            {/* name="Interview/List item" id="677:33744" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "4px",
                alignSelf: "stretch",
              }}
            >
              {/* name="circle" id="I677:33744;664:31806" type="FRAME" */}
              <QodeSvgI6773374466431806
                style={{ width: "12px", height: "12px" }}
                {...{}}
              />
              {/* name="Line 37" id="I677:33744;664:31659" type="LINE" */}
              <Flex
                style={{
                  width: "1px",
                  height: "40px",
                  background: "var(--border-border-neutral-30, #d5d5d5)",
                }}
              >
                {/* name="Line 37" id=I677:33744;664:31659 type=LINE */}
                <></>
              </Flex>
            </Flex>
            {/* name="r" id="677:33745" type="FRAME" */}
            <div
              style={{
                display: "flex",
                paddingRight: "24px",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "4px",
                flex: "1 0 0",
              }}
            >
              {/* name="Description" id="677:33746" type="FRAME" */}
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
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Description`}</span>
                {/* name="Button" id="677:33748" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "4px",
                    borderRadius: "var(--border-radius-rounded, 999px)",
                  }}
                >
                  {/* name="🎰 icon" id="I677:33748;114:1873" type="INSTANCE" */}
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
                    {/* name="Vector" id="I677:33748;114:1873;2828:3516" type="VECTOR" */}
                    <Flex
                      style={{
                        width: "11.201px",
                        height: "11.202px",
                        flexShrink: "0",
                        fill: "var(--color-neutral-text-colortext, #000)",
                      }}
                    >
                      {/* name="Vector" id=I677:33748;114:1873;2828:3516 type=VECTOR */}
                      <></>
                    </Flex>
                  </Flex>
                  <span
                    style={{
                      color: "var(--text-text-neutral-40, #464646)",
                      textAlign: "center",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-small, 12px)",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight:
                        "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                    }}
                  >{`See More`}</span>
                  {/* name="🎰 icon" id="I677:33748;2906:15870" type="INSTANCE" */}
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
                    {/* name="Vector" id="I677:33748;2906:15870;2828:3908" type="VECTOR" */}
                    <Flex
                      style={{
                        width: "11.199px",
                        height: "11.202px",
                        flexShrink: "0",
                        fill: "var(--color-neutral-text-colortext, #000)",
                      }}
                    >
                      {/* name="Vector" id=I677:33748;2906:15870;2828:3908 type=VECTOR */}
                      <></>
                    </Flex>
                  </Flex>
                </Flex>
              </div>
              {/* name="Frame 37424" id="677:33749" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "4px",
                  alignSelf: "stretch",
                }}
              >
                <span
                  style={{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: "1",
                    alignSelf: "stretch",
                    overflow: "hidden",
                    color: "var(--text-text-neutral-40, #464646)",
                    textOverflow: "ellipsis",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    textDecorationLine: "underline",
                  }}
                >{`2nd interview | Nguyen Quoc Thai - Technical round 2`}</span>
              </div>
              {/* name="Button" id="677:33752" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  width: "82px",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "4px 0px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "8px",
                  borderRadius: "var(--border-radius-rounded, 999px)",
                }}
              >
                {/* name="🎰 icon" id="I677:33752;114:1820" type="INSTANCE" */}
                <QodeSvgI677337521141820
                  style={{ width: "16px", height: "16px", flexShrink: "0" }}
                  {...{}}
                />
                <span
                  style={{
                    color: "var(--text-text-primary-30, #158de2)",
                    textAlign: "center",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Copy link`}</span>
                {/* name="🎰 icon" id="I677:33752;2906:16273" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "1.6px 1.601px 1.598px 1.6px",
                    justifyContent: "center",
                    alignItems: "center",
                    flexShrink: "0",
                  }}
                >
                  {/* name="Vector" id="I677:33752;2906:16273;2828:3908" type="VECTOR" */}
                  <Flex
                    style={{
                      width: "12.799px",
                      height: "12.802px",
                      flexShrink: "0",
                      fill: "var(--background-bg-primary, #1597f4)",
                    }}
                  >
                    {/* name="Vector" id=I677:33752;2906:16273;2828:3908 type=VECTOR */}
                    <></>
                  </Flex>
                </Flex>
              </Flex>
            </div>
            {/* name="Interview/Badge" id="677:33861" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                width: "32px",
                height: "32px",
                padding: "8px",
                justifyContent: "center",
                alignItems: "center",
                position: "absolute",
                right: "0px",
                borderRadius: "0px 0px 0px 12px",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-focused-primary, #82c8fa)",
                background:
                  "linear-gradient(163deg, #B8E1FF 0.63%, #CDF6FF 76.87%)",
              }}
            >
              {/* name="stars" id="I677:33861;677:33619" type="INSTANCE" */}
              <QodeSvgI6773386167733619
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </Flex>
          </div>
        </>
      )}
      {/* id="677:33916" */}
      {`${property_1}` === `Finished` && (
        <>
          {/* name="Property 1=Finished" id="677:33916" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "714px",
              height: "80px",
              padding: "12px 24px",
              alignItems: "flex-start",
              gap: "20px",
              flexShrink: "0",
              borderRadius: "var(--border-radius-base, 8px)",
              border: "1px solid var(--border-border-neutral-30, #d5d5d5)",
              background: "var(--neutral-white, #fff)",
            }}
          >
            {/* name="Datetime" id="677:33765" type="FRAME" */}
            <div
              style={{
                display: "flex",
                width: "150px",
                flexDirection: "column",
                alignItems: "flex-end",
                gap: "4px",
                flexShrink: "0",
              }}
            >
              <span
                style={{
                  color: "var(--text-text-neutral-40, #464646)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Wed, Sep 03`}</span>
              {/* name="Time" id="745:36408" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  padding: "2px 10px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                  borderRadius: "var(--border-radius-rounded, 999px)",
                  background: "var(--neutral-gray-5, #f8f6f6)",
                }}
              >
                <span
                  style={{
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    textAlign: "right",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`11:00 AM – 1:00 PM`}</span>
              </div>
            </div>
            {/* name="Interview/List item" id="677:33769" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "4px",
                alignSelf: "stretch",
              }}
            >
              {/* name="circle-check" id="I677:33769;664:31653" type="INSTANCE" */}
              <QodeSvgI6773376966431653
                style={{ width: "12px", height: "12px" }}
                {...{}}
              />
              {/* name="Line 37" id="I677:33769;664:31654" type="LINE" */}
              <Flex
                style={{
                  width: "1px",
                  height: "40px",
                  background: "var(--border-border-neutral-30, #d5d5d5)",
                }}
              >
                {/* name="Line 37" id=I677:33769;664:31654 type=LINE */}
                <></>
              </Flex>
            </Flex>
            {/* name="r" id="677:33770" type="FRAME" */}
            <div
              style={{
                display: "flex",
                paddingRight: "24px",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "4px",
                flex: "1 0 0",
              }}
            >
              {/* name="Description" id="677:33771" type="FRAME" */}
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
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Description`}</span>
                {/* name="Button" id="677:33773" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "4px",
                    borderRadius: "var(--border-radius-rounded, 999px)",
                  }}
                >
                  {/* name="🎰 icon" id="I677:33773;114:1873" type="INSTANCE" */}
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
                    {/* name="Vector" id="I677:33773;114:1873;2828:3516" type="VECTOR" */}
                    <Flex
                      style={{
                        width: "11.201px",
                        height: "11.202px",
                        flexShrink: "0",
                        fill: "var(--color-neutral-text-colortext, #000)",
                      }}
                    >
                      {/* name="Vector" id=I677:33773;114:1873;2828:3516 type=VECTOR */}
                      <></>
                    </Flex>
                  </Flex>
                  <span
                    style={{
                      color: "var(--text-text-neutral-40, #464646)",
                      textAlign: "center",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-small, 12px)",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight:
                        "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                    }}
                  >{`See More`}</span>
                  {/* name="🎰 icon" id="I677:33773;2906:15870" type="INSTANCE" */}
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
                    {/* name="Vector" id="I677:33773;2906:15870;2828:3908" type="VECTOR" */}
                    <Flex
                      style={{
                        width: "11.199px",
                        height: "11.202px",
                        flexShrink: "0",
                        fill: "var(--color-neutral-text-colortext, #000)",
                      }}
                    >
                      {/* name="Vector" id=I677:33773;2906:15870;2828:3908 type=VECTOR */}
                      <></>
                    </Flex>
                  </Flex>
                </Flex>
              </div>
              {/* name="Frame 37424" id="677:33774" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "4px",
                  alignSelf: "stretch",
                }}
              >
                <span
                  style={{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: "1",
                    alignSelf: "stretch",
                    overflow: "hidden",
                    color: "var(--text-text-neutral-40, #464646)",
                    textOverflow: "ellipsis",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    textDecorationLine: "underline",
                  }}
                >{`Exploratory call - Nguyen Quoc Thai - Senior Software developer`}</span>
              </div>
              {/* name="Button" id="677:33776" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "4px 0px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "8px",
                  borderRadius: "var(--border-radius-rounded, 999px)",
                }}
              >
                {/* name="🎰 icon" id="I677:33776;114:1820" type="INSTANCE" */}
                <QodeSvgI677337761141820
                  style={{ width: "16px", height: "16px" }}
                  {...{}}
                />
                <span
                  style={{
                    color: "var(--text-text-primary-30, #158de2)",
                    textAlign: "center",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`View result`}</span>
                {/* name="🎰 icon" id="I677:33776;2906:16273" type="INSTANCE" */}
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
                  {/* name="Vector" id="I677:33776;2906:16273;2828:3908" type="VECTOR" */}
                  <Flex
                    style={{
                      width: "12.799px",
                      height: "12.802px",
                      flexShrink: "0",
                      fill: "var(--background-bg-primary, #1597f4)",
                    }}
                  >
                    {/* name="Vector" id=I677:33776;2906:16273;2828:3908 type=VECTOR */}
                    <></>
                  </Flex>
                </Flex>
              </Flex>
            </div>
            {/* name="Interview/Badge" id="745:36006" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                width: "32px",
                height: "32px",
                padding: "8px",
                justifyContent: "center",
                alignItems: "center",
                position: "absolute",
                right: "0px",
                borderRadius: "0px 0px 0px 12px",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-focused-primary, #82c8fa)",
                background:
                  "linear-gradient(163deg, #B8E1FF 0.63%, #CDF6FF 76.87%)",
              }}
            >
              {/* name="stars" id="I745:36006;677:33619" type="INSTANCE" */}
              <QodeSvgI7453600667733619
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </Flex>
          </div>
        </>
      )}
      {/* id="677:33915" */}
      {`${property_1}` === `Canceled` && (
        <>
          {/* name="Property 1=Canceled" id="677:33915" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "714px",
              height: "80px",
              padding: "12px 24px",
              alignItems: "flex-start",
              gap: "20px",
              flexShrink: "0",
              borderRadius: "var(--border-radius-base, 8px)",
              border: "1px solid var(--border-border-neutral-30, #d5d5d5)",
              background: "var(--neutral-white, #fff)",
            }}
          >
            {/* name="Datetime" id="677:33816" type="FRAME" */}
            <div
              style={{
                display: "flex",
                width: "150px",
                flexDirection: "column",
                alignItems: "flex-end",
                gap: "4px",
                flexShrink: "0",
              }}
            >
              <span
                style={{
                  color: "var(--text-text-neutral-40, #464646)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Sat, Aug 31`}</span>
              {/* name="Time" id="745:36448" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  padding: "2px 10px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                  borderRadius: "var(--border-radius-rounded, 999px)",
                  background: "var(--neutral-gray-5, #f8f6f6)",
                }}
              >
                <span
                  style={{
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    textAlign: "right",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`11:00 AM – 1:00 PM`}</span>
              </div>
            </div>
            {/* name="Interview/List item" id="677:34021" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "4px",
                alignSelf: "stretch",
              }}
            >
              {/* name="circle" id="I677:34021;677:33736" type="FRAME" */}
              <QodeSvgI6773402167733736
                style={{ width: "12px", height: "12px" }}
                {...{}}
              />
              {/* name="Line 37" id="I677:34021;677:33738" type="LINE" */}
              <Flex
                style={{
                  width: "1px",
                  height: "40px",
                  background: "var(--border-border-neutral-30, #d5d5d5)",
                }}
              >
                {/* name="Line 37" id=I677:34021;677:33738 type=LINE */}
                <></>
              </Flex>
            </Flex>
            {/* name="r" id="677:33821" type="FRAME" */}
            <div
              style={{
                display: "flex",
                paddingRight: "24px",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "8px",
                flex: "1 0 0",
              }}
            >
              {/* name="Description" id="677:33822" type="FRAME" */}
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
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Description`}</span>
                {/* name="Button" id="677:33824" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "4px",
                    borderRadius: "var(--border-radius-rounded, 999px)",
                  }}
                >
                  {/* name="🎰 icon" id="I677:33824;114:1873" type="INSTANCE" */}
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
                    {/* name="Vector" id="I677:33824;114:1873;2828:3516" type="VECTOR" */}
                    <Flex
                      style={{
                        width: "11.201px",
                        height: "11.202px",
                        flexShrink: "0",
                        fill: "var(--color-neutral-text-colortext, #000)",
                      }}
                    >
                      {/* name="Vector" id=I677:33824;114:1873;2828:3516 type=VECTOR */}
                      <></>
                    </Flex>
                  </Flex>
                  <span
                    style={{
                      color: "var(--text-text-neutral-40, #464646)",
                      textAlign: "center",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-small, 12px)",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight:
                        "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                    }}
                  >{`See More`}</span>
                  {/* name="🎰 icon" id="I677:33824;2906:15870" type="INSTANCE" */}
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
                    {/* name="Vector" id="I677:33824;2906:15870;2828:3908" type="VECTOR" */}
                    <Flex
                      style={{
                        width: "11.199px",
                        height: "11.202px",
                        flexShrink: "0",
                        fill: "var(--color-neutral-text-colortext, #000)",
                      }}
                    >
                      {/* name="Vector" id=I677:33824;2906:15870;2828:3908 type=VECTOR */}
                      <></>
                    </Flex>
                  </Flex>
                </Flex>
              </div>
              {/* name="Frame 37424" id="677:33825" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "4px",
                  alignSelf: "stretch",
                }}
              >
                <span
                  style={{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: "1",
                    overflow: "hidden",
                    color: "var(--text-text-neutral-40, #464646)",
                    textOverflow: "ellipsis",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Exploratory call - Nguyen Quoc Thai`}</span>
              </div>
              <span
                style={{
                  color: "var(--text-text-red, #dc3812)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`(Canceled)`}</span>
            </div>
          </div>
        </>
      )}
    </>
  )
}
