// id="126:8285"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom1268285Props {
  title?: string
  required?: boolean
  showTooltip?: boolean
  direction?: "horizontal" | "vertical"
  size?: "default" | "large" | "small"
}

export const QodeCustom1268285: React.FC<
  QodeCustom1268285Props & { style?: CSSProperties }
> = ({
  title = "Input label",
  required = true,
  showTooltip = true,
  direction = "horizontal",
  size = "default",
  ...rest
}) => {
  return (
    <>
      {/* name="Input__Label" id="126:8285" type="COMPONENT_SET" */}
      {/* id="126:8286" */}
      {`${direction}` === `horizontal` && `${size}` === `default` && (
        <>
          {/* name="direction=horizontal, size=default" id="126:8286" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              height: "var(--size-height-controlheight, 32px)",
              alignItems: "center",
              gap: "var(--size-padding-paddingxxs, 4px)",
              flexShrink: "0",
            }}
          >
            <span
              style={{
                color: "var(--color-neutral-text-colortext, #000)",
                fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                fontSize: "var(--font-size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight:
                  "var(--line-height-lineheight, 20px) /* 142.857% */",
              }}
            >{`Input label`}</span>
            <span
              style={{
                color: "var(--color-error-colorerrortext, #ff6542)",
                fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                fontSize: "var(--font-size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight:
                  "var(--line-height-lineheight, 20px) /* 142.857% */",
              }}
            >{`*`}</span>
            {/* name="Icon" id="126:8294" type="INSTANCE" */}
            <Icon.QodeCircleQuestion
              style={{
                width: "var(--font-size-base, 14px)",
                height: "var(--font-size-base, 14px)",
              }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="126:8287" */}
      {`${direction}` === `vertical` && `${size}` === `default` && (
        <>
          {/* name="direction=vertical, size=default" id="126:8287" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "var(--size-padding-paddingxxs, 4px)",
            }}
          >
            <span
              style={{
                color: "var(--color-neutral-text-colortext, #000)",
                fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                fontSize: "var(--font-size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight:
                  "var(--line-height-lineheight, 20px) /* 142.857% */",
              }}
            >{`Input label`}</span>
            <span
              style={{
                color: "var(--color-error-colorerrortext, #ff6542)",
                fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                fontSize: "var(--font-size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight:
                  "var(--line-height-lineheight, 20px) /* 142.857% */",
              }}
            >{`*`}</span>
            {/* name="Icon" id="126:8297" type="INSTANCE" */}
            <Icon.QodeCircleQuestion
              style={{
                width: "var(--font-size-base, 14px)",
                height: "var(--font-size-base, 14px)",
              }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="126:8288" */}
      {`${direction}` === `horizontal` && `${size}` === `large` && (
        <>
          {/* name="direction=horizontal, size=large" id="126:8288" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              height: "var(--size-height-controlheightlg, 40px)",
              padding: "var(--size-padding-paddingxs, 8px) 0px",
              alignItems: "center",
              gap: "var(--size-padding-paddingxxs, 4px)",
              flexShrink: "0",
            }}
          >
            <span
              style={{
                color: "var(--color-neutral-text-colortext, #000)",
                fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                fontSize: "var(--font-size-large, 16px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "var(--line-height-lineheighlg, 24px) /* 150% */",
              }}
            >{`Input label`}</span>
            <span
              style={{
                color: "var(--color-error-colorerrortext, #ff6542)",
                fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                fontSize: "var(--font-size-large, 16px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "var(--line-height-lineheighlg, 24px) /* 150% */",
              }}
            >{`*`}</span>
            {/* name="Icon" id="126:8300" type="INSTANCE" */}
            <Icon.QodeCircleQuestion
              style={{
                width: "var(--font-size-base, 14px)",
                height: "var(--font-size-base, 14px)",
              }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="126:8289" */}
      {`${direction}` === `vertical` && `${size}` === `large` && (
        <>
          {/* name="direction=vertical, size=large" id="126:8289" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "var(--size-padding-paddingxxs, 4px)",
            }}
          >
            <span
              style={{
                color: "var(--color-neutral-text-colortext, #000)",
                fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                fontSize: "var(--font-size-large, 16px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "var(--line-height-lineheighlg, 24px) /* 150% */",
              }}
            >{`Input label`}</span>
            <span
              style={{
                color: "var(--color-error-colorerrortext, #ff6542)",
                fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                fontSize: "var(--font-size-large, 16px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "var(--line-height-lineheighlg, 24px) /* 150% */",
              }}
            >{`*`}</span>
            {/* name="Icon" id="126:8303" type="INSTANCE" */}
            <Icon.QodeCircleQuestion
              style={{
                width: "var(--font-size-base, 14px)",
                height: "var(--font-size-base, 14px)",
              }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="126:8290" */}
      {`${direction}` === `horizontal` && `${size}` === `small` && (
        <>
          {/* name="direction=horizontal, size=small" id="126:8290" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              height: "var(--size-height-controlheightsm, 24px)",
              alignItems: "center",
              gap: "var(--size-padding-paddingxxs, 4px)",
              flexShrink: "0",
            }}
          >
            <span
              style={{
                color: "var(--color-neutral-text-colortext, #000)",
                fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                fontSize: "var(--font-size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight:
                  "var(--line-height-lineheight, 20px) /* 142.857% */",
              }}
            >{`Input label`}</span>
            <span
              style={{
                color: "var(--color-error-colorerrortext, #ff6542)",
                fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                fontSize: "var(--font-size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight:
                  "var(--line-height-lineheight, 20px) /* 142.857% */",
              }}
            >{`*`}</span>
            {/* name="Icon" id="126:8306" type="INSTANCE" */}
            <Icon.QodeCircleQuestion
              style={{
                width: "var(--font-size-base, 14px)",
                height: "var(--font-size-base, 14px)",
              }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="126:8291" */}
      {`${direction}` === `vertical` && `${size}` === `small` && (
        <>
          {/* name="direction=vertical, size=small" id="126:8291" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "var(--size-padding-paddingxxs, 4px)",
            }}
          >
            <span
              style={{
                color: "var(--color-neutral-text-colortext, #000)",
                fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                fontSize: "var(--font-size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight:
                  "var(--line-height-lineheight, 20px) /* 142.857% */",
              }}
            >{`Input label`}</span>
            <span
              style={{
                color: "var(--color-error-colorerrortext, #ff6542)",
                fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                fontSize: "var(--font-size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight:
                  "var(--line-height-lineheight, 20px) /* 142.857% */",
              }}
            >{`*`}</span>
            {/* name="Icon" id="126:8309" type="INSTANCE" */}
            <Icon.QodeCircleQuestion
              style={{
                width: "var(--font-size-base, 14px)",
                height: "var(--font-size-base, 14px)",
              }}
              {...{}}
            />
          </div>
        </>
      )}
    </>
  )
}
