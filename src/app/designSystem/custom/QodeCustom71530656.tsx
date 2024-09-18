// id="715:30656"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom13120 } from "@designSystem/custom/QodeCustom13120"
import { QodeInput } from "@designSystem/ant/QodeInput"
import { QodeButton } from "@designSystem/ant/QodeButton"
import { QodeCustom475527 } from "@designSystem/custom/QodeCustom475527"
import { QodePagination } from "@designSystem/ant/QodePagination"

export interface QodeCustom71530656Props {
  screensize?: "1600" | "1280" | "1366" | "1440"
}

export const QodeCustom71530656: React.FC<
  QodeCustom71530656Props & { style?: CSSProperties }
> = ({ screensize = "1280", style, ...rest }) => {
  return (
    <>
      {/* name="Responsive/Job" id="715:30656" type="COMPONENT_SET" */}
      {/* id="715:30655" */}
      {`${screensize}` === `1280` && (
        <>
          {/* name="screensize=1280" id="715:30655" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "inline-flex",
                alignItems: "flex-start",
                background: "#FFF",
              },
              ...style,
            }}
          >
            {/* name="Navbar" id="189:19144" type="INSTANCE" */}
            <QodeCustom13120
              style={{
                ...{
                  display: "flex",
                  width: "84px",
                  flexDirection: "column",
                  alignItems: "center",
                  alignSelf: "stretch",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                  background: "var(--background-bg-white, #fff)",
                },
                ...{},
              }}
              {...{}}
            />
            {/* name="Body" id="189:19145" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "1196px",
                  height: "768px",
                  padding: "40px 40px 0px 40px",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "40px",
                  background: "var(--app-bg, #f4f4f6)",
                },
                ...{},
              }}
            >
              {/* name="Header" id="189:19146" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
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
                      fontSize: "var(--size-heading3, 28px)",
                      fontStyle: "normal",
                      fontWeight: "600",
                      lineHeight:
                        "var(--lineheight-lineheight-h3, 36px) /* 128.571% */",
                    },
                    ...{},
                  }}
                >{`My jobs`}</span>
                {/* name="Search bar" id="189:19148" type="INSTANCE" */}
                <QodeInput
                  style={{
                    ...{
                      display: "flex",
                      width: "480px",
                      height: "var(--size-height-controlheightlg, 40px)",
                      padding: "10px 12px",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "12px",
                      borderRadius: "var(--border-radius-base, 8px)",
                      border:
                        "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                      background: "var(--background-bg-white, #fff)",
                    },
                    ...{},
                  }}
                  {...{
                    suffix: "SUF",
                    title: "Search",
                    prefix: "PRE",
                    iconRight: <Icon.QodeUser />,
                    iconLeft: <Icon.QodeMagnifyingGlass />,
                    showIconLeft: true,
                    state: "default",
                    status: "default",
                    size: "large",
                  }}
                />
                {/* name="Button" id="189:19149" type="INSTANCE" */}
                <QodeButton
                  style={{
                    ...{
                      display: "flex",
                      width: "130px",
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
                    buttonname: "Add job",
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
              {/* name="Job list" id="189:19150" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "20px",
                    flex: "1 0 0",
                    alignSelf: "stretch",
                  },
                  ...{},
                }}
              >
                {/* name="Jobs" id="189:19151" type="FRAME" */}
                <div
                  style={{
                    ...{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      alignContent: "flex-start",
                      gap: "8px",
                      alignSelf: "stretch",
                      flexWrap: "wrap",
                      borderRadius: "8px",
                    },
                    ...{},
                  }}
                >
                  {/* name="Job item" id="189:19152" type="INSTANCE" */}
                  <QodeCustom475527
                    style={{
                      ...{
                        display: "flex",
                        width: "364px",
                        maxWidth: "440px",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        borderRadius: "var(--border-radius-large, 12px)",
                        border:
                          "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                        background: "var(--background-bg-white, #fff)",
                      },
                      ...{},
                    }}
                    {...{ state: "default", _style: "Simple" }}
                  />
                  {/* name="Job item" id="189:19153" type="INSTANCE" */}
                  <QodeCustom475527
                    style={{
                      ...{
                        display: "flex",
                        width: "364px",
                        maxWidth: "440px",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        borderRadius: "var(--border-radius-large, 12px)",
                        border:
                          "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                        background: "var(--background-bg-white, #fff)",
                      },
                      ...{},
                    }}
                    {...{ state: "default", _style: "Simple" }}
                  />
                  {/* name="Job item" id="189:19154" type="INSTANCE" */}
                  <QodeCustom475527
                    style={{
                      ...{
                        display: "flex",
                        width: "364px",
                        maxWidth: "440px",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        borderRadius: "var(--border-radius-large, 12px)",
                        border:
                          "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                        background: "var(--background-bg-white, #fff)",
                      },
                      ...{},
                    }}
                    {...{ state: "default", _style: "Simple" }}
                  />
                  {/* name="Job item" id="189:19155" type="INSTANCE" */}
                  <QodeCustom475527
                    style={{
                      ...{
                        display: "flex",
                        width: "364px",
                        maxWidth: "440px",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        borderRadius: "var(--border-radius-large, 12px)",
                        border:
                          "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                        background: "var(--background-bg-white, #fff)",
                      },
                      ...{},
                    }}
                    {...{ state: "default", _style: "Simple" }}
                  />
                  {/* name="Job item" id="189:19156" type="INSTANCE" */}
                  <QodeCustom475527
                    style={{
                      ...{
                        display: "flex",
                        width: "364px",
                        maxWidth: "440px",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        borderRadius: "var(--border-radius-large, 12px)",
                        border:
                          "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                        background: "var(--background-bg-white, #fff)",
                      },
                      ...{},
                    }}
                    {...{ state: "default", _style: "Simple" }}
                  />
                  {/* name="Job item" id="189:19157" type="INSTANCE" */}
                  <QodeCustom475527
                    style={{
                      ...{
                        display: "flex",
                        width: "364px",
                        maxWidth: "440px",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        borderRadius: "var(--border-radius-large, 12px)",
                        border:
                          "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                        background: "var(--background-bg-white, #fff)",
                      },
                      ...{},
                    }}
                    {...{ state: "default", _style: "Simple" }}
                  />
                  {/* name="Job item" id="189:19158" type="INSTANCE" */}
                  <QodeCustom475527
                    style={{
                      ...{
                        display: "flex",
                        width: "364px",
                        maxWidth: "440px",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        borderRadius: "var(--border-radius-large, 12px)",
                        border:
                          "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                        background: "var(--background-bg-white, #fff)",
                      },
                      ...{},
                    }}
                    {...{ state: "default", _style: "Simple" }}
                  />
                  {/* name="Job item" id="189:19159" type="INSTANCE" */}
                  <QodeCustom475527
                    style={{
                      ...{
                        display: "flex",
                        width: "364px",
                        maxWidth: "440px",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        borderRadius: "var(--border-radius-large, 12px)",
                        border:
                          "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                        background: "var(--background-bg-white, #fff)",
                      },
                      ...{},
                    }}
                    {...{ state: "default", _style: "Simple" }}
                  />
                  {/* name="Job item" id="189:19160" type="INSTANCE" */}
                  <QodeCustom475527
                    style={{
                      ...{
                        display: "flex",
                        width: "364px",
                        maxWidth: "440px",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        borderRadius: "var(--border-radius-large, 12px)",
                        border:
                          "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                        background: "var(--background-bg-white, #fff)",
                      },
                      ...{},
                    }}
                    {...{ state: "default", _style: "Simple" }}
                  />
                  {/* name="Job item" id="189:19161" type="INSTANCE" */}
                  <QodeCustom475527
                    style={{
                      ...{
                        display: "flex",
                        width: "364px",
                        maxWidth: "440px",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        borderRadius: "var(--border-radius-large, 12px)",
                        border:
                          "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                        background: "var(--background-bg-white, #fff)",
                      },
                      ...{},
                    }}
                    {...{ state: "default", _style: "Simple" }}
                  />
                  {/* name="Job item" id="189:19162" type="INSTANCE" */}
                  <QodeCustom475527
                    style={{
                      ...{
                        display: "flex",
                        width: "364px",
                        maxWidth: "440px",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        borderRadius: "var(--border-radius-large, 12px)",
                        border:
                          "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                        background: "var(--background-bg-white, #fff)",
                      },
                      ...{},
                    }}
                    {...{ state: "default", _style: "Simple" }}
                  />
                  {/* name="Job item" id="189:19163" type="INSTANCE" */}
                  <QodeCustom475527
                    style={{
                      ...{
                        display: "flex",
                        width: "364px",
                        maxWidth: "440px",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        borderRadius: "var(--border-radius-large, 12px)",
                        border:
                          "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                        background: "var(--background-bg-white, #fff)",
                      },
                      ...{},
                    }}
                    {...{ state: "default", _style: "Simple" }}
                  />
                </div>
                {/* name="Pagination" id="189:19164" type="INSTANCE" */}
                <QodePagination
                  style={{
                    ...{
                      display: "flex",
                      width: "556px",
                      paddingBottom: "32px",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "var(--size-padding-padding, 16px)",
                    },
                    ...{},
                  }}
                  {...{ total: "Total 85 items", type: "more", mini: false }}
                />
              </div>
            </div>
          </div>
        </>
      )}
      {/* id="715:30654" */}
      {`${screensize}` === `1366` && (
        <>
          {/* name="screensize=1366" id="715:30654" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "inline-flex",
                alignItems: "flex-start",
                background: "#FFF",
              },
              ...style,
            }}
          >
            {/* name="Navbar" id="183:10492" type="INSTANCE" */}
            <QodeCustom13120
              style={{
                ...{
                  display: "flex",
                  width: "84px",
                  flexDirection: "column",
                  alignItems: "center",
                  alignSelf: "stretch",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                  background: "var(--background-bg-white, #fff)",
                },
                ...{},
              }}
              {...{}}
            />
            {/* name="b" id="183:10493" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "1282px",
                  height: "768px",
                  padding: "40px 40px 0px 40px",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "32px",
                  background: "var(--app-bg, #f4f4f6)",
                },
                ...{},
              }}
            >
              {/* name="Header" id="183:12835" type="FRAME" */}
              <div
                style={{
                  ...{
                    height: "40px",
                    maxWidth: "1276px",
                    flexShrink: "0",
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
                      fontSize: "var(--size-heading3, 28px)",
                      fontStyle: "normal",
                      fontWeight: "600",
                      lineHeight:
                        "var(--lineheight-lineheight-h3, 36px) /* 128.571% */",
                    },
                    ...{},
                  }}
                >{`My jobs`}</span>
                {/* name="Button" id="183:12837" type="INSTANCE" */}
                <QodeButton
                  style={{
                    ...{
                      display: "flex",
                      width: "130px",
                      height: "var(--size-height-controlheight, 32px)",
                      padding: "4px 16px",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "8px",
                      flexShrink: "0",
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
                    buttonname: "Add job",
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
                {/* name="Search bar" id="183:12838" type="INSTANCE" */}
                <QodeInput
                  style={{
                    ...{
                      display: "flex",
                      width: "480px",
                      height: "var(--size-height-controlheightlg, 40px)",
                      padding: "10px 12px",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "12px",
                      flexShrink: "0",
                      borderRadius: "var(--border-radius-base, 8px)",
                      border:
                        "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                      background: "var(--background-bg-white, #fff)",
                    },
                    ...{},
                  }}
                  {...{
                    suffix: "SUF",
                    title: "Search",
                    prefix: "PRE",
                    iconRight: <Icon.QodeUser />,
                    iconLeft: <Icon.QodeMagnifyingGlass />,
                    showIconLeft: true,
                    state: "default",
                    status: "default",
                    size: "large",
                  }}
                />
              </div>
              {/* name="Body" id="183:10498" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    maxWidth: "1276px",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "20px",
                    alignSelf: "stretch",
                  },
                  ...{},
                }}
              >
                {/* name="Jobs" id="183:10499" type="FRAME" */}
                <div
                  style={{
                    ...{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      alignContent: "flex-start",
                      gap: "8px",
                      alignSelf: "stretch",
                      flexWrap: "wrap",
                      borderRadius: "8px",
                    },
                    ...{},
                  }}
                >
                  {/* name="Job item" id="183:10500" type="INSTANCE" */}
                  <QodeCustom475527
                    style={{
                      ...{
                        display: "flex",
                        width: "395px",
                        maxWidth: "440px",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        borderRadius: "var(--border-radius-large, 12px)",
                        border:
                          "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                        background: "var(--background-bg-white, #fff)",
                      },
                      ...{},
                    }}
                    {...{ state: "default", _style: "Simple" }}
                  />
                  {/* name="Job item" id="183:10501" type="INSTANCE" */}
                  <QodeCustom475527
                    style={{
                      ...{
                        display: "flex",
                        width: "395px",
                        maxWidth: "440px",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        borderRadius: "var(--border-radius-large, 12px)",
                        border:
                          "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                        background: "var(--background-bg-white, #fff)",
                      },
                      ...{},
                    }}
                    {...{ state: "default", _style: "Simple" }}
                  />
                  {/* name="Job item" id="183:10502" type="INSTANCE" */}
                  <QodeCustom475527
                    style={{
                      ...{
                        display: "flex",
                        width: "395px",
                        maxWidth: "440px",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        borderRadius: "var(--border-radius-large, 12px)",
                        border:
                          "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                        background: "var(--background-bg-white, #fff)",
                      },
                      ...{},
                    }}
                    {...{ state: "default", _style: "Simple" }}
                  />
                  {/* name="Job item" id="183:10503" type="INSTANCE" */}
                  <QodeCustom475527
                    style={{
                      ...{
                        display: "flex",
                        width: "395px",
                        maxWidth: "440px",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        borderRadius: "var(--border-radius-large, 12px)",
                        border:
                          "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                        background: "var(--background-bg-white, #fff)",
                      },
                      ...{},
                    }}
                    {...{ state: "default", _style: "Simple" }}
                  />
                  {/* name="Job item" id="183:10504" type="INSTANCE" */}
                  <QodeCustom475527
                    style={{
                      ...{
                        display: "flex",
                        width: "395px",
                        maxWidth: "440px",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        borderRadius: "var(--border-radius-large, 12px)",
                        border:
                          "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                        background: "var(--background-bg-white, #fff)",
                      },
                      ...{},
                    }}
                    {...{ state: "default", _style: "Simple" }}
                  />
                  {/* name="Job item" id="183:10505" type="INSTANCE" */}
                  <QodeCustom475527
                    style={{
                      ...{
                        display: "flex",
                        width: "395px",
                        maxWidth: "440px",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        borderRadius: "var(--border-radius-large, 12px)",
                        border:
                          "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                        background: "var(--background-bg-white, #fff)",
                      },
                      ...{},
                    }}
                    {...{ state: "default", _style: "Simple" }}
                  />
                  {/* name="Job item" id="183:10506" type="INSTANCE" */}
                  <QodeCustom475527
                    style={{
                      ...{
                        display: "flex",
                        width: "395px",
                        maxWidth: "440px",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        borderRadius: "var(--border-radius-large, 12px)",
                        border:
                          "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                        background: "var(--background-bg-white, #fff)",
                      },
                      ...{},
                    }}
                    {...{ state: "default", _style: "Simple" }}
                  />
                  {/* name="Job item" id="183:10507" type="INSTANCE" */}
                  <QodeCustom475527
                    style={{
                      ...{
                        display: "flex",
                        width: "395px",
                        maxWidth: "440px",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        borderRadius: "var(--border-radius-large, 12px)",
                        border:
                          "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                        background: "var(--background-bg-white, #fff)",
                      },
                      ...{},
                    }}
                    {...{ state: "default", _style: "Simple" }}
                  />
                  {/* name="Job item" id="183:10508" type="INSTANCE" */}
                  <QodeCustom475527
                    style={{
                      ...{
                        display: "flex",
                        width: "395px",
                        maxWidth: "440px",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        borderRadius: "var(--border-radius-large, 12px)",
                        border:
                          "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                        background: "var(--background-bg-white, #fff)",
                      },
                      ...{},
                    }}
                    {...{ state: "default", _style: "Simple" }}
                  />
                  {/* name="Job item" id="183:10509" type="INSTANCE" */}
                  <QodeCustom475527
                    style={{
                      ...{
                        display: "flex",
                        width: "395px",
                        maxWidth: "440px",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        borderRadius: "var(--border-radius-large, 12px)",
                        border:
                          "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                        background: "var(--background-bg-white, #fff)",
                      },
                      ...{},
                    }}
                    {...{ state: "default", _style: "Simple" }}
                  />
                  {/* name="Job item" id="183:10510" type="INSTANCE" */}
                  <QodeCustom475527
                    style={{
                      ...{
                        display: "flex",
                        width: "395px",
                        maxWidth: "440px",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        borderRadius: "var(--border-radius-large, 12px)",
                        border:
                          "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                        background: "var(--background-bg-white, #fff)",
                      },
                      ...{},
                    }}
                    {...{ state: "default", _style: "Simple" }}
                  />
                  {/* name="Job item" id="183:10511" type="INSTANCE" */}
                  <QodeCustom475527
                    style={{
                      ...{
                        display: "flex",
                        width: "395px",
                        maxWidth: "440px",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        borderRadius: "var(--border-radius-large, 12px)",
                        border:
                          "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                        background: "var(--background-bg-white, #fff)",
                      },
                      ...{},
                    }}
                    {...{ state: "default", _style: "Simple" }}
                  />
                </div>
                {/* name="Pagination" id="183:10512" type="INSTANCE" */}
                <QodePagination
                  style={{
                    ...{
                      display: "flex",
                      width: "556px",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "var(--size-padding-padding, 16px)",
                    },
                    ...{},
                  }}
                  {...{ total: "Total 85 items", type: "more", mini: false }}
                />
              </div>
            </div>
          </div>
        </>
      )}
      {/* id="715:30653" */}
      {`${screensize}` === `1440` && (
        <>
          {/* name="screensize=1440" id="715:30653" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "1440px",
                height: "1024px",
                alignItems: "flex-start",
                flexShrink: "0",
                background: "#FFF",
              },
              ...style,
            }}
          >
            {/* name="Navbar" id="183:10973" type="INSTANCE" */}
            <QodeCustom13120
              style={{
                ...{
                  display: "flex",
                  width: "84px",
                  flexDirection: "column",
                  alignItems: "center",
                  flexShrink: "0",
                  alignSelf: "stretch",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                  background: "var(--background-bg-white, #fff)",
                },
                ...{},
              }}
              {...{}}
            />
            {/* name="b" id="183:10974" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "1356px",
                  height: "1024px",
                  padding: "40px 40px 0px 40px",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "32px",
                  flexShrink: "0",
                  background: "var(--app-bg, #f4f4f6)",
                },
                ...{},
              }}
            >
              {/* name="Header" id="183:12821" type="FRAME" */}
              <div
                style={{
                  ...{
                    height: "40px",
                    maxWidth: "1276px",
                    flexShrink: "0",
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
                      fontSize: "var(--size-heading3, 28px)",
                      fontStyle: "normal",
                      fontWeight: "600",
                      lineHeight:
                        "var(--lineheight-lineheight-h3, 36px) /* 128.571% */",
                    },
                    ...{},
                  }}
                >{`My jobs`}</span>
                {/* name="Button" id="183:12823" type="INSTANCE" */}
                <QodeButton
                  style={{
                    ...{
                      display: "flex",
                      width: "130px",
                      height: "var(--size-height-controlheight, 32px)",
                      padding: "4px 16px",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "8px",
                      flexShrink: "0",
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
                    buttonname: "Add job",
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
                {/* name="Search bar" id="183:12824" type="INSTANCE" */}
                <QodeInput
                  style={{
                    ...{
                      display: "flex",
                      width: "480px",
                      height: "var(--size-height-controlheightlg, 40px)",
                      padding: "10px 12px",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "12px",
                      flexShrink: "0",
                      borderRadius: "var(--border-radius-base, 8px)",
                      border:
                        "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                      background: "var(--background-bg-white, #fff)",
                    },
                    ...{},
                  }}
                  {...{
                    suffix: "SUF",
                    title: "Search",
                    prefix: "PRE",
                    iconRight: <Icon.QodeUser />,
                    iconLeft: <Icon.QodeMagnifyingGlass />,
                    showIconLeft: true,
                    state: "default",
                    status: "default",
                    size: "large",
                  }}
                />
              </div>
              {/* name="Body" id="183:10979" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "20px",
                    alignSelf: "stretch",
                  },
                  ...{},
                }}
              >
                {/* name="Jobs" id="183:10980" type="FRAME" */}
                <div
                  style={{
                    ...{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      alignContent: "flex-start",
                      gap: "8px",
                      alignSelf: "stretch",
                      flexWrap: "wrap",
                      borderRadius: "8px",
                    },
                    ...{},
                  }}
                >
                  {/* name="Job item" id="183:10981" type="INSTANCE" */}
                  <QodeCustom475527
                    style={{
                      ...{
                        display: "flex",
                        width: "420px",
                        maxWidth: "440px",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        borderRadius: "var(--border-radius-large, 12px)",
                        border:
                          "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                        background: "var(--background-bg-white, #fff)",
                      },
                      ...{},
                    }}
                    {...{ state: "default", _style: "Simple" }}
                  />
                  {/* name="Job item" id="183:10982" type="INSTANCE" */}
                  <QodeCustom475527
                    style={{
                      ...{
                        display: "flex",
                        width: "420px",
                        maxWidth: "440px",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        borderRadius: "var(--border-radius-large, 12px)",
                        border:
                          "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                        background: "var(--background-bg-white, #fff)",
                      },
                      ...{},
                    }}
                    {...{ state: "default", _style: "Simple" }}
                  />
                  {/* name="Job item" id="183:10983" type="INSTANCE" */}
                  <QodeCustom475527
                    style={{
                      ...{
                        display: "flex",
                        width: "420px",
                        maxWidth: "440px",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        borderRadius: "var(--border-radius-large, 12px)",
                        border:
                          "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                        background: "var(--background-bg-white, #fff)",
                      },
                      ...{},
                    }}
                    {...{ state: "default", _style: "Simple" }}
                  />
                  {/* name="Job item" id="183:10984" type="INSTANCE" */}
                  <QodeCustom475527
                    style={{
                      ...{
                        display: "flex",
                        width: "420px",
                        maxWidth: "440px",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        borderRadius: "var(--border-radius-large, 12px)",
                        border:
                          "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                        background: "var(--background-bg-white, #fff)",
                      },
                      ...{},
                    }}
                    {...{ state: "default", _style: "Simple" }}
                  />
                  {/* name="Job item" id="183:10985" type="INSTANCE" */}
                  <QodeCustom475527
                    style={{
                      ...{
                        display: "flex",
                        width: "420px",
                        maxWidth: "440px",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        borderRadius: "var(--border-radius-large, 12px)",
                        border:
                          "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                        background: "var(--background-bg-white, #fff)",
                      },
                      ...{},
                    }}
                    {...{ state: "default", _style: "Simple" }}
                  />
                  {/* name="Job item" id="183:10986" type="INSTANCE" */}
                  <QodeCustom475527
                    style={{
                      ...{
                        display: "flex",
                        width: "420px",
                        maxWidth: "440px",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        borderRadius: "var(--border-radius-large, 12px)",
                        border:
                          "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                        background: "var(--background-bg-white, #fff)",
                      },
                      ...{},
                    }}
                    {...{ state: "default", _style: "Simple" }}
                  />
                  {/* name="Job item" id="183:10987" type="INSTANCE" */}
                  <QodeCustom475527
                    style={{
                      ...{
                        display: "flex",
                        width: "420px",
                        maxWidth: "440px",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        borderRadius: "var(--border-radius-large, 12px)",
                        border:
                          "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                        background: "var(--background-bg-white, #fff)",
                      },
                      ...{},
                    }}
                    {...{ state: "default", _style: "Simple" }}
                  />
                  {/* name="Job item" id="183:10988" type="INSTANCE" */}
                  <QodeCustom475527
                    style={{
                      ...{
                        display: "flex",
                        width: "420px",
                        maxWidth: "440px",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        borderRadius: "var(--border-radius-large, 12px)",
                        border:
                          "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                        background: "var(--background-bg-white, #fff)",
                      },
                      ...{},
                    }}
                    {...{ state: "default", _style: "Simple" }}
                  />
                  {/* name="Job item" id="183:10989" type="INSTANCE" */}
                  <QodeCustom475527
                    style={{
                      ...{
                        display: "flex",
                        width: "420px",
                        maxWidth: "440px",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        borderRadius: "var(--border-radius-large, 12px)",
                        border:
                          "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                        background: "var(--background-bg-white, #fff)",
                      },
                      ...{},
                    }}
                    {...{ state: "default", _style: "Simple" }}
                  />
                  {/* name="Job item" id="183:10990" type="INSTANCE" */}
                  <QodeCustom475527
                    style={{
                      ...{
                        display: "flex",
                        width: "420px",
                        maxWidth: "440px",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        borderRadius: "var(--border-radius-large, 12px)",
                        border:
                          "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                        background: "var(--background-bg-white, #fff)",
                      },
                      ...{},
                    }}
                    {...{ state: "default", _style: "Simple" }}
                  />
                  {/* name="Job item" id="183:10991" type="INSTANCE" */}
                  <QodeCustom475527
                    style={{
                      ...{
                        display: "flex",
                        width: "420px",
                        maxWidth: "440px",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        borderRadius: "var(--border-radius-large, 12px)",
                        border:
                          "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                        background: "var(--background-bg-white, #fff)",
                      },
                      ...{},
                    }}
                    {...{ state: "default", _style: "Simple" }}
                  />
                  {/* name="Job item" id="183:10992" type="INSTANCE" */}
                  <QodeCustom475527
                    style={{
                      ...{
                        display: "flex",
                        width: "420px",
                        maxWidth: "440px",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        borderRadius: "var(--border-radius-large, 12px)",
                        border:
                          "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                        background: "var(--background-bg-white, #fff)",
                      },
                      ...{},
                    }}
                    {...{ state: "default", _style: "Simple" }}
                  />
                </div>
                {/* name="Pagination" id="183:10993" type="INSTANCE" */}
                <QodePagination
                  style={{
                    ...{
                      display: "flex",
                      width: "556px",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "var(--size-padding-padding, 16px)",
                    },
                    ...{},
                  }}
                  {...{ total: "Total 85 items", type: "more", mini: false }}
                />
              </div>
            </div>
          </div>
        </>
      )}
      {/* id="715:30652" */}
      {`${screensize}` === `1600` && (
        <>
          {/* name="screensize=1600" id="715:30652" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "inline-flex",
                alignItems: "flex-start",
                background: "#FFF",
              },
              ...style,
            }}
          >
            {/* name="Navbar" id="183:11454" type="INSTANCE" */}
            <QodeCustom13120
              style={{
                ...{
                  display: "flex",
                  width: "84px",
                  flexDirection: "column",
                  alignItems: "center",
                  alignSelf: "stretch",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                  background: "var(--background-bg-white, #fff)",
                },
                ...{},
              }}
              {...{}}
            />
            {/* name="b" id="183:11455" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "1516px",
                  height: "900px",
                  padding: "40px 40px 0px 40px",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "32px",
                  background: "var(--app-bg, #f4f4f6)",
                },
                ...{},
              }}
            >
              {/* name="Header" id="183:11456" type="FRAME" */}
              <div
                style={{
                  ...{
                    height: "40px",
                    maxWidth: "1276px",
                    flexShrink: "0",
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
                      fontSize: "var(--size-heading3, 28px)",
                      fontStyle: "normal",
                      fontWeight: "600",
                      lineHeight:
                        "var(--lineheight-lineheight-h3, 36px) /* 128.571% */",
                    },
                    ...{},
                  }}
                >{`My jobs`}</span>
                {/* name="Button" id="183:11459" type="INSTANCE" */}
                <QodeButton
                  style={{
                    ...{
                      display: "flex",
                      width: "130px",
                      height: "var(--size-height-controlheight, 32px)",
                      padding: "4px 16px",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "8px",
                      flexShrink: "0",
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
                    buttonname: "Add job",
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
                {/* name="Search bar" id="183:11458" type="INSTANCE" */}
                <QodeInput
                  style={{
                    ...{
                      display: "flex",
                      width: "480px",
                      height: "var(--size-height-controlheightlg, 40px)",
                      padding: "10px 12px",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "12px",
                      flexShrink: "0",
                      borderRadius: "var(--border-radius-base, 8px)",
                      border:
                        "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                      background: "var(--background-bg-white, #fff)",
                    },
                    ...{},
                  }}
                  {...{
                    suffix: "SUF",
                    title: "Search",
                    prefix: "PRE",
                    iconRight: <Icon.QodeUser />,
                    iconLeft: <Icon.QodeMagnifyingGlass />,
                    showIconLeft: true,
                    state: "default",
                    status: "default",
                    size: "large",
                  }}
                />
              </div>
              {/* name="Body" id="183:11460" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    maxWidth: "1276px",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "20px",
                    alignSelf: "stretch",
                  },
                  ...{},
                }}
              >
                {/* name="Jobs" id="183:11461" type="FRAME" */}
                <div
                  style={{
                    ...{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      alignContent: "flex-start",
                      gap: "8px",
                      alignSelf: "stretch",
                      flexWrap: "wrap",
                      borderRadius: "8px",
                    },
                    ...{},
                  }}
                >
                  {/* name="Job item" id="183:11462" type="INSTANCE" */}
                  <QodeCustom475527
                    style={{
                      ...{
                        display: "flex",
                        width: "420px",
                        maxWidth: "440px",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        borderRadius: "var(--border-radius-large, 12px)",
                        border:
                          "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                        background: "var(--background-bg-white, #fff)",
                      },
                      ...{},
                    }}
                    {...{ state: "default", _style: "Simple" }}
                  />
                  {/* name="Job item" id="183:11463" type="INSTANCE" */}
                  <QodeCustom475527
                    style={{
                      ...{
                        display: "flex",
                        width: "420px",
                        maxWidth: "440px",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        borderRadius: "var(--border-radius-large, 12px)",
                        border:
                          "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                        background: "var(--background-bg-white, #fff)",
                      },
                      ...{},
                    }}
                    {...{ state: "default", _style: "Simple" }}
                  />
                  {/* name="Job item" id="183:11464" type="INSTANCE" */}
                  <QodeCustom475527
                    style={{
                      ...{
                        display: "flex",
                        width: "420px",
                        maxWidth: "440px",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        borderRadius: "var(--border-radius-large, 12px)",
                        border:
                          "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                        background: "var(--background-bg-white, #fff)",
                      },
                      ...{},
                    }}
                    {...{ state: "default", _style: "Simple" }}
                  />
                  {/* name="Job item" id="183:11465" type="INSTANCE" */}
                  <QodeCustom475527
                    style={{
                      ...{
                        display: "flex",
                        width: "420px",
                        maxWidth: "440px",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        borderRadius: "var(--border-radius-large, 12px)",
                        border:
                          "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                        background: "var(--background-bg-white, #fff)",
                      },
                      ...{},
                    }}
                    {...{ state: "default", _style: "Simple" }}
                  />
                  {/* name="Job item" id="183:11466" type="INSTANCE" */}
                  <QodeCustom475527
                    style={{
                      ...{
                        display: "flex",
                        width: "420px",
                        maxWidth: "440px",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        borderRadius: "var(--border-radius-large, 12px)",
                        border:
                          "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                        background: "var(--background-bg-white, #fff)",
                      },
                      ...{},
                    }}
                    {...{ state: "default", _style: "Simple" }}
                  />
                  {/* name="Job item" id="183:11467" type="INSTANCE" */}
                  <QodeCustom475527
                    style={{
                      ...{
                        display: "flex",
                        width: "420px",
                        maxWidth: "440px",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        borderRadius: "var(--border-radius-large, 12px)",
                        border:
                          "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                        background: "var(--background-bg-white, #fff)",
                      },
                      ...{},
                    }}
                    {...{ state: "default", _style: "Simple" }}
                  />
                  {/* name="Job item" id="183:11468" type="INSTANCE" */}
                  <QodeCustom475527
                    style={{
                      ...{
                        display: "flex",
                        width: "420px",
                        maxWidth: "440px",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        borderRadius: "var(--border-radius-large, 12px)",
                        border:
                          "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                        background: "var(--background-bg-white, #fff)",
                      },
                      ...{},
                    }}
                    {...{ state: "default", _style: "Simple" }}
                  />
                  {/* name="Job item" id="183:11469" type="INSTANCE" */}
                  <QodeCustom475527
                    style={{
                      ...{
                        display: "flex",
                        width: "420px",
                        maxWidth: "440px",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        borderRadius: "var(--border-radius-large, 12px)",
                        border:
                          "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                        background: "var(--background-bg-white, #fff)",
                      },
                      ...{},
                    }}
                    {...{ state: "default", _style: "Simple" }}
                  />
                  {/* name="Job item" id="183:11470" type="INSTANCE" */}
                  <QodeCustom475527
                    style={{
                      ...{
                        display: "flex",
                        width: "420px",
                        maxWidth: "440px",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        borderRadius: "var(--border-radius-large, 12px)",
                        border:
                          "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                        background: "var(--background-bg-white, #fff)",
                      },
                      ...{},
                    }}
                    {...{ state: "default", _style: "Simple" }}
                  />
                  {/* name="Job item" id="183:11471" type="INSTANCE" */}
                  <QodeCustom475527
                    style={{
                      ...{
                        display: "flex",
                        width: "420px",
                        maxWidth: "440px",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        borderRadius: "var(--border-radius-large, 12px)",
                        border:
                          "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                        background: "var(--background-bg-white, #fff)",
                      },
                      ...{},
                    }}
                    {...{ state: "default", _style: "Simple" }}
                  />
                  {/* name="Job item" id="183:11472" type="INSTANCE" */}
                  <QodeCustom475527
                    style={{
                      ...{
                        display: "flex",
                        width: "420px",
                        maxWidth: "440px",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        borderRadius: "var(--border-radius-large, 12px)",
                        border:
                          "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                        background: "var(--background-bg-white, #fff)",
                      },
                      ...{},
                    }}
                    {...{ state: "default", _style: "Simple" }}
                  />
                  {/* name="Job item" id="183:11473" type="INSTANCE" */}
                  <QodeCustom475527
                    style={{
                      ...{
                        display: "flex",
                        width: "420px",
                        maxWidth: "440px",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        borderRadius: "var(--border-radius-large, 12px)",
                        border:
                          "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                        background: "var(--background-bg-white, #fff)",
                      },
                      ...{},
                    }}
                    {...{ state: "default", _style: "Simple" }}
                  />
                </div>
                {/* name="Pagination" id="183:11474" type="INSTANCE" */}
                <QodePagination
                  style={{
                    ...{
                      display: "flex",
                      width: "556px",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "var(--size-padding-padding, 16px)",
                    },
                    ...{},
                  }}
                  {...{ total: "Total 85 items", type: "more", mini: false }}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}
