// id="58:16084"
import React from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom588089 } from "@designSystem/custom/QodeCustom588089"
import { QodeCustom565626441 } from "@designSystem/custom/QodeCustom565626441"
import { QodeButton } from "@designSystem/ant/QodeButton"
import { QodeInputNumber } from "@designSystem/ant/QodeInputNumber"
import { QodeSwitch } from "@designSystem/ant/QodeSwitch"
import { QodeCustom18913734 } from "@designSystem/custom/QodeCustom18913734"
import { QodeCustom18912628 } from "@designSystem/custom/QodeCustom18912628"
import { QodeCustom17024242 } from "@designSystem/custom/QodeCustom17024242"

export interface Qode5816084PageProps {}

export const Qode5816084Page: React.FC<Qode5816084PageProps> = ({
  ...rest
}) => {
  return (
    <>
      {/* name="Search & Filter" id="58:16084" type="SECTION" */}
      <div style={{}}>
        {/* name="Search filter" id="58:15969" type="INSTANCE" */}
        <QodeCustom588089
          style={{
            display: "flex",
            width: "1116px",
            padding: "8px 12px",
            alignItems: "center",
            gap: "8px",
            borderRadius:
              "var(--border-radius-large, 12px) var(--border-radius-large, 12px) 0px 0px",
            border: "1px solid var(--border-border-neutral-30, #d5d5d5)",
            background: "var(--neutral-gray-10, #e3e3e3)",
          }}
          {...{ property_1: "Default" }}
        />
        {/* name="Yoe" id="58:16141" type="FRAME" */}
        <div
          style={{
            display: "flex",
            width: "1124px",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: "18px",
          }}
        >
          {/* name="Search filter" id="58:16024" type="INSTANCE" */}
          <QodeCustom588089
            style={{
              display: "flex",
              padding: "8px 12px",
              alignItems: "center",
              gap: "8px",
              alignSelf: "stretch",
              borderRadius:
                "var(--border-radius-large, 12px) var(--border-radius-large, 12px) 0px 0px",
              border: "1px solid var(--border-border-neutral-30, #d5d5d5)",
              background: "var(--neutral-gray-10, #e3e3e3)",
            }}
            {...{ property_1: "Default" }}
          />
          {/* name="Filter | YoE" id="69:8544" type="FRAME" */}
          <div
            style={{
              display: "flex",
              width: "300px",
              flexDirection: "column",
              alignItems: "flex-start",
              position: "absolute",
              right: "10px",
              bottom: "-273px",
              borderRadius: "12px",
              background: "var(--neutral-white, #fff)",
              boxShadow:
                "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 6px 16px 0px rgba(0, 0, 0, 0.08)",
            }}
          >
            {/* name="Modal/Header" id="69:8545" type="INSTANCE" */}
            <QodeCustom565626441
              style={{
                display: "flex",
                height: "52px",
                padding: "12px 20px",
                justifyContent: "flex-end",
                alignItems: "center",
                gap: "16px",
                alignSelf: "stretch",
                borderBottom:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
              }}
              {...{ size: "md" }}
            />
            {/* name="body" id="69:8546" type="FRAME" */}
            <div
              style={{
                display: "flex",
                padding: "20px",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "13px",
                alignSelf: "stretch",
              }}
            >
              {/* name="R" id="69:8547" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "36px",
                  alignSelf: "stretch",
                }}
              >
                <span
                  style={{
                    flex: "1 0 0",
                    color: "var(--color-neutral-text-colortext, #000)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Min`}</span>
                {/* name="Input" id="69:8549" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  {/* name="Button" id="69:8550" type="INSTANCE" */}
                  <QodeButton
                    style={{
                      display: "flex",
                      height: "var(--size-height-controlheight, 32px)",
                      padding:
                        "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "var(--size-padding-paddingxs, 8px)",
                      borderRadius: "var(--border-radius-rounded, 999px)",
                      border:
                        "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                      background: "var(--background-bg-white, #fff)",
                    }}
                    {...{
                      selectIconRight: <Icon.QodeMagnifyingGlass />,
                      onlyIcon: <Icon.QodeMinus />,
                      buttonname: "Button",
                      selectIconLeft: <Icon.QodeIcons />,
                      type: "default",
                      size: "default",
                      state: "default",
                      content: "icon",
                      danger: false,
                      ghost: false,
                    }}
                  />
                  {/* name="Input/Number" id="69:8551" type="INSTANCE" */}
                  <QodeInputNumber
                    style={{
                      display: "flex",
                      width: "51px",
                      height: "32px",
                      alignItems: "center",
                      borderRadius: "var(--border-radius-base, 8px)",
                      border:
                        "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                      background: "var(--background-bg-white, #fff)",
                    }}
                    {...{
                      number: "5",
                      prefix: "PRE",
                      iconLeft: <Icon.QodeUser />,
                      state: "filled",
                      status: "default",
                      size: "default",
                    }}
                  />
                  {/* name="Button" id="69:8552" type="INSTANCE" */}
                  <QodeButton
                    style={{
                      display: "flex",
                      height: "var(--size-height-controlheight, 32px)",
                      padding:
                        "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "var(--size-padding-paddingxs, 8px)",
                      borderRadius: "var(--border-radius-rounded, 999px)",
                      border:
                        "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                      background: "var(--background-bg-white, #fff)",
                    }}
                    {...{
                      selectIconRight: <Icon.QodeMagnifyingGlass />,
                      onlyIcon: <Icon.QodePlus />,
                      buttonname: "Button",
                      selectIconLeft: <Icon.QodeIcons />,
                      type: "default",
                      size: "default",
                      state: "default",
                      content: "icon",
                      danger: false,
                      ghost: false,
                    }}
                  />
                </div>
              </div>
              {/* name="R" id="69:8553" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "36px",
                  alignSelf: "stretch",
                }}
              >
                <span
                  style={{
                    flex: "1 0 0",
                    color: "var(--color-neutral-text-colortext, #000)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Max`}</span>
                {/* name="Input" id="69:8555" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  {/* name="Button" id="69:8556" type="INSTANCE" */}
                  <QodeButton
                    style={{
                      display: "flex",
                      height: "var(--size-height-controlheight, 32px)",
                      padding:
                        "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "var(--size-padding-paddingxs, 8px)",
                      borderRadius: "var(--border-radius-rounded, 999px)",
                      border:
                        "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                      background: "var(--background-bg-white, #fff)",
                    }}
                    {...{
                      selectIconRight: <Icon.QodeMagnifyingGlass />,
                      onlyIcon: <Icon.QodeMinus />,
                      buttonname: "Button",
                      selectIconLeft: <Icon.QodeIcons />,
                      type: "default",
                      size: "default",
                      state: "default",
                      content: "icon",
                      danger: false,
                      ghost: false,
                    }}
                  />
                  {/* name="Input/Number" id="69:8557" type="INSTANCE" */}
                  <QodeInputNumber
                    style={{
                      display: "flex",
                      width: "51px",
                      height: "32px",
                      alignItems: "center",
                      borderRadius: "var(--border-radius-base, 8px)",
                      border:
                        "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                      background: "var(--background-bg-white, #fff)",
                    }}
                    {...{
                      number: "10",
                      prefix: "PRE",
                      iconLeft: <Icon.QodeUser />,
                      state: "filled",
                      status: "default",
                      size: "default",
                    }}
                  />
                  {/* name="Button" id="69:8558" type="INSTANCE" */}
                  <QodeButton
                    style={{
                      display: "flex",
                      height: "var(--size-height-controlheight, 32px)",
                      padding:
                        "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "var(--size-padding-paddingxs, 8px)",
                      borderRadius: "var(--border-radius-rounded, 999px)",
                      border:
                        "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                      background: "var(--background-bg-white, #fff)",
                    }}
                    {...{
                      selectIconRight: <Icon.QodeMagnifyingGlass />,
                      onlyIcon: <Icon.QodePlus />,
                      buttonname: "Button",
                      selectIconLeft: <Icon.QodeIcons />,
                      type: "default",
                      size: "default",
                      state: "default",
                      content: "icon",
                      danger: false,
                      ghost: false,
                    }}
                  />
                </div>
              </div>
              {/* name="---" id="69:8559" type="LINE" */}
              <Flex
                style={{
                  width: "260px",
                  height: "1px",
                  background: "var(--border-border-neutral-20, #e3e3e3)",
                }}
              >
                {/* name="---" id=69:8559 type=LINE */}
                <></>
              </Flex>
              {/* name="Open to work" id="69:8560" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  alignSelf: "stretch",
                }}
              >
                <span
                  style={{
                    width: "85px",
                    color: "var(--color-neutral-text-colortext, #000)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Open to work`}</span>
                {/* name="Switch" id="69:8562" type="INSTANCE" */}
                <QodeSwitch
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    borderRadius: "999px",
                    background: "var(--text-text-placeholder, #a7a7a7)",
                  }}
                  {...{
                    title: "1",
                    state: "default",
                    active: false,
                    size: "default",
                    content: "none",
                  }}
                />
              </div>
            </div>
            {/* name="Buttons" id="69:8563" type="FRAME" */}
            <div
              style={{
                display: "flex",
                padding: "12px",
                justifyContent: "flex-end",
                alignItems: "center",
                gap: "4px",
                alignSelf: "stretch",
                borderTop:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
              }}
            >
              {/* name="Button" id="69:8564" type="INSTANCE" */}
              <QodeButton
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "4px 16px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "8px",
                  borderRadius: "var(--border-radius-rounded, 999px)",
                }}
                {...{
                  buttonname: "Cancel",
                  selectIconLeft: <Icon.QodeIcons />,
                  onlyIcon: <Icon.QodeMagnifyingGlass />,
                  selectIconRight: <Icon.QodeMagnifyingGlass />,
                  type: "text",
                  size: "default",
                  state: "default",
                  content: "default",
                  danger: false,
                  ghost: false,
                }}
              />
              {/* name="Button" id="69:8565" type="INSTANCE" */}
              <QodeButton
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "4px 16px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "8px",
                  borderRadius: "var(--border-radius-rounded, 999px)",
                  border: "1px solid var(--border-border-primary-30, #107ecc)",
                  background: "var(--background-bg-primary, #1597f4)",
                }}
                {...{
                  onlyIcon: <Icon.QodeMagnifyingGlass />,
                  buttonname: "Show result",
                  selectIconRight: <Icon.QodeMagnifyingGlass />,
                  selectIconLeft: <Icon.QodeIcons />,
                  type: "primary",
                  size: "default",
                  state: "default",
                  content: "default",
                  danger: false,
                  ghost: false,
                }}
              />
            </div>
          </div>
        </div>
        {/* name=".dropdown__menu" id="58:15353" type="INSTANCE" */}
        <QodeCustom18913734
          style={{
            display: "flex",
            width: "666px",
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
          {...{
            item_1: "<QodeCustom18912628 />",
            item_4: "<QodeCustom18912628 />",
            item_2: "<QodeCustom18912628 />",
            item_3: "<QodeCustom18912628 />",
            item_6: "<QodeCustom18912628 />",
            item_7: "<QodeCustom18912628 />",
            item_5: "<QodeCustom18912628 />",
            item_8: "<QodeCustom18912628 />",
            items: "6",
          }}
        />
        {/* name="Input/Select" id="216:20922" type="INSTANCE" */}
        <QodeCustom17024242
          style={{
            display: "flex",
            width: "180px",
            height: "var(--size-height-controlheight, 32px)",
            padding: "0px var(--size-padding-paddingsm, 12px)",
            alignItems: "center",
            gap: "var(--size-padding-paddingxxs, 4px)",
            borderRadius: "var(--border-radius-base, 8px)",
            border:
              "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
            background: "var(--neutral-white, #fff)",
          }}
          {...{
            iconr: true,
            title: "Min 2 YoE",
            state: "filled",
            size: "default",
            type: "basic",
            status: "default",
          }}
        />
        {/* name="Input/Select" id="216:20923" type="INSTANCE" */}
        <QodeCustom17024242
          style={{
            display: "flex",
            width: "180px",
            height: "var(--size-height-controlheight, 32px)",
            padding: "0px var(--size-padding-paddingsm, 12px)",
            alignItems: "center",
            gap: "var(--size-padding-paddingxxs, 4px)",
            borderRadius: "var(--border-radius-base, 8px)",
            border:
              "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
            background: "var(--neutral-white, #fff)",
          }}
          {...{
            iconr: true,
            title: "5–10 YoE",
            state: "filled",
            size: "default",
            type: "basic",
            status: "default",
          }}
        />
        {/* name="Input/Select" id="216:20924" type="INSTANCE" */}
        <QodeCustom17024242
          style={{
            display: "flex",
            width: "180px",
            height: "var(--size-height-controlheight, 32px)",
            padding: "0px var(--size-padding-paddingsm, 12px)",
            alignItems: "center",
            gap: "var(--size-padding-paddingxxs, 4px)",
            borderRadius: "var(--border-radius-base, 8px)",
            border:
              "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
            background: "var(--neutral-white, #fff)",
          }}
          {...{
            iconr: true,
            title: "Max 10 YoE",
            state: "filled",
            size: "default",
            type: "basic",
            status: "default",
          }}
        />
        {/* name="Input/Select" id="216:20925" type="INSTANCE" */}
        <QodeCustom17024242
          style={{
            display: "flex",
            width: "180px",
            height: "var(--size-height-controlheight, 32px)",
            padding: "0px var(--size-padding-paddingsm, 12px)",
            alignItems: "center",
            gap: "var(--size-padding-paddingxxs, 4px)",
            borderRadius: "var(--border-radius-base, 8px)",
            border:
              "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
            background: "var(--neutral-white, #fff)",
          }}
          {...{
            iconr: true,
            title: "Years of Experience",
            state: "default",
            size: "default",
            type: "basic",
            status: "default",
          }}
        />
        {/* name="Filter | YoE | Only min" id="216:20926" type="FRAME" */}
        <div
          style={{
            display: "flex",
            width: "300px",
            flexDirection: "column",
            alignItems: "flex-start",
            borderRadius: "var(--border-radius-base, 8px)",
            background: "var(--neutral-white, #fff)",
            boxShadow:
              "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 6px 16px 0px rgba(0, 0, 0, 0.08)",
          }}
        >
          {/* name="Modal/Header" id="216:20927" type="INSTANCE" */}
          <QodeCustom565626441
            style={{
              display: "flex",
              height: "52px",
              padding: "12px 20px",
              justifyContent: "flex-end",
              alignItems: "center",
              gap: "16px",
              alignSelf: "stretch",
              borderBottom:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
            }}
            {...{ size: "md" }}
          />
          {/* name="body" id="216:20928" type="FRAME" */}
          <div
            style={{
              display: "flex",
              padding: "20px",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "13px",
              alignSelf: "stretch",
            }}
          >
            {/* name="R" id="216:20929" type="FRAME" */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "36px",
                alignSelf: "stretch",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Min`}</span>
              {/* name="Input" id="216:20931" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                {/* name="Button" id="216:20932" type="INSTANCE" */}
                <QodeButton
                  style={{
                    display: "flex",
                    height: "var(--size-height-controlheight, 32px)",
                    padding:
                      "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    borderRadius: "var(--border-radius-rounded, 999px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                    background: "var(--background-bg-white, #fff)",
                  }}
                  {...{
                    selectIconRight: <Icon.QodeMagnifyingGlass />,
                    onlyIcon: <Icon.QodeMinus />,
                    buttonname: "Button",
                    selectIconLeft: <Icon.QodeIcons />,
                    type: "default",
                    size: "default",
                    state: "default",
                    content: "icon",
                    danger: false,
                    ghost: false,
                  }}
                />
                {/* name="Input/Number" id="216:20933" type="INSTANCE" */}
                <QodeInputNumber
                  style={{
                    display: "flex",
                    width: "51px",
                    height: "32px",
                    alignItems: "center",
                    borderRadius: "var(--border-radius-base, 8px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                    background: "var(--background-bg-white, #fff)",
                  }}
                  {...{
                    number: "2",
                    prefix: "PRE",
                    iconLeft: <Icon.QodeUser />,
                    state: "filled",
                    status: "default",
                    size: "default",
                  }}
                />
                {/* name="Button" id="216:20934" type="INSTANCE" */}
                <QodeButton
                  style={{
                    display: "flex",
                    height: "var(--size-height-controlheight, 32px)",
                    padding:
                      "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    borderRadius: "var(--border-radius-rounded, 999px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                    background: "var(--background-bg-white, #fff)",
                  }}
                  {...{
                    selectIconRight: <Icon.QodeMagnifyingGlass />,
                    onlyIcon: <Icon.QodePlus />,
                    buttonname: "Button",
                    selectIconLeft: <Icon.QodeIcons />,
                    type: "default",
                    size: "default",
                    state: "default",
                    content: "icon",
                    danger: false,
                    ghost: false,
                  }}
                />
              </div>
            </div>
            {/* name="R" id="216:20935" type="FRAME" */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "36px",
                alignSelf: "stretch",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Max`}</span>
              {/* name="Input" id="216:20937" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                {/* name="Button" id="216:20938" type="INSTANCE" */}
                <QodeButton
                  style={{
                    display: "flex",
                    height: "var(--size-height-controlheight, 32px)",
                    padding:
                      "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    borderRadius: "var(--border-radius-rounded, 999px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                    background: "var(--background-bg-white, #fff)",
                  }}
                  {...{
                    selectIconRight: <Icon.QodeMagnifyingGlass />,
                    onlyIcon: <Icon.QodeMinus />,
                    buttonname: "Button",
                    selectIconLeft: <Icon.QodeIcons />,
                    type: "default",
                    size: "default",
                    state: "default",
                    content: "icon",
                    danger: false,
                    ghost: false,
                  }}
                />
                {/* name="Input/Number" id="216:20939" type="INSTANCE" */}
                <QodeInputNumber
                  style={{
                    display: "flex",
                    width: "51px",
                    height: "32px",
                    alignItems: "center",
                    borderRadius: "var(--border-radius-base, 8px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                    background: "var(--background-bg-white, #fff)",
                  }}
                  {...{
                    prefix: "PRE",
                    iconLeft: <Icon.QodeUser />,
                    state: "filled",
                    status: "default",
                    size: "default",
                  }}
                />
                {/* name="Button" id="216:20940" type="INSTANCE" */}
                <QodeButton
                  style={{
                    display: "flex",
                    height: "var(--size-height-controlheight, 32px)",
                    padding:
                      "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    borderRadius: "var(--border-radius-rounded, 999px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                    background: "var(--background-bg-white, #fff)",
                  }}
                  {...{
                    selectIconRight: <Icon.QodeMagnifyingGlass />,
                    onlyIcon: <Icon.QodePlus />,
                    buttonname: "Button",
                    selectIconLeft: <Icon.QodeIcons />,
                    type: "default",
                    size: "default",
                    state: "default",
                    content: "icon",
                    danger: false,
                    ghost: false,
                  }}
                />
              </div>
            </div>
            {/* name="---" id="216:20941" type="LINE" */}
            <Flex
              style={{
                width: "260px",
                height: "1px",
                background: "var(--border-border-neutral-20, #e3e3e3)",
              }}
            >
              {/* name="---" id=216:20941 type=LINE */}
              <></>
            </Flex>
            {/* name="Open to work" id="216:20942" type="FRAME" */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                alignSelf: "stretch",
              }}
            >
              <span
                style={{
                  width: "85px",
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Open to work`}</span>
              {/* name="Switch" id="216:20944" type="INSTANCE" */}
              <QodeSwitch
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  borderRadius: "999px",
                  background: "var(--text-text-placeholder, #a7a7a7)",
                }}
                {...{
                  title: "1",
                  state: "default",
                  active: false,
                  size: "default",
                  content: "none",
                }}
              />
            </div>
          </div>
          {/* name="Buttons" id="216:20945" type="FRAME" */}
          <div
            style={{
              display: "flex",
              padding: "12px",
              justifyContent: "flex-end",
              alignItems: "center",
              gap: "4px",
              alignSelf: "stretch",
              borderTop:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
              background: "var(--neutral-gray-5, #f8f6f6)",
            }}
          >
            {/* name="Button" id="216:20946" type="INSTANCE" */}
            <QodeButton
              style={{
                display: "flex",
                height: "var(--size-height-controlheight, 32px)",
                padding: "4px 16px",
                justifyContent: "center",
                alignItems: "center",
                gap: "8px",
                borderRadius: "var(--border-radius-rounded, 999px)",
              }}
              {...{
                buttonname: "Cancel",
                selectIconLeft: <Icon.QodeIcons />,
                onlyIcon: <Icon.QodeMagnifyingGlass />,
                selectIconRight: <Icon.QodeMagnifyingGlass />,
                type: "text",
                size: "default",
                state: "default",
                content: "default",
                danger: false,
                ghost: false,
              }}
            />
            {/* name="Button" id="216:20947" type="INSTANCE" */}
            <QodeButton
              style={{
                display: "flex",
                height: "var(--size-height-controlheight, 32px)",
                padding: "4px 16px",
                justifyContent: "center",
                alignItems: "center",
                gap: "8px",
                borderRadius: "var(--border-radius-rounded, 999px)",
                border: "1px solid var(--border-border-primary-30, #107ecc)",
                background: "var(--background-bg-primary, #1597f4)",
              }}
              {...{
                onlyIcon: <Icon.QodeMagnifyingGlass />,
                buttonname: "Show result",
                selectIconRight: <Icon.QodeMagnifyingGlass />,
                selectIconLeft: <Icon.QodeIcons />,
                type: "primary",
                size: "default",
                state: "default",
                content: "default",
                danger: false,
                ghost: false,
              }}
            />
          </div>
        </div>
        {/* name="Filter | YoE | Min max" id="216:20948" type="FRAME" */}
        <div
          style={{
            display: "flex",
            width: "300px",
            flexDirection: "column",
            alignItems: "flex-start",
            borderRadius: "var(--border-radius-base, 8px)",
            background: "var(--neutral-white, #fff)",
            boxShadow:
              "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 6px 16px 0px rgba(0, 0, 0, 0.08)",
          }}
        >
          {/* name="Modal/Header" id="216:20949" type="INSTANCE" */}
          <QodeCustom565626441
            style={{
              display: "flex",
              height: "52px",
              padding: "12px 20px",
              justifyContent: "flex-end",
              alignItems: "center",
              gap: "16px",
              alignSelf: "stretch",
              borderBottom:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
            }}
            {...{ size: "md" }}
          />
          {/* name="body" id="216:20950" type="FRAME" */}
          <div
            style={{
              display: "flex",
              padding: "20px",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "13px",
              alignSelf: "stretch",
            }}
          >
            {/* name="Frame 37169" id="216:20951" type="FRAME" */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "36px",
                alignSelf: "stretch",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Min`}</span>
              {/* name="Frame 37168" id="216:20953" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                {/* name="Button" id="216:20954" type="INSTANCE" */}
                <QodeButton
                  style={{
                    display: "flex",
                    height: "var(--size-height-controlheight, 32px)",
                    padding:
                      "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    borderRadius: "var(--border-radius-rounded, 999px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                    background: "var(--background-bg-white, #fff)",
                  }}
                  {...{
                    selectIconRight: <Icon.QodeMagnifyingGlass />,
                    onlyIcon: <Icon.QodeMinus />,
                    buttonname: "Button",
                    selectIconLeft: <Icon.QodeIcons />,
                    type: "default",
                    size: "default",
                    state: "default",
                    content: "icon",
                    danger: false,
                    ghost: false,
                  }}
                />
                {/* name="Input/Number" id="216:20955" type="INSTANCE" */}
                <QodeInputNumber
                  style={{
                    display: "flex",
                    width: "51px",
                    height: "32px",
                    alignItems: "center",
                    borderRadius: "var(--border-radius-base, 8px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                    background: "var(--background-bg-white, #fff)",
                  }}
                  {...{
                    number: "5",
                    prefix: "PRE",
                    iconLeft: <Icon.QodeUser />,
                    state: "filled",
                    status: "default",
                    size: "default",
                  }}
                />
                {/* name="Button" id="216:20956" type="INSTANCE" */}
                <QodeButton
                  style={{
                    display: "flex",
                    height: "var(--size-height-controlheight, 32px)",
                    padding:
                      "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    borderRadius: "var(--border-radius-rounded, 999px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                    background: "var(--background-bg-white, #fff)",
                  }}
                  {...{
                    selectIconRight: <Icon.QodeMagnifyingGlass />,
                    onlyIcon: <Icon.QodePlus />,
                    buttonname: "Button",
                    selectIconLeft: <Icon.QodeIcons />,
                    type: "default",
                    size: "default",
                    state: "default",
                    content: "icon",
                    danger: false,
                    ghost: false,
                  }}
                />
              </div>
            </div>
            {/* name="Frame 37170" id="216:20957" type="FRAME" */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "36px",
                alignSelf: "stretch",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Max`}</span>
              {/* name="Frame 37168" id="216:20959" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                {/* name="Button" id="216:20960" type="INSTANCE" */}
                <QodeButton
                  style={{
                    display: "flex",
                    height: "var(--size-height-controlheight, 32px)",
                    padding:
                      "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    borderRadius: "var(--border-radius-rounded, 999px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                    background: "var(--background-bg-white, #fff)",
                  }}
                  {...{
                    selectIconRight: <Icon.QodeMagnifyingGlass />,
                    onlyIcon: <Icon.QodeMinus />,
                    buttonname: "Button",
                    selectIconLeft: <Icon.QodeIcons />,
                    type: "default",
                    size: "default",
                    state: "default",
                    content: "icon",
                    danger: false,
                    ghost: false,
                  }}
                />
                {/* name="Input/Number" id="216:20961" type="INSTANCE" */}
                <QodeInputNumber
                  style={{
                    display: "flex",
                    width: "51px",
                    height: "32px",
                    alignItems: "center",
                    borderRadius: "var(--border-radius-base, 8px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                    background: "var(--background-bg-white, #fff)",
                  }}
                  {...{
                    number: "10",
                    prefix: "PRE",
                    iconLeft: <Icon.QodeUser />,
                    state: "filled",
                    status: "default",
                    size: "default",
                  }}
                />
                {/* name="Button" id="216:20962" type="INSTANCE" */}
                <QodeButton
                  style={{
                    display: "flex",
                    height: "var(--size-height-controlheight, 32px)",
                    padding:
                      "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    borderRadius: "var(--border-radius-rounded, 999px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                    background: "var(--background-bg-white, #fff)",
                  }}
                  {...{
                    selectIconRight: <Icon.QodeMagnifyingGlass />,
                    onlyIcon: <Icon.QodePlus />,
                    buttonname: "Button",
                    selectIconLeft: <Icon.QodeIcons />,
                    type: "default",
                    size: "default",
                    state: "default",
                    content: "icon",
                    danger: false,
                    ghost: false,
                  }}
                />
              </div>
            </div>
            {/* name="Line 8" id="216:20963" type="LINE" */}
            <Flex
              style={{ width: "260px", height: "1px", background: "#E2E2E2" }}
            >
              {/* name="Line 8" id=216:20963 type=LINE */}
              <></>
            </Flex>
            {/* name="Open to work" id="216:20964" type="FRAME" */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                alignSelf: "stretch",
              }}
            >
              <span
                style={{
                  width: "85px",
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Open to work`}</span>
              {/* name="Switch" id="216:20966" type="INSTANCE" */}
              <QodeSwitch
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  borderRadius: "999px",
                  background: "var(--text-text-placeholder, #a7a7a7)",
                }}
                {...{
                  title: "1",
                  state: "default",
                  active: false,
                  size: "default",
                  content: "none",
                }}
              />
            </div>
          </div>
          {/* name="Buttons" id="216:20967" type="FRAME" */}
          <div
            style={{
              display: "flex",
              padding: "12px",
              justifyContent: "flex-end",
              alignItems: "center",
              gap: "3px",
              alignSelf: "stretch",
              borderTop:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
              background: "var(--neutral-gray-5, #f8f6f6)",
            }}
          >
            {/* name="Button" id="216:20968" type="INSTANCE" */}
            <QodeButton
              style={{
                display: "flex",
                height: "var(--size-height-controlheight, 32px)",
                padding: "4px 16px",
                justifyContent: "center",
                alignItems: "center",
                gap: "8px",
                borderRadius: "var(--border-radius-rounded, 999px)",
              }}
              {...{
                buttonname: "Cancel",
                selectIconLeft: <Icon.QodeIcons />,
                onlyIcon: <Icon.QodeMagnifyingGlass />,
                selectIconRight: <Icon.QodeMagnifyingGlass />,
                type: "text",
                size: "default",
                state: "default",
                content: "default",
                danger: false,
                ghost: false,
              }}
            />
            {/* name="Button" id="216:20969" type="INSTANCE" */}
            <QodeButton
              style={{
                display: "flex",
                height: "var(--size-height-controlheight, 32px)",
                padding: "4px 16px",
                justifyContent: "center",
                alignItems: "center",
                gap: "8px",
                borderRadius: "var(--border-radius-rounded, 999px)",
                border: "1px solid var(--border-border-primary-30, #107ecc)",
                background: "var(--background-bg-primary, #1597f4)",
              }}
              {...{
                onlyIcon: <Icon.QodeMagnifyingGlass />,
                buttonname: "Show result",
                selectIconRight: <Icon.QodeMagnifyingGlass />,
                selectIconLeft: <Icon.QodeIcons />,
                type: "primary",
                size: "default",
                state: "default",
                content: "default",
                danger: false,
                ghost: false,
              }}
            />
          </div>
        </div>
        {/* name="Filter | YoE | Only max" id="216:20970" type="FRAME" */}
        <div
          style={{
            display: "flex",
            width: "300px",
            flexDirection: "column",
            alignItems: "flex-start",
            borderRadius: "var(--border-radius-base, 8px)",
            background: "var(--neutral-white, #fff)",
            boxShadow:
              "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 6px 16px 0px rgba(0, 0, 0, 0.08)",
          }}
        >
          {/* name="Modal/Header" id="216:20971" type="INSTANCE" */}
          <QodeCustom565626441
            style={{
              display: "flex",
              height: "52px",
              padding: "12px 20px",
              justifyContent: "flex-end",
              alignItems: "center",
              gap: "16px",
              alignSelf: "stretch",
              borderBottom:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
            }}
            {...{ size: "md" }}
          />
          {/* name="body" id="216:20972" type="FRAME" */}
          <div
            style={{
              display: "flex",
              padding: "20px",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "13px",
              alignSelf: "stretch",
            }}
          >
            {/* name="Frame 37169" id="216:20973" type="FRAME" */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "36px",
                alignSelf: "stretch",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Min`}</span>
              {/* name="Frame 37168" id="216:20975" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                {/* name="Button" id="216:20976" type="INSTANCE" */}
                <QodeButton
                  style={{
                    display: "flex",
                    height: "var(--size-height-controlheight, 32px)",
                    padding:
                      "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    borderRadius: "var(--border-radius-rounded, 999px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                    background: "var(--background-bg-white, #fff)",
                  }}
                  {...{
                    selectIconRight: <Icon.QodeMagnifyingGlass />,
                    onlyIcon: <Icon.QodeMinus />,
                    buttonname: "Button",
                    selectIconLeft: <Icon.QodeIcons />,
                    type: "default",
                    size: "default",
                    state: "default",
                    content: "icon",
                    danger: false,
                    ghost: false,
                  }}
                />
                {/* name="Input/Number" id="216:20977" type="INSTANCE" */}
                <QodeInputNumber
                  style={{
                    display: "flex",
                    width: "51px",
                    height: "32px",
                    alignItems: "center",
                    borderRadius: "var(--border-radius-base, 8px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                    background: "var(--background-bg-white, #fff)",
                  }}
                  {...{
                    prefix: "PRE",
                    iconLeft: <Icon.QodeUser />,
                    state: "filled",
                    status: "default",
                    size: "default",
                  }}
                />
                {/* name="Button" id="216:20978" type="INSTANCE" */}
                <QodeButton
                  style={{
                    display: "flex",
                    height: "var(--size-height-controlheight, 32px)",
                    padding:
                      "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    borderRadius: "var(--border-radius-rounded, 999px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                    background: "var(--background-bg-white, #fff)",
                  }}
                  {...{
                    selectIconRight: <Icon.QodeMagnifyingGlass />,
                    onlyIcon: <Icon.QodePlus />,
                    buttonname: "Button",
                    selectIconLeft: <Icon.QodeIcons />,
                    type: "default",
                    size: "default",
                    state: "default",
                    content: "icon",
                    danger: false,
                    ghost: false,
                  }}
                />
              </div>
            </div>
            {/* name="Frame 37170" id="216:20979" type="FRAME" */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "36px",
                alignSelf: "stretch",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Max`}</span>
              {/* name="Frame 37168" id="216:20981" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                {/* name="Button" id="216:20982" type="INSTANCE" */}
                <QodeButton
                  style={{
                    display: "flex",
                    height: "var(--size-height-controlheight, 32px)",
                    padding:
                      "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    borderRadius: "var(--border-radius-rounded, 999px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                    background: "var(--background-bg-white, #fff)",
                  }}
                  {...{
                    selectIconRight: <Icon.QodeMagnifyingGlass />,
                    onlyIcon: <Icon.QodeMinus />,
                    buttonname: "Button",
                    selectIconLeft: <Icon.QodeIcons />,
                    type: "default",
                    size: "default",
                    state: "default",
                    content: "icon",
                    danger: false,
                    ghost: false,
                  }}
                />
                {/* name="Input/Number" id="216:20983" type="INSTANCE" */}
                <QodeInputNumber
                  style={{
                    display: "flex",
                    width: "51px",
                    height: "32px",
                    alignItems: "center",
                    borderRadius: "var(--border-radius-base, 8px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                    background: "var(--background-bg-white, #fff)",
                  }}
                  {...{
                    number: "10",
                    prefix: "PRE",
                    iconLeft: <Icon.QodeUser />,
                    state: "filled",
                    status: "default",
                    size: "default",
                  }}
                />
                {/* name="Button" id="216:20984" type="INSTANCE" */}
                <QodeButton
                  style={{
                    display: "flex",
                    height: "var(--size-height-controlheight, 32px)",
                    padding:
                      "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    borderRadius: "var(--border-radius-rounded, 999px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                    background: "var(--background-bg-white, #fff)",
                  }}
                  {...{
                    selectIconRight: <Icon.QodeMagnifyingGlass />,
                    onlyIcon: <Icon.QodePlus />,
                    buttonname: "Button",
                    selectIconLeft: <Icon.QodeIcons />,
                    type: "default",
                    size: "default",
                    state: "default",
                    content: "icon",
                    danger: false,
                    ghost: false,
                  }}
                />
              </div>
            </div>
            {/* name="Line 8" id="216:20985" type="LINE" */}
            <Flex
              style={{ width: "260px", height: "1px", background: "#E2E2E2" }}
            >
              {/* name="Line 8" id=216:20985 type=LINE */}
              <></>
            </Flex>
            {/* name="Open to work" id="216:20986" type="FRAME" */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                alignSelf: "stretch",
              }}
            >
              <span
                style={{
                  width: "85px",
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Open to work`}</span>
              {/* name="Switch" id="216:20988" type="INSTANCE" */}
              <QodeSwitch
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  borderRadius: "999px",
                  background: "var(--text-text-placeholder, #a7a7a7)",
                }}
                {...{
                  title: "1",
                  state: "default",
                  active: false,
                  size: "default",
                  content: "none",
                }}
              />
            </div>
          </div>
          {/* name="Buttons" id="216:20989" type="FRAME" */}
          <div
            style={{
              display: "flex",
              padding: "12px",
              justifyContent: "flex-end",
              alignItems: "center",
              gap: "3px",
              alignSelf: "stretch",
              borderTop:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
              background: "var(--neutral-gray-5, #f8f6f6)",
            }}
          >
            {/* name="Button" id="216:20990" type="INSTANCE" */}
            <QodeButton
              style={{
                display: "flex",
                height: "var(--size-height-controlheight, 32px)",
                padding: "4px 16px",
                justifyContent: "center",
                alignItems: "center",
                gap: "8px",
                borderRadius: "var(--border-radius-rounded, 999px)",
              }}
              {...{
                buttonname: "Cancel",
                selectIconLeft: <Icon.QodeIcons />,
                onlyIcon: <Icon.QodeMagnifyingGlass />,
                selectIconRight: <Icon.QodeMagnifyingGlass />,
                type: "text",
                size: "default",
                state: "default",
                content: "default",
                danger: false,
                ghost: false,
              }}
            />
            {/* name="Button" id="216:20991" type="INSTANCE" */}
            <QodeButton
              style={{
                display: "flex",
                height: "var(--size-height-controlheight, 32px)",
                padding: "4px 16px",
                justifyContent: "center",
                alignItems: "center",
                gap: "8px",
                borderRadius: "var(--border-radius-rounded, 999px)",
                border: "1px solid var(--border-border-primary-30, #107ecc)",
                background: "var(--background-bg-primary, #1597f4)",
              }}
              {...{
                onlyIcon: <Icon.QodeMagnifyingGlass />,
                buttonname: "Show result",
                selectIconRight: <Icon.QodeMagnifyingGlass />,
                selectIconLeft: <Icon.QodeIcons />,
                type: "primary",
                size: "default",
                state: "default",
                content: "default",
                danger: false,
                ghost: false,
              }}
            />
          </div>
        </div>
        {/* name="Filter | YoE | Cleared" id="216:20992" type="FRAME" */}
        <div
          style={{
            display: "flex",
            width: "300px",
            flexDirection: "column",
            alignItems: "flex-start",
            borderRadius: "var(--border-radius-base, 8px)",
            background: "var(--neutral-white, #fff)",
            boxShadow:
              "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 6px 16px 0px rgba(0, 0, 0, 0.08)",
          }}
        >
          {/* name="Modal/Header" id="216:20993" type="INSTANCE" */}
          <QodeCustom565626441
            style={{
              display: "flex",
              height: "52px",
              padding: "12px 20px",
              justifyContent: "flex-end",
              alignItems: "center",
              gap: "16px",
              alignSelf: "stretch",
              borderBottom:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
            }}
            {...{ size: "md" }}
          />
          {/* name="body" id="216:20994" type="FRAME" */}
          <div
            style={{
              display: "flex",
              padding: "20px",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "13px",
              alignSelf: "stretch",
            }}
          >
            {/* name="Frame 37169" id="216:20995" type="FRAME" */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "36px",
                alignSelf: "stretch",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Min`}</span>
              {/* name="Frame 37168" id="216:20997" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                {/* name="Button" id="216:20998" type="INSTANCE" */}
                <QodeButton
                  style={{
                    display: "flex",
                    height: "var(--size-height-controlheight, 32px)",
                    padding:
                      "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    borderRadius: "var(--border-radius-rounded, 999px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                    background: "var(--background-bg-white, #fff)",
                  }}
                  {...{
                    selectIconRight: <Icon.QodeMagnifyingGlass />,
                    onlyIcon: <Icon.QodeMinus />,
                    buttonname: "Button",
                    selectIconLeft: <Icon.QodeIcons />,
                    type: "default",
                    size: "default",
                    state: "default",
                    content: "icon",
                    danger: false,
                    ghost: false,
                  }}
                />
                {/* name="Input/Number" id="216:20999" type="INSTANCE" */}
                <QodeInputNumber
                  style={{
                    display: "flex",
                    width: "51px",
                    height: "32px",
                    alignItems: "center",
                    borderRadius: "var(--border-radius-base, 8px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                    background: "var(--background-bg-white, #fff)",
                  }}
                  {...{
                    prefix: "PRE",
                    iconLeft: <Icon.QodeUser />,
                    state: "filled",
                    status: "default",
                    size: "default",
                  }}
                />
                {/* name="Button" id="216:21000" type="INSTANCE" */}
                <QodeButton
                  style={{
                    display: "flex",
                    height: "var(--size-height-controlheight, 32px)",
                    padding:
                      "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    borderRadius: "var(--border-radius-rounded, 999px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                    background: "var(--background-bg-white, #fff)",
                  }}
                  {...{
                    selectIconRight: <Icon.QodeMagnifyingGlass />,
                    onlyIcon: <Icon.QodePlus />,
                    buttonname: "Button",
                    selectIconLeft: <Icon.QodeIcons />,
                    type: "default",
                    size: "default",
                    state: "default",
                    content: "icon",
                    danger: false,
                    ghost: false,
                  }}
                />
              </div>
            </div>
            {/* name="Frame 37170" id="216:21001" type="FRAME" */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "36px",
                alignSelf: "stretch",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Max`}</span>
              {/* name="Frame 37168" id="216:21003" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                {/* name="Button" id="216:21004" type="INSTANCE" */}
                <QodeButton
                  style={{
                    display: "flex",
                    height: "var(--size-height-controlheight, 32px)",
                    padding:
                      "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    borderRadius: "var(--border-radius-rounded, 999px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                    background: "var(--background-bg-white, #fff)",
                  }}
                  {...{
                    selectIconRight: <Icon.QodeMagnifyingGlass />,
                    onlyIcon: <Icon.QodeMinus />,
                    buttonname: "Button",
                    selectIconLeft: <Icon.QodeIcons />,
                    type: "default",
                    size: "default",
                    state: "default",
                    content: "icon",
                    danger: false,
                    ghost: false,
                  }}
                />
                {/* name="Input/Number" id="216:21005" type="INSTANCE" */}
                <QodeInputNumber
                  style={{
                    display: "flex",
                    width: "51px",
                    height: "32px",
                    alignItems: "center",
                    borderRadius: "var(--border-radius-base, 8px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                    background: "var(--background-bg-white, #fff)",
                  }}
                  {...{
                    prefix: "PRE",
                    iconLeft: <Icon.QodeUser />,
                    state: "filled",
                    status: "default",
                    size: "default",
                  }}
                />
                {/* name="Button" id="216:21006" type="INSTANCE" */}
                <QodeButton
                  style={{
                    display: "flex",
                    height: "var(--size-height-controlheight, 32px)",
                    padding:
                      "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    borderRadius: "var(--border-radius-rounded, 999px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                    background: "var(--background-bg-white, #fff)",
                  }}
                  {...{
                    selectIconRight: <Icon.QodeMagnifyingGlass />,
                    onlyIcon: <Icon.QodePlus />,
                    buttonname: "Button",
                    selectIconLeft: <Icon.QodeIcons />,
                    type: "default",
                    size: "default",
                    state: "default",
                    content: "icon",
                    danger: false,
                    ghost: false,
                  }}
                />
              </div>
            </div>
            {/* name="Line 8" id="216:21007" type="LINE" */}
            <Flex
              style={{ width: "260px", height: "1px", background: "#E2E2E2" }}
            >
              {/* name="Line 8" id=216:21007 type=LINE */}
              <></>
            </Flex>
            {/* name="Open to work" id="216:21008" type="FRAME" */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                alignSelf: "stretch",
              }}
            >
              <span
                style={{
                  width: "85px",
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Open to work`}</span>
              {/* name="Switch" id="216:21010" type="INSTANCE" */}
              <QodeSwitch
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  borderRadius: "999px",
                  background: "var(--text-text-placeholder, #a7a7a7)",
                }}
                {...{
                  title: "1",
                  state: "default",
                  active: false,
                  size: "default",
                  content: "none",
                }}
              />
            </div>
          </div>
          {/* name="Buttons" id="216:21011" type="FRAME" */}
          <div
            style={{
              display: "flex",
              padding: "12px",
              justifyContent: "flex-end",
              alignItems: "center",
              gap: "3px",
              alignSelf: "stretch",
              borderTop:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
              background: "var(--neutral-gray-5, #f8f6f6)",
            }}
          >
            {/* name="Button" id="216:21012" type="INSTANCE" */}
            <QodeButton
              style={{
                display: "flex",
                height: "var(--size-height-controlheight, 32px)",
                padding: "4px 16px",
                justifyContent: "center",
                alignItems: "center",
                gap: "8px",
                borderRadius: "var(--border-radius-rounded, 999px)",
              }}
              {...{
                buttonname: "Cancel",
                selectIconLeft: <Icon.QodeIcons />,
                onlyIcon: <Icon.QodeMagnifyingGlass />,
                selectIconRight: <Icon.QodeMagnifyingGlass />,
                type: "text",
                size: "default",
                state: "default",
                content: "default",
                danger: false,
                ghost: false,
              }}
            />
            {/* name="Button" id="216:21013" type="INSTANCE" */}
            <QodeButton
              style={{
                display: "flex",
                height: "var(--size-height-controlheight, 32px)",
                padding: "4px 16px",
                justifyContent: "center",
                alignItems: "center",
                gap: "8px",
                borderRadius: "var(--border-radius-rounded, 999px)",
                border: "1px solid var(--border-border-primary-30, #107ecc)",
                background: "var(--background-bg-primary, #1597f4)",
              }}
              {...{
                onlyIcon: <Icon.QodeMagnifyingGlass />,
                buttonname: "Show result",
                selectIconRight: <Icon.QodeMagnifyingGlass />,
                selectIconLeft: <Icon.QodeIcons />,
                type: "primary",
                size: "default",
                state: "default",
                content: "default",
                danger: false,
                ghost: false,
              }}
            />
          </div>
        </div>
        <span
          style={{
            width: "85px",
            color: "var(--color-neutral-text-colortext, #000)",
            fontFamily: 'var(--family-family, "sf pro display")',
            fontSize: "var(--size-base, 14px)",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight:
              "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
          }}
        >{`Open to work`}</span>
        {/* name="Switch" id="216:21016" type="INSTANCE" */}
        <QodeSwitch
          style={{
            display: "inline-flex",
            flexDirection: "column",
            alignItems: "flex-start",
            borderRadius: "999px",
            background: "var(--text-text-placeholder, #a7a7a7)",
          }}
          {...{
            title: "1",
            state: "default",
            active: false,
            size: "default",
            content: "none",
          }}
        />
        <span
          style={{
            width: "85px",
            color: "var(--color-neutral-text-colortext, #000)",
            fontFamily: 'var(--family-family, "sf pro display")',
            fontSize: "var(--size-base, 14px)",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight:
              "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
          }}
        >{`Open to work`}</span>
        {/* name="Switch" id="216:21019" type="INSTANCE" */}
        <QodeSwitch
          style={{
            display: "inline-flex",
            flexDirection: "column",
            alignItems: "flex-start",
            borderRadius: "999px",
            background: "var(--background-bg-primary, #1597f4)",
          }}
          {...{
            title: "1",
            state: "default",
            active: true,
            size: "default",
            content: "none",
          }}
        />
        <span
          style={{
            color: "var(--text-text-neutral-40, #464646)",
            fontFamily: 'var(--family-family, "sf pro display")',
            fontSize: "var(--size-heading3, 28px)",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "var(--lineheight-lineheight-h3, 36px) /* 128.571% */",
          }}
        >{`Open to work state:
only show in Filter modal`}</span>
      </div>
    </>
  )
}

export default Qode5816084Page
