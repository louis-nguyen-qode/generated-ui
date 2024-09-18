// id="189:5406"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg1895401 from "@designSystem/icon/svg/QodeSvg1895401"
import QodeSvg1895417 from "@designSystem/icon/svg/QodeSvg1895417"
import QodeSvg1895424 from "@designSystem/icon/svg/QodeSvg1895424"
import QodeSvgI1895440146180 from "@designSystem/icon/svg/QodeSvgI1895440146180"
import QodeSvg1895442 from "@designSystem/icon/svg/QodeSvg1895442"
import QodeSvgI1895444146191 from "@designSystem/icon/svg/QodeSvgI1895444146191"
import QodeSvg1895446 from "@designSystem/icon/svg/QodeSvg1895446"
import QodeSvgI1895448146201 from "@designSystem/icon/svg/QodeSvgI1895448146201"
import QodeSvg1895450 from "@designSystem/icon/svg/QodeSvg1895450"

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
              display: "flex",
              width: "200px",
              height: "var(--size-height-controlheight, 32px)",
              padding: "0px var(--size-padding-paddingsm, 12px)",
              alignItems: "center",
              gap: "var(--size-padding-paddingxs, 8px)",
              flexShrink: "0",
              borderRadius: "var(--style-radius-borderradiussm, 6px)",
            }}
          >
            {/* name="Checkbox" id="189:5384" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                width: "95px",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
              }}
            >
              {/* name="Check" id="I189:5384;146:827" type="FRAME" */}
              <div
                style={{
                  width: "24px",
                  height: "24px",
                  flexShrink: "0",
                  borderRadius: "4px",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                  background: "var(--background-bg-white, #fff)",
                }}
              >
                {/* name="Check" id=I189:5384;146:827 type=FRAME */}
                <></>
              </div>
            </Flex>
            <span
              style={{
                flex: "1 0 0",
                color:
                  "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight:
                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
              }}
            >{`Cascader Item`}</span>
            {/* name="Icon" id="189:5401" type="INSTANCE" */}
            <QodeSvg1895401
              style={{
                width: "var(--font-size-base, 14px)",
                height: "var(--font-size-base, 14px)",
                flexShrink: "0",
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
            }}
          >
            {/* name="Checkbox" id="189:5415" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                width: "95px",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
              }}
            >
              {/* name="Check" id="I189:5415;146:827" type="FRAME" */}
              <div
                style={{
                  width: "24px",
                  height: "24px",
                  flexShrink: "0",
                  borderRadius: "4px",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                  background: "var(--background-bg-white, #fff)",
                }}
              >
                {/* name="Check" id=I189:5415;146:827 type=FRAME */}
                <></>
              </div>
            </Flex>
            <span
              style={{
                flex: "1 0 0",
                color: "var(--color-neutral-text-colortext, #000)",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight:
                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
              }}
            >{`Cascader Item`}</span>
            {/* name="Icon" id="189:5417" type="INSTANCE" */}
            <QodeSvg1895417
              style={{
                width: "var(--font-size-base, 14px)",
                height: "var(--font-size-base, 14px)",
                flexShrink: "0",
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
              display: "flex",
              width: "200px",
              height: "var(--size-height-controlheight, 32px)",
              padding: "0px var(--size-padding-paddingsm, 12px)",
              alignItems: "center",
              gap: "var(--size-padding-paddingxs, 8px)",
              flexShrink: "0",
              borderRadius: "var(--style-radius-borderradiussm, 6px)",
            }}
          >
            {/* name="Checkbox" id="189:5422" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                width: "95px",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
              }}
            >
              {/* name="Check" id="I189:5422;146:840" type="FRAME" */}
              <div
                style={{
                  width: "24px",
                  height: "24px",
                  flexShrink: "0",
                  borderRadius: "4px",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                  background: "var(--background-bg-disabled, #e3e3e3)",
                }}
              >
                {/* name="Check" id=I189:5422;146:840 type=FRAME */}
                <></>
              </div>
            </Flex>
            <span
              style={{
                flex: "1 0 0",
                color:
                  "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight:
                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
              }}
            >{`Cascader Item`}</span>
            {/* name="Icon" id="189:5424" type="INSTANCE" */}
            <QodeSvg1895424
              style={{
                width: "var(--font-size-base, 14px)",
                height: "var(--font-size-base, 14px)",
                flexShrink: "0",
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
            }}
          >
            {/* name="Checkbox" id="189:5440" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                width: "95px",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
              }}
            >
              {/* name="Check" id="I189:5440;146:180" type="FRAME" */}
              <QodeSvgI1895440146180
                style={{
                  width: "24px",
                  height: "24px",
                  flexShrink: "0",
                  fill: "var(--background-bg-primary, #1597f4)",
                  strokeWidth: "1px",
                  stroke: "var(--border-border-primary-20, #158de2)",
                }}
                {...{}}
              />
            </Flex>
            <span
              style={{
                flex: "1 0 0",
                color: "var(--color-primary-colorprimarytext, #1597f4)",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight:
                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
              }}
            >{`Cascader Item`}</span>
            {/* name="Icon" id="189:5442" type="INSTANCE" */}
            <QodeSvg1895442
              style={{
                width: "var(--font-size-base, 14px)",
                height: "var(--font-size-base, 14px)",
                flexShrink: "0",
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
            }}
          >
            {/* name="Checkbox" id="189:5444" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                width: "95px",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
              }}
            >
              {/* name="Check" id="I189:5444;146:191" type="FRAME" */}
              <QodeSvgI1895444146191
                style={{
                  width: "24px",
                  height: "24px",
                  flexShrink: "0",
                  fill: "var(--border-border-focused-primary, #82c8fa)",
                }}
                {...{}}
              />
            </Flex>
            <span
              style={{
                flex: "1 0 0",
                color: "var(--color-primary-colorprimarytexthover, #64b9f5)",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight:
                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
              }}
            >{`Cascader Item`}</span>
            {/* name="Icon" id="189:5446" type="INSTANCE" */}
            <QodeSvg1895446
              style={{
                width: "var(--font-size-base, 14px)",
                height: "var(--font-size-base, 14px)",
                flexShrink: "0",
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
              display: "flex",
              width: "200px",
              height: "var(--size-height-controlheight, 32px)",
              padding: "0px var(--size-padding-paddingsm, 12px)",
              alignItems: "center",
              gap: "var(--size-padding-paddingxs, 8px)",
              flexShrink: "0",
              borderRadius: "var(--style-radius-borderradiussm, 6px)",
            }}
          >
            {/* name="Checkbox" id="189:5448" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                width: "95px",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
              }}
            >
              {/* name="Check" id="I189:5448;146:201" type="FRAME" */}
              <QodeSvgI1895448146201
                style={{
                  width: "24px",
                  height: "24px",
                  flexShrink: "0",
                  fill: "var(--background-bg-disabled, #e3e3e3)",
                  strokeWidth: "1px",
                  stroke: "var(--border-border-neutral-30, #d5d5d5)",
                }}
                {...{}}
              />
            </Flex>
            <span
              style={{
                flex: "1 0 0",
                color:
                  "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight:
                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
              }}
            >{`Cascader Item`}</span>
            {/* name="Icon" id="189:5450" type="INSTANCE" */}
            <QodeSvg1895450
              style={{
                width: "var(--font-size-base, 14px)",
                height: "var(--font-size-base, 14px)",
                flexShrink: "0",
              }}
              {...{}}
            />
          </div>
        </>
      )}
    </>
  )
}
