// id="1186:40091"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom63290 } from "@designSystem/custom/QodeCustom63290"

export interface QodeCustom118640091Props {}

export const QodeCustom118640091: React.FC<
  QodeCustom118640091Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="type=link, size=small, state=default, content=icon, danger=false, ghost=false" id="1186:40091" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "24px",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "var(--size-padding-paddingxxs, 4px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          },
          ...style,
        }}
      >
        {/* name="🎰 icon" id="1186:41337" type="INSTANCE" */}
        <QodeCustom63290
          style={{
            ...{
              width: "var(--font-size-base, 14px)",
              height: "var(--font-size-base, 14px)",
              flexShrink: "0",
            },
            ...{},
          }}
          {...{}}
        />
      </div>
    </>
  )
}
