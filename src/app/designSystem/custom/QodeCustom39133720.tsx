// id="391:33720"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeTag } from "@designSystem/ant/QodeTag"
import { QodeBadge } from "@designSystem/ant/QodeBadge"
import { QodeButton } from "@designSystem/ant/QodeButton"

export interface QodeCustom39133720Props {
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
  showThumbnail?: "True" | "False" | "Timezone"
}

export const QodeCustom39133720: React.FC<
  QodeCustom39133720Props & { style?: CSSProperties }
> = ({
  timezone = true,
  showCheckbox = false,
  showSuffix = true,
  type = "Text",
  showThumbnail = "False",
  ...rest
}) => {
  return (
    <>
      {/* name="Table/Cell" id="391:33720" type="COMPONENT_SET" */}
      {/* id="391:33721" */}
      {`${type}` === `Text` && `${showThumbnail}` === `False` && (
        <>
          {/* name="Type=Text, Show Thumbnail=False" id="391:33721" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "228px",
              height: "48px",
              padding: "12px 16px",
              alignItems: "center",
              gap: "var(--size-size-sizexxs-6px, 6px)",
              flexShrink: "0",
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
      {/* id="391:33722" */}
      {`${type}` === `Text` && `${showThumbnail}` === `Timezone` && (
        <>
          {/* name="Type=Text, Show Thumbnail=Timezone" id="391:33722" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "212px",
              height: "48px",
              padding: "12px 16px",
              alignItems: "center",
              gap: "8px",
              flexShrink: "0",
              borderBottom:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
              background: "var(--background-bg-white, #fff)",
            }}
          >
            {/* name="Timezone" id="391:33737" type="FRAME" */}
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
              {/* name="-" id="391:33739" type="LINE" */}
              <Flex
                style={{
                  width: "1px",
                  height: "12px",
                  background: "var(--border-border-neutral-20, #e3e3e3)",
                }}
              >
                {/* name="-" id=391:33739 type=LINE */}
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
      {/* id="391:33723" */}
      {`${type}` === `Text` && `${showThumbnail}` === `True` && (
        <>
          {/* name="Type=Text, Show Thumbnail=True" id="391:33723" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "228px",
              height: "48px",
              padding: "12px 16px",
              alignItems: "center",
              gap: "12px",
              flexShrink: "0",
              borderBottom:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
              background: "var(--background-bg-white, #fff)",
            }}
          >
            {/* name="_Table/Cell thumbnail" id="391:33741" type="INSTANCE" */}
            <div
              style={{
                display: "flex",
                width: "28px",
                height: "28px",
                padding: "6px",
                justifyContent: "center",
                alignItems: "center",
                flexShrink: "0",
                borderRadius: "4px",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-gray-50, #1a1a1a)",
                background:
                  "linear-gradient(316deg, #D1D1D1 0.71%, #ECECEC 99.29%)",
              }}
              {...{ size: "28" }}
            />
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
                fontWeight: "500",
                lineHeight:
                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
              }}
            >{`Table cell content`}</span>
          </div>
        </>
      )}
      {/* id="391:33724" */}
      {`${type}` === `Text - 2 lines` && `${showThumbnail}` === `False` && (
        <>
          {/* name="Type=Text - 2 lines, Show Thumbnail=False" id="391:33724" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "228px",
              height: "48px",
              padding: "8px 16px",
              alignItems: "center",
              gap: "8px",
              flexShrink: "0",
              borderBottom:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
              background: "var(--background-bg-white, #fff)",
            }}
          >
            {/* name="Icon/checkbox" id="391:33743" type="INSTANCE" */}
            <div
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
            {/* name="Wrap" id="391:33744" type="FRAME" */}
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
      {/* id="391:33725" */}
      {`${type}` === `Text - 2 lines` && `${showThumbnail}` === `True` && (
        <>
          {/* name="Type=Text - 2 lines, Show Thumbnail=True" id="391:33725" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "228px",
              height: "48px",
              padding: "8px 16px",
              alignItems: "center",
              gap: "12px",
              flexShrink: "0",
              borderBottom:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
              background: "var(--background-bg-white, #fff)",
            }}
          >
            {/* name="Icon/checkbox" id="391:33747" type="INSTANCE" */}
            <div
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
            {/* name="_Table/Cell thumbnail" id="391:33748" type="INSTANCE" */}
            <div
              style={{
                display: "flex",
                width: "28px",
                height: "28px",
                padding: "6px",
                justifyContent: "center",
                alignItems: "center",
                flexShrink: "0",
                borderRadius: "4px",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-gray-50, #1a1a1a)",
                background:
                  "linear-gradient(316deg, #D1D1D1 0.71%, #ECECEC 99.29%)",
              }}
              {...{ size: "28" }}
            />
            {/* name="Wrap" id="391:33749" type="FRAME" */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                gap: "2px",
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
                  fontWeight: "500",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Table cell`}</span>
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
      {/* id="391:33726" */}
      {`${type}` === `Clickable` && `${showThumbnail}` === `False` && (
        <>
          {/* name="Type=Clickable, Show Thumbnail=False" id="391:33726" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "228px",
              height: "48px",
              padding: "12px 16px",
              alignItems: "center",
              gap: "var(--size-size-sizexxs-6px, 6px)",
              flexShrink: "0",
              borderBottom:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
              background: "var(--background-bg-white, #fff)",
            }}
          >
            {/* name="Icon/checkbox" id="391:33752" type="INSTANCE" */}
            <div
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
                color: "var(--text-text-neutral-50, #1d1d1d)",
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
      {/* id="391:33727" */}
      {`${type}` === `Clickable` && `${showThumbnail}` === `True` && (
        <>
          {/* name="Type=Clickable, Show Thumbnail=True" id="391:33727" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "228px",
              height: "48px",
              padding: "12px 16px",
              alignItems: "center",
              gap: "12px",
              flexShrink: "0",
              borderBottom:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
              background: "var(--background-bg-white, #fff)",
            }}
          >
            {/* name="Icon/checkbox" id="391:33754" type="INSTANCE" */}
            <div
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
            {/* name="_Table/Cell thumbnail" id="391:33755" type="INSTANCE" */}
            <div
              style={{
                display: "flex",
                width: "28px",
                height: "28px",
                padding: "6px",
                justifyContent: "center",
                alignItems: "center",
                flexShrink: "0",
                borderRadius: "4px",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-gray-50, #1a1a1a)",
                background:
                  "linear-gradient(316deg, #D1D1D1 0.71%, #ECECEC 99.29%)",
              }}
              {...{ size: "28" }}
            />
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
                fontWeight: "500",
                lineHeight:
                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
              }}
            >{`Table cell`}</span>
          </div>
        </>
      )}
      {/* id="391:33728" */}
      {`${type}` === `Number` && `${showThumbnail}` === `False` && (
        <>
          {/* name="Type=Number, Show Thumbnail=False" id="391:33728" type="COMPONENT" */}
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
      {/* id="391:33729" */}
      {`${type}` === `Tag` && `${showThumbnail}` === `False` && (
        <>
          {/* name="Type=Tag, Show Thumbnail=False" id="391:33729" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "133px",
              height: "48px",
              padding: "12px 16px",
              alignItems: "center",
              gap: "var(--size-size-sizexxs-6px, 6px)",
              flexShrink: "0",
              borderBottom:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
              background: "var(--background-bg-white, #fff)",
            }}
          >
            {/* name="Tag" id="391:33759" type="INSTANCE" */}
            <QodeTag
              style={{
                display: "flex",
                height: "24px",
                padding: "0px 12px",
                alignItems: "center",
                gap: "var(--size-size-sizexxs-6px, 6px)",
                borderRadius: "var(--border-radius-rounded, 999px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--primary-primary-40, #64b9f5)",
                background: "var(--primary-primary-10, #d6eeff)",
              }}
              {...{
                showRIcon: true,
                rIcon: <Icon.QodeXmark />,
                color: "primary",
                state: "default",
                size: "rouned",
                rounded: "True",
              }}
            />
            {/* name="Tag" id="391:33760" type="INSTANCE" */}
            <QodeTag
              style={{
                display: "flex",
                height: "24px",
                padding: "0px 12px",
                alignItems: "center",
                gap: "var(--size-size-sizexxs-6px, 6px)",
                borderRadius: "var(--border-radius-rounded, 999px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--primary-primary-40, #64b9f5)",
                background: "var(--primary-primary-10, #d6eeff)",
              }}
              {...{
                showRIcon: true,
                rIcon: <Icon.QodeXmark />,
                color: "primary",
                state: "default",
                size: "rouned",
                rounded: "True",
              }}
            />
          </div>
        </>
      )}
      {/* id="391:33730" */}
      {`${type}` === `Dot badge` && `${showThumbnail}` === `False` && (
        <>
          {/* name="Type=Dot badge, Show Thumbnail=False" id="391:33730" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "120px",
              height: "48px",
              padding: "12px 16px",
              alignItems: "center",
              gap: "var(--size-size-sizexxs-6px, 6px)",
              flexShrink: "0",
              borderBottom:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
              background: "var(--background-bg-white, #fff)",
            }}
          >
            {/* name="Badge__Status" id="391:33761" type="INSTANCE" */}
            <QodeBadge
              style={{ display: "flex", alignItems: "center", gap: "8px" }}
              {...{ showLabel: true, status: "success" }}
            />
          </div>
        </>
      )}
      {/* id="391:33731" */}
      {`${type}` === `Show more` && `${showThumbnail}` === `False` && (
        <>
          {/* name="Type=Show more, Show Thumbnail=False" id="391:33731" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "62px",
              height: "49px",
              padding: "12px 16px",
              justifyContent: "center",
              alignItems: "center",
              gap: "12px",
              flexShrink: "0",
              borderBottom:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
              background: "var(--background-bg-white, #fff)",
            }}
          >
            {/* name="ellipsis" id="391:33762" type="INSTANCE" */}
            <Icon.QodeEllipsis
              style={{ width: "24px", height: "24px", flexShrink: "0" }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="391:33732" */}
      {`${type}` === `Checkbox` && `${showThumbnail}` === `False` && (
        <>
          {/* name="Type=Checkbox, Show Thumbnail=False" id="391:33732" type="COMPONENT" */}
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
              borderBottom:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
              background: "var(--background-bg-white, #fff)",
            }}
          >
            {/* name="Icon/checkbox" id="391:33763" type="INSTANCE" */}
            <div
              style={{ width: "24px", height: "24px", flexShrink: "0" }}
              {...{ state: "Default" }}
            />
          </div>
        </>
      )}
      {/* id="391:33733" */}
      {`${type}` === `1 Button` && `${showThumbnail}` === `False` && (
        <>
          {/* name="Type=1 Button, Show Thumbnail=False" id="391:33733" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "156px",
              height: "49px",
              padding: "12px 16px",
              justifyContent: "center",
              alignItems: "center",
              gap: "12px",
              flexShrink: "0",
              borderBottom:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
              background: "var(--background-bg-white, #fff)",
            }}
          >
            {/* name="Button" id="391:33764" type="INSTANCE" */}
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
                selectIconLeft: <Icon.QodeIcons />,
                buttonname: "Button",
                selectIconRight: <Icon.QodeMagnifyingGlass />,
                onlyIcon: <Icon.QodeMagnifyingGlass />,
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
      {/* id="391:33734" */}
      {`${type}` === `2 Button` && `${showThumbnail}` === `False` && (
        <>
          {/* name="Type=2 Button, Show Thumbnail=False" id="391:33734" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              height: "49px",
              padding: "12px 8px",
              justifyContent: "center",
              alignItems: "center",
              gap: "8px",
              flexShrink: "0",
              borderBottom:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
              background: "var(--background-bg-white, #fff)",
            }}
          >
            {/* name="Button" id="391:33765" type="INSTANCE" */}
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
                selectIconLeft: <Icon.QodeIcons />,
                buttonname: "Button",
                selectIconRight: <Icon.QodeMagnifyingGlass />,
                onlyIcon: <Icon.QodeMagnifyingGlass />,
                type: "primary",
                size: "small",
                state: "default",
                content: "default",
                danger: false,
                ghost: true,
              }}
            />
            {/* name="Button" id="391:33766" type="INSTANCE" */}
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
                selectIconLeft: <Icon.QodeIcons />,
                buttonname: "Button",
                selectIconRight: <Icon.QodeMagnifyingGlass />,
                onlyIcon: <Icon.QodeMagnifyingGlass />,
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
      {/* id="391:33735" */}
      {`${type}` === `Icon buttons` && `${showThumbnail}` === `False` && (
        <>
          {/* name="Type=Icon buttons, Show Thumbnail=False" id="391:33735" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              height: "49px",
              padding: "12px 8px",
              justifyContent: "center",
              alignItems: "center",
              gap: "12px",
              flexShrink: "0",
              borderBottom:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
              background: "var(--background-bg-white, #fff)",
            }}
          >
            {/* name="ellipsis" id="391:33767" type="INSTANCE" */}
            <Icon.QodeEllipsis
              style={{ width: "24px", height: "24px" }}
              {...{}}
            />
            {/* name="ellipsis" id="391:33768" type="INSTANCE" */}
            <Icon.QodeEllipsis
              style={{ width: "24px", height: "24px" }}
              {...{}}
            />
            {/* name="ellipsis" id="391:33769" type="INSTANCE" */}
            <Icon.QodeEllipsis
              style={{ width: "24px", height: "24px" }}
              {...{}}
            />
            {/* name="ellipsis" id="391:33770" type="INSTANCE" */}
            <Icon.QodeEllipsis
              style={{ width: "24px", height: "24px" }}
              {...{}}
            />
          </div>
        </>
      )}
    </>
  )
}
