// id="1278:37386"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom127837348 } from "@designSystem/custom/QodeCustom127837348"

export interface QodeCustom127837386Props {}

export const QodeCustom127837386: React.FC<
  QodeCustom127837386Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="state=on, style=Default" id="1278:37386" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "65px",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-size-sizexxs-6px, 6px)",
          },
          ...style,
        }}
      >
        {/* name="Icon" id="1278:37388" type="FRAME" */}
        <div
          style={{
            ...{
              display: "flex",
              width: "40px",
              height: "40px",
              padding: "8px",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
              borderRadius: "var(--size-size-sizexs-8px, 8px)",
              border: "1px solid var(--border-border-primary-30, #107ecc)",
              background: "var(--background-bg-primary, #1597f4)",
            },
            ...{},
          }}
        >
          {/* name="comment-lines" id="1278:37389" type="INSTANCE" */}
          <QodeCustom127837348
            style={{
              ...{ width: "24px", height: "24px", flexShrink: "0" },
              ...{},
            }}
            {...{}}
          />
        </div>
        <span
          style={{
            ...{
              color: "var(--text-text-neutral-40, #464646)",
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
        >{`Chat`}</span>
      </div>
    </>
  )
}
