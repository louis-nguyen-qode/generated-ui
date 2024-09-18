// id="289:26275"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCheckbox } from "@designSystem/ant/QodeCheckbox"

export interface QodeCustom28926275Props {
  submenu?: boolean
  title?: string
  checkbox?: boolean
  icon?: React.ReactNode
  showIcon?: boolean
  state?: "default" | "hover" | "disabled" | "selected"
  danger?: "false" | "true"
}

export const QodeCustom28926275: React.FC<
  QodeCustom28926275Props & { style?: CSSProperties }
> = ({
  submenu = true,
  title = "Dropdown Item",
  checkbox = false,
  icon = undefined,
  showIcon = true,
  state = "default",
  danger = "false",
  style,
  ...rest
}) => {
  return (
    <>
      {/* name="_Dropdown/Item" id="289:26275" type="COMPONENT_SET" */}
      {/* id="289:26276" */}
      {`${state}` === `default` && `${danger}` === `false` && (
        <>
          {/* name="state=default, danger=false" id="289:26276" type="COMPONENT" */}
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
            {/* name="Checkbox" id="289:26284" type="INSTANCE" */}
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
            {/* name="🎰 icon" id="289:26285" type="INSTANCE" */}
            <Icon.QodeUser
              style={{
                ...{ width: "16px", height: "16px", flexShrink: "0" },
                ...{},
              }}
              {...{}}
            />
            <span
              style={{
                ...{
                  flex: "1 0 0",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                },
                ...{},
              }}
            >{`Dropdown Item`}</span>
            {/* name="submenu" id="289:26287" type="INSTANCE" */}
            <Icon.QodeChevronRight
              style={{
                ...{ width: "12px", height: "12px", flexShrink: "0" },
                ...{},
              }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="289:26277" */}
      {`${state}` === `hover` && `${danger}` === `false` && (
        <>
          {/* name="state=hover, danger=false" id="289:26277" type="COMPONENT" */}
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
            {/* name="Checkbox" id="289:26288" type="INSTANCE" */}
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
            {/* name="🎰 icon" id="289:26289" type="INSTANCE" */}
            <Icon.QodeUser
              style={{
                ...{ width: "16px", height: "16px", flexShrink: "0" },
                ...{},
              }}
              {...{}}
            />
            <span
              style={{
                ...{
                  flex: "1 0 0",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                },
                ...{},
              }}
            >{`Dropdown Item`}</span>
            {/* name="submenu" id="289:26291" type="INSTANCE" */}
            <Icon.QodeChevronRight
              style={{
                ...{ width: "12px", height: "12px", flexShrink: "0" },
                ...{},
              }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="289:26278" */}
      {`${state}` === `disabled` && `${danger}` === `false` && (
        <>
          {/* name="state=disabled, danger=false" id="289:26278" type="COMPONENT" */}
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
                background: "var(--background-bg-disabled, #e3e3e3)",
              },
              ...style,
            }}
          >
            {/* name="Checkbox" id="289:26292" type="INSTANCE" */}
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
            {/* name="🎰 icon" id="289:26293" type="INSTANCE" */}
            <Icon.QodeUser
              style={{
                ...{ width: "16px", height: "16px", flexShrink: "0" },
                ...{},
              }}
              {...{}}
            />
            <span
              style={{
                ...{
                  flex: "1 0 0",
                  color: "var(--text-text-disabled, #bfbfbf)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                },
                ...{},
              }}
            >{`Dropdown Item`}</span>
            {/* name="submenu" id="289:26295" type="INSTANCE" */}
            <Icon.QodeChevronRight
              style={{
                ...{ width: "12px", height: "12px", flexShrink: "0" },
                ...{},
              }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="289:26279" */}
      {`${state}` === `selected` && `${danger}` === `false` && (
        <>
          {/* name="state=selected, danger=false" id="289:26279" type="COMPONENT" */}
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
                background: "var(--color-primary-colorprimarybg, #f8fcff)",
              },
              ...style,
            }}
          >
            {/* name="Checkbox" id="289:26296" type="INSTANCE" */}
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
            {/* name="🎰 icon" id="289:26297" type="INSTANCE" */}
            <Icon.QodeUser
              style={{
                ...{ width: "16px", height: "16px", flexShrink: "0" },
                ...{},
              }}
              {...{}}
            />
            <span
              style={{
                ...{
                  flex: "1 0 0",
                  color: "var(--color-primary-colorprimarytext, #1597f4)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                },
                ...{},
              }}
            >{`Dropdown Item`}</span>
            {/* name="submenu" id="289:26299" type="INSTANCE" */}
            <Icon.QodeChevronRight
              style={{
                ...{ width: "12px", height: "12px", flexShrink: "0" },
                ...{},
              }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="289:26280" */}
      {`${state}` === `default` && `${danger}` === `true` && (
        <>
          {/* name="state=default, danger=true" id="289:26280" type="COMPONENT" */}
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
            {/* name="Checkbox" id="289:26300" type="INSTANCE" */}
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
            {/* name="🎰 icon" id="289:26301" type="INSTANCE" */}
            <Icon.QodeUser
              style={{
                ...{ width: "16px", height: "16px", flexShrink: "0" },
                ...{},
              }}
              {...{}}
            />
            <span
              style={{
                ...{
                  flex: "1 0 0",
                  color: "var(--color-error-colorerrortext, #dc3812)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                },
                ...{},
              }}
            >{`Dropdown Item`}</span>
            {/* name="submenu" id="289:26303" type="INSTANCE" */}
            <Icon.QodeChevronRight
              style={{
                ...{ width: "12px", height: "12px", flexShrink: "0" },
                ...{},
              }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="289:26281" */}
      {`${state}` === `hover` && `${danger}` === `true` && (
        <>
          {/* name="state=hover, danger=true" id="289:26281" type="COMPONENT" */}
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
                background: "var(--color-error-colorerror, #dc3812)",
              },
              ...style,
            }}
          >
            {/* name="Checkbox" id="289:26304" type="INSTANCE" */}
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
            {/* name="🎰 icon" id="289:26305" type="INSTANCE" */}
            <Icon.QodeUser
              style={{
                ...{ width: "16px", height: "16px", flexShrink: "0" },
                ...{},
              }}
              {...{}}
            />
            <span
              style={{
                ...{
                  flex: "1 0 0",
                  color: "var(--color-neutral-text-colortextsolid, #fff)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                },
                ...{},
              }}
            >{`Dropdown Item`}</span>
            {/* name="submenu" id="289:26307" type="INSTANCE" */}
            <Icon.QodeChevronRight
              style={{
                ...{ width: "12px", height: "12px", flexShrink: "0" },
                ...{},
              }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="289:26282" */}
      {`${state}` === `disabled` && `${danger}` === `true` && (
        <>
          {/* name="state=disabled, danger=true" id="289:26282" type="COMPONENT" */}
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
            {/* name="Checkbox" id="289:26308" type="INSTANCE" */}
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
            {/* name="🎰 icon" id="289:26309" type="INSTANCE" */}
            <Icon.QodeUser
              style={{
                ...{ width: "16px", height: "16px", flexShrink: "0" },
                ...{},
              }}
              {...{}}
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
            >{`Dropdown Item`}</span>
            {/* name="submenu" id="289:26311" type="INSTANCE" */}
            <Icon.QodeChevronRight
              style={{
                ...{ width: "12px", height: "12px", flexShrink: "0" },
                ...{},
              }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="289:26283" */}
      {`${state}` === `selected` && `${danger}` === `true` && (
        <>
          {/* name="state=selected, danger=true" id="289:26283" type="COMPONENT" */}
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
                background: "var(--color-error-colorerror, #dc3812)",
              },
              ...style,
            }}
          >
            {/* name="Checkbox" id="289:26312" type="INSTANCE" */}
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
            {/* name="🎰 icon" id="289:26313" type="INSTANCE" */}
            <Icon.QodeUser
              style={{
                ...{ width: "16px", height: "16px", flexShrink: "0" },
                ...{},
              }}
              {...{}}
            />
            <span
              style={{
                ...{
                  flex: "1 0 0",
                  color: "var(--color-neutral-text-colortextsolid, #fff)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                },
                ...{},
              }}
            >{`Dropdown Item`}</span>
            {/* name="submenu" id="289:26315" type="INSTANCE" */}
            <Icon.QodeChevronRight
              style={{
                ...{ width: "12px", height: "12px", flexShrink: "0" },
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
