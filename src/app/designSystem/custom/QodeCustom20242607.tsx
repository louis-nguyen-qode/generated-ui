// id="202:42607"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom20242607Props {}

export const QodeCustom20242607: React.FC<
  QodeCustom20242607Props & { style?: CSSProperties }
> = ({ ...rest }) => {
  return (
    <>
      {/* name="size=large, active=true, disabled=false" id="202:42607" type="COMPONENT" */}
      <div
        style={{
          display: "inline-flex",
          height: "36px",
          padding: "0px var(--size-padding-paddingsm, 12px)",
          justifyContent: "center",
          alignItems: "center",
          gap: "var(--size-padding-paddingxxs, 4px)",
          flexShrink: "0",
          borderRadius: "var(--border-radius-small, 4px)",
          background: "var(--background-bg-white, #fff)",
          boxShadow:
            "0px 2px 4px 0px rgba(0, 0, 0, 0.02), 0px 1px 6px -1px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.03)",
        }}
      >
        {/* name="🎰 icon" id="202:42608" type="INSTANCE" */}
        <Icon.QodeListTree style={{ width: "16px", height: "16px" }} {...{}} />
        <span
          style={{
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: "1",
            overflow: "hidden",
            color: "var(--text-text-neutral-50, #1d1d1d)",
            textOverflow: "ellipsis",
            fontFamily: '"SF Pro Display"',
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "24px /* 150% */",
          }}
        >{`Item`}</span>
      </div>
    </>
  )
}
