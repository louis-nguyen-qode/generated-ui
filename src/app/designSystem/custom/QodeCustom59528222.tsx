// id="595:28222"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom59528123 } from "@designSystem/custom/QodeCustom59528123"

export interface QodeCustom59528222Props {}

export const QodeCustom59528222: React.FC<
  QodeCustom59528222Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="Report/Response" id="595:28222" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "526px",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "4px",
          },
          ...style,
        }}
      >
        {/* name="Report/Rating" id="595:28209" type="INSTANCE" */}
        <QodeCustom59528123
          style={{
            ...{
              display: "flex",
              alignItems: "center",
              gap: "2px",
              alignSelf: "stretch",
            },
            ...{},
          }}
          {...{ property_1: "5" }}
        />
        <span
          style={{
            ...{
              alignSelf: "stretch",
              color: "var(--text-text-neutral-50, #1d1d1d)",
              fontFamily: 'var(--family-family, "sf pro display")',
              fontSize: "var(--size-large, 16px)",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "24px /* 150% */",
            },
            ...{},
          }}
        >{`Candidate provided a clear introduction, highlighting relevant skills and experience. However, the summary lacked depth in certain areas and could have been more concise. `}</span>
      </div>
    </>
  )
}
