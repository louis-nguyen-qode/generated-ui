// id="5959:97"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom595997Props {}

export const QodeCustom595997: React.FC<
  QodeCustom595997Props & { style?: CSSProperties }
> = ({ ...rest }) => {
  return (
    <>
      {/* name="Property 1=Default" id="5959:97" type="COMPONENT" */}
      <div style={{ width: "16px", height: "16px", flexShrink: "0" }}>
        {/* name="filter" id="5959:91" type="INSTANCE" */}
        <Icon.QodeFilter
          style={{ width: "16px", height: "16px", position: "absolute" }}
          {...{}}
        />
      </div>
    </>
  )
}
