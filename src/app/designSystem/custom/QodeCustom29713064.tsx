// id="2971:3064"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeTag } from "@designSystem/ant/QodeTag"

export interface QodeCustom29713064Props {
  action?: React.ReactNode
  showAction?: boolean
  state?: "active" | "default" | "hover"
}

export const QodeCustom29713064: React.FC<
  QodeCustom29713064Props & { style?: CSSProperties }
> = ({ action = undefined, showAction = true, state = "default", ...rest }) => {
  return (
    <>
      {/* name=".menu_item_tag" id="2971:3064" type="COMPONENT_SET" */}
      {/* id="2971:2952" */}
      {`${state}` === `default` && (
        <>
          {/* name="State=default" id="2971:2952" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "240px",
              height: "var(--size-height-controlheightlg, 40px)",
              padding: "0px var(--size-padding-padding, 16px)",
              justifyContent: "space-between",
              alignItems: "center",
              flexShrink: "0",
              borderRadius: "var(--style-radius-borderradiusxl, 16px)",
            }}
          >
            {/* name="Tag" id="2971:2988" type="INSTANCE" */}
            <QodeTag
              style={{
                display: "flex",
                height: "24px",
                padding: "0px 12px",
                alignItems: "center",
                gap: "6px",
                borderRadius: "4px",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--primary-primary-40, #64b9f5)",
                background: "var(--primary-primary-10, #d6eeff)",
              }}
              {...{
                showRIcon: true,
                color: "primary",
                state: "default",
                size: "Default",
                rounded: "False",
              }}
            />
            {/* name="🎰 action" id="2971:2955" type="INSTANCE" */}
            <Icon.QodeChevronRight
              style={{ width: "12px", height: "12px", flexShrink: "0" }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="2971:2956" */}
      {`${state}` === `hover` && (
        <>
          {/* name="State=hover" id="2971:2956" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "240px",
              height: "var(--size-height-controlheightlg, 40px)",
              padding: "0px var(--size-padding-padding, 16px)",
              justifyContent: "space-between",
              alignItems: "center",
              flexShrink: "0",
              borderRadius: "var(--style-radius-borderradiusxl, 16px)",
              background:
                "var(--color-neutral-fill-colorfilltertiary, rgba(0, 0, 0, 0.04))",
            }}
          >
            {/* name="Tag" id="2971:2999" type="INSTANCE" */}
            <QodeTag
              style={{
                display: "flex",
                height: "24px",
                padding: "0px 12px",
                alignItems: "center",
                gap: "6px",
                borderRadius: "4px",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--primary-primary-40, #64b9f5)",
                background: "var(--primary-primary-10, #d6eeff)",
              }}
              {...{
                showRIcon: true,
                color: "primary",
                state: "default",
                size: "Default",
                rounded: "False",
              }}
            />
            {/* name="🎰 action" id="2971:2959" type="INSTANCE" */}
            <Icon.QodeChevronRight
              style={{ width: "12px", height: "12px", flexShrink: "0" }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="2971:2960" */}
      {`${state}` === `active` && (
        <>
          {/* name="State=active" id="2971:2960" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "240px",
              height: "var(--size-height-controlheightlg, 40px)",
              padding: "0px var(--size-padding-padding, 16px)",
              justifyContent: "space-between",
              alignItems: "center",
              flexShrink: "0",
              borderRadius: "var(--style-radius-borderradiusxl, 16px)",
              background:
                "var(--color-neutral-fill-colorfilltertiary, rgba(0, 0, 0, 0.04))",
              boxShadow:
                "0px 2px 4px 0px rgba(0, 0, 0, 0.02), 0px 1px 6px -1px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.03)",
            }}
          >
            {/* name="Tag" id="2971:3000" type="INSTANCE" */}
            <QodeTag
              style={{
                display: "flex",
                height: "24px",
                padding: "0px 12px",
                alignItems: "center",
                gap: "6px",
                borderRadius: "4px",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--primary-primary-40, #64b9f5)",
                background: "var(--primary-primary-10, #d6eeff)",
              }}
              {...{
                showRIcon: true,
                color: "primary",
                state: "default",
                size: "Default",
                rounded: "False",
              }}
            />
            {/* name="🎰 action" id="2971:2963" type="INSTANCE" */}
            <Icon.QodeChevronRight
              style={{ width: "12px", height: "12px", flexShrink: "0" }}
              {...{}}
            />
          </div>
        </>
      )}
    </>
  )
}
