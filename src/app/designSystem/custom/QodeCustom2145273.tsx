// id="214:5273"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom2145273Props {}

export const QodeCustom2145273: React.FC<
  QodeCustom2145273Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="state=default, status=default, size=small, range=false" id="214:5273" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "240px",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "10px var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
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
              fontSize: "var(--size-base, 14px)",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight:
                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
            },
            ...{},
          }}
        >{`Select time`}</span>
        {/* name="Icon Right" id="214:5275" type="INSTANCE" */}
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
