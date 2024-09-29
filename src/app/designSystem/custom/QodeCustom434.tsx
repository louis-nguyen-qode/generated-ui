// id="4:34"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom130 } from "@designSystem/custom/QodeCustom130"

export interface QodeCustom434Props {}

export const QodeCustom434: React.FC<
  QodeCustom434Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="State=Default" id="4:34" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "84px",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-size-sizexxs-6px, 6px)",
          },
          ...style,
        }}
      >
        {/* name="Icon" id="4:78" type="FRAME" */}
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
              border: "1px solid var(--border-border-neutral-20, #e3e3e3)",
              background: "var(--background-bg-neutral-5, #f8f6f6)",
            },
            ...{},
          }}
        >
          {/* name="briefcase" id="4:79" type="INSTANCE" */}
          <QodeCustom130
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
              alignSelf: "stretch",
              color: "var(--text-text-neutral-30, #656565)",
              textAlign: "center",
              fontFamily: 'var(--family-family, "sf pro display")',
              fontSize: "var(--size-small, 12px)",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight:
                "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
            },
            ...{},
          }}
        >{`Jobs`}</span>
      </div>
    </>
  )
}
