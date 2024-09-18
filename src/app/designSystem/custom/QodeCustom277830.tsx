// id="27:7830"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom124630 } from "@designSystem/custom/QodeCustom124630"
import QodeSvg277839 from "@designSystem/icon/svg/QodeSvg277839"
import QodeSvg277846 from "@designSystem/icon/svg/QodeSvg277846"
import QodeSvg277851 from "@designSystem/icon/svg/QodeSvg277851"

export interface QodeCustom277830Props {
  opentowork?: boolean
  badge?: boolean
  img?: boolean
  icon?: boolean
  initials?: string
  type?: "Round" | "Square"
  state?: "Default" | "Hover"
}

export const QodeCustom277830: React.FC<
  QodeCustom277830Props & { style?: CSSProperties }
> = ({
  opentowork = true,
  badge = false,
  img = false,
  icon = true,
  initials = "AW",
  type = "Round",
  state = "Default",
  style,
  ...rest
}) => {
  return (
    <>
      {/* name="avatar" id="27:7830" type="COMPONENT_SET" */}
      {/* id="27:7831" */}
      {`${type}` === `Round` && `${state}` === `Default` && (
        <>
          {/* name="Type=Round, State=Default" id="27:7831" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "32px",
                height: "32px",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--font-size-large, 16px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
                background: "var(--color-success-colorsuccesshover, #a3c73e)",
              },
              ...style,
            }}
          >
            <span
              style={{
                ...{
                  alignSelf: "stretch",
                  color: "var(--color-neutral-text-colortext, #000)",
                  textAlign: "center",
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-small, 12px)",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight:
                    "var(--line-height-lineheighsm, 16px) /* 133.333% */",
                },
                ...{},
              }}
            >{`AW`}</span>
            {/* name="user-large" id="27:7836" type="INSTANCE" */}
            <Icon.QodeUserLarge
              style={{
                ...{
                  width: "16px",
                  height: "16px",
                  position: "absolute",
                  left: "8px",
                  top: "8px",
                },
                ...{},
              }}
              {...{}}
            />
            {/* name="img" id="27:7837" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "32px",
                  height: "32px",
                  padding: "var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "8px",
                  position: "absolute",
                  borderRadius: "var(--style-radius-borderround, 999px)",
                  background:
                    "url(<path-to-image>) lightgray 50% / cover no-repeat",
                },
                ...{},
              }}
            >
              <></>
            </div>
            {/* name="Badge" id="27:7838" type="INSTANCE" */}
            <QodeCustom124630
              style={{
                ...{
                  display: "flex",
                  width: "var(--size-size-sizexxs-6px, 6px)",
                  height: "var(--size-size-sizexxs-6px, 6px)",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  right: "1px",
                  bottom: "1px",
                  borderRadius: "var(--style-radius-borderradiuslg, 8px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-background-colorbgcontainer, #fff)",
                  background: "var(--color-error-colorerror, #ff6542)",
                },
                ...{},
              }}
              {...{ count: "21", icon: <Icon.QodeLinkedin />, type: "dot" }}
            />
            {/* name="opentoWork" id="27:7839" type="FRAME" */}
            <QodeSvg277839
              style={{
                ...{ width: "32px", height: "32px", position: "absolute" },
                ...{},
              }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="27:7832" */}
      {`${type}` === `Square` && `${state}` === `Default` && (
        <>
          {/* name="Type=Square, State=Default" id="27:7832" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "32px",
                height: "32px",
                padding: "0px var(--size-padding-paddingxxs, 4px)",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--font-size-large, 16px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                background: "var(--color-success-colorsuccesshover, #a3c73e)",
              },
              ...style,
            }}
          >
            <span
              style={{
                ...{
                  alignSelf: "stretch",
                  color: "var(--color-neutral-text-colortext, #000)",
                  textAlign: "center",
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-small, 12px)",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight:
                    "var(--line-height-lineheighsm, 16px) /* 133.333% */",
                },
                ...{},
              }}
            >{`AW`}</span>
            {/* name="user-large" id="27:7843" type="INSTANCE" */}
            <Icon.QodeUserLarge
              style={{
                ...{
                  width: "16px",
                  height: "16px",
                  position: "absolute",
                  left: "8px",
                  top: "8px",
                },
                ...{},
              }}
              {...{}}
            />
            {/* name="img" id="27:7844" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "32px",
                  height: "32px",
                  padding: "var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "8px",
                  position: "absolute",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                  background:
                    "url(<path-to-image>) lightgray 50% / cover no-repeat",
                },
                ...{},
              }}
            >
              <></>
            </div>
            {/* name="Badge" id="27:7845" type="INSTANCE" */}
            <QodeCustom124630
              style={{
                ...{
                  display: "flex",
                  width: "var(--size-size-sizexxs-6px, 6px)",
                  height: "var(--size-size-sizexxs-6px, 6px)",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  right: "1px",
                  bottom: "1px",
                  borderRadius: "var(--style-radius-borderradiuslg, 8px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-background-colorbgcontainer, #fff)",
                  background: "var(--color-error-colorerror, #ff6542)",
                },
                ...{},
              }}
              {...{ count: "21", icon: <Icon.QodeLinkedin />, type: "dot" }}
            />
          </div>
        </>
      )}
      {/* id="27:7833" */}
      {`${type}` === `Round` && `${state}` === `Hover` && (
        <>
          {/* name="Type=Round, State=Hover" id="27:7833" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "32px",
                height: "32px",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--font-size-large, 16px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
                background: "var(--color-success-colorsuccesshover, #a3c73e)",
              },
              ...style,
            }}
          >
            {/* name="Hover outline" id="27:7846" type="ELLIPSE" */}
            <QodeSvg277846
              style={{
                ...{
                  width: "36px",
                  height: "36px",
                  position: "absolute",
                  left: "-2px",
                  top: "-2px",
                  strokeWidth: "1px",
                  stroke: "var(--color-primary-colorprimaryhover, #5783c9)",
                },
                ...{},
              }}
              {...{}}
            />
            <span
              style={{
                ...{
                  alignSelf: "stretch",
                  color: "var(--color-neutral-text-colortext, #000)",
                  textAlign: "center",
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-small, 12px)",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight:
                    "var(--line-height-lineheighsm, 16px) /* 133.333% */",
                },
                ...{},
              }}
            >{`AW`}</span>
            {/* name="user-large" id="27:7848" type="INSTANCE" */}
            <Icon.QodeUserLarge
              style={{
                ...{
                  width: "16px",
                  height: "16px",
                  position: "absolute",
                  left: "8px",
                  top: "8px",
                },
                ...{},
              }}
              {...{}}
            />
            {/* name="img" id="27:7849" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "32px",
                  height: "32px",
                  padding: "var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "8px",
                  position: "absolute",
                  borderRadius: "var(--style-radius-borderround, 999px)",
                  background:
                    "url(<path-to-image>) lightgray 50% / cover no-repeat",
                },
                ...{},
              }}
            >
              <></>
            </div>
            {/* name="Badge" id="27:7850" type="INSTANCE" */}
            <QodeCustom124630
              style={{
                ...{
                  display: "flex",
                  width: "var(--size-size-sizexxs-6px, 6px)",
                  height: "var(--size-size-sizexxs-6px, 6px)",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  right: "1px",
                  bottom: "1px",
                  borderRadius: "var(--style-radius-borderradiuslg, 8px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-background-colorbgcontainer, #fff)",
                  background: "var(--color-error-colorerror, #ff6542)",
                },
                ...{},
              }}
              {...{ count: "21", icon: <Icon.QodeLinkedin />, type: "dot" }}
            />
            {/* name="opentoWork" id="27:7851" type="FRAME" */}
            <QodeSvg277851
              style={{
                ...{ width: "32px", height: "32px", position: "absolute" },
                ...{},
              }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="27:7834" */}
      {`${type}` === `Square` && `${state}` === `Hover` && (
        <>
          {/* name="Type=Square, State=Hover" id="27:7834" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "32px",
                height: "32px",
                padding: "0px var(--size-padding-paddingxxs, 4px)",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--font-size-large, 16px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                background: "var(--color-success-colorsuccesshover, #a3c73e)",
              },
              ...style,
            }}
          >
            {/* name="Hover outline" id="27:7854" type="RECTANGLE" */}
            <Flex
              style={{
                ...{
                  width: "36px",
                  height: "36px",
                  position: "absolute",
                  left: "-2px",
                  top: "-2px",
                  borderRadius: "10px",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--color-primary-colorprimaryhover, #5783c9)",
                },
                ...{},
              }}
            >
              <></>
            </Flex>
            <span
              style={{
                ...{
                  alignSelf: "stretch",
                  color: "var(--color-neutral-text-colortext, #000)",
                  textAlign: "center",
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-small, 12px)",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight:
                    "var(--line-height-lineheighsm, 16px) /* 133.333% */",
                },
                ...{},
              }}
            >{`AW`}</span>
            {/* name="user-large" id="27:7856" type="INSTANCE" */}
            <Icon.QodeUserLarge
              style={{
                ...{
                  width: "16px",
                  height: "16px",
                  position: "absolute",
                  left: "8px",
                  top: "8px",
                },
                ...{},
              }}
              {...{}}
            />
            {/* name="img" id="27:7857" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "32px",
                  height: "32px",
                  padding: "var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "8px",
                  position: "absolute",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                  background:
                    "url(<path-to-image>) lightgray 50% / cover no-repeat",
                },
                ...{},
              }}
            >
              <></>
            </div>
            {/* name="Badge" id="27:7858" type="INSTANCE" */}
            <QodeCustom124630
              style={{
                ...{
                  display: "flex",
                  width: "var(--size-size-sizexxs-6px, 6px)",
                  height: "var(--size-size-sizexxs-6px, 6px)",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  right: "1px",
                  bottom: "1px",
                  borderRadius: "var(--style-radius-borderradiuslg, 8px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-background-colorbgcontainer, #fff)",
                  background: "var(--color-error-colorerror, #ff6542)",
                },
                ...{},
              }}
              {...{ count: "21", icon: <Icon.QodeLinkedin />, type: "dot" }}
            />
          </div>
        </>
      )}
    </>
  )
}
