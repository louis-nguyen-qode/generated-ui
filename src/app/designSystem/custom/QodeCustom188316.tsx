// id="188:316"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg188319 from "@designSystem/icon/svg/QodeSvg188319"
import QodeSvg57311958 from "@designSystem/icon/svg/QodeSvg57311958"
import QodeSvg188349 from "@designSystem/icon/svg/QodeSvg188349"
import QodeSvg188360 from "@designSystem/icon/svg/QodeSvg188360"

export interface QodeCustom188316Props {
  showTitle?: boolean
  title?: string
  state?: "default" | "hover" | "focused" | "disabled"
  checked?: "false" | "true"
}

export const QodeCustom188316: React.FC<
  QodeCustom188316Props & { style?: CSSProperties }
> = ({
  showTitle = true,
  title = "Radio",
  state = "default",
  checked = "false",
  ...rest
}) => {
  return (
    <>
      {/* name="Radio" id="188:316" type="COMPONENT_SET" */}
      {/* id="188:313" */}
      {`${state}` === `default` && `${checked}` === `false` && (
        <>
          {/* name="state=default, checked=false" id="188:313" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "flex-start",
              gap: "8px",
            }}
          >
            {/* name="Radio Wrapper" id="188:311" type="FRAME" */}
            <div
              style={{
                display: "flex",
                padding: "3px 0px",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              {/* name="Radio" id="188:315" type="FRAME" */}
              <div
                style={{
                  width: "16px",
                  height: "16px",
                  borderRadius: "999px",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--background-bg-white, #fff)",
                }}
              >
                {/* name="Radio" id=188:315 type=FRAME */}
                <></>
              </div>
            </div>
            <span
              style={{
                color: "var(--text-text-neutral-50, #1d1d1d)",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight:
                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
              }}
            >{`Radio`}</span>
          </div>
        </>
      )}
      {/* id="188:317" */}
      {`${state}` === `default` && `${checked}` === `true` && (
        <>
          {/* name="state=default, checked=true" id="188:317" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "flex-start",
              gap: "8px",
            }}
          >
            {/* name="Radio Wrapper" id="188:318" type="FRAME" */}
            <div
              style={{
                display: "flex",
                padding: "3px 0px",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              {/* name="Radio" id="188:319" type="FRAME" */}
              <QodeSvg188319
                style={{
                  width: "16px",
                  height: "16px",
                  fill: "var(--background-bg-white, #fff)",
                  strokeWidth: "1px",
                  stroke: "var(--border-border-primary-20, #158de2)",
                }}
                {...{}}
              />
            </div>
            <span
              style={{
                color: "var(--text-text-neutral-50, #1d1d1d)",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight:
                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
              }}
            >{`Radio`}</span>
          </div>
        </>
      )}
      {/* id="188:334" */}
      {`${state}` === `hover` && `${checked}` === `false` && (
        <>
          {/* name="state=hover, checked=false" id="188:334" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "flex-start",
              gap: "8px",
            }}
          >
            {/* name="Radio Wrapper" id="188:335" type="FRAME" */}
            <div
              style={{
                display: "flex",
                padding: "3px 0px",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              {/* name="Radio" id="188:336" type="FRAME" */}
              <div
                style={{
                  width: "16px",
                  height: "16px",
                  borderRadius: "999px",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-primary-20, #158de2)",
                  background: "var(--background-bg-white, #fff)",
                }}
              >
                {/* name="Radio" id=188:336 type=FRAME */}
                <></>
              </div>
            </div>
            <span
              style={{
                color: "var(--text-text-neutral-50, #1d1d1d)",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight:
                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
              }}
            >{`Radio`}</span>
          </div>
        </>
      )}
      {/* id="188:338" */}
      {`${state}` === `hover` && `${checked}` === `true` && (
        <>
          {/* name="state=hover, checked=true" id="188:338" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "flex-start",
              gap: "8px",
            }}
          >
            {/* name="Radio Wrapper" id="5731:1957" type="FRAME" */}
            <div
              style={{
                display: "flex",
                padding: "3px 0px",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              {/* name="Radio" id="5731:1958" type="FRAME" */}
              <QodeSvg57311958
                style={{
                  width: "16px",
                  height: "16px",
                  fill: "var(--background-bg-white, #fff)",
                  strokeWidth: "1px",
                  stroke: "var(--border-border-primary-20, #158de2)",
                }}
                {...{}}
              />
            </div>
            <span
              style={{
                color: "var(--text-text-neutral-50, #1d1d1d)",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight:
                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
              }}
            >{`Radio`}</span>
          </div>
        </>
      )}
      {/* id="188:343" */}
      {`${state}` === `focused` && `${checked}` === `false` && (
        <>
          {/* name="state=focused, checked=false" id="188:343" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "flex-start",
              gap: "8px",
            }}
          >
            {/* name="Radio Wrapper" id="188:344" type="FRAME" */}
            <div
              style={{
                display: "flex",
                padding: "3px 0px",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              {/* name="Radio" id="188:345" type="FRAME" */}
              <div
                style={{
                  width: "16px",
                  height: "16px",
                  borderRadius: "999px",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-primary-20, #158de2)",
                  background: "var(--background-bg-white, #fff)",
                }}
              >
                {/* name="Radio" id=188:345 type=FRAME */}
                <></>
              </div>
              {/* name="Focus Ring" id="188:352" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "16px",
                  height: "16px",
                  position: "absolute",
                  top: "3px",
                  borderRadius: "999px",
                  border:
                    "2px solid var(--border-border-focused-primary, #82c8fa)",
                }}
              >
                {/* name="Focus Ring" id=188:352 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
            <span
              style={{
                color: "var(--text-text-neutral-50, #1d1d1d)",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight:
                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
              }}
            >{`Radio`}</span>
          </div>
        </>
      )}
      {/* id="188:347" */}
      {`${state}` === `focused` && `${checked}` === `true` && (
        <>
          {/* name="state=focused, checked=true" id="188:347" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "flex-start",
              gap: "8px",
            }}
          >
            {/* name="Radio Wrapper" id="188:348" type="FRAME" */}
            <div
              style={{
                display: "flex",
                padding: "3px 0px",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              {/* name="Radio" id="188:349" type="FRAME" */}
              <QodeSvg188349
                style={{
                  width: "16px",
                  height: "16px",
                  fill: "var(--background-bg-white, #fff)",
                  strokeWidth: "1px",
                  stroke: "var(--border-border-primary-30, #107ecc)",
                }}
                {...{}}
              />
              {/* name="Focus Ring" id="188:353" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "16px",
                  height: "16px",
                  position: "absolute",
                  top: "3px",
                  borderRadius: "999px",
                  border:
                    "2px solid var(--border-border-focused-primary, #82c8fa)",
                }}
              >
                {/* name="Focus Ring" id=188:353 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
            <span
              style={{
                color: "var(--text-text-neutral-50, #1d1d1d)",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight:
                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
              }}
            >{`Radio`}</span>
          </div>
        </>
      )}
      {/* id="188:354" */}
      {`${state}` === `disabled` && `${checked}` === `false` && (
        <>
          {/* name="state=disabled, checked=false" id="188:354" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "flex-start",
              gap: "8px",
            }}
          >
            {/* name="Radio Wrapper" id="188:355" type="FRAME" */}
            <div
              style={{
                display: "flex",
                padding: "3px 0px",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              {/* name="Radio" id="5731:1976" type="FRAME" */}
              <div
                style={{
                  width: "16px",
                  height: "16px",
                  borderRadius: "999px",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-disabled, #d5d5d5)",
                  background: "var(--background-bg-disabled, #e3e3e3)",
                }}
              >
                {/* name="Radio" id=5731:1976 type=FRAME */}
                <></>
              </div>
            </div>
            <span
              style={{
                color: "var(--text-text-disabled, #bfbfbf)",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight:
                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
              }}
            >{`Radio`}</span>
          </div>
        </>
      )}
      {/* id="188:358" */}
      {`${state}` === `disabled` && `${checked}` === `true` && (
        <>
          {/* name="state=disabled, checked=true" id="188:358" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "flex-start",
              gap: "8px",
            }}
          >
            {/* name="Radio Wrapper" id="188:359" type="FRAME" */}
            <div
              style={{
                display: "flex",
                padding: "3px 0px",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              {/* name="Radio" id="188:360" type="FRAME" */}
              <QodeSvg188360
                style={{
                  width: "16px",
                  height: "16px",
                  fill: "var(--background-bg-disabled, #e3e3e3)",
                  strokeWidth: "1px",
                  stroke: "var(--border-border-disabled, #d5d5d5)",
                }}
                {...{}}
              />
            </div>
            <span
              style={{
                color: "var(--text-text-disabled, #bfbfbf)",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight:
                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
              }}
            >{`Radio`}</span>
          </div>
        </>
      )}
    </>
  )
}
