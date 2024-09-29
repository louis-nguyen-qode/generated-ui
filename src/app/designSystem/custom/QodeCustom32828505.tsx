// id="328:28505"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom166463 } from "@designSystem/custom/QodeCustom166463"

export interface QodeCustom32828505Props {}

export const QodeCustom32828505: React.FC<
  QodeCustom32828505Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="color=neutral, state=default, size=Default, rounded=False" id="328:28505" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "inline-flex",
            height: "30px",
            padding: "0px 12px",
            alignItems: "center",
            gap: "var(--size-size-sizexxs-6px, 6px)",
            flexShrink: "0",
            borderRadius: "4px",
            border:
              "var(--style-line-width-linewidth, 1px) solid var(--neutral-gray-30, #bfbfbf)",
            background: "var(--neutral-gray-5, #f8f6f6)",
          },
          ...style,
        }}
      >
        <span
          style={{
            ...{
              color: "var(--text-text-neutral-50, #1d1d1d)",
              fontFamily: 'var(--family-family, "sf pro display")',
              fontSize: "var(--size-base, 14px)",
              fontStyle: "normal",
              fontWeight: "500",
              lineHeight:
                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
            },
            ...{},
          }}
        >{`Tag`}</span>
        {/* name="xmark" id="328:28552" type="INSTANCE" */}
        <QodeCustom166463
          style={{ ...{ width: "16px", height: "16px" }, ...{} }}
          {...{}}
        />
      </div>
    </>
  )
}
