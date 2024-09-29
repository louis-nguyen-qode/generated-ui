// id="1510:55469"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom63292 } from "@designSystem/custom/QodeCustom63292"
import { QodeCustom63290 } from "@designSystem/custom/QodeCustom63290"

export interface QodeCustom151055469Props {}

export const QodeCustom151055469: React.FC<
  QodeCustom151055469Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="type=primary, size=small, state=default, content=default, danger=false, ghost=false" id="1510:55469" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "4px 8px",
            justifyContent: "center",
            alignItems: "center",
            gap: "4px",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
            border: "1px solid var(--border-border-primary-30, #107ecc)",
            background: "var(--background-bg-primary, #1597f4)",
          },
          ...style,
        }}
      >
        {/* name="🎰 icon" id="1510:56089" type="INSTANCE" */}
        <QodeCustom63292
          style={{
            ...{
              display: "flex",
              width: "var(--font-size-base, 14px)",
              height: "var(--font-size-base, 14px)",
              padding: "1.399px 1.399px 1.399px 1.4px",
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
              fontSize: "var(--size-small, 12px)",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight:
                "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
            },
            ...{},
          }}
        >{`Button`}</span>
        {/* name="🎰 icon" id="1510:56091" type="INSTANCE" */}
        <QodeCustom63290
          style={{
            ...{
              display: "flex",
              width: "var(--font-size-base, 14px)",
              height: "var(--font-size-base, 14px)",
              padding: "1.4px 1.401px 1.398px 1.4px",
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
