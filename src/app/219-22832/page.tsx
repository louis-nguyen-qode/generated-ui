// id="219:22832"
import React from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom13120 } from "@designSystem/custom/QodeCustom13120"
import { QodeButton } from "@designSystem/ant/QodeButton"
import { QodeCustom18216941 } from "@designSystem/custom/QodeCustom18216941"

export interface Qode21922832PageProps {}

export const Qode21922832Page: React.FC<Qode21922832PageProps> = ({
  ...rest
}) => {
  return (
    <>
      {/* name="Jobs | Empty" id="219:22832" type="FRAME" */}
      <div
        style={{
          display: "flex",
          width: "1280px",
          height: "800px",
          alignItems: "flex-start",
          background: "#FFF",
        }}
      >
        {/* name="Navbar" id="219:22833" type="INSTANCE" */}
        <QodeCustom13120
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
          {...{}}
        />
        {/* name="Body" id="219:22834" type="FRAME" */}
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
          {/* name="Body" id="219:23482" type="FRAME" */}
          <div
            style={{
              display: "flex",
              width: "500px",
              flexDirection: "column",
              alignItems: "center",
              gap: "40px",
            }}
          >
            {/* name="Title" id="378:19746" type="FRAME" */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "12px",
                alignSelf: "stretch",
              }}
            >
              {/* name="Icon" id="378:19747" type="FRAME" */}
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
                {/* name="briefcase" id="378:19748" type="INSTANCE" */}
                <Icon.QodeBriefcase
                  style={{ width: "24px", height: "24px", flexShrink: "0" }}
                  {...{}}
                />
              </div>
              <span
                style={{
                  alignSelf: "stretch",
                  color: "var(--text-text-primary-20, #1597f4)",
                  textAlign: "center",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-xlarge, 20px)",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "var(--lineheight-lineheight-xl, 28px)",
                }}
              >{`Search for candidates from billions of data points, get data-driven insights, find contact info, and more!`}</span>
            </div>
            {/* name="body" id="378:19410" type="FRAME" */}
            <div
              style={{
                display: "flex",
                height: "482px",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "12px",
                alignSelf: "stretch",
              }}
            >
              {/* name="Button" id="378:19411" type="INSTANCE" */}
              <QodeButton
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "4px 16px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "8px",
                  flexShrink: "0",
                  alignSelf: "stretch",
                  borderRadius: "var(--border-radius-rounded, 999px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) dashed var(--border-border-primary-20, #158de2)",
                  background: "var(--background-bg-white, #fff)",
                }}
                {...{
                  selectIconLeft: <Icon.QodeUpload />,
                  buttonname: "Upload JD",
                  selectIconRight: <Icon.QodeMagnifyingGlass />,
                  onlyIcon: <Icon.QodeMagnifyingGlass />,
                  iconLeft: true,
                  type: "dashed",
                  size: "default",
                  state: "default",
                  content: "default",
                  danger: false,
                  ghost: false,
                }}
              />
              {/* name="Frame 37126" id="378:19412" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  flex: "1 0 0",
                  alignSelf: "stretch",
                }}
              >
                {/* name="Input__Text Area" id="378:19413" type="INSTANCE" */}
                <QodeCustom18216941
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
                  {...{
                    title: "Or paste your job description here",
                    state: "default",
                    size: "default",
                  }}
                />
              </div>
              {/* name="Button" id="378:19427" type="INSTANCE" */}
              <QodeButton
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "4px 16px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "8px",
                  flexShrink: "0",
                  alignSelf: "stretch",
                  borderRadius: "var(--border-radius-rounded, 999px)",
                  border: "1px solid var(--border-border-primary-30, #107ecc)",
                  background: "var(--background-bg-primary, #1597f4)",
                }}
                {...{
                  onlyIcon: <Icon.QodeMagnifyingGlass />,
                  buttonname: "Next",
                  selectIconRight: <Icon.QodeMagnifyingGlass />,
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
      </div>
    </>
  )
}

export default Qode21922832Page
