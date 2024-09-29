// id="1:1401"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom191 } from "@designSystem/custom/QodeCustom191"

export interface QodeCustom11401Props {}

export const QodeCustom11401: React.FC<
  QodeCustom11401Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="type=default, size=large, state=default, content=icon, danger=false, ghost=false" id="1:1401" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingsm, 12px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--style-radius-borderround, 999px)",
            border:
              "1px solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
            background:
              "var(--color-neutral-background-colorbgcontainer, #fff)",
          },
          ...style,
        }}
      >
        {/* name="🎰 icon" id="1:1402" type="INSTANCE" */}
        <QodeCustom191
          style={{ ...{ width: "16px", height: "16px" }, ...{} }}
          {...{}}
        />
      </div>
    </>
  )
}
