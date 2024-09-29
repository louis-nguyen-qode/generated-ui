// id="607:40871"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg60740890 from "@designSystem/icon/svg/QodeSvg60740890"

export interface QodeCustom60740871Props {}

export const QodeCustom60740871: React.FC<
  QodeCustom60740871Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="status=progress, size=small" id="607:40871" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "24px",
            height: "var(--size-height-controlheightsm, 24px)",
            justifyContent: "center",
            alignItems: "center",
            flexShrink: "0",
            borderRadius: "999px",
            background: "var(--background-bg-primary, #1597f4)",
          },
          ...style,
        }}
      >
        <span
          style={{
            ...{
              flex: "1 0 0",
              color: "var(--text-text-white, #fff)",
              textAlign: "center",
              fontFamily: 'var(--family-family, "sf pro display")',
              fontSize: "var(--size-base, 14px)",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight:
                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
            },
            ...{},
          }}
        >{`2`}</span>
        {/* name="Progress Circle" id="607:40889" type="RECTANGLE" */}
        <Flex
          style={{
            ...{
              width: "26px",
              height: "26px",
              position: "absolute",
              left: "-1px",
              top: "-1px",
              borderRadius: "999px",
              border: "1px solid var(--border-border-neutral-30, #d5d5d5)",
            },
            ...{},
          }}
        >
          <></>
        </Flex>
        {/* name="Progress Circle Completed" id="607:40890" type="ELLIPSE" */}
        <QodeSvg60740890
          style={{
            ...{
              width: "26px",
              height: "26px",
              transform: "rotate(-90deg)",
              position: "absolute",
              left: "-1px",
              top: "-1px",
              strokeWidth: "1px",
              stroke: "var(--border-border-primary-20, #158de2)",
            },
            ...{},
          }}
          {...{}}
        />
      </div>
    </>
  )
}
