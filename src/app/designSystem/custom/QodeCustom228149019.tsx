// id="2281:49019"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom63292 } from "@designSystem/custom/QodeCustom63292"
import { QodeCustom63290 } from "@designSystem/custom/QodeCustom63290"

export interface QodeCustom228149019Props {}

export const QodeCustom228149019: React.FC<
  QodeCustom228149019Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="type=link, size=default, state=default, content=default, danger=false, ghost=false" id="2281:49019" type="COMPONENT" */}
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
          },
          ...style,
        }}
      >
        {/* name="🎰 icon" id="2281:49627" type="INSTANCE" */}
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
              color: "var(--text-text-primary-30, #158de2)",
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
        {/* name="🎰 icon" id="2281:49629" type="INSTANCE" */}
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
