// id="1278:37379"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom127837317 } from "@designSystem/custom/QodeCustom127837317"

export interface QodeCustom127837379Props {}

export const QodeCustom127837379: React.FC<
  QodeCustom127837379Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="state=off, style=Default" id="1278:37379" type="COMPONENT" */}
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
        {/* name="Icon" id="1278:37381" type="FRAME" */}
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
              borderRadius: "8px",
              border: "1px solid var(--border-border-neutral-20, #e3e3e3)",
              background: "var(--neutral-gray-5, #f8f6f6)",
            },
            ...{},
          }}
        >
          {/* name="up-to-line" id="1278:37382" type="INSTANCE" */}
          <QodeCustom127837317
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
        >{`Present`}</span>
      </div>
    </>
  )
}
