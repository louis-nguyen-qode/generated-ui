// id="99:6899"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeTag } from "@designSystem/ant/QodeTag"
import QodeSvgI99681318217652 from "@designSystem/icon/svg/QodeSvgI99681318217652"
import { QodeButton } from "@designSystem/ant/QodeButton"
import QodeSvgI99690718217652 from "@designSystem/icon/svg/QodeSvgI99690718217652"

export interface QodeCustom996899Props {
  showSubject?: boolean
  showRecepients?: boolean
  property_1?: "Default" | "Variant2"
}

export const QodeCustom996899: React.FC<
  QodeCustom996899Props & { style?: CSSProperties }
> = ({
  showSubject = true,
  showRecepients = true,
  property_1 = "Default",
  ...rest
}) => {
  return (
    <>
      {/* name="Email composer" id="99:6899" type="COMPONENT_SET" */}
      {/* id="99:6876" */}
      {`${property_1}` === `Default` && (
        <>
          {/* name="Property 1=Default" id="99:6876" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "640px",
              height: "375px",
              padding: "16px 20px",
              flexDirection: "column",
              justifyContent: "flex-end",
              alignItems: "center",
              gap: "12px",
              flexShrink: "0",
              borderTop:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
              background: "var(--neutral-gray-5, #f8f6f6)",
            }}
          >
            {/* name="To" id="99:6807" type="FRAME" */}
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "flex-start",
                gap: "12px",
                alignSelf: "stretch",
              }}
            >
              {/* name="Input__Label" id="99:6808" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  width: "73px",
                  height: "var(--size-height-controlheight, 32px)",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                }}
              >
                {/* name="Icon" id="I99:6808;5769:7203" type="INSTANCE" */}
                <Icon.QodeClockThree
                  style={{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "1.6px",
                    justifyContent: "center",
                    alignItems: "center",
                    flexShrink: "0",
                  }}
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
                  }}
                >{`Send to`}</span>
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
                >{`*`}</span>
                {/* name="Icon" id="I99:6808;182:6058" type="INSTANCE" */}
                <Icon.QodeCircleQuestion
                  style={{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "1.6px",
                    justifyContent: "center",
                    alignItems: "center",
                    flexShrink: "0",
                  }}
                  {...{}}
                />
              </Flex>
              {/* name="Select" id="99:6809" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  flex: "1 0 0",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border: "1px solid var(--border-border-neutral-30, #d5d5d5)",
                }}
              >
                {/* name="Input/Select" id="I99:6809;170:26363" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    height: "var(--size-height-controlheight, 32px)",
                    padding: "0px var(--size-padding-paddingsm, 12px)",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxxs, 4px)",
                    alignSelf: "stretch",
                    borderRadius: "var(--style-radius-borderradius, 8px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                    background: "var(--neutral-white, #fff)",
                  }}
                >
                  {/* name="Items Wrapper" id="I99:6809;170:26363;170:24392" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      alignContent: "center",
                      gap: "4px var(--size-padding-paddingxxs, 4px)",
                      flex: "1 0 0",
                      flexWrap: "wrap",
                    }}
                  >
                    {/* name="tag" id="I99:6809;170:26363;170:24380" type="INSTANCE" */}
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
                        size: "Default",
                        rounded: "False",
                      }}
                    />
                    {/* name="tag" id="I99:6809;170:26363;170:24384" type="INSTANCE" */}
                    <QodeTag
                      style={{
                        display: "flex",
                        height: "24px",
                        padding: "0px var(--size-padding-paddingxs, 8px)",
                        alignItems: "center",
                        gap: "var(--size-padding-paddingxxs, 4px)",
                        borderRadius: "var(--style-radius-borderradiussm, 4px)",
                        border:
                          "var(--style-line-width-linewidth, 1px) solid var(--primary-primary-40, #64b9f5)",
                        background: "var(--primary-primary-10, #d6eeff)",
                      }}
                      {...{
                        showRIcon: true,
                        rIcon: <Icon.QodeXmark />,
                        color: "primary",
                        state: "default",
                        size: "Default",
                        rounded: "False",
                      }}
                    />
                    {/* name="tag" id="I99:6809;170:26363;170:24388" type="INSTANCE" */}
                    <QodeTag
                      style={{
                        display: "flex",
                        height: "24px",
                        padding: "0px var(--size-padding-paddingxs, 8px)",
                        alignItems: "center",
                        gap: "var(--size-padding-paddingxxs, 4px)",
                        borderRadius: "var(--style-radius-borderradiussm, 4px)",
                        border:
                          "var(--style-line-width-linewidth, 1px) solid var(--primary-primary-40, #64b9f5)",
                        background: "var(--primary-primary-10, #d6eeff)",
                      }}
                      {...{
                        showRIcon: true,
                        rIcon: <Icon.QodeXmark />,
                        color: "primary",
                        state: "default",
                        size: "Default",
                        rounded: "False",
                      }}
                    />
                  </div>
                  {/* name="Icon" id="I99:6809;170:26363;170:24339" type="INSTANCE" */}
                  <Icon.QodeChevronDown
                    style={{ width: "16px", height: "16px" }}
                    {...{}}
                  />
                </Flex>
              </Flex>
            </div>
            {/* name="Subject" id="99:6810" type="FRAME" */}
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "flex-start",
                gap: "12px",
                alignSelf: "stretch",
              }}
            >
              {/* name="Input__Label" id="99:6811" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  width: "73px",
                  height: "var(--size-height-controlheight, 32px)",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                }}
              >
                {/* name="Icon" id="I99:6811;5769:7203" type="INSTANCE" */}
                <Icon.QodeClockThree
                  style={{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "1.6px",
                    justifyContent: "center",
                    alignItems: "center",
                    flexShrink: "0",
                  }}
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
                  }}
                >{`Subject`}</span>
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
                >{`*`}</span>
                {/* name="Icon" id="I99:6811;182:6058" type="INSTANCE" */}
                <Icon.QodeCircleQuestion
                  style={{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "1.6px",
                    justifyContent: "center",
                    alignItems: "center",
                    flexShrink: "0",
                  }}
                  {...{}}
                />
              </Flex>
              {/* name="Input/Text" id="99:6812" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "10px 12px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "8px",
                  flex: "1 0 0",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                  background: "var(--background-bg-white, #fff)",
                }}
              >
                {/* name="🎰 icon left" id="I99:6812;182:10156" type="INSTANCE" */}
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
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: "1",
                    flex: "1 0 0",
                    overflow: "hidden",
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    textOverflow: "ellipsis",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Senior Software Engineer opportunity - [Company name]`}</span>
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
                >{`SUF`}</span>
                {/* name="🎰 icon right" id="I99:6812;182:10160" type="INSTANCE" */}
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
            </div>
            {/* name="Input__Text Area" id="99:6813" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                padding:
                  "var(--size-padding-paddingxs, 8px) var(--size-padding-paddingxs, 8px) var(--size-padding-paddinglg, 24px) var(--size-padding-paddingxs, 8px)",
                flexDirection: "column",
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
                  alignSelf: "stretch",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Write a message...`}</span>
              {/* name="Resizer" id="I99:6813;182:17652" type="BOOLEAN_OPERATION" */}
              <QodeSvgI99681318217652
                style={{
                  width: "8.354px",
                  height: "8.354px",
                  position: "absolute",
                  left: "589px",
                  top: "196px",
                  fill: "var(--color-neutral-text-colortext, #000)",
                }}
                {...{}}
              />
              {/* name="button" id="I99:6813;3012:28019" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  width: "566px",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  position: "absolute",
                  left: "8px",
                  bottom: "4px",
                }}
              >
                {/* name="Button" id="I99:6813;3012:28020" type="INSTANCE" */}
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
                {/* name="vote" id="I99:6813;3012:28021" type="FRAME" */}
                <div style={{ display: "flex", alignItems: "flex-start" }}>
                  {/* name="Button" id="I99:6813;3012:28022" type="INSTANCE" */}
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
                  {/* name="Button" id="I99:6813;3012:28023" type="INSTANCE" */}
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
            {/* name="Btm" id="99:6814" type="FRAME" */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                alignSelf: "stretch",
              }}
            >
              {/* name="Wrap" id="99:7381" type="FRAME" */}
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                {/* name="Button" id="99:7382" type="INSTANCE" */}
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
                    onlyIcon: <Icon.QodeAngleUp />,
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
                {/* name="Rich text action" id="99:7383" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    padding: "8px 0px",
                    alignItems: "center",
                    gap: "12px",
                  }}
                >
                  {/* name="w" id="I99:7383;5705:7341" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    {/* name="bold" id="I99:7383;5705:7342" type="INSTANCE" */}
                    <Icon.QodeBold
                      style={{ width: "20px", height: "20px" }}
                      {...{}}
                    />
                    {/* name="italic" id="I99:7383;5705:7343" type="INSTANCE" */}
                    <Icon.QodeItalic
                      style={{ width: "20px", height: "20px" }}
                      {...{}}
                    />
                    {/* name="underline" id="I99:7383;5705:7344" type="INSTANCE" */}
                    <Icon.QodeUnderline
                      style={{ width: "20px", height: "20px" }}
                      {...{}}
                    />
                  </div>
                  {/* name="divider" id="I99:7383;5705:7345" type="LINE" */}
                  <Flex
                    style={{
                      width: "1px",
                      height: "12px",
                      background: "var(--border-border-neutral-30, #d5d5d5)",
                    }}
                  >
                    {/* name="divider" id=I99:7383;5705:7345 type=LINE */}
                    <></>
                  </Flex>
                  {/* name="Frame 2" id="I99:7383;5705:7346" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    {/* name="list-ul" id="I99:7383;5705:7347" type="INSTANCE" */}
                    <Icon.QodeListUl
                      style={{ width: "20px", height: "20px" }}
                      {...{}}
                    />
                    {/* name="list-ol" id="I99:7383;5705:7348" type="INSTANCE" */}
                    <Icon.QodeListOl
                      style={{ width: "20px", height: "20px" }}
                      {...{}}
                    />
                  </div>
                  {/* name="divider" id="I99:7383;5705:7349" type="LINE" */}
                  <Flex
                    style={{
                      width: "1px",
                      height: "12px",
                      background: "var(--border-border-neutral-30, #d5d5d5)",
                    }}
                  >
                    {/* name="divider" id=I99:7383;5705:7349 type=LINE */}
                    <></>
                  </Flex>
                  {/* name="font" id="I99:7383;5705:7350" type="GROUP" */}
                  <Flex style={{ width: "20px", height: "20px" }}>
                    {/* name="link" id="I99:7383;5705:7351" type="INSTANCE" */}
                    <Icon.QodeLink
                      style={{ width: "20px", height: "20px", flexShrink: "0" }}
                      {...{}}
                    />
                  </Flex>
                </Flex>
              </div>
              {/* name="Action" id="99:6817" type="FRAME" */}
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                {/* name="Button" id="99:6818" type="INSTANCE" */}
                <QodeButton
                  style={{
                    display: "flex",
                    width: "164px",
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
                    selectIconLeft: <Icon.QodeVideoPlus />,
                    selectIconRight: <Icon.QodeMagnifyingGlass />,
                    buttonname: "Setup interview",
                    iconLeft: true,
                    type: "default",
                    size: "default",
                    state: "default",
                    content: "default",
                    danger: false,
                    ghost: false,
                  }}
                />
                {/* name="Button" id="99:6819" type="INSTANCE" */}
                <QodeButton
                  style={{
                    display: "flex",
                    width: "164px",
                    height: "var(--size-height-controlheight, 32px)",
                    padding: "4px 16px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "8px",
                    borderRadius: "var(--border-radius-rounded, 999px)",
                    border:
                      "1px solid var(--border-border-primary-30, #107ecc)",
                    background: "var(--background-bg-primary, #1597f4)",
                  }}
                  {...{
                    onlyIcon: <Icon.QodeMagnifyingGlass />,
                    iconLeft: true,
                    iconRight: false,
                    buttonname: "Send",
                    selectIconRight: <Icon.QodeMagnifyingGlass />,
                    selectIconLeft: <Icon.QodePaperPlaneTop />,
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
        </>
      )}
      {/* id="99:6900" */}
      {`${property_1}` === `Variant2` && (
        <>
          {/* name="Property 1=Variant2" id="99:6900" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "640px",
              height: "163px",
              padding: "16px 20px",
              flexDirection: "column",
              justifyContent: "flex-end",
              alignItems: "center",
              gap: "12px",
              flexShrink: "0",
              borderTop:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
              background: "var(--neutral-gray-5, #f8f6f6)",
            }}
          >
            {/* name="Input__Text Area" id="99:6907" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                padding:
                  "var(--size-padding-paddingxs, 8px) var(--size-padding-paddingxs, 8px) var(--size-padding-paddinglg, 24px) var(--size-padding-paddingxs, 8px)",
                flexDirection: "column",
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
                  alignSelf: "stretch",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Write a message...`}</span>
              {/* name="Resizer" id="I99:6907;182:17652" type="BOOLEAN_OPERATION" */}
              <QodeSvgI99690718217652
                style={{
                  width: "8.354px",
                  height: "8.354px",
                  position: "absolute",
                  left: "589px",
                  top: "72px",
                  fill: "var(--color-neutral-text-colortext, #000)",
                }}
                {...{}}
              />
              {/* name="button" id="I99:6907;3012:28019" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  width: "566px",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  position: "absolute",
                  left: "8px",
                  bottom: "4px",
                }}
              >
                {/* name="Button" id="I99:6907;3012:28020" type="INSTANCE" */}
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
                {/* name="vote" id="I99:6907;3012:28021" type="FRAME" */}
                <div style={{ display: "flex", alignItems: "flex-start" }}>
                  {/* name="Button" id="I99:6907;3012:28022" type="INSTANCE" */}
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
                  {/* name="Button" id="I99:6907;3012:28023" type="INSTANCE" */}
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
            {/* name="Btm" id="99:6908" type="FRAME" */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                alignSelf: "stretch",
              }}
            >
              {/* name="Wrap" id="99:7310" type="FRAME" */}
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                {/* name="Button" id="99:6909" type="INSTANCE" */}
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
                    onlyIcon: <Icon.QodeAngleUp />,
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
                {/* name="Rich text action" id="99:6910" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    padding: "8px 0px",
                    alignItems: "center",
                    gap: "12px",
                  }}
                >
                  {/* name="w" id="I99:6910;5705:7341" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    {/* name="bold" id="I99:6910;5705:7342" type="INSTANCE" */}
                    <Icon.QodeBold
                      style={{ width: "20px", height: "20px" }}
                      {...{}}
                    />
                    {/* name="italic" id="I99:6910;5705:7343" type="INSTANCE" */}
                    <Icon.QodeItalic
                      style={{ width: "20px", height: "20px" }}
                      {...{}}
                    />
                    {/* name="underline" id="I99:6910;5705:7344" type="INSTANCE" */}
                    <Icon.QodeUnderline
                      style={{ width: "20px", height: "20px" }}
                      {...{}}
                    />
                  </div>
                  {/* name="divider" id="I99:6910;5705:7345" type="LINE" */}
                  <Flex
                    style={{
                      width: "1px",
                      height: "12px",
                      background: "var(--border-border-neutral-30, #d5d5d5)",
                    }}
                  >
                    {/* name="divider" id=I99:6910;5705:7345 type=LINE */}
                    <></>
                  </Flex>
                  {/* name="Frame 2" id="I99:6910;5705:7346" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    {/* name="list-ul" id="I99:6910;5705:7347" type="INSTANCE" */}
                    <Icon.QodeListUl
                      style={{ width: "20px", height: "20px" }}
                      {...{}}
                    />
                    {/* name="list-ol" id="I99:6910;5705:7348" type="INSTANCE" */}
                    <Icon.QodeListOl
                      style={{ width: "20px", height: "20px" }}
                      {...{}}
                    />
                  </div>
                  {/* name="divider" id="I99:6910;5705:7349" type="LINE" */}
                  <Flex
                    style={{
                      width: "1px",
                      height: "12px",
                      background: "var(--border-border-neutral-30, #d5d5d5)",
                    }}
                  >
                    {/* name="divider" id=I99:6910;5705:7349 type=LINE */}
                    <></>
                  </Flex>
                  {/* name="font" id="I99:6910;5705:7350" type="GROUP" */}
                  <Flex style={{ width: "20px", height: "20px" }}>
                    {/* name="link" id="I99:6910;5705:7351" type="INSTANCE" */}
                    <Icon.QodeLink
                      style={{ width: "20px", height: "20px", flexShrink: "0" }}
                      {...{}}
                    />
                  </Flex>
                </Flex>
              </div>
              {/* name="Action" id="99:6911" type="FRAME" */}
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                {/* name="Button" id="99:6912" type="INSTANCE" */}
                <QodeButton
                  style={{
                    display: "flex",
                    width: "164px",
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
                    selectIconLeft: <Icon.QodeVideoPlus />,
                    selectIconRight: <Icon.QodeMagnifyingGlass />,
                    buttonname: "Setup interview",
                    iconLeft: true,
                    type: "default",
                    size: "default",
                    state: "default",
                    content: "default",
                    danger: false,
                    ghost: false,
                  }}
                />
                {/* name="Button" id="99:6913" type="INSTANCE" */}
                <QodeButton
                  style={{
                    display: "flex",
                    width: "164px",
                    height: "var(--size-height-controlheight, 32px)",
                    padding: "4px 16px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "8px",
                    borderRadius: "var(--border-radius-rounded, 999px)",
                    border:
                      "1px solid var(--border-border-primary-30, #107ecc)",
                    background: "var(--background-bg-primary, #1597f4)",
                  }}
                  {...{
                    onlyIcon: <Icon.QodeMagnifyingGlass />,
                    iconLeft: true,
                    iconRight: false,
                    buttonname: "Send",
                    selectIconRight: <Icon.QodeMagnifyingGlass />,
                    selectIconLeft: <Icon.QodePaperPlaneTop />,
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
        </>
      )}
    </>
  )
}
