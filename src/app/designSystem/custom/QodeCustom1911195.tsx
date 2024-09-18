// id="191:1195"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeSteps } from "@designSystem/ant/QodeSteps"
import QodeSvg191975 from "@designSystem/icon/svg/QodeSvg191975"

export interface QodeCustom1911195Props {}

export const QodeCustom1911195: React.FC<
  QodeCustom1911195Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="state=default, status=wait, size=small" id="191:1195" type="COMPONENT" */}
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
        {/* name="Step Header" id="191:1196" type="FRAME" */}
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
          {/* name=".steps__item_progress" id="191:1197" type="INSTANCE" */}
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
          {/* name=".steps__item_tail" id="191:1199" type="INSTANCE" */}
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
      </div>
    </>
  )
}
