// id="43:10801"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeButton } from "@designSystem/ant/QodeButton"

export interface QodeCustom4310801Props {
  property_1?: "Default" | "Variant2" | "Variant3"
}

export const QodeCustom4310801: React.FC<
  QodeCustom4310801Props & { style?: CSSProperties }
> = ({ property_1 = "Default", ...rest }) => {
  return (
    <>
      {/* name="Upload CV" id="43:10801" type="COMPONENT_SET" */}
      {/* id="43:10802" */}
      {`${property_1}` === `Default` && (
        <>
          {/* name="Property 1=Default" id="43:10802" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "124px",
              alignItems: "flex-start",
            }}
          >
            {/* name="Button" id="43:10803" type="INSTANCE" */}
            <QodeButton
              style={{
                display: "flex",
                height: "var(--size-height-controlheight, 32px)",
                padding:
                  "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flex: "1 0 0",
                borderRadius: "var(--style-radius-borderround, 999px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
              {...{
                icononly: <Icon.QodeMagnifyingGlass />,
                iconR: <Icon.QodeMagnifyingGlass />,
                iconL: true,
                title: "Upload CV",
                type: "default",
                size: "default",
                state: "default",
                content: "default",
                danger: false,
                ghost: false,
              }}
            />
          </div>
        </>
      )}
      {/* id="43:10804" */}
      {`${property_1}` === `Variant2` && (
        <>
          {/* name="Property 1=Variant2" id="43:10804" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "124px",
              alignItems: "flex-start",
            }}
          >
            {/* name="Button" id="43:10805" type="INSTANCE" */}
            <QodeButton
              style={{
                display: "flex",
                height: "var(--size-height-controlheight, 32px)",
                padding:
                  "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flex: "1 0 0",
                borderRadius: "var(--style-radius-borderround, 999px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
              {...{
                icononly: <Icon.QodeMagnifyingGlass />,
                iconR: <Icon.QodeMagnifyingGlass />,
                iconL: true,
                title: "Uploading",
                type: "default",
                size: "default",
                state: "default",
                content: "default",
                danger: false,
                ghost: false,
              }}
            />
          </div>
        </>
      )}
      {/* id="43:10806" */}
      {`${property_1}` === `Variant3` && (
        <>
          {/* name="Property 1=Variant3" id="43:10806" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "124px",
              alignItems: "flex-start",
            }}
          >
            {/* name="Button" id="43:10807" type="INSTANCE" */}
            <QodeButton
              style={{
                display: "flex",
                height: "var(--size-height-controlheight, 32px)",
                padding:
                  "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flex: "1 0 0",
                borderRadius: "var(--style-radius-borderround, 999px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
              {...{
                icononly: <Icon.QodeMagnifyingGlass />,
                iconR: <Icon.QodeMagnifyingGlass />,
                iconL: true,
                title: "View CV",
                type: "default",
                size: "default",
                state: "default",
                content: "default",
                danger: false,
                ghost: false,
              }}
            />
          </div>
        </>
      )}
    </>
  )
}
