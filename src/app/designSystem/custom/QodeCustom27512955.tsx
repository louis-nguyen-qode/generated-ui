// id="275:12955"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeColorPicker } from "@designSystem/ant/QodeColorPicker"
import { QodeCustom1894474 } from "@designSystem/custom/QodeCustom1894474"

export interface QodeCustom27512955Props {
  active?: "false" | "true"
  size?: "default" | "large" | "small"
}

export const QodeCustom27512955: React.FC<
  QodeCustom27512955Props & { style?: CSSProperties }
> = ({ active = "false", size = "default", style, ...rest }) => {
  return (
    <>
      {/* name="ColorPicker" id="275:12955" type="COMPONENT_SET" */}
      {/* id="275:12895" */}
      {`${active}` === `false` && `${size}` === `default` && (
        <>
          {/* name="active=false, size=default" id="275:12895" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "inline-flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "20px",
              },
              ...style,
            }}
          >
            {/* name="🧬 trigger" id="275:12644" type="INSTANCE" */}
            <QodeColorPicker
              style={{
                ...{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "var(--size-padding-paddingxxs, 4px)",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                  background:
                    "var(--color-neutral-background-colorbgcontainer, #fff)",
                },
                ...{},
              }}
              {...{
                showTitle: true,
                title: "#1677FF",
                state: "default",
                size: "default",
              }}
            />
          </div>
        </>
      )}
      {/* id="275:12956" */}
      {`${active}` === `true` && `${size}` === `default` && (
        <>
          {/* name="active=true, size=default" id="275:12956" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "inline-flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "20px",
              },
              ...style,
            }}
          >
            {/* name="🧬 trigger" id="275:12957" type="INSTANCE" */}
            <QodeColorPicker
              style={{
                ...{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "var(--size-padding-paddingxxs, 4px)",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                  background:
                    "var(--color-neutral-background-colorbgcontainer, #fff)",
                },
                ...{},
              }}
              {...{
                showTitle: true,
                title: "#1677FF",
                state: "default",
                size: "default",
              }}
            />
            {/* name="🧬 dropdown menu" id="275:12958" type="INSTANCE" */}
            <QodeCustom1894474
              style={{
                ...{
                  display: "flex",
                  padding: "var(--size-padding-paddingsm, 12px)",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingsm, 12px)",
                  position: "absolute",
                  right: "-182px",
                  bottom: "-272px",
                  borderRadius: "var(--style-radius-borderradiuslg, 8px)",
                  background:
                    "var(--color-neutral-background-colorbgelevated, #f8f6f6)",
                  boxShadow:
                    "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 3px 6px -4px rgba(0, 0, 0, 0.12)",
                },
                ...{},
              }}
              {...{ showArrow: true }}
            />
          </div>
        </>
      )}
      {/* id="275:13531" */}
      {`${active}` === `false` && `${size}` === `large` && (
        <>
          {/* name="active=false, size=large" id="275:13531" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "inline-flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "20px",
              },
              ...style,
            }}
          >
            {/* name="🧬 trigger" id="275:13532" type="INSTANCE" */}
            <QodeColorPicker
              style={{
                ...{
                  display: "flex",
                  height: "var(--size-height-controlheightlg, 40px)",
                  padding: "var(--size-padding-paddingxxs, 4px)",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                  background:
                    "var(--color-neutral-background-colorbgcontainer, #fff)",
                },
                ...{},
              }}
              {...{
                showTitle: true,
                title: "#1677FF",
                state: "default",
                size: "large",
              }}
            />
          </div>
        </>
      )}
      {/* id="275:13533" */}
      {`${active}` === `true` && `${size}` === `large` && (
        <>
          {/* name="active=true, size=large" id="275:13533" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "inline-flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "20px",
              },
              ...style,
            }}
          >
            {/* name="🧬 trigger" id="275:13534" type="INSTANCE" */}
            <QodeColorPicker
              style={{
                ...{
                  display: "flex",
                  height: "var(--size-height-controlheightlg, 40px)",
                  padding: "var(--size-padding-paddingxxs, 4px)",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                  background:
                    "var(--color-neutral-background-colorbgcontainer, #fff)",
                },
                ...{},
              }}
              {...{
                showTitle: true,
                title: "#1677FF",
                state: "default",
                size: "large",
              }}
            />
            {/* name="🧬 dropdown menu" id="275:13535" type="INSTANCE" */}
            <QodeCustom1894474
              style={{
                ...{
                  display: "flex",
                  padding: "var(--size-padding-paddingsm, 12px)",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingsm, 12px)",
                  position: "absolute",
                  right: "-166px",
                  bottom: "-272px",
                  borderRadius: "var(--style-radius-borderradiuslg, 8px)",
                  background:
                    "var(--color-neutral-background-colorbgelevated, #f8f6f6)",
                  boxShadow:
                    "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 3px 6px -4px rgba(0, 0, 0, 0.12)",
                },
                ...{},
              }}
              {...{ showArrow: true }}
            />
          </div>
        </>
      )}
      {/* id="275:13632" */}
      {`${active}` === `false` && `${size}` === `small` && (
        <>
          {/* name="active=false, size=small" id="275:13632" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "inline-flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "20px",
              },
              ...style,
            }}
          >
            {/* name="🧬 trigger" id="275:13633" type="INSTANCE" */}
            <QodeColorPicker
              style={{
                ...{
                  display: "flex",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "var(--size-padding-paddingxxs, 4px)",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  borderRadius: "var(--style-radius-borderradiussm, 6px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                  background:
                    "var(--color-neutral-background-colorbgcontainer, #fff)",
                },
                ...{},
              }}
              {...{
                showTitle: true,
                title: "#1677FF",
                state: "default",
                size: "small",
              }}
            />
          </div>
        </>
      )}
      {/* id="275:13634" */}
      {`${active}` === `true` && `${size}` === `small` && (
        <>
          {/* name="active=true, size=small" id="275:13634" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "inline-flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "20px",
              },
              ...style,
            }}
          >
            {/* name="🧬 trigger" id="275:13635" type="INSTANCE" */}
            <QodeColorPicker
              style={{
                ...{
                  display: "flex",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "var(--size-padding-paddingxxs, 4px)",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  borderRadius: "var(--style-radius-borderradiussm, 6px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                  background:
                    "var(--color-neutral-background-colorbgcontainer, #fff)",
                },
                ...{},
              }}
              {...{
                showTitle: true,
                title: "#1677FF",
                state: "default",
                size: "small",
              }}
            />
            {/* name="🧬 dropdown menu" id="275:13636" type="INSTANCE" */}
            <QodeCustom1894474
              style={{
                ...{
                  display: "flex",
                  padding: "var(--size-padding-paddingsm, 12px)",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingsm, 12px)",
                  position: "absolute",
                  right: "-190px",
                  bottom: "-272px",
                  borderRadius: "var(--style-radius-borderradiuslg, 8px)",
                  background:
                    "var(--color-neutral-background-colorbgelevated, #f8f6f6)",
                  boxShadow:
                    "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 3px 6px -4px rgba(0, 0, 0, 0.12)",
                },
                ...{},
              }}
              {...{ showArrow: true }}
            />
          </div>
        </>
      )}
    </>
  )
}
