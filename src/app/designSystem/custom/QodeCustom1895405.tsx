// id="189:5405"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCheckbox } from "@designSystem/ant/QodeCheckbox"
import { QodeCustom6308711 } from "@designSystem/custom/QodeCustom6308711"

export interface QodeCustom1895405Props {}

export const QodeCustom1895405: React.FC<
  QodeCustom1895405Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="state=default, selected=false" id="189:5405" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "200px",
            height: "var(--size-height-controlheight, 32px)",
            padding: "0px var(--size-padding-paddingsm, 12px)",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--style-radius-borderradiussm, 6px)",
          },
          ...style,
        }}
      >
        {/* name="Checkbox" id="189:5384" type="INSTANCE" */}
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
        <span
          style={{
            ...{
              flex: "1 0 0",
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
        >{`Cascader Item`}</span>
        {/* name="Icon" id="189:5401" type="INSTANCE" */}
        <QodeCustom6308711
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
