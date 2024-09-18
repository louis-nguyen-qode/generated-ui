// id="602:35105"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg60235089 from "@designSystem/icon/svg/QodeSvg60235089"
import QodeSvgI602356501141808 from "@designSystem/icon/svg/QodeSvgI602356501141808"
import QodeSvg60235134 from "@designSystem/icon/svg/QodeSvg60235134"
import QodeSvgI602356431141808 from "@designSystem/icon/svg/QodeSvgI602356431141808"
import QodeSvg60235155 from "@designSystem/icon/svg/QodeSvg60235155"
import QodeSvgI602351621141808 from "@designSystem/icon/svg/QodeSvgI602351621141808"

export interface QodeCustom60235105Props {
  property_1?: "Pass" | "Fail" | "Need review"
}

export const QodeCustom60235105: React.FC<
  QodeCustom60235105Props & { style?: CSSProperties }
> = ({ property_1 = "Pass", ...rest }) => {
  return (
    <>
      {/* name="Overall" id="602:35105" type="COMPONENT_SET" */}
      {/* id="602:35103" */}
      {`${property_1}` === `Pass` && (
        <>
          {/* name="Property 1=Pass" id="602:35103" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "285px",
              minHeight: "330px",
              padding: "24px",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "20px",
              borderRight:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
              background: "var(--background-bg-white, #fff)",
            }}
          >
            {/* name="Status" id="602:35083" type="FRAME" */}
            <div
              style={{
                display: "flex",
                padding: "var(--size-size-sizexxs-6px, 6px) 32px",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                borderRadius: "99px",
                background: "var(--green-green-50, #11a620)",
                boxShadow: "1px 1px 4px 0px rgba(0, 0, 0, 0.25) inset",
              }}
            >
              <span
                style={{
                  color: "var(--text-text-white, #fff)",
                  textAlign: "center",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight:
                    "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
                }}
              >{`Passed`}</span>
            </div>
            <span
              style={{
                color: "var(--text-text-neutral-30, #656565)",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-size-sizemd-20px, 20px)",
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight: "var(--lineheight-lineheight-xl, 28px) /* 140% */",
              }}
            >{`Overall score`}</span>
            {/* name="Progress__Circle" id="602:35088" type="FRAME" */}
            <div style={{ width: "128px", height: "128px" }}>
              {/* name="progress-circle" id="602:35089" type="FRAME" */}
              <QodeSvg60235089
                style={{ width: "128px", height: "128px", flexShrink: "0" }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  textAlign: "center",
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-heading1, 40px)",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight: "var(--line-height-lineheighxl, 28px) /* 70% */",
                }}
              >{`75`}</span>
              {/* name="100" id="602:35093" type="FRAME" */}
              <div
                style={{
                  display: "inline-flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                {/* name="Line 30" id="602:35094" type="LINE" */}
                <Flex
                  style={{
                    width: "41px",
                    height: "1px",
                    background: "var(--border-border-neutral-30, #d5d5d5)",
                  }}
                >
                  {/* name="Line 30" id=602:35094 type=LINE */}
                  <></>
                </Flex>
                <span
                  style={{
                    alignSelf: "stretch",
                    color: "var(--text-text-neutral-30, #656565)",
                    textAlign: "center",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "12px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "9px /* 75% */",
                    letterSpacing: "0.2px",
                  }}
                >{`100`}</span>
              </div>
            </div>
            {/* name="Button" id="602:35650" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                width: "80px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "4px 16px",
                justifyContent: "center",
                alignItems: "center",
                gap: "8px",
                borderRadius: "var(--border-radius-rounded, 999px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                background: "var(--background-bg-white, #fff)",
              }}
            >
              {/* name="pencil" id="I602:35650;114:1808" type="INSTANCE" */}
              <QodeSvgI602356501141808
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
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
              >{`Edit`}</span>
              {/* name="🎰 icon" id="I602:35650;2906:15520" type="INSTANCE" */}
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
                {/* name="Vector" id="I602:35650;2906:15520;2828:3908" type="VECTOR" */}
                <Flex
                  style={{
                    width: "12.799px",
                    height: "12.802px",
                    flexShrink: "0",
                    fill: "var(--color-neutral-text-colortext, #000)",
                  }}
                >
                  {/* name="Vector" id=I602:35650;2906:15520;2828:3908 type=VECTOR */}
                  <></>
                </Flex>
              </Flex>
            </Flex>
          </div>
        </>
      )}
      {/* id="602:35127" */}
      {`${property_1}` === `Fail` && (
        <>
          {/* name="Property 1=Fail" id="602:35127" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "285px",
              minHeight: "330px",
              padding: "24px",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "20px",
              borderRight:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
              background: "var(--background-bg-white, #fff)",
            }}
          >
            {/* name="Status" id="602:35128" type="FRAME" */}
            <div
              style={{
                display: "flex",
                padding: "var(--size-size-sizexxs-6px, 6px) 32px",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                borderRadius: "99px",
                background: "var(--red-red-40, #f85631)",
                boxShadow: "1px 1px 4px 0px rgba(0, 0, 0, 0.25) inset",
              }}
            >
              <span
                style={{
                  color: "var(--text-text-white, #fff)",
                  textAlign: "center",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight:
                    "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
                }}
              >{`Failed`}</span>
            </div>
            <span
              style={{
                color: "var(--text-text-neutral-30, #656565)",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-size-sizemd-20px, 20px)",
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight: "var(--lineheight-lineheight-xl, 28px) /* 140% */",
              }}
            >{`Overall score`}</span>
            {/* name="Progress__Circle" id="602:35133" type="FRAME" */}
            <div style={{ width: "128px", height: "128px" }}>
              {/* name="progress-circle" id="602:35134" type="FRAME" */}
              <QodeSvg60235134
                style={{ width: "128px", height: "128px", flexShrink: "0" }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  textAlign: "center",
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-heading1, 40px)",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight: "28px /* 70% */",
                }}
              >{`30`}</span>
              {/* name="100" id="602:35138" type="FRAME" */}
              <div
                style={{
                  display: "inline-flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                {/* name="Line 30" id="602:35139" type="LINE" */}
                <Flex
                  style={{
                    width: "41px",
                    height: "1px",
                    background: "var(--border-border-neutral-30, #d5d5d5)",
                  }}
                >
                  {/* name="Line 30" id=602:35139 type=LINE */}
                  <></>
                </Flex>
                <span
                  style={{
                    alignSelf: "stretch",
                    color: "var(--text-text-neutral-30, #656565)",
                    textAlign: "center",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "12px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "9px /* 75% */",
                    letterSpacing: "0.2px",
                  }}
                >{`100`}</span>
              </div>
            </div>
            {/* name="Button" id="602:35643" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                width: "80px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "4px 16px",
                justifyContent: "center",
                alignItems: "center",
                gap: "8px",
                borderRadius: "var(--border-radius-rounded, 999px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                background: "var(--background-bg-white, #fff)",
              }}
            >
              {/* name="pencil" id="I602:35643;114:1808" type="INSTANCE" */}
              <QodeSvgI602356431141808
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
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
              >{`Edit`}</span>
              {/* name="🎰 icon" id="I602:35643;2906:15520" type="INSTANCE" */}
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
                {/* name="Vector" id="I602:35643;2906:15520;2828:3908" type="VECTOR" */}
                <Flex
                  style={{
                    width: "12.799px",
                    height: "12.802px",
                    flexShrink: "0",
                    fill: "var(--color-neutral-text-colortext, #000)",
                  }}
                >
                  {/* name="Vector" id=I602:35643;2906:15520;2828:3908 type=VECTOR */}
                  <></>
                </Flex>
              </Flex>
            </Flex>
          </div>
        </>
      )}
      {/* id="602:35148" */}
      {`${property_1}` === `Need review` && (
        <>
          {/* name="Property 1=Need review" id="602:35148" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "285px",
              minHeight: "330px",
              padding: "24px",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "20px",
              borderRight:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
              background: "var(--background-bg-white, #fff)",
            }}
          >
            {/* name="Status" id="602:35149" type="FRAME" */}
            <div
              style={{
                display: "flex",
                padding: "var(--size-size-sizexxs-6px, 6px) 32px",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                borderRadius: "99px",
                background: "var(--neutral-gray-90, #464646)",
                boxShadow: "1px 1px 4px 0px rgba(0, 0, 0, 0.25) inset",
              }}
            >
              <span
                style={{
                  color: "var(--text-text-white, #fff)",
                  textAlign: "center",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight:
                    "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
                }}
              >{`Need review`}</span>
            </div>
            <span
              style={{
                color: "var(--text-text-neutral-30, #656565)",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-size-sizemd-20px, 20px)",
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight: "var(--lineheight-lineheight-xl, 28px) /* 140% */",
              }}
            >{`Overall score`}</span>
            {/* name="Progress__Circle" id="602:35154" type="FRAME" */}
            <div style={{ width: "128px", height: "128px" }}>
              {/* name="progress-circle" id="602:35155" type="FRAME" */}
              <QodeSvg60235155
                style={{ width: "128px", height: "128px", flexShrink: "0" }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  textAlign: "center",
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-heading1, 40px)",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight: "var(--line-height-lineheighxl, 28px) /* 70% */",
                }}
              >{`50`}</span>
              {/* name="100" id="602:35159" type="FRAME" */}
              <div
                style={{
                  display: "inline-flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                {/* name="Line 30" id="602:35160" type="LINE" */}
                <Flex
                  style={{
                    width: "41px",
                    height: "1px",
                    background: "var(--border-border-neutral-30, #d5d5d5)",
                  }}
                >
                  {/* name="Line 30" id=602:35160 type=LINE */}
                  <></>
                </Flex>
                <span
                  style={{
                    alignSelf: "stretch",
                    color: "var(--text-text-neutral-30, #656565)",
                    textAlign: "center",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "12px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "9px /* 75% */",
                    letterSpacing: "0.2px",
                  }}
                >{`100`}</span>
              </div>
            </div>
            {/* name="Button" id="602:35162" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                width: "80px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "4px 16px",
                justifyContent: "center",
                alignItems: "center",
                gap: "8px",
                borderRadius: "var(--border-radius-rounded, 999px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                background: "var(--background-bg-white, #fff)",
              }}
            >
              {/* name="pencil" id="I602:35162;114:1808" type="INSTANCE" */}
              <QodeSvgI602351621141808
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
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
              >{`Edit`}</span>
              {/* name="🎰 icon" id="I602:35162;2906:15520" type="INSTANCE" */}
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
                {/* name="Vector" id="I602:35162;2906:15520;2828:3908" type="VECTOR" */}
                <Flex
                  style={{
                    width: "12.799px",
                    height: "12.802px",
                    flexShrink: "0",
                    fill: "var(--color-neutral-text-colortext, #000)",
                  }}
                >
                  {/* name="Vector" id=I602:35162;2906:15520;2828:3908 type=VECTOR */}
                  <></>
                </Flex>
              </Flex>
            </Flex>
          </div>
        </>
      )}
    </>
  )
}
