// id="1186:39777"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom63292 } from "@designSystem/custom/QodeCustom63292"
import { QodeCustom63290 } from "@designSystem/custom/QodeCustom63290"

export interface QodeCustom118639777Props {}

export const QodeCustom118639777: React.FC<
  QodeCustom118639777Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="type=primary, size=default, state=default, content=default, danger=false, ghost=false" id="1186:39777" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding: "4px 16px",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
            border: "1px solid var(--border-border-primary-30, #107ecc)",
            background: "var(--background-bg-primary, #1597f4)",
          },
          ...style,
        }}
      >
        {/* name="🎰 icon" id="1186:40377" type="INSTANCE" */}
        <QodeCustom63292
          style={{
            ...{
              display: "flex",
              width: "16px",
              height: "16px",
              padding: "1.599px 1.599px 1.599px 1.6px",
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
              color: "var(--text-text-white, #fff)",
              textAlign: "center",
              fontFamily: 'var(--family-family, "sf pro display")',
              fontSize: "var(--size-base, 14px)",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight:
                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
            },
            ...{},
          }}
        >{`Button`}</span>
        {/* name="🎰 icon" id="1186:40379" type="INSTANCE" */}
        <QodeCustom63290
          style={{
            ...{
              display: "flex",
              width: "16px",
              height: "16px",
              padding: "1.6px 1.601px 1.598px 1.6px",
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
