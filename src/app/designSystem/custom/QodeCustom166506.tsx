// id="16:6506"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom193 } from "@designSystem/custom/QodeCustom193"
import { QodeCustom166463 } from "@designSystem/custom/QodeCustom166463"

export interface QodeCustom166506Props {
  lIcon?: boolean
  icon?: React.ReactNode
  rIcon?: boolean
  title?: string
  color?:
    | "🔸 primary"
    | "magenta"
    | "golden purple"
    | "cyan"
    | "polar green"
    | "lime"
    | "calendula gold"
    | "Volcano"
    | "gray"
  state?: "default" | "active" | "hover"
}

export const QodeCustom166506: React.FC<
  QodeCustom166506Props & { style?: CSSProperties }
> = ({
  lIcon = false,
  icon = undefined,
  rIcon = false,
  title = "Tag",
  color = "magenta",
  state = "default",
  style,
  ...rest
}) => {
  return (
    <>
      {/* name="Tag__Colorful" id="16:6506" type="COMPONENT_SET" */}
      {/* id="16:6507" */}
      {`${color}` === `magenta` && `${state}` === `default` && (
        <>
          {/* name="color=magenta, state=default" id="16:6507" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "inline-flex",
                height: "24px",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-margin-marginxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradiussm, 6px)",
                background: "var(--color-magneta-colormagentabg, #fff0f6)",
              },
              ...style,
            }}
          >
            {/* name="icons" id="16:6508" type="INSTANCE" */}
            <QodeCustom193
              style={{
                ...{
                  display: "flex",
                  width: "12px",
                  height: "12px",
                  padding: "1.199px 1.199px 1.199px 1.2px",
                  justifyContent: "center",
                  alignItems: "center",
                },
                ...{},
              }}
              {...{}}
            />
            <span
              style={{
                ...{
                  color: "var(--color-magneta-colormagentatext, #f759ab)",
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-small, 12px)",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "16px /* 133.333% */",
                },
                ...{},
              }}
            >{`Tag`}</span>
            {/* name="xmark" id="16:6510" type="INSTANCE" */}
            <QodeCustom166463
              style={{
                ...{
                  display: "flex",
                  width: "12px",
                  height: "12px",
                  padding: "2.999px",
                  justifyContent: "center",
                  alignItems: "center",
                },
                ...{},
              }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="16:6511" */}
      {`${color}` === `golden purple` && `${state}` === `default` && (
        <>
          {/* name="color=golden purple, state=default" id="16:6511" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "inline-flex",
                height: "24px",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-margin-marginxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradiussm, 6px)",
                background:
                  "var(--color-gold-purple-colorgoldpurplebg, #f9f0ff)",
              },
              ...style,
            }}
          >
            {/* name="icons" id="16:6512" type="INSTANCE" */}
            <QodeCustom193
              style={{
                ...{
                  display: "flex",
                  width: "12px",
                  height: "12px",
                  padding: "1.199px 1.199px 1.199px 1.2px",
                  justifyContent: "center",
                  alignItems: "center",
                },
                ...{},
              }}
              {...{}}
            />
            <span
              style={{
                ...{
                  color:
                    "var(--color-gold-purple-colorgoldpurpletext, #9254de)",
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-small, 12px)",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "16px /* 133.333% */",
                },
                ...{},
              }}
            >{`Tag`}</span>
            {/* name="xmark" id="16:6514" type="INSTANCE" */}
            <QodeCustom166463
              style={{
                ...{
                  display: "flex",
                  width: "12px",
                  height: "12px",
                  padding: "2.999px",
                  justifyContent: "center",
                  alignItems: "center",
                },
                ...{},
              }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="16:6515" */}
      {`${color}` === `🔸 primary` && `${state}` === `default` && (
        <>
          {/* name="color=🔸 primary, state=default" id="16:6515" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "inline-flex",
                height: "24px",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-margin-marginxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradiussm, 6px)",
                background: "var(--color-primary-colorprimarybg, #eaeff8)",
              },
              ...style,
            }}
          >
            {/* name="icons" id="16:6516" type="INSTANCE" */}
            <QodeCustom193
              style={{
                ...{
                  display: "flex",
                  width: "12px",
                  height: "12px",
                  padding: "1.199px 1.199px 1.199px 1.2px",
                  justifyContent: "center",
                  alignItems: "center",
                },
                ...{},
              }}
              {...{}}
            />
            <span
              style={{
                ...{
                  color: "var(--color-primary-colorprimarytext, #2d64bc)",
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-small, 12px)",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "16px /* 133.333% */",
                },
                ...{},
              }}
            >{`Tag`}</span>
            {/* name="xmark" id="16:6518" type="INSTANCE" */}
            <QodeCustom166463
              style={{
                ...{
                  display: "flex",
                  width: "12px",
                  height: "12px",
                  padding: "2.999px",
                  justifyContent: "center",
                  alignItems: "center",
                },
                ...{},
              }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="16:6519" */}
      {`${color}` === `cyan` && `${state}` === `default` && (
        <>
          {/* name="color=cyan, state=default" id="16:6519" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "inline-flex",
                height: "24px",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-margin-marginxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradiussm, 6px)",
                background: "var(--color-cyan-colorcyanbg, #e6fffb)",
              },
              ...style,
            }}
          >
            {/* name="icons" id="16:6520" type="INSTANCE" */}
            <QodeCustom193
              style={{
                ...{
                  display: "flex",
                  width: "12px",
                  height: "12px",
                  padding: "1.199px 1.199px 1.199px 1.2px",
                  justifyContent: "center",
                  alignItems: "center",
                },
                ...{},
              }}
              {...{}}
            />
            <span
              style={{
                ...{
                  color: "var(--color-cyan-colorcyantext, #36cfc9)",
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-small, 12px)",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "16px /* 133.333% */",
                },
                ...{},
              }}
            >{`Tag`}</span>
            {/* name="xmark" id="16:6522" type="INSTANCE" */}
            <QodeCustom166463
              style={{
                ...{
                  display: "flex",
                  width: "12px",
                  height: "12px",
                  padding: "2.999px",
                  justifyContent: "center",
                  alignItems: "center",
                },
                ...{},
              }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="16:6523" */}
      {`${color}` === `polar green` && `${state}` === `default` && (
        <>
          {/* name="color=polar green, state=default" id="16:6523" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "inline-flex",
                height: "24px",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-margin-marginxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradiussm, 6px)",
                background: "var(--color-polar-green-colorpolarbg, #ecf6d2)",
              },
              ...style,
            }}
          >
            {/* name="icons" id="16:6524" type="INSTANCE" */}
            <QodeCustom193
              style={{
                ...{
                  display: "flex",
                  width: "12px",
                  height: "12px",
                  padding: "1.199px 1.199px 1.199px 1.2px",
                  justifyContent: "center",
                  alignItems: "center",
                },
                ...{},
              }}
              {...{}}
            />
            <span
              style={{
                ...{
                  color: "var(--color-polar-green-colorpolartext, #8db911)",
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-small, 12px)",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "16px /* 133.333% */",
                },
                ...{},
              }}
            >{`Tag`}</span>
            {/* name="xmark" id="16:6526" type="INSTANCE" */}
            <QodeCustom166463
              style={{
                ...{
                  display: "flex",
                  width: "12px",
                  height: "12px",
                  padding: "2.999px",
                  justifyContent: "center",
                  alignItems: "center",
                },
                ...{},
              }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="16:6527" */}
      {`${color}` === `lime` && `${state}` === `default` && (
        <>
          {/* name="color=lime, state=default" id="16:6527" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "inline-flex",
                height: "24px",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-margin-marginxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradiussm, 6px)",
                background: "var(--color-lime-colorlimebg, #f4ffb8)",
              },
              ...style,
            }}
          >
            {/* name="icons" id="16:6528" type="INSTANCE" */}
            <QodeCustom193
              style={{
                ...{
                  display: "flex",
                  width: "12px",
                  height: "12px",
                  padding: "1.199px 1.199px 1.199px 1.2px",
                  justifyContent: "center",
                  alignItems: "center",
                },
                ...{},
              }}
              {...{}}
            />
            <span
              style={{
                ...{
                  color: "var(--color-lime-colorlimetext, #7cb305)",
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-small, 12px)",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "16px /* 133.333% */",
                },
                ...{},
              }}
            >{`Tag`}</span>
            {/* name="xmark" id="16:6530" type="INSTANCE" */}
            <QodeCustom166463
              style={{
                ...{
                  display: "flex",
                  width: "12px",
                  height: "12px",
                  padding: "2.999px",
                  justifyContent: "center",
                  alignItems: "center",
                },
                ...{},
              }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="16:6531" */}
      {`${color}` === `calendula gold` && `${state}` === `default` && (
        <>
          {/* name="color=calendula gold, state=default" id="16:6531" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "inline-flex",
                height: "24px",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-margin-marginxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradiussm, 6px)",
                background: "var(--color-calendual-gold-colorgoldbg, #ffe5c7)",
              },
              ...style,
            }}
          >
            {/* name="icons" id="16:6532" type="INSTANCE" */}
            <QodeCustom193
              style={{
                ...{
                  display: "flex",
                  width: "12px",
                  height: "12px",
                  padding: "1.199px 1.199px 1.199px 1.2px",
                  justifyContent: "center",
                  alignItems: "center",
                },
                ...{},
              }}
              {...{}}
            />
            <span
              style={{
                ...{
                  color: "var(--color-calendual-gold-colorgoldtext, #fa9f42)",
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-small, 12px)",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "16px /* 133.333% */",
                },
                ...{},
              }}
            >{`Tag`}</span>
            {/* name="xmark" id="16:6534" type="INSTANCE" */}
            <QodeCustom166463
              style={{
                ...{
                  display: "flex",
                  width: "12px",
                  height: "12px",
                  padding: "2.999px",
                  justifyContent: "center",
                  alignItems: "center",
                },
                ...{},
              }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="16:6535" */}
      {`${color}` === `Volcano` && `${state}` === `default` && (
        <>
          {/* name="color=Volcano, state=default" id="16:6535" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "inline-flex",
                height: "24px",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-margin-marginxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradiussm, 6px)",
                background: "var(--color-error-colorerrorbg, #fff0ec)",
              },
              ...style,
            }}
          >
            {/* name="icons" id="16:6536" type="INSTANCE" */}
            <QodeCustom193
              style={{
                ...{
                  display: "flex",
                  width: "12px",
                  height: "12px",
                  padding: "1.199px 1.199px 1.199px 1.2px",
                  justifyContent: "center",
                  alignItems: "center",
                },
                ...{},
              }}
              {...{}}
            />
            <span
              style={{
                ...{
                  color: "var(--color-error-colorerrortext, #ff6542)",
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-small, 12px)",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "16px /* 133.333% */",
                },
                ...{},
              }}
            >{`Tag`}</span>
            {/* name="xmark" id="16:6538" type="INSTANCE" */}
            <QodeCustom166463
              style={{
                ...{
                  display: "flex",
                  width: "12px",
                  height: "12px",
                  padding: "2.999px",
                  justifyContent: "center",
                  alignItems: "center",
                },
                ...{},
              }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="16:6539" */}
      {`${color}` === `gray` && `${state}` === `default` && (
        <>
          {/* name="color=gray, state=default" id="16:6539" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "inline-flex",
                height: "24px",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-margin-marginxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradiussm, 6px)",
                background: "var(--color-gray-colorgraybg, #f8f6f6)",
              },
              ...style,
            }}
          >
            {/* name="icons" id="16:6540" type="INSTANCE" */}
            <QodeCustom193
              style={{
                ...{
                  display: "flex",
                  width: "12px",
                  height: "12px",
                  padding: "1.199px 1.199px 1.199px 1.2px",
                  justifyContent: "center",
                  alignItems: "center",
                },
                ...{},
              }}
              {...{}}
            />
            <span
              style={{
                ...{
                  color:
                    "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-small, 12px)",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "16px /* 133.333% */",
                },
                ...{},
              }}
            >{`Tag`}</span>
            {/* name="xmark" id="16:6542" type="INSTANCE" */}
            <QodeCustom166463
              style={{
                ...{
                  display: "flex",
                  width: "12px",
                  height: "12px",
                  padding: "2.999px",
                  justifyContent: "center",
                  alignItems: "center",
                },
                ...{},
              }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="16:6543" */}
      {`${color}` === `magenta` && `${state}` === `hover` && (
        <>
          {/* name="color=magenta, state=hover" id="16:6543" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "inline-flex",
                height: "24px",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-margin-marginxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradiussm, 6px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-magneta-colormagentaborder, #ffd6e7)",
                background: "var(--color-magneta-colormagentabg, #fff0f6)",
              },
              ...style,
            }}
          >
            {/* name="icons" id="16:6544" type="INSTANCE" */}
            <QodeCustom193
              style={{
                ...{
                  display: "flex",
                  width: "12px",
                  height: "12px",
                  padding: "1.199px 1.199px 1.199px 1.2px",
                  justifyContent: "center",
                  alignItems: "center",
                },
                ...{},
              }}
              {...{}}
            />
            <span
              style={{
                ...{
                  color: "var(--color-magneta-colormagentatext, #f759ab)",
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-small, 12px)",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "16px /* 133.333% */",
                },
                ...{},
              }}
            >{`Tag`}</span>
            {/* name="xmark" id="16:6546" type="INSTANCE" */}
            <QodeCustom166463
              style={{
                ...{
                  display: "flex",
                  width: "12px",
                  height: "12px",
                  padding: "2.999px",
                  justifyContent: "center",
                  alignItems: "center",
                },
                ...{},
              }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="16:6547" */}
      {`${color}` === `magenta` && `${state}` === `active` && (
        <>
          {/* name="color=magenta, state=active" id="16:6547" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "inline-flex",
                height: "24px",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-margin-marginxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradiussm, 6px)",
                background: "var(--color-magneta-colormagenta, #f759ab)",
              },
              ...style,
            }}
          >
            {/* name="icons" id="16:6548" type="INSTANCE" */}
            <QodeCustom193
              style={{
                ...{
                  display: "flex",
                  width: "12px",
                  height: "12px",
                  padding: "1.199px 1.199px 1.199px 1.2px",
                  justifyContent: "center",
                  alignItems: "center",
                },
                ...{},
              }}
              {...{}}
            />
            <span
              style={{
                ...{
                  color: "var(--color-neutral-text-colortextsolid, #fff)",
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-small, 12px)",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "16px /* 133.333% */",
                },
                ...{},
              }}
            >{`Tag`}</span>
            {/* name="xmark" id="16:6550" type="INSTANCE" */}
            <QodeCustom166463
              style={{
                ...{
                  display: "flex",
                  width: "12px",
                  height: "12px",
                  padding: "2.999px",
                  justifyContent: "center",
                  alignItems: "center",
                },
                ...{},
              }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="16:6551" */}
      {`${color}` === `golden purple` && `${state}` === `hover` && (
        <>
          {/* name="color=golden purple, state=hover" id="16:6551" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "inline-flex",
                height: "24px",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-margin-marginxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradiussm, 6px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-gold-purple-colorgoldpurpleborder, #efdbff)",
                background:
                  "var(--color-gold-purple-colorgoldpurplebg, #f9f0ff)",
              },
              ...style,
            }}
          >
            {/* name="icons" id="16:6552" type="INSTANCE" */}
            <QodeCustom193
              style={{
                ...{
                  display: "flex",
                  width: "12px",
                  height: "12px",
                  padding: "1.199px 1.199px 1.199px 1.2px",
                  justifyContent: "center",
                  alignItems: "center",
                },
                ...{},
              }}
              {...{}}
            />
            <span
              style={{
                ...{
                  color:
                    "var(--color-gold-purple-colorgoldpurpletext, #9254de)",
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-small, 12px)",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "16px /* 133.333% */",
                },
                ...{},
              }}
            >{`Tag`}</span>
            {/* name="xmark" id="16:6554" type="INSTANCE" */}
            <QodeCustom166463
              style={{
                ...{
                  display: "flex",
                  width: "12px",
                  height: "12px",
                  padding: "2.999px",
                  justifyContent: "center",
                  alignItems: "center",
                },
                ...{},
              }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="16:6555" */}
      {`${color}` === `golden purple` && `${state}` === `active` && (
        <>
          {/* name="color=golden purple, state=active" id="16:6555" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "inline-flex",
                height: "24px",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-margin-marginxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradiussm, 6px)",
                background: "var(--color-gold-purple-colorgoldpurple, #9254de)",
              },
              ...style,
            }}
          >
            {/* name="icons" id="16:6556" type="INSTANCE" */}
            <QodeCustom193
              style={{
                ...{
                  display: "flex",
                  width: "12px",
                  height: "12px",
                  padding: "1.199px 1.199px 1.199px 1.2px",
                  justifyContent: "center",
                  alignItems: "center",
                },
                ...{},
              }}
              {...{}}
            />
            <span
              style={{
                ...{
                  color: "var(--color-neutral-text-colortextsolid, #fff)",
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-small, 12px)",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "16px /* 133.333% */",
                },
                ...{},
              }}
            >{`Tag`}</span>
            {/* name="xmark" id="16:6558" type="INSTANCE" */}
            <QodeCustom166463
              style={{
                ...{
                  display: "flex",
                  width: "12px",
                  height: "12px",
                  padding: "2.999px",
                  justifyContent: "center",
                  alignItems: "center",
                },
                ...{},
              }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="16:6559" */}
      {`${color}` === `🔸 primary` && `${state}` === `hover` && (
        <>
          {/* name="color=🔸 primary, state=hover" id="16:6559" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "inline-flex",
                height: "24px",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-margin-marginxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradiussm, 6px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-primary-colorprimaryborder, #abc1e4)",
                background: "var(--color-primary-colorprimarybg, #eaeff8)",
              },
              ...style,
            }}
          >
            {/* name="icons" id="16:6560" type="INSTANCE" */}
            <QodeCustom193
              style={{
                ...{
                  display: "flex",
                  width: "12px",
                  height: "12px",
                  padding: "1.199px 1.199px 1.199px 1.2px",
                  justifyContent: "center",
                  alignItems: "center",
                },
                ...{},
              }}
              {...{}}
            />
            <span
              style={{
                ...{
                  color: "var(--color-primary-colorprimarytext, #2d64bc)",
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-small, 12px)",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "16px /* 133.333% */",
                },
                ...{},
              }}
            >{`Tag`}</span>
            {/* name="xmark" id="16:6562" type="INSTANCE" */}
            <QodeCustom166463
              style={{
                ...{
                  display: "flex",
                  width: "12px",
                  height: "12px",
                  padding: "2.999px",
                  justifyContent: "center",
                  alignItems: "center",
                },
                ...{},
              }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="16:6563" */}
      {`${color}` === `🔸 primary` && `${state}` === `active` && (
        <>
          {/* name="color=🔸 primary, state=active" id="16:6563" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "inline-flex",
                height: "24px",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-margin-marginxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradiussm, 6px)",
                background: "var(--color-primary-colorprimary, #2d64bc)",
              },
              ...style,
            }}
          >
            {/* name="icons" id="16:6564" type="INSTANCE" */}
            <QodeCustom193
              style={{
                ...{
                  display: "flex",
                  width: "12px",
                  height: "12px",
                  padding: "1.199px 1.199px 1.199px 1.2px",
                  justifyContent: "center",
                  alignItems: "center",
                },
                ...{},
              }}
              {...{}}
            />
            <span
              style={{
                ...{
                  color: "var(--color-neutral-text-colortextsolid, #fff)",
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-small, 12px)",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "16px /* 133.333% */",
                },
                ...{},
              }}
            >{`Tag`}</span>
            {/* name="xmark" id="16:6566" type="INSTANCE" */}
            <QodeCustom166463
              style={{
                ...{
                  display: "flex",
                  width: "12px",
                  height: "12px",
                  padding: "2.999px",
                  justifyContent: "center",
                  alignItems: "center",
                },
                ...{},
              }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="16:6567" */}
      {`${color}` === `cyan` && `${state}` === `hover` && (
        <>
          {/* name="color=cyan, state=hover" id="16:6567" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "inline-flex",
                height: "24px",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-margin-marginxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradiussm, 6px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-cyan-colorcyanborder, #b5f5ec)",
                background: "var(--color-cyan-colorcyanbg, #e6fffb)",
              },
              ...style,
            }}
          >
            {/* name="icons" id="16:6568" type="INSTANCE" */}
            <QodeCustom193
              style={{
                ...{
                  display: "flex",
                  width: "12px",
                  height: "12px",
                  padding: "1.199px 1.199px 1.199px 1.2px",
                  justifyContent: "center",
                  alignItems: "center",
                },
                ...{},
              }}
              {...{}}
            />
            <span
              style={{
                ...{
                  color: "var(--color-cyan-colorcyantext, #36cfc9)",
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-small, 12px)",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "16px /* 133.333% */",
                },
                ...{},
              }}
            >{`Tag`}</span>
            {/* name="xmark" id="16:6570" type="INSTANCE" */}
            <QodeCustom166463
              style={{
                ...{
                  display: "flex",
                  width: "12px",
                  height: "12px",
                  padding: "2.999px",
                  justifyContent: "center",
                  alignItems: "center",
                },
                ...{},
              }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="16:6571" */}
      {`${color}` === `cyan` && `${state}` === `active` && (
        <>
          {/* name="color=cyan, state=active" id="16:6571" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "inline-flex",
                height: "24px",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-margin-marginxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradiussm, 6px)",
                background: "var(--color-cyan-colorcyan, #36cfc9)",
              },
              ...style,
            }}
          >
            {/* name="icons" id="16:6572" type="INSTANCE" */}
            <QodeCustom193
              style={{
                ...{
                  display: "flex",
                  width: "12px",
                  height: "12px",
                  padding: "1.199px 1.199px 1.199px 1.2px",
                  justifyContent: "center",
                  alignItems: "center",
                },
                ...{},
              }}
              {...{}}
            />
            <span
              style={{
                ...{
                  color: "var(--color-neutral-text-colortextsolid, #fff)",
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-small, 12px)",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "16px /* 133.333% */",
                },
                ...{},
              }}
            >{`Tag`}</span>
            {/* name="xmark" id="16:6574" type="INSTANCE" */}
            <QodeCustom166463
              style={{
                ...{
                  display: "flex",
                  width: "12px",
                  height: "12px",
                  padding: "2.999px",
                  justifyContent: "center",
                  alignItems: "center",
                },
                ...{},
              }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="16:6575" */}
      {`${color}` === `polar green` && `${state}` === `hover` && (
        <>
          {/* name="color=polar green, state=hover" id="16:6575" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "inline-flex",
                height: "24px",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-margin-marginxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradiussm, 6px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-polar-green-colorpolarborder, #dae9b0)",
                background: "var(--color-polar-green-colorpolarbg, #ecf6d2)",
              },
              ...style,
            }}
          >
            {/* name="icons" id="16:6576" type="INSTANCE" */}
            <QodeCustom193
              style={{
                ...{
                  display: "flex",
                  width: "12px",
                  height: "12px",
                  padding: "1.199px 1.199px 1.199px 1.2px",
                  justifyContent: "center",
                  alignItems: "center",
                },
                ...{},
              }}
              {...{}}
            />
            <span
              style={{
                ...{
                  color: "var(--color-polar-green-colorpolartext, #8db911)",
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-small, 12px)",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "16px /* 133.333% */",
                },
                ...{},
              }}
            >{`Tag`}</span>
            {/* name="xmark" id="16:6578" type="INSTANCE" */}
            <QodeCustom166463
              style={{
                ...{
                  display: "flex",
                  width: "12px",
                  height: "12px",
                  padding: "2.999px",
                  justifyContent: "center",
                  alignItems: "center",
                },
                ...{},
              }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="16:6579" */}
      {`${color}` === `polar green` && `${state}` === `active` && (
        <>
          {/* name="color=polar green, state=active" id="16:6579" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "inline-flex",
                height: "24px",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-margin-marginxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradiussm, 6px)",
                background: "var(--color-polar-green-colorpolar, #8db911)",
              },
              ...style,
            }}
          >
            {/* name="icons" id="16:6580" type="INSTANCE" */}
            <QodeCustom193
              style={{
                ...{
                  display: "flex",
                  width: "12px",
                  height: "12px",
                  padding: "1.199px 1.199px 1.199px 1.2px",
                  justifyContent: "center",
                  alignItems: "center",
                },
                ...{},
              }}
              {...{}}
            />
            <span
              style={{
                ...{
                  color: "var(--color-neutral-text-colortextsolid, #fff)",
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-small, 12px)",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "16px /* 133.333% */",
                },
                ...{},
              }}
            >{`Tag`}</span>
            {/* name="xmark" id="16:6582" type="INSTANCE" */}
            <QodeCustom166463
              style={{
                ...{
                  display: "flex",
                  width: "12px",
                  height: "12px",
                  padding: "2.999px",
                  justifyContent: "center",
                  alignItems: "center",
                },
                ...{},
              }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="16:6583" */}
      {`${color}` === `lime` && `${state}` === `hover` && (
        <>
          {/* name="color=lime, state=hover" id="16:6583" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "inline-flex",
                height: "24px",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-margin-marginxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradiussm, 6px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-lime-colorlimeborder, #d3f261)",
                background: "var(--color-lime-colorlimebg, #f4ffb8)",
              },
              ...style,
            }}
          >
            {/* name="icons" id="16:6584" type="INSTANCE" */}
            <QodeCustom193
              style={{
                ...{
                  display: "flex",
                  width: "12px",
                  height: "12px",
                  padding: "1.199px 1.199px 1.199px 1.2px",
                  justifyContent: "center",
                  alignItems: "center",
                },
                ...{},
              }}
              {...{}}
            />
            <span
              style={{
                ...{
                  color: "var(--color-lime-colorlimetext, #7cb305)",
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-small, 12px)",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "16px /* 133.333% */",
                },
                ...{},
              }}
            >{`Tag`}</span>
            {/* name="xmark" id="16:6586" type="INSTANCE" */}
            <QodeCustom166463
              style={{
                ...{
                  display: "flex",
                  width: "12px",
                  height: "12px",
                  padding: "2.999px",
                  justifyContent: "center",
                  alignItems: "center",
                },
                ...{},
              }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="16:6587" */}
      {`${color}` === `lime` && `${state}` === `active` && (
        <>
          {/* name="color=lime, state=active" id="16:6587" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "inline-flex",
                height: "24px",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-margin-marginxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradiussm, 6px)",
                background: "var(--color-lime-colorlime, #a0d911)",
              },
              ...style,
            }}
          >
            {/* name="icons" id="16:6588" type="INSTANCE" */}
            <QodeCustom193
              style={{
                ...{
                  display: "flex",
                  width: "12px",
                  height: "12px",
                  padding: "1.199px 1.199px 1.199px 1.2px",
                  justifyContent: "center",
                  alignItems: "center",
                },
                ...{},
              }}
              {...{}}
            />
            <span
              style={{
                ...{
                  color: "var(--color-neutral-text-colortextsolid, #fff)",
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-small, 12px)",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "16px /* 133.333% */",
                },
                ...{},
              }}
            >{`Tag`}</span>
            {/* name="xmark" id="16:6590" type="INSTANCE" */}
            <QodeCustom166463
              style={{
                ...{
                  display: "flex",
                  width: "12px",
                  height: "12px",
                  padding: "2.999px",
                  justifyContent: "center",
                  alignItems: "center",
                },
                ...{},
              }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="16:6591" */}
      {`${color}` === `calendula gold` && `${state}` === `hover` && (
        <>
          {/* name="color=calendula gold, state=hover" id="16:6591" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "inline-flex",
                height: "24px",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-margin-marginxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradiussm, 6px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-calendual-gold-colorgoldborder, #fdd9b3)",
                background: "var(--color-calendual-gold-colorgoldbg, #ffe5c7)",
              },
              ...style,
            }}
          >
            {/* name="icons" id="16:6592" type="INSTANCE" */}
            <QodeCustom193
              style={{
                ...{
                  display: "flex",
                  width: "12px",
                  height: "12px",
                  padding: "1.199px 1.199px 1.199px 1.2px",
                  justifyContent: "center",
                  alignItems: "center",
                },
                ...{},
              }}
              {...{}}
            />
            <span
              style={{
                ...{
                  color: "var(--color-calendual-gold-colorgoldtext, #fa9f42)",
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-small, 12px)",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "16px /* 133.333% */",
                },
                ...{},
              }}
            >{`Tag`}</span>
            {/* name="xmark" id="16:6594" type="INSTANCE" */}
            <QodeCustom166463
              style={{
                ...{
                  display: "flex",
                  width: "12px",
                  height: "12px",
                  padding: "2.999px",
                  justifyContent: "center",
                  alignItems: "center",
                },
                ...{},
              }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="16:6595" */}
      {`${color}` === `calendula gold` && `${state}` === `active` && (
        <>
          {/* name="color=calendula gold, state=active" id="16:6595" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "inline-flex",
                height: "24px",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-margin-marginxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradiussm, 6px)",
                background: "var(--color-calendual-gold-colorgold, #fa9f42)",
              },
              ...style,
            }}
          >
            {/* name="icons" id="16:6596" type="INSTANCE" */}
            <QodeCustom193
              style={{
                ...{
                  display: "flex",
                  width: "12px",
                  height: "12px",
                  padding: "1.199px 1.199px 1.199px 1.2px",
                  justifyContent: "center",
                  alignItems: "center",
                },
                ...{},
              }}
              {...{}}
            />
            <span
              style={{
                ...{
                  color: "var(--color-neutral-text-colortextsolid, #fff)",
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-small, 12px)",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "16px /* 133.333% */",
                },
                ...{},
              }}
            >{`Tag`}</span>
            {/* name="xmark" id="16:6598" type="INSTANCE" */}
            <QodeCustom166463
              style={{
                ...{
                  display: "flex",
                  width: "12px",
                  height: "12px",
                  padding: "2.999px",
                  justifyContent: "center",
                  alignItems: "center",
                },
                ...{},
              }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="16:6599" */}
      {`${color}` === `Volcano` && `${state}` === `hover` && (
        <>
          {/* name="color=Volcano, state=hover" id="16:6599" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "inline-flex",
                height: "24px",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-margin-marginxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradiussm, 6px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-error-colorerrorborder, #ffc1b3)",
                background: "var(--color-error-colorerrorbg, #fff0ec)",
              },
              ...style,
            }}
          >
            {/* name="icons" id="16:6600" type="INSTANCE" */}
            <QodeCustom193
              style={{
                ...{
                  display: "flex",
                  width: "12px",
                  height: "12px",
                  padding: "1.199px 1.199px 1.199px 1.2px",
                  justifyContent: "center",
                  alignItems: "center",
                },
                ...{},
              }}
              {...{}}
            />
            <span
              style={{
                ...{
                  color: "var(--color-error-colorerrortext, #ff6542)",
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-small, 12px)",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "16px /* 133.333% */",
                },
                ...{},
              }}
            >{`Tag`}</span>
            {/* name="xmark" id="16:6602" type="INSTANCE" */}
            <QodeCustom166463
              style={{
                ...{
                  display: "flex",
                  width: "12px",
                  height: "12px",
                  padding: "2.999px",
                  justifyContent: "center",
                  alignItems: "center",
                },
                ...{},
              }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="16:6603" */}
      {`${color}` === `Volcano` && `${state}` === `active` && (
        <>
          {/* name="color=Volcano, state=active" id="16:6603" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "inline-flex",
                height: "24px",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-margin-marginxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradiussm, 6px)",
                background: "var(--color-error-colorerror, #ff6542)",
              },
              ...style,
            }}
          >
            {/* name="icons" id="16:6604" type="INSTANCE" */}
            <QodeCustom193
              style={{
                ...{
                  display: "flex",
                  width: "12px",
                  height: "12px",
                  padding: "1.199px 1.199px 1.199px 1.2px",
                  justifyContent: "center",
                  alignItems: "center",
                },
                ...{},
              }}
              {...{}}
            />
            <span
              style={{
                ...{
                  color: "var(--color-neutral-text-colortextsolid, #fff)",
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-small, 12px)",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "16px /* 133.333% */",
                },
                ...{},
              }}
            >{`Tag`}</span>
            {/* name="xmark" id="16:6606" type="INSTANCE" */}
            <QodeCustom166463
              style={{
                ...{
                  display: "flex",
                  width: "12px",
                  height: "12px",
                  padding: "2.999px",
                  justifyContent: "center",
                  alignItems: "center",
                },
                ...{},
              }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="16:6607" */}
      {`${color}` === `gray` && `${state}` === `hover` && (
        <>
          {/* name="color=gray, state=hover" id="16:6607" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "inline-flex",
                height: "24px",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-margin-marginxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradiussm, 6px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-gray-colorgrayborder, #e3e3e3)",
                background: "var(--color-gray-colorgraybg, #f8f6f6)",
              },
              ...style,
            }}
          >
            {/* name="icons" id="16:6608" type="INSTANCE" */}
            <QodeCustom193
              style={{
                ...{
                  display: "flex",
                  width: "12px",
                  height: "12px",
                  padding: "1.199px 1.199px 1.199px 1.2px",
                  justifyContent: "center",
                  alignItems: "center",
                },
                ...{},
              }}
              {...{}}
            />
            <span
              style={{
                ...{
                  color:
                    "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-small, 12px)",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "16px /* 133.333% */",
                },
                ...{},
              }}
            >{`Tag`}</span>
            {/* name="xmark" id="16:6610" type="INSTANCE" */}
            <QodeCustom166463
              style={{
                ...{
                  display: "flex",
                  width: "12px",
                  height: "12px",
                  padding: "2.999px",
                  justifyContent: "center",
                  alignItems: "center",
                },
                ...{},
              }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="16:6611" */}
      {`${color}` === `gray` && `${state}` === `active` && (
        <>
          {/* name="color=gray, state=active" id="16:6611" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "inline-flex",
                height: "24px",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-margin-marginxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradiussm, 6px)",
                background: "var(--color-gray-colorgray, #ababab)",
              },
              ...style,
            }}
          >
            {/* name="icons" id="16:6612" type="INSTANCE" */}
            <QodeCustom193
              style={{
                ...{
                  display: "flex",
                  width: "12px",
                  height: "12px",
                  padding: "1.199px 1.199px 1.199px 1.2px",
                  justifyContent: "center",
                  alignItems: "center",
                },
                ...{},
              }}
              {...{}}
            />
            <span
              style={{
                ...{
                  color: "var(--color-neutral-text-colortextsolid, #fff)",
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-small, 12px)",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "16px /* 133.333% */",
                },
                ...{},
              }}
            >{`Tag`}</span>
            {/* name="xmark" id="16:6614" type="INSTANCE" */}
            <QodeCustom166463
              style={{
                ...{
                  display: "flex",
                  width: "12px",
                  height: "12px",
                  padding: "2.999px",
                  justifyContent: "center",
                  alignItems: "center",
                },
                ...{},
              }}
              {...{}}
            />
          </div>
        </>
      )}
    </>
  )
}
