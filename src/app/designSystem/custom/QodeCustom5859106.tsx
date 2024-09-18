// id="5859:106"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom5859106Props {}

export const QodeCustom5859106: React.FC<
  QodeCustom5859106Props & { style?: CSSProperties }
> = ({ ...rest }) => {
  return (
    <>
      {/* name="Property 1=descending" id="5859:106" type="COMPONENT" */}
      <div
        style={{
          display: "flex",
          width: "16px",
          height: "16px",
          justifyContent: "center",
          alignItems: "center",
          flexShrink: "0",
        }}
      >
        {/* name="arrow-down" id="5859:95" type="INSTANCE" */}
        <Icon.QodeArrowDown
          style={{ width: "16px", height: "16px", flexShrink: "0" }}
          {...{}}
        />
      </div>
    </>
  )
}
