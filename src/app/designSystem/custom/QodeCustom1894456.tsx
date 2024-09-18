// id="189:4456"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom11436665 } from "@designSystem/custom/QodeCustom11436665"

export interface QodeCustom1894456Props {}

export const QodeCustom1894456: React.FC<
  QodeCustom1894456Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="checked=true" id="189:4456" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "18px",
            height: "18px",
            padding: "3px",
            justifyContent: "center",
            alignItems: "center",
            flexShrink: "0",
            borderRadius: "var(--style-radius-borderradiussm, 6px)",
            border:
              "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorsplit, rgba(0, 0, 0, 0.06))",
            background:
              "linear-gradient(0deg, rgba(54, 137, 214, 0.62) 0%, rgba(54, 137, 214, 0.62) 100%), var(--color-neutral-background-colorbgcontainer, #fff)",
          },
          ...style,
        }}
      >
        {/* name="Check" id="189:4737" type="INSTANCE" */}
        <QodeCustom11436665
          style={{
            ...{ width: "12px", height: "12px", flexShrink: "0" },
            ...{},
          }}
          {...{}}
        />
      </div>
    </>
  )
}