// id="189:12627"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCheckbox } from "@designSystem/ant/QodeCheckbox"

export interface QodeCustom18912627Props {}

export const QodeCustom18912627: React.FC<
  QodeCustom18912627Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="state=default, danger=false" id="189:12627" type="COMPONENT" */}
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
        {/* name="Checkbox" id="2759:31841" type="INSTANCE" */}
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
        {/* name="🎰 icon" id="189:12622" type="INSTANCE" */}
        <Icon.QodeUser
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
        {/* name="submenu" id="189:12625" type="INSTANCE" */}
        <Icon.QodeChevronRight
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
