// id="191:4055"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg191979 from "@designSystem/icon/svg/QodeSvg191979"
import QodeSvg191983 from "@designSystem/icon/svg/QodeSvg191983"

export interface QodeCustom1914055Props {
  description?: boolean
  title?: string
  state?: "default" | "hover"
  status?: "finished" | "process" | "wait" | "error" | "progress"
  size?: "basic" | "small" | "dot"
}

export const QodeCustom1914055: React.FC<
  QodeCustom1914055Props & { style?: CSSProperties }
> = ({
  description = true,
  title = "Lorem Ipsum",
  state = "default",
  status = "finished",
  size = "basic",
  ...rest
}) => {
  return (
    <>
      {/* name=".steps__item_vertical" id="191:4055" type="COMPONENT_SET" */}
      {/* id="191:4056" */}
      {`${state}` === `default` &&
        `${status}` === `finished` &&
        `${size}` === `basic` && (
          <>
            {/* name="state=default, status=finished, size=basic" id="191:4056" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "flex-start",
                gap: "var(--size-padding-padding, 16px)",
              }}
            >
              {/* name="Icon Wrapper" id="191:4057" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  width: "var(--line-height-lineheighheading3, 32px)",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  gap: "6px",
                  alignSelf: "stretch",
                }}
              >
                {/* name=".steps__item_progress" id="191:4058" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "var(--line-height-lineheighheading3, 32px)",
                    height: "var(--size-height-controlheight, 32px)",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "999px",
                    background: "var(--background-bg-green-hover, #11a620)",
                  }}
                >
                  {/* name="Icon" id="I191:4058;191:798" type="INSTANCE" */}
                  <Icon.QodeCircleCheck
                    style={{ width: "16px", height: "16px", flexShrink: "0" }}
                    {...{}}
                  />
                </Flex>
                {/* name=".steps__item_tail" id="191:4060" type="INSTANCE" */}
                <QodeSvg191979
                  style={{
                    width: "var(--size-size-size5xs-1px, 1px)",
                    height: "34px",
                  }}
                  {...{
                    direction: "vertical",
                    style: "default",
                    state: "active",
                  }}
                />
              </div>
              {/* name="Text Wrapper" id="191:4061" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  width: "224px",
                  padding:
                    "var(--size-padding-paddingxxs, 4px) 0px var(--size-padding-paddingsm, 12px) 0px",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-paddingxs, 8px)",
                }}
              >
                <span
                  style={{
                    width: "224px",
                    flex: "1 0 0",
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
                  }}
                >{`Lorem Ipsum`}</span>
                <span
                  style={{
                    alignSelf: "stretch",
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
      {/* id="191:4404" */}
      {`${state}` === `default` &&
        `${status}` === `process` &&
        `${size}` === `basic` && (
          <>
            {/* name="state=default, status=process, size=basic" id="191:4404" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "272px",
                alignItems: "flex-start",
                gap: "var(--size-padding-padding, 16px)",
              }}
            >
              {/* name="Icon Wrapper" id="191:4405" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  width: "var(--line-height-lineheighheading3, 32px)",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  gap: "6px",
                  flexShrink: "0",
                  alignSelf: "stretch",
                }}
              >
                {/* name=".steps__item_progress" id="191:4406" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "var(--line-height-lineheighheading3, 32px)",
                    height: "var(--size-height-controlheight, 32px)",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "999px",
                    background: "var(--background-bg-primary, #1597f4)",
                  }}
                >
                  {/* name="Icon" id="I191:4406;191:798" type="INSTANCE" */}
                  <Icon.QodeCircleCheck
                    style={{ width: "16px", height: "16px", flexShrink: "0" }}
                    {...{}}
                  />
                </Flex>
                {/* name=".steps__item_tail" id="191:4407" type="INSTANCE" */}
                <QodeSvg191983
                  style={{
                    width: "var(--size-size-size5xs-1px, 1px)",
                    height: "34px",
                  }}
                  {...{
                    direction: "vertical",
                    style: "default",
                    state: "waiting",
                  }}
                />
              </div>
              {/* name="Text Wrapper" id="191:4408" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  padding:
                    "var(--size-padding-paddingxxs, 4px) 0px var(--size-padding-paddingsm, 12px) 0px",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  flex: "1 0 0",
                }}
              >
                <span
                  style={{
                    width: "224px",
                    flex: "1 0 0",
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
                  }}
                >{`Lorem Ipsum`}</span>
                <span
                  style={{
                    alignSelf: "stretch",
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
      {/* id="191:4414" */}
      {`${state}` === `default` &&
        `${status}` === `wait` &&
        `${size}` === `basic` && (
          <>
            {/* name="state=default, status=wait, size=basic" id="191:4414" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "272px",
                alignItems: "flex-start",
                gap: "var(--size-padding-padding, 16px)",
              }}
            >
              {/* name="Icon Wrapper" id="191:4415" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  width: "var(--line-height-lineheighheading3, 32px)",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  gap: "6px",
                  flexShrink: "0",
                  alignSelf: "stretch",
                }}
              >
                {/* name=".steps__item_progress" id="191:4416" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "var(--line-height-lineheighheading3, 32px)",
                    height: "var(--size-height-controlheight, 32px)",
                    justifyContent: "center",
                    alignItems: "center",
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
                </Flex>
                {/* name=".steps__item_tail" id="191:4417" type="INSTANCE" */}
                <QodeSvg191983
                  style={{
                    width: "var(--size-size-size5xs-1px, 1px)",
                    height: "34px",
                  }}
                  {...{
                    direction: "vertical",
                    style: "default",
                    state: "waiting",
                  }}
                />
              </div>
              {/* name="Text Wrapper" id="191:4418" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  padding:
                    "var(--size-padding-paddingxxs, 4px) 0px var(--size-padding-paddingsm, 12px) 0px",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  flex: "1 0 0",
                }}
              >
                <span
                  style={{
                    width: "224px",
                    flex: "1 0 0",
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
                  }}
                >{`Lorem Ipsum`}</span>
                <span
                  style={{
                    alignSelf: "stretch",
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
      {/* id="191:4424" */}
      {`${state}` === `default` &&
        `${status}` === `error` &&
        `${size}` === `basic` && (
          <>
            {/* name="state=default, status=error, size=basic" id="191:4424" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "272px",
                alignItems: "flex-start",
                gap: "var(--size-padding-padding, 16px)",
              }}
            >
              {/* name="Icon Wrapper" id="191:4425" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  width: "var(--line-height-lineheighheading3, 32px)",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  gap: "6px",
                  flexShrink: "0",
                  alignSelf: "stretch",
                }}
              >
                {/* name=".steps__item_progress" id="191:4426" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "var(--line-height-lineheighheading3, 32px)",
                    height: "var(--size-height-controlheight, 32px)",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "999px",
                    background: "var(--background-bg-red-hover, #dc3812)",
                  }}
                >
                  {/* name="Icon" id="I191:4426;191:798" type="INSTANCE" */}
                  <Icon.QodeCircleCheck
                    style={{ width: "16px", height: "16px", flexShrink: "0" }}
                    {...{}}
                  />
                </Flex>
                {/* name=".steps__item_tail" id="191:4427" type="INSTANCE" */}
                <QodeSvg191983
                  style={{
                    width: "var(--size-size-size5xs-1px, 1px)",
                    height: "34px",
                  }}
                  {...{
                    direction: "vertical",
                    style: "default",
                    state: "waiting",
                  }}
                />
              </div>
              {/* name="Text Wrapper" id="191:4428" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  padding:
                    "var(--size-padding-paddingxxs, 4px) 0px var(--size-padding-paddingsm, 12px) 0px",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  flex: "1 0 0",
                }}
              >
                <span
                  style={{
                    width: "224px",
                    flex: "1 0 0",
                    color: "var(--text-text-red, #dc3812)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
                  }}
                >{`Lorem Ipsum`}</span>
                <span
                  style={{
                    alignSelf: "stretch",
                    color: "var(--text-text-red, #dc3812)",
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
      {/* id="191:4434" */}
      {`${state}` === `default` &&
        `${status}` === `progress` &&
        `${size}` === `basic` && (
          <>
            {/* name="state=default, status=progress, size=basic" id="191:4434" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "272px",
                alignItems: "flex-start",
                gap: "var(--size-padding-padding, 16px)",
              }}
            >
              {/* name="Icon Wrapper" id="191:4435" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  width: "var(--line-height-lineheighheading3, 32px)",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  gap: "6px",
                  flexShrink: "0",
                  alignSelf: "stretch",
                }}
              >
                {/* name=".steps__item_progress" id="191:4436" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "var(--line-height-lineheighheading3, 32px)",
                    height: "var(--size-height-controlheight, 32px)",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "999px",
                    background: "var(--background-bg-primary, #1597f4)",
                  }}
                >
                  {/* name="Icon" id="I191:4436;191:798" type="INSTANCE" */}
                  <Icon.QodeCircleCheck
                    style={{ width: "16px", height: "16px", flexShrink: "0" }}
                    {...{}}
                  />
                </Flex>
                {/* name=".steps__item_tail" id="191:4437" type="INSTANCE" */}
                <QodeSvg191983
                  style={{
                    width: "var(--size-size-size5xs-1px, 1px)",
                    height: "34px",
                  }}
                  {...{
                    direction: "vertical",
                    style: "default",
                    state: "waiting",
                  }}
                />
              </div>
              {/* name="Text Wrapper" id="191:4438" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  padding:
                    "var(--size-padding-paddingxxs, 4px) 0px var(--size-padding-paddingsm, 12px) 0px",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  flex: "1 0 0",
                }}
              >
                <span
                  style={{
                    width: "224px",
                    flex: "1 0 0",
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
                  }}
                >{`Lorem Ipsum`}</span>
                <span
                  style={{
                    alignSelf: "stretch",
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
      {/* id="191:4455" */}
      {`${state}` === `hover` &&
        `${status}` === `finished` &&
        `${size}` === `basic` && (
          <>
            {/* name="state=hover, status=finished, size=basic" id="191:4455" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "272px",
                alignItems: "flex-start",
                gap: "var(--size-padding-padding, 16px)",
              }}
            >
              {/* name="Icon Wrapper" id="191:4456" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  width: "var(--line-height-lineheighheading3, 32px)",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  gap: "6px",
                  flexShrink: "0",
                  alignSelf: "stretch",
                }}
              >
                {/* name=".steps__item_progress" id="191:4457" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "var(--line-height-lineheighheading3, 32px)",
                    height: "var(--size-height-controlheight, 32px)",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "999px",
                    background: "var(--background-bg-green-hover, #11a620)",
                  }}
                >
                  {/* name="Icon" id="I191:4457;191:798" type="INSTANCE" */}
                  <Icon.QodeCircleCheck
                    style={{ width: "16px", height: "16px", flexShrink: "0" }}
                    {...{}}
                  />
                </Flex>
                {/* name=".steps__item_tail" id="191:4458" type="INSTANCE" */}
                <QodeSvg191979
                  style={{
                    width: "var(--size-size-size5xs-1px, 1px)",
                    height: "34px",
                  }}
                  {...{
                    direction: "vertical",
                    style: "default",
                    state: "active",
                  }}
                />
              </div>
              {/* name="Text Wrapper" id="191:4459" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  padding:
                    "var(--size-padding-paddingxxs, 4px) 0px var(--size-padding-paddingsm, 12px) 0px",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  flex: "1 0 0",
                }}
              >
                <span
                  style={{
                    width: "224px",
                    flex: "1 0 0",
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
                  }}
                >{`Lorem Ipsum`}</span>
                <span
                  style={{
                    alignSelf: "stretch",
                    color: "var(--text-text-neutral-50, #1d1d1d)",
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
      {/* id="191:4462" */}
      {`${state}` === `hover` &&
        `${status}` === `process` &&
        `${size}` === `basic` && (
          <>
            {/* name="state=hover, status=process, size=basic" id="191:4462" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "272px",
                alignItems: "flex-start",
                gap: "var(--size-padding-padding, 16px)",
              }}
            >
              {/* name="Icon Wrapper" id="191:4463" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  width: "var(--line-height-lineheighheading3, 32px)",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  gap: "6px",
                  flexShrink: "0",
                  alignSelf: "stretch",
                }}
              >
                {/* name=".steps__item_progress" id="191:4464" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "var(--line-height-lineheighheading3, 32px)",
                    height: "var(--size-height-controlheight, 32px)",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "999px",
                    background: "var(--background-bg-primary, #1597f4)",
                  }}
                >
                  {/* name="Icon" id="I191:4464;191:798" type="INSTANCE" */}
                  <Icon.QodeCircleCheck
                    style={{ width: "16px", height: "16px", flexShrink: "0" }}
                    {...{}}
                  />
                </Flex>
                {/* name=".steps__item_tail" id="191:4465" type="INSTANCE" */}
                <QodeSvg191983
                  style={{
                    width: "var(--size-size-size5xs-1px, 1px)",
                    height: "34px",
                  }}
                  {...{
                    direction: "vertical",
                    style: "default",
                    state: "waiting",
                  }}
                />
              </div>
              {/* name="Text Wrapper" id="191:4466" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  padding:
                    "var(--size-padding-paddingxxs, 4px) 0px var(--size-padding-paddingsm, 12px) 0px",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  flex: "1 0 0",
                }}
              >
                <span
                  style={{
                    width: "224px",
                    flex: "1 0 0",
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
                  }}
                >{`Lorem Ipsum`}</span>
                <span
                  style={{
                    alignSelf: "stretch",
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
      {/* id="191:4469" */}
      {`${state}` === `hover` &&
        `${status}` === `wait` &&
        `${size}` === `basic` && (
          <>
            {/* name="state=hover, status=wait, size=basic" id="191:4469" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "272px",
                alignItems: "flex-start",
                gap: "var(--size-padding-padding, 16px)",
              }}
            >
              {/* name="Icon Wrapper" id="191:4470" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  width: "var(--line-height-lineheighheading3, 32px)",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  gap: "6px",
                  flexShrink: "0",
                  alignSelf: "stretch",
                }}
              >
                {/* name=".steps__item_progress" id="191:4471" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "var(--line-height-lineheighheading3, 32px)",
                    height: "var(--size-height-controlheight, 32px)",
                    justifyContent: "center",
                    alignItems: "center",
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
                </Flex>
                {/* name=".steps__item_tail" id="191:4472" type="INSTANCE" */}
                <QodeSvg191983
                  style={{
                    width: "var(--size-size-size5xs-1px, 1px)",
                    height: "34px",
                  }}
                  {...{
                    direction: "vertical",
                    style: "default",
                    state: "waiting",
                  }}
                />
              </div>
              {/* name="Text Wrapper" id="191:4473" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  padding:
                    "var(--size-padding-paddingxxs, 4px) 0px var(--size-padding-paddingsm, 12px) 0px",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  flex: "1 0 0",
                }}
              >
                <span
                  style={{
                    width: "224px",
                    flex: "1 0 0",
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
                  }}
                >{`Lorem Ipsum`}</span>
                <span
                  style={{
                    alignSelf: "stretch",
                    color: "var(--text-text-neutral-50, #1d1d1d)",
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
      {/* id="191:4476" */}
      {`${state}` === `hover` &&
        `${status}` === `error` &&
        `${size}` === `basic` && (
          <>
            {/* name="state=hover, status=error, size=basic" id="191:4476" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "272px",
                alignItems: "flex-start",
                gap: "var(--size-padding-padding, 16px)",
              }}
            >
              {/* name="Icon Wrapper" id="191:4477" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  width: "var(--line-height-lineheighheading3, 32px)",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  gap: "6px",
                  flexShrink: "0",
                  alignSelf: "stretch",
                }}
              >
                {/* name=".steps__item_progress" id="191:4478" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "var(--line-height-lineheighheading3, 32px)",
                    height: "var(--size-height-controlheight, 32px)",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "999px",
                    background: "var(--background-bg-red-hover, #dc3812)",
                  }}
                >
                  {/* name="Icon" id="I191:4478;191:798" type="INSTANCE" */}
                  <Icon.QodeCircleCheck
                    style={{ width: "16px", height: "16px", flexShrink: "0" }}
                    {...{}}
                  />
                </Flex>
                {/* name=".steps__item_tail" id="191:4479" type="INSTANCE" */}
                <QodeSvg191983
                  style={{
                    width: "var(--size-size-size5xs-1px, 1px)",
                    height: "34px",
                  }}
                  {...{
                    direction: "vertical",
                    style: "default",
                    state: "waiting",
                  }}
                />
              </div>
              {/* name="Text Wrapper" id="191:4480" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  padding:
                    "var(--size-padding-paddingxxs, 4px) 0px var(--size-padding-paddingsm, 12px) 0px",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  flex: "1 0 0",
                }}
              >
                <span
                  style={{
                    width: "224px",
                    flex: "1 0 0",
                    color: "var(--text-text-red, #dc3812)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
                  }}
                >{`Lorem Ipsum`}</span>
                <span
                  style={{
                    alignSelf: "stretch",
                    color: "var(--text-text-red, #dc3812)",
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
      {/* id="191:4483" */}
      {`${state}` === `hover` &&
        `${status}` === `progress` &&
        `${size}` === `basic` && (
          <>
            {/* name="state=hover, status=progress, size=basic" id="191:4483" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "272px",
                alignItems: "flex-start",
                gap: "var(--size-padding-padding, 16px)",
              }}
            >
              {/* name="Icon Wrapper" id="191:4484" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  width: "var(--line-height-lineheighheading3, 32px)",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  gap: "6px",
                  flexShrink: "0",
                  alignSelf: "stretch",
                }}
              >
                {/* name=".steps__item_progress" id="191:4485" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "var(--line-height-lineheighheading3, 32px)",
                    height: "var(--size-height-controlheight, 32px)",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "999px",
                    background: "var(--background-bg-primary, #1597f4)",
                  }}
                >
                  {/* name="Icon" id="I191:4485;191:798" type="INSTANCE" */}
                  <Icon.QodeCircleCheck
                    style={{ width: "16px", height: "16px", flexShrink: "0" }}
                    {...{}}
                  />
                </Flex>
                {/* name=".steps__item_tail" id="191:4486" type="INSTANCE" */}
                <QodeSvg191983
                  style={{
                    width: "var(--size-size-size5xs-1px, 1px)",
                    height: "34px",
                  }}
                  {...{
                    direction: "vertical",
                    style: "default",
                    state: "waiting",
                  }}
                />
              </div>
              {/* name="Text Wrapper" id="191:4487" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  padding:
                    "var(--size-padding-paddingxxs, 4px) 0px var(--size-padding-paddingsm, 12px) 0px",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  flex: "1 0 0",
                }}
              >
                <span
                  style={{
                    width: "224px",
                    flex: "1 0 0",
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
                  }}
                >{`Lorem Ipsum`}</span>
                <span
                  style={{
                    alignSelf: "stretch",
                    color: "var(--text-text-neutral-50, #1d1d1d)",
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
      {/* id="191:4504" */}
      {`${state}` === `default` &&
        `${status}` === `finished` &&
        `${size}` === `small` && (
          <>
            {/* name="state=default, status=finished, size=small" id="191:4504" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "272px",
                alignItems: "flex-start",
                gap: "var(--size-padding-padding, 16px)",
              }}
            >
              {/* name="Icon Wrapper" id="191:4505" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  width: "24px",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "6px",
                  flexShrink: "0",
                  alignSelf: "stretch",
                }}
              >
                {/* name=".steps__item_progress" id="191:4506" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "24px",
                    height: "var(--size-height-controlheightsm, 24px)",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "999px",
                    background: "var(--background-bg-green-hover, #11a620)",
                  }}
                >
                  {/* name="Icon" id="I191:4506;191:822" type="INSTANCE" */}
                  <Icon.QodeCircleCheck
                    style={{ width: "12px", height: "12px", flexShrink: "0" }}
                    {...{}}
                  />
                </Flex>
                {/* name=".steps__item_tail" id="191:4507" type="INSTANCE" */}
                <QodeSvg191979
                  style={{
                    width: "var(--size-size-size5xs-1px, 1px)",
                    height: "27px",
                  }}
                  {...{
                    direction: "vertical",
                    style: "default",
                    state: "active",
                  }}
                />
              </div>
              {/* name="Text Wrapper" id="191:4508" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  paddingBottom: "var(--size-padding-paddingsm, 12px)",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  flex: "1 0 0",
                }}
              >
                <span
                  style={{
                    width: "232px",
                    flex: "1 0 0",
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
                  }}
                >{`Lorem Ipsum`}</span>
                <span
                  style={{
                    alignSelf: "stretch",
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
      {/* id="191:4511" */}
      {`${state}` === `default` &&
        `${status}` === `process` &&
        `${size}` === `small` && (
          <>
            {/* name="state=default, status=process, size=small" id="191:4511" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "272px",
                alignItems: "flex-start",
                gap: "var(--size-padding-padding, 16px)",
              }}
            >
              {/* name="Icon Wrapper" id="191:4512" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  width: "24px",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "6px",
                  flexShrink: "0",
                  alignSelf: "stretch",
                }}
              >
                {/* name=".steps__item_progress" id="191:4513" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "24px",
                    height: "var(--size-height-controlheightsm, 24px)",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "999px",
                    background: "var(--background-bg-primary, #1597f4)",
                  }}
                >
                  {/* name="Icon" id="I191:4513;191:822" type="INSTANCE" */}
                  <Icon.QodeCircleCheck
                    style={{ width: "12px", height: "12px", flexShrink: "0" }}
                    {...{}}
                  />
                </Flex>
                {/* name=".steps__item_tail" id="191:4514" type="INSTANCE" */}
                <QodeSvg191983
                  style={{
                    width: "var(--size-size-size5xs-1px, 1px)",
                    height: "27px",
                  }}
                  {...{
                    direction: "vertical",
                    style: "default",
                    state: "waiting",
                  }}
                />
              </div>
              {/* name="Text Wrapper" id="191:4515" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  paddingBottom: "var(--size-padding-paddingsm, 12px)",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  flex: "1 0 0",
                }}
              >
                <span
                  style={{
                    width: "232px",
                    flex: "1 0 0",
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
                  }}
                >{`Lorem Ipsum`}</span>
                <span
                  style={{
                    alignSelf: "stretch",
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
      {/* id="191:4518" */}
      {`${state}` === `default` &&
        `${status}` === `wait` &&
        `${size}` === `small` && (
          <>
            {/* name="state=default, status=wait, size=small" id="191:4518" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "272px",
                alignItems: "flex-start",
                gap: "var(--size-padding-padding, 16px)",
              }}
            >
              {/* name="Icon Wrapper" id="191:4519" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  width: "24px",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "6px",
                  flexShrink: "0",
                  alignSelf: "stretch",
                }}
              >
                {/* name=".steps__item_progress" id="191:4520" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "24px",
                    height: "var(--size-height-controlheightsm, 24px)",
                    justifyContent: "center",
                    alignItems: "center",
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
                </Flex>
                {/* name=".steps__item_tail" id="191:4521" type="INSTANCE" */}
                <QodeSvg191983
                  style={{
                    width: "var(--size-size-size5xs-1px, 1px)",
                    height: "27px",
                  }}
                  {...{
                    direction: "vertical",
                    style: "default",
                    state: "waiting",
                  }}
                />
              </div>
              {/* name="Text Wrapper" id="191:4522" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  paddingBottom: "var(--size-padding-paddingsm, 12px)",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  flex: "1 0 0",
                }}
              >
                <span
                  style={{
                    width: "232px",
                    flex: "1 0 0",
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
                  }}
                >{`Lorem Ipsum`}</span>
                <span
                  style={{
                    alignSelf: "stretch",
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
      {/* id="191:4525" */}
      {`${state}` === `default` &&
        `${status}` === `error` &&
        `${size}` === `small` && (
          <>
            {/* name="state=default, status=error, size=small" id="191:4525" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "272px",
                alignItems: "flex-start",
                gap: "var(--size-padding-padding, 16px)",
              }}
            >
              {/* name="Icon Wrapper" id="191:4526" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  width: "24px",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "6px",
                  flexShrink: "0",
                  alignSelf: "stretch",
                }}
              >
                {/* name=".steps__item_progress" id="191:4527" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "24px",
                    height: "var(--size-height-controlheightsm, 24px)",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "999px",
                    background: "var(--background-bg-red-hover, #dc3812)",
                  }}
                >
                  {/* name="Icon" id="I191:4527;191:822" type="INSTANCE" */}
                  <Icon.QodeCircleCheck
                    style={{ width: "12px", height: "12px", flexShrink: "0" }}
                    {...{}}
                  />
                </Flex>
                {/* name=".steps__item_tail" id="191:4528" type="INSTANCE" */}
                <QodeSvg191983
                  style={{
                    width: "var(--size-size-size5xs-1px, 1px)",
                    height: "27px",
                  }}
                  {...{
                    direction: "vertical",
                    style: "default",
                    state: "waiting",
                  }}
                />
              </div>
              {/* name="Text Wrapper" id="191:4529" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  paddingBottom: "var(--size-padding-paddingsm, 12px)",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  flex: "1 0 0",
                }}
              >
                <span
                  style={{
                    width: "232px",
                    flex: "1 0 0",
                    color: "var(--text-text-red, #dc3812)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
                  }}
                >{`Lorem Ipsum`}</span>
                <span
                  style={{
                    alignSelf: "stretch",
                    color: "var(--text-text-red, #dc3812)",
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
      {/* id="191:4532" */}
      {`${state}` === `default` &&
        `${status}` === `progress` &&
        `${size}` === `small` && (
          <>
            {/* name="state=default, status=progress, size=small" id="191:4532" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "272px",
                alignItems: "flex-start",
                gap: "var(--size-padding-padding, 16px)",
              }}
            >
              {/* name="Icon Wrapper" id="191:4533" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  width: "24px",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "6px",
                  flexShrink: "0",
                  alignSelf: "stretch",
                }}
              >
                {/* name=".steps__item_progress" id="191:4534" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "24px",
                    height: "var(--size-height-controlheightsm, 24px)",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "999px",
                    background: "var(--background-bg-primary, #1597f4)",
                  }}
                >
                  {/* name="Icon" id="I191:4534;191:822" type="INSTANCE" */}
                  <Icon.QodeCircleCheck
                    style={{ width: "12px", height: "12px", flexShrink: "0" }}
                    {...{}}
                  />
                </Flex>
                {/* name=".steps__item_tail" id="191:4535" type="INSTANCE" */}
                <QodeSvg191983
                  style={{
                    width: "var(--size-size-size5xs-1px, 1px)",
                    height: "27px",
                  }}
                  {...{
                    direction: "vertical",
                    style: "default",
                    state: "waiting",
                  }}
                />
              </div>
              {/* name="Text Wrapper" id="191:4536" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  paddingBottom: "var(--size-padding-paddingsm, 12px)",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  flex: "1 0 0",
                }}
              >
                <span
                  style={{
                    width: "232px",
                    flex: "1 0 0",
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
                  }}
                >{`Lorem Ipsum`}</span>
                <span
                  style={{
                    alignSelf: "stretch",
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
      {/* id="191:4539" */}
      {`${state}` === `hover` &&
        `${status}` === `finished` &&
        `${size}` === `small` && (
          <>
            {/* name="state=hover, status=finished, size=small" id="191:4539" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "272px",
                alignItems: "flex-start",
                gap: "var(--size-padding-padding, 16px)",
              }}
            >
              {/* name="Icon Wrapper" id="191:4540" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  width: "24px",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  gap: "6px",
                  flexShrink: "0",
                  alignSelf: "stretch",
                }}
              >
                {/* name=".steps__item_progress" id="191:4541" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "24px",
                    height: "var(--size-height-controlheightsm, 24px)",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "999px",
                    background: "var(--background-bg-green, #1fc72f)",
                  }}
                >
                  {/* name="Icon" id="I191:4541;191:822" type="INSTANCE" */}
                  <Icon.QodeCircleCheck
                    style={{ width: "12px", height: "12px", flexShrink: "0" }}
                    {...{}}
                  />
                </Flex>
                {/* name=".steps__item_tail" id="191:4542" type="INSTANCE" */}
                <QodeSvg191979
                  style={{
                    width: "var(--size-size-size5xs-1px, 1px)",
                    height: "28px",
                  }}
                  {...{
                    direction: "vertical",
                    style: "default",
                    state: "active",
                  }}
                />
              </div>
              {/* name="Text Wrapper" id="191:4543" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  paddingBottom: "var(--size-padding-paddingsm, 12px)",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  flex: "1 0 0",
                }}
              >
                <span
                  style={{
                    width: "232px",
                    flex: "1 0 0",
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
                  }}
                >{`Lorem Ipsum`}</span>
                <span
                  style={{
                    alignSelf: "stretch",
                    color: "var(--text-text-neutral-50, #1d1d1d)",
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
      {/* id="191:4546" */}
      {`${state}` === `hover` &&
        `${status}` === `process` &&
        `${size}` === `small` && (
          <>
            {/* name="state=hover, status=process, size=small" id="191:4546" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "272px",
                alignItems: "flex-start",
                gap: "var(--size-padding-padding, 16px)",
              }}
            >
              {/* name="Icon Wrapper" id="191:4547" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  width: "24px",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  gap: "6px",
                  flexShrink: "0",
                  alignSelf: "stretch",
                }}
              >
                {/* name=".steps__item_progress" id="191:4548" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "24px",
                    height: "var(--size-height-controlheightsm, 24px)",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "999px",
                    background: "var(--background-bg-primary, #1597f4)",
                  }}
                >
                  {/* name="Icon" id="I191:4548;191:822" type="INSTANCE" */}
                  <Icon.QodeCircleCheck
                    style={{ width: "12px", height: "12px", flexShrink: "0" }}
                    {...{}}
                  />
                </Flex>
                {/* name=".steps__item_tail" id="191:4549" type="INSTANCE" */}
                <QodeSvg191983
                  style={{
                    width: "var(--size-size-size5xs-1px, 1px)",
                    height: "28px",
                  }}
                  {...{
                    direction: "vertical",
                    style: "default",
                    state: "waiting",
                  }}
                />
              </div>
              {/* name="Text Wrapper" id="191:4550" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  paddingBottom: "var(--size-padding-paddingsm, 12px)",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  flex: "1 0 0",
                }}
              >
                <span
                  style={{
                    width: "232px",
                    flex: "1 0 0",
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
                  }}
                >{`Lorem Ipsum`}</span>
                <span
                  style={{
                    alignSelf: "stretch",
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
      {/* id="191:4553" */}
      {`${state}` === `hover` &&
        `${status}` === `wait` &&
        `${size}` === `small` && (
          <>
            {/* name="state=hover, status=wait, size=small" id="191:4553" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "272px",
                alignItems: "flex-start",
                gap: "var(--size-padding-padding, 16px)",
              }}
            >
              {/* name="Icon Wrapper" id="191:4554" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  width: "24px",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  gap: "6px",
                  flexShrink: "0",
                  alignSelf: "stretch",
                }}
              >
                {/* name=".steps__item_progress" id="191:4555" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "24px",
                    height: "var(--size-height-controlheightsm, 24px)",
                    justifyContent: "center",
                    alignItems: "center",
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
                </Flex>
                {/* name=".steps__item_tail" id="191:4556" type="INSTANCE" */}
                <QodeSvg191983
                  style={{
                    width: "var(--size-size-size5xs-1px, 1px)",
                    height: "28px",
                  }}
                  {...{
                    direction: "vertical",
                    style: "default",
                    state: "waiting",
                  }}
                />
              </div>
              {/* name="Text Wrapper" id="191:4557" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  paddingBottom: "var(--size-padding-paddingsm, 12px)",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  flex: "1 0 0",
                }}
              >
                <span
                  style={{
                    width: "232px",
                    flex: "1 0 0",
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
                  }}
                >{`Lorem Ipsum`}</span>
                <span
                  style={{
                    alignSelf: "stretch",
                    color: "var(--text-text-neutral-50, #1d1d1d)",
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
      {/* id="191:4560" */}
      {`${state}` === `hover` &&
        `${status}` === `error` &&
        `${size}` === `small` && (
          <>
            {/* name="state=hover, status=error, size=small" id="191:4560" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "272px",
                alignItems: "flex-start",
                gap: "var(--size-padding-padding, 16px)",
              }}
            >
              {/* name="Icon Wrapper" id="191:4561" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  width: "24px",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  gap: "6px",
                  flexShrink: "0",
                  alignSelf: "stretch",
                }}
              >
                {/* name=".steps__item_progress" id="191:4562" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "24px",
                    height: "var(--size-height-controlheightsm, 24px)",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "999px",
                    background: "var(--background-bg-red-hover, #dc3812)",
                  }}
                >
                  {/* name="Icon" id="I191:4562;191:822" type="INSTANCE" */}
                  <Icon.QodeCircleCheck
                    style={{ width: "12px", height: "12px", flexShrink: "0" }}
                    {...{}}
                  />
                </Flex>
                {/* name=".steps__item_tail" id="191:4563" type="INSTANCE" */}
                <QodeSvg191983
                  style={{
                    width: "var(--size-size-size5xs-1px, 1px)",
                    height: "28px",
                  }}
                  {...{
                    direction: "vertical",
                    style: "default",
                    state: "waiting",
                  }}
                />
              </div>
              {/* name="Text Wrapper" id="191:4564" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  paddingBottom: "var(--size-padding-paddingsm, 12px)",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  flex: "1 0 0",
                }}
              >
                <span
                  style={{
                    width: "232px",
                    flex: "1 0 0",
                    color: "var(--text-text-red, #dc3812)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
                  }}
                >{`Lorem Ipsum`}</span>
                <span
                  style={{
                    alignSelf: "stretch",
                    color: "var(--text-text-red, #dc3812)",
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
      {/* id="191:4567" */}
      {`${state}` === `hover` &&
        `${status}` === `progress` &&
        `${size}` === `small` && (
          <>
            {/* name="state=hover, status=progress, size=small" id="191:4567" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "272px",
                alignItems: "flex-start",
                gap: "var(--size-padding-padding, 16px)",
              }}
            >
              {/* name="Icon Wrapper" id="191:4568" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  width: "24px",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  gap: "6px",
                  flexShrink: "0",
                  alignSelf: "stretch",
                }}
              >
                {/* name=".steps__item_progress" id="191:4569" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "24px",
                    height: "var(--size-height-controlheightsm, 24px)",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "999px",
                    background: "var(--background-bg-primary, #1597f4)",
                  }}
                >
                  {/* name="Icon" id="I191:4569;191:822" type="INSTANCE" */}
                  <Icon.QodeCircleCheck
                    style={{ width: "12px", height: "12px", flexShrink: "0" }}
                    {...{}}
                  />
                </Flex>
                {/* name=".steps__item_tail" id="191:4570" type="INSTANCE" */}
                <QodeSvg191983
                  style={{
                    width: "var(--size-size-size5xs-1px, 1px)",
                    height: "28px",
                  }}
                  {...{
                    direction: "vertical",
                    style: "default",
                    state: "waiting",
                  }}
                />
              </div>
              {/* name="Text Wrapper" id="191:4571" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  paddingBottom: "var(--size-padding-paddingsm, 12px)",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  flex: "1 0 0",
                }}
              >
                <span
                  style={{
                    width: "232px",
                    flex: "1 0 0",
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
                  }}
                >{`Lorem Ipsum`}</span>
                <span
                  style={{
                    alignSelf: "stretch",
                    color: "var(--text-text-neutral-50, #1d1d1d)",
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
      {/* id="191:4620" */}
      {`${state}` === `default` &&
        `${status}` === `finished` &&
        `${size}` === `dot` && (
          <>
            {/* name="state=default, status=finished, size=dot" id="191:4620" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "272px",
                alignItems: "flex-start",
                gap: "var(--size-padding-padding, 16px)",
              }}
            >
              {/* name="Icon Wrapper" id="191:4621" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  width: "8px",
                  paddingTop: "7px",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  gap: "6px",
                  flexShrink: "0",
                  alignSelf: "stretch",
                }}
              >
                {/* name=".steps__item_progress" id="191:4622" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "8px",
                    height: "8px",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "999px",
                    background: "var(--background-bg-green-hover, #11a620)",
                  }}
                >
                  {/* name=".steps__item_progress" id=191:4622 type=INSTANCE */}
                  <></>
                </Flex>
                {/* name=".steps__item_tail" id="191:4623" type="INSTANCE" */}
                <QodeSvg191979
                  style={{
                    width: "var(--size-size-size5xs-1px, 1px)",
                    height: "44px",
                  }}
                  {...{
                    direction: "vertical",
                    style: "default",
                    state: "active",
                  }}
                />
              </div>
              {/* name="Text Wrapper" id="191:4624" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  paddingBottom: "var(--size-padding-paddingsm, 12px)",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  flex: "1 0 0",
                }}
              >
                <span
                  style={{
                    width: "248px",
                    flex: "1 0 0",
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
                  }}
                >{`Lorem Ipsum`}</span>
                <span
                  style={{
                    alignSelf: "stretch",
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
      {/* id="191:4627" */}
      {`${state}` === `default` &&
        `${status}` === `process` &&
        `${size}` === `dot` && (
          <>
            {/* name="state=default, status=process, size=dot" id="191:4627" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "272px",
                alignItems: "flex-start",
                gap: "var(--size-padding-padding, 16px)",
              }}
            >
              {/* name="Icon Wrapper" id="191:4628" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  width: "8px",
                  paddingTop: "7px",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  gap: "6px",
                  flexShrink: "0",
                  alignSelf: "stretch",
                }}
              >
                {/* name=".steps__item_progress" id="191:4629" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "8px",
                    height: "8px",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "999px",
                    background: "var(--background-bg-green-hover, #11a620)",
                  }}
                >
                  {/* name=".steps__item_progress" id=191:4629 type=INSTANCE */}
                  <></>
                </Flex>
                {/* name=".steps__item_tail" id="191:4630" type="INSTANCE" */}
                <QodeSvg191983
                  style={{
                    width: "var(--size-size-size5xs-1px, 1px)",
                    height: "43px",
                  }}
                  {...{
                    direction: "vertical",
                    style: "default",
                    state: "waiting",
                  }}
                />
              </div>
              {/* name="Text Wrapper" id="191:4631" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  paddingBottom: "var(--size-padding-paddingsm, 12px)",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  flex: "1 0 0",
                }}
              >
                <span
                  style={{
                    width: "246px",
                    flex: "1 0 0",
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
                  }}
                >{`Lorem Ipsum`}</span>
                <span
                  style={{
                    alignSelf: "stretch",
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
      {/* id="191:4634" */}
      {`${state}` === `default` &&
        `${status}` === `wait` &&
        `${size}` === `dot` && (
          <>
            {/* name="state=default, status=wait, size=dot" id="191:4634" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "272px",
                alignItems: "flex-start",
                gap: "var(--size-padding-padding, 16px)",
              }}
            >
              {/* name="Icon Wrapper" id="191:4635" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  width: "8px",
                  paddingTop: "7px",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  gap: "6px",
                  flexShrink: "0",
                  alignSelf: "stretch",
                }}
              >
                {/* name=".steps__item_progress" id="191:4636" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "8px",
                    height: "8px",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "999px",
                    background: "var(--background-bg-green-hover, #11a620)",
                  }}
                >
                  {/* name=".steps__item_progress" id=191:4636 type=INSTANCE */}
                  <></>
                </Flex>
                {/* name=".steps__item_tail" id="191:4637" type="INSTANCE" */}
                <QodeSvg191983
                  style={{
                    width: "var(--size-size-size5xs-1px, 1px)",
                    height: "44px",
                  }}
                  {...{
                    direction: "vertical",
                    style: "default",
                    state: "waiting",
                  }}
                />
              </div>
              {/* name="Text Wrapper" id="191:4638" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  paddingBottom: "var(--size-padding-paddingsm, 12px)",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  flex: "1 0 0",
                }}
              >
                <span
                  style={{
                    width: "248px",
                    flex: "1 0 0",
                    color: "var(--text-text-neutral-40, #464646)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
                  }}
                >{`Lorem Ipsum`}</span>
                <span
                  style={{
                    alignSelf: "stretch",
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
      {/* id="191:4641" */}
      {`${state}` === `default` &&
        `${status}` === `error` &&
        `${size}` === `dot` && (
          <>
            {/* name="state=default, status=error, size=dot" id="191:4641" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "272px",
                alignItems: "flex-start",
                gap: "var(--size-padding-padding, 16px)",
              }}
            >
              {/* name="Icon Wrapper" id="191:4642" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  width: "8px",
                  paddingTop: "7px",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  gap: "6px",
                  flexShrink: "0",
                  alignSelf: "stretch",
                }}
              >
                {/* name=".steps__item_progress" id="191:4643" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "8px",
                    height: "8px",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "999px",
                    background: "var(--background-bg-green-hover, #11a620)",
                  }}
                >
                  {/* name=".steps__item_progress" id=191:4643 type=INSTANCE */}
                  <></>
                </Flex>
                {/* name=".steps__item_tail" id="191:4644" type="INSTANCE" */}
                <QodeSvg191983
                  style={{
                    width: "var(--size-size-size5xs-1px, 1px)",
                    height: "44px",
                  }}
                  {...{
                    direction: "vertical",
                    style: "default",
                    state: "waiting",
                  }}
                />
              </div>
              {/* name="Text Wrapper" id="191:4645" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  paddingBottom: "var(--size-padding-paddingsm, 12px)",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  flex: "1 0 0",
                }}
              >
                <span
                  style={{
                    width: "248px",
                    flex: "1 0 0",
                    color: "var(--text-text-red, #dc3812)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
                  }}
                >{`Lorem Ipsum`}</span>
                <span
                  style={{
                    alignSelf: "stretch",
                    color: "var(--text-text-red, #dc3812)",
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
      {/* id="191:4648" */}
      {`${state}` === `default` &&
        `${status}` === `progress` &&
        `${size}` === `dot` && (
          <>
            {/* name="state=default, status=progress, size=dot" id="191:4648" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "272px",
                alignItems: "flex-start",
                gap: "var(--size-padding-padding, 16px)",
              }}
            >
              {/* name="Icon Wrapper" id="191:4649" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  width: "8px",
                  paddingTop: "7px",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  gap: "6px",
                  flexShrink: "0",
                  alignSelf: "stretch",
                }}
              >
                {/* name=".steps__item_progress" id="191:4650" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "8px",
                    height: "8px",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "999px",
                    background: "var(--background-bg-green-hover, #11a620)",
                  }}
                >
                  {/* name=".steps__item_progress" id=191:4650 type=INSTANCE */}
                  <></>
                </Flex>
                {/* name=".steps__item_tail" id="191:4651" type="INSTANCE" */}
                <QodeSvg191983
                  style={{
                    width: "var(--size-size-size5xs-1px, 1px)",
                    height: "44px",
                  }}
                  {...{
                    direction: "vertical",
                    style: "default",
                    state: "waiting",
                  }}
                />
              </div>
              {/* name="Text Wrapper" id="191:4652" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  paddingBottom: "var(--size-padding-paddingsm, 12px)",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  flex: "1 0 0",
                }}
              >
                <span
                  style={{
                    width: "248px",
                    flex: "1 0 0",
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
                  }}
                >{`In progress`}</span>
                <span
                  style={{
                    alignSelf: "stretch",
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
      {/* id="191:4655" */}
      {`${state}` === `hover` &&
        `${status}` === `finished` &&
        `${size}` === `dot` && (
          <>
            {/* name="state=hover, status=finished, size=dot" id="191:4655" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "272px",
                alignItems: "flex-start",
                gap: "var(--size-padding-padding, 16px)",
              }}
            >
              {/* name="Icon Wrapper" id="191:4656" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  width: "8px",
                  paddingTop: "7px",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  gap: "6px",
                  flexShrink: "0",
                  alignSelf: "stretch",
                }}
              >
                {/* name=".steps__item_progress" id="191:4657" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "8px",
                    height: "8px",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "999px",
                    background: "var(--background-bg-green-hover, #11a620)",
                  }}
                >
                  {/* name=".steps__item_progress" id=191:4657 type=INSTANCE */}
                  <></>
                </Flex>
                {/* name=".steps__item_tail" id="191:4658" type="INSTANCE" */}
                <QodeSvg191979
                  style={{
                    width: "var(--size-size-size5xs-1px, 1px)",
                    height: "44px",
                  }}
                  {...{
                    direction: "vertical",
                    style: "default",
                    state: "active",
                  }}
                />
              </div>
              {/* name="Text Wrapper" id="191:4659" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  paddingBottom: "var(--size-padding-paddingsm, 12px)",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  flex: "1 0 0",
                }}
              >
                <span
                  style={{
                    width: "248px",
                    flex: "1 0 0",
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
                  }}
                >{`Lorem Ipsum`}</span>
                <span
                  style={{
                    alignSelf: "stretch",
                    color: "var(--text-text-neutral-50, #1d1d1d)",
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
      {/* id="191:4662" */}
      {`${state}` === `hover` &&
        `${status}` === `process` &&
        `${size}` === `dot` && (
          <>
            {/* name="state=hover, status=process, size=dot" id="191:4662" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "272px",
                alignItems: "flex-start",
                gap: "var(--size-padding-padding, 16px)",
              }}
            >
              {/* name="Icon Wrapper" id="191:4663" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  width: "8px",
                  paddingTop: "7px",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  gap: "6px",
                  flexShrink: "0",
                  alignSelf: "stretch",
                }}
              >
                {/* name=".steps__item_progress" id="191:4664" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "8px",
                    height: "8px",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "999px",
                    background: "var(--background-bg-green-hover, #11a620)",
                  }}
                >
                  {/* name=".steps__item_progress" id=191:4664 type=INSTANCE */}
                  <></>
                </Flex>
                {/* name=".steps__item_tail" id="191:4665" type="INSTANCE" */}
                <QodeSvg191983
                  style={{
                    width: "var(--size-size-size5xs-1px, 1px)",
                    height: "43px",
                  }}
                  {...{
                    direction: "vertical",
                    style: "default",
                    state: "waiting",
                  }}
                />
              </div>
              {/* name="Text Wrapper" id="191:4666" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  paddingBottom: "var(--size-padding-paddingsm, 12px)",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  flex: "1 0 0",
                }}
              >
                <span
                  style={{
                    width: "246px",
                    flex: "1 0 0",
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
                  }}
                >{`Lorem Ipsum`}</span>
                <span
                  style={{
                    alignSelf: "stretch",
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
      {/* id="191:4669" */}
      {`${state}` === `hover` &&
        `${status}` === `wait` &&
        `${size}` === `dot` && (
          <>
            {/* name="state=hover, status=wait, size=dot" id="191:4669" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "272px",
                alignItems: "flex-start",
                gap: "var(--size-padding-padding, 16px)",
              }}
            >
              {/* name="Icon Wrapper" id="191:4670" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  width: "8px",
                  paddingTop: "7px",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  gap: "6px",
                  flexShrink: "0",
                  alignSelf: "stretch",
                }}
              >
                {/* name=".steps__item_progress" id="191:4671" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "8px",
                    height: "8px",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "999px",
                    background: "var(--background-bg-green-hover, #11a620)",
                  }}
                >
                  {/* name=".steps__item_progress" id=191:4671 type=INSTANCE */}
                  <></>
                </Flex>
                {/* name=".steps__item_tail" id="191:4672" type="INSTANCE" */}
                <QodeSvg191983
                  style={{
                    width: "var(--size-size-size5xs-1px, 1px)",
                    height: "44px",
                  }}
                  {...{
                    direction: "vertical",
                    style: "default",
                    state: "waiting",
                  }}
                />
              </div>
              {/* name="Text Wrapper" id="191:4673" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  paddingBottom: "var(--size-padding-paddingsm, 12px)",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  flex: "1 0 0",
                }}
              >
                <span
                  style={{
                    width: "248px",
                    flex: "1 0 0",
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
                  }}
                >{`Lorem Ipsum`}</span>
                <span
                  style={{
                    alignSelf: "stretch",
                    color: "var(--text-text-neutral-50, #1d1d1d)",
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
      {/* id="191:4676" */}
      {`${state}` === `hover` &&
        `${status}` === `error` &&
        `${size}` === `dot` && (
          <>
            {/* name="state=hover, status=error, size=dot" id="191:4676" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "272px",
                alignItems: "flex-start",
                gap: "var(--size-padding-padding, 16px)",
              }}
            >
              {/* name="Icon Wrapper" id="191:4677" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  width: "8px",
                  paddingTop: "7px",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  gap: "6px",
                  flexShrink: "0",
                  alignSelf: "stretch",
                }}
              >
                {/* name=".steps__item_progress" id="191:4678" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "8px",
                    height: "8px",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "999px",
                    background: "var(--background-bg-green-hover, #11a620)",
                  }}
                >
                  {/* name=".steps__item_progress" id=191:4678 type=INSTANCE */}
                  <></>
                </Flex>
                {/* name=".steps__item_tail" id="191:4679" type="INSTANCE" */}
                <QodeSvg191983
                  style={{
                    width: "var(--size-size-size5xs-1px, 1px)",
                    height: "44px",
                  }}
                  {...{
                    direction: "vertical",
                    style: "default",
                    state: "waiting",
                  }}
                />
              </div>
              {/* name="Text Wrapper" id="191:4680" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  paddingBottom: "var(--size-padding-paddingsm, 12px)",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  flex: "1 0 0",
                }}
              >
                <span
                  style={{
                    width: "248px",
                    flex: "1 0 0",
                    color: "var(--text-text-red, #dc3812)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
                  }}
                >{`Lorem Ipsum`}</span>
                <span
                  style={{
                    alignSelf: "stretch",
                    color: "var(--text-text-red, #dc3812)",
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
      {/* id="191:4683" */}
      {`${state}` === `hover` &&
        `${status}` === `progress` &&
        `${size}` === `dot` && (
          <>
            {/* name="state=hover, status=progress, size=dot" id="191:4683" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "272px",
                alignItems: "flex-start",
                gap: "var(--size-padding-padding, 16px)",
              }}
            >
              {/* name="Icon Wrapper" id="191:4684" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  width: "8px",
                  paddingTop: "7px",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  gap: "6px",
                  flexShrink: "0",
                  alignSelf: "stretch",
                }}
              >
                {/* name=".steps__item_progress" id="191:4685" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "8px",
                    height: "8px",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "999px",
                    background: "var(--background-bg-green-hover, #11a620)",
                  }}
                >
                  {/* name=".steps__item_progress" id=191:4685 type=INSTANCE */}
                  <></>
                </Flex>
                {/* name=".steps__item_tail" id="191:4686" type="INSTANCE" */}
                <QodeSvg191983
                  style={{
                    width: "var(--size-size-size5xs-1px, 1px)",
                    height: "44px",
                  }}
                  {...{
                    direction: "vertical",
                    style: "default",
                    state: "waiting",
                  }}
                />
              </div>
              {/* name="Text Wrapper" id="191:4687" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  paddingBottom: "var(--size-padding-paddingsm, 12px)",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  flex: "1 0 0",
                }}
              >
                <span
                  style={{
                    width: "248px",
                    flex: "1 0 0",
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
                  }}
                >{`Lorem Ipsum`}</span>
                <span
                  style={{
                    alignSelf: "stretch",
                    color: "var(--text-text-neutral-50, #1d1d1d)",
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
    </>
  )
}
