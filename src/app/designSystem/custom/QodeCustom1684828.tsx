// id="168:4828"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom1672922 } from "@designSystem/custom/QodeCustom1672922"
import { QodeCustom1672907 } from "@designSystem/custom/QodeCustom1672907"

export interface QodeCustom1684828Props {}

export const QodeCustom1684828: React.FC<
  QodeCustom1684828Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="items=3" id="168:4828" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "200px",
            padding: "var(--size-padding-paddingxxs, 4px)",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "var(--size-padding-paddingxxs, 4px)",
            borderRadius: "var(--style-radius-borderradius2x, 20px)",
            background:
              "var(--color-neutral-background-colorbgcontainer, #fff)",
            boxShadow:
              "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 6px 16px 0px rgba(0, 0, 0, 0.08)",
          },
          ...style,
        }}
      >
        {/* name=".menu__item" id="168:4829" type="INSTANCE" */}
        <QodeCustom1672922
          style={{
            ...{
              display: "flex",
              height: "var(--size-height-controlheightlg, 40px)",
              padding: "0px var(--size-padding-padding, 16px)",
              alignItems: "center",
              gap: "var(--size-padding-paddingxs, 8px)",
              alignSelf: "stretch",
              borderRadius: "var(--style-radius-borderradiusxl, 16px)",
              background:
                "var(--color-neutral-fill-colorfilltertiary, rgba(0, 0, 0, 0.04))",
            },
            ...{},
          }}
          {...{ showTitle: true, title: "Navigation Item", state: "hover" }}
        />
        {/* name=".menu__item" id="168:4830" type="INSTANCE" */}
        <QodeCustom1672907
          style={{
            ...{
              display: "flex",
              height: "var(--size-height-controlheightlg, 40px)",
              padding: "0px var(--size-padding-padding, 16px)",
              alignItems: "center",
              gap: "var(--size-padding-paddingxs, 8px)",
              alignSelf: "stretch",
              borderRadius: "var(--style-radius-borderradiusxl, 16px)",
            },
            ...{},
          }}
          {...{ showTitle: true, title: "Navigation Item", state: "default" }}
        />
        {/* name=".menu__item" id="168:4841" type="INSTANCE" */}
        <QodeCustom1672907
          style={{
            ...{
              display: "flex",
              height: "var(--size-height-controlheightlg, 40px)",
              padding: "0px var(--size-padding-padding, 16px)",
              alignItems: "center",
              gap: "var(--size-padding-paddingxs, 8px)",
              alignSelf: "stretch",
              borderRadius: "var(--style-radius-borderradiusxl, 16px)",
            },
            ...{},
          }}
          {...{ showTitle: true, title: "Navigation Item", state: "default" }}
        />
      </div>
    </>
  )
}
