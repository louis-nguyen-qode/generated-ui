// id="677:33735"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg67733736 from "@designSystem/icon/svg/QodeSvg67733736"

export interface QodeCustom67733735Props {}

export const QodeCustom67733735: React.FC<
  QodeCustom67733735Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="Property 1=Variant3" id="677:33735" type="COMPONENT" */}
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
        {/* name="circle" id="677:33736" type="FRAME" */}
        <QodeSvg67733736
          style={{
            ...{ width: "12px", height: "12px", flexShrink: "0" },
            ...{},
          }}
          {...{}}
        />
        {/* name="Line 37" id="677:33738" type="LINE" */}
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
