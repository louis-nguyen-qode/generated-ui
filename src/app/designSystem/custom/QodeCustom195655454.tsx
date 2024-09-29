// id="1956:55454"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg195655461 from "@designSystem/icon/svg/QodeSvg195655461"
import QodeSvg195655462 from "@designSystem/icon/svg/QodeSvg195655462"

export interface QodeCustom195655454Props {}

export const QodeCustom195655454: React.FC<
  QodeCustom195655454Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="Property 1=4" id="1956:55454" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "116px",
            padding: "8px 4px",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
            borderRadius: "var(--border-radius-base, 8px)",
          },
          ...style,
        }}
      >
        {/* name="Group 46" id="1956:55460" type="GROUP" */}
        <Flex style={{ ...{ width: "65px", height: "65px" }, ...{} }}>
          {/* name="Ellipse 8" id="1956:55461" type="ELLIPSE" */}
          <QodeSvg195655461
            style={{
              ...{
                width: "65px",
                height: "65px",
                flexShrink: "0",
                fill: "var(--neutral-gray-10, #e3e3e3)",
              },
              ...{},
            }}
            {...{}}
          />
          {/* name="Ellipse 8" id="1956:55462" type="ELLIPSE" */}
          <QodeSvg195655462
            style={{
              ...{
                width: "65px",
                height: "65px",
                flexShrink: "0",
                fill: "var(--blue-techblue-50, #1597f4)",
              },
              ...{},
            }}
            {...{}}
          />
          <span
            style={{
              ...{
                color: "var(--text-text-neutral-40, #464646)",
                textAlign: "center",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-large, 16px)",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight:
                  "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
              },
              ...{},
            }}
          >{`70`}</span>
        </Flex>
        <span
          style={{
            ...{
              alignSelf: "stretch",
              color: "var(--text-text-neutral-40, #464646)",
              textAlign: "center",
              fontFamily: 'var(--family-family, "sf pro display")',
              fontSize: "var(--size-base, 14px)",
              fontStyle: "normal",
              fontWeight: "500",
              lineHeight:
                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
            },
            ...{},
          }}
        >{`Skill`}</span>
      </div>
    </>
  )
}
