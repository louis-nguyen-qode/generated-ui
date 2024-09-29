// id="1990:52718"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom108651005 } from "@designSystem/custom/QodeCustom108651005"
import { QodeCustom228149026 } from "@designSystem/custom/QodeCustom228149026"

export interface QodeCustom199052718Props {}

export const QodeCustom199052718: React.FC<
  QodeCustom199052718Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="state=default" id="1990:52718" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "723px",
            justifyContent: "space-between",
            alignItems: "center",
          },
          ...style,
        }}
      >
        {/* name="Left" id="1990:52910" type="FRAME" */}
        <div
          style={{
            ...{ display: "flex", alignItems: "center", gap: "8px" },
            ...{},
          }}
        >
          {/* name="sparkles" id="1990:52911" type="INSTANCE" */}
          <QodeCustom108651005
            style={{ ...{ width: "24px", height: "24px" }, ...{} }}
            {...{}}
          />
          <span
            style={{
              ...{
                color: "var(--text-text-neutral-50, #1d1d1d)",
                textAlign: "center",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-size-sizemd-20px, 20px)",
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight: "var(--lineheight-lineheight-xl, 28px) /* 140% */",
              },
              ...{},
            }}
          >{`Expertise`}</span>
        </div>
        {/* name="Button" id="1990:52722" type="INSTANCE" */}
        <QodeCustom228149026
          style={{
            ...{
              display: "flex",
              width: "100px",
              height: "var(--size-height-controlheightsm, 24px)",
              padding: "4px 8px",
              justifyContent: "center",
              alignItems: "center",
              gap: "4px",
              flexShrink: "0",
              borderRadius: "var(--border-radius-rounded, 999px)",
              border: "1px solid var(--border-border-neutral-40, #bfbfbf)",
              background: "var(--background-bg-white, #fff)",
            },
            ...{},
          }}
          {...{
            buttonname: "Show skills",
            type: "default",
            size: "small",
            state: "default",
            content: "default",
            danger: false,
            ghost: false,
          }}
        />
      </div>
    </>
  )
}
