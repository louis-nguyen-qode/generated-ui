// id="328:40351"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom32840351Props {}

export const QodeCustom32840351: React.FC<
  QodeCustom32840351Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="Skill" id="328:40351" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "283px",
            minWidth: "257px",
            maxWidth: "310px",
            padding: "16px",
            justifyContent: "center",
            alignItems: "center",
            gap: "24px",
            borderRadius: "var(--border-radius-base, 8px)",
            border: "1px solid var(--border-border-primary-10, #64b9f5)",
            background: "var(--blue-techblue-5, #f8fcff)",
          },
          ...style,
        }}
      >
        <span
          style={{
            ...{
              display: "flex",
              maxHeight: "48px",
              flexDirection: "column",
              justifyContent: "center",
              flex: "1 0 0",
              alignSelf: "stretch",
              overflow: "hidden",
              color: "var(--text-text-neutral-40, #464646)",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              fontFamily: '"SF Pro Display"',
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: "500",
              lineHeight: "24px /* 150% */",
            },
            ...{},
          }}
        >{`Communication`}</span>
        {/* name="Score" id="328:40346" type="FRAME" */}
        <div
          style={{
            ...{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              alignItems: "flex-end",
              gap: "4px",
            },
            ...{},
          }}
        >
          <span
            style={{
              ...{
                width: "46px",
                height: "29px",
                color: "var(--text-text-neutral-50, #1d1d1d)",
                textAlign: "right",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-heading4, 24px)",
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight:
                  "var(--lineheight-lineheight-h4, 32px) /* 133.333% */",
              },
              ...{},
            }}
          >{`70`}</span>
          {/* name="Line 30" id="328:40348" type="LINE" */}
          <Flex
            style={{
              ...{
                width: "24px",
                height: "1px",
                background: "var(--border-border-neutral-20, #e3e3e3)",
              },
              ...{},
            }}
          >
            <></>
          </Flex>
          <span
            style={{
              ...{
                color: "var(--text-text-neutral-30, #656565)",
                textAlign: "right",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "10px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "9px /* 90% */",
              },
              ...{},
            }}
          >{`100`}</span>
        </div>
      </div>
    </>
  )
}
