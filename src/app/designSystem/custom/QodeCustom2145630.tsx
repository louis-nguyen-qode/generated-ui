// id="214:5630"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom3511358 } from "@designSystem/custom/QodeCustom3511358"

export interface QodeCustom2145630Props {
  endPlaceholder?: string
  startTime?: string
  startPlaceholder?: string
  endTime?: string
  time?: string
  placeholder?: string
  state?: "default" | "focused" | "filled"
  size?: "default" | "large" | "small"
  range?: "false" | "true"
}

export const QodeCustom2145630: React.FC<
  QodeCustom2145630Props & { style?: CSSProperties }
> = ({
  endPlaceholder = "End time",
  startTime = "14:09",
  startPlaceholder = "Start time",
  endTime = "15:09",
  time = "14:09",
  placeholder = "Select time",
  state = "default",
  size = "default",
  range = "false",
  style,
  ...rest
}) => {
  return (
    <>
      {/* name=".timePicker__inputBorderless" id="214:5630" type="COMPONENT_SET" */}
      {/* id="214:5631" */}
      {`${state}` === `default` &&
        `${size}` === `default` &&
        `${range}` === `false` && (
          <>
            {/* name="state=default, size=default, range=false" id="214:5631" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "240px",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "10px var(--size-padding-paddingsm, 12px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  flexShrink: "0",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                  background:
                    "var(--color-neutral-background-colorbgcontainer, #fff)",
                },
                ...style,
              }}
            >
              <span
                style={{
                  ...{
                    flex: "1 0 0",
                    color:
                      "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Select time`}</span>
              {/* name="Icon Right" id="214:5633" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{
                  ...{ width: "16px", height: "16px", flexShrink: "0" },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="214:5634" */}
      {`${state}` === `focused` &&
        `${size}` === `default` &&
        `${range}` === `false` && (
          <>
            {/* name="state=focused, size=default, range=false" id="214:5634" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "240px",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "10px var(--size-padding-paddingsm, 12px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  flexShrink: "0",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                  background:
                    "var(--color-neutral-background-colorbgcontainer, #fff)",
                },
                ...style,
              }}
            >
              <span
                style={{
                  ...{
                    flex: "1 0 0",
                    color:
                      "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Select time`}</span>
              {/* name="Icon Right" id="214:5636" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{
                  ...{ width: "16px", height: "16px", flexShrink: "0" },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="214:5637" */}
      {`${state}` === `filled` &&
        `${size}` === `default` &&
        `${range}` === `false` && (
          <>
            {/* name="state=filled, size=default, range=false" id="214:5637" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "240px",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "10px var(--size-padding-paddingsm, 12px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  flexShrink: "0",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                  background:
                    "var(--color-neutral-background-colorbgcontainer, #fff)",
                },
                ...style,
              }}
            >
              <span
                style={{
                  ...{
                    flex: "1 0 0",
                    color: "var(--color-neutral-text-colortext, #000)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`14:09`}</span>
              {/* name="Icon Right" id="214:5639" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{
                  ...{ width: "16px", height: "16px", flexShrink: "0" },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="214:5640" */}
      {`${state}` === `default` &&
        `${size}` === `large` &&
        `${range}` === `false` && (
          <>
            {/* name="state=default, size=large, range=false" id="214:5640" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "240px",
                  height: "var(--size-height-controlheightlg, 40px)",
                  padding: "10px var(--size-padding-paddingsm, 12px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingsm, 12px)",
                  flexShrink: "0",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                  background:
                    "var(--color-neutral-background-colorbgcontainer, #fff)",
                },
                ...style,
              }}
            >
              <span
                style={{
                  ...{
                    flex: "1 0 0",
                    color:
                      "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "24px /* 150% */",
                  },
                  ...{},
                }}
              >{`Select time`}</span>
              {/* name="Icon Right" id="214:5642" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{
                  ...{ width: "16px", height: "16px", flexShrink: "0" },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="214:5643" */}
      {`${state}` === `focused` &&
        `${size}` === `large` &&
        `${range}` === `false` && (
          <>
            {/* name="state=focused, size=large, range=false" id="214:5643" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "240px",
                  height: "var(--size-height-controlheightlg, 40px)",
                  padding: "10px var(--size-padding-paddingsm, 12px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingsm, 12px)",
                  flexShrink: "0",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                  background:
                    "var(--color-neutral-background-colorbgcontainer, #fff)",
                },
                ...style,
              }}
            >
              <span
                style={{
                  ...{
                    flex: "1 0 0",
                    color:
                      "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "24px /* 150% */",
                  },
                  ...{},
                }}
              >{`Select time`}</span>
              {/* name="Icon Right" id="214:5645" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{
                  ...{ width: "16px", height: "16px", flexShrink: "0" },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="214:5646" */}
      {`${state}` === `filled` &&
        `${size}` === `large` &&
        `${range}` === `false` && (
          <>
            {/* name="state=filled, size=large, range=false" id="214:5646" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "240px",
                  height: "var(--size-height-controlheightlg, 40px)",
                  padding: "10px var(--size-padding-paddingsm, 12px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingsm, 12px)",
                  flexShrink: "0",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                  background:
                    "var(--color-neutral-background-colorbgcontainer, #fff)",
                },
                ...style,
              }}
            >
              <span
                style={{
                  ...{
                    flex: "1 0 0",
                    color: "var(--color-neutral-text-colortext, #000)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "24px /* 150% */",
                  },
                  ...{},
                }}
              >{`14:09`}</span>
              {/* name="Icon Right" id="214:5648" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{
                  ...{ width: "16px", height: "16px", flexShrink: "0" },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="214:5649" */}
      {`${state}` === `default` &&
        `${size}` === `small` &&
        `${range}` === `false` && (
          <>
            {/* name="state=default, size=small, range=false" id="214:5649" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "240px",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "10px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  flexShrink: "0",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                  background:
                    "var(--color-neutral-background-colorbgcontainer, #fff)",
                },
                ...style,
              }}
            >
              <span
                style={{
                  ...{
                    flex: "1 0 0",
                    color:
                      "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Select time`}</span>
              {/* name="Icon Right" id="214:5651" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{
                  ...{ width: "16px", height: "16px", flexShrink: "0" },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="214:5652" */}
      {`${state}` === `focused` &&
        `${size}` === `small` &&
        `${range}` === `false` && (
          <>
            {/* name="state=focused, size=small, range=false" id="214:5652" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "240px",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "10px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  flexShrink: "0",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                  background:
                    "var(--color-neutral-background-colorbgcontainer, #fff)",
                },
                ...style,
              }}
            >
              <span
                style={{
                  ...{
                    flex: "1 0 0",
                    color:
                      "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Select time`}</span>
              {/* name="Icon Right" id="214:5654" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{
                  ...{ width: "16px", height: "16px", flexShrink: "0" },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="214:5655" */}
      {`${state}` === `filled` &&
        `${size}` === `small` &&
        `${range}` === `false` && (
          <>
            {/* name="state=filled, size=small, range=false" id="214:5655" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "240px",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "10px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  flexShrink: "0",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                  background:
                    "var(--color-neutral-background-colorbgcontainer, #fff)",
                },
                ...style,
              }}
            >
              <span
                style={{
                  ...{
                    flex: "1 0 0",
                    color: "var(--color-neutral-text-colortext, #000)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`14:09`}</span>
              {/* name="Icon Right" id="214:5657" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{
                  ...{ width: "16px", height: "16px", flexShrink: "0" },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="214:5658" */}
      {`${state}` === `default` &&
        `${size}` === `default` &&
        `${range}` === `true` && (
          <>
            {/* name="state=default, size=default, range=true" id="214:5658" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "320px",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px var(--size-padding-paddingsm, 12px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  flexShrink: "0",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                  background:
                    "var(--color-neutral-background-colorbgcontainer, #fff)",
                },
                ...style,
              }}
            >
              <span
                style={{
                  ...{
                    flex: "1 0 0",
                    color:
                      "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Start time`}</span>
              {/* name="Icon Swap" id="214:5660" type="INSTANCE" */}
              <QodeCustom3511358
                style={{
                  ...{ width: "16px", height: "16px", flexShrink: "0" },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    flex: "1 0 0",
                    color:
                      "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`End time`}</span>
              {/* name="Icon Right" id="214:5662" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{
                  ...{ width: "16px", height: "16px", flexShrink: "0" },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="214:5663" */}
      {`${state}` === `focused` &&
        `${size}` === `default` &&
        `${range}` === `true` && (
          <>
            {/* name="state=focused, size=default, range=true" id="214:5663" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "320px",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px var(--size-padding-paddingsm, 12px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  flexShrink: "0",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                  background:
                    "var(--color-neutral-background-colorbgcontainer, #fff)",
                },
                ...style,
              }}
            >
              <span
                style={{
                  ...{
                    flex: "1 0 0",
                    color:
                      "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Start time`}</span>
              {/* name="Icon Swap" id="214:5665" type="INSTANCE" */}
              <QodeCustom3511358
                style={{
                  ...{ width: "16px", height: "16px", flexShrink: "0" },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    flex: "1 0 0",
                    color:
                      "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`End time`}</span>
              {/* name="Icon Right" id="214:5667" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{
                  ...{ width: "16px", height: "16px", flexShrink: "0" },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="214:5668" */}
      {`${state}` === `filled` &&
        `${size}` === `default` &&
        `${range}` === `true` && (
          <>
            {/* name="state=filled, size=default, range=true" id="214:5668" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "320px",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px var(--size-padding-paddingsm, 12px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  flexShrink: "0",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                  background:
                    "var(--color-neutral-background-colorbgcontainer, #fff)",
                },
                ...style,
              }}
            >
              <span
                style={{
                  ...{
                    flex: "1 0 0",
                    color: "var(--color-neutral-text-colortext, #000)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`14:09`}</span>
              {/* name="Icon Swap" id="214:5670" type="INSTANCE" */}
              <QodeCustom3511358
                style={{
                  ...{ width: "16px", height: "16px", flexShrink: "0" },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    flex: "1 0 0",
                    color: "var(--color-neutral-text-colortext, #000)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`15:09`}</span>
              {/* name="Icon Right" id="214:5672" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{
                  ...{ width: "16px", height: "16px", flexShrink: "0" },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="214:5673" */}
      {`${state}` === `default` &&
        `${size}` === `large` &&
        `${range}` === `true` && (
          <>
            {/* name="state=default, size=large, range=true" id="214:5673" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "320px",
                  height: "var(--size-height-controlheightlg, 40px)",
                  padding: "0px var(--size-padding-paddingsm, 12px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingsm, 12px)",
                  flexShrink: "0",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                  background:
                    "var(--color-neutral-background-colorbgcontainer, #fff)",
                },
                ...style,
              }}
            >
              <span
                style={{
                  ...{
                    flex: "1 0 0",
                    color:
                      "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "24px /* 150% */",
                  },
                  ...{},
                }}
              >{`Start time`}</span>
              {/* name="Icon Swap" id="214:5675" type="INSTANCE" */}
              <QodeCustom3511358
                style={{
                  ...{ width: "16px", height: "16px", flexShrink: "0" },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    flex: "1 0 0",
                    color:
                      "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "24px /* 150% */",
                  },
                  ...{},
                }}
              >{`End time`}</span>
              {/* name="Icon Right" id="214:5677" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{
                  ...{ width: "16px", height: "16px", flexShrink: "0" },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="214:5678" */}
      {`${state}` === `focused` &&
        `${size}` === `large` &&
        `${range}` === `true` && (
          <>
            {/* name="state=focused, size=large, range=true" id="214:5678" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "320px",
                  height: "var(--size-height-controlheightlg, 40px)",
                  padding: "0px var(--size-padding-paddingsm, 12px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingsm, 12px)",
                  flexShrink: "0",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                  background:
                    "var(--color-neutral-background-colorbgcontainer, #fff)",
                },
                ...style,
              }}
            >
              <span
                style={{
                  ...{
                    flex: "1 0 0",
                    color:
                      "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "24px /* 150% */",
                  },
                  ...{},
                }}
              >{`Start time`}</span>
              {/* name="Icon Swap" id="214:5680" type="INSTANCE" */}
              <QodeCustom3511358
                style={{
                  ...{ width: "16px", height: "16px", flexShrink: "0" },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    flex: "1 0 0",
                    color:
                      "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "24px /* 150% */",
                  },
                  ...{},
                }}
              >{`End time`}</span>
              {/* name="Icon Right" id="214:5682" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{
                  ...{ width: "16px", height: "16px", flexShrink: "0" },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="214:5683" */}
      {`${state}` === `filled` &&
        `${size}` === `large` &&
        `${range}` === `true` && (
          <>
            {/* name="state=filled, size=large, range=true" id="214:5683" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "320px",
                  height: "var(--size-height-controlheightlg, 40px)",
                  padding: "0px var(--size-padding-paddingsm, 12px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingsm, 12px)",
                  flexShrink: "0",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                  background:
                    "var(--color-neutral-background-colorbgcontainer, #fff)",
                },
                ...style,
              }}
            >
              <span
                style={{
                  ...{
                    flex: "1 0 0",
                    color: "var(--color-neutral-text-colortext, #000)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "24px /* 150% */",
                  },
                  ...{},
                }}
              >{`14:09`}</span>
              {/* name="Icon Swap" id="214:5685" type="INSTANCE" */}
              <QodeCustom3511358
                style={{
                  ...{ width: "16px", height: "16px", flexShrink: "0" },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    flex: "1 0 0",
                    color: "var(--color-neutral-text-colortext, #000)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "24px /* 150% */",
                  },
                  ...{},
                }}
              >{`15:09`}</span>
              {/* name="Icon Right" id="214:5687" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{
                  ...{ width: "16px", height: "16px", flexShrink: "0" },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="214:5688" */}
      {`${state}` === `default` &&
        `${size}` === `small` &&
        `${range}` === `true` && (
          <>
            {/* name="state=default, size=small, range=true" id="214:5688" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "320px",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  flexShrink: "0",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                  background:
                    "var(--color-neutral-background-colorbgcontainer, #fff)",
                },
                ...style,
              }}
            >
              <span
                style={{
                  ...{
                    flex: "1 0 0",
                    color:
                      "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Start time`}</span>
              {/* name="Icon Swap" id="214:5690" type="INSTANCE" */}
              <QodeCustom3511358
                style={{
                  ...{ width: "16px", height: "16px", flexShrink: "0" },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    flex: "1 0 0",
                    color:
                      "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`End time`}</span>
              {/* name="Icon Right" id="214:5692" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{
                  ...{ width: "16px", height: "16px", flexShrink: "0" },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="214:5693" */}
      {`${state}` === `focused` &&
        `${size}` === `small` &&
        `${range}` === `true` && (
          <>
            {/* name="state=focused, size=small, range=true" id="214:5693" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "320px",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  flexShrink: "0",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                  background:
                    "var(--color-neutral-background-colorbgcontainer, #fff)",
                },
                ...style,
              }}
            >
              <span
                style={{
                  ...{
                    flex: "1 0 0",
                    color:
                      "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Start time`}</span>
              {/* name="Icon Swap" id="214:5695" type="INSTANCE" */}
              <QodeCustom3511358
                style={{
                  ...{ width: "16px", height: "16px", flexShrink: "0" },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    flex: "1 0 0",
                    color:
                      "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`End time`}</span>
              {/* name="Icon Right" id="214:5697" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{
                  ...{ width: "16px", height: "16px", flexShrink: "0" },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="214:5698" */}
      {`${state}` === `filled` &&
        `${size}` === `small` &&
        `${range}` === `true` && (
          <>
            {/* name="state=filled, size=small, range=true" id="214:5698" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "320px",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  flexShrink: "0",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                  background:
                    "var(--color-neutral-background-colorbgcontainer, #fff)",
                },
                ...style,
              }}
            >
              <span
                style={{
                  ...{
                    flex: "1 0 0",
                    color: "var(--color-neutral-text-colortext, #000)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`14:09`}</span>
              {/* name="Icon Swap" id="214:5700" type="INSTANCE" */}
              <QodeCustom3511358
                style={{
                  ...{ width: "16px", height: "16px", flexShrink: "0" },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    flex: "1 0 0",
                    color: "var(--color-neutral-text-colortext, #000)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`15:09`}</span>
              {/* name="Icon Right" id="214:5702" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{
                  ...{ width: "16px", height: "16px", flexShrink: "0" },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
    </>
  )
}
