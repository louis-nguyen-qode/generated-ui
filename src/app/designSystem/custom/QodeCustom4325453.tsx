// id="43:25453"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom562954 } from "@designSystem/custom/QodeCustom562954"
import { QodeButton } from "@designSystem/ant/QodeButton"

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
              {/* name="avatar" id="43:25732" type="INSTANCE" */}
              <QodeCustom562954
                style={{
                  ...{
                    display: "flex",
                    width: "72px",
                    height: "72px",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--font-size-large, 16px)",
                    borderRadius: "999px",
                    background:
                      "var(--color-success-colorsuccesshover, #a3c73e)",
                  },
                  ...{},
                }}
                {...{
                  opentowork: true,
                  img: true,
                  type: "Round",
                  state: "Default",
                }}
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
                      gap: "4px",
                      alignSelf: "stretch",
                    },
                    ...{},
                  }}
                >
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
                    <Icon.QodeLocationDot
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
            <QodeButton
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
                onlyIcon: <Icon.QodeMagnifyingGlass />,
                iconLeft: true,
                buttonname: "Shortlist",
                selectIconRight: <Icon.QodeMagnifyingGlass />,
                selectIconLeft: <Icon.QodeHeart />,
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
              {/* name="avatar" id="47:6685" type="INSTANCE" */}
              <QodeCustom562954
                style={{
                  ...{
                    display: "flex",
                    width: "72px",
                    height: "72px",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--font-size-large, 16px)",
                    borderRadius: "999px",
                    background:
                      "var(--color-success-colorsuccesshover, #a3c73e)",
                  },
                  ...{},
                }}
                {...{
                  opentowork: true,
                  img: true,
                  type: "Round",
                  state: "Default",
                }}
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
                <span
                  style={{
                    ...{
                      alignSelf: "stretch",
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
                    <Icon.QodeLocationDot
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
            <QodeButton
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
                onlyIcon: <Icon.QodeHeart />,
                buttonname: "Shortlist",
                selectIconRight: <Icon.QodeMagnifyingGlass />,
                selectIconLeft: <Icon.QodeHeart />,
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
              {/* name="avatar" id="43:25456" type="INSTANCE" */}
              <QodeCustom562954
                style={{
                  ...{
                    display: "flex",
                    width: "72px",
                    height: "72px",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--font-size-large, 16px)",
                    borderRadius: "999px",
                    background:
                      "var(--color-success-colorsuccesshover, #a3c73e)",
                  },
                  ...{},
                }}
                {...{
                  opentowork: true,
                  img: true,
                  type: "Round",
                  state: "Default",
                }}
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
                <span
                  style={{
                    ...{
                      alignSelf: "stretch",
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
                    <Icon.QodeLocationDot
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
              <QodeButton
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
                      "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                    background: "var(--background-bg-white, #fff)",
                  },
                  ...{},
                }}
                {...{
                  onlyIcon: <Icon.QodeMagnifyingGlass />,
                  selectIconLeft: <Icon.QodeMagnifyingGlass />,
                  selectIconRight: <Icon.QodeMagnifyingGlass />,
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
              <QodeButton
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
                  onlyIcon: <Icon.QodeMagnifyingGlass />,
                  iconLeft: true,
                  buttonname: "Contact",
                  selectIconRight: <Icon.QodeMagnifyingGlass />,
                  selectIconLeft: <Icon.QodePaperPlane />,
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
              {/* name="Frame 37315" id="336:18939" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "4px",
                  },
                  ...{},
                }}
              >
                {/* name="avatar" id="311:23365" type="INSTANCE" */}
                <QodeCustom562954
                  style={{
                    ...{
                      display: "flex",
                      width: "72px",
                      height: "72px",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "var(--font-size-large, 16px)",
                      borderRadius: "999px",
                      background:
                        "var(--color-success-colorsuccesshover, #a3c73e)",
                    },
                    ...{},
                  }}
                  {...{
                    opentowork: true,
                    img: true,
                    type: "Round",
                    state: "Default",
                  }}
                />
              </div>
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
                {/* name="Name yoe" id="311:23367" type="FRAME" */}
                <div
                  style={{
                    ...{
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                      alignSelf: "stretch",
                    },
                    ...{},
                  }}
                >
                  <span
                    style={{
                      ...{
                        color: "var(--text-text-neutral-50, #1d1d1d)",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-size-sizemd-20px, 20px)",
                        fontStyle: "normal",
                        fontWeight: "600",
                        lineHeight:
                          "var(--lineheight-lineheight-xl, 28px) /* 140% */",
                      },
                      ...{},
                    }}
                  >{`Nguyen Quoc Thai`}</span>
                  <span
                    style={{
                      ...{
                        color: "var(--text-text-neutral-20, #878787)",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-heading6, 16px)",
                        fontStyle: "normal",
                        fontWeight: "600",
                        lineHeight:
                          "var(--lineheight-lineheight-h6, 22px) /* 137.5% */",
                      },
                      ...{},
                    }}
                  >{`· 12 YoE`}</span>
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
                    <Icon.QodeLocationDot
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
              <QodeButton
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
                      "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                    background: "var(--background-bg-white, #fff)",
                  },
                  ...{},
                }}
                {...{
                  onlyIcon: <Icon.QodeMagnifyingGlass />,
                  selectIconLeft: <Icon.QodePaperPlane />,
                  selectIconRight: <Icon.QodeMagnifyingGlass />,
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
              <QodeButton
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
                  onlyIcon: <Icon.QodeMagnifyingGlass />,
                  iconLeft: true,
                  buttonname: "New interview",
                  selectIconRight: <Icon.QodeMagnifyingGlass />,
                  selectIconLeft: <Icon.QodePlus />,
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
