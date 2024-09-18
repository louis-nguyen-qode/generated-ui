// id="607:41361"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeSteps } from "@designSystem/ant/QodeSteps"
import { QodeCustom191970 } from "@designSystem/custom/QodeCustom191970"

export interface QodeCustom60741361Props {
  icon?: React.ReactNode
  description?: string
  showDescription?: boolean
  state?: "default" | "hover"
  status?: "finished" | "process" | "wait" | "error" | "progress"
  size?: "basic" | "small" | "dot" | "custom icon"
}

export const QodeCustom60741361: React.FC<
  QodeCustom60741361Props & { style?: CSSProperties }
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
      {/* name="Stepper" id="607:41361" type="COMPONENT_SET" */}
      {/* id="607:41362" */}
      {`${state}` === `default` &&
        `${status}` === `finished` &&
        `${size}` === `basic` && (
          <>
            {/* name="state=default, status=finished, size=basic" id="607:41362" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "272px",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              {/* name="Step Header" id="607:41402" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name=".steps__item_progress" id="607:41403" type="INSTANCE" */}
                <QodeSteps
                  style={{
                    display: "flex",
                    width: "32px",
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
                {/* name=".steps__item_tail" id="607:41405" type="INSTANCE" */}
                <QodeCustom191970
                  style={{
                    height: "var(--size-size-size5xs-1px, 1px)",
                    flex: "1 0 0",
                  }}
                  {...{
                    direction: "horizontal",
                    _style: "default",
                    state: "active",
                  }}
                />
              </div>
              {/* name="Description Wrapper" id="607:41406" type="FRAME" */}
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
      {/* id="607:41363" */}
      {`${state}` === `default` &&
        `${status}` === `process` &&
        `${size}` === `basic` && (
          <>
            {/* name="state=default, status=process, size=basic" id="607:41363" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "272px",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              {/* name="Step Header" id="607:41408" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name=".steps__item_progress" id="607:41409" type="INSTANCE" */}
                <QodeSteps
                  style={{
                    display: "flex",
                    width: "32px",
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
                {/* name=".steps__item_tail" id="607:41411" type="INSTANCE" */}
                <QodeCustom191970
                  style={{
                    height: "var(--size-size-size5xs-1px, 1px)",
                    flex: "1 0 0",
                  }}
                  {...{
                    direction: "horizontal",
                    _style: "default",
                    state: "waiting",
                  }}
                />
              </div>
              {/* name="Description Wrapper" id="607:41412" type="FRAME" */}
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
      {/* id="607:41364" */}
      {`${state}` === `default` &&
        `${status}` === `wait` &&
        `${size}` === `basic` && (
          <>
            {/* name="state=default, status=wait, size=basic" id="607:41364" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "272px",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              {/* name="Step Header" id="607:41414" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name=".steps__item_progress" id="607:41415" type="INSTANCE" */}
                <QodeSteps
                  style={{
                    display: "flex",
                    width: "32px",
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
                {/* name=".steps__item_tail" id="607:41417" type="INSTANCE" */}
                <QodeCustom191970
                  style={{
                    height: "var(--size-size-size5xs-1px, 1px)",
                    flex: "1 0 0",
                  }}
                  {...{
                    direction: "horizontal",
                    _style: "default",
                    state: "waiting",
                  }}
                />
              </div>
              {/* name="Description Wrapper" id="607:41418" type="FRAME" */}
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
      {/* id="607:41365" */}
      {`${state}` === `default` &&
        `${status}` === `error` &&
        `${size}` === `basic` && (
          <>
            {/* name="state=default, status=error, size=basic" id="607:41365" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "272px",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              {/* name="Step Header" id="607:41420" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name=".steps__item_progress" id="607:41421" type="INSTANCE" */}
                <QodeSteps
                  style={{
                    display: "flex",
                    width: "32px",
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
                {/* name=".steps__item_tail" id="607:41423" type="INSTANCE" */}
                <QodeCustom191970
                  style={{
                    height: "var(--size-size-size5xs-1px, 1px)",
                    flex: "1 0 0",
                  }}
                  {...{
                    direction: "horizontal",
                    _style: "default",
                    state: "waiting",
                  }}
                />
              </div>
              {/* name="Description Wrapper" id="607:41424" type="FRAME" */}
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
      {/* id="607:41366" */}
      {`${state}` === `default` &&
        `${status}` === `progress` &&
        `${size}` === `basic` && (
          <>
            {/* name="state=default, status=progress, size=basic" id="607:41366" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "272px",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              {/* name="Step Header" id="607:41426" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name=".steps__item_progress" id="607:41427" type="INSTANCE" */}
                <QodeSteps
                  style={{
                    display: "flex",
                    width: "32px",
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
                {/* name=".steps__item_tail" id="607:41429" type="INSTANCE" */}
                <QodeCustom191970
                  style={{
                    height: "var(--size-size-size5xs-1px, 1px)",
                    flex: "1 0 0",
                  }}
                  {...{
                    direction: "horizontal",
                    _style: "default",
                    state: "waiting",
                  }}
                />
              </div>
              {/* name="Description Wrapper" id="607:41430" type="FRAME" */}
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
      {/* id="607:41367" */}
      {`${state}` === `hover` &&
        `${status}` === `finished` &&
        `${size}` === `basic` && (
          <>
            {/* name="state=hover, status=finished, size=basic" id="607:41367" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "272px",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              {/* name="Step Header" id="607:41432" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name=".steps__item_progress" id="607:41433" type="INSTANCE" */}
                <QodeSteps
                  style={{
                    display: "flex",
                    width: "32px",
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
                {/* name=".steps__item_tail" id="607:41435" type="INSTANCE" */}
                <QodeCustom191970
                  style={{
                    height: "var(--size-size-size5xs-1px, 1px)",
                    flex: "1 0 0",
                  }}
                  {...{
                    direction: "horizontal",
                    _style: "default",
                    state: "active",
                  }}
                />
              </div>
              {/* name="Description Wrapper" id="607:41436" type="FRAME" */}
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
      {/* id="607:41368" */}
      {`${state}` === `hover` &&
        `${status}` === `process` &&
        `${size}` === `basic` && (
          <>
            {/* name="state=hover, status=process, size=basic" id="607:41368" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "272px",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              {/* name="Step Header" id="607:41438" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name=".steps__item_progress" id="607:41439" type="INSTANCE" */}
                <QodeSteps
                  style={{
                    display: "flex",
                    width: "32px",
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
                {/* name=".steps__item_tail" id="607:41441" type="INSTANCE" */}
                <QodeCustom191970
                  style={{
                    height: "var(--size-size-size5xs-1px, 1px)",
                    flex: "1 0 0",
                  }}
                  {...{
                    direction: "horizontal",
                    _style: "default",
                    state: "waiting",
                  }}
                />
              </div>
              {/* name="Description Wrapper" id="607:41442" type="FRAME" */}
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
      {/* id="607:41369" */}
      {`${state}` === `hover` &&
        `${status}` === `wait` &&
        `${size}` === `basic` && (
          <>
            {/* name="state=hover, status=wait, size=basic" id="607:41369" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "272px",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              {/* name="Step Header" id="607:41444" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name=".steps__item_progress" id="607:41445" type="INSTANCE" */}
                <QodeSteps
                  style={{
                    display: "flex",
                    width: "32px",
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
                {/* name=".steps__item_tail" id="607:41447" type="INSTANCE" */}
                <QodeCustom191970
                  style={{
                    height: "var(--size-size-size5xs-1px, 1px)",
                    flex: "1 0 0",
                  }}
                  {...{
                    direction: "horizontal",
                    _style: "default",
                    state: "waiting",
                  }}
                />
              </div>
              {/* name="Description Wrapper" id="607:41448" type="FRAME" */}
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
      {/* id="607:41370" */}
      {`${state}` === `hover` &&
        `${status}` === `error` &&
        `${size}` === `basic` && (
          <>
            {/* name="state=hover, status=error, size=basic" id="607:41370" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "272px",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              {/* name="Step Header" id="607:41450" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name=".steps__item_progress" id="607:41451" type="INSTANCE" */}
                <QodeSteps
                  style={{
                    display: "flex",
                    width: "32px",
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
                {/* name=".steps__item_tail" id="607:41453" type="INSTANCE" */}
                <QodeCustom191970
                  style={{
                    height: "var(--size-size-size5xs-1px, 1px)",
                    flex: "1 0 0",
                  }}
                  {...{
                    direction: "horizontal",
                    _style: "default",
                    state: "waiting",
                  }}
                />
              </div>
              {/* name="Description Wrapper" id="607:41454" type="FRAME" */}
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
      {/* id="607:41371" */}
      {`${state}` === `hover` &&
        `${status}` === `progress` &&
        `${size}` === `basic` && (
          <>
            {/* name="state=hover, status=progress, size=basic" id="607:41371" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "272px",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              {/* name="Step Header" id="607:41456" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name=".steps__item_progress" id="607:41457" type="INSTANCE" */}
                <QodeSteps
                  style={{
                    display: "flex",
                    width: "32px",
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
                {/* name=".steps__item_tail" id="607:41459" type="INSTANCE" */}
                <QodeCustom191970
                  style={{
                    height: "var(--size-size-size5xs-1px, 1px)",
                    flex: "1 0 0",
                  }}
                  {...{
                    direction: "horizontal",
                    _style: "default",
                    state: "waiting",
                  }}
                />
              </div>
              {/* name="Description Wrapper" id="607:41460" type="FRAME" */}
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
      {/* id="607:41372" */}
      {`${state}` === `default` &&
        `${status}` === `finished` &&
        `${size}` === `small` && (
          <>
            {/* name="state=default, status=finished, size=small" id="607:41372" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "272px",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              {/* name="Step Header" id="607:41462" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name=".steps__item_progress" id="607:41463" type="INSTANCE" */}
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
                {/* name=".steps__item_tail" id="607:41465" type="INSTANCE" */}
                <QodeCustom191970
                  style={{
                    height: "var(--size-size-size5xs-1px, 1px)",
                    flex: "1 0 0",
                  }}
                  {...{
                    direction: "horizontal",
                    _style: "default",
                    state: "active",
                  }}
                />
              </div>
            </div>
          </>
        )}
      {/* id="607:41373" */}
      {`${state}` === `default` &&
        `${status}` === `process` &&
        `${size}` === `small` && (
          <>
            {/* name="state=default, status=process, size=small" id="607:41373" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "272px",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              {/* name="Step Header" id="607:41466" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name=".steps__item_progress" id="607:41467" type="INSTANCE" */}
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
                {/* name=".steps__item_tail" id="607:41469" type="INSTANCE" */}
                <QodeCustom191970
                  style={{
                    height: "var(--size-size-size5xs-1px, 1px)",
                    flex: "1 0 0",
                  }}
                  {...{
                    direction: "horizontal",
                    _style: "default",
                    state: "waiting",
                  }}
                />
              </div>
            </div>
          </>
        )}
      {/* id="607:41374" */}
      {`${state}` === `default` &&
        `${status}` === `wait` &&
        `${size}` === `small` && (
          <>
            {/* name="state=default, status=wait, size=small" id="607:41374" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "272px",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              {/* name="Step Header" id="607:41470" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name=".steps__item_progress" id="607:41471" type="INSTANCE" */}
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
                {/* name=".steps__item_tail" id="607:41473" type="INSTANCE" */}
                <QodeCustom191970
                  style={{
                    height: "var(--size-size-size5xs-1px, 1px)",
                    flex: "1 0 0",
                  }}
                  {...{
                    direction: "horizontal",
                    _style: "default",
                    state: "waiting",
                  }}
                />
              </div>
            </div>
          </>
        )}
      {/* id="607:41375" */}
      {`${state}` === `default` &&
        `${status}` === `error` &&
        `${size}` === `small` && (
          <>
            {/* name="state=default, status=error, size=small" id="607:41375" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "272px",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              {/* name="Step Header" id="607:41474" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name=".steps__item_progress" id="607:41475" type="INSTANCE" */}
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
                {/* name=".steps__item_tail" id="607:41477" type="INSTANCE" */}
                <QodeCustom191970
                  style={{
                    height: "var(--size-size-size5xs-1px, 1px)",
                    flex: "1 0 0",
                  }}
                  {...{
                    direction: "horizontal",
                    _style: "default",
                    state: "waiting",
                  }}
                />
              </div>
            </div>
          </>
        )}
      {/* id="607:41376" */}
      {`${state}` === `default` &&
        `${status}` === `progress` &&
        `${size}` === `small` && (
          <>
            {/* name="state=default, status=progress, size=small" id="607:41376" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "272px",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              {/* name="Step Header" id="607:41478" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name=".steps__item_progress" id="607:41479" type="INSTANCE" */}
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
                {/* name=".steps__item_tail" id="607:41481" type="INSTANCE" */}
                <QodeCustom191970
                  style={{
                    height: "var(--size-size-size5xs-1px, 1px)",
                    flex: "1 0 0",
                  }}
                  {...{
                    direction: "horizontal",
                    _style: "default",
                    state: "waiting",
                  }}
                />
              </div>
            </div>
          </>
        )}
      {/* id="607:41377" */}
      {`${state}` === `hover` &&
        `${status}` === `finished` &&
        `${size}` === `small` && (
          <>
            {/* name="state=hover, status=finished, size=small" id="607:41377" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "272px",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              {/* name="Step Header" id="607:41482" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name=".steps__item_progress" id="607:41483" type="INSTANCE" */}
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
                {/* name=".steps__item_tail" id="607:41485" type="INSTANCE" */}
                <QodeCustom191970
                  style={{
                    height: "var(--size-size-size5xs-1px, 1px)",
                    flex: "1 0 0",
                  }}
                  {...{
                    direction: "horizontal",
                    _style: "default",
                    state: "active",
                  }}
                />
              </div>
            </div>
          </>
        )}
      {/* id="607:41378" */}
      {`${state}` === `hover` &&
        `${status}` === `process` &&
        `${size}` === `small` && (
          <>
            {/* name="state=hover, status=process, size=small" id="607:41378" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "272px",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              {/* name="Step Header" id="607:41486" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name=".steps__item_progress" id="607:41487" type="INSTANCE" */}
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
                {/* name=".steps__item_tail" id="607:41489" type="INSTANCE" */}
                <QodeCustom191970
                  style={{
                    height: "var(--size-size-size5xs-1px, 1px)",
                    flex: "1 0 0",
                  }}
                  {...{
                    direction: "horizontal",
                    _style: "default",
                    state: "waiting",
                  }}
                />
              </div>
            </div>
          </>
        )}
      {/* id="607:41379" */}
      {`${state}` === `hover` &&
        `${status}` === `wait` &&
        `${size}` === `small` && (
          <>
            {/* name="state=hover, status=wait, size=small" id="607:41379" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "272px",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              {/* name="Step Header" id="607:41490" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name=".steps__item_progress" id="607:41491" type="INSTANCE" */}
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
                {/* name=".steps__item_tail" id="607:41493" type="INSTANCE" */}
                <QodeCustom191970
                  style={{
                    height: "var(--size-size-size5xs-1px, 1px)",
                    flex: "1 0 0",
                  }}
                  {...{
                    direction: "horizontal",
                    _style: "default",
                    state: "waiting",
                  }}
                />
              </div>
            </div>
          </>
        )}
      {/* id="607:41380" */}
      {`${state}` === `hover` &&
        `${status}` === `error` &&
        `${size}` === `small` && (
          <>
            {/* name="state=hover, status=error, size=small" id="607:41380" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "272px",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              {/* name="Step Header" id="607:41494" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name=".steps__item_progress" id="607:41495" type="INSTANCE" */}
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
                {/* name=".steps__item_tail" id="607:41497" type="INSTANCE" */}
                <QodeCustom191970
                  style={{
                    height: "var(--size-size-size5xs-1px, 1px)",
                    flex: "1 0 0",
                  }}
                  {...{
                    direction: "horizontal",
                    _style: "default",
                    state: "waiting",
                  }}
                />
              </div>
            </div>
          </>
        )}
      {/* id="607:41381" */}
      {`${state}` === `hover` &&
        `${status}` === `progress` &&
        `${size}` === `small` && (
          <>
            {/* name="state=hover, status=progress, size=small" id="607:41381" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "272px",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              {/* name="Step Header" id="607:41498" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name=".steps__item_progress" id="607:41499" type="INSTANCE" */}
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
                {/* name=".steps__item_tail" id="607:41501" type="INSTANCE" */}
                <QodeCustom191970
                  style={{
                    height: "var(--size-size-size5xs-1px, 1px)",
                    flex: "1 0 0",
                  }}
                  {...{
                    direction: "horizontal",
                    _style: "default",
                    state: "waiting",
                  }}
                />
              </div>
            </div>
          </>
        )}
      {/* id="607:41382" */}
      {`${state}` === `default` &&
        `${status}` === `finished` &&
        `${size}` === `dot` && (
          <>
            {/* name="state=default, status=finished, size=dot" id="607:41382" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "272px",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "var(--size-padding-paddingxs, 8px)",
              }}
            >
              {/* name="Progress Wrapper" id="607:41502" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name=".steps__item_tail" id="607:41503" type="INSTANCE" */}
                <QodeCustom191970
                  style={{ height: "3px", flex: "1 0 0" }}
                  {...{
                    direction: "horizontal",
                    _style: "bold",
                    state: "active",
                  }}
                />
                {/* name=".steps__item_progress" id="607:41504" type="INSTANCE" */}
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
                {/* name=".steps__item_tail" id="607:41505" type="INSTANCE" */}
                <QodeCustom191970
                  style={{ height: "3px", flex: "1 0 0" }}
                  {...{
                    direction: "horizontal",
                    _style: "bold",
                    state: "active",
                  }}
                />
              </div>
              {/* name="Description Wrapper" id="607:41506" type="FRAME" */}
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
      {/* id="607:41383" */}
      {`${state}` === `default` &&
        `${status}` === `process` &&
        `${size}` === `dot` && (
          <>
            {/* name="state=default, status=process, size=dot" id="607:41383" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "272px",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "var(--size-padding-paddingxs, 8px)",
              }}
            >
              {/* name="Progress Wrapper" id="607:41509" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name=".steps__item_tail" id="607:41510" type="INSTANCE" */}
                <QodeCustom191970
                  style={{ height: "3px", flex: "1 0 0" }}
                  {...{
                    direction: "horizontal",
                    _style: "bold",
                    state: "active",
                  }}
                />
                {/* name=".steps__item_progress" id="607:41511" type="INSTANCE" */}
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
                {/* name=".steps__item_tail" id="607:41512" type="INSTANCE" */}
                <QodeCustom191970
                  style={{ height: "3px", flex: "1 0 0" }}
                  {...{
                    direction: "horizontal",
                    _style: "bold",
                    state: "waiting",
                  }}
                />
              </div>
              {/* name="Description Wrapper" id="607:41513" type="FRAME" */}
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
      {/* id="607:41384" */}
      {`${state}` === `default` &&
        `${status}` === `wait` &&
        `${size}` === `dot` && (
          <>
            {/* name="state=default, status=wait, size=dot" id="607:41384" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "272px",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "var(--size-padding-paddingxs, 8px)",
              }}
            >
              {/* name="Progress Wrapper" id="607:41516" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name=".steps__item_tail" id="607:41517" type="INSTANCE" */}
                <QodeCustom191970
                  style={{ height: "3px", flex: "1 0 0" }}
                  {...{
                    direction: "horizontal",
                    _style: "bold",
                    state: "waiting",
                  }}
                />
                {/* name=".steps__item_progress" id="607:41518" type="INSTANCE" */}
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
                {/* name=".steps__item_tail" id="607:41519" type="INSTANCE" */}
                <QodeCustom191970
                  style={{ height: "3px", flex: "1 0 0" }}
                  {...{
                    direction: "horizontal",
                    _style: "bold",
                    state: "waiting",
                  }}
                />
              </div>
              {/* name="Description Wrapper" id="607:41520" type="FRAME" */}
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
      {/* id="607:41385" */}
      {`${state}` === `default` &&
        `${status}` === `error` &&
        `${size}` === `dot` && (
          <>
            {/* name="state=default, status=error, size=dot" id="607:41385" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "272px",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "var(--size-padding-paddingxs, 8px)",
              }}
            >
              {/* name="Progress Wrapper" id="607:41523" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name=".steps__item_tail" id="607:41524" type="INSTANCE" */}
                <QodeCustom191970
                  style={{ height: "3px", flex: "1 0 0" }}
                  {...{
                    direction: "horizontal",
                    _style: "bold",
                    state: "waiting",
                  }}
                />
                {/* name=".steps__item_progress" id="607:41525" type="INSTANCE" */}
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
                {/* name=".steps__item_tail" id="607:41526" type="INSTANCE" */}
                <QodeCustom191970
                  style={{ height: "3px", flex: "1 0 0" }}
                  {...{
                    direction: "horizontal",
                    _style: "bold",
                    state: "waiting",
                  }}
                />
              </div>
              {/* name="Description Wrapper" id="607:41527" type="FRAME" */}
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
      {/* id="607:41386" */}
      {`${state}` === `default` &&
        `${status}` === `progress` &&
        `${size}` === `dot` && (
          <>
            {/* name="state=default, status=progress, size=dot" id="607:41386" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "272px",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "var(--size-padding-paddingxs, 8px)",
              }}
            >
              {/* name="Progress Wrapper" id="607:41530" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name=".steps__item_tail" id="607:41531" type="INSTANCE" */}
                <QodeCustom191970
                  style={{ height: "3px", flex: "1 0 0" }}
                  {...{
                    direction: "horizontal",
                    _style: "bold",
                    state: "active",
                  }}
                />
                {/* name=".steps__item_progress" id="607:41532" type="INSTANCE" */}
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
                {/* name=".steps__item_tail" id="607:41533" type="INSTANCE" */}
                <QodeCustom191970
                  style={{ height: "3px", flex: "1 0 0" }}
                  {...{
                    direction: "horizontal",
                    _style: "bold",
                    state: "waiting",
                  }}
                />
              </div>
              {/* name="Description Wrapper" id="607:41534" type="FRAME" */}
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
      {/* id="607:41387" */}
      {`${state}` === `hover` &&
        `${status}` === `finished` &&
        `${size}` === `dot` && (
          <>
            {/* name="state=hover, status=finished, size=dot" id="607:41387" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "272px",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "var(--size-padding-paddingxs, 8px)",
              }}
            >
              {/* name="Progress Wrapper" id="607:41537" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name=".steps__item_tail" id="607:41538" type="INSTANCE" */}
                <QodeCustom191970
                  style={{ height: "3px", flex: "1 0 0" }}
                  {...{
                    direction: "horizontal",
                    _style: "bold",
                    state: "active",
                  }}
                />
                {/* name=".steps__item_progress" id="607:41539" type="INSTANCE" */}
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
                {/* name=".steps__item_tail" id="607:41540" type="INSTANCE" */}
                <QodeCustom191970
                  style={{ height: "3px", flex: "1 0 0" }}
                  {...{
                    direction: "horizontal",
                    _style: "bold",
                    state: "active",
                  }}
                />
              </div>
              {/* name="Description Wrapper" id="607:41541" type="FRAME" */}
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
      {/* id="607:41388" */}
      {`${state}` === `hover` &&
        `${status}` === `process` &&
        `${size}` === `dot` && (
          <>
            {/* name="state=hover, status=process, size=dot" id="607:41388" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "272px",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "var(--size-padding-paddingxs, 8px)",
              }}
            >
              {/* name="Progress Wrapper" id="607:41544" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name=".steps__item_tail" id="607:41545" type="INSTANCE" */}
                <QodeCustom191970
                  style={{ height: "3px", flex: "1 0 0" }}
                  {...{
                    direction: "horizontal",
                    _style: "bold",
                    state: "active",
                  }}
                />
                {/* name=".steps__item_progress" id="607:41546" type="INSTANCE" */}
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
                {/* name=".steps__item_tail" id="607:41547" type="INSTANCE" */}
                <QodeCustom191970
                  style={{ height: "3px", flex: "1 0 0" }}
                  {...{
                    direction: "horizontal",
                    _style: "bold",
                    state: "waiting",
                  }}
                />
              </div>
              {/* name="Description Wrapper" id="607:41548" type="FRAME" */}
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
      {/* id="607:41389" */}
      {`${state}` === `hover` &&
        `${status}` === `wait` &&
        `${size}` === `dot` && (
          <>
            {/* name="state=hover, status=wait, size=dot" id="607:41389" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "272px",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "var(--size-padding-paddingxs, 8px)",
              }}
            >
              {/* name="Progress Wrapper" id="607:41551" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name=".steps__item_tail" id="607:41552" type="INSTANCE" */}
                <QodeCustom191970
                  style={{ height: "3px", flex: "1 0 0" }}
                  {...{
                    direction: "horizontal",
                    _style: "bold",
                    state: "waiting",
                  }}
                />
                {/* name=".steps__item_progress" id="607:41553" type="INSTANCE" */}
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
                {/* name=".steps__item_tail" id="607:41554" type="INSTANCE" */}
                <QodeCustom191970
                  style={{ height: "3px", flex: "1 0 0" }}
                  {...{
                    direction: "horizontal",
                    _style: "bold",
                    state: "waiting",
                  }}
                />
              </div>
              {/* name="Description Wrapper" id="607:41555" type="FRAME" */}
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
      {/* id="607:41390" */}
      {`${state}` === `hover` &&
        `${status}` === `error` &&
        `${size}` === `dot` && (
          <>
            {/* name="state=hover, status=error, size=dot" id="607:41390" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "272px",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "var(--size-padding-paddingxs, 8px)",
              }}
            >
              {/* name="Progress Wrapper" id="607:41558" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name=".steps__item_tail" id="607:41559" type="INSTANCE" */}
                <QodeCustom191970
                  style={{ height: "3px", flex: "1 0 0" }}
                  {...{
                    direction: "horizontal",
                    _style: "bold",
                    state: "waiting",
                  }}
                />
                {/* name=".steps__item_progress" id="607:41560" type="INSTANCE" */}
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
                {/* name=".steps__item_tail" id="607:41561" type="INSTANCE" */}
                <QodeCustom191970
                  style={{ height: "3px", flex: "1 0 0" }}
                  {...{
                    direction: "horizontal",
                    _style: "bold",
                    state: "waiting",
                  }}
                />
              </div>
              {/* name="Description Wrapper" id="607:41562" type="FRAME" */}
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
      {/* id="607:41391" */}
      {`${state}` === `hover` &&
        `${status}` === `progress` &&
        `${size}` === `dot` && (
          <>
            {/* name="state=hover, status=progress, size=dot" id="607:41391" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "272px",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "var(--size-padding-paddingxs, 8px)",
              }}
            >
              {/* name="Progress Wrapper" id="607:41565" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name=".steps__item_tail" id="607:41566" type="INSTANCE" */}
                <QodeCustom191970
                  style={{ height: "3px", flex: "1 0 0" }}
                  {...{
                    direction: "horizontal",
                    _style: "bold",
                    state: "active",
                  }}
                />
                {/* name=".steps__item_progress" id="607:41567" type="INSTANCE" */}
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
                {/* name=".steps__item_tail" id="607:41568" type="INSTANCE" */}
                <QodeCustom191970
                  style={{ height: "3px", flex: "1 0 0" }}
                  {...{
                    direction: "horizontal",
                    _style: "bold",
                    state: "waiting",
                  }}
                />
              </div>
              {/* name="Description Wrapper" id="607:41569" type="FRAME" */}
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
      {/* id="607:41392" */}
      {`${state}` === `default` &&
        `${status}` === `finished` &&
        `${size}` === `custom icon` && (
          <>
            {/* name="state=default, status=finished, size=custom icon" id="607:41392" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "272px",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              {/* name="Step Header" id="607:41572" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name="🎰 icon" id="607:41573" type="INSTANCE" */}
                <Icon.QodeUser
                  style={{
                    width: "32px",
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
                {/* name=".steps__item_tail" id="607:41575" type="INSTANCE" */}
                <QodeCustom191970
                  style={{
                    height: "var(--size-size-size5xs-1px, 1px)",
                    flex: "1 0 0",
                  }}
                  {...{
                    direction: "horizontal",
                    _style: "default",
                    state: "active",
                  }}
                />
              </div>
            </div>
          </>
        )}
      {/* id="607:41393" */}
      {`${state}` === `default` &&
        `${status}` === `process` &&
        `${size}` === `custom icon` && (
          <>
            {/* name="state=default, status=process, size=custom icon" id="607:41393" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "272px",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              {/* name="Step Header" id="607:41576" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name="🎰 icon" id="607:41577" type="INSTANCE" */}
                <Icon.QodeUser
                  style={{
                    width: "32px",
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
                {/* name=".steps__item_tail" id="607:41579" type="INSTANCE" */}
                <QodeCustom191970
                  style={{
                    height: "var(--size-size-size5xs-1px, 1px)",
                    flex: "1 0 0",
                  }}
                  {...{
                    direction: "horizontal",
                    _style: "default",
                    state: "waiting",
                  }}
                />
              </div>
            </div>
          </>
        )}
      {/* id="607:41394" */}
      {`${state}` === `default` &&
        `${status}` === `wait` &&
        `${size}` === `custom icon` && (
          <>
            {/* name="state=default, status=wait, size=custom icon" id="607:41394" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "272px",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              {/* name="Step Header" id="607:41580" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name="🎰 icon" id="607:41581" type="INSTANCE" */}
                <Icon.QodeUser
                  style={{
                    width: "32px",
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
                {/* name=".steps__item_tail" id="607:41583" type="INSTANCE" */}
                <QodeCustom191970
                  style={{
                    height: "var(--size-size-size5xs-1px, 1px)",
                    flex: "1 0 0",
                  }}
                  {...{
                    direction: "horizontal",
                    _style: "default",
                    state: "waiting",
                  }}
                />
              </div>
            </div>
          </>
        )}
      {/* id="607:41395" */}
      {`${state}` === `default` &&
        `${status}` === `error` &&
        `${size}` === `custom icon` && (
          <>
            {/* name="state=default, status=error, size=custom icon" id="607:41395" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "272px",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              {/* name="Step Header" id="607:41584" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name="🎰 icon" id="607:41585" type="INSTANCE" */}
                <Icon.QodeUser
                  style={{
                    width: "32px",
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
                {/* name=".steps__item_tail" id="607:41587" type="INSTANCE" */}
                <QodeCustom191970
                  style={{
                    height: "var(--size-size-size5xs-1px, 1px)",
                    flex: "1 0 0",
                  }}
                  {...{
                    direction: "horizontal",
                    _style: "default",
                    state: "waiting",
                  }}
                />
              </div>
            </div>
          </>
        )}
      {/* id="607:41396" */}
      {`${state}` === `default` &&
        `${status}` === `progress` &&
        `${size}` === `custom icon` && (
          <>
            {/* name="state=default, status=progress, size=custom icon" id="607:41396" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "272px",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              {/* name="Step Header" id="607:41588" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name="🎰 icon" id="607:41589" type="INSTANCE" */}
                <Icon.QodeUser
                  style={{
                    width: "32px",
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
                {/* name=".steps__item_tail" id="607:41591" type="INSTANCE" */}
                <QodeCustom191970
                  style={{
                    height: "var(--size-size-size5xs-1px, 1px)",
                    flex: "1 0 0",
                  }}
                  {...{
                    direction: "horizontal",
                    _style: "default",
                    state: "waiting",
                  }}
                />
              </div>
            </div>
          </>
        )}
      {/* id="607:41397" */}
      {`${state}` === `hover` &&
        `${status}` === `finished` &&
        `${size}` === `custom icon` && (
          <>
            {/* name="state=hover, status=finished, size=custom icon" id="607:41397" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "272px",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              {/* name="Step Header" id="607:41592" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name="🎰 icon" id="607:41593" type="INSTANCE" */}
                <Icon.QodeUser
                  style={{
                    width: "32px",
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
                {/* name=".steps__item_tail" id="607:41595" type="INSTANCE" */}
                <QodeCustom191970
                  style={{
                    height: "var(--size-size-size5xs-1px, 1px)",
                    flex: "1 0 0",
                  }}
                  {...{
                    direction: "horizontal",
                    _style: "default",
                    state: "active",
                  }}
                />
              </div>
            </div>
          </>
        )}
      {/* id="607:41398" */}
      {`${state}` === `hover` &&
        `${status}` === `process` &&
        `${size}` === `custom icon` && (
          <>
            {/* name="state=hover, status=process, size=custom icon" id="607:41398" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "272px",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              {/* name="Step Header" id="607:41596" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name="🎰 icon" id="607:41597" type="INSTANCE" */}
                <Icon.QodeUser
                  style={{
                    width: "32px",
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
                {/* name=".steps__item_tail" id="607:41599" type="INSTANCE" */}
                <QodeCustom191970
                  style={{
                    height: "var(--size-size-size5xs-1px, 1px)",
                    flex: "1 0 0",
                  }}
                  {...{
                    direction: "horizontal",
                    _style: "default",
                    state: "waiting",
                  }}
                />
              </div>
            </div>
          </>
        )}
      {/* id="607:41399" */}
      {`${state}` === `hover` &&
        `${status}` === `wait` &&
        `${size}` === `custom icon` && (
          <>
            {/* name="state=hover, status=wait, size=custom icon" id="607:41399" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "272px",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              {/* name="Step Header" id="607:41600" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name="🎰 icon" id="607:41601" type="INSTANCE" */}
                <Icon.QodeUser
                  style={{
                    width: "32px",
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
                {/* name=".steps__item_tail" id="607:41603" type="INSTANCE" */}
                <QodeCustom191970
                  style={{
                    height: "var(--size-size-size5xs-1px, 1px)",
                    flex: "1 0 0",
                  }}
                  {...{
                    direction: "horizontal",
                    _style: "default",
                    state: "waiting",
                  }}
                />
              </div>
            </div>
          </>
        )}
      {/* id="607:41400" */}
      {`${state}` === `hover` &&
        `${status}` === `error` &&
        `${size}` === `custom icon` && (
          <>
            {/* name="state=hover, status=error, size=custom icon" id="607:41400" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "272px",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              {/* name="Step Header" id="607:41604" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name="🎰 icon" id="607:41605" type="INSTANCE" */}
                <Icon.QodeUser
                  style={{
                    width: "32px",
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
                {/* name=".steps__item_tail" id="607:41607" type="INSTANCE" */}
                <QodeCustom191970
                  style={{
                    height: "var(--size-size-size5xs-1px, 1px)",
                    flex: "1 0 0",
                  }}
                  {...{
                    direction: "horizontal",
                    _style: "default",
                    state: "waiting",
                  }}
                />
              </div>
            </div>
          </>
        )}
      {/* id="607:41401" */}
      {`${state}` === `hover` &&
        `${status}` === `progress` &&
        `${size}` === `custom icon` && (
          <>
            {/* name="state=hover, status=progress, size=custom icon" id="607:41401" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "272px",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              {/* name="Step Header" id="607:41608" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name="🎰 icon" id="607:41609" type="INSTANCE" */}
                <Icon.QodeUser
                  style={{
                    width: "32px",
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
                {/* name=".steps__item_tail" id="607:41611" type="INSTANCE" */}
                <QodeCustom191970
                  style={{
                    height: "var(--size-size-size5xs-1px, 1px)",
                    flex: "1 0 0",
                  }}
                  {...{
                    direction: "horizontal",
                    _style: "default",
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
