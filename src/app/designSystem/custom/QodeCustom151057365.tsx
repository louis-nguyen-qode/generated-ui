// id="1510:57365"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeInput } from "@designSystem/ant/QodeInput"
import { QodeCustom43425136 } from "@designSystem/custom/QodeCustom43425136"
import { QodeCustom151055473 } from "@designSystem/custom/QodeCustom151055473"
import { QodeCustom151055469 } from "@designSystem/custom/QodeCustom151055469"

export interface QodeCustom151057365Props {
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

export const QodeCustom151057365: React.FC<
  QodeCustom151057365Props & { style?: CSSProperties }
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
      {/* name=".dropdown__menu" id="1510:57365" type="COMPONENT_SET" */}
      {/* id="1510:57366" */}
      {`${items}` === `2` && (
        <>
          {/* name="items=2" id="1510:57366" type="COMPONENT" */}
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
            {/* name="Search bar" id="1510:57372" type="INSTANCE" */}
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
                  border: "1px solid var(--border-border-neutral-30, #d5d5d5)",
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
            {/* name="body" id="1510:57373" type="FRAME" */}
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
              {/* name="_Dropdown/Item" id="1510:57374" type="INSTANCE" */}
              <QodeCustom43425136
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
              {/* name="_Dropdown/Item" id="1510:57375" type="INSTANCE" */}
              <QodeCustom43425136
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
            {/* name="Buttons" id="1510:57376" type="FRAME" */}
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
              {/* name="Button" id="1510:57377" type="INSTANCE" */}
              <QodeCustom151055473
                style={{
                  ...{
                    display: "flex",
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
              {/* name="Button" id="1510:57378" type="INSTANCE" */}
              <QodeCustom151055469
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
      {/* id="1510:57367" */}
      {`${items}` === `3` && (
        <>
          {/* name="items=3" id="1510:57367" type="COMPONENT" */}
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
            {/* name="Search bar" id="1510:57379" type="INSTANCE" */}
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
                  border: "1px solid var(--border-border-neutral-30, #d5d5d5)",
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
            {/* name="body" id="1510:57380" type="FRAME" */}
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
              {/* name="_Dropdown/Item" id="1510:57381" type="INSTANCE" */}
              <QodeCustom43425136
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
              {/* name="_Dropdown/Item" id="1510:57382" type="INSTANCE" */}
              <QodeCustom43425136
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
              {/* name="_Dropdown/Item" id="1510:57383" type="INSTANCE" */}
              <QodeCustom43425136
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
            {/* name="Buttons" id="1510:57384" type="FRAME" */}
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
              {/* name="Button" id="1510:57385" type="INSTANCE" */}
              <QodeCustom151055473
                style={{
                  ...{
                    display: "flex",
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
              {/* name="Button" id="1510:57386" type="INSTANCE" */}
              <QodeCustom151055469
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
      {/* id="1510:57368" */}
      {`${items}` === `4` && (
        <>
          {/* name="items=4" id="1510:57368" type="COMPONENT" */}
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
            {/* name="Search bar" id="1510:57387" type="INSTANCE" */}
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
                  border: "1px solid var(--border-border-neutral-30, #d5d5d5)",
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
            {/* name="body" id="1510:57388" type="FRAME" */}
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
              {/* name="_Dropdown/Item" id="1510:57389" type="INSTANCE" */}
              <QodeCustom43425136
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
              {/* name="_Dropdown/Item" id="1510:57390" type="INSTANCE" */}
              <QodeCustom43425136
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
              {/* name="_Dropdown/Item" id="1510:57391" type="INSTANCE" */}
              <QodeCustom43425136
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
              {/* name="_Dropdown/Item" id="1510:57392" type="INSTANCE" */}
              <QodeCustom43425136
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
            {/* name="Buttons" id="1510:57393" type="FRAME" */}
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
              {/* name="Button" id="1510:57394" type="INSTANCE" */}
              <QodeCustom151055473
                style={{
                  ...{
                    display: "flex",
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
              {/* name="Button" id="1510:57395" type="INSTANCE" */}
              <QodeCustom151055469
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
      {/* id="1510:57369" */}
      {`${items}` === `5` && (
        <>
          {/* name="items=5" id="1510:57369" type="COMPONENT" */}
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
            {/* name="Search bar" id="1510:57396" type="INSTANCE" */}
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
                  border: "1px solid var(--border-border-neutral-30, #d5d5d5)",
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
            {/* name="body" id="1510:57397" type="FRAME" */}
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
              {/* name="_Dropdown/Item" id="1510:57398" type="INSTANCE" */}
              <QodeCustom43425136
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
              {/* name="_Dropdown/Item" id="1510:57399" type="INSTANCE" */}
              <QodeCustom43425136
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
              {/* name="_Dropdown/Item" id="1510:57400" type="INSTANCE" */}
              <QodeCustom43425136
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
              {/* name="_Dropdown/Item" id="1510:57401" type="INSTANCE" */}
              <QodeCustom43425136
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
              {/* name="_Dropdown/Item" id="1510:57402" type="INSTANCE" */}
              <QodeCustom43425136
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
            {/* name="Buttons" id="1510:57403" type="FRAME" */}
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
              {/* name="Button" id="1510:57404" type="INSTANCE" */}
              <QodeCustom151055473
                style={{
                  ...{
                    display: "flex",
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
              {/* name="Button" id="1510:57405" type="INSTANCE" */}
              <QodeCustom151055469
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
      {/* id="1510:57370" */}
      {`${items}` === `6` && (
        <>
          {/* name="items=6" id="1510:57370" type="COMPONENT" */}
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
            {/* name="Search bar" id="1510:57406" type="INSTANCE" */}
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
                  border: "1px solid var(--border-border-neutral-30, #d5d5d5)",
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
            {/* name="body" id="1510:57407" type="FRAME" */}
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
              {/* name="_Dropdown/Item" id="1510:57408" type="INSTANCE" */}
              <QodeCustom43425136
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
              {/* name="_Dropdown/Item" id="1510:57409" type="INSTANCE" */}
              <QodeCustom43425136
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
              {/* name="_Dropdown/Item" id="1510:57410" type="INSTANCE" */}
              <QodeCustom43425136
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
              {/* name="_Dropdown/Item" id="1510:57411" type="INSTANCE" */}
              <QodeCustom43425136
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
              {/* name="_Dropdown/Item" id="1510:57412" type="INSTANCE" */}
              <QodeCustom43425136
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
              {/* name="_Dropdown/Item" id="1510:57413" type="INSTANCE" */}
              <QodeCustom43425136
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
            {/* name="Buttons" id="1510:57414" type="FRAME" */}
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
              {/* name="Button" id="1510:57415" type="INSTANCE" */}
              <QodeCustom151055473
                style={{
                  ...{
                    display: "flex",
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
              {/* name="Button" id="1510:57416" type="INSTANCE" */}
              <QodeCustom151055469
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
      {/* id="1510:57371" */}
      {`${items}` === `7` && (
        <>
          {/* name="items=7" id="1510:57371" type="COMPONENT" */}
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
            {/* name="Search bar" id="1510:57417" type="INSTANCE" */}
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
                  border: "1px solid var(--border-border-neutral-30, #d5d5d5)",
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
            {/* name="body" id="1510:57418" type="FRAME" */}
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
              {/* name="_Dropdown/Item" id="1510:57419" type="INSTANCE" */}
              <QodeCustom43425136
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
              {/* name="_Dropdown/Item" id="1510:57420" type="INSTANCE" */}
              <QodeCustom43425136
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
              {/* name="_Dropdown/Item" id="1510:57421" type="INSTANCE" */}
              <QodeCustom43425136
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
              {/* name="_Dropdown/Item" id="1510:57422" type="INSTANCE" */}
              <QodeCustom43425136
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
              {/* name="_Dropdown/Item" id="1510:57423" type="INSTANCE" */}
              <QodeCustom43425136
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
              {/* name="_Dropdown/Item" id="1510:57424" type="INSTANCE" */}
              <QodeCustom43425136
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
              {/* name="_Dropdown/Item" id="1510:57425" type="INSTANCE" */}
              <QodeCustom43425136
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
              {/* name="_Dropdown/Item" id="1510:57426" type="INSTANCE" */}
              <QodeCustom43425136
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
            {/* name="Buttons" id="1510:57427" type="FRAME" */}
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
              {/* name="Button" id="1510:57428" type="INSTANCE" */}
              <QodeCustom151055473
                style={{
                  ...{
                    display: "flex",
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
              {/* name="Button" id="1510:57429" type="INSTANCE" */}
              <QodeCustom151055469
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
