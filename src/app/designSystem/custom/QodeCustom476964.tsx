// id="47:6964"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg476965 from "@designSystem/icon/svg/QodeSvg476965"

export interface QodeCustom476964Props {}

export const QodeCustom476964: React.FC<
  QodeCustom476964Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="remix-icons/fill/media/image-fill" id="47:6964" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "24px",
            height: "24px",
            justifyContent: "center",
            alignItems: "center",
          },
          ...style,
        }}
      >
        {/* name="Group" id="47:6965" type="GROUP" */}
        <QodeSvg476965
          style={{
            ...{ width: "24px", height: "24px", flexShrink: "0" },
            ...{},
          }}
          {...{}}
        />
      </div>
    </>
  )
}
