// id="189:5406"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCheckbox } from "@designSystem/ant/QodeCheckbox"
import { QodeCustom6308711 } from "@designSystem/custom/QodeCustom6308711"

export interface QodeCustom1895406Props {
  title?: string
  showArrow?: boolean
  showCheckbox?: boolean
  state?: "default" | "hover" | "disabled"
  selected?: "false" | "true"
}

export const QodeCustom1895406: React.FC<
  QodeCustom1895406Props & { style?: CSSProperties }
> = ({
  title = "Cascader Item",
  showArrow = true,
  showCheckbox = true,
  state = "default",
  selected = "false",
  style,
  ...rest
}) => {
  return (
    <>
      {/* name=".cascader__item" id="189:5406" type="COMPONENT_SET" */}
      {/* id="189:5405" */}
      {`${state}` === `default` && `${selected}` === `false` && (
        <>
          {/* name="state=default, selected=false" id="189:5405" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "200px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradiussm, 6px)",
              },
              ...style,
            }}
          >
            {/* name="Checkbox" id="189:5384" type="INSTANCE" */}
            <QodeCheckbox
              style={{
                ...{
                  display: "flex",
                  width: "95px",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  flexShrink: "0",
                },
                ...{},
              }}
              {...{ title: "Checkbox", status: "inactive", state: "default" }}
            />
            <span
              style={{
                ...{
                  flex: "1 0 0",
                  color:
                    "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                },
                ...{},
              }}
            >{`Cascader Item`}</span>
            {/* name="Icon" id="189:5401" type="INSTANCE" */}
            <QodeCustom6308711
              style={{
                ...{
                  width: "var(--font-size-base, 14px)",
                  height: "var(--font-size-base, 14px)",
                  flexShrink: "0",
                },
                ...{},
              }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="189:5414" */}
      {`${state}` === `hover` && `${selected}` === `false` && (
        <>
          {/* name="state=hover, selected=false" id="189:5414" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "200px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradiussm, 6px)",
                background:
                  "var(--color-neutral-fill-colorfilltertiary, rgba(0, 0, 0, 0.04))",
              },
              ...style,
            }}
          >
            {/* name="Checkbox" id="189:5415" type="INSTANCE" */}
            <QodeCheckbox
              style={{
                ...{
                  display: "flex",
                  width: "95px",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  flexShrink: "0",
                },
                ...{},
              }}
              {...{ title: "Checkbox", status: "inactive", state: "default" }}
            />
            <span
              style={{
                ...{
                  flex: "1 0 0",
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                },
                ...{},
              }}
            >{`Cascader Item`}</span>
            {/* name="Icon" id="189:5417" type="INSTANCE" */}
            <QodeCustom6308711
              style={{
                ...{
                  width: "var(--font-size-base, 14px)",
                  height: "var(--font-size-base, 14px)",
                  flexShrink: "0",
                },
                ...{},
              }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="189:5421" */}
      {`${state}` === `disabled` && `${selected}` === `false` && (
        <>
          {/* name="state=disabled, selected=false" id="189:5421" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "200px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradiussm, 6px)",
              },
              ...style,
            }}
          >
            {/* name="Checkbox" id="189:5422" type="INSTANCE" */}
            <QodeCheckbox
              style={{
                ...{
                  display: "flex",
                  width: "95px",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  flexShrink: "0",
                },
                ...{},
              }}
              {...{ title: "Checkbox", status: "inactive", state: "disabled" }}
            />
            <span
              style={{
                ...{
                  flex: "1 0 0",
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                },
                ...{},
              }}
            >{`Cascader Item`}</span>
            {/* name="Icon" id="189:5424" type="INSTANCE" */}
            <QodeCustom6308711
              style={{
                ...{
                  width: "var(--font-size-base, 14px)",
                  height: "var(--font-size-base, 14px)",
                  flexShrink: "0",
                },
                ...{},
              }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="189:5439" */}
      {`${state}` === `default` && `${selected}` === `true` && (
        <>
          {/* name="state=default, selected=true" id="189:5439" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "200px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradiussm, 6px)",
                background:
                  "var(--color-neutral-fill-colorfillquaternary, rgba(0, 0, 0, 0.02))",
              },
              ...style,
            }}
          >
            {/* name="Checkbox" id="189:5440" type="INSTANCE" */}
            <QodeCheckbox
              style={{
                ...{
                  display: "flex",
                  width: "95px",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  flexShrink: "0",
                },
                ...{},
              }}
              {...{ title: "Checkbox", status: "active", state: "default" }}
            />
            <span
              style={{
                ...{
                  flex: "1 0 0",
                  color: "var(--color-primary-colorprimarytext, #1597f4)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                },
                ...{},
              }}
            >{`Cascader Item`}</span>
            {/* name="Icon" id="189:5442" type="INSTANCE" */}
            <QodeCustom6308711
              style={{
                ...{
                  width: "var(--font-size-base, 14px)",
                  height: "var(--font-size-base, 14px)",
                  flexShrink: "0",
                },
                ...{},
              }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="189:5443" */}
      {`${state}` === `hover` && `${selected}` === `true` && (
        <>
          {/* name="state=hover, selected=true" id="189:5443" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "200px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradiussm, 6px)",
                background:
                  "var(--color-neutral-fill-colorfillquaternary, rgba(0, 0, 0, 0.02))",
              },
              ...style,
            }}
          >
            {/* name="Checkbox" id="189:5444" type="INSTANCE" */}
            <QodeCheckbox
              style={{
                ...{
                  display: "flex",
                  width: "95px",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  flexShrink: "0",
                },
                ...{},
              }}
              {...{ title: "Checkbox", status: "active", state: "hover" }}
            />
            <span
              style={{
                ...{
                  flex: "1 0 0",
                  color: "var(--color-primary-colorprimarytexthover, #64b9f5)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                },
                ...{},
              }}
            >{`Cascader Item`}</span>
            {/* name="Icon" id="189:5446" type="INSTANCE" */}
            <QodeCustom6308711
              style={{
                ...{
                  width: "var(--font-size-base, 14px)",
                  height: "var(--font-size-base, 14px)",
                  flexShrink: "0",
                },
                ...{},
              }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="189:5447" */}
      {`${state}` === `disabled` && `${selected}` === `true` && (
        <>
          {/* name="state=disabled, selected=true" id="189:5447" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "200px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradiussm, 6px)",
              },
              ...style,
            }}
          >
            {/* name="Checkbox" id="189:5448" type="INSTANCE" */}
            <QodeCheckbox
              style={{
                ...{
                  display: "flex",
                  width: "95px",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  flexShrink: "0",
                },
                ...{},
              }}
              {...{ title: "Checkbox", status: "active", state: "disabled" }}
            />
            <span
              style={{
                ...{
                  flex: "1 0 0",
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                },
                ...{},
              }}
            >{`Cascader Item`}</span>
            {/* name="Icon" id="189:5450" type="INSTANCE" */}
            <QodeCustom6308711
              style={{
                ...{
                  width: "var(--font-size-base, 14px)",
                  height: "var(--font-size-base, 14px)",
                  flexShrink: "0",
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
