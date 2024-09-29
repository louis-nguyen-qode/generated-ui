// id="20:3468"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom202960 } from "@designSystem/custom/QodeCustom202960"
import { QodeCustom202961 } from "@designSystem/custom/QodeCustom202961"
import { QodeCustom202962 } from "@designSystem/custom/QodeCustom202962"
import { QodeCustom202966 } from "@designSystem/custom/QodeCustom202966"
import { QodeCustom203445 } from "@designSystem/custom/QodeCustom203445"
import { QodeCustom202967 } from "@designSystem/custom/QodeCustom202967"
import { QodeCustom202968 } from "@designSystem/custom/QodeCustom202968"

export interface QodeCustom203468Props {
  active?: "false" | "true"
  size?: "default" | "large" | "small"
}

export const QodeCustom203468: React.FC<
  QodeCustom203468Props & { style?: CSSProperties }
> = ({ active = "false", size = "default", style, ...rest }) => {
  return (
    <>
      {/* name="Select" id="20:3468" type="COMPONENT_SET" */}
      {/* id="20:3469" */}
      {`${active}` === `false` && `${size}` === `default` && (
        <>
          {/* name="active=false, size=default" id="20:3469" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "320px",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "var(--size-padding-paddingxxs, 4px)",
              },
              ...style,
            }}
          >
            {/* name="🧬 input" id="20:3475" type="INSTANCE" */}
            <QodeCustom202960
              style={{
                ...{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px var(--size-padding-paddingsm, 12px)",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  alignSelf: "stretch",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                  border:
                    "1px solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                  background:
                    "var(--color-neutral-background-colorbgcontainer, #fff)",
                },
                ...{},
              }}
              {...{
                title: "Select",
                state: "default",
                size: "default",
                type: "basic",
                status: "default",
              }}
            />
          </div>
        </>
      )}
      {/* id="20:3470" */}
      {`${active}` === `false` && `${size}` === `large` && (
        <>
          {/* name="active=false, size=large" id="20:3470" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "320px",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "var(--size-padding-paddingxxs, 4px)",
              },
              ...style,
            }}
          >
            {/* name="🧬 input" id="20:3476" type="INSTANCE" */}
            <QodeCustom202961
              style={{
                ...{
                  display: "flex",
                  height: "var(--size-height-controlheightlg, 40px)",
                  padding: "0px var(--size-padding-paddingsm, 12px)",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  alignSelf: "stretch",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                  border:
                    "1px solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                  background:
                    "var(--color-neutral-background-colorbgcontainer, #fff)",
                },
                ...{},
              }}
              {...{
                title: "Select",
                state: "default",
                size: "large",
                type: "basic",
                status: "default",
              }}
            />
          </div>
        </>
      )}
      {/* id="20:3471" */}
      {`${active}` === `false` && `${size}` === `small` && (
        <>
          {/* name="active=false, size=small" id="20:3471" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "320px",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "var(--size-padding-paddingxxs, 4px)",
              },
              ...style,
            }}
          >
            {/* name="🧬 input" id="20:3477" type="INSTANCE" */}
            <QodeCustom202962
              style={{
                ...{
                  display: "flex",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  alignSelf: "stretch",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                  border:
                    "1px solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                  background:
                    "var(--color-neutral-background-colorbgcontainer, #fff)",
                },
                ...{},
              }}
              {...{
                title: "Select",
                state: "default",
                size: "small",
                type: "basic",
                status: "default",
              }}
            />
          </div>
        </>
      )}
      {/* id="20:3472" */}
      {`${active}` === `true` && `${size}` === `default` && (
        <>
          {/* name="active=true, size=default" id="20:3472" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "320px",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "var(--size-padding-paddingxxs, 4px)",
              },
              ...style,
            }}
          >
            {/* name="🧬 input" id="20:3478" type="INSTANCE" */}
            <QodeCustom202966
              style={{
                ...{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px var(--size-padding-paddingsm, 12px)",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  alignSelf: "stretch",
                  borderRadius: "var(--style-radius-borderround, 999px)",
                  border:
                    "1px solid var(--color-primary-colorprimary, #2d64bc)",
                  background:
                    "var(--color-neutral-background-colorbgcontainer, #fff)",
                },
                ...{},
              }}
              {...{
                title: "Select",
                state: "active",
                size: "default",
                type: "basic",
                status: "default",
              }}
            />
            {/* name="🧬 dropdown menu" id="20:3479" type="INSTANCE" */}
            <QodeCustom203445
              style={{
                ...{
                  display: "flex",
                  padding: "var(--size-padding-paddingxxs, 4px)",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  alignSelf: "stretch",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                  background:
                    "var(--color-neutral-background-colorbgcontainer, #fff)",
                  boxShadow:
                    "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 3px 6px -4px rgba(0, 0, 0, 0.12)",
                },
                ...{},
              }}
              {...{ items: "4" }}
            />
          </div>
        </>
      )}
      {/* id="20:3473" */}
      {`${active}` === `true` && `${size}` === `large` && (
        <>
          {/* name="active=true, size=large" id="20:3473" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "320px",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "var(--size-padding-paddingxxs, 4px)",
              },
              ...style,
            }}
          >
            {/* name="🧬 input" id="20:3480" type="INSTANCE" */}
            <QodeCustom202967
              style={{
                ...{
                  display: "flex",
                  height: "var(--size-height-controlheightlg, 40px)",
                  padding: "0px var(--size-padding-paddingsm, 12px)",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  alignSelf: "stretch",
                  borderRadius: "var(--style-radius-borderround, 999px)",
                  border:
                    "1px solid var(--color-primary-colorprimary, #2d64bc)",
                  background:
                    "var(--color-neutral-background-colorbgcontainer, #fff)",
                },
                ...{},
              }}
              {...{
                title: "Select",
                state: "active",
                size: "large",
                type: "basic",
                status: "default",
              }}
            />
            {/* name="🧬 dropdown menu" id="20:3481" type="INSTANCE" */}
            <QodeCustom203445
              style={{
                ...{
                  display: "flex",
                  padding: "var(--size-padding-paddingxxs, 4px)",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  alignSelf: "stretch",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                  background:
                    "var(--color-neutral-background-colorbgcontainer, #fff)",
                  boxShadow:
                    "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 3px 6px -4px rgba(0, 0, 0, 0.12)",
                },
                ...{},
              }}
              {...{ items: "4" }}
            />
          </div>
        </>
      )}
      {/* id="20:3474" */}
      {`${active}` === `true` && `${size}` === `small` && (
        <>
          {/* name="active=true, size=small" id="20:3474" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "320px",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "var(--size-padding-paddingxxs, 4px)",
              },
              ...style,
            }}
          >
            {/* name="🧬 input" id="20:3482" type="INSTANCE" */}
            <QodeCustom202968
              style={{
                ...{
                  display: "flex",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  alignSelf: "stretch",
                  borderRadius: "var(--style-radius-borderround, 999px)",
                  border:
                    "1px solid var(--color-primary-colorprimary, #2d64bc)",
                  background:
                    "var(--color-neutral-background-colorbgcontainer, #fff)",
                },
                ...{},
              }}
              {...{
                title: "Select",
                state: "active",
                size: "small",
                type: "basic",
                status: "default",
              }}
            />
            {/* name="🧬 dropdown menu" id="20:3483" type="INSTANCE" */}
            <QodeCustom203445
              style={{
                ...{
                  display: "flex",
                  padding: "var(--size-padding-paddingxxs, 4px)",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  alignSelf: "stretch",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                  background:
                    "var(--color-neutral-background-colorbgcontainer, #fff)",
                  boxShadow:
                    "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 3px 6px -4px rgba(0, 0, 0, 0.12)",
                },
                ...{},
              }}
              {...{ items: "4" }}
            />
          </div>
        </>
      )}
    </>
  )
}
