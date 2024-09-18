// id="191:4404"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeSteps } from "@designSystem/ant/QodeSteps"
import QodeSvg191983 from "@designSystem/icon/svg/QodeSvg191983"

export interface QodeCustom1914404Props {}

export const QodeCustom1914404: React.FC<
  QodeCustom1914404Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="state=default, status=process, size=basic" id="191:4404" type="COMPONENT" */}
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
        {/* name="Icon Wrapper" id="191:4405" type="FRAME" */}
        <div
          style={{
            ...{
              display: "flex",
              width: "var(--line-height-lineheighheading3, 32px)",
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
          {/* name=".steps__item_progress" id="191:4406" type="INSTANCE" */}
          <QodeSteps
            style={{
              ...{
                display: "flex",
                width: "var(--line-height-lineheighheading3, 32px)",
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
          {/* name=".steps__item_tail" id="191:4407" type="INSTANCE" */}
          <QodeSvg191983
            style={{
              ...{ width: "var(--size-size-size5xs-1px, 1px)", height: "34px" },
              ...{},
            }}
            {...{ direction: "vertical", _style: "default", state: "waiting" }}
          />
        </div>
        {/* name="Text Wrapper" id="191:4408" type="FRAME" */}
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
