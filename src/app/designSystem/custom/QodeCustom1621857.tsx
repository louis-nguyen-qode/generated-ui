// id="162:1857"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCarousel } from "@designSystem/ant/QodeCarousel"

export interface QodeCustom1621857Props {}

export const QodeCustom1621857: React.FC<
  QodeCustom1621857Props & { style?: CSSProperties }
> = ({ ...rest }) => {
  return (
    <>
      {/* name="direction=vertical, items=4" id="162:1857" type="COMPONENT" */}
      <div
        style={{
          display: "inline-flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "var(--size-padding-paddingxs, 8px)",
        }}
      >
        {/* name="🧬 dot 1" id="162:1858" type="INSTANCE" */}
        <QodeCarousel
          style={{ width: "24px", height: "3px" }}
          {...{ state: "active" }}
        />
        {/* name="🧬 dot 2" id="162:1859" type="INSTANCE" */}
        <QodeCarousel
          style={{ width: "16px", height: "3px", opacity: "0.3" }}
          {...{ state: "default" }}
        />
        {/* name="🧬 dot 3" id="162:1860" type="INSTANCE" */}
        <QodeCarousel
          style={{ width: "16px", height: "3px", opacity: "0.3" }}
          {...{ state: "default" }}
        />
        {/* name="🧬 dot 4" id="162:1861" type="INSTANCE" */}
        <QodeCarousel
          style={{ width: "16px", height: "3px", opacity: "0.3" }}
          {...{ state: "default" }}
        />
      </div>
    </>
  )
}
