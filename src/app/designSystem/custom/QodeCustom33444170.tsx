// id="334:44170"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom1377437 } from "@designSystem/custom/QodeCustom1377437"

export interface QodeCustom33444170Props {
  lIcon?: boolean
  label?: string
  rIcon?: boolean
  number?: boolean
  type?: "basic inline" | "button basic" | "button twofold"
  state?: "active" | "default" | "disabled" | "focused" | "hover"
}

export const QodeCustom33444170: React.FC<
  QodeCustom33444170Props & { style?: CSSProperties }
> = ({
  lIcon = false,
  label = "Dropdown",
  rIcon = true,
  number = false,
  type = "basic inline",
  state = "default",
  ...rest
}) => {
  return (
    <>
      {/* name=".dropdown__trigger" id="334:44170" type="COMPONENT_SET" */}
      {/* id="334:44171" */}
      {`${type}` === `basic inline` && `${state}` === `default` && (
        <>
          {/* name="type=basic inline, state=default" id="334:44171" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "var(--size-margin-marginxs, 8px)",
              borderRadius: "var(--border-radius-base, 8px)",
            }}
          >
            {/* name="icon" id="334:44186" type="INSTANCE" */}
            <Icon.QodeChevronDown
              style={{
                display: "flex",
                width: "16px",
                height: "16px",
                padding: "5.598px 2.398px 4.001px 2.398px",
                justifyContent: "center",
                alignItems: "center",
              }}
              {...{}}
            />
            <span
              style={{
                color: "var(--text-text-neutral-50, #1d1d1d)",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight:
                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
              }}
            >{`Dropdown`}</span>
            {/* name="Tag_Transparent" id="334:44188" type="INSTANCE" */}
            <QodeCustom1377437
              style={{
                display: "flex",
                height: "24px",
                padding:
                  "var(--size-size-size5xs-1px, 1px) var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-margin-marginxxs, 4px)",
                borderRadius: "var(--style-radius-borderradiussm, 6px)",
                background:
                  "var(--color-neutral-fill-colorfillsecondary, rgba(0, 0, 0, 0.06))",
              }}
              {...{ title: "1", type: "default", border: true }}
            />
            {/* name="icon" id="334:44189" type="INSTANCE" */}
            <Icon.QodeChevronDown
              style={{ width: "16px", height: "16px" }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="334:44172" */}
      {`${type}` === `basic inline` && `${state}` === `hover` && (
        <>
          {/* name="type=basic inline, state=hover" id="334:44172" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "var(--size-margin-marginxs, 8px)",
              borderRadius: "var(--border-radius-base, 8px)",
            }}
          >
            {/* name="icon" id="334:44190" type="INSTANCE" */}
            <Icon.QodeChevronDown
              style={{
                display: "flex",
                width: "16px",
                height: "16px",
                padding: "5.598px 2.398px 4.001px 2.398px",
                justifyContent: "center",
                alignItems: "center",
              }}
              {...{}}
            />
            <span
              style={{
                color: "var(--text-text-neutral-30, #656565)",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight:
                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
              }}
            >{`Dropdown`}</span>
            {/* name="Tag_Transparent" id="334:44192" type="INSTANCE" */}
            <QodeCustom1377437
              style={{
                display: "flex",
                height: "24px",
                padding:
                  "var(--size-size-size5xs-1px, 1px) var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-margin-marginxxs, 4px)",
                borderRadius: "var(--style-radius-borderradiussm, 6px)",
                background:
                  "var(--color-neutral-fill-colorfillsecondary, rgba(0, 0, 0, 0.06))",
              }}
              {...{ title: "1", type: "default", border: true }}
            />
            {/* name="icon" id="334:44193" type="INSTANCE" */}
            <Icon.QodeChevronDown
              style={{ width: "16px", height: "16px" }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="334:44173" */}
      {`${type}` === `basic inline` && `${state}` === `focused` && (
        <>
          {/* name="type=basic inline, state=focused" id="334:44173" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "var(--size-margin-marginxs, 8px)",
              borderRadius: "var(--border-radius-base, 8px)",
            }}
          >
            {/* name="icon" id="334:44194" type="INSTANCE" */}
            <Icon.QodeChevronDown
              style={{
                display: "flex",
                width: "16px",
                height: "16px",
                padding: "5.598px 2.398px 4.001px 2.398px",
                justifyContent: "center",
                alignItems: "center",
              }}
              {...{}}
            />
            <span
              style={{
                color: "var(--text-text-neutral-50, #1d1d1d)",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight:
                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
              }}
            >{`Dropdown`}</span>
            {/* name="Tag_Transparent" id="334:44196" type="INSTANCE" */}
            <QodeCustom1377437
              style={{
                display: "flex",
                height: "24px",
                padding:
                  "var(--size-size-size5xs-1px, 1px) var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-margin-marginxxs, 4px)",
                borderRadius: "var(--style-radius-borderradiussm, 6px)",
                background:
                  "var(--color-neutral-fill-colorfillsecondary, rgba(0, 0, 0, 0.06))",
              }}
              {...{ title: "1", type: "default", border: true }}
            />
            {/* name="icon" id="334:44197" type="INSTANCE" */}
            <Icon.QodeChevronDown
              style={{ width: "16px", height: "16px" }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="334:44174" */}
      {`${type}` === `basic inline` && `${state}` === `active` && (
        <>
          {/* name="type=basic inline, state=active" id="334:44174" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "var(--size-margin-marginxs, 8px)",
              borderRadius: "var(--border-radius-base, 8px)",
            }}
          >
            {/* name="icon" id="334:44198" type="INSTANCE" */}
            <Icon.QodeChevronDown
              style={{
                display: "flex",
                width: "16px",
                height: "16px",
                padding: "5.598px 2.398px 4.001px 2.398px",
                justifyContent: "center",
                alignItems: "center",
              }}
              {...{}}
            />
            <span
              style={{
                color: "var(--text-text-primary-20, #1597f4)",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight:
                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
              }}
            >{`Dropdown`}</span>
            {/* name="Tag_Transparent" id="334:44200" type="INSTANCE" */}
            <QodeCustom1377437
              style={{
                display: "flex",
                height: "24px",
                padding:
                  "var(--size-size-size5xs-1px, 1px) var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-margin-marginxxs, 4px)",
                borderRadius: "var(--style-radius-borderradiussm, 6px)",
                background:
                  "var(--color-neutral-fill-colorfillsecondary, rgba(0, 0, 0, 0.06))",
              }}
              {...{ title: "1", type: "default", border: true }}
            />
            {/* name="icon" id="334:44201" type="INSTANCE" */}
            <Icon.QodeChevronDown
              style={{ width: "16px", height: "16px" }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="334:44175" */}
      {`${type}` === `basic inline` && `${state}` === `disabled` && (
        <>
          {/* name="type=basic inline, state=disabled" id="334:44175" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "var(--size-margin-marginxs, 8px)",
              borderRadius: "var(--border-radius-base, 8px)",
            }}
          >
            {/* name="icon" id="334:44202" type="INSTANCE" */}
            <Icon.QodeChevronDown
              style={{
                display: "flex",
                width: "16px",
                height: "16px",
                padding: "5.598px 2.398px 4.001px 2.398px",
                justifyContent: "center",
                alignItems: "center",
              }}
              {...{}}
            />
            <span
              style={{
                color: "var(--text-text-disabled, #bfbfbf)",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight:
                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
              }}
            >{`Dropdown`}</span>
            {/* name="Tag_Transparent" id="334:44204" type="INSTANCE" */}
            <QodeCustom1377437
              style={{
                display: "flex",
                height: "24px",
                padding:
                  "var(--size-size-size5xs-1px, 1px) var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-margin-marginxxs, 4px)",
                borderRadius: "var(--style-radius-borderradiussm, 6px)",
                background:
                  "var(--color-neutral-fill-colorfillsecondary, rgba(0, 0, 0, 0.06))",
              }}
              {...{ title: "1", type: "default", border: true }}
            />
            {/* name="icon" id="334:44205" type="INSTANCE" */}
            <Icon.QodeChevronDown
              style={{ width: "16px", height: "16px" }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="334:44176" */}
      {`${type}` === `button basic` && `${state}` === `default` && (
        <>
          {/* name="type=button basic, state=default" id="334:44176" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              height: "var(--size-height-controlheight, 32px)",
              padding: "0px var(--size-padding-padding, 16px)",
              justifyContent: "center",
              alignItems: "center",
              gap: "var(--size-margin-marginxs, 8px)",
              flexShrink: "0",
              borderRadius: "var(--border-radius-base, 8px)",
              border:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
              background: "var(--neutral-white, #fff)",
            }}
          >
            {/* name="icon" id="334:44206" type="INSTANCE" */}
            <Icon.QodeChevronDown
              style={{
                display: "flex",
                width: "16px",
                height: "16px",
                padding: "5.598px 2.398px 4.001px 2.398px",
                justifyContent: "center",
                alignItems: "center",
              }}
              {...{}}
            />
            <span
              style={{
                color: "var(--text-text-neutral-50, #1d1d1d)",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight:
                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
              }}
            >{`Dropdown`}</span>
            {/* name="Tag_Transparent" id="334:44208" type="INSTANCE" */}
            <QodeCustom1377437
              style={{
                display: "flex",
                height: "24px",
                padding:
                  "var(--size-size-size5xs-1px, 1px) var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-margin-marginxxs, 4px)",
                borderRadius: "var(--style-radius-borderradiussm, 6px)",
                background:
                  "var(--color-neutral-fill-colorfillsecondary, rgba(0, 0, 0, 0.06))",
              }}
              {...{ title: "1", type: "default", border: true }}
            />
            {/* name="icon" id="334:44209" type="INSTANCE" */}
            <Icon.QodeChevronDown
              style={{ width: "16px", height: "16px" }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="334:44177" */}
      {`${type}` === `button basic` && `${state}` === `hover` && (
        <>
          {/* name="type=button basic, state=hover" id="334:44177" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              height: "var(--size-height-controlheight, 32px)",
              padding: "0px var(--size-padding-padding, 16px)",
              justifyContent: "center",
              alignItems: "center",
              gap: "var(--size-margin-marginxs, 8px)",
              flexShrink: "0",
              borderRadius: "var(--border-radius-base, 8px)",
              border:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-50, #6f6f6f)",
              background: "var(--neutral-white, #fff)",
            }}
          >
            {/* name="icon" id="334:44210" type="INSTANCE" */}
            <Icon.QodeChevronDown
              style={{
                display: "flex",
                width: "16px",
                height: "16px",
                padding: "5.598px 2.398px 4.001px 2.398px",
                justifyContent: "center",
                alignItems: "center",
              }}
              {...{}}
            />
            <span
              style={{
                color: "var(--text-text-neutral-50, #1d1d1d)",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight:
                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
              }}
            >{`Dropdown`}</span>
            {/* name="Tag_Transparent" id="334:44212" type="INSTANCE" */}
            <QodeCustom1377437
              style={{
                display: "flex",
                height: "24px",
                padding:
                  "var(--size-size-size5xs-1px, 1px) var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-margin-marginxxs, 4px)",
                borderRadius: "var(--style-radius-borderradiussm, 6px)",
                background:
                  "var(--color-neutral-fill-colorfillsecondary, rgba(0, 0, 0, 0.06))",
              }}
              {...{ title: "1", type: "default", border: true }}
            />
            {/* name="icon" id="334:44213" type="INSTANCE" */}
            <Icon.QodeChevronDown
              style={{ width: "16px", height: "16px" }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="334:44178" */}
      {`${type}` === `button basic` && `${state}` === `focused` && (
        <>
          {/* name="type=button basic, state=focused" id="334:44178" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              height: "var(--size-height-controlheight, 32px)",
              padding: "0px var(--size-padding-padding, 16px)",
              justifyContent: "center",
              alignItems: "center",
              gap: "var(--size-margin-marginxs, 8px)",
              flexShrink: "0",
              borderRadius: "var(--border-radius-base, 8px)",
              border:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-50, #6f6f6f)",
              background: "var(--neutral-white, #fff)",
            }}
          >
            <span
              style={{
                color: "var(--text-text-neutral-50, #1d1d1d)",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight:
                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
              }}
            >{`Dropdown`}</span>
            {/* name="icon" id="334:44215" type="INSTANCE" */}
            <Icon.QodeChevronDown
              style={{
                display: "flex",
                width: "16px",
                height: "16px",
                padding: "5.598px 2.398px 4.001px 2.398px",
                justifyContent: "center",
                alignItems: "center",
              }}
              {...{}}
            />
            {/* name="icon" id="334:44216" type="INSTANCE" */}
            <Icon.QodeChevronDown
              style={{ width: "16px", height: "16px" }}
              {...{}}
            />
            {/* name="Tag_Transparent" id="334:44217" type="INSTANCE" */}
            <QodeCustom1377437
              style={{
                display: "flex",
                height: "24px",
                padding:
                  "var(--size-size-size5xs-1px, 1px) var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-margin-marginxxs, 4px)",
                borderRadius: "var(--style-radius-borderradiussm, 6px)",
                background:
                  "var(--color-neutral-fill-colorfillsecondary, rgba(0, 0, 0, 0.06))",
              }}
              {...{ title: "1", type: "default", border: true }}
            />
            {/* name="Focus Ring" id="334:44218" type="RECTANGLE" */}
            <Flex
              style={{
                width: "123px",
                height: "32px",
                position: "absolute",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "2px solid var(--border-border-focused-primary, #82c8fa)",
              }}
            >
              {/* name="Focus Ring" id=334:44218 type=RECTANGLE */}
              <></>
            </Flex>
          </div>
        </>
      )}
      {/* id="334:44179" */}
      {`${type}` === `button basic` && `${state}` === `active` && (
        <>
          {/* name="type=button basic, state=active" id="334:44179" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              height: "var(--size-height-controlheight, 32px)",
              padding: "0px var(--size-padding-padding, 16px)",
              justifyContent: "center",
              alignItems: "center",
              gap: "var(--size-margin-marginxs, 8px)",
              flexShrink: "0",
              borderRadius: "var(--border-radius-base, 8px)",
              background: "var(--primary-primary-50, #1597f4)",
            }}
          >
            {/* name="icon" id="334:44219" type="INSTANCE" */}
            <Icon.QodeChevronDown
              style={{
                display: "flex",
                width: "16px",
                height: "16px",
                padding: "5.598px 2.398px 4.001px 2.398px",
                justifyContent: "center",
                alignItems: "center",
              }}
              {...{}}
            />
            <span
              style={{
                color: "var(--neutral-white, #fff)",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight:
                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
              }}
            >{`Dropdown`}</span>
            {/* name="Tag_Transparent" id="334:44221" type="INSTANCE" */}
            <QodeCustom1377437
              style={{
                display: "flex",
                height: "24px",
                padding:
                  "var(--size-size-size5xs-1px, 1px) var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-margin-marginxxs, 4px)",
                borderRadius: "var(--style-radius-borderradiussm, 6px)",
                background:
                  "var(--color-neutral-fill-colorfillsecondary, rgba(0, 0, 0, 0.06))",
              }}
              {...{ title: "1", type: "default", border: true }}
            />
            {/* name="icon" id="334:44222" type="INSTANCE" */}
            <Icon.QodeChevronDown
              style={{ width: "16px", height: "16px" }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="334:44180" */}
      {`${type}` === `button basic` && `${state}` === `disabled` && (
        <>
          {/* name="type=button basic, state=disabled" id="334:44180" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              height: "var(--size-height-controlheight, 32px)",
              padding: "0px var(--size-padding-padding, 16px)",
              justifyContent: "center",
              alignItems: "center",
              gap: "var(--size-margin-marginxs, 8px)",
              flexShrink: "0",
              borderRadius: "var(--border-radius-base, 8px)",
              border:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
              opacity: "0.4",
              background: "rgba(0, 0, 0, 0.04)",
            }}
          >
            {/* name="icon" id="334:44223" type="INSTANCE" */}
            <Icon.QodeChevronDown
              style={{
                display: "flex",
                width: "16px",
                height: "16px",
                padding: "5.598px 2.398px 4.001px 2.398px",
                justifyContent: "center",
                alignItems: "center",
              }}
              {...{}}
            />
            <span
              style={{
                color: "var(--text-text-neutral-50, #1d1d1d)",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight:
                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
              }}
            >{`Dropdown`}</span>
            {/* name="Tag_Transparent" id="334:44225" type="INSTANCE" */}
            <QodeCustom1377437
              style={{
                display: "flex",
                height: "24px",
                padding:
                  "var(--size-size-size5xs-1px, 1px) var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-margin-marginxxs, 4px)",
                borderRadius: "var(--style-radius-borderradiussm, 6px)",
                background:
                  "var(--color-neutral-fill-colorfillsecondary, rgba(0, 0, 0, 0.06))",
              }}
              {...{ title: "1", type: "default", border: true }}
            />
            {/* name="icon" id="334:44226" type="INSTANCE" */}
            <Icon.QodeChevronDown
              style={{ width: "16px", height: "16px" }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="334:44181" */}
      {`${type}` === `button twofold` && `${state}` === `default` && (
        <>
          {/* name="type=button twofold, state=default" id="334:44181" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              height: "var(--size-height-controlheight, 32px)",
              justifyContent: "center",
              alignItems: "center",
              flexShrink: "0",
              borderRadius: "var(--border-radius-base, 8px)",
              border:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
              background: "var(--neutral-white, #fff)",
            }}
          >
            {/* name="Text Wrapper" id="334:44227" type="FRAME" */}
            <div
              style={{
                display: "flex",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-padding, 16px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-margin-marginxs, 8px)",
              }}
            >
              {/* name="icon" id="334:44228" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "5.598px 2.398px 4.001px 2.398px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Dropdown`}</span>
              {/* name="Tag_Transparent" id="334:44230" type="INSTANCE" */}
              <QodeCustom1377437
                style={{
                  display: "flex",
                  height: "24px",
                  padding:
                    "var(--size-size-size5xs-1px, 1px) var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxxs, 4px)",
                  borderRadius: "var(--style-radius-borderradiussm, 6px)",
                  background:
                    "var(--color-neutral-fill-colorfillsecondary, rgba(0, 0, 0, 0.06))",
                }}
                {...{ title: "1", type: "default", border: true }}
              />
            </div>
            {/* name="Icon Wrapper" id="334:44231" type="FRAME" */}
            <div
              style={{
                display: "flex",
                width: "32px",
                height: "var(--size-height-controlheight, 32px)",
                justifyContent: "center",
                alignItems: "center",
                borderRadius:
                  "0px var(--style-radius-borderround, 999px) var(--style-radius-borderround, 999px) 0px",
                borderLeft:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
              }}
            >
              {/* name="icon" id="334:44232" type="INSTANCE" */}
              <Icon.QodeEllipsisVertical
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </div>
        </>
      )}
      {/* id="334:44182" */}
      {`${type}` === `button twofold` && `${state}` === `hover` && (
        <>
          {/* name="type=button twofold, state=hover" id="334:44182" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              height: "var(--size-height-controlheight, 32px)",
              justifyContent: "center",
              alignItems: "center",
              flexShrink: "0",
              borderRadius: "var(--border-radius-base, 8px)",
              border:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-50, #6f6f6f)",
              background: "var(--neutral-white, #fff)",
            }}
          >
            {/* name="Text Wrapper" id="334:44233" type="FRAME" */}
            <div
              style={{
                display: "flex",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-padding, 16px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-margin-marginxs, 8px)",
              }}
            >
              {/* name="icon" id="334:44234" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "5.598px 2.398px 4.001px 2.398px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Dropdown`}</span>
              {/* name="Tag_Transparent" id="334:44236" type="INSTANCE" */}
              <QodeCustom1377437
                style={{
                  display: "flex",
                  height: "24px",
                  padding:
                    "var(--size-size-size5xs-1px, 1px) var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxxs, 4px)",
                  borderRadius: "var(--style-radius-borderradiussm, 6px)",
                  background:
                    "var(--color-neutral-fill-colorfillsecondary, rgba(0, 0, 0, 0.06))",
                }}
                {...{ title: "1", type: "default", border: true }}
              />
            </div>
            {/* name="Icon Wrapper" id="334:44237" type="FRAME" */}
            <div
              style={{
                display: "flex",
                width: "32px",
                height: "var(--size-height-controlheight, 32px)",
                justifyContent: "center",
                alignItems: "center",
                borderRadius:
                  "0px var(--style-radius-borderround, 999px) var(--style-radius-borderround, 999px) 0px",
                borderLeft:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-50, #6f6f6f)",
              }}
            >
              {/* name="icon" id="334:44238" type="INSTANCE" */}
              <Icon.QodeEllipsisVertical
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </div>
        </>
      )}
      {/* id="334:44183" */}
      {`${type}` === `button twofold` && `${state}` === `focused` && (
        <>
          {/* name="type=button twofold, state=focused" id="334:44183" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              height: "var(--size-height-controlheight, 32px)",
              justifyContent: "center",
              alignItems: "center",
              flexShrink: "0",
              borderRadius: "var(--border-radius-base, 8px)",
              border:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-50, #6f6f6f)",
              background: "var(--neutral-white, #fff)",
            }}
          >
            {/* name="Text Wrapper" id="334:44239" type="FRAME" */}
            <div
              style={{
                display: "flex",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-padding, 16px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-margin-marginxs, 8px)",
              }}
            >
              {/* name="icon" id="334:44240" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "5.598px 2.398px 4.001px 2.398px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Dropdown`}</span>
              {/* name="Tag_Transparent" id="334:44242" type="INSTANCE" */}
              <QodeCustom1377437
                style={{
                  display: "flex",
                  height: "24px",
                  padding:
                    "var(--size-size-size5xs-1px, 1px) var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxxs, 4px)",
                  borderRadius: "var(--style-radius-borderradiussm, 6px)",
                  background:
                    "var(--color-neutral-fill-colorfillsecondary, rgba(0, 0, 0, 0.06))",
                }}
                {...{ title: "1", type: "default", border: true }}
              />
            </div>
            {/* name="Icon Wrapper" id="334:44243" type="FRAME" */}
            <div
              style={{
                display: "flex",
                width: "32px",
                height: "var(--size-height-controlheight, 32px)",
                justifyContent: "center",
                alignItems: "center",
                borderRadius:
                  "0px var(--style-radius-borderround, 999px) var(--style-radius-borderround, 999px) 0px",
                borderLeft:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-50, #6f6f6f)",
              }}
            >
              {/* name="icon" id="334:44244" type="INSTANCE" */}
              <Icon.QodeEllipsisVertical
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
            {/* name="Focus Ring" id="334:44245" type="RECTANGLE" */}
            <Flex
              style={{
                width: "131px",
                height: "32px",
                position: "absolute",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "2px solid var(--border-border-focused-primary, #82c8fa)",
              }}
            >
              {/* name="Focus Ring" id=334:44245 type=RECTANGLE */}
              <></>
            </Flex>
          </div>
        </>
      )}
      {/* id="334:44184" */}
      {`${type}` === `button twofold` && `${state}` === `active` && (
        <>
          {/* name="type=button twofold, state=active" id="334:44184" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              height: "var(--size-height-controlheight, 32px)",
              justifyContent: "center",
              alignItems: "center",
              flexShrink: "0",
              borderRadius: "var(--border-radius-base, 8px)",
              background: "var(--primary-primary-50, #1597f4)",
            }}
          >
            {/* name="Text Wrapper" id="334:44246" type="FRAME" */}
            <div
              style={{
                display: "flex",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-padding, 16px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-margin-marginxs, 8px)",
              }}
            >
              {/* name="icon" id="334:44247" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "5.598px 2.398px 4.001px 2.398px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--neutral-white, #fff)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Dropdown`}</span>
              {/* name="Tag_Transparent" id="334:44249" type="INSTANCE" */}
              <QodeCustom1377437
                style={{
                  display: "flex",
                  height: "24px",
                  padding:
                    "var(--size-size-size5xs-1px, 1px) var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxxs, 4px)",
                  borderRadius: "var(--style-radius-borderradiussm, 6px)",
                  background:
                    "var(--color-neutral-fill-colorfillsecondary, rgba(0, 0, 0, 0.06))",
                }}
                {...{ title: "1", type: "default", border: true }}
              />
            </div>
            {/* name="Icon Wrapper" id="334:44250" type="FRAME" */}
            <div
              style={{
                display: "flex",
                width: "32px",
                height: "var(--size-height-controlheight, 32px)",
                justifyContent: "center",
                alignItems: "center",
                borderRadius:
                  "0px var(--style-radius-borderround, 999px) var(--style-radius-borderround, 999px) 0px",
                borderLeft:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
              }}
            >
              {/* name="icon" id="334:44251" type="INSTANCE" */}
              <Icon.QodeEllipsisVertical
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </div>
        </>
      )}
      {/* id="334:44185" */}
      {`${type}` === `button twofold` && `${state}` === `disabled` && (
        <>
          {/* name="type=button twofold, state=disabled" id="334:44185" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              height: "var(--size-height-controlheight, 32px)",
              justifyContent: "center",
              alignItems: "center",
              gap: "var(--size-margin-marginxs, 8px)",
              flexShrink: "0",
              borderRadius: "var(--border-radius-base, 8px)",
              border:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
              opacity: "0.4",
              background: "rgba(0, 0, 0, 0.04)",
            }}
          >
            {/* name="Text Wrapper" id="334:44252" type="FRAME" */}
            <div
              style={{
                display: "flex",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-padding, 16px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-margin-marginxs, 8px)",
              }}
            >
              {/* name="icon" id="334:44253" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "5.598px 2.398px 4.001px 2.398px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Dropdown`}</span>
              {/* name="Tag_Transparent" id="334:44255" type="INSTANCE" */}
              <QodeCustom1377437
                style={{
                  display: "flex",
                  height: "24px",
                  padding:
                    "var(--size-size-size5xs-1px, 1px) var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxxs, 4px)",
                  borderRadius: "var(--style-radius-borderradiussm, 6px)",
                  background:
                    "var(--color-neutral-fill-colorfillsecondary, rgba(0, 0, 0, 0.06))",
                }}
                {...{ title: "1", type: "default", border: true }}
              />
            </div>
            {/* name="Icon Wrapper" id="334:44256" type="FRAME" */}
            <div
              style={{
                display: "flex",
                width: "32px",
                height: "var(--size-height-controlheight, 32px)",
                justifyContent: "center",
                alignItems: "center",
                borderRadius:
                  "0px var(--style-radius-borderround, 999px) var(--style-radius-borderround, 999px) 0px",
                borderLeft:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
              }}
            >
              {/* name="icon" id="334:44257" type="INSTANCE" */}
              <Icon.QodeEllipsisVertical
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </div>
        </>
      )}
    </>
  )
}
