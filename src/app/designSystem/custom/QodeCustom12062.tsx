// id="1:2062"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom12062Props {}

export const QodeCustom12062: React.FC<
  QodeCustom12062Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="type=dot" id="1:2062" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "inline-flex",
            width: "var(--size-size-sizexxs-6px, 6px)",
            height: "var(--size-size-sizexxs-6px, 6px)",
            justifyContent: "center",
            alignItems: "center",
            flexShrink: "0",
            borderRadius: "var(--style-radius-borderradiuslg, 8px)",
            border:
              "1px solid var(--color-neutral-background-colorbgcontainer, #fff)",
            background: "var(--color-error-colorerror, #ff6542)",
          },
          ...style,
        }}
      >
        <></>
      </div>
    </>
  )
}
