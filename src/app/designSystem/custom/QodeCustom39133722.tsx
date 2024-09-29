// id="391:33722"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom39133722Props {}

export const QodeCustom39133722: React.FC<
  QodeCustom39133722Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="Type=Text, Show Thumbnail=Timezone" id="391:33722" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "212px",
            height: "48px",
            padding: "12px 16px",
            alignItems: "center",
            gap: "8px",
            flexShrink: "0",
            borderBottom: "1px solid var(--border-border-neutral-20, #e3e3e3)",
            background: "var(--background-bg-white, #fff)",
          },
          ...style,
        }}
      >
        {/* name="Timezone" id="391:33737" type="FRAME" */}
        <div
          style={{
            ...{ display: "flex", alignItems: "center", gap: "8px" },
            ...{},
          }}
        >
          <span
            style={{
              ...{
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: "1",
                overflow: "hidden",
                color: "var(--text-text-neutral-30, #656565)",
                textAlign: "center",
                textOverflow: "ellipsis",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-small, 12px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight:
                  "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
              },
              ...{},
            }}
          >{`UTC +7`}</span>
          {/* name="-" id="391:33739" type="LINE" */}
          <Flex
            style={{
              ...{
                width: "1px",
                height: "12px",
                background: "var(--border-border-neutral-20, #e3e3e3)",
              },
              ...{},
            }}
          >
            <></>
          </Flex>
        </div>
        <span
          style={{
            ...{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              flex: "1 0 0",
              alignSelf: "stretch",
              overflow: "hidden",
              color: "var(--text-text-neutral-50, #1d1d1d)",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              fontFamily: 'var(--family-family, "sf pro display")',
              fontSize: "var(--size-base, 14px)",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight:
                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
            },
            ...{},
          }}
        >{`12:30 AM – 1:30 PM`}</span>
      </div>
    </>
  )
}
