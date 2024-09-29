// id="607:41364"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom60740864 } from "@designSystem/custom/QodeCustom60740864"
import QodeSvg1308525 from "@designSystem/icon/svg/QodeSvg1308525"

export interface QodeCustom60741364Props {}

export const QodeCustom60741364: React.FC<
  QodeCustom60741364Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="state=default, status=wait, size=basic" id="607:41364" type="COMPONENT" */}
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
        {/* name="Step Header" id="607:41414" type="FRAME" */}
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
          {/* name=".steps__item_progress" id="607:41415" type="INSTANCE" */}
          <QodeCustom60740864
            style={{
              ...{
                display: "flex",
                width: "32px",
                height: "var(--size-height-controlheight, 32px)",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "999px",
                background: "var(--background-bg-neutral-10, #e3e3e3)",
              },
              ...{},
            }}
            {...{ step: "2", status: "wait", size: "default" }}
          />
          <span
            style={{
              ...{
                color: "var(--text-text-neutral-40, #464646)",
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
          >{`Waiting`}</span>
          {/* name=".steps__item_tail" id="607:41417" type="INSTANCE" */}
          <QodeSvg1308525
            style={{ ...{ height: "1px", flex: "1 0 0" }, ...{} }}
            {...{
              direction: "horizontal",
              _style: "default",
              state: "waiting",
            }}
          />
        </div>
        {/* name="Description Wrapper" id="607:41418" type="FRAME" */}
        <div
          style={{
            ...{
              display: "flex",
              paddingLeft: "40px",
              alignItems: "center",
              alignSelf: "stretch",
            },
            ...{},
          }}
        >
          <span
            style={{
              ...{
                flex: "1 0 0",
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
