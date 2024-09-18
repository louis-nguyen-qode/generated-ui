// id="378:19465"
import React from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom61606 } from "@designSystem/custom/QodeCustom61606"
import { QodeCustom433 } from "@designSystem/custom/QodeCustom433"
import { QodeButton } from "@designSystem/ant/QodeButton"
import { QodeCustom1828777 } from "@designSystem/custom/QodeCustom1828777"
import { QodeCustom18210113 } from "@designSystem/custom/QodeCustom18210113"
import { QodeTag } from "@designSystem/ant/QodeTag"

export interface Qode37819465PageProps {}

export const Qode37819465Page: React.FC<Qode37819465PageProps> = ({
  ...rest
}) => {
  return (
    <>
      {/* name="Jobs | Empty | Confirm role" id="378:19465" type="FRAME" */}
      <div
        style={{
          display: "flex",
          width: "1280px",
          height: "800px",
          alignItems: "flex-start",
          background: "#FFF",
        }}
      >
        {/* name="Navbar" id="378:19466" type="INSTANCE" */}
        <Flex
          style={{
            display: "flex",
            width: "84px",
            height: "800px",
            flexDirection: "column",
            alignItems: "center",
            flexShrink: "0",
            borderRight:
              "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
            background: "var(--background-bg-white, #fff)",
          }}
        >
          {/* name="Logo" id="I378:19466;1:3092" type="FRAME" */}
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
            {/* name="logo" id="I378:19466;635:31404" type="INSTANCE" */}
            <QodeCustom61606
              style={{ width: "40px", height: "40px" }}
              {...{
                type: "Default",
                darkmode: "yes",
                orientation: "landscape",
                wordmark: "no",
              }}
            />
          </div>
          {/* name="V-Menu" id="I378:19466;1:3094" type="FRAME" */}
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
            {/* name="Navbar/Menu" id="I378:19466;4:124" type="INSTANCE" */}
            <QodeCustom433
              style={{
                display: "flex",
                width: "84px",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-size-sizexxs-6px, 6px)",
              }}
              {...{ icon: <Icon.QodeCube />, state: "Default" }}
            />
            {/* name="Navbar/Menu" id="I378:19466;16:5813" type="INSTANCE" */}
            <QodeCustom433
              style={{
                display: "flex",
                width: "84px",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-size-sizexxs-6px, 6px)",
              }}
              {...{ icon: <Icon.QodeBriefcase />, state: "Active" }}
            />
            {/* name="Navbar/Menu" id="I378:19466;4:54" type="INSTANCE" */}
            <QodeCustom433
              style={{
                display: "flex",
                width: "84px",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-size-sizexxs-6px, 6px)",
              }}
              {...{ icon: <Icon.QodeUserGroup />, state: "Default" }}
            />
            {/* name="Navbar/Menu" id="I378:19466;4:95" type="INSTANCE" */}
            <QodeCustom433
              style={{
                display: "flex",
                width: "84px",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-size-sizexxs-6px, 6px)",
              }}
              {...{ icon: <Icon.QodeVideo />, state: "Default" }}
            />
          </div>
          {/* name="Btm" id="I378:19466;1:3098" type="FRAME" */}
          <div
            style={{
              display: "flex",
              padding: "16px 0px",
              flexDirection: "column",
              alignItems: "center",
              gap: "8px",
            }}
          >
            {/* name="Profile" id="I378:19466;1:3099" type="INSTANCE" */}
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
              {/* name="Button" id="I378:19466;1:3099;5007:11919" type="INSTANCE" */}
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
            {/* name="Profile" id="I378:19466;1:3100" type="INSTANCE" */}
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
              {/* name="Button" id="I378:19466;1:3100;5007:11919" type="INSTANCE" */}
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
        {/* name="Body" id="378:19467" type="FRAME" */}
        <div
          style={{
            display: "flex",
            padding: "60px 40px",
            flexDirection: "column",
            alignItems: "center",
            gap: "40px",
            flex: "1 0 0",
            alignSelf: "stretch",
            background: "var(--app-bg, #f4f4f6)",
          }}
        >
          {/* name="Body" id="378:19468" type="FRAME" */}
          <div
            style={{
              display: "flex",
              width: "500px",
              flexDirection: "column",
              alignItems: "center",
              gap: "20px",
            }}
          >
            {/* name="Title" id="378:19734" type="FRAME" */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "12px",
              }}
            >
              {/* name="Icon" id="378:19735" type="FRAME" */}
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
                  border: "1px solid var(--border-border-primary-30, #107ecc)",
                  background: "var(--background-bg-primary, #1597f4)",
                }}
              >
                {/* name="briefcase" id="378:19736" type="INSTANCE" */}
                <Icon.QodeBriefcase
                  style={{ width: "24px", height: "24px", flexShrink: "0" }}
                  {...{}}
                />
              </div>
              <span
                style={{
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-xlarge, 20px)",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight:
                    "var(--lineheight-lineheight-xl, 28px) /* 140% */",
                }}
              >{`Confirm role`}</span>
            </div>
            {/* name="body" id="378:19473" type="FRAME" */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "20px",
                alignSelf: "stretch",
              }}
            >
              {/* name="Frame 37364" id="378:19526" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "12px",
                  alignSelf: "stretch",
                }}
              >
                {/* name="Title" id="378:19527" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name="Input__Label" id="378:19528" type="INSTANCE" */}
                  <QodeCustom1828777
                    style={{
                      display: "flex",
                      width: "150px",
                      height: "var(--size-height-controlheight, 32px)",
                      alignItems: "center",
                      gap: "var(--size-padding-paddingxxs, 4px)",
                    }}
                    {...{
                      icon: <Icon.QodeBriefcase />,
                      title: "Job title",
                      showIcon: true,
                      required: true,
                      showTooltip: false,
                      direction: "horizontal",
                      size: "default",
                    }}
                  />
                  {/* name="Input/Text" id="378:19529" type="INSTANCE" */}
                  <QodeCustom18210113
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
                      showIconRight: false,
                      showClear: true,
                      suffix: "SUF",
                      showSuffix: false,
                      title: "Senior Software Engineer",
                      prefix: "PRE",
                      iconRight: <Icon.QodeCalendarDays />,
                      showPrefix: false,
                      iconLeft: <Icon.QodeUser />,
                      showIconLeft: false,
                      state: "filled",
                      status: "default",
                      size: "default",
                    }}
                  />
                </div>
                {/* name="Title" id="378:19530" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name="Input__Label" id="378:19531" type="INSTANCE" */}
                  <QodeCustom1828777
                    style={{
                      display: "flex",
                      width: "150px",
                      height: "var(--size-height-controlheight, 32px)",
                      alignItems: "center",
                      gap: "var(--size-padding-paddingxxs, 4px)",
                    }}
                    {...{
                      icon: <Icon.QodeLocationDot />,
                      title: "Location",
                      showIcon: true,
                      required: true,
                      showTooltip: false,
                      direction: "horizontal",
                      size: "default",
                    }}
                  />
                  {/* name="Input/Text" id="378:19532" type="INSTANCE" */}
                  <QodeCustom18210113
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
                      showIconRight: false,
                      showClear: true,
                      suffix: "SUF",
                      showSuffix: false,
                      title: "Ho Chi Minh city, Vietnam",
                      prefix: "PRE",
                      iconRight: <Icon.QodeCalendarDays />,
                      showPrefix: false,
                      iconLeft: <Icon.QodeUser />,
                      showIconLeft: false,
                      state: "filled",
                      status: "default",
                      size: "default",
                    }}
                  />
                </div>
                {/* name="Title" id="378:19533" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name="Input__Label" id="378:19534" type="INSTANCE" */}
                  <QodeCustom1828777
                    style={{
                      display: "flex",
                      width: "150px",
                      height: "var(--size-height-controlheight, 32px)",
                      alignItems: "center",
                      gap: "var(--size-padding-paddingxxs, 4px)",
                    }}
                    {...{
                      icon: <Icon.QodePenRuler />,
                      title: "Requirements",
                      showIcon: true,
                      required: false,
                      showTooltip: false,
                      direction: "horizontal",
                      size: "default",
                    }}
                  />
                  {/* name="Input" id="378:19535" type="FRAME" */}
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
                    {/* name="Input/Text" id="378:19536" type="INSTANCE" */}
                    <QodeCustom18210113
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
                      {...{
                        showIconRight: true,
                        suffix: "SUF",
                        showSuffix: false,
                        title: "Add skills",
                        prefix: "PRE",
                        iconRight: <Icon.QodeArrowTurnDownLeft />,
                        showPrefix: false,
                        iconLeft: <Icon.QodeUser />,
                        showClear: true,
                        showIconLeft: false,
                        state: "default",
                        status: "default",
                        size: "default",
                      }}
                    />
                    {/* name="Emails" id="378:19537" type="FRAME" */}
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
                      {/* name="Tag" id="378:19538" type="INSTANCE" */}
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
                      {/* name="Tag" id="378:19539" type="INSTANCE" */}
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
                      {/* name="Tag" id="378:19540" type="INSTANCE" */}
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
                      {/* name="Tag" id="378:19541" type="INSTANCE" */}
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
              {/* name="Wrap" id="378:19586" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  height: "32px",
                  alignItems: "center",
                  gap: "12px",
                  alignSelf: "stretch",
                }}
              >
                {/* name="Button" id="378:19587" type="INSTANCE" */}
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
                {/* name="Button" id="378:19588" type="INSTANCE" */}
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
        </div>
      </div>
    </>
  )
}

export default Qode37819465Page
