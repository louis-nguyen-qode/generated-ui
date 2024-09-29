// id="140:8523"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom1408520 } from "@designSystem/custom/QodeCustom1408520"
import { QodeCustom815419 } from "@designSystem/custom/QodeCustom815419"

export interface QodeCustom1408523Props {}

export const QodeCustom1408523: React.FC<
  QodeCustom1408523Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="direction=horizontal, size=default" id="140:8523" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            alignItems: "center",
            gap: "var(--size-padding-paddingxxs, 4px)",
            flexShrink: "0",
          },
          ...style,
        }}
      >
        {/* name="Icon" id="140:8529" type="INSTANCE" */}
        <QodeCustom1408520
          style={{
            ...{
              display: "flex",
              width: "16px",
              height: "16px",
              padding: "1.6px",
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
        >{`Input label`}</span>
        <span
          style={{
            ...{
              color: "var(--text-text-red, #dc3812)",
              fontFamily: 'var(--family-family, "sf pro display")',
              fontSize: "var(--size-base, 14px)",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight:
                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
            },
            ...{},
          }}
        >{`*`}</span>
        {/* name="Icon" id="140:8532" type="INSTANCE" */}
        <QodeCustom815419
          style={{ ...{ width: "16px", height: "16px" }, ...{} }}
          {...{}}
        />
      </div>
    </>
  )
}
