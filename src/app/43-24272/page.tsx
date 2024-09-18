// id="43:24272"
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
import { QodeCustom565626441 } from "@designSystem/custom/QodeCustom565626441"

export interface Qode4324272PageProps {}

export const Qode4324272Page: React.FC<Qode4324272PageProps> = ({
  ...rest
}) => {
  return (
    <>
      {/* name="Jobs" id="43:24272" type="FRAME" */}
      <div
        style={{
          display: "flex",
          width: "1280px",
          height: "800px",
          alignItems: "flex-start",
          background: "#FFF",
        }}
      >
        {/* name="Navbar" id="43:24273" type="INSTANCE" */}
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
          {/* name="Logo" id="I43:24273;1:3092" type="FRAME" */}
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
            {/* name="logo" id="I43:24273;635:31404" type="INSTANCE" */}
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
          {/* name="V-Menu" id="I43:24273;1:3094" type="FRAME" */}
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
            {/* name="Navbar/Menu" id="I43:24273;4:124" type="INSTANCE" */}
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
            {/* name="Navbar/Menu" id="I43:24273;16:5813" type="INSTANCE" */}
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
            {/* name="Navbar/Menu" id="I43:24273;4:54" type="INSTANCE" */}
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
            {/* name="Navbar/Menu" id="I43:24273;4:95" type="INSTANCE" */}
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
          {/* name="Btm" id="I43:24273;1:3098" type="FRAME" */}
          <div
            style={{
              display: "flex",
              padding: "16px 0px",
              flexDirection: "column",
              alignItems: "center",
              gap: "8px",
            }}
          >
            {/* name="Profile" id="I43:24273;1:3099" type="INSTANCE" */}
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
              {/* name="Button" id="I43:24273;1:3099;5007:11919" type="INSTANCE" */}
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
            {/* name="Profile" id="I43:24273;1:3100" type="INSTANCE" */}
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
              {/* name="Button" id="I43:24273;1:3100;5007:11919" type="INSTANCE" */}
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
        {/* name="Body" id="43:24274" type="FRAME" */}
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
          {/* name="Header" id="43:24275" type="FRAME" */}
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
            {/* name="Search bar" id="43:24277" type="INSTANCE" */}
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
            {/* name="Button" id="43:24278" type="INSTANCE" */}
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
          {/* name="Job list" id="121:9762" type="FRAME" */}
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
            {/* name="Jobs" id="121:9763" type="FRAME" */}
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
              {/* name="Job item" id="121:9764" type="INSTANCE" */}
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
              {/* name="Job item" id="121:9765" type="INSTANCE" */}
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
              {/* name="Job item" id="121:9766" type="INSTANCE" */}
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
              {/* name="Job item" id="121:9767" type="INSTANCE" */}
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
              {/* name="Job item" id="121:9768" type="INSTANCE" */}
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
              {/* name="Job item" id="121:9769" type="INSTANCE" */}
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
              {/* name="Job item" id="121:9770" type="INSTANCE" */}
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
              {/* name="Job item" id="121:9771" type="INSTANCE" */}
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
              {/* name="Job item" id="121:9772" type="INSTANCE" */}
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
              {/* name="Job item" id="121:9773" type="INSTANCE" */}
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
              {/* name="Job item" id="121:9774" type="INSTANCE" */}
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
              {/* name="Job item" id="121:9775" type="INSTANCE" */}
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
            {/* name="Pagination" id="121:9776" type="INSTANCE" */}
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
        {/* name="Modal/Add job" id="216:16036" type="INSTANCE" */}
        <QodeCustom34019060
          style={{
            display: "flex",
            width: "540px",
            height: "580px",
            flexDirection: "column",
            alignItems: "flex-start",
            position: "absolute",
            right: "40px",
            top: "62px",
            borderRadius: "var(--border-radius-large, 12px)",
            background: "var(--background-bg-white, #fff)",
            boxShadow:
              "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 6px 16px 0px rgba(0, 0, 0, 0.08)",
          }}
          {...{ property_1: "Add job" }}
        />
        {/* name="Modal/View JD/Modal/View JD/View JD" id="246:16813" type="INSTANCE" */}
        <Flex
          style={{
            display: "flex",
            width: "900px",
            flexDirection: "column",
            alignItems: "flex-start",
            position: "absolute",
            left: "190px",
            bottom: "40px",
            borderRadius: "var(--style-radius-borderradius, 8px)",
            background: "var(--background-bg-white, #fff)",
            boxShadow:
              "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 6px 16px 0px rgba(0, 0, 0, 0.08)",
          }}
        >
          {/* name="Modal/Header" id="I246:16813;119:7203" type="INSTANCE" */}
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
          {/* name="body" id="I246:16813;119:7204" type="FRAME" */}
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
            {/* name="🎰 slot" id="I246:16813;119:10199" type="FRAME" */}
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

export default Qode4324272Page
