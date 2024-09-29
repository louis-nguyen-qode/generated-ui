// id="1510:55473"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom63292 } from "@designSystem/custom/QodeCustom63292"
import { QodeCustom63290 } from "@designSystem/custom/QodeCustom63290"

export interface QodeCustom151055473Props {}

export const QodeCustom151055473: React.FC<
  QodeCustom151055473Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="type=link, size=small, state=default, content=default, danger=false, ghost=false" id="1510:55473" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "inline-flex",
            padding: "4px 8px",
            justifyContent: "center",
            alignItems: "center",
            gap: "4px",
            borderRadius: "var(--border-radius-rounded, 999px)",
          },
          ...style,
        }}
      >
        {/* name="🎰 icon" id="1510:56101" type="INSTANCE" */}
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
              color: "var(--text-text-primary-30, #158de2)",
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
        {/* name="🎰 icon" id="1510:56103" type="INSTANCE" */}
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
