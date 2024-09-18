// id="202:42610"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom20242610Props {}

export const QodeCustom20242610: React.FC<
  QodeCustom20242610Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="size=large, active=false, disabled=false" id="202:42610" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "inline-flex",
            height: "36px",
            padding: "0px var(--size-padding-paddingsm, 12px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxxs, 4px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-small, 4px)",
          },
          ...style,
        }}
      >
        {/* name="🎰 icon" id="202:42611" type="INSTANCE" */}
        <Icon.QodeListTree
          style={{ ...{ width: "16px", height: "16px" }, ...{} }}
          {...{}}
        />
        <span
          style={{
            ...{
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: "1",
              overflow: "hidden",
              color: "var(--text-text-neutral-50, #1d1d1d)",
              textOverflow: "ellipsis",
              fontFamily: 'var(--family-family, "sf pro display")',
              fontSize: "var(--size-large, 16px)",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "24px /* 150% */",
            },
            ...{},
          }}
        >{`Item`}</span>
      </div>
    </>
  )
}
