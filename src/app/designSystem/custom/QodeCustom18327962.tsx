// id="183:27962"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom1829242 } from "@designSystem/custom/QodeCustom1829242"
import { QodeCustom1829244 } from "@designSystem/custom/QodeCustom1829244"
import { QodeCustom1829265 } from "@designSystem/custom/QodeCustom1829265"
import { QodeCustom1829269 } from "@designSystem/custom/QodeCustom1829269"
import { QodeCustom1829277 } from "@designSystem/custom/QodeCustom1829277"
import { QodeCustom1829281 } from "@designSystem/custom/QodeCustom1829281"

export interface QodeCustom18327962Props {
  showPre?: boolean
  title?: string
  showPost?: boolean
  size?: "default" | "large" | "small"
}

export const QodeCustom18327962: React.FC<
  QodeCustom18327962Props & { style?: CSSProperties }
> = ({
  showPre = true,
  title = "Input",
  showPost = true,
  size = "default",
  ...rest
}) => {
  return (
    <>
      {/* name="Input__Pre Post Tab" id="183:27962" type="COMPONENT_SET" */}
      {/* id="183:27956" */}
      {`${size}` === `default` && (
        <>
          {/* name="size=default" id="183:27956" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "flex-start",
              borderRadius: "4px",
              border:
                "1px solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
            }}
          >
            {/* name="🧬 pre" id="183:27932" type="INSTANCE" */}
            <QodeCustom1829242
              style={{
                display: "flex",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                borderRadius: "5px 0px 0px 5px",
                borderRight:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                background:
                  "var(--color-neutral-fill-colorfillquaternary, rgba(0, 0, 0, 0.02))",
              }}
              {...{
                showTitle: true,
                title: "http://",
                tab: "pre",
                size: "default",
              }}
            />
            {/* name="Input / Basic" id="183:28039" type="FRAME" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "10px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Input`}</span>
            </div>
            {/* name="🧬 post" id="183:27933" type="INSTANCE" */}
            <QodeCustom1829244
              style={{
                display: "flex",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                borderRadius: "0px 5px 5px 0px",
                borderLeft:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                background:
                  "var(--color-neutral-fill-colorfillquaternary, rgba(0, 0, 0, 0.02))",
              }}
              {...{
                title: ".com",
                showTitle: true,
                tab: "post",
                size: "default",
              }}
            />
          </div>
        </>
      )}
      {/* id="183:27963" */}
      {`${size}` === `large` && (
        <>
          {/* name="size=large" id="183:27963" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              height: "var(--size-height-controlheightlg, 40px)",
              alignItems: "flex-start",
              flexShrink: "0",
              borderRadius: "4px",
              border:
                "1px solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
            }}
          >
            {/* name="🧬 pre" id="183:27964" type="INSTANCE" */}
            <QodeCustom1829265
              style={{
                display: "flex",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                borderRadius: "5px 0px 0px 5px",
                borderRight:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                background:
                  "var(--color-neutral-fill-colorfillquaternary, rgba(0, 0, 0, 0.02))",
              }}
              {...{
                showTitle: true,
                title: "http://",
                tab: "pre",
                size: "large",
              }}
            />
            {/* name="Input / Basic" id="183:28047" type="FRAME" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "10px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingsm, 12px)",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Input`}</span>
            </div>
            {/* name="🧬 post" id="183:27966" type="INSTANCE" */}
            <QodeCustom1829269
              style={{
                display: "flex",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                borderRadius: "0px 5px 5px 0px",
                borderLeft:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                background:
                  "var(--color-neutral-fill-colorfillquaternary, rgba(0, 0, 0, 0.02))",
              }}
              {...{
                title: ".com",
                showTitle: true,
                tab: "post",
                size: "large",
              }}
            />
          </div>
        </>
      )}
      {/* id="183:27984" */}
      {`${size}` === `small` && (
        <>
          {/* name="size=small" id="183:27984" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              height: "var(--size-height-controlheightsm, 24px)",
              alignItems: "flex-start",
              flexShrink: "0",
              borderRadius: "4px",
              border:
                "1px solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
            }}
          >
            {/* name="🧬 pre" id="183:27985" type="INSTANCE" */}
            <QodeCustom1829277
              style={{
                display: "flex",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                borderRadius: "5px 0px 0px 5px",
                borderRight:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                background:
                  "var(--color-neutral-fill-colorfillquaternary, rgba(0, 0, 0, 0.02))",
              }}
              {...{
                showTitle: true,
                title: "http://",
                tab: "pre",
                size: "small",
              }}
            />
            {/* name="Input / Basic" id="183:28055" type="FRAME" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "10px var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Input`}</span>
            </div>
            {/* name="🧬 post" id="183:27987" type="INSTANCE" */}
            <QodeCustom1829281
              style={{
                display: "flex",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                borderRadius: "0px 5px 5px 0px",
                borderLeft:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                background:
                  "var(--color-neutral-fill-colorfillquaternary, rgba(0, 0, 0, 0.02))",
              }}
              {...{
                title: ".com",
                showTitle: true,
                tab: "post",
                size: "small",
              }}
            />
          </div>
        </>
      )}
    </>
  )
}
