// id="202:32056"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom3511358 } from "@designSystem/custom/QodeCustom3511358"

export interface QodeCustom20232056Props {
  rIcon?: React.ReactNode
  endPlaceholder?: string
  startDate?: string
  startPlaceholder?: string
  endDate?: string
  date?: string
  placeholder?: string
  state?: "default" | "focused" | "filled"
  size?: "default" | "large" | "small"
  range?: "false" | "true"
}

export const QodeCustom20232056: React.FC<
  QodeCustom20232056Props & { style?: CSSProperties }
> = ({
  rIcon = undefined,
  endPlaceholder = "End date",
  startDate = "2023-09-02",
  startPlaceholder = "Start date",
  endDate = "2023-09-09",
  date = "2023-09-02",
  placeholder = "Select date",
  state = "default",
  size = "default",
  range = "false",
  style,
  ...rest
}) => {
  return (
    <>
      {/* name=".datePicker__inputBorderless" id="202:32056" type="COMPONENT_SET" */}
      {/* id="202:32057" */}
      {`${state}` === `default` &&
        `${size}` === `default` &&
        `${range}` === `false` && (
          <>
            {/* name="state=default, size=default, range=false" id="202:32057" type="COMPONENT" */}
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
              >{`Select date`}</span>
              {/* name="Icon Right" id="202:32059" type="INSTANCE" */}
              <Icon.QodeCalendarDays
                style={{
                  ...{ width: "16px", height: "16px", flexShrink: "0" },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="202:32063" */}
      {`${state}` === `focused` &&
        `${size}` === `default` &&
        `${range}` === `false` && (
          <>
            {/* name="state=focused, size=default, range=false" id="202:32063" type="COMPONENT" */}
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
              >{`Select date`}</span>
              {/* name="Icon Right" id="202:32065" type="INSTANCE" */}
              <Icon.QodeCalendarDays
                style={{
                  ...{ width: "16px", height: "16px", flexShrink: "0" },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="202:32071" */}
      {`${state}` === `filled` &&
        `${size}` === `default` &&
        `${range}` === `false` && (
          <>
            {/* name="state=filled, size=default, range=false" id="202:32071" type="COMPONENT" */}
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
              >{`2023-09-02`}</span>
              {/* name="Icon Right" id="202:32073" type="INSTANCE" */}
              <Icon.QodeCalendarDays
                style={{
                  ...{ width: "16px", height: "16px", flexShrink: "0" },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="202:32117" */}
      {`${state}` === `default` &&
        `${size}` === `large` &&
        `${range}` === `false` && (
          <>
            {/* name="state=default, size=large, range=false" id="202:32117" type="COMPONENT" */}
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
              >{`Select date`}</span>
              {/* name="Icon Right" id="202:32119" type="INSTANCE" */}
              <Icon.QodeCalendarDays
                style={{
                  ...{ width: "16px", height: "16px", flexShrink: "0" },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="202:32123" */}
      {`${state}` === `focused` &&
        `${size}` === `large` &&
        `${range}` === `false` && (
          <>
            {/* name="state=focused, size=large, range=false" id="202:32123" type="COMPONENT" */}
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
              >{`Select date`}</span>
              {/* name="Icon Right" id="202:32125" type="INSTANCE" */}
              <Icon.QodeCalendarDays
                style={{
                  ...{ width: "16px", height: "16px", flexShrink: "0" },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="202:32131" */}
      {`${state}` === `filled` &&
        `${size}` === `large` &&
        `${range}` === `false` && (
          <>
            {/* name="state=filled, size=large, range=false" id="202:32131" type="COMPONENT" */}
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
              >{`2023-09-02`}</span>
              {/* name="Icon Right" id="202:32133" type="INSTANCE" */}
              <Icon.QodeCalendarDays
                style={{
                  ...{ width: "16px", height: "16px", flexShrink: "0" },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="202:32177" */}
      {`${state}` === `default` &&
        `${size}` === `small` &&
        `${range}` === `false` && (
          <>
            {/* name="state=default, size=small, range=false" id="202:32177" type="COMPONENT" */}
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
              >{`Select date`}</span>
              {/* name="Icon Right" id="202:32179" type="INSTANCE" */}
              <Icon.QodeCalendarDays
                style={{
                  ...{ width: "16px", height: "16px", flexShrink: "0" },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="202:32183" */}
      {`${state}` === `focused` &&
        `${size}` === `small` &&
        `${range}` === `false` && (
          <>
            {/* name="state=focused, size=small, range=false" id="202:32183" type="COMPONENT" */}
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
              >{`Select date`}</span>
              {/* name="Icon Right" id="202:32185" type="INSTANCE" */}
              <Icon.QodeCalendarDays
                style={{
                  ...{ width: "16px", height: "16px", flexShrink: "0" },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="202:32191" */}
      {`${state}` === `filled` &&
        `${size}` === `small` &&
        `${range}` === `false` && (
          <>
            {/* name="state=filled, size=small, range=false" id="202:32191" type="COMPONENT" */}
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
              >{`2023-09-02`}</span>
              {/* name="Icon Right" id="202:32193" type="INSTANCE" */}
              <Icon.QodeCalendarDays
                style={{
                  ...{ width: "16px", height: "16px", flexShrink: "0" },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="202:32237" */}
      {`${state}` === `default` &&
        `${size}` === `default` &&
        `${range}` === `true` && (
          <>
            {/* name="state=default, size=default, range=true" id="202:32237" type="COMPONENT" */}
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
              >{`Start date`}</span>
              {/* name="Icon Swap" id="202:32239" type="INSTANCE" */}
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
              >{`End date`}</span>
              {/* name="Icon Right" id="202:32241" type="INSTANCE" */}
              <Icon.QodeCalendarDays
                style={{
                  ...{ width: "16px", height: "16px", flexShrink: "0" },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="202:32247" */}
      {`${state}` === `focused` &&
        `${size}` === `default` &&
        `${range}` === `true` && (
          <>
            {/* name="state=focused, size=default, range=true" id="202:32247" type="COMPONENT" */}
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
              >{`Start date`}</span>
              {/* name="Icon Swap" id="202:32249" type="INSTANCE" */}
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
              >{`End date`}</span>
              {/* name="Icon Right" id="202:32251" type="INSTANCE" */}
              <Icon.QodeCalendarDays
                style={{
                  ...{ width: "16px", height: "16px", flexShrink: "0" },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="202:32260" */}
      {`${state}` === `filled` &&
        `${size}` === `default` &&
        `${range}` === `true` && (
          <>
            {/* name="state=filled, size=default, range=true" id="202:32260" type="COMPONENT" */}
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
              >{`2023-09-02`}</span>
              {/* name="Icon Swap" id="202:32262" type="INSTANCE" */}
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
              >{`2023-09-09`}</span>
              {/* name="Icon Right" id="202:32264" type="INSTANCE" */}
              <Icon.QodeCalendarDays
                style={{
                  ...{ width: "16px", height: "16px", flexShrink: "0" },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="202:32336" */}
      {`${state}` === `default` &&
        `${size}` === `large` &&
        `${range}` === `true` && (
          <>
            {/* name="state=default, size=large, range=true" id="202:32336" type="COMPONENT" */}
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
              >{`Start date`}</span>
              {/* name="Icon Swap" id="202:32338" type="INSTANCE" */}
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
              >{`End date`}</span>
              {/* name="Icon Right" id="202:32340" type="INSTANCE" */}
              <Icon.QodeCalendarDays
                style={{
                  ...{ width: "16px", height: "16px", flexShrink: "0" },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="202:32346" */}
      {`${state}` === `focused` &&
        `${size}` === `large` &&
        `${range}` === `true` && (
          <>
            {/* name="state=focused, size=large, range=true" id="202:32346" type="COMPONENT" */}
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
              >{`Start date`}</span>
              {/* name="Icon Swap" id="202:32348" type="INSTANCE" */}
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
              >{`End date`}</span>
              {/* name="Icon Right" id="202:32350" type="INSTANCE" */}
              <Icon.QodeCalendarDays
                style={{
                  ...{ width: "16px", height: "16px", flexShrink: "0" },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="202:32359" */}
      {`${state}` === `filled` &&
        `${size}` === `large` &&
        `${range}` === `true` && (
          <>
            {/* name="state=filled, size=large, range=true" id="202:32359" type="COMPONENT" */}
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
              >{`2023-09-02`}</span>
              {/* name="Icon Swap" id="202:32361" type="INSTANCE" */}
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
              >{`2023-09-09`}</span>
              {/* name="Icon Right" id="202:32363" type="INSTANCE" */}
              <Icon.QodeCalendarDays
                style={{
                  ...{ width: "16px", height: "16px", flexShrink: "0" },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="202:32435" */}
      {`${state}` === `default` &&
        `${size}` === `small` &&
        `${range}` === `true` && (
          <>
            {/* name="state=default, size=small, range=true" id="202:32435" type="COMPONENT" */}
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
              >{`Start date`}</span>
              {/* name="Icon Swap" id="202:32437" type="INSTANCE" */}
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
              >{`End date`}</span>
              {/* name="Icon Right" id="202:32439" type="INSTANCE" */}
              <Icon.QodeCalendarDays
                style={{
                  ...{ width: "16px", height: "16px", flexShrink: "0" },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="202:32445" */}
      {`${state}` === `focused` &&
        `${size}` === `small` &&
        `${range}` === `true` && (
          <>
            {/* name="state=focused, size=small, range=true" id="202:32445" type="COMPONENT" */}
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
              >{`Start date`}</span>
              {/* name="Icon Swap" id="202:32447" type="INSTANCE" */}
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
              >{`End date`}</span>
              {/* name="Icon Right" id="202:32449" type="INSTANCE" */}
              <Icon.QodeCalendarDays
                style={{
                  ...{ width: "16px", height: "16px", flexShrink: "0" },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="202:32458" */}
      {`${state}` === `filled` &&
        `${size}` === `small` &&
        `${range}` === `true` && (
          <>
            {/* name="state=filled, size=small, range=true" id="202:32458" type="COMPONENT" */}
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
              >{`2023-09-02`}</span>
              {/* name="Icon Swap" id="202:32460" type="INSTANCE" */}
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
              >{`2023-09-09`}</span>
              {/* name="Icon Right" id="202:32462" type="INSTANCE" */}
              <Icon.QodeCalendarDays
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
