// id="607:40861"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg60740883 from "@designSystem/icon/svg/QodeSvg60740883"
import QodeSvg60740890 from "@designSystem/icon/svg/QodeSvg60740890"

export interface QodeCustom60740861Props {
  step?: string
  status?: "finish" | "process" | "wait" | "error" | "progress"
  size?: "default" | "dot" | "small"
}

export const QodeCustom60740861: React.FC<
  QodeCustom60740861Props & { style?: CSSProperties }
> = ({ step = "2", status = "finish", size = "default", ...rest }) => {
  return (
    <>
      {/* name=".steps__item_progress" id="607:40861" type="COMPONENT_SET" */}
      {/* id="607:40862" */}
      {`${status}` === `finish` && `${size}` === `default` && (
        <>
          {/* name="status=finish, size=default" id="607:40862" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "32px",
              height: "var(--size-height-controlheight, 32px)",
              justifyContent: "center",
              alignItems: "center",
              flexShrink: "0",
              borderRadius: "999px",
              background: "var(--background-bg-green-hover, #11a620)",
            }}
          >
            {/* name="Icon" id="607:40877" type="INSTANCE" */}
            <Icon.QodeCircleCheck
              style={{ width: "16px", height: "16px", flexShrink: "0" }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="607:40863" */}
      {`${status}` === `process` && `${size}` === `default` && (
        <>
          {/* name="status=process, size=default" id="607:40863" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "32px",
              height: "var(--size-height-controlheight, 32px)",
              justifyContent: "center",
              alignItems: "center",
              flexShrink: "0",
              borderRadius: "999px",
              background: "var(--background-bg-primary, #1597f4)",
            }}
          >
            <span
              style={{
                flex: "1 0 0",
                color: "var(--text-text-white, #fff)",
                textAlign: "center",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight:
                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
              }}
            >{`2`}</span>
          </div>
        </>
      )}
      {/* id="607:40864" */}
      {`${status}` === `wait` && `${size}` === `default` && (
        <>
          {/* name="status=wait, size=default" id="607:40864" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "32px",
              height: "var(--size-height-controlheight, 32px)",
              justifyContent: "center",
              alignItems: "center",
              flexShrink: "0",
              borderRadius: "999px",
              background: "var(--background-bg-neutral-10, #e3e3e3)",
            }}
          >
            <span
              style={{
                flex: "1 0 0",
                color: "var(--text-text-neutral-40, #464646)",
                textAlign: "center",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight:
                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
              }}
            >{`2`}</span>
          </div>
        </>
      )}
      {/* id="607:40865" */}
      {`${status}` === `error` && `${size}` === `default` && (
        <>
          {/* name="status=error, size=default" id="607:40865" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "32px",
              height: "var(--size-height-controlheight, 32px)",
              justifyContent: "center",
              alignItems: "center",
              flexShrink: "0",
              borderRadius: "999px",
              background: "var(--red-red-50, #dc3812)",
            }}
          >
            {/* name="Icon" id="607:40880" type="INSTANCE" */}
            <Icon.QodeCircleX
              style={{ width: "16px", height: "16px", flexShrink: "0" }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="607:40866" */}
      {`${status}` === `progress` && `${size}` === `default` && (
        <>
          {/* name="status=progress, size=default" id="607:40866" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "32px",
              height: "var(--size-height-controlheight, 32px)",
              justifyContent: "center",
              alignItems: "center",
              flexShrink: "0",
              borderRadius: "999px",
              background: "var(--background-bg-primary, #1597f4)",
            }}
          >
            <span
              style={{
                flex: "1 0 0",
                color: "var(--text-text-white, #fff)",
                textAlign: "center",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight:
                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
              }}
            >{`2`}</span>
            {/* name="Progress Circle" id="607:40882" type="RECTANGLE" */}
            <Flex
              style={{
                width: "34px",
                height: "34px",
                position: "absolute",
                left: "-1px",
                top: "-1px",
                borderRadius: "999px",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
              }}
            >
              {/* name="Progress Circle" id=607:40882 type=RECTANGLE */}
              <></>
            </Flex>
            {/* name="Progress Circle Completed" id="607:40883" type="ELLIPSE" */}
            <QodeSvg60740883
              style={{
                width: "34px",
                height: "34px",
                transform: "rotate(-90deg)",
                position: "absolute",
                left: "-1px",
                top: "-1px",
                strokeWidth: "1px",
                stroke: "var(--border-border-primary-20, #158de2)",
              }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="607:40867" */}
      {`${status}` === `finish` && `${size}` === `small` && (
        <>
          {/* name="status=finish, size=small" id="607:40867" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "24px",
              height: "var(--size-height-controlheightsm, 24px)",
              justifyContent: "center",
              alignItems: "center",
              flexShrink: "0",
              borderRadius: "999px",
              background: "var(--background-bg-green-hover, #11a620)",
            }}
          >
            {/* name="Icon" id="607:40884" type="INSTANCE" */}
            <Icon.QodeCircleCheck
              style={{ width: "12px", height: "12px", flexShrink: "0" }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="607:40868" */}
      {`${status}` === `process` && `${size}` === `small` && (
        <>
          {/* name="status=process, size=small" id="607:40868" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "24px",
              height: "var(--size-height-controlheightsm, 24px)",
              justifyContent: "center",
              alignItems: "center",
              flexShrink: "0",
              borderRadius: "999px",
              background: "var(--background-bg-primary, #1597f4)",
            }}
          >
            <span
              style={{
                flex: "1 0 0",
                color: "var(--text-text-white, #fff)",
                textAlign: "center",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight:
                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
              }}
            >{`2`}</span>
          </div>
        </>
      )}
      {/* id="607:40869" */}
      {`${status}` === `wait` && `${size}` === `small` && (
        <>
          {/* name="status=wait, size=small" id="607:40869" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "24px",
              height: "var(--size-height-controlheightsm, 24px)",
              justifyContent: "center",
              alignItems: "center",
              flexShrink: "0",
              borderRadius: "999px",
              background: "var(--background-bg-neutral-10, #e3e3e3)",
            }}
          >
            <span
              style={{
                flex: "1 0 0",
                color: "var(--text-text-neutral-40, #464646)",
                textAlign: "center",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight:
                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
              }}
            >{`2`}</span>
          </div>
        </>
      )}
      {/* id="607:40870" */}
      {`${status}` === `error` && `${size}` === `small` && (
        <>
          {/* name="status=error, size=small" id="607:40870" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "24px",
              height: "var(--size-height-controlheightsm, 24px)",
              justifyContent: "center",
              alignItems: "center",
              flexShrink: "0",
              borderRadius: "999px",
              background: "var(--red-red-50, #dc3812)",
            }}
          >
            {/* name="Icon" id="607:40887" type="INSTANCE" */}
            <Icon.QodeCircleX
              style={{ width: "12px", height: "12px", flexShrink: "0" }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="607:40871" */}
      {`${status}` === `progress` && `${size}` === `small` && (
        <>
          {/* name="status=progress, size=small" id="607:40871" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "24px",
              height: "var(--size-height-controlheightsm, 24px)",
              justifyContent: "center",
              alignItems: "center",
              flexShrink: "0",
              borderRadius: "999px",
              background: "var(--background-bg-primary, #1597f4)",
            }}
          >
            <span
              style={{
                flex: "1 0 0",
                color: "var(--text-text-white, #fff)",
                textAlign: "center",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight:
                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
              }}
            >{`2`}</span>
            {/* name="Progress Circle" id="607:40889" type="RECTANGLE" */}
            <Flex
              style={{
                width: "26px",
                height: "26px",
                position: "absolute",
                left: "-1px",
                top: "-1px",
                borderRadius: "999px",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
              }}
            >
              {/* name="Progress Circle" id=607:40889 type=RECTANGLE */}
              <></>
            </Flex>
            {/* name="Progress Circle Completed" id="607:40890" type="ELLIPSE" */}
            <QodeSvg60740890
              style={{
                width: "26px",
                height: "26px",
                transform: "rotate(-90deg)",
                position: "absolute",
                left: "-1px",
                top: "-1px",
                strokeWidth: "1px",
                stroke: "var(--border-border-primary-20, #158de2)",
              }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="607:40872" */}
      {`${status}` === `finish` && `${size}` === `dot` && (
        <>
          {/* name="status=finish, size=dot" id="607:40872" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "8px",
              height: "8px",
              justifyContent: "center",
              alignItems: "center",
              flexShrink: "0",
              borderRadius: "999px",
              background: "var(--background-bg-green-hover, #11a620)",
            }}
          >
            {/* name="status=finish, size=dot" id=607:40872 type=COMPONENT */}
            <></>
          </div>
        </>
      )}
      {/* id="607:40873" */}
      {`${status}` === `process` && `${size}` === `dot` && (
        <>
          {/* name="status=process, size=dot" id="607:40873" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "10px",
              height: "10px",
              justifyContent: "center",
              alignItems: "center",
              flexShrink: "0",
              borderRadius: "999px",
              background: "var(--background-bg-primary, #1597f4)",
            }}
          >
            {/* name="status=process, size=dot" id=607:40873 type=COMPONENT */}
            <></>
          </div>
        </>
      )}
      {/* id="607:40874" */}
      {`${status}` === `wait` && `${size}` === `dot` && (
        <>
          {/* name="status=wait, size=dot" id="607:40874" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "8px",
              height: "8px",
              justifyContent: "center",
              alignItems: "center",
              flexShrink: "0",
              borderRadius: "999px",
              background: "var(--neutral-gray-40, #a7a7a7)",
            }}
          >
            {/* name="status=wait, size=dot" id=607:40874 type=COMPONENT */}
            <></>
          </div>
        </>
      )}
      {/* id="607:40875" */}
      {`${status}` === `error` && `${size}` === `dot` && (
        <>
          {/* name="status=error, size=dot" id="607:40875" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "8px",
              height: "8px",
              justifyContent: "center",
              alignItems: "center",
              flexShrink: "0",
              borderRadius: "999px",
              background: "var(--red-red-50, #dc3812)",
            }}
          >
            {/* name="status=error, size=dot" id=607:40875 type=COMPONENT */}
            <></>
          </div>
        </>
      )}
      {/* id="607:40876" */}
      {`${status}` === `progress` && `${size}` === `dot` && (
        <>
          {/* name="status=progress, size=dot" id="607:40876" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "8px",
              height: "8px",
              justifyContent: "center",
              alignItems: "center",
              flexShrink: "0",
              borderRadius: "999px",
              background: "var(--background-bg-primary, #1597f4)",
            }}
          >
            {/* name="status=progress, size=dot" id=607:40876 type=COMPONENT */}
            <></>
          </div>
        </>
      )}
    </>
  )
}
