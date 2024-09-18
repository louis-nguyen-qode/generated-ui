// id="5656:26440"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom34322522 } from "@designSystem/custom/QodeCustom34322522"
import { QodeCustom34322597 } from "@designSystem/custom/QodeCustom34322597"

export interface QodeCustom565626440Props {}

export const QodeCustom565626440: React.FC<
  QodeCustom565626440Props & { style?: CSSProperties }
> = ({ ...rest }) => {
  return (
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
          <QodeCustom34322522
            style={{
              display: "flex",
              padding: "1.5px 1.498px 1.5px 1.5px",
              justifyContent: "center",
              alignItems: "center",
              flex: "1 0 0",
              alignSelf: "stretch",
            }}
            {...{}}
          />
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
              lineHeight: "var(--lineheight-lineheight-xl, 28px) /* 140% */",
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
              lineHeight: "var(--line-height-lineheighsm, 16px) /* 133.333% */",
            }}
          >{`Accessibility`}</span>
        </div>
        {/* name="xmark" id="5656:26418" type="INSTANCE" */}
        <QodeCustom34322597
          style={{ width: "24px", height: "24px", flexShrink: "0" }}
          {...{}}
        />
      </div>
    </>
  )
}
