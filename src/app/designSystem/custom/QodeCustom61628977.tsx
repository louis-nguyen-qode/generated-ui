// id="616:28977"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom61628977Props {}

export const QodeCustom61628977: React.FC<
  QodeCustom61628977Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="Report/End" id="616:28977" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "1160px",
            padding: "40px 0px",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
          },
          ...style,
        }}
      >
        <span
          style={{
            ...{
              color: "var(--text-text-neutral-20, #878787)",
              fontFamily: "Barlow",
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: "600",
              lineHeight: "16px /* 114.286% */",
            },
            ...{},
          }}
        >{`END OF REPORT`}</span>
        <span
          style={{
            ...{
              width: "484px",
              color: "var(--text-text-neutral-20, #878787)",
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
        >{`AI evaluation may not fully capture candidate’s potential.
Please interpret this assessment with caution.`}</span>
      </div>
    </>
  )
}
