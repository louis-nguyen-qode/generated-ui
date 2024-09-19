// id="5629:54"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom562924 } from "@designSystem/custom/QodeCustom562924"
import { QodeCustom562939 } from "@designSystem/custom/QodeCustom562939"
import QodeSvg562960 from "@designSystem/icon/svg/QodeSvg562960"
import QodeSvg562969 from "@designSystem/icon/svg/QodeSvg562969"
import QodeSvg562974 from "@designSystem/icon/svg/QodeSvg562974"

export interface QodeCustom562954Props {
  opentowork?: boolean
  badge?: boolean
  img?: boolean
  icon?: boolean
  initials?: string
  type?: "Round" | "Square"
  state?: "Default" | "Hover"
}

export const QodeCustom562954: React.FC<
  QodeCustom562954Props & { style?: CSSProperties }
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
      {/* name="avatar" id="5629:54" type="COMPONENT_SET" */}
      {/* id="5629:55" */}
      {`${type}` === `Round` && `${state}` === `Default` && (
        <>
          {/* name="Type=Round, State=Default" id="5629:55" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "var(--line-height-lineheighheading3, 32px)",
                height: "var(--line-height-lineheighheading3, 32px)",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--font-size-large, 16px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
                background: "var(--color-success-colorsuccesshover, #a3c73e)",
                position: "relative",
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
            {/* name="user-large" id="5629:57" type="INSTANCE" */}
            <QodeCustom562924
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
            {/* name="img" id="5629:58" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "var(--line-height-lineheighheading3, 32px)",
                  height: "var(--line-height-lineheighheading3, 32px)",
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
            {/* name="Badge" id="5629:59" type="INSTANCE" */}
            <QodeCustom562939
              style={{
                ...{
                  display: "flex",
                  width: "6px",
                  height: "6px",
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
              {...{ count: "21", type: "dot" }}
            />
            {/* name="opentoWork" id="5629:60" type="FRAME" */}
            <QodeSvg562960
              style={{
                ...{
                  width: "var(--line-height-lineheighheading3, 32px)",
                  height: "var(--line-height-lineheighheading3, 32px)",
                  position: "absolute",
                },
                ...{},
              }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="5629:63" */}
      {`${type}` === `Square` && `${state}` === `Default` && (
        <>
          {/* name="Type=Square, State=Default" id="5629:63" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "var(--line-height-lineheighheading3, 32px)",
                height: "var(--line-height-lineheighheading3, 32px)",
                padding: "0px var(--size-padding-paddingxxs, 4px)",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--font-size-large, 16px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                background: "var(--color-success-colorsuccesshover, #a3c73e)",
                position: "relative",
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
            {/* name="user-large" id="5629:65" type="INSTANCE" */}
            <QodeCustom562924
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
            {/* name="img" id="5629:66" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "var(--line-height-lineheighheading3, 32px)",
                  height: "var(--line-height-lineheighheading3, 32px)",
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
            {/* name="Badge" id="5629:67" type="INSTANCE" */}
            <QodeCustom562939
              style={{
                ...{
                  display: "flex",
                  width: "6px",
                  height: "6px",
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
              {...{ count: "21", type: "dot" }}
            />
          </div>
        </>
      )}
      {/* id="5629:68" */}
      {`${type}` === `Round` && `${state}` === `Hover` && (
        <>
          {/* name="Type=Round, State=Hover" id="5629:68" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "var(--line-height-lineheighheading3, 32px)",
                height: "var(--line-height-lineheighheading3, 32px)",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--font-size-large, 16px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
                background: "var(--color-success-colorsuccesshover, #a3c73e)",
                position: "relative",
              },
              ...style,
            }}
          >
            {/* name="Hover outline" id="5629:69" type="ELLIPSE" */}
            <QodeSvg562969
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
            {/* name="user-large" id="5629:71" type="INSTANCE" */}
            <QodeCustom562924
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
            {/* name="img" id="5629:72" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "var(--line-height-lineheighheading3, 32px)",
                  height: "var(--line-height-lineheighheading3, 32px)",
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
            {/* name="Badge" id="5629:73" type="INSTANCE" */}
            <QodeCustom562939
              style={{
                ...{
                  display: "flex",
                  width: "6px",
                  height: "6px",
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
              {...{ count: "21", type: "dot" }}
            />
            {/* name="opentoWork" id="5629:74" type="FRAME" */}
            <QodeSvg562974
              style={{
                ...{
                  width: "var(--line-height-lineheighheading3, 32px)",
                  height: "var(--line-height-lineheighheading3, 32px)",
                  position: "absolute",
                },
                ...{},
              }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="5629:77" */}
      {`${type}` === `Square` && `${state}` === `Hover` && (
        <>
          {/* name="Type=Square, State=Hover" id="5629:77" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "var(--line-height-lineheighheading3, 32px)",
                height: "var(--line-height-lineheighheading3, 32px)",
                padding: "0px var(--size-padding-paddingxxs, 4px)",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--font-size-large, 16px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                background: "var(--color-success-colorsuccesshover, #a3c73e)",
                position: "relative",
              },
              ...style,
            }}
          >
            {/* name="Hover outline" id="5629:78" type="RECTANGLE" */}
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
            {/* name="user-large" id="5629:80" type="INSTANCE" */}
            <QodeCustom562924
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
            {/* name="img" id="5629:81" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "var(--line-height-lineheighheading3, 32px)",
                  height: "var(--line-height-lineheighheading3, 32px)",
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
            {/* name="Badge" id="5629:82" type="INSTANCE" */}
            <QodeCustom562939
              style={{
                ...{
                  display: "flex",
                  width: "6px",
                  height: "6px",
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
              {...{ count: "21", type: "dot" }}
            />
          </div>
        </>
      )}
    </>
  )
}
