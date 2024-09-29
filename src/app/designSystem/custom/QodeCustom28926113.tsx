// id="289:26113"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom28926110 } from "@designSystem/custom/QodeCustom28926110"
import { QodeCustom66176 } from "@designSystem/custom/QodeCustom66176"

export interface QodeCustom28926113Props {}

export const QodeCustom28926113: React.FC<
  QodeCustom28926113Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="type=default, border=true" id="289:26113" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "inline-flex",
            height: "24px",
            padding: "1px var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-margin-marginxxs, 4px)",
            flexShrink: "0",
            borderRadius: "var(--style-radius-borderradiussm, 6px)",
            background:
              "var(--color-neutral-fill-colorfillsecondary, rgba(0, 0, 0, 0.06))",
          },
          ...style,
        }}
      >
        {/* name="circle-plus" id="289:26119" type="INSTANCE" */}
        <QodeCustom28926110
          style={{
            ...{
              display: "flex",
              width: "12px",
              height: "12px",
              padding: "1.2px",
              justifyContent: "center",
              alignItems: "center",
            },
            ...{},
          }}
          {...{}}
        />
        <span
          style={{
            ...{
              color: "var(--color-neutral-text-colortextsolid, #fff)",
              fontFamily: 'var(--family-family, "sf pro display")',
              fontSize: "var(--size-small, 12px)",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight:
                "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
            },
            ...{},
          }}
        >{`Tag`}</span>
        {/* name="xmark" id="289:26121" type="INSTANCE" */}
        <QodeCustom66176
          style={{
            ...{
              display: "flex",
              width: "12px",
              height: "12px",
              padding: "2.999px",
              justifyContent: "center",
              alignItems: "center",
            },
            ...{},
          }}
          {...{}}
        />
      </div>
    </>
  )
}
