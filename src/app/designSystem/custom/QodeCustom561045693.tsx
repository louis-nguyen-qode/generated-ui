// id="5610:45693"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg561044931 from "@designSystem/icon/svg/QodeSvg561044931"
import { QodeTag } from "@designSystem/ant/QodeTag"
import { QodeBadge } from "@designSystem/ant/QodeBadge"
import { QodeButton } from "@designSystem/ant/QodeButton"

export interface QodeCustom561045693Props {
  badge?: React.ReactNode
  thumbnail?: boolean
  timezone?: boolean
  showCheckbox?: boolean
  showSuffix?: boolean
  type?:
    | "Text"
    | "Clickable"
    | "Text - 2 lines"
    | "Number"
    | "Dot badge"
    | "Show more"
    | "1 Button"
    | "2 Button"
    | "Checkbox"
    | "Icon buttons"
    | "Tag"
    | "Time"
}

export const QodeCustom561045693: React.FC<
  QodeCustom561045693Props & { style?: CSSProperties }
> = ({
  badge = undefined,
  thumbnail = true,
  timezone = true,
  showCheckbox = false,
  showSuffix = true,
  type = "Text",
  ...rest
}) => {
  return (
    <>
      {/* name="Table/Cell" id="5610:45693" type="COMPONENT_SET" */}
      {/* id="5610:45694" */}
      {`${type}` === `Text` && (
        <>
          {/* name="Type=Text" id="5610:45694" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "228px",
              height: "48px",
              padding: "12px 16px",
              alignItems: "center",
              gap: "6px",
              flexShrink: "0",
              borderRight:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
              borderBottom:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
              background: "var(--background-bg-white, #fff)",
            }}
          >
            <span
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                flex: "1 0 0",
                alignSelf: "stretch",
                overflow: "hidden",
                color: "var(--text-text-neutral-50, #1d1d1d)",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight:
                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
              }}
            >{`Text content`}</span>
          </div>
        </>
      )}
      {/* id="5610:45704" */}
      {`${type}` === `Text - 2 lines` && (
        <>
          {/* name="Type=Text - 2 lines" id="5610:45704" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "228px",
              height: "48px",
              padding: "8px 16px",
              alignItems: "center",
              gap: "8px",
              flexShrink: "0",
              borderRight:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
              borderBottom:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
              background: "var(--background-bg-white, #fff)",
            }}
          >
            {/* name="Icon/checkbox" id="5610:45705" type="INSTANCE" */}
            <QodeSvg561044931
              style={{
                display: "flex",
                width: "20px",
                height: "20px",
                padding: "2.5px",
                justifyContent: "center",
                alignItems: "center",
                flexShrink: "0",
              }}
              {...{ state: "Default" }}
            />
            {/* name="Wrap" id="5610:45706" type="FRAME" */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                flex: "1 0 0",
              }}
            >
              <span
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: "1",
                  alignSelf: "stretch",
                  overflow: "hidden",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  textOverflow: "ellipsis",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Title`}</span>
              <span
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: "1",
                  alignSelf: "stretch",
                  overflow: "hidden",
                  color: "var(--text-text-neutral-30, #656565)",
                  textOverflow: "ellipsis",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-small, 12px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                }}
              >{`Sub text`}</span>
            </div>
          </div>
        </>
      )}
      {/* id="5610:45726" */}
      {`${type}` === `Clickable` && (
        <>
          {/* name="Type=Clickable" id="5610:45726" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "228px",
              height: "48px",
              padding: "12px 16px",
              alignItems: "center",
              gap: "6px",
              flexShrink: "0",
              borderRight:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
              borderBottom:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
              background: "var(--background-bg-white, #fff)",
            }}
          >
            {/* name="Icon/checkbox" id="5610:45727" type="INSTANCE" */}
            <QodeSvg561044931
              style={{
                display: "flex",
                width: "20px",
                height: "20px",
                padding: "2.5px",
                justifyContent: "center",
                alignItems: "center",
                flexShrink: "0",
              }}
              {...{ state: "Default" }}
            />
            <span
              style={{
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: "1",
                flex: "1 0 0",
                overflow: "hidden",
                color: "var(--text-text-neutral-40, #464646)",
                textOverflow: "ellipsis",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight:
                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                textDecorationLine: "underline",
              }}
            >{`Title`}</span>
          </div>
        </>
      )}
      {/* id="5610:45740" */}
      {`${type}` === `Number` && (
        <>
          {/* name="Type=Number" id="5610:45740" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "228px",
              height: "48px",
              padding: "12px 16px",
              justifyContent: "flex-end",
              alignItems: "center",
              gap: "4px",
              flexShrink: "0",
              borderRight:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
              borderBottom:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
              background: "var(--background-bg-white, #fff)",
            }}
          >
            <span
              style={{
                color: "var(--text-text-neutral-50, #1d1d1d)",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight:
                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
              }}
            >{`012345`}</span>
            <span
              style={{
                color: "var(--text-text-neutral-20, #878787)",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight:
                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
              }}
            >{`₫`}</span>
          </div>
        </>
      )}
      {/* id="5610:45746" */}
      {`${type}` === `Tag` && (
        <>
          {/* name="Type=Tag" id="5610:45746" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "133px",
              height: "48px",
              padding: "12px 16px",
              alignItems: "center",
              gap: "6px",
              flexShrink: "0",
              borderRight:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
              borderBottom:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
              background: "var(--background-bg-white, #fff)",
            }}
          >
            {/* name="Tag" id="5868:117" type="INSTANCE" */}
            <QodeTag
              style={{
                display: "flex",
                height: "24px",
                padding: "0px 12px",
                alignItems: "center",
                gap: "6px",
                borderRadius: "var(--border-radius-rounded, 999px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--primary-primary-40, #64b9f5)",
                background: "var(--primary-primary-10, #d6eeff)",
              }}
              {...{
                showRIcon: true,
                color: "primary",
                state: "default",
                size: "rouned",
                rounded: "True",
              }}
            />
            {/* name="Tag" id="5868:122" type="INSTANCE" */}
            <QodeTag
              style={{
                display: "flex",
                height: "24px",
                padding: "0px 12px",
                alignItems: "center",
                gap: "6px",
                borderRadius: "var(--border-radius-rounded, 999px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--primary-primary-40, #64b9f5)",
                background: "var(--primary-primary-10, #d6eeff)",
              }}
              {...{
                showRIcon: true,
                color: "primary",
                state: "default",
                size: "rouned",
                rounded: "True",
              }}
            />
          </div>
        </>
      )}
      {/* id="5895:57" */}
      {`${type}` === `Dot badge` && (
        <>
          {/* name="Type=Dot badge" id="5895:57" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "120px",
              height: "48px",
              padding: "12px 16px",
              alignItems: "center",
              gap: "6px",
              flexShrink: "0",
              borderRight:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
              borderBottom:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
              background: "var(--background-bg-white, #fff)",
            }}
          >
            {/* name="Badge__Status" id="5951:194" type="INSTANCE" */}
            <QodeBadge
              style={{ display: "flex", alignItems: "center", gap: "8px" }}
              {...{ showLabel: true, status: "success" }}
            />
          </div>
        </>
      )}
      {/* id="5610:45758" */}
      {`${type}` === `Checkbox` && (
        <>
          {/* name="Type=Checkbox" id="5610:45758" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "56px",
              height: "48px",
              padding: "12px 16px",
              justifyContent: "center",
              alignItems: "center",
              gap: "12px",
              flexShrink: "0",
              borderRight:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
              borderBottom:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
              background: "var(--background-bg-white, #fff)",
            }}
          >
            {/* name="Icon/checkbox" id="5610:45759" type="INSTANCE" */}
            <QodeSvg561044931
              style={{ width: "24px", height: "24px", flexShrink: "0" }}
              {...{ state: "Default" }}
            />
          </div>
        </>
      )}
      {/* id="5610:45754" */}
      {`${type}` === `Show more` && (
        <>
          {/* name="Type=Show more" id="5610:45754" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "62px",
              height: "48px",
              padding: "12px 16px",
              justifyContent: "center",
              alignItems: "center",
              gap: "12px",
              flexShrink: "0",
              borderRight:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
              borderBottom:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
              background: "var(--background-bg-white, #fff)",
            }}
          >
            {/* name="ellipsis" id="5610:45755" type="INSTANCE" */}
            <Icon.QodeEllipsis
              style={{ width: "24px", height: "24px", flexShrink: "0" }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="5610:45762" */}
      {`${type}` === `1 Button` && (
        <>
          {/* name="Type=1 Button" id="5610:45762" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "156px",
              height: "48px",
              padding: "12px 16px",
              justifyContent: "center",
              alignItems: "center",
              gap: "12px",
              flexShrink: "0",
              borderRight:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
              borderBottom:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
              background: "var(--background-bg-white, #fff)",
            }}
          >
            {/* name="Button" id="5610:50770" type="INSTANCE" */}
            <QodeButton
              style={{
                display: "flex",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "4px 8px",
                justifyContent: "center",
                alignItems: "center",
                gap: "4px",
                borderRadius: "var(--border-radius-rounded, 999px)",
                border: "1px solid var(--border-border-primary-30, #107ecc)",
                background: "var(--background-bg-primary, #1597f4)",
              }}
              {...{
                buttonname: "Button",
                type: "primary",
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
      {/* id="5610:45766" */}
      {`${type}` === `2 Button` && (
        <>
          {/* name="Type=2 Button" id="5610:45766" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              height: "48px",
              padding: "12px 8px",
              justifyContent: "center",
              alignItems: "center",
              gap: "8px",
              flexShrink: "0",
              borderRight:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
              borderBottom:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
              background: "var(--background-bg-white, #fff)",
            }}
          >
            {/* name="Button" id="5610:50782" type="INSTANCE" */}
            <QodeButton
              style={{
                display: "flex",
                height: "var(--size-height-controlheightsm, 24px)",
                padding:
                  "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                borderRadius: "var(--border-radius-rounded, 999px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-primary-20, #158de2)",
              }}
              {...{
                buttonname: "Button",
                type: "primary",
                size: "small",
                state: "default",
                content: "default",
                danger: false,
                ghost: true,
              }}
            />
            {/* name="Button" id="5610:50776" type="INSTANCE" */}
            <QodeButton
              style={{
                display: "flex",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "4px 8px",
                justifyContent: "center",
                alignItems: "center",
                gap: "4px",
                borderRadius: "var(--border-radius-rounded, 999px)",
                border: "1px solid var(--border-border-primary-30, #107ecc)",
                background: "var(--background-bg-primary, #1597f4)",
              }}
              {...{
                buttonname: "Button",
                type: "primary",
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
      {/* id="5610:45772" */}
      {`${type}` === `Icon buttons` && (
        <>
          {/* name="Type=Icon buttons" id="5610:45772" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              height: "48px",
              padding: "12px 8px",
              justifyContent: "center",
              alignItems: "center",
              gap: "12px",
              flexShrink: "0",
              borderRight:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
              borderBottom:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
              background: "var(--background-bg-white, #fff)",
            }}
          >
            {/* name="ellipsis" id="5643:103" type="INSTANCE" */}
            <Icon.QodeEllipsis
              style={{ width: "24px", height: "24px" }}
              {...{}}
            />
            {/* name="ellipsis" id="5643:105" type="INSTANCE" */}
            <Icon.QodeEllipsis
              style={{ width: "24px", height: "24px" }}
              {...{}}
            />
            {/* name="ellipsis" id="5643:107" type="INSTANCE" */}
            <Icon.QodeEllipsis
              style={{ width: "24px", height: "24px" }}
              {...{}}
            />
            {/* name="ellipsis" id="5643:109" type="INSTANCE" */}
            <Icon.QodeEllipsis
              style={{ width: "24px", height: "24px" }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="5922:3472" */}
      {`${type}` === `Time` && (
        <>
          {/* name="Type=Time" id="5922:3472" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "212px",
              height: "48px",
              padding: "12px 16px",
              alignItems: "center",
              gap: "8px",
              flexShrink: "0",
              borderRight:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
              borderBottom:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
              background: "var(--background-bg-white, #fff)",
            }}
          >
            {/* name="Timezone" id="5922:3495" type="FRAME" */}
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: "1",
                  overflow: "hidden",
                  color: "var(--text-text-neutral-30, #656565)",
                  textAlign: "center",
                  textOverflow: "ellipsis",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-small, 12px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                }}
              >{`UTC +7`}</span>
              {/* name="-" id="5922:3485" type="LINE" */}
              <Flex
                style={{
                  width: "1px",
                  height: "12px",
                  background: "var(--border-border-neutral-20, #e3e3e3)",
                }}
              >
                {/* name="-" id=5922:3485 type=LINE */}
                <></>
              </Flex>
            </div>
            <span
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                flex: "1 0 0",
                alignSelf: "stretch",
                overflow: "hidden",
                color: "var(--text-text-neutral-50, #1d1d1d)",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight:
                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
              }}
            >{`12:30 AM – 1:30 PM`}</span>
          </div>
        </>
      )}
    </>
  )
}
