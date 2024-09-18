// id="411:24172"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeSwitch } from "@designSystem/ant/QodeSwitch"
import { QodeButton } from "@designSystem/ant/QodeButton"
import { QodeSelect } from "@designSystem/ant/QodeSelect"

export interface QodeCustom41124172Props {
  state?: "Selected" | "Open" | "Worldwide" | "Filtered" | "Start typing"
}

export const QodeCustom41124172: React.FC<
  QodeCustom41124172Props & { style?: CSSProperties }
> = ({ state = "Open", ...rest }) => {
  return (
    <>
      {/* name="Filter | Location" id="411:24172" type="COMPONENT_SET" */}
      {/* id="411:24171" */}
      {`${state}` === `Open` && (
        <>
          {/* name="State=Open" id="411:24171" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "320px",
              flexDirection: "column",
              alignItems: "flex-start",
              borderRadius: "var(--border-radius-base, 8px)",
              background: "var(--neutral-white, #fff)",
              boxShadow:
                "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 6px 16px 0px rgba(0, 0, 0, 0.08)",
            }}
          >
            {/* name="body" id="411:23991" type="FRAME" */}
            <div
              style={{
                display: "flex",
                padding: "20px",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "12px",
                alignSelf: "stretch",
              }}
            >
              {/* name="Search bar" id="416:19892" type="INSTANCE" */}
              <Flex
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
              >
                {/* name="🎰 icon left" id="I416:19892;2720:38013" type="INSTANCE" */}
                <Icon.QodeMagnifyingGlass
                  style={{ width: "16px", height: "16px" }}
                  {...{}}
                />
                <span
                  style={{
                    color: "var(--color-neutral-text-colortext, #000)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`PRE`}</span>
                <span
                  style={{
                    flex: "1 0 0",
                    color: "var(--text-text-placeholder, #a7a7a7)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Search location`}</span>
                <span
                  style={{
                    color:
                      "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`SUF`}</span>
                {/* name="🎰 icon right" id="I416:19892;2720:38017" type="INSTANCE" */}
                <Icon.QodeUser
                  style={{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "1.6px 2.4px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  {...{}}
                />
              </Flex>
              {/* name="---" id="411:24004" type="LINE" */}
              <Flex
                style={{
                  width: "280px",
                  height: "1px",
                  background: "var(--border-border-neutral-20, #e3e3e3)",
                }}
              >
                {/* name="---" id=411:24004 type=LINE */}
                <></>
              </Flex>
              {/* name="worldwide" id="411:24005" type="FRAME" */}
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
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Worldwide`}</span>
                {/* name="Switch" id="411:24007" type="INSTANCE" */}
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
            {/* name="Action" id="411:24159" type="FRAME" */}
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
              {/* name="Button" id="411:24160" type="INSTANCE" */}
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
                  iconRight: false,
                  buttonname: "Cancel",
                  selectIconLeft: <Icon.QodeIcons />,
                  onlyIcon: <Icon.QodeMagnifyingGlass />,
                  selectIconRight: <Icon.QodeMagnifyingGlass />,
                  iconLeft: false,
                  type: "text",
                  size: "default",
                  state: "default",
                  content: "default",
                  danger: false,
                  ghost: false,
                }}
              />
              {/* name="Button" id="411:24161" type="INSTANCE" */}
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
                  iconLeft: false,
                  iconRight: false,
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
        </>
      )}
      {/* id="416:20929" */}
      {`${state}` === `Start typing` && (
        <>
          {/* name="State=Start typing" id="416:20929" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "320px",
              flexDirection: "column",
              alignItems: "flex-start",
              borderRadius: "var(--border-radius-base, 8px)",
              background: "var(--neutral-white, #fff)",
              boxShadow:
                "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 6px 16px 0px rgba(0, 0, 0, 0.08)",
            }}
          >
            {/* name="body" id="416:20930" type="FRAME" */}
            <div
              style={{
                display: "flex",
                padding: "20px",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "12px",
                alignSelf: "stretch",
              }}
            >
              {/* name="Search bar" id="416:20931" type="INSTANCE" */}
              <Flex
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
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-50, #6f6f6f)",
                  background: "var(--background-bg-white, #fff)",
                }}
              >
                {/* name="🎰 icon left" id="I416:20931;2720:38032" type="INSTANCE" */}
                <Icon.QodeMagnifyingGlass
                  style={{ width: "16px", height: "16px" }}
                  {...{}}
                />
                <span
                  style={{
                    color: "var(--color-neutral-text-colortext, #000)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`PRE`}</span>
                <span
                  style={{
                    flex: "1 0 0",
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Vi`}</span>
                <span
                  style={{
                    color:
                      "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`SUF`}</span>
                {/* name="🎰 icon right" id="I416:20931;2720:38036" type="INSTANCE" */}
                <Icon.QodeUser
                  style={{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "1.6px 2.4px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  {...{}}
                />
                {/* name="Focus Ring" id="I416:20931;2720:38037" type="RECTANGLE" */}
                <Flex
                  style={{
                    width: "280px",
                    height: "32px",
                    position: "absolute",
                    borderRadius: "var(--border-radius-base, 8px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  }}
                >
                  {/* name="Focus Ring" id=I416:20931;2720:38037 type=RECTANGLE */}
                  <></>
                </Flex>
              </Flex>
              {/* name="list" id="416:20932" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "4px",
                  alignSelf: "stretch",
                }}
              >
                {/* name="🧬 item 1" id="416:20933" type="INSTANCE" */}
                <QodeSelect
                  style={{
                    display: "flex",
                    height: "var(--size-height-controlheight, 32px)",
                    padding: "0px var(--size-padding-paddingsm, 12px)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    alignSelf: "stretch",
                    borderRadius: "var(--style-radius-borderradius, 8px)",
                    background:
                      "var(--color-neutral-fill-colorfilltertiary, rgba(0, 0, 0, 0.04))",
                  }}
                  {...{ title: "Bolivia", state: "hover" }}
                />
                {/* name="🧬 item 2" id="416:20934" type="INSTANCE" */}
                <QodeSelect
                  style={{
                    display: "flex",
                    height: "var(--size-height-controlheight, 32px)",
                    padding: "0px var(--size-padding-paddingsm, 12px)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    alignSelf: "stretch",
                    borderRadius: "var(--style-radius-borderradius, 8px)",
                  }}
                  {...{ title: "Latvia", state: "default" }}
                />
                {/* name="🧬 item 8" id="416:20935" type="INSTANCE" */}
                <QodeSelect
                  style={{
                    display: "flex",
                    height: "var(--size-height-controlheight, 32px)",
                    padding: "0px var(--size-padding-paddingsm, 12px)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    alignSelf: "stretch",
                    borderRadius: "var(--style-radius-borderradius, 8px)",
                  }}
                  {...{ title: "Vietnam", state: "default" }}
                />
                {/* name="🧬 item 10" id="416:20936" type="INSTANCE" */}
                <QodeSelect
                  style={{
                    display: "flex",
                    height: "var(--size-height-controlheight, 32px)",
                    padding: "0px var(--size-padding-paddingsm, 12px)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    alignSelf: "stretch",
                    borderRadius: "var(--style-radius-borderradius, 8px)",
                  }}
                  {...{ title: "Vietnam, Ho Chi Minh city", state: "default" }}
                />
                {/* name="🧬 item 9" id="416:20937" type="INSTANCE" */}
                <QodeSelect
                  style={{
                    display: "flex",
                    height: "var(--size-height-controlheight, 32px)",
                    padding: "0px var(--size-padding-paddingsm, 12px)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    alignSelf: "stretch",
                    borderRadius: "var(--style-radius-borderradius, 8px)",
                  }}
                  {...{ title: "Virgin Islands (US)", state: "default" }}
                />
                {/* name="🧬 item 7" id="416:20938" type="INSTANCE" */}
                <QodeSelect
                  style={{
                    display: "flex",
                    height: "var(--size-height-controlheight, 32px)",
                    padding: "0px var(--size-padding-paddingsm, 12px)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    alignSelf: "stretch",
                    borderRadius: "var(--style-radius-borderradius, 8px)",
                  }}
                  {...{ title: "Virgin Islands (British)", state: "default" }}
                />
              </div>
              {/* name="---" id="416:20939" type="LINE" */}
              <Flex
                style={{
                  width: "280px",
                  height: "1px",
                  background: "var(--border-border-neutral-20, #e3e3e3)",
                }}
              >
                {/* name="---" id=416:20939 type=LINE */}
                <></>
              </Flex>
              {/* name="worldwide" id="416:20940" type="FRAME" */}
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
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Worldwide`}</span>
                {/* name="Switch" id="416:20942" type="INSTANCE" */}
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
            {/* name="Action" id="416:20943" type="FRAME" */}
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
              {/* name="Button" id="416:20944" type="INSTANCE" */}
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
                  iconRight: false,
                  buttonname: "Cancel",
                  selectIconLeft: <Icon.QodeIcons />,
                  onlyIcon: <Icon.QodeMagnifyingGlass />,
                  selectIconRight: <Icon.QodeMagnifyingGlass />,
                  iconLeft: false,
                  type: "text",
                  size: "default",
                  state: "default",
                  content: "default",
                  danger: false,
                  ghost: false,
                }}
              />
              {/* name="Button" id="416:20945" type="INSTANCE" */}
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
                  iconLeft: false,
                  iconRight: false,
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
        </>
      )}
      {/* id="411:24170" */}
      {`${state}` === `Selected` && (
        <>
          {/* name="State=Selected" id="411:24170" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "320px",
              flexDirection: "column",
              alignItems: "flex-start",
              borderRadius: "var(--border-radius-base, 8px)",
              background: "var(--neutral-white, #fff)",
              boxShadow:
                "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 6px 16px 0px rgba(0, 0, 0, 0.08)",
            }}
          >
            {/* name="body" id="411:24111" type="FRAME" */}
            <div
              style={{
                display: "flex",
                padding: "20px",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "12px",
                alignSelf: "stretch",
              }}
            >
              {/* name="Search bar" id="416:20833" type="INSTANCE" */}
              <Flex
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
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-50, #6f6f6f)",
                  background: "var(--background-bg-white, #fff)",
                }}
              >
                {/* name="🎰 icon left" id="I416:20833;2720:38032" type="INSTANCE" */}
                <Icon.QodeMagnifyingGlass
                  style={{ width: "16px", height: "16px" }}
                  {...{}}
                />
                <span
                  style={{
                    color: "var(--color-neutral-text-colortext, #000)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`PRE`}</span>
                <span
                  style={{
                    flex: "1 0 0",
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Vi`}</span>
                <span
                  style={{
                    color:
                      "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`SUF`}</span>
                {/* name="🎰 icon right" id="I416:20833;2720:38036" type="INSTANCE" */}
                <Icon.QodeUser
                  style={{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "1.6px 2.4px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  {...{}}
                />
                {/* name="Focus Ring" id="I416:20833;2720:38037" type="RECTANGLE" */}
                <Flex
                  style={{
                    width: "280px",
                    height: "32px",
                    position: "absolute",
                    borderRadius: "var(--border-radius-base, 8px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  }}
                >
                  {/* name="Focus Ring" id=I416:20833;2720:38037 type=RECTANGLE */}
                  <></>
                </Flex>
              </Flex>
              {/* name="list" id="411:24116" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "4px",
                  alignSelf: "stretch",
                }}
              >
                {/* name="🧬 item 1" id="411:24117" type="INSTANCE" */}
                <QodeSelect
                  style={{
                    display: "flex",
                    height: "var(--size-height-controlheight, 32px)",
                    padding: "0px var(--size-padding-paddingsm, 12px)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    alignSelf: "stretch",
                    borderRadius: "var(--style-radius-borderradius, 8px)",
                    background: "var(--primary-primary-10, #d6eeff)",
                  }}
                  {...{ title: "Bolivia", state: "selected multiple" }}
                />
                {/* name="🧬 item 2" id="411:24118" type="INSTANCE" */}
                <QodeSelect
                  style={{
                    display: "flex",
                    height: "var(--size-height-controlheight, 32px)",
                    padding: "0px var(--size-padding-paddingsm, 12px)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    alignSelf: "stretch",
                    borderRadius: "var(--style-radius-borderradius, 8px)",
                    background: "var(--primary-primary-10, #d6eeff)",
                  }}
                  {...{ title: "Latvia", state: "selected multiple" }}
                />
                {/* name="🧬 item 8" id="411:24119" type="INSTANCE" */}
                <QodeSelect
                  style={{
                    display: "flex",
                    height: "var(--size-height-controlheight, 32px)",
                    padding: "0px var(--size-padding-paddingsm, 12px)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    alignSelf: "stretch",
                    borderRadius: "var(--style-radius-borderradius, 8px)",
                  }}
                  {...{ title: "Vietnam", state: "default" }}
                />
                {/* name="🧬 item 10" id="416:20501" type="INSTANCE" */}
                <QodeSelect
                  style={{
                    display: "flex",
                    height: "var(--size-height-controlheight, 32px)",
                    padding: "0px var(--size-padding-paddingsm, 12px)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    alignSelf: "stretch",
                    borderRadius: "var(--style-radius-borderradius, 8px)",
                  }}
                  {...{ title: "Vietnam, Ho Chi Minh city", state: "default" }}
                />
                {/* name="🧬 item 9" id="411:24120" type="INSTANCE" */}
                <QodeSelect
                  style={{
                    display: "flex",
                    height: "var(--size-height-controlheight, 32px)",
                    padding: "0px var(--size-padding-paddingsm, 12px)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    alignSelf: "stretch",
                    borderRadius: "var(--style-radius-borderradius, 8px)",
                  }}
                  {...{ title: "Virgin Islands (US)", state: "default" }}
                />
                {/* name="🧬 item 7" id="411:24121" type="INSTANCE" */}
                <QodeSelect
                  style={{
                    display: "flex",
                    height: "var(--size-height-controlheight, 32px)",
                    padding: "0px var(--size-padding-paddingsm, 12px)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    alignSelf: "stretch",
                    borderRadius: "var(--style-radius-borderradius, 8px)",
                  }}
                  {...{ title: "Virgin Islands (British)", state: "default" }}
                />
              </div>
              {/* name="---" id="411:24115" type="LINE" */}
              <Flex
                style={{
                  width: "280px",
                  height: "1px",
                  background: "var(--border-border-neutral-20, #e3e3e3)",
                }}
              >
                {/* name="---" id=411:24115 type=LINE */}
                <></>
              </Flex>
              {/* name="worldwide" id="411:24112" type="FRAME" */}
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
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Worldwide`}</span>
                {/* name="Switch" id="411:24114" type="INSTANCE" */}
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
            {/* name="Action" id="411:24149" type="FRAME" */}
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
              {/* name="Button" id="411:24150" type="INSTANCE" */}
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
                  iconRight: false,
                  buttonname: "Cancel",
                  selectIconLeft: <Icon.QodeIcons />,
                  onlyIcon: <Icon.QodeMagnifyingGlass />,
                  selectIconRight: <Icon.QodeMagnifyingGlass />,
                  iconLeft: false,
                  type: "text",
                  size: "default",
                  state: "default",
                  content: "default",
                  danger: false,
                  ghost: false,
                }}
              />
              {/* name="Button" id="411:24151" type="INSTANCE" */}
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
                  iconLeft: false,
                  iconRight: false,
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
        </>
      )}
      {/* id="416:20873" */}
      {`${state}` === `Filtered` && (
        <>
          {/* name="State=Filtered" id="416:20873" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "320px",
              flexDirection: "column",
              alignItems: "flex-start",
              borderRadius: "var(--border-radius-base, 8px)",
              background: "var(--neutral-white, #fff)",
              boxShadow:
                "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 6px 16px 0px rgba(0, 0, 0, 0.08)",
            }}
          >
            {/* name="body" id="416:20874" type="FRAME" */}
            <div
              style={{
                display: "flex",
                padding: "20px",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "12px",
                alignSelf: "stretch",
              }}
            >
              {/* name="Frame 37372" id="416:21038" type="FRAME" */}
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
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    textDecorationLine: "underline",
                  }}
                >{`12 location selected`}</span>
                {/* name="Button" id="416:21031" type="INSTANCE" */}
                <QodeButton
                  style={{
                    display: "flex",
                    height: "var(--size-height-controlheightsm, 24px)",
                    padding: "4px 8px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "4px",
                    borderRadius: "var(--border-radius-rounded, 999px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                    background: "var(--background-bg-white, #fff)",
                  }}
                  {...{
                    selectIconRight: <Icon.QodeMagnifyingGlass />,
                    onlyIcon: <Icon.QodeMagnifyingGlass />,
                    iconRight: false,
                    buttonname: "Clear",
                    selectIconLeft: <Icon.QodeIcons />,
                    iconLeft: false,
                    type: "default",
                    size: "small",
                    state: "default",
                    content: "default",
                    danger: false,
                    ghost: false,
                  }}
                />
              </div>
              {/* name="Search bar" id="416:20875" type="INSTANCE" */}
              <Flex
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
              >
                {/* name="🎰 icon left" id="I416:20875;2720:38013" type="INSTANCE" */}
                <Icon.QodeMagnifyingGlass
                  style={{ width: "16px", height: "16px" }}
                  {...{}}
                />
                <span
                  style={{
                    color: "var(--color-neutral-text-colortext, #000)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`PRE`}</span>
                <span
                  style={{
                    flex: "1 0 0",
                    color: "var(--text-text-placeholder, #a7a7a7)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Search location`}</span>
                <span
                  style={{
                    color:
                      "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`SUF`}</span>
                {/* name="🎰 icon right" id="I416:20875;2720:38017" type="INSTANCE" */}
                <Icon.QodeUser
                  style={{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "1.6px 2.4px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  {...{}}
                />
              </Flex>
              {/* name="worldwide" id="416:20884" type="FRAME" */}
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
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Worldwide`}</span>
                {/* name="Switch" id="416:20886" type="INSTANCE" */}
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
            {/* name="Action" id="416:20887" type="FRAME" */}
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
              {/* name="Button" id="416:20888" type="INSTANCE" */}
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
                  iconRight: false,
                  buttonname: "Cancel",
                  selectIconLeft: <Icon.QodeIcons />,
                  onlyIcon: <Icon.QodeMagnifyingGlass />,
                  selectIconRight: <Icon.QodeMagnifyingGlass />,
                  iconLeft: false,
                  type: "text",
                  size: "default",
                  state: "default",
                  content: "default",
                  danger: false,
                  ghost: false,
                }}
              />
              {/* name="Button" id="416:20889" type="INSTANCE" */}
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
                  iconLeft: false,
                  iconRight: false,
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
        </>
      )}
      {/* id="411:24169" */}
      {`${state}` === `Worldwide` && (
        <>
          {/* name="State=Worldwide" id="411:24169" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "320px",
              flexDirection: "column",
              alignItems: "flex-start",
              borderRadius: "var(--border-radius-base, 8px)",
              background: "var(--neutral-white, #fff)",
              boxShadow:
                "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 6px 16px 0px rgba(0, 0, 0, 0.08)",
            }}
          >
            {/* name="body" id="411:24049" type="FRAME" */}
            <div
              style={{
                display: "flex",
                padding: "20px",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "12px",
                alignSelf: "stretch",
              }}
            >
              {/* name="worldwide" id="411:24050" type="FRAME" */}
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
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Worldwide`}</span>
                {/* name="Switch" id="411:24052" type="INSTANCE" */}
                <QodeSwitch
                  style={{
                    display: "flex",
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
              </div>
            </div>
            {/* name="Action" id="411:24095" type="FRAME" */}
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
              {/* name="Button" id="411:24096" type="INSTANCE" */}
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
                  iconRight: false,
                  buttonname: "Cancel",
                  selectIconLeft: <Icon.QodeIcons />,
                  onlyIcon: <Icon.QodeMagnifyingGlass />,
                  selectIconRight: <Icon.QodeMagnifyingGlass />,
                  iconLeft: false,
                  type: "text",
                  size: "default",
                  state: "default",
                  content: "default",
                  danger: false,
                  ghost: false,
                }}
              />
              {/* name="Button" id="411:24097" type="INSTANCE" */}
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
                  iconLeft: false,
                  iconRight: false,
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
        </>
      )}
    </>
  )
}
