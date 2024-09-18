// id="214:6293"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom2145704 } from "@designSystem/custom/QodeCustom2145704"
import { QodeCustom2145712 } from "@designSystem/custom/QodeCustom2145712"
import { QodeCustom20232919 } from "@designSystem/custom/QodeCustom20232919"
import { QodeButton } from "@designSystem/ant/QodeButton"

export interface QodeCustom2146293Props {}

export const QodeCustom2146293: React.FC<
  QodeCustom2146293Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="Type=HH:MM:SS" id="214:6293" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "170px",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "var(--style-radius-borderradius, 8px)",
            background:
              "var(--color-neutral-background-colorbgelevated, #f8f6f6)",
            boxShadow:
              "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 3px 6px -4px rgba(0, 0, 0, 0.12)",
          },
          ...style,
        }}
      >
        {/* name="Body" id="214:6294" type="FRAME" */}
        <div
          style={{
            ...{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
              alignSelf: "stretch",
            },
            ...{},
          }}
        >
          {/* name="Time Picker" id="214:6410" type="FRAME" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "170px",
                flexDirection: "column",
                alignItems: "center",
              },
              ...{},
            }}
          >
            {/* name="Content" id="214:6412" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  paddingTop: "var(--size-padding-paddingxxs, 4px)",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  alignSelf: "stretch",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorsplit, rgba(0, 0, 0, 0.06))",
                },
                ...{},
              }}
            >
              {/* name="Column" id="214:6413" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    padding: "0px var(--size-padding-paddingxxs, 4px)",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: "1 0 0",
                    alignSelf: "stretch",
                  },
                  ...{},
                }}
              >
                {/* name="Cell Wrapper" id="214:6414" type="FRAME" */}
                <div
                  style={{
                    ...{
                      display: "flex",
                      padding: "2px 0px",
                      justifyContent: "center",
                      alignItems: "center",
                      alignSelf: "stretch",
                    },
                    ...{},
                  }}
                >
                  {/* name=".timePicker__menuItem" id="214:6415" type="INSTANCE" */}
                  <QodeCustom2145704
                    style={{
                      ...{
                        display: "flex",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      },
                      ...{},
                    }}
                    {...{ title: "00", state: "default" }}
                  />
                </div>
                {/* name="Cell Wrapper" id="214:6416" type="FRAME" */}
                <div
                  style={{
                    ...{
                      display: "flex",
                      padding: "2px 0px",
                      justifyContent: "center",
                      alignItems: "center",
                      alignSelf: "stretch",
                    },
                    ...{},
                  }}
                >
                  {/* name=".timePicker__menuItem" id="214:6417" type="INSTANCE" */}
                  <QodeCustom2145704
                    style={{
                      ...{
                        display: "flex",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      },
                      ...{},
                    }}
                    {...{ title: "01", state: "default" }}
                  />
                </div>
                {/* name="Cell Wrapper" id="214:6418" type="FRAME" */}
                <div
                  style={{
                    ...{
                      display: "flex",
                      padding: "2px 0px",
                      justifyContent: "center",
                      alignItems: "center",
                      alignSelf: "stretch",
                    },
                    ...{},
                  }}
                >
                  {/* name=".timePicker__menuItem" id="214:6419" type="INSTANCE" */}
                  <QodeCustom2145712
                    style={{
                      ...{
                        display: "flex",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                        background:
                          "var(--color-primary-colorprimarybg, #f8fcff)",
                      },
                      ...{},
                    }}
                    {...{ title: "24", state: "selected" }}
                  />
                </div>
                {/* name="Cell Wrapper" id="214:6420" type="FRAME" */}
                <div
                  style={{
                    ...{
                      display: "flex",
                      padding: "2px 0px",
                      justifyContent: "center",
                      alignItems: "center",
                      alignSelf: "stretch",
                    },
                    ...{},
                  }}
                >
                  {/* name=".timePicker__menuItem" id="214:6421" type="INSTANCE" */}
                  <QodeCustom2145704
                    style={{
                      ...{
                        display: "flex",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      },
                      ...{},
                    }}
                    {...{ title: "03", state: "default" }}
                  />
                </div>
                {/* name="Cell Wrapper" id="214:6422" type="FRAME" */}
                <div
                  style={{
                    ...{
                      display: "flex",
                      padding: "2px 0px",
                      justifyContent: "center",
                      alignItems: "center",
                      alignSelf: "stretch",
                    },
                    ...{},
                  }}
                >
                  {/* name=".timePicker__menuItem" id="214:6423" type="INSTANCE" */}
                  <QodeCustom2145704
                    style={{
                      ...{
                        display: "flex",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      },
                      ...{},
                    }}
                    {...{ title: "04", state: "default" }}
                  />
                </div>
                {/* name="Cell Wrapper" id="214:6424" type="FRAME" */}
                <div
                  style={{
                    ...{
                      display: "flex",
                      padding: "2px 0px",
                      justifyContent: "center",
                      alignItems: "center",
                      alignSelf: "stretch",
                    },
                    ...{},
                  }}
                >
                  {/* name=".timePicker__menuItem" id="214:6425" type="INSTANCE" */}
                  <QodeCustom2145704
                    style={{
                      ...{
                        display: "flex",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      },
                      ...{},
                    }}
                    {...{ title: "05", state: "default" }}
                  />
                </div>
                {/* name="Cell Wrapper" id="214:6426" type="FRAME" */}
                <div
                  style={{
                    ...{
                      display: "flex",
                      padding: "2px 0px",
                      justifyContent: "center",
                      alignItems: "center",
                      alignSelf: "stretch",
                    },
                    ...{},
                  }}
                >
                  {/* name=".timePicker__menuItem" id="214:6427" type="INSTANCE" */}
                  <QodeCustom2145704
                    style={{
                      ...{
                        display: "flex",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      },
                      ...{},
                    }}
                    {...{ title: "06", state: "default" }}
                  />
                </div>
                {/* name="Cell Wrapper" id="214:6428" type="FRAME" */}
                <div
                  style={{
                    ...{
                      display: "flex",
                      padding: "2px 0px",
                      justifyContent: "center",
                      alignItems: "center",
                      alignSelf: "stretch",
                    },
                    ...{},
                  }}
                >
                  {/* name=".timePicker__menuItem" id="214:6429" type="INSTANCE" */}
                  <QodeCustom2145704
                    style={{
                      ...{
                        display: "flex",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      },
                      ...{},
                    }}
                    {...{ title: "07", state: "default" }}
                  />
                </div>
              </div>
              {/* name="Divider" id="214:6430" type="RECTANGLE" */}
              <Flex
                style={{
                  ...{
                    width: "var(--size-size-size5xs-1px, 1px)",
                    alignSelf: "stretch",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorsplit, rgba(0, 0, 0, 0.06))",
                  },
                  ...{},
                }}
              >
                <></>
              </Flex>
              {/* name="Column" id="214:6431" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    padding: "0px var(--size-padding-paddingxxs, 4px)",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: "1 0 0",
                    alignSelf: "stretch",
                  },
                  ...{},
                }}
              >
                {/* name="Cell Wrapper" id="214:6432" type="FRAME" */}
                <div
                  style={{
                    ...{
                      display: "flex",
                      padding: "2px 0px",
                      justifyContent: "center",
                      alignItems: "center",
                      alignSelf: "stretch",
                    },
                    ...{},
                  }}
                >
                  {/* name=".timePicker__menuItem" id="214:6433" type="INSTANCE" */}
                  <QodeCustom2145704
                    style={{
                      ...{
                        display: "flex",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      },
                      ...{},
                    }}
                    {...{ title: "00", state: "default" }}
                  />
                </div>
                {/* name="Cell Wrapper" id="214:6434" type="FRAME" */}
                <div
                  style={{
                    ...{
                      display: "flex",
                      padding: "2px 0px",
                      justifyContent: "center",
                      alignItems: "center",
                      alignSelf: "stretch",
                    },
                    ...{},
                  }}
                >
                  {/* name=".timePicker__menuItem" id="214:6435" type="INSTANCE" */}
                  <QodeCustom2145704
                    style={{
                      ...{
                        display: "flex",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      },
                      ...{},
                    }}
                    {...{ title: "01", state: "default" }}
                  />
                </div>
                {/* name="Cell Wrapper" id="214:6436" type="FRAME" */}
                <div
                  style={{
                    ...{
                      display: "flex",
                      padding: "2px 0px",
                      justifyContent: "center",
                      alignItems: "center",
                      alignSelf: "stretch",
                    },
                    ...{},
                  }}
                >
                  {/* name=".timePicker__menuItem" id="214:6437" type="INSTANCE" */}
                  <QodeCustom2145704
                    style={{
                      ...{
                        display: "flex",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      },
                      ...{},
                    }}
                    {...{ title: "02", state: "default" }}
                  />
                </div>
                {/* name="Cell Wrapper" id="214:6438" type="FRAME" */}
                <div
                  style={{
                    ...{
                      display: "flex",
                      padding: "2px 0px",
                      justifyContent: "center",
                      alignItems: "center",
                      alignSelf: "stretch",
                    },
                    ...{},
                  }}
                >
                  {/* name=".timePicker__menuItem" id="214:6439" type="INSTANCE" */}
                  <QodeCustom2145704
                    style={{
                      ...{
                        display: "flex",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      },
                      ...{},
                    }}
                    {...{ title: "03", state: "default" }}
                  />
                </div>
                {/* name="Cell Wrapper" id="214:6440" type="FRAME" */}
                <div
                  style={{
                    ...{
                      display: "flex",
                      padding: "2px 0px",
                      justifyContent: "center",
                      alignItems: "center",
                      alignSelf: "stretch",
                    },
                    ...{},
                  }}
                >
                  {/* name=".timePicker__menuItem" id="214:6441" type="INSTANCE" */}
                  <QodeCustom2145712
                    style={{
                      ...{
                        display: "flex",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                        background:
                          "var(--color-primary-colorprimarybg, #f8fcff)",
                      },
                      ...{},
                    }}
                    {...{ title: "24", state: "selected" }}
                  />
                </div>
                {/* name="Cell Wrapper" id="214:6442" type="FRAME" */}
                <div
                  style={{
                    ...{
                      display: "flex",
                      padding: "2px 0px",
                      justifyContent: "center",
                      alignItems: "center",
                      alignSelf: "stretch",
                    },
                    ...{},
                  }}
                >
                  {/* name=".timePicker__menuItem" id="214:6443" type="INSTANCE" */}
                  <QodeCustom2145704
                    style={{
                      ...{
                        display: "flex",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      },
                      ...{},
                    }}
                    {...{ title: "05", state: "default" }}
                  />
                </div>
                {/* name="Cell Wrapper" id="214:6444" type="FRAME" */}
                <div
                  style={{
                    ...{
                      display: "flex",
                      padding: "2px 0px",
                      justifyContent: "center",
                      alignItems: "center",
                      alignSelf: "stretch",
                    },
                    ...{},
                  }}
                >
                  {/* name=".timePicker__menuItem" id="214:6445" type="INSTANCE" */}
                  <QodeCustom2145704
                    style={{
                      ...{
                        display: "flex",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      },
                      ...{},
                    }}
                    {...{ title: "06", state: "default" }}
                  />
                </div>
                {/* name="Cell Wrapper" id="214:6446" type="FRAME" */}
                <div
                  style={{
                    ...{
                      display: "flex",
                      padding: "2px 0px",
                      justifyContent: "center",
                      alignItems: "center",
                      alignSelf: "stretch",
                    },
                    ...{},
                  }}
                >
                  {/* name=".datePicker__menuItem" id="214:6447" type="INSTANCE" */}
                  <QodeCustom20232919
                    style={{
                      ...{
                        display: "flex",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      },
                      ...{},
                    }}
                    {...{ title: "07", state: "default" }}
                  />
                </div>
              </div>
              {/* name="Divider" id="214:6448" type="RECTANGLE" */}
              <Flex
                style={{
                  ...{
                    width: "var(--size-size-size5xs-1px, 1px)",
                    alignSelf: "stretch",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorsplit, rgba(0, 0, 0, 0.06))",
                  },
                  ...{},
                }}
              >
                <></>
              </Flex>
              {/* name="Column" id="214:6449" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    padding: "0px var(--size-padding-paddingxxs, 4px)",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: "1 0 0",
                    alignSelf: "stretch",
                  },
                  ...{},
                }}
              >
                {/* name="Cell Wrapper" id="214:6450" type="FRAME" */}
                <div
                  style={{
                    ...{
                      display: "flex",
                      padding: "2px 0px",
                      justifyContent: "center",
                      alignItems: "center",
                      alignSelf: "stretch",
                    },
                    ...{},
                  }}
                >
                  {/* name=".timePicker__menuItem" id="214:6451" type="INSTANCE" */}
                  <QodeCustom2145704
                    style={{
                      ...{
                        display: "flex",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      },
                      ...{},
                    }}
                    {...{ title: "00", state: "default" }}
                  />
                </div>
                {/* name="Cell Wrapper" id="214:6452" type="FRAME" */}
                <div
                  style={{
                    ...{
                      display: "flex",
                      padding: "2px 0px",
                      justifyContent: "center",
                      alignItems: "center",
                      alignSelf: "stretch",
                    },
                    ...{},
                  }}
                >
                  {/* name=".timePicker__menuItem" id="214:6453" type="INSTANCE" */}
                  <QodeCustom2145704
                    style={{
                      ...{
                        display: "flex",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      },
                      ...{},
                    }}
                    {...{ title: "01", state: "default" }}
                  />
                </div>
                {/* name="Cell Wrapper" id="214:6454" type="FRAME" */}
                <div
                  style={{
                    ...{
                      display: "flex",
                      padding: "2px 0px",
                      justifyContent: "center",
                      alignItems: "center",
                      alignSelf: "stretch",
                    },
                    ...{},
                  }}
                >
                  {/* name=".timePicker__menuItem" id="214:6455" type="INSTANCE" */}
                  <QodeCustom2145704
                    style={{
                      ...{
                        display: "flex",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      },
                      ...{},
                    }}
                    {...{ title: "02", state: "default" }}
                  />
                </div>
                {/* name="Cell Wrapper" id="214:6456" type="FRAME" */}
                <div
                  style={{
                    ...{
                      display: "flex",
                      padding: "2px 0px",
                      justifyContent: "center",
                      alignItems: "center",
                      alignSelf: "stretch",
                    },
                    ...{},
                  }}
                >
                  {/* name=".timePicker__menuItem" id="214:6457" type="INSTANCE" */}
                  <QodeCustom2145704
                    style={{
                      ...{
                        display: "flex",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      },
                      ...{},
                    }}
                    {...{ title: "03", state: "default" }}
                  />
                </div>
                {/* name="Cell Wrapper" id="214:6458" type="FRAME" */}
                <div
                  style={{
                    ...{
                      display: "flex",
                      padding: "2px 0px",
                      justifyContent: "center",
                      alignItems: "center",
                      alignSelf: "stretch",
                    },
                    ...{},
                  }}
                >
                  {/* name=".timePicker__menuItem" id="214:6459" type="INSTANCE" */}
                  <QodeCustom2145704
                    style={{
                      ...{
                        display: "flex",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      },
                      ...{},
                    }}
                    {...{ title: "04", state: "default" }}
                  />
                </div>
                {/* name="Cell Wrapper" id="214:6460" type="FRAME" */}
                <div
                  style={{
                    ...{
                      display: "flex",
                      padding: "2px 0px",
                      justifyContent: "center",
                      alignItems: "center",
                      alignSelf: "stretch",
                    },
                    ...{},
                  }}
                >
                  {/* name=".timePicker__menuItem" id="214:6461" type="INSTANCE" */}
                  <QodeCustom2145704
                    style={{
                      ...{
                        display: "flex",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      },
                      ...{},
                    }}
                    {...{ title: "05", state: "default" }}
                  />
                </div>
                {/* name="Cell Wrapper" id="214:6462" type="FRAME" */}
                <div
                  style={{
                    ...{
                      display: "flex",
                      padding: "2px 0px",
                      justifyContent: "center",
                      alignItems: "center",
                      alignSelf: "stretch",
                    },
                    ...{},
                  }}
                >
                  {/* name=".timePicker__menuItem" id="214:6463" type="INSTANCE" */}
                  <QodeCustom2145712
                    style={{
                      ...{
                        display: "flex",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                        background:
                          "var(--color-primary-colorprimarybg, #f8fcff)",
                      },
                      ...{},
                    }}
                    {...{ title: "24", state: "selected" }}
                  />
                </div>
                {/* name="Cell Wrapper" id="214:6464" type="FRAME" */}
                <div
                  style={{
                    ...{
                      display: "flex",
                      padding: "2px 0px",
                      justifyContent: "center",
                      alignItems: "center",
                      alignSelf: "stretch",
                    },
                    ...{},
                  }}
                >
                  {/* name=".timePicker__menuItem" id="214:6465" type="INSTANCE" */}
                  <QodeCustom2145704
                    style={{
                      ...{
                        display: "flex",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      },
                      ...{},
                    }}
                    {...{ title: "07", state: "default" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* name="Footer" id="214:6466" type="FRAME" */}
        <div
          style={{
            ...{
              display: "flex",
              padding:
                "var(--size-padding-paddingxs, 8px) var(--size-padding-paddingsm, 12px)",
              justifyContent: "space-between",
              alignItems: "center",
              alignSelf: "stretch",
            },
            ...{},
          }}
        >
          {/* name="Button" id="214:6467" type="INSTANCE" */}
          <QodeButton
            style={{
              ...{
                display: "flex",
                height: "var(--size-height-controlheightsm, 24px)",
                padding:
                  "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                borderRadius: "var(--style-radius-borderradiussm, 6px)",
              },
              ...{},
            }}
            {...{
              buttonname: "Now",
              type: "link",
              size: "small",
              state: "default",
              content: "default",
              danger: false,
              ghost: false,
            }}
          />
          {/* name="Button" id="214:6468" type="INSTANCE" */}
          <QodeButton
            style={{
              ...{
                display: "flex",
                height: "var(--size-height-controlheightsm, 24px)",
                padding:
                  "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                borderRadius: "var(--style-radius-borderradiussm, 6px)",
                border: "1px solid var(--border-border-primary-30, #107ecc)",
                background: "var(--color-primary-colorprimary, #1597f4)",
              },
              ...{},
            }}
            {...{
              buttonname: "Ok",
              type: "primary",
              size: "small",
              state: "default",
              content: "default",
              danger: false,
              ghost: false,
            }}
          />
        </div>
      </div>
    </>
  )
}