// id="191:1638"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg191977 from "@designSystem/icon/svg/QodeSvg191977"
import { QodeSteps } from "@designSystem/ant/QodeSteps"

export interface QodeCustom1911638Props {}

export const QodeCustom1911638: React.FC<
  QodeCustom1911638Props & { style?: CSSProperties }
> = ({ ...rest }) => {
  return (
    <>
      {/* name="state=default, status=wait, size=dot" id="191:1638" type="COMPONENT" */}
      <div
        style={{
          display: "flex",
          width: "272px",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "var(--size-padding-paddingxs, 8px)",
        }}
      >
        {/* name="Progress Wrapper" id="191:1639" type="FRAME" */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            alignSelf: "stretch",
          }}
        >
          {/* name=".steps__item_tail" id="191:1640" type="INSTANCE" */}
          <QodeSvg191977
            style={{ height: "3px", flex: "1 0 0" }}
            {...{ direction: "horizontal", _style: "bold", state: "waiting" }}
          />
          {/* name=".steps__item_progress" id="191:1641" type="INSTANCE" */}
          <QodeSteps
            style={{
              display: "flex",
              width: "8px",
              height: "8px",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "999px",
              background: "var(--neutral-gray-40, #a7a7a7)",
            }}
            {...{ step: "2", status: "wait", size: "dot" }}
          />
          {/* name=".steps__item_tail" id="191:1642" type="INSTANCE" */}
          <QodeSvg191977
            style={{ height: "3px", flex: "1 0 0" }}
            {...{ direction: "horizontal", _style: "bold", state: "waiting" }}
          />
        </div>
        {/* name="Description Wrapper" id="191:1643" type="FRAME" */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            gap: "2px",
            alignSelf: "stretch",
          }}
        >
          <span
            style={{
              alignSelf: "stretch",
              color: "var(--text-text-neutral-40, #464646)",
              textAlign: "center",
              fontFamily: 'var(--family-family, "sf pro display")',
              fontSize: "var(--size-large, 16px)",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "24px /* 150% */",
            }}
          >{`Waiting`}</span>
          <span
            style={{
              alignSelf: "stretch",
              color: "var(--text-text-neutral-40, #464646)",
              textAlign: "center",
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
