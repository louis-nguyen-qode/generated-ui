// id="490:27046"
import React from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom61606 } from "@designSystem/custom/QodeCustom61606"
import { QodeCustom433 } from "@designSystem/custom/QodeCustom433"
import { QodeButton } from "@designSystem/ant/QodeButton"
import { QodeCustom438720 } from "@designSystem/custom/QodeCustom438720"
import { QodeCustom588089 } from "@designSystem/custom/QodeCustom588089"
import { QodeCustom43430029 } from "@designSystem/custom/QodeCustom43430029"
import { QodeCustom4325081 } from "@designSystem/custom/QodeCustom4325081"
import { QodeCustom565626441 } from "@designSystem/custom/QodeCustom565626441"

export interface Qode49027046PageProps {}

export const Qode49027046Page: React.FC<Qode49027046PageProps> = ({
  ...rest
}) => {
  return (
    <>
      {/* name="Sourcing" id="490:27046" type="FRAME" */}
      <div
        style={{
          display: "flex",
          width: "1280px",
          height: "800px",
          alignItems: "flex-start",
          background: "var(--app-bg, #f4f4f6)",
        }}
      >
        {/* name="Navbar" id="490:27047" type="INSTANCE" */}
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
          {/* name="Logo" id="I490:27047;1:3092" type="FRAME" */}
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
            {/* name="logo" id="I490:27047;635:31404" type="INSTANCE" */}
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
          {/* name="V-Menu" id="I490:27047;1:3094" type="FRAME" */}
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
            {/* name="Navbar/Menu" id="I490:27047;4:124" type="INSTANCE" */}
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
            {/* name="Navbar/Menu" id="I490:27047;16:5813" type="INSTANCE" */}
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
            {/* name="Navbar/Menu" id="I490:27047;4:54" type="INSTANCE" */}
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
            {/* name="Navbar/Menu" id="I490:27047;4:95" type="INSTANCE" */}
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
          {/* name="Btm" id="I490:27047;1:3098" type="FRAME" */}
          <div
            style={{
              display: "flex",
              padding: "16px 0px",
              flexDirection: "column",
              alignItems: "center",
              gap: "8px",
            }}
          >
            {/* name="Profile" id="I490:27047;1:3099" type="INSTANCE" */}
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
              {/* name="Button" id="I490:27047;1:3099;5007:11919" type="INSTANCE" */}
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
            {/* name="Profile" id="I490:27047;1:3100" type="INSTANCE" */}
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
              {/* name="Button" id="I490:27047;1:3100;5007:11919" type="INSTANCE" */}
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
        {/* name="b" id="490:27048" type="FRAME" */}
        <div
          style={{
            display: "flex",
            width: "1196px",
            padding: "24px 40px 0px 40px",
            flexDirection: "column",
            alignItems: "center",
            gap: "24px",
            flexShrink: "0",
            alignSelf: "stretch",
            background: "var(--app-bg, #f4f4f6)",
          }}
        >
          {/* name="Job title" id="490:27049" type="FRAME" */}
          <div
            style={{
              display: "flex",
              height: "42px",
              maxWidth: "1276px",
              justifyContent: "space-between",
              alignItems: "center",
              alignSelf: "stretch",
              borderRadius:
                "0px 0px var(--border-radius-large, 12px) var(--border-radius-large, 12px)",
            }}
          >
            {/* name="Wrap" id="490:27050" type="FRAME" */}
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              {/* name="Button" id="490:27051" type="INSTANCE" */}
              <QodeButton
                style={{
                  display: "flex",
                  width: "32px",
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
                  onlyIcon: <Icon.QodeChevronLeft />,
                  buttonname: "Source new job",
                  iconRight: false,
                  selectIconLeft: <Icon.QodePlus />,
                  iconLeft: true,
                  type: "default",
                  size: "default",
                  state: "default",
                  content: "icon",
                  danger: false,
                  ghost: false,
                }}
              />
              {/* name="Title" id="490:27052" type="FRAME" */}
              <div
                style={{ display: "flex", alignItems: "center", gap: "4px" }}
              >
                <span
                  style={{
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    textAlign: "center",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-size-sizemd-20px, 20px)",
                    fontStyle: "normal",
                    fontWeight: "600",
                    lineHeight:
                      "var(--lineheight-lineheight-xl, 28px) /* 140% */",
                    textDecorationLine: "underline",
                  }}
                >{`Senior Software Developer `}</span>
                {/* name="angle-down" id="490:27054" type="INSTANCE" */}
                <Icon.QodeAngleDown
                  style={{ width: "20px", height: "20px" }}
                  {...{}}
                />
              </div>
              {/* name="Button" id="490:27055" type="INSTANCE" */}
              <QodeButton
                style={{
                  display: "flex",
                  width: "70px",
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
                  buttonname: "View JD",
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
            {/* name="Special button/Shortlist" id="490:27056" type="INSTANCE" */}
            <QodeCustom438720
              style={{
                display: "flex",
                height: "40px",
                padding: "8px 20px",
                justifyContent: "center",
                alignItems: "center",
                gap: "8px",
                borderRadius: "var(--border-radius-base, 8px)",
                border: "2px solid var(--border-border-primary-20, #158de2)",
                background: "var(--neutral-white, #fff)",
                boxShadow:
                  "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 3px 6px -4px rgba(0, 0, 0, 0.12)",
              }}
              {...{ state: "Default" }}
            />
          </div>
          {/* name="Wrap" id="490:27057" type="FRAME" */}
          <div
            style={{
              display: "flex",
              maxWidth: "1276px",
              flexDirection: "column",
              alignItems: "flex-start",
              flex: "1 0 0",
              alignSelf: "stretch",
              borderRadius: "12px 12px 0px 0px",
              border: "1px solid var(--border-border-neutral-30, #d5d5d5)",
            }}
          >
            {/* name="Search filter" id="490:27058" type="INSTANCE" */}
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
            {/* name="Body" id="490:27059" type="FRAME" */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                flex: "1 0 0",
                alignSelf: "stretch",
                background: "#FFF",
              }}
            >
              {/* name="List | Profile" id="490:27060" type="INSTANCE" */}
              <QodeCustom43430029
                style={{
                  display: "flex",
                  width: "353px",
                  flexDirection: "column",
                  alignItems: "center",
                  alignSelf: "stretch",
                  background: "#FFF",
                }}
                {...{ property_1: "Default" }}
              />
              {/* name="Profile" id="490:27061" type="INSTANCE" */}
              <QodeCustom4325081
                style={{
                  display: "flex",
                  padding: "20px",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "20px",
                  flex: "1 0 0",
                  alignSelf: "stretch",
                  borderLeft:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                  background: "var(--background-bg-white, #fff)",
                }}
                {...{ property_1: "Default" }}
              />
            </div>
          </div>
        </div>
        {/* name="Overlay BG" id="490:28133" type="INSTANCE" */}
        <Flex
          style={{
            display: "flex",
            width: "1280px",
            height: "800px",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
          }}
        >
          {/* name="filter" id="I490:28133;3401:7211" type="RECTANGLE" */}
          <Flex
            style={{
              width: "1280px",
              height: "800px",
              flexShrink: "0",
              opacity: "0.6",
              background: "#000",
            }}
          >
            {/* name="filter" id=I490:28133;3401:7211 type=RECTANGLE */}
            <></>
          </Flex>
        </Flex>
        {/* name="Modal/View JD/Modal/View JD/View JD" id="490:28115" type="INSTANCE" */}
        <Flex
          style={{
            display: "flex",
            width: "900px",
            flexDirection: "column",
            alignItems: "flex-start",
            position: "absolute",
            left: "190px",
            top: "60px",
            borderRadius: "var(--style-radius-borderradius, 8px)",
            background: "var(--background-bg-white, #fff)",
            boxShadow:
              "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 6px 16px 0px rgba(0, 0, 0, 0.08)",
          }}
        >
          {/* name="Modal/Header" id="I490:28115;119:7203" type="INSTANCE" */}
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
            {...{ size: "lg" }}
          />
          {/* name="body" id="I490:28115;119:7204" type="FRAME" */}
          <div
            style={{
              display: "flex",
              height: "628px",
              padding: "20px",
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "stretch",
            }}
          >
            {/* name="🎰 slot" id="I490:28115;119:10199" type="FRAME" */}
            <div
              style={{
                display: "flex",
                width: "860px",
                height: "588px",
                padding: "var(--size-padding-padding, 16px)",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "4px",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
                background: "var(--neutral-gray-5, #f8f6f6)",
              }}
            >
              <span
                style={{
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  textAlign: "center",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-size-sizemd-20px, 20px)",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight:
                    "var(--lineheight-lineheight-xl, 28px) /* 140% */",
                }}
              >{`File view area`}</span>
              <span
                style={{
                  color: "var(--text-text-neutral-20, #878787)",
                  textAlign: "center",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`(docx, pdf...)`}</span>
            </div>
          </div>
        </Flex>
      </div>
    </>
  )
}

export default Qode49027046Page
