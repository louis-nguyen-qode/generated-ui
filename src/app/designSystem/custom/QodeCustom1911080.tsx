// id="191:1080"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeSteps } from "@designSystem/ant/QodeSteps"
import QodeSvg191975 from "@designSystem/icon/svg/QodeSvg191975"

export interface QodeCustom1911080Props {}

export const QodeCustom1911080: React.FC<
  QodeCustom1911080Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="state=default, status=process, size=basic" id="191:1080" type="COMPONENT" */}
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
        {/* name="Step Header" id="191:1081" type="FRAME" */}
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
          {/* name=".steps__item_progress" id="191:1082" type="INSTANCE" */}
          <QodeSteps
            style={{
              ...{
                display: "flex",
                width: "var(--line-height-lineheighheading3, 32px)",
                height: "var(--size-height-controlheight, 32px)",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "999px",
                border: "1px solid var(--border-border-primary-20, #158de2)",
                background: "var(--background-bg-primary, #1597f4)",
              },
              ...{},
            }}
            {...{ step: "2", status: "process", size: "default" }}
          />
          <span
            style={{
              ...{
                color: "var(--text-text-neutral-50, #1d1d1d)",
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
          >{`Process`}</span>
          {/* name=".steps__item_tail" id="191:1084" type="INSTANCE" */}
          <QodeSvg191975
            style={{
              ...{ height: "var(--size-size-size5xs-1px, 1px)", flex: "1 0 0" },
              ...{},
            }}
            {...{
              direction: "horizontal",
              _style: "default",
              state: "waiting",
            }}
          />
        </div>
        {/* name="Description Wrapper" id="191:1085" type="FRAME" */}
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
