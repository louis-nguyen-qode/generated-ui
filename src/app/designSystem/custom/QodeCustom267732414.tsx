// id="2677:32414"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom63010804 } from "@designSystem/custom/QodeCustom63010804"
import { QodeCustom63014871 } from "@designSystem/custom/QodeCustom63014871"

export interface QodeCustom267732414Props {}

export const QodeCustom267732414: React.FC<
  QodeCustom267732414Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="state=default, theme=solid" id="2677:32414" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "inline-flex",
            padding:
              "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            borderRadius: "var(--style-radius-borderround, 999px)",
          },
          ...style,
        }}
      >
        {/* name="🎰 icon" id="2677:32415" type="INSTANCE" */}
        <QodeCustom63010804
          style={{ ...{ width: "16px", height: "16px" }, ...{} }}
          {...{}}
        />
        <span
          style={{
            ...{
              color:
                "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
              fontFamily: 'var(--family-family, "sf pro display")',
              fontSize: "var(--size-base, 14px)",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight:
                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
            },
            ...{},
          }}
        >{`Navigation Item`}</span>
        {/* name="🎰 icon" id="2677:32417" type="INSTANCE" */}
        <QodeCustom63014871
          style={{ ...{ width: "12px", height: "12px" }, ...{} }}
          {...{}}
        />
      </div>
    </>
  )
}
