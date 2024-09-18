// id="148:9852"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom18216941 } from "@designSystem/custom/QodeCustom18216941"
import { QodeButton } from "@designSystem/ant/QodeButton"

export interface QodeCustom1489852Props {
  state?: "View" | "Edit" | "View (report)" | "New question"
}

export const QodeCustom1489852: React.FC<
  QodeCustom1489852Props & { style?: CSSProperties }
> = ({ state = "View", style, ...rest }) => {
  return (
    <>
      {/* name="Interview question" id="148:9852" type="COMPONENT_SET" */}
      {/* id="148:9851" */}
      {`${state}` === `View` && (
        <>
          {/* name="State=View" id="148:9851" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "596px",
                justifyContent: "flex-end",
                alignItems: "center",
                gap: "16px",
              },
              ...style,
            }}
          >
            {/* name="Frame 37328" id="148:9860" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "20px",
                  height: "20px",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                  flexShrink: "0",
                  borderRadius: "4px",
                  background: "var(--neutral-gray-10, #e3e3e3)",
                },
                ...{},
              }}
            >
              <span
                style={{
                  ...{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    flex: "1 0 0",
                    alignSelf: "stretch",
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    textAlign: "center",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-small, 12px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                  },
                  ...{},
                }}
              >{`1`}</span>
            </div>
            <span
              style={{
                ...{
                  flex: "1 0 0",
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
            >{`Introduce yourself and summarize your background, focusing on your skills and relevant experience?`}</span>
          </div>
        </>
      )}
      {/* id="595:27986" */}
      {`${state}` === `View (report)` && (
        <>
          {/* name="State=View (report)" id="595:27986" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "596px",
                justifyContent: "flex-end",
                alignItems: "center",
                gap: "16px",
              },
              ...style,
            }}
          >
            {/* name="Frame 37328" id="595:27987" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "20px",
                  height: "20px",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                  flexShrink: "0",
                  borderRadius: "4px",
                  background: "var(--neutral-gray-10, #e3e3e3)",
                },
                ...{},
              }}
            >
              <span
                style={{
                  ...{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    flex: "1 0 0",
                    alignSelf: "stretch",
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    textAlign: "center",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-small, 12px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                  },
                  ...{},
                }}
              >{`1`}</span>
            </div>
            <span
              style={{
                ...{
                  flex: "1 0 0",
                  color: "var(--text-text-neutral-30, #656565)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                },
                ...{},
              }}
            >{`Introduce yourself and summarize your background, focusing on your skills and relevant experience?`}</span>
          </div>
        </>
      )}
      {/* id="148:9853" */}
      {`${state}` === `Edit` && (
        <>
          {/* name="State=Edit" id="148:9853" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "596px",
                height: "54px",
                justifyContent: "flex-end",
                alignItems: "center",
                gap: "12px",
                flexShrink: "0",
              },
              ...style,
            }}
          >
            {/* name="bars" id="148:9854" type="INSTANCE" */}
            <Icon.QodeBars
              style={{
                ...{ width: "20px", height: "20px", flexShrink: "0" },
                ...{},
              }}
              {...{}}
            />
            {/* name="Input__Text Area" id="149:9542" type="INSTANCE" */}
            <QodeCustom18216941
              style={{
                ...{
                  display: "flex",
                  padding:
                    "var(--size-padding-paddingxs, 8px) var(--size-padding-paddingxs, 8px) var(--size-padding-paddinglg, 24px) var(--size-padding-paddingxs, 8px)",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  flex: "1 0 0",
                  alignSelf: "stretch",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                  background:
                    "var(--color-neutral-background-colorbgcontainer, #fff)",
                },
                ...{},
              }}
              {...{
                title:
                  "Introduce yourself and summarize your background, focusing on your skills and relevant experience?",
                state: "filled",
                size: "default",
              }}
            />
            {/* name="Button" id="616:38091" type="INSTANCE" */}
            <QodeButton
              style={{
                ...{
                  display: "flex",
                  width: "24px",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "var(--size-padding-paddingxxs, 4px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  flexShrink: "0",
                  borderRadius: "var(--border-radius-rounded, 999px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--background-bg-white, #fff)",
                },
                ...{},
              }}
              {...{
                onlyIcon: <Icon.QodeTrash />,
                selectIconRight: <Icon.QodeMagnifyingGlass />,
                selectIconLeft: <Icon.QodeIcons />,
                buttonname: "Button",
                type: "default",
                size: "small",
                state: "default",
                content: "icon",
                danger: false,
                ghost: false,
              }}
            />
          </div>
        </>
      )}
      {/* id="629:29450" */}
      {`${state}` === `New question` && (
        <>
          {/* name="State=New question" id="629:29450" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "596px",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-end",
                gap: "4px",
              },
              ...style,
            }}
          >
            {/* name="Frame 37413" id="629:29543" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  alignSelf: "stretch",
                },
                ...{},
              }}
            >
              {/* name="bars" id="629:29451" type="INSTANCE" */}
              <Icon.QodeBars
                style={{ ...{ width: "20px", height: "20px" }, ...{} }}
                {...{}}
              />
              {/* name="Input__Text Area" id="629:29452" type="INSTANCE" */}
              <QodeCustom18216941
                style={{
                  ...{
                    display: "flex",
                    padding:
                      "var(--size-padding-paddingxs, 8px) var(--size-padding-paddingxs, 8px) var(--size-padding-paddinglg, 24px) var(--size-padding-paddingxs, 8px)",
                    alignItems: "flex-start",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    flex: "1 0 0",
                    borderRadius: "var(--border-radius-base, 8px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--color-primary-colorprimary, #1597f4)",
                    background:
                      "var(--color-neutral-background-colorbgcontainer, #fff)",
                  },
                  ...{},
                }}
                {...{
                  title: "Enter question",
                  state: "focussed",
                  size: "default",
                }}
              />
              {/* name="Button" id="629:29453" type="INSTANCE" */}
              <QodeButton
                style={{
                  ...{
                    display: "flex",
                    width: "24px",
                    height: "var(--size-height-controlheightsm, 24px)",
                    padding: "var(--size-padding-paddingxxs, 4px)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    borderRadius: "var(--border-radius-rounded, 999px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                    background: "var(--background-bg-white, #fff)",
                  },
                  ...{},
                }}
                {...{
                  onlyIcon: <Icon.QodeTrash />,
                  selectIconRight: <Icon.QodeMagnifyingGlass />,
                  selectIconLeft: <Icon.QodeIcons />,
                  buttonname: "Button",
                  type: "default",
                  size: "small",
                  state: "default",
                  content: "icon",
                  danger: false,
                  ghost: false,
                }}
              />
            </div>
            {/* name="Frame 37414" id="629:29551" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  padding: "0px 32px",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "10px",
                  alignSelf: "stretch",
                },
                ...{},
              }}
            >
              {/* name="Button" id="629:29544" type="INSTANCE" */}
              <QodeButton
                style={{
                  ...{
                    display: "flex",
                    width: "61px",
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
                  selectIconRight: <Icon.QodeMagnifyingGlass />,
                  onlyIcon: <Icon.QodeMagnifyingGlass />,
                  buttonname: "Suggest",
                  selectIconLeft: <Icon.QodeStarChristmas />,
                  iconLeft: true,
                  type: "link",
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
