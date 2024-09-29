// id="1071:48975"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg107148976 from "@designSystem/icon/svg/QodeSvg107148976"

export interface QodeCustom107148975Props {}

export const QodeCustom107148975: React.FC<
  QodeCustom107148975Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="microphone" id="1071:48975" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "24px",
            height: "24px",
            padding: "2.4px 5.4px",
            justifyContent: "center",
            alignItems: "center",
          },
          ...style,
        }}
      >
        {/* name="Vector" id="1071:48976" type="VECTOR" */}
        <QodeSvg107148976
          style={{
            ...{
              width: "13.2px",
              height: "19.2px",
              flexShrink: "0",
              fill: "var(--neutral-gray-90, #464646)",
            },
            ...{},
          }}
          {...{}}
        />
      </div>
    </>
  )
}
