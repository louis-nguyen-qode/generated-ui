// id="24:4887"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom244887Props {}

export const QodeCustom244887: React.FC<
  QodeCustom244887Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="❓Logo=Yes" id="24:4887" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "496px",
            alignItems: "flex-start",
            gap: "var(--size-margin-marginsm, 12px)",
          },
          ...style,
        }}
      >
        {/* name="avatar" id="24:4888" type="INSTANCE" */}
        <div
          style={{
            ...{
              display: "flex",
              width: "42px",
              height: "42px",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "var(--font-size-large, 16px)",
              flexShrink: "0",
              borderRadius: "var(--style-radius-borderround, 999px)",
              border:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
              background: "var(--neutral-white, #fff)",
            },
            ...{},
          }}
          {...{ img: true, type: "Round", state: "Default" }}
        />
        {/* name="content" id="24:4889" type="FRAME" */}
        <div
          style={{
            ...{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-end",
              flex: "1 0 0",
            },
            ...{},
          }}
        >
          <span
            style={{
              ...{
                alignSelf: "stretch",
                color: "var(--text-text-neutral-50, #1d1d1d)",
                fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                fontSize: "var(--font-size-large, 16px)",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "var(--line-height-lineheighlg, 24px) /* 150% */",
              },
              ...{},
            }}
          >{`Company Name`}</span>
          <span
            style={{
              ...{
                alignSelf: "stretch",
                color: "var(--text-text-neutral-40, #464646)",
                fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                fontSize: "var(--font-size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight:
                  "var(--line-height-lineheight, 20px) /* 142.857% */",
              },
              ...{},
            }}
          >{`Location & Total Time`}</span>
        </div>
      </div>
    </>
  )
}
