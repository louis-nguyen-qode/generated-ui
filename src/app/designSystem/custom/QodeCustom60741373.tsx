// id="607:41373"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom60740868 } from "@designSystem/custom/QodeCustom60740868"
import QodeSvg1308525 from "@designSystem/icon/svg/QodeSvg1308525"

export interface QodeCustom60741373Props {}

export const QodeCustom60741373: React.FC<
  QodeCustom60741373Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="state=default, status=process, size=small" id="607:41373" type="COMPONENT" */}
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
        {/* name="Step Header" id="607:41466" type="FRAME" */}
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
          {/* name=".steps__item_progress" id="607:41467" type="INSTANCE" */}
          <QodeCustom60740868
            style={{
              ...{
                display: "flex",
                width: "24px",
                height: "var(--size-height-controlheightsm, 24px)",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "999px",
                border: "1px solid var(--border-border-primary-20, #158de2)",
                background: "var(--background-bg-primary, #1597f4)",
              },
              ...{},
            }}
            {...{ step: "2", status: "process", size: "small" }}
          />
          <span
            style={{
              ...{
                color: "var(--text-text-neutral-50, #1d1d1d)",
                textAlign: "center",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-large, 16px)",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight:
                  "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
              },
              ...{},
            }}
          >{`Process`}</span>
          {/* name=".steps__item_tail" id="607:41469" type="INSTANCE" */}
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
