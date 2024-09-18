// id="202:32929"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom20232929Props {}

export const QodeCustom20232929: React.FC<
  QodeCustom20232929Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="state=selected" id="202:32929" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "24px",
            height: "var(--size-height-controlheightsm, 24px)",
            justifyContent: "center",
            alignItems: "center",
            flexShrink: "0",
            borderRadius: "var(--style-radius-borderradiussm, 6px)",
            background: "var(--color-primary-colorprimary, #1597f4)",
          },
          ...style,
        }}
      >
        <span
          style={{
            ...{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              flex: "1 0 0",
              alignSelf: "stretch",
              color: "var(--color-neutral-text-colortextsolid, #fff)",
              textAlign: "center",
              fontFamily: 'var(--family-family, "sf pro display")',
              fontSize: "var(--size-base, 14px)",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight:
                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
            },
            ...{},
          }}
        >{`24`}</span>
      </div>
    </>
  )
}
