// id="715:30656"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg616010 from "@designSystem/icon/svg/QodeSvg616010"
import { QodeButton } from "@designSystem/ant/QodeButton"
import { QodePagination } from "@designSystem/ant/QodePagination"
import QodeSvgI18310993171271321702636317024281 from "@designSystem/icon/svg/QodeSvgI18310993171271321702636317024281"

export interface QodeCustom71530656Props {
  screensize?: "1600" | "1280" | "1366" | "1440"
}

export const QodeCustom71530656: React.FC<
  QodeCustom71530656Props & { style?: CSSProperties }
> = ({ screensize = "1280", ...rest }) => {
  return (
    <>
      {/* name="Responsive/Job" id="715:30656" type="COMPONENT_SET" */}
      {/* id="715:30655" */}
      {`${screensize}` === `1280` && (
        <>
          {/* name="screensize=1280" id="715:30655" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "flex-start",
              background: "#FFF",
            }}
          >
            {/* name="Navbar" id="189:19144" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                width: "84px",
                flexDirection: "column",
                alignItems: "center",
                alignSelf: "stretch",
                borderRight:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--background-bg-white, #fff)",
              }}
            >
              {/* name="Logo" id="I189:19144;1:3092" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  padding: "16px 0px",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "4px",
                  alignSelf: "stretch",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                }}
              >
                {/* name="logo" id="I189:19144;635:31404" type="INSTANCE" */}
                <QodeSvg616010
                  style={{ width: "40px", height: "40px" }}
                  {...{
                    type: "Default",
                    darkmode: "yes",
                    orientation: "landscape",
                    wordmark: "no",
                  }}
                />
              </div>
              {/* name="V-Menu" id="I189:19144;1:3094" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  padding: "16px 8px",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "16px",
                  flex: "1 0 0",
                  alignSelf: "stretch",
                }}
              >
                {/* name="Navbar/Menu" id="I189:19144;4:124" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "84px",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-size-sizexxs-6px, 6px)",
                  }}
                >
                  {/* name="Icon" id="I189:19144;4:124;4:78" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      width: "40px",
                      height: "40px",
                      padding: "8px",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "10px",
                      borderRadius: "var(--size-size-sizexs-8px, 8px)",
                      border:
                        "1px solid var(--border-border-neutral-20, #e3e3e3)",
                      background: "var(--background-bg-neutral-5, #f8f6f6)",
                    }}
                  >
                    {/* name="cube" id="I189:19144;4:124;4:79" type="INSTANCE" */}
                    <Icon.QodeCube
                      style={{ width: "24px", height: "24px", flexShrink: "0" }}
                      {...{}}
                    />
                  </div>
                  <span
                    style={{
                      alignSelf: "stretch",
                      color: "var(--text-text-neutral-30, #656565)",
                      textAlign: "center",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-small, 12px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                    }}
                  >{`Dashboard`}</span>
                </Flex>
                {/* name="Navbar/Menu" id="I189:19144;16:5813" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "84px",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-size-sizexxs-6px, 6px)",
                  }}
                >
                  {/* name="Icon" id="I189:19144;16:5813;4:92" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      width: "40px",
                      height: "40px",
                      padding: "8px",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "10px",
                      borderRadius: "var(--size-size-sizexs-8px, 8px)",
                      border:
                        "1px solid var(--border-border-primary-30, #107ecc)",
                      background: "var(--background-bg-primary, #1597f4)",
                    }}
                  >
                    {/* name="briefcase" id="I189:19144;16:5813;4:93" type="INSTANCE" */}
                    <Icon.QodeBriefcase
                      style={{ width: "24px", height: "24px", flexShrink: "0" }}
                      {...{}}
                    />
                  </div>
                  <span
                    style={{
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
                  >{`Jobs`}</span>
                </Flex>
                {/* name="Navbar/Menu" id="I189:19144;4:54" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "84px",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-size-sizexxs-6px, 6px)",
                  }}
                >
                  {/* name="Icon" id="I189:19144;4:54;4:78" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      width: "40px",
                      height: "40px",
                      padding: "8px",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "10px",
                      borderRadius: "var(--size-size-sizexs-8px, 8px)",
                      border:
                        "1px solid var(--border-border-neutral-20, #e3e3e3)",
                      background: "var(--background-bg-neutral-5, #f8f6f6)",
                    }}
                  >
                    {/* name="user-group" id="I189:19144;4:54;4:79" type="INSTANCE" */}
                    <Icon.QodeUserGroup
                      style={{ width: "24px", height: "24px", flexShrink: "0" }}
                      {...{}}
                    />
                  </div>
                  <span
                    style={{
                      alignSelf: "stretch",
                      color: "var(--text-text-neutral-30, #656565)",
                      textAlign: "center",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-small, 12px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                    }}
                  >{`Talent pool`}</span>
                </Flex>
                {/* name="Navbar/Menu" id="I189:19144;4:95" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "84px",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-size-sizexxs-6px, 6px)",
                  }}
                >
                  {/* name="Icon" id="I189:19144;4:95;4:78" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      width: "40px",
                      height: "40px",
                      padding: "8px",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "10px",
                      borderRadius: "var(--size-size-sizexs-8px, 8px)",
                      border:
                        "1px solid var(--border-border-neutral-20, #e3e3e3)",
                      background: "var(--background-bg-neutral-5, #f8f6f6)",
                    }}
                  >
                    {/* name="video" id="I189:19144;4:95;4:79" type="INSTANCE" */}
                    <Icon.QodeVideo
                      style={{ width: "24px", height: "24px", flexShrink: "0" }}
                      {...{}}
                    />
                  </div>
                  <span
                    style={{
                      alignSelf: "stretch",
                      color: "var(--text-text-neutral-30, #656565)",
                      textAlign: "center",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-small, 12px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                    }}
                  >{`Interviews`}</span>
                </Flex>
              </div>
              {/* name="Btm" id="I189:19144;1:3098" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  padding: "16px 0px",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                {/* name="Profile" id="I189:19144;1:3099" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-end",
                    gap: "var(--font-size-large, 16px)",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name="Button" id="I189:19144;1:3099;5007:11919" type="INSTANCE" */}
                  <QodeButton
                    style={{
                      display: "flex",
                      height: "var(--size-height-controlheightlg, 40px)",
                      padding:
                        "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingsm, 12px)",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "var(--size-padding-paddingxs, 8px)",
                      borderRadius: "var(--style-radius-borderround, 999px)",
                      border:
                        "var(--style-line-width-linewidth, 1px) solid var(--color-gold-purple-colorgoldpurpleborder, #efdbff)",
                      background:
                        "var(--color-gold-purple-colorgoldpurplebg, #f9f0ff)",
                    }}
                    {...{
                      icononly: "630:15277",
                      iconR: <Icon.QodeMagnifyingGlass />,
                      title: "Button",
                      iconL: false,
                      type: "default",
                      size: "large",
                      state: "default",
                      content: "icon",
                      danger: false,
                      ghost: false,
                    }}
                  />
                </Flex>
                {/* name="Profile" id="I189:19144;1:3100" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-end",
                    gap: "var(--font-size-large, 16px)",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name="Button" id="I189:19144;1:3100;5007:11919" type="INSTANCE" */}
                  <QodeButton
                    style={{
                      display: "flex",
                      height: "var(--size-height-controlheightlg, 40px)",
                      padding:
                        "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingsm, 12px)",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "var(--size-padding-paddingxs, 8px)",
                      borderRadius: "var(--style-radius-borderround, 999px)",
                      border:
                        "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                      background:
                        "var(--color-neutral-background-colorbgcontainer, #fff)",
                    }}
                    {...{
                      icononly: <Icon.QodeUser />,
                      iconR: <Icon.QodeMagnifyingGlass />,
                      title: "Button",
                      iconL: false,
                      type: "default",
                      size: "large",
                      state: "default",
                      content: "icon",
                      danger: false,
                      ghost: false,
                    }}
                  />
                </Flex>
              </div>
            </Flex>
            {/* name="Body" id="189:19145" type="FRAME" */}
            <div
              style={{
                display: "flex",
                width: "1196px",
                height: "768px",
                padding: "40px 40px 0px 40px",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "40px",
                background: "var(--app-bg, #f4f4f6)",
              }}
            >
              {/* name="Header" id="189:19146" type="FRAME" */}
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
                    fontSize: "var(--size-heading3, 28px)",
                    fontStyle: "normal",
                    fontWeight: "600",
                    lineHeight:
                      "var(--lineheight-lineheight-h3, 36px) /* 128.571% */",
                  }}
                >{`My jobs`}</span>
                {/* name="Search bar" id="189:19148" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "480px",
                    height: "var(--size-height-controlheightlg, 40px)",
                    padding: "10px 12px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "12px",
                    borderRadius: "var(--border-radius-base, 8px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                    background: "var(--background-bg-white, #fff)",
                  }}
                >
                  {/* name="🎰 icon left" id="I189:19148;2720:38139" type="INSTANCE" */}
                  <Icon.QodeMagnifyingGlass
                    style={{ width: "16px", height: "16px", flexShrink: "0" }}
                    {...{}}
                  />
                  <span
                    style={{
                      color: "var(--color-neutral-text-colortext, #000)",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-large, 16px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight: "24px /* 150% */",
                    }}
                  >{`PRE`}</span>
                  <span
                    style={{
                      flex: "1 0 0",
                      color: "var(--text-text-placeholder, #a7a7a7)",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-large, 16px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight: "24px /* 150% */",
                    }}
                  >{`Search`}</span>
                  <span
                    style={{
                      color:
                        "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-large, 16px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight: "24px /* 150% */",
                    }}
                  >{`SUF`}</span>
                  {/* name="🎰 icon right" id="I189:19148;2720:38143" type="INSTANCE" */}
                  <Icon.QodeUser
                    style={{
                      display: "flex",
                      width: "16px",
                      height: "16px",
                      padding: "1.6px 2.4px",
                      justifyContent: "center",
                      alignItems: "center",
                      flexShrink: "0",
                    }}
                    {...{}}
                  />
                </Flex>
                {/* name="Button" id="189:19149" type="INSTANCE" */}
                <QodeButton
                  style={{
                    display: "flex",
                    width: "130px",
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
                    buttonname: "Add job",
                    selectIconRight: <Icon.QodeMagnifyingGlass />,
                    selectIconLeft: <Icon.QodePlus />,
                    type: "primary",
                    size: "default",
                    state: "default",
                    content: "default",
                    danger: false,
                    ghost: false,
                  }}
                />
              </div>
              {/* name="Job list" id="189:19150" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "20px",
                  flex: "1 0 0",
                  alignSelf: "stretch",
                }}
              >
                {/* name="Jobs" id="189:19151" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    alignContent: "flex-start",
                    gap: "8px",
                    alignSelf: "stretch",
                    flexWrap: "wrap",
                    borderRadius: "8px",
                  }}
                >
                  {/* name="Job item" id="189:19152" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "364px",
                      maxWidth: "440px",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      borderRadius: "var(--border-radius-large, 12px)",
                      border:
                        "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                      background: "var(--background-bg-white, #fff)",
                    }}
                  >
                    {/* name="Wrap" id="I189:19152;47:5566" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding: "16px",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        gap: "12px",
                        alignSelf: "stretch",
                        borderBottom:
                          "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                      }}
                    >
                      {/* name="Job title" id="I189:19152;47:5567" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "12px",
                          alignSelf: "stretch",
                        }}
                      >
                        <span
                          style={{
                            maxHeight: "56px",
                            flex: "1 0 0",
                            color: "var(--text-text-neutral-50, #1d1d1d)",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-size-sizemd-20px, 20px)",
                            fontStyle: "normal",
                            fontWeight: "600",
                            lineHeight:
                              "var(--lineheight-lineheight-xl, 28px) /* 140% */",
                          }}
                        >{`Sales Consultant`}</span>
                        {/* name="arrow-up-right" id="I189:19152;47:5569" type="INSTANCE" */}
                        <Icon.QodeArrowUpRight
                          style={{ width: "24px", height: "24px" }}
                          {...{}}
                        />
                      </div>
                      {/* name="Wrap" id="I189:19152;485:35083" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          paddingRight: "16px",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          gap: "12px",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name="Job/Attributes" id="I189:19152;485:36887" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            padding: "4px 12px",
                            alignItems: "center",
                            gap: "12px",
                            borderRadius: "99px",
                            background: "var(--neutral-gray-5, #f8f6f6)",
                          }}
                        >
                          {/* name="Urgent" id="I189:19152;485:36887;485:36863" type="FRAME" */}
                          <div
                            style={{
                              display: "flex",
                              padding: "2px var(--size-size-sizexxs-6px, 6px)",
                              justifyContent: "center",
                              alignItems: "center",
                              gap: "10px",
                              borderRadius: "12px",
                              background: "var(--neutral-gray-90, #464646)",
                            }}
                          >
                            <span
                              style={{
                                color: "#FFF",
                                textAlign: "center",
                                fontFamily: '"SF Pro Display"',
                                fontSize: "10px",
                                fontStyle: "normal",
                                fontWeight: "600",
                                lineHeight: "normal",
                              }}
                            >{`URGENT`}</span>
                          </div>
                          {/* name="Yoe" id="I189:19152;485:36887;485:36865" type="FRAME" */}
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "12px",
                            }}
                          >
                            <span
                              style={{
                                color: "var(--text-text-neutral-50, #1d1d1d)",
                                fontFamily:
                                  'var(--family-family, "sf pro display")',
                                fontSize: "var(--size-base, 14px)",
                                fontStyle: "normal",
                                fontWeight: "400",
                                lineHeight:
                                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              }}
                            >{`3 yoe`}</span>
                            {/* name="Line 3" id="I189:19152;485:36887;485:36867" type="LINE" */}
                            <Flex
                              style={{
                                width: "1px",
                                height: "8px",
                                background:
                                  "var(--border-border-neutral-50, #6f6f6f)",
                              }}
                            >
                              {/* name="Line 3" id=I189:19152;485:36887;485:36867 type=LINE */}
                              <></>
                            </Flex>
                          </div>
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Vietnam`}</span>
                        </Flex>
                        {/* name="Skills" id="I189:19152;47:5576" type="FRAME" */}
                        <div
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "12px",
                            alignSelf: "stretch",
                          }}
                        >
                          <span
                            style={{
                              color: "var(--text-text-neutral-40, #464646)",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "700",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Skills:`}</span>
                          <span
                            style={{
                              flex: "1 0 0",
                              color: "var(--text-text-neutral-40, #464646)",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Data analysis, Sales automation, Supervising, Salesforce, Hubspot, +5 more`}</span>
                        </div>
                      </div>
                    </div>
                    {/* name="Action" id="I189:19152;47:5554" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding: "16px",
                        justifyContent: "space-between",
                        alignItems: "center",
                        alignSelf: "stretch",
                        background: "var(--neutral-gray-5, #f8f6f6)",
                      }}
                    >
                      {/* name="Status" id="I189:19152;47:5555" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                        }}
                      >
                        {/* name="Job/Quick access" id="I189:19152;47:5556" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "var(--size-size-sizexxs-6px, 6px)",
                            borderRadius: "99px",
                          }}
                        >
                          {/* name="heart" id="I189:19152;47:5556;47:5444" type="INSTANCE" */}
                          <Icon.QodeHeart
                            style={{ width: "16px", height: "16px" }}
                            {...{}}
                          />
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "500",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              textDecorationLine: "underline",
                            }}
                          >{`12 shortlisted`}</span>
                        </Flex>
                        {/* name="divider" id="I189:19152;47:5557" type="LINE" */}
                        <Flex
                          style={{
                            width: "1px",
                            height: "15px",
                            background:
                              "var(--border-border-neutral-30, #d5d5d5)",
                          }}
                        >
                          {/* name="divider" id=I189:19152;47:5557 type=LINE */}
                          <></>
                        </Flex>
                        {/* name="Job/Quick access" id="I189:19152;47:5558" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "var(--size-size-sizexxs-6px, 6px)",
                            borderRadius: "99px",
                          }}
                        >
                          {/* name="video" id="I189:19152;47:5558;47:5444" type="INSTANCE" */}
                          <Icon.QodeVideo
                            style={{ width: "16px", height: "16px" }}
                            {...{}}
                          />
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "500",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              textDecorationLine: "underline",
                            }}
                          >{`4 interviewed`}</span>
                        </Flex>
                      </div>
                      <span
                        style={{
                          color: "var(--text-text-primary-20, #1597f4)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "500",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          textDecorationLine: "underline",
                        }}
                      >{`JD`}</span>
                    </div>
                  </Flex>
                  {/* name="Job item" id="189:19153" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "364px",
                      maxWidth: "440px",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      borderRadius: "var(--border-radius-large, 12px)",
                      border:
                        "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                      background: "var(--background-bg-white, #fff)",
                    }}
                  >
                    {/* name="Wrap" id="I189:19153;47:5566" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding: "16px",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        gap: "12px",
                        alignSelf: "stretch",
                        borderBottom:
                          "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                      }}
                    >
                      {/* name="Job title" id="I189:19153;47:5567" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "12px",
                          alignSelf: "stretch",
                        }}
                      >
                        <span
                          style={{
                            maxHeight: "56px",
                            flex: "1 0 0",
                            color: "var(--text-text-neutral-50, #1d1d1d)",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-size-sizemd-20px, 20px)",
                            fontStyle: "normal",
                            fontWeight: "600",
                            lineHeight:
                              "var(--lineheight-lineheight-xl, 28px) /* 140% */",
                          }}
                        >{`Sales Consultant`}</span>
                        {/* name="arrow-up-right" id="I189:19153;47:5569" type="INSTANCE" */}
                        <Icon.QodeArrowUpRight
                          style={{ width: "24px", height: "24px" }}
                          {...{}}
                        />
                      </div>
                      {/* name="Wrap" id="I189:19153;485:35083" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          paddingRight: "16px",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          gap: "12px",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name="Job/Attributes" id="I189:19153;485:36887" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            padding: "4px 12px",
                            alignItems: "center",
                            gap: "12px",
                            borderRadius: "99px",
                            background: "var(--neutral-gray-5, #f8f6f6)",
                          }}
                        >
                          {/* name="Urgent" id="I189:19153;485:36887;485:36863" type="FRAME" */}
                          <div
                            style={{
                              display: "flex",
                              padding: "2px var(--size-size-sizexxs-6px, 6px)",
                              justifyContent: "center",
                              alignItems: "center",
                              gap: "10px",
                              borderRadius: "12px",
                              background: "var(--neutral-gray-90, #464646)",
                            }}
                          >
                            <span
                              style={{
                                color: "#FFF",
                                textAlign: "center",
                                fontFamily: '"SF Pro Display"',
                                fontSize: "10px",
                                fontStyle: "normal",
                                fontWeight: "600",
                                lineHeight: "normal",
                              }}
                            >{`URGENT`}</span>
                          </div>
                          {/* name="Yoe" id="I189:19153;485:36887;485:36865" type="FRAME" */}
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "12px",
                            }}
                          >
                            <span
                              style={{
                                color: "var(--text-text-neutral-50, #1d1d1d)",
                                fontFamily:
                                  'var(--family-family, "sf pro display")',
                                fontSize: "var(--size-base, 14px)",
                                fontStyle: "normal",
                                fontWeight: "400",
                                lineHeight:
                                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              }}
                            >{`3 yoe`}</span>
                            {/* name="Line 3" id="I189:19153;485:36887;485:36867" type="LINE" */}
                            <Flex
                              style={{
                                width: "1px",
                                height: "8px",
                                background:
                                  "var(--border-border-neutral-50, #6f6f6f)",
                              }}
                            >
                              {/* name="Line 3" id=I189:19153;485:36887;485:36867 type=LINE */}
                              <></>
                            </Flex>
                          </div>
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Vietnam`}</span>
                        </Flex>
                        {/* name="Skills" id="I189:19153;47:5576" type="FRAME" */}
                        <div
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "12px",
                            alignSelf: "stretch",
                          }}
                        >
                          <span
                            style={{
                              color: "var(--text-text-neutral-40, #464646)",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "700",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Skills:`}</span>
                          <span
                            style={{
                              flex: "1 0 0",
                              color: "var(--text-text-neutral-40, #464646)",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Data analysis, Sales automation, Supervising, Salesforce, Hubspot, +5 more`}</span>
                        </div>
                      </div>
                    </div>
                    {/* name="Action" id="I189:19153;47:5554" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding: "16px",
                        justifyContent: "space-between",
                        alignItems: "center",
                        alignSelf: "stretch",
                        background: "var(--neutral-gray-5, #f8f6f6)",
                      }}
                    >
                      {/* name="Status" id="I189:19153;47:5555" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                        }}
                      >
                        {/* name="Job/Quick access" id="I189:19153;47:5556" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "var(--size-size-sizexxs-6px, 6px)",
                            borderRadius: "99px",
                          }}
                        >
                          {/* name="heart" id="I189:19153;47:5556;47:5444" type="INSTANCE" */}
                          <Icon.QodeHeart
                            style={{ width: "16px", height: "16px" }}
                            {...{}}
                          />
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "500",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              textDecorationLine: "underline",
                            }}
                          >{`12 shortlisted`}</span>
                        </Flex>
                        {/* name="divider" id="I189:19153;47:5557" type="LINE" */}
                        <Flex
                          style={{
                            width: "1px",
                            height: "15px",
                            background:
                              "var(--border-border-neutral-30, #d5d5d5)",
                          }}
                        >
                          {/* name="divider" id=I189:19153;47:5557 type=LINE */}
                          <></>
                        </Flex>
                        {/* name="Job/Quick access" id="I189:19153;47:5558" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "var(--size-size-sizexxs-6px, 6px)",
                            borderRadius: "99px",
                          }}
                        >
                          {/* name="video" id="I189:19153;47:5558;47:5444" type="INSTANCE" */}
                          <Icon.QodeVideo
                            style={{ width: "16px", height: "16px" }}
                            {...{}}
                          />
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "500",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              textDecorationLine: "underline",
                            }}
                          >{`4 interviewed`}</span>
                        </Flex>
                      </div>
                      <span
                        style={{
                          color: "var(--text-text-primary-20, #1597f4)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "500",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          textDecorationLine: "underline",
                        }}
                      >{`JD`}</span>
                    </div>
                  </Flex>
                  {/* name="Job item" id="189:19154" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "364px",
                      maxWidth: "440px",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      borderRadius: "var(--border-radius-large, 12px)",
                      border:
                        "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                      background: "var(--background-bg-white, #fff)",
                    }}
                  >
                    {/* name="Wrap" id="I189:19154;47:5566" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding: "16px",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        gap: "12px",
                        alignSelf: "stretch",
                        borderBottom:
                          "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                      }}
                    >
                      {/* name="Job title" id="I189:19154;47:5567" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "12px",
                          alignSelf: "stretch",
                        }}
                      >
                        <span
                          style={{
                            maxHeight: "56px",
                            flex: "1 0 0",
                            color: "var(--text-text-neutral-50, #1d1d1d)",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-size-sizemd-20px, 20px)",
                            fontStyle: "normal",
                            fontWeight: "600",
                            lineHeight:
                              "var(--lineheight-lineheight-xl, 28px) /* 140% */",
                          }}
                        >{`Project Manager`}</span>
                        {/* name="arrow-up-right" id="I189:19154;47:5569" type="INSTANCE" */}
                        <Icon.QodeArrowUpRight
                          style={{ width: "24px", height: "24px" }}
                          {...{}}
                        />
                      </div>
                      {/* name="Wrap" id="I189:19154;485:35083" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          paddingRight: "16px",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          gap: "12px",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name="Job/Attributes" id="I189:19154;485:36887" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            padding: "4px 12px",
                            alignItems: "center",
                            gap: "12px",
                            borderRadius: "99px",
                            background: "var(--neutral-gray-5, #f8f6f6)",
                          }}
                        >
                          {/* name="Urgent" id="I189:19154;485:36887;485:36863" type="FRAME" */}
                          <div
                            style={{
                              display: "flex",
                              padding: "2px var(--size-size-sizexxs-6px, 6px)",
                              justifyContent: "center",
                              alignItems: "center",
                              gap: "10px",
                              borderRadius: "12px",
                              background: "var(--neutral-gray-90, #464646)",
                            }}
                          >
                            <span
                              style={{
                                color: "#FFF",
                                textAlign: "center",
                                fontFamily: '"SF Pro Display"',
                                fontSize: "10px",
                                fontStyle: "normal",
                                fontWeight: "600",
                                lineHeight: "normal",
                              }}
                            >{`URGENT`}</span>
                          </div>
                          {/* name="Yoe" id="I189:19154;485:36887;485:36865" type="FRAME" */}
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "12px",
                            }}
                          >
                            <span
                              style={{
                                color: "var(--text-text-neutral-50, #1d1d1d)",
                                fontFamily:
                                  'var(--family-family, "sf pro display")',
                                fontSize: "var(--size-base, 14px)",
                                fontStyle: "normal",
                                fontWeight: "400",
                                lineHeight:
                                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              }}
                            >{`3 yoe`}</span>
                            {/* name="Line 3" id="I189:19154;485:36887;485:36867" type="LINE" */}
                            <Flex
                              style={{
                                width: "1px",
                                height: "8px",
                                background:
                                  "var(--border-border-neutral-50, #6f6f6f)",
                              }}
                            >
                              {/* name="Line 3" id=I189:19154;485:36887;485:36867 type=LINE */}
                              <></>
                            </Flex>
                          </div>
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Vietnam`}</span>
                        </Flex>
                        {/* name="Skills" id="I189:19154;47:5576" type="FRAME" */}
                        <div
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "12px",
                            alignSelf: "stretch",
                          }}
                        >
                          <span
                            style={{
                              color: "var(--text-text-neutral-40, #464646)",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "700",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Skills:`}</span>
                          <span
                            style={{
                              flex: "1 0 0",
                              color: "var(--text-text-neutral-40, #464646)",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Data analysis, Sales automation, Supervising, Salesforce, Hubspot, +5 more`}</span>
                        </div>
                      </div>
                    </div>
                    {/* name="Action" id="I189:19154;47:5554" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding: "16px",
                        justifyContent: "space-between",
                        alignItems: "center",
                        alignSelf: "stretch",
                        background: "var(--neutral-gray-5, #f8f6f6)",
                      }}
                    >
                      {/* name="Status" id="I189:19154;47:5555" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                        }}
                      >
                        {/* name="Job/Quick access" id="I189:19154;47:5556" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "var(--size-size-sizexxs-6px, 6px)",
                            borderRadius: "99px",
                          }}
                        >
                          {/* name="heart" id="I189:19154;47:5556;47:5444" type="INSTANCE" */}
                          <Icon.QodeHeart
                            style={{ width: "16px", height: "16px" }}
                            {...{}}
                          />
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "500",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              textDecorationLine: "underline",
                            }}
                          >{`12 shortlisted`}</span>
                        </Flex>
                        {/* name="divider" id="I189:19154;47:5557" type="LINE" */}
                        <Flex
                          style={{
                            width: "1px",
                            height: "15px",
                            background:
                              "var(--border-border-neutral-30, #d5d5d5)",
                          }}
                        >
                          {/* name="divider" id=I189:19154;47:5557 type=LINE */}
                          <></>
                        </Flex>
                        {/* name="Job/Quick access" id="I189:19154;47:5558" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "var(--size-size-sizexxs-6px, 6px)",
                            borderRadius: "99px",
                          }}
                        >
                          {/* name="video" id="I189:19154;47:5558;47:5444" type="INSTANCE" */}
                          <Icon.QodeVideo
                            style={{ width: "16px", height: "16px" }}
                            {...{}}
                          />
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "500",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              textDecorationLine: "underline",
                            }}
                          >{`4 interviewed`}</span>
                        </Flex>
                      </div>
                      <span
                        style={{
                          color: "var(--text-text-primary-20, #1597f4)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "500",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          textDecorationLine: "underline",
                        }}
                      >{`JD`}</span>
                    </div>
                  </Flex>
                  {/* name="Job item" id="189:19155" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "364px",
                      maxWidth: "440px",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      borderRadius: "var(--border-radius-large, 12px)",
                      border:
                        "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                      background: "var(--background-bg-white, #fff)",
                    }}
                  >
                    {/* name="Wrap" id="I189:19155;47:5566" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding: "16px",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        gap: "12px",
                        alignSelf: "stretch",
                        borderBottom:
                          "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                      }}
                    >
                      {/* name="Job title" id="I189:19155;47:5567" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "12px",
                          alignSelf: "stretch",
                        }}
                      >
                        <span
                          style={{
                            maxHeight: "56px",
                            flex: "1 0 0",
                            color: "var(--text-text-neutral-50, #1d1d1d)",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-size-sizemd-20px, 20px)",
                            fontStyle: "normal",
                            fontWeight: "600",
                            lineHeight:
                              "var(--lineheight-lineheight-xl, 28px) /* 140% */",
                          }}
                        >{`Senior Software Engineer`}</span>
                        {/* name="arrow-up-right" id="I189:19155;47:5569" type="INSTANCE" */}
                        <Icon.QodeArrowUpRight
                          style={{ width: "24px", height: "24px" }}
                          {...{}}
                        />
                      </div>
                      {/* name="Wrap" id="I189:19155;485:35083" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          paddingRight: "16px",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          gap: "12px",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name="Job/Attributes" id="I189:19155;485:36887" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            padding: "4px 12px",
                            alignItems: "center",
                            gap: "12px",
                            borderRadius: "99px",
                            background: "var(--neutral-gray-5, #f8f6f6)",
                          }}
                        >
                          {/* name="Urgent" id="I189:19155;485:36887;485:36863" type="FRAME" */}
                          <div
                            style={{
                              display: "flex",
                              padding: "2px var(--size-size-sizexxs-6px, 6px)",
                              justifyContent: "center",
                              alignItems: "center",
                              gap: "10px",
                              borderRadius: "12px",
                              background: "var(--neutral-gray-90, #464646)",
                            }}
                          >
                            <span
                              style={{
                                color: "#FFF",
                                textAlign: "center",
                                fontFamily: '"SF Pro Display"',
                                fontSize: "10px",
                                fontStyle: "normal",
                                fontWeight: "600",
                                lineHeight: "normal",
                              }}
                            >{`URGENT`}</span>
                          </div>
                          {/* name="Yoe" id="I189:19155;485:36887;485:36865" type="FRAME" */}
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "12px",
                            }}
                          >
                            <span
                              style={{
                                color: "var(--text-text-neutral-50, #1d1d1d)",
                                fontFamily:
                                  'var(--family-family, "sf pro display")',
                                fontSize: "var(--size-base, 14px)",
                                fontStyle: "normal",
                                fontWeight: "400",
                                lineHeight:
                                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              }}
                            >{`3 yoe`}</span>
                            {/* name="Line 3" id="I189:19155;485:36887;485:36867" type="LINE" */}
                            <Flex
                              style={{
                                width: "1px",
                                height: "8px",
                                background:
                                  "var(--border-border-neutral-50, #6f6f6f)",
                              }}
                            >
                              {/* name="Line 3" id=I189:19155;485:36887;485:36867 type=LINE */}
                              <></>
                            </Flex>
                          </div>
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Vietnam`}</span>
                        </Flex>
                        {/* name="Skills" id="I189:19155;47:5576" type="FRAME" */}
                        <div
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "12px",
                            alignSelf: "stretch",
                          }}
                        >
                          <span
                            style={{
                              color: "var(--text-text-neutral-40, #464646)",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "700",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Skills:`}</span>
                          <span
                            style={{
                              flex: "1 0 0",
                              color: "var(--text-text-neutral-40, #464646)",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Data analysis, Sales automation, Supervising, Salesforce, Hubspot, +5 more`}</span>
                        </div>
                      </div>
                    </div>
                    {/* name="Action" id="I189:19155;47:5554" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding: "16px",
                        justifyContent: "space-between",
                        alignItems: "center",
                        alignSelf: "stretch",
                        background: "var(--neutral-gray-5, #f8f6f6)",
                      }}
                    >
                      {/* name="Status" id="I189:19155;47:5555" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                        }}
                      >
                        {/* name="Job/Quick access" id="I189:19155;47:5556" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "var(--size-size-sizexxs-6px, 6px)",
                            borderRadius: "99px",
                          }}
                        >
                          {/* name="heart" id="I189:19155;47:5556;47:5444" type="INSTANCE" */}
                          <Icon.QodeHeart
                            style={{ width: "16px", height: "16px" }}
                            {...{}}
                          />
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "500",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              textDecorationLine: "underline",
                            }}
                          >{`12 shortlisted`}</span>
                        </Flex>
                        {/* name="divider" id="I189:19155;47:5557" type="LINE" */}
                        <Flex
                          style={{
                            width: "1px",
                            height: "15px",
                            background:
                              "var(--border-border-neutral-30, #d5d5d5)",
                          }}
                        >
                          {/* name="divider" id=I189:19155;47:5557 type=LINE */}
                          <></>
                        </Flex>
                        {/* name="Job/Quick access" id="I189:19155;47:5558" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "var(--size-size-sizexxs-6px, 6px)",
                            borderRadius: "99px",
                          }}
                        >
                          {/* name="video" id="I189:19155;47:5558;47:5444" type="INSTANCE" */}
                          <Icon.QodeVideo
                            style={{ width: "16px", height: "16px" }}
                            {...{}}
                          />
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "500",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              textDecorationLine: "underline",
                            }}
                          >{`4 interviewed`}</span>
                        </Flex>
                      </div>
                      <span
                        style={{
                          color: "var(--text-text-primary-20, #1597f4)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "500",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          textDecorationLine: "underline",
                        }}
                      >{`JD`}</span>
                    </div>
                  </Flex>
                  {/* name="Job item" id="189:19156" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "364px",
                      maxWidth: "440px",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      borderRadius: "var(--border-radius-large, 12px)",
                      border:
                        "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                      background: "var(--background-bg-white, #fff)",
                    }}
                  >
                    {/* name="Wrap" id="I189:19156;47:5566" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding: "16px",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        gap: "12px",
                        alignSelf: "stretch",
                        borderBottom:
                          "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                      }}
                    >
                      {/* name="Job title" id="I189:19156;47:5567" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "12px",
                          alignSelf: "stretch",
                        }}
                      >
                        <span
                          style={{
                            maxHeight: "56px",
                            flex: "1 0 0",
                            color: "var(--text-text-neutral-50, #1d1d1d)",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-size-sizemd-20px, 20px)",
                            fontStyle: "normal",
                            fontWeight: "600",
                            lineHeight:
                              "var(--lineheight-lineheight-xl, 28px) /* 140% */",
                          }}
                        >{`Sales Supervisor`}</span>
                        {/* name="arrow-up-right" id="I189:19156;47:5569" type="INSTANCE" */}
                        <Icon.QodeArrowUpRight
                          style={{ width: "24px", height: "24px" }}
                          {...{}}
                        />
                      </div>
                      {/* name="Wrap" id="I189:19156;485:35083" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          paddingRight: "16px",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          gap: "12px",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name="Job/Attributes" id="I189:19156;485:36887" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            padding: "4px 12px",
                            alignItems: "center",
                            gap: "12px",
                            borderRadius: "99px",
                            background: "var(--neutral-gray-5, #f8f6f6)",
                          }}
                        >
                          {/* name="Urgent" id="I189:19156;485:36887;485:36863" type="FRAME" */}
                          <div
                            style={{
                              display: "flex",
                              padding: "2px var(--size-size-sizexxs-6px, 6px)",
                              justifyContent: "center",
                              alignItems: "center",
                              gap: "10px",
                              borderRadius: "12px",
                              background: "var(--neutral-gray-90, #464646)",
                            }}
                          >
                            <span
                              style={{
                                color: "#FFF",
                                textAlign: "center",
                                fontFamily: '"SF Pro Display"',
                                fontSize: "10px",
                                fontStyle: "normal",
                                fontWeight: "600",
                                lineHeight: "normal",
                              }}
                            >{`URGENT`}</span>
                          </div>
                          {/* name="Yoe" id="I189:19156;485:36887;485:36865" type="FRAME" */}
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "12px",
                            }}
                          >
                            <span
                              style={{
                                color: "var(--text-text-neutral-50, #1d1d1d)",
                                fontFamily:
                                  'var(--family-family, "sf pro display")',
                                fontSize: "var(--size-base, 14px)",
                                fontStyle: "normal",
                                fontWeight: "400",
                                lineHeight:
                                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              }}
                            >{`3 yoe`}</span>
                            {/* name="Line 3" id="I189:19156;485:36887;485:36867" type="LINE" */}
                            <Flex
                              style={{
                                width: "1px",
                                height: "8px",
                                background:
                                  "var(--border-border-neutral-50, #6f6f6f)",
                              }}
                            >
                              {/* name="Line 3" id=I189:19156;485:36887;485:36867 type=LINE */}
                              <></>
                            </Flex>
                          </div>
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Vietnam`}</span>
                        </Flex>
                        {/* name="Skills" id="I189:19156;47:5576" type="FRAME" */}
                        <div
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "12px",
                            alignSelf: "stretch",
                          }}
                        >
                          <span
                            style={{
                              color: "var(--text-text-neutral-40, #464646)",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "700",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Skills:`}</span>
                          <span
                            style={{
                              flex: "1 0 0",
                              color: "var(--text-text-neutral-40, #464646)",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Data analysis, Sales automation, Supervising, Salesforce, Hubspot, +5 more`}</span>
                        </div>
                      </div>
                    </div>
                    {/* name="Action" id="I189:19156;47:5554" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding: "16px",
                        justifyContent: "space-between",
                        alignItems: "center",
                        alignSelf: "stretch",
                        background: "var(--neutral-gray-5, #f8f6f6)",
                      }}
                    >
                      {/* name="Status" id="I189:19156;47:5555" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                        }}
                      >
                        {/* name="Job/Quick access" id="I189:19156;47:5556" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "var(--size-size-sizexxs-6px, 6px)",
                            borderRadius: "99px",
                          }}
                        >
                          {/* name="heart" id="I189:19156;47:5556;47:5444" type="INSTANCE" */}
                          <Icon.QodeHeart
                            style={{ width: "16px", height: "16px" }}
                            {...{}}
                          />
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "500",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              textDecorationLine: "underline",
                            }}
                          >{`12 shortlisted`}</span>
                        </Flex>
                        {/* name="divider" id="I189:19156;47:5557" type="LINE" */}
                        <Flex
                          style={{
                            width: "1px",
                            height: "15px",
                            background:
                              "var(--border-border-neutral-30, #d5d5d5)",
                          }}
                        >
                          {/* name="divider" id=I189:19156;47:5557 type=LINE */}
                          <></>
                        </Flex>
                        {/* name="Job/Quick access" id="I189:19156;47:5558" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "var(--size-size-sizexxs-6px, 6px)",
                            borderRadius: "99px",
                          }}
                        >
                          {/* name="video" id="I189:19156;47:5558;47:5444" type="INSTANCE" */}
                          <Icon.QodeVideo
                            style={{ width: "16px", height: "16px" }}
                            {...{}}
                          />
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "500",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              textDecorationLine: "underline",
                            }}
                          >{`4 interviewed`}</span>
                        </Flex>
                      </div>
                      <span
                        style={{
                          color: "var(--text-text-primary-20, #1597f4)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "500",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          textDecorationLine: "underline",
                        }}
                      >{`JD`}</span>
                    </div>
                  </Flex>
                  {/* name="Job item" id="189:19157" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "364px",
                      maxWidth: "440px",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      borderRadius: "var(--border-radius-large, 12px)",
                      border:
                        "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                      background: "var(--background-bg-white, #fff)",
                    }}
                  >
                    {/* name="Wrap" id="I189:19157;47:5566" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding: "16px",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        gap: "12px",
                        alignSelf: "stretch",
                        borderBottom:
                          "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                      }}
                    >
                      {/* name="Job title" id="I189:19157;47:5567" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "12px",
                          alignSelf: "stretch",
                        }}
                      >
                        <span
                          style={{
                            maxHeight: "56px",
                            flex: "1 0 0",
                            color: "var(--text-text-neutral-50, #1d1d1d)",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-size-sizemd-20px, 20px)",
                            fontStyle: "normal",
                            fontWeight: "600",
                            lineHeight:
                              "var(--lineheight-lineheight-xl, 28px) /* 140% */",
                          }}
                        >{`IT Help desk`}</span>
                        {/* name="arrow-up-right" id="I189:19157;47:5569" type="INSTANCE" */}
                        <Icon.QodeArrowUpRight
                          style={{ width: "24px", height: "24px" }}
                          {...{}}
                        />
                      </div>
                      {/* name="Wrap" id="I189:19157;485:35083" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          paddingRight: "16px",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          gap: "12px",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name="Job/Attributes" id="I189:19157;485:36887" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            padding: "4px 12px",
                            alignItems: "center",
                            gap: "12px",
                            borderRadius: "99px",
                            background: "var(--neutral-gray-5, #f8f6f6)",
                          }}
                        >
                          {/* name="Urgent" id="I189:19157;485:36887;485:36863" type="FRAME" */}
                          <div
                            style={{
                              display: "flex",
                              padding: "2px var(--size-size-sizexxs-6px, 6px)",
                              justifyContent: "center",
                              alignItems: "center",
                              gap: "10px",
                              borderRadius: "12px",
                              background: "var(--neutral-gray-90, #464646)",
                            }}
                          >
                            <span
                              style={{
                                color: "#FFF",
                                textAlign: "center",
                                fontFamily: '"SF Pro Display"',
                                fontSize: "10px",
                                fontStyle: "normal",
                                fontWeight: "600",
                                lineHeight: "normal",
                              }}
                            >{`URGENT`}</span>
                          </div>
                          {/* name="Yoe" id="I189:19157;485:36887;485:36865" type="FRAME" */}
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "12px",
                            }}
                          >
                            <span
                              style={{
                                color: "var(--text-text-neutral-50, #1d1d1d)",
                                fontFamily:
                                  'var(--family-family, "sf pro display")',
                                fontSize: "var(--size-base, 14px)",
                                fontStyle: "normal",
                                fontWeight: "400",
                                lineHeight:
                                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              }}
                            >{`3 yoe`}</span>
                            {/* name="Line 3" id="I189:19157;485:36887;485:36867" type="LINE" */}
                            <Flex
                              style={{
                                width: "1px",
                                height: "8px",
                                background:
                                  "var(--border-border-neutral-50, #6f6f6f)",
                              }}
                            >
                              {/* name="Line 3" id=I189:19157;485:36887;485:36867 type=LINE */}
                              <></>
                            </Flex>
                          </div>
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Vietnam`}</span>
                        </Flex>
                        {/* name="Skills" id="I189:19157;47:5576" type="FRAME" */}
                        <div
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "12px",
                            alignSelf: "stretch",
                          }}
                        >
                          <span
                            style={{
                              color: "var(--text-text-neutral-40, #464646)",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "700",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Skills:`}</span>
                          <span
                            style={{
                              flex: "1 0 0",
                              color: "var(--text-text-neutral-40, #464646)",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Data analysis, Sales automation, Supervising, Salesforce, Hubspot, +5 more`}</span>
                        </div>
                      </div>
                    </div>
                    {/* name="Action" id="I189:19157;47:5554" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding: "16px",
                        justifyContent: "space-between",
                        alignItems: "center",
                        alignSelf: "stretch",
                        background: "var(--neutral-gray-5, #f8f6f6)",
                      }}
                    >
                      {/* name="Status" id="I189:19157;47:5555" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                        }}
                      >
                        {/* name="Job/Quick access" id="I189:19157;47:5556" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "var(--size-size-sizexxs-6px, 6px)",
                            borderRadius: "99px",
                          }}
                        >
                          {/* name="heart" id="I189:19157;47:5556;47:5444" type="INSTANCE" */}
                          <Icon.QodeHeart
                            style={{ width: "16px", height: "16px" }}
                            {...{}}
                          />
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "500",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              textDecorationLine: "underline",
                            }}
                          >{`12 shortlisted`}</span>
                        </Flex>
                        {/* name="divider" id="I189:19157;47:5557" type="LINE" */}
                        <Flex
                          style={{
                            width: "1px",
                            height: "15px",
                            background:
                              "var(--border-border-neutral-30, #d5d5d5)",
                          }}
                        >
                          {/* name="divider" id=I189:19157;47:5557 type=LINE */}
                          <></>
                        </Flex>
                        {/* name="Job/Quick access" id="I189:19157;47:5558" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "var(--size-size-sizexxs-6px, 6px)",
                            borderRadius: "99px",
                          }}
                        >
                          {/* name="video" id="I189:19157;47:5558;47:5444" type="INSTANCE" */}
                          <Icon.QodeVideo
                            style={{ width: "16px", height: "16px" }}
                            {...{}}
                          />
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "500",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              textDecorationLine: "underline",
                            }}
                          >{`4 interviewed`}</span>
                        </Flex>
                      </div>
                      <span
                        style={{
                          color: "var(--text-text-primary-20, #1597f4)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "500",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          textDecorationLine: "underline",
                        }}
                      >{`JD`}</span>
                    </div>
                  </Flex>
                  {/* name="Job item" id="189:19158" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "364px",
                      maxWidth: "440px",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      borderRadius: "var(--border-radius-large, 12px)",
                      border:
                        "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                      background: "var(--background-bg-white, #fff)",
                    }}
                  >
                    {/* name="Wrap" id="I189:19158;47:5566" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding: "16px",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        gap: "12px",
                        alignSelf: "stretch",
                        borderBottom:
                          "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                      }}
                    >
                      {/* name="Job title" id="I189:19158;47:5567" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "12px",
                          alignSelf: "stretch",
                        }}
                      >
                        <span
                          style={{
                            maxHeight: "56px",
                            flex: "1 0 0",
                            color: "var(--text-text-neutral-50, #1d1d1d)",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-size-sizemd-20px, 20px)",
                            fontStyle: "normal",
                            fontWeight: "600",
                            lineHeight:
                              "var(--lineheight-lineheight-xl, 28px) /* 140% */",
                          }}
                        >{`Mobile developer (iOS)`}</span>
                        {/* name="arrow-up-right" id="I189:19158;47:5569" type="INSTANCE" */}
                        <Icon.QodeArrowUpRight
                          style={{ width: "24px", height: "24px" }}
                          {...{}}
                        />
                      </div>
                      {/* name="Wrap" id="I189:19158;485:35083" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          paddingRight: "16px",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          gap: "12px",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name="Job/Attributes" id="I189:19158;485:36887" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            padding: "4px 12px",
                            alignItems: "center",
                            gap: "12px",
                            borderRadius: "99px",
                            background: "var(--neutral-gray-5, #f8f6f6)",
                          }}
                        >
                          {/* name="Urgent" id="I189:19158;485:36887;485:36863" type="FRAME" */}
                          <div
                            style={{
                              display: "flex",
                              padding: "2px var(--size-size-sizexxs-6px, 6px)",
                              justifyContent: "center",
                              alignItems: "center",
                              gap: "10px",
                              borderRadius: "12px",
                              background: "var(--neutral-gray-90, #464646)",
                            }}
                          >
                            <span
                              style={{
                                color: "#FFF",
                                textAlign: "center",
                                fontFamily: '"SF Pro Display"',
                                fontSize: "10px",
                                fontStyle: "normal",
                                fontWeight: "600",
                                lineHeight: "normal",
                              }}
                            >{`URGENT`}</span>
                          </div>
                          {/* name="Yoe" id="I189:19158;485:36887;485:36865" type="FRAME" */}
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "12px",
                            }}
                          >
                            <span
                              style={{
                                color: "var(--text-text-neutral-50, #1d1d1d)",
                                fontFamily:
                                  'var(--family-family, "sf pro display")',
                                fontSize: "var(--size-base, 14px)",
                                fontStyle: "normal",
                                fontWeight: "400",
                                lineHeight:
                                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              }}
                            >{`3 yoe`}</span>
                            {/* name="Line 3" id="I189:19158;485:36887;485:36867" type="LINE" */}
                            <Flex
                              style={{
                                width: "1px",
                                height: "8px",
                                background:
                                  "var(--border-border-neutral-50, #6f6f6f)",
                              }}
                            >
                              {/* name="Line 3" id=I189:19158;485:36887;485:36867 type=LINE */}
                              <></>
                            </Flex>
                          </div>
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Vietnam`}</span>
                        </Flex>
                        {/* name="Skills" id="I189:19158;47:5576" type="FRAME" */}
                        <div
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "12px",
                            alignSelf: "stretch",
                          }}
                        >
                          <span
                            style={{
                              color: "var(--text-text-neutral-40, #464646)",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "700",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Skills:`}</span>
                          <span
                            style={{
                              flex: "1 0 0",
                              color: "var(--text-text-neutral-40, #464646)",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Data analysis, Sales automation, Supervising, Salesforce, Hubspot, +5 more`}</span>
                        </div>
                      </div>
                    </div>
                    {/* name="Action" id="I189:19158;47:5554" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding: "16px",
                        justifyContent: "space-between",
                        alignItems: "center",
                        alignSelf: "stretch",
                        background: "var(--neutral-gray-5, #f8f6f6)",
                      }}
                    >
                      {/* name="Status" id="I189:19158;47:5555" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                        }}
                      >
                        {/* name="Job/Quick access" id="I189:19158;47:5556" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "var(--size-size-sizexxs-6px, 6px)",
                            borderRadius: "99px",
                          }}
                        >
                          {/* name="heart" id="I189:19158;47:5556;47:5444" type="INSTANCE" */}
                          <Icon.QodeHeart
                            style={{ width: "16px", height: "16px" }}
                            {...{}}
                          />
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "500",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              textDecorationLine: "underline",
                            }}
                          >{`12 shortlisted`}</span>
                        </Flex>
                        {/* name="divider" id="I189:19158;47:5557" type="LINE" */}
                        <Flex
                          style={{
                            width: "1px",
                            height: "15px",
                            background:
                              "var(--border-border-neutral-30, #d5d5d5)",
                          }}
                        >
                          {/* name="divider" id=I189:19158;47:5557 type=LINE */}
                          <></>
                        </Flex>
                        {/* name="Job/Quick access" id="I189:19158;47:5558" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "var(--size-size-sizexxs-6px, 6px)",
                            borderRadius: "99px",
                          }}
                        >
                          {/* name="video" id="I189:19158;47:5558;47:5444" type="INSTANCE" */}
                          <Icon.QodeVideo
                            style={{ width: "16px", height: "16px" }}
                            {...{}}
                          />
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "500",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              textDecorationLine: "underline",
                            }}
                          >{`4 interviewed`}</span>
                        </Flex>
                      </div>
                      <span
                        style={{
                          color: "var(--text-text-primary-20, #1597f4)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "500",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          textDecorationLine: "underline",
                        }}
                      >{`JD`}</span>
                    </div>
                  </Flex>
                  {/* name="Job item" id="189:19159" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "364px",
                      maxWidth: "440px",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      borderRadius: "var(--border-radius-large, 12px)",
                      border:
                        "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                      background: "var(--background-bg-white, #fff)",
                    }}
                  >
                    {/* name="Wrap" id="I189:19159;47:5566" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding: "16px",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        gap: "12px",
                        alignSelf: "stretch",
                        borderBottom:
                          "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                      }}
                    >
                      {/* name="Job title" id="I189:19159;47:5567" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "12px",
                          alignSelf: "stretch",
                        }}
                      >
                        <span
                          style={{
                            maxHeight: "56px",
                            flex: "1 0 0",
                            color: "var(--text-text-neutral-50, #1d1d1d)",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-size-sizemd-20px, 20px)",
                            fontStyle: "normal",
                            fontWeight: "600",
                            lineHeight:
                              "var(--lineheight-lineheight-xl, 28px) /* 140% */",
                          }}
                        >{`Senior Software Engineer`}</span>
                        {/* name="arrow-up-right" id="I189:19159;47:5569" type="INSTANCE" */}
                        <Icon.QodeArrowUpRight
                          style={{ width: "24px", height: "24px" }}
                          {...{}}
                        />
                      </div>
                      {/* name="Wrap" id="I189:19159;485:35083" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          paddingRight: "16px",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          gap: "12px",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name="Job/Attributes" id="I189:19159;485:36887" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            padding: "4px 12px",
                            alignItems: "center",
                            gap: "12px",
                            borderRadius: "99px",
                            background: "var(--neutral-gray-5, #f8f6f6)",
                          }}
                        >
                          {/* name="Urgent" id="I189:19159;485:36887;485:36863" type="FRAME" */}
                          <div
                            style={{
                              display: "flex",
                              padding: "2px var(--size-size-sizexxs-6px, 6px)",
                              justifyContent: "center",
                              alignItems: "center",
                              gap: "10px",
                              borderRadius: "12px",
                              background: "var(--neutral-gray-90, #464646)",
                            }}
                          >
                            <span
                              style={{
                                color: "#FFF",
                                textAlign: "center",
                                fontFamily: '"SF Pro Display"',
                                fontSize: "10px",
                                fontStyle: "normal",
                                fontWeight: "600",
                                lineHeight: "normal",
                              }}
                            >{`URGENT`}</span>
                          </div>
                          {/* name="Yoe" id="I189:19159;485:36887;485:36865" type="FRAME" */}
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "12px",
                            }}
                          >
                            <span
                              style={{
                                color: "var(--text-text-neutral-50, #1d1d1d)",
                                fontFamily:
                                  'var(--family-family, "sf pro display")',
                                fontSize: "var(--size-base, 14px)",
                                fontStyle: "normal",
                                fontWeight: "400",
                                lineHeight:
                                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              }}
                            >{`3 yoe`}</span>
                            {/* name="Line 3" id="I189:19159;485:36887;485:36867" type="LINE" */}
                            <Flex
                              style={{
                                width: "1px",
                                height: "8px",
                                background:
                                  "var(--border-border-neutral-50, #6f6f6f)",
                              }}
                            >
                              {/* name="Line 3" id=I189:19159;485:36887;485:36867 type=LINE */}
                              <></>
                            </Flex>
                          </div>
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Vietnam`}</span>
                        </Flex>
                        {/* name="Skills" id="I189:19159;47:5576" type="FRAME" */}
                        <div
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "12px",
                            alignSelf: "stretch",
                          }}
                        >
                          <span
                            style={{
                              color: "var(--text-text-neutral-40, #464646)",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "700",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Skills:`}</span>
                          <span
                            style={{
                              flex: "1 0 0",
                              color: "var(--text-text-neutral-40, #464646)",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Data analysis, Sales automation, Supervising, Salesforce, Hubspot, +5 more`}</span>
                        </div>
                      </div>
                    </div>
                    {/* name="Action" id="I189:19159;47:5554" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding: "16px",
                        justifyContent: "space-between",
                        alignItems: "center",
                        alignSelf: "stretch",
                        background: "var(--neutral-gray-5, #f8f6f6)",
                      }}
                    >
                      {/* name="Status" id="I189:19159;47:5555" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                        }}
                      >
                        {/* name="Job/Quick access" id="I189:19159;47:5556" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "var(--size-size-sizexxs-6px, 6px)",
                            borderRadius: "99px",
                          }}
                        >
                          {/* name="heart" id="I189:19159;47:5556;47:5444" type="INSTANCE" */}
                          <Icon.QodeHeart
                            style={{ width: "16px", height: "16px" }}
                            {...{}}
                          />
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "500",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              textDecorationLine: "underline",
                            }}
                          >{`12 shortlisted`}</span>
                        </Flex>
                        {/* name="divider" id="I189:19159;47:5557" type="LINE" */}
                        <Flex
                          style={{
                            width: "1px",
                            height: "15px",
                            background:
                              "var(--border-border-neutral-30, #d5d5d5)",
                          }}
                        >
                          {/* name="divider" id=I189:19159;47:5557 type=LINE */}
                          <></>
                        </Flex>
                        {/* name="Job/Quick access" id="I189:19159;47:5558" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "var(--size-size-sizexxs-6px, 6px)",
                            borderRadius: "99px",
                          }}
                        >
                          {/* name="video" id="I189:19159;47:5558;47:5444" type="INSTANCE" */}
                          <Icon.QodeVideo
                            style={{ width: "16px", height: "16px" }}
                            {...{}}
                          />
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "500",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              textDecorationLine: "underline",
                            }}
                          >{`4 interviewed`}</span>
                        </Flex>
                      </div>
                      <span
                        style={{
                          color: "var(--text-text-primary-20, #1597f4)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "500",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          textDecorationLine: "underline",
                        }}
                      >{`JD`}</span>
                    </div>
                  </Flex>
                  {/* name="Job item" id="189:19160" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "364px",
                      maxWidth: "440px",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      borderRadius: "var(--border-radius-large, 12px)",
                      border:
                        "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                      background: "var(--background-bg-white, #fff)",
                    }}
                  >
                    {/* name="Wrap" id="I189:19160;47:5566" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding: "16px",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        gap: "12px",
                        alignSelf: "stretch",
                        borderBottom:
                          "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                      }}
                    >
                      {/* name="Job title" id="I189:19160;47:5567" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "12px",
                          alignSelf: "stretch",
                        }}
                      >
                        <span
                          style={{
                            maxHeight: "56px",
                            flex: "1 0 0",
                            color: "var(--text-text-neutral-50, #1d1d1d)",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-size-sizemd-20px, 20px)",
                            fontStyle: "normal",
                            fontWeight: "600",
                            lineHeight:
                              "var(--lineheight-lineheight-xl, 28px) /* 140% */",
                          }}
                        >{`Sales Consultant`}</span>
                        {/* name="arrow-up-right" id="I189:19160;47:5569" type="INSTANCE" */}
                        <Icon.QodeArrowUpRight
                          style={{ width: "24px", height: "24px" }}
                          {...{}}
                        />
                      </div>
                      {/* name="Wrap" id="I189:19160;485:35083" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          paddingRight: "16px",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          gap: "12px",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name="Job/Attributes" id="I189:19160;485:36887" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            padding: "4px 12px",
                            alignItems: "center",
                            gap: "12px",
                            borderRadius: "99px",
                            background: "var(--neutral-gray-5, #f8f6f6)",
                          }}
                        >
                          {/* name="Urgent" id="I189:19160;485:36887;485:36863" type="FRAME" */}
                          <div
                            style={{
                              display: "flex",
                              padding: "2px var(--size-size-sizexxs-6px, 6px)",
                              justifyContent: "center",
                              alignItems: "center",
                              gap: "10px",
                              borderRadius: "12px",
                              background: "var(--neutral-gray-90, #464646)",
                            }}
                          >
                            <span
                              style={{
                                color: "#FFF",
                                textAlign: "center",
                                fontFamily: '"SF Pro Display"',
                                fontSize: "10px",
                                fontStyle: "normal",
                                fontWeight: "600",
                                lineHeight: "normal",
                              }}
                            >{`URGENT`}</span>
                          </div>
                          {/* name="Yoe" id="I189:19160;485:36887;485:36865" type="FRAME" */}
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "12px",
                            }}
                          >
                            <span
                              style={{
                                color: "var(--text-text-neutral-50, #1d1d1d)",
                                fontFamily:
                                  'var(--family-family, "sf pro display")',
                                fontSize: "var(--size-base, 14px)",
                                fontStyle: "normal",
                                fontWeight: "400",
                                lineHeight:
                                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              }}
                            >{`3 yoe`}</span>
                            {/* name="Line 3" id="I189:19160;485:36887;485:36867" type="LINE" */}
                            <Flex
                              style={{
                                width: "1px",
                                height: "8px",
                                background:
                                  "var(--border-border-neutral-50, #6f6f6f)",
                              }}
                            >
                              {/* name="Line 3" id=I189:19160;485:36887;485:36867 type=LINE */}
                              <></>
                            </Flex>
                          </div>
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Vietnam`}</span>
                        </Flex>
                        {/* name="Skills" id="I189:19160;47:5576" type="FRAME" */}
                        <div
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "12px",
                            alignSelf: "stretch",
                          }}
                        >
                          <span
                            style={{
                              color: "var(--text-text-neutral-40, #464646)",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "700",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Skills:`}</span>
                          <span
                            style={{
                              flex: "1 0 0",
                              color: "var(--text-text-neutral-40, #464646)",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Data analysis, Sales automation, Supervising, Salesforce, Hubspot, +5 more`}</span>
                        </div>
                      </div>
                    </div>
                    {/* name="Action" id="I189:19160;47:5554" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding: "16px",
                        justifyContent: "space-between",
                        alignItems: "center",
                        alignSelf: "stretch",
                        background: "var(--neutral-gray-5, #f8f6f6)",
                      }}
                    >
                      {/* name="Status" id="I189:19160;47:5555" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                        }}
                      >
                        {/* name="Job/Quick access" id="I189:19160;47:5556" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "var(--size-size-sizexxs-6px, 6px)",
                            borderRadius: "99px",
                          }}
                        >
                          {/* name="heart" id="I189:19160;47:5556;47:5444" type="INSTANCE" */}
                          <Icon.QodeHeart
                            style={{ width: "16px", height: "16px" }}
                            {...{}}
                          />
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "500",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              textDecorationLine: "underline",
                            }}
                          >{`12 shortlisted`}</span>
                        </Flex>
                        {/* name="divider" id="I189:19160;47:5557" type="LINE" */}
                        <Flex
                          style={{
                            width: "1px",
                            height: "15px",
                            background:
                              "var(--border-border-neutral-30, #d5d5d5)",
                          }}
                        >
                          {/* name="divider" id=I189:19160;47:5557 type=LINE */}
                          <></>
                        </Flex>
                        {/* name="Job/Quick access" id="I189:19160;47:5558" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "var(--size-size-sizexxs-6px, 6px)",
                            borderRadius: "99px",
                          }}
                        >
                          {/* name="video" id="I189:19160;47:5558;47:5444" type="INSTANCE" */}
                          <Icon.QodeVideo
                            style={{ width: "16px", height: "16px" }}
                            {...{}}
                          />
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "500",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              textDecorationLine: "underline",
                            }}
                          >{`4 interviewed`}</span>
                        </Flex>
                      </div>
                      <span
                        style={{
                          color: "var(--text-text-primary-20, #1597f4)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "500",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          textDecorationLine: "underline",
                        }}
                      >{`JD`}</span>
                    </div>
                  </Flex>
                  {/* name="Job item" id="189:19161" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "364px",
                      maxWidth: "440px",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      borderRadius: "var(--border-radius-large, 12px)",
                      border:
                        "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                      background: "var(--background-bg-white, #fff)",
                    }}
                  >
                    {/* name="Wrap" id="I189:19161;47:5566" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding: "16px",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        gap: "12px",
                        alignSelf: "stretch",
                        borderBottom:
                          "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                      }}
                    >
                      {/* name="Job title" id="I189:19161;47:5567" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "12px",
                          alignSelf: "stretch",
                        }}
                      >
                        <span
                          style={{
                            maxHeight: "56px",
                            flex: "1 0 0",
                            color: "var(--text-text-neutral-50, #1d1d1d)",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-size-sizemd-20px, 20px)",
                            fontStyle: "normal",
                            fontWeight: "600",
                            lineHeight:
                              "var(--lineheight-lineheight-xl, 28px) /* 140% */",
                          }}
                        >{`Sales Consultant`}</span>
                        {/* name="arrow-up-right" id="I189:19161;47:5569" type="INSTANCE" */}
                        <Icon.QodeArrowUpRight
                          style={{ width: "24px", height: "24px" }}
                          {...{}}
                        />
                      </div>
                      {/* name="Wrap" id="I189:19161;485:35083" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          paddingRight: "16px",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          gap: "12px",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name="Job/Attributes" id="I189:19161;485:36887" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            padding: "4px 12px",
                            alignItems: "center",
                            gap: "12px",
                            borderRadius: "99px",
                            background: "var(--neutral-gray-5, #f8f6f6)",
                          }}
                        >
                          {/* name="Urgent" id="I189:19161;485:36887;485:36863" type="FRAME" */}
                          <div
                            style={{
                              display: "flex",
                              padding: "2px var(--size-size-sizexxs-6px, 6px)",
                              justifyContent: "center",
                              alignItems: "center",
                              gap: "10px",
                              borderRadius: "12px",
                              background: "var(--neutral-gray-90, #464646)",
                            }}
                          >
                            <span
                              style={{
                                color: "#FFF",
                                textAlign: "center",
                                fontFamily: '"SF Pro Display"',
                                fontSize: "10px",
                                fontStyle: "normal",
                                fontWeight: "600",
                                lineHeight: "normal",
                              }}
                            >{`URGENT`}</span>
                          </div>
                          {/* name="Yoe" id="I189:19161;485:36887;485:36865" type="FRAME" */}
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "12px",
                            }}
                          >
                            <span
                              style={{
                                color: "var(--text-text-neutral-50, #1d1d1d)",
                                fontFamily:
                                  'var(--family-family, "sf pro display")',
                                fontSize: "var(--size-base, 14px)",
                                fontStyle: "normal",
                                fontWeight: "400",
                                lineHeight:
                                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              }}
                            >{`3 yoe`}</span>
                            {/* name="Line 3" id="I189:19161;485:36887;485:36867" type="LINE" */}
                            <Flex
                              style={{
                                width: "1px",
                                height: "8px",
                                background:
                                  "var(--border-border-neutral-50, #6f6f6f)",
                              }}
                            >
                              {/* name="Line 3" id=I189:19161;485:36887;485:36867 type=LINE */}
                              <></>
                            </Flex>
                          </div>
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Vietnam`}</span>
                        </Flex>
                        {/* name="Skills" id="I189:19161;47:5576" type="FRAME" */}
                        <div
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "12px",
                            alignSelf: "stretch",
                          }}
                        >
                          <span
                            style={{
                              color: "var(--text-text-neutral-40, #464646)",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "700",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Skills:`}</span>
                          <span
                            style={{
                              flex: "1 0 0",
                              color: "var(--text-text-neutral-40, #464646)",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Data analysis, Sales automation, Supervising, Salesforce, Hubspot, +5 more`}</span>
                        </div>
                      </div>
                    </div>
                    {/* name="Action" id="I189:19161;47:5554" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding: "16px",
                        justifyContent: "space-between",
                        alignItems: "center",
                        alignSelf: "stretch",
                        background: "var(--neutral-gray-5, #f8f6f6)",
                      }}
                    >
                      {/* name="Status" id="I189:19161;47:5555" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                        }}
                      >
                        {/* name="Job/Quick access" id="I189:19161;47:5556" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "var(--size-size-sizexxs-6px, 6px)",
                            borderRadius: "99px",
                          }}
                        >
                          {/* name="heart" id="I189:19161;47:5556;47:5444" type="INSTANCE" */}
                          <Icon.QodeHeart
                            style={{ width: "16px", height: "16px" }}
                            {...{}}
                          />
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "500",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              textDecorationLine: "underline",
                            }}
                          >{`12 shortlisted`}</span>
                        </Flex>
                        {/* name="divider" id="I189:19161;47:5557" type="LINE" */}
                        <Flex
                          style={{
                            width: "1px",
                            height: "15px",
                            background:
                              "var(--border-border-neutral-30, #d5d5d5)",
                          }}
                        >
                          {/* name="divider" id=I189:19161;47:5557 type=LINE */}
                          <></>
                        </Flex>
                        {/* name="Job/Quick access" id="I189:19161;47:5558" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "var(--size-size-sizexxs-6px, 6px)",
                            borderRadius: "99px",
                          }}
                        >
                          {/* name="video" id="I189:19161;47:5558;47:5444" type="INSTANCE" */}
                          <Icon.QodeVideo
                            style={{ width: "16px", height: "16px" }}
                            {...{}}
                          />
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "500",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              textDecorationLine: "underline",
                            }}
                          >{`4 interviewed`}</span>
                        </Flex>
                      </div>
                      <span
                        style={{
                          color: "var(--text-text-primary-20, #1597f4)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "500",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          textDecorationLine: "underline",
                        }}
                      >{`JD`}</span>
                    </div>
                  </Flex>
                  {/* name="Job item" id="189:19162" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "364px",
                      maxWidth: "440px",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      borderRadius: "var(--border-radius-large, 12px)",
                      border:
                        "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                      background: "var(--background-bg-white, #fff)",
                    }}
                  >
                    {/* name="Wrap" id="I189:19162;47:5566" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding: "16px",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        gap: "12px",
                        alignSelf: "stretch",
                        borderBottom:
                          "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                      }}
                    >
                      {/* name="Job title" id="I189:19162;47:5567" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "12px",
                          alignSelf: "stretch",
                        }}
                      >
                        <span
                          style={{
                            maxHeight: "56px",
                            flex: "1 0 0",
                            color: "var(--text-text-neutral-50, #1d1d1d)",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-size-sizemd-20px, 20px)",
                            fontStyle: "normal",
                            fontWeight: "600",
                            lineHeight:
                              "var(--lineheight-lineheight-xl, 28px) /* 140% */",
                          }}
                        >{`Sales Consultant`}</span>
                        {/* name="arrow-up-right" id="I189:19162;47:5569" type="INSTANCE" */}
                        <Icon.QodeArrowUpRight
                          style={{ width: "24px", height: "24px" }}
                          {...{}}
                        />
                      </div>
                      {/* name="Wrap" id="I189:19162;485:35083" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          paddingRight: "16px",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          gap: "12px",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name="Job/Attributes" id="I189:19162;485:36887" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            padding: "4px 12px",
                            alignItems: "center",
                            gap: "12px",
                            borderRadius: "99px",
                            background: "var(--neutral-gray-5, #f8f6f6)",
                          }}
                        >
                          {/* name="Urgent" id="I189:19162;485:36887;485:36863" type="FRAME" */}
                          <div
                            style={{
                              display: "flex",
                              padding: "2px var(--size-size-sizexxs-6px, 6px)",
                              justifyContent: "center",
                              alignItems: "center",
                              gap: "10px",
                              borderRadius: "12px",
                              background: "var(--neutral-gray-90, #464646)",
                            }}
                          >
                            <span
                              style={{
                                color: "#FFF",
                                textAlign: "center",
                                fontFamily: '"SF Pro Display"',
                                fontSize: "10px",
                                fontStyle: "normal",
                                fontWeight: "600",
                                lineHeight: "normal",
                              }}
                            >{`URGENT`}</span>
                          </div>
                          {/* name="Yoe" id="I189:19162;485:36887;485:36865" type="FRAME" */}
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "12px",
                            }}
                          >
                            <span
                              style={{
                                color: "var(--text-text-neutral-50, #1d1d1d)",
                                fontFamily:
                                  'var(--family-family, "sf pro display")',
                                fontSize: "var(--size-base, 14px)",
                                fontStyle: "normal",
                                fontWeight: "400",
                                lineHeight:
                                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              }}
                            >{`3 yoe`}</span>
                            {/* name="Line 3" id="I189:19162;485:36887;485:36867" type="LINE" */}
                            <Flex
                              style={{
                                width: "1px",
                                height: "8px",
                                background:
                                  "var(--border-border-neutral-50, #6f6f6f)",
                              }}
                            >
                              {/* name="Line 3" id=I189:19162;485:36887;485:36867 type=LINE */}
                              <></>
                            </Flex>
                          </div>
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Vietnam`}</span>
                        </Flex>
                        {/* name="Skills" id="I189:19162;47:5576" type="FRAME" */}
                        <div
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "12px",
                            alignSelf: "stretch",
                          }}
                        >
                          <span
                            style={{
                              color: "var(--text-text-neutral-40, #464646)",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "700",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Skills:`}</span>
                          <span
                            style={{
                              flex: "1 0 0",
                              color: "var(--text-text-neutral-40, #464646)",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Data analysis, Sales automation, Supervising, Salesforce, Hubspot, +5 more`}</span>
                        </div>
                      </div>
                    </div>
                    {/* name="Action" id="I189:19162;47:5554" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding: "16px",
                        justifyContent: "space-between",
                        alignItems: "center",
                        alignSelf: "stretch",
                        background: "var(--neutral-gray-5, #f8f6f6)",
                      }}
                    >
                      {/* name="Status" id="I189:19162;47:5555" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                        }}
                      >
                        {/* name="Job/Quick access" id="I189:19162;47:5556" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "var(--size-size-sizexxs-6px, 6px)",
                            borderRadius: "99px",
                          }}
                        >
                          {/* name="heart" id="I189:19162;47:5556;47:5444" type="INSTANCE" */}
                          <Icon.QodeHeart
                            style={{ width: "16px", height: "16px" }}
                            {...{}}
                          />
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "500",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              textDecorationLine: "underline",
                            }}
                          >{`12 shortlisted`}</span>
                        </Flex>
                        {/* name="divider" id="I189:19162;47:5557" type="LINE" */}
                        <Flex
                          style={{
                            width: "1px",
                            height: "15px",
                            background:
                              "var(--border-border-neutral-30, #d5d5d5)",
                          }}
                        >
                          {/* name="divider" id=I189:19162;47:5557 type=LINE */}
                          <></>
                        </Flex>
                        {/* name="Job/Quick access" id="I189:19162;47:5558" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "var(--size-size-sizexxs-6px, 6px)",
                            borderRadius: "99px",
                          }}
                        >
                          {/* name="video" id="I189:19162;47:5558;47:5444" type="INSTANCE" */}
                          <Icon.QodeVideo
                            style={{ width: "16px", height: "16px" }}
                            {...{}}
                          />
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "500",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              textDecorationLine: "underline",
                            }}
                          >{`4 interviewed`}</span>
                        </Flex>
                      </div>
                      <span
                        style={{
                          color: "var(--text-text-primary-20, #1597f4)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "500",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          textDecorationLine: "underline",
                        }}
                      >{`JD`}</span>
                    </div>
                  </Flex>
                  {/* name="Job item" id="189:19163" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "364px",
                      maxWidth: "440px",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      borderRadius: "var(--border-radius-large, 12px)",
                      border:
                        "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                      background: "var(--background-bg-white, #fff)",
                    }}
                  >
                    {/* name="Wrap" id="I189:19163;47:5566" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding: "16px",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        gap: "12px",
                        alignSelf: "stretch",
                        borderBottom:
                          "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                      }}
                    >
                      {/* name="Job title" id="I189:19163;47:5567" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "12px",
                          alignSelf: "stretch",
                        }}
                      >
                        <span
                          style={{
                            maxHeight: "56px",
                            flex: "1 0 0",
                            color: "var(--text-text-neutral-50, #1d1d1d)",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-size-sizemd-20px, 20px)",
                            fontStyle: "normal",
                            fontWeight: "600",
                            lineHeight:
                              "var(--lineheight-lineheight-xl, 28px) /* 140% */",
                          }}
                        >{`Sales Consultant`}</span>
                        {/* name="arrow-up-right" id="I189:19163;47:5569" type="INSTANCE" */}
                        <Icon.QodeArrowUpRight
                          style={{ width: "24px", height: "24px" }}
                          {...{}}
                        />
                      </div>
                      {/* name="Wrap" id="I189:19163;485:35083" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          paddingRight: "16px",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          gap: "12px",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name="Job/Attributes" id="I189:19163;485:36887" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            padding: "4px 12px",
                            alignItems: "center",
                            gap: "12px",
                            borderRadius: "99px",
                            background: "var(--neutral-gray-5, #f8f6f6)",
                          }}
                        >
                          {/* name="Urgent" id="I189:19163;485:36887;485:36863" type="FRAME" */}
                          <div
                            style={{
                              display: "flex",
                              padding: "2px var(--size-size-sizexxs-6px, 6px)",
                              justifyContent: "center",
                              alignItems: "center",
                              gap: "10px",
                              borderRadius: "12px",
                              background: "var(--neutral-gray-90, #464646)",
                            }}
                          >
                            <span
                              style={{
                                color: "#FFF",
                                textAlign: "center",
                                fontFamily: '"SF Pro Display"',
                                fontSize: "10px",
                                fontStyle: "normal",
                                fontWeight: "600",
                                lineHeight: "normal",
                              }}
                            >{`URGENT`}</span>
                          </div>
                          {/* name="Yoe" id="I189:19163;485:36887;485:36865" type="FRAME" */}
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "12px",
                            }}
                          >
                            <span
                              style={{
                                color: "var(--text-text-neutral-50, #1d1d1d)",
                                fontFamily:
                                  'var(--family-family, "sf pro display")',
                                fontSize: "var(--size-base, 14px)",
                                fontStyle: "normal",
                                fontWeight: "400",
                                lineHeight:
                                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              }}
                            >{`3 yoe`}</span>
                            {/* name="Line 3" id="I189:19163;485:36887;485:36867" type="LINE" */}
                            <Flex
                              style={{
                                width: "1px",
                                height: "8px",
                                background:
                                  "var(--border-border-neutral-50, #6f6f6f)",
                              }}
                            >
                              {/* name="Line 3" id=I189:19163;485:36887;485:36867 type=LINE */}
                              <></>
                            </Flex>
                          </div>
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Vietnam`}</span>
                        </Flex>
                        {/* name="Skills" id="I189:19163;47:5576" type="FRAME" */}
                        <div
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "12px",
                            alignSelf: "stretch",
                          }}
                        >
                          <span
                            style={{
                              color: "var(--text-text-neutral-40, #464646)",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "700",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Skills:`}</span>
                          <span
                            style={{
                              flex: "1 0 0",
                              color: "var(--text-text-neutral-40, #464646)",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Data analysis, Sales automation, Supervising, Salesforce, Hubspot, +5 more`}</span>
                        </div>
                      </div>
                    </div>
                    {/* name="Action" id="I189:19163;47:5554" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding: "16px",
                        justifyContent: "space-between",
                        alignItems: "center",
                        alignSelf: "stretch",
                        background: "var(--neutral-gray-5, #f8f6f6)",
                      }}
                    >
                      {/* name="Status" id="I189:19163;47:5555" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                        }}
                      >
                        {/* name="Job/Quick access" id="I189:19163;47:5556" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "var(--size-size-sizexxs-6px, 6px)",
                            borderRadius: "99px",
                          }}
                        >
                          {/* name="heart" id="I189:19163;47:5556;47:5444" type="INSTANCE" */}
                          <Icon.QodeHeart
                            style={{ width: "16px", height: "16px" }}
                            {...{}}
                          />
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "500",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              textDecorationLine: "underline",
                            }}
                          >{`12 shortlisted`}</span>
                        </Flex>
                        {/* name="divider" id="I189:19163;47:5557" type="LINE" */}
                        <Flex
                          style={{
                            width: "1px",
                            height: "15px",
                            background:
                              "var(--border-border-neutral-30, #d5d5d5)",
                          }}
                        >
                          {/* name="divider" id=I189:19163;47:5557 type=LINE */}
                          <></>
                        </Flex>
                        {/* name="Job/Quick access" id="I189:19163;47:5558" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "var(--size-size-sizexxs-6px, 6px)",
                            borderRadius: "99px",
                          }}
                        >
                          {/* name="video" id="I189:19163;47:5558;47:5444" type="INSTANCE" */}
                          <Icon.QodeVideo
                            style={{ width: "16px", height: "16px" }}
                            {...{}}
                          />
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "500",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              textDecorationLine: "underline",
                            }}
                          >{`4 interviewed`}</span>
                        </Flex>
                      </div>
                      <span
                        style={{
                          color: "var(--text-text-primary-20, #1597f4)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "500",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          textDecorationLine: "underline",
                        }}
                      >{`JD`}</span>
                    </div>
                  </Flex>
                </div>
                {/* name="Pagination" id="189:19164" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "556px",
                    paddingBottom: "32px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-padding, 16px)",
                  }}
                >
                  {/* name="Pagination Wrapper" id="I189:19164;171:27143" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "var(--size-padding-paddingxs, 8px)",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name="🧬 left" id="I189:19164;171:27101" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        width: "32px",
                        height: "var(--size-height-controlheight, 32px)",
                        padding: "var(--size-padding-paddingxxs, 4px)",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "var(--style-radius-borderradius, 8px)",
                      }}
                    >
                      {/* name="chevron-left" id="I189:19164;171:27101;171:26630" type="INSTANCE" */}
                      <Icon.QodeChevronLeft
                        style={{
                          width: "var(--font-size-base, 14px)",
                          height: "var(--font-size-base, 14px)",
                          flexShrink: "0",
                        }}
                        {...{}}
                      />
                    </Flex>
                    {/* name="pages" id="I189:19164;2747:12254" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "var(--size-margin-marginxs, 8px)",
                        flex: "1 0 0",
                      }}
                    >
                      {/* name="🧬 item 1" id="I189:19164;171:27102" type="INSTANCE" */}
                      <Flex
                        style={{
                          display: "flex",
                          width: "32px",
                          height: "var(--size-height-controlheight, 32px)",
                          padding: "var(--size-padding-paddingxxs, 4px)",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius: "var(--style-radius-borderradius, 8px)",
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
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-base, 14px)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight:
                              "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          }}
                        >{`1`}</span>
                      </Flex>
                      {/* name="🧬 item 2" id="I189:19164;171:27117" type="INSTANCE" */}
                      <QodePagination
                        style={{
                          display: "flex",
                          width: "32px",
                          height: "var(--size-height-controlheight, 32px)",
                          padding: "var(--size-padding-paddingxxs, 4px)",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius: "var(--style-radius-borderradius, 8px)",
                        }}
                        {...{ state: "default", direction: "left" }}
                      />
                      {/* name="🧬 item 3" id="I189:19164;171:27103" type="INSTANCE" */}
                      <Flex
                        style={{
                          display: "flex",
                          width: "32px",
                          height: "var(--size-height-controlheight, 32px)",
                          padding: "var(--size-padding-paddingxxs, 4px)",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius: "var(--style-radius-borderradius, 8px)",
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
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-base, 14px)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight:
                              "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          }}
                        >{`4`}</span>
                      </Flex>
                      {/* name="🧬 item 4" id="I189:19164;171:27104" type="INSTANCE" */}
                      <Flex
                        style={{
                          display: "flex",
                          width: "32px",
                          height: "var(--size-height-controlheight, 32px)",
                          padding: "var(--size-padding-paddingxxs, 4px)",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius: "var(--style-radius-borderradius, 8px)",
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
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-base, 14px)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight:
                              "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          }}
                        >{`5`}</span>
                      </Flex>
                      {/* name=".pagination__number" id="I189:19164;171:27105" type="INSTANCE" */}
                      <Flex
                        style={{
                          display: "flex",
                          width: "32px",
                          height: "var(--size-height-controlheight, 32px)",
                          padding: "var(--size-padding-paddingxxs, 4px)",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius:
                            "var(--style-radius-borderround, 999px)",
                          background: "var(--neutral-gray-100, #1d1d1d)",
                        }}
                      >
                        <span
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            flex: "1 0 0",
                            alignSelf: "stretch",
                            color: "#FFF",
                            textAlign: "center",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-base, 14px)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight:
                              "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          }}
                        >{`6`}</span>
                      </Flex>
                      {/* name="🧬 item 6" id="I189:19164;171:27106" type="INSTANCE" */}
                      <Flex
                        style={{
                          display: "flex",
                          width: "32px",
                          height: "var(--size-height-controlheight, 32px)",
                          padding: "var(--size-padding-paddingxxs, 4px)",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius: "var(--style-radius-borderradius, 8px)",
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
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-base, 14px)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight:
                              "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          }}
                        >{`7`}</span>
                      </Flex>
                      {/* name="🧬 item 7" id="I189:19164;171:27123" type="INSTANCE" */}
                      <Flex
                        style={{
                          display: "flex",
                          width: "32px",
                          height: "var(--size-height-controlheight, 32px)",
                          padding: "var(--size-padding-paddingxxs, 4px)",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius: "var(--style-radius-borderradius, 8px)",
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
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-base, 14px)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight:
                              "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          }}
                        >{`8`}</span>
                      </Flex>
                      {/* name="🧬 item 8" id="I189:19164;171:27125" type="INSTANCE" */}
                      <QodePagination
                        style={{
                          display: "flex",
                          width: "32px",
                          height: "var(--size-height-controlheight, 32px)",
                          padding: "var(--size-padding-paddingxxs, 4px)",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius: "var(--style-radius-borderradius, 8px)",
                        }}
                        {...{ state: "default", direction: "left" }}
                      />
                      {/* name="🧬 item 9" id="I189:19164;171:27129" type="INSTANCE" */}
                      <Flex
                        style={{
                          display: "flex",
                          width: "32px",
                          height: "var(--size-height-controlheight, 32px)",
                          padding: "var(--size-padding-paddingxxs, 4px)",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius: "var(--style-radius-borderradius, 8px)",
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
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-base, 14px)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight:
                              "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          }}
                        >{`50`}</span>
                      </Flex>
                    </div>
                    {/* name="🧬 right" id="I189:19164;171:27107" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        width: "32px",
                        height: "var(--size-height-controlheight, 32px)",
                        padding: "var(--size-padding-paddingxxs, 4px)",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "var(--style-radius-borderradius, 8px)",
                      }}
                    >
                      {/* name="chevron-right" id="I189:19164;171:27107;171:26641" type="INSTANCE" */}
                      <Icon.QodeChevronRight
                        style={{
                          width: "var(--font-size-base, 14px)",
                          height: "var(--font-size-base, 14px)",
                          flexShrink: "0",
                        }}
                        {...{}}
                      />
                    </Flex>
                  </div>
                  {/* name="Jumper Wrapper" id="I189:19164;171:27131" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    {/* name="🧬 select 1" id="I189:19164;171:27132" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        width: "108px",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        gap: "var(--size-padding-paddingxxs, 4px)",
                        borderRadius: "var(--border-radius-base, 8px)",
                        border:
                          "1px solid var(--border-border-neutral-30, #d5d5d5)",
                      }}
                    >
                      {/* name="Input/Select" id="I189:19164;171:27132;170:26363" type="INSTANCE" */}
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
                            "var(--style-line-width-linewidth, 1px) solid rgba(0, 0, 0, 0.15)",
                          background: "#FFF",
                        }}
                      >
                        <span
                          style={{
                            flex: "1 0 0",
                            color: "var(--text-text-neutral-50, #1d1d1d)",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-base, 14px)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight:
                              "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          }}
                        >{`12 / page`}</span>
                        {/* name="Icon" id="I189:19164;171:27132;170:26363;170:24281" type="INSTANCE" */}
                        <Flex style={{ width: "16px", height: "16px" }}>
                          {/* name="Vector" id="I189:19164;171:27132;170:26363;170:24281;630:7560" type="VECTOR" */}
                          <Flex
                            style={{
                              width: "14.005px",
                              height: "8.002px",
                              flexShrink: "0",
                              fill: "rgba(0, 0, 0, 0.45)",
                            }}
                          >
                            {/* name="Vector" id=I189:19164;171:27132;170:26363;170:24281;630:7560 type=VECTOR */}
                            <></>
                          </Flex>
                        </Flex>
                      </Flex>
                    </Flex>
                  </div>
                </Flex>
              </div>
            </div>
          </div>
        </>
      )}
      {/* id="715:30654" */}
      {`${screensize}` === `1366` && (
        <>
          {/* name="screensize=1366" id="715:30654" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "flex-start",
              background: "#FFF",
            }}
          >
            {/* name="Navbar" id="183:10492" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                width: "84px",
                flexDirection: "column",
                alignItems: "center",
                alignSelf: "stretch",
                borderRight:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--background-bg-white, #fff)",
              }}
            >
              {/* name="Logo" id="I183:10492;1:3092" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  padding: "16px 0px",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "4px",
                  alignSelf: "stretch",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                }}
              >
                {/* name="logo" id="I183:10492;635:31404" type="INSTANCE" */}
                <QodeSvg616010
                  style={{ width: "40px", height: "40px" }}
                  {...{
                    type: "Default",
                    darkmode: "yes",
                    orientation: "landscape",
                    wordmark: "no",
                  }}
                />
              </div>
              {/* name="V-Menu" id="I183:10492;1:3094" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  padding: "16px 8px",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "16px",
                  flex: "1 0 0",
                  alignSelf: "stretch",
                }}
              >
                {/* name="Navbar/Menu" id="I183:10492;4:124" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "84px",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-size-sizexxs-6px, 6px)",
                  }}
                >
                  {/* name="Icon" id="I183:10492;4:124;4:78" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      width: "40px",
                      height: "40px",
                      padding: "8px",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "10px",
                      borderRadius: "var(--size-size-sizexs-8px, 8px)",
                      border:
                        "1px solid var(--border-border-neutral-20, #e3e3e3)",
                      background: "var(--background-bg-neutral-5, #f8f6f6)",
                    }}
                  >
                    {/* name="cube" id="I183:10492;4:124;4:79" type="INSTANCE" */}
                    <Icon.QodeCube
                      style={{ width: "24px", height: "24px", flexShrink: "0" }}
                      {...{}}
                    />
                  </div>
                  <span
                    style={{
                      alignSelf: "stretch",
                      color: "var(--text-text-neutral-30, #656565)",
                      textAlign: "center",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-small, 12px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                    }}
                  >{`Dashboard`}</span>
                </Flex>
                {/* name="Navbar/Menu" id="I183:10492;16:5813" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "84px",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-size-sizexxs-6px, 6px)",
                  }}
                >
                  {/* name="Icon" id="I183:10492;16:5813;4:92" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      width: "40px",
                      height: "40px",
                      padding: "8px",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "10px",
                      borderRadius: "var(--size-size-sizexs-8px, 8px)",
                      border:
                        "1px solid var(--border-border-primary-30, #107ecc)",
                      background: "var(--background-bg-primary, #1597f4)",
                    }}
                  >
                    {/* name="briefcase" id="I183:10492;16:5813;4:93" type="INSTANCE" */}
                    <Icon.QodeBriefcase
                      style={{ width: "24px", height: "24px", flexShrink: "0" }}
                      {...{}}
                    />
                  </div>
                  <span
                    style={{
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
                  >{`Jobs`}</span>
                </Flex>
                {/* name="Navbar/Menu" id="I183:10492;4:54" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "84px",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-size-sizexxs-6px, 6px)",
                  }}
                >
                  {/* name="Icon" id="I183:10492;4:54;4:78" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      width: "40px",
                      height: "40px",
                      padding: "8px",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "10px",
                      borderRadius: "var(--size-size-sizexs-8px, 8px)",
                      border:
                        "1px solid var(--border-border-neutral-20, #e3e3e3)",
                      background: "var(--background-bg-neutral-5, #f8f6f6)",
                    }}
                  >
                    {/* name="user-group" id="I183:10492;4:54;4:79" type="INSTANCE" */}
                    <Icon.QodeUserGroup
                      style={{ width: "24px", height: "24px", flexShrink: "0" }}
                      {...{}}
                    />
                  </div>
                  <span
                    style={{
                      alignSelf: "stretch",
                      color: "var(--text-text-neutral-30, #656565)",
                      textAlign: "center",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-small, 12px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                    }}
                  >{`Talent pool`}</span>
                </Flex>
                {/* name="Navbar/Menu" id="I183:10492;4:95" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "84px",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-size-sizexxs-6px, 6px)",
                  }}
                >
                  {/* name="Icon" id="I183:10492;4:95;4:78" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      width: "40px",
                      height: "40px",
                      padding: "8px",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "10px",
                      borderRadius: "var(--size-size-sizexs-8px, 8px)",
                      border:
                        "1px solid var(--border-border-neutral-20, #e3e3e3)",
                      background: "var(--background-bg-neutral-5, #f8f6f6)",
                    }}
                  >
                    {/* name="video" id="I183:10492;4:95;4:79" type="INSTANCE" */}
                    <Icon.QodeVideo
                      style={{ width: "24px", height: "24px", flexShrink: "0" }}
                      {...{}}
                    />
                  </div>
                  <span
                    style={{
                      alignSelf: "stretch",
                      color: "var(--text-text-neutral-30, #656565)",
                      textAlign: "center",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-small, 12px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                    }}
                  >{`Interviews`}</span>
                </Flex>
              </div>
              {/* name="Btm" id="I183:10492;1:3098" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  padding: "16px 0px",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                {/* name="Profile" id="I183:10492;1:3099" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-end",
                    gap: "var(--font-size-large, 16px)",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name="Button" id="I183:10492;1:3099;5007:11919" type="INSTANCE" */}
                  <QodeButton
                    style={{
                      display: "flex",
                      height: "var(--size-height-controlheightlg, 40px)",
                      padding:
                        "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingsm, 12px)",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "var(--size-padding-paddingxs, 8px)",
                      borderRadius: "var(--style-radius-borderround, 999px)",
                      border:
                        "var(--style-line-width-linewidth, 1px) solid var(--color-gold-purple-colorgoldpurpleborder, #efdbff)",
                      background:
                        "var(--color-gold-purple-colorgoldpurplebg, #f9f0ff)",
                    }}
                    {...{
                      icononly: "630:15277",
                      iconR: <Icon.QodeMagnifyingGlass />,
                      title: "Button",
                      iconL: false,
                      type: "default",
                      size: "large",
                      state: "default",
                      content: "icon",
                      danger: false,
                      ghost: false,
                    }}
                  />
                </Flex>
                {/* name="Profile" id="I183:10492;1:3100" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-end",
                    gap: "var(--font-size-large, 16px)",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name="Button" id="I183:10492;1:3100;5007:11919" type="INSTANCE" */}
                  <QodeButton
                    style={{
                      display: "flex",
                      height: "var(--size-height-controlheightlg, 40px)",
                      padding:
                        "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingsm, 12px)",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "var(--size-padding-paddingxs, 8px)",
                      borderRadius: "var(--style-radius-borderround, 999px)",
                      border:
                        "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                      background:
                        "var(--color-neutral-background-colorbgcontainer, #fff)",
                    }}
                    {...{
                      icononly: <Icon.QodeUser />,
                      iconR: <Icon.QodeMagnifyingGlass />,
                      title: "Button",
                      iconL: false,
                      type: "default",
                      size: "large",
                      state: "default",
                      content: "icon",
                      danger: false,
                      ghost: false,
                    }}
                  />
                </Flex>
              </div>
            </Flex>
            {/* name="b" id="183:10493" type="FRAME" */}
            <div
              style={{
                display: "flex",
                width: "1282px",
                height: "768px",
                padding: "40px 40px 0px 40px",
                flexDirection: "column",
                alignItems: "center",
                gap: "32px",
                background: "var(--app-bg, #f4f4f6)",
              }}
            >
              {/* name="Header" id="183:12835" type="FRAME" */}
              <div
                style={{
                  height: "40px",
                  maxWidth: "1276px",
                  flexShrink: "0",
                  alignSelf: "stretch",
                }}
              >
                <span
                  style={{
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-heading3, 28px)",
                    fontStyle: "normal",
                    fontWeight: "600",
                    lineHeight:
                      "var(--lineheight-lineheight-h3, 36px) /* 128.571% */",
                  }}
                >{`My jobs`}</span>
                {/* name="Button" id="183:12837" type="INSTANCE" */}
                <QodeButton
                  style={{
                    display: "flex",
                    width: "130px",
                    height: "var(--size-height-controlheight, 32px)",
                    padding: "4px 16px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "8px",
                    flexShrink: "0",
                    borderRadius: "var(--border-radius-rounded, 999px)",
                    border:
                      "1px solid var(--border-border-primary-30, #107ecc)",
                    background: "var(--background-bg-primary, #1597f4)",
                  }}
                  {...{
                    onlyIcon: <Icon.QodeMagnifyingGlass />,
                    iconLeft: true,
                    iconRight: false,
                    buttonname: "Add job",
                    selectIconRight: <Icon.QodeMagnifyingGlass />,
                    selectIconLeft: <Icon.QodePlus />,
                    type: "primary",
                    size: "default",
                    state: "default",
                    content: "default",
                    danger: false,
                    ghost: false,
                  }}
                />
                {/* name="Search bar" id="183:12838" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "480px",
                    height: "var(--size-height-controlheightlg, 40px)",
                    padding: "10px 12px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "12px",
                    flexShrink: "0",
                    borderRadius: "var(--border-radius-base, 8px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                    background: "var(--background-bg-white, #fff)",
                  }}
                >
                  {/* name="🎰 icon left" id="I183:12838;2720:38139" type="INSTANCE" */}
                  <Icon.QodeMagnifyingGlass
                    style={{ width: "16px", height: "16px", flexShrink: "0" }}
                    {...{}}
                  />
                  <span
                    style={{
                      color: "var(--color-neutral-text-colortext, #000)",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-large, 16px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight: "24px /* 150% */",
                    }}
                  >{`PRE`}</span>
                  <span
                    style={{
                      flex: "1 0 0",
                      color: "var(--text-text-placeholder, #a7a7a7)",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-large, 16px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight: "24px /* 150% */",
                    }}
                  >{`Search`}</span>
                  <span
                    style={{
                      color:
                        "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-large, 16px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight: "24px /* 150% */",
                    }}
                  >{`SUF`}</span>
                  {/* name="🎰 icon right" id="I183:12838;2720:38143" type="INSTANCE" */}
                  <Icon.QodeUser
                    style={{
                      display: "flex",
                      width: "16px",
                      height: "16px",
                      padding: "1.6px 2.4px",
                      justifyContent: "center",
                      alignItems: "center",
                      flexShrink: "0",
                    }}
                    {...{}}
                  />
                </Flex>
              </div>
              {/* name="Body" id="183:10498" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  maxWidth: "1276px",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "20px",
                  alignSelf: "stretch",
                }}
              >
                {/* name="Jobs" id="183:10499" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    alignContent: "flex-start",
                    gap: "8px",
                    alignSelf: "stretch",
                    flexWrap: "wrap",
                    borderRadius: "8px",
                  }}
                >
                  {/* name="Job item" id="183:10500" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "395px",
                      maxWidth: "440px",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      borderRadius: "var(--border-radius-large, 12px)",
                      border:
                        "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                      background: "var(--background-bg-white, #fff)",
                    }}
                  >
                    {/* name="Wrap" id="I183:10500;47:5566" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding: "16px",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        gap: "12px",
                        alignSelf: "stretch",
                        borderBottom:
                          "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                      }}
                    >
                      {/* name="Job title" id="I183:10500;47:5567" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "12px",
                          alignSelf: "stretch",
                        }}
                      >
                        <span
                          style={{
                            maxHeight: "56px",
                            flex: "1 0 0",
                            color: "var(--text-text-neutral-50, #1d1d1d)",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-size-sizemd-20px, 20px)",
                            fontStyle: "normal",
                            fontWeight: "600",
                            lineHeight:
                              "var(--lineheight-lineheight-xl, 28px) /* 140% */",
                          }}
                        >{`Sales Consultant`}</span>
                        {/* name="arrow-up-right" id="I183:10500;47:5569" type="INSTANCE" */}
                        <Icon.QodeArrowUpRight
                          style={{ width: "24px", height: "24px" }}
                          {...{}}
                        />
                      </div>
                      {/* name="Wrap" id="I183:10500;485:35083" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          paddingRight: "16px",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          gap: "12px",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name="Job/Attributes" id="I183:10500;485:36887" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            padding: "4px 12px",
                            alignItems: "center",
                            gap: "12px",
                            borderRadius: "99px",
                            background: "var(--neutral-gray-5, #f8f6f6)",
                          }}
                        >
                          {/* name="Urgent" id="I183:10500;485:36887;485:36863" type="FRAME" */}
                          <div
                            style={{
                              display: "flex",
                              padding: "2px var(--size-size-sizexxs-6px, 6px)",
                              justifyContent: "center",
                              alignItems: "center",
                              gap: "10px",
                              borderRadius: "12px",
                              background: "var(--neutral-gray-90, #464646)",
                            }}
                          >
                            <span
                              style={{
                                color: "#FFF",
                                textAlign: "center",
                                fontFamily: '"SF Pro Display"',
                                fontSize: "10px",
                                fontStyle: "normal",
                                fontWeight: "600",
                                lineHeight: "normal",
                              }}
                            >{`URGENT`}</span>
                          </div>
                          {/* name="Yoe" id="I183:10500;485:36887;485:36865" type="FRAME" */}
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "12px",
                            }}
                          >
                            <span
                              style={{
                                color: "var(--text-text-neutral-50, #1d1d1d)",
                                fontFamily:
                                  'var(--family-family, "sf pro display")',
                                fontSize: "var(--size-base, 14px)",
                                fontStyle: "normal",
                                fontWeight: "400",
                                lineHeight:
                                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              }}
                            >{`3 yoe`}</span>
                            {/* name="Line 3" id="I183:10500;485:36887;485:36867" type="LINE" */}
                            <Flex
                              style={{
                                width: "1px",
                                height: "8px",
                                background:
                                  "var(--border-border-neutral-50, #6f6f6f)",
                              }}
                            >
                              {/* name="Line 3" id=I183:10500;485:36887;485:36867 type=LINE */}
                              <></>
                            </Flex>
                          </div>
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Vietnam`}</span>
                        </Flex>
                        {/* name="Skills" id="I183:10500;47:5576" type="FRAME" */}
                        <div
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "12px",
                            alignSelf: "stretch",
                          }}
                        >
                          <span
                            style={{
                              color: "var(--text-text-neutral-40, #464646)",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "700",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Skills:`}</span>
                          <span
                            style={{
                              flex: "1 0 0",
                              color: "var(--text-text-neutral-40, #464646)",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Data analysis, Sales automation, Supervising, Salesforce, Hubspot, +5 more`}</span>
                        </div>
                      </div>
                    </div>
                    {/* name="Action" id="I183:10500;47:5554" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding: "16px",
                        justifyContent: "space-between",
                        alignItems: "center",
                        alignSelf: "stretch",
                        background: "var(--neutral-gray-5, #f8f6f6)",
                      }}
                    >
                      {/* name="Status" id="I183:10500;47:5555" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                        }}
                      >
                        {/* name="Job/Quick access" id="I183:10500;47:5556" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "var(--size-size-sizexxs-6px, 6px)",
                            borderRadius: "99px",
                          }}
                        >
                          {/* name="heart" id="I183:10500;47:5556;47:5444" type="INSTANCE" */}
                          <Icon.QodeHeart
                            style={{ width: "16px", height: "16px" }}
                            {...{}}
                          />
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "500",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              textDecorationLine: "underline",
                            }}
                          >{`12 shortlisted`}</span>
                        </Flex>
                        {/* name="divider" id="I183:10500;47:5557" type="LINE" */}
                        <Flex
                          style={{
                            width: "1px",
                            height: "15px",
                            background:
                              "var(--border-border-neutral-30, #d5d5d5)",
                          }}
                        >
                          {/* name="divider" id=I183:10500;47:5557 type=LINE */}
                          <></>
                        </Flex>
                        {/* name="Job/Quick access" id="I183:10500;47:5558" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "var(--size-size-sizexxs-6px, 6px)",
                            borderRadius: "99px",
                          }}
                        >
                          {/* name="video" id="I183:10500;47:5558;47:5444" type="INSTANCE" */}
                          <Icon.QodeVideo
                            style={{ width: "16px", height: "16px" }}
                            {...{}}
                          />
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "500",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              textDecorationLine: "underline",
                            }}
                          >{`4 interviewed`}</span>
                        </Flex>
                      </div>
                      <span
                        style={{
                          color: "var(--text-text-primary-20, #1597f4)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "500",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          textDecorationLine: "underline",
                        }}
                      >{`JD`}</span>
                    </div>
                  </Flex>
                  {/* name="Job item" id="183:10501" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "395px",
                      maxWidth: "440px",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      borderRadius: "var(--border-radius-large, 12px)",
                      border:
                        "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                      background: "var(--background-bg-white, #fff)",
                    }}
                  >
                    {/* name="Wrap" id="I183:10501;47:5566" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding: "16px",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        gap: "12px",
                        alignSelf: "stretch",
                        borderBottom:
                          "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                      }}
                    >
                      {/* name="Job title" id="I183:10501;47:5567" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "12px",
                          alignSelf: "stretch",
                        }}
                      >
                        <span
                          style={{
                            maxHeight: "56px",
                            flex: "1 0 0",
                            color: "var(--text-text-neutral-50, #1d1d1d)",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-size-sizemd-20px, 20px)",
                            fontStyle: "normal",
                            fontWeight: "600",
                            lineHeight:
                              "var(--lineheight-lineheight-xl, 28px) /* 140% */",
                          }}
                        >{`Sales Consultant`}</span>
                        {/* name="arrow-up-right" id="I183:10501;47:5569" type="INSTANCE" */}
                        <Icon.QodeArrowUpRight
                          style={{ width: "24px", height: "24px" }}
                          {...{}}
                        />
                      </div>
                      {/* name="Wrap" id="I183:10501;485:35083" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          paddingRight: "16px",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          gap: "12px",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name="Job/Attributes" id="I183:10501;485:36887" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            padding: "4px 12px",
                            alignItems: "center",
                            gap: "12px",
                            borderRadius: "99px",
                            background: "var(--neutral-gray-5, #f8f6f6)",
                          }}
                        >
                          {/* name="Urgent" id="I183:10501;485:36887;485:36863" type="FRAME" */}
                          <div
                            style={{
                              display: "flex",
                              padding: "2px var(--size-size-sizexxs-6px, 6px)",
                              justifyContent: "center",
                              alignItems: "center",
                              gap: "10px",
                              borderRadius: "12px",
                              background: "var(--neutral-gray-90, #464646)",
                            }}
                          >
                            <span
                              style={{
                                color: "#FFF",
                                textAlign: "center",
                                fontFamily: '"SF Pro Display"',
                                fontSize: "10px",
                                fontStyle: "normal",
                                fontWeight: "600",
                                lineHeight: "normal",
                              }}
                            >{`URGENT`}</span>
                          </div>
                          {/* name="Yoe" id="I183:10501;485:36887;485:36865" type="FRAME" */}
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "12px",
                            }}
                          >
                            <span
                              style={{
                                color: "var(--text-text-neutral-50, #1d1d1d)",
                                fontFamily:
                                  'var(--family-family, "sf pro display")',
                                fontSize: "var(--size-base, 14px)",
                                fontStyle: "normal",
                                fontWeight: "400",
                                lineHeight:
                                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              }}
                            >{`3 yoe`}</span>
                            {/* name="Line 3" id="I183:10501;485:36887;485:36867" type="LINE" */}
                            <Flex
                              style={{
                                width: "1px",
                                height: "8px",
                                background:
                                  "var(--border-border-neutral-50, #6f6f6f)",
                              }}
                            >
                              {/* name="Line 3" id=I183:10501;485:36887;485:36867 type=LINE */}
                              <></>
                            </Flex>
                          </div>
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Vietnam`}</span>
                        </Flex>
                        {/* name="Skills" id="I183:10501;47:5576" type="FRAME" */}
                        <div
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "12px",
                            alignSelf: "stretch",
                          }}
                        >
                          <span
                            style={{
                              color: "var(--text-text-neutral-40, #464646)",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "700",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Skills:`}</span>
                          <span
                            style={{
                              flex: "1 0 0",
                              color: "var(--text-text-neutral-40, #464646)",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Data analysis, Sales automation, Supervising, Salesforce, Hubspot, +5 more`}</span>
                        </div>
                      </div>
                    </div>
                    {/* name="Action" id="I183:10501;47:5554" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding: "16px",
                        justifyContent: "space-between",
                        alignItems: "center",
                        alignSelf: "stretch",
                        background: "var(--neutral-gray-5, #f8f6f6)",
                      }}
                    >
                      {/* name="Status" id="I183:10501;47:5555" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                        }}
                      >
                        {/* name="Job/Quick access" id="I183:10501;47:5556" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "var(--size-size-sizexxs-6px, 6px)",
                            borderRadius: "99px",
                          }}
                        >
                          {/* name="heart" id="I183:10501;47:5556;47:5444" type="INSTANCE" */}
                          <Icon.QodeHeart
                            style={{ width: "16px", height: "16px" }}
                            {...{}}
                          />
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "500",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              textDecorationLine: "underline",
                            }}
                          >{`12 shortlisted`}</span>
                        </Flex>
                        {/* name="divider" id="I183:10501;47:5557" type="LINE" */}
                        <Flex
                          style={{
                            width: "1px",
                            height: "15px",
                            background:
                              "var(--border-border-neutral-30, #d5d5d5)",
                          }}
                        >
                          {/* name="divider" id=I183:10501;47:5557 type=LINE */}
                          <></>
                        </Flex>
                        {/* name="Job/Quick access" id="I183:10501;47:5558" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "var(--size-size-sizexxs-6px, 6px)",
                            borderRadius: "99px",
                          }}
                        >
                          {/* name="video" id="I183:10501;47:5558;47:5444" type="INSTANCE" */}
                          <Icon.QodeVideo
                            style={{ width: "16px", height: "16px" }}
                            {...{}}
                          />
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "500",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              textDecorationLine: "underline",
                            }}
                          >{`4 interviewed`}</span>
                        </Flex>
                      </div>
                      <span
                        style={{
                          color: "var(--text-text-primary-20, #1597f4)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "500",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          textDecorationLine: "underline",
                        }}
                      >{`JD`}</span>
                    </div>
                  </Flex>
                  {/* name="Job item" id="183:10502" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "395px",
                      maxWidth: "440px",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      borderRadius: "var(--border-radius-large, 12px)",
                      border:
                        "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                      background: "var(--background-bg-white, #fff)",
                    }}
                  >
                    {/* name="Wrap" id="I183:10502;47:5566" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding: "16px",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        gap: "12px",
                        alignSelf: "stretch",
                        borderBottom:
                          "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                      }}
                    >
                      {/* name="Job title" id="I183:10502;47:5567" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "12px",
                          alignSelf: "stretch",
                        }}
                      >
                        <span
                          style={{
                            maxHeight: "56px",
                            flex: "1 0 0",
                            color: "var(--text-text-neutral-50, #1d1d1d)",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-size-sizemd-20px, 20px)",
                            fontStyle: "normal",
                            fontWeight: "600",
                            lineHeight:
                              "var(--lineheight-lineheight-xl, 28px) /* 140% */",
                          }}
                        >{`Project Manager`}</span>
                        {/* name="arrow-up-right" id="I183:10502;47:5569" type="INSTANCE" */}
                        <Icon.QodeArrowUpRight
                          style={{ width: "24px", height: "24px" }}
                          {...{}}
                        />
                      </div>
                      {/* name="Wrap" id="I183:10502;485:35083" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          paddingRight: "16px",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          gap: "12px",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name="Job/Attributes" id="I183:10502;485:36887" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            padding: "4px 12px",
                            alignItems: "center",
                            gap: "12px",
                            borderRadius: "99px",
                            background: "var(--neutral-gray-5, #f8f6f6)",
                          }}
                        >
                          {/* name="Urgent" id="I183:10502;485:36887;485:36863" type="FRAME" */}
                          <div
                            style={{
                              display: "flex",
                              padding: "2px var(--size-size-sizexxs-6px, 6px)",
                              justifyContent: "center",
                              alignItems: "center",
                              gap: "10px",
                              borderRadius: "12px",
                              background: "var(--neutral-gray-90, #464646)",
                            }}
                          >
                            <span
                              style={{
                                color: "#FFF",
                                textAlign: "center",
                                fontFamily: '"SF Pro Display"',
                                fontSize: "10px",
                                fontStyle: "normal",
                                fontWeight: "600",
                                lineHeight: "normal",
                              }}
                            >{`URGENT`}</span>
                          </div>
                          {/* name="Yoe" id="I183:10502;485:36887;485:36865" type="FRAME" */}
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "12px",
                            }}
                          >
                            <span
                              style={{
                                color: "var(--text-text-neutral-50, #1d1d1d)",
                                fontFamily:
                                  'var(--family-family, "sf pro display")',
                                fontSize: "var(--size-base, 14px)",
                                fontStyle: "normal",
                                fontWeight: "400",
                                lineHeight:
                                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              }}
                            >{`3 yoe`}</span>
                            {/* name="Line 3" id="I183:10502;485:36887;485:36867" type="LINE" */}
                            <Flex
                              style={{
                                width: "1px",
                                height: "8px",
                                background:
                                  "var(--border-border-neutral-50, #6f6f6f)",
                              }}
                            >
                              {/* name="Line 3" id=I183:10502;485:36887;485:36867 type=LINE */}
                              <></>
                            </Flex>
                          </div>
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Vietnam`}</span>
                        </Flex>
                        {/* name="Skills" id="I183:10502;47:5576" type="FRAME" */}
                        <div
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "12px",
                            alignSelf: "stretch",
                          }}
                        >
                          <span
                            style={{
                              color: "var(--text-text-neutral-40, #464646)",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "700",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Skills:`}</span>
                          <span
                            style={{
                              flex: "1 0 0",
                              color: "var(--text-text-neutral-40, #464646)",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Data analysis, Sales automation, Supervising, Salesforce, Hubspot, +5 more`}</span>
                        </div>
                      </div>
                    </div>
                    {/* name="Action" id="I183:10502;47:5554" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding: "16px",
                        justifyContent: "space-between",
                        alignItems: "center",
                        alignSelf: "stretch",
                        background: "var(--neutral-gray-5, #f8f6f6)",
                      }}
                    >
                      {/* name="Status" id="I183:10502;47:5555" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                        }}
                      >
                        {/* name="Job/Quick access" id="I183:10502;47:5556" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "var(--size-size-sizexxs-6px, 6px)",
                            borderRadius: "99px",
                          }}
                        >
                          {/* name="heart" id="I183:10502;47:5556;47:5444" type="INSTANCE" */}
                          <Icon.QodeHeart
                            style={{ width: "16px", height: "16px" }}
                            {...{}}
                          />
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "500",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              textDecorationLine: "underline",
                            }}
                          >{`12 shortlisted`}</span>
                        </Flex>
                        {/* name="divider" id="I183:10502;47:5557" type="LINE" */}
                        <Flex
                          style={{
                            width: "1px",
                            height: "15px",
                            background:
                              "var(--border-border-neutral-30, #d5d5d5)",
                          }}
                        >
                          {/* name="divider" id=I183:10502;47:5557 type=LINE */}
                          <></>
                        </Flex>
                        {/* name="Job/Quick access" id="I183:10502;47:5558" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "var(--size-size-sizexxs-6px, 6px)",
                            borderRadius: "99px",
                          }}
                        >
                          {/* name="video" id="I183:10502;47:5558;47:5444" type="INSTANCE" */}
                          <Icon.QodeVideo
                            style={{ width: "16px", height: "16px" }}
                            {...{}}
                          />
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "500",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              textDecorationLine: "underline",
                            }}
                          >{`4 interviewed`}</span>
                        </Flex>
                      </div>
                      <span
                        style={{
                          color: "var(--text-text-primary-20, #1597f4)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "500",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          textDecorationLine: "underline",
                        }}
                      >{`JD`}</span>
                    </div>
                  </Flex>
                  {/* name="Job item" id="183:10503" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "395px",
                      maxWidth: "440px",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      borderRadius: "var(--border-radius-large, 12px)",
                      border:
                        "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                      background: "var(--background-bg-white, #fff)",
                    }}
                  >
                    {/* name="Wrap" id="I183:10503;47:5566" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding: "16px",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        gap: "12px",
                        alignSelf: "stretch",
                        borderBottom:
                          "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                      }}
                    >
                      {/* name="Job title" id="I183:10503;47:5567" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "12px",
                          alignSelf: "stretch",
                        }}
                      >
                        <span
                          style={{
                            maxHeight: "56px",
                            flex: "1 0 0",
                            color: "var(--text-text-neutral-50, #1d1d1d)",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-size-sizemd-20px, 20px)",
                            fontStyle: "normal",
                            fontWeight: "600",
                            lineHeight:
                              "var(--lineheight-lineheight-xl, 28px) /* 140% */",
                          }}
                        >{`Senior Software Engineer`}</span>
                        {/* name="arrow-up-right" id="I183:10503;47:5569" type="INSTANCE" */}
                        <Icon.QodeArrowUpRight
                          style={{ width: "24px", height: "24px" }}
                          {...{}}
                        />
                      </div>
                      {/* name="Wrap" id="I183:10503;485:35083" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          paddingRight: "16px",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          gap: "12px",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name="Job/Attributes" id="I183:10503;485:36887" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            padding: "4px 12px",
                            alignItems: "center",
                            gap: "12px",
                            borderRadius: "99px",
                            background: "var(--neutral-gray-5, #f8f6f6)",
                          }}
                        >
                          {/* name="Urgent" id="I183:10503;485:36887;485:36863" type="FRAME" */}
                          <div
                            style={{
                              display: "flex",
                              padding: "2px var(--size-size-sizexxs-6px, 6px)",
                              justifyContent: "center",
                              alignItems: "center",
                              gap: "10px",
                              borderRadius: "12px",
                              background: "var(--neutral-gray-90, #464646)",
                            }}
                          >
                            <span
                              style={{
                                color: "#FFF",
                                textAlign: "center",
                                fontFamily: '"SF Pro Display"',
                                fontSize: "10px",
                                fontStyle: "normal",
                                fontWeight: "600",
                                lineHeight: "normal",
                              }}
                            >{`URGENT`}</span>
                          </div>
                          {/* name="Yoe" id="I183:10503;485:36887;485:36865" type="FRAME" */}
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "12px",
                            }}
                          >
                            <span
                              style={{
                                color: "var(--text-text-neutral-50, #1d1d1d)",
                                fontFamily:
                                  'var(--family-family, "sf pro display")',
                                fontSize: "var(--size-base, 14px)",
                                fontStyle: "normal",
                                fontWeight: "400",
                                lineHeight:
                                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              }}
                            >{`3 yoe`}</span>
                            {/* name="Line 3" id="I183:10503;485:36887;485:36867" type="LINE" */}
                            <Flex
                              style={{
                                width: "1px",
                                height: "8px",
                                background:
                                  "var(--border-border-neutral-50, #6f6f6f)",
                              }}
                            >
                              {/* name="Line 3" id=I183:10503;485:36887;485:36867 type=LINE */}
                              <></>
                            </Flex>
                          </div>
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Vietnam`}</span>
                        </Flex>
                        {/* name="Skills" id="I183:10503;47:5576" type="FRAME" */}
                        <div
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "12px",
                            alignSelf: "stretch",
                          }}
                        >
                          <span
                            style={{
                              color: "var(--text-text-neutral-40, #464646)",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "700",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Skills:`}</span>
                          <span
                            style={{
                              flex: "1 0 0",
                              color: "var(--text-text-neutral-40, #464646)",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Data analysis, Sales automation, Supervising, Salesforce, Hubspot, +5 more`}</span>
                        </div>
                      </div>
                    </div>
                    {/* name="Action" id="I183:10503;47:5554" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding: "16px",
                        justifyContent: "space-between",
                        alignItems: "center",
                        alignSelf: "stretch",
                        background: "var(--neutral-gray-5, #f8f6f6)",
                      }}
                    >
                      {/* name="Status" id="I183:10503;47:5555" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                        }}
                      >
                        {/* name="Job/Quick access" id="I183:10503;47:5556" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "var(--size-size-sizexxs-6px, 6px)",
                            borderRadius: "99px",
                          }}
                        >
                          {/* name="heart" id="I183:10503;47:5556;47:5444" type="INSTANCE" */}
                          <Icon.QodeHeart
                            style={{ width: "16px", height: "16px" }}
                            {...{}}
                          />
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "500",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              textDecorationLine: "underline",
                            }}
                          >{`12 shortlisted`}</span>
                        </Flex>
                        {/* name="divider" id="I183:10503;47:5557" type="LINE" */}
                        <Flex
                          style={{
                            width: "1px",
                            height: "15px",
                            background:
                              "var(--border-border-neutral-30, #d5d5d5)",
                          }}
                        >
                          {/* name="divider" id=I183:10503;47:5557 type=LINE */}
                          <></>
                        </Flex>
                        {/* name="Job/Quick access" id="I183:10503;47:5558" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "var(--size-size-sizexxs-6px, 6px)",
                            borderRadius: "99px",
                          }}
                        >
                          {/* name="video" id="I183:10503;47:5558;47:5444" type="INSTANCE" */}
                          <Icon.QodeVideo
                            style={{ width: "16px", height: "16px" }}
                            {...{}}
                          />
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "500",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              textDecorationLine: "underline",
                            }}
                          >{`4 interviewed`}</span>
                        </Flex>
                      </div>
                      <span
                        style={{
                          color: "var(--text-text-primary-20, #1597f4)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "500",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          textDecorationLine: "underline",
                        }}
                      >{`JD`}</span>
                    </div>
                  </Flex>
                  {/* name="Job item" id="183:10504" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "395px",
                      maxWidth: "440px",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      borderRadius: "var(--border-radius-large, 12px)",
                      border:
                        "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                      background: "var(--background-bg-white, #fff)",
                    }}
                  >
                    {/* name="Wrap" id="I183:10504;47:5566" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding: "16px",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        gap: "12px",
                        alignSelf: "stretch",
                        borderBottom:
                          "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                      }}
                    >
                      {/* name="Job title" id="I183:10504;47:5567" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "12px",
                          alignSelf: "stretch",
                        }}
                      >
                        <span
                          style={{
                            maxHeight: "56px",
                            flex: "1 0 0",
                            color: "var(--text-text-neutral-50, #1d1d1d)",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-size-sizemd-20px, 20px)",
                            fontStyle: "normal",
                            fontWeight: "600",
                            lineHeight:
                              "var(--lineheight-lineheight-xl, 28px) /* 140% */",
                          }}
                        >{`Sales Supervisor`}</span>
                        {/* name="arrow-up-right" id="I183:10504;47:5569" type="INSTANCE" */}
                        <Icon.QodeArrowUpRight
                          style={{ width: "24px", height: "24px" }}
                          {...{}}
                        />
                      </div>
                      {/* name="Wrap" id="I183:10504;485:35083" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          paddingRight: "16px",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          gap: "12px",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name="Job/Attributes" id="I183:10504;485:36887" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            padding: "4px 12px",
                            alignItems: "center",
                            gap: "12px",
                            borderRadius: "99px",
                            background: "var(--neutral-gray-5, #f8f6f6)",
                          }}
                        >
                          {/* name="Urgent" id="I183:10504;485:36887;485:36863" type="FRAME" */}
                          <div
                            style={{
                              display: "flex",
                              padding: "2px var(--size-size-sizexxs-6px, 6px)",
                              justifyContent: "center",
                              alignItems: "center",
                              gap: "10px",
                              borderRadius: "12px",
                              background: "var(--neutral-gray-90, #464646)",
                            }}
                          >
                            <span
                              style={{
                                color: "#FFF",
                                textAlign: "center",
                                fontFamily: '"SF Pro Display"',
                                fontSize: "10px",
                                fontStyle: "normal",
                                fontWeight: "600",
                                lineHeight: "normal",
                              }}
                            >{`URGENT`}</span>
                          </div>
                          {/* name="Yoe" id="I183:10504;485:36887;485:36865" type="FRAME" */}
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "12px",
                            }}
                          >
                            <span
                              style={{
                                color: "var(--text-text-neutral-50, #1d1d1d)",
                                fontFamily:
                                  'var(--family-family, "sf pro display")',
                                fontSize: "var(--size-base, 14px)",
                                fontStyle: "normal",
                                fontWeight: "400",
                                lineHeight:
                                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              }}
                            >{`3 yoe`}</span>
                            {/* name="Line 3" id="I183:10504;485:36887;485:36867" type="LINE" */}
                            <Flex
                              style={{
                                width: "1px",
                                height: "8px",
                                background:
                                  "var(--border-border-neutral-50, #6f6f6f)",
                              }}
                            >
                              {/* name="Line 3" id=I183:10504;485:36887;485:36867 type=LINE */}
                              <></>
                            </Flex>
                          </div>
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Vietnam`}</span>
                        </Flex>
                        {/* name="Skills" id="I183:10504;47:5576" type="FRAME" */}
                        <div
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "12px",
                            alignSelf: "stretch",
                          }}
                        >
                          <span
                            style={{
                              color: "var(--text-text-neutral-40, #464646)",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "700",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Skills:`}</span>
                          <span
                            style={{
                              flex: "1 0 0",
                              color: "var(--text-text-neutral-40, #464646)",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Data analysis, Sales automation, Supervising, Salesforce, Hubspot, +5 more`}</span>
                        </div>
                      </div>
                    </div>
                    {/* name="Action" id="I183:10504;47:5554" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding: "16px",
                        justifyContent: "space-between",
                        alignItems: "center",
                        alignSelf: "stretch",
                        background: "var(--neutral-gray-5, #f8f6f6)",
                      }}
                    >
                      {/* name="Status" id="I183:10504;47:5555" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                        }}
                      >
                        {/* name="Job/Quick access" id="I183:10504;47:5556" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "var(--size-size-sizexxs-6px, 6px)",
                            borderRadius: "99px",
                          }}
                        >
                          {/* name="heart" id="I183:10504;47:5556;47:5444" type="INSTANCE" */}
                          <Icon.QodeHeart
                            style={{ width: "16px", height: "16px" }}
                            {...{}}
                          />
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "500",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              textDecorationLine: "underline",
                            }}
                          >{`12 shortlisted`}</span>
                        </Flex>
                        {/* name="divider" id="I183:10504;47:5557" type="LINE" */}
                        <Flex
                          style={{
                            width: "1px",
                            height: "15px",
                            background:
                              "var(--border-border-neutral-30, #d5d5d5)",
                          }}
                        >
                          {/* name="divider" id=I183:10504;47:5557 type=LINE */}
                          <></>
                        </Flex>
                        {/* name="Job/Quick access" id="I183:10504;47:5558" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "var(--size-size-sizexxs-6px, 6px)",
                            borderRadius: "99px",
                          }}
                        >
                          {/* name="video" id="I183:10504;47:5558;47:5444" type="INSTANCE" */}
                          <Icon.QodeVideo
                            style={{ width: "16px", height: "16px" }}
                            {...{}}
                          />
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "500",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              textDecorationLine: "underline",
                            }}
                          >{`4 interviewed`}</span>
                        </Flex>
                      </div>
                      <span
                        style={{
                          color: "var(--text-text-primary-20, #1597f4)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "500",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          textDecorationLine: "underline",
                        }}
                      >{`JD`}</span>
                    </div>
                  </Flex>
                  {/* name="Job item" id="183:10505" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "395px",
                      maxWidth: "440px",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      borderRadius: "var(--border-radius-large, 12px)",
                      border:
                        "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                      background: "var(--background-bg-white, #fff)",
                    }}
                  >
                    {/* name="Wrap" id="I183:10505;47:5566" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding: "16px",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        gap: "12px",
                        alignSelf: "stretch",
                        borderBottom:
                          "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                      }}
                    >
                      {/* name="Job title" id="I183:10505;47:5567" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "12px",
                          alignSelf: "stretch",
                        }}
                      >
                        <span
                          style={{
                            maxHeight: "56px",
                            flex: "1 0 0",
                            color: "var(--text-text-neutral-50, #1d1d1d)",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-size-sizemd-20px, 20px)",
                            fontStyle: "normal",
                            fontWeight: "600",
                            lineHeight:
                              "var(--lineheight-lineheight-xl, 28px) /* 140% */",
                          }}
                        >{`IT Help desk`}</span>
                        {/* name="arrow-up-right" id="I183:10505;47:5569" type="INSTANCE" */}
                        <Icon.QodeArrowUpRight
                          style={{ width: "24px", height: "24px" }}
                          {...{}}
                        />
                      </div>
                      {/* name="Wrap" id="I183:10505;485:35083" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          paddingRight: "16px",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          gap: "12px",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name="Job/Attributes" id="I183:10505;485:36887" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            padding: "4px 12px",
                            alignItems: "center",
                            gap: "12px",
                            borderRadius: "99px",
                            background: "var(--neutral-gray-5, #f8f6f6)",
                          }}
                        >
                          {/* name="Urgent" id="I183:10505;485:36887;485:36863" type="FRAME" */}
                          <div
                            style={{
                              display: "flex",
                              padding: "2px var(--size-size-sizexxs-6px, 6px)",
                              justifyContent: "center",
                              alignItems: "center",
                              gap: "10px",
                              borderRadius: "12px",
                              background: "var(--neutral-gray-90, #464646)",
                            }}
                          >
                            <span
                              style={{
                                color: "#FFF",
                                textAlign: "center",
                                fontFamily: '"SF Pro Display"',
                                fontSize: "10px",
                                fontStyle: "normal",
                                fontWeight: "600",
                                lineHeight: "normal",
                              }}
                            >{`URGENT`}</span>
                          </div>
                          {/* name="Yoe" id="I183:10505;485:36887;485:36865" type="FRAME" */}
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "12px",
                            }}
                          >
                            <span
                              style={{
                                color: "var(--text-text-neutral-50, #1d1d1d)",
                                fontFamily:
                                  'var(--family-family, "sf pro display")',
                                fontSize: "var(--size-base, 14px)",
                                fontStyle: "normal",
                                fontWeight: "400",
                                lineHeight:
                                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              }}
                            >{`3 yoe`}</span>
                            {/* name="Line 3" id="I183:10505;485:36887;485:36867" type="LINE" */}
                            <Flex
                              style={{
                                width: "1px",
                                height: "8px",
                                background:
                                  "var(--border-border-neutral-50, #6f6f6f)",
                              }}
                            >
                              {/* name="Line 3" id=I183:10505;485:36887;485:36867 type=LINE */}
                              <></>
                            </Flex>
                          </div>
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Vietnam`}</span>
                        </Flex>
                        {/* name="Skills" id="I183:10505;47:5576" type="FRAME" */}
                        <div
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "12px",
                            alignSelf: "stretch",
                          }}
                        >
                          <span
                            style={{
                              color: "var(--text-text-neutral-40, #464646)",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "700",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Skills:`}</span>
                          <span
                            style={{
                              flex: "1 0 0",
                              color: "var(--text-text-neutral-40, #464646)",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Data analysis, Sales automation, Supervising, Salesforce, Hubspot, +5 more`}</span>
                        </div>
                      </div>
                    </div>
                    {/* name="Action" id="I183:10505;47:5554" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding: "16px",
                        justifyContent: "space-between",
                        alignItems: "center",
                        alignSelf: "stretch",
                        background: "var(--neutral-gray-5, #f8f6f6)",
                      }}
                    >
                      {/* name="Status" id="I183:10505;47:5555" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                        }}
                      >
                        {/* name="Job/Quick access" id="I183:10505;47:5556" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "var(--size-size-sizexxs-6px, 6px)",
                            borderRadius: "99px",
                          }}
                        >
                          {/* name="heart" id="I183:10505;47:5556;47:5444" type="INSTANCE" */}
                          <Icon.QodeHeart
                            style={{ width: "16px", height: "16px" }}
                            {...{}}
                          />
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "500",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              textDecorationLine: "underline",
                            }}
                          >{`12 shortlisted`}</span>
                        </Flex>
                        {/* name="divider" id="I183:10505;47:5557" type="LINE" */}
                        <Flex
                          style={{
                            width: "1px",
                            height: "15px",
                            background:
                              "var(--border-border-neutral-30, #d5d5d5)",
                          }}
                        >
                          {/* name="divider" id=I183:10505;47:5557 type=LINE */}
                          <></>
                        </Flex>
                        {/* name="Job/Quick access" id="I183:10505;47:5558" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "var(--size-size-sizexxs-6px, 6px)",
                            borderRadius: "99px",
                          }}
                        >
                          {/* name="video" id="I183:10505;47:5558;47:5444" type="INSTANCE" */}
                          <Icon.QodeVideo
                            style={{ width: "16px", height: "16px" }}
                            {...{}}
                          />
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "500",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              textDecorationLine: "underline",
                            }}
                          >{`4 interviewed`}</span>
                        </Flex>
                      </div>
                      <span
                        style={{
                          color: "var(--text-text-primary-20, #1597f4)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "500",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          textDecorationLine: "underline",
                        }}
                      >{`JD`}</span>
                    </div>
                  </Flex>
                  {/* name="Job item" id="183:10506" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "395px",
                      maxWidth: "440px",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      borderRadius: "var(--border-radius-large, 12px)",
                      border:
                        "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                      background: "var(--background-bg-white, #fff)",
                    }}
                  >
                    {/* name="Wrap" id="I183:10506;47:5566" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding: "16px",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        gap: "12px",
                        alignSelf: "stretch",
                        borderBottom:
                          "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                      }}
                    >
                      {/* name="Job title" id="I183:10506;47:5567" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "12px",
                          alignSelf: "stretch",
                        }}
                      >
                        <span
                          style={{
                            maxHeight: "56px",
                            flex: "1 0 0",
                            color: "var(--text-text-neutral-50, #1d1d1d)",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-size-sizemd-20px, 20px)",
                            fontStyle: "normal",
                            fontWeight: "600",
                            lineHeight:
                              "var(--lineheight-lineheight-xl, 28px) /* 140% */",
                          }}
                        >{`Mobile developer (iOS)`}</span>
                        {/* name="arrow-up-right" id="I183:10506;47:5569" type="INSTANCE" */}
                        <Icon.QodeArrowUpRight
                          style={{ width: "24px", height: "24px" }}
                          {...{}}
                        />
                      </div>
                      {/* name="Wrap" id="I183:10506;485:35083" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          paddingRight: "16px",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          gap: "12px",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name="Job/Attributes" id="I183:10506;485:36887" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            padding: "4px 12px",
                            alignItems: "center",
                            gap: "12px",
                            borderRadius: "99px",
                            background: "var(--neutral-gray-5, #f8f6f6)",
                          }}
                        >
                          {/* name="Urgent" id="I183:10506;485:36887;485:36863" type="FRAME" */}
                          <div
                            style={{
                              display: "flex",
                              padding: "2px var(--size-size-sizexxs-6px, 6px)",
                              justifyContent: "center",
                              alignItems: "center",
                              gap: "10px",
                              borderRadius: "12px",
                              background: "var(--neutral-gray-90, #464646)",
                            }}
                          >
                            <span
                              style={{
                                color: "#FFF",
                                textAlign: "center",
                                fontFamily: '"SF Pro Display"',
                                fontSize: "10px",
                                fontStyle: "normal",
                                fontWeight: "600",
                                lineHeight: "normal",
                              }}
                            >{`URGENT`}</span>
                          </div>
                          {/* name="Yoe" id="I183:10506;485:36887;485:36865" type="FRAME" */}
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "12px",
                            }}
                          >
                            <span
                              style={{
                                color: "var(--text-text-neutral-50, #1d1d1d)",
                                fontFamily:
                                  'var(--family-family, "sf pro display")',
                                fontSize: "var(--size-base, 14px)",
                                fontStyle: "normal",
                                fontWeight: "400",
                                lineHeight:
                                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              }}
                            >{`3 yoe`}</span>
                            {/* name="Line 3" id="I183:10506;485:36887;485:36867" type="LINE" */}
                            <Flex
                              style={{
                                width: "1px",
                                height: "8px",
                                background:
                                  "var(--border-border-neutral-50, #6f6f6f)",
                              }}
                            >
                              {/* name="Line 3" id=I183:10506;485:36887;485:36867 type=LINE */}
                              <></>
                            </Flex>
                          </div>
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Vietnam`}</span>
                        </Flex>
                        {/* name="Skills" id="I183:10506;47:5576" type="FRAME" */}
                        <div
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "12px",
                            alignSelf: "stretch",
                          }}
                        >
                          <span
                            style={{
                              color: "var(--text-text-neutral-40, #464646)",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "700",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Skills:`}</span>
                          <span
                            style={{
                              flex: "1 0 0",
                              color: "var(--text-text-neutral-40, #464646)",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Data analysis, Sales automation, Supervising, Salesforce, Hubspot, +5 more`}</span>
                        </div>
                      </div>
                    </div>
                    {/* name="Action" id="I183:10506;47:5554" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding: "16px",
                        justifyContent: "space-between",
                        alignItems: "center",
                        alignSelf: "stretch",
                        background: "var(--neutral-gray-5, #f8f6f6)",
                      }}
                    >
                      {/* name="Status" id="I183:10506;47:5555" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                        }}
                      >
                        {/* name="Job/Quick access" id="I183:10506;47:5556" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "var(--size-size-sizexxs-6px, 6px)",
                            borderRadius: "99px",
                          }}
                        >
                          {/* name="heart" id="I183:10506;47:5556;47:5444" type="INSTANCE" */}
                          <Icon.QodeHeart
                            style={{ width: "16px", height: "16px" }}
                            {...{}}
                          />
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "500",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              textDecorationLine: "underline",
                            }}
                          >{`12 shortlisted`}</span>
                        </Flex>
                        {/* name="divider" id="I183:10506;47:5557" type="LINE" */}
                        <Flex
                          style={{
                            width: "1px",
                            height: "15px",
                            background:
                              "var(--border-border-neutral-30, #d5d5d5)",
                          }}
                        >
                          {/* name="divider" id=I183:10506;47:5557 type=LINE */}
                          <></>
                        </Flex>
                        {/* name="Job/Quick access" id="I183:10506;47:5558" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "var(--size-size-sizexxs-6px, 6px)",
                            borderRadius: "99px",
                          }}
                        >
                          {/* name="video" id="I183:10506;47:5558;47:5444" type="INSTANCE" */}
                          <Icon.QodeVideo
                            style={{ width: "16px", height: "16px" }}
                            {...{}}
                          />
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "500",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              textDecorationLine: "underline",
                            }}
                          >{`4 interviewed`}</span>
                        </Flex>
                      </div>
                      <span
                        style={{
                          color: "var(--text-text-primary-20, #1597f4)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "500",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          textDecorationLine: "underline",
                        }}
                      >{`JD`}</span>
                    </div>
                  </Flex>
                  {/* name="Job item" id="183:10507" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "395px",
                      maxWidth: "440px",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      borderRadius: "var(--border-radius-large, 12px)",
                      border:
                        "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                      background: "var(--background-bg-white, #fff)",
                    }}
                  >
                    {/* name="Wrap" id="I183:10507;47:5566" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding: "16px",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        gap: "12px",
                        alignSelf: "stretch",
                        borderBottom:
                          "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                      }}
                    >
                      {/* name="Job title" id="I183:10507;47:5567" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "12px",
                          alignSelf: "stretch",
                        }}
                      >
                        <span
                          style={{
                            maxHeight: "56px",
                            flex: "1 0 0",
                            color: "var(--text-text-neutral-50, #1d1d1d)",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-size-sizemd-20px, 20px)",
                            fontStyle: "normal",
                            fontWeight: "600",
                            lineHeight:
                              "var(--lineheight-lineheight-xl, 28px) /* 140% */",
                          }}
                        >{`Senior Software Engineer`}</span>
                        {/* name="arrow-up-right" id="I183:10507;47:5569" type="INSTANCE" */}
                        <Icon.QodeArrowUpRight
                          style={{ width: "24px", height: "24px" }}
                          {...{}}
                        />
                      </div>
                      {/* name="Wrap" id="I183:10507;485:35083" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          paddingRight: "16px",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          gap: "12px",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name="Job/Attributes" id="I183:10507;485:36887" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            padding: "4px 12px",
                            alignItems: "center",
                            gap: "12px",
                            borderRadius: "99px",
                            background: "var(--neutral-gray-5, #f8f6f6)",
                          }}
                        >
                          {/* name="Urgent" id="I183:10507;485:36887;485:36863" type="FRAME" */}
                          <div
                            style={{
                              display: "flex",
                              padding: "2px var(--size-size-sizexxs-6px, 6px)",
                              justifyContent: "center",
                              alignItems: "center",
                              gap: "10px",
                              borderRadius: "12px",
                              background: "var(--neutral-gray-90, #464646)",
                            }}
                          >
                            <span
                              style={{
                                color: "#FFF",
                                textAlign: "center",
                                fontFamily: '"SF Pro Display"',
                                fontSize: "10px",
                                fontStyle: "normal",
                                fontWeight: "600",
                                lineHeight: "normal",
                              }}
                            >{`URGENT`}</span>
                          </div>
                          {/* name="Yoe" id="I183:10507;485:36887;485:36865" type="FRAME" */}
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "12px",
                            }}
                          >
                            <span
                              style={{
                                color: "var(--text-text-neutral-50, #1d1d1d)",
                                fontFamily:
                                  'var(--family-family, "sf pro display")',
                                fontSize: "var(--size-base, 14px)",
                                fontStyle: "normal",
                                fontWeight: "400",
                                lineHeight:
                                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              }}
                            >{`3 yoe`}</span>
                            {/* name="Line 3" id="I183:10507;485:36887;485:36867" type="LINE" */}
                            <Flex
                              style={{
                                width: "1px",
                                height: "8px",
                                background:
                                  "var(--border-border-neutral-50, #6f6f6f)",
                              }}
                            >
                              {/* name="Line 3" id=I183:10507;485:36887;485:36867 type=LINE */}
                              <></>
                            </Flex>
                          </div>
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Vietnam`}</span>
                        </Flex>
                        {/* name="Skills" id="I183:10507;47:5576" type="FRAME" */}
                        <div
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "12px",
                            alignSelf: "stretch",
                          }}
                        >
                          <span
                            style={{
                              color: "var(--text-text-neutral-40, #464646)",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "700",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Skills:`}</span>
                          <span
                            style={{
                              flex: "1 0 0",
                              color: "var(--text-text-neutral-40, #464646)",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Data analysis, Sales automation, Supervising, Salesforce, Hubspot, +5 more`}</span>
                        </div>
                      </div>
                    </div>
                    {/* name="Action" id="I183:10507;47:5554" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding: "16px",
                        justifyContent: "space-between",
                        alignItems: "center",
                        alignSelf: "stretch",
                        background: "var(--neutral-gray-5, #f8f6f6)",
                      }}
                    >
                      {/* name="Status" id="I183:10507;47:5555" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                        }}
                      >
                        {/* name="Job/Quick access" id="I183:10507;47:5556" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "var(--size-size-sizexxs-6px, 6px)",
                            borderRadius: "99px",
                          }}
                        >
                          {/* name="heart" id="I183:10507;47:5556;47:5444" type="INSTANCE" */}
                          <Icon.QodeHeart
                            style={{ width: "16px", height: "16px" }}
                            {...{}}
                          />
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "500",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              textDecorationLine: "underline",
                            }}
                          >{`12 shortlisted`}</span>
                        </Flex>
                        {/* name="divider" id="I183:10507;47:5557" type="LINE" */}
                        <Flex
                          style={{
                            width: "1px",
                            height: "15px",
                            background:
                              "var(--border-border-neutral-30, #d5d5d5)",
                          }}
                        >
                          {/* name="divider" id=I183:10507;47:5557 type=LINE */}
                          <></>
                        </Flex>
                        {/* name="Job/Quick access" id="I183:10507;47:5558" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "var(--size-size-sizexxs-6px, 6px)",
                            borderRadius: "99px",
                          }}
                        >
                          {/* name="video" id="I183:10507;47:5558;47:5444" type="INSTANCE" */}
                          <Icon.QodeVideo
                            style={{ width: "16px", height: "16px" }}
                            {...{}}
                          />
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "500",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              textDecorationLine: "underline",
                            }}
                          >{`4 interviewed`}</span>
                        </Flex>
                      </div>
                      <span
                        style={{
                          color: "var(--text-text-primary-20, #1597f4)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "500",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          textDecorationLine: "underline",
                        }}
                      >{`JD`}</span>
                    </div>
                  </Flex>
                  {/* name="Job item" id="183:10508" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "395px",
                      maxWidth: "440px",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      borderRadius: "var(--border-radius-large, 12px)",
                      border:
                        "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                      background: "var(--background-bg-white, #fff)",
                    }}
                  >
                    {/* name="Wrap" id="I183:10508;47:5566" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding: "16px",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        gap: "12px",
                        alignSelf: "stretch",
                        borderBottom:
                          "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                      }}
                    >
                      {/* name="Job title" id="I183:10508;47:5567" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "12px",
                          alignSelf: "stretch",
                        }}
                      >
                        <span
                          style={{
                            maxHeight: "56px",
                            flex: "1 0 0",
                            color: "var(--text-text-neutral-50, #1d1d1d)",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-size-sizemd-20px, 20px)",
                            fontStyle: "normal",
                            fontWeight: "600",
                            lineHeight:
                              "var(--lineheight-lineheight-xl, 28px) /* 140% */",
                          }}
                        >{`Sales Consultant`}</span>
                        {/* name="arrow-up-right" id="I183:10508;47:5569" type="INSTANCE" */}
                        <Icon.QodeArrowUpRight
                          style={{ width: "24px", height: "24px" }}
                          {...{}}
                        />
                      </div>
                      {/* name="Wrap" id="I183:10508;485:35083" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          paddingRight: "16px",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          gap: "12px",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name="Job/Attributes" id="I183:10508;485:36887" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            padding: "4px 12px",
                            alignItems: "center",
                            gap: "12px",
                            borderRadius: "99px",
                            background: "var(--neutral-gray-5, #f8f6f6)",
                          }}
                        >
                          {/* name="Urgent" id="I183:10508;485:36887;485:36863" type="FRAME" */}
                          <div
                            style={{
                              display: "flex",
                              padding: "2px var(--size-size-sizexxs-6px, 6px)",
                              justifyContent: "center",
                              alignItems: "center",
                              gap: "10px",
                              borderRadius: "12px",
                              background: "var(--neutral-gray-90, #464646)",
                            }}
                          >
                            <span
                              style={{
                                color: "#FFF",
                                textAlign: "center",
                                fontFamily: '"SF Pro Display"',
                                fontSize: "10px",
                                fontStyle: "normal",
                                fontWeight: "600",
                                lineHeight: "normal",
                              }}
                            >{`URGENT`}</span>
                          </div>
                          {/* name="Yoe" id="I183:10508;485:36887;485:36865" type="FRAME" */}
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "12px",
                            }}
                          >
                            <span
                              style={{
                                color: "var(--text-text-neutral-50, #1d1d1d)",
                                fontFamily:
                                  'var(--family-family, "sf pro display")',
                                fontSize: "var(--size-base, 14px)",
                                fontStyle: "normal",
                                fontWeight: "400",
                                lineHeight:
                                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              }}
                            >{`3 yoe`}</span>
                            {/* name="Line 3" id="I183:10508;485:36887;485:36867" type="LINE" */}
                            <Flex
                              style={{
                                width: "1px",
                                height: "8px",
                                background:
                                  "var(--border-border-neutral-50, #6f6f6f)",
                              }}
                            >
                              {/* name="Line 3" id=I183:10508;485:36887;485:36867 type=LINE */}
                              <></>
                            </Flex>
                          </div>
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Vietnam`}</span>
                        </Flex>
                        {/* name="Skills" id="I183:10508;47:5576" type="FRAME" */}
                        <div
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "12px",
                            alignSelf: "stretch",
                          }}
                        >
                          <span
                            style={{
                              color: "var(--text-text-neutral-40, #464646)",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "700",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Skills:`}</span>
                          <span
                            style={{
                              flex: "1 0 0",
                              color: "var(--text-text-neutral-40, #464646)",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Data analysis, Sales automation, Supervising, Salesforce, Hubspot, +5 more`}</span>
                        </div>
                      </div>
                    </div>
                    {/* name="Action" id="I183:10508;47:5554" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding: "16px",
                        justifyContent: "space-between",
                        alignItems: "center",
                        alignSelf: "stretch",
                        background: "var(--neutral-gray-5, #f8f6f6)",
                      }}
                    >
                      {/* name="Status" id="I183:10508;47:5555" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                        }}
                      >
                        {/* name="Job/Quick access" id="I183:10508;47:5556" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "var(--size-size-sizexxs-6px, 6px)",
                            borderRadius: "99px",
                          }}
                        >
                          {/* name="heart" id="I183:10508;47:5556;47:5444" type="INSTANCE" */}
                          <Icon.QodeHeart
                            style={{ width: "16px", height: "16px" }}
                            {...{}}
                          />
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "500",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              textDecorationLine: "underline",
                            }}
                          >{`12 shortlisted`}</span>
                        </Flex>
                        {/* name="divider" id="I183:10508;47:5557" type="LINE" */}
                        <Flex
                          style={{
                            width: "1px",
                            height: "15px",
                            background:
                              "var(--border-border-neutral-30, #d5d5d5)",
                          }}
                        >
                          {/* name="divider" id=I183:10508;47:5557 type=LINE */}
                          <></>
                        </Flex>
                        {/* name="Job/Quick access" id="I183:10508;47:5558" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "var(--size-size-sizexxs-6px, 6px)",
                            borderRadius: "99px",
                          }}
                        >
                          {/* name="video" id="I183:10508;47:5558;47:5444" type="INSTANCE" */}
                          <Icon.QodeVideo
                            style={{ width: "16px", height: "16px" }}
                            {...{}}
                          />
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "500",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              textDecorationLine: "underline",
                            }}
                          >{`4 interviewed`}</span>
                        </Flex>
                      </div>
                      <span
                        style={{
                          color: "var(--text-text-primary-20, #1597f4)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "500",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          textDecorationLine: "underline",
                        }}
                      >{`JD`}</span>
                    </div>
                  </Flex>
                  {/* name="Job item" id="183:10509" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "395px",
                      maxWidth: "440px",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      borderRadius: "var(--border-radius-large, 12px)",
                      border:
                        "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                      background: "var(--background-bg-white, #fff)",
                    }}
                  >
                    {/* name="Wrap" id="I183:10509;47:5566" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding: "16px",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        gap: "12px",
                        alignSelf: "stretch",
                        borderBottom:
                          "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                      }}
                    >
                      {/* name="Job title" id="I183:10509;47:5567" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "12px",
                          alignSelf: "stretch",
                        }}
                      >
                        <span
                          style={{
                            maxHeight: "56px",
                            flex: "1 0 0",
                            color: "var(--text-text-neutral-50, #1d1d1d)",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-size-sizemd-20px, 20px)",
                            fontStyle: "normal",
                            fontWeight: "600",
                            lineHeight:
                              "var(--lineheight-lineheight-xl, 28px) /* 140% */",
                          }}
                        >{`Sales Consultant`}</span>
                        {/* name="arrow-up-right" id="I183:10509;47:5569" type="INSTANCE" */}
                        <Icon.QodeArrowUpRight
                          style={{ width: "24px", height: "24px" }}
                          {...{}}
                        />
                      </div>
                      {/* name="Wrap" id="I183:10509;485:35083" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          paddingRight: "16px",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          gap: "12px",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name="Job/Attributes" id="I183:10509;485:36887" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            padding: "4px 12px",
                            alignItems: "center",
                            gap: "12px",
                            borderRadius: "99px",
                            background: "var(--neutral-gray-5, #f8f6f6)",
                          }}
                        >
                          {/* name="Urgent" id="I183:10509;485:36887;485:36863" type="FRAME" */}
                          <div
                            style={{
                              display: "flex",
                              padding: "2px var(--size-size-sizexxs-6px, 6px)",
                              justifyContent: "center",
                              alignItems: "center",
                              gap: "10px",
                              borderRadius: "12px",
                              background: "var(--neutral-gray-90, #464646)",
                            }}
                          >
                            <span
                              style={{
                                color: "#FFF",
                                textAlign: "center",
                                fontFamily: '"SF Pro Display"',
                                fontSize: "10px",
                                fontStyle: "normal",
                                fontWeight: "600",
                                lineHeight: "normal",
                              }}
                            >{`URGENT`}</span>
                          </div>
                          {/* name="Yoe" id="I183:10509;485:36887;485:36865" type="FRAME" */}
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "12px",
                            }}
                          >
                            <span
                              style={{
                                color: "var(--text-text-neutral-50, #1d1d1d)",
                                fontFamily:
                                  'var(--family-family, "sf pro display")',
                                fontSize: "var(--size-base, 14px)",
                                fontStyle: "normal",
                                fontWeight: "400",
                                lineHeight:
                                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              }}
                            >{`3 yoe`}</span>
                            {/* name="Line 3" id="I183:10509;485:36887;485:36867" type="LINE" */}
                            <Flex
                              style={{
                                width: "1px",
                                height: "8px",
                                background:
                                  "var(--border-border-neutral-50, #6f6f6f)",
                              }}
                            >
                              {/* name="Line 3" id=I183:10509;485:36887;485:36867 type=LINE */}
                              <></>
                            </Flex>
                          </div>
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Vietnam`}</span>
                        </Flex>
                        {/* name="Skills" id="I183:10509;47:5576" type="FRAME" */}
                        <div
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "12px",
                            alignSelf: "stretch",
                          }}
                        >
                          <span
                            style={{
                              color: "var(--text-text-neutral-40, #464646)",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "700",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Skills:`}</span>
                          <span
                            style={{
                              flex: "1 0 0",
                              color: "var(--text-text-neutral-40, #464646)",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Data analysis, Sales automation, Supervising, Salesforce, Hubspot, +5 more`}</span>
                        </div>
                      </div>
                    </div>
                    {/* name="Action" id="I183:10509;47:5554" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding: "16px",
                        justifyContent: "space-between",
                        alignItems: "center",
                        alignSelf: "stretch",
                        background: "var(--neutral-gray-5, #f8f6f6)",
                      }}
                    >
                      {/* name="Status" id="I183:10509;47:5555" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                        }}
                      >
                        {/* name="Job/Quick access" id="I183:10509;47:5556" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "var(--size-size-sizexxs-6px, 6px)",
                            borderRadius: "99px",
                          }}
                        >
                          {/* name="heart" id="I183:10509;47:5556;47:5444" type="INSTANCE" */}
                          <Icon.QodeHeart
                            style={{ width: "16px", height: "16px" }}
                            {...{}}
                          />
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "500",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              textDecorationLine: "underline",
                            }}
                          >{`12 shortlisted`}</span>
                        </Flex>
                        {/* name="divider" id="I183:10509;47:5557" type="LINE" */}
                        <Flex
                          style={{
                            width: "1px",
                            height: "15px",
                            background:
                              "var(--border-border-neutral-30, #d5d5d5)",
                          }}
                        >
                          {/* name="divider" id=I183:10509;47:5557 type=LINE */}
                          <></>
                        </Flex>
                        {/* name="Job/Quick access" id="I183:10509;47:5558" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "var(--size-size-sizexxs-6px, 6px)",
                            borderRadius: "99px",
                          }}
                        >
                          {/* name="video" id="I183:10509;47:5558;47:5444" type="INSTANCE" */}
                          <Icon.QodeVideo
                            style={{ width: "16px", height: "16px" }}
                            {...{}}
                          />
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "500",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              textDecorationLine: "underline",
                            }}
                          >{`4 interviewed`}</span>
                        </Flex>
                      </div>
                      <span
                        style={{
                          color: "var(--text-text-primary-20, #1597f4)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "500",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          textDecorationLine: "underline",
                        }}
                      >{`JD`}</span>
                    </div>
                  </Flex>
                  {/* name="Job item" id="183:10510" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "395px",
                      maxWidth: "440px",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      borderRadius: "var(--border-radius-large, 12px)",
                      border:
                        "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                      background: "var(--background-bg-white, #fff)",
                    }}
                  >
                    {/* name="Wrap" id="I183:10510;47:5566" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding: "16px",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        gap: "12px",
                        alignSelf: "stretch",
                        borderBottom:
                          "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                      }}
                    >
                      {/* name="Job title" id="I183:10510;47:5567" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "12px",
                          alignSelf: "stretch",
                        }}
                      >
                        <span
                          style={{
                            maxHeight: "56px",
                            flex: "1 0 0",
                            color: "var(--text-text-neutral-50, #1d1d1d)",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-size-sizemd-20px, 20px)",
                            fontStyle: "normal",
                            fontWeight: "600",
                            lineHeight:
                              "var(--lineheight-lineheight-xl, 28px) /* 140% */",
                          }}
                        >{`Sales Consultant`}</span>
                        {/* name="arrow-up-right" id="I183:10510;47:5569" type="INSTANCE" */}
                        <Icon.QodeArrowUpRight
                          style={{ width: "24px", height: "24px" }}
                          {...{}}
                        />
                      </div>
                      {/* name="Wrap" id="I183:10510;485:35083" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          paddingRight: "16px",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          gap: "12px",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name="Job/Attributes" id="I183:10510;485:36887" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            padding: "4px 12px",
                            alignItems: "center",
                            gap: "12px",
                            borderRadius: "99px",
                            background: "var(--neutral-gray-5, #f8f6f6)",
                          }}
                        >
                          {/* name="Urgent" id="I183:10510;485:36887;485:36863" type="FRAME" */}
                          <div
                            style={{
                              display: "flex",
                              padding: "2px var(--size-size-sizexxs-6px, 6px)",
                              justifyContent: "center",
                              alignItems: "center",
                              gap: "10px",
                              borderRadius: "12px",
                              background: "var(--neutral-gray-90, #464646)",
                            }}
                          >
                            <span
                              style={{
                                color: "#FFF",
                                textAlign: "center",
                                fontFamily: '"SF Pro Display"',
                                fontSize: "10px",
                                fontStyle: "normal",
                                fontWeight: "600",
                                lineHeight: "normal",
                              }}
                            >{`URGENT`}</span>
                          </div>
                          {/* name="Yoe" id="I183:10510;485:36887;485:36865" type="FRAME" */}
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "12px",
                            }}
                          >
                            <span
                              style={{
                                color: "var(--text-text-neutral-50, #1d1d1d)",
                                fontFamily:
                                  'var(--family-family, "sf pro display")',
                                fontSize: "var(--size-base, 14px)",
                                fontStyle: "normal",
                                fontWeight: "400",
                                lineHeight:
                                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              }}
                            >{`3 yoe`}</span>
                            {/* name="Line 3" id="I183:10510;485:36887;485:36867" type="LINE" */}
                            <Flex
                              style={{
                                width: "1px",
                                height: "8px",
                                background:
                                  "var(--border-border-neutral-50, #6f6f6f)",
                              }}
                            >
                              {/* name="Line 3" id=I183:10510;485:36887;485:36867 type=LINE */}
                              <></>
                            </Flex>
                          </div>
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Vietnam`}</span>
                        </Flex>
                        {/* name="Skills" id="I183:10510;47:5576" type="FRAME" */}
                        <div
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "12px",
                            alignSelf: "stretch",
                          }}
                        >
                          <span
                            style={{
                              color: "var(--text-text-neutral-40, #464646)",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "700",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Skills:`}</span>
                          <span
                            style={{
                              flex: "1 0 0",
                              color: "var(--text-text-neutral-40, #464646)",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Data analysis, Sales automation, Supervising, Salesforce, Hubspot, +5 more`}</span>
                        </div>
                      </div>
                    </div>
                    {/* name="Action" id="I183:10510;47:5554" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding: "16px",
                        justifyContent: "space-between",
                        alignItems: "center",
                        alignSelf: "stretch",
                        background: "var(--neutral-gray-5, #f8f6f6)",
                      }}
                    >
                      {/* name="Status" id="I183:10510;47:5555" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                        }}
                      >
                        {/* name="Job/Quick access" id="I183:10510;47:5556" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "var(--size-size-sizexxs-6px, 6px)",
                            borderRadius: "99px",
                          }}
                        >
                          {/* name="heart" id="I183:10510;47:5556;47:5444" type="INSTANCE" */}
                          <Icon.QodeHeart
                            style={{ width: "16px", height: "16px" }}
                            {...{}}
                          />
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "500",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              textDecorationLine: "underline",
                            }}
                          >{`12 shortlisted`}</span>
                        </Flex>
                        {/* name="divider" id="I183:10510;47:5557" type="LINE" */}
                        <Flex
                          style={{
                            width: "1px",
                            height: "15px",
                            background:
                              "var(--border-border-neutral-30, #d5d5d5)",
                          }}
                        >
                          {/* name="divider" id=I183:10510;47:5557 type=LINE */}
                          <></>
                        </Flex>
                        {/* name="Job/Quick access" id="I183:10510;47:5558" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "var(--size-size-sizexxs-6px, 6px)",
                            borderRadius: "99px",
                          }}
                        >
                          {/* name="video" id="I183:10510;47:5558;47:5444" type="INSTANCE" */}
                          <Icon.QodeVideo
                            style={{ width: "16px", height: "16px" }}
                            {...{}}
                          />
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "500",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              textDecorationLine: "underline",
                            }}
                          >{`4 interviewed`}</span>
                        </Flex>
                      </div>
                      <span
                        style={{
                          color: "var(--text-text-primary-20, #1597f4)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "500",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          textDecorationLine: "underline",
                        }}
                      >{`JD`}</span>
                    </div>
                  </Flex>
                  {/* name="Job item" id="183:10511" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "395px",
                      maxWidth: "440px",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      borderRadius: "var(--border-radius-large, 12px)",
                      border:
                        "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                      background: "var(--background-bg-white, #fff)",
                    }}
                  >
                    {/* name="Wrap" id="I183:10511;47:5566" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding: "16px",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        gap: "12px",
                        alignSelf: "stretch",
                        borderBottom:
                          "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                      }}
                    >
                      {/* name="Job title" id="I183:10511;47:5567" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "12px",
                          alignSelf: "stretch",
                        }}
                      >
                        <span
                          style={{
                            maxHeight: "56px",
                            flex: "1 0 0",
                            color: "var(--text-text-neutral-50, #1d1d1d)",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-size-sizemd-20px, 20px)",
                            fontStyle: "normal",
                            fontWeight: "600",
                            lineHeight:
                              "var(--lineheight-lineheight-xl, 28px) /* 140% */",
                          }}
                        >{`Sales Consultant`}</span>
                        {/* name="arrow-up-right" id="I183:10511;47:5569" type="INSTANCE" */}
                        <Icon.QodeArrowUpRight
                          style={{ width: "24px", height: "24px" }}
                          {...{}}
                        />
                      </div>
                      {/* name="Wrap" id="I183:10511;485:35083" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          paddingRight: "16px",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          gap: "12px",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name="Job/Attributes" id="I183:10511;485:36887" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            padding: "4px 12px",
                            alignItems: "center",
                            gap: "12px",
                            borderRadius: "99px",
                            background: "var(--neutral-gray-5, #f8f6f6)",
                          }}
                        >
                          {/* name="Urgent" id="I183:10511;485:36887;485:36863" type="FRAME" */}
                          <div
                            style={{
                              display: "flex",
                              padding: "2px var(--size-size-sizexxs-6px, 6px)",
                              justifyContent: "center",
                              alignItems: "center",
                              gap: "10px",
                              borderRadius: "12px",
                              background: "var(--neutral-gray-90, #464646)",
                            }}
                          >
                            <span
                              style={{
                                color: "#FFF",
                                textAlign: "center",
                                fontFamily: '"SF Pro Display"',
                                fontSize: "10px",
                                fontStyle: "normal",
                                fontWeight: "600",
                                lineHeight: "normal",
                              }}
                            >{`URGENT`}</span>
                          </div>
                          {/* name="Yoe" id="I183:10511;485:36887;485:36865" type="FRAME" */}
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "12px",
                            }}
                          >
                            <span
                              style={{
                                color: "var(--text-text-neutral-50, #1d1d1d)",
                                fontFamily:
                                  'var(--family-family, "sf pro display")',
                                fontSize: "var(--size-base, 14px)",
                                fontStyle: "normal",
                                fontWeight: "400",
                                lineHeight:
                                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              }}
                            >{`3 yoe`}</span>
                            {/* name="Line 3" id="I183:10511;485:36887;485:36867" type="LINE" */}
                            <Flex
                              style={{
                                width: "1px",
                                height: "8px",
                                background:
                                  "var(--border-border-neutral-50, #6f6f6f)",
                              }}
                            >
                              {/* name="Line 3" id=I183:10511;485:36887;485:36867 type=LINE */}
                              <></>
                            </Flex>
                          </div>
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Vietnam`}</span>
                        </Flex>
                        {/* name="Skills" id="I183:10511;47:5576" type="FRAME" */}
                        <div
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "12px",
                            alignSelf: "stretch",
                          }}
                        >
                          <span
                            style={{
                              color: "var(--text-text-neutral-40, #464646)",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "700",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Skills:`}</span>
                          <span
                            style={{
                              flex: "1 0 0",
                              color: "var(--text-text-neutral-40, #464646)",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Data analysis, Sales automation, Supervising, Salesforce, Hubspot, +5 more`}</span>
                        </div>
                      </div>
                    </div>
                    {/* name="Action" id="I183:10511;47:5554" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding: "16px",
                        justifyContent: "space-between",
                        alignItems: "center",
                        alignSelf: "stretch",
                        background: "var(--neutral-gray-5, #f8f6f6)",
                      }}
                    >
                      {/* name="Status" id="I183:10511;47:5555" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                        }}
                      >
                        {/* name="Job/Quick access" id="I183:10511;47:5556" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "var(--size-size-sizexxs-6px, 6px)",
                            borderRadius: "99px",
                          }}
                        >
                          {/* name="heart" id="I183:10511;47:5556;47:5444" type="INSTANCE" */}
                          <Icon.QodeHeart
                            style={{ width: "16px", height: "16px" }}
                            {...{}}
                          />
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "500",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              textDecorationLine: "underline",
                            }}
                          >{`12 shortlisted`}</span>
                        </Flex>
                        {/* name="divider" id="I183:10511;47:5557" type="LINE" */}
                        <Flex
                          style={{
                            width: "1px",
                            height: "15px",
                            background:
                              "var(--border-border-neutral-30, #d5d5d5)",
                          }}
                        >
                          {/* name="divider" id=I183:10511;47:5557 type=LINE */}
                          <></>
                        </Flex>
                        {/* name="Job/Quick access" id="I183:10511;47:5558" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "var(--size-size-sizexxs-6px, 6px)",
                            borderRadius: "99px",
                          }}
                        >
                          {/* name="video" id="I183:10511;47:5558;47:5444" type="INSTANCE" */}
                          <Icon.QodeVideo
                            style={{ width: "16px", height: "16px" }}
                            {...{}}
                          />
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "500",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              textDecorationLine: "underline",
                            }}
                          >{`4 interviewed`}</span>
                        </Flex>
                      </div>
                      <span
                        style={{
                          color: "var(--text-text-primary-20, #1597f4)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "500",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          textDecorationLine: "underline",
                        }}
                      >{`JD`}</span>
                    </div>
                  </Flex>
                </div>
                {/* name="Pagination" id="183:10512" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "556px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-padding, 16px)",
                  }}
                >
                  {/* name="Pagination Wrapper" id="I183:10512;171:27143" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "var(--size-padding-paddingxs, 8px)",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name="🧬 left" id="I183:10512;171:27101" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        width: "32px",
                        height: "var(--size-height-controlheight, 32px)",
                        padding: "var(--size-padding-paddingxxs, 4px)",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "var(--style-radius-borderradius, 8px)",
                      }}
                    >
                      {/* name="chevron-left" id="I183:10512;171:27101;171:26630" type="INSTANCE" */}
                      <Icon.QodeChevronLeft
                        style={{
                          width: "var(--font-size-base, 14px)",
                          height: "var(--font-size-base, 14px)",
                          flexShrink: "0",
                        }}
                        {...{}}
                      />
                    </Flex>
                    {/* name="pages" id="I183:10512;2747:12254" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "var(--size-margin-marginxs, 8px)",
                        flex: "1 0 0",
                      }}
                    >
                      {/* name="🧬 item 1" id="I183:10512;171:27102" type="INSTANCE" */}
                      <Flex
                        style={{
                          display: "flex",
                          width: "32px",
                          height: "var(--size-height-controlheight, 32px)",
                          padding: "var(--size-padding-paddingxxs, 4px)",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius: "var(--style-radius-borderradius, 8px)",
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
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-base, 14px)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight:
                              "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          }}
                        >{`1`}</span>
                      </Flex>
                      {/* name="🧬 item 2" id="I183:10512;171:27117" type="INSTANCE" */}
                      <QodePagination
                        style={{
                          display: "flex",
                          width: "32px",
                          height: "var(--size-height-controlheight, 32px)",
                          padding: "var(--size-padding-paddingxxs, 4px)",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius: "var(--style-radius-borderradius, 8px)",
                        }}
                        {...{ state: "default", direction: "left" }}
                      />
                      {/* name="🧬 item 3" id="I183:10512;171:27103" type="INSTANCE" */}
                      <Flex
                        style={{
                          display: "flex",
                          width: "32px",
                          height: "var(--size-height-controlheight, 32px)",
                          padding: "var(--size-padding-paddingxxs, 4px)",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius: "var(--style-radius-borderradius, 8px)",
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
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-base, 14px)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight:
                              "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          }}
                        >{`4`}</span>
                      </Flex>
                      {/* name="🧬 item 4" id="I183:10512;171:27104" type="INSTANCE" */}
                      <Flex
                        style={{
                          display: "flex",
                          width: "32px",
                          height: "var(--size-height-controlheight, 32px)",
                          padding: "var(--size-padding-paddingxxs, 4px)",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius: "var(--style-radius-borderradius, 8px)",
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
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-base, 14px)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight:
                              "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          }}
                        >{`5`}</span>
                      </Flex>
                      {/* name=".pagination__number" id="I183:10512;171:27105" type="INSTANCE" */}
                      <Flex
                        style={{
                          display: "flex",
                          width: "32px",
                          height: "var(--size-height-controlheight, 32px)",
                          padding: "var(--size-padding-paddingxxs, 4px)",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius:
                            "var(--style-radius-borderround, 999px)",
                          background: "var(--neutral-gray-100, #1d1d1d)",
                        }}
                      >
                        <span
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            flex: "1 0 0",
                            alignSelf: "stretch",
                            color: "#FFF",
                            textAlign: "center",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-base, 14px)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight:
                              "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          }}
                        >{`6`}</span>
                      </Flex>
                      {/* name="🧬 item 6" id="I183:10512;171:27106" type="INSTANCE" */}
                      <Flex
                        style={{
                          display: "flex",
                          width: "32px",
                          height: "var(--size-height-controlheight, 32px)",
                          padding: "var(--size-padding-paddingxxs, 4px)",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius: "var(--style-radius-borderradius, 8px)",
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
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-base, 14px)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight:
                              "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          }}
                        >{`7`}</span>
                      </Flex>
                      {/* name="🧬 item 7" id="I183:10512;171:27123" type="INSTANCE" */}
                      <Flex
                        style={{
                          display: "flex",
                          width: "32px",
                          height: "var(--size-height-controlheight, 32px)",
                          padding: "var(--size-padding-paddingxxs, 4px)",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius: "var(--style-radius-borderradius, 8px)",
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
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-base, 14px)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight:
                              "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          }}
                        >{`8`}</span>
                      </Flex>
                      {/* name="🧬 item 8" id="I183:10512;171:27125" type="INSTANCE" */}
                      <QodePagination
                        style={{
                          display: "flex",
                          width: "32px",
                          height: "var(--size-height-controlheight, 32px)",
                          padding: "var(--size-padding-paddingxxs, 4px)",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius: "var(--style-radius-borderradius, 8px)",
                        }}
                        {...{ state: "default", direction: "left" }}
                      />
                      {/* name="🧬 item 9" id="I183:10512;171:27129" type="INSTANCE" */}
                      <Flex
                        style={{
                          display: "flex",
                          width: "32px",
                          height: "var(--size-height-controlheight, 32px)",
                          padding: "var(--size-padding-paddingxxs, 4px)",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius: "var(--style-radius-borderradius, 8px)",
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
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-base, 14px)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight:
                              "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          }}
                        >{`50`}</span>
                      </Flex>
                    </div>
                    {/* name="🧬 right" id="I183:10512;171:27107" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        width: "32px",
                        height: "var(--size-height-controlheight, 32px)",
                        padding: "var(--size-padding-paddingxxs, 4px)",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "var(--style-radius-borderradius, 8px)",
                      }}
                    >
                      {/* name="chevron-right" id="I183:10512;171:27107;171:26641" type="INSTANCE" */}
                      <Icon.QodeChevronRight
                        style={{
                          width: "var(--font-size-base, 14px)",
                          height: "var(--font-size-base, 14px)",
                          flexShrink: "0",
                        }}
                        {...{}}
                      />
                    </Flex>
                  </div>
                  {/* name="Jumper Wrapper" id="I183:10512;171:27131" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    {/* name="🧬 select 1" id="I183:10512;171:27132" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        width: "108px",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        gap: "var(--size-padding-paddingxxs, 4px)",
                        borderRadius: "var(--border-radius-base, 8px)",
                        border:
                          "1px solid var(--border-border-neutral-30, #d5d5d5)",
                      }}
                    >
                      {/* name="Input/Select" id="I183:10512;171:27132;170:26363" type="INSTANCE" */}
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
                            "var(--style-line-width-linewidth, 1px) solid rgba(0, 0, 0, 0.15)",
                          background: "#FFF",
                        }}
                      >
                        <span
                          style={{
                            flex: "1 0 0",
                            color: "var(--text-text-neutral-50, #1d1d1d)",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-base, 14px)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight:
                              "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          }}
                        >{`12 / page`}</span>
                        {/* name="Icon" id="I183:10512;171:27132;170:26363;170:24281" type="INSTANCE" */}
                        <Flex style={{ width: "16px", height: "16px" }}>
                          {/* name="Vector" id="I183:10512;171:27132;170:26363;170:24281;630:7560" type="VECTOR" */}
                          <Flex
                            style={{
                              width: "14.005px",
                              height: "8.002px",
                              flexShrink: "0",
                              fill: "rgba(0, 0, 0, 0.45)",
                            }}
                          >
                            {/* name="Vector" id=I183:10512;171:27132;170:26363;170:24281;630:7560 type=VECTOR */}
                            <></>
                          </Flex>
                        </Flex>
                      </Flex>
                    </Flex>
                  </div>
                </Flex>
              </div>
            </div>
          </div>
        </>
      )}
      {/* id="715:30653" */}
      {`${screensize}` === `1440` && (
        <>
          {/* name="screensize=1440" id="715:30653" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "1440px",
              height: "1024px",
              alignItems: "flex-start",
              flexShrink: "0",
              background: "#FFF",
            }}
          >
            {/* name="Navbar" id="183:10973" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                width: "84px",
                flexDirection: "column",
                alignItems: "center",
                flexShrink: "0",
                alignSelf: "stretch",
                borderRight:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--background-bg-white, #fff)",
              }}
            >
              {/* name="Logo" id="I183:10973;1:3092" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  padding: "16px 0px",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "4px",
                  alignSelf: "stretch",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                }}
              >
                {/* name="logo" id="I183:10973;635:31404" type="INSTANCE" */}
                <QodeSvg616010
                  style={{ width: "40px", height: "40px" }}
                  {...{
                    type: "Default",
                    darkmode: "yes",
                    orientation: "landscape",
                    wordmark: "no",
                  }}
                />
              </div>
              {/* name="V-Menu" id="I183:10973;1:3094" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  padding: "16px 8px",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "16px",
                  flex: "1 0 0",
                  alignSelf: "stretch",
                }}
              >
                {/* name="Navbar/Menu" id="I183:10973;4:124" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "84px",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-size-sizexxs-6px, 6px)",
                  }}
                >
                  {/* name="Icon" id="I183:10973;4:124;4:78" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      width: "40px",
                      height: "40px",
                      padding: "8px",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "10px",
                      borderRadius: "var(--size-size-sizexs-8px, 8px)",
                      border:
                        "1px solid var(--border-border-neutral-20, #e3e3e3)",
                      background: "var(--background-bg-neutral-5, #f8f6f6)",
                    }}
                  >
                    {/* name="cube" id="I183:10973;4:124;4:79" type="INSTANCE" */}
                    <Icon.QodeCube
                      style={{ width: "24px", height: "24px", flexShrink: "0" }}
                      {...{}}
                    />
                  </div>
                  <span
                    style={{
                      alignSelf: "stretch",
                      color: "var(--text-text-neutral-30, #656565)",
                      textAlign: "center",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-small, 12px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                    }}
                  >{`Dashboard`}</span>
                </Flex>
                {/* name="Navbar/Menu" id="I183:10973;16:5813" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "84px",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-size-sizexxs-6px, 6px)",
                  }}
                >
                  {/* name="Icon" id="I183:10973;16:5813;4:92" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      width: "40px",
                      height: "40px",
                      padding: "8px",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "10px",
                      borderRadius: "var(--size-size-sizexs-8px, 8px)",
                      border:
                        "1px solid var(--border-border-primary-30, #107ecc)",
                      background: "var(--background-bg-primary, #1597f4)",
                    }}
                  >
                    {/* name="briefcase" id="I183:10973;16:5813;4:93" type="INSTANCE" */}
                    <Icon.QodeBriefcase
                      style={{ width: "24px", height: "24px", flexShrink: "0" }}
                      {...{}}
                    />
                  </div>
                  <span
                    style={{
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
                  >{`Jobs`}</span>
                </Flex>
                {/* name="Navbar/Menu" id="I183:10973;4:54" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "84px",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-size-sizexxs-6px, 6px)",
                  }}
                >
                  {/* name="Icon" id="I183:10973;4:54;4:78" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      width: "40px",
                      height: "40px",
                      padding: "8px",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "10px",
                      borderRadius: "var(--size-size-sizexs-8px, 8px)",
                      border:
                        "1px solid var(--border-border-neutral-20, #e3e3e3)",
                      background: "var(--background-bg-neutral-5, #f8f6f6)",
                    }}
                  >
                    {/* name="user-group" id="I183:10973;4:54;4:79" type="INSTANCE" */}
                    <Icon.QodeUserGroup
                      style={{ width: "24px", height: "24px", flexShrink: "0" }}
                      {...{}}
                    />
                  </div>
                  <span
                    style={{
                      alignSelf: "stretch",
                      color: "var(--text-text-neutral-30, #656565)",
                      textAlign: "center",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-small, 12px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                    }}
                  >{`Talent pool`}</span>
                </Flex>
                {/* name="Navbar/Menu" id="I183:10973;4:95" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "84px",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-size-sizexxs-6px, 6px)",
                  }}
                >
                  {/* name="Icon" id="I183:10973;4:95;4:78" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      width: "40px",
                      height: "40px",
                      padding: "8px",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "10px",
                      borderRadius: "var(--size-size-sizexs-8px, 8px)",
                      border:
                        "1px solid var(--border-border-neutral-20, #e3e3e3)",
                      background: "var(--background-bg-neutral-5, #f8f6f6)",
                    }}
                  >
                    {/* name="video" id="I183:10973;4:95;4:79" type="INSTANCE" */}
                    <Icon.QodeVideo
                      style={{ width: "24px", height: "24px", flexShrink: "0" }}
                      {...{}}
                    />
                  </div>
                  <span
                    style={{
                      alignSelf: "stretch",
                      color: "var(--text-text-neutral-30, #656565)",
                      textAlign: "center",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-small, 12px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                    }}
                  >{`Interviews`}</span>
                </Flex>
              </div>
              {/* name="Btm" id="I183:10973;1:3098" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  padding: "16px 0px",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                {/* name="Profile" id="I183:10973;1:3099" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-end",
                    gap: "var(--font-size-large, 16px)",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name="Button" id="I183:10973;1:3099;5007:11919" type="INSTANCE" */}
                  <QodeButton
                    style={{
                      display: "flex",
                      height: "var(--size-height-controlheightlg, 40px)",
                      padding:
                        "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingsm, 12px)",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "var(--size-padding-paddingxs, 8px)",
                      borderRadius: "var(--style-radius-borderround, 999px)",
                      border:
                        "var(--style-line-width-linewidth, 1px) solid var(--color-gold-purple-colorgoldpurpleborder, #efdbff)",
                      background:
                        "var(--color-gold-purple-colorgoldpurplebg, #f9f0ff)",
                    }}
                    {...{
                      icononly: "630:15277",
                      iconR: <Icon.QodeMagnifyingGlass />,
                      title: "Button",
                      iconL: false,
                      type: "default",
                      size: "large",
                      state: "default",
                      content: "icon",
                      danger: false,
                      ghost: false,
                    }}
                  />
                </Flex>
                {/* name="Profile" id="I183:10973;1:3100" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-end",
                    gap: "var(--font-size-large, 16px)",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name="Button" id="I183:10973;1:3100;5007:11919" type="INSTANCE" */}
                  <QodeButton
                    style={{
                      display: "flex",
                      height: "var(--size-height-controlheightlg, 40px)",
                      padding:
                        "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingsm, 12px)",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "var(--size-padding-paddingxs, 8px)",
                      borderRadius: "var(--style-radius-borderround, 999px)",
                      border:
                        "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                      background:
                        "var(--color-neutral-background-colorbgcontainer, #fff)",
                    }}
                    {...{
                      icononly: <Icon.QodeUser />,
                      iconR: <Icon.QodeMagnifyingGlass />,
                      title: "Button",
                      iconL: false,
                      type: "default",
                      size: "large",
                      state: "default",
                      content: "icon",
                      danger: false,
                      ghost: false,
                    }}
                  />
                </Flex>
              </div>
            </Flex>
            {/* name="b" id="183:10974" type="FRAME" */}
            <div
              style={{
                display: "flex",
                width: "1356px",
                height: "1024px",
                padding: "40px 40px 0px 40px",
                flexDirection: "column",
                alignItems: "center",
                gap: "32px",
                flexShrink: "0",
                background: "var(--app-bg, #f4f4f6)",
              }}
            >
              {/* name="Header" id="183:12821" type="FRAME" */}
              <div
                style={{
                  height: "40px",
                  maxWidth: "1276px",
                  flexShrink: "0",
                  alignSelf: "stretch",
                }}
              >
                <span
                  style={{
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-heading3, 28px)",
                    fontStyle: "normal",
                    fontWeight: "600",
                    lineHeight:
                      "var(--lineheight-lineheight-h3, 36px) /* 128.571% */",
                  }}
                >{`My jobs`}</span>
                {/* name="Button" id="183:12823" type="INSTANCE" */}
                <QodeButton
                  style={{
                    display: "flex",
                    width: "130px",
                    height: "var(--size-height-controlheight, 32px)",
                    padding: "4px 16px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "8px",
                    flexShrink: "0",
                    borderRadius: "var(--border-radius-rounded, 999px)",
                    border:
                      "1px solid var(--border-border-primary-30, #107ecc)",
                    background: "var(--background-bg-primary, #1597f4)",
                  }}
                  {...{
                    onlyIcon: <Icon.QodeMagnifyingGlass />,
                    iconLeft: true,
                    iconRight: false,
                    buttonname: "Add job",
                    selectIconRight: <Icon.QodeMagnifyingGlass />,
                    selectIconLeft: <Icon.QodePlus />,
                    type: "primary",
                    size: "default",
                    state: "default",
                    content: "default",
                    danger: false,
                    ghost: false,
                  }}
                />
                {/* name="Search bar" id="183:12824" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "480px",
                    height: "var(--size-height-controlheightlg, 40px)",
                    padding: "10px 12px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "12px",
                    flexShrink: "0",
                    borderRadius: "var(--border-radius-base, 8px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                    background: "var(--background-bg-white, #fff)",
                  }}
                >
                  {/* name="🎰 icon left" id="I183:12824;2720:38139" type="INSTANCE" */}
                  <Icon.QodeMagnifyingGlass
                    style={{ width: "16px", height: "16px", flexShrink: "0" }}
                    {...{}}
                  />
                  <span
                    style={{
                      color: "var(--color-neutral-text-colortext, #000)",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-large, 16px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight: "24px /* 150% */",
                    }}
                  >{`PRE`}</span>
                  <span
                    style={{
                      flex: "1 0 0",
                      color: "var(--text-text-placeholder, #a7a7a7)",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-large, 16px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight: "24px /* 150% */",
                    }}
                  >{`Search`}</span>
                  <span
                    style={{
                      color:
                        "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-large, 16px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight: "24px /* 150% */",
                    }}
                  >{`SUF`}</span>
                  {/* name="🎰 icon right" id="I183:12824;2720:38143" type="INSTANCE" */}
                  <Icon.QodeUser
                    style={{
                      display: "flex",
                      width: "16px",
                      height: "16px",
                      padding: "1.6px 2.4px",
                      justifyContent: "center",
                      alignItems: "center",
                      flexShrink: "0",
                    }}
                    {...{}}
                  />
                </Flex>
              </div>
              {/* name="Body" id="183:10979" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "20px",
                  alignSelf: "stretch",
                }}
              >
                {/* name="Jobs" id="183:10980" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    alignContent: "flex-start",
                    gap: "8px",
                    alignSelf: "stretch",
                    flexWrap: "wrap",
                    borderRadius: "8px",
                  }}
                >
                  {/* name="Job item" id="183:10981" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "420px",
                      maxWidth: "440px",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      borderRadius: "var(--border-radius-large, 12px)",
                      border:
                        "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                      background: "var(--background-bg-white, #fff)",
                    }}
                  >
                    {/* name="Wrap" id="I183:10981;47:5566" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding: "16px",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        gap: "12px",
                        alignSelf: "stretch",
                        borderBottom:
                          "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                      }}
                    >
                      {/* name="Job title" id="I183:10981;47:5567" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "12px",
                          alignSelf: "stretch",
                        }}
                      >
                        <span
                          style={{
                            maxHeight: "56px",
                            flex: "1 0 0",
                            color: "var(--text-text-neutral-50, #1d1d1d)",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-size-sizemd-20px, 20px)",
                            fontStyle: "normal",
                            fontWeight: "600",
                            lineHeight:
                              "var(--lineheight-lineheight-xl, 28px) /* 140% */",
                          }}
                        >{`Sales Consultant`}</span>
                        {/* name="arrow-up-right" id="I183:10981;47:5569" type="INSTANCE" */}
                        <Icon.QodeArrowUpRight
                          style={{ width: "24px", height: "24px" }}
                          {...{}}
                        />
                      </div>
                      {/* name="Wrap" id="I183:10981;485:35083" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          paddingRight: "16px",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          gap: "12px",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name="Job/Attributes" id="I183:10981;485:36887" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            padding: "4px 12px",
                            alignItems: "center",
                            gap: "12px",
                            borderRadius: "99px",
                            background: "var(--neutral-gray-5, #f8f6f6)",
                          }}
                        >
                          {/* name="Urgent" id="I183:10981;485:36887;485:36863" type="FRAME" */}
                          <div
                            style={{
                              display: "flex",
                              padding: "2px var(--size-size-sizexxs-6px, 6px)",
                              justifyContent: "center",
                              alignItems: "center",
                              gap: "10px",
                              borderRadius: "12px",
                              background: "var(--neutral-gray-90, #464646)",
                            }}
                          >
                            <span
                              style={{
                                color: "#FFF",
                                textAlign: "center",
                                fontFamily: '"SF Pro Display"',
                                fontSize: "10px",
                                fontStyle: "normal",
                                fontWeight: "600",
                                lineHeight: "normal",
                              }}
                            >{`URGENT`}</span>
                          </div>
                          {/* name="Yoe" id="I183:10981;485:36887;485:36865" type="FRAME" */}
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "12px",
                            }}
                          >
                            <span
                              style={{
                                color: "var(--text-text-neutral-50, #1d1d1d)",
                                fontFamily:
                                  'var(--family-family, "sf pro display")',
                                fontSize: "var(--size-base, 14px)",
                                fontStyle: "normal",
                                fontWeight: "400",
                                lineHeight:
                                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              }}
                            >{`3 yoe`}</span>
                            {/* name="Line 3" id="I183:10981;485:36887;485:36867" type="LINE" */}
                            <Flex
                              style={{
                                width: "1px",
                                height: "8px",
                                background:
                                  "var(--border-border-neutral-50, #6f6f6f)",
                              }}
                            >
                              {/* name="Line 3" id=I183:10981;485:36887;485:36867 type=LINE */}
                              <></>
                            </Flex>
                          </div>
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Vietnam`}</span>
                        </Flex>
                        {/* name="Skills" id="I183:10981;47:5576" type="FRAME" */}
                        <div
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "12px",
                            alignSelf: "stretch",
                          }}
                        >
                          <span
                            style={{
                              color: "var(--text-text-neutral-40, #464646)",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "700",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Skills:`}</span>
                          <span
                            style={{
                              flex: "1 0 0",
                              color: "var(--text-text-neutral-40, #464646)",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Data analysis, Sales automation, Supervising, Salesforce, Hubspot, +5 more`}</span>
                        </div>
                      </div>
                    </div>
                    {/* name="Action" id="I183:10981;47:5554" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding: "16px",
                        justifyContent: "space-between",
                        alignItems: "center",
                        alignSelf: "stretch",
                        background: "var(--neutral-gray-5, #f8f6f6)",
                      }}
                    >
                      {/* name="Status" id="I183:10981;47:5555" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                        }}
                      >
                        {/* name="Job/Quick access" id="I183:10981;47:5556" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "var(--size-size-sizexxs-6px, 6px)",
                            borderRadius: "99px",
                          }}
                        >
                          {/* name="heart" id="I183:10981;47:5556;47:5444" type="INSTANCE" */}
                          <Icon.QodeHeart
                            style={{ width: "16px", height: "16px" }}
                            {...{}}
                          />
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "500",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              textDecorationLine: "underline",
                            }}
                          >{`12 shortlisted`}</span>
                        </Flex>
                        {/* name="divider" id="I183:10981;47:5557" type="LINE" */}
                        <Flex
                          style={{
                            width: "1px",
                            height: "15px",
                            background:
                              "var(--border-border-neutral-30, #d5d5d5)",
                          }}
                        >
                          {/* name="divider" id=I183:10981;47:5557 type=LINE */}
                          <></>
                        </Flex>
                        {/* name="Job/Quick access" id="I183:10981;47:5558" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "var(--size-size-sizexxs-6px, 6px)",
                            borderRadius: "99px",
                          }}
                        >
                          {/* name="video" id="I183:10981;47:5558;47:5444" type="INSTANCE" */}
                          <Icon.QodeVideo
                            style={{ width: "16px", height: "16px" }}
                            {...{}}
                          />
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "500",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              textDecorationLine: "underline",
                            }}
                          >{`4 interviewed`}</span>
                        </Flex>
                      </div>
                      <span
                        style={{
                          color: "var(--text-text-primary-20, #1597f4)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "500",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          textDecorationLine: "underline",
                        }}
                      >{`JD`}</span>
                    </div>
                  </Flex>
                  {/* name="Job item" id="183:10982" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "420px",
                      maxWidth: "440px",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      borderRadius: "var(--border-radius-large, 12px)",
                      border:
                        "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                      background: "var(--background-bg-white, #fff)",
                    }}
                  >
                    {/* name="Wrap" id="I183:10982;47:5566" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding: "16px",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        gap: "12px",
                        alignSelf: "stretch",
                        borderBottom:
                          "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                      }}
                    >
                      {/* name="Job title" id="I183:10982;47:5567" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "12px",
                          alignSelf: "stretch",
                        }}
                      >
                        <span
                          style={{
                            maxHeight: "56px",
                            flex: "1 0 0",
                            color: "var(--text-text-neutral-50, #1d1d1d)",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-size-sizemd-20px, 20px)",
                            fontStyle: "normal",
                            fontWeight: "600",
                            lineHeight:
                              "var(--lineheight-lineheight-xl, 28px) /* 140% */",
                          }}
                        >{`Sales Consultant`}</span>
                        {/* name="arrow-up-right" id="I183:10982;47:5569" type="INSTANCE" */}
                        <Icon.QodeArrowUpRight
                          style={{ width: "24px", height: "24px" }}
                          {...{}}
                        />
                      </div>
                      {/* name="Wrap" id="I183:10982;485:35083" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          paddingRight: "16px",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          gap: "12px",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name="Job/Attributes" id="I183:10982;485:36887" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            padding: "4px 12px",
                            alignItems: "center",
                            gap: "12px",
                            borderRadius: "99px",
                            background: "var(--neutral-gray-5, #f8f6f6)",
                          }}
                        >
                          {/* name="Urgent" id="I183:10982;485:36887;485:36863" type="FRAME" */}
                          <div
                            style={{
                              display: "flex",
                              padding: "2px var(--size-size-sizexxs-6px, 6px)",
                              justifyContent: "center",
                              alignItems: "center",
                              gap: "10px",
                              borderRadius: "12px",
                              background: "var(--neutral-gray-90, #464646)",
                            }}
                          >
                            <span
                              style={{
                                color: "#FFF",
                                textAlign: "center",
                                fontFamily: '"SF Pro Display"',
                                fontSize: "10px",
                                fontStyle: "normal",
                                fontWeight: "600",
                                lineHeight: "normal",
                              }}
                            >{`URGENT`}</span>
                          </div>
                          {/* name="Yoe" id="I183:10982;485:36887;485:36865" type="FRAME" */}
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "12px",
                            }}
                          >
                            <span
                              style={{
                                color: "var(--text-text-neutral-50, #1d1d1d)",
                                fontFamily:
                                  'var(--family-family, "sf pro display")',
                                fontSize: "var(--size-base, 14px)",
                                fontStyle: "normal",
                                fontWeight: "400",
                                lineHeight:
                                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              }}
                            >{`3 yoe`}</span>
                            {/* name="Line 3" id="I183:10982;485:36887;485:36867" type="LINE" */}
                            <Flex
                              style={{
                                width: "1px",
                                height: "8px",
                                background:
                                  "var(--border-border-neutral-50, #6f6f6f)",
                              }}
                            >
                              {/* name="Line 3" id=I183:10982;485:36887;485:36867 type=LINE */}
                              <></>
                            </Flex>
                          </div>
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Vietnam`}</span>
                        </Flex>
                        {/* name="Skills" id="I183:10982;47:5576" type="FRAME" */}
                        <div
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "12px",
                            alignSelf: "stretch",
                          }}
                        >
                          <span
                            style={{
                              color: "var(--text-text-neutral-40, #464646)",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "700",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Skills:`}</span>
                          <span
                            style={{
                              flex: "1 0 0",
                              color: "var(--text-text-neutral-40, #464646)",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Data analysis, Sales automation, Supervising, Salesforce, Hubspot, +5 more`}</span>
                        </div>
                      </div>
                    </div>
                    {/* name="Action" id="I183:10982;47:5554" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding: "16px",
                        justifyContent: "space-between",
                        alignItems: "center",
                        alignSelf: "stretch",
                        background: "var(--neutral-gray-5, #f8f6f6)",
                      }}
                    >
                      {/* name="Status" id="I183:10982;47:5555" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                        }}
                      >
                        {/* name="Job/Quick access" id="I183:10982;47:5556" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "var(--size-size-sizexxs-6px, 6px)",
                            borderRadius: "99px",
                          }}
                        >
                          {/* name="heart" id="I183:10982;47:5556;47:5444" type="INSTANCE" */}
                          <Icon.QodeHeart
                            style={{ width: "16px", height: "16px" }}
                            {...{}}
                          />
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "500",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              textDecorationLine: "underline",
                            }}
                          >{`12 shortlisted`}</span>
                        </Flex>
                        {/* name="divider" id="I183:10982;47:5557" type="LINE" */}
                        <Flex
                          style={{
                            width: "1px",
                            height: "15px",
                            background:
                              "var(--border-border-neutral-30, #d5d5d5)",
                          }}
                        >
                          {/* name="divider" id=I183:10982;47:5557 type=LINE */}
                          <></>
                        </Flex>
                        {/* name="Job/Quick access" id="I183:10982;47:5558" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "var(--size-size-sizexxs-6px, 6px)",
                            borderRadius: "99px",
                          }}
                        >
                          {/* name="video" id="I183:10982;47:5558;47:5444" type="INSTANCE" */}
                          <Icon.QodeVideo
                            style={{ width: "16px", height: "16px" }}
                            {...{}}
                          />
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "500",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              textDecorationLine: "underline",
                            }}
                          >{`4 interviewed`}</span>
                        </Flex>
                      </div>
                      <span
                        style={{
                          color: "var(--text-text-primary-20, #1597f4)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "500",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          textDecorationLine: "underline",
                        }}
                      >{`JD`}</span>
                    </div>
                  </Flex>
                  {/* name="Job item" id="183:10983" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "420px",
                      maxWidth: "440px",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      borderRadius: "var(--border-radius-large, 12px)",
                      border:
                        "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                      background: "var(--background-bg-white, #fff)",
                    }}
                  >
                    {/* name="Wrap" id="I183:10983;47:5566" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding: "16px",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        gap: "12px",
                        alignSelf: "stretch",
                        borderBottom:
                          "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                      }}
                    >
                      {/* name="Job title" id="I183:10983;47:5567" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "12px",
                          alignSelf: "stretch",
                        }}
                      >
                        <span
                          style={{
                            maxHeight: "56px",
                            flex: "1 0 0",
                            color: "var(--text-text-neutral-50, #1d1d1d)",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-size-sizemd-20px, 20px)",
                            fontStyle: "normal",
                            fontWeight: "600",
                            lineHeight:
                              "var(--lineheight-lineheight-xl, 28px) /* 140% */",
                          }}
                        >{`Project Manager`}</span>
                        {/* name="arrow-up-right" id="I183:10983;47:5569" type="INSTANCE" */}
                        <Icon.QodeArrowUpRight
                          style={{ width: "24px", height: "24px" }}
                          {...{}}
                        />
                      </div>
                      {/* name="Wrap" id="I183:10983;485:35083" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          paddingRight: "16px",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          gap: "12px",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name="Job/Attributes" id="I183:10983;485:36887" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            padding: "4px 12px",
                            alignItems: "center",
                            gap: "12px",
                            borderRadius: "99px",
                            background: "var(--neutral-gray-5, #f8f6f6)",
                          }}
                        >
                          {/* name="Urgent" id="I183:10983;485:36887;485:36863" type="FRAME" */}
                          <div
                            style={{
                              display: "flex",
                              padding: "2px var(--size-size-sizexxs-6px, 6px)",
                              justifyContent: "center",
                              alignItems: "center",
                              gap: "10px",
                              borderRadius: "12px",
                              background: "var(--neutral-gray-90, #464646)",
                            }}
                          >
                            <span
                              style={{
                                color: "#FFF",
                                textAlign: "center",
                                fontFamily: '"SF Pro Display"',
                                fontSize: "10px",
                                fontStyle: "normal",
                                fontWeight: "600",
                                lineHeight: "normal",
                              }}
                            >{`URGENT`}</span>
                          </div>
                          {/* name="Yoe" id="I183:10983;485:36887;485:36865" type="FRAME" */}
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "12px",
                            }}
                          >
                            <span
                              style={{
                                color: "var(--text-text-neutral-50, #1d1d1d)",
                                fontFamily:
                                  'var(--family-family, "sf pro display")',
                                fontSize: "var(--size-base, 14px)",
                                fontStyle: "normal",
                                fontWeight: "400",
                                lineHeight:
                                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              }}
                            >{`3 yoe`}</span>
                            {/* name="Line 3" id="I183:10983;485:36887;485:36867" type="LINE" */}
                            <Flex
                              style={{
                                width: "1px",
                                height: "8px",
                                background:
                                  "var(--border-border-neutral-50, #6f6f6f)",
                              }}
                            >
                              {/* name="Line 3" id=I183:10983;485:36887;485:36867 type=LINE */}
                              <></>
                            </Flex>
                          </div>
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Vietnam`}</span>
                        </Flex>
                        {/* name="Skills" id="I183:10983;47:5576" type="FRAME" */}
                        <div
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "12px",
                            alignSelf: "stretch",
                          }}
                        >
                          <span
                            style={{
                              color: "var(--text-text-neutral-40, #464646)",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "700",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Skills:`}</span>
                          <span
                            style={{
                              flex: "1 0 0",
                              color: "var(--text-text-neutral-40, #464646)",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Data analysis, Sales automation, Supervising, Salesforce, Hubspot, +5 more`}</span>
                        </div>
                      </div>
                    </div>
                    {/* name="Action" id="I183:10983;47:5554" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding: "16px",
                        justifyContent: "space-between",
                        alignItems: "center",
                        alignSelf: "stretch",
                        background: "var(--neutral-gray-5, #f8f6f6)",
                      }}
                    >
                      {/* name="Status" id="I183:10983;47:5555" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                        }}
                      >
                        {/* name="Job/Quick access" id="I183:10983;47:5556" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "var(--size-size-sizexxs-6px, 6px)",
                            borderRadius: "99px",
                          }}
                        >
                          {/* name="heart" id="I183:10983;47:5556;47:5444" type="INSTANCE" */}
                          <Icon.QodeHeart
                            style={{ width: "16px", height: "16px" }}
                            {...{}}
                          />
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "500",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              textDecorationLine: "underline",
                            }}
                          >{`12 shortlisted`}</span>
                        </Flex>
                        {/* name="divider" id="I183:10983;47:5557" type="LINE" */}
                        <Flex
                          style={{
                            width: "1px",
                            height: "15px",
                            background:
                              "var(--border-border-neutral-30, #d5d5d5)",
                          }}
                        >
                          {/* name="divider" id=I183:10983;47:5557 type=LINE */}
                          <></>
                        </Flex>
                        {/* name="Job/Quick access" id="I183:10983;47:5558" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "var(--size-size-sizexxs-6px, 6px)",
                            borderRadius: "99px",
                          }}
                        >
                          {/* name="video" id="I183:10983;47:5558;47:5444" type="INSTANCE" */}
                          <Icon.QodeVideo
                            style={{ width: "16px", height: "16px" }}
                            {...{}}
                          />
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "500",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              textDecorationLine: "underline",
                            }}
                          >{`4 interviewed`}</span>
                        </Flex>
                      </div>
                      <span
                        style={{
                          color: "var(--text-text-primary-20, #1597f4)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "500",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          textDecorationLine: "underline",
                        }}
                      >{`JD`}</span>
                    </div>
                  </Flex>
                  {/* name="Job item" id="183:10984" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "420px",
                      maxWidth: "440px",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      borderRadius: "var(--border-radius-large, 12px)",
                      border:
                        "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                      background: "var(--background-bg-white, #fff)",
                    }}
                  >
                    {/* name="Wrap" id="I183:10984;47:5566" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding: "16px",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        gap: "12px",
                        alignSelf: "stretch",
                        borderBottom:
                          "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                      }}
                    >
                      {/* name="Job title" id="I183:10984;47:5567" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "12px",
                          alignSelf: "stretch",
                        }}
                      >
                        <span
                          style={{
                            maxHeight: "56px",
                            flex: "1 0 0",
                            color: "var(--text-text-neutral-50, #1d1d1d)",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-size-sizemd-20px, 20px)",
                            fontStyle: "normal",
                            fontWeight: "600",
                            lineHeight:
                              "var(--lineheight-lineheight-xl, 28px) /* 140% */",
                          }}
                        >{`Senior Software Engineer`}</span>
                        {/* name="arrow-up-right" id="I183:10984;47:5569" type="INSTANCE" */}
                        <Icon.QodeArrowUpRight
                          style={{ width: "24px", height: "24px" }}
                          {...{}}
                        />
                      </div>
                      {/* name="Wrap" id="I183:10984;485:35083" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          paddingRight: "16px",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          gap: "12px",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name="Job/Attributes" id="I183:10984;485:36887" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            padding: "4px 12px",
                            alignItems: "center",
                            gap: "12px",
                            borderRadius: "99px",
                            background: "var(--neutral-gray-5, #f8f6f6)",
                          }}
                        >
                          {/* name="Urgent" id="I183:10984;485:36887;485:36863" type="FRAME" */}
                          <div
                            style={{
                              display: "flex",
                              padding: "2px var(--size-size-sizexxs-6px, 6px)",
                              justifyContent: "center",
                              alignItems: "center",
                              gap: "10px",
                              borderRadius: "12px",
                              background: "var(--neutral-gray-90, #464646)",
                            }}
                          >
                            <span
                              style={{
                                color: "#FFF",
                                textAlign: "center",
                                fontFamily: '"SF Pro Display"',
                                fontSize: "10px",
                                fontStyle: "normal",
                                fontWeight: "600",
                                lineHeight: "normal",
                              }}
                            >{`URGENT`}</span>
                          </div>
                          {/* name="Yoe" id="I183:10984;485:36887;485:36865" type="FRAME" */}
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "12px",
                            }}
                          >
                            <span
                              style={{
                                color: "var(--text-text-neutral-50, #1d1d1d)",
                                fontFamily:
                                  'var(--family-family, "sf pro display")',
                                fontSize: "var(--size-base, 14px)",
                                fontStyle: "normal",
                                fontWeight: "400",
                                lineHeight:
                                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              }}
                            >{`3 yoe`}</span>
                            {/* name="Line 3" id="I183:10984;485:36887;485:36867" type="LINE" */}
                            <Flex
                              style={{
                                width: "1px",
                                height: "8px",
                                background:
                                  "var(--border-border-neutral-50, #6f6f6f)",
                              }}
                            >
                              {/* name="Line 3" id=I183:10984;485:36887;485:36867 type=LINE */}
                              <></>
                            </Flex>
                          </div>
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Vietnam`}</span>
                        </Flex>
                        {/* name="Skills" id="I183:10984;47:5576" type="FRAME" */}
                        <div
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "12px",
                            alignSelf: "stretch",
                          }}
                        >
                          <span
                            style={{
                              color: "var(--text-text-neutral-40, #464646)",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "700",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Skills:`}</span>
                          <span
                            style={{
                              flex: "1 0 0",
                              color: "var(--text-text-neutral-40, #464646)",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Data analysis, Sales automation, Supervising, Salesforce, Hubspot, +5 more`}</span>
                        </div>
                      </div>
                    </div>
                    {/* name="Action" id="I183:10984;47:5554" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding: "16px",
                        justifyContent: "space-between",
                        alignItems: "center",
                        alignSelf: "stretch",
                        background: "var(--neutral-gray-5, #f8f6f6)",
                      }}
                    >
                      {/* name="Status" id="I183:10984;47:5555" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                        }}
                      >
                        {/* name="Job/Quick access" id="I183:10984;47:5556" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "var(--size-size-sizexxs-6px, 6px)",
                            borderRadius: "99px",
                          }}
                        >
                          {/* name="heart" id="I183:10984;47:5556;47:5444" type="INSTANCE" */}
                          <Icon.QodeHeart
                            style={{ width: "16px", height: "16px" }}
                            {...{}}
                          />
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "500",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              textDecorationLine: "underline",
                            }}
                          >{`12 shortlisted`}</span>
                        </Flex>
                        {/* name="divider" id="I183:10984;47:5557" type="LINE" */}
                        <Flex
                          style={{
                            width: "1px",
                            height: "15px",
                            background:
                              "var(--border-border-neutral-30, #d5d5d5)",
                          }}
                        >
                          {/* name="divider" id=I183:10984;47:5557 type=LINE */}
                          <></>
                        </Flex>
                        {/* name="Job/Quick access" id="I183:10984;47:5558" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "var(--size-size-sizexxs-6px, 6px)",
                            borderRadius: "99px",
                          }}
                        >
                          {/* name="video" id="I183:10984;47:5558;47:5444" type="INSTANCE" */}
                          <Icon.QodeVideo
                            style={{ width: "16px", height: "16px" }}
                            {...{}}
                          />
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "500",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              textDecorationLine: "underline",
                            }}
                          >{`4 interviewed`}</span>
                        </Flex>
                      </div>
                      <span
                        style={{
                          color: "var(--text-text-primary-20, #1597f4)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "500",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          textDecorationLine: "underline",
                        }}
                      >{`JD`}</span>
                    </div>
                  </Flex>
                  {/* name="Job item" id="183:10985" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "420px",
                      maxWidth: "440px",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      borderRadius: "var(--border-radius-large, 12px)",
                      border:
                        "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                      background: "var(--background-bg-white, #fff)",
                    }}
                  >
                    {/* name="Wrap" id="I183:10985;47:5566" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding: "16px",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        gap: "12px",
                        alignSelf: "stretch",
                        borderBottom:
                          "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                      }}
                    >
                      {/* name="Job title" id="I183:10985;47:5567" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "12px",
                          alignSelf: "stretch",
                        }}
                      >
                        <span
                          style={{
                            maxHeight: "56px",
                            flex: "1 0 0",
                            color: "var(--text-text-neutral-50, #1d1d1d)",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-size-sizemd-20px, 20px)",
                            fontStyle: "normal",
                            fontWeight: "600",
                            lineHeight:
                              "var(--lineheight-lineheight-xl, 28px) /* 140% */",
                          }}
                        >{`Sales Supervisor`}</span>
                        {/* name="arrow-up-right" id="I183:10985;47:5569" type="INSTANCE" */}
                        <Icon.QodeArrowUpRight
                          style={{ width: "24px", height: "24px" }}
                          {...{}}
                        />
                      </div>
                      {/* name="Wrap" id="I183:10985;485:35083" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          paddingRight: "16px",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          gap: "12px",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name="Job/Attributes" id="I183:10985;485:36887" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            padding: "4px 12px",
                            alignItems: "center",
                            gap: "12px",
                            borderRadius: "99px",
                            background: "var(--neutral-gray-5, #f8f6f6)",
                          }}
                        >
                          {/* name="Urgent" id="I183:10985;485:36887;485:36863" type="FRAME" */}
                          <div
                            style={{
                              display: "flex",
                              padding: "2px var(--size-size-sizexxs-6px, 6px)",
                              justifyContent: "center",
                              alignItems: "center",
                              gap: "10px",
                              borderRadius: "12px",
                              background: "var(--neutral-gray-90, #464646)",
                            }}
                          >
                            <span
                              style={{
                                color: "#FFF",
                                textAlign: "center",
                                fontFamily: '"SF Pro Display"',
                                fontSize: "10px",
                                fontStyle: "normal",
                                fontWeight: "600",
                                lineHeight: "normal",
                              }}
                            >{`URGENT`}</span>
                          </div>
                          {/* name="Yoe" id="I183:10985;485:36887;485:36865" type="FRAME" */}
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "12px",
                            }}
                          >
                            <span
                              style={{
                                color: "var(--text-text-neutral-50, #1d1d1d)",
                                fontFamily:
                                  'var(--family-family, "sf pro display")',
                                fontSize: "var(--size-base, 14px)",
                                fontStyle: "normal",
                                fontWeight: "400",
                                lineHeight:
                                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              }}
                            >{`3 yoe`}</span>
                            {/* name="Line 3" id="I183:10985;485:36887;485:36867" type="LINE" */}
                            <Flex
                              style={{
                                width: "1px",
                                height: "8px",
                                background:
                                  "var(--border-border-neutral-50, #6f6f6f)",
                              }}
                            >
                              {/* name="Line 3" id=I183:10985;485:36887;485:36867 type=LINE */}
                              <></>
                            </Flex>
                          </div>
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Vietnam`}</span>
                        </Flex>
                        {/* name="Skills" id="I183:10985;47:5576" type="FRAME" */}
                        <div
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "12px",
                            alignSelf: "stretch",
                          }}
                        >
                          <span
                            style={{
                              color: "var(--text-text-neutral-40, #464646)",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "700",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Skills:`}</span>
                          <span
                            style={{
                              flex: "1 0 0",
                              color: "var(--text-text-neutral-40, #464646)",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Data analysis, Sales automation, Supervising, Salesforce, Hubspot, +5 more`}</span>
                        </div>
                      </div>
                    </div>
                    {/* name="Action" id="I183:10985;47:5554" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding: "16px",
                        justifyContent: "space-between",
                        alignItems: "center",
                        alignSelf: "stretch",
                        background: "var(--neutral-gray-5, #f8f6f6)",
                      }}
                    >
                      {/* name="Status" id="I183:10985;47:5555" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                        }}
                      >
                        {/* name="Job/Quick access" id="I183:10985;47:5556" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "var(--size-size-sizexxs-6px, 6px)",
                            borderRadius: "99px",
                          }}
                        >
                          {/* name="heart" id="I183:10985;47:5556;47:5444" type="INSTANCE" */}
                          <Icon.QodeHeart
                            style={{ width: "16px", height: "16px" }}
                            {...{}}
                          />
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "500",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              textDecorationLine: "underline",
                            }}
                          >{`12 shortlisted`}</span>
                        </Flex>
                        {/* name="divider" id="I183:10985;47:5557" type="LINE" */}
                        <Flex
                          style={{
                            width: "1px",
                            height: "15px",
                            background:
                              "var(--border-border-neutral-30, #d5d5d5)",
                          }}
                        >
                          {/* name="divider" id=I183:10985;47:5557 type=LINE */}
                          <></>
                        </Flex>
                        {/* name="Job/Quick access" id="I183:10985;47:5558" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "var(--size-size-sizexxs-6px, 6px)",
                            borderRadius: "99px",
                          }}
                        >
                          {/* name="video" id="I183:10985;47:5558;47:5444" type="INSTANCE" */}
                          <Icon.QodeVideo
                            style={{ width: "16px", height: "16px" }}
                            {...{}}
                          />
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "500",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              textDecorationLine: "underline",
                            }}
                          >{`4 interviewed`}</span>
                        </Flex>
                      </div>
                      <span
                        style={{
                          color: "var(--text-text-primary-20, #1597f4)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "500",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          textDecorationLine: "underline",
                        }}
                      >{`JD`}</span>
                    </div>
                  </Flex>
                  {/* name="Job item" id="183:10986" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "420px",
                      maxWidth: "440px",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      borderRadius: "var(--border-radius-large, 12px)",
                      border:
                        "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                      background: "var(--background-bg-white, #fff)",
                    }}
                  >
                    {/* name="Wrap" id="I183:10986;47:5566" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding: "16px",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        gap: "12px",
                        alignSelf: "stretch",
                        borderBottom:
                          "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                      }}
                    >
                      {/* name="Job title" id="I183:10986;47:5567" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "12px",
                          alignSelf: "stretch",
                        }}
                      >
                        <span
                          style={{
                            maxHeight: "56px",
                            flex: "1 0 0",
                            color: "var(--text-text-neutral-50, #1d1d1d)",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-size-sizemd-20px, 20px)",
                            fontStyle: "normal",
                            fontWeight: "600",
                            lineHeight:
                              "var(--lineheight-lineheight-xl, 28px) /* 140% */",
                          }}
                        >{`IT Help desk`}</span>
                        {/* name="arrow-up-right" id="I183:10986;47:5569" type="INSTANCE" */}
                        <Icon.QodeArrowUpRight
                          style={{ width: "24px", height: "24px" }}
                          {...{}}
                        />
                      </div>
                      {/* name="Wrap" id="I183:10986;485:35083" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          paddingRight: "16px",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          gap: "12px",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name="Job/Attributes" id="I183:10986;485:36887" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            padding: "4px 12px",
                            alignItems: "center",
                            gap: "12px",
                            borderRadius: "99px",
                            background: "var(--neutral-gray-5, #f8f6f6)",
                          }}
                        >
                          {/* name="Urgent" id="I183:10986;485:36887;485:36863" type="FRAME" */}
                          <div
                            style={{
                              display: "flex",
                              padding: "2px var(--size-size-sizexxs-6px, 6px)",
                              justifyContent: "center",
                              alignItems: "center",
                              gap: "10px",
                              borderRadius: "12px",
                              background: "var(--neutral-gray-90, #464646)",
                            }}
                          >
                            <span
                              style={{
                                color: "#FFF",
                                textAlign: "center",
                                fontFamily: '"SF Pro Display"',
                                fontSize: "10px",
                                fontStyle: "normal",
                                fontWeight: "600",
                                lineHeight: "normal",
                              }}
                            >{`URGENT`}</span>
                          </div>
                          {/* name="Yoe" id="I183:10986;485:36887;485:36865" type="FRAME" */}
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "12px",
                            }}
                          >
                            <span
                              style={{
                                color: "var(--text-text-neutral-50, #1d1d1d)",
                                fontFamily:
                                  'var(--family-family, "sf pro display")',
                                fontSize: "var(--size-base, 14px)",
                                fontStyle: "normal",
                                fontWeight: "400",
                                lineHeight:
                                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              }}
                            >{`3 yoe`}</span>
                            {/* name="Line 3" id="I183:10986;485:36887;485:36867" type="LINE" */}
                            <Flex
                              style={{
                                width: "1px",
                                height: "8px",
                                background:
                                  "var(--border-border-neutral-50, #6f6f6f)",
                              }}
                            >
                              {/* name="Line 3" id=I183:10986;485:36887;485:36867 type=LINE */}
                              <></>
                            </Flex>
                          </div>
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Vietnam`}</span>
                        </Flex>
                        {/* name="Skills" id="I183:10986;47:5576" type="FRAME" */}
                        <div
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "12px",
                            alignSelf: "stretch",
                          }}
                        >
                          <span
                            style={{
                              color: "var(--text-text-neutral-40, #464646)",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "700",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Skills:`}</span>
                          <span
                            style={{
                              flex: "1 0 0",
                              color: "var(--text-text-neutral-40, #464646)",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Data analysis, Sales automation, Supervising, Salesforce, Hubspot, +5 more`}</span>
                        </div>
                      </div>
                    </div>
                    {/* name="Action" id="I183:10986;47:5554" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding: "16px",
                        justifyContent: "space-between",
                        alignItems: "center",
                        alignSelf: "stretch",
                        background: "var(--neutral-gray-5, #f8f6f6)",
                      }}
                    >
                      {/* name="Status" id="I183:10986;47:5555" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                        }}
                      >
                        {/* name="Job/Quick access" id="I183:10986;47:5556" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "var(--size-size-sizexxs-6px, 6px)",
                            borderRadius: "99px",
                          }}
                        >
                          {/* name="heart" id="I183:10986;47:5556;47:5444" type="INSTANCE" */}
                          <Icon.QodeHeart
                            style={{ width: "16px", height: "16px" }}
                            {...{}}
                          />
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "500",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              textDecorationLine: "underline",
                            }}
                          >{`12 shortlisted`}</span>
                        </Flex>
                        {/* name="divider" id="I183:10986;47:5557" type="LINE" */}
                        <Flex
                          style={{
                            width: "1px",
                            height: "15px",
                            background:
                              "var(--border-border-neutral-30, #d5d5d5)",
                          }}
                        >
                          {/* name="divider" id=I183:10986;47:5557 type=LINE */}
                          <></>
                        </Flex>
                        {/* name="Job/Quick access" id="I183:10986;47:5558" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "var(--size-size-sizexxs-6px, 6px)",
                            borderRadius: "99px",
                          }}
                        >
                          {/* name="video" id="I183:10986;47:5558;47:5444" type="INSTANCE" */}
                          <Icon.QodeVideo
                            style={{ width: "16px", height: "16px" }}
                            {...{}}
                          />
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "500",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              textDecorationLine: "underline",
                            }}
                          >{`4 interviewed`}</span>
                        </Flex>
                      </div>
                      <span
                        style={{
                          color: "var(--text-text-primary-20, #1597f4)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "500",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          textDecorationLine: "underline",
                        }}
                      >{`JD`}</span>
                    </div>
                  </Flex>
                  {/* name="Job item" id="183:10987" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "420px",
                      maxWidth: "440px",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      borderRadius: "var(--border-radius-large, 12px)",
                      border:
                        "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                      background: "var(--background-bg-white, #fff)",
                    }}
                  >
                    {/* name="Wrap" id="I183:10987;47:5566" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding: "16px",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        gap: "12px",
                        alignSelf: "stretch",
                        borderBottom:
                          "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                      }}
                    >
                      {/* name="Job title" id="I183:10987;47:5567" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "12px",
                          alignSelf: "stretch",
                        }}
                      >
                        <span
                          style={{
                            maxHeight: "56px",
                            flex: "1 0 0",
                            color: "var(--text-text-neutral-50, #1d1d1d)",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-size-sizemd-20px, 20px)",
                            fontStyle: "normal",
                            fontWeight: "600",
                            lineHeight:
                              "var(--lineheight-lineheight-xl, 28px) /* 140% */",
                          }}
                        >{`Mobile developer (iOS)`}</span>
                        {/* name="arrow-up-right" id="I183:10987;47:5569" type="INSTANCE" */}
                        <Icon.QodeArrowUpRight
                          style={{ width: "24px", height: "24px" }}
                          {...{}}
                        />
                      </div>
                      {/* name="Wrap" id="I183:10987;485:35083" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          paddingRight: "16px",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          gap: "12px",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name="Job/Attributes" id="I183:10987;485:36887" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            padding: "4px 12px",
                            alignItems: "center",
                            gap: "12px",
                            borderRadius: "99px",
                            background: "var(--neutral-gray-5, #f8f6f6)",
                          }}
                        >
                          {/* name="Urgent" id="I183:10987;485:36887;485:36863" type="FRAME" */}
                          <div
                            style={{
                              display: "flex",
                              padding: "2px var(--size-size-sizexxs-6px, 6px)",
                              justifyContent: "center",
                              alignItems: "center",
                              gap: "10px",
                              borderRadius: "12px",
                              background: "var(--neutral-gray-90, #464646)",
                            }}
                          >
                            <span
                              style={{
                                color: "#FFF",
                                textAlign: "center",
                                fontFamily: '"SF Pro Display"',
                                fontSize: "10px",
                                fontStyle: "normal",
                                fontWeight: "600",
                                lineHeight: "normal",
                              }}
                            >{`URGENT`}</span>
                          </div>
                          {/* name="Yoe" id="I183:10987;485:36887;485:36865" type="FRAME" */}
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "12px",
                            }}
                          >
                            <span
                              style={{
                                color: "var(--text-text-neutral-50, #1d1d1d)",
                                fontFamily:
                                  'var(--family-family, "sf pro display")',
                                fontSize: "var(--size-base, 14px)",
                                fontStyle: "normal",
                                fontWeight: "400",
                                lineHeight:
                                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              }}
                            >{`3 yoe`}</span>
                            {/* name="Line 3" id="I183:10987;485:36887;485:36867" type="LINE" */}
                            <Flex
                              style={{
                                width: "1px",
                                height: "8px",
                                background:
                                  "var(--border-border-neutral-50, #6f6f6f)",
                              }}
                            >
                              {/* name="Line 3" id=I183:10987;485:36887;485:36867 type=LINE */}
                              <></>
                            </Flex>
                          </div>
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Vietnam`}</span>
                        </Flex>
                        {/* name="Skills" id="I183:10987;47:5576" type="FRAME" */}
                        <div
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "12px",
                            alignSelf: "stretch",
                          }}
                        >
                          <span
                            style={{
                              color: "var(--text-text-neutral-40, #464646)",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "700",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Skills:`}</span>
                          <span
                            style={{
                              flex: "1 0 0",
                              color: "var(--text-text-neutral-40, #464646)",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Data analysis, Sales automation, Supervising, Salesforce, Hubspot, +5 more`}</span>
                        </div>
                      </div>
                    </div>
                    {/* name="Action" id="I183:10987;47:5554" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding: "16px",
                        justifyContent: "space-between",
                        alignItems: "center",
                        alignSelf: "stretch",
                        background: "var(--neutral-gray-5, #f8f6f6)",
                      }}
                    >
                      {/* name="Status" id="I183:10987;47:5555" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                        }}
                      >
                        {/* name="Job/Quick access" id="I183:10987;47:5556" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "var(--size-size-sizexxs-6px, 6px)",
                            borderRadius: "99px",
                          }}
                        >
                          {/* name="heart" id="I183:10987;47:5556;47:5444" type="INSTANCE" */}
                          <Icon.QodeHeart
                            style={{ width: "16px", height: "16px" }}
                            {...{}}
                          />
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "500",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              textDecorationLine: "underline",
                            }}
                          >{`12 shortlisted`}</span>
                        </Flex>
                        {/* name="divider" id="I183:10987;47:5557" type="LINE" */}
                        <Flex
                          style={{
                            width: "1px",
                            height: "15px",
                            background:
                              "var(--border-border-neutral-30, #d5d5d5)",
                          }}
                        >
                          {/* name="divider" id=I183:10987;47:5557 type=LINE */}
                          <></>
                        </Flex>
                        {/* name="Job/Quick access" id="I183:10987;47:5558" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "var(--size-size-sizexxs-6px, 6px)",
                            borderRadius: "99px",
                          }}
                        >
                          {/* name="video" id="I183:10987;47:5558;47:5444" type="INSTANCE" */}
                          <Icon.QodeVideo
                            style={{ width: "16px", height: "16px" }}
                            {...{}}
                          />
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "500",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              textDecorationLine: "underline",
                            }}
                          >{`4 interviewed`}</span>
                        </Flex>
                      </div>
                      <span
                        style={{
                          color: "var(--text-text-primary-20, #1597f4)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "500",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          textDecorationLine: "underline",
                        }}
                      >{`JD`}</span>
                    </div>
                  </Flex>
                  {/* name="Job item" id="183:10988" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "420px",
                      maxWidth: "440px",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      borderRadius: "var(--border-radius-large, 12px)",
                      border:
                        "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                      background: "var(--background-bg-white, #fff)",
                    }}
                  >
                    {/* name="Wrap" id="I183:10988;47:5566" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding: "16px",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        gap: "12px",
                        alignSelf: "stretch",
                        borderBottom:
                          "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                      }}
                    >
                      {/* name="Job title" id="I183:10988;47:5567" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "12px",
                          alignSelf: "stretch",
                        }}
                      >
                        <span
                          style={{
                            maxHeight: "56px",
                            flex: "1 0 0",
                            color: "var(--text-text-neutral-50, #1d1d1d)",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-size-sizemd-20px, 20px)",
                            fontStyle: "normal",
                            fontWeight: "600",
                            lineHeight:
                              "var(--lineheight-lineheight-xl, 28px) /* 140% */",
                          }}
                        >{`Senior Software Engineer`}</span>
                        {/* name="arrow-up-right" id="I183:10988;47:5569" type="INSTANCE" */}
                        <Icon.QodeArrowUpRight
                          style={{ width: "24px", height: "24px" }}
                          {...{}}
                        />
                      </div>
                      {/* name="Wrap" id="I183:10988;485:35083" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          paddingRight: "16px",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          gap: "12px",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name="Job/Attributes" id="I183:10988;485:36887" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            padding: "4px 12px",
                            alignItems: "center",
                            gap: "12px",
                            borderRadius: "99px",
                            background: "var(--neutral-gray-5, #f8f6f6)",
                          }}
                        >
                          {/* name="Urgent" id="I183:10988;485:36887;485:36863" type="FRAME" */}
                          <div
                            style={{
                              display: "flex",
                              padding: "2px var(--size-size-sizexxs-6px, 6px)",
                              justifyContent: "center",
                              alignItems: "center",
                              gap: "10px",
                              borderRadius: "12px",
                              background: "var(--neutral-gray-90, #464646)",
                            }}
                          >
                            <span
                              style={{
                                color: "#FFF",
                                textAlign: "center",
                                fontFamily: '"SF Pro Display"',
                                fontSize: "10px",
                                fontStyle: "normal",
                                fontWeight: "600",
                                lineHeight: "normal",
                              }}
                            >{`URGENT`}</span>
                          </div>
                          {/* name="Yoe" id="I183:10988;485:36887;485:36865" type="FRAME" */}
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "12px",
                            }}
                          >
                            <span
                              style={{
                                color: "var(--text-text-neutral-50, #1d1d1d)",
                                fontFamily:
                                  'var(--family-family, "sf pro display")',
                                fontSize: "var(--size-base, 14px)",
                                fontStyle: "normal",
                                fontWeight: "400",
                                lineHeight:
                                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              }}
                            >{`3 yoe`}</span>
                            {/* name="Line 3" id="I183:10988;485:36887;485:36867" type="LINE" */}
                            <Flex
                              style={{
                                width: "1px",
                                height: "8px",
                                background:
                                  "var(--border-border-neutral-50, #6f6f6f)",
                              }}
                            >
                              {/* name="Line 3" id=I183:10988;485:36887;485:36867 type=LINE */}
                              <></>
                            </Flex>
                          </div>
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Vietnam`}</span>
                        </Flex>
                        {/* name="Skills" id="I183:10988;47:5576" type="FRAME" */}
                        <div
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "12px",
                            alignSelf: "stretch",
                          }}
                        >
                          <span
                            style={{
                              color: "var(--text-text-neutral-40, #464646)",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "700",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Skills:`}</span>
                          <span
                            style={{
                              flex: "1 0 0",
                              color: "var(--text-text-neutral-40, #464646)",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Data analysis, Sales automation, Supervising, Salesforce, Hubspot, +5 more`}</span>
                        </div>
                      </div>
                    </div>
                    {/* name="Action" id="I183:10988;47:5554" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding: "16px",
                        justifyContent: "space-between",
                        alignItems: "center",
                        alignSelf: "stretch",
                        background: "var(--neutral-gray-5, #f8f6f6)",
                      }}
                    >
                      {/* name="Status" id="I183:10988;47:5555" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                        }}
                      >
                        {/* name="Job/Quick access" id="I183:10988;47:5556" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "var(--size-size-sizexxs-6px, 6px)",
                            borderRadius: "99px",
                          }}
                        >
                          {/* name="heart" id="I183:10988;47:5556;47:5444" type="INSTANCE" */}
                          <Icon.QodeHeart
                            style={{ width: "16px", height: "16px" }}
                            {...{}}
                          />
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "500",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              textDecorationLine: "underline",
                            }}
                          >{`12 shortlisted`}</span>
                        </Flex>
                        {/* name="divider" id="I183:10988;47:5557" type="LINE" */}
                        <Flex
                          style={{
                            width: "1px",
                            height: "15px",
                            background:
                              "var(--border-border-neutral-30, #d5d5d5)",
                          }}
                        >
                          {/* name="divider" id=I183:10988;47:5557 type=LINE */}
                          <></>
                        </Flex>
                        {/* name="Job/Quick access" id="I183:10988;47:5558" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "var(--size-size-sizexxs-6px, 6px)",
                            borderRadius: "99px",
                          }}
                        >
                          {/* name="video" id="I183:10988;47:5558;47:5444" type="INSTANCE" */}
                          <Icon.QodeVideo
                            style={{ width: "16px", height: "16px" }}
                            {...{}}
                          />
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "500",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              textDecorationLine: "underline",
                            }}
                          >{`4 interviewed`}</span>
                        </Flex>
                      </div>
                      <span
                        style={{
                          color: "var(--text-text-primary-20, #1597f4)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "500",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          textDecorationLine: "underline",
                        }}
                      >{`JD`}</span>
                    </div>
                  </Flex>
                  {/* name="Job item" id="183:10989" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "420px",
                      maxWidth: "440px",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      borderRadius: "var(--border-radius-large, 12px)",
                      border:
                        "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                      background: "var(--background-bg-white, #fff)",
                    }}
                  >
                    {/* name="Wrap" id="I183:10989;47:5566" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding: "16px",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        gap: "12px",
                        alignSelf: "stretch",
                        borderBottom:
                          "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                      }}
                    >
                      {/* name="Job title" id="I183:10989;47:5567" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "12px",
                          alignSelf: "stretch",
                        }}
                      >
                        <span
                          style={{
                            maxHeight: "56px",
                            flex: "1 0 0",
                            color: "var(--text-text-neutral-50, #1d1d1d)",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-size-sizemd-20px, 20px)",
                            fontStyle: "normal",
                            fontWeight: "600",
                            lineHeight:
                              "var(--lineheight-lineheight-xl, 28px) /* 140% */",
                          }}
                        >{`Sales Consultant`}</span>
                        {/* name="arrow-up-right" id="I183:10989;47:5569" type="INSTANCE" */}
                        <Icon.QodeArrowUpRight
                          style={{ width: "24px", height: "24px" }}
                          {...{}}
                        />
                      </div>
                      {/* name="Wrap" id="I183:10989;485:35083" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          paddingRight: "16px",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          gap: "12px",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name="Job/Attributes" id="I183:10989;485:36887" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            padding: "4px 12px",
                            alignItems: "center",
                            gap: "12px",
                            borderRadius: "99px",
                            background: "var(--neutral-gray-5, #f8f6f6)",
                          }}
                        >
                          {/* name="Urgent" id="I183:10989;485:36887;485:36863" type="FRAME" */}
                          <div
                            style={{
                              display: "flex",
                              padding: "2px var(--size-size-sizexxs-6px, 6px)",
                              justifyContent: "center",
                              alignItems: "center",
                              gap: "10px",
                              borderRadius: "12px",
                              background: "var(--neutral-gray-90, #464646)",
                            }}
                          >
                            <span
                              style={{
                                color: "#FFF",
                                textAlign: "center",
                                fontFamily: '"SF Pro Display"',
                                fontSize: "10px",
                                fontStyle: "normal",
                                fontWeight: "600",
                                lineHeight: "normal",
                              }}
                            >{`URGENT`}</span>
                          </div>
                          {/* name="Yoe" id="I183:10989;485:36887;485:36865" type="FRAME" */}
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "12px",
                            }}
                          >
                            <span
                              style={{
                                color: "var(--text-text-neutral-50, #1d1d1d)",
                                fontFamily:
                                  'var(--family-family, "sf pro display")',
                                fontSize: "var(--size-base, 14px)",
                                fontStyle: "normal",
                                fontWeight: "400",
                                lineHeight:
                                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              }}
                            >{`3 yoe`}</span>
                            {/* name="Line 3" id="I183:10989;485:36887;485:36867" type="LINE" */}
                            <Flex
                              style={{
                                width: "1px",
                                height: "8px",
                                background:
                                  "var(--border-border-neutral-50, #6f6f6f)",
                              }}
                            >
                              {/* name="Line 3" id=I183:10989;485:36887;485:36867 type=LINE */}
                              <></>
                            </Flex>
                          </div>
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Vietnam`}</span>
                        </Flex>
                        {/* name="Skills" id="I183:10989;47:5576" type="FRAME" */}
                        <div
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "12px",
                            alignSelf: "stretch",
                          }}
                        >
                          <span
                            style={{
                              color: "var(--text-text-neutral-40, #464646)",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "700",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Skills:`}</span>
                          <span
                            style={{
                              flex: "1 0 0",
                              color: "var(--text-text-neutral-40, #464646)",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Data analysis, Sales automation, Supervising, Salesforce, Hubspot, +5 more`}</span>
                        </div>
                      </div>
                    </div>
                    {/* name="Action" id="I183:10989;47:5554" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding: "16px",
                        justifyContent: "space-between",
                        alignItems: "center",
                        alignSelf: "stretch",
                        background: "var(--neutral-gray-5, #f8f6f6)",
                      }}
                    >
                      {/* name="Status" id="I183:10989;47:5555" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                        }}
                      >
                        {/* name="Job/Quick access" id="I183:10989;47:5556" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "var(--size-size-sizexxs-6px, 6px)",
                            borderRadius: "99px",
                          }}
                        >
                          {/* name="heart" id="I183:10989;47:5556;47:5444" type="INSTANCE" */}
                          <Icon.QodeHeart
                            style={{ width: "16px", height: "16px" }}
                            {...{}}
                          />
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "500",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              textDecorationLine: "underline",
                            }}
                          >{`12 shortlisted`}</span>
                        </Flex>
                        {/* name="divider" id="I183:10989;47:5557" type="LINE" */}
                        <Flex
                          style={{
                            width: "1px",
                            height: "15px",
                            background:
                              "var(--border-border-neutral-30, #d5d5d5)",
                          }}
                        >
                          {/* name="divider" id=I183:10989;47:5557 type=LINE */}
                          <></>
                        </Flex>
                        {/* name="Job/Quick access" id="I183:10989;47:5558" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "var(--size-size-sizexxs-6px, 6px)",
                            borderRadius: "99px",
                          }}
                        >
                          {/* name="video" id="I183:10989;47:5558;47:5444" type="INSTANCE" */}
                          <Icon.QodeVideo
                            style={{ width: "16px", height: "16px" }}
                            {...{}}
                          />
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "500",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              textDecorationLine: "underline",
                            }}
                          >{`4 interviewed`}</span>
                        </Flex>
                      </div>
                      <span
                        style={{
                          color: "var(--text-text-primary-20, #1597f4)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "500",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          textDecorationLine: "underline",
                        }}
                      >{`JD`}</span>
                    </div>
                  </Flex>
                  {/* name="Job item" id="183:10990" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "420px",
                      maxWidth: "440px",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      borderRadius: "var(--border-radius-large, 12px)",
                      border:
                        "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                      background: "var(--background-bg-white, #fff)",
                    }}
                  >
                    {/* name="Wrap" id="I183:10990;47:5566" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding: "16px",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        gap: "12px",
                        alignSelf: "stretch",
                        borderBottom:
                          "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                      }}
                    >
                      {/* name="Job title" id="I183:10990;47:5567" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "12px",
                          alignSelf: "stretch",
                        }}
                      >
                        <span
                          style={{
                            maxHeight: "56px",
                            flex: "1 0 0",
                            color: "var(--text-text-neutral-50, #1d1d1d)",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-size-sizemd-20px, 20px)",
                            fontStyle: "normal",
                            fontWeight: "600",
                            lineHeight:
                              "var(--lineheight-lineheight-xl, 28px) /* 140% */",
                          }}
                        >{`Sales Consultant`}</span>
                        {/* name="arrow-up-right" id="I183:10990;47:5569" type="INSTANCE" */}
                        <Icon.QodeArrowUpRight
                          style={{ width: "24px", height: "24px" }}
                          {...{}}
                        />
                      </div>
                      {/* name="Wrap" id="I183:10990;485:35083" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          paddingRight: "16px",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          gap: "12px",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name="Job/Attributes" id="I183:10990;485:36887" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            padding: "4px 12px",
                            alignItems: "center",
                            gap: "12px",
                            borderRadius: "99px",
                            background: "var(--neutral-gray-5, #f8f6f6)",
                          }}
                        >
                          {/* name="Urgent" id="I183:10990;485:36887;485:36863" type="FRAME" */}
                          <div
                            style={{
                              display: "flex",
                              padding: "2px var(--size-size-sizexxs-6px, 6px)",
                              justifyContent: "center",
                              alignItems: "center",
                              gap: "10px",
                              borderRadius: "12px",
                              background: "var(--neutral-gray-90, #464646)",
                            }}
                          >
                            <span
                              style={{
                                color: "#FFF",
                                textAlign: "center",
                                fontFamily: '"SF Pro Display"',
                                fontSize: "10px",
                                fontStyle: "normal",
                                fontWeight: "600",
                                lineHeight: "normal",
                              }}
                            >{`URGENT`}</span>
                          </div>
                          {/* name="Yoe" id="I183:10990;485:36887;485:36865" type="FRAME" */}
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "12px",
                            }}
                          >
                            <span
                              style={{
                                color: "var(--text-text-neutral-50, #1d1d1d)",
                                fontFamily:
                                  'var(--family-family, "sf pro display")',
                                fontSize: "var(--size-base, 14px)",
                                fontStyle: "normal",
                                fontWeight: "400",
                                lineHeight:
                                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              }}
                            >{`3 yoe`}</span>
                            {/* name="Line 3" id="I183:10990;485:36887;485:36867" type="LINE" */}
                            <Flex
                              style={{
                                width: "1px",
                                height: "8px",
                                background:
                                  "var(--border-border-neutral-50, #6f6f6f)",
                              }}
                            >
                              {/* name="Line 3" id=I183:10990;485:36887;485:36867 type=LINE */}
                              <></>
                            </Flex>
                          </div>
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Vietnam`}</span>
                        </Flex>
                        {/* name="Skills" id="I183:10990;47:5576" type="FRAME" */}
                        <div
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "12px",
                            alignSelf: "stretch",
                          }}
                        >
                          <span
                            style={{
                              color: "var(--text-text-neutral-40, #464646)",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "700",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Skills:`}</span>
                          <span
                            style={{
                              flex: "1 0 0",
                              color: "var(--text-text-neutral-40, #464646)",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Data analysis, Sales automation, Supervising, Salesforce, Hubspot, +5 more`}</span>
                        </div>
                      </div>
                    </div>
                    {/* name="Action" id="I183:10990;47:5554" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding: "16px",
                        justifyContent: "space-between",
                        alignItems: "center",
                        alignSelf: "stretch",
                        background: "var(--neutral-gray-5, #f8f6f6)",
                      }}
                    >
                      {/* name="Status" id="I183:10990;47:5555" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                        }}
                      >
                        {/* name="Job/Quick access" id="I183:10990;47:5556" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "var(--size-size-sizexxs-6px, 6px)",
                            borderRadius: "99px",
                          }}
                        >
                          {/* name="heart" id="I183:10990;47:5556;47:5444" type="INSTANCE" */}
                          <Icon.QodeHeart
                            style={{ width: "16px", height: "16px" }}
                            {...{}}
                          />
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "500",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              textDecorationLine: "underline",
                            }}
                          >{`12 shortlisted`}</span>
                        </Flex>
                        {/* name="divider" id="I183:10990;47:5557" type="LINE" */}
                        <Flex
                          style={{
                            width: "1px",
                            height: "15px",
                            background:
                              "var(--border-border-neutral-30, #d5d5d5)",
                          }}
                        >
                          {/* name="divider" id=I183:10990;47:5557 type=LINE */}
                          <></>
                        </Flex>
                        {/* name="Job/Quick access" id="I183:10990;47:5558" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "var(--size-size-sizexxs-6px, 6px)",
                            borderRadius: "99px",
                          }}
                        >
                          {/* name="video" id="I183:10990;47:5558;47:5444" type="INSTANCE" */}
                          <Icon.QodeVideo
                            style={{ width: "16px", height: "16px" }}
                            {...{}}
                          />
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "500",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              textDecorationLine: "underline",
                            }}
                          >{`4 interviewed`}</span>
                        </Flex>
                      </div>
                      <span
                        style={{
                          color: "var(--text-text-primary-20, #1597f4)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "500",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          textDecorationLine: "underline",
                        }}
                      >{`JD`}</span>
                    </div>
                  </Flex>
                  {/* name="Job item" id="183:10991" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "420px",
                      maxWidth: "440px",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      borderRadius: "var(--border-radius-large, 12px)",
                      border:
                        "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                      background: "var(--background-bg-white, #fff)",
                    }}
                  >
                    {/* name="Wrap" id="I183:10991;47:5566" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding: "16px",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        gap: "12px",
                        alignSelf: "stretch",
                        borderBottom:
                          "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                      }}
                    >
                      {/* name="Job title" id="I183:10991;47:5567" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "12px",
                          alignSelf: "stretch",
                        }}
                      >
                        <span
                          style={{
                            maxHeight: "56px",
                            flex: "1 0 0",
                            color: "var(--text-text-neutral-50, #1d1d1d)",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-size-sizemd-20px, 20px)",
                            fontStyle: "normal",
                            fontWeight: "600",
                            lineHeight:
                              "var(--lineheight-lineheight-xl, 28px) /* 140% */",
                          }}
                        >{`Sales Consultant`}</span>
                        {/* name="arrow-up-right" id="I183:10991;47:5569" type="INSTANCE" */}
                        <Icon.QodeArrowUpRight
                          style={{ width: "24px", height: "24px" }}
                          {...{}}
                        />
                      </div>
                      {/* name="Wrap" id="I183:10991;485:35083" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          paddingRight: "16px",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          gap: "12px",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name="Job/Attributes" id="I183:10991;485:36887" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            padding: "4px 12px",
                            alignItems: "center",
                            gap: "12px",
                            borderRadius: "99px",
                            background: "var(--neutral-gray-5, #f8f6f6)",
                          }}
                        >
                          {/* name="Urgent" id="I183:10991;485:36887;485:36863" type="FRAME" */}
                          <div
                            style={{
                              display: "flex",
                              padding: "2px var(--size-size-sizexxs-6px, 6px)",
                              justifyContent: "center",
                              alignItems: "center",
                              gap: "10px",
                              borderRadius: "12px",
                              background: "var(--neutral-gray-90, #464646)",
                            }}
                          >
                            <span
                              style={{
                                color: "#FFF",
                                textAlign: "center",
                                fontFamily: '"SF Pro Display"',
                                fontSize: "10px",
                                fontStyle: "normal",
                                fontWeight: "600",
                                lineHeight: "normal",
                              }}
                            >{`URGENT`}</span>
                          </div>
                          {/* name="Yoe" id="I183:10991;485:36887;485:36865" type="FRAME" */}
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "12px",
                            }}
                          >
                            <span
                              style={{
                                color: "var(--text-text-neutral-50, #1d1d1d)",
                                fontFamily:
                                  'var(--family-family, "sf pro display")',
                                fontSize: "var(--size-base, 14px)",
                                fontStyle: "normal",
                                fontWeight: "400",
                                lineHeight:
                                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              }}
                            >{`3 yoe`}</span>
                            {/* name="Line 3" id="I183:10991;485:36887;485:36867" type="LINE" */}
                            <Flex
                              style={{
                                width: "1px",
                                height: "8px",
                                background:
                                  "var(--border-border-neutral-50, #6f6f6f)",
                              }}
                            >
                              {/* name="Line 3" id=I183:10991;485:36887;485:36867 type=LINE */}
                              <></>
                            </Flex>
                          </div>
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Vietnam`}</span>
                        </Flex>
                        {/* name="Skills" id="I183:10991;47:5576" type="FRAME" */}
                        <div
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "12px",
                            alignSelf: "stretch",
                          }}
                        >
                          <span
                            style={{
                              color: "var(--text-text-neutral-40, #464646)",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "700",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Skills:`}</span>
                          <span
                            style={{
                              flex: "1 0 0",
                              color: "var(--text-text-neutral-40, #464646)",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Data analysis, Sales automation, Supervising, Salesforce, Hubspot, +5 more`}</span>
                        </div>
                      </div>
                    </div>
                    {/* name="Action" id="I183:10991;47:5554" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding: "16px",
                        justifyContent: "space-between",
                        alignItems: "center",
                        alignSelf: "stretch",
                        background: "var(--neutral-gray-5, #f8f6f6)",
                      }}
                    >
                      {/* name="Status" id="I183:10991;47:5555" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                        }}
                      >
                        {/* name="Job/Quick access" id="I183:10991;47:5556" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "var(--size-size-sizexxs-6px, 6px)",
                            borderRadius: "99px",
                          }}
                        >
                          {/* name="heart" id="I183:10991;47:5556;47:5444" type="INSTANCE" */}
                          <Icon.QodeHeart
                            style={{ width: "16px", height: "16px" }}
                            {...{}}
                          />
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "500",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              textDecorationLine: "underline",
                            }}
                          >{`12 shortlisted`}</span>
                        </Flex>
                        {/* name="divider" id="I183:10991;47:5557" type="LINE" */}
                        <Flex
                          style={{
                            width: "1px",
                            height: "15px",
                            background:
                              "var(--border-border-neutral-30, #d5d5d5)",
                          }}
                        >
                          {/* name="divider" id=I183:10991;47:5557 type=LINE */}
                          <></>
                        </Flex>
                        {/* name="Job/Quick access" id="I183:10991;47:5558" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "var(--size-size-sizexxs-6px, 6px)",
                            borderRadius: "99px",
                          }}
                        >
                          {/* name="video" id="I183:10991;47:5558;47:5444" type="INSTANCE" */}
                          <Icon.QodeVideo
                            style={{ width: "16px", height: "16px" }}
                            {...{}}
                          />
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "500",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              textDecorationLine: "underline",
                            }}
                          >{`4 interviewed`}</span>
                        </Flex>
                      </div>
                      <span
                        style={{
                          color: "var(--text-text-primary-20, #1597f4)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "500",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          textDecorationLine: "underline",
                        }}
                      >{`JD`}</span>
                    </div>
                  </Flex>
                  {/* name="Job item" id="183:10992" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "420px",
                      maxWidth: "440px",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      borderRadius: "var(--border-radius-large, 12px)",
                      border:
                        "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                      background: "var(--background-bg-white, #fff)",
                    }}
                  >
                    {/* name="Wrap" id="I183:10992;47:5566" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding: "16px",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        gap: "12px",
                        alignSelf: "stretch",
                        borderBottom:
                          "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                      }}
                    >
                      {/* name="Job title" id="I183:10992;47:5567" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "12px",
                          alignSelf: "stretch",
                        }}
                      >
                        <span
                          style={{
                            maxHeight: "56px",
                            flex: "1 0 0",
                            color: "var(--text-text-neutral-50, #1d1d1d)",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-size-sizemd-20px, 20px)",
                            fontStyle: "normal",
                            fontWeight: "600",
                            lineHeight:
                              "var(--lineheight-lineheight-xl, 28px) /* 140% */",
                          }}
                        >{`Sales Consultant`}</span>
                        {/* name="arrow-up-right" id="I183:10992;47:5569" type="INSTANCE" */}
                        <Icon.QodeArrowUpRight
                          style={{ width: "24px", height: "24px" }}
                          {...{}}
                        />
                      </div>
                      {/* name="Wrap" id="I183:10992;485:35083" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          paddingRight: "16px",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          gap: "12px",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name="Job/Attributes" id="I183:10992;485:36887" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            padding: "4px 12px",
                            alignItems: "center",
                            gap: "12px",
                            borderRadius: "99px",
                            background: "var(--neutral-gray-5, #f8f6f6)",
                          }}
                        >
                          {/* name="Urgent" id="I183:10992;485:36887;485:36863" type="FRAME" */}
                          <div
                            style={{
                              display: "flex",
                              padding: "2px var(--size-size-sizexxs-6px, 6px)",
                              justifyContent: "center",
                              alignItems: "center",
                              gap: "10px",
                              borderRadius: "12px",
                              background: "var(--neutral-gray-90, #464646)",
                            }}
                          >
                            <span
                              style={{
                                color: "#FFF",
                                textAlign: "center",
                                fontFamily: '"SF Pro Display"',
                                fontSize: "10px",
                                fontStyle: "normal",
                                fontWeight: "600",
                                lineHeight: "normal",
                              }}
                            >{`URGENT`}</span>
                          </div>
                          {/* name="Yoe" id="I183:10992;485:36887;485:36865" type="FRAME" */}
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "12px",
                            }}
                          >
                            <span
                              style={{
                                color: "var(--text-text-neutral-50, #1d1d1d)",
                                fontFamily:
                                  'var(--family-family, "sf pro display")',
                                fontSize: "var(--size-base, 14px)",
                                fontStyle: "normal",
                                fontWeight: "400",
                                lineHeight:
                                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              }}
                            >{`3 yoe`}</span>
                            {/* name="Line 3" id="I183:10992;485:36887;485:36867" type="LINE" */}
                            <Flex
                              style={{
                                width: "1px",
                                height: "8px",
                                background:
                                  "var(--border-border-neutral-50, #6f6f6f)",
                              }}
                            >
                              {/* name="Line 3" id=I183:10992;485:36887;485:36867 type=LINE */}
                              <></>
                            </Flex>
                          </div>
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Vietnam`}</span>
                        </Flex>
                        {/* name="Skills" id="I183:10992;47:5576" type="FRAME" */}
                        <div
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "12px",
                            alignSelf: "stretch",
                          }}
                        >
                          <span
                            style={{
                              color: "var(--text-text-neutral-40, #464646)",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "700",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Skills:`}</span>
                          <span
                            style={{
                              flex: "1 0 0",
                              color: "var(--text-text-neutral-40, #464646)",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Data analysis, Sales automation, Supervising, Salesforce, Hubspot, +5 more`}</span>
                        </div>
                      </div>
                    </div>
                    {/* name="Action" id="I183:10992;47:5554" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding: "16px",
                        justifyContent: "space-between",
                        alignItems: "center",
                        alignSelf: "stretch",
                        background: "var(--neutral-gray-5, #f8f6f6)",
                      }}
                    >
                      {/* name="Status" id="I183:10992;47:5555" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                        }}
                      >
                        {/* name="Job/Quick access" id="I183:10992;47:5556" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "var(--size-size-sizexxs-6px, 6px)",
                            borderRadius: "99px",
                          }}
                        >
                          {/* name="heart" id="I183:10992;47:5556;47:5444" type="INSTANCE" */}
                          <Icon.QodeHeart
                            style={{ width: "16px", height: "16px" }}
                            {...{}}
                          />
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "500",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              textDecorationLine: "underline",
                            }}
                          >{`12 shortlisted`}</span>
                        </Flex>
                        {/* name="divider" id="I183:10992;47:5557" type="LINE" */}
                        <Flex
                          style={{
                            width: "1px",
                            height: "15px",
                            background:
                              "var(--border-border-neutral-30, #d5d5d5)",
                          }}
                        >
                          {/* name="divider" id=I183:10992;47:5557 type=LINE */}
                          <></>
                        </Flex>
                        {/* name="Job/Quick access" id="I183:10992;47:5558" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "var(--size-size-sizexxs-6px, 6px)",
                            borderRadius: "99px",
                          }}
                        >
                          {/* name="video" id="I183:10992;47:5558;47:5444" type="INSTANCE" */}
                          <Icon.QodeVideo
                            style={{ width: "16px", height: "16px" }}
                            {...{}}
                          />
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "500",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              textDecorationLine: "underline",
                            }}
                          >{`4 interviewed`}</span>
                        </Flex>
                      </div>
                      <span
                        style={{
                          color: "var(--text-text-primary-20, #1597f4)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "500",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          textDecorationLine: "underline",
                        }}
                      >{`JD`}</span>
                    </div>
                  </Flex>
                </div>
                {/* name="Pagination" id="183:10993" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "556px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-padding, 16px)",
                  }}
                >
                  {/* name="Pagination Wrapper" id="I183:10993;171:27143" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "var(--size-padding-paddingxs, 8px)",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name="🧬 left" id="I183:10993;171:27101" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        width: "32px",
                        height: "var(--size-height-controlheight, 32px)",
                        padding: "var(--size-padding-paddingxxs, 4px)",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "var(--style-radius-borderradius, 8px)",
                      }}
                    >
                      {/* name="chevron-left" id="I183:10993;171:27101;171:26630" type="INSTANCE" */}
                      <Icon.QodeChevronLeft
                        style={{
                          width: "var(--font-size-base, 14px)",
                          height: "var(--font-size-base, 14px)",
                          flexShrink: "0",
                        }}
                        {...{}}
                      />
                    </Flex>
                    {/* name="pages" id="I183:10993;2747:12254" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "var(--size-margin-marginxs, 8px)",
                        flex: "1 0 0",
                      }}
                    >
                      {/* name="🧬 item 1" id="I183:10993;171:27102" type="INSTANCE" */}
                      <Flex
                        style={{
                          display: "flex",
                          width: "32px",
                          height: "var(--size-height-controlheight, 32px)",
                          padding: "var(--size-padding-paddingxxs, 4px)",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius: "var(--style-radius-borderradius, 8px)",
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
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-base, 14px)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight:
                              "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          }}
                        >{`1`}</span>
                      </Flex>
                      {/* name="🧬 item 2" id="I183:10993;171:27117" type="INSTANCE" */}
                      <QodePagination
                        style={{
                          display: "flex",
                          width: "32px",
                          height: "var(--size-height-controlheight, 32px)",
                          padding: "var(--size-padding-paddingxxs, 4px)",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius: "var(--style-radius-borderradius, 8px)",
                        }}
                        {...{ state: "default", direction: "left" }}
                      />
                      {/* name="🧬 item 3" id="I183:10993;171:27103" type="INSTANCE" */}
                      <Flex
                        style={{
                          display: "flex",
                          width: "32px",
                          height: "var(--size-height-controlheight, 32px)",
                          padding: "var(--size-padding-paddingxxs, 4px)",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius: "var(--style-radius-borderradius, 8px)",
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
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-base, 14px)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight:
                              "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          }}
                        >{`4`}</span>
                      </Flex>
                      {/* name="🧬 item 4" id="I183:10993;171:27104" type="INSTANCE" */}
                      <Flex
                        style={{
                          display: "flex",
                          width: "32px",
                          height: "var(--size-height-controlheight, 32px)",
                          padding: "var(--size-padding-paddingxxs, 4px)",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius: "var(--style-radius-borderradius, 8px)",
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
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-base, 14px)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight:
                              "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          }}
                        >{`5`}</span>
                      </Flex>
                      {/* name=".pagination__number" id="I183:10993;171:27105" type="INSTANCE" */}
                      <Flex
                        style={{
                          display: "flex",
                          width: "32px",
                          height: "var(--size-height-controlheight, 32px)",
                          padding: "var(--size-padding-paddingxxs, 4px)",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius:
                            "var(--style-radius-borderround, 999px)",
                          background: "var(--neutral-gray-100, #1d1d1d)",
                        }}
                      >
                        <span
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            flex: "1 0 0",
                            alignSelf: "stretch",
                            color: "#FFF",
                            textAlign: "center",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-base, 14px)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight:
                              "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          }}
                        >{`6`}</span>
                      </Flex>
                      {/* name="🧬 item 6" id="I183:10993;171:27106" type="INSTANCE" */}
                      <Flex
                        style={{
                          display: "flex",
                          width: "32px",
                          height: "var(--size-height-controlheight, 32px)",
                          padding: "var(--size-padding-paddingxxs, 4px)",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius: "var(--style-radius-borderradius, 8px)",
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
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-base, 14px)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight:
                              "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          }}
                        >{`7`}</span>
                      </Flex>
                      {/* name="🧬 item 7" id="I183:10993;171:27123" type="INSTANCE" */}
                      <Flex
                        style={{
                          display: "flex",
                          width: "32px",
                          height: "var(--size-height-controlheight, 32px)",
                          padding: "var(--size-padding-paddingxxs, 4px)",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius: "var(--style-radius-borderradius, 8px)",
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
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-base, 14px)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight:
                              "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          }}
                        >{`8`}</span>
                      </Flex>
                      {/* name="🧬 item 8" id="I183:10993;171:27125" type="INSTANCE" */}
                      <QodePagination
                        style={{
                          display: "flex",
                          width: "32px",
                          height: "var(--size-height-controlheight, 32px)",
                          padding: "var(--size-padding-paddingxxs, 4px)",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius: "var(--style-radius-borderradius, 8px)",
                        }}
                        {...{ state: "default", direction: "left" }}
                      />
                      {/* name="🧬 item 9" id="I183:10993;171:27129" type="INSTANCE" */}
                      <Flex
                        style={{
                          display: "flex",
                          width: "32px",
                          height: "var(--size-height-controlheight, 32px)",
                          padding: "var(--size-padding-paddingxxs, 4px)",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius: "var(--style-radius-borderradius, 8px)",
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
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-base, 14px)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight:
                              "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          }}
                        >{`50`}</span>
                      </Flex>
                    </div>
                    {/* name="🧬 right" id="I183:10993;171:27107" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        width: "32px",
                        height: "var(--size-height-controlheight, 32px)",
                        padding: "var(--size-padding-paddingxxs, 4px)",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "var(--style-radius-borderradius, 8px)",
                      }}
                    >
                      {/* name="chevron-right" id="I183:10993;171:27107;171:26641" type="INSTANCE" */}
                      <Icon.QodeChevronRight
                        style={{
                          width: "var(--font-size-base, 14px)",
                          height: "var(--font-size-base, 14px)",
                          flexShrink: "0",
                        }}
                        {...{}}
                      />
                    </Flex>
                  </div>
                  {/* name="Jumper Wrapper" id="I183:10993;171:27131" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    {/* name="🧬 select 1" id="I183:10993;171:27132" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        width: "108px",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        gap: "var(--size-padding-paddingxxs, 4px)",
                        borderRadius: "var(--border-radius-base, 8px)",
                        border:
                          "1px solid var(--border-border-neutral-30, #d5d5d5)",
                      }}
                    >
                      {/* name="Input/Select" id="I183:10993;171:27132;170:26363" type="INSTANCE" */}
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
                            "var(--style-line-width-linewidth, 1px) solid rgba(0, 0, 0, 0.15)",
                          background: "#FFF",
                        }}
                      >
                        <span
                          style={{
                            flex: "1 0 0",
                            color: "var(--text-text-neutral-50, #1d1d1d)",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-base, 14px)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight:
                              "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          }}
                        >{`12 / page`}</span>
                        {/* name="Icon" id="I183:10993;171:27132;170:26363;170:24281" type="INSTANCE" */}
                        <QodeSvgI18310993171271321702636317024281
                          style={{ width: "16px", height: "16px" }}
                          {...{}}
                        />
                      </Flex>
                    </Flex>
                  </div>
                </Flex>
              </div>
            </div>
          </div>
        </>
      )}
      {/* id="715:30652" */}
      {`${screensize}` === `1600` && (
        <>
          {/* name="screensize=1600" id="715:30652" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "flex-start",
              background: "#FFF",
            }}
          >
            {/* name="Navbar" id="183:11454" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                width: "84px",
                flexDirection: "column",
                alignItems: "center",
                alignSelf: "stretch",
                borderRight:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--background-bg-white, #fff)",
              }}
            >
              {/* name="Logo" id="I183:11454;1:3092" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  padding: "16px 0px",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "4px",
                  alignSelf: "stretch",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                }}
              >
                {/* name="logo" id="I183:11454;635:31404" type="INSTANCE" */}
                <QodeSvg616010
                  style={{ width: "40px", height: "40px" }}
                  {...{
                    type: "Default",
                    darkmode: "yes",
                    orientation: "landscape",
                    wordmark: "no",
                  }}
                />
              </div>
              {/* name="V-Menu" id="I183:11454;1:3094" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  padding: "16px 8px",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "16px",
                  flex: "1 0 0",
                  alignSelf: "stretch",
                }}
              >
                {/* name="Navbar/Menu" id="I183:11454;4:124" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "84px",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-size-sizexxs-6px, 6px)",
                  }}
                >
                  {/* name="Icon" id="I183:11454;4:124;4:78" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      width: "40px",
                      height: "40px",
                      padding: "8px",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "10px",
                      borderRadius: "var(--size-size-sizexs-8px, 8px)",
                      border:
                        "1px solid var(--border-border-neutral-20, #e3e3e3)",
                      background: "var(--background-bg-neutral-5, #f8f6f6)",
                    }}
                  >
                    {/* name="cube" id="I183:11454;4:124;4:79" type="INSTANCE" */}
                    <Icon.QodeCube
                      style={{ width: "24px", height: "24px", flexShrink: "0" }}
                      {...{}}
                    />
                  </div>
                  <span
                    style={{
                      alignSelf: "stretch",
                      color: "var(--text-text-neutral-30, #656565)",
                      textAlign: "center",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-small, 12px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                    }}
                  >{`Dashboard`}</span>
                </Flex>
                {/* name="Navbar/Menu" id="I183:11454;16:5813" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "84px",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-size-sizexxs-6px, 6px)",
                  }}
                >
                  {/* name="Icon" id="I183:11454;16:5813;4:92" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      width: "40px",
                      height: "40px",
                      padding: "8px",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "10px",
                      borderRadius: "var(--size-size-sizexs-8px, 8px)",
                      border:
                        "1px solid var(--border-border-primary-30, #107ecc)",
                      background: "var(--background-bg-primary, #1597f4)",
                    }}
                  >
                    {/* name="briefcase" id="I183:11454;16:5813;4:93" type="INSTANCE" */}
                    <Icon.QodeBriefcase
                      style={{ width: "24px", height: "24px", flexShrink: "0" }}
                      {...{}}
                    />
                  </div>
                  <span
                    style={{
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
                  >{`Jobs`}</span>
                </Flex>
                {/* name="Navbar/Menu" id="I183:11454;4:54" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "84px",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-size-sizexxs-6px, 6px)",
                  }}
                >
                  {/* name="Icon" id="I183:11454;4:54;4:78" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      width: "40px",
                      height: "40px",
                      padding: "8px",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "10px",
                      borderRadius: "var(--size-size-sizexs-8px, 8px)",
                      border:
                        "1px solid var(--border-border-neutral-20, #e3e3e3)",
                      background: "var(--background-bg-neutral-5, #f8f6f6)",
                    }}
                  >
                    {/* name="user-group" id="I183:11454;4:54;4:79" type="INSTANCE" */}
                    <Icon.QodeUserGroup
                      style={{ width: "24px", height: "24px", flexShrink: "0" }}
                      {...{}}
                    />
                  </div>
                  <span
                    style={{
                      alignSelf: "stretch",
                      color: "var(--text-text-neutral-30, #656565)",
                      textAlign: "center",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-small, 12px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                    }}
                  >{`Talent pool`}</span>
                </Flex>
                {/* name="Navbar/Menu" id="I183:11454;4:95" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "84px",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-size-sizexxs-6px, 6px)",
                  }}
                >
                  {/* name="Icon" id="I183:11454;4:95;4:78" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      width: "40px",
                      height: "40px",
                      padding: "8px",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "10px",
                      borderRadius: "var(--size-size-sizexs-8px, 8px)",
                      border:
                        "1px solid var(--border-border-neutral-20, #e3e3e3)",
                      background: "var(--background-bg-neutral-5, #f8f6f6)",
                    }}
                  >
                    {/* name="video" id="I183:11454;4:95;4:79" type="INSTANCE" */}
                    <Icon.QodeVideo
                      style={{ width: "24px", height: "24px", flexShrink: "0" }}
                      {...{}}
                    />
                  </div>
                  <span
                    style={{
                      alignSelf: "stretch",
                      color: "var(--text-text-neutral-30, #656565)",
                      textAlign: "center",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-small, 12px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                    }}
                  >{`Interviews`}</span>
                </Flex>
              </div>
              {/* name="Btm" id="I183:11454;1:3098" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  padding: "16px 0px",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                {/* name="Profile" id="I183:11454;1:3099" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-end",
                    gap: "var(--font-size-large, 16px)",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name="Button" id="I183:11454;1:3099;5007:11919" type="INSTANCE" */}
                  <QodeButton
                    style={{
                      display: "flex",
                      height: "var(--size-height-controlheightlg, 40px)",
                      padding:
                        "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingsm, 12px)",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "var(--size-padding-paddingxs, 8px)",
                      borderRadius: "var(--style-radius-borderround, 999px)",
                      border:
                        "var(--style-line-width-linewidth, 1px) solid var(--color-gold-purple-colorgoldpurpleborder, #efdbff)",
                      background:
                        "var(--color-gold-purple-colorgoldpurplebg, #f9f0ff)",
                    }}
                    {...{
                      icononly: "630:15277",
                      iconR: <Icon.QodeMagnifyingGlass />,
                      title: "Button",
                      iconL: false,
                      type: "default",
                      size: "large",
                      state: "default",
                      content: "icon",
                      danger: false,
                      ghost: false,
                    }}
                  />
                </Flex>
                {/* name="Profile" id="I183:11454;1:3100" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-end",
                    gap: "var(--font-size-large, 16px)",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name="Button" id="I183:11454;1:3100;5007:11919" type="INSTANCE" */}
                  <QodeButton
                    style={{
                      display: "flex",
                      height: "var(--size-height-controlheightlg, 40px)",
                      padding:
                        "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingsm, 12px)",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "var(--size-padding-paddingxs, 8px)",
                      borderRadius: "var(--style-radius-borderround, 999px)",
                      border:
                        "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                      background:
                        "var(--color-neutral-background-colorbgcontainer, #fff)",
                    }}
                    {...{
                      icononly: <Icon.QodeUser />,
                      iconR: <Icon.QodeMagnifyingGlass />,
                      title: "Button",
                      iconL: false,
                      type: "default",
                      size: "large",
                      state: "default",
                      content: "icon",
                      danger: false,
                      ghost: false,
                    }}
                  />
                </Flex>
              </div>
            </Flex>
            {/* name="b" id="183:11455" type="FRAME" */}
            <div
              style={{
                display: "flex",
                width: "1516px",
                height: "900px",
                padding: "40px 40px 0px 40px",
                flexDirection: "column",
                alignItems: "center",
                gap: "32px",
                background: "var(--app-bg, #f4f4f6)",
              }}
            >
              {/* name="Header" id="183:11456" type="FRAME" */}
              <div
                style={{
                  height: "40px",
                  maxWidth: "1276px",
                  flexShrink: "0",
                  alignSelf: "stretch",
                }}
              >
                <span
                  style={{
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-heading3, 28px)",
                    fontStyle: "normal",
                    fontWeight: "600",
                    lineHeight:
                      "var(--lineheight-lineheight-h3, 36px) /* 128.571% */",
                  }}
                >{`My jobs`}</span>
                {/* name="Button" id="183:11459" type="INSTANCE" */}
                <QodeButton
                  style={{
                    display: "flex",
                    width: "130px",
                    height: "var(--size-height-controlheight, 32px)",
                    padding: "4px 16px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "8px",
                    flexShrink: "0",
                    borderRadius: "var(--border-radius-rounded, 999px)",
                    border:
                      "1px solid var(--border-border-primary-30, #107ecc)",
                    background: "var(--background-bg-primary, #1597f4)",
                  }}
                  {...{
                    onlyIcon: <Icon.QodeMagnifyingGlass />,
                    iconLeft: true,
                    iconRight: false,
                    buttonname: "Add job",
                    selectIconRight: <Icon.QodeMagnifyingGlass />,
                    selectIconLeft: <Icon.QodePlus />,
                    type: "primary",
                    size: "default",
                    state: "default",
                    content: "default",
                    danger: false,
                    ghost: false,
                  }}
                />
                {/* name="Search bar" id="183:11458" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "480px",
                    height: "var(--size-height-controlheightlg, 40px)",
                    padding: "10px 12px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "12px",
                    flexShrink: "0",
                    borderRadius: "var(--border-radius-base, 8px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                    background: "var(--background-bg-white, #fff)",
                  }}
                >
                  {/* name="🎰 icon left" id="I183:11458;2720:38139" type="INSTANCE" */}
                  <Icon.QodeMagnifyingGlass
                    style={{ width: "16px", height: "16px", flexShrink: "0" }}
                    {...{}}
                  />
                  <span
                    style={{
                      color: "var(--color-neutral-text-colortext, #000)",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-large, 16px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight: "24px /* 150% */",
                    }}
                  >{`PRE`}</span>
                  <span
                    style={{
                      flex: "1 0 0",
                      color: "var(--text-text-placeholder, #a7a7a7)",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-large, 16px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight: "24px /* 150% */",
                    }}
                  >{`Search`}</span>
                  <span
                    style={{
                      color:
                        "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-large, 16px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight: "24px /* 150% */",
                    }}
                  >{`SUF`}</span>
                  {/* name="🎰 icon right" id="I183:11458;2720:38143" type="INSTANCE" */}
                  <Icon.QodeUser
                    style={{
                      display: "flex",
                      width: "16px",
                      height: "16px",
                      padding: "1.6px 2.4px",
                      justifyContent: "center",
                      alignItems: "center",
                      flexShrink: "0",
                    }}
                    {...{}}
                  />
                </Flex>
              </div>
              {/* name="Body" id="183:11460" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  maxWidth: "1276px",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "20px",
                  alignSelf: "stretch",
                }}
              >
                {/* name="Jobs" id="183:11461" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    alignContent: "flex-start",
                    gap: "8px",
                    alignSelf: "stretch",
                    flexWrap: "wrap",
                    borderRadius: "8px",
                  }}
                >
                  {/* name="Job item" id="183:11462" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "420px",
                      maxWidth: "440px",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      borderRadius: "var(--border-radius-large, 12px)",
                      border:
                        "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                      background: "var(--background-bg-white, #fff)",
                    }}
                  >
                    {/* name="Wrap" id="I183:11462;47:5566" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding: "16px",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        gap: "12px",
                        alignSelf: "stretch",
                        borderBottom:
                          "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                      }}
                    >
                      {/* name="Job title" id="I183:11462;47:5567" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "12px",
                          alignSelf: "stretch",
                        }}
                      >
                        <span
                          style={{
                            maxHeight: "56px",
                            flex: "1 0 0",
                            color: "var(--text-text-neutral-50, #1d1d1d)",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-size-sizemd-20px, 20px)",
                            fontStyle: "normal",
                            fontWeight: "600",
                            lineHeight:
                              "var(--lineheight-lineheight-xl, 28px) /* 140% */",
                          }}
                        >{`Sales Consultant`}</span>
                        {/* name="arrow-up-right" id="I183:11462;47:5569" type="INSTANCE" */}
                        <Icon.QodeArrowUpRight
                          style={{ width: "24px", height: "24px" }}
                          {...{}}
                        />
                      </div>
                      {/* name="Wrap" id="I183:11462;485:35083" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          paddingRight: "16px",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          gap: "12px",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name="Job/Attributes" id="I183:11462;485:36887" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            padding: "4px 12px",
                            alignItems: "center",
                            gap: "12px",
                            borderRadius: "99px",
                            background: "var(--neutral-gray-5, #f8f6f6)",
                          }}
                        >
                          {/* name="Urgent" id="I183:11462;485:36887;485:36863" type="FRAME" */}
                          <div
                            style={{
                              display: "flex",
                              padding: "2px var(--size-size-sizexxs-6px, 6px)",
                              justifyContent: "center",
                              alignItems: "center",
                              gap: "10px",
                              borderRadius: "12px",
                              background: "var(--neutral-gray-90, #464646)",
                            }}
                          >
                            <span
                              style={{
                                color: "#FFF",
                                textAlign: "center",
                                fontFamily: '"SF Pro Display"',
                                fontSize: "10px",
                                fontStyle: "normal",
                                fontWeight: "600",
                                lineHeight: "normal",
                              }}
                            >{`URGENT`}</span>
                          </div>
                          {/* name="Yoe" id="I183:11462;485:36887;485:36865" type="FRAME" */}
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "12px",
                            }}
                          >
                            <span
                              style={{
                                color: "var(--text-text-neutral-50, #1d1d1d)",
                                fontFamily:
                                  'var(--family-family, "sf pro display")',
                                fontSize: "var(--size-base, 14px)",
                                fontStyle: "normal",
                                fontWeight: "400",
                                lineHeight:
                                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              }}
                            >{`3 yoe`}</span>
                            {/* name="Line 3" id="I183:11462;485:36887;485:36867" type="LINE" */}
                            <Flex
                              style={{
                                width: "1px",
                                height: "8px",
                                background:
                                  "var(--border-border-neutral-50, #6f6f6f)",
                              }}
                            >
                              {/* name="Line 3" id=I183:11462;485:36887;485:36867 type=LINE */}
                              <></>
                            </Flex>
                          </div>
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Vietnam`}</span>
                        </Flex>
                        {/* name="Skills" id="I183:11462;47:5576" type="FRAME" */}
                        <div
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "12px",
                            alignSelf: "stretch",
                          }}
                        >
                          <span
                            style={{
                              color: "var(--text-text-neutral-40, #464646)",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "700",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Skills:`}</span>
                          <span
                            style={{
                              flex: "1 0 0",
                              color: "var(--text-text-neutral-40, #464646)",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Data analysis, Sales automation, Supervising, Salesforce, Hubspot, +5 more`}</span>
                        </div>
                      </div>
                    </div>
                    {/* name="Action" id="I183:11462;47:5554" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding: "16px",
                        justifyContent: "space-between",
                        alignItems: "center",
                        alignSelf: "stretch",
                        background: "var(--neutral-gray-5, #f8f6f6)",
                      }}
                    >
                      {/* name="Status" id="I183:11462;47:5555" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                        }}
                      >
                        {/* name="Job/Quick access" id="I183:11462;47:5556" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "var(--size-size-sizexxs-6px, 6px)",
                            borderRadius: "99px",
                          }}
                        >
                          {/* name="heart" id="I183:11462;47:5556;47:5444" type="INSTANCE" */}
                          <Icon.QodeHeart
                            style={{ width: "16px", height: "16px" }}
                            {...{}}
                          />
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "500",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              textDecorationLine: "underline",
                            }}
                          >{`12 shortlisted`}</span>
                        </Flex>
                        {/* name="divider" id="I183:11462;47:5557" type="LINE" */}
                        <Flex
                          style={{
                            width: "1px",
                            height: "15px",
                            background:
                              "var(--border-border-neutral-30, #d5d5d5)",
                          }}
                        >
                          {/* name="divider" id=I183:11462;47:5557 type=LINE */}
                          <></>
                        </Flex>
                        {/* name="Job/Quick access" id="I183:11462;47:5558" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "var(--size-size-sizexxs-6px, 6px)",
                            borderRadius: "99px",
                          }}
                        >
                          {/* name="video" id="I183:11462;47:5558;47:5444" type="INSTANCE" */}
                          <Icon.QodeVideo
                            style={{ width: "16px", height: "16px" }}
                            {...{}}
                          />
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "500",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              textDecorationLine: "underline",
                            }}
                          >{`4 interviewed`}</span>
                        </Flex>
                      </div>
                      <span
                        style={{
                          color: "var(--text-text-primary-20, #1597f4)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "500",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          textDecorationLine: "underline",
                        }}
                      >{`JD`}</span>
                    </div>
                  </Flex>
                  {/* name="Job item" id="183:11463" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "420px",
                      maxWidth: "440px",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      borderRadius: "var(--border-radius-large, 12px)",
                      border:
                        "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                      background: "var(--background-bg-white, #fff)",
                    }}
                  >
                    {/* name="Wrap" id="I183:11463;47:5566" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding: "16px",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        gap: "12px",
                        alignSelf: "stretch",
                        borderBottom:
                          "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                      }}
                    >
                      {/* name="Job title" id="I183:11463;47:5567" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "12px",
                          alignSelf: "stretch",
                        }}
                      >
                        <span
                          style={{
                            maxHeight: "56px",
                            flex: "1 0 0",
                            color: "var(--text-text-neutral-50, #1d1d1d)",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-size-sizemd-20px, 20px)",
                            fontStyle: "normal",
                            fontWeight: "600",
                            lineHeight:
                              "var(--lineheight-lineheight-xl, 28px) /* 140% */",
                          }}
                        >{`Sales Consultant`}</span>
                        {/* name="arrow-up-right" id="I183:11463;47:5569" type="INSTANCE" */}
                        <Icon.QodeArrowUpRight
                          style={{ width: "24px", height: "24px" }}
                          {...{}}
                        />
                      </div>
                      {/* name="Wrap" id="I183:11463;485:35083" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          paddingRight: "16px",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          gap: "12px",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name="Job/Attributes" id="I183:11463;485:36887" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            padding: "4px 12px",
                            alignItems: "center",
                            gap: "12px",
                            borderRadius: "99px",
                            background: "var(--neutral-gray-5, #f8f6f6)",
                          }}
                        >
                          {/* name="Urgent" id="I183:11463;485:36887;485:36863" type="FRAME" */}
                          <div
                            style={{
                              display: "flex",
                              padding: "2px var(--size-size-sizexxs-6px, 6px)",
                              justifyContent: "center",
                              alignItems: "center",
                              gap: "10px",
                              borderRadius: "12px",
                              background: "var(--neutral-gray-90, #464646)",
                            }}
                          >
                            <span
                              style={{
                                color: "#FFF",
                                textAlign: "center",
                                fontFamily: '"SF Pro Display"',
                                fontSize: "10px",
                                fontStyle: "normal",
                                fontWeight: "600",
                                lineHeight: "normal",
                              }}
                            >{`URGENT`}</span>
                          </div>
                          {/* name="Yoe" id="I183:11463;485:36887;485:36865" type="FRAME" */}
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "12px",
                            }}
                          >
                            <span
                              style={{
                                color: "var(--text-text-neutral-50, #1d1d1d)",
                                fontFamily:
                                  'var(--family-family, "sf pro display")',
                                fontSize: "var(--size-base, 14px)",
                                fontStyle: "normal",
                                fontWeight: "400",
                                lineHeight:
                                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              }}
                            >{`3 yoe`}</span>
                            {/* name="Line 3" id="I183:11463;485:36887;485:36867" type="LINE" */}
                            <Flex
                              style={{
                                width: "1px",
                                height: "8px",
                                background:
                                  "var(--border-border-neutral-50, #6f6f6f)",
                              }}
                            >
                              {/* name="Line 3" id=I183:11463;485:36887;485:36867 type=LINE */}
                              <></>
                            </Flex>
                          </div>
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Vietnam`}</span>
                        </Flex>
                        {/* name="Skills" id="I183:11463;47:5576" type="FRAME" */}
                        <div
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "12px",
                            alignSelf: "stretch",
                          }}
                        >
                          <span
                            style={{
                              color: "var(--text-text-neutral-40, #464646)",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "700",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Skills:`}</span>
                          <span
                            style={{
                              flex: "1 0 0",
                              color: "var(--text-text-neutral-40, #464646)",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Data analysis, Sales automation, Supervising, Salesforce, Hubspot, +5 more`}</span>
                        </div>
                      </div>
                    </div>
                    {/* name="Action" id="I183:11463;47:5554" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding: "16px",
                        justifyContent: "space-between",
                        alignItems: "center",
                        alignSelf: "stretch",
                        background: "var(--neutral-gray-5, #f8f6f6)",
                      }}
                    >
                      {/* name="Status" id="I183:11463;47:5555" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                        }}
                      >
                        {/* name="Job/Quick access" id="I183:11463;47:5556" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "var(--size-size-sizexxs-6px, 6px)",
                            borderRadius: "99px",
                          }}
                        >
                          {/* name="heart" id="I183:11463;47:5556;47:5444" type="INSTANCE" */}
                          <Icon.QodeHeart
                            style={{ width: "16px", height: "16px" }}
                            {...{}}
                          />
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "500",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              textDecorationLine: "underline",
                            }}
                          >{`12 shortlisted`}</span>
                        </Flex>
                        {/* name="divider" id="I183:11463;47:5557" type="LINE" */}
                        <Flex
                          style={{
                            width: "1px",
                            height: "15px",
                            background:
                              "var(--border-border-neutral-30, #d5d5d5)",
                          }}
                        >
                          {/* name="divider" id=I183:11463;47:5557 type=LINE */}
                          <></>
                        </Flex>
                        {/* name="Job/Quick access" id="I183:11463;47:5558" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "var(--size-size-sizexxs-6px, 6px)",
                            borderRadius: "99px",
                          }}
                        >
                          {/* name="video" id="I183:11463;47:5558;47:5444" type="INSTANCE" */}
                          <Icon.QodeVideo
                            style={{ width: "16px", height: "16px" }}
                            {...{}}
                          />
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "500",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              textDecorationLine: "underline",
                            }}
                          >{`4 interviewed`}</span>
                        </Flex>
                      </div>
                      <span
                        style={{
                          color: "var(--text-text-primary-20, #1597f4)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "500",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          textDecorationLine: "underline",
                        }}
                      >{`JD`}</span>
                    </div>
                  </Flex>
                  {/* name="Job item" id="183:11464" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "420px",
                      maxWidth: "440px",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      borderRadius: "var(--border-radius-large, 12px)",
                      border:
                        "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                      background: "var(--background-bg-white, #fff)",
                    }}
                  >
                    {/* name="Wrap" id="I183:11464;47:5566" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding: "16px",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        gap: "12px",
                        alignSelf: "stretch",
                        borderBottom:
                          "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                      }}
                    >
                      {/* name="Job title" id="I183:11464;47:5567" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "12px",
                          alignSelf: "stretch",
                        }}
                      >
                        <span
                          style={{
                            maxHeight: "56px",
                            flex: "1 0 0",
                            color: "var(--text-text-neutral-50, #1d1d1d)",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-size-sizemd-20px, 20px)",
                            fontStyle: "normal",
                            fontWeight: "600",
                            lineHeight:
                              "var(--lineheight-lineheight-xl, 28px) /* 140% */",
                          }}
                        >{`Project Manager`}</span>
                        {/* name="arrow-up-right" id="I183:11464;47:5569" type="INSTANCE" */}
                        <Icon.QodeArrowUpRight
                          style={{ width: "24px", height: "24px" }}
                          {...{}}
                        />
                      </div>
                      {/* name="Wrap" id="I183:11464;485:35083" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          paddingRight: "16px",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          gap: "12px",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name="Job/Attributes" id="I183:11464;485:36887" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            padding: "4px 12px",
                            alignItems: "center",
                            gap: "12px",
                            borderRadius: "99px",
                            background: "var(--neutral-gray-5, #f8f6f6)",
                          }}
                        >
                          {/* name="Urgent" id="I183:11464;485:36887;485:36863" type="FRAME" */}
                          <div
                            style={{
                              display: "flex",
                              padding: "2px var(--size-size-sizexxs-6px, 6px)",
                              justifyContent: "center",
                              alignItems: "center",
                              gap: "10px",
                              borderRadius: "12px",
                              background: "var(--neutral-gray-90, #464646)",
                            }}
                          >
                            <span
                              style={{
                                color: "#FFF",
                                textAlign: "center",
                                fontFamily: '"SF Pro Display"',
                                fontSize: "10px",
                                fontStyle: "normal",
                                fontWeight: "600",
                                lineHeight: "normal",
                              }}
                            >{`URGENT`}</span>
                          </div>
                          {/* name="Yoe" id="I183:11464;485:36887;485:36865" type="FRAME" */}
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "12px",
                            }}
                          >
                            <span
                              style={{
                                color: "var(--text-text-neutral-50, #1d1d1d)",
                                fontFamily:
                                  'var(--family-family, "sf pro display")',
                                fontSize: "var(--size-base, 14px)",
                                fontStyle: "normal",
                                fontWeight: "400",
                                lineHeight:
                                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              }}
                            >{`3 yoe`}</span>
                            {/* name="Line 3" id="I183:11464;485:36887;485:36867" type="LINE" */}
                            <Flex
                              style={{
                                width: "1px",
                                height: "8px",
                                background:
                                  "var(--border-border-neutral-50, #6f6f6f)",
                              }}
                            >
                              {/* name="Line 3" id=I183:11464;485:36887;485:36867 type=LINE */}
                              <></>
                            </Flex>
                          </div>
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Vietnam`}</span>
                        </Flex>
                        {/* name="Skills" id="I183:11464;47:5576" type="FRAME" */}
                        <div
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "12px",
                            alignSelf: "stretch",
                          }}
                        >
                          <span
                            style={{
                              color: "var(--text-text-neutral-40, #464646)",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "700",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Skills:`}</span>
                          <span
                            style={{
                              flex: "1 0 0",
                              color: "var(--text-text-neutral-40, #464646)",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Data analysis, Sales automation, Supervising, Salesforce, Hubspot, +5 more`}</span>
                        </div>
                      </div>
                    </div>
                    {/* name="Action" id="I183:11464;47:5554" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding: "16px",
                        justifyContent: "space-between",
                        alignItems: "center",
                        alignSelf: "stretch",
                        background: "var(--neutral-gray-5, #f8f6f6)",
                      }}
                    >
                      {/* name="Status" id="I183:11464;47:5555" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                        }}
                      >
                        {/* name="Job/Quick access" id="I183:11464;47:5556" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "var(--size-size-sizexxs-6px, 6px)",
                            borderRadius: "99px",
                          }}
                        >
                          {/* name="heart" id="I183:11464;47:5556;47:5444" type="INSTANCE" */}
                          <Icon.QodeHeart
                            style={{ width: "16px", height: "16px" }}
                            {...{}}
                          />
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "500",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              textDecorationLine: "underline",
                            }}
                          >{`12 shortlisted`}</span>
                        </Flex>
                        {/* name="divider" id="I183:11464;47:5557" type="LINE" */}
                        <Flex
                          style={{
                            width: "1px",
                            height: "15px",
                            background:
                              "var(--border-border-neutral-30, #d5d5d5)",
                          }}
                        >
                          {/* name="divider" id=I183:11464;47:5557 type=LINE */}
                          <></>
                        </Flex>
                        {/* name="Job/Quick access" id="I183:11464;47:5558" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "var(--size-size-sizexxs-6px, 6px)",
                            borderRadius: "99px",
                          }}
                        >
                          {/* name="video" id="I183:11464;47:5558;47:5444" type="INSTANCE" */}
                          <Icon.QodeVideo
                            style={{ width: "16px", height: "16px" }}
                            {...{}}
                          />
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "500",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              textDecorationLine: "underline",
                            }}
                          >{`4 interviewed`}</span>
                        </Flex>
                      </div>
                      <span
                        style={{
                          color: "var(--text-text-primary-20, #1597f4)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "500",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          textDecorationLine: "underline",
                        }}
                      >{`JD`}</span>
                    </div>
                  </Flex>
                  {/* name="Job item" id="183:11465" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "420px",
                      maxWidth: "440px",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      borderRadius: "var(--border-radius-large, 12px)",
                      border:
                        "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                      background: "var(--background-bg-white, #fff)",
                    }}
                  >
                    {/* name="Wrap" id="I183:11465;47:5566" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding: "16px",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        gap: "12px",
                        alignSelf: "stretch",
                        borderBottom:
                          "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                      }}
                    >
                      {/* name="Job title" id="I183:11465;47:5567" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "12px",
                          alignSelf: "stretch",
                        }}
                      >
                        <span
                          style={{
                            maxHeight: "56px",
                            flex: "1 0 0",
                            color: "var(--text-text-neutral-50, #1d1d1d)",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-size-sizemd-20px, 20px)",
                            fontStyle: "normal",
                            fontWeight: "600",
                            lineHeight:
                              "var(--lineheight-lineheight-xl, 28px) /* 140% */",
                          }}
                        >{`Senior Software Engineer`}</span>
                        {/* name="arrow-up-right" id="I183:11465;47:5569" type="INSTANCE" */}
                        <Icon.QodeArrowUpRight
                          style={{ width: "24px", height: "24px" }}
                          {...{}}
                        />
                      </div>
                      {/* name="Wrap" id="I183:11465;485:35083" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          paddingRight: "16px",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          gap: "12px",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name="Job/Attributes" id="I183:11465;485:36887" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            padding: "4px 12px",
                            alignItems: "center",
                            gap: "12px",
                            borderRadius: "99px",
                            background: "var(--neutral-gray-5, #f8f6f6)",
                          }}
                        >
                          {/* name="Urgent" id="I183:11465;485:36887;485:36863" type="FRAME" */}
                          <div
                            style={{
                              display: "flex",
                              padding: "2px var(--size-size-sizexxs-6px, 6px)",
                              justifyContent: "center",
                              alignItems: "center",
                              gap: "10px",
                              borderRadius: "12px",
                              background: "var(--neutral-gray-90, #464646)",
                            }}
                          >
                            <span
                              style={{
                                color: "#FFF",
                                textAlign: "center",
                                fontFamily: '"SF Pro Display"',
                                fontSize: "10px",
                                fontStyle: "normal",
                                fontWeight: "600",
                                lineHeight: "normal",
                              }}
                            >{`URGENT`}</span>
                          </div>
                          {/* name="Yoe" id="I183:11465;485:36887;485:36865" type="FRAME" */}
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "12px",
                            }}
                          >
                            <span
                              style={{
                                color: "var(--text-text-neutral-50, #1d1d1d)",
                                fontFamily:
                                  'var(--family-family, "sf pro display")',
                                fontSize: "var(--size-base, 14px)",
                                fontStyle: "normal",
                                fontWeight: "400",
                                lineHeight:
                                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              }}
                            >{`3 yoe`}</span>
                            {/* name="Line 3" id="I183:11465;485:36887;485:36867" type="LINE" */}
                            <Flex
                              style={{
                                width: "1px",
                                height: "8px",
                                background:
                                  "var(--border-border-neutral-50, #6f6f6f)",
                              }}
                            >
                              {/* name="Line 3" id=I183:11465;485:36887;485:36867 type=LINE */}
                              <></>
                            </Flex>
                          </div>
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Vietnam`}</span>
                        </Flex>
                        {/* name="Skills" id="I183:11465;47:5576" type="FRAME" */}
                        <div
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "12px",
                            alignSelf: "stretch",
                          }}
                        >
                          <span
                            style={{
                              color: "var(--text-text-neutral-40, #464646)",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "700",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Skills:`}</span>
                          <span
                            style={{
                              flex: "1 0 0",
                              color: "var(--text-text-neutral-40, #464646)",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Data analysis, Sales automation, Supervising, Salesforce, Hubspot, +5 more`}</span>
                        </div>
                      </div>
                    </div>
                    {/* name="Action" id="I183:11465;47:5554" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding: "16px",
                        justifyContent: "space-between",
                        alignItems: "center",
                        alignSelf: "stretch",
                        background: "var(--neutral-gray-5, #f8f6f6)",
                      }}
                    >
                      {/* name="Status" id="I183:11465;47:5555" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                        }}
                      >
                        {/* name="Job/Quick access" id="I183:11465;47:5556" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "var(--size-size-sizexxs-6px, 6px)",
                            borderRadius: "99px",
                          }}
                        >
                          {/* name="heart" id="I183:11465;47:5556;47:5444" type="INSTANCE" */}
                          <Icon.QodeHeart
                            style={{ width: "16px", height: "16px" }}
                            {...{}}
                          />
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "500",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              textDecorationLine: "underline",
                            }}
                          >{`12 shortlisted`}</span>
                        </Flex>
                        {/* name="divider" id="I183:11465;47:5557" type="LINE" */}
                        <Flex
                          style={{
                            width: "1px",
                            height: "15px",
                            background:
                              "var(--border-border-neutral-30, #d5d5d5)",
                          }}
                        >
                          {/* name="divider" id=I183:11465;47:5557 type=LINE */}
                          <></>
                        </Flex>
                        {/* name="Job/Quick access" id="I183:11465;47:5558" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "var(--size-size-sizexxs-6px, 6px)",
                            borderRadius: "99px",
                          }}
                        >
                          {/* name="video" id="I183:11465;47:5558;47:5444" type="INSTANCE" */}
                          <Icon.QodeVideo
                            style={{ width: "16px", height: "16px" }}
                            {...{}}
                          />
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "500",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              textDecorationLine: "underline",
                            }}
                          >{`4 interviewed`}</span>
                        </Flex>
                      </div>
                      <span
                        style={{
                          color: "var(--text-text-primary-20, #1597f4)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "500",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          textDecorationLine: "underline",
                        }}
                      >{`JD`}</span>
                    </div>
                  </Flex>
                  {/* name="Job item" id="183:11466" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "420px",
                      maxWidth: "440px",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      borderRadius: "var(--border-radius-large, 12px)",
                      border:
                        "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                      background: "var(--background-bg-white, #fff)",
                    }}
                  >
                    {/* name="Wrap" id="I183:11466;47:5566" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding: "16px",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        gap: "12px",
                        alignSelf: "stretch",
                        borderBottom:
                          "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                      }}
                    >
                      {/* name="Job title" id="I183:11466;47:5567" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "12px",
                          alignSelf: "stretch",
                        }}
                      >
                        <span
                          style={{
                            maxHeight: "56px",
                            flex: "1 0 0",
                            color: "var(--text-text-neutral-50, #1d1d1d)",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-size-sizemd-20px, 20px)",
                            fontStyle: "normal",
                            fontWeight: "600",
                            lineHeight:
                              "var(--lineheight-lineheight-xl, 28px) /* 140% */",
                          }}
                        >{`Sales Supervisor`}</span>
                        {/* name="arrow-up-right" id="I183:11466;47:5569" type="INSTANCE" */}
                        <Icon.QodeArrowUpRight
                          style={{ width: "24px", height: "24px" }}
                          {...{}}
                        />
                      </div>
                      {/* name="Wrap" id="I183:11466;485:35083" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          paddingRight: "16px",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          gap: "12px",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name="Job/Attributes" id="I183:11466;485:36887" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            padding: "4px 12px",
                            alignItems: "center",
                            gap: "12px",
                            borderRadius: "99px",
                            background: "var(--neutral-gray-5, #f8f6f6)",
                          }}
                        >
                          {/* name="Urgent" id="I183:11466;485:36887;485:36863" type="FRAME" */}
                          <div
                            style={{
                              display: "flex",
                              padding: "2px var(--size-size-sizexxs-6px, 6px)",
                              justifyContent: "center",
                              alignItems: "center",
                              gap: "10px",
                              borderRadius: "12px",
                              background: "var(--neutral-gray-90, #464646)",
                            }}
                          >
                            <span
                              style={{
                                color: "#FFF",
                                textAlign: "center",
                                fontFamily: '"SF Pro Display"',
                                fontSize: "10px",
                                fontStyle: "normal",
                                fontWeight: "600",
                                lineHeight: "normal",
                              }}
                            >{`URGENT`}</span>
                          </div>
                          {/* name="Yoe" id="I183:11466;485:36887;485:36865" type="FRAME" */}
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "12px",
                            }}
                          >
                            <span
                              style={{
                                color: "var(--text-text-neutral-50, #1d1d1d)",
                                fontFamily:
                                  'var(--family-family, "sf pro display")',
                                fontSize: "var(--size-base, 14px)",
                                fontStyle: "normal",
                                fontWeight: "400",
                                lineHeight:
                                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              }}
                            >{`3 yoe`}</span>
                            {/* name="Line 3" id="I183:11466;485:36887;485:36867" type="LINE" */}
                            <Flex
                              style={{
                                width: "1px",
                                height: "8px",
                                background:
                                  "var(--border-border-neutral-50, #6f6f6f)",
                              }}
                            >
                              {/* name="Line 3" id=I183:11466;485:36887;485:36867 type=LINE */}
                              <></>
                            </Flex>
                          </div>
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Vietnam`}</span>
                        </Flex>
                        {/* name="Skills" id="I183:11466;47:5576" type="FRAME" */}
                        <div
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "12px",
                            alignSelf: "stretch",
                          }}
                        >
                          <span
                            style={{
                              color: "var(--text-text-neutral-40, #464646)",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "700",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Skills:`}</span>
                          <span
                            style={{
                              flex: "1 0 0",
                              color: "var(--text-text-neutral-40, #464646)",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Data analysis, Sales automation, Supervising, Salesforce, Hubspot, +5 more`}</span>
                        </div>
                      </div>
                    </div>
                    {/* name="Action" id="I183:11466;47:5554" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding: "16px",
                        justifyContent: "space-between",
                        alignItems: "center",
                        alignSelf: "stretch",
                        background: "var(--neutral-gray-5, #f8f6f6)",
                      }}
                    >
                      {/* name="Status" id="I183:11466;47:5555" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                        }}
                      >
                        {/* name="Job/Quick access" id="I183:11466;47:5556" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "var(--size-size-sizexxs-6px, 6px)",
                            borderRadius: "99px",
                          }}
                        >
                          {/* name="heart" id="I183:11466;47:5556;47:5444" type="INSTANCE" */}
                          <Icon.QodeHeart
                            style={{ width: "16px", height: "16px" }}
                            {...{}}
                          />
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "500",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              textDecorationLine: "underline",
                            }}
                          >{`12 shortlisted`}</span>
                        </Flex>
                        {/* name="divider" id="I183:11466;47:5557" type="LINE" */}
                        <Flex
                          style={{
                            width: "1px",
                            height: "15px",
                            background:
                              "var(--border-border-neutral-30, #d5d5d5)",
                          }}
                        >
                          {/* name="divider" id=I183:11466;47:5557 type=LINE */}
                          <></>
                        </Flex>
                        {/* name="Job/Quick access" id="I183:11466;47:5558" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "var(--size-size-sizexxs-6px, 6px)",
                            borderRadius: "99px",
                          }}
                        >
                          {/* name="video" id="I183:11466;47:5558;47:5444" type="INSTANCE" */}
                          <Icon.QodeVideo
                            style={{ width: "16px", height: "16px" }}
                            {...{}}
                          />
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "500",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              textDecorationLine: "underline",
                            }}
                          >{`4 interviewed`}</span>
                        </Flex>
                      </div>
                      <span
                        style={{
                          color: "var(--text-text-primary-20, #1597f4)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "500",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          textDecorationLine: "underline",
                        }}
                      >{`JD`}</span>
                    </div>
                  </Flex>
                  {/* name="Job item" id="183:11467" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "420px",
                      maxWidth: "440px",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      borderRadius: "var(--border-radius-large, 12px)",
                      border:
                        "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                      background: "var(--background-bg-white, #fff)",
                    }}
                  >
                    {/* name="Wrap" id="I183:11467;47:5566" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding: "16px",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        gap: "12px",
                        alignSelf: "stretch",
                        borderBottom:
                          "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                      }}
                    >
                      {/* name="Job title" id="I183:11467;47:5567" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "12px",
                          alignSelf: "stretch",
                        }}
                      >
                        <span
                          style={{
                            maxHeight: "56px",
                            flex: "1 0 0",
                            color: "var(--text-text-neutral-50, #1d1d1d)",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-size-sizemd-20px, 20px)",
                            fontStyle: "normal",
                            fontWeight: "600",
                            lineHeight:
                              "var(--lineheight-lineheight-xl, 28px) /* 140% */",
                          }}
                        >{`IT Help desk`}</span>
                        {/* name="arrow-up-right" id="I183:11467;47:5569" type="INSTANCE" */}
                        <Icon.QodeArrowUpRight
                          style={{ width: "24px", height: "24px" }}
                          {...{}}
                        />
                      </div>
                      {/* name="Wrap" id="I183:11467;485:35083" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          paddingRight: "16px",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          gap: "12px",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name="Job/Attributes" id="I183:11467;485:36887" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            padding: "4px 12px",
                            alignItems: "center",
                            gap: "12px",
                            borderRadius: "99px",
                            background: "var(--neutral-gray-5, #f8f6f6)",
                          }}
                        >
                          {/* name="Urgent" id="I183:11467;485:36887;485:36863" type="FRAME" */}
                          <div
                            style={{
                              display: "flex",
                              padding: "2px var(--size-size-sizexxs-6px, 6px)",
                              justifyContent: "center",
                              alignItems: "center",
                              gap: "10px",
                              borderRadius: "12px",
                              background: "var(--neutral-gray-90, #464646)",
                            }}
                          >
                            <span
                              style={{
                                color: "#FFF",
                                textAlign: "center",
                                fontFamily: '"SF Pro Display"',
                                fontSize: "10px",
                                fontStyle: "normal",
                                fontWeight: "600",
                                lineHeight: "normal",
                              }}
                            >{`URGENT`}</span>
                          </div>
                          {/* name="Yoe" id="I183:11467;485:36887;485:36865" type="FRAME" */}
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "12px",
                            }}
                          >
                            <span
                              style={{
                                color: "var(--text-text-neutral-50, #1d1d1d)",
                                fontFamily:
                                  'var(--family-family, "sf pro display")',
                                fontSize: "var(--size-base, 14px)",
                                fontStyle: "normal",
                                fontWeight: "400",
                                lineHeight:
                                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              }}
                            >{`3 yoe`}</span>
                            {/* name="Line 3" id="I183:11467;485:36887;485:36867" type="LINE" */}
                            <Flex
                              style={{
                                width: "1px",
                                height: "8px",
                                background:
                                  "var(--border-border-neutral-50, #6f6f6f)",
                              }}
                            >
                              {/* name="Line 3" id=I183:11467;485:36887;485:36867 type=LINE */}
                              <></>
                            </Flex>
                          </div>
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Vietnam`}</span>
                        </Flex>
                        {/* name="Skills" id="I183:11467;47:5576" type="FRAME" */}
                        <div
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "12px",
                            alignSelf: "stretch",
                          }}
                        >
                          <span
                            style={{
                              color: "var(--text-text-neutral-40, #464646)",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "700",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Skills:`}</span>
                          <span
                            style={{
                              flex: "1 0 0",
                              color: "var(--text-text-neutral-40, #464646)",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Data analysis, Sales automation, Supervising, Salesforce, Hubspot, +5 more`}</span>
                        </div>
                      </div>
                    </div>
                    {/* name="Action" id="I183:11467;47:5554" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding: "16px",
                        justifyContent: "space-between",
                        alignItems: "center",
                        alignSelf: "stretch",
                        background: "var(--neutral-gray-5, #f8f6f6)",
                      }}
                    >
                      {/* name="Status" id="I183:11467;47:5555" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                        }}
                      >
                        {/* name="Job/Quick access" id="I183:11467;47:5556" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "var(--size-size-sizexxs-6px, 6px)",
                            borderRadius: "99px",
                          }}
                        >
                          {/* name="heart" id="I183:11467;47:5556;47:5444" type="INSTANCE" */}
                          <Icon.QodeHeart
                            style={{ width: "16px", height: "16px" }}
                            {...{}}
                          />
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "500",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              textDecorationLine: "underline",
                            }}
                          >{`12 shortlisted`}</span>
                        </Flex>
                        {/* name="divider" id="I183:11467;47:5557" type="LINE" */}
                        <Flex
                          style={{
                            width: "1px",
                            height: "15px",
                            background:
                              "var(--border-border-neutral-30, #d5d5d5)",
                          }}
                        >
                          {/* name="divider" id=I183:11467;47:5557 type=LINE */}
                          <></>
                        </Flex>
                        {/* name="Job/Quick access" id="I183:11467;47:5558" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "var(--size-size-sizexxs-6px, 6px)",
                            borderRadius: "99px",
                          }}
                        >
                          {/* name="video" id="I183:11467;47:5558;47:5444" type="INSTANCE" */}
                          <Icon.QodeVideo
                            style={{ width: "16px", height: "16px" }}
                            {...{}}
                          />
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "500",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              textDecorationLine: "underline",
                            }}
                          >{`4 interviewed`}</span>
                        </Flex>
                      </div>
                      <span
                        style={{
                          color: "var(--text-text-primary-20, #1597f4)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "500",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          textDecorationLine: "underline",
                        }}
                      >{`JD`}</span>
                    </div>
                  </Flex>
                  {/* name="Job item" id="183:11468" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "420px",
                      maxWidth: "440px",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      borderRadius: "var(--border-radius-large, 12px)",
                      border:
                        "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                      background: "var(--background-bg-white, #fff)",
                    }}
                  >
                    {/* name="Wrap" id="I183:11468;47:5566" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding: "16px",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        gap: "12px",
                        alignSelf: "stretch",
                        borderBottom:
                          "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                      }}
                    >
                      {/* name="Job title" id="I183:11468;47:5567" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "12px",
                          alignSelf: "stretch",
                        }}
                      >
                        <span
                          style={{
                            maxHeight: "56px",
                            flex: "1 0 0",
                            color: "var(--text-text-neutral-50, #1d1d1d)",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-size-sizemd-20px, 20px)",
                            fontStyle: "normal",
                            fontWeight: "600",
                            lineHeight:
                              "var(--lineheight-lineheight-xl, 28px) /* 140% */",
                          }}
                        >{`Mobile developer (iOS)`}</span>
                        {/* name="arrow-up-right" id="I183:11468;47:5569" type="INSTANCE" */}
                        <Icon.QodeArrowUpRight
                          style={{ width: "24px", height: "24px" }}
                          {...{}}
                        />
                      </div>
                      {/* name="Wrap" id="I183:11468;485:35083" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          paddingRight: "16px",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          gap: "12px",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name="Job/Attributes" id="I183:11468;485:36887" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            padding: "4px 12px",
                            alignItems: "center",
                            gap: "12px",
                            borderRadius: "99px",
                            background: "var(--neutral-gray-5, #f8f6f6)",
                          }}
                        >
                          {/* name="Urgent" id="I183:11468;485:36887;485:36863" type="FRAME" */}
                          <div
                            style={{
                              display: "flex",
                              padding: "2px var(--size-size-sizexxs-6px, 6px)",
                              justifyContent: "center",
                              alignItems: "center",
                              gap: "10px",
                              borderRadius: "12px",
                              background: "var(--neutral-gray-90, #464646)",
                            }}
                          >
                            <span
                              style={{
                                color: "#FFF",
                                textAlign: "center",
                                fontFamily: '"SF Pro Display"',
                                fontSize: "10px",
                                fontStyle: "normal",
                                fontWeight: "600",
                                lineHeight: "normal",
                              }}
                            >{`URGENT`}</span>
                          </div>
                          {/* name="Yoe" id="I183:11468;485:36887;485:36865" type="FRAME" */}
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "12px",
                            }}
                          >
                            <span
                              style={{
                                color: "var(--text-text-neutral-50, #1d1d1d)",
                                fontFamily:
                                  'var(--family-family, "sf pro display")',
                                fontSize: "var(--size-base, 14px)",
                                fontStyle: "normal",
                                fontWeight: "400",
                                lineHeight:
                                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              }}
                            >{`3 yoe`}</span>
                            {/* name="Line 3" id="I183:11468;485:36887;485:36867" type="LINE" */}
                            <Flex
                              style={{
                                width: "1px",
                                height: "8px",
                                background:
                                  "var(--border-border-neutral-50, #6f6f6f)",
                              }}
                            >
                              {/* name="Line 3" id=I183:11468;485:36887;485:36867 type=LINE */}
                              <></>
                            </Flex>
                          </div>
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Vietnam`}</span>
                        </Flex>
                        {/* name="Skills" id="I183:11468;47:5576" type="FRAME" */}
                        <div
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "12px",
                            alignSelf: "stretch",
                          }}
                        >
                          <span
                            style={{
                              color: "var(--text-text-neutral-40, #464646)",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "700",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Skills:`}</span>
                          <span
                            style={{
                              flex: "1 0 0",
                              color: "var(--text-text-neutral-40, #464646)",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Data analysis, Sales automation, Supervising, Salesforce, Hubspot, +5 more`}</span>
                        </div>
                      </div>
                    </div>
                    {/* name="Action" id="I183:11468;47:5554" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding: "16px",
                        justifyContent: "space-between",
                        alignItems: "center",
                        alignSelf: "stretch",
                        background: "var(--neutral-gray-5, #f8f6f6)",
                      }}
                    >
                      {/* name="Status" id="I183:11468;47:5555" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                        }}
                      >
                        {/* name="Job/Quick access" id="I183:11468;47:5556" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "var(--size-size-sizexxs-6px, 6px)",
                            borderRadius: "99px",
                          }}
                        >
                          {/* name="heart" id="I183:11468;47:5556;47:5444" type="INSTANCE" */}
                          <Icon.QodeHeart
                            style={{ width: "16px", height: "16px" }}
                            {...{}}
                          />
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "500",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              textDecorationLine: "underline",
                            }}
                          >{`12 shortlisted`}</span>
                        </Flex>
                        {/* name="divider" id="I183:11468;47:5557" type="LINE" */}
                        <Flex
                          style={{
                            width: "1px",
                            height: "15px",
                            background:
                              "var(--border-border-neutral-30, #d5d5d5)",
                          }}
                        >
                          {/* name="divider" id=I183:11468;47:5557 type=LINE */}
                          <></>
                        </Flex>
                        {/* name="Job/Quick access" id="I183:11468;47:5558" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "var(--size-size-sizexxs-6px, 6px)",
                            borderRadius: "99px",
                          }}
                        >
                          {/* name="video" id="I183:11468;47:5558;47:5444" type="INSTANCE" */}
                          <Icon.QodeVideo
                            style={{ width: "16px", height: "16px" }}
                            {...{}}
                          />
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "500",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              textDecorationLine: "underline",
                            }}
                          >{`4 interviewed`}</span>
                        </Flex>
                      </div>
                      <span
                        style={{
                          color: "var(--text-text-primary-20, #1597f4)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "500",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          textDecorationLine: "underline",
                        }}
                      >{`JD`}</span>
                    </div>
                  </Flex>
                  {/* name="Job item" id="183:11469" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "420px",
                      maxWidth: "440px",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      borderRadius: "var(--border-radius-large, 12px)",
                      border:
                        "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                      background: "var(--background-bg-white, #fff)",
                    }}
                  >
                    {/* name="Wrap" id="I183:11469;47:5566" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding: "16px",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        gap: "12px",
                        alignSelf: "stretch",
                        borderBottom:
                          "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                      }}
                    >
                      {/* name="Job title" id="I183:11469;47:5567" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "12px",
                          alignSelf: "stretch",
                        }}
                      >
                        <span
                          style={{
                            maxHeight: "56px",
                            flex: "1 0 0",
                            color: "var(--text-text-neutral-50, #1d1d1d)",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-size-sizemd-20px, 20px)",
                            fontStyle: "normal",
                            fontWeight: "600",
                            lineHeight:
                              "var(--lineheight-lineheight-xl, 28px) /* 140% */",
                          }}
                        >{`Senior Software Engineer`}</span>
                        {/* name="arrow-up-right" id="I183:11469;47:5569" type="INSTANCE" */}
                        <Icon.QodeArrowUpRight
                          style={{ width: "24px", height: "24px" }}
                          {...{}}
                        />
                      </div>
                      {/* name="Wrap" id="I183:11469;485:35083" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          paddingRight: "16px",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          gap: "12px",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name="Job/Attributes" id="I183:11469;485:36887" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            padding: "4px 12px",
                            alignItems: "center",
                            gap: "12px",
                            borderRadius: "99px",
                            background: "var(--neutral-gray-5, #f8f6f6)",
                          }}
                        >
                          {/* name="Urgent" id="I183:11469;485:36887;485:36863" type="FRAME" */}
                          <div
                            style={{
                              display: "flex",
                              padding: "2px var(--size-size-sizexxs-6px, 6px)",
                              justifyContent: "center",
                              alignItems: "center",
                              gap: "10px",
                              borderRadius: "12px",
                              background: "var(--neutral-gray-90, #464646)",
                            }}
                          >
                            <span
                              style={{
                                color: "#FFF",
                                textAlign: "center",
                                fontFamily: '"SF Pro Display"',
                                fontSize: "10px",
                                fontStyle: "normal",
                                fontWeight: "600",
                                lineHeight: "normal",
                              }}
                            >{`URGENT`}</span>
                          </div>
                          {/* name="Yoe" id="I183:11469;485:36887;485:36865" type="FRAME" */}
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "12px",
                            }}
                          >
                            <span
                              style={{
                                color: "var(--text-text-neutral-50, #1d1d1d)",
                                fontFamily:
                                  'var(--family-family, "sf pro display")',
                                fontSize: "var(--size-base, 14px)",
                                fontStyle: "normal",
                                fontWeight: "400",
                                lineHeight:
                                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              }}
                            >{`3 yoe`}</span>
                            {/* name="Line 3" id="I183:11469;485:36887;485:36867" type="LINE" */}
                            <Flex
                              style={{
                                width: "1px",
                                height: "8px",
                                background:
                                  "var(--border-border-neutral-50, #6f6f6f)",
                              }}
                            >
                              {/* name="Line 3" id=I183:11469;485:36887;485:36867 type=LINE */}
                              <></>
                            </Flex>
                          </div>
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Vietnam`}</span>
                        </Flex>
                        {/* name="Skills" id="I183:11469;47:5576" type="FRAME" */}
                        <div
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "12px",
                            alignSelf: "stretch",
                          }}
                        >
                          <span
                            style={{
                              color: "var(--text-text-neutral-40, #464646)",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "700",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Skills:`}</span>
                          <span
                            style={{
                              flex: "1 0 0",
                              color: "var(--text-text-neutral-40, #464646)",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Data analysis, Sales automation, Supervising, Salesforce, Hubspot, +5 more`}</span>
                        </div>
                      </div>
                    </div>
                    {/* name="Action" id="I183:11469;47:5554" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding: "16px",
                        justifyContent: "space-between",
                        alignItems: "center",
                        alignSelf: "stretch",
                        background: "var(--neutral-gray-5, #f8f6f6)",
                      }}
                    >
                      {/* name="Status" id="I183:11469;47:5555" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                        }}
                      >
                        {/* name="Job/Quick access" id="I183:11469;47:5556" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "var(--size-size-sizexxs-6px, 6px)",
                            borderRadius: "99px",
                          }}
                        >
                          {/* name="heart" id="I183:11469;47:5556;47:5444" type="INSTANCE" */}
                          <Icon.QodeHeart
                            style={{ width: "16px", height: "16px" }}
                            {...{}}
                          />
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "500",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              textDecorationLine: "underline",
                            }}
                          >{`12 shortlisted`}</span>
                        </Flex>
                        {/* name="divider" id="I183:11469;47:5557" type="LINE" */}
                        <Flex
                          style={{
                            width: "1px",
                            height: "15px",
                            background:
                              "var(--border-border-neutral-30, #d5d5d5)",
                          }}
                        >
                          {/* name="divider" id=I183:11469;47:5557 type=LINE */}
                          <></>
                        </Flex>
                        {/* name="Job/Quick access" id="I183:11469;47:5558" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "var(--size-size-sizexxs-6px, 6px)",
                            borderRadius: "99px",
                          }}
                        >
                          {/* name="video" id="I183:11469;47:5558;47:5444" type="INSTANCE" */}
                          <Icon.QodeVideo
                            style={{ width: "16px", height: "16px" }}
                            {...{}}
                          />
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "500",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              textDecorationLine: "underline",
                            }}
                          >{`4 interviewed`}</span>
                        </Flex>
                      </div>
                      <span
                        style={{
                          color: "var(--text-text-primary-20, #1597f4)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "500",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          textDecorationLine: "underline",
                        }}
                      >{`JD`}</span>
                    </div>
                  </Flex>
                  {/* name="Job item" id="183:11470" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "420px",
                      maxWidth: "440px",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      borderRadius: "var(--border-radius-large, 12px)",
                      border:
                        "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                      background: "var(--background-bg-white, #fff)",
                    }}
                  >
                    {/* name="Wrap" id="I183:11470;47:5566" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding: "16px",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        gap: "12px",
                        alignSelf: "stretch",
                        borderBottom:
                          "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                      }}
                    >
                      {/* name="Job title" id="I183:11470;47:5567" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "12px",
                          alignSelf: "stretch",
                        }}
                      >
                        <span
                          style={{
                            maxHeight: "56px",
                            flex: "1 0 0",
                            color: "var(--text-text-neutral-50, #1d1d1d)",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-size-sizemd-20px, 20px)",
                            fontStyle: "normal",
                            fontWeight: "600",
                            lineHeight:
                              "var(--lineheight-lineheight-xl, 28px) /* 140% */",
                          }}
                        >{`Sales Consultant`}</span>
                        {/* name="arrow-up-right" id="I183:11470;47:5569" type="INSTANCE" */}
                        <Icon.QodeArrowUpRight
                          style={{ width: "24px", height: "24px" }}
                          {...{}}
                        />
                      </div>
                      {/* name="Wrap" id="I183:11470;485:35083" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          paddingRight: "16px",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          gap: "12px",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name="Job/Attributes" id="I183:11470;485:36887" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            padding: "4px 12px",
                            alignItems: "center",
                            gap: "12px",
                            borderRadius: "99px",
                            background: "var(--neutral-gray-5, #f8f6f6)",
                          }}
                        >
                          {/* name="Urgent" id="I183:11470;485:36887;485:36863" type="FRAME" */}
                          <div
                            style={{
                              display: "flex",
                              padding: "2px var(--size-size-sizexxs-6px, 6px)",
                              justifyContent: "center",
                              alignItems: "center",
                              gap: "10px",
                              borderRadius: "12px",
                              background: "var(--neutral-gray-90, #464646)",
                            }}
                          >
                            <span
                              style={{
                                color: "#FFF",
                                textAlign: "center",
                                fontFamily: '"SF Pro Display"',
                                fontSize: "10px",
                                fontStyle: "normal",
                                fontWeight: "600",
                                lineHeight: "normal",
                              }}
                            >{`URGENT`}</span>
                          </div>
                          {/* name="Yoe" id="I183:11470;485:36887;485:36865" type="FRAME" */}
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "12px",
                            }}
                          >
                            <span
                              style={{
                                color: "var(--text-text-neutral-50, #1d1d1d)",
                                fontFamily:
                                  'var(--family-family, "sf pro display")',
                                fontSize: "var(--size-base, 14px)",
                                fontStyle: "normal",
                                fontWeight: "400",
                                lineHeight:
                                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              }}
                            >{`3 yoe`}</span>
                            {/* name="Line 3" id="I183:11470;485:36887;485:36867" type="LINE" */}
                            <Flex
                              style={{
                                width: "1px",
                                height: "8px",
                                background:
                                  "var(--border-border-neutral-50, #6f6f6f)",
                              }}
                            >
                              {/* name="Line 3" id=I183:11470;485:36887;485:36867 type=LINE */}
                              <></>
                            </Flex>
                          </div>
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Vietnam`}</span>
                        </Flex>
                        {/* name="Skills" id="I183:11470;47:5576" type="FRAME" */}
                        <div
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "12px",
                            alignSelf: "stretch",
                          }}
                        >
                          <span
                            style={{
                              color: "var(--text-text-neutral-40, #464646)",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "700",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Skills:`}</span>
                          <span
                            style={{
                              flex: "1 0 0",
                              color: "var(--text-text-neutral-40, #464646)",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Data analysis, Sales automation, Supervising, Salesforce, Hubspot, +5 more`}</span>
                        </div>
                      </div>
                    </div>
                    {/* name="Action" id="I183:11470;47:5554" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding: "16px",
                        justifyContent: "space-between",
                        alignItems: "center",
                        alignSelf: "stretch",
                        background: "var(--neutral-gray-5, #f8f6f6)",
                      }}
                    >
                      {/* name="Status" id="I183:11470;47:5555" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                        }}
                      >
                        {/* name="Job/Quick access" id="I183:11470;47:5556" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "var(--size-size-sizexxs-6px, 6px)",
                            borderRadius: "99px",
                          }}
                        >
                          {/* name="heart" id="I183:11470;47:5556;47:5444" type="INSTANCE" */}
                          <Icon.QodeHeart
                            style={{ width: "16px", height: "16px" }}
                            {...{}}
                          />
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "500",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              textDecorationLine: "underline",
                            }}
                          >{`12 shortlisted`}</span>
                        </Flex>
                        {/* name="divider" id="I183:11470;47:5557" type="LINE" */}
                        <Flex
                          style={{
                            width: "1px",
                            height: "15px",
                            background:
                              "var(--border-border-neutral-30, #d5d5d5)",
                          }}
                        >
                          {/* name="divider" id=I183:11470;47:5557 type=LINE */}
                          <></>
                        </Flex>
                        {/* name="Job/Quick access" id="I183:11470;47:5558" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "var(--size-size-sizexxs-6px, 6px)",
                            borderRadius: "99px",
                          }}
                        >
                          {/* name="video" id="I183:11470;47:5558;47:5444" type="INSTANCE" */}
                          <Icon.QodeVideo
                            style={{ width: "16px", height: "16px" }}
                            {...{}}
                          />
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "500",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              textDecorationLine: "underline",
                            }}
                          >{`4 interviewed`}</span>
                        </Flex>
                      </div>
                      <span
                        style={{
                          color: "var(--text-text-primary-20, #1597f4)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "500",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          textDecorationLine: "underline",
                        }}
                      >{`JD`}</span>
                    </div>
                  </Flex>
                  {/* name="Job item" id="183:11471" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "420px",
                      maxWidth: "440px",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      borderRadius: "var(--border-radius-large, 12px)",
                      border:
                        "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                      background: "var(--background-bg-white, #fff)",
                    }}
                  >
                    {/* name="Wrap" id="I183:11471;47:5566" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding: "16px",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        gap: "12px",
                        alignSelf: "stretch",
                        borderBottom:
                          "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                      }}
                    >
                      {/* name="Job title" id="I183:11471;47:5567" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "12px",
                          alignSelf: "stretch",
                        }}
                      >
                        <span
                          style={{
                            maxHeight: "56px",
                            flex: "1 0 0",
                            color: "var(--text-text-neutral-50, #1d1d1d)",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-size-sizemd-20px, 20px)",
                            fontStyle: "normal",
                            fontWeight: "600",
                            lineHeight:
                              "var(--lineheight-lineheight-xl, 28px) /* 140% */",
                          }}
                        >{`Sales Consultant`}</span>
                        {/* name="arrow-up-right" id="I183:11471;47:5569" type="INSTANCE" */}
                        <Icon.QodeArrowUpRight
                          style={{ width: "24px", height: "24px" }}
                          {...{}}
                        />
                      </div>
                      {/* name="Wrap" id="I183:11471;485:35083" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          paddingRight: "16px",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          gap: "12px",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name="Job/Attributes" id="I183:11471;485:36887" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            padding: "4px 12px",
                            alignItems: "center",
                            gap: "12px",
                            borderRadius: "99px",
                            background: "var(--neutral-gray-5, #f8f6f6)",
                          }}
                        >
                          {/* name="Urgent" id="I183:11471;485:36887;485:36863" type="FRAME" */}
                          <div
                            style={{
                              display: "flex",
                              padding: "2px var(--size-size-sizexxs-6px, 6px)",
                              justifyContent: "center",
                              alignItems: "center",
                              gap: "10px",
                              borderRadius: "12px",
                              background: "var(--neutral-gray-90, #464646)",
                            }}
                          >
                            <span
                              style={{
                                color: "#FFF",
                                textAlign: "center",
                                fontFamily: '"SF Pro Display"',
                                fontSize: "10px",
                                fontStyle: "normal",
                                fontWeight: "600",
                                lineHeight: "normal",
                              }}
                            >{`URGENT`}</span>
                          </div>
                          {/* name="Yoe" id="I183:11471;485:36887;485:36865" type="FRAME" */}
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "12px",
                            }}
                          >
                            <span
                              style={{
                                color: "var(--text-text-neutral-50, #1d1d1d)",
                                fontFamily:
                                  'var(--family-family, "sf pro display")',
                                fontSize: "var(--size-base, 14px)",
                                fontStyle: "normal",
                                fontWeight: "400",
                                lineHeight:
                                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              }}
                            >{`3 yoe`}</span>
                            {/* name="Line 3" id="I183:11471;485:36887;485:36867" type="LINE" */}
                            <Flex
                              style={{
                                width: "1px",
                                height: "8px",
                                background:
                                  "var(--border-border-neutral-50, #6f6f6f)",
                              }}
                            >
                              {/* name="Line 3" id=I183:11471;485:36887;485:36867 type=LINE */}
                              <></>
                            </Flex>
                          </div>
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Vietnam`}</span>
                        </Flex>
                        {/* name="Skills" id="I183:11471;47:5576" type="FRAME" */}
                        <div
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "12px",
                            alignSelf: "stretch",
                          }}
                        >
                          <span
                            style={{
                              color: "var(--text-text-neutral-40, #464646)",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "700",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Skills:`}</span>
                          <span
                            style={{
                              flex: "1 0 0",
                              color: "var(--text-text-neutral-40, #464646)",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Data analysis, Sales automation, Supervising, Salesforce, Hubspot, +5 more`}</span>
                        </div>
                      </div>
                    </div>
                    {/* name="Action" id="I183:11471;47:5554" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding: "16px",
                        justifyContent: "space-between",
                        alignItems: "center",
                        alignSelf: "stretch",
                        background: "var(--neutral-gray-5, #f8f6f6)",
                      }}
                    >
                      {/* name="Status" id="I183:11471;47:5555" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                        }}
                      >
                        {/* name="Job/Quick access" id="I183:11471;47:5556" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "var(--size-size-sizexxs-6px, 6px)",
                            borderRadius: "99px",
                          }}
                        >
                          {/* name="heart" id="I183:11471;47:5556;47:5444" type="INSTANCE" */}
                          <Icon.QodeHeart
                            style={{ width: "16px", height: "16px" }}
                            {...{}}
                          />
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "500",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              textDecorationLine: "underline",
                            }}
                          >{`12 shortlisted`}</span>
                        </Flex>
                        {/* name="divider" id="I183:11471;47:5557" type="LINE" */}
                        <Flex
                          style={{
                            width: "1px",
                            height: "15px",
                            background:
                              "var(--border-border-neutral-30, #d5d5d5)",
                          }}
                        >
                          {/* name="divider" id=I183:11471;47:5557 type=LINE */}
                          <></>
                        </Flex>
                        {/* name="Job/Quick access" id="I183:11471;47:5558" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "var(--size-size-sizexxs-6px, 6px)",
                            borderRadius: "99px",
                          }}
                        >
                          {/* name="video" id="I183:11471;47:5558;47:5444" type="INSTANCE" */}
                          <Icon.QodeVideo
                            style={{ width: "16px", height: "16px" }}
                            {...{}}
                          />
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "500",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              textDecorationLine: "underline",
                            }}
                          >{`4 interviewed`}</span>
                        </Flex>
                      </div>
                      <span
                        style={{
                          color: "var(--text-text-primary-20, #1597f4)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "500",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          textDecorationLine: "underline",
                        }}
                      >{`JD`}</span>
                    </div>
                  </Flex>
                  {/* name="Job item" id="183:11472" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "420px",
                      maxWidth: "440px",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      borderRadius: "var(--border-radius-large, 12px)",
                      border:
                        "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                      background: "var(--background-bg-white, #fff)",
                    }}
                  >
                    {/* name="Wrap" id="I183:11472;47:5566" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding: "16px",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        gap: "12px",
                        alignSelf: "stretch",
                        borderBottom:
                          "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                      }}
                    >
                      {/* name="Job title" id="I183:11472;47:5567" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "12px",
                          alignSelf: "stretch",
                        }}
                      >
                        <span
                          style={{
                            maxHeight: "56px",
                            flex: "1 0 0",
                            color: "var(--text-text-neutral-50, #1d1d1d)",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-size-sizemd-20px, 20px)",
                            fontStyle: "normal",
                            fontWeight: "600",
                            lineHeight:
                              "var(--lineheight-lineheight-xl, 28px) /* 140% */",
                          }}
                        >{`Sales Consultant`}</span>
                        {/* name="arrow-up-right" id="I183:11472;47:5569" type="INSTANCE" */}
                        <Icon.QodeArrowUpRight
                          style={{ width: "24px", height: "24px" }}
                          {...{}}
                        />
                      </div>
                      {/* name="Wrap" id="I183:11472;485:35083" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          paddingRight: "16px",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          gap: "12px",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name="Job/Attributes" id="I183:11472;485:36887" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            padding: "4px 12px",
                            alignItems: "center",
                            gap: "12px",
                            borderRadius: "99px",
                            background: "var(--neutral-gray-5, #f8f6f6)",
                          }}
                        >
                          {/* name="Urgent" id="I183:11472;485:36887;485:36863" type="FRAME" */}
                          <div
                            style={{
                              display: "flex",
                              padding: "2px var(--size-size-sizexxs-6px, 6px)",
                              justifyContent: "center",
                              alignItems: "center",
                              gap: "10px",
                              borderRadius: "12px",
                              background: "var(--neutral-gray-90, #464646)",
                            }}
                          >
                            <span
                              style={{
                                color: "#FFF",
                                textAlign: "center",
                                fontFamily: '"SF Pro Display"',
                                fontSize: "10px",
                                fontStyle: "normal",
                                fontWeight: "600",
                                lineHeight: "normal",
                              }}
                            >{`URGENT`}</span>
                          </div>
                          {/* name="Yoe" id="I183:11472;485:36887;485:36865" type="FRAME" */}
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "12px",
                            }}
                          >
                            <span
                              style={{
                                color: "var(--text-text-neutral-50, #1d1d1d)",
                                fontFamily:
                                  'var(--family-family, "sf pro display")',
                                fontSize: "var(--size-base, 14px)",
                                fontStyle: "normal",
                                fontWeight: "400",
                                lineHeight:
                                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              }}
                            >{`3 yoe`}</span>
                            {/* name="Line 3" id="I183:11472;485:36887;485:36867" type="LINE" */}
                            <Flex
                              style={{
                                width: "1px",
                                height: "8px",
                                background:
                                  "var(--border-border-neutral-50, #6f6f6f)",
                              }}
                            >
                              {/* name="Line 3" id=I183:11472;485:36887;485:36867 type=LINE */}
                              <></>
                            </Flex>
                          </div>
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Vietnam`}</span>
                        </Flex>
                        {/* name="Skills" id="I183:11472;47:5576" type="FRAME" */}
                        <div
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "12px",
                            alignSelf: "stretch",
                          }}
                        >
                          <span
                            style={{
                              color: "var(--text-text-neutral-40, #464646)",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "700",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Skills:`}</span>
                          <span
                            style={{
                              flex: "1 0 0",
                              color: "var(--text-text-neutral-40, #464646)",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Data analysis, Sales automation, Supervising, Salesforce, Hubspot, +5 more`}</span>
                        </div>
                      </div>
                    </div>
                    {/* name="Action" id="I183:11472;47:5554" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding: "16px",
                        justifyContent: "space-between",
                        alignItems: "center",
                        alignSelf: "stretch",
                        background: "var(--neutral-gray-5, #f8f6f6)",
                      }}
                    >
                      {/* name="Status" id="I183:11472;47:5555" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                        }}
                      >
                        {/* name="Job/Quick access" id="I183:11472;47:5556" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "var(--size-size-sizexxs-6px, 6px)",
                            borderRadius: "99px",
                          }}
                        >
                          {/* name="heart" id="I183:11472;47:5556;47:5444" type="INSTANCE" */}
                          <Icon.QodeHeart
                            style={{ width: "16px", height: "16px" }}
                            {...{}}
                          />
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "500",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              textDecorationLine: "underline",
                            }}
                          >{`12 shortlisted`}</span>
                        </Flex>
                        {/* name="divider" id="I183:11472;47:5557" type="LINE" */}
                        <Flex
                          style={{
                            width: "1px",
                            height: "15px",
                            background:
                              "var(--border-border-neutral-30, #d5d5d5)",
                          }}
                        >
                          {/* name="divider" id=I183:11472;47:5557 type=LINE */}
                          <></>
                        </Flex>
                        {/* name="Job/Quick access" id="I183:11472;47:5558" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "var(--size-size-sizexxs-6px, 6px)",
                            borderRadius: "99px",
                          }}
                        >
                          {/* name="video" id="I183:11472;47:5558;47:5444" type="INSTANCE" */}
                          <Icon.QodeVideo
                            style={{ width: "16px", height: "16px" }}
                            {...{}}
                          />
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "500",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              textDecorationLine: "underline",
                            }}
                          >{`4 interviewed`}</span>
                        </Flex>
                      </div>
                      <span
                        style={{
                          color: "var(--text-text-primary-20, #1597f4)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "500",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          textDecorationLine: "underline",
                        }}
                      >{`JD`}</span>
                    </div>
                  </Flex>
                  {/* name="Job item" id="183:11473" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "420px",
                      maxWidth: "440px",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      borderRadius: "var(--border-radius-large, 12px)",
                      border:
                        "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                      background: "var(--background-bg-white, #fff)",
                    }}
                  >
                    {/* name="Wrap" id="I183:11473;47:5566" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding: "16px",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        gap: "12px",
                        alignSelf: "stretch",
                        borderBottom:
                          "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                      }}
                    >
                      {/* name="Job title" id="I183:11473;47:5567" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "12px",
                          alignSelf: "stretch",
                        }}
                      >
                        <span
                          style={{
                            maxHeight: "56px",
                            flex: "1 0 0",
                            color: "var(--text-text-neutral-50, #1d1d1d)",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-size-sizemd-20px, 20px)",
                            fontStyle: "normal",
                            fontWeight: "600",
                            lineHeight:
                              "var(--lineheight-lineheight-xl, 28px) /* 140% */",
                          }}
                        >{`Sales Consultant`}</span>
                        {/* name="arrow-up-right" id="I183:11473;47:5569" type="INSTANCE" */}
                        <Icon.QodeArrowUpRight
                          style={{ width: "24px", height: "24px" }}
                          {...{}}
                        />
                      </div>
                      {/* name="Wrap" id="I183:11473;485:35083" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          paddingRight: "16px",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          gap: "12px",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name="Job/Attributes" id="I183:11473;485:36887" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            padding: "4px 12px",
                            alignItems: "center",
                            gap: "12px",
                            borderRadius: "99px",
                            background: "var(--neutral-gray-5, #f8f6f6)",
                          }}
                        >
                          {/* name="Urgent" id="I183:11473;485:36887;485:36863" type="FRAME" */}
                          <div
                            style={{
                              display: "flex",
                              padding: "2px var(--size-size-sizexxs-6px, 6px)",
                              justifyContent: "center",
                              alignItems: "center",
                              gap: "10px",
                              borderRadius: "12px",
                              background: "var(--neutral-gray-90, #464646)",
                            }}
                          >
                            <span
                              style={{
                                color: "#FFF",
                                textAlign: "center",
                                fontFamily: '"SF Pro Display"',
                                fontSize: "10px",
                                fontStyle: "normal",
                                fontWeight: "600",
                                lineHeight: "normal",
                              }}
                            >{`URGENT`}</span>
                          </div>
                          {/* name="Yoe" id="I183:11473;485:36887;485:36865" type="FRAME" */}
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "12px",
                            }}
                          >
                            <span
                              style={{
                                color: "var(--text-text-neutral-50, #1d1d1d)",
                                fontFamily:
                                  'var(--family-family, "sf pro display")',
                                fontSize: "var(--size-base, 14px)",
                                fontStyle: "normal",
                                fontWeight: "400",
                                lineHeight:
                                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              }}
                            >{`3 yoe`}</span>
                            {/* name="Line 3" id="I183:11473;485:36887;485:36867" type="LINE" */}
                            <Flex
                              style={{
                                width: "1px",
                                height: "8px",
                                background:
                                  "var(--border-border-neutral-50, #6f6f6f)",
                              }}
                            >
                              {/* name="Line 3" id=I183:11473;485:36887;485:36867 type=LINE */}
                              <></>
                            </Flex>
                          </div>
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Vietnam`}</span>
                        </Flex>
                        {/* name="Skills" id="I183:11473;47:5576" type="FRAME" */}
                        <div
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "12px",
                            alignSelf: "stretch",
                          }}
                        >
                          <span
                            style={{
                              color: "var(--text-text-neutral-40, #464646)",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "700",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Skills:`}</span>
                          <span
                            style={{
                              flex: "1 0 0",
                              color: "var(--text-text-neutral-40, #464646)",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Data analysis, Sales automation, Supervising, Salesforce, Hubspot, +5 more`}</span>
                        </div>
                      </div>
                    </div>
                    {/* name="Action" id="I183:11473;47:5554" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding: "16px",
                        justifyContent: "space-between",
                        alignItems: "center",
                        alignSelf: "stretch",
                        background: "var(--neutral-gray-5, #f8f6f6)",
                      }}
                    >
                      {/* name="Status" id="I183:11473;47:5555" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                        }}
                      >
                        {/* name="Job/Quick access" id="I183:11473;47:5556" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "var(--size-size-sizexxs-6px, 6px)",
                            borderRadius: "99px",
                          }}
                        >
                          {/* name="heart" id="I183:11473;47:5556;47:5444" type="INSTANCE" */}
                          <Icon.QodeHeart
                            style={{ width: "16px", height: "16px" }}
                            {...{}}
                          />
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "500",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              textDecorationLine: "underline",
                            }}
                          >{`12 shortlisted`}</span>
                        </Flex>
                        {/* name="divider" id="I183:11473;47:5557" type="LINE" */}
                        <Flex
                          style={{
                            width: "1px",
                            height: "15px",
                            background:
                              "var(--border-border-neutral-30, #d5d5d5)",
                          }}
                        >
                          {/* name="divider" id=I183:11473;47:5557 type=LINE */}
                          <></>
                        </Flex>
                        {/* name="Job/Quick access" id="I183:11473;47:5558" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "var(--size-size-sizexxs-6px, 6px)",
                            borderRadius: "99px",
                          }}
                        >
                          {/* name="video" id="I183:11473;47:5558;47:5444" type="INSTANCE" */}
                          <Icon.QodeVideo
                            style={{ width: "16px", height: "16px" }}
                            {...{}}
                          />
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "500",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              textDecorationLine: "underline",
                            }}
                          >{`4 interviewed`}</span>
                        </Flex>
                      </div>
                      <span
                        style={{
                          color: "var(--text-text-primary-20, #1597f4)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "500",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          textDecorationLine: "underline",
                        }}
                      >{`JD`}</span>
                    </div>
                  </Flex>
                </div>
                {/* name="Pagination" id="183:11474" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "556px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-padding, 16px)",
                  }}
                >
                  {/* name="Pagination Wrapper" id="I183:11474;171:27143" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "var(--size-padding-paddingxs, 8px)",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name="🧬 left" id="I183:11474;171:27101" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        width: "32px",
                        height: "var(--size-height-controlheight, 32px)",
                        padding: "var(--size-padding-paddingxxs, 4px)",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "var(--style-radius-borderradius, 8px)",
                      }}
                    >
                      {/* name="chevron-left" id="I183:11474;171:27101;171:26630" type="INSTANCE" */}
                      <Icon.QodeChevronLeft
                        style={{
                          width: "var(--font-size-base, 14px)",
                          height: "var(--font-size-base, 14px)",
                          flexShrink: "0",
                        }}
                        {...{}}
                      />
                    </Flex>
                    {/* name="pages" id="I183:11474;2747:12254" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "var(--size-margin-marginxs, 8px)",
                        flex: "1 0 0",
                      }}
                    >
                      {/* name="🧬 item 1" id="I183:11474;171:27102" type="INSTANCE" */}
                      <Flex
                        style={{
                          display: "flex",
                          width: "32px",
                          height: "var(--size-height-controlheight, 32px)",
                          padding: "var(--size-padding-paddingxxs, 4px)",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius: "var(--style-radius-borderradius, 8px)",
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
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-base, 14px)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight:
                              "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          }}
                        >{`1`}</span>
                      </Flex>
                      {/* name="🧬 item 2" id="I183:11474;171:27117" type="INSTANCE" */}
                      <QodePagination
                        style={{
                          display: "flex",
                          width: "32px",
                          height: "var(--size-height-controlheight, 32px)",
                          padding: "var(--size-padding-paddingxxs, 4px)",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius: "var(--style-radius-borderradius, 8px)",
                        }}
                        {...{ state: "default", direction: "left" }}
                      />
                      {/* name="🧬 item 3" id="I183:11474;171:27103" type="INSTANCE" */}
                      <Flex
                        style={{
                          display: "flex",
                          width: "32px",
                          height: "var(--size-height-controlheight, 32px)",
                          padding: "var(--size-padding-paddingxxs, 4px)",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius: "var(--style-radius-borderradius, 8px)",
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
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-base, 14px)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight:
                              "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          }}
                        >{`4`}</span>
                      </Flex>
                      {/* name="🧬 item 4" id="I183:11474;171:27104" type="INSTANCE" */}
                      <Flex
                        style={{
                          display: "flex",
                          width: "32px",
                          height: "var(--size-height-controlheight, 32px)",
                          padding: "var(--size-padding-paddingxxs, 4px)",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius: "var(--style-radius-borderradius, 8px)",
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
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-base, 14px)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight:
                              "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          }}
                        >{`5`}</span>
                      </Flex>
                      {/* name=".pagination__number" id="I183:11474;171:27105" type="INSTANCE" */}
                      <Flex
                        style={{
                          display: "flex",
                          width: "32px",
                          height: "var(--size-height-controlheight, 32px)",
                          padding: "var(--size-padding-paddingxxs, 4px)",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius:
                            "var(--style-radius-borderround, 999px)",
                          background: "var(--neutral-gray-100, #1d1d1d)",
                        }}
                      >
                        <span
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            flex: "1 0 0",
                            alignSelf: "stretch",
                            color: "#FFF",
                            textAlign: "center",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-base, 14px)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight:
                              "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          }}
                        >{`6`}</span>
                      </Flex>
                      {/* name="🧬 item 6" id="I183:11474;171:27106" type="INSTANCE" */}
                      <Flex
                        style={{
                          display: "flex",
                          width: "32px",
                          height: "var(--size-height-controlheight, 32px)",
                          padding: "var(--size-padding-paddingxxs, 4px)",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius: "var(--style-radius-borderradius, 8px)",
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
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-base, 14px)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight:
                              "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          }}
                        >{`7`}</span>
                      </Flex>
                      {/* name="🧬 item 7" id="I183:11474;171:27123" type="INSTANCE" */}
                      <Flex
                        style={{
                          display: "flex",
                          width: "32px",
                          height: "var(--size-height-controlheight, 32px)",
                          padding: "var(--size-padding-paddingxxs, 4px)",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius: "var(--style-radius-borderradius, 8px)",
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
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-base, 14px)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight:
                              "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          }}
                        >{`8`}</span>
                      </Flex>
                      {/* name="🧬 item 8" id="I183:11474;171:27125" type="INSTANCE" */}
                      <QodePagination
                        style={{
                          display: "flex",
                          width: "32px",
                          height: "var(--size-height-controlheight, 32px)",
                          padding: "var(--size-padding-paddingxxs, 4px)",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius: "var(--style-radius-borderradius, 8px)",
                        }}
                        {...{ state: "default", direction: "left" }}
                      />
                      {/* name="🧬 item 9" id="I183:11474;171:27129" type="INSTANCE" */}
                      <Flex
                        style={{
                          display: "flex",
                          width: "32px",
                          height: "var(--size-height-controlheight, 32px)",
                          padding: "var(--size-padding-paddingxxs, 4px)",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius: "var(--style-radius-borderradius, 8px)",
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
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-base, 14px)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight:
                              "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          }}
                        >{`50`}</span>
                      </Flex>
                    </div>
                    {/* name="🧬 right" id="I183:11474;171:27107" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        width: "32px",
                        height: "var(--size-height-controlheight, 32px)",
                        padding: "var(--size-padding-paddingxxs, 4px)",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "var(--style-radius-borderradius, 8px)",
                      }}
                    >
                      {/* name="chevron-right" id="I183:11474;171:27107;171:26641" type="INSTANCE" */}
                      <Icon.QodeChevronRight
                        style={{
                          width: "var(--font-size-base, 14px)",
                          height: "var(--font-size-base, 14px)",
                          flexShrink: "0",
                        }}
                        {...{}}
                      />
                    </Flex>
                  </div>
                  {/* name="Jumper Wrapper" id="I183:11474;171:27131" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    {/* name="🧬 select 1" id="I183:11474;171:27132" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        width: "108px",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        gap: "var(--size-padding-paddingxxs, 4px)",
                        borderRadius: "var(--border-radius-base, 8px)",
                        border:
                          "1px solid var(--border-border-neutral-30, #d5d5d5)",
                      }}
                    >
                      {/* name="Input/Select" id="I183:11474;171:27132;170:26363" type="INSTANCE" */}
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
                            "var(--style-line-width-linewidth, 1px) solid rgba(0, 0, 0, 0.15)",
                          background: "#FFF",
                        }}
                      >
                        <span
                          style={{
                            flex: "1 0 0",
                            color: "var(--text-text-neutral-50, #1d1d1d)",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-base, 14px)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight:
                              "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          }}
                        >{`12 / page`}</span>
                        {/* name="Icon" id="I183:11474;171:27132;170:26363;170:24281" type="INSTANCE" */}
                        <Flex style={{ width: "16px", height: "16px" }}>
                          {/* name="Vector" id="I183:11474;171:27132;170:26363;170:24281;630:7560" type="VECTOR" */}
                          <Flex
                            style={{
                              width: "14.005px",
                              height: "8.002px",
                              flexShrink: "0",
                              fill: "rgba(0, 0, 0, 0.45)",
                            }}
                          >
                            {/* name="Vector" id=I183:11474;171:27132;170:26363;170:24281;630:7560 type=VECTOR */}
                            <></>
                          </Flex>
                        </Flex>
                      </Flex>
                    </Flex>
                  </div>
                </Flex>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}
