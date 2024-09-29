// id="1329:37274"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom133138241 } from "@designSystem/custom/QodeCustom133138241"
import { QodeCustom133138246 } from "@designSystem/custom/QodeCustom133138246"
import QodeSvg132938003 from "@designSystem/icon/svg/QodeSvg132938003"
import QodeSvg133138227 from "@designSystem/icon/svg/QodeSvg133138227"
import QodeSvg133140547 from "@designSystem/icon/svg/QodeSvg133140547"
import QodeSvg133140549 from "@designSystem/icon/svg/QodeSvg133140549"
import QodeSvg133140546 from "@designSystem/icon/svg/QodeSvg133140546"
import QodeSvg133140551 from "@designSystem/icon/svg/QodeSvg133140551"
import QodeSvg133140558 from "@designSystem/icon/svg/QodeSvg133140558"
import QodeSvg133140567 from "@designSystem/icon/svg/QodeSvg133140567"

export interface QodeCustom132937274Props {
  show?: boolean
  property_1?:
    | "Participant"
    | "Tracy speak 1"
    | "Tracy speak 2"
    | "Tracy listening"
    | "Variant5"
    | "Variant6"
    | "Variant7"
}

export const QodeCustom132937274: React.FC<
  QodeCustom132937274Props & { style?: CSSProperties }
> = ({ show = true, property_1 = "Participant", style, ...rest }) => {
  return (
    <>
      {/* name="Inverview/Speaker box" id="1329:37274" type="COMPONENT_SET" */}
      {/* id="1289:38677" */}
      {`${property_1}` === `Participant` && (
        <>
          {/* name="Property 1=Participant" id="1289:38677" type="COMPONENT" */}
          <div
            style={{
              ...{
                width: "192.549px",
                height: "108px",
                flexShrink: "0",
                background: "#6B6B6B",
              },
              ...style,
            }}
          >
            {/* name="Prebuilt / Video Feed Overlay" id="1331:38272" type="INSTANCE" */}
            <QodeCustom133138241
              style={{
                ...{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "1px",
                  background: "rgba(0, 0, 0, 0.60)",
                },
                ...{},
              }}
              {...{ state: "Off" }}
            />
            {/* name="Photo on 19-09-2024 at 16.25 1" id="1331:38610" type="RECTANGLE" */}
            <Flex
              style={{
                ...{
                  width: "208px",
                  height: "116px",
                  flexShrink: "0",
                  background:
                    "url(<path-to-image>) lightgray 50% / cover no-repeat",
                },
                ...{},
              }}
            >
              <></>
            </Flex>
            {/* name="Prebuilt / Video Feed Overlay" id="1331:38665" type="INSTANCE" */}
            <QodeCustom133138246
              style={{
                ...{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "1px",
                  background: "rgba(0, 0, 0, 0.60)",
                },
                ...{},
              }}
              {...{ state: "On" }}
            />
          </div>
        </>
      )}
      {/* id="1329:37275" */}
      {`${property_1}` === `Tracy speak 1` && (
        <>
          {/* name="Property 1=Tracy speak 1" id="1329:37275" type="COMPONENT" */}
          <div
            style={{
              ...{
                width: "192.549px",
                height: "108px",
                flexShrink: "0",
                border: "2px solid #81E8FF",
                background: "#282828",
              },
              ...style,
            }}
          >
            {/* name="Glow 1" id="1329:38086" type="RECTANGLE" */}
            <Flex
              style={{
                ...{
                  width: "192px",
                  height: "108px",
                  flexShrink: "0",
                  borderRadius: "4px",
                  border: "2px solid #2CFFFF",
                  filter: "blur(3px)",
                },
                ...{},
              }}
            >
              <></>
            </Flex>
            {/* name="Avatar" id="1329:38002" type="GROUP" */}
            <Flex
              style={{
                ...{ width: "48px", height: "48px", flexShrink: "0" },
                ...{},
              }}
            >
              {/* name="bg" id="1329:38003" type="GROUP" */}
              <QodeSvg132938003
                style={{
                  ...{
                    width: "48px",
                    height: "48px",
                    flexShrink: "0",
                    opacity: "0.3",
                  },
                  ...{},
                }}
                {...{}}
              />
              {/* name="Mask group" id="1329:38016" type="GROUP" */}
              <Flex
                style={{
                  ...{ width: "42px", height: "42px", flexShrink: "0" },
                  ...{},
                }}
              >
                {/* name="Ellipse 1" id="1329:38017" type="ELLIPSE" */}
                <Flex
                  style={{
                    ...{
                      width: "42px",
                      height: "42px",
                      flexShrink: "0",
                      fill: "#D9D9D9",
                    },
                    ...{},
                  }}
                >
                  <></>
                </Flex>
                {/* name="portrait-3d-female-doctor 1" id="1329:38018" type="RECTANGLE" */}
                <Flex
                  style={{
                    ...{
                      width: "63.678px",
                      height: "42.565px",
                      flexShrink: "0",
                      background:
                        "url(<path-to-image>) lightgray 50% / cover no-repeat",
                    },
                    ...{},
                  }}
                >
                  <></>
                </Flex>
              </Flex>
            </Flex>
            {/* name="Prebuilt / Video Feed Overlay" id="1331:40499" type="INSTANCE" */}
            <QodeCustom133138246
              style={{
                ...{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "1px",
                  background: "rgba(0, 0, 0, 0.60)",
                },
                ...{},
              }}
              {...{ state: "On" }}
            />
          </div>
        </>
      )}
      {/* id="1331:38198" */}
      {`${property_1}` === `Tracy speak 2` && (
        <>
          {/* name="Property 1=Tracy speak 2" id="1331:38198" type="COMPONENT" */}
          <div
            style={{
              ...{
                width: "192.549px",
                height: "108px",
                flexShrink: "0",
                border: "2px solid #81E8FF",
                background: "#282828",
              },
              ...style,
            }}
          >
            {/* name="Glow 1" id="1331:38199" type="RECTANGLE" */}
            <Flex
              style={{
                ...{
                  width: "192px",
                  height: "108px",
                  flexShrink: "0",
                  borderRadius: "4px",
                  border: "2px solid #2CFFFF",
                  filter: "blur(3px)",
                },
                ...{},
              }}
            >
              <></>
            </Flex>
            {/* name="Avatar" id="1331:38226" type="GROUP" */}
            <Flex
              style={{
                ...{ width: "48px", height: "48px", flexShrink: "0" },
                ...{},
              }}
            >
              {/* name="bg" id="1331:38227" type="GROUP" */}
              <QodeSvg133138227
                style={{
                  ...{ width: "48px", height: "48px", flexShrink: "0" },
                  ...{},
                }}
                {...{}}
              />
              {/* name="Mask group" id="1331:38230" type="GROUP" */}
              <Flex
                style={{
                  ...{ width: "42px", height: "42px", flexShrink: "0" },
                  ...{},
                }}
              >
                {/* name="Ellipse 1" id="1331:38231" type="ELLIPSE" */}
                <Flex
                  style={{
                    ...{
                      width: "42px",
                      height: "42px",
                      flexShrink: "0",
                      fill: "#D9D9D9",
                    },
                    ...{},
                  }}
                >
                  <></>
                </Flex>
                {/* name="portrait-3d-female-doctor 1" id="1331:38232" type="RECTANGLE" */}
                <Flex
                  style={{
                    ...{
                      width: "63.678px",
                      height: "42.565px",
                      flexShrink: "0",
                      background:
                        "url(<path-to-image>) lightgray 50% / cover no-repeat",
                    },
                    ...{},
                  }}
                >
                  <></>
                </Flex>
              </Flex>
            </Flex>
            {/* name="Prebuilt / Video Feed Overlay" id="1331:40512" type="INSTANCE" */}
            <QodeCustom133138246
              style={{
                ...{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "1px",
                  background: "rgba(0, 0, 0, 0.60)",
                },
                ...{},
              }}
              {...{ state: "On" }}
            />
          </div>
        </>
      )}
      {/* id="1331:38158" */}
      {`${property_1}` === `Tracy listening` && (
        <>
          {/* name="Property 1=Tracy listening" id="1331:38158" type="COMPONENT" */}
          <div
            style={{
              ...{
                width: "192.549px",
                height: "108px",
                flexShrink: "0",
                background: "#282828",
              },
              ...style,
            }}
          >
            {/* name="Ellipse 97" id="1331:40547" type="ELLIPSE" */}
            <QodeSvg133140547
              style={{
                ...{
                  width: "48px",
                  height: "48px",
                  flexShrink: "0",
                  strokeWidth: "1px",
                  stroke: "#727272",
                },
                ...{},
              }}
              {...{}}
            />
            {/* name="Ellipse 98" id="1331:40549" type="ELLIPSE" */}
            <QodeSvg133140549
              style={{
                ...{
                  width: "54px",
                  height: "54px",
                  flexShrink: "0",
                  strokeWidth: "1px",
                  stroke: "#727272",
                },
                ...{},
              }}
              {...{}}
            />
            {/* name="x" id="1331:40363" type="GROUP" */}
            <Flex
              style={{
                ...{ width: "34px", height: "34px", flexShrink: "0" },
                ...{},
              }}
            >
              {/* name="x" id="1331:40367" type="GROUP" */}
              <Flex
                style={{
                  ...{ width: "34px", height: "34px", flexShrink: "0" },
                  ...{},
                }}
              >
                {/* name="Ellipse 1" id="1331:40368" type="ELLIPSE" */}
                <Flex
                  style={{
                    ...{
                      width: "34px",
                      height: "34px",
                      flexShrink: "0",
                      fill: "#D9D9D9",
                    },
                    ...{},
                  }}
                >
                  <></>
                </Flex>
                {/* name="portrait-3d-female-doctor 1" id="1331:40369" type="RECTANGLE" */}
                <Flex
                  style={{
                    ...{
                      width: "51.548px",
                      height: "34.457px",
                      flexShrink: "0",
                      background:
                        "url(<path-to-image>) lightgray 50% / cover no-repeat",
                    },
                    ...{},
                  }}
                >
                  <></>
                </Flex>
              </Flex>
            </Flex>
            <span
              style={{
                ...{
                  color: "#FFF",
                  fontFeatureSettings: "'liga' off, 'clig' off",
                  fontFamily: '"SF Pro Display"',
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "16px /* 100% */",
                },
                ...{},
              }}
            >{`Listening`}</span>
            {/* name="Ellipse 96" id="1331:40546" type="ELLIPSE" */}
            <QodeSvg133140546
              style={{
                ...{
                  width: "42px",
                  height: "42px",
                  flexShrink: "0",
                  strokeWidth: "1px",
                  stroke: "#727272",
                },
                ...{},
              }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="1331:40550" */}
      {`${property_1}` === `Variant5` && (
        <>
          {/* name="Property 1=Variant5" id="1331:40550" type="COMPONENT" */}
          <div
            style={{
              ...{
                width: "192.549px",
                height: "108px",
                flexShrink: "0",
                background: "#282828",
              },
              ...style,
            }}
          >
            {/* name="Ellipse 97" id="1331:40551" type="ELLIPSE" */}
            <QodeSvg133140551
              style={{
                ...{
                  width: "48px",
                  height: "48px",
                  flexShrink: "0",
                  strokeWidth: "1px",
                  stroke: "#727272",
                },
                ...{},
              }}
              {...{}}
            />
            {/* name="Ellipse 98" id="1331:40552" type="ELLIPSE" */}
            <Flex
              style={{
                ...{
                  width: "54px",
                  height: "54px",
                  flexShrink: "0",
                  borderRadius: "54px",
                  border: "1px solid #727272",
                },
                ...{},
              }}
            >
              <></>
            </Flex>
            {/* name="x" id="1331:40553" type="GROUP" */}
            <Flex
              style={{
                ...{ width: "34px", height: "34px", flexShrink: "0" },
                ...{},
              }}
            >
              {/* name="x" id="1331:40554" type="GROUP" */}
              <Flex
                style={{
                  ...{ width: "34px", height: "34px", flexShrink: "0" },
                  ...{},
                }}
              >
                {/* name="Ellipse 1" id="1331:40555" type="ELLIPSE" */}
                <Flex
                  style={{
                    ...{
                      width: "34px",
                      height: "34px",
                      flexShrink: "0",
                      fill: "#D9D9D9",
                    },
                    ...{},
                  }}
                >
                  <></>
                </Flex>
                {/* name="portrait-3d-female-doctor 1" id="1331:40556" type="RECTANGLE" */}
                <Flex
                  style={{
                    ...{
                      width: "51.548px",
                      height: "34.457px",
                      flexShrink: "0",
                      background:
                        "url(<path-to-image>) lightgray 50% / cover no-repeat",
                    },
                    ...{},
                  }}
                >
                  <></>
                </Flex>
              </Flex>
            </Flex>
            <span
              style={{
                ...{
                  color: "#FFF",
                  fontFeatureSettings: "'liga' off, 'clig' off",
                  fontFamily: '"SF Pro Display"',
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "16px /* 100% */",
                },
                ...{},
              }}
            >{`Listening`}</span>
            {/* name="Ellipse 96" id="1331:40558" type="ELLIPSE" */}
            <QodeSvg133140558
              style={{
                ...{
                  width: "42px",
                  height: "42px",
                  flexShrink: "0",
                  strokeWidth: "1px",
                  stroke: "#727272",
                },
                ...{},
              }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="1331:40559" */}
      {`${property_1}` === `Variant6` && (
        <>
          {/* name="Property 1=Variant6" id="1331:40559" type="COMPONENT" */}
          <div
            style={{
              ...{
                width: "192.549px",
                height: "108px",
                flexShrink: "0",
                background: "#282828",
              },
              ...style,
            }}
          >
            {/* name="Ellipse 97" id="1331:40560" type="ELLIPSE" */}
            <Flex
              style={{
                ...{
                  width: "48px",
                  height: "48px",
                  flexShrink: "0",
                  borderRadius: "48px",
                  border: "1px solid #727272",
                },
                ...{},
              }}
            >
              <></>
            </Flex>
            {/* name="Ellipse 98" id="1331:40561" type="ELLIPSE" */}
            <Flex
              style={{
                ...{
                  width: "54px",
                  height: "54px",
                  flexShrink: "0",
                  borderRadius: "54px",
                  border: "1px solid #727272",
                },
                ...{},
              }}
            >
              <></>
            </Flex>
            {/* name="x" id="1331:40562" type="GROUP" */}
            <Flex
              style={{
                ...{ width: "34px", height: "34px", flexShrink: "0" },
                ...{},
              }}
            >
              {/* name="x" id="1331:40563" type="GROUP" */}
              <Flex
                style={{
                  ...{ width: "34px", height: "34px", flexShrink: "0" },
                  ...{},
                }}
              >
                {/* name="Ellipse 1" id="1331:40564" type="ELLIPSE" */}
                <Flex
                  style={{
                    ...{
                      width: "34px",
                      height: "34px",
                      flexShrink: "0",
                      fill: "#D9D9D9",
                    },
                    ...{},
                  }}
                >
                  <></>
                </Flex>
                {/* name="portrait-3d-female-doctor 1" id="1331:40565" type="RECTANGLE" */}
                <Flex
                  style={{
                    ...{
                      width: "51.548px",
                      height: "34.457px",
                      flexShrink: "0",
                      background:
                        "url(<path-to-image>) lightgray 50% / cover no-repeat",
                    },
                    ...{},
                  }}
                >
                  <></>
                </Flex>
              </Flex>
            </Flex>
            <span
              style={{
                ...{
                  color: "#FFF",
                  fontFeatureSettings: "'liga' off, 'clig' off",
                  fontFamily: '"SF Pro Display"',
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "16px /* 100% */",
                },
                ...{},
              }}
            >{`Listening`}</span>
            {/* name="Ellipse 96" id="1331:40567" type="ELLIPSE" */}
            <QodeSvg133140567
              style={{
                ...{
                  width: "42px",
                  height: "42px",
                  flexShrink: "0",
                  strokeWidth: "1px",
                  stroke: "#727272",
                },
                ...{},
              }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="1331:40568" */}
      {`${property_1}` === `Variant7` && (
        <>
          {/* name="Property 1=Variant7" id="1331:40568" type="COMPONENT" */}
          <div
            style={{
              ...{
                width: "192.549px",
                height: "108px",
                flexShrink: "0",
                background: "#282828",
              },
              ...style,
            }}
          >
            {/* name="Ellipse 97" id="1331:40569" type="ELLIPSE" */}
            <Flex
              style={{
                ...{
                  width: "48px",
                  height: "48px",
                  flexShrink: "0",
                  borderRadius: "48px",
                  border: "1px solid #727272",
                },
                ...{},
              }}
            >
              <></>
            </Flex>
            {/* name="Ellipse 98" id="1331:40570" type="ELLIPSE" */}
            <Flex
              style={{
                ...{
                  width: "54px",
                  height: "54px",
                  flexShrink: "0",
                  borderRadius: "54px",
                  border: "1px solid #727272",
                },
                ...{},
              }}
            >
              <></>
            </Flex>
            {/* name="x" id="1331:40571" type="GROUP" */}
            <Flex
              style={{
                ...{ width: "34px", height: "34px", flexShrink: "0" },
                ...{},
              }}
            >
              {/* name="x" id="1331:40572" type="GROUP" */}
              <Flex
                style={{
                  ...{ width: "34px", height: "34px", flexShrink: "0" },
                  ...{},
                }}
              >
                {/* name="Ellipse 1" id="1331:40573" type="ELLIPSE" */}
                <Flex
                  style={{
                    ...{
                      width: "34px",
                      height: "34px",
                      flexShrink: "0",
                      fill: "#D9D9D9",
                    },
                    ...{},
                  }}
                >
                  <></>
                </Flex>
                {/* name="portrait-3d-female-doctor 1" id="1331:40574" type="RECTANGLE" */}
                <Flex
                  style={{
                    ...{
                      width: "51.548px",
                      height: "34.457px",
                      flexShrink: "0",
                      background:
                        "url(<path-to-image>) lightgray 50% / cover no-repeat",
                    },
                    ...{},
                  }}
                >
                  <></>
                </Flex>
              </Flex>
            </Flex>
            <span
              style={{
                ...{
                  color: "#FFF",
                  fontFeatureSettings: "'liga' off, 'clig' off",
                  fontFamily: '"SF Pro Display"',
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "16px /* 100% */",
                },
                ...{},
              }}
            >{`Listening`}</span>
            {/* name="Ellipse 96" id="1331:40576" type="ELLIPSE" */}
            <Flex
              style={{
                ...{
                  width: "42px",
                  height: "42px",
                  flexShrink: "0",
                  borderRadius: "42px",
                  border: "1px solid #727272",
                },
                ...{},
              }}
            >
              <></>
            </Flex>
          </div>
        </>
      )}
    </>
  )
}
