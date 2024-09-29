// id="467:28750"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom34019241 } from "@designSystem/custom/QodeCustom34019241"
import { QodeCustom44042741 } from "@designSystem/custom/QodeCustom44042741"

export interface QodeCustom46728750Props {}

export const QodeCustom46728750: React.FC<
  QodeCustom46728750Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="type=default, align=left" id="467:28750" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "228px",
            height: "46px",
            padding: "var(--font-size-base, 14px) 16px",
            alignItems: "center",
            gap: "4px",
            flexShrink: "0",
            borderBottom: "1px solid var(--border-border-neutral-30, #d5d5d5)",
            background: "var(--neutral-gray-5, #f8f6f6)",
          },
          ...style,
        }}
      >
        <span
          style={{
            ...{
              color: "var(--text-text-neutral-50, #1d1d1d)",
              fontFamily: 'var(--family-family, "sf pro display")',
              fontSize: "var(--size-base, 14px)",
              fontStyle: "normal",
              fontWeight: "500",
              lineHeight:
                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
            },
            ...{},
          }}
        >{`Column`}</span>
        {/* name="Table/Sort" id="467:28755" type="INSTANCE" */}
        <QodeCustom34019241
          style={{
            ...{
              display: "flex",
              width: "16px",
              height: "16px",
              justifyContent: "center",
              alignItems: "center",
              flexShrink: "0",
            },
            ...{},
          }}
          {...{ property_1: "descending" }}
        />
        {/* name="Table/filter" id="467:28756" type="INSTANCE" */}
        <QodeCustom44042741
          style={{
            ...{
              width: "16px",
              height: "16px",
              position: "absolute",
              right: "16px",
              top: "15px",
            },
            ...{},
          }}
          {...{ property_1: "Default" }}
        />
      </div>
    </>
  )
}
