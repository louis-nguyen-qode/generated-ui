// id="191:4518"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeSteps } from "@designSystem/ant/QodeSteps"
import QodeSvg191983 from "@designSystem/icon/svg/QodeSvg191983"

export interface QodeCustom1914518Props {}

export const QodeCustom1914518: React.FC<
  QodeCustom1914518Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="state=default, status=wait, size=small" id="191:4518" type="COMPONENT" */}
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
        {/* name="Icon Wrapper" id="191:4519" type="FRAME" */}
        <div
          style={{
            ...{
              display: "flex",
              width: "24px",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "6px",
              flexShrink: "0",
              alignSelf: "stretch",
            },
            ...{},
          }}
        >
          {/* name=".steps__item_progress" id="191:4520" type="INSTANCE" */}
          <QodeSteps
            style={{
              ...{
                display: "flex",
                width: "24px",
                height: "var(--size-height-controlheightsm, 24px)",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "999px",
                background: "var(--background-bg-neutral-10, #e3e3e3)",
              },
              ...{},
            }}
            {...{ step: "2", status: "wait", size: "small" }}
          />
          {/* name=".steps__item_tail" id="191:4521" type="INSTANCE" */}
          <QodeSvg191983
            style={{
              ...{ width: "var(--size-size-size5xs-1px, 1px)", height: "27px" },
              ...{},
            }}
            {...{ direction: "vertical", _style: "default", state: "waiting" }}
          />
        </div>
        {/* name="Text Wrapper" id="191:4522" type="FRAME" */}
        <div
          style={{
            ...{
              display: "flex",
              paddingBottom: "var(--size-padding-paddingsm, 12px)",
              flexDirection: "column",
              alignItems: "flex-start",
              flex: "1 0 0",
            },
            ...{},
          }}
        >
          <span
            style={{
              ...{
                width: "232px",
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
