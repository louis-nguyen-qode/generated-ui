// id="5656:26441"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg565626418 from "@designSystem/icon/svg/QodeSvg565626418"
import QodeSvg565626436 from "@designSystem/icon/svg/QodeSvg565626436"

export interface QodeCustom565626441Props {
  size?: "md" | "lg"
}

export const QodeCustom565626441: React.FC<
  QodeCustom565626441Props & { style?: CSSProperties }
> = ({ size = "lg", ...rest }) => {
  return (
    <>
      {/* name="Modal/Header" id="5656:26441" type="COMPONENT_SET" */}
      {/* id="5656:26440" */}
      {`${size}` === `lg` && (
        <>
          {/* name="size=lg" id="5656:26440" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "600px",
              height: "52px",
              padding: "12px 20px",
              justifyContent: "flex-end",
              alignItems: "center",
              gap: "16px",
              flexShrink: "0",
              borderBottom:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
            }}
          >
            {/* name="Symbol" id="5656:26413" type="FRAME" */}
            <div
              style={{
                display: "flex",
                width: "24px",
                height: "24px",
                padding: "3px",
                justifyContent: "center",
                alignItems: "center",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                background:
                  "var(--color-neutral-background-controlitembgactive, #eaeff8)",
              }}
            >
              {/* name="icons" id="5656:26414" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  padding: "1.5px 1.498px 1.5px 1.5px",
                  justifyContent: "center",
                  alignItems: "center",
                  flex: "1 0 0",
                  alignSelf: "stretch",
                }}
              >
                {/* name="Vector" id="I5656:26414;630:10668" type="VECTOR" */}
                <Flex
                  style={{
                    width: "15.002px",
                    height: "15px",
                    fill: "var(--color-primary-colorprimarytext, #2d64bc)",
                  }}
                >
                  {/* name="Vector" id=I5656:26414;630:10668 type=VECTOR */}
                  <></>
                </Flex>
              </Flex>
            </div>
            {/* name="content" id="5656:26415" type="FRAME" */}
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
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-size-sizemd-20px, 20px)",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight:
                    "var(--lineheight-lineheight-xl, 28px) /* 140% */",
                }}
              >{`Modal header`}</span>
              <span
                style={{
                  alignSelf: "stretch",
                  color:
                    "var(--color-neutral-text-colortextlabel, rgba(0, 0, 0, 0.88))",
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-small, 12px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--line-height-lineheighsm, 16px) /* 133.333% */",
                }}
              >{`Accessibility`}</span>
            </div>
            {/* name="xmark" id="5656:26418" type="INSTANCE" */}
            <QodeSvg565626418
              style={{ width: "24px", height: "24px", flexShrink: "0" }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="5656:26439" */}
      {`${size}` === `md` && (
        <>
          {/* name="size=md" id="5656:26439" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "600px",
              height: "42px",
              padding: "12px 20px",
              justifyContent: "flex-end",
              alignItems: "center",
              gap: "16px",
              flexShrink: "0",
              borderBottom:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
            }}
          >
            {/* name="Symbol" id="5656:26431" type="FRAME" */}
            <div
              style={{
                display: "flex",
                width: "24px",
                height: "24px",
                padding: "3px",
                justifyContent: "center",
                alignItems: "center",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                background:
                  "var(--color-neutral-background-controlitembgactive, #eaeff8)",
              }}
            >
              {/* name="icons" id="5656:26432" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  padding: "1.5px 1.498px 1.5px 1.5px",
                  justifyContent: "center",
                  alignItems: "center",
                  flex: "1 0 0",
                  alignSelf: "stretch",
                }}
              >
                {/* name="Vector" id="I5656:26432;630:10668" type="VECTOR" */}
                <Flex
                  style={{
                    width: "15.002px",
                    height: "15px",
                    fill: "var(--color-primary-colorprimarytext, #2d64bc)",
                  }}
                >
                  {/* name="Vector" id=I5656:26432;630:10668 type=VECTOR */}
                  <></>
                </Flex>
              </Flex>
            </div>
            {/* name="content" id="5656:26433" type="FRAME" */}
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
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-heading6, 16px)",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight:
                    "var(--lineheight-lineheight-h6, 22px) /* 137.5% */",
                }}
              >{`Modal header`}</span>
              <span
                style={{
                  alignSelf: "stretch",
                  color:
                    "var(--color-neutral-text-colortextlabel, rgba(0, 0, 0, 0.88))",
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-small, 12px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--line-height-lineheighsm, 16px) /* 133.333% */",
                }}
              >{`Accessibility`}</span>
            </div>
            {/* name="xmark" id="5656:26436" type="INSTANCE" */}
            <QodeSvg565626436
              style={{ width: "24px", height: "24px", flexShrink: "0" }}
              {...{}}
            />
          </div>
        </>
      )}
    </>
  )
}
