// id="140:8522"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom1408522Props {
  icon?: React.ReactNode
  title?: string
  required?: boolean
  showIcon?: boolean
  showTooltip?: boolean
  direction?: "horizontal" | "vertical"
  size?: "default" | "large" | "small"
}

export const QodeCustom1408522: React.FC<
  QodeCustom1408522Props & { style?: CSSProperties }
> = ({
  icon = undefined,
  title = "Input label",
  required = true,
  showIcon = false,
  showTooltip = true,
  direction = "horizontal",
  size = "default",
  style,
  ...rest
}) => {
  return (
    <>
      {/* name="Input__Label" id="140:8522" type="COMPONENT_SET" */}
      {/* id="140:8523" */}
      {`${direction}` === `horizontal` && `${size}` === `default` && (
        <>
          {/* name="direction=horizontal, size=default" id="140:8523" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "inline-flex",
                height: "var(--size-height-controlheight, 32px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
              },
              ...style,
            }}
          >
            {/* name="Icon" id="140:8529" type="INSTANCE" */}
            <Icon.QodeClockThree
              style={{
                ...{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                },
                ...{},
              }}
              {...{}}
            />
            <span
              style={{
                ...{
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                },
                ...{},
              }}
            >{`Input label`}</span>
            <span
              style={{
                ...{
                  color: "var(--text-text-red, #dc3812)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                },
                ...{},
              }}
            >{`*`}</span>
            {/* name="Icon" id="140:8532" type="INSTANCE" */}
            <Icon.QodeCircleQuestion
              style={{ ...{ width: "16px", height: "16px" }, ...{} }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="140:8524" */}
      {`${direction}` === `vertical` && `${size}` === `default` && (
        <>
          {/* name="direction=vertical, size=default" id="140:8524" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "inline-flex",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
              },
              ...style,
            }}
          >
            {/* name="Icon" id="140:8533" type="INSTANCE" */}
            <Icon.QodeClockThree
              style={{
                ...{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                },
                ...{},
              }}
              {...{}}
            />
            <span
              style={{
                ...{
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                },
                ...{},
              }}
            >{`Input label`}</span>
            <span
              style={{
                ...{
                  color: "var(--text-text-red, #dc3812)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                },
                ...{},
              }}
            >{`*`}</span>
            {/* name="Icon" id="140:8536" type="INSTANCE" */}
            <Icon.QodeCircleQuestion
              style={{ ...{ width: "16px", height: "16px" }, ...{} }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="140:8525" */}
      {`${direction}` === `horizontal` && `${size}` === `large` && (
        <>
          {/* name="direction=horizontal, size=large" id="140:8525" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "inline-flex",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "var(--size-padding-paddingxs, 8px) 0px",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
              },
              ...style,
            }}
          >
            {/* name="Icon" id="140:8537" type="INSTANCE" */}
            <Icon.QodeClockThree
              style={{
                ...{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                },
                ...{},
              }}
              {...{}}
            />
            <span
              style={{
                ...{
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                },
                ...{},
              }}
            >{`Input label`}</span>
            <span
              style={{
                ...{
                  color: "var(--text-text-red, #dc3812)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                },
                ...{},
              }}
            >{`*`}</span>
            {/* name="Icon" id="140:8540" type="INSTANCE" */}
            <Icon.QodeCircleQuestion
              style={{ ...{ width: "16px", height: "16px" }, ...{} }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="140:8526" */}
      {`${direction}` === `vertical` && `${size}` === `large` && (
        <>
          {/* name="direction=vertical, size=large" id="140:8526" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "inline-flex",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
              },
              ...style,
            }}
          >
            {/* name="Icon" id="140:8541" type="INSTANCE" */}
            <Icon.QodeClockThree
              style={{
                ...{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                },
                ...{},
              }}
              {...{}}
            />
            <span
              style={{
                ...{
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                },
                ...{},
              }}
            >{`Input label`}</span>
            <span
              style={{
                ...{
                  color: "var(--text-text-red, #dc3812)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                },
                ...{},
              }}
            >{`*`}</span>
            {/* name="Icon" id="140:8544" type="INSTANCE" */}
            <Icon.QodeCircleQuestion
              style={{ ...{ width: "16px", height: "16px" }, ...{} }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="140:8527" */}
      {`${direction}` === `horizontal` && `${size}` === `small` && (
        <>
          {/* name="direction=horizontal, size=small" id="140:8527" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "inline-flex",
                height: "var(--size-height-controlheightsm, 24px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
              },
              ...style,
            }}
          >
            {/* name="Icon" id="140:8545" type="INSTANCE" */}
            <Icon.QodeClockThree
              style={{
                ...{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                },
                ...{},
              }}
              {...{}}
            />
            <span
              style={{
                ...{
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                },
                ...{},
              }}
            >{`Input label`}</span>
            <span
              style={{
                ...{
                  color: "var(--text-text-red, #dc3812)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                },
                ...{},
              }}
            >{`*`}</span>
            {/* name="Icon" id="140:8548" type="INSTANCE" */}
            <Icon.QodeCircleQuestion
              style={{ ...{ width: "16px", height: "16px" }, ...{} }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="140:8528" */}
      {`${direction}` === `vertical` && `${size}` === `small` && (
        <>
          {/* name="direction=vertical, size=small" id="140:8528" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "inline-flex",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
              },
              ...style,
            }}
          >
            {/* name="Icon" id="140:8549" type="INSTANCE" */}
            <Icon.QodeClockThree
              style={{
                ...{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                },
                ...{},
              }}
              {...{}}
            />
            <span
              style={{
                ...{
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                },
                ...{},
              }}
            >{`Input label`}</span>
            <span
              style={{
                ...{
                  color: "var(--text-text-red, #dc3812)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                },
                ...{},
              }}
            >{`*`}</span>
            {/* name="Icon" id="140:8552" type="INSTANCE" */}
            <Icon.QodeCircleQuestion
              style={{ ...{ width: "16px", height: "16px" }, ...{} }}
              {...{}}
            />
          </div>
        </>
      )}
    </>
  )
}
