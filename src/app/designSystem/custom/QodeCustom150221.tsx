// id="150:221"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom150221Props {
  showDropdown?: boolean
  showTitle?: boolean
  showIcon?: boolean
  icon?: React.ReactNode
  title?: string
  state?: "default" | "hover" | "current"
}

export const QodeCustom150221: React.FC<
  QodeCustom150221Props & { style?: CSSProperties }
> = ({
  showDropdown = false,
  showTitle = true,
  showIcon = true,
  icon = undefined,
  title = "Breadcrumb link",
  state = "default",
  ...rest
}) => {
  return (
    <>
      {/* name=".breadcrumb__link" id="150:221" type="COMPONENT_SET" */}
      {/* id="150:213" */}
      {`${state}` === `default` && (
        <>
          {/* name="state=default" id="150:213" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              padding: "0px var(--size-padding-paddingxxs, 4px)",
              alignItems: "center",
              gap: "var(--size-padding-paddingxxs, 4px)",
              borderRadius: "var(--style-radius-borderradiussm, 6px)",
            }}
          >
            {/* name="Icon Wrapper" id="150:203" type="FRAME" */}
            <div
              style={{
                display: "flex",
                padding: "var(--size-padding-paddingxxs, 4px) 0px",
                alignItems: "flex-start",
              }}
            >
              {/* name="🎰 icon" id="150:201" type="INSTANCE" */}
              <Icon.QodeHouse
                style={{
                  width: "var(--font-size-base, 14px)",
                  height: "var(--font-size-base, 14px)",
                }}
                {...{}}
              />
            </div>
            <span
              style={{
                color:
                  "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight:
                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
              }}
            >{`Breadcrumb link`}</span>
            {/* name="Icon Wrapper" id="150:232" type="FRAME" */}
            <div
              style={{
                display: "flex",
                padding: "var(--size-padding-paddingxxs, 4px) 0px",
                alignItems: "flex-start",
              }}
            >
              {/* name="Dropdown Icon" id="150:233" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{
                  display: "flex",
                  width: "var(--font-size-base, 14px)",
                  height: "var(--font-size-base, 14px)",
                  padding: "4.898px 2.098px 3.501px 2.098px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                {...{}}
              />
            </div>
          </div>
        </>
      )}
      {/* id="150:222" */}
      {`${state}` === `hover` && (
        <>
          {/* name="state=hover" id="150:222" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              padding: "0px var(--size-padding-paddingxxs, 4px)",
              alignItems: "center",
              gap: "var(--size-padding-paddingxxs, 4px)",
              borderRadius: "var(--style-radius-borderradiussm, 6px)",
              background: "var(--color-primary-colorprimarybg, #f8fcff)",
            }}
          >
            {/* name="Icon Wrapper" id="150:223" type="FRAME" */}
            <div
              style={{
                display: "flex",
                padding: "var(--size-padding-paddingxxs, 4px) 0px",
                alignItems: "flex-start",
              }}
            >
              {/* name="🎰 icon" id="150:224" type="INSTANCE" */}
              <Icon.QodeHouse
                style={{
                  width: "var(--font-size-base, 14px)",
                  height: "var(--font-size-base, 14px)",
                }}
                {...{}}
              />
            </div>
            <span
              style={{
                color: "var(--color-primary-colorprimary, #1597f4)",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight:
                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
              }}
            >{`Breadcrumb link`}</span>
            {/* name="Icon Wrapper" id="150:235" type="FRAME" */}
            <div
              style={{
                display: "flex",
                padding: "var(--size-padding-paddingxxs, 4px) 0px",
                alignItems: "flex-start",
              }}
            >
              {/* name="Dropdown Icon" id="150:236" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{
                  display: "flex",
                  width: "var(--font-size-base, 14px)",
                  height: "var(--font-size-base, 14px)",
                  padding: "4.898px 2.098px 3.501px 2.098px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                {...{}}
              />
            </div>
          </div>
        </>
      )}
      {/* id="150:227" */}
      {`${state}` === `current` && (
        <>
          {/* name="state=current" id="150:227" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              padding: "0px var(--size-padding-paddingxxs, 4px)",
              alignItems: "center",
              gap: "var(--size-padding-paddingxxs, 4px)",
              borderRadius: "var(--style-radius-borderradiussm, 6px)",
            }}
          >
            {/* name="Icon Wrapper" id="150:228" type="FRAME" */}
            <div
              style={{
                display: "flex",
                padding: "var(--size-padding-paddingxxs, 4px) 0px",
                alignItems: "flex-start",
              }}
            >
              {/* name="🎰 icon" id="150:229" type="INSTANCE" */}
              <Icon.QodeHouse
                style={{
                  width: "var(--font-size-base, 14px)",
                  height: "var(--font-size-base, 14px)",
                }}
                {...{}}
              />
            </div>
            <span
              style={{
                color: "var(--color-primary-colorprimary, #1597f4)",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight:
                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
              }}
            >{`Breadcrumb link`}</span>
            {/* name="Icon Wrapper" id="150:238" type="FRAME" */}
            <div
              style={{
                display: "flex",
                padding: "var(--size-padding-paddingxxs, 4px) 0px",
                alignItems: "flex-start",
              }}
            >
              {/* name="Dropdown Icon" id="150:239" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{
                  display: "flex",
                  width: "var(--font-size-base, 14px)",
                  height: "var(--font-size-base, 14px)",
                  padding: "4.898px 2.098px 3.501px 2.098px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                {...{}}
              />
            </div>
          </div>
        </>
      )}
    </>
  )
}
