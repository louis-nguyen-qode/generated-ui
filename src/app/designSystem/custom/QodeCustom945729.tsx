// id="94:5729"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeInput } from "@designSystem/ant/QodeInput"
import { QodeCustom4323423 } from "@designSystem/custom/QodeCustom4323423"
import { QodeCustom4323424 } from "@designSystem/custom/QodeCustom4323424"
import { QodePagination } from "@designSystem/ant/QodePagination"
import { QodeCustom43430284 } from "@designSystem/custom/QodeCustom43430284"

export interface QodeCustom945729Props {
  property_1?: "Default" | "Search" | "End"
}

export const QodeCustom945729: React.FC<
  QodeCustom945729Props & { style?: CSSProperties }
> = ({ property_1 = "Default", style, ...rest }) => {
  return (
    <>
      {/* name="List | Shortlisted" id="94:5729" type="COMPONENT_SET" */}
      {/* id="94:5042" */}
      {`${property_1}` === `Default` && (
        <>
          {/* name="Property 1=Default" id="94:5042" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "370px",
                padding: "var(--size-size-sizexxs-6px, 6px)",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "var(--size-size-sizexxs-6px, 6px)",
                background: "var(--neutral-gray-10, #e3e3e3)",
              },
              ...style,
            }}
          >
            {/* name="Search bar" id="500:28262" type="INSTANCE" */}
            <QodeInput
              style={{
                ...{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "10px 12px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "8px",
                  alignSelf: "stretch",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                  background: "var(--background-bg-white, #fff)",
                },
                ...{},
              }}
              {...{
                suffix: "SUF",
                title: "Search name",
                prefix: "PRE",
                iconRight: <Icon.QodeUser />,
                iconLeft: <Icon.QodeMagnifyingGlass />,
                showIconLeft: true,
                state: "default",
                status: "default",
                size: "default",
              }}
            />
            {/* name="List" id="500:34247" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  height: "1278px",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "var(--size-size-sizexxs-6px, 6px)",
                  alignSelf: "stretch",
                },
                ...{},
              }}
            >
              {/* name="Shortlisted/List item" id="94:4616" type="INSTANCE" */}
              <QodeCustom4323423
                style={{
                  ...{
                    display: "flex",
                    padding: "12px 16px",
                    alignItems: "flex-start",
                    gap: "24px",
                    alignSelf: "stretch",
                    borderRadius: "var(--border-radius-base, 8px)",
                    border:
                      "2px solid var(--border-border-primary-20, #158de2)",
                    background: "var(--blue-techblue-5, #f8fcff)",
                  },
                  ...{},
                }}
                {...{ showDelete: true, property_1: "active" }}
              />
              {/* name="Shortlisted/List item" id="94:4617" type="INSTANCE" */}
              <QodeCustom4323424
                style={{
                  ...{
                    display: "flex",
                    padding: "12px 16px",
                    alignItems: "flex-start",
                    gap: "24px",
                    alignSelf: "stretch",
                    borderRadius: "var(--border-radius-base, 8px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                    background: "#FFF",
                  },
                  ...{},
                }}
                {...{ showDelete: true, property_1: "default" }}
              />
              {/* name="Shortlisted/List item" id="94:4618" type="INSTANCE" */}
              <QodeCustom4323424
                style={{
                  ...{
                    display: "flex",
                    padding: "12px 16px",
                    alignItems: "flex-start",
                    gap: "24px",
                    alignSelf: "stretch",
                    borderRadius: "var(--border-radius-base, 8px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                    background: "#FFF",
                  },
                  ...{},
                }}
                {...{ showDelete: true, property_1: "default" }}
              />
              {/* name="Shortlisted/List item" id="94:4619" type="INSTANCE" */}
              <QodeCustom4323424
                style={{
                  ...{
                    display: "flex",
                    padding: "12px 16px",
                    alignItems: "flex-start",
                    gap: "24px",
                    alignSelf: "stretch",
                    borderRadius: "var(--border-radius-base, 8px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                    background: "#FFF",
                  },
                  ...{},
                }}
                {...{ showDelete: true, property_1: "default" }}
              />
              {/* name="Shortlisted/List item" id="94:4620" type="INSTANCE" */}
              <QodeCustom4323424
                style={{
                  ...{
                    display: "flex",
                    padding: "12px 16px",
                    alignItems: "flex-start",
                    gap: "24px",
                    alignSelf: "stretch",
                    borderRadius: "var(--border-radius-base, 8px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                    background: "#FFF",
                  },
                  ...{},
                }}
                {...{ showDelete: true, property_1: "default" }}
              />
              {/* name="Shortlisted/List item" id="295:19392" type="INSTANCE" */}
              <QodeCustom4323424
                style={{
                  ...{
                    display: "flex",
                    padding: "12px 16px",
                    alignItems: "flex-start",
                    gap: "24px",
                    alignSelf: "stretch",
                    borderRadius: "var(--border-radius-base, 8px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                    background: "#FFF",
                  },
                  ...{},
                }}
                {...{ showDelete: true, property_1: "default" }}
              />
              {/* name="Shortlisted/List item" id="295:19393" type="INSTANCE" */}
              <QodeCustom4323424
                style={{
                  ...{
                    display: "flex",
                    padding: "12px 16px",
                    alignItems: "flex-start",
                    gap: "24px",
                    alignSelf: "stretch",
                    borderRadius: "var(--border-radius-base, 8px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                    background: "#FFF",
                  },
                  ...{},
                }}
                {...{ showDelete: true, property_1: "default" }}
              />
              {/* name="Shortlisted/List item" id="295:19394" type="INSTANCE" */}
              <QodeCustom4323424
                style={{
                  ...{
                    display: "flex",
                    padding: "12px 16px",
                    alignItems: "flex-start",
                    gap: "24px",
                    alignSelf: "stretch",
                    borderRadius: "var(--border-radius-base, 8px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                    background: "#FFF",
                  },
                  ...{},
                }}
                {...{ showDelete: true, property_1: "default" }}
              />
              {/* name="Shortlisted/List item" id="295:19395" type="INSTANCE" */}
              <QodeCustom4323424
                style={{
                  ...{
                    display: "flex",
                    padding: "12px 16px",
                    alignItems: "flex-start",
                    gap: "24px",
                    alignSelf: "stretch",
                    borderRadius: "var(--border-radius-base, 8px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                    background: "#FFF",
                  },
                  ...{},
                }}
                {...{ showDelete: true, property_1: "default" }}
              />
              {/* name="Shortlisted/List item" id="295:19396" type="INSTANCE" */}
              <QodeCustom4323424
                style={{
                  ...{
                    display: "flex",
                    padding: "12px 16px",
                    alignItems: "flex-start",
                    gap: "24px",
                    alignSelf: "stretch",
                    borderRadius: "var(--border-radius-base, 8px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                    background: "#FFF",
                  },
                  ...{},
                }}
                {...{ showDelete: true, property_1: "default" }}
              />
              {/* name="Footer" id="434:31776" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    padding: "12px 16px",
                    justifyContent: "space-between",
                    alignItems: "center",
                    alignSelf: "stretch",
                  },
                  ...{},
                }}
              >
                {/* name="Frame 37294" id="434:31777" type="FRAME" */}
                <div
                  style={{
                    ...{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "flex-start",
                    },
                    ...{},
                  }}
                >
                  <span
                    style={{
                      ...{
                        color: "var(--text-text-neutral-30, #656565)",
                        textAlign: "center",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-base, 14px)",
                        fontStyle: "normal",
                        fontWeight: "500",
                        lineHeight:
                          "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                      },
                      ...{},
                    }}
                  >{`Page: 1/5`}</span>
                </div>
                {/* name="Pagination" id="434:31779" type="INSTANCE" */}
                <QodePagination
                  style={{
                    ...{
                      display: "flex",
                      width: "208px",
                      height: "var(--size-height-controlheightsm, 24px)",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "var(--size-padding-paddingxxs, 4px)",
                    },
                    ...{},
                  }}
                  {...{ total: "Total 85 items", type: "basic", mini: true }}
                />
              </div>
            </div>
          </div>
        </>
      )}
      {/* id="434:33151" */}
      {`${property_1}` === `End` && (
        <>
          {/* name="Property 1=End" id="434:33151" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "370px",
                height: "1276px",
                padding: "var(--size-size-sizexxs-6px, 6px)",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "var(--size-size-sizexxs-6px, 6px)",
                flexShrink: "0",
                background: "var(--neutral-gray-10, #e3e3e3)",
              },
              ...style,
            }}
          >
            {/* name="Search bar" id="500:27833" type="INSTANCE" */}
            <QodeInput
              style={{
                ...{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "10px 12px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "8px",
                  flexShrink: "0",
                  alignSelf: "stretch",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                  background: "var(--background-bg-white, #fff)",
                },
                ...{},
              }}
              {...{
                suffix: "SUF",
                title: "Search name",
                prefix: "PRE",
                iconRight: <Icon.QodeUser />,
                iconLeft: <Icon.QodeMagnifyingGlass />,
                showIconLeft: true,
                state: "default",
                status: "default",
                size: "default",
              }}
            />
            {/* name="Shortlisted/List item" id="434:33152" type="INSTANCE" */}
            <QodeCustom4323423
              style={{
                ...{
                  display: "flex",
                  padding: "12px 16px",
                  alignItems: "flex-start",
                  gap: "24px",
                  alignSelf: "stretch",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border: "2px solid var(--border-border-primary-20, #158de2)",
                  background: "var(--blue-techblue-5, #f8fcff)",
                },
                ...{},
              }}
              {...{ showDelete: true, property_1: "active" }}
            />
            {/* name="Shortlisted/List item" id="434:33153" type="INSTANCE" */}
            <QodeCustom4323424
              style={{
                ...{
                  display: "flex",
                  padding: "12px 16px",
                  alignItems: "flex-start",
                  gap: "24px",
                  alignSelf: "stretch",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                  background: "#FFF",
                },
                ...{},
              }}
              {...{ showDelete: true, property_1: "default" }}
            />
            {/* name="Shortlisted/List item" id="434:33566" type="INSTANCE" */}
            <QodeCustom4323424
              style={{
                ...{
                  display: "flex",
                  padding: "12px 16px",
                  alignItems: "flex-start",
                  gap: "24px",
                  alignSelf: "stretch",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                  background: "#FFF",
                },
                ...{},
              }}
              {...{ showDelete: true, property_1: "default" }}
            />
            {/* name="End of list" id="434:33563" type="INSTANCE" */}
            <QodeCustom43430284
              style={{
                ...{
                  display: "flex",
                  padding: "20px 0px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                  alignSelf: "stretch",
                },
                ...{},
              }}
              {...{ property_1: "End" }}
            />
          </div>
        </>
      )}
      {/* id="94:5730" */}
      {`${property_1}` === `Search` && (
        <>
          {/* name="Property 1=Search" id="94:5730" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "370px",
                padding: "var(--size-size-sizexxs-6px, 6px)",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "var(--size-size-sizexxs-6px, 6px)",
                background: "var(--neutral-gray-10, #e3e3e3)",
              },
              ...style,
            }}
          >
            {/* name="Search bar" id="94:5731" type="INSTANCE" */}
            <QodeInput
              style={{
                ...{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "10px 12px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "8px",
                  alignSelf: "stretch",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                  background: "var(--background-bg-white, #fff)",
                },
                ...{},
              }}
              {...{
                suffix: "SUF",
                title: "Search name",
                prefix: "PRE",
                iconRight: <Icon.QodeUser />,
                iconLeft: <Icon.QodeMagnifyingGlass />,
                showIconLeft: true,
                state: "default",
                status: "default",
                size: "default",
              }}
            />
            {/* name="Shortlisted/List item" id="295:25357" type="INSTANCE" */}
            <QodeCustom4323423
              style={{
                ...{
                  display: "flex",
                  padding: "12px 16px",
                  alignItems: "flex-start",
                  gap: "24px",
                  alignSelf: "stretch",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border: "2px solid var(--border-border-primary-20, #158de2)",
                  background: "var(--blue-techblue-5, #f8fcff)",
                },
                ...{},
              }}
              {...{ showDelete: true, property_1: "active" }}
            />
            {/* name="Shortlisted/List item" id="295:25358" type="INSTANCE" */}
            <QodeCustom4323424
              style={{
                ...{
                  display: "flex",
                  padding: "12px 16px",
                  alignItems: "flex-start",
                  gap: "24px",
                  alignSelf: "stretch",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                  background: "#FFF",
                },
                ...{},
              }}
              {...{ showDelete: true, property_1: "default" }}
            />
            {/* name="Shortlisted/List item" id="295:25359" type="INSTANCE" */}
            <QodeCustom4323424
              style={{
                ...{
                  display: "flex",
                  padding: "12px 16px",
                  alignItems: "flex-start",
                  gap: "24px",
                  alignSelf: "stretch",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                  background: "#FFF",
                },
                ...{},
              }}
              {...{ showDelete: true, property_1: "default" }}
            />
            {/* name="Shortlisted/List item" id="295:25360" type="INSTANCE" */}
            <QodeCustom4323424
              style={{
                ...{
                  display: "flex",
                  padding: "12px 16px",
                  alignItems: "flex-start",
                  gap: "24px",
                  alignSelf: "stretch",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                  background: "#FFF",
                },
                ...{},
              }}
              {...{ showDelete: true, property_1: "default" }}
            />
            {/* name="Shortlisted/List item" id="295:25361" type="INSTANCE" */}
            <QodeCustom4323424
              style={{
                ...{
                  display: "flex",
                  padding: "12px 16px",
                  alignItems: "flex-start",
                  gap: "24px",
                  alignSelf: "stretch",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                  background: "#FFF",
                },
                ...{},
              }}
              {...{ showDelete: true, property_1: "default" }}
            />
            {/* name="Shortlisted/List item" id="295:25362" type="INSTANCE" */}
            <QodeCustom4323424
              style={{
                ...{
                  display: "flex",
                  padding: "12px 16px",
                  alignItems: "flex-start",
                  gap: "24px",
                  alignSelf: "stretch",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                  background: "#FFF",
                },
                ...{},
              }}
              {...{ showDelete: true, property_1: "default" }}
            />
            {/* name="Shortlisted/List item" id="295:25363" type="INSTANCE" */}
            <QodeCustom4323424
              style={{
                ...{
                  display: "flex",
                  padding: "12px 16px",
                  alignItems: "flex-start",
                  gap: "24px",
                  alignSelf: "stretch",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                  background: "#FFF",
                },
                ...{},
              }}
              {...{ showDelete: true, property_1: "default" }}
            />
            {/* name="Shortlisted/List item" id="295:25364" type="INSTANCE" */}
            <QodeCustom4323424
              style={{
                ...{
                  display: "flex",
                  padding: "12px 16px",
                  alignItems: "flex-start",
                  gap: "24px",
                  alignSelf: "stretch",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                  background: "#FFF",
                },
                ...{},
              }}
              {...{ showDelete: true, property_1: "default" }}
            />
            {/* name="Shortlisted/List item" id="295:25365" type="INSTANCE" */}
            <QodeCustom4323424
              style={{
                ...{
                  display: "flex",
                  padding: "12px 16px",
                  alignItems: "flex-start",
                  gap: "24px",
                  alignSelf: "stretch",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                  background: "#FFF",
                },
                ...{},
              }}
              {...{ showDelete: true, property_1: "default" }}
            />
            {/* name="Shortlisted/List item" id="295:25366" type="INSTANCE" */}
            <QodeCustom4323424
              style={{
                ...{
                  display: "flex",
                  padding: "12px 16px",
                  alignItems: "flex-start",
                  gap: "24px",
                  alignSelf: "stretch",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                  background: "#FFF",
                },
                ...{},
              }}
              {...{ showDelete: true, property_1: "default" }}
            />
            {/* name="Footer" id="434:33129" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  padding: "12px 16px",
                  justifyContent: "space-between",
                  alignItems: "center",
                  alignSelf: "stretch",
                },
                ...{},
              }}
            >
              {/* name="Frame 37294" id="434:33130" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-start",
                  },
                  ...{},
                }}
              >
                <span
                  style={{
                    ...{
                      color: "var(--text-text-neutral-30, #656565)",
                      textAlign: "center",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "500",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    },
                    ...{},
                  }}
                >{`Page: 1/5`}</span>
              </div>
              {/* name="Pagination" id="434:33132" type="INSTANCE" */}
              <QodePagination
                style={{
                  ...{
                    display: "flex",
                    width: "208px",
                    height: "var(--size-height-controlheightsm, 24px)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxxs, 4px)",
                  },
                  ...{},
                }}
                {...{ total: "Total 85 items", type: "basic", mini: true }}
              />
            </div>
          </div>
        </>
      )}
    </>
  )
}
