// id="167:2011"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom63010804 } from "@designSystem/custom/QodeCustom63010804"
import { QodeCustom63014871 } from "@designSystem/custom/QodeCustom63014871"

export interface QodeCustom1672011Props {}

export const QodeCustom1672011: React.FC<
  QodeCustom1672011Props & { style?: CSSProperties }
> = ({ ...rest }) => {
  return (
    <>
      {/* name="state=active, theme=solid" id="167:2011" type="COMPONENT" */}
      <div
        style={{
          display: "inline-flex",
          padding:
            "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
          alignItems: "center",
          gap: "var(--size-padding-paddingxs, 8px)",
          borderRadius: "var(--style-radius-borderround, 999px)",
          background: "var(--color-primary-colorprimary, #1597f4)",
          boxShadow:
            "0px 2px 4px 0px rgba(0, 0, 0, 0.02), 0px 1px 6px -1px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.03)",
        }}
      >
        {/* name="🎰 icon" id="167:2012" type="INSTANCE" */}
        <QodeCustom63010804 style={{ width: "16px", height: "16px" }} {...{}} />
        <span
          style={{
            color: "var(--color-neutral-text-colortextsolid, #fff)",
            fontFamily: 'var(--family-family, "sf pro display")',
            fontSize: "var(--size-base, 14px)",
            fontStyle: "normal",
            fontWeight: "700",
            lineHeight:
              "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
          }}
        >{`Navigation Item`}</span>
        {/* name="🎰 icon" id="2677:28388" type="INSTANCE" */}
        <QodeCustom63014871 style={{ width: "12px", height: "12px" }} {...{}} />
      </div>
    </>
  )
}
