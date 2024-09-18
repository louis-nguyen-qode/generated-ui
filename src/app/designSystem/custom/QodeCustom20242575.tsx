// id="202:42575"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom20242575Props {}

export const QodeCustom20242575: React.FC<
  QodeCustom20242575Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="size=default, active=true, disabled=false" id="202:42575" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "inline-flex",
            height: "28px",
            padding: "0px var(--size-padding-paddingsm, 12px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxxs, 4px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-small, 4px)",
            background: "var(--background-bg-white, #fff)",
            boxShadow:
              "0px 2px 4px 0px rgba(0, 0, 0, 0.02), 0px 1px 6px -1px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.03)",
          },
          ...style,
        }}
      >
        {/* name="🎰 icon" id="202:42572" type="INSTANCE" */}
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
              fontWeight: "500",
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
