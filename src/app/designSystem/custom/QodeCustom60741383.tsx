// id="607:41383"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg1308524 from "@designSystem/icon/svg/QodeSvg1308524"
import { QodeCustom60740873 } from "@designSystem/custom/QodeCustom60740873"
import QodeSvg1308526 from "@designSystem/icon/svg/QodeSvg1308526"

export interface QodeCustom60741383Props {}

export const QodeCustom60741383: React.FC<
  QodeCustom60741383Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="state=default, status=process, size=dot" id="607:41383" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "272px",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "var(--size-padding-paddingxs, 8px)",
          },
          ...style,
        }}
      >
        {/* name="Progress Wrapper" id="607:41509" type="FRAME" */}
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
          {/* name=".steps__item_tail" id="607:41510" type="INSTANCE" */}
          <QodeSvg1308524
            style={{ ...{ height: "3px", flex: "1 0 0" }, ...{} }}
            {...{ direction: "horizontal", _style: "bold", state: "active" }}
          />
          {/* name=".steps__item_progress" id="607:41511" type="INSTANCE" */}
          <QodeCustom60740873
            style={{
              ...{
                display: "flex",
                width: "10px",
                height: "10px",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "999px",
                border: "1px solid var(--border-border-primary-20, #158de2)",
                background: "var(--background-bg-primary, #1597f4)",
              },
              ...{},
            }}
            {...{ step: "2", status: "process", size: "dot" }}
          />
          {/* name=".steps__item_tail" id="607:41512" type="INSTANCE" */}
          <QodeSvg1308526
            style={{ ...{ height: "3px", flex: "1 0 0" }, ...{} }}
            {...{ direction: "horizontal", _style: "bold", state: "waiting" }}
          />
        </div>
        {/* name="Description Wrapper" id="607:41513" type="FRAME" */}
        <div
          style={{
            ...{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              gap: "2px",
              alignSelf: "stretch",
            },
            ...{},
          }}
        >
          <span
            style={{
              ...{
                alignSelf: "stretch",
                color: "var(--text-text-neutral-50, #1d1d1d)",
                textAlign: "center",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-large, 16px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "24px /* 150% */",
              },
              ...{},
            }}
          >{`Process`}</span>
          <span
            style={{
              ...{
                alignSelf: "stretch",
                color: "var(--text-text-neutral-40, #464646)",
                textAlign: "center",
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
