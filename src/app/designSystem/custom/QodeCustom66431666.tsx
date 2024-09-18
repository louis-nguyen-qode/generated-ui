// id="664:31666"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg66431806 from "@designSystem/icon/svg/QodeSvg66431806"

export interface QodeCustom66431666Props {}

export const QodeCustom66431666: React.FC<
  QodeCustom66431666Props & { style?: CSSProperties }
> = ({ ...rest }) => {
  return (
    <>
      {/* name="Property 1=2" id="664:31666" type="COMPONENT" */}
      <div
        style={{
          display: "inline-flex",
          height: "59px",
          flexDirection: "column",
          alignItems: "center",
          gap: "4px",
          flexShrink: "0",
        }}
      >
        {/* name="circle" id="664:31806" type="FRAME" */}
        <QodeSvg66431806
          style={{ width: "12px", height: "12px", flexShrink: "0" }}
          {...{}}
        />
        {/* name="Line 37" id="664:31659" type="LINE" */}
        <Flex
          style={{
            width: "1px",
            height: "43px",
            background: "var(--border-border-neutral-30, #d5d5d5)",
          }}
        >
          {/* name="Line 37" id=664:31659 type=LINE */}
          <></>
        </Flex>
      </div>
    </>
  )
}
