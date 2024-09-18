// id="434:25135"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCheckbox } from "@designSystem/ant/QodeCheckbox"

export interface QodeCustom43425135Props {
  submenu?: boolean
  title?: string
  checkbox?: boolean
  icon?: React.ReactNode
  showIcon?: boolean
  state?: "default" | "hover" | "disabled" | "selected"
  danger?: "false" | "true"
}

export const QodeCustom43425135: React.FC<
  QodeCustom43425135Props & { style?: CSSProperties }
> = ({
  submenu = true,
  title = "Dropdown Item",
  checkbox = false,
  icon = undefined,
  showIcon = true,
  state = "default",
  danger = "false",
  ...rest
}) => {
  return (
    <>
      {/* name="_Dropdown/Item" id="434:25135" type="COMPONENT_SET" */}
      {/* id="434:25136" */}
      {`${state}` === `default` && `${danger}` === `false` && (
        <>
          {/* name="state=default, danger=false" id="434:25136" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "200px",
              height: "var(--size-height-controlheight, 32px)",
              padding: "0px 12px",
              alignItems: "center",
              gap: "8px",
              flexShrink: "0",
              borderRadius: "var(--style-radius-borderradiussm, 6px)",
            }}
          >
            {/* name="Checkbox" id="434:25144" type="INSTANCE" */}
            <QodeCheckbox
              style={{
                display: "flex",
                width: "95px",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
              }}
              {...{ title: "Checkbox", status: "inactive", state: "default" }}
            />
            {/* name="🎰 icon" id="434:25145" type="INSTANCE" */}
            <Icon.QodeUser
              style={{ width: "16px", height: "16px", flexShrink: "0" }}
              {...{}}
            />
            <span
              style={{
                flex: "1 0 0",
                color: "var(--text-text-neutral-50, #1d1d1d)",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight:
                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
              }}
            >{`Dropdown Item`}</span>
            {/* name="submenu" id="434:25147" type="INSTANCE" */}
            <Icon.QodeChevronRight
              style={{ width: "12px", height: "12px", flexShrink: "0" }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="434:25137" */}
      {`${state}` === `hover` && `${danger}` === `false` && (
        <>
          {/* name="state=hover, danger=false" id="434:25137" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "200px",
              height: "var(--size-height-controlheight, 32px)",
              padding: "0px 12px",
              alignItems: "center",
              gap: "8px",
              flexShrink: "0",
              borderRadius: "var(--style-radius-borderradiussm, 6px)",
              background: "var(--background-bg-white-hover, #f8f6f6)",
            }}
          >
            {/* name="Checkbox" id="434:25148" type="INSTANCE" */}
            <QodeCheckbox
              style={{
                display: "flex",
                width: "95px",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
              }}
              {...{ title: "Checkbox", status: "inactive", state: "default" }}
            />
            {/* name="🎰 icon" id="434:25149" type="INSTANCE" */}
            <Icon.QodeUser
              style={{ width: "16px", height: "16px", flexShrink: "0" }}
              {...{}}
            />
            <span
              style={{
                flex: "1 0 0",
                color: "var(--text-text-neutral-50, #1d1d1d)",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight:
                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
              }}
            >{`Dropdown Item`}</span>
            {/* name="submenu" id="434:25151" type="INSTANCE" */}
            <Icon.QodeChevronRight
              style={{ width: "12px", height: "12px", flexShrink: "0" }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="434:25138" */}
      {`${state}` === `disabled` && `${danger}` === `false` && (
        <>
          {/* name="state=disabled, danger=false" id="434:25138" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "200px",
              height: "var(--size-height-controlheight, 32px)",
              padding: "0px 12px",
              alignItems: "center",
              gap: "8px",
              flexShrink: "0",
              borderRadius: "var(--style-radius-borderradiussm, 6px)",
              background: "var(--background-bg-disabled, #e3e3e3)",
            }}
          >
            {/* name="Checkbox" id="434:25152" type="INSTANCE" */}
            <QodeCheckbox
              style={{
                display: "flex",
                width: "95px",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
              }}
              {...{ title: "Checkbox", status: "inactive", state: "default" }}
            />
            {/* name="🎰 icon" id="434:25153" type="INSTANCE" */}
            <Icon.QodeUser
              style={{ width: "16px", height: "16px", flexShrink: "0" }}
              {...{}}
            />
            <span
              style={{
                flex: "1 0 0",
                color: "var(--text-text-disabled, #bfbfbf)",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight:
                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
              }}
            >{`Dropdown Item`}</span>
            {/* name="submenu" id="434:25155" type="INSTANCE" */}
            <Icon.QodeChevronRight
              style={{ width: "12px", height: "12px", flexShrink: "0" }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="434:25139" */}
      {`${state}` === `selected` && `${danger}` === `false` && (
        <>
          {/* name="state=selected, danger=false" id="434:25139" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "200px",
              height: "var(--size-height-controlheight, 32px)",
              padding: "0px 12px",
              alignItems: "center",
              gap: "8px",
              flexShrink: "0",
              borderRadius: "var(--style-radius-borderradiussm, 6px)",
              background: "var(--blue-techblue-5, #f8fcff)",
            }}
          >
            {/* name="Checkbox" id="434:25156" type="INSTANCE" */}
            <QodeCheckbox
              style={{
                display: "flex",
                width: "95px",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
              }}
              {...{ title: "Checkbox", status: "inactive", state: "default" }}
            />
            {/* name="🎰 icon" id="434:25157" type="INSTANCE" */}
            <Icon.QodeUser
              style={{ width: "16px", height: "16px", flexShrink: "0" }}
              {...{}}
            />
            <span
              style={{
                flex: "1 0 0",
                color: "var(--text-text-primary-20, #1597f4)",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight:
                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
              }}
            >{`Dropdown Item`}</span>
            {/* name="submenu" id="434:25159" type="INSTANCE" */}
            <Icon.QodeChevronRight
              style={{ width: "12px", height: "12px", flexShrink: "0" }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="434:25140" */}
      {`${state}` === `default` && `${danger}` === `true` && (
        <>
          {/* name="state=default, danger=true" id="434:25140" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "200px",
              height: "var(--size-height-controlheight, 32px)",
              padding: "0px 12px",
              alignItems: "center",
              gap: "8px",
              flexShrink: "0",
              borderRadius: "var(--style-radius-borderradiussm, 6px)",
            }}
          >
            {/* name="Checkbox" id="434:25160" type="INSTANCE" */}
            <QodeCheckbox
              style={{
                display: "flex",
                width: "95px",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
              }}
              {...{ title: "Checkbox", status: "inactive", state: "default" }}
            />
            {/* name="🎰 icon" id="434:25161" type="INSTANCE" */}
            <Icon.QodeUser
              style={{ width: "16px", height: "16px", flexShrink: "0" }}
              {...{}}
            />
            <span
              style={{
                flex: "1 0 0",
                color: "var(--text-text-red, #dc3812)",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight:
                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
              }}
            >{`Dropdown Item`}</span>
            {/* name="submenu" id="434:25163" type="INSTANCE" */}
            <Icon.QodeChevronRight
              style={{ width: "12px", height: "12px", flexShrink: "0" }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="434:25141" */}
      {`${state}` === `hover` && `${danger}` === `true` && (
        <>
          {/* name="state=hover, danger=true" id="434:25141" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "200px",
              height: "var(--size-height-controlheight, 32px)",
              padding: "0px 12px",
              alignItems: "center",
              gap: "8px",
              flexShrink: "0",
              borderRadius: "var(--style-radius-borderradiussm, 6px)",
              background: "var(--background-bg-red-hover, #dc3812)",
            }}
          >
            {/* name="Checkbox" id="434:25164" type="INSTANCE" */}
            <QodeCheckbox
              style={{
                display: "flex",
                width: "95px",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
              }}
              {...{ title: "Checkbox", status: "inactive", state: "default" }}
            />
            {/* name="🎰 icon" id="434:25165" type="INSTANCE" */}
            <Icon.QodeUser
              style={{ width: "16px", height: "16px", flexShrink: "0" }}
              {...{}}
            />
            <span
              style={{
                flex: "1 0 0",
                color: "var(--text-text-white, #fff)",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight:
                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
              }}
            >{`Dropdown Item`}</span>
            {/* name="submenu" id="434:25167" type="INSTANCE" */}
            <Icon.QodeChevronRight
              style={{ width: "12px", height: "12px", flexShrink: "0" }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="434:25142" */}
      {`${state}` === `disabled` && `${danger}` === `true` && (
        <>
          {/* name="state=disabled, danger=true" id="434:25142" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "200px",
              height: "var(--size-height-controlheight, 32px)",
              padding: "0px 12px",
              alignItems: "center",
              gap: "8px",
              flexShrink: "0",
              borderRadius: "var(--style-radius-borderradiussm, 6px)",
              background: "var(--background-bg-disabled, #e3e3e3)",
            }}
          >
            {/* name="Checkbox" id="434:25168" type="INSTANCE" */}
            <QodeCheckbox
              style={{
                display: "flex",
                width: "95px",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
              }}
              {...{ title: "Checkbox", status: "inactive", state: "default" }}
            />
            {/* name="🎰 icon" id="434:25169" type="INSTANCE" */}
            <Icon.QodeUser
              style={{ width: "16px", height: "16px", flexShrink: "0" }}
              {...{}}
            />
            <span
              style={{
                flex: "1 0 0",
                color: "var(--text-text-placeholder, #a7a7a7)",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight:
                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
              }}
            >{`Dropdown Item`}</span>
            {/* name="submenu" id="434:25171" type="INSTANCE" */}
            <Icon.QodeChevronRight
              style={{ width: "12px", height: "12px", flexShrink: "0" }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="434:25143" */}
      {`${state}` === `selected` && `${danger}` === `true` && (
        <>
          {/* name="state=selected, danger=true" id="434:25143" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "200px",
              height: "var(--size-height-controlheight, 32px)",
              padding: "0px 12px",
              alignItems: "center",
              gap: "8px",
              flexShrink: "0",
              borderRadius: "var(--style-radius-borderradiussm, 6px)",
              background: "var(--background-bg-red-hover, #dc3812)",
            }}
          >
            {/* name="Checkbox" id="434:25172" type="INSTANCE" */}
            <QodeCheckbox
              style={{
                display: "flex",
                width: "95px",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
              }}
              {...{ title: "Checkbox", status: "inactive", state: "default" }}
            />
            {/* name="🎰 icon" id="434:25173" type="INSTANCE" */}
            <Icon.QodeUser
              style={{ width: "16px", height: "16px", flexShrink: "0" }}
              {...{}}
            />
            <span
              style={{
                flex: "1 0 0",
                color: "var(--text-text-white, #fff)",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight:
                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
              }}
            >{`Dropdown Item`}</span>
            {/* name="submenu" id="434:25175" type="INSTANCE" */}
            <Icon.QodeChevronRight
              style={{ width: "12px", height: "12px", flexShrink: "0" }}
              {...{}}
            />
          </div>
        </>
      )}
    </>
  )
}
