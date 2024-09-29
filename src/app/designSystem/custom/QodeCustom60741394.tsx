// id="607:41394"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom161270 } from "@designSystem/custom/QodeCustom161270"
import QodeSvg1308525 from "@designSystem/icon/svg/QodeSvg1308525"

export interface QodeCustom60741394Props {}

export const QodeCustom60741394: React.FC<
  QodeCustom60741394Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="state=default, status=wait, size=custom icon" id="607:41394" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "272px",
            flexDirection: "column",
            alignItems: "flex-start",
          },
          ...style,
        }}
      >
        {/* name="Step Header" id="607:41580" type="FRAME" */}
        <div
          style={{
            ...{
              display: "flex",
              alignItems: "center",
              gap: "var(--size-padding-paddingxs, 8px)",
              alignSelf: "stretch",
            },
            ...{},
          }}
        >
          {/* name="🎰 icon" id="607:41581" type="INSTANCE" */}
          <QodeCustom161270
            style={{
              ...{
                width: "32px",
                height: "var(--size-height-controlheight, 32px)",
              },
              ...{},
            }}
            {...{}}
          />
          <span
            style={{
              ...{
                color: "var(--text-text-placeholder, #a7a7a7)",
                textAlign: "center",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight:
                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
              },
              ...{},
            }}
          >{`Waiting`}</span>
          {/* name=".steps__item_tail" id="607:41583" type="INSTANCE" */}
          <QodeSvg1308525
            style={{ ...{ height: "1px", flex: "1 0 0" }, ...{} }}
            {...{
              direction: "horizontal",
              _style: "default",
              state: "waiting",
            }}
          />
        </div>
      </div>
    </>
  )
}
