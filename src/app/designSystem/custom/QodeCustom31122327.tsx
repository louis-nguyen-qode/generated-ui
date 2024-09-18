// id="311:22327"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeButton } from "@designSystem/ant/QodeButton"
import { QodeTag } from "@designSystem/ant/QodeTag"

export interface QodeCustom31122327Props {
  showCanceled?: boolean
  title?: string
  aiInterview?: boolean
  state?: "Done" | "Upcoming" | "Canceled"
}

export const QodeCustom31122327: React.FC<
  QodeCustom31122327Props & { style?: CSSProperties }
> = ({
  showCanceled = true,
  title = "3rd interview | Nguyen Quoc Thai",
  aiInterview = true,
  state = "Done",
  ...rest
}) => {
  return (
    <>
      {/* name="Interview item" id="311:22327" type="COMPONENT_SET" */}
      {/* id="311:22224" */}
      {`${state}` === `Done` && (
        <>
          {/* name="State=Done" id="311:22224" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "740px",
              padding: "24px 0px",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "20px",
              borderBottom:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
              background: "var(--neutral-white, #fff)",
            }}
          >
            {/* name="Header" id="311:22195" type="FRAME" */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                alignSelf: "stretch",
              }}
            >
              {/* name="Meeting tile" id="311:22196" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "4px",
                }}
              >
                {/* name="Title" id="313:26618" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                    alignSelf: "stretch",
                  }}
                >
                  <span
                    style={{
                      color: "var(--text-text-neutral-50, #1d1d1d)",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-heading6, 16px)",
                      fontStyle: "normal",
                      fontWeight: "600",
                      lineHeight:
                        "var(--lineheight-lineheight-h6, 22px) /* 137.5% */",
                    }}
                  >{`3rd interview | Nguyen Quoc Thai`}</span>
                </div>
                {/* name="Datetime" id="313:26987" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <span
                    style={{
                      color: "var(--text-text-neutral-40, #464646)",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    }}
                  >{`Wednesday, September 11`}</span>
                  {/* name="divider" id="313:27077" type="LINE" */}
                  <Flex
                    style={{
                      width: "1px",
                      height: "9px",
                      background: "var(--border-border-neutral-30, #d5d5d5)",
                    }}
                  >
                    {/* name="divider" id=313:27077 type=LINE */}
                    <></>
                  </Flex>
                  <span
                    style={{
                      color: "var(--text-text-neutral-40, #464646)",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    }}
                  >{`10:30 AM–11:30 AM`}</span>
                </div>
              </div>
              {/* name="Button" id="311:22203" type="INSTANCE" */}
              <QodeButton
                style={{
                  display: "flex",
                  width: "98px",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "4px 16px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "8px",
                  borderRadius: "var(--border-radius-rounded, 999px)",
                }}
                {...{
                  selectIconLeft: <Icon.QodeEye />,
                  onlyIcon: <Icon.QodeMagnifyingGlass />,
                  selectIconRight: <Icon.QodeMagnifyingGlass />,
                  buttonname: "View result",
                  iconRight: false,
                  iconLeft: true,
                  type: "link",
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
      {/* id="313:26702" */}
      {`${state}` === `Canceled` && (
        <>
          {/* name="State=Canceled" id="313:26702" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "740px",
              padding: "24px 0px",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "20px",
              borderBottom:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
              background: "var(--neutral-white, #fff)",
            }}
          >
            {/* name="Header" id="313:26703" type="FRAME" */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                alignSelf: "stretch",
              }}
            >
              {/* name="Meeting tile" id="313:26704" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "4px",
                }}
              >
                {/* name="Title" id="313:26705" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                    alignSelf: "stretch",
                  }}
                >
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
                  >{`(Canceled)`}</span>
                  <span
                    style={{
                      color: "var(--text-text-neutral-50, #1d1d1d)",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-heading6, 16px)",
                      fontStyle: "normal",
                      fontWeight: "600",
                      lineHeight:
                        "var(--lineheight-lineheight-h6, 22px) /* 137.5% */",
                    }}
                  >{`3rd interview | Nguyen Quoc Thai`}</span>
                </div>
                {/* name="Datetime" id="313:27120" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <span
                    style={{
                      color: "var(--text-text-neutral-40, #464646)",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    }}
                  >{`Wednesday, September 11`}</span>
                  {/* name="divider" id="313:27122" type="LINE" */}
                  <Flex
                    style={{
                      width: "1px",
                      height: "9px",
                      background: "var(--border-border-neutral-30, #d5d5d5)",
                    }}
                  >
                    {/* name="divider" id=313:27122 type=LINE */}
                    <></>
                  </Flex>
                  <span
                    style={{
                      color: "var(--text-text-neutral-40, #464646)",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    }}
                  >{`10:30 AM–11:30 AM`}</span>
                </div>
              </div>
              {/* name="Button" id="313:26709" type="INSTANCE" */}
              <QodeButton
                style={{
                  display: "flex",
                  width: "98px",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "4px 16px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "8px",
                  borderRadius: "var(--border-radius-rounded, 999px)",
                }}
                {...{
                  selectIconLeft: <Icon.QodeEye />,
                  onlyIcon: <Icon.QodeMagnifyingGlass />,
                  selectIconRight: <Icon.QodeMagnifyingGlass />,
                  buttonname: "View result",
                  iconRight: false,
                  iconLeft: true,
                  type: "link",
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
      {/* id="311:22749" */}
      {`${state}` === `Upcoming` && (
        <>
          {/* name="State=Upcoming" id="311:22749" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "740px",
              padding: "24px 0px",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "20px",
              borderBottom:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
              background: "var(--neutral-white, #fff)",
            }}
          >
            {/* name="Header" id="311:22750" type="FRAME" */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                alignSelf: "stretch",
              }}
            >
              {/* name="3rd interview | Nguyen Quoc Thai Wednesday, September 11 - 12:30 AM - 1:00 AM" id="311:22751" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "4px",
                }}
              >
                {/* name="Title" id="313:26667" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                    alignSelf: "stretch",
                  }}
                >
                  <span
                    style={{
                      color: "var(--text-text-neutral-50, #1d1d1d)",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-heading6, 16px)",
                      fontStyle: "normal",
                      fontWeight: "600",
                      lineHeight:
                        "var(--lineheight-lineheight-h6, 22px) /* 137.5% */",
                    }}
                  >{`3rd interview | Nguyen Quoc Thai`}</span>
                </div>
                {/* name="Datetime" id="313:27153" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <span
                    style={{
                      color: "var(--text-text-neutral-40, #464646)",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    }}
                  >{`Wednesday, September 11`}</span>
                  {/* name="divider" id="313:27155" type="LINE" */}
                  <Flex
                    style={{
                      width: "1px",
                      height: "9px",
                      background: "var(--border-border-neutral-30, #d5d5d5)",
                    }}
                  >
                    {/* name="divider" id=313:27155 type=LINE */}
                    <></>
                  </Flex>
                  <span
                    style={{
                      color: "var(--text-text-neutral-40, #464646)",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    }}
                  >{`10:30 AM–11:30 AM`}</span>
                </div>
              </div>
              {/* name="Button" id="311:22757" type="INSTANCE" */}
              <QodeButton
                style={{
                  display: "flex",
                  width: "100px",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "4px 16px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "8px",
                  borderRadius: "var(--border-radius-rounded, 999px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--background-bg-white, #fff)",
                }}
                {...{
                  onlyIcon: <Icon.QodeMagnifyingGlass />,
                  iconRight: false,
                  selectIconLeft: <Icon.QodePenToSquare />,
                  selectIconRight: <Icon.QodeMagnifyingGlass />,
                  buttonname: "Edit",
                  iconLeft: true,
                  type: "default",
                  size: "default",
                  state: "default",
                  content: "default",
                  danger: false,
                  ghost: false,
                }}
              />
            </div>
            {/* name="Content" id="311:22758" type="FRAME" */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "8px",
                alignSelf: "stretch",
              }}
            >
              {/* name="R" id="346:23117" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  alignSelf: "stretch",
                }}
              >
                {/* name="link-simple" id="346:23118" type="INSTANCE" */}
                <Icon.QodeLinkSimple
                  style={{ width: "20px", height: "20px" }}
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
                    textDecorationLine: "underline",
                  }}
                >{`Interview link`}</span>
              </div>
              {/* name="List" id="311:22761" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  alignContent: "center",
                  gap: "4px",
                  alignSelf: "stretch",
                  flexWrap: "wrap",
                }}
              >
                {/* name="Tag" id="311:22762" type="INSTANCE" */}
                <QodeTag
                  style={{
                    display: "flex",
                    height: "24px",
                    padding: "0px 12px",
                    alignItems: "center",
                    gap: "var(--size-size-sizexxs-6px, 6px)",
                    borderRadius: "4px",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--primary-primary-40, #64b9f5)",
                    background: "var(--primary-primary-10, #d6eeff)",
                  }}
                  {...{
                    showRIcon: true,
                    rIcon: <Icon.QodeXmark />,
                    color: "primary",
                    state: "default",
                    size: "small",
                    rounded: "False",
                  }}
                />
                {/* name="Tag" id="311:22763" type="INSTANCE" */}
                <QodeTag
                  style={{
                    display: "flex",
                    height: "24px",
                    padding: "0px 12px",
                    alignItems: "center",
                    gap: "var(--size-size-sizexxs-6px, 6px)",
                    borderRadius: "4px",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--neutral-gray-30, #bfbfbf)",
                    background: "var(--neutral-gray-5, #f8f6f6)",
                  }}
                  {...{
                    showRIcon: true,
                    rIcon: <Icon.QodeXmark />,
                    color: "neutral",
                    state: "default",
                    size: "small",
                    rounded: "False",
                  }}
                />
                {/* name="Tag" id="313:24579" type="INSTANCE" */}
                <QodeTag
                  style={{
                    display: "flex",
                    height: "24px",
                    padding: "0px 12px",
                    alignItems: "center",
                    gap: "var(--size-size-sizexxs-6px, 6px)",
                    borderRadius: "4px",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--neutral-gray-30, #bfbfbf)",
                    background: "var(--neutral-gray-5, #f8f6f6)",
                  }}
                  {...{
                    showRIcon: true,
                    rIcon: <Icon.QodeXmark />,
                    color: "neutral",
                    state: "default",
                    size: "small",
                    rounded: "False",
                  }}
                />
                {/* name="Tag" id="346:23360" type="INSTANCE" */}
                <QodeTag
                  style={{
                    display: "flex",
                    height: "24px",
                    padding: "0px 12px",
                    alignItems: "center",
                    gap: "var(--size-size-sizexxs-6px, 6px)",
                    borderRadius: "4px",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--neutral-gray-30, #bfbfbf)",
                    background: "var(--neutral-gray-5, #f8f6f6)",
                  }}
                  {...{
                    showRIcon: true,
                    rIcon: <Icon.QodeXmark />,
                    color: "neutral",
                    state: "default",
                    size: "small",
                    rounded: "False",
                  }}
                />
                {/* name="Tag" id="346:23488" type="INSTANCE" */}
                <QodeTag
                  style={{
                    display: "flex",
                    height: "24px",
                    padding: "0px 12px",
                    alignItems: "center",
                    gap: "var(--size-size-sizexxs-6px, 6px)",
                    borderRadius: "4px",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--neutral-gray-30, #bfbfbf)",
                    background: "var(--neutral-gray-5, #f8f6f6)",
                  }}
                  {...{
                    showRIcon: true,
                    rIcon: <Icon.QodeXmark />,
                    color: "neutral",
                    state: "default",
                    size: "small",
                    rounded: "False",
                  }}
                />
                {/* name="Tag" id="346:23517" type="INSTANCE" */}
                <QodeTag
                  style={{
                    display: "flex",
                    height: "24px",
                    padding: "0px 12px",
                    alignItems: "center",
                    gap: "var(--size-size-sizexxs-6px, 6px)",
                    borderRadius: "4px",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--neutral-gray-30, #bfbfbf)",
                    background: "var(--neutral-gray-5, #f8f6f6)",
                  }}
                  {...{
                    showRIcon: true,
                    rIcon: <Icon.QodeXmark />,
                    color: "neutral",
                    state: "default",
                    size: "small",
                    rounded: "False",
                  }}
                />
                {/* name="Tag" id="346:23612" type="INSTANCE" */}
                <QodeTag
                  style={{
                    display: "flex",
                    height: "24px",
                    padding: "0px 12px",
                    alignItems: "center",
                    gap: "var(--size-size-sizexxs-6px, 6px)",
                    borderRadius: "4px",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--neutral-gray-30, #bfbfbf)",
                    background: "var(--neutral-gray-5, #f8f6f6)",
                  }}
                  {...{
                    showRIcon: true,
                    rIcon: <Icon.QodeXmark />,
                    color: "neutral",
                    state: "default",
                    size: "small",
                    rounded: "False",
                  }}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}
