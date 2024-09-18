// id="559:35792"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeButton } from "@designSystem/ant/QodeButton"

export interface QodeCustom55935792Props {
  property_1?: "Default" | "Variant2" | "Variant3"
}

export const QodeCustom55935792: React.FC<
  QodeCustom55935792Props & { style?: CSSProperties }
> = ({ property_1 = "Default", ...rest }) => {
  return (
    <>
      {/* name="CV" id="559:35792" type="COMPONENT_SET" */}
      {/* id="559:35790" */}
      {`${property_1}` === `Default` && (
        <>
          {/* name="Property 1=Default" id="559:35790" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "340px",
              padding: "16px 20px",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottom:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
            }}
          >
            <span
              style={{
                color: "var(--text-text-neutral-50, #1d1d1d)",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-heading6, 16px)",
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight:
                  "var(--lineheight-lineheight-h6, 22px) /* 137.5% */",
              }}
            >{`CV`}</span>
            {/* name="Button" id="559:35784" type="INSTANCE" */}
            <QodeButton
              style={{
                display: "flex",
                width: "90px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "4px 8px",
                justifyContent: "center",
                alignItems: "center",
                gap: "4px",
                flexShrink: "0",
                borderRadius: "var(--border-radius-rounded, 999px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                background: "var(--background-bg-white, #fff)",
              }}
              {...{
                selectIconRight: <Icon.QodeMagnifyingGlass />,
                onlyIcon: <Icon.QodeMagnifyingGlass />,
                iconRight: false,
                buttonname: "Upload",
                selectIconLeft: <Icon.QodeUpload />,
                iconLeft: true,
                type: "default",
                size: "small",
                state: "default",
                content: "default",
                danger: false,
                ghost: false,
              }}
            />
          </div>
        </>
      )}
      {/* id="559:35793" */}
      {`${property_1}` === `Variant2` && (
        <>
          {/* name="Property 1=Variant2" id="559:35793" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "340px",
              padding: "16px 20px",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottom:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
            }}
          >
            <span
              style={{
                color: "var(--text-text-neutral-50, #1d1d1d)",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-heading6, 16px)",
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight:
                  "var(--lineheight-lineheight-h6, 22px) /* 137.5% */",
              }}
            >{`CV`}</span>
            {/* name="Button" id="559:35795" type="INSTANCE" */}
            <QodeButton
              style={{
                display: "flex",
                width: "90px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "4px 8px",
                justifyContent: "center",
                alignItems: "center",
                gap: "4px",
                flexShrink: "0",
                borderRadius: "var(--border-radius-rounded, 999px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                background: "var(--background-bg-white, #fff)",
              }}
              {...{
                selectIconRight: <Icon.QodeMagnifyingGlass />,
                onlyIcon: <Icon.QodeMagnifyingGlass />,
                iconRight: false,
                buttonname: "Uploading...",
                selectIconLeft: <Icon.QodeUpload />,
                iconLeft: false,
                type: "default",
                size: "small",
                state: "default",
                content: "default",
                danger: false,
                ghost: false,
              }}
            />
          </div>
        </>
      )}
      {/* id="559:35801" */}
      {`${property_1}` === `Variant3` && (
        <>
          {/* name="Property 1=Variant3" id="559:35801" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "340px",
              padding: "16px 20px",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottom:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
            }}
          >
            <span
              style={{
                color: "var(--text-text-neutral-50, #1d1d1d)",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-heading6, 16px)",
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight:
                  "var(--lineheight-lineheight-h6, 22px) /* 137.5% */",
              }}
            >{`CV`}</span>
            {/* name="Button" id="559:35803" type="INSTANCE" */}
            <QodeButton
              style={{
                display: "flex",
                width: "90px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "4px 8px",
                justifyContent: "center",
                alignItems: "center",
                gap: "4px",
                flexShrink: "0",
                borderRadius: "var(--border-radius-rounded, 999px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                background: "var(--background-bg-white, #fff)",
              }}
              {...{
                selectIconRight: <Icon.QodeMagnifyingGlass />,
                onlyIcon: <Icon.QodeMagnifyingGlass />,
                iconRight: false,
                buttonname: "View",
                selectIconLeft: <Icon.QodeEye />,
                iconLeft: true,
                type: "default",
                size: "small",
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
