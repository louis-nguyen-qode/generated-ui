// id="189:13734"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeInput } from "@designSystem/ant/QodeInput"
import { QodeCustom18912627 } from "@designSystem/custom/QodeCustom18912627"
import { QodeButton } from "@designSystem/ant/QodeButton"

export interface QodeCustom18913734Props {
  item_8?: React.ReactNode
  button?: boolean
  item_7?: React.ReactNode
  item_6?: React.ReactNode
  item_4?: React.ReactNode
  item_3?: React.ReactNode
  item_5?: React.ReactNode
  item_2?: React.ReactNode
  item_1?: React.ReactNode
  items?: "2" | "3" | "4" | "5" | "6" | "7"
}

export const QodeCustom18913734: React.FC<
  QodeCustom18913734Props & { style?: CSSProperties }
> = ({
  item_8 = undefined,
  button = false,
  item_7 = undefined,
  item_6 = undefined,
  item_4 = undefined,
  item_3 = undefined,
  item_5 = undefined,
  item_2 = undefined,
  item_1 = undefined,
  items = "2",
  style,
  ...rest
}) => {
  return (
    <>
      {/* name=".dropdown__menu" id="189:13734" type="COMPONENT_SET" */}
      {/* id="189:13733" */}
      {`${items}` === `2` && (
        <>
          {/* name="items=2" id="189:13733" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "inline-flex",
                padding: "var(--size-padding-paddingsm, 12px)",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "var(--size-small, 12px)",
                borderRadius: "var(--border-radius-base, 8px)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
                boxShadow:
                  "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 3px 6px -4px rgba(0, 0, 0, 0.12)",
              },
              ...style,
            }}
          >
            {/* name="Search bar" id="2759:31274" type="INSTANCE" */}
            <QodeInput
              style={{
                ...{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "10px 12px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "8px",
                  alignSelf: "stretch",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                  background: "var(--background-bg-white, #fff)",
                },
                ...{},
              }}
              {...{
                suffix: "SUF",
                title: "Input",
                prefix: "PRE",
                showIconLeft: true,
                state: "default",
                status: "default",
                size: "default",
              }}
            />
            {/* name="body" id="2760:33390" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                },
                ...{},
              }}
            >
              {/* name="_Dropdown/Item" id="189:13702" type="INSTANCE" */}
              <QodeCustom18912627
                style={{
                  ...{
                    display: "flex",
                    width: "200px",
                    height: "var(--size-height-controlheight, 32px)",
                    padding: "0px 12px",
                    alignItems: "center",
                    gap: "8px",
                    borderRadius: "var(--style-radius-borderradiussm, 6px)",
                  },
                  ...{},
                }}
                {...{ title: "Dropdown Item", state: "default", danger: false }}
              />
              {/* name="_Dropdown/Item" id="189:13708" type="INSTANCE" */}
              <QodeCustom18912627
                style={{
                  ...{
                    display: "flex",
                    width: "200px",
                    height: "var(--size-height-controlheight, 32px)",
                    padding: "0px 12px",
                    alignItems: "center",
                    gap: "8px",
                    borderRadius: "var(--style-radius-borderradiussm, 6px)",
                  },
                  ...{},
                }}
                {...{ title: "Dropdown Item", state: "default", danger: false }}
              />
            </div>
            {/* name="Buttons" id="2760:32703" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  paddingTop: "var(--size-padding-paddingsm, 12px)",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  gap: "3px",
                  alignSelf: "stretch",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                },
                ...{},
              }}
            >
              {/* name="Button" id="2760:32704" type="INSTANCE" */}
              <QodeButton
                style={{
                  ...{
                    display: "flex",
                    height: "var(--size-height-controlheightsm, 24px)",
                    padding: "4px 8px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "4px",
                    borderRadius: "var(--border-radius-rounded, 999px)",
                  },
                  ...{},
                }}
                {...{
                  buttonname: "Reset",
                  type: "link",
                  size: "small",
                  state: "default",
                  content: "default",
                  danger: false,
                  ghost: false,
                }}
              />
              {/* name="Button" id="2760:32705" type="INSTANCE" */}
              <QodeButton
                style={{
                  ...{
                    display: "flex",
                    height: "var(--size-height-controlheightsm, 24px)",
                    padding: "4px 8px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "4px",
                    borderRadius: "var(--border-radius-rounded, 999px)",
                    border:
                      "1px solid var(--border-border-primary-30, #107ecc)",
                    background: "var(--background-bg-primary, #1597f4)",
                  },
                  ...{},
                }}
                {...{
                  buttonname: "Show Results",
                  type: "primary",
                  size: "small",
                  state: "default",
                  content: "default",
                  danger: false,
                  ghost: false,
                }}
              />
            </div>
          </div>
        </>
      )}
      {/* id="189:13748" */}
      {`${items}` === `3` && (
        <>
          {/* name="items=3" id="189:13748" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "inline-flex",
                padding: "var(--size-padding-paddingsm, 12px)",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "var(--size-small, 12px)",
                borderRadius: "var(--border-radius-base, 8px)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
                boxShadow:
                  "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 3px 6px -4px rgba(0, 0, 0, 0.12)",
              },
              ...style,
            }}
          >
            {/* name="Search bar" id="2759:31273" type="INSTANCE" */}
            <QodeInput
              style={{
                ...{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "10px 12px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "8px",
                  alignSelf: "stretch",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                  background: "var(--background-bg-white, #fff)",
                },
                ...{},
              }}
              {...{
                suffix: "SUF",
                title: "Input",
                prefix: "PRE",
                showIconLeft: true,
                state: "default",
                status: "default",
                size: "default",
              }}
            />
            {/* name="body" id="2760:33499" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                },
                ...{},
              }}
            >
              {/* name="_Dropdown/Item" id="189:13749" type="INSTANCE" */}
              <QodeCustom18912627
                style={{
                  ...{
                    display: "flex",
                    width: "200px",
                    height: "var(--size-height-controlheight, 32px)",
                    padding: "0px 12px",
                    alignItems: "center",
                    gap: "8px",
                    borderRadius: "var(--style-radius-borderradiussm, 6px)",
                  },
                  ...{},
                }}
                {...{ title: "Dropdown Item", state: "default", danger: false }}
              />
              {/* name="_Dropdown/Item" id="189:13750" type="INSTANCE" */}
              <QodeCustom18912627
                style={{
                  ...{
                    display: "flex",
                    width: "200px",
                    height: "var(--size-height-controlheight, 32px)",
                    padding: "0px 12px",
                    alignItems: "center",
                    gap: "8px",
                    borderRadius: "var(--style-radius-borderradiussm, 6px)",
                  },
                  ...{},
                }}
                {...{ title: "Dropdown Item", state: "default", danger: false }}
              />
              {/* name="_Dropdown/Item" id="189:13761" type="INSTANCE" */}
              <QodeCustom18912627
                style={{
                  ...{
                    display: "flex",
                    width: "200px",
                    height: "var(--size-height-controlheight, 32px)",
                    padding: "0px 12px",
                    alignItems: "center",
                    gap: "8px",
                    borderRadius: "var(--style-radius-borderradiussm, 6px)",
                  },
                  ...{},
                }}
                {...{ title: "Dropdown Item", state: "default", danger: false }}
              />
            </div>
            {/* name="Buttons" id="2760:32928" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  paddingTop: "var(--size-padding-paddingsm, 12px)",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  gap: "3px",
                  alignSelf: "stretch",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                },
                ...{},
              }}
            >
              {/* name="Button" id="2760:32929" type="INSTANCE" */}
              <QodeButton
                style={{
                  ...{
                    display: "flex",
                    height: "var(--size-height-controlheightsm, 24px)",
                    padding: "4px 8px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "4px",
                    borderRadius: "var(--border-radius-rounded, 999px)",
                  },
                  ...{},
                }}
                {...{
                  buttonname: "Reset",
                  type: "link",
                  size: "small",
                  state: "default",
                  content: "default",
                  danger: false,
                  ghost: false,
                }}
              />
              {/* name="Button" id="2760:32930" type="INSTANCE" */}
              <QodeButton
                style={{
                  ...{
                    display: "flex",
                    height: "var(--size-height-controlheightsm, 24px)",
                    padding: "4px 8px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "4px",
                    borderRadius: "var(--border-radius-rounded, 999px)",
                    border:
                      "1px solid var(--border-border-primary-30, #107ecc)",
                    background: "var(--background-bg-primary, #1597f4)",
                  },
                  ...{},
                }}
                {...{
                  buttonname: "Show Results",
                  type: "primary",
                  size: "small",
                  state: "default",
                  content: "default",
                  danger: false,
                  ghost: false,
                }}
              />
            </div>
          </div>
        </>
      )}
      {/* id="189:13767" */}
      {`${items}` === `4` && (
        <>
          {/* name="items=4" id="189:13767" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "inline-flex",
                padding: "var(--size-padding-paddingsm, 12px)",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "var(--size-small, 12px)",
                borderRadius: "var(--border-radius-base, 8px)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
                boxShadow:
                  "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 3px 6px -4px rgba(0, 0, 0, 0.12)",
              },
              ...style,
            }}
          >
            {/* name="Search bar" id="2759:31278" type="INSTANCE" */}
            <QodeInput
              style={{
                ...{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "10px 12px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "8px",
                  alignSelf: "stretch",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                  background: "var(--background-bg-white, #fff)",
                },
                ...{},
              }}
              {...{
                suffix: "SUF",
                title: "Input",
                prefix: "PRE",
                showIconLeft: true,
                state: "default",
                status: "default",
                size: "default",
              }}
            />
            {/* name="body" id="2760:33560" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                },
                ...{},
              }}
            >
              {/* name="_Dropdown/Item" id="189:13768" type="INSTANCE" */}
              <QodeCustom18912627
                style={{
                  ...{
                    display: "flex",
                    width: "200px",
                    height: "var(--size-height-controlheight, 32px)",
                    padding: "0px 12px",
                    alignItems: "center",
                    gap: "8px",
                    borderRadius: "var(--style-radius-borderradiussm, 6px)",
                  },
                  ...{},
                }}
                {...{ title: "Dropdown Item", state: "default", danger: false }}
              />
              {/* name="_Dropdown/Item" id="189:13769" type="INSTANCE" */}
              <QodeCustom18912627
                style={{
                  ...{
                    display: "flex",
                    width: "200px",
                    height: "var(--size-height-controlheight, 32px)",
                    padding: "0px 12px",
                    alignItems: "center",
                    gap: "8px",
                    borderRadius: "var(--style-radius-borderradiussm, 6px)",
                  },
                  ...{},
                }}
                {...{ title: "Dropdown Item", state: "default", danger: false }}
              />
              {/* name="_Dropdown/Item" id="189:13770" type="INSTANCE" */}
              <QodeCustom18912627
                style={{
                  ...{
                    display: "flex",
                    width: "200px",
                    height: "var(--size-height-controlheight, 32px)",
                    padding: "0px 12px",
                    alignItems: "center",
                    gap: "8px",
                    borderRadius: "var(--style-radius-borderradiussm, 6px)",
                  },
                  ...{},
                }}
                {...{ title: "Dropdown Item", state: "default", danger: false }}
              />
              {/* name="_Dropdown/Item" id="189:13786" type="INSTANCE" */}
              <QodeCustom18912627
                style={{
                  ...{
                    display: "flex",
                    width: "200px",
                    height: "var(--size-height-controlheight, 32px)",
                    padding: "0px 12px",
                    alignItems: "center",
                    gap: "8px",
                    borderRadius: "var(--style-radius-borderradiussm, 6px)",
                  },
                  ...{},
                }}
                {...{ title: "Dropdown Item", state: "default", danger: false }}
              />
            </div>
            {/* name="Buttons" id="2760:32931" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  paddingTop: "var(--size-padding-paddingsm, 12px)",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  gap: "3px",
                  alignSelf: "stretch",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                },
                ...{},
              }}
            >
              {/* name="Button" id="2760:32932" type="INSTANCE" */}
              <QodeButton
                style={{
                  ...{
                    display: "flex",
                    height: "var(--size-height-controlheightsm, 24px)",
                    padding: "4px 8px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "4px",
                    borderRadius: "var(--border-radius-rounded, 999px)",
                  },
                  ...{},
                }}
                {...{
                  buttonname: "Reset",
                  type: "link",
                  size: "small",
                  state: "default",
                  content: "default",
                  danger: false,
                  ghost: false,
                }}
              />
              {/* name="Button" id="2760:32933" type="INSTANCE" */}
              <QodeButton
                style={{
                  ...{
                    display: "flex",
                    height: "var(--size-height-controlheightsm, 24px)",
                    padding: "4px 8px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "4px",
                    borderRadius: "var(--border-radius-rounded, 999px)",
                    border:
                      "1px solid var(--border-border-primary-30, #107ecc)",
                    background: "var(--background-bg-primary, #1597f4)",
                  },
                  ...{},
                }}
                {...{
                  buttonname: "Show Results",
                  type: "primary",
                  size: "small",
                  state: "default",
                  content: "default",
                  danger: false,
                  ghost: false,
                }}
              />
            </div>
          </div>
        </>
      )}
      {/* id="189:13792" */}
      {`${items}` === `5` && (
        <>
          {/* name="items=5" id="189:13792" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "inline-flex",
                padding: "var(--size-padding-paddingsm, 12px)",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "var(--size-small, 12px)",
                borderRadius: "var(--border-radius-base, 8px)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
                boxShadow:
                  "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 3px 6px -4px rgba(0, 0, 0, 0.12)",
              },
              ...style,
            }}
          >
            {/* name="Search bar" id="2759:31277" type="INSTANCE" */}
            <QodeInput
              style={{
                ...{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "10px 12px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "8px",
                  alignSelf: "stretch",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                  background: "var(--background-bg-white, #fff)",
                },
                ...{},
              }}
              {...{
                suffix: "SUF",
                title: "Input",
                prefix: "PRE",
                showIconLeft: true,
                state: "default",
                status: "default",
                size: "default",
              }}
            />
            {/* name="body" id="2760:33561" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                },
                ...{},
              }}
            >
              {/* name="_Dropdown/Item" id="189:13793" type="INSTANCE" */}
              <QodeCustom18912627
                style={{
                  ...{
                    display: "flex",
                    width: "200px",
                    height: "var(--size-height-controlheight, 32px)",
                    padding: "0px 12px",
                    alignItems: "center",
                    gap: "8px",
                    borderRadius: "var(--style-radius-borderradiussm, 6px)",
                  },
                  ...{},
                }}
                {...{ title: "Dropdown Item", state: "default", danger: false }}
              />
              {/* name="_Dropdown/Item" id="189:13794" type="INSTANCE" */}
              <QodeCustom18912627
                style={{
                  ...{
                    display: "flex",
                    width: "200px",
                    height: "var(--size-height-controlheight, 32px)",
                    padding: "0px 12px",
                    alignItems: "center",
                    gap: "8px",
                    borderRadius: "var(--style-radius-borderradiussm, 6px)",
                  },
                  ...{},
                }}
                {...{ title: "Dropdown Item", state: "default", danger: false }}
              />
              {/* name="_Dropdown/Item" id="189:13795" type="INSTANCE" */}
              <QodeCustom18912627
                style={{
                  ...{
                    display: "flex",
                    width: "200px",
                    height: "var(--size-height-controlheight, 32px)",
                    padding: "0px 12px",
                    alignItems: "center",
                    gap: "8px",
                    borderRadius: "var(--style-radius-borderradiussm, 6px)",
                  },
                  ...{},
                }}
                {...{ title: "Dropdown Item", state: "default", danger: false }}
              />
              {/* name="_Dropdown/Item" id="189:13796" type="INSTANCE" */}
              <QodeCustom18912627
                style={{
                  ...{
                    display: "flex",
                    width: "200px",
                    height: "var(--size-height-controlheight, 32px)",
                    padding: "0px 12px",
                    alignItems: "center",
                    gap: "8px",
                    borderRadius: "var(--style-radius-borderradiussm, 6px)",
                  },
                  ...{},
                }}
                {...{ title: "Dropdown Item", state: "default", danger: false }}
              />
              {/* name="_Dropdown/Item" id="189:13817" type="INSTANCE" */}
              <QodeCustom18912627
                style={{
                  ...{
                    display: "flex",
                    width: "200px",
                    height: "var(--size-height-controlheight, 32px)",
                    padding: "0px 12px",
                    alignItems: "center",
                    gap: "8px",
                    borderRadius: "var(--style-radius-borderradiussm, 6px)",
                  },
                  ...{},
                }}
                {...{ title: "Dropdown Item", state: "default", danger: false }}
              />
            </div>
            {/* name="Buttons" id="2760:32934" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  paddingTop: "var(--size-padding-paddingsm, 12px)",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  gap: "3px",
                  alignSelf: "stretch",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                },
                ...{},
              }}
            >
              {/* name="Button" id="2760:32935" type="INSTANCE" */}
              <QodeButton
                style={{
                  ...{
                    display: "flex",
                    height: "var(--size-height-controlheightsm, 24px)",
                    padding: "4px 8px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "4px",
                    borderRadius: "var(--border-radius-rounded, 999px)",
                  },
                  ...{},
                }}
                {...{
                  buttonname: "Reset",
                  type: "link",
                  size: "small",
                  state: "default",
                  content: "default",
                  danger: false,
                  ghost: false,
                }}
              />
              {/* name="Button" id="2760:32936" type="INSTANCE" */}
              <QodeButton
                style={{
                  ...{
                    display: "flex",
                    height: "var(--size-height-controlheightsm, 24px)",
                    padding: "4px 8px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "4px",
                    borderRadius: "var(--border-radius-rounded, 999px)",
                    border:
                      "1px solid var(--border-border-primary-30, #107ecc)",
                    background: "var(--background-bg-primary, #1597f4)",
                  },
                  ...{},
                }}
                {...{
                  buttonname: "Show Results",
                  type: "primary",
                  size: "small",
                  state: "default",
                  content: "default",
                  danger: false,
                  ghost: false,
                }}
              />
            </div>
          </div>
        </>
      )}
      {/* id="189:13823" */}
      {`${items}` === `6` && (
        <>
          {/* name="items=6" id="189:13823" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "inline-flex",
                padding: "var(--size-padding-paddingsm, 12px)",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "var(--size-small, 12px)",
                borderRadius: "var(--border-radius-base, 8px)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
                boxShadow:
                  "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 3px 6px -4px rgba(0, 0, 0, 0.12)",
              },
              ...style,
            }}
          >
            {/* name="Search bar" id="2759:31275" type="INSTANCE" */}
            <QodeInput
              style={{
                ...{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "10px 12px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "8px",
                  alignSelf: "stretch",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                  background: "var(--background-bg-white, #fff)",
                },
                ...{},
              }}
              {...{
                suffix: "SUF",
                title: "Input",
                prefix: "PRE",
                showIconLeft: true,
                state: "default",
                status: "default",
                size: "default",
              }}
            />
            {/* name="body" id="2760:33562" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                },
                ...{},
              }}
            >
              {/* name="_Dropdown/Item" id="189:13824" type="INSTANCE" */}
              <QodeCustom18912627
                style={{
                  ...{
                    display: "flex",
                    width: "200px",
                    height: "var(--size-height-controlheight, 32px)",
                    padding: "0px 12px",
                    alignItems: "center",
                    gap: "8px",
                    borderRadius: "var(--style-radius-borderradiussm, 6px)",
                  },
                  ...{},
                }}
                {...{ title: "Dropdown Item", state: "default", danger: false }}
              />
              {/* name="_Dropdown/Item" id="189:13825" type="INSTANCE" */}
              <QodeCustom18912627
                style={{
                  ...{
                    display: "flex",
                    width: "200px",
                    height: "var(--size-height-controlheight, 32px)",
                    padding: "0px 12px",
                    alignItems: "center",
                    gap: "8px",
                    borderRadius: "var(--style-radius-borderradiussm, 6px)",
                  },
                  ...{},
                }}
                {...{ title: "Dropdown Item", state: "default", danger: false }}
              />
              {/* name="_Dropdown/Item" id="189:13826" type="INSTANCE" */}
              <QodeCustom18912627
                style={{
                  ...{
                    display: "flex",
                    width: "200px",
                    height: "var(--size-height-controlheight, 32px)",
                    padding: "0px 12px",
                    alignItems: "center",
                    gap: "8px",
                    borderRadius: "var(--style-radius-borderradiussm, 6px)",
                  },
                  ...{},
                }}
                {...{ title: "Dropdown Item", state: "default", danger: false }}
              />
              {/* name="_Dropdown/Item" id="189:13827" type="INSTANCE" */}
              <QodeCustom18912627
                style={{
                  ...{
                    display: "flex",
                    width: "200px",
                    height: "var(--size-height-controlheight, 32px)",
                    padding: "0px 12px",
                    alignItems: "center",
                    gap: "8px",
                    borderRadius: "var(--style-radius-borderradiussm, 6px)",
                  },
                  ...{},
                }}
                {...{ title: "Dropdown Item", state: "default", danger: false }}
              />
              {/* name="_Dropdown/Item" id="189:13828" type="INSTANCE" */}
              <QodeCustom18912627
                style={{
                  ...{
                    display: "flex",
                    width: "200px",
                    height: "var(--size-height-controlheight, 32px)",
                    padding: "0px 12px",
                    alignItems: "center",
                    gap: "8px",
                    borderRadius: "var(--style-radius-borderradiussm, 6px)",
                  },
                  ...{},
                }}
                {...{ title: "Dropdown Item", state: "default", danger: false }}
              />
              {/* name="_Dropdown/Item" id="189:13854" type="INSTANCE" */}
              <QodeCustom18912627
                style={{
                  ...{
                    display: "flex",
                    width: "200px",
                    height: "var(--size-height-controlheight, 32px)",
                    padding: "0px 12px",
                    alignItems: "center",
                    gap: "8px",
                    borderRadius: "var(--style-radius-borderradiussm, 6px)",
                  },
                  ...{},
                }}
                {...{ title: "Dropdown Item", state: "default", danger: false }}
              />
            </div>
            {/* name="Buttons" id="2760:32937" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  paddingTop: "var(--size-padding-paddingsm, 12px)",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  gap: "3px",
                  alignSelf: "stretch",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                },
                ...{},
              }}
            >
              {/* name="Button" id="2760:32938" type="INSTANCE" */}
              <QodeButton
                style={{
                  ...{
                    display: "flex",
                    height: "var(--size-height-controlheightsm, 24px)",
                    padding: "4px 8px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "4px",
                    borderRadius: "var(--border-radius-rounded, 999px)",
                  },
                  ...{},
                }}
                {...{
                  buttonname: "Reset",
                  type: "link",
                  size: "small",
                  state: "default",
                  content: "default",
                  danger: false,
                  ghost: false,
                }}
              />
              {/* name="Button" id="2760:32939" type="INSTANCE" */}
              <QodeButton
                style={{
                  ...{
                    display: "flex",
                    height: "var(--size-height-controlheightsm, 24px)",
                    padding: "4px 8px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "4px",
                    borderRadius: "var(--border-radius-rounded, 999px)",
                    border:
                      "1px solid var(--border-border-primary-30, #107ecc)",
                    background: "var(--background-bg-primary, #1597f4)",
                  },
                  ...{},
                }}
                {...{
                  buttonname: "Show Results",
                  type: "primary",
                  size: "small",
                  state: "default",
                  content: "default",
                  danger: false,
                  ghost: false,
                }}
              />
            </div>
          </div>
        </>
      )}
      {/* id="189:13860" */}
      {`${items}` === `7` && (
        <>
          {/* name="items=7" id="189:13860" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "inline-flex",
                padding: "var(--size-padding-paddingsm, 12px)",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "var(--size-small, 12px)",
                borderRadius: "var(--border-radius-base, 8px)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
                boxShadow:
                  "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 3px 6px -4px rgba(0, 0, 0, 0.12)",
              },
              ...style,
            }}
          >
            {/* name="Search bar" id="2759:31279" type="INSTANCE" */}
            <QodeInput
              style={{
                ...{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "10px 12px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "8px",
                  alignSelf: "stretch",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                  background: "var(--background-bg-white, #fff)",
                },
                ...{},
              }}
              {...{
                suffix: "SUF",
                title: "Input",
                prefix: "PRE",
                showIconLeft: true,
                state: "default",
                status: "default",
                size: "default",
              }}
            />
            {/* name="body" id="2760:33563" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                },
                ...{},
              }}
            >
              {/* name="_Dropdown/Item" id="189:13861" type="INSTANCE" */}
              <QodeCustom18912627
                style={{
                  ...{
                    display: "flex",
                    width: "200px",
                    height: "var(--size-height-controlheight, 32px)",
                    padding: "0px 12px",
                    alignItems: "center",
                    gap: "8px",
                    borderRadius: "var(--style-radius-borderradiussm, 6px)",
                  },
                  ...{},
                }}
                {...{ title: "Dropdown Item", state: "default", danger: false }}
              />
              {/* name="_Dropdown/Item" id="189:13862" type="INSTANCE" */}
              <QodeCustom18912627
                style={{
                  ...{
                    display: "flex",
                    width: "200px",
                    height: "var(--size-height-controlheight, 32px)",
                    padding: "0px 12px",
                    alignItems: "center",
                    gap: "8px",
                    borderRadius: "var(--style-radius-borderradiussm, 6px)",
                  },
                  ...{},
                }}
                {...{ title: "Dropdown Item", state: "default", danger: false }}
              />
              {/* name="_Dropdown/Item" id="189:13863" type="INSTANCE" */}
              <QodeCustom18912627
                style={{
                  ...{
                    display: "flex",
                    width: "200px",
                    height: "var(--size-height-controlheight, 32px)",
                    padding: "0px 12px",
                    alignItems: "center",
                    gap: "8px",
                    borderRadius: "var(--style-radius-borderradiussm, 6px)",
                  },
                  ...{},
                }}
                {...{ title: "Dropdown Item", state: "default", danger: false }}
              />
              {/* name="_Dropdown/Item" id="189:13864" type="INSTANCE" */}
              <QodeCustom18912627
                style={{
                  ...{
                    display: "flex",
                    width: "200px",
                    height: "var(--size-height-controlheight, 32px)",
                    padding: "0px 12px",
                    alignItems: "center",
                    gap: "8px",
                    borderRadius: "var(--style-radius-borderradiussm, 6px)",
                  },
                  ...{},
                }}
                {...{ title: "Dropdown Item", state: "default", danger: false }}
              />
              {/* name="_Dropdown/Item" id="189:13865" type="INSTANCE" */}
              <QodeCustom18912627
                style={{
                  ...{
                    display: "flex",
                    width: "200px",
                    height: "var(--size-height-controlheight, 32px)",
                    padding: "0px 12px",
                    alignItems: "center",
                    gap: "8px",
                    borderRadius: "var(--style-radius-borderradiussm, 6px)",
                  },
                  ...{},
                }}
                {...{ title: "Dropdown Item", state: "default", danger: false }}
              />
              {/* name="_Dropdown/Item" id="189:13866" type="INSTANCE" */}
              <QodeCustom18912627
                style={{
                  ...{
                    display: "flex",
                    width: "200px",
                    height: "var(--size-height-controlheight, 32px)",
                    padding: "0px 12px",
                    alignItems: "center",
                    gap: "8px",
                    borderRadius: "var(--style-radius-borderradiussm, 6px)",
                  },
                  ...{},
                }}
                {...{ title: "Dropdown Item", state: "default", danger: false }}
              />
              {/* name="_Dropdown/Item" id="189:13897" type="INSTANCE" */}
              <QodeCustom18912627
                style={{
                  ...{
                    display: "flex",
                    width: "200px",
                    height: "var(--size-height-controlheight, 32px)",
                    padding: "0px 12px",
                    alignItems: "center",
                    gap: "8px",
                    borderRadius: "var(--style-radius-borderradiussm, 6px)",
                  },
                  ...{},
                }}
                {...{ title: "Dropdown Item", state: "default", danger: false }}
              />
              {/* name="_Dropdown/Item" id="2760:33564" type="INSTANCE" */}
              <QodeCustom18912627
                style={{
                  ...{
                    display: "flex",
                    width: "200px",
                    height: "var(--size-height-controlheight, 32px)",
                    padding: "0px 12px",
                    alignItems: "center",
                    gap: "8px",
                    borderRadius: "var(--style-radius-borderradiussm, 6px)",
                  },
                  ...{},
                }}
                {...{ title: "Dropdown Item", state: "default", danger: false }}
              />
            </div>
            {/* name="Buttons" id="2760:32940" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  paddingTop: "var(--size-padding-paddingsm, 12px)",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  gap: "3px",
                  alignSelf: "stretch",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                },
                ...{},
              }}
            >
              {/* name="Button" id="2760:32941" type="INSTANCE" */}
              <QodeButton
                style={{
                  ...{
                    display: "flex",
                    height: "var(--size-height-controlheightsm, 24px)",
                    padding: "4px 8px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "4px",
                    borderRadius: "var(--border-radius-rounded, 999px)",
                  },
                  ...{},
                }}
                {...{
                  buttonname: "Reset",
                  type: "link",
                  size: "small",
                  state: "default",
                  content: "default",
                  danger: false,
                  ghost: false,
                }}
              />
              {/* name="Button" id="2760:32942" type="INSTANCE" */}
              <QodeButton
                style={{
                  ...{
                    display: "flex",
                    height: "var(--size-height-controlheightsm, 24px)",
                    padding: "4px 8px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "4px",
                    borderRadius: "var(--border-radius-rounded, 999px)",
                    border:
                      "1px solid var(--border-border-primary-30, #107ecc)",
                    background: "var(--background-bg-primary, #1597f4)",
                  },
                  ...{},
                }}
                {...{
                  buttonname: "Show Results",
                  type: "primary",
                  size: "small",
                  state: "default",
                  content: "default",
                  danger: false,
                  ghost: false,
                }}
              />
            </div>
          </div>
        </>
      )}
    </>
  )
}
