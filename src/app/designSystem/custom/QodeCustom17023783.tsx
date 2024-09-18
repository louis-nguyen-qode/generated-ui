// id="170:23783"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom17023783Props {}

export const QodeCustom17023783: React.FC<
  QodeCustom17023783Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="state=default" id="170:23783" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "139px",
            height: "var(--size-height-controlheight, 32px)",
            padding: "0px var(--size-padding-paddingsm, 12px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--style-radius-borderradius, 8px)",
          },
          ...style,
        }}
      >
        <span
          style={{
            ...{
              flex: "1 0 0",
              color: "var(--text-text-neutral-50, #1d1d1d)",
              fontFamily: 'var(--family-family, "sf pro display")',
              fontSize: "var(--size-base, 14px)",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight:
                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
            },
            ...{},
          }}
        >{`Select menu item`}</span>
      </div>
    </>
  )
}
