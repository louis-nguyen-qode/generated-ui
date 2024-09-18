// id="162:1778"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCarousel } from "@designSystem/ant/QodeCarousel"

export interface QodeCustom1621778Props {}

export const QodeCustom1621778: React.FC<
  QodeCustom1621778Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="direction=horizontal, items=4" id="162:1778" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "inline-flex",
            alignItems: "flex-start",
            gap: "var(--size-padding-paddingxs, 8px)",
          },
          ...style,
        }}
      >
        {/* name="🧬 dot 1" id="162:1779" type="INSTANCE" */}
        <QodeCarousel
          style={{ ...{ width: "24px", height: "3px" }, ...{} }}
          {...{ state: "active" }}
        />
        {/* name="🧬 dot 2" id="162:1780" type="INSTANCE" */}
        <QodeCarousel
          style={{ ...{ width: "16px", height: "3px", opacity: "0.3" }, ...{} }}
          {...{ state: "default" }}
        />
        {/* name="🧬 dot 3" id="162:1781" type="INSTANCE" */}
        <QodeCarousel
          style={{ ...{ width: "16px", height: "3px", opacity: "0.3" }, ...{} }}
          {...{ state: "default" }}
        />
        {/* name="🧬 dot 4" id="162:1785" type="INSTANCE" */}
        <QodeCarousel
          style={{ ...{ width: "16px", height: "3px", opacity: "0.3" }, ...{} }}
          {...{ state: "default" }}
        />
      </div>
    </>
  )
}
