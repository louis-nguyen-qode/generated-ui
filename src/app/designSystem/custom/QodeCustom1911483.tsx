// id="191:1483"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg191975 from "@designSystem/icon/svg/QodeSvg191975"

export interface QodeCustom1911483Props {}

export const QodeCustom1911483: React.FC<
  QodeCustom1911483Props & { style?: CSSProperties }
> = ({ ...rest }) => {
  return (
    <>
      {/* name="state=default, status=wait, size=custom icon" id="191:1483" type="COMPONENT" */}
      <div
        style={{
          display: "flex",
          width: "272px",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        {/* name="Step Header" id="191:1484" type="FRAME" */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            alignSelf: "stretch",
          }}
        >
          {/* name="🎰 icon" id="191:1485" type="INSTANCE" */}
          <Icon.QodeUser
            style={{
              width: "var(--line-height-lineheighheading3, 32px)",
              height: "var(--size-height-controlheight, 32px)",
            }}
            {...{}}
          />
          <span
            style={{
              color: "var(--text-text-placeholder, #a7a7a7)",
              textAlign: "center",
              fontFamily: 'var(--family-family, "sf pro display")',
              fontSize: "var(--size-base, 14px)",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight:
                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
            }}
          >{`Waiting`}</span>
          {/* name=".steps__item_tail" id="191:1487" type="INSTANCE" */}
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
