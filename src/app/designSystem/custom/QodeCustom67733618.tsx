// id="677:33618"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom13410465 } from "@designSystem/custom/QodeCustom13410465"

export interface QodeCustom67733618Props {}

export const QodeCustom67733618: React.FC<
  QodeCustom67733618Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="Property 1=AI" id="677:33618" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "28px",
            height: "28px",
            padding: "6px",
            justifyContent: "center",
            alignItems: "center",
            flexShrink: "0",
            borderRadius: "0px 0px 0px 12px",
            border: "1px solid var(--border-border-focused-primary, #82c8fa)",
            background:
              "linear-gradient(163deg, #B8E1FF 0.63%, #CDF6FF 76.87%)",
          },
          ...style,
        }}
      >
        {/* name="stars" id="677:33619" type="INSTANCE" */}
        <QodeCustom13410465
          style={{
            ...{ width: "16px", height: "16px", flexShrink: "0" },
            ...{},
          }}
          {...{}}
        />
      </div>
    </>
  )
}
