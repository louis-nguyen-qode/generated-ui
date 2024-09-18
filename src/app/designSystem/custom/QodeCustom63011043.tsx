// id="630:11043"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg63010148 from "@designSystem/icon/svg/QodeSvg63010148"

export interface QodeCustom63011043Props {}

export const QodeCustom63011043: React.FC<
  QodeCustom63011043Props & { style?: CSSProperties }
> = ({ ...rest }) => {
  return (
    <>
      {/* name="gear" id="630:11043" type="COMPONENT" */}
      <div
        style={{
          display: "flex",
          width: "24px",
          height: "24px",
          padding: "0px 0.692px 0.005px 0.687px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* name="Vector" id="630:10148" type="VECTOR" */}
        <QodeSvg63010148
          style={{
            width: "22.621px",
            height: "23.995px",
            flexShrink: "0",
            fill: "var(--color-neutral-text-colortext, #000)",
          }}
          {...{}}
        />
      </div>
    </>
  )
}
