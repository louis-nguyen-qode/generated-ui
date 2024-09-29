// id="43:25453"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom199059991 } from "@designSystem/custom/QodeCustom199059991"
import { QodeCustom182845845 } from "@designSystem/custom/QodeCustom182845845"
import { QodeCustom698757 } from "@designSystem/custom/QodeCustom698757"
import { QodeCustom228149015 } from "@designSystem/custom/QodeCustom228149015"
import { QodeCustom228149315 } from "@designSystem/custom/QodeCustom228149315"
import { QodeCustom228149016 } from "@designSystem/custom/QodeCustom228149016"

export interface QodeCustom4325453Props {
  property_1?: "Default" | "In shortlisted" | "Shortlist" | "Variant5"
}

export const QodeCustom4325453: React.FC<
  QodeCustom4325453Props & { style?: CSSProperties }
> = ({ property_1 = "Default", style, ...rest }) => {
  return (
    <>
      {/* name="Profile/Header" id="43:25453" type="COMPONENT_SET" */}
      {/* id="43:25730" */}
      {`${property_1}` === `Default` && (
        <>
          {/* name="Property 1=Default" id="43:25730" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "806px",
                alignItems: "flex-start",
                gap: "24px",
              },
              ...style,
            }}
          >
            {/* name="Wrap" id="43:25731" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "16px",
                  flex: "1 0 0",
                },
                ...{},
              }}
            >
              {/* name="Profile/Avatar" id="1990:60052" type="INSTANCE" */}
              <QodeCustom199059991
                style={{
                  ...{
                    display: "flex",
                    width: "72px",
                    height: "72px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{ verified: false, size: "72" }}
              />
              {/* name="Wrap" id="43:25733" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "8px",
                    flex: "1 0 0",
                  },
                  ...{},
                }}
              >
                {/* name="Name yoe" id="43:25734" type="FRAME" */}
                <div
                  style={{
                    ...{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      alignSelf: "stretch",
                    },
                    ...{},
                  }}
                >
                  {/* name="Icon/Verified profile" id="1828:49124" type="INSTANCE" */}
                  <QodeCustom182845845
                    style={{
                      ...{
                        display: "flex",
                        padding: "2px",
                        alignItems: "center",
                        gap: "10px",
                        borderRadius: "24px",
                        border: "1px solid #1597F4",
                        background: "#EEF8FF",
                      },
                      ...{},
                    }}
                    {...{ property_1: "2" }}
                  />
                  <span
                    style={{
                      ...{
                        flex: "1 0 0",
                        color: "var(--text-text-neutral-10, #bfbfbf)",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-heading6, 16px)",
                        fontStyle: "normal",
                        fontWeight: "600",
                        lineHeight: "var(--lineheight-lineheight-h6, 22px)",
                      },
                      ...{},
                    }}
                  >{`Nguyen Quoc Thai · 12 YoE`}</span>
                </div>
                {/* name="Brief" id="47:6603" type="FRAME" */}
                <div
                  style={{
                    ...{
                      display: "flex",
                      paddingRight: "24px",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      gap: "2px",
                      alignSelf: "stretch",
                    },
                    ...{},
                  }}
                >
                  <span
                    style={{
                      ...{
                        alignSelf: "stretch",
                        color: "var(--text-text-neutral-50, #1d1d1d)",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-base, 14px)",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight:
                          "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                      },
                      ...{},
                    }}
                  >{`Senior Software Developer at The Chemico Vietnam`}</span>
                  {/* name="Location" id="47:6605" type="FRAME" */}
                  <div
                    style={{
                      ...{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "4px",
                        alignSelf: "stretch",
                      },
                      ...{},
                    }}
                  >
                    {/* name="location-dot" id="69:8761" type="INSTANCE" */}
                    <QodeCustom698757
                      style={{ ...{ width: "16px", height: "16px" }, ...{} }}
                      {...{}}
                    />
                    <span
                      style={{
                        ...{
                          flex: "1 0 0",
                          color: "var(--text-text-neutral-40, #464646)",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        },
                        ...{},
                      }}
                    >{`Ho Chi Minh city, Vietnam`}</span>
                  </div>
                </div>
              </div>
            </div>
            {/* name="Button" id="43:25741" type="INSTANCE" */}
            <QodeCustom228149015
              style={{
                ...{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "4px 16px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "8px",
                  borderRadius: "var(--border-radius-rounded, 999px)",
                  border: "1px solid var(--border-border-primary-30, #107ecc)",
                  background: "var(--background-bg-primary, #1597f4)",
                },
                ...{},
              }}
              {...{
                iconLeft: true,
                buttonname: "Shortlist",
                type: "primary",
                size: "default",
                state: "default",
                content: "default",
                danger: false,
                ghost: false,
              }}
            />
          </div>
        </>
      )}
      {/* id="24:11027" */}
      {`${property_1}` === `Shortlist` && (
        <>
          {/* name="Property 1=Shortlist" id="24:11027" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "806px",
                alignItems: "flex-start",
                gap: "24px",
              },
              ...style,
            }}
          >
            {/* name="Wrap" id="20:4764" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "16px",
                  flex: "1 0 0",
                },
                ...{},
              }}
            >
              {/* name="Profile/Avatar" id="1990:60473" type="INSTANCE" */}
              <QodeCustom199059991
                style={{
                  ...{
                    display: "flex",
                    width: "72px",
                    height: "72px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{ verified: false, size: "72" }}
              />
              {/* name="Wrap" id="20:4767" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "8px",
                    flex: "1 0 0",
                  },
                  ...{},
                }}
              >
                {/* name="Name yoe" id="1828:48297" type="FRAME" */}
                <div
                  style={{
                    ...{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      alignSelf: "stretch",
                    },
                    ...{},
                  }}
                >
                  {/* name="Icon/Verified profile" id="1828:49321" type="INSTANCE" */}
                  <QodeCustom182845845
                    style={{
                      ...{
                        display: "flex",
                        padding: "2px",
                        alignItems: "center",
                        gap: "10px",
                        borderRadius: "24px",
                        border: "1px solid #1597F4",
                        background: "#EEF8FF",
                      },
                      ...{},
                    }}
                    {...{ property_1: "2" }}
                  />
                  <span
                    style={{
                      ...{
                        flex: "1 0 0",
                        color: "var(--text-text-neutral-10, #bfbfbf)",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-heading6, 16px)",
                        fontStyle: "normal",
                        fontWeight: "600",
                        lineHeight: "var(--lineheight-lineheight-h6, 22px)",
                      },
                      ...{},
                    }}
                  >{`Nguyen Quoc Thai · 12 YoE`}</span>
                </div>
                {/* name="Brief" id="47:6571" type="FRAME" */}
                <div
                  style={{
                    ...{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      gap: "2px",
                      alignSelf: "stretch",
                    },
                    ...{},
                  }}
                >
                  <span
                    style={{
                      ...{
                        alignSelf: "stretch",
                        color: "var(--text-text-neutral-50, #1d1d1d)",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-base, 14px)",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight:
                          "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                      },
                      ...{},
                    }}
                  >{`Senior Software Developer at The Chemico Vietnam`}</span>
                  {/* name="Location" id="69:8787" type="FRAME" */}
                  <div
                    style={{
                      ...{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "4px",
                        alignSelf: "stretch",
                      },
                      ...{},
                    }}
                  >
                    {/* name="location-dot" id="69:8788" type="INSTANCE" */}
                    <QodeCustom698757
                      style={{ ...{ width: "16px", height: "16px" }, ...{} }}
                      {...{}}
                    />
                    <span
                      style={{
                        ...{
                          flex: "1 0 0",
                          color: "var(--text-text-neutral-40, #464646)",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        },
                        ...{},
                      }}
                    >{`Ho Chi Minh city, Vietnam`}</span>
                  </div>
                </div>
              </div>
            </div>
            {/* name="Button" id="20:6104" type="INSTANCE" */}
            <QodeCustom228149315
              style={{
                ...{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding:
                    "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  borderRadius: "var(--border-radius-rounded, 999px)",
                  border: "1px solid var(--border-border-primary-30, #107ecc)",
                  background: "var(--background-bg-primary, #1597f4)",
                },
                ...{},
              }}
              {...{
                buttonname: "Shortlist",
                iconLeft: true,
                type: "primary",
                size: "default",
                state: "default",
                content: "icon",
                danger: false,
                ghost: false,
              }}
            />
          </div>
        </>
      )}
      {/* id="43:25454" */}
      {`${property_1}` === `In shortlisted` && (
        <>
          {/* name="Property 1=In shortlisted" id="43:25454" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "806px",
                alignItems: "flex-start",
                gap: "24px",
              },
              ...style,
            }}
          >
            {/* name="Wrap" id="43:25455" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "16px",
                  flex: "1 0 0",
                },
                ...{},
              }}
            >
              {/* name="Profile/Avatar" id="1990:60503" type="INSTANCE" */}
              <QodeCustom199059991
                style={{
                  ...{
                    display: "flex",
                    width: "72px",
                    height: "72px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{ verified: false, size: "72" }}
              />
              {/* name="Wrap" id="43:25457" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "8px",
                    flex: "1 0 0",
                  },
                  ...{},
                }}
              >
                {/* name="Name yoe" id="1828:48324" type="FRAME" */}
                <div
                  style={{
                    ...{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      alignSelf: "stretch",
                    },
                    ...{},
                  }}
                >
                  {/* name="Icon/Verified profile" id="1828:49329" type="INSTANCE" */}
                  <QodeCustom182845845
                    style={{
                      ...{
                        display: "flex",
                        padding: "2px",
                        alignItems: "center",
                        gap: "10px",
                        borderRadius: "24px",
                        border: "1px solid #1597F4",
                        background: "#EEF8FF",
                      },
                      ...{},
                    }}
                    {...{ property_1: "2" }}
                  />
                  <span
                    style={{
                      ...{
                        flex: "1 0 0",
                        color: "var(--text-text-neutral-10, #bfbfbf)",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-heading6, 16px)",
                        fontStyle: "normal",
                        fontWeight: "600",
                        lineHeight: "var(--lineheight-lineheight-h6, 22px)",
                      },
                      ...{},
                    }}
                  >{`Nguyen Quoc Thai · 12 YoE`}</span>
                </div>
                {/* name="Brief" id="43:25461" type="FRAME" */}
                <div
                  style={{
                    ...{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      gap: "2px",
                      alignSelf: "stretch",
                    },
                    ...{},
                  }}
                >
                  <span
                    style={{
                      ...{
                        alignSelf: "stretch",
                        color: "var(--text-text-neutral-50, #1d1d1d)",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-base, 14px)",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight:
                          "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                      },
                      ...{},
                    }}
                  >{`Senior Software Developer at The Chemico Vietnam`}</span>
                  {/* name="Location" id="69:8823" type="FRAME" */}
                  <div
                    style={{
                      ...{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "4px",
                        alignSelf: "stretch",
                      },
                      ...{},
                    }}
                  >
                    {/* name="location-dot" id="69:8824" type="INSTANCE" */}
                    <QodeCustom698757
                      style={{ ...{ width: "16px", height: "16px" }, ...{} }}
                      {...{}}
                    />
                    <span
                      style={{
                        ...{
                          flex: "1 0 0",
                          color: "var(--text-text-neutral-40, #464646)",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        },
                        ...{},
                      }}
                    >{`Ho Chi Minh city, Vietnam`}</span>
                  </div>
                </div>
              </div>
            </div>
            {/* name="Frame 37292" id="43:25486" type="FRAME" */}
            <div
              style={{
                ...{ display: "flex", alignItems: "center", gap: "9px" },
                ...{},
              }}
            >
              {/* name="Button" id="43:25465" type="INSTANCE" */}
              <QodeCustom228149016
                style={{
                  ...{
                    display: "flex",
                    height: "var(--size-height-controlheight, 32px)",
                    padding: "4px 16px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "8px",
                    borderRadius: "var(--border-radius-rounded, 999px)",
                    border:
                      "1px solid var(--border-border-neutral-40, #bfbfbf)",
                    background: "var(--background-bg-white, #fff)",
                  },
                  ...{},
                }}
                {...{
                  buttonname: "Similar profiles",
                  iconLeft: true,
                  type: "default",
                  size: "default",
                  state: "default",
                  content: "default",
                  danger: false,
                  ghost: false,
                }}
              />
              {/* name="Button" id="43:25480" type="INSTANCE" */}
              <QodeCustom228149015
                style={{
                  ...{
                    display: "flex",
                    width: "112px",
                    height: "var(--size-height-controlheight, 32px)",
                    padding: "4px 16px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "8px",
                    borderRadius: "var(--border-radius-rounded, 999px)",
                    border:
                      "1px solid var(--border-border-primary-30, #107ecc)",
                    background: "var(--background-bg-primary, #1597f4)",
                  },
                  ...{},
                }}
                {...{
                  iconLeft: true,
                  buttonname: "Contact",
                  type: "primary",
                  size: "default",
                  state: "default",
                  content: "default",
                  danger: false,
                  ghost: false,
                }}
              />
            </div>
          </div>
        </>
      )}
      {/* id="311:23363" */}
      {`${property_1}` === `Variant5` && (
        <>
          {/* name="Property 1=Variant5" id="311:23363" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "806px",
                alignItems: "flex-start",
                gap: "24px",
              },
              ...style,
            }}
          >
            {/* name="Wrap" id="311:23364" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "16px",
                  flex: "1 0 0",
                },
                ...{},
              }}
            >
              {/* name="Profile/Avatar" id="1990:60697" type="INSTANCE" */}
              <QodeCustom199059991
                style={{
                  ...{
                    display: "flex",
                    width: "72px",
                    height: "72px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{ verified: false, size: "72" }}
              />
              {/* name="Wrap" id="311:23366" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "8px",
                    flex: "1 0 0",
                  },
                  ...{},
                }}
              >
                {/* name="Name yoe" id="1828:48409" type="FRAME" */}
                <div
                  style={{
                    ...{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      alignSelf: "stretch",
                    },
                    ...{},
                  }}
                >
                  {/* name="Icon/Verified profile" id="1828:49365" type="INSTANCE" */}
                  <QodeCustom182845845
                    style={{
                      ...{
                        display: "flex",
                        padding: "2px",
                        alignItems: "center",
                        gap: "10px",
                        borderRadius: "24px",
                        border: "1px solid #1597F4",
                        background: "#EEF8FF",
                      },
                      ...{},
                    }}
                    {...{ property_1: "2" }}
                  />
                  <span
                    style={{
                      ...{
                        flex: "1 0 0",
                        color: "var(--text-text-neutral-10, #bfbfbf)",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-heading6, 16px)",
                        fontStyle: "normal",
                        fontWeight: "600",
                        lineHeight: "var(--lineheight-lineheight-h6, 22px)",
                      },
                      ...{},
                    }}
                  >{`Nguyen Quoc Thai · 12 YoE`}</span>
                </div>
                {/* name="Brief" id="311:23370" type="FRAME" */}
                <div
                  style={{
                    ...{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      gap: "2px",
                      alignSelf: "stretch",
                    },
                    ...{},
                  }}
                >
                  <span
                    style={{
                      ...{
                        alignSelf: "stretch",
                        color: "var(--text-text-neutral-50, #1d1d1d)",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-base, 14px)",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight:
                          "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                      },
                      ...{},
                    }}
                  >{`Senior Software Developer at The Chemico Vietnam`}</span>
                  {/* name="Location" id="311:23372" type="FRAME" */}
                  <div
                    style={{
                      ...{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "4px",
                        alignSelf: "stretch",
                      },
                      ...{},
                    }}
                  >
                    {/* name="location-dot" id="311:23373" type="INSTANCE" */}
                    <QodeCustom698757
                      style={{ ...{ width: "16px", height: "16px" }, ...{} }}
                      {...{}}
                    />
                    <span
                      style={{
                        ...{
                          flex: "1 0 0",
                          color: "var(--text-text-neutral-40, #464646)",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        },
                        ...{},
                      }}
                    >{`Ho Chi Minh city, Vietnam`}</span>
                  </div>
                </div>
              </div>
            </div>
            {/* name="Frame 37292" id="311:23375" type="FRAME" */}
            <div
              style={{
                ...{ display: "flex", alignItems: "center", gap: "9px" },
                ...{},
              }}
            >
              {/* name="Button" id="311:23376" type="INSTANCE" */}
              <QodeCustom228149016
                style={{
                  ...{
                    display: "flex",
                    width: "120px",
                    height: "var(--size-height-controlheight, 32px)",
                    padding: "4px 16px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "8px",
                    borderRadius: "var(--border-radius-rounded, 999px)",
                    border:
                      "1px solid var(--border-border-neutral-40, #bfbfbf)",
                    background: "var(--background-bg-white, #fff)",
                  },
                  ...{},
                }}
                {...{
                  buttonname: "Contact",
                  iconLeft: true,
                  type: "default",
                  size: "default",
                  state: "default",
                  content: "default",
                  danger: false,
                  ghost: false,
                }}
              />
              {/* name="Button" id="311:23377" type="INSTANCE" */}
              <QodeCustom228149015
                style={{
                  ...{
                    display: "flex",
                    width: "150px",
                    height: "var(--size-height-controlheight, 32px)",
                    padding: "4px 16px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "8px",
                    borderRadius: "var(--border-radius-rounded, 999px)",
                    border:
                      "1px solid var(--border-border-primary-30, #107ecc)",
                    background: "var(--background-bg-primary, #1597f4)",
                  },
                  ...{},
                }}
                {...{
                  iconLeft: true,
                  buttonname: "New interview",
                  type: "primary",
                  size: "default",
                  state: "default",
                  content: "default",
                  danger: false,
                  ghost: false,
                }}
              />
            </div>
          </div>
        </>
      )}
    </>
  )
}
