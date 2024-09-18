// id="6160:6"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg61608 from "@designSystem/icon/svg/QodeSvg61608"
import QodeSvg61609 from "@designSystem/icon/svg/QodeSvg61609"
import QodeSvg616010 from "@designSystem/icon/svg/QodeSvg616010"
import QodeSvg616013 from "@designSystem/icon/svg/QodeSvg616013"
import QodeSvg616014 from "@designSystem/icon/svg/QodeSvg616014"
import QodeSvg616015 from "@designSystem/icon/svg/QodeSvg616015"
import QodeSvg616018 from "@designSystem/icon/svg/QodeSvg616018"
import QodeSvg616019 from "@designSystem/icon/svg/QodeSvg616019"
import QodeSvg616020 from "@designSystem/icon/svg/QodeSvg616020"
import QodeSvg616023 from "@designSystem/icon/svg/QodeSvg616023"
import QodeSvg616024 from "@designSystem/icon/svg/QodeSvg616024"
import QodeSvg616025 from "@designSystem/icon/svg/QodeSvg616025"
import QodeSvg616027 from "@designSystem/icon/svg/QodeSvg616027"
import QodeSvg616030 from "@designSystem/icon/svg/QodeSvg616030"
import QodeSvg616032 from "@designSystem/icon/svg/QodeSvg616032"
import QodeSvg616035 from "@designSystem/icon/svg/QodeSvg616035"
import QodeSvg616037 from "@designSystem/icon/svg/QodeSvg616037"
import QodeSvg616040 from "@designSystem/icon/svg/QodeSvg616040"
import QodeSvg616042 from "@designSystem/icon/svg/QodeSvg616042"
import QodeSvg616045 from "@designSystem/icon/svg/QodeSvg616045"

export interface QodeCustom61606Props {
  type?: "Default" | "mono"
  darkmode?: "yes" | "no"
  orientation?: "portrait" | "landscape"
  wordmark?: "yes" | "no"
}

export const QodeCustom61606: React.FC<
  QodeCustom61606Props & { style?: CSSProperties }
> = ({
  type = "Default",
  darkmode = "yes",
  orientation = "landscape",
  wordmark = "yes",
  ...rest
}) => {
  return (
    <>
      {/* name="logo" id="6160:6" type="COMPONENT_SET" */}
      {/* id="6160:7" */}
      {`${type}` === `Default` &&
        `${darkmode}` === `yes` &&
        `${orientation}` === `landscape` &&
        `${wordmark}` === `yes` && (
          <>
            {/* name="type=Default, ?darkmode=yes, orientation=landscape, ?wordmark=yes" id="6160:7" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "294px",
                height: "99px",
                justifyContent: "center",
                alignItems: "center",
                gap: "16px",
                flexShrink: "0",
              }}
            >
              {/* name="symbol" id="6160:8" type="VECTOR" */}
              <QodeSvg61608
                style={{
                  width: "114px",
                  height: "99px",
                  flexShrink: "0",
                  fill: "var(--primary-primary-50, #1597f4)",
                  strokeWidth: "2px",
                  stroke: "var(--border-border-primary-20, #158de2)",
                }}
                {...{}}
              />
              {/* name="wordmark" id="6160:9" type="VECTOR" */}
              <QodeSvg61609
                style={{
                  width: "164px",
                  height: "65px",
                  flexShrink: "0",
                  fill: "var(--brands-black, #000)",
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="6160:10" */}
      {`${type}` === `Default` &&
        `${darkmode}` === `yes` &&
        `${orientation}` === `landscape` &&
        `${wordmark}` === `no` && (
          <>
            {/* name="type=Default, ?darkmode=yes, orientation=landscape, ?wordmark=no" id="6160:10" type="COMPONENT" */}
            <QodeSvg616010
              style={{ width: "100px", height: "100px", flexShrink: "0" }}
              {...{}}
            />
          </>
        )}
      {/* id="6160:12" */}
      {`${type}` === `Default` &&
        `${darkmode}` === `no` &&
        `${orientation}` === `landscape` &&
        `${wordmark}` === `yes` && (
          <>
            {/* name="type=Default, ?darkmode=no, orientation=landscape, ?wordmark=yes" id="6160:12" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "294px",
                height: "99px",
                justifyContent: "center",
                alignItems: "center",
                gap: "16px",
                flexShrink: "0",
              }}
            >
              {/* name="symbol" id="6160:13" type="VECTOR" */}
              <QodeSvg616013
                style={{
                  width: "114px",
                  height: "99px",
                  flexShrink: "0",
                  fill: "var(--primary-primary-50, #1597f4)",
                  strokeWidth: "2px",
                  stroke: "var(--border-border-primary-20, #158de2)",
                }}
                {...{}}
              />
              {/* name="wordmark" id="6160:14" type="VECTOR" */}
              <QodeSvg616014
                style={{
                  width: "164px",
                  height: "65px",
                  flexShrink: "0",
                  fill: "var(--brands-white, #fff)",
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="6160:15" */}
      {`${type}` === `Default` &&
        `${darkmode}` === `no` &&
        `${orientation}` === `landscape` &&
        `${wordmark}` === `no` && (
          <>
            {/* name="type=Default, ?darkmode=no, orientation=landscape, ?wordmark=no" id="6160:15" type="COMPONENT" */}
            <QodeSvg616015
              style={{ width: "100px", height: "100px", flexShrink: "0" }}
              {...{}}
            />
          </>
        )}
      {/* id="6160:17" */}
      {`${type}` === `mono` &&
        `${darkmode}` === `yes` &&
        `${orientation}` === `landscape` &&
        `${wordmark}` === `yes` && (
          <>
            {/* name="type=mono, ?darkmode=yes, orientation=landscape, ?wordmark=yes" id="6160:17" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "294px",
                height: "99px",
                justifyContent: "center",
                alignItems: "center",
                gap: "16px",
                flexShrink: "0",
              }}
            >
              {/* name="symbol" id="6160:18" type="VECTOR" */}
              <QodeSvg616018
                style={{
                  width: "114px",
                  height: "99px",
                  flexShrink: "0",
                  fill: "var(--brands-black, #000)",
                  filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
                }}
                {...{}}
              />
              {/* name="wordmark" id="6160:19" type="VECTOR" */}
              <QodeSvg616019
                style={{
                  width: "164px",
                  height: "65px",
                  flexShrink: "0",
                  fill: "var(--brands-black, #000)",
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="6160:20" */}
      {`${type}` === `mono` &&
        `${darkmode}` === `yes` &&
        `${orientation}` === `landscape` &&
        `${wordmark}` === `no` && (
          <>
            {/* name="type=mono, ?darkmode=yes, orientation=landscape, ?wordmark=no" id="6160:20" type="COMPONENT" */}
            <QodeSvg616020
              style={{ width: "100px", height: "100px", flexShrink: "0" }}
              {...{}}
            />
          </>
        )}
      {/* id="6160:22" */}
      {`${type}` === `mono` &&
        `${darkmode}` === `no` &&
        `${orientation}` === `landscape` &&
        `${wordmark}` === `yes` && (
          <>
            {/* name="type=mono, ?darkmode=no, orientation=landscape, ?wordmark=yes" id="6160:22" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "294px",
                height: "99px",
                justifyContent: "center",
                alignItems: "center",
                gap: "16px",
                flexShrink: "0",
              }}
            >
              {/* name="symbol" id="6160:23" type="VECTOR" */}
              <QodeSvg616023
                style={{
                  width: "114px",
                  height: "99px",
                  flexShrink: "0",
                  fill: "var(--brands-white, #fff)",
                  strokeWidth: "1px",
                  stroke: "var(--border-border-primary-20, #158de2)",
                }}
                {...{}}
              />
              {/* name="wordmark" id="6160:24" type="VECTOR" */}
              <QodeSvg616024
                style={{
                  width: "164px",
                  height: "65px",
                  flexShrink: "0",
                  fill: "var(--brands-white, #fff)",
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="6160:25" */}
      {`${type}` === `mono` &&
        `${darkmode}` === `no` &&
        `${orientation}` === `landscape` &&
        `${wordmark}` === `no` && (
          <>
            {/* name="type=mono, ?darkmode=no, orientation=landscape, ?wordmark=no" id="6160:25" type="COMPONENT" */}
            <QodeSvg616025
              style={{ width: "100px", height: "100px", flexShrink: "0" }}
              {...{}}
            />
          </>
        )}
      {/* id="6160:27" */}
      {`${type}` === `Default` &&
        `${darkmode}` === `yes` &&
        `${orientation}` === `portrait` &&
        `${wordmark}` === `yes` && (
          <>
            {/* name="type=Default, ?darkmode=yes, orientation=portrait, ?wordmark=yes" id="6160:27" type="COMPONENT" */}
            <QodeSvg616027
              style={{ width: "164px", height: "180px", flexShrink: "0" }}
              {...{}}
            />
          </>
        )}
      {/* id="6160:30" */}
      {`${type}` === `Default` &&
        `${darkmode}` === `yes` &&
        `${orientation}` === `portrait` &&
        `${wordmark}` === `no` && (
          <>
            {/* name="type=Default, ?darkmode=yes, orientation=portrait, ?wordmark=no" id="6160:30" type="COMPONENT" */}
            <QodeSvg616030
              style={{ width: "100px", height: "100px", flexShrink: "0" }}
              {...{}}
            />
          </>
        )}
      {/* id="6160:32" */}
      {`${type}` === `Default` &&
        `${darkmode}` === `no` &&
        `${orientation}` === `portrait` &&
        `${wordmark}` === `yes` && (
          <>
            {/* name="type=Default, ?darkmode=no, orientation=portrait, ?wordmark=yes" id="6160:32" type="COMPONENT" */}
            <QodeSvg616032
              style={{ width: "164px", height: "180px", flexShrink: "0" }}
              {...{}}
            />
          </>
        )}
      {/* id="6160:35" */}
      {`${type}` === `Default` &&
        `${darkmode}` === `no` &&
        `${orientation}` === `portrait` &&
        `${wordmark}` === `no` && (
          <>
            {/* name="type=Default, ?darkmode=no, orientation=portrait, ?wordmark=no" id="6160:35" type="COMPONENT" */}
            <QodeSvg616035
              style={{ width: "100px", height: "100px", flexShrink: "0" }}
              {...{}}
            />
          </>
        )}
      {/* id="6160:37" */}
      {`${type}` === `mono` &&
        `${darkmode}` === `yes` &&
        `${orientation}` === `portrait` &&
        `${wordmark}` === `yes` && (
          <>
            {/* name="type=mono, ?darkmode=yes, orientation=portrait, ?wordmark=yes" id="6160:37" type="COMPONENT" */}
            <QodeSvg616037
              style={{ width: "164px", height: "180px", flexShrink: "0" }}
              {...{}}
            />
          </>
        )}
      {/* id="6160:40" */}
      {`${type}` === `mono` &&
        `${darkmode}` === `yes` &&
        `${orientation}` === `portrait` &&
        `${wordmark}` === `no` && (
          <>
            {/* name="type=mono, ?darkmode=yes, orientation=portrait, ?wordmark=no" id="6160:40" type="COMPONENT" */}
            <QodeSvg616040
              style={{ width: "100px", height: "100px", flexShrink: "0" }}
              {...{}}
            />
          </>
        )}
      {/* id="6160:42" */}
      {`${type}` === `mono` &&
        `${darkmode}` === `no` &&
        `${orientation}` === `portrait` &&
        `${wordmark}` === `yes` && (
          <>
            {/* name="type=mono, ?darkmode=no, orientation=portrait, ?wordmark=yes" id="6160:42" type="COMPONENT" */}
            <QodeSvg616042
              style={{ width: "164px", height: "180px", flexShrink: "0" }}
              {...{}}
            />
          </>
        )}
      {/* id="6160:45" */}
      {`${type}` === `mono` &&
        `${darkmode}` === `no` &&
        `${orientation}` === `portrait` &&
        `${wordmark}` === `no` && (
          <>
            {/* name="type=mono, ?darkmode=no, orientation=portrait, ?wordmark=no" id="6160:45" type="COMPONENT" */}
            <QodeSvg616045
              style={{ width: "100px", height: "100px", flexShrink: "0" }}
              {...{}}
            />
          </>
        )}
    </>
  )
}
