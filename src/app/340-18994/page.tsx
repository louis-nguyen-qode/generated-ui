// id="340:18994"
import React from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom61606 } from "@designSystem/custom/QodeCustom61606"
import { QodeCustom433 } from "@designSystem/custom/QodeCustom433"
import { QodeButton } from "@designSystem/ant/QodeButton"
import { QodeCustom272038011 } from "@designSystem/custom/QodeCustom272038011"
import QodeSvg42320303 from "@designSystem/icon/svg/QodeSvg42320303"
import QodeSvg42320304 from "@designSystem/icon/svg/QodeSvg42320304"
import QodeSvg42320300 from "@designSystem/icon/svg/QodeSvg42320300"
import QodeSvg34019013 from "@designSystem/icon/svg/QodeSvg34019013"
import QodeSvg42320305 from "@designSystem/icon/svg/QodeSvg42320305"

export interface Qode34018994PageProps {}

export const Qode34018994Page: React.FC<Qode34018994PageProps> = ({
  ...rest
}) => {
  return (
    <>
      {/* name="Jobs | Search | No result" id="340:18994" type="FRAME" */}
      <div
        style={{
          display: "inline-flex",
          alignItems: "flex-start",
          background: "#FFF",
        }}
      >
        {/* name="Navbar" id="340:18995" type="INSTANCE" */}
        <Flex
          style={{
            display: "flex",
            width: "84px",
            height: "800px",
            flexDirection: "column",
            alignItems: "center",
            borderRight:
              "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
            background: "var(--background-bg-white, #fff)",
          }}
        >
          {/* name="Logo" id="I340:18995;1:3092" type="FRAME" */}
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
            {/* name="logo" id="I340:18995;635:31404" type="INSTANCE" */}
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
          {/* name="V-Menu" id="I340:18995;1:3094" type="FRAME" */}
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
            {/* name="Navbar/Menu" id="I340:18995;4:124" type="INSTANCE" */}
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
            {/* name="Navbar/Menu" id="I340:18995;16:5813" type="INSTANCE" */}
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
            {/* name="Navbar/Menu" id="I340:18995;4:54" type="INSTANCE" */}
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
            {/* name="Navbar/Menu" id="I340:18995;4:95" type="INSTANCE" */}
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
          {/* name="Btm" id="I340:18995;1:3098" type="FRAME" */}
          <div
            style={{
              display: "flex",
              padding: "16px 0px",
              flexDirection: "column",
              alignItems: "center",
              gap: "8px",
            }}
          >
            {/* name="Profile" id="I340:18995;1:3099" type="INSTANCE" */}
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
              {/* name="Button" id="I340:18995;1:3099;5007:11919" type="INSTANCE" */}
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
            {/* name="Profile" id="I340:18995;1:3100" type="INSTANCE" */}
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
              {/* name="Button" id="I340:18995;1:3100;5007:11919" type="INSTANCE" */}
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
        {/* name="Body" id="340:18996" type="FRAME" */}
        <div
          style={{
            display: "flex",
            width: "1196px",
            height: "800px",
            padding: "40px 40px 0px 40px",
            flexDirection: "column",
            alignItems: "center",
            gap: "40px",
            background: "var(--app-bg, #f4f4f6)",
          }}
        >
          {/* name="Header" id="340:18997" type="FRAME" */}
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
            {/* name="Search bar" id="340:18999" type="INSTANCE" */}
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
                showIconRight: true,
                suffix: "SUF",
                showSuffix: false,
                title: "Accountant",
                prefix: "PRE",
                iconRight: <Icon.QodeXmarkLarge />,
                showPrefix: false,
                iconLeft: <Icon.QodeMagnifyingGlass />,
                showIconLeft: true,
                state: "filled",
                status: "default",
                size: "large",
              }}
            />
            {/* name="Button" id="340:19000" type="INSTANCE" */}
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
          {/* name="Job list" id="340:19001" type="FRAME" */}
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
            {/* name="Empty message" id="423:20308" type="FRAME" */}
            <div
              style={{
                display: "flex",
                paddingTop: "80px",
                flexDirection: "column",
                alignItems: "center",
                gap: "20px",
              }}
            >
              {/* name="Illustration/Emtpy" id="340:19002" type="FRAME" */}
              <div style={{ width: "114px", height: "121px" }}>
                {/* name="Ellipse 9" id="423:20303" type="ELLIPSE" */}
                <QodeSvg42320303
                  style={{
                    width: "99px",
                    height: "99px",
                    flexShrink: "0",
                    fill: "#F0F0F0",
                    strokeWidth: "1px",
                    stroke: "#D7D7D7",
                  }}
                  {...{}}
                />
                {/* name="Group 47" id="423:20304" type="GROUP" */}
                <QodeSvg42320304
                  style={{
                    width: "90.009px",
                    height: "88.864px",
                    flexShrink: "0",
                  }}
                  {...{}}
                />
                {/* name="briefcase" id="423:20300" type="FRAME" */}
                <QodeSvg42320300
                  style={{
                    width: "27.243px",
                    height: "27.246px",
                    transform: "rotate(34.997deg)",
                    flexShrink: "0",
                  }}
                  {...{}}
                />
                {/* name="briefcase" id="340:19013" type="FRAME" */}
                <QodeSvg34019013
                  style={{
                    width: "20.696px",
                    height: "20.699px",
                    transform: "rotate(-146.235deg)",
                    flexShrink: "0",
                  }}
                  {...{}}
                />
                {/* name="briefcase" id="423:20305" type="FRAME" */}
                <QodeSvg42320305
                  style={{
                    width: "20.429px",
                    height: "20.426px",
                    transform: "rotate(-59.892deg)",
                    flexShrink: "0",
                  }}
                  {...{}}
                />
              </div>
              <span
                style={{
                  color: "var(--text-text-neutral-30, #656565)",
                  textAlign: "center",
                  fontFamily: '"SF Pro Display"',
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "24px /* 150% */",
                }}
              >{`No matching jobs in your listings`}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Qode34018994Page
