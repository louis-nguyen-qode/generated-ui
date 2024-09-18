// id="434:30284"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom43430284Props {}

export const QodeCustom43430284: React.FC<
  QodeCustom43430284Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="Property 1=End" id="434:30284" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "350px",
            padding: "20px 0px",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          },
          ...style,
        }}
      >
        <span
          style={{
            ...{
              color: "var(--text-text-neutral-30, #656565)",
              fontFamily: 'var(--family-family, "sf pro display")',
              fontSize: "var(--size-base, 14px)",
              fontStyle: "normal",
              fontWeight: "500",
              lineHeight:
                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
            },
            ...{},
          }}
        >{`End of result`}</span>
      </div>
    </>
  )
}
