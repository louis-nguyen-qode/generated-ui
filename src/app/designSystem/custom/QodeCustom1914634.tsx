// id="191:4634"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeSteps } from "@designSystem/ant/QodeSteps"
import QodeSvg191983 from "@designSystem/icon/svg/QodeSvg191983"

export interface QodeCustom1914634Props {}

export const QodeCustom1914634: React.FC<
  QodeCustom1914634Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="state=default, status=wait, size=dot" id="191:4634" type="COMPONENT" */}
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
        {/* name="Icon Wrapper" id="191:4635" type="FRAME" */}
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
          {/* name=".steps__item_progress" id="191:4636" type="INSTANCE" */}
          <QodeSteps
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
          {/* name=".steps__item_tail" id="191:4637" type="INSTANCE" */}
          <QodeSvg191983
            style={{
              ...{ width: "var(--size-size-size5xs-1px, 1px)", height: "44px" },
              ...{},
            }}
            {...{ direction: "vertical", _style: "default", state: "waiting" }}
          />
        </div>
        {/* name="Text Wrapper" id="191:4638" type="FRAME" */}
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
                width: "248px",
                flex: "1 0 0",
                color: "var(--text-text-neutral-40, #464646)",
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
