// id="202:32979"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom20232919 } from "@designSystem/custom/QodeCustom20232919"
import { QodeCustom20232927 } from "@designSystem/custom/QodeCustom20232927"
import { QodeCustom20232923 } from "@designSystem/custom/QodeCustom20232923"
import { QodeButton } from "@designSystem/ant/QodeButton"

export interface QodeCustom20232979Props {}

export const QodeCustom20232979: React.FC<
  QodeCustom20232979Props & { style?: CSSProperties }
> = ({ ...rest }) => {
  return (
    <>
      {/* name="type=day, range=false" id="202:32979" type="COMPONENT" */}
      <div
        style={{
          display: "flex",
          width: "280px",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "var(--style-radius-borderradius, 8px)",
          background:
            "var(--color-neutral-background-colorbgelevated, #f8f6f6)",
          boxShadow:
            "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 3px 6px -4px rgba(0, 0, 0, 0.12)",
        }}
      >
        {/* name="Header" id="202:32983" type="FRAME" */}
        <div
          style={{
            display: "flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding: "0px var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "stretch",
            borderBottom:
              "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorsplit, rgba(0, 0, 0, 0.06))",
          }}
        >
          {/* name="Navigation Left" id="202:32988" type="FRAME" */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "var(--size-padding-paddingxxs, 4px)",
            }}
          >
            {/* name="chevrons-left" id="202:32986" type="INSTANCE" */}
            <Icon.QodeChevronsLeft
              style={{ width: "16px", height: "16px" }}
              {...{}}
            />
            {/* name="chevron-left" id="202:32984" type="INSTANCE" */}
            <Icon.QodeChevronLeft
              style={{ width: "16px", height: "16px" }}
              {...{}}
            />
          </div>
          <span
            style={{
              height: "22px",
              flex: "1 0 0",
              color: "var(--color-neutral-text-colortext, #000)",
              textAlign: "center",
              fontFamily: 'var(--family-family, "sf pro display")',
              fontSize: "var(--size-base, 14px)",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight:
                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
            }}
          >{`Dec 2020`}</span>
          {/* name="Navigation Right" id="202:32989" type="FRAME" */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "var(--size-padding-paddingxxs, 4px)",
            }}
          >
            {/* name="chevron-right" id="202:32991" type="INSTANCE" */}
            <Icon.QodeChevronRight
              style={{ width: "16px", height: "16px" }}
              {...{}}
            />
            {/* name="chevrons-right" id="202:32990" type="INSTANCE" */}
            <Icon.QodeChevronsRight
              style={{ width: "16px", height: "16px" }}
              {...{}}
            />
          </div>
        </div>
        {/* name="Content" id="202:32996" type="FRAME" */}
        <div
          style={{
            display: "flex",
            padding:
              "var(--size-padding-paddingxs, 8px) var(--size-padding-paddingsm, 12px)",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "stretch",
            borderBottom:
              "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorsplit, rgba(0, 0, 0, 0.06))",
          }}
        >
          {/* name="Row" id="202:33012" type="FRAME" */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "stretch",
            }}
          >
            {/* name="Cell Wrapper" id="202:33023" type="FRAME" */}
            <div
              style={{
                display: "flex",
                padding:
                  "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                justifyContent: "center",
                alignItems: "center",
                flex: "1 0 0",
              }}
            >
              {/* name=".datePicker__menuItem" id="202:33008" type="INSTANCE" */}
              <QodeCustom20232919
                style={{
                  display: "flex",
                  width: "24px",
                  height: "var(--size-height-controlheightsm, 24px)",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "var(--style-radius-borderradiussm, 6px)",
                }}
                {...{ title: "Su", state: "default" }}
              />
            </div>
            {/* name="Cell Wrapper" id="202:33024" type="FRAME" */}
            <div
              style={{
                display: "flex",
                padding:
                  "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                justifyContent: "center",
                alignItems: "center",
                flex: "1 0 0",
              }}
            >
              {/* name=".datePicker__menuItem" id="202:33025" type="INSTANCE" */}
              <QodeCustom20232919
                style={{
                  display: "flex",
                  width: "24px",
                  height: "var(--size-height-controlheightsm, 24px)",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "var(--style-radius-borderradiussm, 6px)",
                }}
                {...{ title: "Mo", state: "default" }}
              />
            </div>
            {/* name="Cell Wrapper" id="202:33027" type="FRAME" */}
            <div
              style={{
                display: "flex",
                padding:
                  "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                justifyContent: "center",
                alignItems: "center",
                flex: "1 0 0",
              }}
            >
              {/* name=".datePicker__menuItem" id="202:33028" type="INSTANCE" */}
              <QodeCustom20232919
                style={{
                  display: "flex",
                  width: "24px",
                  height: "var(--size-height-controlheightsm, 24px)",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "var(--style-radius-borderradiussm, 6px)",
                }}
                {...{ title: "Tu", state: "default" }}
              />
            </div>
            {/* name="Cell Wrapper" id="202:33030" type="FRAME" */}
            <div
              style={{
                display: "flex",
                padding:
                  "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                justifyContent: "center",
                alignItems: "center",
                flex: "1 0 0",
              }}
            >
              {/* name=".datePicker__menuItem" id="202:33031" type="INSTANCE" */}
              <QodeCustom20232919
                style={{
                  display: "flex",
                  width: "24px",
                  height: "var(--size-height-controlheightsm, 24px)",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "var(--style-radius-borderradiussm, 6px)",
                }}
                {...{ title: "We", state: "default" }}
              />
            </div>
            {/* name="Cell Wrapper" id="202:33033" type="FRAME" */}
            <div
              style={{
                display: "flex",
                padding:
                  "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                justifyContent: "center",
                alignItems: "center",
                flex: "1 0 0",
              }}
            >
              {/* name=".datePicker__menuItem" id="202:33034" type="INSTANCE" */}
              <QodeCustom20232919
                style={{
                  display: "flex",
                  width: "24px",
                  height: "var(--size-height-controlheightsm, 24px)",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "var(--style-radius-borderradiussm, 6px)",
                }}
                {...{ title: "Th", state: "default" }}
              />
            </div>
            {/* name="Cell Wrapper" id="202:33036" type="FRAME" */}
            <div
              style={{
                display: "flex",
                padding:
                  "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                justifyContent: "center",
                alignItems: "center",
                flex: "1 0 0",
              }}
            >
              {/* name=".datePicker__menuItem" id="202:33037" type="INSTANCE" */}
              <QodeCustom20232919
                style={{
                  display: "flex",
                  width: "24px",
                  height: "var(--size-height-controlheightsm, 24px)",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "var(--style-radius-borderradiussm, 6px)",
                }}
                {...{ title: "Fr", state: "default" }}
              />
            </div>
            {/* name="Cell Wrapper" id="202:33039" type="FRAME" */}
            <div
              style={{
                display: "flex",
                padding:
                  "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                justifyContent: "center",
                alignItems: "center",
                flex: "1 0 0",
              }}
            >
              {/* name=".datePicker__menuItem" id="202:33040" type="INSTANCE" */}
              <QodeCustom20232919
                style={{
                  display: "flex",
                  width: "24px",
                  height: "var(--size-height-controlheightsm, 24px)",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "var(--style-radius-borderradiussm, 6px)",
                }}
                {...{ title: "Sa", state: "default" }}
              />
            </div>
          </div>
          {/* name="Row" id="202:33045" type="FRAME" */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "stretch",
            }}
          >
            {/* name="Cell Wrapper" id="202:33046" type="FRAME" */}
            <div
              style={{
                display: "flex",
                padding:
                  "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                justifyContent: "center",
                alignItems: "center",
                flex: "1 0 0",
              }}
            >
              {/* name=".datePicker__menuItem" id="202:33047" type="INSTANCE" */}
              <QodeCustom20232927
                style={{
                  display: "flex",
                  width: "24px",
                  height: "var(--size-height-controlheightsm, 24px)",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "var(--style-radius-borderradiussm, 6px)",
                }}
                {...{ title: "29", state: "inactive" }}
              />
            </div>
            {/* name="Cell Wrapper" id="202:33048" type="FRAME" */}
            <div
              style={{
                display: "flex",
                padding:
                  "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                justifyContent: "center",
                alignItems: "center",
                flex: "1 0 0",
              }}
            >
              {/* name=".datePicker__menuItem" id="202:33049" type="INSTANCE" */}
              <QodeCustom20232927
                style={{
                  display: "flex",
                  width: "24px",
                  height: "var(--size-height-controlheightsm, 24px)",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "var(--style-radius-borderradiussm, 6px)",
                }}
                {...{ title: "30", state: "inactive" }}
              />
            </div>
            {/* name="Cell Wrapper" id="202:33050" type="FRAME" */}
            <div
              style={{
                display: "flex",
                padding:
                  "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                justifyContent: "center",
                alignItems: "center",
                flex: "1 0 0",
              }}
            >
              {/* name=".datePicker__menuItem" id="202:33051" type="INSTANCE" */}
              <QodeCustom20232923
                style={{
                  display: "flex",
                  width: "24px",
                  height: "var(--size-height-controlheightsm, 24px)",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "var(--style-radius-borderradiussm, 6px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--color-primary-colorprimary, #1597f4)",
                }}
                {...{ title: "1", state: "current" }}
              />
            </div>
            {/* name="Cell Wrapper" id="202:33052" type="FRAME" */}
            <div
              style={{
                display: "flex",
                padding:
                  "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                justifyContent: "center",
                alignItems: "center",
                flex: "1 0 0",
              }}
            >
              {/* name=".datePicker__menuItem" id="202:33053" type="INSTANCE" */}
              <QodeCustom20232919
                style={{
                  display: "flex",
                  width: "24px",
                  height: "var(--size-height-controlheightsm, 24px)",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "var(--style-radius-borderradiussm, 6px)",
                }}
                {...{ title: "2", state: "default" }}
              />
            </div>
            {/* name="Cell Wrapper" id="202:33054" type="FRAME" */}
            <div
              style={{
                display: "flex",
                padding:
                  "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                justifyContent: "center",
                alignItems: "center",
                flex: "1 0 0",
              }}
            >
              {/* name=".datePicker__menuItem" id="202:33055" type="INSTANCE" */}
              <QodeCustom20232919
                style={{
                  display: "flex",
                  width: "24px",
                  height: "var(--size-height-controlheightsm, 24px)",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "var(--style-radius-borderradiussm, 6px)",
                }}
                {...{ title: "3", state: "default" }}
              />
            </div>
            {/* name="Cell Wrapper" id="202:33056" type="FRAME" */}
            <div
              style={{
                display: "flex",
                padding:
                  "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                justifyContent: "center",
                alignItems: "center",
                flex: "1 0 0",
              }}
            >
              {/* name=".datePicker__menuItem" id="202:33057" type="INSTANCE" */}
              <QodeCustom20232919
                style={{
                  display: "flex",
                  width: "24px",
                  height: "var(--size-height-controlheightsm, 24px)",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "var(--style-radius-borderradiussm, 6px)",
                }}
                {...{ title: "4", state: "default" }}
              />
            </div>
            {/* name="Cell Wrapper" id="202:33058" type="FRAME" */}
            <div
              style={{
                display: "flex",
                padding:
                  "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                justifyContent: "center",
                alignItems: "center",
                flex: "1 0 0",
              }}
            >
              {/* name=".datePicker__menuItem" id="202:33059" type="INSTANCE" */}
              <QodeCustom20232919
                style={{
                  display: "flex",
                  width: "24px",
                  height: "var(--size-height-controlheightsm, 24px)",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "var(--style-radius-borderradiussm, 6px)",
                }}
                {...{ title: "5", state: "default" }}
              />
            </div>
          </div>
          {/* name="Row" id="202:33067" type="FRAME" */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "stretch",
            }}
          >
            {/* name="Cell Wrapper" id="202:33068" type="FRAME" */}
            <div
              style={{
                display: "flex",
                padding:
                  "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                justifyContent: "center",
                alignItems: "center",
                flex: "1 0 0",
              }}
            >
              {/* name=".datePicker__menuItem" id="202:33069" type="INSTANCE" */}
              <QodeCustom20232919
                style={{
                  display: "flex",
                  width: "24px",
                  height: "var(--size-height-controlheightsm, 24px)",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "var(--style-radius-borderradiussm, 6px)",
                }}
                {...{ title: "6", state: "default" }}
              />
            </div>
            {/* name="Cell Wrapper" id="202:33070" type="FRAME" */}
            <div
              style={{
                display: "flex",
                padding:
                  "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                justifyContent: "center",
                alignItems: "center",
                flex: "1 0 0",
              }}
            >
              {/* name=".datePicker__menuItem" id="202:33071" type="INSTANCE" */}
              <QodeCustom20232919
                style={{
                  display: "flex",
                  width: "24px",
                  height: "var(--size-height-controlheightsm, 24px)",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "var(--style-radius-borderradiussm, 6px)",
                }}
                {...{ title: "7", state: "default" }}
              />
            </div>
            {/* name="Cell Wrapper" id="202:33072" type="FRAME" */}
            <div
              style={{
                display: "flex",
                padding:
                  "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                justifyContent: "center",
                alignItems: "center",
                flex: "1 0 0",
              }}
            >
              {/* name=".datePicker__menuItem" id="202:33073" type="INSTANCE" */}
              <QodeCustom20232919
                style={{
                  display: "flex",
                  width: "24px",
                  height: "var(--size-height-controlheightsm, 24px)",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "var(--style-radius-borderradiussm, 6px)",
                }}
                {...{ title: "8", state: "default" }}
              />
            </div>
            {/* name="Cell Wrapper" id="202:33074" type="FRAME" */}
            <div
              style={{
                display: "flex",
                padding:
                  "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                justifyContent: "center",
                alignItems: "center",
                flex: "1 0 0",
              }}
            >
              {/* name=".datePicker__menuItem" id="202:33075" type="INSTANCE" */}
              <QodeCustom20232919
                style={{
                  display: "flex",
                  width: "24px",
                  height: "var(--size-height-controlheightsm, 24px)",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "var(--style-radius-borderradiussm, 6px)",
                }}
                {...{ title: "9", state: "default" }}
              />
            </div>
            {/* name="Cell Wrapper" id="202:33076" type="FRAME" */}
            <div
              style={{
                display: "flex",
                padding:
                  "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                justifyContent: "center",
                alignItems: "center",
                flex: "1 0 0",
              }}
            >
              {/* name=".datePicker__menuItem" id="202:33077" type="INSTANCE" */}
              <QodeCustom20232919
                style={{
                  display: "flex",
                  width: "24px",
                  height: "var(--size-height-controlheightsm, 24px)",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "var(--style-radius-borderradiussm, 6px)",
                }}
                {...{ title: "10", state: "default" }}
              />
            </div>
            {/* name="Cell Wrapper" id="202:33078" type="FRAME" */}
            <div
              style={{
                display: "flex",
                padding:
                  "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                justifyContent: "center",
                alignItems: "center",
                flex: "1 0 0",
              }}
            >
              {/* name=".datePicker__menuItem" id="202:33079" type="INSTANCE" */}
              <QodeCustom20232919
                style={{
                  display: "flex",
                  width: "24px",
                  height: "var(--size-height-controlheightsm, 24px)",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "var(--style-radius-borderradiussm, 6px)",
                }}
                {...{ title: "11", state: "default" }}
              />
            </div>
            {/* name="Cell Wrapper" id="202:33080" type="FRAME" */}
            <div
              style={{
                display: "flex",
                padding:
                  "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                justifyContent: "center",
                alignItems: "center",
                flex: "1 0 0",
              }}
            >
              {/* name=".datePicker__menuItem" id="202:33081" type="INSTANCE" */}
              <QodeCustom20232919
                style={{
                  display: "flex",
                  width: "24px",
                  height: "var(--size-height-controlheightsm, 24px)",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "var(--style-radius-borderradiussm, 6px)",
                }}
                {...{ title: "12", state: "default" }}
              />
            </div>
          </div>
          {/* name="Row" id="202:33089" type="FRAME" */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "stretch",
            }}
          >
            {/* name="Cell Wrapper" id="202:33090" type="FRAME" */}
            <div
              style={{
                display: "flex",
                padding:
                  "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                justifyContent: "center",
                alignItems: "center",
                flex: "1 0 0",
              }}
            >
              {/* name=".datePicker__menuItem" id="202:33091" type="INSTANCE" */}
              <QodeCustom20232919
                style={{
                  display: "flex",
                  width: "24px",
                  height: "var(--size-height-controlheightsm, 24px)",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "var(--style-radius-borderradiussm, 6px)",
                }}
                {...{ title: "13", state: "default" }}
              />
            </div>
            {/* name="Cell Wrapper" id="202:33092" type="FRAME" */}
            <div
              style={{
                display: "flex",
                padding:
                  "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                justifyContent: "center",
                alignItems: "center",
                flex: "1 0 0",
              }}
            >
              {/* name=".datePicker__menuItem" id="202:33093" type="INSTANCE" */}
              <QodeCustom20232919
                style={{
                  display: "flex",
                  width: "24px",
                  height: "var(--size-height-controlheightsm, 24px)",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "var(--style-radius-borderradiussm, 6px)",
                }}
                {...{ title: "14", state: "default" }}
              />
            </div>
            {/* name="Cell Wrapper" id="202:33094" type="FRAME" */}
            <div
              style={{
                display: "flex",
                padding:
                  "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                justifyContent: "center",
                alignItems: "center",
                flex: "1 0 0",
              }}
            >
              {/* name=".datePicker__menuItem" id="202:33095" type="INSTANCE" */}
              <QodeCustom20232919
                style={{
                  display: "flex",
                  width: "24px",
                  height: "var(--size-height-controlheightsm, 24px)",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "var(--style-radius-borderradiussm, 6px)",
                }}
                {...{ title: "15", state: "default" }}
              />
            </div>
            {/* name="Cell Wrapper" id="202:33096" type="FRAME" */}
            <div
              style={{
                display: "flex",
                padding:
                  "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                justifyContent: "center",
                alignItems: "center",
                flex: "1 0 0",
              }}
            >
              {/* name=".datePicker__menuItem" id="202:33097" type="INSTANCE" */}
              <QodeCustom20232919
                style={{
                  display: "flex",
                  width: "24px",
                  height: "var(--size-height-controlheightsm, 24px)",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "var(--style-radius-borderradiussm, 6px)",
                }}
                {...{ title: "16", state: "default" }}
              />
            </div>
            {/* name="Cell Wrapper" id="202:33098" type="FRAME" */}
            <div
              style={{
                display: "flex",
                padding:
                  "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                justifyContent: "center",
                alignItems: "center",
                flex: "1 0 0",
              }}
            >
              {/* name=".datePicker__menuItem" id="202:33099" type="INSTANCE" */}
              <QodeCustom20232919
                style={{
                  display: "flex",
                  width: "24px",
                  height: "var(--size-height-controlheightsm, 24px)",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "var(--style-radius-borderradiussm, 6px)",
                }}
                {...{ title: "17", state: "default" }}
              />
            </div>
            {/* name="Cell Wrapper" id="202:33100" type="FRAME" */}
            <div
              style={{
                display: "flex",
                padding:
                  "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                justifyContent: "center",
                alignItems: "center",
                flex: "1 0 0",
              }}
            >
              {/* name=".datePicker__menuItem" id="202:33101" type="INSTANCE" */}
              <QodeCustom20232919
                style={{
                  display: "flex",
                  width: "24px",
                  height: "var(--size-height-controlheightsm, 24px)",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "var(--style-radius-borderradiussm, 6px)",
                }}
                {...{ title: "18", state: "default" }}
              />
            </div>
            {/* name="Cell Wrapper" id="202:33102" type="FRAME" */}
            <div
              style={{
                display: "flex",
                padding:
                  "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                justifyContent: "center",
                alignItems: "center",
                flex: "1 0 0",
              }}
            >
              {/* name=".datePicker__menuItem" id="202:33103" type="INSTANCE" */}
              <QodeCustom20232919
                style={{
                  display: "flex",
                  width: "24px",
                  height: "var(--size-height-controlheightsm, 24px)",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "var(--style-radius-borderradiussm, 6px)",
                }}
                {...{ title: "19", state: "default" }}
              />
            </div>
          </div>
          {/* name="Row" id="202:33111" type="FRAME" */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "stretch",
            }}
          >
            {/* name="Cell Wrapper" id="202:33112" type="FRAME" */}
            <div
              style={{
                display: "flex",
                padding:
                  "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                justifyContent: "center",
                alignItems: "center",
                flex: "1 0 0",
              }}
            >
              {/* name=".datePicker__menuItem" id="202:33113" type="INSTANCE" */}
              <QodeCustom20232919
                style={{
                  display: "flex",
                  width: "24px",
                  height: "var(--size-height-controlheightsm, 24px)",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "var(--style-radius-borderradiussm, 6px)",
                }}
                {...{ title: "20", state: "default" }}
              />
            </div>
            {/* name="Cell Wrapper" id="202:33114" type="FRAME" */}
            <div
              style={{
                display: "flex",
                padding:
                  "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                justifyContent: "center",
                alignItems: "center",
                flex: "1 0 0",
              }}
            >
              {/* name=".datePicker__menuItem" id="202:33115" type="INSTANCE" */}
              <QodeCustom20232919
                style={{
                  display: "flex",
                  width: "24px",
                  height: "var(--size-height-controlheightsm, 24px)",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "var(--style-radius-borderradiussm, 6px)",
                }}
                {...{ title: "21", state: "default" }}
              />
            </div>
            {/* name="Cell Wrapper" id="202:33116" type="FRAME" */}
            <div
              style={{
                display: "flex",
                padding:
                  "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                justifyContent: "center",
                alignItems: "center",
                flex: "1 0 0",
              }}
            >
              {/* name=".datePicker__menuItem" id="202:33117" type="INSTANCE" */}
              <QodeCustom20232919
                style={{
                  display: "flex",
                  width: "24px",
                  height: "var(--size-height-controlheightsm, 24px)",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "var(--style-radius-borderradiussm, 6px)",
                }}
                {...{ title: "22", state: "default" }}
              />
            </div>
            {/* name="Cell Wrapper" id="202:33118" type="FRAME" */}
            <div
              style={{
                display: "flex",
                padding:
                  "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                justifyContent: "center",
                alignItems: "center",
                flex: "1 0 0",
              }}
            >
              {/* name=".datePicker__menuItem" id="202:33119" type="INSTANCE" */}
              <QodeCustom20232919
                style={{
                  display: "flex",
                  width: "24px",
                  height: "var(--size-height-controlheightsm, 24px)",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "var(--style-radius-borderradiussm, 6px)",
                }}
                {...{ title: "23", state: "default" }}
              />
            </div>
            {/* name="Cell Wrapper" id="202:33120" type="FRAME" */}
            <div
              style={{
                display: "flex",
                padding:
                  "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                justifyContent: "center",
                alignItems: "center",
                flex: "1 0 0",
              }}
            >
              {/* name=".datePicker__menuItem" id="202:33121" type="INSTANCE" */}
              <QodeCustom20232919
                style={{
                  display: "flex",
                  width: "24px",
                  height: "var(--size-height-controlheightsm, 24px)",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "var(--style-radius-borderradiussm, 6px)",
                }}
                {...{ title: "24", state: "default" }}
              />
            </div>
            {/* name="Cell Wrapper" id="202:33122" type="FRAME" */}
            <div
              style={{
                display: "flex",
                padding:
                  "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                justifyContent: "center",
                alignItems: "center",
                flex: "1 0 0",
              }}
            >
              {/* name=".datePicker__menuItem" id="202:33123" type="INSTANCE" */}
              <QodeCustom20232919
                style={{
                  display: "flex",
                  width: "24px",
                  height: "var(--size-height-controlheightsm, 24px)",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "var(--style-radius-borderradiussm, 6px)",
                }}
                {...{ title: "25", state: "default" }}
              />
            </div>
            {/* name="Cell Wrapper" id="202:33124" type="FRAME" */}
            <div
              style={{
                display: "flex",
                padding:
                  "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                justifyContent: "center",
                alignItems: "center",
                flex: "1 0 0",
              }}
            >
              {/* name=".datePicker__menuItem" id="202:33125" type="INSTANCE" */}
              <QodeCustom20232919
                style={{
                  display: "flex",
                  width: "24px",
                  height: "var(--size-height-controlheightsm, 24px)",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "var(--style-radius-borderradiussm, 6px)",
                }}
                {...{ title: "26", state: "default" }}
              />
            </div>
          </div>
          {/* name="Row" id="202:33133" type="FRAME" */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "stretch",
            }}
          >
            {/* name="Cell Wrapper" id="202:33134" type="FRAME" */}
            <div
              style={{
                display: "flex",
                padding:
                  "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                justifyContent: "center",
                alignItems: "center",
                flex: "1 0 0",
              }}
            >
              {/* name=".datePicker__menuItem" id="202:33135" type="INSTANCE" */}
              <QodeCustom20232919
                style={{
                  display: "flex",
                  width: "24px",
                  height: "var(--size-height-controlheightsm, 24px)",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "var(--style-radius-borderradiussm, 6px)",
                }}
                {...{ title: "27", state: "default" }}
              />
            </div>
            {/* name="Cell Wrapper" id="202:33136" type="FRAME" */}
            <div
              style={{
                display: "flex",
                padding:
                  "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                justifyContent: "center",
                alignItems: "center",
                flex: "1 0 0",
              }}
            >
              {/* name=".datePicker__menuItem" id="202:33137" type="INSTANCE" */}
              <QodeCustom20232919
                style={{
                  display: "flex",
                  width: "24px",
                  height: "var(--size-height-controlheightsm, 24px)",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "var(--style-radius-borderradiussm, 6px)",
                }}
                {...{ title: "28", state: "default" }}
              />
            </div>
            {/* name="Cell Wrapper" id="202:33138" type="FRAME" */}
            <div
              style={{
                display: "flex",
                padding:
                  "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                justifyContent: "center",
                alignItems: "center",
                flex: "1 0 0",
              }}
            >
              {/* name=".datePicker__menuItem" id="202:33139" type="INSTANCE" */}
              <QodeCustom20232919
                style={{
                  display: "flex",
                  width: "24px",
                  height: "var(--size-height-controlheightsm, 24px)",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "var(--style-radius-borderradiussm, 6px)",
                }}
                {...{ title: "29", state: "default" }}
              />
            </div>
            {/* name="Cell Wrapper" id="202:33140" type="FRAME" */}
            <div
              style={{
                display: "flex",
                padding:
                  "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                justifyContent: "center",
                alignItems: "center",
                flex: "1 0 0",
              }}
            >
              {/* name=".datePicker__menuItem" id="202:33141" type="INSTANCE" */}
              <QodeCustom20232919
                style={{
                  display: "flex",
                  width: "24px",
                  height: "var(--size-height-controlheightsm, 24px)",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "var(--style-radius-borderradiussm, 6px)",
                }}
                {...{ title: "30", state: "default" }}
              />
            </div>
            {/* name="Cell Wrapper" id="202:33142" type="FRAME" */}
            <div
              style={{
                display: "flex",
                padding:
                  "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                justifyContent: "center",
                alignItems: "center",
                flex: "1 0 0",
              }}
            >
              {/* name=".datePicker__menuItem" id="202:33143" type="INSTANCE" */}
              <QodeCustom20232919
                style={{
                  display: "flex",
                  width: "24px",
                  height: "var(--size-height-controlheightsm, 24px)",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "var(--style-radius-borderradiussm, 6px)",
                }}
                {...{ title: "31", state: "default" }}
              />
            </div>
            {/* name="Cell Wrapper" id="202:33144" type="FRAME" */}
            <div
              style={{
                display: "flex",
                padding:
                  "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                justifyContent: "center",
                alignItems: "center",
                flex: "1 0 0",
              }}
            >
              {/* name=".datePicker__menuItem" id="202:33145" type="INSTANCE" */}
              <QodeCustom20232927
                style={{
                  display: "flex",
                  width: "24px",
                  height: "var(--size-height-controlheightsm, 24px)",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "var(--style-radius-borderradiussm, 6px)",
                }}
                {...{ title: "1", state: "inactive" }}
              />
            </div>
            {/* name="Cell Wrapper" id="202:33146" type="FRAME" */}
            <div
              style={{
                display: "flex",
                padding:
                  "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                justifyContent: "center",
                alignItems: "center",
                flex: "1 0 0",
              }}
            >
              {/* name=".datePicker__menuItem" id="202:33147" type="INSTANCE" */}
              <QodeCustom20232927
                style={{
                  display: "flex",
                  width: "24px",
                  height: "var(--size-height-controlheightsm, 24px)",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "var(--style-radius-borderradiussm, 6px)",
                }}
                {...{ title: "2", state: "inactive" }}
              />
            </div>
          </div>
          {/* name="Row" id="202:33155" type="FRAME" */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "stretch",
            }}
          >
            {/* name="Cell Wrapper" id="202:33156" type="FRAME" */}
            <div
              style={{
                display: "flex",
                padding:
                  "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                justifyContent: "center",
                alignItems: "center",
                flex: "1 0 0",
              }}
            >
              {/* name=".datePicker__menuItem" id="202:33157" type="INSTANCE" */}
              <QodeCustom20232927
                style={{
                  display: "flex",
                  width: "24px",
                  height: "var(--size-height-controlheightsm, 24px)",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "var(--style-radius-borderradiussm, 6px)",
                }}
                {...{ title: "3", state: "inactive" }}
              />
            </div>
            {/* name="Cell Wrapper" id="202:33158" type="FRAME" */}
            <div
              style={{
                display: "flex",
                padding:
                  "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                justifyContent: "center",
                alignItems: "center",
                flex: "1 0 0",
              }}
            >
              {/* name=".datePicker__menuItem" id="202:33159" type="INSTANCE" */}
              <QodeCustom20232927
                style={{
                  display: "flex",
                  width: "24px",
                  height: "var(--size-height-controlheightsm, 24px)",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "var(--style-radius-borderradiussm, 6px)",
                }}
                {...{ title: "4", state: "inactive" }}
              />
            </div>
            {/* name="Cell Wrapper" id="202:33160" type="FRAME" */}
            <div
              style={{
                display: "flex",
                padding:
                  "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                justifyContent: "center",
                alignItems: "center",
                flex: "1 0 0",
              }}
            >
              {/* name=".datePicker__menuItem" id="202:33161" type="INSTANCE" */}
              <QodeCustom20232927
                style={{
                  display: "flex",
                  width: "24px",
                  height: "var(--size-height-controlheightsm, 24px)",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "var(--style-radius-borderradiussm, 6px)",
                }}
                {...{ title: "5", state: "inactive" }}
              />
            </div>
            {/* name="Cell Wrapper" id="202:33162" type="FRAME" */}
            <div
              style={{
                display: "flex",
                padding:
                  "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                justifyContent: "center",
                alignItems: "center",
                flex: "1 0 0",
              }}
            >
              {/* name=".datePicker__menuItem" id="202:33163" type="INSTANCE" */}
              <QodeCustom20232927
                style={{
                  display: "flex",
                  width: "24px",
                  height: "var(--size-height-controlheightsm, 24px)",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "var(--style-radius-borderradiussm, 6px)",
                }}
                {...{ title: "6", state: "inactive" }}
              />
            </div>
            {/* name="Cell Wrapper" id="202:33164" type="FRAME" */}
            <div
              style={{
                display: "flex",
                padding:
                  "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                justifyContent: "center",
                alignItems: "center",
                flex: "1 0 0",
              }}
            >
              {/* name=".datePicker__menuItem" id="202:33165" type="INSTANCE" */}
              <QodeCustom20232927
                style={{
                  display: "flex",
                  width: "24px",
                  height: "var(--size-height-controlheightsm, 24px)",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "var(--style-radius-borderradiussm, 6px)",
                }}
                {...{ title: "7", state: "inactive" }}
              />
            </div>
            {/* name="Cell Wrapper" id="202:33166" type="FRAME" */}
            <div
              style={{
                display: "flex",
                padding:
                  "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                justifyContent: "center",
                alignItems: "center",
                flex: "1 0 0",
              }}
            >
              {/* name=".datePicker__menuItem" id="202:33167" type="INSTANCE" */}
              <QodeCustom20232927
                style={{
                  display: "flex",
                  width: "24px",
                  height: "var(--size-height-controlheightsm, 24px)",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "var(--style-radius-borderradiussm, 6px)",
                }}
                {...{ title: "8", state: "inactive" }}
              />
            </div>
            {/* name="Cell Wrapper" id="202:33168" type="FRAME" */}
            <div
              style={{
                display: "flex",
                padding:
                  "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                justifyContent: "center",
                alignItems: "center",
                flex: "1 0 0",
              }}
            >
              {/* name=".datePicker__menuItem" id="202:33169" type="INSTANCE" */}
              <QodeCustom20232927
                style={{
                  display: "flex",
                  width: "24px",
                  height: "var(--size-height-controlheightsm, 24px)",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "var(--style-radius-borderradiussm, 6px)",
                }}
                {...{ title: "9", state: "inactive" }}
              />
            </div>
          </div>
        </div>
        {/* name="Footer" id="202:33177" type="FRAME" */}
        <div
          style={{
            display: "flex",
            padding: "var(--size-padding-paddingxs, 8px) 0px",
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "stretch",
          }}
        >
          {/* name="Button" id="202:33189" type="INSTANCE" */}
          <QodeButton
            style={{
              display: "flex",
              height: "var(--size-height-controlheight, 32px)",
              padding: "4px 16px",
              justifyContent: "center",
              alignItems: "center",
              gap: "8px",
              borderRadius: "var(--border-radius-rounded, 999px)",
            }}
            {...{
              buttonname: "Button",
              type: "link",
              size: "default",
              state: "default",
              content: "default",
              danger: false,
              ghost: false,
            }}
          />
        </div>
      </div>
    </>
  )
}
