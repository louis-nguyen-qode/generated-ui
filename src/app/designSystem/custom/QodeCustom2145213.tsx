// id="214:5213"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom2145213Props {}

export const QodeCustom2145213: React.FC<
  QodeCustom2145213Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="state=default, status=default, size=large, range=false" id="214:5213" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "240px",
            height: "var(--size-height-controlheightlg, 40px)",
            padding: "10px var(--size-padding-paddingsm, 12px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingsm, 12px)",
            flexShrink: "0",
            borderRadius: "var(--style-radius-borderradius, 8px)",
            border:
              "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
            background:
              "var(--color-neutral-background-colorbgcontainer, #fff)",
          },
          ...style,
        }}
      >
        <span
          style={{
            ...{
              flex: "1 0 0",
              color:
                "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
              fontFamily: 'var(--family-family, "sf pro display")',
              fontSize: "var(--size-large, 16px)",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "24px /* 150% */",
            },
            ...{},
          }}
        >{`Select time`}</span>
        {/* name="Icon Right" id="214:5215" type="INSTANCE" */}
        <Icon.QodeClockTwo
          style={{
            ...{ width: "16px", height: "16px", flexShrink: "0" },
            ...{},
          }}
          {...{}}
        />
      </div>
    </>
  )
}
