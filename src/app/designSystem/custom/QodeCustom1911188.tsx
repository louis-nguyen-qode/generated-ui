// id="191:1188"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeSteps } from "@designSystem/ant/QodeSteps"
import QodeSvg191975 from "@designSystem/icon/svg/QodeSvg191975"

export interface QodeCustom1911188Props {}

export const QodeCustom1911188: React.FC<
  QodeCustom1911188Props & { style?: CSSProperties }
> = ({ ...rest }) => {
  return (
    <>
      {/* name="state=default, status=process, size=small" id="191:1188" type="COMPONENT" */}
      <div
        style={{
          display: "flex",
          width: "272px",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        {/* name="Step Header" id="191:1189" type="FRAME" */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            alignSelf: "stretch",
          }}
        >
          {/* name=".steps__item_progress" id="191:1190" type="INSTANCE" */}
          <QodeSteps
            style={{
              display: "flex",
              width: "24px",
              height: "var(--size-height-controlheightsm, 24px)",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "999px",
              border: "1px solid var(--border-border-primary-20, #158de2)",
              background: "var(--background-bg-primary, #1597f4)",
            }}
            {...{ step: "2", status: "process", size: "small" }}
          />
          <span
            style={{
              color: "var(--text-text-neutral-50, #1d1d1d)",
              textAlign: "center",
              fontFamily: 'var(--family-family, "sf pro display")',
              fontSize: "var(--size-large, 16px)",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight: "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
            }}
          >{`Process`}</span>
          {/* name=".steps__item_tail" id="191:1192" type="INSTANCE" */}
          <QodeSvg191975
            style={{
              height: "var(--size-size-size5xs-1px, 1px)",
              flex: "1 0 0",
            }}
            {...{
              direction: "horizontal",
              _style: "default",
              state: "waiting",
            }}
          />
        </div>
      </div>
    </>
  )
}
