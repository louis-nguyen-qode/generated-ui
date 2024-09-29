// id="607:40866"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg60740883 from "@designSystem/icon/svg/QodeSvg60740883"

export interface QodeCustom60740866Props {}

export const QodeCustom60740866: React.FC<
  QodeCustom60740866Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="status=progress, size=default" id="607:40866" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "32px",
            height: "var(--size-height-controlheight, 32px)",
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
        {/* name="Progress Circle" id="607:40882" type="RECTANGLE" */}
        <Flex
          style={{
            ...{
              width: "34px",
              height: "34px",
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
        {/* name="Progress Circle Completed" id="607:40883" type="ELLIPSE" */}
        <QodeSvg60740883
          style={{
            ...{
              width: "34px",
              height: "34px",
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
