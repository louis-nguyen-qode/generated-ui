// id="191:6003"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeSteps } from "@designSystem/ant/QodeSteps"
import QodeSvg191975 from "@designSystem/icon/svg/QodeSvg191975"
import QodeSvg191973 from "@designSystem/icon/svg/QodeSvg191973"
import QodeSvg191977 from "@designSystem/icon/svg/QodeSvg191977"
import QodeSvg191983 from "@designSystem/icon/svg/QodeSvg191983"

export interface QodeCustom1916003Props {
  size?: "basic" | "small" | "custom icon" | "dot"
  direction?: "horizontal" | "vertical"
  items?: "2" | "3" | "4" | "5"
}

export const QodeCustom1916003: React.FC<
  QodeCustom1916003Props & { style?: CSSProperties }
> = ({ size = "basic", direction = "horizontal", items = "2", ...rest }) => {
  return (
    <>
      {/* name="Steps" id="191:6003" type="COMPONENT_SET" */}
      {/* id="191:6002" */}
      {`${size}` === `basic` &&
        `${direction}` === `horizontal` &&
        `${items}` === `2` && (
          <>
            {/* name="size=basic, direction=horizontal, items=2" id="191:6002" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "552px",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
              }}
            >
              {/* name="🧬 item 1" id="191:5981" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  flex: "1 0 0",
                }}
              >
                {/* name="Step Header" id="I191:5981;191:1081" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name=".steps__item_progress" id="I191:5981;191:1082" type="INSTANCE" */}
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
                  {/* name=".steps__item_tail" id="I191:5981;191:1084" type="INSTANCE" */}
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
                {/* name="Description Wrapper" id="I191:5981;191:1085" type="FRAME" */}
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
              </Flex>
              {/* name="🧬 item 2" id="191:5991" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  flex: "1 0 0",
                }}
              >
                {/* name="Step Header" id="I191:5991;191:1091" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name=".steps__item_progress" id="I191:5991;191:1092" type="INSTANCE" */}
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
                  {/* name=".steps__item_tail" id="I191:5991;191:1094" type="INSTANCE" */}
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
                {/* name="Description Wrapper" id="I191:5991;191:1095" type="FRAME" */}
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
              </Flex>
            </div>
          </>
        )}
      {/* id="191:6050" */}
      {`${size}` === `basic` &&
        `${direction}` === `horizontal` &&
        `${items}` === `3` && (
          <>
            {/* name="size=basic, direction=horizontal, items=3" id="191:6050" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "832px",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
              }}
            >
              {/* name="🧬 item 1" id="191:6051" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  flex: "1 0 0",
                }}
              >
                {/* name="Step Header" id="I191:6051;191:1081" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name=".steps__item_progress" id="I191:6051;191:1082" type="INSTANCE" */}
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
                  {/* name=".steps__item_tail" id="I191:6051;191:1084" type="INSTANCE" */}
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
                {/* name="Description Wrapper" id="I191:6051;191:1085" type="FRAME" */}
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
              </Flex>
              {/* name="🧬 item 2" id="191:6052" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  flex: "1 0 0",
                }}
              >
                {/* name="Step Header" id="I191:6052;191:1091" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name=".steps__item_progress" id="I191:6052;191:1092" type="INSTANCE" */}
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
                  {/* name=".steps__item_tail" id="I191:6052;191:1094" type="INSTANCE" */}
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
                {/* name="Description Wrapper" id="I191:6052;191:1095" type="FRAME" */}
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
              </Flex>
              {/* name="🧬 item 3" id="191:6069" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  flex: "1 0 0",
                }}
              >
                {/* name="Step Header" id="I191:6069;191:1091" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name=".steps__item_progress" id="I191:6069;191:1092" type="INSTANCE" */}
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
                  {/* name=".steps__item_tail" id="I191:6069;191:1094" type="INSTANCE" */}
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
                {/* name="Description Wrapper" id="I191:6069;191:1095" type="FRAME" */}
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
              </Flex>
            </div>
          </>
        )}
      {/* id="191:6078" */}
      {`${size}` === `basic` &&
        `${direction}` === `horizontal` &&
        `${items}` === `4` && (
          <>
            {/* name="size=basic, direction=horizontal, items=4" id="191:6078" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "1112px",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
              }}
            >
              {/* name="🧬 item 1" id="191:6079" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  flex: "1 0 0",
                }}
              >
                {/* name="Step Header" id="I191:6079;191:1081" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name=".steps__item_progress" id="I191:6079;191:1082" type="INSTANCE" */}
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
                  {/* name=".steps__item_tail" id="I191:6079;191:1084" type="INSTANCE" */}
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
                {/* name="Description Wrapper" id="I191:6079;191:1085" type="FRAME" */}
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
              </Flex>
              {/* name="🧬 item 2" id="191:6080" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  flex: "1 0 0",
                }}
              >
                {/* name="Step Header" id="I191:6080;191:1091" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name=".steps__item_progress" id="I191:6080;191:1092" type="INSTANCE" */}
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
                  {/* name=".steps__item_tail" id="I191:6080;191:1094" type="INSTANCE" */}
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
                {/* name="Description Wrapper" id="I191:6080;191:1095" type="FRAME" */}
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
              </Flex>
              {/* name="🧬 item 3" id="191:6081" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  flex: "1 0 0",
                }}
              >
                {/* name="Step Header" id="I191:6081;191:1091" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name=".steps__item_progress" id="I191:6081;191:1092" type="INSTANCE" */}
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
                  {/* name=".steps__item_tail" id="I191:6081;191:1094" type="INSTANCE" */}
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
                {/* name="Description Wrapper" id="I191:6081;191:1095" type="FRAME" */}
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
              </Flex>
              {/* name="🧬 item 4" id="191:6106" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  flex: "1 0 0",
                }}
              >
                {/* name="Step Header" id="I191:6106;191:1091" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name=".steps__item_progress" id="I191:6106;191:1092" type="INSTANCE" */}
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
                  {/* name=".steps__item_tail" id="I191:6106;191:1094" type="INSTANCE" */}
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
                {/* name="Description Wrapper" id="I191:6106;191:1095" type="FRAME" */}
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
              </Flex>
            </div>
          </>
        )}
      {/* id="191:6115" */}
      {`${size}` === `basic` &&
        `${direction}` === `horizontal` &&
        `${items}` === `5` && (
          <>
            {/* name="size=basic, direction=horizontal, items=5" id="191:6115" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "1392px",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
              }}
            >
              {/* name="🧬 item 1" id="191:6116" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  flex: "1 0 0",
                }}
              >
                {/* name="Step Header" id="I191:6116;191:1081" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name=".steps__item_progress" id="I191:6116;191:1082" type="INSTANCE" */}
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
                  {/* name=".steps__item_tail" id="I191:6116;191:1084" type="INSTANCE" */}
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
                {/* name="Description Wrapper" id="I191:6116;191:1085" type="FRAME" */}
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
              </Flex>
              {/* name="🧬 item 2" id="191:6117" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  flex: "1 0 0",
                }}
              >
                {/* name="Step Header" id="I191:6117;191:1091" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name=".steps__item_progress" id="I191:6117;191:1092" type="INSTANCE" */}
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
                  {/* name=".steps__item_tail" id="I191:6117;191:1094" type="INSTANCE" */}
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
                {/* name="Description Wrapper" id="I191:6117;191:1095" type="FRAME" */}
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
              </Flex>
              {/* name="🧬 item 3" id="191:6118" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  flex: "1 0 0",
                }}
              >
                {/* name="Step Header" id="I191:6118;191:1091" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name=".steps__item_progress" id="I191:6118;191:1092" type="INSTANCE" */}
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
                  {/* name=".steps__item_tail" id="I191:6118;191:1094" type="INSTANCE" */}
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
                {/* name="Description Wrapper" id="I191:6118;191:1095" type="FRAME" */}
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
              </Flex>
              {/* name="🧬 item 4" id="191:6119" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  flex: "1 0 0",
                }}
              >
                {/* name="Step Header" id="I191:6119;191:1091" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name=".steps__item_progress" id="I191:6119;191:1092" type="INSTANCE" */}
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
                  {/* name=".steps__item_tail" id="I191:6119;191:1094" type="INSTANCE" */}
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
                {/* name="Description Wrapper" id="I191:6119;191:1095" type="FRAME" */}
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
              </Flex>
              {/* name="🧬 item 5" id="191:6152" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  flex: "1 0 0",
                }}
              >
                {/* name="Step Header" id="I191:6152;191:1091" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name=".steps__item_progress" id="I191:6152;191:1092" type="INSTANCE" */}
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
                  {/* name=".steps__item_tail" id="I191:6152;191:1094" type="INSTANCE" */}
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
                {/* name="Description Wrapper" id="I191:6152;191:1095" type="FRAME" */}
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
              </Flex>
            </div>
          </>
        )}
      {/* id="191:6161" */}
      {`${size}` === `small` &&
        `${direction}` === `horizontal` &&
        `${items}` === `2` && (
          <>
            {/* name="size=small, direction=horizontal, items=2" id="191:6161" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "552px",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
              }}
            >
              {/* name="🧬 item 1" id="191:6162" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  flex: "1 0 0",
                }}
              >
                {/* name="Step Header" id="I191:6162;191:1189" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name=".steps__item_progress" id="I191:6162;191:1190" type="INSTANCE" */}
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
                  {/* name=".steps__item_tail" id="I191:6162;191:1192" type="INSTANCE" */}
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
              </Flex>
              {/* name="🧬 item 2" id="191:6163" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  flex: "1 0 0",
                }}
              >
                {/* name="Step Header" id="I191:6163;191:1196" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name=".steps__item_progress" id="I191:6163;191:1197" type="INSTANCE" */}
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
                  {/* name=".steps__item_tail" id="I191:6163;191:1199" type="INSTANCE" */}
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
              </Flex>
            </div>
          </>
        )}
      {/* id="191:6164" */}
      {`${size}` === `small` &&
        `${direction}` === `horizontal` &&
        `${items}` === `3` && (
          <>
            {/* name="size=small, direction=horizontal, items=3" id="191:6164" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "832px",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
              }}
            >
              {/* name="🧬 item 1" id="191:6165" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  flex: "1 0 0",
                }}
              >
                {/* name="Step Header" id="I191:6165;191:1189" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name=".steps__item_progress" id="I191:6165;191:1190" type="INSTANCE" */}
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
                  {/* name=".steps__item_tail" id="I191:6165;191:1192" type="INSTANCE" */}
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
              </Flex>
              {/* name="🧬 item 2" id="191:6166" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  flex: "1 0 0",
                }}
              >
                {/* name="Step Header" id="I191:6166;191:1196" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name=".steps__item_progress" id="I191:6166;191:1197" type="INSTANCE" */}
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
                  {/* name=".steps__item_tail" id="I191:6166;191:1199" type="INSTANCE" */}
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
              </Flex>
              {/* name="🧬 item 3" id="191:6167" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  flex: "1 0 0",
                }}
              >
                {/* name="Step Header" id="I191:6167;191:1196" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name=".steps__item_progress" id="I191:6167;191:1197" type="INSTANCE" */}
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
                  {/* name=".steps__item_tail" id="I191:6167;191:1199" type="INSTANCE" */}
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
              </Flex>
            </div>
          </>
        )}
      {/* id="191:6168" */}
      {`${size}` === `small` &&
        `${direction}` === `horizontal` &&
        `${items}` === `4` && (
          <>
            {/* name="size=small, direction=horizontal, items=4" id="191:6168" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "1112px",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
              }}
            >
              {/* name="🧬 item 1" id="191:6169" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  flex: "1 0 0",
                }}
              >
                {/* name="Step Header" id="I191:6169;191:1189" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name=".steps__item_progress" id="I191:6169;191:1190" type="INSTANCE" */}
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
                  {/* name=".steps__item_tail" id="I191:6169;191:1192" type="INSTANCE" */}
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
              </Flex>
              {/* name="🧬 item 2" id="191:6170" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  flex: "1 0 0",
                }}
              >
                {/* name="Step Header" id="I191:6170;191:1196" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name=".steps__item_progress" id="I191:6170;191:1197" type="INSTANCE" */}
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
                  {/* name=".steps__item_tail" id="I191:6170;191:1199" type="INSTANCE" */}
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
              </Flex>
              {/* name="🧬 item 3" id="191:6171" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  flex: "1 0 0",
                }}
              >
                {/* name="Step Header" id="I191:6171;191:1196" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name=".steps__item_progress" id="I191:6171;191:1197" type="INSTANCE" */}
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
                  {/* name=".steps__item_tail" id="I191:6171;191:1199" type="INSTANCE" */}
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
              </Flex>
              {/* name="🧬 item 4" id="191:6172" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  flex: "1 0 0",
                }}
              >
                {/* name="Step Header" id="I191:6172;191:1196" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name=".steps__item_progress" id="I191:6172;191:1197" type="INSTANCE" */}
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
                  {/* name=".steps__item_tail" id="I191:6172;191:1199" type="INSTANCE" */}
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
              </Flex>
            </div>
          </>
        )}
      {/* id="191:6173" */}
      {`${size}` === `small` &&
        `${direction}` === `horizontal` &&
        `${items}` === `5` && (
          <>
            {/* name="size=small, direction=horizontal, items=5" id="191:6173" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "1392px",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
              }}
            >
              {/* name="🧬 item 1" id="191:6174" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  flex: "1 0 0",
                }}
              >
                {/* name="Step Header" id="I191:6174;191:1189" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name=".steps__item_progress" id="I191:6174;191:1190" type="INSTANCE" */}
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
                  {/* name=".steps__item_tail" id="I191:6174;191:1192" type="INSTANCE" */}
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
              </Flex>
              {/* name="🧬 item 2" id="191:6175" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  flex: "1 0 0",
                }}
              >
                {/* name="Step Header" id="I191:6175;191:1196" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name=".steps__item_progress" id="I191:6175;191:1197" type="INSTANCE" */}
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
                  {/* name=".steps__item_tail" id="I191:6175;191:1199" type="INSTANCE" */}
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
              </Flex>
              {/* name="🧬 item 3" id="191:6176" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  flex: "1 0 0",
                }}
              >
                {/* name="Step Header" id="I191:6176;191:1196" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name=".steps__item_progress" id="I191:6176;191:1197" type="INSTANCE" */}
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
                  {/* name=".steps__item_tail" id="I191:6176;191:1199" type="INSTANCE" */}
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
              </Flex>
              {/* name="🧬 item 4" id="191:6177" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  flex: "1 0 0",
                }}
              >
                {/* name="Step Header" id="I191:6177;191:1196" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name=".steps__item_progress" id="I191:6177;191:1197" type="INSTANCE" */}
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
                  {/* name=".steps__item_tail" id="I191:6177;191:1199" type="INSTANCE" */}
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
              </Flex>
              {/* name="🧬 item 5" id="191:6178" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  flex: "1 0 0",
                }}
              >
                {/* name="Step Header" id="I191:6178;191:1196" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name=".steps__item_progress" id="I191:6178;191:1197" type="INSTANCE" */}
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
                  {/* name=".steps__item_tail" id="I191:6178;191:1199" type="INSTANCE" */}
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
              </Flex>
            </div>
          </>
        )}
      {/* id="191:6291" */}
      {`${size}` === `custom icon` &&
        `${direction}` === `horizontal` &&
        `${items}` === `2` && (
          <>
            {/* name="size=custom icon, direction=horizontal, items=2" id="191:6291" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "552px",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
              }}
            >
              {/* name="🧬 item 1" id="191:6292" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  flex: "1 0 0",
                }}
              >
                {/* name="Step Header" id="I191:6292;191:1479" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name="🎰 icon" id="I191:6292;191:1480" type="INSTANCE" */}
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
                  {/* name=".steps__item_tail" id="I191:6292;191:1482" type="INSTANCE" */}
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
              </Flex>
              {/* name="🧬 item 2" id="191:6293" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  flex: "1 0 0",
                }}
              >
                {/* name="Step Header" id="I191:6293;191:1484" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name="🎰 icon" id="I191:6293;191:1485" type="INSTANCE" */}
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
                  {/* name=".steps__item_tail" id="I191:6293;191:1487" type="INSTANCE" */}
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
              </Flex>
            </div>
          </>
        )}
      {/* id="191:6294" */}
      {`${size}` === `custom icon` &&
        `${direction}` === `horizontal` &&
        `${items}` === `3` && (
          <>
            {/* name="size=custom icon, direction=horizontal, items=3" id="191:6294" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "832px",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
              }}
            >
              {/* name="🧬 item 1" id="191:6295" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  flex: "1 0 0",
                }}
              >
                {/* name="Step Header" id="I191:6295;191:1479" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name="🎰 icon" id="I191:6295;191:1480" type="INSTANCE" */}
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
                  {/* name=".steps__item_tail" id="I191:6295;191:1482" type="INSTANCE" */}
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
              </Flex>
              {/* name="🧬 item 2" id="191:6296" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  flex: "1 0 0",
                }}
              >
                {/* name="Step Header" id="I191:6296;191:1484" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name="🎰 icon" id="I191:6296;191:1485" type="INSTANCE" */}
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
                  {/* name=".steps__item_tail" id="I191:6296;191:1487" type="INSTANCE" */}
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
              </Flex>
              {/* name="🧬 item 3" id="191:6297" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  flex: "1 0 0",
                }}
              >
                {/* name="Step Header" id="I191:6297;191:1484" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name="🎰 icon" id="I191:6297;191:1485" type="INSTANCE" */}
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
                  {/* name=".steps__item_tail" id="I191:6297;191:1487" type="INSTANCE" */}
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
              </Flex>
            </div>
          </>
        )}
      {/* id="191:6298" */}
      {`${size}` === `custom icon` &&
        `${direction}` === `horizontal` &&
        `${items}` === `4` && (
          <>
            {/* name="size=custom icon, direction=horizontal, items=4" id="191:6298" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "1112px",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
              }}
            >
              {/* name="🧬 item 1" id="191:6299" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  flex: "1 0 0",
                }}
              >
                {/* name="Step Header" id="I191:6299;191:1479" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name="🎰 icon" id="I191:6299;191:1480" type="INSTANCE" */}
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
                  {/* name=".steps__item_tail" id="I191:6299;191:1482" type="INSTANCE" */}
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
              </Flex>
              {/* name="🧬 item 2" id="191:6300" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  flex: "1 0 0",
                }}
              >
                {/* name="Step Header" id="I191:6300;191:1484" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name="🎰 icon" id="I191:6300;191:1485" type="INSTANCE" */}
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
                  {/* name=".steps__item_tail" id="I191:6300;191:1487" type="INSTANCE" */}
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
              </Flex>
              {/* name="🧬 item 3" id="191:6301" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  flex: "1 0 0",
                }}
              >
                {/* name="Step Header" id="I191:6301;191:1484" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name="🎰 icon" id="I191:6301;191:1485" type="INSTANCE" */}
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
                  {/* name=".steps__item_tail" id="I191:6301;191:1487" type="INSTANCE" */}
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
              </Flex>
              {/* name="🧬 item 4" id="191:6302" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  flex: "1 0 0",
                }}
              >
                {/* name="Step Header" id="I191:6302;191:1484" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name="🎰 icon" id="I191:6302;191:1485" type="INSTANCE" */}
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
                  {/* name=".steps__item_tail" id="I191:6302;191:1487" type="INSTANCE" */}
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
              </Flex>
            </div>
          </>
        )}
      {/* id="191:6303" */}
      {`${size}` === `custom icon` &&
        `${direction}` === `horizontal` &&
        `${items}` === `5` && (
          <>
            {/* name="size=custom icon, direction=horizontal, items=5" id="191:6303" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "1392px",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
              }}
            >
              {/* name="🧬 item 1" id="191:6304" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  flex: "1 0 0",
                }}
              >
                {/* name="Step Header" id="I191:6304;191:1479" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name="🎰 icon" id="I191:6304;191:1480" type="INSTANCE" */}
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
                  {/* name=".steps__item_tail" id="I191:6304;191:1482" type="INSTANCE" */}
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
              </Flex>
              {/* name="🧬 item 2" id="191:6305" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  flex: "1 0 0",
                }}
              >
                {/* name="Step Header" id="I191:6305;191:1484" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name="🎰 icon" id="I191:6305;191:1485" type="INSTANCE" */}
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
                  {/* name=".steps__item_tail" id="I191:6305;191:1487" type="INSTANCE" */}
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
              </Flex>
              {/* name="🧬 item 3" id="191:6306" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  flex: "1 0 0",
                }}
              >
                {/* name="Step Header" id="I191:6306;191:1484" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name="🎰 icon" id="I191:6306;191:1485" type="INSTANCE" */}
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
                  {/* name=".steps__item_tail" id="I191:6306;191:1487" type="INSTANCE" */}
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
              </Flex>
              {/* name="🧬 item 4" id="191:6307" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  flex: "1 0 0",
                }}
              >
                {/* name="Step Header" id="I191:6307;191:1484" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name="🎰 icon" id="I191:6307;191:1485" type="INSTANCE" */}
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
                  {/* name=".steps__item_tail" id="I191:6307;191:1487" type="INSTANCE" */}
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
              </Flex>
              {/* name="🧬 item 5" id="191:6308" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  flex: "1 0 0",
                }}
              >
                {/* name="Step Header" id="I191:6308;191:1484" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name="🎰 icon" id="I191:6308;191:1485" type="INSTANCE" */}
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
                  {/* name=".steps__item_tail" id="I191:6308;191:1487" type="INSTANCE" */}
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
              </Flex>
            </div>
          </>
        )}
      {/* id="191:6421" */}
      {`${size}` === `dot` &&
        `${direction}` === `horizontal` &&
        `${items}` === `2` && (
          <>
            {/* name="size=dot, direction=horizontal, items=2" id="191:6421" type="COMPONENT" */}
            <div
              style={{ display: "flex", width: "544px", alignItems: "center" }}
            >
              {/* name="🧬 item 1" id="191:6422" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  flex: "1 0 0",
                }}
              >
                {/* name="Progress Wrapper" id="I191:6422;191:1629" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name=".steps__item_tail" id="I191:6422;191:1630" type="INSTANCE" */}
                  <QodeSvg191973
                    style={{ height: "3px", flex: "1 0 0" }}
                    {...{
                      direction: "horizontal",
                      style: "bold",
                      state: "active",
                    }}
                  />
                  {/* name=".steps__item_progress" id="I191:6422;191:1631" type="INSTANCE" */}
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
                  {/* name=".steps__item_tail" id="I191:6422;191:1632" type="INSTANCE" */}
                  <QodeSvg191977
                    style={{ height: "3px", flex: "1 0 0" }}
                    {...{
                      direction: "horizontal",
                      style: "bold",
                      state: "waiting",
                    }}
                  />
                </div>
                {/* name="Description Wrapper" id="I191:6422;191:1633" type="FRAME" */}
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
              </Flex>
              {/* name="🧬 item 2" id="191:6423" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  flex: "1 0 0",
                }}
              >
                {/* name="Progress Wrapper" id="I191:6423;191:1639" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name=".steps__item_tail" id="I191:6423;191:1640" type="INSTANCE" */}
                  <QodeSvg191977
                    style={{ height: "3px", flex: "1 0 0" }}
                    {...{
                      direction: "horizontal",
                      style: "bold",
                      state: "waiting",
                    }}
                  />
                  {/* name=".steps__item_progress" id="I191:6423;191:1641" type="INSTANCE" */}
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
                  {/* name=".steps__item_tail" id="I191:6423;191:1642" type="INSTANCE" */}
                  <QodeSvg191977
                    style={{ height: "3px", flex: "1 0 0" }}
                    {...{
                      direction: "horizontal",
                      style: "bold",
                      state: "waiting",
                    }}
                  />
                </div>
                {/* name="Description Wrapper" id="I191:6423;191:1643" type="FRAME" */}
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
              </Flex>
            </div>
          </>
        )}
      {/* id="191:6424" */}
      {`${size}` === `dot` &&
        `${direction}` === `horizontal` &&
        `${items}` === `3` && (
          <>
            {/* name="size=dot, direction=horizontal, items=3" id="191:6424" type="COMPONENT" */}
            <div
              style={{ display: "flex", width: "816px", alignItems: "center" }}
            >
              {/* name="🧬 item 1" id="191:6425" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  flex: "1 0 0",
                }}
              >
                {/* name="Progress Wrapper" id="I191:6425;191:1629" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name=".steps__item_tail" id="I191:6425;191:1630" type="INSTANCE" */}
                  <QodeSvg191973
                    style={{ height: "3px", flex: "1 0 0" }}
                    {...{
                      direction: "horizontal",
                      style: "bold",
                      state: "active",
                    }}
                  />
                  {/* name=".steps__item_progress" id="I191:6425;191:1631" type="INSTANCE" */}
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
                  {/* name=".steps__item_tail" id="I191:6425;191:1632" type="INSTANCE" */}
                  <QodeSvg191977
                    style={{ height: "3px", flex: "1 0 0" }}
                    {...{
                      direction: "horizontal",
                      style: "bold",
                      state: "waiting",
                    }}
                  />
                </div>
                {/* name="Description Wrapper" id="I191:6425;191:1633" type="FRAME" */}
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
              </Flex>
              {/* name="🧬 item 2" id="191:6426" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  flex: "1 0 0",
                }}
              >
                {/* name="Progress Wrapper" id="I191:6426;191:1639" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name=".steps__item_tail" id="I191:6426;191:1640" type="INSTANCE" */}
                  <QodeSvg191977
                    style={{ height: "3px", flex: "1 0 0" }}
                    {...{
                      direction: "horizontal",
                      style: "bold",
                      state: "waiting",
                    }}
                  />
                  {/* name=".steps__item_progress" id="I191:6426;191:1641" type="INSTANCE" */}
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
                  {/* name=".steps__item_tail" id="I191:6426;191:1642" type="INSTANCE" */}
                  <QodeSvg191977
                    style={{ height: "3px", flex: "1 0 0" }}
                    {...{
                      direction: "horizontal",
                      style: "bold",
                      state: "waiting",
                    }}
                  />
                </div>
                {/* name="Description Wrapper" id="I191:6426;191:1643" type="FRAME" */}
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
              </Flex>
              {/* name="🧬 item 3" id="191:6427" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  flex: "1 0 0",
                }}
              >
                {/* name="Progress Wrapper" id="I191:6427;191:1639" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name=".steps__item_tail" id="I191:6427;191:1640" type="INSTANCE" */}
                  <QodeSvg191977
                    style={{ height: "3px", flex: "1 0 0" }}
                    {...{
                      direction: "horizontal",
                      style: "bold",
                      state: "waiting",
                    }}
                  />
                  {/* name=".steps__item_progress" id="I191:6427;191:1641" type="INSTANCE" */}
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
                  {/* name=".steps__item_tail" id="I191:6427;191:1642" type="INSTANCE" */}
                  <QodeSvg191977
                    style={{ height: "3px", flex: "1 0 0" }}
                    {...{
                      direction: "horizontal",
                      style: "bold",
                      state: "waiting",
                    }}
                  />
                </div>
                {/* name="Description Wrapper" id="I191:6427;191:1643" type="FRAME" */}
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
              </Flex>
            </div>
          </>
        )}
      {/* id="191:6428" */}
      {`${size}` === `dot` &&
        `${direction}` === `horizontal` &&
        `${items}` === `4` && (
          <>
            {/* name="size=dot, direction=horizontal, items=4" id="191:6428" type="COMPONENT" */}
            <div
              style={{ display: "flex", width: "1088px", alignItems: "center" }}
            >
              {/* name="🧬 item 1" id="191:6429" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  flex: "1 0 0",
                }}
              >
                {/* name="Progress Wrapper" id="I191:6429;191:1629" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name=".steps__item_tail" id="I191:6429;191:1630" type="INSTANCE" */}
                  <QodeSvg191973
                    style={{ height: "3px", flex: "1 0 0" }}
                    {...{
                      direction: "horizontal",
                      style: "bold",
                      state: "active",
                    }}
                  />
                  {/* name=".steps__item_progress" id="I191:6429;191:1631" type="INSTANCE" */}
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
                  {/* name=".steps__item_tail" id="I191:6429;191:1632" type="INSTANCE" */}
                  <QodeSvg191977
                    style={{ height: "3px", flex: "1 0 0" }}
                    {...{
                      direction: "horizontal",
                      style: "bold",
                      state: "waiting",
                    }}
                  />
                </div>
                {/* name="Description Wrapper" id="I191:6429;191:1633" type="FRAME" */}
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
              </Flex>
              {/* name="🧬 item 2" id="191:6430" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  flex: "1 0 0",
                }}
              >
                {/* name="Progress Wrapper" id="I191:6430;191:1639" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name=".steps__item_tail" id="I191:6430;191:1640" type="INSTANCE" */}
                  <QodeSvg191977
                    style={{ height: "3px", flex: "1 0 0" }}
                    {...{
                      direction: "horizontal",
                      style: "bold",
                      state: "waiting",
                    }}
                  />
                  {/* name=".steps__item_progress" id="I191:6430;191:1641" type="INSTANCE" */}
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
                  {/* name=".steps__item_tail" id="I191:6430;191:1642" type="INSTANCE" */}
                  <QodeSvg191977
                    style={{ height: "3px", flex: "1 0 0" }}
                    {...{
                      direction: "horizontal",
                      style: "bold",
                      state: "waiting",
                    }}
                  />
                </div>
                {/* name="Description Wrapper" id="I191:6430;191:1643" type="FRAME" */}
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
              </Flex>
              {/* name="🧬 item 3" id="191:6431" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  flex: "1 0 0",
                }}
              >
                {/* name="Progress Wrapper" id="I191:6431;191:1639" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name=".steps__item_tail" id="I191:6431;191:1640" type="INSTANCE" */}
                  <QodeSvg191977
                    style={{ height: "3px", flex: "1 0 0" }}
                    {...{
                      direction: "horizontal",
                      style: "bold",
                      state: "waiting",
                    }}
                  />
                  {/* name=".steps__item_progress" id="I191:6431;191:1641" type="INSTANCE" */}
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
                  {/* name=".steps__item_tail" id="I191:6431;191:1642" type="INSTANCE" */}
                  <QodeSvg191977
                    style={{ height: "3px", flex: "1 0 0" }}
                    {...{
                      direction: "horizontal",
                      style: "bold",
                      state: "waiting",
                    }}
                  />
                </div>
                {/* name="Description Wrapper" id="I191:6431;191:1643" type="FRAME" */}
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
              </Flex>
              {/* name="🧬 item 4" id="191:6432" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  flex: "1 0 0",
                }}
              >
                {/* name="Progress Wrapper" id="I191:6432;191:1639" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name=".steps__item_tail" id="I191:6432;191:1640" type="INSTANCE" */}
                  <QodeSvg191977
                    style={{ height: "3px", flex: "1 0 0" }}
                    {...{
                      direction: "horizontal",
                      style: "bold",
                      state: "waiting",
                    }}
                  />
                  {/* name=".steps__item_progress" id="I191:6432;191:1641" type="INSTANCE" */}
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
                  {/* name=".steps__item_tail" id="I191:6432;191:1642" type="INSTANCE" */}
                  <QodeSvg191977
                    style={{ height: "3px", flex: "1 0 0" }}
                    {...{
                      direction: "horizontal",
                      style: "bold",
                      state: "waiting",
                    }}
                  />
                </div>
                {/* name="Description Wrapper" id="I191:6432;191:1643" type="FRAME" */}
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
              </Flex>
            </div>
          </>
        )}
      {/* id="191:6433" */}
      {`${size}` === `dot` &&
        `${direction}` === `horizontal` &&
        `${items}` === `5` && (
          <>
            {/* name="size=dot, direction=horizontal, items=5" id="191:6433" type="COMPONENT" */}
            <div
              style={{ display: "flex", width: "1360px", alignItems: "center" }}
            >
              {/* name="🧬 item 1" id="191:6434" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  flex: "1 0 0",
                }}
              >
                {/* name="Progress Wrapper" id="I191:6434;191:1629" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name=".steps__item_tail" id="I191:6434;191:1630" type="INSTANCE" */}
                  <QodeSvg191973
                    style={{ height: "3px", flex: "1 0 0" }}
                    {...{
                      direction: "horizontal",
                      style: "bold",
                      state: "active",
                    }}
                  />
                  {/* name=".steps__item_progress" id="I191:6434;191:1631" type="INSTANCE" */}
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
                  {/* name=".steps__item_tail" id="I191:6434;191:1632" type="INSTANCE" */}
                  <QodeSvg191977
                    style={{ height: "3px", flex: "1 0 0" }}
                    {...{
                      direction: "horizontal",
                      style: "bold",
                      state: "waiting",
                    }}
                  />
                </div>
                {/* name="Description Wrapper" id="I191:6434;191:1633" type="FRAME" */}
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
              </Flex>
              {/* name="🧬 item 2" id="191:6435" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  flex: "1 0 0",
                }}
              >
                {/* name="Progress Wrapper" id="I191:6435;191:1639" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name=".steps__item_tail" id="I191:6435;191:1640" type="INSTANCE" */}
                  <QodeSvg191977
                    style={{ height: "3px", flex: "1 0 0" }}
                    {...{
                      direction: "horizontal",
                      style: "bold",
                      state: "waiting",
                    }}
                  />
                  {/* name=".steps__item_progress" id="I191:6435;191:1641" type="INSTANCE" */}
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
                  {/* name=".steps__item_tail" id="I191:6435;191:1642" type="INSTANCE" */}
                  <QodeSvg191977
                    style={{ height: "3px", flex: "1 0 0" }}
                    {...{
                      direction: "horizontal",
                      style: "bold",
                      state: "waiting",
                    }}
                  />
                </div>
                {/* name="Description Wrapper" id="I191:6435;191:1643" type="FRAME" */}
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
              </Flex>
              {/* name="🧬 item 3" id="191:6436" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  flex: "1 0 0",
                }}
              >
                {/* name="Progress Wrapper" id="I191:6436;191:1639" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name=".steps__item_tail" id="I191:6436;191:1640" type="INSTANCE" */}
                  <QodeSvg191977
                    style={{ height: "3px", flex: "1 0 0" }}
                    {...{
                      direction: "horizontal",
                      style: "bold",
                      state: "waiting",
                    }}
                  />
                  {/* name=".steps__item_progress" id="I191:6436;191:1641" type="INSTANCE" */}
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
                  {/* name=".steps__item_tail" id="I191:6436;191:1642" type="INSTANCE" */}
                  <QodeSvg191977
                    style={{ height: "3px", flex: "1 0 0" }}
                    {...{
                      direction: "horizontal",
                      style: "bold",
                      state: "waiting",
                    }}
                  />
                </div>
                {/* name="Description Wrapper" id="I191:6436;191:1643" type="FRAME" */}
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
              </Flex>
              {/* name="🧬 item 4" id="191:6437" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  flex: "1 0 0",
                }}
              >
                {/* name="Progress Wrapper" id="I191:6437;191:1639" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name=".steps__item_tail" id="I191:6437;191:1640" type="INSTANCE" */}
                  <QodeSvg191977
                    style={{ height: "3px", flex: "1 0 0" }}
                    {...{
                      direction: "horizontal",
                      style: "bold",
                      state: "waiting",
                    }}
                  />
                  {/* name=".steps__item_progress" id="I191:6437;191:1641" type="INSTANCE" */}
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
                  {/* name=".steps__item_tail" id="I191:6437;191:1642" type="INSTANCE" */}
                  <QodeSvg191977
                    style={{ height: "3px", flex: "1 0 0" }}
                    {...{
                      direction: "horizontal",
                      style: "bold",
                      state: "waiting",
                    }}
                  />
                </div>
                {/* name="Description Wrapper" id="I191:6437;191:1643" type="FRAME" */}
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
              </Flex>
              {/* name="🧬 item 5" id="191:6438" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  flex: "1 0 0",
                }}
              >
                {/* name="Progress Wrapper" id="I191:6438;191:1639" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name=".steps__item_tail" id="I191:6438;191:1640" type="INSTANCE" */}
                  <QodeSvg191977
                    style={{ height: "3px", flex: "1 0 0" }}
                    {...{
                      direction: "horizontal",
                      style: "bold",
                      state: "waiting",
                    }}
                  />
                  {/* name=".steps__item_progress" id="I191:6438;191:1641" type="INSTANCE" */}
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
                  {/* name=".steps__item_tail" id="I191:6438;191:1642" type="INSTANCE" */}
                  <QodeSvg191977
                    style={{ height: "3px", flex: "1 0 0" }}
                    {...{
                      direction: "horizontal",
                      style: "bold",
                      state: "waiting",
                    }}
                  />
                </div>
                {/* name="Description Wrapper" id="I191:6438;191:1643" type="FRAME" */}
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
              </Flex>
            </div>
          </>
        )}
      {/* id="191:6845" */}
      {`${size}` === `basic` &&
        `${direction}` === `vertical` &&
        `${items}` === `2` && (
          <>
            {/* name="size=basic, direction=vertical, items=2" id="191:6845" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "272px",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                gap: "var(--size-padding-paddingxs, 8px)",
              }}
            >
              {/* name="🧬 item 1" id="191:6846" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-padding, 16px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name="Icon Wrapper" id="I191:6846;191:4405" type="FRAME" */}
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
                  {/* name=".steps__item_progress" id="I191:6846;191:4406" type="INSTANCE" */}
                  <QodeSteps
                    style={{
                      display: "flex",
                      width: "var(--line-height-lineheighheading3, 32px)",
                      height: "var(--size-height-controlheight, 32px)",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "999px",
                      background: "var(--background-bg-primary, #1597f4)",
                    }}
                    {...{ step: "2", status: "finish", size: "default" }}
                  />
                  {/* name=".steps__item_tail" id="I191:6846;191:4407" type="INSTANCE" */}
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
                {/* name="Text Wrapper" id="I191:6846;191:4408" type="FRAME" */}
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
              </Flex>
              {/* name="🧬 item 2" id="191:6847" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-padding, 16px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name="Icon Wrapper" id="I191:6847;191:4415" type="FRAME" */}
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
                  {/* name=".steps__item_progress" id="I191:6847;191:4416" type="INSTANCE" */}
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
                  {/* name=".steps__item_tail" id="I191:6847;191:4417" type="INSTANCE" */}
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
                {/* name="Text Wrapper" id="I191:6847;191:4418" type="FRAME" */}
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
              </Flex>
            </div>
          </>
        )}
      {/* id="191:6848" */}
      {`${size}` === `basic` &&
        `${direction}` === `vertical` &&
        `${items}` === `3` && (
          <>
            {/* name="size=basic, direction=vertical, items=3" id="191:6848" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "272px",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                gap: "var(--size-padding-paddingxs, 8px)",
              }}
            >
              {/* name="🧬 item 1" id="191:6849" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-padding, 16px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name="Icon Wrapper" id="I191:6849;191:4405" type="FRAME" */}
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
                  {/* name=".steps__item_progress" id="I191:6849;191:4406" type="INSTANCE" */}
                  <QodeSteps
                    style={{
                      display: "flex",
                      width: "var(--line-height-lineheighheading3, 32px)",
                      height: "var(--size-height-controlheight, 32px)",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "999px",
                      background: "var(--background-bg-primary, #1597f4)",
                    }}
                    {...{ step: "2", status: "finish", size: "default" }}
                  />
                  {/* name=".steps__item_tail" id="I191:6849;191:4407" type="INSTANCE" */}
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
                {/* name="Text Wrapper" id="I191:6849;191:4408" type="FRAME" */}
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
              </Flex>
              {/* name="🧬 item 2" id="191:6850" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-padding, 16px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name="Icon Wrapper" id="I191:6850;191:4415" type="FRAME" */}
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
                  {/* name=".steps__item_progress" id="I191:6850;191:4416" type="INSTANCE" */}
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
                  {/* name=".steps__item_tail" id="I191:6850;191:4417" type="INSTANCE" */}
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
                {/* name="Text Wrapper" id="I191:6850;191:4418" type="FRAME" */}
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
              </Flex>
              {/* name="🧬 item 3" id="191:6851" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-padding, 16px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name="Icon Wrapper" id="I191:6851;191:4415" type="FRAME" */}
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
                  {/* name=".steps__item_progress" id="I191:6851;191:4416" type="INSTANCE" */}
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
                  {/* name=".steps__item_tail" id="I191:6851;191:4417" type="INSTANCE" */}
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
                {/* name="Text Wrapper" id="I191:6851;191:4418" type="FRAME" */}
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
              </Flex>
            </div>
          </>
        )}
      {/* id="191:6852" */}
      {`${size}` === `basic` &&
        `${direction}` === `vertical` &&
        `${items}` === `4` && (
          <>
            {/* name="size=basic, direction=vertical, items=4" id="191:6852" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                gap: "var(--size-padding-paddingxs, 8px)",
              }}
            >
              {/* name="🧬 item 1" id="191:6853" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-padding, 16px)",
                }}
              >
                {/* name="Icon Wrapper" id="I191:6853;191:4405" type="FRAME" */}
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
                  {/* name=".steps__item_progress" id="I191:6853;191:4406" type="INSTANCE" */}
                  <QodeSteps
                    style={{
                      display: "flex",
                      width: "var(--line-height-lineheighheading3, 32px)",
                      height: "var(--size-height-controlheight, 32px)",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "999px",
                      background: "var(--background-bg-primary, #1597f4)",
                    }}
                    {...{ step: "2", status: "finish", size: "default" }}
                  />
                  {/* name=".steps__item_tail" id="I191:6853;191:4407" type="INSTANCE" */}
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
                {/* name="Text Wrapper" id="I191:6853;191:4408" type="FRAME" */}
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
              </Flex>
              {/* name="🧬 item 2" id="191:6854" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-padding, 16px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name="Icon Wrapper" id="I191:6854;191:4415" type="FRAME" */}
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
                  {/* name=".steps__item_progress" id="I191:6854;191:4416" type="INSTANCE" */}
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
                  {/* name=".steps__item_tail" id="I191:6854;191:4417" type="INSTANCE" */}
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
                {/* name="Text Wrapper" id="I191:6854;191:4418" type="FRAME" */}
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
              </Flex>
              {/* name="🧬 item 3" id="191:6855" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-padding, 16px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name="Icon Wrapper" id="I191:6855;191:4415" type="FRAME" */}
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
                  {/* name=".steps__item_progress" id="I191:6855;191:4416" type="INSTANCE" */}
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
                  {/* name=".steps__item_tail" id="I191:6855;191:4417" type="INSTANCE" */}
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
                {/* name="Text Wrapper" id="I191:6855;191:4418" type="FRAME" */}
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
              </Flex>
              {/* name="🧬 item 4" id="191:6856" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-padding, 16px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name="Icon Wrapper" id="I191:6856;191:4415" type="FRAME" */}
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
                  {/* name=".steps__item_progress" id="I191:6856;191:4416" type="INSTANCE" */}
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
                  {/* name=".steps__item_tail" id="I191:6856;191:4417" type="INSTANCE" */}
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
                {/* name="Text Wrapper" id="I191:6856;191:4418" type="FRAME" */}
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
              </Flex>
            </div>
          </>
        )}
      {/* id="191:6857" */}
      {`${size}` === `basic` &&
        `${direction}` === `vertical` &&
        `${items}` === `5` && (
          <>
            {/* name="size=basic, direction=vertical, items=5" id="191:6857" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                gap: "var(--size-padding-paddingxs, 8px)",
              }}
            >
              {/* name="🧬 item 1" id="191:6858" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-padding, 16px)",
                }}
              >
                {/* name="Icon Wrapper" id="I191:6858;191:4405" type="FRAME" */}
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
                  {/* name=".steps__item_progress" id="I191:6858;191:4406" type="INSTANCE" */}
                  <QodeSteps
                    style={{
                      display: "flex",
                      width: "var(--line-height-lineheighheading3, 32px)",
                      height: "var(--size-height-controlheight, 32px)",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "999px",
                      background: "var(--background-bg-primary, #1597f4)",
                    }}
                    {...{ step: "2", status: "finish", size: "default" }}
                  />
                  {/* name=".steps__item_tail" id="I191:6858;191:4407" type="INSTANCE" */}
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
                {/* name="Text Wrapper" id="I191:6858;191:4408" type="FRAME" */}
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
              </Flex>
              {/* name="🧬 item 2" id="191:6859" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-padding, 16px)",
                }}
              >
                {/* name="Icon Wrapper" id="I191:6859;191:4415" type="FRAME" */}
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
                  {/* name=".steps__item_progress" id="I191:6859;191:4416" type="INSTANCE" */}
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
                  {/* name=".steps__item_tail" id="I191:6859;191:4417" type="INSTANCE" */}
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
                {/* name="Text Wrapper" id="I191:6859;191:4418" type="FRAME" */}
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
              </Flex>
              {/* name="🧬 item 3" id="191:6860" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-padding, 16px)",
                }}
              >
                {/* name="Icon Wrapper" id="I191:6860;191:4415" type="FRAME" */}
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
                  {/* name=".steps__item_progress" id="I191:6860;191:4416" type="INSTANCE" */}
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
                  {/* name=".steps__item_tail" id="I191:6860;191:4417" type="INSTANCE" */}
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
                {/* name="Text Wrapper" id="I191:6860;191:4418" type="FRAME" */}
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
                      height: "22px",
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
              </Flex>
              {/* name="🧬 item 4" id="191:6861" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-padding, 16px)",
                }}
              >
                {/* name="Icon Wrapper" id="I191:6861;191:4415" type="FRAME" */}
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
                  {/* name=".steps__item_progress" id="I191:6861;191:4416" type="INSTANCE" */}
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
                  {/* name=".steps__item_tail" id="I191:6861;191:4417" type="INSTANCE" */}
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
                {/* name="Text Wrapper" id="I191:6861;191:4418" type="FRAME" */}
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
              </Flex>
              {/* name="🧬 item 5" id="191:6862" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-padding, 16px)",
                }}
              >
                {/* name="Icon Wrapper" id="I191:6862;191:4415" type="FRAME" */}
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
                  {/* name=".steps__item_progress" id="I191:6862;191:4416" type="INSTANCE" */}
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
                  {/* name=".steps__item_tail" id="I191:6862;191:4417" type="INSTANCE" */}
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
                {/* name="Text Wrapper" id="I191:6862;191:4418" type="FRAME" */}
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
              </Flex>
            </div>
          </>
        )}
      {/* id="191:7087" */}
      {`${size}` === `small` &&
        `${direction}` === `vertical` &&
        `${items}` === `2` && (
          <>
            {/* name="size=small, direction=vertical, items=2" id="191:7087" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "272px",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                gap: "var(--size-padding-paddingxs, 8px)",
              }}
            >
              {/* name="🧬 item 1" id="191:7088" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-padding, 16px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name="Icon Wrapper" id="I191:7088;191:4512" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    width: "24px",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "6px",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name=".steps__item_progress" id="I191:7088;191:4513" type="INSTANCE" */}
                  <QodeSteps
                    style={{
                      display: "flex",
                      width: "24px",
                      height: "var(--size-height-controlheightsm, 24px)",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "999px",
                      background: "var(--background-bg-primary, #1597f4)",
                    }}
                    {...{ step: "2", status: "finish", size: "small" }}
                  />
                  {/* name=".steps__item_tail" id="I191:7088;191:4514" type="INSTANCE" */}
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
                {/* name="Text Wrapper" id="I191:7088;191:4515" type="FRAME" */}
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
              </Flex>
              {/* name="🧬 item 2" id="191:7089" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-padding, 16px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name="Icon Wrapper" id="I191:7089;191:4519" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    width: "24px",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "6px",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name=".steps__item_progress" id="I191:7089;191:4520" type="INSTANCE" */}
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
                  {/* name=".steps__item_tail" id="I191:7089;191:4521" type="INSTANCE" */}
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
                {/* name="Text Wrapper" id="I191:7089;191:4522" type="FRAME" */}
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
              </Flex>
            </div>
          </>
        )}
      {/* id="191:7090" */}
      {`${size}` === `small` &&
        `${direction}` === `vertical` &&
        `${items}` === `3` && (
          <>
            {/* name="size=small, direction=vertical, items=3" id="191:7090" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "272px",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                gap: "var(--size-padding-paddingxs, 8px)",
              }}
            >
              {/* name="🧬 item 1" id="191:7091" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-padding, 16px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name="Icon Wrapper" id="I191:7091;191:4512" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    width: "24px",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "6px",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name=".steps__item_progress" id="I191:7091;191:4513" type="INSTANCE" */}
                  <QodeSteps
                    style={{
                      display: "flex",
                      width: "24px",
                      height: "var(--size-height-controlheightsm, 24px)",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "999px",
                      background: "var(--background-bg-primary, #1597f4)",
                    }}
                    {...{ step: "2", status: "finish", size: "small" }}
                  />
                  {/* name=".steps__item_tail" id="I191:7091;191:4514" type="INSTANCE" */}
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
                {/* name="Text Wrapper" id="I191:7091;191:4515" type="FRAME" */}
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
              </Flex>
              {/* name="🧬 item 2" id="191:7092" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-padding, 16px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name="Icon Wrapper" id="I191:7092;191:4519" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    width: "24px",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "6px",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name=".steps__item_progress" id="I191:7092;191:4520" type="INSTANCE" */}
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
                  {/* name=".steps__item_tail" id="I191:7092;191:4521" type="INSTANCE" */}
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
                {/* name="Text Wrapper" id="I191:7092;191:4522" type="FRAME" */}
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
              </Flex>
              {/* name="🧬 item 3" id="191:7093" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-padding, 16px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name="Icon Wrapper" id="I191:7093;191:4519" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    width: "24px",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "6px",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name=".steps__item_progress" id="I191:7093;191:4520" type="INSTANCE" */}
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
                  {/* name=".steps__item_tail" id="I191:7093;191:4521" type="INSTANCE" */}
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
                {/* name="Text Wrapper" id="I191:7093;191:4522" type="FRAME" */}
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
              </Flex>
            </div>
          </>
        )}
      {/* id="191:7094" */}
      {`${size}` === `small` &&
        `${direction}` === `vertical` &&
        `${items}` === `4` && (
          <>
            {/* name="size=small, direction=vertical, items=4" id="191:7094" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                gap: "var(--size-padding-paddingxs, 8px)",
              }}
            >
              {/* name="🧬 item 1" id="191:7095" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-padding, 16px)",
                }}
              >
                {/* name="Icon Wrapper" id="I191:7095;191:4512" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    width: "24px",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "6px",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name=".steps__item_progress" id="I191:7095;191:4513" type="INSTANCE" */}
                  <QodeSteps
                    style={{
                      display: "flex",
                      width: "24px",
                      height: "var(--size-height-controlheightsm, 24px)",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "999px",
                      background: "var(--background-bg-primary, #1597f4)",
                    }}
                    {...{ step: "2", status: "finish", size: "small" }}
                  />
                  {/* name=".steps__item_tail" id="I191:7095;191:4514" type="INSTANCE" */}
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
                {/* name="Text Wrapper" id="I191:7095;191:4515" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    width: "232px",
                    paddingBottom: "var(--size-padding-paddingsm, 12px)",
                    flexDirection: "column",
                    alignItems: "flex-start",
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
              </Flex>
              {/* name="🧬 item 2" id="191:7096" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-padding, 16px)",
                }}
              >
                {/* name="Icon Wrapper" id="I191:7096;191:4519" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    width: "24px",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "6px",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name=".steps__item_progress" id="I191:7096;191:4520" type="INSTANCE" */}
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
                  {/* name=".steps__item_tail" id="I191:7096;191:4521" type="INSTANCE" */}
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
                {/* name="Text Wrapper" id="I191:7096;191:4522" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    width: "232px",
                    paddingBottom: "var(--size-padding-paddingsm, 12px)",
                    flexDirection: "column",
                    alignItems: "flex-start",
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
              </Flex>
              {/* name="🧬 item 3" id="191:7097" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-padding, 16px)",
                }}
              >
                {/* name="Icon Wrapper" id="I191:7097;191:4519" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    width: "24px",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "6px",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name=".steps__item_progress" id="I191:7097;191:4520" type="INSTANCE" */}
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
                  {/* name=".steps__item_tail" id="I191:7097;191:4521" type="INSTANCE" */}
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
                {/* name="Text Wrapper" id="I191:7097;191:4522" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    width: "232px",
                    paddingBottom: "var(--size-padding-paddingsm, 12px)",
                    flexDirection: "column",
                    alignItems: "flex-start",
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
              </Flex>
              {/* name="🧬 item 4" id="191:7098" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-padding, 16px)",
                }}
              >
                {/* name="Icon Wrapper" id="I191:7098;191:4519" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    width: "24px",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "6px",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name=".steps__item_progress" id="I191:7098;191:4520" type="INSTANCE" */}
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
                  {/* name=".steps__item_tail" id="I191:7098;191:4521" type="INSTANCE" */}
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
                {/* name="Text Wrapper" id="I191:7098;191:4522" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    width: "232px",
                    paddingBottom: "var(--size-padding-paddingsm, 12px)",
                    flexDirection: "column",
                    alignItems: "flex-start",
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
              </Flex>
            </div>
          </>
        )}
      {/* id="191:7099" */}
      {`${size}` === `small` &&
        `${direction}` === `vertical` &&
        `${items}` === `5` && (
          <>
            {/* name="size=small, direction=vertical, items=5" id="191:7099" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                gap: "var(--size-padding-paddingxs, 8px)",
              }}
            >
              {/* name="🧬 item 1" id="191:7100" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-padding, 16px)",
                }}
              >
                {/* name="Icon Wrapper" id="I191:7100;191:4512" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    width: "24px",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "6px",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name=".steps__item_progress" id="I191:7100;191:4513" type="INSTANCE" */}
                  <QodeSteps
                    style={{
                      display: "flex",
                      width: "24px",
                      height: "var(--size-height-controlheightsm, 24px)",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "999px",
                      background: "var(--background-bg-primary, #1597f4)",
                    }}
                    {...{ step: "2", status: "finish", size: "small" }}
                  />
                  {/* name=".steps__item_tail" id="I191:7100;191:4514" type="INSTANCE" */}
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
                {/* name="Text Wrapper" id="I191:7100;191:4515" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    width: "232px",
                    paddingBottom: "var(--size-padding-paddingsm, 12px)",
                    flexDirection: "column",
                    alignItems: "flex-start",
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
              </Flex>
              {/* name="🧬 item 2" id="191:7101" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-padding, 16px)",
                }}
              >
                {/* name="Icon Wrapper" id="I191:7101;191:4519" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    width: "24px",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "6px",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name=".steps__item_progress" id="I191:7101;191:4520" type="INSTANCE" */}
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
                  {/* name=".steps__item_tail" id="I191:7101;191:4521" type="INSTANCE" */}
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
                {/* name="Text Wrapper" id="I191:7101;191:4522" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    width: "232px",
                    paddingBottom: "var(--size-padding-paddingsm, 12px)",
                    flexDirection: "column",
                    alignItems: "flex-start",
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
              </Flex>
              {/* name="🧬 item 3" id="191:7102" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-padding, 16px)",
                }}
              >
                {/* name="Icon Wrapper" id="I191:7102;191:4519" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    width: "24px",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "6px",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name=".steps__item_progress" id="I191:7102;191:4520" type="INSTANCE" */}
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
                  {/* name=".steps__item_tail" id="I191:7102;191:4521" type="INSTANCE" */}
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
                {/* name="Text Wrapper" id="I191:7102;191:4522" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    width: "232px",
                    paddingBottom: "var(--size-padding-paddingsm, 12px)",
                    flexDirection: "column",
                    alignItems: "flex-start",
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
              </Flex>
              {/* name="🧬 item 4" id="191:7103" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-padding, 16px)",
                }}
              >
                {/* name="Icon Wrapper" id="I191:7103;191:4519" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    width: "24px",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "6px",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name=".steps__item_progress" id="I191:7103;191:4520" type="INSTANCE" */}
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
                  {/* name=".steps__item_tail" id="I191:7103;191:4521" type="INSTANCE" */}
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
                {/* name="Text Wrapper" id="I191:7103;191:4522" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    width: "232px",
                    paddingBottom: "var(--size-padding-paddingsm, 12px)",
                    flexDirection: "column",
                    alignItems: "flex-start",
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
              </Flex>
              {/* name="🧬 item 5" id="191:7104" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-padding, 16px)",
                }}
              >
                {/* name="Icon Wrapper" id="I191:7104;191:4519" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    width: "24px",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "6px",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name=".steps__item_progress" id="I191:7104;191:4520" type="INSTANCE" */}
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
                  {/* name=".steps__item_tail" id="I191:7104;191:4521" type="INSTANCE" */}
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
                {/* name="Text Wrapper" id="I191:7104;191:4522" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    width: "232px",
                    paddingBottom: "var(--size-padding-paddingsm, 12px)",
                    flexDirection: "column",
                    alignItems: "flex-start",
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
              </Flex>
            </div>
          </>
        )}
      {/* id="191:7329" */}
      {`${size}` === `dot` &&
        `${direction}` === `vertical` &&
        `${items}` === `2` && (
          <>
            {/* name="size=dot, direction=vertical, items=2" id="191:7329" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "272px",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                gap: "var(--size-padding-paddingxs, 8px)",
              }}
            >
              {/* name="🧬 item 1" id="191:7330" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-padding, 16px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name="Icon Wrapper" id="I191:7330;191:4628" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    width: "8px",
                    paddingTop: "7px",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    gap: "6px",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name=".steps__item_progress" id="I191:7330;191:4629" type="INSTANCE" */}
                  <QodeSteps
                    style={{
                      display: "flex",
                      width: "8px",
                      height: "8px",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "999px",
                      background: "var(--background-bg-green-hover, #11a620)",
                    }}
                    {...{ step: "2", status: "finish", size: "dot" }}
                  />
                  {/* name=".steps__item_tail" id="I191:7330;191:4630" type="INSTANCE" */}
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
                {/* name="Text Wrapper" id="I191:7330;191:4631" type="FRAME" */}
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
              </Flex>
              {/* name="🧬 item 2" id="191:7331" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-padding, 16px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name="Icon Wrapper" id="I191:7331;191:4635" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    width: "8px",
                    paddingTop: "7px",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    gap: "6px",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name=".steps__item_progress" id="I191:7331;191:4636" type="INSTANCE" */}
                  <QodeSteps
                    style={{
                      display: "flex",
                      width: "8px",
                      height: "8px",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "999px",
                      background: "var(--background-bg-green-hover, #11a620)",
                    }}
                    {...{ step: "2", status: "finish", size: "dot" }}
                  />
                  {/* name=".steps__item_tail" id="I191:7331;191:4637" type="INSTANCE" */}
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
                {/* name="Text Wrapper" id="I191:7331;191:4638" type="FRAME" */}
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
              </Flex>
            </div>
          </>
        )}
      {/* id="191:7332" */}
      {`${size}` === `dot` &&
        `${direction}` === `vertical` &&
        `${items}` === `3` && (
          <>
            {/* name="size=dot, direction=vertical, items=3" id="191:7332" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "272px",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                gap: "var(--size-padding-paddingxs, 8px)",
              }}
            >
              {/* name="🧬 item 1" id="191:7333" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-padding, 16px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name="Icon Wrapper" id="I191:7333;191:4628" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    width: "8px",
                    paddingTop: "7px",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    gap: "6px",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name=".steps__item_progress" id="I191:7333;191:4629" type="INSTANCE" */}
                  <QodeSteps
                    style={{
                      display: "flex",
                      width: "8px",
                      height: "8px",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "999px",
                      background: "var(--background-bg-green-hover, #11a620)",
                    }}
                    {...{ step: "2", status: "finish", size: "dot" }}
                  />
                  {/* name=".steps__item_tail" id="I191:7333;191:4630" type="INSTANCE" */}
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
                {/* name="Text Wrapper" id="I191:7333;191:4631" type="FRAME" */}
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
              </Flex>
              {/* name="🧬 item 2" id="191:7334" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-padding, 16px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name="Icon Wrapper" id="I191:7334;191:4635" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    width: "8px",
                    paddingTop: "7px",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    gap: "6px",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name=".steps__item_progress" id="I191:7334;191:4636" type="INSTANCE" */}
                  <QodeSteps
                    style={{
                      display: "flex",
                      width: "8px",
                      height: "8px",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "999px",
                      background: "var(--background-bg-green-hover, #11a620)",
                    }}
                    {...{ step: "2", status: "finish", size: "dot" }}
                  />
                  {/* name=".steps__item_tail" id="I191:7334;191:4637" type="INSTANCE" */}
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
                {/* name="Text Wrapper" id="I191:7334;191:4638" type="FRAME" */}
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
              </Flex>
              {/* name="🧬 item 3" id="191:7335" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-padding, 16px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name="Icon Wrapper" id="I191:7335;191:4635" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    width: "8px",
                    paddingTop: "7px",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    gap: "6px",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name=".steps__item_progress" id="I191:7335;191:4636" type="INSTANCE" */}
                  <QodeSteps
                    style={{
                      display: "flex",
                      width: "8px",
                      height: "8px",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "999px",
                      background: "var(--background-bg-green-hover, #11a620)",
                    }}
                    {...{ step: "2", status: "finish", size: "dot" }}
                  />
                  {/* name=".steps__item_tail" id="I191:7335;191:4637" type="INSTANCE" */}
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
                {/* name="Text Wrapper" id="I191:7335;191:4638" type="FRAME" */}
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
              </Flex>
            </div>
          </>
        )}
      {/* id="191:7336" */}
      {`${size}` === `dot` &&
        `${direction}` === `vertical` &&
        `${items}` === `4` && (
          <>
            {/* name="size=dot, direction=vertical, items=4" id="191:7336" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                gap: "var(--size-padding-paddingxs, 8px)",
              }}
            >
              {/* name="🧬 item 1" id="191:7337" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-padding, 16px)",
                }}
              >
                {/* name="Icon Wrapper" id="I191:7337;191:4628" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    width: "8px",
                    paddingTop: "7px",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    gap: "6px",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name=".steps__item_progress" id="I191:7337;191:4629" type="INSTANCE" */}
                  <QodeSteps
                    style={{
                      display: "flex",
                      width: "8px",
                      height: "8px",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "999px",
                      background: "var(--background-bg-green-hover, #11a620)",
                    }}
                    {...{ step: "2", status: "finish", size: "dot" }}
                  />
                  {/* name=".steps__item_tail" id="I191:7337;191:4630" type="INSTANCE" */}
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
                {/* name="Text Wrapper" id="I191:7337;191:4631" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    width: "248px",
                    paddingBottom: "var(--size-padding-paddingsm, 12px)",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "var(--size-padding-paddingxxs, 4px)",
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
              </Flex>
              {/* name="🧬 item 2" id="191:7338" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-padding, 16px)",
                }}
              >
                {/* name="Icon Wrapper" id="I191:7338;191:4635" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    width: "8px",
                    paddingTop: "7px",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    gap: "6px",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name=".steps__item_progress" id="I191:7338;191:4636" type="INSTANCE" */}
                  <QodeSteps
                    style={{
                      display: "flex",
                      width: "8px",
                      height: "8px",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "999px",
                      background: "var(--background-bg-green-hover, #11a620)",
                    }}
                    {...{ step: "2", status: "finish", size: "dot" }}
                  />
                  {/* name=".steps__item_tail" id="I191:7338;191:4637" type="INSTANCE" */}
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
                {/* name="Text Wrapper" id="I191:7338;191:4638" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    width: "248px",
                    paddingBottom: "var(--size-padding-paddingsm, 12px)",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "var(--size-padding-paddingxxs, 4px)",
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
              </Flex>
              {/* name="🧬 item 3" id="191:7339" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-padding, 16px)",
                }}
              >
                {/* name="Icon Wrapper" id="I191:7339;191:4635" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    width: "8px",
                    paddingTop: "7px",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    gap: "6px",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name=".steps__item_progress" id="I191:7339;191:4636" type="INSTANCE" */}
                  <QodeSteps
                    style={{
                      display: "flex",
                      width: "8px",
                      height: "8px",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "999px",
                      background: "var(--background-bg-green-hover, #11a620)",
                    }}
                    {...{ step: "2", status: "finish", size: "dot" }}
                  />
                  {/* name=".steps__item_tail" id="I191:7339;191:4637" type="INSTANCE" */}
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
                {/* name="Text Wrapper" id="I191:7339;191:4638" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    width: "248px",
                    paddingBottom: "var(--size-padding-paddingsm, 12px)",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "var(--size-padding-paddingxxs, 4px)",
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
              </Flex>
              {/* name="🧬 item 4" id="191:7340" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-padding, 16px)",
                }}
              >
                {/* name="Icon Wrapper" id="I191:7340;191:4635" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    width: "8px",
                    paddingTop: "7px",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    gap: "6px",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name=".steps__item_progress" id="I191:7340;191:4636" type="INSTANCE" */}
                  <QodeSteps
                    style={{
                      display: "flex",
                      width: "8px",
                      height: "8px",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "999px",
                      background: "var(--background-bg-green-hover, #11a620)",
                    }}
                    {...{ step: "2", status: "finish", size: "dot" }}
                  />
                  {/* name=".steps__item_tail" id="I191:7340;191:4637" type="INSTANCE" */}
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
                {/* name="Text Wrapper" id="I191:7340;191:4638" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    width: "248px",
                    paddingBottom: "var(--size-padding-paddingsm, 12px)",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "var(--size-padding-paddingxxs, 4px)",
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
              </Flex>
            </div>
          </>
        )}
      {/* id="191:7341" */}
      {`${size}` === `dot` &&
        `${direction}` === `vertical` &&
        `${items}` === `5` && (
          <>
            {/* name="size=dot, direction=vertical, items=5" id="191:7341" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                gap: "var(--size-padding-paddingxs, 8px)",
              }}
            >
              {/* name="🧬 item 1" id="191:7342" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-padding, 16px)",
                }}
              >
                {/* name="Icon Wrapper" id="I191:7342;191:4628" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    width: "8px",
                    paddingTop: "7px",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    gap: "6px",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name=".steps__item_progress" id="I191:7342;191:4629" type="INSTANCE" */}
                  <QodeSteps
                    style={{
                      display: "flex",
                      width: "8px",
                      height: "8px",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "999px",
                      background: "var(--background-bg-green-hover, #11a620)",
                    }}
                    {...{ step: "2", status: "finish", size: "dot" }}
                  />
                  {/* name=".steps__item_tail" id="I191:7342;191:4630" type="INSTANCE" */}
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
                {/* name="Text Wrapper" id="I191:7342;191:4631" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    width: "248px",
                    paddingBottom: "var(--size-padding-paddingsm, 12px)",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "var(--size-padding-paddingxxs, 4px)",
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
              </Flex>
              {/* name="🧬 item 2" id="191:7343" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-padding, 16px)",
                }}
              >
                {/* name="Icon Wrapper" id="I191:7343;191:4635" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    width: "8px",
                    paddingTop: "7px",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    gap: "6px",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name=".steps__item_progress" id="I191:7343;191:4636" type="INSTANCE" */}
                  <QodeSteps
                    style={{
                      display: "flex",
                      width: "8px",
                      height: "8px",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "999px",
                      background: "var(--background-bg-green-hover, #11a620)",
                    }}
                    {...{ step: "2", status: "finish", size: "dot" }}
                  />
                  {/* name=".steps__item_tail" id="I191:7343;191:4637" type="INSTANCE" */}
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
                {/* name="Text Wrapper" id="I191:7343;191:4638" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    width: "248px",
                    paddingBottom: "var(--size-padding-paddingsm, 12px)",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "var(--size-padding-paddingxxs, 4px)",
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
              </Flex>
              {/* name="🧬 item 3" id="191:7344" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-padding, 16px)",
                }}
              >
                {/* name="Icon Wrapper" id="I191:7344;191:4635" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    width: "8px",
                    paddingTop: "7px",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    gap: "6px",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name=".steps__item_progress" id="I191:7344;191:4636" type="INSTANCE" */}
                  <QodeSteps
                    style={{
                      display: "flex",
                      width: "8px",
                      height: "8px",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "999px",
                      background: "var(--background-bg-green-hover, #11a620)",
                    }}
                    {...{ step: "2", status: "finish", size: "dot" }}
                  />
                  {/* name=".steps__item_tail" id="I191:7344;191:4637" type="INSTANCE" */}
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
                {/* name="Text Wrapper" id="I191:7344;191:4638" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    width: "248px",
                    paddingBottom: "var(--size-padding-paddingsm, 12px)",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "var(--size-padding-paddingxxs, 4px)",
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
              </Flex>
              {/* name="🧬 item 4" id="191:7345" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-padding, 16px)",
                }}
              >
                {/* name="Icon Wrapper" id="I191:7345;191:4635" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    width: "8px",
                    paddingTop: "7px",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    gap: "6px",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name=".steps__item_progress" id="I191:7345;191:4636" type="INSTANCE" */}
                  <QodeSteps
                    style={{
                      display: "flex",
                      width: "8px",
                      height: "8px",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "999px",
                      background: "var(--background-bg-green-hover, #11a620)",
                    }}
                    {...{ step: "2", status: "finish", size: "dot" }}
                  />
                  {/* name=".steps__item_tail" id="I191:7345;191:4637" type="INSTANCE" */}
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
                {/* name="Text Wrapper" id="I191:7345;191:4638" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    width: "248px",
                    paddingBottom: "var(--size-padding-paddingsm, 12px)",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "var(--size-padding-paddingxxs, 4px)",
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
              </Flex>
              {/* name="🧬 item 5" id="191:7346" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-padding, 16px)",
                }}
              >
                {/* name="Icon Wrapper" id="I191:7346;191:4635" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    width: "8px",
                    paddingTop: "7px",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    gap: "6px",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name=".steps__item_progress" id="I191:7346;191:4636" type="INSTANCE" */}
                  <QodeSteps
                    style={{
                      display: "flex",
                      width: "8px",
                      height: "8px",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "999px",
                      background: "var(--background-bg-green-hover, #11a620)",
                    }}
                    {...{ step: "2", status: "finish", size: "dot" }}
                  />
                  {/* name=".steps__item_tail" id="I191:7346;191:4637" type="INSTANCE" */}
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
                {/* name="Text Wrapper" id="I191:7346;191:4638" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    width: "248px",
                    paddingBottom: "var(--size-padding-paddingsm, 12px)",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "var(--size-padding-paddingxxs, 4px)",
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
              </Flex>
            </div>
          </>
        )}
    </>
  )
}
