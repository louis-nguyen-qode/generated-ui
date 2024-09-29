// id="607:41384"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg1308526 from "@designSystem/icon/svg/QodeSvg1308526"
import { QodeCustom60740874 } from "@designSystem/custom/QodeCustom60740874"

export interface QodeCustom60741384Props {}

export const QodeCustom60741384: React.FC<
  QodeCustom60741384Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="state=default, status=wait, size=dot" id="607:41384" type="COMPONENT" */}
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
        {/* name="Progress Wrapper" id="607:41516" type="FRAME" */}
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
          {/* name=".steps__item_tail" id="607:41517" type="INSTANCE" */}
          <QodeSvg1308526
            style={{ ...{ height: "3px", flex: "1 0 0" }, ...{} }}
            {...{ direction: "horizontal", _style: "bold", state: "waiting" }}
          />
          {/* name=".steps__item_progress" id="607:41518" type="INSTANCE" */}
          <QodeCustom60740874
            style={{
              ...{
                display: "flex",
                width: "8px",
                height: "8px",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "999px",
                background: "var(--neutral-gray-40, #a7a7a7)",
              },
              ...{},
            }}
            {...{ step: "2", status: "wait", size: "dot" }}
          />
          {/* name=".steps__item_tail" id="607:41519" type="INSTANCE" */}
          <QodeSvg1308526
            style={{ ...{ height: "3px", flex: "1 0 0" }, ...{} }}
            {...{ direction: "horizontal", _style: "bold", state: "waiting" }}
          />
        </div>
        {/* name="Description Wrapper" id="607:41520" type="FRAME" */}
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
                color: "var(--text-text-neutral-40, #464646)",
                textAlign: "center",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-large, 16px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "24px /* 150% */",
              },
              ...{},
            }}
          >{`Waiting`}</span>
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
