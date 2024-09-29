// id="391:33726"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg476986 from "@designSystem/icon/svg/QodeSvg476986"

export interface QodeCustom39133726Props {}

export const QodeCustom39133726: React.FC<
  QodeCustom39133726Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="Type=Clickable, Show Thumbnail=False" id="391:33726" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "228px",
            height: "48px",
            padding: "12px 16px",
            alignItems: "center",
            gap: "var(--size-size-sizexxs-6px, 6px)",
            flexShrink: "0",
            borderBottom: "1px solid var(--border-border-neutral-20, #e3e3e3)",
            background: "var(--background-bg-white, #fff)",
          },
          ...style,
        }}
      >
        {/* name="Icon/checkbox" id="391:33752" type="INSTANCE" */}
        <QodeSvg476986
          style={{
            ...{
              display: "flex",
              width: "20px",
              height: "20px",
              padding: "2.5px",
              justifyContent: "center",
              alignItems: "center",
              flexShrink: "0",
            },
            ...{},
          }}
          {...{ state: "Default" }}
        />
        <span
          style={{
            ...{
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: "1",
              flex: "1 0 0",
              overflow: "hidden",
              color: "var(--text-text-neutral-50, #1d1d1d)",
              textOverflow: "ellipsis",
              fontFamily: 'var(--family-family, "sf pro display")',
              fontSize: "var(--size-base, 14px)",
              fontStyle: "normal",
              fontWeight: "500",
              lineHeight:
                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
              textDecorationLine: "underline",
            },
            ...{},
          }}
        >{`Title`}</span>
      </div>
    </>
  )
}
