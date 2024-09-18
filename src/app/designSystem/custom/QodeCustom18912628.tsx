// id="189:12628"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCheckbox } from "@designSystem/ant/QodeCheckbox"

export interface QodeCustom18912628Props {
  submenu?: boolean
  title?: string
  checkbox?: boolean
  icon?: React.ReactNode
  showIcon?: boolean
  state?: "default" | "hover" | "disabled" | "selected"
  danger?: "false" | "true"
}

export const QodeCustom18912628: React.FC<
  QodeCustom18912628Props & { style?: CSSProperties }
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
      {/* name="_Dropdown/Item" id="189:12628" type="COMPONENT_SET" */}
      {/* id="189:12627" */}
      {`${state}` === `default` && `${danger}` === `false` && (
        <>
          {/* name="state=default, danger=false" id="189:12627" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "200px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px 12px",
                alignItems: "center",
                gap: "8px",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradiussm, 6px)",
              },
              ...style,
            }}
          >
            {/* name="Checkbox" id="2759:31841" type="INSTANCE" */}
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
            {/* name="🎰 icon" id="189:12622" type="INSTANCE" */}
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
            {/* name="submenu" id="189:12625" type="INSTANCE" */}
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
      {/* id="189:12635" */}
      {`${state}` === `hover` && `${danger}` === `false` && (
        <>
          {/* name="state=hover, danger=false" id="189:12635" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "200px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px 12px",
                alignItems: "center",
                gap: "8px",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradiussm, 6px)",
                background: "var(--background-bg-white-hover, #f8f6f6)",
              },
              ...style,
            }}
          >
            {/* name="Checkbox" id="2759:31842" type="INSTANCE" */}
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
            {/* name="🎰 icon" id="189:12636" type="INSTANCE" */}
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
            {/* name="submenu" id="189:12638" type="INSTANCE" */}
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
      {/* id="189:12641" */}
      {`${state}` === `disabled` && `${danger}` === `false` && (
        <>
          {/* name="state=disabled, danger=false" id="189:12641" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "200px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px 12px",
                alignItems: "center",
                gap: "8px",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradiussm, 6px)",
                background: "var(--background-bg-disabled, #e3e3e3)",
              },
              ...style,
            }}
          >
            {/* name="Checkbox" id="2759:31843" type="INSTANCE" */}
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
            {/* name="🎰 icon" id="189:12642" type="INSTANCE" */}
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
            {/* name="submenu" id="189:12644" type="INSTANCE" */}
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
      {/* id="189:12647" */}
      {`${state}` === `selected` && `${danger}` === `false` && (
        <>
          {/* name="state=selected, danger=false" id="189:12647" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "200px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px 12px",
                alignItems: "center",
                gap: "8px",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradiussm, 6px)",
                background: "var(--blue-techblue-5, #f8fcff)",
              },
              ...style,
            }}
          >
            {/* name="Checkbox" id="2759:31844" type="INSTANCE" */}
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
            {/* name="🎰 icon" id="189:12648" type="INSTANCE" */}
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
                  color: "var(--text-text-primary-20, #1597f4)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                },
                ...{},
              }}
            >{`Dropdown Item`}</span>
            {/* name="submenu" id="189:12650" type="INSTANCE" */}
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
      {/* id="189:12653" */}
      {`${state}` === `default` && `${danger}` === `true` && (
        <>
          {/* name="state=default, danger=true" id="189:12653" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "200px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px 12px",
                alignItems: "center",
                gap: "8px",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradiussm, 6px)",
              },
              ...style,
            }}
          >
            {/* name="Checkbox" id="2759:31845" type="INSTANCE" */}
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
            {/* name="🎰 icon" id="189:12654" type="INSTANCE" */}
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
                  color: "var(--text-text-red, #dc3812)",
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
            {/* name="submenu" id="189:12656" type="INSTANCE" */}
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
      {/* id="189:12657" */}
      {`${state}` === `hover` && `${danger}` === `true` && (
        <>
          {/* name="state=hover, danger=true" id="189:12657" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "200px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px 12px",
                alignItems: "center",
                gap: "8px",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradiussm, 6px)",
                background: "var(--background-bg-red-hover, #dc3812)",
              },
              ...style,
            }}
          >
            {/* name="Checkbox" id="2759:31846" type="INSTANCE" */}
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
            {/* name="🎰 icon" id="189:12658" type="INSTANCE" */}
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
                  color: "var(--text-text-white, #fff)",
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
            {/* name="submenu" id="189:12660" type="INSTANCE" */}
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
      {/* id="189:12661" */}
      {`${state}` === `disabled` && `${danger}` === `true` && (
        <>
          {/* name="state=disabled, danger=true" id="189:12661" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "200px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px 12px",
                alignItems: "center",
                gap: "8px",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradiussm, 6px)",
                background: "var(--background-bg-disabled, #e3e3e3)",
              },
              ...style,
            }}
          >
            {/* name="Checkbox" id="2759:31847" type="INSTANCE" */}
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
            {/* name="🎰 icon" id="189:12662" type="INSTANCE" */}
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
                  color: "var(--text-text-placeholder, #a7a7a7)",
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
            {/* name="submenu" id="189:12664" type="INSTANCE" */}
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
      {/* id="189:12665" */}
      {`${state}` === `selected` && `${danger}` === `true` && (
        <>
          {/* name="state=selected, danger=true" id="189:12665" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "200px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px 12px",
                alignItems: "center",
                gap: "8px",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradiussm, 6px)",
                background: "var(--background-bg-red-hover, #dc3812)",
              },
              ...style,
            }}
          >
            {/* name="Checkbox" id="2759:31848" type="INSTANCE" */}
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
            {/* name="🎰 icon" id="189:12666" type="INSTANCE" */}
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
                  color: "var(--text-text-white, #fff)",
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
            {/* name="submenu" id="189:12668" type="INSTANCE" */}
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
