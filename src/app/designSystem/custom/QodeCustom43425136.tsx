// id="434:25136"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCheckbox } from "@designSystem/ant/QodeCheckbox"
import { QodeCustom161270 } from "@designSystem/custom/QodeCustom161270"
import { QodeCustom66096 } from "@designSystem/custom/QodeCustom66096"

export interface QodeCustom43425136Props {}

export const QodeCustom43425136: React.FC<
  QodeCustom43425136Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="state=default, danger=false" id="434:25136" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "200px",
            height: "var(--size-height-controlheight, 32px)",
            padding: "0px 12px",
            alignItems: "center",
            gap: "8px",
            flexShrink: "0",
            borderRadius: "var(--style-radius-borderradiussm, 6px)",
          },
          ...style,
        }}
      >
        {/* name="Checkbox" id="434:25144" type="INSTANCE" */}
        <QodeCheckbox
          style={{
            ...{
              display: "flex",
              width: "95px",
              alignItems: "center",
              gap: "var(--size-padding-paddingxs, 8px)",
              flexShrink: "0",
            },
            ...{},
          }}
          {...{ title: "Checkbox", status: "inactive", state: "default" }}
        />
        {/* name="🎰 icon" id="434:25145" type="INSTANCE" */}
        <QodeCustom161270
          style={{
            ...{ width: "16px", height: "16px", flexShrink: "0" },
            ...{},
          }}
          {...{}}
        />
        <span
          style={{
            ...{
              flex: "1 0 0",
              color: "var(--text-text-neutral-50, #1d1d1d)",
              fontFamily: 'var(--family-family, "sf pro display")',
              fontSize: "var(--size-base, 14px)",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight:
                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
            },
            ...{},
          }}
        >{`Dropdown Item`}</span>
        {/* name="submenu" id="434:25147" type="INSTANCE" */}
        <QodeCustom66096
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
