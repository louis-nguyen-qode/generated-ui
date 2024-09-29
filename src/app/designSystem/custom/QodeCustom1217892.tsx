// id="121:7892"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom1217892Props {}

export const QodeCustom1217892: React.FC<
  QodeCustom1217892Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="Overlay BG" id="121:7892" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "1366px",
            height: "768px",
            justifyContent: "center",
            alignItems: "center",
          },
          ...style,
        }}
      >
        {/* name="filter" id="121:7893" type="RECTANGLE" */}
        <Flex
          style={{
            ...{
              width: "1366px",
              height: "768px",
              flexShrink: "0",
              opacity: "0.6",
              background: "#000",
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
