// id="148:9852"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvgI149954218217664 from "@designSystem/icon/svg/QodeSvgI149954218217664"
import { QodeButton } from "@designSystem/ant/QodeButton"
import QodeSvgI6292945218217658 from "@designSystem/icon/svg/QodeSvgI6292945218217658"

export interface QodeCustom1489852Props {
  state?: "View" | "Edit" | "View (report)" | "New question"
}

export const QodeCustom1489852: React.FC<
  QodeCustom1489852Props & { style?: CSSProperties }
> = ({ state = "View", ...rest }) => {
  return (
    <>
      {/* name="Interview question" id="148:9852" type="COMPONENT_SET" */}
      {/* id="148:9851" */}
      {`${state}` === `View` && (
        <>
          {/* name="State=View" id="148:9851" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "596px",
              justifyContent: "flex-end",
              alignItems: "center",
              gap: "16px",
            }}
          >
            {/* name="Frame 37328" id="148:9860" type="FRAME" */}
            <div
              style={{
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
              }}
            >
              <span
                style={{
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
                }}
              >{`1`}</span>
            </div>
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
              display: "flex",
              width: "596px",
              justifyContent: "flex-end",
              alignItems: "center",
              gap: "16px",
            }}
          >
            {/* name="Frame 37328" id="595:27987" type="FRAME" */}
            <div
              style={{
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
              }}
            >
              <span
                style={{
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
                }}
              >{`1`}</span>
            </div>
            <span
              style={{
                flex: "1 0 0",
                color: "var(--text-text-neutral-30, #656565)",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-large, 16px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "24px /* 150% */",
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
              display: "flex",
              width: "596px",
              height: "54px",
              justifyContent: "flex-end",
              alignItems: "center",
              gap: "12px",
              flexShrink: "0",
            }}
          >
            {/* name="bars" id="148:9854" type="INSTANCE" */}
            <Icon.QodeBars
              style={{ width: "20px", height: "20px", flexShrink: "0" }}
              {...{}}
            />
            {/* name="Input__Text Area" id="149:9542" type="INSTANCE" */}
            <Flex
              style={{
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
              }}
            >
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
              >{`Introduce yourself and summarize your background, focusing on your skills and relevant experience?`}</span>
              {/* name="Resizer" id="I149:9542;182:17664" type="BOOLEAN_OPERATION" */}
              <QodeSvgI149954218217664
                style={{
                  width: "8.354px",
                  height: "8.354px",
                  position: "absolute",
                  left: "517px",
                  top: "43px",
                  fill: "var(--color-neutral-text-colortext, #000)",
                }}
                {...{}}
              />
              {/* name="button" id="I149:9542;3012:28132" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  width: "494px",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  position: "absolute",
                  left: "8px",
                  bottom: "4px",
                }}
              >
                {/* name="Button" id="I149:9542;3012:28133" type="INSTANCE" */}
                <QodeButton
                  style={{
                    display: "flex",
                    height: "var(--size-height-controlheightsm, 24px)",
                    padding: "var(--size-padding-paddingxxs, 4px) 0px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxxs, 4px)",
                    borderRadius: "var(--border-radius-rounded, 999px)",
                  }}
                  {...{
                    iconRight: false,
                    selectIconRight: <Icon.QodeMagnifyingGlass />,
                    onlyIcon: <Icon.QodeMagnifyingGlass />,
                    buttonname: "Rewrite",
                    selectIconLeft: <Icon.QodeArrowsRotateReverse />,
                    iconLeft: true,
                    type: "link",
                    size: "small",
                    state: "default",
                    content: "default",
                    danger: false,
                    ghost: false,
                  }}
                />
                {/* name="vote" id="I149:9542;3012:28134" type="FRAME" */}
                <div style={{ display: "flex", alignItems: "flex-start" }}>
                  {/* name="Button" id="I149:9542;3012:28135" type="INSTANCE" */}
                  <QodeButton
                    style={{
                      display: "flex",
                      width: "24px",
                      height: "var(--size-height-controlheightsm, 24px)",
                      padding: "var(--size-padding-paddingxxs, 4px)",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "var(--size-padding-paddingxs, 8px)",
                      borderRadius: "var(--border-radius-rounded, 999px)",
                    }}
                    {...{
                      onlyIcon: <Icon.QodeThumbsUp />,
                      iconLeft: false,
                      selectIconRight: <Icon.QodeMagnifyingGlass />,
                      buttonname: "Rewrite",
                      iconRight: false,
                      selectIconLeft: <Icon.QodeIcons />,
                      type: "text",
                      size: "small",
                      state: "default",
                      content: "icon",
                      danger: false,
                      ghost: false,
                    }}
                  />
                  {/* name="Button" id="I149:9542;3012:28136" type="INSTANCE" */}
                  <QodeButton
                    style={{
                      display: "flex",
                      width: "24px",
                      height: "var(--size-height-controlheightsm, 24px)",
                      padding: "var(--size-padding-paddingxxs, 4px)",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "var(--size-padding-paddingxs, 8px)",
                      borderRadius: "var(--border-radius-rounded, 999px)",
                    }}
                    {...{
                      onlyIcon: <Icon.QodeThumbsDown />,
                      iconLeft: false,
                      selectIconRight: <Icon.QodeMagnifyingGlass />,
                      buttonname: "Rewrite",
                      iconRight: false,
                      selectIconLeft: <Icon.QodeIcons />,
                      type: "text",
                      size: "small",
                      state: "default",
                      content: "icon",
                      danger: false,
                      ghost: false,
                    }}
                  />
                </div>
              </div>
            </Flex>
            {/* name="Button" id="616:38091" type="INSTANCE" */}
            <QodeButton
              style={{
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
              }}
              {...{
                onlyIcon: <Icon.QodeTrash />,
                selectIconRight: <Icon.QodeMagnifyingGlass />,
                selectIconLeft: <Icon.QodeIcons />,
                iconRight: false,
                buttonname: "Button",
                iconLeft: false,
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
              display: "flex",
              width: "596px",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-end",
              gap: "4px",
            }}
          >
            {/* name="Frame 37413" id="629:29543" type="FRAME" */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                alignSelf: "stretch",
              }}
            >
              {/* name="bars" id="629:29451" type="INSTANCE" */}
              <Icon.QodeBars
                style={{ width: "20px", height: "20px" }}
                {...{}}
              />
              {/* name="Input__Text Area" id="629:29452" type="INSTANCE" */}
              <Flex
                style={{
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
                }}
              >
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
                >{`Enter question`}</span>
                {/* name="Focus Ring" id="I629:29452;182:16960" type="RECTANGLE" */}
                <Flex
                  style={{
                    width: "528px",
                    height: "52px",
                    position: "absolute",
                    borderRadius: "8px",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--color-primary-colorprimaryborder, #b2dfff)",
                  }}
                >
                  {/* name="Focus Ring" id=I629:29452;182:16960 type=RECTANGLE */}
                  <></>
                </Flex>
                {/* name="Resizer" id="I629:29452;182:17658" type="BOOLEAN_OPERATION" */}
                <QodeSvgI6292945218217658
                  style={{
                    width: "8.354px",
                    height: "8.354px",
                    position: "absolute",
                    left: "517px",
                    top: "41px",
                    fill: "var(--color-neutral-text-colortext, #000)",
                  }}
                  {...{}}
                />
                {/* name="button" id="I629:29452;3012:28122" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    width: "494px",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    position: "absolute",
                    left: "8px",
                    bottom: "4px",
                  }}
                >
                  {/* name="Button" id="I629:29452;3012:28123" type="INSTANCE" */}
                  <QodeButton
                    style={{
                      display: "flex",
                      height: "var(--size-height-controlheightsm, 24px)",
                      padding: "var(--size-padding-paddingxxs, 4px) 0px",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "var(--size-padding-paddingxxs, 4px)",
                      borderRadius: "var(--border-radius-rounded, 999px)",
                    }}
                    {...{
                      iconRight: false,
                      selectIconRight: <Icon.QodeMagnifyingGlass />,
                      onlyIcon: <Icon.QodeMagnifyingGlass />,
                      buttonname: "Rewrite",
                      selectIconLeft: <Icon.QodeArrowsRotateReverse />,
                      iconLeft: true,
                      type: "link",
                      size: "small",
                      state: "default",
                      content: "default",
                      danger: false,
                      ghost: false,
                    }}
                  />
                  {/* name="vote" id="I629:29452;3012:28124" type="FRAME" */}
                  <div style={{ display: "flex", alignItems: "flex-start" }}>
                    {/* name="Button" id="I629:29452;3012:28125" type="INSTANCE" */}
                    <QodeButton
                      style={{
                        display: "flex",
                        width: "24px",
                        height: "var(--size-height-controlheightsm, 24px)",
                        padding: "var(--size-padding-paddingxxs, 4px)",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "var(--size-padding-paddingxs, 8px)",
                        borderRadius: "var(--border-radius-rounded, 999px)",
                      }}
                      {...{
                        onlyIcon: <Icon.QodeThumbsUp />,
                        iconLeft: false,
                        selectIconRight: <Icon.QodeMagnifyingGlass />,
                        buttonname: "Rewrite",
                        iconRight: false,
                        selectIconLeft: <Icon.QodeIcons />,
                        type: "text",
                        size: "small",
                        state: "default",
                        content: "icon",
                        danger: false,
                        ghost: false,
                      }}
                    />
                    {/* name="Button" id="I629:29452;3012:28126" type="INSTANCE" */}
                    <QodeButton
                      style={{
                        display: "flex",
                        width: "24px",
                        height: "var(--size-height-controlheightsm, 24px)",
                        padding: "var(--size-padding-paddingxxs, 4px)",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "var(--size-padding-paddingxs, 8px)",
                        borderRadius: "var(--border-radius-rounded, 999px)",
                      }}
                      {...{
                        onlyIcon: <Icon.QodeThumbsDown />,
                        iconLeft: false,
                        selectIconRight: <Icon.QodeMagnifyingGlass />,
                        buttonname: "Rewrite",
                        iconRight: false,
                        selectIconLeft: <Icon.QodeIcons />,
                        type: "text",
                        size: "small",
                        state: "default",
                        content: "icon",
                        danger: false,
                        ghost: false,
                      }}
                    />
                  </div>
                </div>
              </Flex>
              {/* name="Button" id="629:29453" type="INSTANCE" */}
              <QodeButton
                style={{
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
                }}
                {...{
                  onlyIcon: <Icon.QodeTrash />,
                  selectIconRight: <Icon.QodeMagnifyingGlass />,
                  selectIconLeft: <Icon.QodeIcons />,
                  iconRight: false,
                  buttonname: "Button",
                  iconLeft: false,
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
                display: "flex",
                padding: "0px 32px",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "10px",
                alignSelf: "stretch",
              }}
            >
              {/* name="Button" id="629:29544" type="INSTANCE" */}
              <QodeButton
                style={{
                  display: "flex",
                  width: "61px",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "4px 8px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "4px",
                  borderRadius: "var(--border-radius-rounded, 999px)",
                }}
                {...{
                  iconRight: false,
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
