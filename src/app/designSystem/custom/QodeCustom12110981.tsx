// id="121:10981"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom63292 } from "@designSystem/custom/QodeCustom63292"

export interface QodeCustom12110981Props {}

export const QodeCustom12110981: React.FC<
  QodeCustom12110981Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="size=default, position=bottom, state=default" id="121:10981" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "inline-flex",
            padding:
              "var(--size-padding-paddingsm, 12px) var(--size-padding-padding, 16px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
          },
          ...style,
        }}
      >
        {/* name="🎰 icon" id="121:11029" type="INSTANCE" */}
        <QodeCustom63292
          style={{ ...{ width: "16px", height: "16px" }, ...{} }}
          {...{}}
        />
        <span
          style={{
            ...{
              color: "var(--text-text-neutral-40, #464646)",
              fontFamily: 'var(--family-family, "sf pro display")',
              fontSize: "var(--size-base, 14px)",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight:
                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
            },
            ...{},
          }}
        >{`Tab title`}</span>
      </div>
    </>
  )
}