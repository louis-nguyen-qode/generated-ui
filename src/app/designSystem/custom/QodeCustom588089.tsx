// id="58:8089"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvgI588034272038039 from "@designSystem/icon/svg/QodeSvgI588034272038039"
import QodeSvgI58825317024281 from "@designSystem/icon/svg/QodeSvgI58825317024281"
import QodeSvgI58829017024186 from "@designSystem/icon/svg/QodeSvgI58829017024186"

export interface QodeCustom588089Props {
  property_1?: "Default"
}

export const QodeCustom588089: React.FC<
  QodeCustom588089Props & { style?: CSSProperties }
> = ({ property_1 = "Default", ...rest }) => {
  return (
    <>
      {/* name="Search filter" id="58:8089" type="COMPONENT_SET" */}
      {/* id="58:8051" */}
      {`${property_1}` === `Default` && (
        <>
          {/* name="Property 1=Default" id="58:8051" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "1124px",
              padding: "8px 12px",
              alignItems: "center",
              gap: "8px",
              borderRadius:
                "var(--border-radius-large, 12px) var(--border-radius-large, 12px) 0px 0px",
              border: "1px solid var(--border-border-neutral-30, #d5d5d5)",
              background: "var(--neutral-gray-10, #e3e3e3)",
            }}
          >
            {/* name="Search bar" id="58:8034" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                height: "var(--size-height-controlheight, 32px)",
                padding: "10px 12px",
                justifyContent: "center",
                alignItems: "center",
                gap: "8px",
                flex: "1 0 0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--background-bg-white, #fff)",
              }}
            >
              {/* name="🎰 icon left" id="I58:8034;2720:38039" type="INSTANCE" */}
              <QodeSvgI588034272038039
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
              >{`“Senior Software Developer” AND “Java, Python, Go, Spring, PHP” AND “Ho Chi Minh”`}</span>
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
              {/* name="🎰 icon right" id="I58:8034;2720:38043" type="INSTANCE" */}
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
                {/* name="Vector" id="I58:8034;2720:38043;2828:6396" type="VECTOR" */}
                <Flex
                  style={{
                    width: "11.2px",
                    height: "12.8px",
                    flexShrink: "0",
                    fill: "var(--color-neutral-text-colortext, #000)",
                  }}
                >
                  {/* name="Vector" id=I58:8034;2720:38043;2828:6396 type=VECTOR */}
                  <></>
                </Flex>
              </Flex>
            </Flex>
            {/* name="Input/Select" id="58:8253" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--neutral-white, #fff)",
              }}
            >
              <span
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: "1",
                  flex: "1 0 0",
                  overflow: "hidden",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  textOverflow: "ellipsis",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Ho Chi Minh city, Vietnam`}</span>
              {/* name="Icon" id="I58:8253;170:24281" type="INSTANCE" */}
              <QodeSvgI58825317024281
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </Flex>
            {/* name="Input/Select" id="58:8290" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                width: "170px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--neutral-white, #fff)",
              }}
            >
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
              >{`Years of Experience`}</span>
              {/* name="Icon" id="I58:8290;170:24186" type="INSTANCE" */}
              <QodeSvgI58829017024186
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </Flex>
          </div>
        </>
      )}
    </>
  )
}
