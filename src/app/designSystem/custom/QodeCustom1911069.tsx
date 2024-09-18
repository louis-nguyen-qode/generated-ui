// id="191:1069"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeSteps } from "@designSystem/ant/QodeSteps"
import QodeSvg191969 from "@designSystem/icon/svg/QodeSvg191969"
import QodeSvg191975 from "@designSystem/icon/svg/QodeSvg191975"
import QodeSvg191973 from "@designSystem/icon/svg/QodeSvg191973"
import QodeSvg191977 from "@designSystem/icon/svg/QodeSvg191977"

export interface QodeCustom1911069Props {
  icon?: React.ReactNode
  description?: string
  showDescription?: boolean
  state?: "default" | "hover"
  status?: "finished" | "process" | "wait" | "error" | "progress"
  size?: "basic" | "small" | "dot" | "custom icon"
}

export const QodeCustom1911069: React.FC<
  QodeCustom1911069Props & { style?: CSSProperties }
> = ({
  icon = undefined,
  description = "This is a description",
  showDescription = true,
  state = "default",
  status = "finished",
  size = "basic",
  ...rest
}) => {
  return (
    <>
      {/* name="Stepper" id="191:1069" type="COMPONENT_SET" */}
      {/* id="191:1068" */}
      {`${state}` === `default` &&
        `${status}` === `finished` &&
        `${size}` === `basic` && (
          <>
            {/* name="state=default, status=finished, size=basic" id="191:1068" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "272px",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              {/* name="Step Header" id="191:1065" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name=".steps__item_progress" id="191:1057" type="INSTANCE" */}
                <QodeSteps
                  style={{
                    display: "flex",
                    width: "var(--line-height-lineheighheading3, 32px)",
                    height: "var(--size-height-controlheight, 32px)",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "999px",
                    background: "var(--background-bg-green-hover, #11a620)",
                  }}
                  {...{ step: "2", status: "finish", size: "default" }}
                />
                <span
                  style={{
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    textAlign: "center",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
                  }}
                >{`Finished`}</span>
                {/* name=".steps__item_tail" id="191:1060" type="INSTANCE" */}
                <QodeSvg191969
                  style={{
                    height: "var(--size-size-size5xs-1px, 1px)",
                    flex: "1 0 0",
                  }}
                  {...{
                    direction: "horizontal",
                    style: "default",
                    state: "active",
                  }}
                />
              </div>
              {/* name="Description Wrapper" id="191:1066" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  paddingLeft: "40px",
                  alignItems: "center",
                  alignSelf: "stretch",
                }}
              >
                <span
                  style={{
                    flex: "1 0 0",
                    color: "var(--text-text-neutral-40, #464646)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`This is a description`}</span>
              </div>
            </div>
          </>
        )}
      {/* id="191:1080" */}
      {`${state}` === `default` &&
        `${status}` === `process` &&
        `${size}` === `basic` && (
          <>
            {/* name="state=default, status=process, size=basic" id="191:1080" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "272px",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              {/* name="Step Header" id="191:1081" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name=".steps__item_progress" id="191:1082" type="INSTANCE" */}
                <QodeSteps
                  style={{
                    display: "flex",
                    width: "var(--line-height-lineheighheading3, 32px)",
                    height: "var(--size-height-controlheight, 32px)",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "999px",
                    border:
                      "1px solid var(--border-border-primary-20, #158de2)",
                    background: "var(--background-bg-primary, #1597f4)",
                  }}
                  {...{ step: "2", status: "process", size: "default" }}
                />
                <span
                  style={{
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    textAlign: "center",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
                  }}
                >{`Process`}</span>
                {/* name=".steps__item_tail" id="191:1084" type="INSTANCE" */}
                <QodeSvg191975
                  style={{
                    height: "var(--size-size-size5xs-1px, 1px)",
                    flex: "1 0 0",
                  }}
                  {...{
                    direction: "horizontal",
                    style: "default",
                    state: "waiting",
                  }}
                />
              </div>
              {/* name="Description Wrapper" id="191:1085" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  paddingLeft: "40px",
                  alignItems: "center",
                  alignSelf: "stretch",
                }}
              >
                <span
                  style={{
                    flex: "1 0 0",
                    color: "var(--text-text-neutral-40, #464646)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`This is a description`}</span>
              </div>
            </div>
          </>
        )}
      {/* id="191:1090" */}
      {`${state}` === `default` &&
        `${status}` === `wait` &&
        `${size}` === `basic` && (
          <>
            {/* name="state=default, status=wait, size=basic" id="191:1090" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "272px",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              {/* name="Step Header" id="191:1091" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name=".steps__item_progress" id="191:1092" type="INSTANCE" */}
                <QodeSteps
                  style={{
                    display: "flex",
                    width: "var(--line-height-lineheighheading3, 32px)",
                    height: "var(--size-height-controlheight, 32px)",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "999px",
                    background: "var(--background-bg-neutral-10, #e3e3e3)",
                  }}
                  {...{ step: "2", status: "wait", size: "default" }}
                />
                <span
                  style={{
                    color: "var(--text-text-neutral-40, #464646)",
                    textAlign: "center",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
                  }}
                >{`Waiting`}</span>
                {/* name=".steps__item_tail" id="191:1094" type="INSTANCE" */}
                <QodeSvg191975
                  style={{
                    height: "var(--size-size-size5xs-1px, 1px)",
                    flex: "1 0 0",
                  }}
                  {...{
                    direction: "horizontal",
                    style: "default",
                    state: "waiting",
                  }}
                />
              </div>
              {/* name="Description Wrapper" id="191:1095" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  paddingLeft: "40px",
                  alignItems: "center",
                  alignSelf: "stretch",
                }}
              >
                <span
                  style={{
                    flex: "1 0 0",
                    color: "var(--text-text-neutral-40, #464646)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`This is a description`}</span>
              </div>
            </div>
          </>
        )}
      {/* id="191:1100" */}
      {`${state}` === `default` &&
        `${status}` === `error` &&
        `${size}` === `basic` && (
          <>
            {/* name="state=default, status=error, size=basic" id="191:1100" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "272px",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              {/* name="Step Header" id="191:1101" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name=".steps__item_progress" id="191:1102" type="INSTANCE" */}
                <QodeSteps
                  style={{
                    display: "flex",
                    width: "var(--line-height-lineheighheading3, 32px)",
                    height: "var(--size-height-controlheight, 32px)",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "999px",
                    background: "var(--red-red-50, #dc3812)",
                  }}
                  {...{ step: "2", status: "error", size: "default" }}
                />
                <span
                  style={{
                    color: "var(--text-text-red, #dc3812)",
                    textAlign: "center",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
                  }}
                >{`Error`}</span>
                {/* name=".steps__item_tail" id="191:1104" type="INSTANCE" */}
                <QodeSvg191975
                  style={{
                    height: "var(--size-size-size5xs-1px, 1px)",
                    flex: "1 0 0",
                  }}
                  {...{
                    direction: "horizontal",
                    style: "default",
                    state: "waiting",
                  }}
                />
              </div>
              {/* name="Description Wrapper" id="191:1105" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  paddingLeft: "40px",
                  alignItems: "center",
                  alignSelf: "stretch",
                }}
              >
                <span
                  style={{
                    flex: "1 0 0",
                    color: "var(--text-text-neutral-40, #464646)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`This is a description`}</span>
              </div>
            </div>
          </>
        )}
      {/* id="191:1110" */}
      {`${state}` === `default` &&
        `${status}` === `progress` &&
        `${size}` === `basic` && (
          <>
            {/* name="state=default, status=progress, size=basic" id="191:1110" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "272px",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              {/* name="Step Header" id="191:1111" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name=".steps__item_progress" id="191:1112" type="INSTANCE" */}
                <QodeSteps
                  style={{
                    display: "flex",
                    width: "var(--line-height-lineheighheading3, 32px)",
                    height: "var(--size-height-controlheight, 32px)",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "999px",
                    border:
                      "1px solid var(--border-border-primary-20, #158de2)",
                    background: "var(--background-bg-primary, #1597f4)",
                  }}
                  {...{ step: "2", status: "progress", size: "default" }}
                />
                <span
                  style={{
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    textAlign: "center",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
                  }}
                >{`In progress`}</span>
                {/* name=".steps__item_tail" id="191:1114" type="INSTANCE" */}
                <QodeSvg191975
                  style={{
                    height: "var(--size-size-size5xs-1px, 1px)",
                    flex: "1 0 0",
                  }}
                  {...{
                    direction: "horizontal",
                    style: "default",
                    state: "waiting",
                  }}
                />
              </div>
              {/* name="Description Wrapper" id="191:1115" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  paddingLeft: "40px",
                  alignItems: "center",
                  alignSelf: "stretch",
                }}
              >
                <span
                  style={{
                    flex: "1 0 0",
                    color: "var(--text-text-neutral-40, #464646)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`This is a description`}</span>
              </div>
            </div>
          </>
        )}
      {/* id="191:1132" */}
      {`${state}` === `hover` &&
        `${status}` === `finished` &&
        `${size}` === `basic` && (
          <>
            {/* name="state=hover, status=finished, size=basic" id="191:1132" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "272px",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              {/* name="Step Header" id="191:1133" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name=".steps__item_progress" id="191:1134" type="INSTANCE" */}
                <QodeSteps
                  style={{
                    display: "flex",
                    width: "var(--line-height-lineheighheading3, 32px)",
                    height: "var(--size-height-controlheight, 32px)",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "999px",
                    background: "var(--background-bg-green-hover, #11a620)",
                  }}
                  {...{ step: "2", status: "finish", size: "default" }}
                />
                <span
                  style={{
                    color: "var(--text-text-green, #11a620)",
                    textAlign: "center",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
                  }}
                >{`Finished`}</span>
                {/* name=".steps__item_tail" id="191:1136" type="INSTANCE" */}
                <QodeSvg191969
                  style={{
                    height: "var(--size-size-size5xs-1px, 1px)",
                    flex: "1 0 0",
                  }}
                  {...{
                    direction: "horizontal",
                    style: "default",
                    state: "active",
                  }}
                />
              </div>
              {/* name="Description Wrapper" id="191:1137" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  paddingLeft: "40px",
                  alignItems: "center",
                  alignSelf: "stretch",
                }}
              >
                <span
                  style={{
                    flex: "1 0 0",
                    color: "var(--text-text-neutral-40, #464646)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`This is a description`}</span>
              </div>
            </div>
          </>
        )}
      {/* id="191:1139" */}
      {`${state}` === `hover` &&
        `${status}` === `process` &&
        `${size}` === `basic` && (
          <>
            {/* name="state=hover, status=process, size=basic" id="191:1139" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "272px",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              {/* name="Step Header" id="191:1140" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name=".steps__item_progress" id="191:1141" type="INSTANCE" */}
                <QodeSteps
                  style={{
                    display: "flex",
                    width: "var(--line-height-lineheighheading3, 32px)",
                    height: "var(--size-height-controlheight, 32px)",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "999px",
                    border:
                      "1px solid var(--border-border-primary-20, #158de2)",
                    background: "var(--background-bg-primary, #1597f4)",
                  }}
                  {...{ step: "2", status: "process", size: "default" }}
                />
                <span
                  style={{
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    textAlign: "center",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
                  }}
                >{`Process`}</span>
                {/* name=".steps__item_tail" id="191:1143" type="INSTANCE" */}
                <QodeSvg191975
                  style={{
                    height: "var(--size-size-size5xs-1px, 1px)",
                    flex: "1 0 0",
                  }}
                  {...{
                    direction: "horizontal",
                    style: "default",
                    state: "waiting",
                  }}
                />
              </div>
              {/* name="Description Wrapper" id="191:1144" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  paddingLeft: "40px",
                  alignItems: "center",
                  alignSelf: "stretch",
                }}
              >
                <span
                  style={{
                    flex: "1 0 0",
                    color: "var(--text-text-neutral-40, #464646)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`This is a description`}</span>
              </div>
            </div>
          </>
        )}
      {/* id="191:1146" */}
      {`${state}` === `hover` &&
        `${status}` === `wait` &&
        `${size}` === `basic` && (
          <>
            {/* name="state=hover, status=wait, size=basic" id="191:1146" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "272px",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              {/* name="Step Header" id="191:1147" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name=".steps__item_progress" id="191:1148" type="INSTANCE" */}
                <QodeSteps
                  style={{
                    display: "flex",
                    width: "var(--line-height-lineheighheading3, 32px)",
                    height: "var(--size-height-controlheight, 32px)",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "999px",
                    background: "var(--background-bg-neutral-10, #e3e3e3)",
                  }}
                  {...{ step: "2", status: "wait", size: "default" }}
                />
                <span
                  style={{
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    textAlign: "center",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
                  }}
                >{`Waiting`}</span>
                {/* name=".steps__item_tail" id="191:1150" type="INSTANCE" */}
                <QodeSvg191975
                  style={{
                    height: "var(--size-size-size5xs-1px, 1px)",
                    flex: "1 0 0",
                  }}
                  {...{
                    direction: "horizontal",
                    style: "default",
                    state: "waiting",
                  }}
                />
              </div>
              {/* name="Description Wrapper" id="191:1151" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  paddingLeft: "40px",
                  alignItems: "center",
                  alignSelf: "stretch",
                }}
              >
                <span
                  style={{
                    flex: "1 0 0",
                    color: "var(--text-text-neutral-40, #464646)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`This is a description`}</span>
              </div>
            </div>
          </>
        )}
      {/* id="191:1153" */}
      {`${state}` === `hover` &&
        `${status}` === `error` &&
        `${size}` === `basic` && (
          <>
            {/* name="state=hover, status=error, size=basic" id="191:1153" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "272px",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              {/* name="Step Header" id="191:1154" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name=".steps__item_progress" id="191:1155" type="INSTANCE" */}
                <QodeSteps
                  style={{
                    display: "flex",
                    width: "var(--line-height-lineheighheading3, 32px)",
                    height: "var(--size-height-controlheight, 32px)",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "999px",
                    background: "var(--background-bg-red-hover, #dc3812)",
                  }}
                  {...{ step: "2", status: "error", size: "default" }}
                />
                <span
                  style={{
                    color: "var(--text-text-red, #dc3812)",
                    textAlign: "center",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
                  }}
                >{`Error`}</span>
                {/* name=".steps__item_tail" id="191:1157" type="INSTANCE" */}
                <QodeSvg191975
                  style={{
                    height: "var(--size-size-size5xs-1px, 1px)",
                    flex: "1 0 0",
                  }}
                  {...{
                    direction: "horizontal",
                    style: "default",
                    state: "waiting",
                  }}
                />
              </div>
              {/* name="Description Wrapper" id="191:1158" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  paddingLeft: "40px",
                  alignItems: "center",
                  alignSelf: "stretch",
                }}
              >
                <span
                  style={{
                    flex: "1 0 0",
                    color: "var(--text-text-neutral-40, #464646)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`This is a description`}</span>
              </div>
            </div>
          </>
        )}
      {/* id="191:1160" */}
      {`${state}` === `hover` &&
        `${status}` === `progress` &&
        `${size}` === `basic` && (
          <>
            {/* name="state=hover, status=progress, size=basic" id="191:1160" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "272px",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              {/* name="Step Header" id="191:1161" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name=".steps__item_progress" id="191:1162" type="INSTANCE" */}
                <QodeSteps
                  style={{
                    display: "flex",
                    width: "var(--line-height-lineheighheading3, 32px)",
                    height: "var(--size-height-controlheight, 32px)",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "999px",
                    border:
                      "1px solid var(--border-border-primary-20, #158de2)",
                    background: "var(--background-bg-primary, #1597f4)",
                  }}
                  {...{ step: "2", status: "progress", size: "default" }}
                />
                <span
                  style={{
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    textAlign: "center",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
                  }}
                >{`In progress`}</span>
                {/* name=".steps__item_tail" id="191:1164" type="INSTANCE" */}
                <QodeSvg191975
                  style={{
                    height: "var(--size-size-size5xs-1px, 1px)",
                    flex: "1 0 0",
                  }}
                  {...{
                    direction: "horizontal",
                    style: "default",
                    state: "waiting",
                  }}
                />
              </div>
              {/* name="Description Wrapper" id="191:1165" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  paddingLeft: "40px",
                  alignItems: "center",
                  alignSelf: "stretch",
                }}
              >
                <span
                  style={{
                    flex: "1 0 0",
                    color: "var(--text-text-neutral-40, #464646)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`This is a description`}</span>
              </div>
            </div>
          </>
        )}
      {/* id="191:1181" */}
      {`${state}` === `default` &&
        `${status}` === `finished` &&
        `${size}` === `small` && (
          <>
            {/* name="state=default, status=finished, size=small" id="191:1181" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "272px",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              {/* name="Step Header" id="191:1182" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name=".steps__item_progress" id="191:1183" type="INSTANCE" */}
                <QodeSteps
                  style={{
                    display: "flex",
                    width: "24px",
                    height: "var(--size-height-controlheightsm, 24px)",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "999px",
                    background: "var(--background-bg-green-hover, #11a620)",
                  }}
                  {...{ step: "2", status: "finish", size: "small" }}
                />
                <span
                  style={{
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    textAlign: "center",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
                  }}
                >{`Finished`}</span>
                {/* name=".steps__item_tail" id="191:1185" type="INSTANCE" */}
                <QodeSvg191969
                  style={{
                    height: "var(--size-size-size5xs-1px, 1px)",
                    flex: "1 0 0",
                  }}
                  {...{
                    direction: "horizontal",
                    style: "default",
                    state: "active",
                  }}
                />
              </div>
            </div>
          </>
        )}
      {/* id="191:1188" */}
      {`${state}` === `default` &&
        `${status}` === `process` &&
        `${size}` === `small` && (
          <>
            {/* name="state=default, status=process, size=small" id="191:1188" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "272px",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              {/* name="Step Header" id="191:1189" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name=".steps__item_progress" id="191:1190" type="INSTANCE" */}
                <QodeSteps
                  style={{
                    display: "flex",
                    width: "24px",
                    height: "var(--size-height-controlheightsm, 24px)",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "999px",
                    border:
                      "1px solid var(--border-border-primary-20, #158de2)",
                    background: "var(--background-bg-primary, #1597f4)",
                  }}
                  {...{ step: "2", status: "process", size: "small" }}
                />
                <span
                  style={{
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    textAlign: "center",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
                  }}
                >{`Process`}</span>
                {/* name=".steps__item_tail" id="191:1192" type="INSTANCE" */}
                <QodeSvg191975
                  style={{
                    height: "var(--size-size-size5xs-1px, 1px)",
                    flex: "1 0 0",
                  }}
                  {...{
                    direction: "horizontal",
                    style: "default",
                    state: "waiting",
                  }}
                />
              </div>
            </div>
          </>
        )}
      {/* id="191:1195" */}
      {`${state}` === `default` &&
        `${status}` === `wait` &&
        `${size}` === `small` && (
          <>
            {/* name="state=default, status=wait, size=small" id="191:1195" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "272px",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              {/* name="Step Header" id="191:1196" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name=".steps__item_progress" id="191:1197" type="INSTANCE" */}
                <QodeSteps
                  style={{
                    display: "flex",
                    width: "24px",
                    height: "var(--size-height-controlheightsm, 24px)",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "999px",
                    background: "var(--background-bg-neutral-10, #e3e3e3)",
                  }}
                  {...{ step: "2", status: "wait", size: "small" }}
                />
                <span
                  style={{
                    color: "var(--text-text-neutral-40, #464646)",
                    textAlign: "center",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
                  }}
                >{`Waiting`}</span>
                {/* name=".steps__item_tail" id="191:1199" type="INSTANCE" */}
                <QodeSvg191975
                  style={{
                    height: "var(--size-size-size5xs-1px, 1px)",
                    flex: "1 0 0",
                  }}
                  {...{
                    direction: "horizontal",
                    style: "default",
                    state: "waiting",
                  }}
                />
              </div>
            </div>
          </>
        )}
      {/* id="191:1202" */}
      {`${state}` === `default` &&
        `${status}` === `error` &&
        `${size}` === `small` && (
          <>
            {/* name="state=default, status=error, size=small" id="191:1202" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "272px",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              {/* name="Step Header" id="191:1203" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name=".steps__item_progress" id="191:1204" type="INSTANCE" */}
                <QodeSteps
                  style={{
                    display: "flex",
                    width: "24px",
                    height: "var(--size-height-controlheightsm, 24px)",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "999px",
                    background: "var(--red-red-50, #dc3812)",
                  }}
                  {...{ step: "2", status: "error", size: "small" }}
                />
                <span
                  style={{
                    color: "var(--text-text-red, #dc3812)",
                    textAlign: "center",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
                  }}
                >{`Error`}</span>
                {/* name=".steps__item_tail" id="191:1206" type="INSTANCE" */}
                <QodeSvg191975
                  style={{
                    height: "var(--size-size-size5xs-1px, 1px)",
                    flex: "1 0 0",
                  }}
                  {...{
                    direction: "horizontal",
                    style: "default",
                    state: "waiting",
                  }}
                />
              </div>
            </div>
          </>
        )}
      {/* id="191:1209" */}
      {`${state}` === `default` &&
        `${status}` === `progress` &&
        `${size}` === `small` && (
          <>
            {/* name="state=default, status=progress, size=small" id="191:1209" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "272px",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              {/* name="Step Header" id="191:1210" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name=".steps__item_progress" id="191:1211" type="INSTANCE" */}
                <QodeSteps
                  style={{
                    display: "flex",
                    width: "24px",
                    height: "var(--size-height-controlheightsm, 24px)",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "999px",
                    border:
                      "1px solid var(--border-border-primary-20, #158de2)",
                    background: "var(--background-bg-primary, #1597f4)",
                  }}
                  {...{ step: "2", status: "progress", size: "small" }}
                />
                <span
                  style={{
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    textAlign: "center",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
                  }}
                >{`In progress`}</span>
                {/* name=".steps__item_tail" id="191:1213" type="INSTANCE" */}
                <QodeSvg191975
                  style={{
                    height: "var(--size-size-size5xs-1px, 1px)",
                    flex: "1 0 0",
                  }}
                  {...{
                    direction: "horizontal",
                    style: "default",
                    state: "waiting",
                  }}
                />
              </div>
            </div>
          </>
        )}
      {/* id="191:1216" */}
      {`${state}` === `hover` &&
        `${status}` === `finished` &&
        `${size}` === `small` && (
          <>
            {/* name="state=hover, status=finished, size=small" id="191:1216" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "272px",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              {/* name="Step Header" id="191:1217" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name=".steps__item_progress" id="191:1218" type="INSTANCE" */}
                <QodeSteps
                  style={{
                    display: "flex",
                    width: "24px",
                    height: "var(--size-height-controlheightsm, 24px)",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "999px",
                    background: "var(--background-bg-green-hover, #11a620)",
                  }}
                  {...{ step: "2", status: "finish", size: "small" }}
                />
                <span
                  style={{
                    color: "var(--text-text-green, #11a620)",
                    textAlign: "center",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
                  }}
                >{`Finished`}</span>
                {/* name=".steps__item_tail" id="191:1220" type="INSTANCE" */}
                <QodeSvg191969
                  style={{
                    height: "var(--size-size-size5xs-1px, 1px)",
                    flex: "1 0 0",
                  }}
                  {...{
                    direction: "horizontal",
                    style: "default",
                    state: "active",
                  }}
                />
              </div>
            </div>
          </>
        )}
      {/* id="191:1223" */}
      {`${state}` === `hover` &&
        `${status}` === `process` &&
        `${size}` === `small` && (
          <>
            {/* name="state=hover, status=process, size=small" id="191:1223" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "272px",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              {/* name="Step Header" id="191:1224" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name=".steps__item_progress" id="191:1225" type="INSTANCE" */}
                <QodeSteps
                  style={{
                    display: "flex",
                    width: "24px",
                    height: "var(--size-height-controlheightsm, 24px)",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "999px",
                    border:
                      "1px solid var(--border-border-primary-20, #158de2)",
                    background: "var(--background-bg-primary, #1597f4)",
                  }}
                  {...{ step: "2", status: "process", size: "small" }}
                />
                <span
                  style={{
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    textAlign: "center",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
                  }}
                >{`Process`}</span>
                {/* name=".steps__item_tail" id="191:1227" type="INSTANCE" */}
                <QodeSvg191975
                  style={{
                    height: "var(--size-size-size5xs-1px, 1px)",
                    flex: "1 0 0",
                  }}
                  {...{
                    direction: "horizontal",
                    style: "default",
                    state: "waiting",
                  }}
                />
              </div>
            </div>
          </>
        )}
      {/* id="191:1230" */}
      {`${state}` === `hover` &&
        `${status}` === `wait` &&
        `${size}` === `small` && (
          <>
            {/* name="state=hover, status=wait, size=small" id="191:1230" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "272px",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              {/* name="Step Header" id="191:1231" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name=".steps__item_progress" id="191:1232" type="INSTANCE" */}
                <QodeSteps
                  style={{
                    display: "flex",
                    width: "24px",
                    height: "var(--size-height-controlheightsm, 24px)",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "999px",
                    background: "var(--background-bg-neutral-10, #e3e3e3)",
                  }}
                  {...{ step: "2", status: "wait", size: "small" }}
                />
                <span
                  style={{
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    textAlign: "center",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
                  }}
                >{`Waiting`}</span>
                {/* name=".steps__item_tail" id="191:1234" type="INSTANCE" */}
                <QodeSvg191975
                  style={{
                    height: "var(--size-size-size5xs-1px, 1px)",
                    flex: "1 0 0",
                  }}
                  {...{
                    direction: "horizontal",
                    style: "default",
                    state: "waiting",
                  }}
                />
              </div>
            </div>
          </>
        )}
      {/* id="191:1237" */}
      {`${state}` === `hover` &&
        `${status}` === `error` &&
        `${size}` === `small` && (
          <>
            {/* name="state=hover, status=error, size=small" id="191:1237" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "272px",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              {/* name="Step Header" id="191:1238" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name=".steps__item_progress" id="191:1239" type="INSTANCE" */}
                <QodeSteps
                  style={{
                    display: "flex",
                    width: "24px",
                    height: "var(--size-height-controlheightsm, 24px)",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "999px",
                    background: "var(--red-red-50, #dc3812)",
                  }}
                  {...{ step: "2", status: "error", size: "small" }}
                />
                <span
                  style={{
                    color: "var(--text-text-red, #dc3812)",
                    textAlign: "center",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
                  }}
                >{`Error`}</span>
                {/* name=".steps__item_tail" id="191:1241" type="INSTANCE" */}
                <QodeSvg191975
                  style={{
                    height: "var(--size-size-size5xs-1px, 1px)",
                    flex: "1 0 0",
                  }}
                  {...{
                    direction: "horizontal",
                    style: "default",
                    state: "waiting",
                  }}
                />
              </div>
            </div>
          </>
        )}
      {/* id="191:1244" */}
      {`${state}` === `hover` &&
        `${status}` === `progress` &&
        `${size}` === `small` && (
          <>
            {/* name="state=hover, status=progress, size=small" id="191:1244" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "272px",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              {/* name="Step Header" id="191:1245" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name=".steps__item_progress" id="191:1246" type="INSTANCE" */}
                <QodeSteps
                  style={{
                    display: "flex",
                    width: "24px",
                    height: "var(--size-height-controlheightsm, 24px)",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "999px",
                    border:
                      "1px solid var(--border-border-primary-20, #158de2)",
                    background: "var(--background-bg-primary, #1597f4)",
                  }}
                  {...{ step: "2", status: "progress", size: "small" }}
                />
                <span
                  style={{
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    textAlign: "center",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
                  }}
                >{`In progress`}</span>
                {/* name=".steps__item_tail" id="191:1248" type="INSTANCE" */}
                <QodeSvg191975
                  style={{
                    height: "var(--size-size-size5xs-1px, 1px)",
                    flex: "1 0 0",
                  }}
                  {...{
                    direction: "horizontal",
                    style: "default",
                    state: "waiting",
                  }}
                />
              </div>
            </div>
          </>
        )}
      {/* id="191:1375" */}
      {`${state}` === `default` &&
        `${status}` === `finished` &&
        `${size}` === `dot` && (
          <>
            {/* name="state=default, status=finished, size=dot" id="191:1375" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "272px",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "var(--size-padding-paddingxs, 8px)",
              }}
            >
              {/* name="Progress Wrapper" id="191:1376" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name=".steps__item_tail" id="191:1624" type="INSTANCE" */}
                <QodeSvg191973
                  style={{ height: "3px", flex: "1 0 0" }}
                  {...{
                    direction: "horizontal",
                    style: "bold",
                    state: "active",
                  }}
                />
                {/* name=".steps__item_progress" id="191:1377" type="INSTANCE" */}
                <QodeSteps
                  style={{
                    display: "flex",
                    width: "8px",
                    height: "8px",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "999px",
                    border:
                      "1px solid var(--border-border-primary-20, #158de2)",
                    background: "var(--background-bg-primary, #1597f4)",
                  }}
                  {...{ step: "2", status: "finish", size: "dot" }}
                />
                {/* name=".steps__item_tail" id="191:1379" type="INSTANCE" */}
                <QodeSvg191973
                  style={{ height: "3px", flex: "1 0 0" }}
                  {...{
                    direction: "horizontal",
                    style: "bold",
                    state: "active",
                  }}
                />
              </div>
              {/* name="Description Wrapper" id="191:1380" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  gap: "2px",
                  alignSelf: "stretch",
                }}
              >
                <span
                  style={{
                    alignSelf: "stretch",
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    textAlign: "center",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "24px /* 150% */",
                  }}
                >{`Finished`}</span>
                <span
                  style={{
                    alignSelf: "stretch",
                    color: "var(--text-text-neutral-40, #464646)",
                    textAlign: "center",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`This is a description`}</span>
              </div>
            </div>
          </>
        )}
      {/* id="191:1628" */}
      {`${state}` === `default` &&
        `${status}` === `process` &&
        `${size}` === `dot` && (
          <>
            {/* name="state=default, status=process, size=dot" id="191:1628" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "272px",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "var(--size-padding-paddingxs, 8px)",
              }}
            >
              {/* name="Progress Wrapper" id="191:1629" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name=".steps__item_tail" id="191:1630" type="INSTANCE" */}
                <QodeSvg191973
                  style={{ height: "3px", flex: "1 0 0" }}
                  {...{
                    direction: "horizontal",
                    style: "bold",
                    state: "active",
                  }}
                />
                {/* name=".steps__item_progress" id="191:1631" type="INSTANCE" */}
                <QodeSteps
                  style={{
                    display: "flex",
                    width: "10px",
                    height: "10px",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "999px",
                    border:
                      "1px solid var(--border-border-primary-20, #158de2)",
                    background: "var(--background-bg-primary, #1597f4)",
                  }}
                  {...{ step: "2", status: "process", size: "dot" }}
                />
                {/* name=".steps__item_tail" id="191:1632" type="INSTANCE" */}
                <QodeSvg191977
                  style={{ height: "3px", flex: "1 0 0" }}
                  {...{
                    direction: "horizontal",
                    style: "bold",
                    state: "waiting",
                  }}
                />
              </div>
              {/* name="Description Wrapper" id="191:1633" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  gap: "2px",
                  alignSelf: "stretch",
                }}
              >
                <span
                  style={{
                    alignSelf: "stretch",
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    textAlign: "center",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "24px /* 150% */",
                  }}
                >{`Process`}</span>
                <span
                  style={{
                    alignSelf: "stretch",
                    color: "var(--text-text-neutral-40, #464646)",
                    textAlign: "center",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`This is a description`}</span>
              </div>
            </div>
          </>
        )}
      {/* id="191:1638" */}
      {`${state}` === `default` &&
        `${status}` === `wait` &&
        `${size}` === `dot` && (
          <>
            {/* name="state=default, status=wait, size=dot" id="191:1638" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "272px",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "var(--size-padding-paddingxs, 8px)",
              }}
            >
              {/* name="Progress Wrapper" id="191:1639" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name=".steps__item_tail" id="191:1640" type="INSTANCE" */}
                <QodeSvg191977
                  style={{ height: "3px", flex: "1 0 0" }}
                  {...{
                    direction: "horizontal",
                    style: "bold",
                    state: "waiting",
                  }}
                />
                {/* name=".steps__item_progress" id="191:1641" type="INSTANCE" */}
                <QodeSteps
                  style={{
                    display: "flex",
                    width: "8px",
                    height: "8px",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "999px",
                    background: "var(--neutral-gray-40, #a7a7a7)",
                  }}
                  {...{ step: "2", status: "wait", size: "dot" }}
                />
                {/* name=".steps__item_tail" id="191:1642" type="INSTANCE" */}
                <QodeSvg191977
                  style={{ height: "3px", flex: "1 0 0" }}
                  {...{
                    direction: "horizontal",
                    style: "bold",
                    state: "waiting",
                  }}
                />
              </div>
              {/* name="Description Wrapper" id="191:1643" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  gap: "2px",
                  alignSelf: "stretch",
                }}
              >
                <span
                  style={{
                    alignSelf: "stretch",
                    color: "var(--text-text-neutral-40, #464646)",
                    textAlign: "center",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "24px /* 150% */",
                  }}
                >{`Waiting`}</span>
                <span
                  style={{
                    alignSelf: "stretch",
                    color: "var(--text-text-neutral-40, #464646)",
                    textAlign: "center",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`This is a description`}</span>
              </div>
            </div>
          </>
        )}
      {/* id="191:1648" */}
      {`${state}` === `default` &&
        `${status}` === `error` &&
        `${size}` === `dot` && (
          <>
            {/* name="state=default, status=error, size=dot" id="191:1648" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "272px",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "var(--size-padding-paddingxs, 8px)",
              }}
            >
              {/* name="Progress Wrapper" id="191:1649" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name=".steps__item_tail" id="191:1650" type="INSTANCE" */}
                <QodeSvg191977
                  style={{ height: "3px", flex: "1 0 0" }}
                  {...{
                    direction: "horizontal",
                    style: "bold",
                    state: "waiting",
                  }}
                />
                {/* name=".steps__item_progress" id="191:1651" type="INSTANCE" */}
                <QodeSteps
                  style={{
                    display: "flex",
                    width: "8px",
                    height: "8px",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "999px",
                    background: "var(--red-red-50, #dc3812)",
                  }}
                  {...{ step: "2", status: "error", size: "dot" }}
                />
                {/* name=".steps__item_tail" id="191:1652" type="INSTANCE" */}
                <QodeSvg191977
                  style={{ height: "3px", flex: "1 0 0" }}
                  {...{
                    direction: "horizontal",
                    style: "bold",
                    state: "waiting",
                  }}
                />
              </div>
              {/* name="Description Wrapper" id="191:1653" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  gap: "2px",
                  alignSelf: "stretch",
                }}
              >
                <span
                  style={{
                    alignSelf: "stretch",
                    color: "var(--text-text-neutral-40, #464646)",
                    textAlign: "center",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "24px /* 150% */",
                  }}
                >{`Error`}</span>
                <span
                  style={{
                    alignSelf: "stretch",
                    color: "var(--text-text-neutral-40, #464646)",
                    textAlign: "center",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`This is a description`}</span>
              </div>
            </div>
          </>
        )}
      {/* id="191:1658" */}
      {`${state}` === `default` &&
        `${status}` === `progress` &&
        `${size}` === `dot` && (
          <>
            {/* name="state=default, status=progress, size=dot" id="191:1658" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "272px",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "var(--size-padding-paddingxs, 8px)",
              }}
            >
              {/* name="Progress Wrapper" id="191:1659" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name=".steps__item_tail" id="191:1660" type="INSTANCE" */}
                <QodeSvg191973
                  style={{ height: "3px", flex: "1 0 0" }}
                  {...{
                    direction: "horizontal",
                    style: "bold",
                    state: "active",
                  }}
                />
                {/* name=".steps__item_progress" id="191:1661" type="INSTANCE" */}
                <QodeSteps
                  style={{
                    display: "flex",
                    width: "10px",
                    height: "10px",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "999px",
                    border:
                      "1px solid var(--border-border-primary-20, #158de2)",
                    background: "var(--background-bg-primary, #1597f4)",
                  }}
                  {...{ step: "2", status: "process", size: "dot" }}
                />
                {/* name=".steps__item_tail" id="191:1662" type="INSTANCE" */}
                <QodeSvg191977
                  style={{ height: "3px", flex: "1 0 0" }}
                  {...{
                    direction: "horizontal",
                    style: "bold",
                    state: "waiting",
                  }}
                />
              </div>
              {/* name="Description Wrapper" id="191:1663" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  gap: "2px",
                  alignSelf: "stretch",
                }}
              >
                <span
                  style={{
                    alignSelf: "stretch",
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    textAlign: "center",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "24px /* 150% */",
                  }}
                >{`In progress`}</span>
                <span
                  style={{
                    alignSelf: "stretch",
                    color: "var(--text-text-neutral-40, #464646)",
                    textAlign: "center",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`This is a description`}</span>
              </div>
            </div>
          </>
        )}
      {/* id="191:1678" */}
      {`${state}` === `hover` &&
        `${status}` === `finished` &&
        `${size}` === `dot` && (
          <>
            {/* name="state=hover, status=finished, size=dot" id="191:1678" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "272px",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "var(--size-padding-paddingxs, 8px)",
              }}
            >
              {/* name="Progress Wrapper" id="191:1679" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name=".steps__item_tail" id="191:1680" type="INSTANCE" */}
                <QodeSvg191973
                  style={{ height: "3px", flex: "1 0 0" }}
                  {...{
                    direction: "horizontal",
                    style: "bold",
                    state: "active",
                  }}
                />
                {/* name=".steps__item_progress" id="191:1681" type="INSTANCE" */}
                <QodeSteps
                  style={{
                    display: "flex",
                    width: "8px",
                    height: "8px",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "999px",
                    border:
                      "1px solid var(--border-border-primary-20, #158de2)",
                    background: "var(--background-bg-primary, #1597f4)",
                  }}
                  {...{ step: "2", status: "finish", size: "dot" }}
                />
                {/* name=".steps__item_tail" id="191:1682" type="INSTANCE" */}
                <QodeSvg191973
                  style={{ height: "3px", flex: "1 0 0" }}
                  {...{
                    direction: "horizontal",
                    style: "bold",
                    state: "active",
                  }}
                />
              </div>
              {/* name="Description Wrapper" id="191:1683" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  gap: "2px",
                  alignSelf: "stretch",
                }}
              >
                <span
                  style={{
                    alignSelf: "stretch",
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    textAlign: "center",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "24px /* 150% */",
                  }}
                >{`Finished`}</span>
                <span
                  style={{
                    alignSelf: "stretch",
                    color: "var(--text-text-neutral-40, #464646)",
                    textAlign: "center",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`This is a description`}</span>
              </div>
            </div>
          </>
        )}
      {/* id="191:1686" */}
      {`${state}` === `hover` &&
        `${status}` === `process` &&
        `${size}` === `dot` && (
          <>
            {/* name="state=hover, status=process, size=dot" id="191:1686" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "272px",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "var(--size-padding-paddingxs, 8px)",
              }}
            >
              {/* name="Progress Wrapper" id="191:1687" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name=".steps__item_tail" id="191:1688" type="INSTANCE" */}
                <QodeSvg191973
                  style={{ height: "3px", flex: "1 0 0" }}
                  {...{
                    direction: "horizontal",
                    style: "bold",
                    state: "active",
                  }}
                />
                {/* name=".steps__item_progress" id="191:1689" type="INSTANCE" */}
                <QodeSteps
                  style={{
                    display: "flex",
                    width: "10px",
                    height: "10px",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "999px",
                    border:
                      "1px solid var(--border-border-primary-20, #158de2)",
                    background: "var(--background-bg-primary, #1597f4)",
                  }}
                  {...{ step: "2", status: "process", size: "dot" }}
                />
                {/* name=".steps__item_tail" id="191:1690" type="INSTANCE" */}
                <QodeSvg191977
                  style={{ height: "3px", flex: "1 0 0" }}
                  {...{
                    direction: "horizontal",
                    style: "bold",
                    state: "waiting",
                  }}
                />
              </div>
              {/* name="Description Wrapper" id="191:1691" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  gap: "2px",
                  alignSelf: "stretch",
                }}
              >
                <span
                  style={{
                    alignSelf: "stretch",
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    textAlign: "center",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "24px /* 150% */",
                  }}
                >{`Process`}</span>
                <span
                  style={{
                    alignSelf: "stretch",
                    color: "var(--text-text-neutral-40, #464646)",
                    textAlign: "center",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`This is a description`}</span>
              </div>
            </div>
          </>
        )}
      {/* id="191:1694" */}
      {`${state}` === `hover` &&
        `${status}` === `wait` &&
        `${size}` === `dot` && (
          <>
            {/* name="state=hover, status=wait, size=dot" id="191:1694" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "272px",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "var(--size-padding-paddingxs, 8px)",
              }}
            >
              {/* name="Progress Wrapper" id="191:1695" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name=".steps__item_tail" id="191:1696" type="INSTANCE" */}
                <QodeSvg191977
                  style={{ height: "3px", flex: "1 0 0" }}
                  {...{
                    direction: "horizontal",
                    style: "bold",
                    state: "waiting",
                  }}
                />
                {/* name=".steps__item_progress" id="191:1697" type="INSTANCE" */}
                <QodeSteps
                  style={{
                    display: "flex",
                    width: "8px",
                    height: "8px",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "999px",
                    background: "var(--text-text-placeholder, #a7a7a7)",
                  }}
                  {...{ step: "2", status: "wait", size: "dot" }}
                />
                {/* name=".steps__item_tail" id="191:1698" type="INSTANCE" */}
                <QodeSvg191977
                  style={{ height: "3px", flex: "1 0 0" }}
                  {...{
                    direction: "horizontal",
                    style: "bold",
                    state: "waiting",
                  }}
                />
              </div>
              {/* name="Description Wrapper" id="191:1699" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  gap: "2px",
                  alignSelf: "stretch",
                }}
              >
                <span
                  style={{
                    alignSelf: "stretch",
                    color: "var(--text-text-neutral-40, #464646)",
                    textAlign: "center",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "24px /* 150% */",
                  }}
                >{`Waiting`}</span>
                <span
                  style={{
                    alignSelf: "stretch",
                    color: "var(--text-text-neutral-40, #464646)",
                    textAlign: "center",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`This is a description`}</span>
              </div>
            </div>
          </>
        )}
      {/* id="191:1702" */}
      {`${state}` === `hover` &&
        `${status}` === `error` &&
        `${size}` === `dot` && (
          <>
            {/* name="state=hover, status=error, size=dot" id="191:1702" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "272px",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "var(--size-padding-paddingxs, 8px)",
              }}
            >
              {/* name="Progress Wrapper" id="191:1703" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name=".steps__item_tail" id="191:1704" type="INSTANCE" */}
                <QodeSvg191977
                  style={{ height: "3px", flex: "1 0 0" }}
                  {...{
                    direction: "horizontal",
                    style: "bold",
                    state: "waiting",
                  }}
                />
                {/* name=".steps__item_progress" id="191:1705" type="INSTANCE" */}
                <QodeSteps
                  style={{
                    display: "flex",
                    width: "8px",
                    height: "8px",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "999px",
                    background: "var(--background-bg-red-hover, #dc3812)",
                  }}
                  {...{ step: "2", status: "error", size: "dot" }}
                />
                {/* name=".steps__item_tail" id="191:1706" type="INSTANCE" */}
                <QodeSvg191977
                  style={{ height: "3px", flex: "1 0 0" }}
                  {...{
                    direction: "horizontal",
                    style: "bold",
                    state: "waiting",
                  }}
                />
              </div>
              {/* name="Description Wrapper" id="191:1707" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  gap: "2px",
                  alignSelf: "stretch",
                }}
              >
                <span
                  style={{
                    alignSelf: "stretch",
                    color: "var(--text-text-neutral-40, #464646)",
                    textAlign: "center",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "24px /* 150% */",
                  }}
                >{`Error`}</span>
                <span
                  style={{
                    alignSelf: "stretch",
                    color: "var(--text-text-neutral-40, #464646)",
                    textAlign: "center",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`This is a description`}</span>
              </div>
            </div>
          </>
        )}
      {/* id="191:1710" */}
      {`${state}` === `hover` &&
        `${status}` === `progress` &&
        `${size}` === `dot` && (
          <>
            {/* name="state=hover, status=progress, size=dot" id="191:1710" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "272px",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "var(--size-padding-paddingxs, 8px)",
              }}
            >
              {/* name="Progress Wrapper" id="191:1711" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name=".steps__item_tail" id="191:1712" type="INSTANCE" */}
                <QodeSvg191973
                  style={{ height: "3px", flex: "1 0 0" }}
                  {...{
                    direction: "horizontal",
                    style: "bold",
                    state: "active",
                  }}
                />
                {/* name=".steps__item_progress" id="191:1713" type="INSTANCE" */}
                <QodeSteps
                  style={{
                    display: "flex",
                    width: "10px",
                    height: "10px",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "999px",
                    border:
                      "1px solid var(--border-border-primary-20, #158de2)",
                    background: "var(--background-bg-primary, #1597f4)",
                  }}
                  {...{ step: "2", status: "process", size: "dot" }}
                />
                {/* name=".steps__item_tail" id="191:1714" type="INSTANCE" */}
                <QodeSvg191977
                  style={{ height: "3px", flex: "1 0 0" }}
                  {...{
                    direction: "horizontal",
                    style: "bold",
                    state: "waiting",
                  }}
                />
              </div>
              {/* name="Description Wrapper" id="191:1715" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  gap: "2px",
                  alignSelf: "stretch",
                }}
              >
                <span
                  style={{
                    alignSelf: "stretch",
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    textAlign: "center",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "24px /* 150% */",
                  }}
                >{`In progress`}</span>
                <span
                  style={{
                    alignSelf: "stretch",
                    color: "var(--text-text-neutral-40, #464646)",
                    textAlign: "center",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`This is a description`}</span>
              </div>
            </div>
          </>
        )}
      {/* id="191:1473" */}
      {`${state}` === `default` &&
        `${status}` === `finished` &&
        `${size}` === `custom icon` && (
          <>
            {/* name="state=default, status=finished, size=custom icon" id="191:1473" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "272px",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              {/* name="Step Header" id="191:1474" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name="🎰 icon" id="191:1475" type="INSTANCE" */}
                <Icon.QodeUser
                  style={{
                    width: "var(--line-height-lineheighheading3, 32px)",
                    height: "var(--size-height-controlheight, 32px)",
                  }}
                  {...{}}
                />
                <span
                  style={{
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    textAlign: "center",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Finished`}</span>
                {/* name=".steps__item_tail" id="191:1477" type="INSTANCE" */}
                <QodeSvg191969
                  style={{
                    height: "var(--size-size-size5xs-1px, 1px)",
                    flex: "1 0 0",
                  }}
                  {...{
                    direction: "horizontal",
                    style: "default",
                    state: "active",
                  }}
                />
              </div>
            </div>
          </>
        )}
      {/* id="191:1478" */}
      {`${state}` === `default` &&
        `${status}` === `process` &&
        `${size}` === `custom icon` && (
          <>
            {/* name="state=default, status=process, size=custom icon" id="191:1478" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "272px",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              {/* name="Step Header" id="191:1479" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name="🎰 icon" id="191:1480" type="INSTANCE" */}
                <Icon.QodeUser
                  style={{
                    width: "var(--line-height-lineheighheading3, 32px)",
                    height: "var(--size-height-controlheight, 32px)",
                  }}
                  {...{}}
                />
                <span
                  style={{
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    textAlign: "center",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Process`}</span>
                {/* name=".steps__item_tail" id="191:1482" type="INSTANCE" */}
                <QodeSvg191975
                  style={{
                    height: "var(--size-size-size5xs-1px, 1px)",
                    flex: "1 0 0",
                  }}
                  {...{
                    direction: "horizontal",
                    style: "default",
                    state: "waiting",
                  }}
                />
              </div>
            </div>
          </>
        )}
      {/* id="191:1483" */}
      {`${state}` === `default` &&
        `${status}` === `wait` &&
        `${size}` === `custom icon` && (
          <>
            {/* name="state=default, status=wait, size=custom icon" id="191:1483" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "272px",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              {/* name="Step Header" id="191:1484" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name="🎰 icon" id="191:1485" type="INSTANCE" */}
                <Icon.QodeUser
                  style={{
                    width: "var(--line-height-lineheighheading3, 32px)",
                    height: "var(--size-height-controlheight, 32px)",
                  }}
                  {...{}}
                />
                <span
                  style={{
                    color: "var(--text-text-placeholder, #a7a7a7)",
                    textAlign: "center",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Waiting`}</span>
                {/* name=".steps__item_tail" id="191:1487" type="INSTANCE" */}
                <QodeSvg191975
                  style={{
                    height: "var(--size-size-size5xs-1px, 1px)",
                    flex: "1 0 0",
                  }}
                  {...{
                    direction: "horizontal",
                    style: "default",
                    state: "waiting",
                  }}
                />
              </div>
            </div>
          </>
        )}
      {/* id="191:1488" */}
      {`${state}` === `default` &&
        `${status}` === `error` &&
        `${size}` === `custom icon` && (
          <>
            {/* name="state=default, status=error, size=custom icon" id="191:1488" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "272px",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              {/* name="Step Header" id="191:1489" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name="🎰 icon" id="191:1490" type="INSTANCE" */}
                <Icon.QodeUser
                  style={{
                    width: "var(--line-height-lineheighheading3, 32px)",
                    height: "var(--size-height-controlheight, 32px)",
                  }}
                  {...{}}
                />
                <span
                  style={{
                    color: "var(--text-text-red, #dc3812)",
                    textAlign: "center",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Error`}</span>
                {/* name=".steps__item_tail" id="191:1492" type="INSTANCE" */}
                <QodeSvg191975
                  style={{
                    height: "var(--size-size-size5xs-1px, 1px)",
                    flex: "1 0 0",
                  }}
                  {...{
                    direction: "horizontal",
                    style: "default",
                    state: "waiting",
                  }}
                />
              </div>
            </div>
          </>
        )}
      {/* id="191:1493" */}
      {`${state}` === `default` &&
        `${status}` === `progress` &&
        `${size}` === `custom icon` && (
          <>
            {/* name="state=default, status=progress, size=custom icon" id="191:1493" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "272px",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              {/* name="Step Header" id="191:1494" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name="🎰 icon" id="191:1495" type="INSTANCE" */}
                <Icon.QodeUser
                  style={{
                    width: "var(--line-height-lineheighheading3, 32px)",
                    height: "var(--size-height-controlheight, 32px)",
                  }}
                  {...{}}
                />
                <span
                  style={{
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    textAlign: "center",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`In progress`}</span>
                {/* name=".steps__item_tail" id="191:1497" type="INSTANCE" */}
                <QodeSvg191975
                  style={{
                    height: "var(--size-size-size5xs-1px, 1px)",
                    flex: "1 0 0",
                  }}
                  {...{
                    direction: "horizontal",
                    style: "default",
                    state: "waiting",
                  }}
                />
              </div>
            </div>
          </>
        )}
      {/* id="191:1498" */}
      {`${state}` === `hover` &&
        `${status}` === `finished` &&
        `${size}` === `custom icon` && (
          <>
            {/* name="state=hover, status=finished, size=custom icon" id="191:1498" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "272px",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              {/* name="Step Header" id="191:1499" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name="🎰 icon" id="191:1500" type="INSTANCE" */}
                <Icon.QodeUser
                  style={{
                    width: "var(--line-height-lineheighheading3, 32px)",
                    height: "var(--size-height-controlheight, 32px)",
                  }}
                  {...{}}
                />
                <span
                  style={{
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    textAlign: "center",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Finished`}</span>
                {/* name=".steps__item_tail" id="191:1502" type="INSTANCE" */}
                <QodeSvg191969
                  style={{
                    height: "var(--size-size-size5xs-1px, 1px)",
                    flex: "1 0 0",
                  }}
                  {...{
                    direction: "horizontal",
                    style: "default",
                    state: "active",
                  }}
                />
              </div>
            </div>
          </>
        )}
      {/* id="191:1503" */}
      {`${state}` === `hover` &&
        `${status}` === `process` &&
        `${size}` === `custom icon` && (
          <>
            {/* name="state=hover, status=process, size=custom icon" id="191:1503" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "272px",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              {/* name="Step Header" id="191:1504" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name="🎰 icon" id="191:1505" type="INSTANCE" */}
                <Icon.QodeUser
                  style={{
                    width: "var(--line-height-lineheighheading3, 32px)",
                    height: "var(--size-height-controlheight, 32px)",
                  }}
                  {...{}}
                />
                <span
                  style={{
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    textAlign: "center",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Process`}</span>
                {/* name=".steps__item_tail" id="191:1507" type="INSTANCE" */}
                <QodeSvg191975
                  style={{
                    height: "var(--size-size-size5xs-1px, 1px)",
                    flex: "1 0 0",
                  }}
                  {...{
                    direction: "horizontal",
                    style: "default",
                    state: "waiting",
                  }}
                />
              </div>
            </div>
          </>
        )}
      {/* id="191:1508" */}
      {`${state}` === `hover` &&
        `${status}` === `wait` &&
        `${size}` === `custom icon` && (
          <>
            {/* name="state=hover, status=wait, size=custom icon" id="191:1508" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "272px",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              {/* name="Step Header" id="191:1509" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name="🎰 icon" id="191:1510" type="INSTANCE" */}
                <Icon.QodeUser
                  style={{
                    width: "var(--line-height-lineheighheading3, 32px)",
                    height: "var(--size-height-controlheight, 32px)",
                  }}
                  {...{}}
                />
                <span
                  style={{
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    textAlign: "center",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Waiting`}</span>
                {/* name=".steps__item_tail" id="191:1512" type="INSTANCE" */}
                <QodeSvg191975
                  style={{
                    height: "var(--size-size-size5xs-1px, 1px)",
                    flex: "1 0 0",
                  }}
                  {...{
                    direction: "horizontal",
                    style: "default",
                    state: "waiting",
                  }}
                />
              </div>
            </div>
          </>
        )}
      {/* id="191:1513" */}
      {`${state}` === `hover` &&
        `${status}` === `error` &&
        `${size}` === `custom icon` && (
          <>
            {/* name="state=hover, status=error, size=custom icon" id="191:1513" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "272px",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              {/* name="Step Header" id="191:1514" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name="🎰 icon" id="191:1515" type="INSTANCE" */}
                <Icon.QodeUser
                  style={{
                    width: "var(--line-height-lineheighheading3, 32px)",
                    height: "var(--size-height-controlheight, 32px)",
                  }}
                  {...{}}
                />
                <span
                  style={{
                    color: "var(--text-text-red, #dc3812)",
                    textAlign: "center",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Error`}</span>
                {/* name=".steps__item_tail" id="191:1517" type="INSTANCE" */}
                <QodeSvg191975
                  style={{
                    height: "var(--size-size-size5xs-1px, 1px)",
                    flex: "1 0 0",
                  }}
                  {...{
                    direction: "horizontal",
                    style: "default",
                    state: "waiting",
                  }}
                />
              </div>
            </div>
          </>
        )}
      {/* id="191:1518" */}
      {`${state}` === `hover` &&
        `${status}` === `progress` &&
        `${size}` === `custom icon` && (
          <>
            {/* name="state=hover, status=progress, size=custom icon" id="191:1518" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "272px",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              {/* name="Step Header" id="191:1519" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name="🎰 icon" id="191:1520" type="INSTANCE" */}
                <Icon.QodeUser
                  style={{
                    width: "var(--line-height-lineheighheading3, 32px)",
                    height: "var(--size-height-controlheight, 32px)",
                  }}
                  {...{}}
                />
                <span
                  style={{
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    textAlign: "center",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`In progress`}</span>
                {/* name=".steps__item_tail" id="191:1522" type="INSTANCE" */}
                <QodeSvg191975
                  style={{
                    height: "var(--size-size-size5xs-1px, 1px)",
                    flex: "1 0 0",
                  }}
                  {...{
                    direction: "horizontal",
                    style: "default",
                    state: "waiting",
                  }}
                />
              </div>
            </div>
          </>
        )}
    </>
  )
}
