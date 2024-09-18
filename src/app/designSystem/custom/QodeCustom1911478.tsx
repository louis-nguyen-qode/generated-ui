// id="191:1478"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg191975 from "@designSystem/icon/svg/QodeSvg191975"

export interface QodeCustom1911478Props {}

export const QodeCustom1911478: React.FC<
  QodeCustom1911478Props & { style?: CSSProperties }
> = ({ ...rest }) => {
  return (
    <>
      {/* name="state=default, status=process, size=custom icon" id="191:1478" type="COMPONENT" */}
      <div
        style={{
          display: "flex",
          width: "272px",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        {/* name="Step Header" id="191:1479" type="FRAME" */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            alignSelf: "stretch",
          }}
        >
          {/* name="🎰 icon" id="191:1480" type="INSTANCE" */}
          <Icon.QodeUser
            style={{
              width: "var(--line-height-lineheighheading3, 32px)",
              height: "var(--size-height-controlheight, 32px)",
            }}
            {...{}}
          />
          <span
            style={{
              color: "var(--text-text-neutral-50, #1d1d1d)",
              textAlign: "center",
              fontFamily: 'var(--family-family, "sf pro display")',
              fontSize: "var(--size-base, 14px)",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight:
                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
            }}
          >{`Process`}</span>
          {/* name=".steps__item_tail" id="191:1482" type="INSTANCE" */}
          <QodeSvg191975
            style={{
              height: "var(--size-size-size5xs-1px, 1px)",
              flex: "1 0 0",
            }}
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
