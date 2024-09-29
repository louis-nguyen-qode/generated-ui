// id="121:10987"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom63292 } from "@designSystem/custom/QodeCustom63292"

export interface QodeCustom12110987Props {}

export const QodeCustom12110987: React.FC<
  QodeCustom12110987Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="size=default, position=left, state=active" id="121:10987" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "inline-flex",
            padding:
              "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            borderRight: "2px solid var(--border-border-primary-20, #158de2)",
          },
          ...style,
        }}
      >
        {/* name="🎰 icon" id="121:11041" type="INSTANCE" */}
        <QodeCustom63292
          style={{ ...{ width: "16px", height: "16px" }, ...{} }}
          {...{}}
        />
        <span
          style={{
            ...{
              color: "var(--text-text-neutral-50, #1d1d1d)",
              textAlign: "right",
              fontFamily: 'var(--family-family, "sf pro display")',
              fontSize: "var(--size-base, 14px)",
              fontStyle: "normal",
              fontWeight: "700",
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
