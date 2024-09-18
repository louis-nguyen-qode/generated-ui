// id="202:32927"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom20232927Props {}

export const QodeCustom20232927: React.FC<
  QodeCustom20232927Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="state=inactive" id="202:32927" type="COMPONENT" */}
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
              color:
                "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
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
