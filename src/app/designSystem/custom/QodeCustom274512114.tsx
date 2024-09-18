// id="2745:12114"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom274512114Props {
  title?: string
  lIcon?: React.ReactNode
  showLIcon?: boolean
  property_1?: "active" | "default" | "disabled" | "hover"
  property_2?: "line" | "solid"
}

export const QodeCustom274512114: React.FC<
  QodeCustom274512114Props & { style?: CSSProperties }
> = ({
  title = "Navigation Item",
  lIcon = undefined,
  showLIcon = true,
  property_1 = "default",
  property_2 = "line",
  ...rest
}) => {
  return (
    <>
      {/* name=".menu-item2" id="2745:12114" type="COMPONENT_SET" */}
      {/* id="2716:1712" */}
      {`${property_1}` === `default` && `${property_2}` === `line` && (
        <>
          {/* name="Property 1=default, Property 2=line" id="2716:1712" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              padding:
                "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* name="🎰 icon" id="2716:1713" type="INSTANCE" */}
            <Icon.QodeIcons style={{ width: "16px", height: "16px" }} {...{}} />
            <span
              style={{
                color:
                  "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-small, 12px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight:
                  "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
              }}
            >{`Navigation Item`}</span>
          </div>
        </>
      )}
      {/* id="2716:1715" */}
      {`${property_1}` === `default` && `${property_2}` === `solid` && (
        <>
          {/* name="Property 1=default, Property 2=solid" id="2716:1715" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              padding:
                "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* name="🎰 icon" id="2716:1716" type="INSTANCE" */}
            <Icon.QodeIcons style={{ width: "16px", height: "16px" }} {...{}} />
            <span
              style={{
                color:
                  "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-small, 12px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight:
                  "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
              }}
            >{`Navigation Item`}</span>
          </div>
        </>
      )}
      {/* id="2716:1718" */}
      {`${property_1}` === `hover` && `${property_2}` === `line` && (
        <>
          {/* name="Property 1=hover, Property 2=line" id="2716:1718" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              padding:
                "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              borderBottom:
                "var(--style-line-width-linewidthbold, 2px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
            }}
          >
            {/* name="🎰 icon" id="2716:1719" type="INSTANCE" */}
            <Icon.QodeIcons style={{ width: "16px", height: "16px" }} {...{}} />
            <span
              style={{
                color: "var(--color-neutral-text-colortext, #000)",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-small, 12px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight:
                  "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
              }}
            >{`Navigation Item`}</span>
          </div>
        </>
      )}
      {/* id="2716:1721" */}
      {`${property_1}` === `hover` && `${property_2}` === `solid` && (
        <>
          {/* name="Property 1=hover, Property 2=solid" id="2716:1721" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              padding:
                "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "var(--style-radius-borderradiuslg, 8px)",
              background:
                "var(--color-neutral-background-colorbgcontainer, #fff)",
            }}
          >
            {/* name="🎰 icon" id="2716:1722" type="INSTANCE" */}
            <Icon.QodeIcons style={{ width: "16px", height: "16px" }} {...{}} />
            <span
              style={{
                color: "var(--color-neutral-text-colortext, #000)",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-small, 12px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight:
                  "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
              }}
            >{`Navigation Item`}</span>
          </div>
        </>
      )}
      {/* id="2716:1724" */}
      {`${property_1}` === `active` && `${property_2}` === `line` && (
        <>
          {/* name="Property 1=active, Property 2=line" id="2716:1724" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              padding:
                "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              borderBottom:
                "var(--style-line-width-linewidthbold, 2px) solid var(--color-neutral-text-colortext, #000)",
            }}
          >
            {/* name="🎰 icon" id="2716:1725" type="INSTANCE" */}
            <Icon.QodeIcons style={{ width: "16px", height: "16px" }} {...{}} />
            <span
              style={{
                color: "var(--color-neutral-text-colortext, #000)",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-small, 12px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight:
                  "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
              }}
            >{`Navigation Item`}</span>
          </div>
        </>
      )}
      {/* id="2716:1727" */}
      {`${property_1}` === `active` && `${property_2}` === `solid` && (
        <>
          {/* name="Property 1=active, Property 2=solid" id="2716:1727" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              padding:
                "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "var(--style-radius-borderradiuslg, 8px)",
              background: "var(--color-primary-colorprimary, #1597f4)",
              boxShadow:
                "0px 2px 4px 0px rgba(0, 0, 0, 0.02), 0px 1px 6px -1px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.03)",
            }}
          >
            {/* name="🎰 icon" id="2716:1728" type="INSTANCE" */}
            <Icon.QodeIcons style={{ width: "16px", height: "16px" }} {...{}} />
            <span
              style={{
                color: "var(--color-neutral-text-colortextsolid, #fff)",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-small, 12px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight:
                  "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
              }}
            >{`Navigation Item`}</span>
          </div>
        </>
      )}
      {/* id="2716:1730" */}
      {`${property_1}` === `disabled` && `${property_2}` === `line` && (
        <>
          {/* name="Property 1=disabled, Property 2=line" id="2716:1730" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              padding:
                "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* name="🎰 icon" id="2716:1731" type="INSTANCE" */}
            <Icon.QodeIcons style={{ width: "16px", height: "16px" }} {...{}} />
            <span
              style={{
                color:
                  "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-small, 12px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight:
                  "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
              }}
            >{`Navigation Item`}</span>
          </div>
        </>
      )}
      {/* id="2716:1733" */}
      {`${property_1}` === `disabled` && `${property_2}` === `solid` && (
        <>
          {/* name="Property 1=disabled, Property 2=solid" id="2716:1733" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              padding:
                "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* name="🎰 icon" id="2716:1734" type="INSTANCE" */}
            <Icon.QodeIcons style={{ width: "16px", height: "16px" }} {...{}} />
            <span
              style={{
                color:
                  "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-small, 12px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight:
                  "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
              }}
            >{`Navigation Item`}</span>
          </div>
        </>
      )}
    </>
  )
}
