// id="202:42626"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom20242626Props {}

export const QodeCustom20242626: React.FC<
  QodeCustom20242626Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="size=small, active=false, disabled=false" id="202:42626" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "inline-flex",
            height: "22px",
            padding: "0px var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxxs, 4px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-small, 4px)",
          },
          ...style,
        }}
      >
        {/* name="🎰 icon" id="202:42627" type="INSTANCE" */}
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
              fontSize: "var(--size-base, 14px)",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight:
                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
            },
            ...{},
          }}
        >{`Item`}</span>
      </div>
    </>
  )
}
