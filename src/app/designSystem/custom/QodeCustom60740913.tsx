// id="607:40913"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom60740872 } from "@designSystem/custom/QodeCustom60740872"
import QodeSvg1308529 from "@designSystem/icon/svg/QodeSvg1308529"

export interface QodeCustom60740913Props {}

export const QodeCustom60740913: React.FC<
  QodeCustom60740913Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="state=default, status=process, size=dot" id="607:40913" type="COMPONENT" */}
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
        {/* name="Icon Wrapper" id="607:41048" type="FRAME" */}
        <div
          style={{
            ...{
              display: "flex",
              width: "8px",
              paddingTop: "7px",
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
          {/* name=".steps__item_progress" id="607:41049" type="INSTANCE" */}
          <QodeCustom60740872
            style={{
              ...{
                display: "flex",
                width: "8px",
                height: "8px",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "999px",
                background: "var(--background-bg-green-hover, #11a620)",
              },
              ...{},
            }}
            {...{ step: "2", status: "finish", size: "dot" }}
          />
          {/* name=".steps__item_tail" id="607:41050" type="INSTANCE" */}
          <QodeSvg1308529
            style={{ ...{ width: "1px", height: "43px" }, ...{} }}
            {...{ direction: "vertical", _style: "default", state: "waiting" }}
          />
        </div>
        {/* name="Text Wrapper" id="607:41051" type="FRAME" */}
        <div
          style={{
            ...{
              display: "flex",
              paddingBottom: "var(--size-padding-paddingsm, 12px)",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "var(--size-padding-paddingxxs, 4px)",
              flex: "1 0 0",
            },
            ...{},
          }}
        >
          <span
            style={{
              ...{
                width: "246px",
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
