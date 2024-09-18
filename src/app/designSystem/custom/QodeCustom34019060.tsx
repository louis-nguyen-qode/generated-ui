// id="340:19060"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeButton } from "@designSystem/ant/QodeButton"
import QodeSvgI1131159118217652 from "@designSystem/icon/svg/QodeSvgI1131159118217652"
import { QodeTag } from "@designSystem/ant/QodeTag"

export interface QodeCustom34019060Props {
  property_1?: "Add job" | "Variant2"
}

export const QodeCustom34019060: React.FC<
  QodeCustom34019060Props & { style?: CSSProperties }
> = ({ property_1 = "Add job", ...rest }) => {
  return (
    <>
      {/* name="Modal/Add job" id="340:19060" type="COMPONENT_SET" */}
      {/* id="117:5795" */}
      {`${property_1}` === `Add job` && (
        <>
          {/* name="Property 1=Add job" id="117:5795" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "540px",
              height: "580px",
              flexDirection: "column",
              alignItems: "flex-start",
              flexShrink: "0",
              borderRadius: "var(--style-radius-borderradius, 8px)",
              background: "var(--background-bg-white, #fff)",
              boxShadow:
                "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 6px 16px 0px rgba(0, 0, 0, 0.08)",
            }}
          >
            {/* name="Modal/Header" id="113:11578" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                height: "42px",
                padding: "12px 20px",
                justifyContent: "flex-end",
                alignItems: "center",
                gap: "16px",
                flexShrink: "0",
                alignSelf: "stretch",
                borderBottom:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
              }}
            >
              {/* name="Symbol" id="I113:11578;5656:26431" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  width: "24px",
                  height: "24px",
                  padding: "3px",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                  background:
                    "var(--color-neutral-background-controlitembgactive, #eaeff8)",
                }}
              >
                {/* name="icons" id="I113:11578;5656:26432" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    padding: "1.5px 1.498px 1.5px 1.5px",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: "1 0 0",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name="Vector" id="I113:11578;5656:26432;630:10668" type="VECTOR" */}
                  <Flex
                    style={{
                      width: "15.002px",
                      height: "15px",
                      fill: "var(--color-primary-colorprimarytext, #2d64bc)",
                    }}
                  >
                    {/* name="Vector" id=I113:11578;5656:26432;630:10668 type=VECTOR */}
                    <></>
                  </Flex>
                </Flex>
              </div>
              {/* name="content" id="I113:11578;5656:26433" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "flex-end",
                  flex: "1 0 0",
                }}
              >
                <span
                  style={{
                    alignSelf: "stretch",
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-heading6, 16px)",
                    fontStyle: "normal",
                    fontWeight: "600",
                    lineHeight:
                      "var(--lineheight-lineheight-h6, 22px) /* 137.5% */",
                  }}
                >{`Add job`}</span>
                <span
                  style={{
                    alignSelf: "stretch",
                    color:
                      "var(--color-neutral-text-colortextlabel, rgba(0, 0, 0, 0.88))",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-small, 12px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheighsm, 16px) /* 133.333% */",
                  }}
                >{`Accessibility`}</span>
              </div>
              {/* name="xmark" id="I113:11578;5656:26436" type="INSTANCE" */}
              <Icon.QodeXmark
                style={{ width: "24px", height: "24px" }}
                {...{}}
              />
            </Flex>
            {/* name="body" id="113:11296" type="FRAME" */}
            <div
              style={{
                display: "flex",
                padding: "20px",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "20px",
                flex: "1 0 0",
                alignSelf: "stretch",
              }}
            >
              {/* name="Button" id="113:11334" type="INSTANCE" */}
              <QodeButton
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding:
                    "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  alignSelf: "stretch",
                  borderRadius: "var(--border-radius-rounded, 999px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-primary-20, #158de2)",
                }}
                {...{
                  onlyIcon: <Icon.QodeMagnifyingGlass />,
                  buttonname: "Upload JD",
                  selectIconLeft: <Icon.QodeUpload />,
                  iconRight: false,
                  selectIconRight: <Icon.QodeMagnifyingGlass />,
                  iconLeft: true,
                  type: "primary",
                  size: "default",
                  state: "default",
                  content: "default",
                  danger: false,
                  ghost: true,
                }}
              />
              {/* name="Frame 37126" id="113:11299" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  flex: "1 0 0",
                  alignSelf: "stretch",
                }}
              >
                {/* name="Input__Text Area" id="113:11591" type="INSTANCE" */}
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
                  >{`Or paste your job description here`}</span>
                  {/* name="Resizer" id="I113:11591;182:17652" type="BOOLEAN_OPERATION" */}
                  <QodeSvgI1131159118217652
                    style={{
                      width: "8.354px",
                      height: "8.354px",
                      position: "absolute",
                      left: "489px",
                      top: "379px",
                      fill: "var(--color-neutral-text-colortext, #000)",
                    }}
                    {...{}}
                  />
                  {/* name="button" id="I113:11591;3012:28019" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      width: "466px",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      position: "absolute",
                      left: "8px",
                      bottom: "4px",
                    }}
                  >
                    {/* name="Button" id="I113:11591;3012:28020" type="INSTANCE" */}
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
                    {/* name="vote" id="I113:11591;3012:28021" type="FRAME" */}
                    <div style={{ display: "flex", alignItems: "flex-start" }}>
                      {/* name="Button" id="I113:11591;3012:28022" type="INSTANCE" */}
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
                      {/* name="Button" id="I113:11591;3012:28023" type="INSTANCE" */}
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
              </div>
            </div>
            {/* name="Modal/Action" id="340:20401" type="FRAME" */}
            <div
              style={{
                display: "flex",
                padding: "12px 20px",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                alignSelf: "stretch",
                borderTop:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
                background: "var(--background-bg-neutral-5, #f8f6f6)",
              }}
            >
              {/* name="Wrap" id="340:20402" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  height: "32px",
                  alignItems: "center",
                  gap: "12px",
                  alignSelf: "stretch",
                }}
              >
                {/* name="Button" id="340:20404" type="INSTANCE" */}
                <QodeButton
                  style={{
                    display: "flex",
                    height: "var(--size-height-controlheight, 32px)",
                    padding: "4px 16px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "8px",
                    flex: "1 0 0",
                    borderRadius: "var(--border-radius-rounded, 999px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                    background: "var(--background-bg-white, #fff)",
                  }}
                  {...{
                    onlyIcon: <Icon.QodeMagnifyingGlass />,
                    iconRight: false,
                    selectIconLeft: <Icon.QodeIcons />,
                    selectIconRight: <Icon.QodeChevronRight />,
                    buttonname: "Cancel",
                    iconLeft: false,
                    type: "default",
                    size: "default",
                    state: "default",
                    content: "default",
                    danger: false,
                    ghost: false,
                  }}
                />
                {/* name="Button" id="340:20585" type="INSTANCE" */}
                <QodeButton
                  style={{
                    display: "flex",
                    height: "var(--size-height-controlheight, 32px)",
                    padding: "4px 16px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "8px",
                    flex: "1 0 0",
                    borderRadius: "var(--border-radius-rounded, 999px)",
                    border:
                      "1px solid var(--border-border-primary-30, #107ecc)",
                    background: "var(--background-bg-primary, #1597f4)",
                  }}
                  {...{
                    onlyIcon: <Icon.QodeMagnifyingGlass />,
                    iconLeft: false,
                    iconRight: true,
                    buttonname: "Next",
                    selectIconRight: <Icon.QodeChevronRight />,
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
        </>
      )}
      {/* id="340:19061" */}
      {`${property_1}` === `Variant2` && (
        <>
          {/* name="Property 1=Variant2" id="340:19061" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "540px",
              height: "580px",
              flexDirection: "column",
              alignItems: "flex-start",
              flexShrink: "0",
              borderRadius: "var(--style-radius-borderradius, 8px)",
              background: "var(--background-bg-white, #fff)",
              boxShadow:
                "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 6px 16px 0px rgba(0, 0, 0, 0.08)",
            }}
          >
            {/* name="Modal/Header" id="340:19062" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                height: "42px",
                padding: "12px 20px",
                justifyContent: "flex-end",
                alignItems: "center",
                gap: "16px",
                flexShrink: "0",
                alignSelf: "stretch",
                borderBottom:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
              }}
            >
              {/* name="Symbol" id="I340:19062;5656:26431" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  width: "24px",
                  height: "24px",
                  padding: "3px",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                  background:
                    "var(--color-neutral-background-controlitembgactive, #eaeff8)",
                }}
              >
                {/* name="icons" id="I340:19062;5656:26432" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    padding: "1.5px 1.498px 1.5px 1.5px",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: "1 0 0",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name="Vector" id="I340:19062;5656:26432;630:10668" type="VECTOR" */}
                  <Flex
                    style={{
                      width: "15.002px",
                      height: "15px",
                      fill: "var(--color-primary-colorprimarytext, #2d64bc)",
                    }}
                  >
                    {/* name="Vector" id=I340:19062;5656:26432;630:10668 type=VECTOR */}
                    <></>
                  </Flex>
                </Flex>
              </div>
              {/* name="content" id="I340:19062;5656:26433" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "flex-end",
                  flex: "1 0 0",
                }}
              >
                <span
                  style={{
                    alignSelf: "stretch",
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-heading6, 16px)",
                    fontStyle: "normal",
                    fontWeight: "600",
                    lineHeight:
                      "var(--lineheight-lineheight-h6, 22px) /* 137.5% */",
                  }}
                >{`Add job`}</span>
                <span
                  style={{
                    alignSelf: "stretch",
                    color:
                      "var(--color-neutral-text-colortextlabel, rgba(0, 0, 0, 0.88))",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-small, 12px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheighsm, 16px) /* 133.333% */",
                  }}
                >{`Accessibility`}</span>
              </div>
              {/* name="xmark" id="I340:19062;5656:26436" type="INSTANCE" */}
              <Icon.QodeXmark
                style={{ width: "24px", height: "24px" }}
                {...{}}
              />
            </Flex>
            {/* name="body" id="340:19063" type="FRAME" */}
            <div
              style={{
                display: "flex",
                padding: "20px",
                flexDirection: "column",
                alignItems: "center",
                gap: "20px",
                flex: "1 0 0",
                alignSelf: "stretch",
              }}
            >
              {/* name="Frame 37363" id="340:20735" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                {/* name="Icon" id="340:20699" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    width: "40px",
                    height: "40px",
                    padding: "8px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "10px",
                    borderRadius: "8px",
                    border:
                      "1px solid var(--border-border-primary-30, #107ecc)",
                    background: "var(--background-bg-primary, #1597f4)",
                  }}
                >
                  {/* name="briefcase" id="340:20700" type="INSTANCE" */}
                  <Icon.QodeBriefcase
                    style={{ width: "24px", height: "24px", flexShrink: "0" }}
                    {...{}}
                  />
                </div>
                <span
                  style={{
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-size-sizemd-20px, 20px)",
                    fontStyle: "normal",
                    fontWeight: "600",
                    lineHeight:
                      "var(--lineheight-lineheight-xl, 28px) /* 140% */",
                  }}
                >{`Confirm role`}</span>
              </div>
              {/* name="Frame 37364" id="340:20752" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "12px",
                  alignSelf: "stretch",
                }}
              >
                {/* name="Title" id="340:20682" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name="Input__Label" id="340:20683" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "150px",
                      height: "var(--size-height-controlheight, 32px)",
                      alignItems: "center",
                      gap: "var(--size-padding-paddingxxs, 4px)",
                    }}
                  >
                    {/* name="Icon" id="I340:20683;5769:7203" type="INSTANCE" */}
                    <Icon.QodeBriefcaseBlank
                      style={{ width: "16px", height: "16px", flexShrink: "0" }}
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
                    >{`Job title`}</span>
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
                    {/* name="Icon" id="I340:20683;182:6058" type="INSTANCE" */}
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
                  {/* name="Input/Text" id="340:20684" type="INSTANCE" */}
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
                    {/* name="🎰 icon left" id="I340:20684;182:10156" type="INSTANCE" */}
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
                    >{`Senior Software Engineer`}</span>
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
                    {/* name="calendar-days" id="I340:20684;182:10160" type="INSTANCE" */}
                    <Icon.QodeCalendarDays
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
                {/* name="Title" id="340:20703" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name="Input__Label" id="340:20704" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "150px",
                      height: "var(--size-height-controlheight, 32px)",
                      alignItems: "center",
                      gap: "var(--size-padding-paddingxxs, 4px)",
                    }}
                  >
                    {/* name="Icon" id="I340:20704;5769:7203" type="INSTANCE" */}
                    <Icon.QodeLocationDot
                      style={{ width: "16px", height: "16px", flexShrink: "0" }}
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
                    >{`Location`}</span>
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
                    {/* name="Icon" id="I340:20704;182:6058" type="INSTANCE" */}
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
                  {/* name="Input/Select" id="557:30971" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      height: "var(--size-height-controlheight, 32px)",
                      padding: "0px var(--size-padding-paddingsm, 12px)",
                      alignItems: "center",
                      gap: "var(--size-padding-paddingxxs, 4px)",
                      alignSelf: "stretch",
                      borderRadius: "var(--border-radius-base, 8px)",
                      border:
                        "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                      background: "var(--neutral-white, #fff)",
                    }}
                  >
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
                    >{`Ho Chi Minh city, Vietnam`}</span>
                    {/* name="Icon" id="I557:30971;170:24281" type="INSTANCE" */}
                    <Icon.QodeChevronDown
                      style={{ width: "16px", height: "16px" }}
                      {...{}}
                    />
                  </Flex>
                </div>
                {/* name="Title" id="340:20719" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name="Input__Label" id="340:20720" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "150px",
                      height: "var(--size-height-controlheight, 32px)",
                      alignItems: "center",
                      gap: "var(--size-padding-paddingxxs, 4px)",
                    }}
                  >
                    {/* name="Icon" id="I340:20720;5769:7203" type="INSTANCE" */}
                    <Icon.QodePenRuler
                      style={{ width: "16px", height: "16px", flexShrink: "0" }}
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
                    >{`Requirements`}</span>
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
                    {/* name="Icon" id="I340:20720;182:6058" type="INSTANCE" */}
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
                  {/* name="Input" id="340:20753" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      height: "108px",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      gap: "8px",
                      alignSelf: "stretch",
                    }}
                  >
                    {/* name="Input/Text" id="340:20754" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        height: "var(--size-height-controlheight, 32px)",
                        padding: "10px 12px",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "8px",
                        flexShrink: "0",
                        alignSelf: "stretch",
                        borderRadius: "var(--border-radius-base, 8px)",
                        border:
                          "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                        background: "var(--background-bg-white, #fff)",
                      }}
                    >
                      {/* name="🎰 icon left" id="I340:20754;182:10116" type="INSTANCE" */}
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
                          color:
                            "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                          textOverflow: "ellipsis",
                          fontFamily:
                            'var(--font-family-fontfamily, "sf pro display")',
                          fontSize: "var(--font-size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--line-height-lineheight, 20px) /* 142.857% */",
                        }}
                      >{`Add skills`}</span>
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
                      {/* name="arrow-turn-down-left" id="I340:20754;182:10118" type="INSTANCE" */}
                      <Icon.QodeArrowTurnDownLeft
                        style={{ width: "16px", height: "16px" }}
                        {...{}}
                      />
                    </Flex>
                    {/* name="Emails" id="340:20755" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        alignContent: "flex-start",
                        gap: "8px",
                        alignSelf: "stretch",
                        flexWrap: "wrap",
                      }}
                    >
                      {/* name="Tag" id="340:20756" type="INSTANCE" */}
                      <QodeTag
                        style={{
                          display: "flex",
                          height: "30px",
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
                      {/* name="Tag" id="340:20757" type="INSTANCE" */}
                      <QodeTag
                        style={{
                          display: "flex",
                          height: "30px",
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
                      {/* name="Tag" id="340:20758" type="INSTANCE" */}
                      <QodeTag
                        style={{
                          display: "flex",
                          height: "30px",
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
                      {/* name="Tag" id="340:20776" type="INSTANCE" */}
                      <QodeTag
                        style={{
                          display: "flex",
                          height: "30px",
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* name="Modal/Action" id="340:20638" type="FRAME" */}
            <div
              style={{
                display: "flex",
                padding: "12px 20px",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                alignSelf: "stretch",
                borderTop:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
                background: "var(--background-bg-neutral-5, #f8f6f6)",
              }}
            >
              {/* name="Wrap" id="340:20639" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  height: "32px",
                  alignItems: "center",
                  gap: "12px",
                  alignSelf: "stretch",
                }}
              >
                {/* name="Button" id="340:20640" type="INSTANCE" */}
                <QodeButton
                  style={{
                    display: "flex",
                    height: "var(--size-height-controlheight, 32px)",
                    padding: "4px 16px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "8px",
                    flex: "1 0 0",
                    borderRadius: "var(--border-radius-rounded, 999px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                    background: "var(--background-bg-white, #fff)",
                  }}
                  {...{
                    onlyIcon: <Icon.QodeMagnifyingGlass />,
                    iconRight: false,
                    selectIconLeft: <Icon.QodeChevronLeft />,
                    selectIconRight: <Icon.QodeMagnifyingGlass />,
                    buttonname: "Back",
                    iconLeft: false,
                    type: "default",
                    size: "default",
                    state: "default",
                    content: "default",
                    danger: false,
                    ghost: false,
                  }}
                />
                {/* name="Button" id="340:20641" type="INSTANCE" */}
                <QodeButton
                  style={{
                    display: "flex",
                    height: "var(--size-height-controlheight, 32px)",
                    padding: "4px 16px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "8px",
                    flex: "1 0 0",
                    borderRadius: "var(--border-radius-rounded, 999px)",
                    border:
                      "1px solid var(--border-border-primary-30, #107ecc)",
                    background: "var(--background-bg-primary, #1597f4)",
                  }}
                  {...{
                    onlyIcon: <Icon.QodeMagnifyingGlass />,
                    iconLeft: true,
                    iconRight: false,
                    buttonname: "Find candidates",
                    selectIconRight: <Icon.QodeMagnifyingGlass />,
                    selectIconLeft: <Icon.QodeMagnifyingGlass />,
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
