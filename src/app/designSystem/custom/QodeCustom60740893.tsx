// id="607:40893"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom60740862 } from "@designSystem/custom/QodeCustom60740862"
import QodeSvg1308529 from "@designSystem/icon/svg/QodeSvg1308529"

export interface QodeCustom60740893Props {}

export const QodeCustom60740893: React.FC<
  QodeCustom60740893Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="state=default, status=process, size=basic" id="607:40893" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "272px",
            alignItems: "flex-start",
            gap: "var(--size-padding-padding, 16px)",
          },
          ...style,
        }}
      >
        {/* name="Icon Wrapper" id="607:40928" type="FRAME" */}
        <div
          style={{
            ...{
              display: "flex",
              width: "32px",
              flexDirection: "column",
              justifyContent: "flex-end",
              alignItems: "center",
              gap: "6px",
              flexShrink: "0",
              alignSelf: "stretch",
            },
            ...{},
          }}
        >
          {/* name=".steps__item_progress" id="607:40929" type="INSTANCE" */}
          <QodeCustom60740862
            style={{
              ...{
                display: "flex",
                width: "32px",
                height: "var(--size-height-controlheight, 32px)",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "999px",
                background: "var(--background-bg-primary, #1597f4)",
              },
              ...{},
            }}
            {...{ step: "2", status: "finish", size: "default" }}
          />
          {/* name=".steps__item_tail" id="607:40930" type="INSTANCE" */}
          <QodeSvg1308529
            style={{ ...{ width: "1px", height: "34px" }, ...{} }}
            {...{ direction: "vertical", _style: "default", state: "waiting" }}
          />
        </div>
        {/* name="Text Wrapper" id="607:40931" type="FRAME" */}
        <div
          style={{
            ...{
              display: "flex",
              padding:
                "var(--size-padding-paddingxxs, 4px) 0px var(--size-padding-paddingsm, 12px) 0px",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "var(--size-padding-paddingxs, 8px)",
              flex: "1 0 0",
            },
            ...{},
          }}
        >
          <span
            style={{
              ...{
                width: "224px",
                flex: "1 0 0",
                color: "var(--text-text-neutral-50, #1d1d1d)",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-large, 16px)",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight:
                  "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
              },
              ...{},
            }}
          >{`Lorem Ipsum`}</span>
          <span
            style={{
              ...{
                alignSelf: "stretch",
                color: "var(--text-text-neutral-40, #464646)",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight:
                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
              },
              ...{},
            }}
          >{`This is a description`}</span>
        </div>
      </div>
    </>
  )
}
