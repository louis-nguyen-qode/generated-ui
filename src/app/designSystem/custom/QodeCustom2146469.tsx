// id="214:6469"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom2145153 } from "@designSystem/custom/QodeCustom2145153"
import { QodeCustom2145213 } from "@designSystem/custom/QodeCustom2145213"
import { QodeCustom2145273 } from "@designSystem/custom/QodeCustom2145273"
import { QodeCustom2145159 } from "@designSystem/custom/QodeCustom2145159"
import { QodeCustom2146293 } from "@designSystem/custom/QodeCustom2146293"
import { QodeCustom2145219 } from "@designSystem/custom/QodeCustom2145219"
import { QodeCustom2145279 } from "@designSystem/custom/QodeCustom2145279"

export interface QodeCustom2146469Props {
  size?: "default" | "large" | "small"
  active?: "false" | "true"
}

export const QodeCustom2146469: React.FC<
  QodeCustom2146469Props & { style?: CSSProperties }
> = ({ size = "default", active = "false", style, ...rest }) => {
  return (
    <>
      {/* name="TimePicker" id="214:6469" type="COMPONENT_SET" */}
      {/* id="214:6470" */}
      {`${size}` === `default` && `${active}` === `false` && (
        <>
          {/* name="size=default, active=false" id="214:6470" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "240px",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "4px",
              },
              ...style,
            }}
          >
            {/* name="🧬 input" id="214:6471" type="INSTANCE" */}
            <QodeCustom2145153
              style={{
                ...{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "10px var(--size-padding-paddingsm, 12px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  alignSelf: "stretch",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                  background:
                    "var(--color-neutral-background-colorbgcontainer, #fff)",
                },
                ...{},
              }}
              {...{
                placeholder: "Select time",
                time: "14:09",
                startPlaceholder: "Start time",
                startTime: "14:09",
                endPlaceholder: "End time",
                endTime: "15:09",
                state: "default",
                status: "default",
                size: "default",
                range: false,
              }}
            />
          </div>
        </>
      )}
      {/* id="214:6472" */}
      {`${size}` === `large` && `${active}` === `false` && (
        <>
          {/* name="size=large, active=false" id="214:6472" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "240px",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "4px",
              },
              ...style,
            }}
          >
            {/* name="🧬 input" id="214:6473" type="INSTANCE" */}
            <QodeCustom2145213
              style={{
                ...{
                  display: "flex",
                  height: "var(--size-height-controlheightlg, 40px)",
                  padding: "10px var(--size-padding-paddingsm, 12px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingsm, 12px)",
                  alignSelf: "stretch",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                  background:
                    "var(--color-neutral-background-colorbgcontainer, #fff)",
                },
                ...{},
              }}
              {...{
                placeholder: "Select time",
                startTime: "14:09",
                endTime: "15:09",
                time: "14:09",
                startPlaceholder: "Start time",
                endPlaceholder: "End time",
                state: "default",
                status: "default",
                size: "large",
                range: false,
              }}
            />
          </div>
        </>
      )}
      {/* id="214:6474" */}
      {`${size}` === `small` && `${active}` === `false` && (
        <>
          {/* name="size=small, active=false" id="214:6474" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "240px",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "4px",
              },
              ...style,
            }}
          >
            {/* name="🧬 input" id="214:6475" type="INSTANCE" */}
            <QodeCustom2145273
              style={{
                ...{
                  display: "flex",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "10px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  alignSelf: "stretch",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                  background:
                    "var(--color-neutral-background-colorbgcontainer, #fff)",
                },
                ...{},
              }}
              {...{
                placeholder: "Select time",
                endPlaceholder: "End time",
                time: "14:09",
                startPlaceholder: "Start time",
                startTime: "14:09",
                endTime: "15:09",
                state: "default",
                status: "default",
                size: "small",
                range: false,
              }}
            />
          </div>
        </>
      )}
      {/* id="214:6476" */}
      {`${size}` === `default` && `${active}` === `true` && (
        <>
          {/* name="size=default, active=true" id="214:6476" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "240px",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "4px",
              },
              ...style,
            }}
          >
            {/* name="🧬 input" id="214:6477" type="INSTANCE" */}
            <QodeCustom2145159
              style={{
                ...{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "10px var(--size-padding-paddingsm, 12px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  alignSelf: "stretch",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--color-primary-colorprimary, #1597f4)",
                  background:
                    "var(--color-neutral-background-colorbgcontainer, #fff)",
                },
                ...{},
              }}
              {...{
                placeholder: "Select time",
                endTime: "15:09",
                time: "14:09",
                endPlaceholder: "End time",
                startPlaceholder: "Start time",
                startTime: "14:09",
                state: "focused",
                status: "default",
                size: "default",
                range: false,
              }}
            />
            {/* name="🧬 dropdown menu" id="214:6478" type="INSTANCE" */}
            <QodeCustom2146293
              style={{
                ...{
                  display: "flex",
                  width: "170px",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  bottom: "-272px",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                  background:
                    "var(--color-neutral-background-colorbgelevated, #f8f6f6)",
                  boxShadow:
                    "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 3px 6px -4px rgba(0, 0, 0, 0.12)",
                },
                ...{},
              }}
              {...{ type: "HH:MM:SS" }}
            />
          </div>
        </>
      )}
      {/* id="214:6479" */}
      {`${size}` === `large` && `${active}` === `true` && (
        <>
          {/* name="size=large, active=true" id="214:6479" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "240px",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "4px",
              },
              ...style,
            }}
          >
            {/* name="🧬 input" id="214:6480" type="INSTANCE" */}
            <QodeCustom2145219
              style={{
                ...{
                  display: "flex",
                  height: "var(--size-height-controlheightlg, 40px)",
                  padding: "10px var(--size-padding-paddingsm, 12px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingsm, 12px)",
                  alignSelf: "stretch",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--color-primary-colorprimary, #1597f4)",
                  background:
                    "var(--color-neutral-background-colorbgcontainer, #fff)",
                },
                ...{},
              }}
              {...{
                placeholder: "Select time",
                time: "14:09",
                startPlaceholder: "Start time",
                startTime: "14:09",
                endPlaceholder: "End time",
                endTime: "15:09",
                state: "focused",
                status: "default",
                size: "large",
                range: false,
              }}
            />
            {/* name="🧬 dropdown menu" id="214:6481" type="INSTANCE" */}
            <QodeCustom2146293
              style={{
                ...{
                  display: "flex",
                  width: "170px",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  bottom: "-272px",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                  background:
                    "var(--color-neutral-background-colorbgelevated, #f8f6f6)",
                  boxShadow:
                    "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 3px 6px -4px rgba(0, 0, 0, 0.12)",
                },
                ...{},
              }}
              {...{ type: "HH:MM:SS" }}
            />
          </div>
        </>
      )}
      {/* id="214:6482" */}
      {`${size}` === `small` && `${active}` === `true` && (
        <>
          {/* name="size=small, active=true" id="214:6482" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "240px",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "4px",
              },
              ...style,
            }}
          >
            {/* name="🧬 input" id="214:6483" type="INSTANCE" */}
            <QodeCustom2145279
              style={{
                ...{
                  display: "flex",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "10px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  alignSelf: "stretch",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--color-primary-colorprimary, #1597f4)",
                  background:
                    "var(--color-neutral-background-colorbgcontainer, #fff)",
                },
                ...{},
              }}
              {...{
                placeholder: "Select time",
                startTime: "14:09",
                endTime: "15:09",
                time: "14:09",
                startPlaceholder: "Start time",
                endPlaceholder: "End time",
                state: "focused",
                status: "default",
                size: "small",
                range: false,
              }}
            />
            {/* name="🧬 dropdown menu" id="214:6484" type="INSTANCE" */}
            <QodeCustom2146293
              style={{
                ...{
                  display: "flex",
                  width: "170px",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  bottom: "-272px",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                  background:
                    "var(--color-neutral-background-colorbgelevated, #f8f6f6)",
                  boxShadow:
                    "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 3px 6px -4px rgba(0, 0, 0, 0.12)",
                },
                ...{},
              }}
              {...{ type: "HH:MM:SS" }}
            />
          </div>
        </>
      )}
    </>
  )
}
