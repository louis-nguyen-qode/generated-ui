// id="607:40515"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeInput } from "@designSystem/ant/QodeInput"
import { QodeCustom18912628 } from "@designSystem/custom/QodeCustom18912628"
import { QodeButton } from "@designSystem/ant/QodeButton"

export interface QodeCustom60740515Props {
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

export const QodeCustom60740515: React.FC<
  QodeCustom60740515Props & { style?: CSSProperties }
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
  ...rest
}) => {
  return (
    <>
      {/* name=".dropdown__menu" id="607:40515" type="COMPONENT_SET" */}
      {/* id="607:40516" */}
      {`${items}` === `2` && (
        <>
          {/* name="items=2" id="607:40516" type="COMPONENT" */}
          <div
            style={{
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
            }}
          >
            {/* name="Search bar" id="607:40522" type="INSTANCE" */}
            <QodeInput
              style={{
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
              }}
              {...{
                suffix: "SUF",
                title: "Input",
                prefix: "PRE",
                iconRight: <Icon.QodeUser />,
                iconLeft: "630:12011",
                showIconLeft: true,
                state: "default",
                status: "default",
                size: "default",
              }}
            />
            {/* name="body" id="607:40523" type="FRAME" */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              {/* name="_Dropdown/Item" id="607:40524" type="INSTANCE" */}
              <QodeCustom18912628
                style={{
                  display: "flex",
                  width: "200px",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px 12px",
                  alignItems: "center",
                  gap: "8px",
                  borderRadius: "var(--style-radius-borderradiussm, 6px)",
                }}
                {...{
                  title: "Dropdown Item",
                  icon: <Icon.QodeUser />,
                  state: "default",
                  danger: false,
                }}
              />
              {/* name="_Dropdown/Item" id="607:40525" type="INSTANCE" */}
              <QodeCustom18912628
                style={{
                  display: "flex",
                  width: "200px",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px 12px",
                  alignItems: "center",
                  gap: "8px",
                  borderRadius: "var(--style-radius-borderradiussm, 6px)",
                }}
                {...{
                  title: "Dropdown Item",
                  icon: <Icon.QodeUser />,
                  state: "default",
                  danger: false,
                }}
              />
            </div>
            {/* name="Buttons" id="607:40526" type="FRAME" */}
            <div
              style={{
                display: "flex",
                paddingTop: "var(--size-padding-paddingsm, 12px)",
                justifyContent: "flex-end",
                alignItems: "center",
                gap: "3px",
                alignSelf: "stretch",
                borderTop:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
              }}
            >
              {/* name="Button" id="607:40527" type="INSTANCE" */}
              <QodeButton
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "4px 8px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "4px",
                  borderRadius: "var(--border-radius-rounded, 999px)",
                }}
                {...{
                  selectIconRight: <Icon.QodeMagnifyingGlass />,
                  onlyIcon: <Icon.QodeMagnifyingGlass />,
                  buttonname: "Reset",
                  selectIconLeft: <Icon.QodeIcons />,
                  type: "link",
                  size: "small",
                  state: "default",
                  content: "default",
                  danger: false,
                  ghost: false,
                }}
              />
              {/* name="Button" id="607:40528" type="INSTANCE" */}
              <QodeButton
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "4px 8px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "4px",
                  borderRadius: "var(--border-radius-rounded, 999px)",
                  border: "1px solid var(--border-border-primary-30, #107ecc)",
                  background: "var(--background-bg-primary, #1597f4)",
                }}
                {...{
                  onlyIcon: <Icon.QodeMagnifyingGlass />,
                  selectIconRight: <Icon.QodeMagnifyingGlass />,
                  buttonname: "Show Results",
                  selectIconLeft: <Icon.QodeIcons />,
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
      {/* id="607:40517" */}
      {`${items}` === `3` && (
        <>
          {/* name="items=3" id="607:40517" type="COMPONENT" */}
          <div
            style={{
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
            }}
          >
            {/* name="Search bar" id="607:40529" type="INSTANCE" */}
            <QodeInput
              style={{
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
              }}
              {...{
                suffix: "SUF",
                title: "Input",
                prefix: "PRE",
                iconRight: <Icon.QodeUser />,
                iconLeft: "630:12011",
                showIconLeft: true,
                state: "default",
                status: "default",
                size: "default",
              }}
            />
            {/* name="body" id="607:40530" type="FRAME" */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              {/* name="_Dropdown/Item" id="607:40531" type="INSTANCE" */}
              <QodeCustom18912628
                style={{
                  display: "flex",
                  width: "200px",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px 12px",
                  alignItems: "center",
                  gap: "8px",
                  borderRadius: "var(--style-radius-borderradiussm, 6px)",
                }}
                {...{
                  title: "Dropdown Item",
                  icon: <Icon.QodeUser />,
                  state: "default",
                  danger: false,
                }}
              />
              {/* name="_Dropdown/Item" id="607:40532" type="INSTANCE" */}
              <QodeCustom18912628
                style={{
                  display: "flex",
                  width: "200px",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px 12px",
                  alignItems: "center",
                  gap: "8px",
                  borderRadius: "var(--style-radius-borderradiussm, 6px)",
                }}
                {...{
                  title: "Dropdown Item",
                  icon: <Icon.QodeUser />,
                  state: "default",
                  danger: false,
                }}
              />
              {/* name="_Dropdown/Item" id="607:40533" type="INSTANCE" */}
              <QodeCustom18912628
                style={{
                  display: "flex",
                  width: "200px",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px 12px",
                  alignItems: "center",
                  gap: "8px",
                  borderRadius: "var(--style-radius-borderradiussm, 6px)",
                }}
                {...{
                  title: "Dropdown Item",
                  icon: <Icon.QodeUser />,
                  state: "default",
                  danger: false,
                }}
              />
            </div>
            {/* name="Buttons" id="607:40534" type="FRAME" */}
            <div
              style={{
                display: "flex",
                paddingTop: "var(--size-padding-paddingsm, 12px)",
                justifyContent: "flex-end",
                alignItems: "center",
                gap: "3px",
                alignSelf: "stretch",
                borderTop:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
              }}
            >
              {/* name="Button" id="607:40535" type="INSTANCE" */}
              <QodeButton
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "4px 8px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "4px",
                  borderRadius: "var(--border-radius-rounded, 999px)",
                }}
                {...{
                  selectIconRight: <Icon.QodeMagnifyingGlass />,
                  onlyIcon: <Icon.QodeMagnifyingGlass />,
                  buttonname: "Reset",
                  selectIconLeft: <Icon.QodeIcons />,
                  type: "link",
                  size: "small",
                  state: "default",
                  content: "default",
                  danger: false,
                  ghost: false,
                }}
              />
              {/* name="Button" id="607:40536" type="INSTANCE" */}
              <QodeButton
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "4px 8px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "4px",
                  borderRadius: "var(--border-radius-rounded, 999px)",
                  border: "1px solid var(--border-border-primary-30, #107ecc)",
                  background: "var(--background-bg-primary, #1597f4)",
                }}
                {...{
                  onlyIcon: <Icon.QodeMagnifyingGlass />,
                  selectIconRight: <Icon.QodeMagnifyingGlass />,
                  buttonname: "Show Results",
                  selectIconLeft: <Icon.QodeIcons />,
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
      {/* id="607:40518" */}
      {`${items}` === `4` && (
        <>
          {/* name="items=4" id="607:40518" type="COMPONENT" */}
          <div
            style={{
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
            }}
          >
            {/* name="Search bar" id="607:40537" type="INSTANCE" */}
            <QodeInput
              style={{
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
              }}
              {...{
                suffix: "SUF",
                title: "Input",
                prefix: "PRE",
                iconRight: <Icon.QodeUser />,
                iconLeft: "630:12011",
                showIconLeft: true,
                state: "default",
                status: "default",
                size: "default",
              }}
            />
            {/* name="body" id="607:40538" type="FRAME" */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              {/* name="_Dropdown/Item" id="607:40539" type="INSTANCE" */}
              <QodeCustom18912628
                style={{
                  display: "flex",
                  width: "200px",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px 12px",
                  alignItems: "center",
                  gap: "8px",
                  borderRadius: "var(--style-radius-borderradiussm, 6px)",
                }}
                {...{
                  title: "Dropdown Item",
                  icon: <Icon.QodeUser />,
                  state: "default",
                  danger: false,
                }}
              />
              {/* name="_Dropdown/Item" id="607:40540" type="INSTANCE" */}
              <QodeCustom18912628
                style={{
                  display: "flex",
                  width: "200px",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px 12px",
                  alignItems: "center",
                  gap: "8px",
                  borderRadius: "var(--style-radius-borderradiussm, 6px)",
                }}
                {...{
                  title: "Dropdown Item",
                  icon: <Icon.QodeUser />,
                  state: "default",
                  danger: false,
                }}
              />
              {/* name="_Dropdown/Item" id="607:40541" type="INSTANCE" */}
              <QodeCustom18912628
                style={{
                  display: "flex",
                  width: "200px",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px 12px",
                  alignItems: "center",
                  gap: "8px",
                  borderRadius: "var(--style-radius-borderradiussm, 6px)",
                }}
                {...{
                  title: "Dropdown Item",
                  icon: <Icon.QodeUser />,
                  state: "default",
                  danger: false,
                }}
              />
              {/* name="_Dropdown/Item" id="607:40542" type="INSTANCE" */}
              <QodeCustom18912628
                style={{
                  display: "flex",
                  width: "200px",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px 12px",
                  alignItems: "center",
                  gap: "8px",
                  borderRadius: "var(--style-radius-borderradiussm, 6px)",
                }}
                {...{
                  title: "Dropdown Item",
                  icon: <Icon.QodeUser />,
                  state: "default",
                  danger: false,
                }}
              />
            </div>
            {/* name="Buttons" id="607:40543" type="FRAME" */}
            <div
              style={{
                display: "flex",
                paddingTop: "var(--size-padding-paddingsm, 12px)",
                justifyContent: "flex-end",
                alignItems: "center",
                gap: "3px",
                alignSelf: "stretch",
                borderTop:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
              }}
            >
              {/* name="Button" id="607:40544" type="INSTANCE" */}
              <QodeButton
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "4px 8px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "4px",
                  borderRadius: "var(--border-radius-rounded, 999px)",
                }}
                {...{
                  selectIconRight: <Icon.QodeMagnifyingGlass />,
                  onlyIcon: <Icon.QodeMagnifyingGlass />,
                  buttonname: "Reset",
                  selectIconLeft: <Icon.QodeIcons />,
                  type: "link",
                  size: "small",
                  state: "default",
                  content: "default",
                  danger: false,
                  ghost: false,
                }}
              />
              {/* name="Button" id="607:40545" type="INSTANCE" */}
              <QodeButton
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "4px 8px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "4px",
                  borderRadius: "var(--border-radius-rounded, 999px)",
                  border: "1px solid var(--border-border-primary-30, #107ecc)",
                  background: "var(--background-bg-primary, #1597f4)",
                }}
                {...{
                  onlyIcon: <Icon.QodeMagnifyingGlass />,
                  selectIconRight: <Icon.QodeMagnifyingGlass />,
                  buttonname: "Show Results",
                  selectIconLeft: <Icon.QodeIcons />,
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
      {/* id="607:40519" */}
      {`${items}` === `5` && (
        <>
          {/* name="items=5" id="607:40519" type="COMPONENT" */}
          <div
            style={{
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
            }}
          >
            {/* name="Search bar" id="607:40546" type="INSTANCE" */}
            <QodeInput
              style={{
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
              }}
              {...{
                suffix: "SUF",
                title: "Input",
                prefix: "PRE",
                iconRight: <Icon.QodeUser />,
                iconLeft: "630:12011",
                showIconLeft: true,
                state: "default",
                status: "default",
                size: "default",
              }}
            />
            {/* name="body" id="607:40547" type="FRAME" */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              {/* name="_Dropdown/Item" id="607:40548" type="INSTANCE" */}
              <QodeCustom18912628
                style={{
                  display: "flex",
                  width: "200px",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px 12px",
                  alignItems: "center",
                  gap: "8px",
                  borderRadius: "var(--style-radius-borderradiussm, 6px)",
                }}
                {...{
                  title: "Dropdown Item",
                  icon: <Icon.QodeUser />,
                  state: "default",
                  danger: false,
                }}
              />
              {/* name="_Dropdown/Item" id="607:40549" type="INSTANCE" */}
              <QodeCustom18912628
                style={{
                  display: "flex",
                  width: "200px",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px 12px",
                  alignItems: "center",
                  gap: "8px",
                  borderRadius: "var(--style-radius-borderradiussm, 6px)",
                }}
                {...{
                  title: "Dropdown Item",
                  icon: <Icon.QodeUser />,
                  state: "default",
                  danger: false,
                }}
              />
              {/* name="_Dropdown/Item" id="607:40550" type="INSTANCE" */}
              <QodeCustom18912628
                style={{
                  display: "flex",
                  width: "200px",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px 12px",
                  alignItems: "center",
                  gap: "8px",
                  borderRadius: "var(--style-radius-borderradiussm, 6px)",
                }}
                {...{
                  title: "Dropdown Item",
                  icon: <Icon.QodeUser />,
                  state: "default",
                  danger: false,
                }}
              />
              {/* name="_Dropdown/Item" id="607:40551" type="INSTANCE" */}
              <QodeCustom18912628
                style={{
                  display: "flex",
                  width: "200px",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px 12px",
                  alignItems: "center",
                  gap: "8px",
                  borderRadius: "var(--style-radius-borderradiussm, 6px)",
                }}
                {...{
                  title: "Dropdown Item",
                  icon: <Icon.QodeUser />,
                  state: "default",
                  danger: false,
                }}
              />
              {/* name="_Dropdown/Item" id="607:40552" type="INSTANCE" */}
              <QodeCustom18912628
                style={{
                  display: "flex",
                  width: "200px",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px 12px",
                  alignItems: "center",
                  gap: "8px",
                  borderRadius: "var(--style-radius-borderradiussm, 6px)",
                }}
                {...{
                  title: "Dropdown Item",
                  icon: <Icon.QodeUser />,
                  state: "default",
                  danger: false,
                }}
              />
            </div>
            {/* name="Buttons" id="607:40553" type="FRAME" */}
            <div
              style={{
                display: "flex",
                paddingTop: "var(--size-padding-paddingsm, 12px)",
                justifyContent: "flex-end",
                alignItems: "center",
                gap: "3px",
                alignSelf: "stretch",
                borderTop:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
              }}
            >
              {/* name="Button" id="607:40554" type="INSTANCE" */}
              <QodeButton
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "4px 8px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "4px",
                  borderRadius: "var(--border-radius-rounded, 999px)",
                }}
                {...{
                  selectIconRight: <Icon.QodeMagnifyingGlass />,
                  onlyIcon: <Icon.QodeMagnifyingGlass />,
                  buttonname: "Reset",
                  selectIconLeft: <Icon.QodeIcons />,
                  type: "link",
                  size: "small",
                  state: "default",
                  content: "default",
                  danger: false,
                  ghost: false,
                }}
              />
              {/* name="Button" id="607:40555" type="INSTANCE" */}
              <QodeButton
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "4px 8px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "4px",
                  borderRadius: "var(--border-radius-rounded, 999px)",
                  border: "1px solid var(--border-border-primary-30, #107ecc)",
                  background: "var(--background-bg-primary, #1597f4)",
                }}
                {...{
                  onlyIcon: <Icon.QodeMagnifyingGlass />,
                  selectIconRight: <Icon.QodeMagnifyingGlass />,
                  buttonname: "Show Results",
                  selectIconLeft: <Icon.QodeIcons />,
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
      {/* id="607:40520" */}
      {`${items}` === `6` && (
        <>
          {/* name="items=6" id="607:40520" type="COMPONENT" */}
          <div
            style={{
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
            }}
          >
            {/* name="Search bar" id="607:40556" type="INSTANCE" */}
            <QodeInput
              style={{
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
              }}
              {...{
                suffix: "SUF",
                title: "Input",
                prefix: "PRE",
                iconRight: <Icon.QodeUser />,
                iconLeft: "630:12011",
                showIconLeft: true,
                state: "default",
                status: "default",
                size: "default",
              }}
            />
            {/* name="body" id="607:40557" type="FRAME" */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              {/* name="_Dropdown/Item" id="607:40558" type="INSTANCE" */}
              <QodeCustom18912628
                style={{
                  display: "flex",
                  width: "200px",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px 12px",
                  alignItems: "center",
                  gap: "8px",
                  borderRadius: "var(--style-radius-borderradiussm, 6px)",
                }}
                {...{
                  title: "Dropdown Item",
                  icon: <Icon.QodeUser />,
                  state: "default",
                  danger: false,
                }}
              />
              {/* name="_Dropdown/Item" id="607:40559" type="INSTANCE" */}
              <QodeCustom18912628
                style={{
                  display: "flex",
                  width: "200px",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px 12px",
                  alignItems: "center",
                  gap: "8px",
                  borderRadius: "var(--style-radius-borderradiussm, 6px)",
                }}
                {...{
                  title: "Dropdown Item",
                  icon: <Icon.QodeUser />,
                  state: "default",
                  danger: false,
                }}
              />
              {/* name="_Dropdown/Item" id="607:40560" type="INSTANCE" */}
              <QodeCustom18912628
                style={{
                  display: "flex",
                  width: "200px",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px 12px",
                  alignItems: "center",
                  gap: "8px",
                  borderRadius: "var(--style-radius-borderradiussm, 6px)",
                }}
                {...{
                  title: "Dropdown Item",
                  icon: <Icon.QodeUser />,
                  state: "default",
                  danger: false,
                }}
              />
              {/* name="_Dropdown/Item" id="607:40561" type="INSTANCE" */}
              <QodeCustom18912628
                style={{
                  display: "flex",
                  width: "200px",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px 12px",
                  alignItems: "center",
                  gap: "8px",
                  borderRadius: "var(--style-radius-borderradiussm, 6px)",
                }}
                {...{
                  title: "Dropdown Item",
                  icon: <Icon.QodeUser />,
                  state: "default",
                  danger: false,
                }}
              />
              {/* name="_Dropdown/Item" id="607:40562" type="INSTANCE" */}
              <QodeCustom18912628
                style={{
                  display: "flex",
                  width: "200px",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px 12px",
                  alignItems: "center",
                  gap: "8px",
                  borderRadius: "var(--style-radius-borderradiussm, 6px)",
                }}
                {...{
                  title: "Dropdown Item",
                  icon: <Icon.QodeUser />,
                  state: "default",
                  danger: false,
                }}
              />
              {/* name="_Dropdown/Item" id="607:40563" type="INSTANCE" */}
              <QodeCustom18912628
                style={{
                  display: "flex",
                  width: "200px",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px 12px",
                  alignItems: "center",
                  gap: "8px",
                  borderRadius: "var(--style-radius-borderradiussm, 6px)",
                }}
                {...{
                  title: "Dropdown Item",
                  icon: <Icon.QodeUser />,
                  state: "default",
                  danger: false,
                }}
              />
            </div>
            {/* name="Buttons" id="607:40564" type="FRAME" */}
            <div
              style={{
                display: "flex",
                paddingTop: "var(--size-padding-paddingsm, 12px)",
                justifyContent: "flex-end",
                alignItems: "center",
                gap: "3px",
                alignSelf: "stretch",
                borderTop:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
              }}
            >
              {/* name="Button" id="607:40565" type="INSTANCE" */}
              <QodeButton
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "4px 8px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "4px",
                  borderRadius: "var(--border-radius-rounded, 999px)",
                }}
                {...{
                  selectIconRight: <Icon.QodeMagnifyingGlass />,
                  onlyIcon: <Icon.QodeMagnifyingGlass />,
                  buttonname: "Reset",
                  selectIconLeft: <Icon.QodeIcons />,
                  type: "link",
                  size: "small",
                  state: "default",
                  content: "default",
                  danger: false,
                  ghost: false,
                }}
              />
              {/* name="Button" id="607:40566" type="INSTANCE" */}
              <QodeButton
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "4px 8px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "4px",
                  borderRadius: "var(--border-radius-rounded, 999px)",
                  border: "1px solid var(--border-border-primary-30, #107ecc)",
                  background: "var(--background-bg-primary, #1597f4)",
                }}
                {...{
                  onlyIcon: <Icon.QodeMagnifyingGlass />,
                  selectIconRight: <Icon.QodeMagnifyingGlass />,
                  buttonname: "Show Results",
                  selectIconLeft: <Icon.QodeIcons />,
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
      {/* id="607:40521" */}
      {`${items}` === `7` && (
        <>
          {/* name="items=7" id="607:40521" type="COMPONENT" */}
          <div
            style={{
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
            }}
          >
            {/* name="Search bar" id="607:40567" type="INSTANCE" */}
            <QodeInput
              style={{
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
              }}
              {...{
                suffix: "SUF",
                title: "Input",
                prefix: "PRE",
                iconRight: <Icon.QodeUser />,
                iconLeft: "630:12011",
                showIconLeft: true,
                state: "default",
                status: "default",
                size: "default",
              }}
            />
            {/* name="body" id="607:40568" type="FRAME" */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              {/* name="_Dropdown/Item" id="607:40569" type="INSTANCE" */}
              <QodeCustom18912628
                style={{
                  display: "flex",
                  width: "200px",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px 12px",
                  alignItems: "center",
                  gap: "8px",
                  borderRadius: "var(--style-radius-borderradiussm, 6px)",
                }}
                {...{
                  title: "Dropdown Item",
                  icon: <Icon.QodeUser />,
                  state: "default",
                  danger: false,
                }}
              />
              {/* name="_Dropdown/Item" id="607:40570" type="INSTANCE" */}
              <QodeCustom18912628
                style={{
                  display: "flex",
                  width: "200px",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px 12px",
                  alignItems: "center",
                  gap: "8px",
                  borderRadius: "var(--style-radius-borderradiussm, 6px)",
                }}
                {...{
                  title: "Dropdown Item",
                  icon: <Icon.QodeUser />,
                  state: "default",
                  danger: false,
                }}
              />
              {/* name="_Dropdown/Item" id="607:40571" type="INSTANCE" */}
              <QodeCustom18912628
                style={{
                  display: "flex",
                  width: "200px",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px 12px",
                  alignItems: "center",
                  gap: "8px",
                  borderRadius: "var(--style-radius-borderradiussm, 6px)",
                }}
                {...{
                  title: "Dropdown Item",
                  icon: <Icon.QodeUser />,
                  state: "default",
                  danger: false,
                }}
              />
              {/* name="_Dropdown/Item" id="607:40572" type="INSTANCE" */}
              <QodeCustom18912628
                style={{
                  display: "flex",
                  width: "200px",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px 12px",
                  alignItems: "center",
                  gap: "8px",
                  borderRadius: "var(--style-radius-borderradiussm, 6px)",
                }}
                {...{
                  title: "Dropdown Item",
                  icon: <Icon.QodeUser />,
                  state: "default",
                  danger: false,
                }}
              />
              {/* name="_Dropdown/Item" id="607:40573" type="INSTANCE" */}
              <QodeCustom18912628
                style={{
                  display: "flex",
                  width: "200px",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px 12px",
                  alignItems: "center",
                  gap: "8px",
                  borderRadius: "var(--style-radius-borderradiussm, 6px)",
                }}
                {...{
                  title: "Dropdown Item",
                  icon: <Icon.QodeUser />,
                  state: "default",
                  danger: false,
                }}
              />
              {/* name="_Dropdown/Item" id="607:40574" type="INSTANCE" */}
              <QodeCustom18912628
                style={{
                  display: "flex",
                  width: "200px",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px 12px",
                  alignItems: "center",
                  gap: "8px",
                  borderRadius: "var(--style-radius-borderradiussm, 6px)",
                }}
                {...{
                  title: "Dropdown Item",
                  icon: <Icon.QodeUser />,
                  state: "default",
                  danger: false,
                }}
              />
              {/* name="_Dropdown/Item" id="607:40575" type="INSTANCE" */}
              <QodeCustom18912628
                style={{
                  display: "flex",
                  width: "200px",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px 12px",
                  alignItems: "center",
                  gap: "8px",
                  borderRadius: "var(--style-radius-borderradiussm, 6px)",
                }}
                {...{
                  title: "Dropdown Item",
                  icon: <Icon.QodeUser />,
                  state: "default",
                  danger: false,
                }}
              />
              {/* name="_Dropdown/Item" id="607:40576" type="INSTANCE" */}
              <QodeCustom18912628
                style={{
                  display: "flex",
                  width: "200px",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px 12px",
                  alignItems: "center",
                  gap: "8px",
                  borderRadius: "var(--style-radius-borderradiussm, 6px)",
                }}
                {...{
                  title: "Dropdown Item",
                  icon: <Icon.QodeUser />,
                  state: "default",
                  danger: false,
                }}
              />
            </div>
            {/* name="Buttons" id="607:40577" type="FRAME" */}
            <div
              style={{
                display: "flex",
                paddingTop: "var(--size-padding-paddingsm, 12px)",
                justifyContent: "flex-end",
                alignItems: "center",
                gap: "3px",
                alignSelf: "stretch",
                borderTop:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
              }}
            >
              {/* name="Button" id="607:40578" type="INSTANCE" */}
              <QodeButton
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "4px 8px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "4px",
                  borderRadius: "var(--border-radius-rounded, 999px)",
                }}
                {...{
                  selectIconRight: <Icon.QodeMagnifyingGlass />,
                  onlyIcon: <Icon.QodeMagnifyingGlass />,
                  buttonname: "Reset",
                  selectIconLeft: <Icon.QodeIcons />,
                  type: "link",
                  size: "small",
                  state: "default",
                  content: "default",
                  danger: false,
                  ghost: false,
                }}
              />
              {/* name="Button" id="607:40579" type="INSTANCE" */}
              <QodeButton
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "4px 8px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "4px",
                  borderRadius: "var(--border-radius-rounded, 999px)",
                  border: "1px solid var(--border-border-primary-30, #107ecc)",
                  background: "var(--background-bg-primary, #1597f4)",
                }}
                {...{
                  onlyIcon: <Icon.QodeMagnifyingGlass />,
                  selectIconRight: <Icon.QodeMagnifyingGlass />,
                  buttonname: "Show Results",
                  selectIconLeft: <Icon.QodeIcons />,
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
