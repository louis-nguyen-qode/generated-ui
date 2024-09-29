// id="2281:49026"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom63292 } from "@designSystem/custom/QodeCustom63292"
import { QodeCustom63290 } from "@designSystem/custom/QodeCustom63290"

export interface QodeCustom228149026Props {}

export const QodeCustom228149026: React.FC<
  QodeCustom228149026Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="type=default, size=small, state=default, content=default, danger=false, ghost=false" id="2281:49026" type="COMPONENT" */}
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
            border: "1px solid var(--border-border-neutral-40, #bfbfbf)",
            background: "var(--background-bg-white, #fff)",
          },
          ...style,
        }}
      >
        {/* name="🎰 icon" id="2281:49648" type="INSTANCE" */}
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
              color: "var(--text-text-neutral-50, #1d1d1d)",
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
        {/* name="🎰 icon" id="2281:49650" type="INSTANCE" */}
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
