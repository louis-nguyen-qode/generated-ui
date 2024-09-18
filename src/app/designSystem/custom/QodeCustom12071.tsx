// id="1:2071"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom124630 } from "@designSystem/custom/QodeCustom124630"
import QodeSvg12077 from "@designSystem/icon/svg/QodeSvg12077"
import QodeSvg12086 from "@designSystem/icon/svg/QodeSvg12086"
import QodeSvg12091 from "@designSystem/icon/svg/QodeSvg12091"

export interface QodeCustom12071Props {
  opentowork?: boolean
  badge?: boolean
  img?: boolean
  icon?: boolean
  initials?: string
  type?: "Round" | "Square"
  state?: "Default" | "Hover"
}

export const QodeCustom12071: React.FC<
  QodeCustom12071Props & { style?: CSSProperties }
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
      {/* name="avatar" id="1:2071" type="COMPONENT_SET" */}
      {/* id="1:2072" */}
      {`${type}` === `Round` && `${state}` === `Default` && (
        <>
          {/* name="Type=Round, State=Default" id="1:2072" type="COMPONENT" */}
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
                    "var(--line-height-lineheighsm, 20px) /* 166.667% */",
                },
                ...{},
              }}
            >{`AW`}</span>
            {/* name="user-large" id="1:2074" type="INSTANCE" */}
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
            {/* name="img" id="1:2075" type="FRAME" */}
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
            {/* name="Badge" id="1:2076" type="INSTANCE" */}
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
            {/* name="opentoWork" id="1:2077" type="FRAME" */}
            <QodeSvg12077
              style={{
                ...{ width: "32px", height: "32px", position: "absolute" },
                ...{},
              }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="1:2080" */}
      {`${type}` === `Square` && `${state}` === `Default` && (
        <>
          {/* name="Type=Square, State=Default" id="1:2080" type="COMPONENT" */}
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
                    "var(--line-height-lineheighsm, 20px) /* 166.667% */",
                },
                ...{},
              }}
            >{`AW`}</span>
            {/* name="user-large" id="1:2082" type="INSTANCE" */}
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
            {/* name="img" id="1:2083" type="FRAME" */}
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
            {/* name="Badge" id="1:2084" type="INSTANCE" */}
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
      {/* id="1:2085" */}
      {`${type}` === `Round` && `${state}` === `Hover` && (
        <>
          {/* name="Type=Round, State=Hover" id="1:2085" type="COMPONENT" */}
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
            {/* name="Hover outline" id="1:2086" type="ELLIPSE" */}
            <QodeSvg12086
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
                    "var(--line-height-lineheighsm, 20px) /* 166.667% */",
                },
                ...{},
              }}
            >{`AW`}</span>
            {/* name="user-large" id="1:2088" type="INSTANCE" */}
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
            {/* name="img" id="1:2089" type="FRAME" */}
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
            {/* name="Badge" id="1:2090" type="INSTANCE" */}
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
            {/* name="opentoWork" id="1:2091" type="FRAME" */}
            <QodeSvg12091
              style={{
                ...{ width: "32px", height: "32px", position: "absolute" },
                ...{},
              }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="1:2094" */}
      {`${type}` === `Square` && `${state}` === `Hover` && (
        <>
          {/* name="Type=Square, State=Hover" id="1:2094" type="COMPONENT" */}
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
            {/* name="Hover outline" id="1:2095" type="RECTANGLE" */}
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
                    "var(--line-height-lineheighsm, 20px) /* 166.667% */",
                },
                ...{},
              }}
            >{`AW`}</span>
            {/* name="user-large" id="1:2097" type="INSTANCE" */}
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
            {/* name="img" id="1:2098" type="FRAME" */}
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
            {/* name="Badge" id="1:2099" type="INSTANCE" */}
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
