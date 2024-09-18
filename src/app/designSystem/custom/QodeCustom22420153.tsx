// id="224:20153"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg22420351 from "@designSystem/icon/svg/QodeSvg22420351"
import QodeSvg22420355 from "@designSystem/icon/svg/QodeSvg22420355"
import QodeSvg22116619 from "@designSystem/icon/svg/QodeSvg22116619"
import QodeSvg22420361 from "@designSystem/icon/svg/QodeSvg22420361"
import QodeSvg22420363 from "@designSystem/icon/svg/QodeSvg22420363"
import QodeSvg22420364 from "@designSystem/icon/svg/QodeSvg22420364"
import QodeSvg22420365 from "@designSystem/icon/svg/QodeSvg22420365"
import QodeSvg22420367 from "@designSystem/icon/svg/QodeSvg22420367"
import QodeSvg22420156 from "@designSystem/icon/svg/QodeSvg22420156"
import QodeSvg22420160 from "@designSystem/icon/svg/QodeSvg22420160"
import QodeSvg27319116 from "@designSystem/icon/svg/QodeSvg27319116"
import QodeSvg27319118 from "@designSystem/icon/svg/QodeSvg27319118"
import QodeSvg27319119 from "@designSystem/icon/svg/QodeSvg27319119"
import QodeSvg27319120 from "@designSystem/icon/svg/QodeSvg27319120"
import QodeSvg27319122 from "@designSystem/icon/svg/QodeSvg27319122"
import QodeSvg67740238 from "@designSystem/icon/svg/QodeSvg67740238"
import QodeSvg67740242 from "@designSystem/icon/svg/QodeSvg67740242"
import QodeSvg67740270 from "@designSystem/icon/svg/QodeSvg67740270"
import QodeSvg67740272 from "@designSystem/icon/svg/QodeSvg67740272"
import QodeSvg67740273 from "@designSystem/icon/svg/QodeSvg67740273"
import QodeSvg67740274 from "@designSystem/icon/svg/QodeSvg67740274"
import QodeSvg67740276 from "@designSystem/icon/svg/QodeSvg67740276"
import QodeSvg22422150 from "@designSystem/icon/svg/QodeSvg22422150"
import QodeSvg22422154 from "@designSystem/icon/svg/QodeSvg22422154"
import QodeSvg22422160 from "@designSystem/icon/svg/QodeSvg22422160"
import QodeSvg22422162 from "@designSystem/icon/svg/QodeSvg22422162"
import QodeSvg22422163 from "@designSystem/icon/svg/QodeSvg22422163"
import QodeSvg22422164 from "@designSystem/icon/svg/QodeSvg22422164"
import QodeSvg22422166 from "@designSystem/icon/svg/QodeSvg22422166"
import QodeSvg22423366 from "@designSystem/icon/svg/QodeSvg22423366"
import QodeSvg22423370 from "@designSystem/icon/svg/QodeSvg22423370"
import QodeSvg22423376 from "@designSystem/icon/svg/QodeSvg22423376"
import QodeSvg22423378 from "@designSystem/icon/svg/QodeSvg22423378"
import QodeSvg22423379 from "@designSystem/icon/svg/QodeSvg22423379"
import QodeSvg22423380 from "@designSystem/icon/svg/QodeSvg22423380"
import QodeSvg22423382 from "@designSystem/icon/svg/QodeSvg22423382"
import QodeSvg22423409 from "@designSystem/icon/svg/QodeSvg22423409"
import QodeSvg22423413 from "@designSystem/icon/svg/QodeSvg22423413"
import QodeSvg27319253 from "@designSystem/icon/svg/QodeSvg27319253"
import QodeSvg27319255 from "@designSystem/icon/svg/QodeSvg27319255"
import QodeSvg27319256 from "@designSystem/icon/svg/QodeSvg27319256"
import QodeSvg27319257 from "@designSystem/icon/svg/QodeSvg27319257"
import QodeSvg27319259 from "@designSystem/icon/svg/QodeSvg27319259"

export interface QodeCustom22420153Props {
  property_1?: "Default" | "TD" | "QB" | "QT" | "DB" | "Loading"
}

export const QodeCustom22420153: React.FC<
  QodeCustom22420153Props & { style?: CSSProperties }
> = ({ property_1 = "Default", ...rest }) => {
  return (
    <>
      {/* name="Mixer" id="224:20153" type="COMPONENT_SET" */}
      {/* id="221:16413" */}
      {`${property_1}` === `Default` && (
        <>
          {/* name="Property 1=Default" id="221:16413" type="COMPONENT" */}
          <div style={{ width: "248px", height: "248px", flexShrink: "0" }}>
            {/* name="Box" id="224:20350" type="FRAME" */}
            <div
              style={{
                width: "200px",
                height: "200px",
                flexShrink: "0",
                borderRadius: "4px",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-50, #6f6f6f)",
                background: "#FFF",
              }}
            >
              {/* name="V lines" id="224:20351" type="GROUP" */}
              <QodeSvg22420351
                style={{ width: "100px", height: "200px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="H lines" id="224:20355" type="GROUP" */}
              <QodeSvg22420355
                style={{
                  width: "100px",
                  height: "200px",
                  transform: "rotate(90deg)",
                  flexShrink: "0",
                }}
                {...{}}
              />
              {/* name="Mixer/Reset" id="224:20359" type="INSTANCE" */}
              <QodeSvg22116619
                style={{ width: "11px", height: "11px", flexShrink: "0" }}
                {...{ state: "Default" }}
              />
            </div>
            {/* name="Direction indicator" id="224:20368" type="RECTANGLE" */}
            <Flex
              style={{
                width: "13px",
                height: "4px",
                flexShrink: "0",
                borderRadius:
                  "0px 0px var(--size-size-size5xs-1px, 1px) var(--size-size-size5xs-1px, 1px)",
                background: "#09E446",
              }}
            >
              {/* name="Direction indicator" id=224:20368 type=RECTANGLE */}
              <></>
            </Flex>
            {/* name="Direction indicator" id="224:20369" type="RECTANGLE" */}
            <Flex
              style={{
                width: "13px",
                height: "4px",
                flexShrink: "0",
                borderRadius:
                  "var(--size-size-size5xs-1px, 1px) var(--size-size-size5xs-1px, 1px) 0px 0px",
                background: "#8465FF",
              }}
            >
              {/* name="Direction indicator" id=224:20369 type=RECTANGLE */}
              <></>
            </Flex>
            {/* name="Direction indicator" id="224:20370" type="RECTANGLE" */}
            <Flex
              style={{
                width: "4px",
                height: "13px",
                flexShrink: "0",
                borderRadius:
                  "0px var(--size-size-size5xs-1px, 1px) var(--size-size-size5xs-1px, 1px) 0px",
                background: "#00B3FF",
              }}
            >
              {/* name="Direction indicator" id=224:20370 type=RECTANGLE */}
              <></>
            </Flex>
            {/* name="Direction indicator" id="224:20371" type="RECTANGLE" */}
            <Flex
              style={{
                width: "4px",
                height: "13px",
                flexShrink: "0",
                borderRadius:
                  "var(--size-size-size5xs-1px, 1px) 0px 0px var(--size-size-size5xs-1px, 1px)",
                background: "#FF7A00",
              }}
            >
              {/* name="Direction indicator" id=224:20371 type=RECTANGLE */}
              <></>
            </Flex>
            {/* name="Mixer/Legend" id="224:20372" type="INSTANCE" */}
            <Flex
              style={{
                display: "inline-flex",
                transform: "rotate(90deg)",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <span
                style={{
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  textAlign: "center",
                  fontFamily: '"Barlow Semi Condensed"',
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "normal",
                }}
              >{`DEEP DIVE`}</span>
            </Flex>
            {/* name="Mixer/Legend" id="224:20373" type="INSTANCE" */}
            <Flex
              style={{
                display: "inline-flex",
                transform: "rotate(-90deg)",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <span
                style={{
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  textAlign: "center",
                  fontFamily: '"Barlow Semi Condensed"',
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "normal",
                }}
              >{`QUICK`}</span>
            </Flex>
            {/* name="Mixer/Legend" id="224:20374" type="INSTANCE" */}
            <Flex
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <span
                style={{
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  textAlign: "center",
                  fontFamily: '"Barlow Semi Condensed"',
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "normal",
                }}
              >{`TECHNICAL`}</span>
            </Flex>
            {/* name="Mixer/Legend" id="224:20375" type="INSTANCE" */}
            <Flex
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <span
                style={{
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  textAlign: "center",
                  fontFamily: '"Barlow Semi Condensed"',
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "normal",
                }}
              >{`BEHAVIORIAL`}</span>
            </Flex>
            {/* name="Handler" id="224:20360" type="FRAME" */}
            <div style={{ width: "80px", height: "80px", flexShrink: "0" }}>
              {/* name="blur" id="224:20361" type="ELLIPSE" */}
              <QodeSvg22420361
                style={{
                  width: "76.667px",
                  height: "76.667px",
                  flexShrink: "0",
                  fill: "conic-gradient(from 180deg at 50% 50%, #49CBFF 48.60000193119049deg, #86F0FF 140.3999948501587deg, #50FFA0 250.19999742507935deg, #7EA2FF 360deg)",
                  filter: "blur(3.333333730697632px)",
                }}
                {...{}}
              />
              {/* name="c - animate" id="224:20362" type="FRAME" */}
              <div
                style={{
                  width: "78.22px",
                  height: "77.846px",
                  flexShrink: "0",
                }}
              >
                {/* name="circle 3" id="224:20363" type="ELLIPSE" */}
                <QodeSvg22420363
                  style={{
                    width: "73.333px",
                    height: "73.333px",
                    flexShrink: "0",
                    fill: "linear-gradient(180deg, #FFF 49.92%, #D4D4D4 82.91%)",
                  }}
                  {...{}}
                />
                {/* name="circle 2" id="224:20364" type="ELLIPSE" */}
                <QodeSvg22420364
                  style={{
                    width: "66.667px",
                    height: "66.667px",
                    flexShrink: "0",
                    fill: "linear-gradient(180deg, #C9C9C9 8.48%, #FFF 61.05%)",
                  }}
                  {...{}}
                />
                {/* name="circle 1" id="224:20365" type="ELLIPSE" */}
                <QodeSvg22420365
                  style={{
                    width: "56.364px",
                    height: "56.364px",
                    flexShrink: "0",
                    fill: "radial-gradient(50% 50% at 50% 50%, #4A4A4A 0%, #141414 100%)",
                  }}
                  {...{}}
                />
                {/* name="video" id="224:20366" type="INSTANCE" */}
                <Icon.QodeVideo
                  style={{ width: "20px", height: "20px", flexShrink: "0" }}
                  {...{}}
                />
                {/* name="line" id="224:20367" type="ELLIPSE" */}
                <QodeSvg22420367
                  style={{
                    width: "49.091px",
                    height: "49.091px",
                    flexShrink: "0",
                    strokeWidth: "2px",
                    stroke: "#0BFFF0",
                  }}
                  {...{}}
                />
              </div>
            </div>
          </div>
        </>
      )}
      {/* id="224:20154" */}
      {`${property_1}` === `TD` && (
        <>
          {/* name="Property 1=TD" id="224:20154" type="COMPONENT" */}
          <div style={{ width: "248px", height: "248px", flexShrink: "0" }}>
            {/* name="Box" id="224:20155" type="FRAME" */}
            <div
              style={{
                width: "200px",
                height: "200px",
                flexShrink: "0",
                borderRadius: "4px",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-50, #6f6f6f)",
                background: "#FFF",
              }}
            >
              {/* name="V lines" id="224:20156" type="GROUP" */}
              <QodeSvg22420156
                style={{ width: "100px", height: "200px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="H lines" id="224:20160" type="GROUP" */}
              <QodeSvg22420160
                style={{
                  width: "100px",
                  height: "200px",
                  transform: "rotate(90deg)",
                  flexShrink: "0",
                }}
                {...{}}
              />
              {/* name="Mixer/Reset" id="224:20168" type="INSTANCE" */}
              <QodeSvg22116619
                style={{ width: "11px", height: "11px", flexShrink: "0" }}
                {...{ state: "Default" }}
              />
            </div>
            {/* name="Direction indicator" id="224:20166" type="RECTANGLE" */}
            <Flex
              style={{
                width: "13px",
                height: "4px",
                flexShrink: "0",
                borderRadius:
                  "0px 0px var(--size-size-size5xs-1px, 1px) var(--size-size-size5xs-1px, 1px)",
                background: "#09E446",
              }}
            >
              {/* name="Direction indicator" id=224:20166 type=RECTANGLE */}
              <></>
            </Flex>
            {/* name="Direction indicator" id="224:20165" type="RECTANGLE" */}
            <Flex
              style={{
                width: "13px",
                height: "4px",
                flexShrink: "0",
                borderRadius:
                  "var(--size-size-size5xs-1px, 1px) var(--size-size-size5xs-1px, 1px) 0px 0px",
                background: "#8465FF",
              }}
            >
              {/* name="Direction indicator" id=224:20165 type=RECTANGLE */}
              <></>
            </Flex>
            {/* name="Direction indicator" id="224:20164" type="RECTANGLE" */}
            <Flex
              style={{
                width: "4px",
                height: "13px",
                flexShrink: "0",
                borderRadius:
                  "0px var(--size-size-size5xs-1px, 1px) var(--size-size-size5xs-1px, 1px) 0px",
                background: "#00B3FF",
              }}
            >
              {/* name="Direction indicator" id=224:20164 type=RECTANGLE */}
              <></>
            </Flex>
            {/* name="Direction indicator" id="224:20167" type="RECTANGLE" */}
            <Flex
              style={{
                width: "4px",
                height: "13px",
                flexShrink: "0",
                borderRadius:
                  "var(--size-size-size5xs-1px, 1px) 0px 0px var(--size-size-size5xs-1px, 1px)",
                background: "#FF7A00",
              }}
            >
              {/* name="Direction indicator" id=224:20167 type=RECTANGLE */}
              <></>
            </Flex>
            {/* name="Mixer/Legend" id="224:20177" type="INSTANCE" */}
            <Flex
              style={{
                display: "inline-flex",
                transform: "rotate(90deg)",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <span
                style={{
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  textAlign: "center",
                  fontFamily: '"Barlow Semi Condensed"',
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight: "normal",
                }}
              >{`DEEP DIVE`}</span>
            </Flex>
            {/* name="Mixer/Legend" id="224:20178" type="INSTANCE" */}
            <Flex
              style={{
                display: "inline-flex",
                transform: "rotate(-90deg)",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <span
                style={{
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  textAlign: "center",
                  fontFamily: '"Barlow Semi Condensed"',
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "normal",
                }}
              >{`QUICK`}</span>
            </Flex>
            {/* name="Mixer/Legend" id="224:20179" type="INSTANCE" */}
            <Flex
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <span
                style={{
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  textAlign: "center",
                  fontFamily: '"Barlow Semi Condensed"',
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight: "normal",
                }}
              >{`TECHNICAL`}</span>
            </Flex>
            {/* name="Mixer/Legend" id="224:20180" type="INSTANCE" */}
            <Flex
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <span
                style={{
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  textAlign: "center",
                  fontFamily: '"Barlow Semi Condensed"',
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "normal",
                }}
              >{`BEHAVIORIAL`}</span>
            </Flex>
            {/* name="Handler" id="273:19115" type="FRAME" */}
            <div style={{ width: "80px", height: "80px", flexShrink: "0" }}>
              {/* name="blur" id="273:19116" type="ELLIPSE" */}
              <QodeSvg27319116
                style={{
                  width: "76.667px",
                  height: "76.667px",
                  flexShrink: "0",
                  fill: "conic-gradient(from 180deg at 50% 50%, #49CBFF 48.60000193119049deg, #86F0FF 140.3999948501587deg, #50FFA0 250.19999742507935deg, #7EA2FF 360deg)",
                  filter: "blur(3.333333730697632px)",
                }}
                {...{}}
              />
              {/* name="c - animate" id="273:19117" type="FRAME" */}
              <div
                style={{
                  width: "78.22px",
                  height: "77.846px",
                  flexShrink: "0",
                }}
              >
                {/* name="circle 3" id="273:19118" type="ELLIPSE" */}
                <QodeSvg27319118
                  style={{
                    width: "73.333px",
                    height: "73.333px",
                    flexShrink: "0",
                    fill: "linear-gradient(180deg, #FFF 49.92%, #D4D4D4 82.91%)",
                  }}
                  {...{}}
                />
                {/* name="circle 2" id="273:19119" type="ELLIPSE" */}
                <QodeSvg27319119
                  style={{
                    width: "66.667px",
                    height: "66.667px",
                    flexShrink: "0",
                    fill: "linear-gradient(180deg, #C9C9C9 8.48%, #FFF 61.05%)",
                  }}
                  {...{}}
                />
                {/* name="circle 1" id="273:19120" type="ELLIPSE" */}
                <QodeSvg27319120
                  style={{
                    width: "56.364px",
                    height: "56.364px",
                    flexShrink: "0",
                    fill: "radial-gradient(50% 50% at 50% 50%, #4A4A4A 0%, #141414 100%)",
                  }}
                  {...{}}
                />
                {/* name="video" id="273:19121" type="INSTANCE" */}
                <Icon.QodeVideo
                  style={{ width: "20px", height: "20px", flexShrink: "0" }}
                  {...{}}
                />
                {/* name="line" id="273:19122" type="ELLIPSE" */}
                <QodeSvg27319122
                  style={{
                    width: "49.091px",
                    height: "49.091px",
                    flexShrink: "0",
                    strokeWidth: "2px",
                    stroke: "#0BFFF0",
                  }}
                  {...{}}
                />
              </div>
            </div>
          </div>
        </>
      )}
      {/* id="677:40236" */}
      {`${property_1}` === `Loading` && (
        <>
          {/* name="Property 1=Loading" id="677:40236" type="COMPONENT" */}
          <div style={{ width: "248px", height: "248px", flexShrink: "0" }}>
            {/* name="Box" id="677:40237" type="FRAME" */}
            <div
              style={{
                width: "200px",
                height: "200px",
                flexShrink: "0",
                borderRadius: "4px",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-50, #6f6f6f)",
                background: "#FFF",
              }}
            >
              {/* name="V lines" id="677:40238" type="GROUP" */}
              <QodeSvg67740238
                style={{ width: "100px", height: "200px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="H lines" id="677:40242" type="GROUP" */}
              <QodeSvg67740242
                style={{
                  width: "100px",
                  height: "200px",
                  transform: "rotate(90deg)",
                  flexShrink: "0",
                }}
                {...{}}
              />
              {/* name="Mixer/Reset" id="677:40246" type="INSTANCE" */}
              <QodeSvg22116619
                style={{ width: "11px", height: "11px", flexShrink: "0" }}
                {...{ state: "Default" }}
              />
            </div>
            {/* name="Direction indicator" id="677:40247" type="RECTANGLE" */}
            <Flex
              style={{
                width: "13px",
                height: "4px",
                flexShrink: "0",
                borderRadius:
                  "0px 0px var(--size-size-size5xs-1px, 1px) var(--size-size-size5xs-1px, 1px)",
                background: "#09E446",
              }}
            >
              {/* name="Direction indicator" id=677:40247 type=RECTANGLE */}
              <></>
            </Flex>
            {/* name="Direction indicator" id="677:40248" type="RECTANGLE" */}
            <Flex
              style={{
                width: "13px",
                height: "4px",
                flexShrink: "0",
                borderRadius:
                  "var(--size-size-size5xs-1px, 1px) var(--size-size-size5xs-1px, 1px) 0px 0px",
                background: "#8465FF",
              }}
            >
              {/* name="Direction indicator" id=677:40248 type=RECTANGLE */}
              <></>
            </Flex>
            {/* name="Direction indicator" id="677:40249" type="RECTANGLE" */}
            <Flex
              style={{
                width: "4px",
                height: "13px",
                flexShrink: "0",
                borderRadius:
                  "0px var(--size-size-size5xs-1px, 1px) var(--size-size-size5xs-1px, 1px) 0px",
                background: "#00B3FF",
              }}
            >
              {/* name="Direction indicator" id=677:40249 type=RECTANGLE */}
              <></>
            </Flex>
            {/* name="Direction indicator" id="677:40250" type="RECTANGLE" */}
            <Flex
              style={{
                width: "4px",
                height: "13px",
                flexShrink: "0",
                borderRadius:
                  "var(--size-size-size5xs-1px, 1px) 0px 0px var(--size-size-size5xs-1px, 1px)",
                background: "#FF7A00",
              }}
            >
              {/* name="Direction indicator" id=677:40250 type=RECTANGLE */}
              <></>
            </Flex>
            {/* name="Mixer/Legend" id="677:40251" type="INSTANCE" */}
            <Flex
              style={{
                display: "inline-flex",
                transform: "rotate(90deg)",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <span
                style={{
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  textAlign: "center",
                  fontFamily: '"Barlow Semi Condensed"',
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight: "normal",
                }}
              >{`DEEP DIVE`}</span>
            </Flex>
            {/* name="Mixer/Legend" id="677:40252" type="INSTANCE" */}
            <Flex
              style={{
                display: "inline-flex",
                transform: "rotate(-90deg)",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <span
                style={{
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  textAlign: "center",
                  fontFamily: '"Barlow Semi Condensed"',
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "normal",
                }}
              >{`QUICK`}</span>
            </Flex>
            {/* name="Mixer/Legend" id="677:40253" type="INSTANCE" */}
            <Flex
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <span
                style={{
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  textAlign: "center",
                  fontFamily: '"Barlow Semi Condensed"',
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight: "normal",
                }}
              >{`TECHNICAL`}</span>
            </Flex>
            {/* name="Mixer/Legend" id="677:40254" type="INSTANCE" */}
            <Flex
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <span
                style={{
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  textAlign: "center",
                  fontFamily: '"Barlow Semi Condensed"',
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "normal",
                }}
              >{`BEHAVIORIAL`}</span>
            </Flex>
            {/* name="Handler" id="677:40269" type="FRAME" */}
            <div style={{ width: "80px", height: "80px", flexShrink: "0" }}>
              {/* name="blur" id="677:40270" type="ELLIPSE" */}
              <QodeSvg67740270
                style={{
                  width: "76.667px",
                  height: "76.667px",
                  flexShrink: "0",
                  fill: "rgba(156, 156, 156, 0.50)",
                  filter: "blur(3.333333730697632px)",
                }}
                {...{}}
              />
              {/* name="c - animate" id="677:40271" type="FRAME" */}
              <div
                style={{
                  width: "78.22px",
                  height: "77.846px",
                  flexShrink: "0",
                }}
              >
                {/* name="circle 3" id="677:40272" type="ELLIPSE" */}
                <QodeSvg67740272
                  style={{
                    width: "73.333px",
                    height: "73.333px",
                    flexShrink: "0",
                    fill: "linear-gradient(180deg, #FFF 49.92%, #D4D4D4 82.91%)",
                  }}
                  {...{}}
                />
                {/* name="circle 2" id="677:40273" type="ELLIPSE" */}
                <QodeSvg67740273
                  style={{
                    width: "66.667px",
                    height: "66.667px",
                    flexShrink: "0",
                    fill: "linear-gradient(180deg, #C9C9C9 8.48%, #FFF 61.05%)",
                  }}
                  {...{}}
                />
                {/* name="circle 1" id="677:40274" type="ELLIPSE" */}
                <QodeSvg67740274
                  style={{
                    width: "56.364px",
                    height: "56.364px",
                    flexShrink: "0",
                    fill: "radial-gradient(50% 50% at 50% 50%, #646464 0%, #272727 100%)",
                  }}
                  {...{}}
                />
                {/* name="ellipsis" id="677:40275" type="INSTANCE" */}
                <Icon.QodeEllipsis
                  style={{ width: "20px", height: "20px", flexShrink: "0" }}
                  {...{}}
                />
                {/* name="line" id="677:40276" type="ELLIPSE" */}
                <QodeSvg67740276
                  style={{
                    width: "49.091px",
                    height: "49.091px",
                    flexShrink: "0",
                    strokeWidth: "2px",
                    stroke: "#C6C6C6",
                  }}
                  {...{}}
                />
              </div>
            </div>
          </div>
        </>
      )}
      {/* id="224:22148" */}
      {`${property_1}` === `DB` && (
        <>
          {/* name="Property 1=DB" id="224:22148" type="COMPONENT" */}
          <div style={{ width: "248px", height: "248px", flexShrink: "0" }}>
            {/* name="Box" id="224:22149" type="FRAME" */}
            <div
              style={{
                width: "200px",
                height: "200px",
                flexShrink: "0",
                borderRadius: "4px",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-50, #6f6f6f)",
                background: "#FFF",
              }}
            >
              {/* name="V lines" id="224:22150" type="GROUP" */}
              <QodeSvg22422150
                style={{ width: "100px", height: "200px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="H lines" id="224:22154" type="GROUP" */}
              <QodeSvg22422154
                style={{
                  width: "100px",
                  height: "200px",
                  transform: "rotate(90deg)",
                  flexShrink: "0",
                }}
                {...{}}
              />
              {/* name="Mixer/Reset" id="224:22158" type="INSTANCE" */}
              <QodeSvg22116619
                style={{ width: "11px", height: "11px", flexShrink: "0" }}
                {...{ state: "Default" }}
              />
            </div>
            {/* name="Handler" id="224:22159" type="FRAME" */}
            <div style={{ width: "80px", height: "80px", flexShrink: "0" }}>
              {/* name="blur" id="224:22160" type="ELLIPSE" */}
              <QodeSvg22422160
                style={{
                  width: "76.667px",
                  height: "76.667px",
                  flexShrink: "0",
                  fill: "conic-gradient(from 180deg at 50% 50%, #49CBFF 48.60000193119049deg, #86F0FF 140.3999948501587deg, #50FFA0 250.19999742507935deg, #7EA2FF 360deg)",
                  filter: "blur(3.333333969116211px)",
                }}
                {...{}}
              />
              {/* name="c - animate" id="224:22161" type="FRAME" */}
              <div
                style={{
                  width: "78.22px",
                  height: "77.846px",
                  flexShrink: "0",
                }}
              >
                {/* name="circle 3" id="224:22162" type="ELLIPSE" */}
                <QodeSvg22422162
                  style={{
                    width: "73.333px",
                    height: "73.333px",
                    flexShrink: "0",
                    fill: "linear-gradient(180deg, #FFF 49.92%, #D4D4D4 82.91%)",
                  }}
                  {...{}}
                />
                {/* name="circle 2" id="224:22163" type="ELLIPSE" */}
                <QodeSvg22422163
                  style={{
                    width: "66.667px",
                    height: "66.667px",
                    flexShrink: "0",
                    fill: "linear-gradient(180deg, #C9C9C9 8.48%, #FFF 61.05%)",
                  }}
                  {...{}}
                />
                {/* name="circle 1" id="224:22164" type="ELLIPSE" */}
                <QodeSvg22422164
                  style={{
                    width: "56.364px",
                    height: "56.364px",
                    flexShrink: "0",
                    fill: "radial-gradient(50% 50% at 50% 50%, #4A4A4A 0%, #141414 100%)",
                  }}
                  {...{}}
                />
                {/* name="video" id="224:22165" type="INSTANCE" */}
                <Icon.QodeVideo
                  style={{ width: "20px", height: "20px", flexShrink: "0" }}
                  {...{}}
                />
                {/* name="line" id="224:22166" type="ELLIPSE" */}
                <QodeSvg22422166
                  style={{
                    width: "49.091px",
                    height: "49.091px",
                    flexShrink: "0",
                    strokeWidth: "2px",
                    stroke: "#0BFFF0",
                  }}
                  {...{}}
                />
              </div>
            </div>
            {/* name="Direction indicator" id="224:22167" type="RECTANGLE" */}
            <Flex
              style={{
                width: "13px",
                height: "4px",
                flexShrink: "0",
                borderRadius:
                  "0px 0px var(--size-size-size5xs-1px, 1px) var(--size-size-size5xs-1px, 1px)",
                background: "#09E446",
              }}
            >
              {/* name="Direction indicator" id=224:22167 type=RECTANGLE */}
              <></>
            </Flex>
            {/* name="Direction indicator" id="224:22168" type="RECTANGLE" */}
            <Flex
              style={{
                width: "13px",
                height: "4px",
                flexShrink: "0",
                borderRadius:
                  "var(--size-size-size5xs-1px, 1px) var(--size-size-size5xs-1px, 1px) 0px 0px",
                background: "#8465FF",
              }}
            >
              {/* name="Direction indicator" id=224:22168 type=RECTANGLE */}
              <></>
            </Flex>
            {/* name="Direction indicator" id="224:22169" type="RECTANGLE" */}
            <Flex
              style={{
                width: "4px",
                height: "13px",
                flexShrink: "0",
                borderRadius:
                  "0px var(--size-size-size5xs-1px, 1px) var(--size-size-size5xs-1px, 1px) 0px",
                background: "#00B3FF",
              }}
            >
              {/* name="Direction indicator" id=224:22169 type=RECTANGLE */}
              <></>
            </Flex>
            {/* name="Direction indicator" id="224:22170" type="RECTANGLE" */}
            <Flex
              style={{
                width: "4px",
                height: "13px",
                flexShrink: "0",
                borderRadius:
                  "var(--size-size-size5xs-1px, 1px) 0px 0px var(--size-size-size5xs-1px, 1px)",
                background: "#FF7A00",
              }}
            >
              {/* name="Direction indicator" id=224:22170 type=RECTANGLE */}
              <></>
            </Flex>
            {/* name="Mixer/Legend" id="224:22171" type="INSTANCE" */}
            <Flex
              style={{
                display: "inline-flex",
                transform: "rotate(90deg)",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <span
                style={{
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  textAlign: "center",
                  fontFamily: '"Barlow Semi Condensed"',
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight: "normal",
                }}
              >{`DEEP DIVE`}</span>
            </Flex>
            {/* name="Mixer/Legend" id="224:22172" type="INSTANCE" */}
            <Flex
              style={{
                display: "inline-flex",
                transform: "rotate(-90deg)",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <span
                style={{
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  textAlign: "center",
                  fontFamily: '"Barlow Semi Condensed"',
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "normal",
                }}
              >{`QUICK`}</span>
            </Flex>
            {/* name="Mixer/Legend" id="224:22173" type="INSTANCE" */}
            <Flex
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <span
                style={{
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  textAlign: "center",
                  fontFamily: '"Barlow Semi Condensed"',
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "normal",
                }}
              >{`TECHNICAL`}</span>
            </Flex>
            {/* name="Mixer/Legend" id="224:22174" type="INSTANCE" */}
            <Flex
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <span
                style={{
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  textAlign: "center",
                  fontFamily: '"Barlow Semi Condensed"',
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight: "normal",
                }}
              >{`BEHAVIORIAL`}</span>
            </Flex>
          </div>
        </>
      )}
      {/* id="224:23364" */}
      {`${property_1}` === `QB` && (
        <>
          {/* name="Property 1=QB" id="224:23364" type="COMPONENT" */}
          <div style={{ width: "248px", height: "248px", flexShrink: "0" }}>
            {/* name="Box" id="224:23365" type="FRAME" */}
            <div
              style={{
                width: "200px",
                height: "200px",
                flexShrink: "0",
                borderRadius: "4px",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-50, #6f6f6f)",
                background: "#FFF",
              }}
            >
              {/* name="V lines" id="224:23366" type="GROUP" */}
              <QodeSvg22423366
                style={{ width: "100px", height: "200px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="H lines" id="224:23370" type="GROUP" */}
              <QodeSvg22423370
                style={{
                  width: "100px",
                  height: "200px",
                  transform: "rotate(90deg)",
                  flexShrink: "0",
                }}
                {...{}}
              />
              {/* name="Mixer/Reset" id="224:23374" type="INSTANCE" */}
              <QodeSvg22116619
                style={{ width: "11px", height: "11px", flexShrink: "0" }}
                {...{ state: "Default" }}
              />
            </div>
            {/* name="Handler" id="224:23375" type="FRAME" */}
            <div style={{ width: "80px", height: "80px", flexShrink: "0" }}>
              {/* name="blur" id="224:23376" type="ELLIPSE" */}
              <QodeSvg22423376
                style={{
                  width: "76.667px",
                  height: "76.667px",
                  flexShrink: "0",
                  fill: "conic-gradient(from 180deg at 50% 50%, #49CBFF 48.60000193119049deg, #86F0FF 140.3999948501587deg, #50FFA0 250.19999742507935deg, #7EA2FF 360deg)",
                  filter: "blur(3.333333969116211px)",
                }}
                {...{}}
              />
              {/* name="c - animate" id="224:23377" type="FRAME" */}
              <div
                style={{
                  width: "78.22px",
                  height: "77.846px",
                  flexShrink: "0",
                }}
              >
                {/* name="circle 3" id="224:23378" type="ELLIPSE" */}
                <QodeSvg22423378
                  style={{
                    width: "73.333px",
                    height: "73.333px",
                    flexShrink: "0",
                    fill: "linear-gradient(180deg, #FFF 49.92%, #D4D4D4 82.91%)",
                  }}
                  {...{}}
                />
                {/* name="circle 2" id="224:23379" type="ELLIPSE" */}
                <QodeSvg22423379
                  style={{
                    width: "66.667px",
                    height: "66.667px",
                    flexShrink: "0",
                    fill: "linear-gradient(180deg, #C9C9C9 8.48%, #FFF 61.05%)",
                  }}
                  {...{}}
                />
                {/* name="circle 1" id="224:23380" type="ELLIPSE" */}
                <QodeSvg22423380
                  style={{
                    width: "56.364px",
                    height: "56.364px",
                    flexShrink: "0",
                    fill: "radial-gradient(50% 50% at 50% 50%, #4A4A4A 0%, #141414 100%)",
                  }}
                  {...{}}
                />
                {/* name="video" id="224:23381" type="INSTANCE" */}
                <Icon.QodeVideo
                  style={{ width: "20px", height: "20px", flexShrink: "0" }}
                  {...{}}
                />
                {/* name="line" id="224:23382" type="ELLIPSE" */}
                <QodeSvg22423382
                  style={{
                    width: "49.091px",
                    height: "49.091px",
                    flexShrink: "0",
                    strokeWidth: "2px",
                    stroke: "#0BFFF0",
                  }}
                  {...{}}
                />
              </div>
            </div>
            {/* name="Direction indicator" id="224:23383" type="RECTANGLE" */}
            <Flex
              style={{
                width: "13px",
                height: "4px",
                flexShrink: "0",
                borderRadius:
                  "0px 0px var(--size-size-size5xs-1px, 1px) var(--size-size-size5xs-1px, 1px)",
                background: "#09E446",
              }}
            >
              {/* name="Direction indicator" id=224:23383 type=RECTANGLE */}
              <></>
            </Flex>
            {/* name="Direction indicator" id="224:23384" type="RECTANGLE" */}
            <Flex
              style={{
                width: "13px",
                height: "4px",
                flexShrink: "0",
                borderRadius:
                  "var(--size-size-size5xs-1px, 1px) var(--size-size-size5xs-1px, 1px) 0px 0px",
                background: "#8465FF",
              }}
            >
              {/* name="Direction indicator" id=224:23384 type=RECTANGLE */}
              <></>
            </Flex>
            {/* name="Direction indicator" id="224:23385" type="RECTANGLE" */}
            <Flex
              style={{
                width: "4px",
                height: "13px",
                flexShrink: "0",
                borderRadius:
                  "0px var(--size-size-size5xs-1px, 1px) var(--size-size-size5xs-1px, 1px) 0px",
                background: "#00B3FF",
              }}
            >
              {/* name="Direction indicator" id=224:23385 type=RECTANGLE */}
              <></>
            </Flex>
            {/* name="Direction indicator" id="224:23386" type="RECTANGLE" */}
            <Flex
              style={{
                width: "4px",
                height: "13px",
                flexShrink: "0",
                borderRadius:
                  "var(--size-size-size5xs-1px, 1px) 0px 0px var(--size-size-size5xs-1px, 1px)",
                background: "#FF7A00",
              }}
            >
              {/* name="Direction indicator" id=224:23386 type=RECTANGLE */}
              <></>
            </Flex>
            {/* name="Mixer/Legend" id="224:23387" type="INSTANCE" */}
            <Flex
              style={{
                display: "inline-flex",
                transform: "rotate(90deg)",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <span
                style={{
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  textAlign: "center",
                  fontFamily: '"Barlow Semi Condensed"',
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "normal",
                }}
              >{`DEEP DIVE`}</span>
            </Flex>
            {/* name="Mixer/Legend" id="224:23388" type="INSTANCE" */}
            <Flex
              style={{
                display: "inline-flex",
                transform: "rotate(-90deg)",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <span
                style={{
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  textAlign: "center",
                  fontFamily: '"Barlow Semi Condensed"',
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight: "normal",
                }}
              >{`QUICK`}</span>
            </Flex>
            {/* name="Mixer/Legend" id="224:23389" type="INSTANCE" */}
            <Flex
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <span
                style={{
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  textAlign: "center",
                  fontFamily: '"Barlow Semi Condensed"',
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "normal",
                }}
              >{`TECHNICAL`}</span>
            </Flex>
            {/* name="Mixer/Legend" id="224:23390" type="INSTANCE" */}
            <Flex
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <span
                style={{
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  textAlign: "center",
                  fontFamily: '"Barlow Semi Condensed"',
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight: "normal",
                }}
              >{`BEHAVIORIAL`}</span>
            </Flex>
          </div>
        </>
      )}
      {/* id="224:23407" */}
      {`${property_1}` === `QT` && (
        <>
          {/* name="Property 1=QT" id="224:23407" type="COMPONENT" */}
          <div style={{ width: "248px", height: "248px", flexShrink: "0" }}>
            {/* name="Box" id="224:23408" type="FRAME" */}
            <div
              style={{
                width: "200px",
                height: "200px",
                flexShrink: "0",
                borderRadius: "4px",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-50, #6f6f6f)",
                background: "#FFF",
              }}
            >
              {/* name="V lines" id="224:23409" type="GROUP" */}
              <QodeSvg22423409
                style={{ width: "100px", height: "200px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="H lines" id="224:23413" type="GROUP" */}
              <QodeSvg22423413
                style={{
                  width: "100px",
                  height: "200px",
                  transform: "rotate(90deg)",
                  flexShrink: "0",
                }}
                {...{}}
              />
              {/* name="Mixer/Reset" id="224:23417" type="INSTANCE" */}
              <QodeSvg22116619
                style={{ width: "11px", height: "11px", flexShrink: "0" }}
                {...{ state: "Default" }}
              />
            </div>
            {/* name="Direction indicator" id="224:23426" type="RECTANGLE" */}
            <Flex
              style={{
                width: "13px",
                height: "4px",
                flexShrink: "0",
                borderRadius:
                  "0px 0px var(--size-size-size5xs-1px, 1px) var(--size-size-size5xs-1px, 1px)",
                background: "#09E446",
              }}
            >
              {/* name="Direction indicator" id=224:23426 type=RECTANGLE */}
              <></>
            </Flex>
            {/* name="Direction indicator" id="224:23427" type="RECTANGLE" */}
            <Flex
              style={{
                width: "13px",
                height: "4px",
                flexShrink: "0",
                borderRadius:
                  "var(--size-size-size5xs-1px, 1px) var(--size-size-size5xs-1px, 1px) 0px 0px",
                background: "#8465FF",
              }}
            >
              {/* name="Direction indicator" id=224:23427 type=RECTANGLE */}
              <></>
            </Flex>
            {/* name="Direction indicator" id="224:23428" type="RECTANGLE" */}
            <Flex
              style={{
                width: "4px",
                height: "13px",
                flexShrink: "0",
                borderRadius:
                  "0px var(--size-size-size5xs-1px, 1px) var(--size-size-size5xs-1px, 1px) 0px",
                background: "#00B3FF",
              }}
            >
              {/* name="Direction indicator" id=224:23428 type=RECTANGLE */}
              <></>
            </Flex>
            {/* name="Direction indicator" id="224:23429" type="RECTANGLE" */}
            <Flex
              style={{
                width: "4px",
                height: "13px",
                flexShrink: "0",
                borderRadius:
                  "var(--size-size-size5xs-1px, 1px) 0px 0px var(--size-size-size5xs-1px, 1px)",
                background: "#FF7A00",
              }}
            >
              {/* name="Direction indicator" id=224:23429 type=RECTANGLE */}
              <></>
            </Flex>
            {/* name="Mixer/Legend" id="224:23430" type="INSTANCE" */}
            <Flex
              style={{
                display: "inline-flex",
                transform: "rotate(90deg)",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <span
                style={{
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  textAlign: "center",
                  fontFamily: '"Barlow Semi Condensed"',
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "normal",
                }}
              >{`DEEP DIVE`}</span>
            </Flex>
            {/* name="Mixer/Legend" id="224:23431" type="INSTANCE" */}
            <Flex
              style={{
                display: "inline-flex",
                transform: "rotate(-90deg)",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <span
                style={{
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  textAlign: "center",
                  fontFamily: '"Barlow Semi Condensed"',
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight: "normal",
                }}
              >{`QUICK`}</span>
            </Flex>
            {/* name="Mixer/Legend" id="224:23432" type="INSTANCE" */}
            <Flex
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <span
                style={{
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  textAlign: "center",
                  fontFamily: '"Barlow Semi Condensed"',
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight: "normal",
                }}
              >{`TECHNICAL`}</span>
            </Flex>
            {/* name="Mixer/Legend" id="224:23433" type="INSTANCE" */}
            <Flex
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <span
                style={{
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  textAlign: "center",
                  fontFamily: '"Barlow Semi Condensed"',
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "normal",
                }}
              >{`BEHAVIORIAL`}</span>
            </Flex>
            {/* name="Handler" id="273:19252" type="FRAME" */}
            <div style={{ width: "80px", height: "80px", flexShrink: "0" }}>
              {/* name="blur" id="273:19253" type="ELLIPSE" */}
              <QodeSvg27319253
                style={{
                  width: "76.667px",
                  height: "76.667px",
                  flexShrink: "0",
                  fill: "conic-gradient(from 180deg at 50% 50%, #49CBFF 48.60000193119049deg, #86F0FF 140.3999948501587deg, #50FFA0 250.19999742507935deg, #7EA2FF 360deg)",
                  filter: "blur(3.333333730697632px)",
                }}
                {...{}}
              />
              {/* name="c - animate" id="273:19254" type="FRAME" */}
              <div
                style={{
                  width: "78.22px",
                  height: "77.846px",
                  flexShrink: "0",
                }}
              >
                {/* name="circle 3" id="273:19255" type="ELLIPSE" */}
                <QodeSvg27319255
                  style={{
                    width: "73.333px",
                    height: "73.333px",
                    flexShrink: "0",
                    fill: "linear-gradient(180deg, #FFF 49.92%, #D4D4D4 82.91%)",
                  }}
                  {...{}}
                />
                {/* name="circle 2" id="273:19256" type="ELLIPSE" */}
                <QodeSvg27319256
                  style={{
                    width: "66.667px",
                    height: "66.667px",
                    flexShrink: "0",
                    fill: "linear-gradient(180deg, #C9C9C9 8.48%, #FFF 61.05%)",
                  }}
                  {...{}}
                />
                {/* name="circle 1" id="273:19257" type="ELLIPSE" */}
                <QodeSvg27319257
                  style={{
                    width: "56.364px",
                    height: "56.364px",
                    flexShrink: "0",
                    fill: "radial-gradient(50% 50% at 50% 50%, #4A4A4A 0%, #141414 100%)",
                  }}
                  {...{}}
                />
                {/* name="video" id="273:19258" type="INSTANCE" */}
                <Icon.QodeVideo
                  style={{ width: "20px", height: "20px", flexShrink: "0" }}
                  {...{}}
                />
                {/* name="line" id="273:19259" type="ELLIPSE" */}
                <QodeSvg27319259
                  style={{
                    width: "49.091px",
                    height: "49.091px",
                    flexShrink: "0",
                    strokeWidth: "2px",
                    stroke: "#0BFFF0",
                  }}
                  {...{}}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}
