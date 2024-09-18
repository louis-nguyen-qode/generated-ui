// id="182:8777"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom1828777Props {
  icon?: React.ReactNode
  title?: string
  required?: boolean
  showIcon?: boolean
  showTooltip?: boolean
  direction?: "horizontal" | "vertical"
  size?: "default" | "large" | "small"
}

export const QodeCustom1828777: React.FC<
  QodeCustom1828777Props & { style?: CSSProperties }
> = ({
  icon = undefined,
  title = "Input label",
  required = true,
  showIcon = false,
  showTooltip = true,
  direction = "horizontal",
  size = "default",
  ...rest
}) => {
  return (
    <>
      {/* name="Input__Label" id="182:8777" type="COMPONENT_SET" */}
      {/* id="182:8776" */}
      {`${direction}` === `horizontal` && `${size}` === `default` && (
        <>
          {/* name="direction=horizontal, size=default" id="182:8776" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              height: "var(--size-height-controlheight, 32px)",
              alignItems: "center",
              gap: "var(--size-padding-paddingxxs, 4px)",
              flexShrink: "0",
            }}
          >
            {/* name="Icon" id="5769:7203" type="INSTANCE" */}
            <Icon.QodeClockThree
              style={{
                display: "flex",
                width: "16px",
                height: "16px",
                padding: "1.6px",
                justifyContent: "center",
                alignItems: "center",
              }}
              {...{}}
            />
            <span
              style={{
                color: "var(--text-text-neutral-50, #1d1d1d)",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight:
                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
              }}
            >{`Input label`}</span>
            <span
              style={{
                color: "var(--text-text-red, #dc3812)",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight:
                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
              }}
            >{`*`}</span>
            {/* name="Icon" id="182:6058" type="INSTANCE" */}
            <Icon.QodeCircleQuestion
              style={{ width: "16px", height: "16px" }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="182:8784" */}
      {`${direction}` === `vertical` && `${size}` === `default` && (
        <>
          {/* name="direction=vertical, size=default" id="182:8784" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "var(--size-padding-paddingxxs, 4px)",
            }}
          >
            {/* name="Icon" id="5769:7616" type="INSTANCE" */}
            <Icon.QodeClockThree
              style={{
                display: "flex",
                width: "16px",
                height: "16px",
                padding: "1.6px",
                justifyContent: "center",
                alignItems: "center",
              }}
              {...{}}
            />
            <span
              style={{
                color: "var(--text-text-neutral-50, #1d1d1d)",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight:
                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
              }}
            >{`Input label`}</span>
            <span
              style={{
                color: "var(--text-text-red, #dc3812)",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight:
                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
              }}
            >{`*`}</span>
            {/* name="Icon" id="182:8787" type="INSTANCE" */}
            <Icon.QodeCircleQuestion
              style={{ width: "16px", height: "16px" }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="182:8790" */}
      {`${direction}` === `horizontal` && `${size}` === `large` && (
        <>
          {/* name="direction=horizontal, size=large" id="182:8790" type="COMPONENT" */}
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
            {/* name="Icon" id="5769:7482" type="INSTANCE" */}
            <Icon.QodeClockThree
              style={{
                display: "flex",
                width: "16px",
                height: "16px",
                padding: "1.6px",
                justifyContent: "center",
                alignItems: "center",
              }}
              {...{}}
            />
            <span
              style={{
                color: "var(--text-text-neutral-50, #1d1d1d)",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-large, 16px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "24px /* 150% */",
              }}
            >{`Input label`}</span>
            <span
              style={{
                color: "var(--text-text-red, #dc3812)",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-large, 16px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "24px /* 150% */",
              }}
            >{`*`}</span>
            {/* name="Icon" id="182:8793" type="INSTANCE" */}
            <Icon.QodeCircleQuestion
              style={{ width: "16px", height: "16px" }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="182:8795" */}
      {`${direction}` === `vertical` && `${size}` === `large` && (
        <>
          {/* name="direction=vertical, size=large" id="182:8795" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "var(--size-padding-paddingxxs, 4px)",
            }}
          >
            {/* name="Icon" id="5769:7615" type="INSTANCE" */}
            <Icon.QodeClockThree
              style={{
                display: "flex",
                width: "16px",
                height: "16px",
                padding: "1.6px",
                justifyContent: "center",
                alignItems: "center",
              }}
              {...{}}
            />
            <span
              style={{
                color: "var(--text-text-neutral-50, #1d1d1d)",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-large, 16px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "24px /* 150% */",
              }}
            >{`Input label`}</span>
            <span
              style={{
                color: "var(--text-text-red, #dc3812)",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-large, 16px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "24px /* 150% */",
              }}
            >{`*`}</span>
            {/* name="Icon" id="182:8798" type="INSTANCE" */}
            <Icon.QodeCircleQuestion
              style={{ width: "16px", height: "16px" }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="182:8802" */}
      {`${direction}` === `horizontal` && `${size}` === `small` && (
        <>
          {/* name="direction=horizontal, size=small" id="182:8802" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              height: "var(--size-height-controlheightsm, 24px)",
              alignItems: "center",
              gap: "var(--size-padding-paddingxxs, 4px)",
              flexShrink: "0",
            }}
          >
            {/* name="Icon" id="5769:7548" type="INSTANCE" */}
            <Icon.QodeClockThree
              style={{
                display: "flex",
                width: "16px",
                height: "16px",
                padding: "1.6px",
                justifyContent: "center",
                alignItems: "center",
              }}
              {...{}}
            />
            <span
              style={{
                color: "var(--text-text-neutral-50, #1d1d1d)",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight:
                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
              }}
            >{`Input label`}</span>
            <span
              style={{
                color: "var(--text-text-red, #dc3812)",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight:
                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
              }}
            >{`*`}</span>
            {/* name="Icon" id="182:8805" type="INSTANCE" */}
            <Icon.QodeCircleQuestion
              style={{ width: "16px", height: "16px" }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="182:8807" */}
      {`${direction}` === `vertical` && `${size}` === `small` && (
        <>
          {/* name="direction=vertical, size=small" id="182:8807" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "var(--size-padding-paddingxxs, 4px)",
            }}
          >
            {/* name="Icon" id="5769:7614" type="INSTANCE" */}
            <Icon.QodeClockThree
              style={{
                display: "flex",
                width: "16px",
                height: "16px",
                padding: "1.6px",
                justifyContent: "center",
                alignItems: "center",
              }}
              {...{}}
            />
            <span
              style={{
                color: "var(--text-text-neutral-50, #1d1d1d)",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight:
                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
              }}
            >{`Input label`}</span>
            <span
              style={{
                color: "var(--text-text-red, #dc3812)",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight:
                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
              }}
            >{`*`}</span>
            {/* name="Icon" id="182:8810" type="INSTANCE" */}
            <Icon.QodeCircleQuestion
              style={{ width: "16px", height: "16px" }}
              {...{}}
            />
          </div>
        </>
      )}
    </>
  )
}
