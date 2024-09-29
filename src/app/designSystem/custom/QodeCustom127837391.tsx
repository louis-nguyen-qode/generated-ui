// id="1278:37391"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom127837348 } from "@designSystem/custom/QodeCustom127837348"

export interface QodeCustom127837391Props {}

export const QodeCustom127837391: React.FC<
  QodeCustom127837391Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="state=off, style=Default" id="1278:37391" type="COMPONENT" */}
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
        {/* name="Icon" id="1278:37393" type="FRAME" */}
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
          {/* name="comment-lines" id="1278:37394" type="INSTANCE" */}
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
