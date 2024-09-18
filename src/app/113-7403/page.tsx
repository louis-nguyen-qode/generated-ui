// id="113:7403"
import React from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom61606 } from "@designSystem/custom/QodeCustom61606"
import { QodeCustom433 } from "@designSystem/custom/QodeCustom433"
import { QodeButton } from "@designSystem/ant/QodeButton"
import { QodeCustom272038011 } from "@designSystem/custom/QodeCustom272038011"
import { QodeCustom48612 } from "@designSystem/custom/QodeCustom48612"
import { QodeCustom17127011 } from "@designSystem/custom/QodeCustom17127011"
import { QodeCustom34019060 } from "@designSystem/custom/QodeCustom34019060"

export interface Qode1137403PageProps {}

export const Qode1137403Page: React.FC<Qode1137403PageProps> = ({
  ...rest
}) => {
  return (
    <>
      {/* name="Jobs | Add" id="113:7403" type="FRAME" */}
      <div
        style={{
          display: "flex",
          width: "1280px",
          height: "800px",
          alignItems: "flex-start",
          background: "#FFF",
        }}
      >
        {/* name="Navbar" id="113:7404" type="INSTANCE" */}
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
          {/* name="Logo" id="I113:7404;1:3092" type="FRAME" */}
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
            {/* name="logo" id="I113:7404;635:31404" type="INSTANCE" */}
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
          {/* name="V-Menu" id="I113:7404;1:3094" type="FRAME" */}
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
            {/* name="Navbar/Menu" id="I113:7404;4:124" type="INSTANCE" */}
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
            {/* name="Navbar/Menu" id="I113:7404;16:5813" type="INSTANCE" */}
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
            {/* name="Navbar/Menu" id="I113:7404;4:54" type="INSTANCE" */}
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
            {/* name="Navbar/Menu" id="I113:7404;4:95" type="INSTANCE" */}
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
          {/* name="Btm" id="I113:7404;1:3098" type="FRAME" */}
          <div
            style={{
              display: "flex",
              padding: "16px 0px",
              flexDirection: "column",
              alignItems: "center",
              gap: "8px",
            }}
          >
            {/* name="Profile" id="I113:7404;1:3099" type="INSTANCE" */}
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
              {/* name="Button" id="I113:7404;1:3099;5007:11919" type="INSTANCE" */}
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
            {/* name="Profile" id="I113:7404;1:3100" type="INSTANCE" */}
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
              {/* name="Button" id="I113:7404;1:3100;5007:11919" type="INSTANCE" */}
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
        {/* name="Body" id="203:11326" type="FRAME" */}
        <div
          style={{
            display: "flex",
            padding: "40px 40px 0px 40px",
            flexDirection: "column",
            alignItems: "center",
            gap: "40px",
            flex: "1 0 0",
            alignSelf: "stretch",
            background: "var(--app-bg, #f4f4f6)",
          }}
        >
          {/* name="Header" id="203:11327" type="FRAME" */}
          <div
            style={{ height: "40px", maxWidth: "1276px", alignSelf: "stretch" }}
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
            {/* name="Search bar" id="203:11329" type="INSTANCE" */}
            <QodeCustom272038011
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
              {...{
                showIconRight: false,
                suffix: "SUF",
                showSuffix: false,
                title: "Search",
                prefix: "PRE",
                iconRight: <Icon.QodeUser />,
                showPrefix: false,
                iconLeft: <Icon.QodeMagnifyingGlass />,
                showIconLeft: true,
                state: "default",
                status: "default",
                size: "large",
              }}
            />
            {/* name="Button" id="203:11330" type="INSTANCE" */}
            <QodeButton
              style={{
                display: "flex",
                width: "135px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "4px 16px",
                justifyContent: "center",
                alignItems: "center",
                gap: "8px",
                flexShrink: "0",
                borderRadius: "var(--border-radius-rounded, 999px)",
                border: "1px solid var(--border-border-primary-30, #107ecc)",
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
          {/* name="Job list" id="203:11331" type="FRAME" */}
          <div
            style={{
              display: "flex",
              maxWidth: "1276px",
              flexDirection: "column",
              alignItems: "center",
              gap: "20px",
              flex: "1 0 0",
              alignSelf: "stretch",
            }}
          >
            {/* name="Jobs" id="203:11332" type="FRAME" */}
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                alignContent: "flex-start",
                gap: "8px",
                alignSelf: "stretch",
                flexWrap: "wrap",
                borderRadius: "8px",
              }}
            >
              {/* name="Job item" id="203:11333" type="INSTANCE" */}
              <QodeCustom48612
                style={{
                  display: "flex",
                  width: "366px",
                  maxWidth: "440px",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  borderRadius: "var(--border-radius-large, 12px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                  background: "var(--background-bg-white, #fff)",
                }}
                {...{ urgent: false, state: "default", style: "Simple" }}
              />
              {/* name="Job item" id="203:11334" type="INSTANCE" */}
              <QodeCustom48612
                style={{
                  display: "flex",
                  width: "366px",
                  maxWidth: "440px",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  borderRadius: "var(--border-radius-large, 12px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                  background: "var(--background-bg-white, #fff)",
                }}
                {...{ urgent: false, state: "default", style: "Simple" }}
              />
              {/* name="Job item" id="203:11335" type="INSTANCE" */}
              <QodeCustom48612
                style={{
                  display: "flex",
                  width: "366px",
                  maxWidth: "440px",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  borderRadius: "var(--border-radius-large, 12px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                  background: "var(--background-bg-white, #fff)",
                }}
                {...{ urgent: false, state: "default", style: "Simple" }}
              />
              {/* name="Job item" id="203:11336" type="INSTANCE" */}
              <QodeCustom48612
                style={{
                  display: "flex",
                  width: "366px",
                  maxWidth: "440px",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  borderRadius: "var(--border-radius-large, 12px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                  background: "var(--background-bg-white, #fff)",
                }}
                {...{ urgent: false, state: "default", style: "Simple" }}
              />
              {/* name="Job item" id="203:11337" type="INSTANCE" */}
              <QodeCustom48612
                style={{
                  display: "flex",
                  width: "366px",
                  maxWidth: "440px",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  borderRadius: "var(--border-radius-large, 12px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                  background: "var(--background-bg-white, #fff)",
                }}
                {...{ urgent: false, state: "default", style: "Simple" }}
              />
              {/* name="Job item" id="203:11338" type="INSTANCE" */}
              <QodeCustom48612
                style={{
                  display: "flex",
                  width: "366px",
                  maxWidth: "440px",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  borderRadius: "var(--border-radius-large, 12px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                  background: "var(--background-bg-white, #fff)",
                }}
                {...{ urgent: false, state: "default", style: "Simple" }}
              />
              {/* name="Job item" id="203:11339" type="INSTANCE" */}
              <QodeCustom48612
                style={{
                  display: "flex",
                  width: "366px",
                  maxWidth: "440px",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  borderRadius: "var(--border-radius-large, 12px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                  background: "var(--background-bg-white, #fff)",
                }}
                {...{ urgent: false, state: "default", style: "Simple" }}
              />
              {/* name="Job item" id="203:11340" type="INSTANCE" */}
              <QodeCustom48612
                style={{
                  display: "flex",
                  width: "366px",
                  maxWidth: "440px",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  borderRadius: "var(--border-radius-large, 12px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                  background: "var(--background-bg-white, #fff)",
                }}
                {...{ urgent: false, state: "default", style: "Simple" }}
              />
              {/* name="Job item" id="203:11341" type="INSTANCE" */}
              <QodeCustom48612
                style={{
                  display: "flex",
                  width: "366px",
                  maxWidth: "440px",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  borderRadius: "var(--border-radius-large, 12px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                  background: "var(--background-bg-white, #fff)",
                }}
                {...{ urgent: false, state: "default", style: "Simple" }}
              />
              {/* name="Job item" id="203:11342" type="INSTANCE" */}
              <QodeCustom48612
                style={{
                  display: "flex",
                  width: "366px",
                  maxWidth: "440px",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  borderRadius: "var(--border-radius-large, 12px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                  background: "var(--background-bg-white, #fff)",
                }}
                {...{ urgent: false, state: "default", style: "Simple" }}
              />
              {/* name="Job item" id="203:11343" type="INSTANCE" */}
              <QodeCustom48612
                style={{
                  display: "flex",
                  width: "366px",
                  maxWidth: "440px",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  borderRadius: "var(--border-radius-large, 12px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                  background: "var(--background-bg-white, #fff)",
                }}
                {...{ urgent: false, state: "default", style: "Simple" }}
              />
              {/* name="Job item" id="203:11344" type="INSTANCE" */}
              <QodeCustom48612
                style={{
                  display: "flex",
                  width: "366px",
                  maxWidth: "440px",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  borderRadius: "var(--border-radius-large, 12px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                  background: "var(--background-bg-white, #fff)",
                }}
                {...{ urgent: false, state: "default", style: "Simple" }}
              />
            </div>
            {/* name="Pagination" id="203:11345" type="INSTANCE" */}
            <QodeCustom17127011
              style={{
                display: "flex",
                width: "556px",
                paddingBottom: "32px",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-padding, 16px)",
              }}
              {...{ total: "Total 85 items", type: "more", mini: false }}
            />
          </div>
        </div>
        {/* name="Overlay BG" id="352:18708" type="INSTANCE" */}
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
          {/* name="filter" id="I352:18708;3401:7211" type="RECTANGLE" */}
          <Flex
            style={{
              width: "1280px",
              height: "800px",
              flexShrink: "0",
              opacity: "0.6",
              background: "rgba(0, 0, 0, 0.50)",
            }}
          >
            {/* name="filter" id=I352:18708;3401:7211 type=RECTANGLE */}
            <></>
          </Flex>
        </Flex>
        {/* name="Modal/Add job" id="118:6250" type="INSTANCE" */}
        <QodeCustom34019060
          style={{
            display: "flex",
            width: "540px",
            height: "580px",
            flexDirection: "column",
            alignItems: "flex-start",
            position: "absolute",
            right: "40px",
            top: "94px",
            borderRadius: "var(--style-radius-borderradius, 8px)",
            background: "var(--background-bg-white, #fff)",
            boxShadow:
              "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 6px 16px 0px rgba(0, 0, 0, 0.08)",
          }}
          {...{ property_1: "Add job" }}
        />
      </div>
    </>
  )
}

export default Qode1137403Page
