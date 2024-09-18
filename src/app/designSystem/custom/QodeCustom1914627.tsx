// id="191:4627"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeSteps } from "@designSystem/ant/QodeSteps"
import QodeSvg191983 from "@designSystem/icon/svg/QodeSvg191983"

export interface QodeCustom1914627Props {}

export const QodeCustom1914627: React.FC<
  QodeCustom1914627Props & { style?: CSSProperties }
> = ({ ...rest }) => {
  return (
    <>
      {/* name="state=default, status=process, size=dot" id="191:4627" type="COMPONENT" */}
      <div
        style={{
          display: "flex",
          width: "272px",
          alignItems: "flex-start",
          gap: "var(--size-padding-padding, 16px)",
        }}
      >
        {/* name="Icon Wrapper" id="191:4628" type="FRAME" */}
        <div
          style={{
            display: "flex",
            width: "8px",
            paddingTop: "7px",
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: "6px",
            flexShrink: "0",
            alignSelf: "stretch",
          }}
        >
          {/* name=".steps__item_progress" id="191:4629" type="INSTANCE" */}
          <QodeSteps
            style={{
              display: "flex",
              width: "8px",
              height: "8px",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "999px",
              background: "var(--background-bg-green-hover, #11a620)",
            }}
            {...{ step: "2", status: "finish", size: "dot" }}
          />
          {/* name=".steps__item_tail" id="191:4630" type="INSTANCE" */}
          <QodeSvg191983
            style={{
              width: "var(--size-size-size5xs-1px, 1px)",
              height: "43px",
            }}
            {...{ direction: "vertical", _style: "default", state: "waiting" }}
          />
        </div>
        {/* name="Text Wrapper" id="191:4631" type="FRAME" */}
        <div
          style={{
            display: "flex",
            paddingBottom: "var(--size-padding-paddingsm, 12px)",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "var(--size-padding-paddingxxs, 4px)",
            flex: "1 0 0",
          }}
        >
          <span
            style={{
              width: "246px",
              flex: "1 0 0",
              color: "var(--text-text-neutral-50, #1d1d1d)",
              fontFamily: 'var(--family-family, "sf pro display")',
              fontSize: "var(--size-large, 16px)",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight: "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
            }}
          >{`Lorem Ipsum`}</span>
          <span
            style={{
              alignSelf: "stretch",
              color: "var(--text-text-neutral-40, #464646)",
              fontFamily: 'var(--family-family, "sf pro display")',
              fontSize: "var(--size-base, 14px)",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight:
                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
            }}
          >{`This is a description`}</span>
        </div>
      </div>
    </>
  )
}
