// id="162:2200"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg162794 from "@designSystem/icon/svg/QodeSvg162794"
import QodeSvg162796 from "@designSystem/icon/svg/QodeSvg162796"

export interface QodeCustom1622200Props {
  position?: "Bottom" | "Top" | "Left" | "Right"
}

export const QodeCustom1622200: React.FC<
  QodeCustom1622200Props & { style?: CSSProperties }
> = ({ position = "Bottom", ...rest }) => {
  return (
    <>
      {/* name="Carousel" id="162:2200" type="COMPONENT_SET" */}
      {/* id="162:2199" */}
      {`${position}` === `Bottom` && (
        <>
          {/* name="Position=Bottom" id="162:2199" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "800px",
              height: "320px",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "10px",
              flexShrink: "0",
            }}
          >
            {/* name="Background" id="162:2188" type="RECTANGLE" */}
            <Flex
              style={{
                flex: "1 0 0",
                alignSelf: "stretch",
                background: "var(--color-primary-colorprimary, #1597f4)",
              }}
            >
              {/* name="Background" id=162:2188 type=RECTANGLE */}
              <></>
            </Flex>
            {/* name="🧬 dots" id="162:2189" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "var(--size-padding-paddingxs, 8px)",
                position: "absolute",
                left: "352px",
                bottom: "16px",
              }}
            >
              {/* name="🧬 dot 1" id="I162:2189;162:1779" type="INSTANCE" */}
              <QodeSvg162794
                style={{ width: "24px", height: "3px" }}
                {...{ state: "active" }}
              />
              {/* name="🧬 dot 2" id="I162:2189;162:1780" type="INSTANCE" */}
              <QodeSvg162796
                style={{ width: "16px", height: "3px", opacity: "0.3" }}
                {...{ state: "default" }}
              />
              {/* name="🧬 dot 3" id="I162:2189;162:1781" type="INSTANCE" */}
              <QodeSvg162796
                style={{ width: "16px", height: "3px", opacity: "0.3" }}
                {...{ state: "default" }}
              />
              {/* name="🧬 dot 4" id="I162:2189;162:1785" type="INSTANCE" */}
              <QodeSvg162796
                style={{ width: "16px", height: "3px", opacity: "0.3" }}
                {...{ state: "default" }}
              />
            </Flex>
          </div>
        </>
      )}
      {/* id="162:2212" */}
      {`${position}` === `Top` && (
        <>
          {/* name="Position=Top" id="162:2212" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "800px",
              height: "320px",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "10px",
              flexShrink: "0",
            }}
          >
            {/* name="Background" id="162:2213" type="RECTANGLE" */}
            <Flex
              style={{
                flex: "1 0 0",
                alignSelf: "stretch",
                background: "var(--color-primary-colorprimary, #1597f4)",
              }}
            >
              {/* name="Background" id=162:2213 type=RECTANGLE */}
              <></>
            </Flex>
            {/* name="🧬 dots" id="162:2214" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "var(--size-padding-paddingxs, 8px)",
                position: "absolute",
                left: "352px",
                top: "16px",
              }}
            >
              {/* name="🧬 dot 1" id="I162:2214;162:1779" type="INSTANCE" */}
              <QodeSvg162794
                style={{ width: "24px", height: "3px" }}
                {...{ state: "active" }}
              />
              {/* name="🧬 dot 2" id="I162:2214;162:1780" type="INSTANCE" */}
              <QodeSvg162796
                style={{ width: "16px", height: "3px", opacity: "0.3" }}
                {...{ state: "default" }}
              />
              {/* name="🧬 dot 3" id="I162:2214;162:1781" type="INSTANCE" */}
              <QodeSvg162796
                style={{ width: "16px", height: "3px", opacity: "0.3" }}
                {...{ state: "default" }}
              />
              {/* name="🧬 dot 4" id="I162:2214;162:1785" type="INSTANCE" */}
              <QodeSvg162796
                style={{ width: "16px", height: "3px", opacity: "0.3" }}
                {...{ state: "default" }}
              />
            </Flex>
          </div>
        </>
      )}
      {/* id="162:2223" */}
      {`${position}` === `Left` && (
        <>
          {/* name="Position=Left" id="162:2223" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "800px",
              height: "320px",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "10px",
              flexShrink: "0",
            }}
          >
            {/* name="Background" id="162:2224" type="RECTANGLE" */}
            <Flex
              style={{
                flex: "1 0 0",
                alignSelf: "stretch",
                background: "var(--color-primary-colorprimary, #1597f4)",
              }}
            >
              {/* name="Background" id=162:2224 type=RECTANGLE */}
              <></>
            </Flex>
            {/* name="🧬 dots" id="162:2225" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "var(--size-padding-paddingxs, 8px)",
                position: "absolute",
                left: "16px",
                top: "142px",
              }}
            >
              {/* name="🧬 dot 1" id="I162:2225;162:1858" type="INSTANCE" */}
              <QodeSvg162794
                style={{ width: "24px", height: "3px" }}
                {...{ state: "active" }}
              />
              {/* name="🧬 dot 2" id="I162:2225;162:1859" type="INSTANCE" */}
              <QodeSvg162796
                style={{ width: "16px", height: "3px", opacity: "0.3" }}
                {...{ state: "default" }}
              />
              {/* name="🧬 dot 3" id="I162:2225;162:1860" type="INSTANCE" */}
              <QodeSvg162796
                style={{ width: "16px", height: "3px", opacity: "0.3" }}
                {...{ state: "default" }}
              />
              {/* name="🧬 dot 4" id="I162:2225;162:1861" type="INSTANCE" */}
              <QodeSvg162796
                style={{ width: "16px", height: "3px", opacity: "0.3" }}
                {...{ state: "default" }}
              />
            </Flex>
          </div>
        </>
      )}
      {/* id="162:2242" */}
      {`${position}` === `Right` && (
        <>
          {/* name="Position=Right" id="162:2242" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "800px",
              height: "320px",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "10px",
              flexShrink: "0",
            }}
          >
            {/* name="Background" id="162:2243" type="RECTANGLE" */}
            <Flex
              style={{
                flex: "1 0 0",
                alignSelf: "stretch",
                background: "var(--color-primary-colorprimary, #1597f4)",
              }}
            >
              {/* name="Background" id=162:2243 type=RECTANGLE */}
              <></>
            </Flex>
            {/* name="🧬 dots" id="162:2244" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "var(--size-padding-paddingxs, 8px)",
                position: "absolute",
                right: "16px",
                top: "142px",
              }}
            >
              {/* name="🧬 dot 1" id="I162:2244;162:1858" type="INSTANCE" */}
              <QodeSvg162794
                style={{ width: "24px", height: "3px" }}
                {...{ state: "active" }}
              />
              {/* name="🧬 dot 2" id="I162:2244;162:1859" type="INSTANCE" */}
              <QodeSvg162796
                style={{ width: "16px", height: "3px", opacity: "0.3" }}
                {...{ state: "default" }}
              />
              {/* name="🧬 dot 3" id="I162:2244;162:1860" type="INSTANCE" */}
              <QodeSvg162796
                style={{ width: "16px", height: "3px", opacity: "0.3" }}
                {...{ state: "default" }}
              />
              {/* name="🧬 dot 4" id="I162:2244;162:1861" type="INSTANCE" */}
              <QodeSvg162796
                style={{ width: "16px", height: "3px", opacity: "0.3" }}
                {...{ state: "default" }}
              />
            </Flex>
          </div>
        </>
      )}
    </>
  )
}