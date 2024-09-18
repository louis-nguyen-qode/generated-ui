// id="664:31667"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom66431667Props {}

export const QodeCustom66431667: React.FC<
  QodeCustom66431667Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="Property 1=1" id="664:31667" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "inline-flex",
            height: "59px",
            flexDirection: "column",
            alignItems: "center",
            gap: "4px",
            flexShrink: "0",
          },
          ...style,
        }}
      >
        {/* name="circle-check" id="664:31653" type="INSTANCE" */}
        <Icon.QodeCircleCheck
          style={{
            ...{ width: "12px", height: "12px", flexShrink: "0" },
            ...{},
          }}
          {...{}}
        />
        {/* name="Line 37" id="664:31654" type="LINE" */}
        <Flex
          style={{
            ...{
              width: "1px",
              height: "43px",
              background: "var(--border-border-neutral-30, #d5d5d5)",
            },
            ...{},
          }}
        >
          <></>
        </Flex>
      </div>
    </>
  )
}
