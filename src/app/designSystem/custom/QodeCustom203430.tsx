// id="20:3430"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom11436665 } from "@designSystem/custom/QodeCustom11436665"

export interface QodeCustom203430Props {
  title?: string
  state?: "default" | "hover" | "selected" | "selected multiple" | "disabled"
}

export const QodeCustom203430: React.FC<
  QodeCustom203430Props & { style?: CSSProperties }
> = ({ title = "Select menu item", state = "default", ...rest }) => {
  return (
    <>
      {/* name=".select__item" id="20:3430" type="COMPONENT_SET" */}
      {/* id="20:3431" */}
      {`${state}` === `default` && (
        <>
          {/* name="state=default" id="20:3431" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "139px",
              height: "var(--size-height-controlheight, 32px)",
              padding: "0px var(--size-padding-paddingsm, 12px)",
              justifyContent: "center",
              alignItems: "center",
              gap: "var(--size-padding-paddingxs, 8px)",
              flexShrink: "0",
              borderRadius: "var(--style-radius-borderradius, 8px)",
            }}
          >
            <span
              style={{
                flex: "1 0 0",
                color: "var(--color-neutral-text-colortext, #000)",
                fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                fontSize: "var(--font-size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight:
                  "var(--line-height-lineheight, 20px) /* 142.857% */",
              }}
            >{`Select menu item`}</span>
          </div>
        </>
      )}
      {/* id="20:3432" */}
      {`${state}` === `hover` && (
        <>
          {/* name="state=hover" id="20:3432" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "139px",
              height: "var(--size-height-controlheight, 32px)",
              padding: "0px var(--size-padding-paddingsm, 12px)",
              justifyContent: "center",
              alignItems: "center",
              gap: "var(--size-padding-paddingxs, 8px)",
              flexShrink: "0",
              borderRadius: "var(--style-radius-borderradius, 8px)",
              background:
                "var(--color-neutral-fill-colorfilltertiary, rgba(0, 0, 0, 0.04))",
            }}
          >
            <span
              style={{
                flex: "1 0 0",
                color: "var(--color-neutral-text-colortext, #000)",
                fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                fontSize: "var(--font-size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight:
                  "var(--line-height-lineheight, 20px) /* 142.857% */",
              }}
            >{`Select menu item`}</span>
          </div>
        </>
      )}
      {/* id="20:3433" */}
      {`${state}` === `selected` && (
        <>
          {/* name="state=selected" id="20:3433" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "144px",
              height: "var(--size-height-controlheight, 32px)",
              padding: "0px var(--size-padding-paddingsm, 12px)",
              justifyContent: "center",
              alignItems: "center",
              gap: "var(--size-padding-paddingxs, 8px)",
              flexShrink: "0",
              borderRadius: "var(--style-radius-borderradius, 8px)",
              background: "var(--color-primary-colorprimarybg, #eaeff8)",
            }}
          >
            <span
              style={{
                flex: "1 0 0",
                color: "var(--color-neutral-text-colortext, #000)",
                fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                fontSize: "var(--font-size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight:
                  "var(--line-height-lineheight, 20px) /* 142.857% */",
              }}
            >{`Select menu item`}</span>
          </div>
        </>
      )}
      {/* id="20:3434" */}
      {`${state}` === `selected multiple` && (
        <>
          {/* name="state=selected multiple" id="20:3434" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "172px",
              height: "var(--size-height-controlheight, 32px)",
              padding: "0px var(--size-padding-paddingsm, 12px)",
              justifyContent: "center",
              alignItems: "center",
              gap: "var(--size-padding-paddingxs, 8px)",
              flexShrink: "0",
              borderRadius: "var(--style-radius-borderradius, 8px)",
              background: "var(--color-primary-colorprimarybg, #eaeff8)",
            }}
          >
            <span
              style={{
                flex: "1 0 0",
                color: "var(--color-neutral-text-colortext, #000)",
                fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                fontSize: "var(--font-size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight:
                  "var(--line-height-lineheight, 20px) /* 142.857% */",
              }}
            >{`Select menu item`}</span>
            {/* name="Check" id="20:3440" type="INSTANCE" */}
            <QodeCustom11436665
              style={{ width: "20px", height: "20px", flexShrink: "0" }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="20:3435" */}
      {`${state}` === `disabled` && (
        <>
          {/* name="state=disabled" id="20:3435" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "139px",
              height: "var(--size-height-controlheight, 32px)",
              padding: "0px var(--size-padding-paddingsm, 12px)",
              justifyContent: "center",
              alignItems: "center",
              gap: "var(--size-padding-paddingxs, 8px)",
              flexShrink: "0",
              borderRadius: "var(--style-radius-borderradius, 8px)",
            }}
          >
            <span
              style={{
                flex: "1 0 0",
                color:
                  "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                fontSize: "var(--font-size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight:
                  "var(--line-height-lineheight, 20px) /* 142.857% */",
              }}
            >{`Select menu item`}</span>
          </div>
        </>
      )}
    </>
  )
}
