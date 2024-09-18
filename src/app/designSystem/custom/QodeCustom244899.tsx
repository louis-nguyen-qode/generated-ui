// id="24:4899"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeButton } from "@designSystem/ant/QodeButton"
import { QodeCustom6308727 } from "@designSystem/custom/QodeCustom6308727"

export interface QodeCustom244899Props {
  description?: boolean
  university?: string
  time?: string
  edit?: boolean
  major?: boolean
  state?: "Default" | "Hover"
}

export const QodeCustom244899: React.FC<
  QodeCustom244899Props & { style?: CSSProperties }
> = ({
  description = true,
  university = "University",
  time = "2012-2016",
  edit = false,
  major = true,
  state = "Default",
  ...rest
}) => {
  return (
    <>
      {/* name="educationItem" id="24:4899" type="COMPONENT_SET" */}
      {/* id="24:4900" */}
      {`${state}` === `Default` && (
        <>
          {/* name="State=Default" id="24:4900" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "496px",
              paddingBottom: "var(--size-padding-paddingsm, 12px)",
              alignItems: "flex-start",
              gap: "var(--size-margin-marginsm, 12px)",
              borderBottom:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
            }}
          >
            {/* name="avatar" id="24:4901" type="INSTANCE" */}
            <div
              style={{
                display: "flex",
                width: "42px",
                height: "42px",
                padding: "0px var(--size-padding-paddingxxs, 4px)",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--font-size-large, 16px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
              {...{
                opentowork: true,
                img: true,
                type: "Square",
                state: "Default",
              }}
            />
            {/* name="content" id="24:4902" type="FRAME" */}
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
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight: "var(--line-height-lineheighlg, 24px) /* 150% */",
                }}
              >{`University`}</span>
              <span
                style={{
                  alignSelf: "stretch",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Major`}</span>
              <span
                style={{
                  alignSelf: "stretch",
                  color: "var(--text-text-neutral-20, #878787)",
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--line-height-lineheight, 20px) /* 142.857% */",
                }}
              >{`2012-2016`}</span>
              {/* name="experienceDescription" id="24:4906" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-end",
                  gap: "var(--size-margin-marginxs, 8px)",
                  alignSelf: "stretch",
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
                >{`Description`}</span>
                {/* name="Button" id="24:4908" type="INSTANCE" */}
                <QodeButton
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxxs, 4px)",
                    borderRadius: "var(--style-radius-borderround, 999px)",
                  }}
                  {...{
                    icononly: <Icon.QodeMagnifyingGlass />,
                    title: "See More",
                    iconR: <Icon.QodeMagnifyingGlass />,
                    type: "text",
                    size: "small",
                    state: "default",
                    content: "default",
                    danger: false,
                    ghost: false,
                  }}
                />
              </div>
            </div>
            {/* name="Button" id="24:4909" type="INSTANCE" */}
            <QodeButton
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                borderRadius: "var(--style-radius-borderround, 999px)",
              }}
              {...{
                iconR: "<QodeCustom6308727 />",
                icononly: <Icon.QodePencil />,
                title: "Edit",
                iconL: true,
                type: "link",
                size: "small",
                state: "default",
                content: "default",
                danger: false,
                ghost: false,
              }}
            />
          </div>
        </>
      )}
      {/* id="24:4910" */}
      {`${state}` === `Hover` && (
        <>
          {/* name="State=Hover" id="24:4910" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "496px",
              paddingBottom: "var(--size-padding-paddingsm, 12px)",
              alignItems: "flex-start",
              gap: "var(--size-margin-marginsm, 12px)",
              borderBottom:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
            }}
          >
            {/* name="avatar" id="24:4911" type="INSTANCE" */}
            <div
              style={{
                display: "flex",
                width: "42px",
                height: "42px",
                padding: "0px var(--size-padding-paddingxxs, 4px)",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--font-size-large, 16px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
              {...{
                opentowork: true,
                img: true,
                type: "Square",
                state: "Default",
              }}
            />
            {/* name="content" id="24:4912" type="FRAME" */}
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
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight: "var(--line-height-lineheighlg, 24px) /* 150% */",
                }}
              >{`University`}</span>
              <span
                style={{
                  alignSelf: "stretch",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Major`}</span>
              <span
                style={{
                  alignSelf: "stretch",
                  color: "var(--text-text-neutral-20, #878787)",
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--line-height-lineheight, 20px) /* 142.857% */",
                }}
              >{`2012-2016`}</span>
              {/* name="experienceDescription" id="24:4916" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-end",
                  gap: "var(--size-margin-marginxs, 8px)",
                  alignSelf: "stretch",
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
                >{`Description`}</span>
                {/* name="Button" id="24:4918" type="INSTANCE" */}
                <QodeButton
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxxs, 4px)",
                    borderRadius: "var(--style-radius-borderround, 999px)",
                  }}
                  {...{
                    icononly: <Icon.QodeMagnifyingGlass />,
                    title: "See More",
                    iconR: <Icon.QodeMagnifyingGlass />,
                    type: "text",
                    size: "small",
                    state: "default",
                    content: "default",
                    danger: false,
                    ghost: false,
                  }}
                />
              </div>
            </div>
            {/* name="Button" id="24:4919" type="INSTANCE" */}
            <QodeButton
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                borderRadius: "var(--style-radius-borderround, 999px)",
              }}
              {...{
                iconR: "<QodeCustom6308727 />",
                icononly: <Icon.QodePencil />,
                title: "Edit",
                iconL: true,
                type: "link",
                size: "small",
                state: "default",
                content: "default",
                danger: false,
                ghost: false,
              }}
            />
          </div>
        </>
      )}
    </>
  )
}
