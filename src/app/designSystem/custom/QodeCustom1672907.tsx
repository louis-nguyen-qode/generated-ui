// id="167:2907"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom63010804 } from "@designSystem/custom/QodeCustom63010804"
import { QodeCustom6308727 } from "@designSystem/custom/QodeCustom6308727"

export interface QodeCustom1672907Props {}

export const QodeCustom1672907: React.FC<
  QodeCustom1672907Props & { style?: CSSProperties }
> = ({ ...rest }) => {
  return (
    <>
      {/* name="state=default" id="167:2907" type="COMPONENT" */}
      <div
        style={{
          display: "flex",
          width: "240px",
          height: "var(--size-height-controlheightlg, 40px)",
          padding: "0px var(--size-padding-padding, 16px)",
          alignItems: "center",
          gap: "var(--size-padding-paddingxs, 8px)",
          flexShrink: "0",
          borderRadius: "var(--style-radius-borderradiusxl, 16px)",
        }}
      >
        {/* name="🎰 icon" id="167:2911" type="INSTANCE" */}
        <QodeCustom63010804
          style={{ width: "16px", height: "16px", flexShrink: "0" }}
          {...{}}
        />
        <span
          style={{
            flex: "1 0 0",
            color:
              "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
            fontFamily: 'var(--family-family, "sf pro display")',
            fontSize: "var(--size-base, 14px)",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight:
              "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
          }}
        >{`Navigation Item`}</span>
        {/* name="🎰 action" id="167:2986" type="INSTANCE" */}
        <QodeCustom6308727
          style={{ width: "12px", height: "12px", flexShrink: "0" }}
          {...{}}
        />
      </div>
    </>
  )
}
