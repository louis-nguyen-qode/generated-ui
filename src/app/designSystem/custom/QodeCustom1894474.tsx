// id="189:4474"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg1894453 from "@designSystem/icon/svg/QodeSvg1894453"
import QodeSvg1892958 from "@designSystem/icon/svg/QodeSvg1892958"
import QodeSvg1894419 from "@designSystem/icon/svg/QodeSvg1894419"
import QodeSvg1894422 from "@designSystem/icon/svg/QodeSvg1894422"
import { QodeCustom1894448 } from "@designSystem/custom/QodeCustom1894448"
import { QodeCustom1893023 } from "@designSystem/custom/QodeCustom1893023"
import { QodeCustom3511250 } from "@designSystem/custom/QodeCustom3511250"
import { QodeCustom1894800 } from "@designSystem/custom/QodeCustom1894800"
import { QodeCustom1894456 } from "@designSystem/custom/QodeCustom1894456"
import QodeSvg1894659 from "@designSystem/icon/svg/QodeSvg1894659"

export interface QodeCustom1894474Props {}

export const QodeCustom1894474: React.FC<
  QodeCustom1894474Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name=".colorPicker__popup" id="189:4474" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "inline-flex",
            padding: "var(--size-padding-paddingsm, 12px)",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingsm, 12px)",
            borderRadius: "var(--style-radius-borderradiuslg, 8px)",
            background:
              "var(--color-neutral-background-colorbgelevated, #f8f6f6)",
            boxShadow:
              "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 3px 6px -4px rgba(0, 0, 0, 0.12)",
          },
          ...style,
        }}
      >
        {/* name="Palette Wrapper" id="189:4465" type="FRAME" */}
        <div
          style={{
            ...{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              gap: "var(--font-size-base, 14px)",
              alignSelf: "stretch",
            },
            ...{},
          }}
        >
          {/* name=".colorPicker__colorClear" id="189:4461" type="INSTANCE" */}
          <QodeSvg1894453
            style={{
              ...{
                display: "flex",
                width: "18px",
                height: "18px",
                padding: "1.899px 2.899px 3.101px 2.101px",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "var(--style-radius-borderradiussm, 6px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorsplit, rgba(0, 0, 0, 0.06))",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              },
              ...{},
            }}
            {...{}}
          />
          {/* name=".colorPicker__palette" id="189:4463" type="INSTANCE" */}
          <QodeSvg1892958
            style={{
              ...{
                height: "160px",
                alignSelf: "stretch",
                fill: "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 100%), linear-gradient(90deg, #FFF 0%, rgba(255, 255, 255, 0.00) 100%), var(--color-primary-colorprimary, #1597f4)",
                strokeWidth: "1px",
                stroke:
                  "var(--color-neutral-borders-colorsplit, rgba(0, 0, 0, 0.06))",
              },
              ...{},
            }}
            {...{}}
          />
        </div>
        {/* name="Color Wrapper" id="189:4472" type="FRAME" */}
        <div
          style={{
            ...{
              display: "flex",
              width: "256px",
              alignItems: "center",
              gap: "var(--size-padding-paddingsm, 12px)",
            },
            ...{},
          }}
        >
          {/* name="Slider Wrapper" id="189:4471" type="FRAME" */}
          <div
            style={{
              ...{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "var(--size-padding-paddingsm, 12px)",
                flex: "1 0 0",
              },
              ...{},
            }}
          >
            {/* name=".colorPicker__slider" id="189:4466" type="INSTANCE" */}
            <QodeSvg1894419
              style={{
                ...{
                  height: "8px",
                  alignSelf: "stretch",
                  fill: "linear-gradient(90deg, #F00 0%, #FFA800 10.42%, #FAFF00 23.44%, #06FF01 35.42%, #01FFD1 48.96%, #0185FF 60.94%, #2501FF 72.92%, #BD01FF 83.33%, #FF01C7 90.1%, #FF0101 97.92%)",
                },
                ...{},
              }}
              {...{ type: "palette" }}
            />
            {/* name=".colorPicker__slider" id="189:4468" type="INSTANCE" */}
            <QodeSvg1894422
              style={{
                ...{
                  height: "8px",
                  alignSelf: "stretch",
                  fill: "linear-gradient(270deg, #1677FF 0%, rgba(22, 119, 255, 0.00) 100%)",
                },
                ...{},
              }}
              {...{ type: "alpha" }}
            />
          </div>
          {/* name=".colorPicker__colorPreview" id="189:4470" type="INSTANCE" */}
          <QodeCustom1894448
            style={{
              ...{
                width: "28px",
                height: "28px",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradiussm, 6px)",
                background: "var(--color-primary-colorprimary, #1597f4)",
              },
              ...{},
            }}
            {...{}}
          />
        </div>
        {/* name="🧬 color space" id="189:4511" type="INSTANCE" */}
        <QodeCustom1893023
          style={{
            ...{
              display: "flex",
              alignItems: "center",
              gap: "var(--size-padding-paddingxxs, 4px)",
              alignSelf: "stretch",
            },
            ...{},
          }}
          {...{ colorSpace: "HEX" }}
        />
        {/* name="Presets" id="189:4660" type="FRAME" */}
        <div
          style={{
            ...{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "12px",
              alignSelf: "stretch",
            },
            ...{},
          }}
        >
          {/* name="Divider" id="189:4558" type="RECTANGLE" */}
          <Flex
            style={{
              ...{
                height: "var(--size-size-size5xs-1px, 1px)",
                alignSelf: "stretch",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorbordersecondary, rgba(0, 0, 0, 0.25))",
              },
              ...{},
            }}
          >
            <></>
          </Flex>
          {/* name="Preset Collapse" id="189:4565" type="FRAME" */}
          <div
            style={{
              ...{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                alignSelf: "stretch",
              },
              ...{},
            }}
          >
            {/* name="Collapse Trigger" id="189:4562" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  alignSelf: "stretch",
                },
                ...{},
              }}
            >
              {/* name="Down" id="189:4560" type="INSTANCE" */}
              <QodeCustom3511250
                style={{
                  ...{
                    display: "flex",
                    width: "12px",
                    height: "12px",
                    padding: "2.572px 0.911px 2.571px 0.91px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    flex: "1 0 0",
                    color: "var(--color-neutral-text-colortext, #000)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-small, 12px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                  },
                  ...{},
                }}
              >{`Recommended`}</span>
            </div>
            {/* name="Frame 1" id="189:4567" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  alignContent: "center",
                  gap: "8px var(--size-padding-paddingxs, 8px)",
                  alignSelf: "stretch",
                  flexWrap: "wrap",
                },
                ...{},
              }}
            >
              {/* name=".colorPicker__colorPicker" id="189:4564" type="INSTANCE" */}
              <QodeCustom1894800
                style={{
                  ...{
                    width: "18px",
                    height: "18px",
                    borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorsplit, rgba(0, 0, 0, 0.06))",
                    background:
                      "linear-gradient(0deg, #000 0%, #000 100%), var(--color-neutral-background-colorbgcontainer, #fff)",
                  },
                  ...{},
                }}
                {...{ checked: false }}
              />
              {/* name=".colorPicker__colorPicker" id="189:4566" type="INSTANCE" */}
              <QodeCustom1894800
                style={{
                  ...{
                    width: "18px",
                    height: "18px",
                    borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorsplit, rgba(0, 0, 0, 0.06))",
                    background:
                      "linear-gradient(0deg, #1F1F1F 0%, #1F1F1F 100%), var(--color-neutral-background-colorbgcontainer, #fff)",
                  },
                  ...{},
                }}
                {...{ checked: false }}
              />
              {/* name=".colorPicker__colorPicker" id="189:4568" type="INSTANCE" */}
              <QodeCustom1894800
                style={{
                  ...{
                    width: "18px",
                    height: "18px",
                    borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorsplit, rgba(0, 0, 0, 0.06))",
                    background:
                      "linear-gradient(0deg, #595959 0%, #595959 100%), var(--color-neutral-background-colorbgcontainer, #fff)",
                  },
                  ...{},
                }}
                {...{ checked: false }}
              />
              {/* name=".colorPicker__colorPicker" id="189:4569" type="INSTANCE" */}
              <QodeCustom1894800
                style={{
                  ...{
                    width: "18px",
                    height: "18px",
                    borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorsplit, rgba(0, 0, 0, 0.06))",
                    background:
                      "linear-gradient(0deg, #8C8C8C 0%, #8C8C8C 100%), var(--color-neutral-background-colorbgcontainer, #fff)",
                  },
                  ...{},
                }}
                {...{ checked: false }}
              />
              {/* name=".colorPicker__colorPicker" id="189:4570" type="INSTANCE" */}
              <QodeCustom1894800
                style={{
                  ...{
                    width: "18px",
                    height: "18px",
                    borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorsplit, rgba(0, 0, 0, 0.06))",
                    background:
                      "linear-gradient(0deg, #BFBFBF 0%, #BFBFBF 100%), var(--color-neutral-background-colorbgcontainer, #fff)",
                  },
                  ...{},
                }}
                {...{ checked: false }}
              />
              {/* name=".colorPicker__colorPicker" id="189:4571" type="INSTANCE" */}
              <QodeCustom1894800
                style={{
                  ...{
                    width: "18px",
                    height: "18px",
                    borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorsplit, rgba(0, 0, 0, 0.06))",
                    background:
                      "linear-gradient(0deg, #D9D9D9 0%, #D9D9D9 100%), var(--color-neutral-background-colorbgcontainer, #fff)",
                  },
                  ...{},
                }}
                {...{ checked: false }}
              />
              {/* name=".colorPicker__colorPicker" id="189:4572" type="INSTANCE" */}
              <QodeCustom1894800
                style={{
                  ...{
                    width: "18px",
                    height: "18px",
                    borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorsplit, rgba(0, 0, 0, 0.06))",
                    background:
                      "linear-gradient(0deg, var(--gray-neutrals-20, #e5e5e5) 0%, var(--gray-neutrals-20, #e5e5e5) 100%), var(--color-neutral-background-colorbgcontainer, #fff)",
                  },
                  ...{},
                }}
                {...{ checked: false }}
              />
              {/* name=".colorPicker__colorPicker" id="189:4573" type="INSTANCE" */}
              <QodeCustom1894800
                style={{
                  ...{
                    width: "18px",
                    height: "18px",
                    borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorsplit, rgba(0, 0, 0, 0.06))",
                    background:
                      "linear-gradient(0deg, #EDEDED 0%, #EDEDED 100%), var(--color-neutral-background-colorbgcontainer, #fff)",
                  },
                  ...{},
                }}
                {...{ checked: false }}
              />
              {/* name=".colorPicker__colorPicker" id="189:4574" type="INSTANCE" */}
              <QodeCustom1894800
                style={{
                  ...{
                    width: "18px",
                    height: "18px",
                    borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorsplit, rgba(0, 0, 0, 0.06))",
                    background:
                      "linear-gradient(0deg, #F5F5F5 0%, #F5F5F5 100%), var(--color-neutral-background-colorbgcontainer, #fff)",
                  },
                  ...{},
                }}
                {...{ checked: false }}
              />
              {/* name=".colorPicker__colorPicker" id="189:4575" type="INSTANCE" */}
              <QodeCustom1894800
                style={{
                  ...{
                    width: "18px",
                    height: "18px",
                    borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorsplit, rgba(0, 0, 0, 0.06))",
                    background:
                      "linear-gradient(0deg, #FAFAFA 0%, #FAFAFA 100%), var(--color-neutral-background-colorbgcontainer, #fff)",
                  },
                  ...{},
                }}
                {...{ checked: false }}
              />
              {/* name=".colorPicker__colorPicker" id="189:4577" type="INSTANCE" */}
              <QodeCustom1894800
                style={{
                  ...{
                    width: "18px",
                    height: "18px",
                    borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorsplit, rgba(0, 0, 0, 0.06))",
                    background:
                      "linear-gradient(0deg, #E13C39 0%, #E13C39 100%), var(--color-neutral-background-colorbgcontainer, #fff)",
                  },
                  ...{},
                }}
                {...{ checked: false }}
              />
              {/* name=".colorPicker__colorPicker" id="189:4578" type="INSTANCE" */}
              <QodeCustom1894800
                style={{
                  ...{
                    width: "18px",
                    height: "18px",
                    borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorsplit, rgba(0, 0, 0, 0.06))",
                    background:
                      "linear-gradient(0deg, #EB903A 0%, #EB903A 100%), var(--color-neutral-background-colorbgcontainer, #fff)",
                  },
                  ...{},
                }}
                {...{ checked: false }}
              />
              {/* name=".colorPicker__colorPicker" id="189:4579" type="INSTANCE" */}
              <QodeCustom1894800
                style={{
                  ...{
                    width: "18px",
                    height: "18px",
                    borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorsplit, rgba(0, 0, 0, 0.06))",
                    background:
                      "linear-gradient(0deg, #F6DA4D 0%, #F6DA4D 100%), var(--color-neutral-background-colorbgcontainer, #fff)",
                  },
                  ...{},
                }}
                {...{ checked: false }}
              />
              {/* name=".colorPicker__colorPicker" id="189:4580" type="INSTANCE" */}
              <QodeCustom1894800
                style={{
                  ...{
                    width: "18px",
                    height: "18px",
                    borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorsplit, rgba(0, 0, 0, 0.06))",
                    background:
                      "linear-gradient(0deg, #95B93C 0%, #95B93C 100%), var(--color-neutral-background-colorbgcontainer, #fff)",
                  },
                  ...{},
                }}
                {...{ checked: false }}
              />
              {/* name=".colorPicker__colorPicker" id="189:4581" type="INSTANCE" */}
              <QodeCustom1894800
                style={{
                  ...{
                    width: "18px",
                    height: "18px",
                    borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorsplit, rgba(0, 0, 0, 0.06))",
                    background:
                      "linear-gradient(0deg, #72C140 0%, #72C140 100%), var(--color-neutral-background-colorbgcontainer, #fff)",
                  },
                  ...{},
                }}
                {...{ checked: false }}
              />
              {/* name=".colorPicker__colorPicker" id="189:4582" type="INSTANCE" */}
              <QodeCustom1894800
                style={{
                  ...{
                    width: "18px",
                    height: "18px",
                    borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorsplit, rgba(0, 0, 0, 0.06))",
                    background:
                      "linear-gradient(0deg, #4CA6A7 0%, #4CA6A7 100%), var(--color-neutral-background-colorbgcontainer, #fff)",
                  },
                  ...{},
                }}
                {...{ checked: false }}
              />
              {/* name=".colorPicker__colorPicker" id="189:4583" type="INSTANCE" */}
              <QodeCustom1894456
                style={{
                  ...{
                    display: "flex",
                    width: "18px",
                    height: "18px",
                    padding: "3px",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorsplit, rgba(0, 0, 0, 0.06))",
                    background:
                      "linear-gradient(0deg, #3379F6 0%, #3379F6 100%), var(--color-neutral-background-colorbgcontainer, #fff)",
                  },
                  ...{},
                }}
                {...{ checked: true }}
              />
              {/* name=".colorPicker__colorPicker" id="189:4584" type="INSTANCE" */}
              <QodeCustom1894800
                style={{
                  ...{
                    width: "18px",
                    height: "18px",
                    borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorsplit, rgba(0, 0, 0, 0.06))",
                    background:
                      "linear-gradient(0deg, #3458E2 0%, #3458E2 100%), var(--color-neutral-background-colorbgcontainer, #fff)",
                  },
                  ...{},
                }}
                {...{ checked: false }}
              />
              {/* name=".colorPicker__colorPicker" id="189:4585" type="INSTANCE" */}
              <QodeCustom1894800
                style={{
                  ...{
                    width: "18px",
                    height: "18px",
                    borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorsplit, rgba(0, 0, 0, 0.06))",
                    background:
                      "linear-gradient(0deg, #6939C9 0%, #6939C9 100%), var(--color-neutral-background-colorbgcontainer, #fff)",
                  },
                  ...{},
                }}
                {...{ checked: false }}
              />
              {/* name=".colorPicker__colorPicker" id="189:4586" type="INSTANCE" */}
              <QodeCustom1894800
                style={{
                  ...{
                    width: "18px",
                    height: "18px",
                    borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorsplit, rgba(0, 0, 0, 0.06))",
                    background:
                      "linear-gradient(0deg, #D84493 0%, #D84493 100%), var(--color-neutral-background-colorbgcontainer, #fff)",
                  },
                  ...{},
                }}
                {...{ checked: false }}
              />
              {/* name=".colorPicker__colorPicker" id="189:4588" type="INSTANCE" */}
              <QodeCustom1894800
                style={{
                  ...{
                    width: "18px",
                    height: "18px",
                    borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorsplit, rgba(0, 0, 0, 0.06))",
                    background:
                      "linear-gradient(0deg, #EDBBBA 0%, #EDBBBA 100%), var(--color-neutral-background-colorbgcontainer, #fff)",
                  },
                  ...{},
                }}
                {...{ checked: false }}
              />
              {/* name=".colorPicker__colorPicker" id="189:4589" type="INSTANCE" */}
              <QodeCustom1894800
                style={{
                  ...{
                    width: "18px",
                    height: "18px",
                    borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorsplit, rgba(0, 0, 0, 0.06))",
                    background:
                      "linear-gradient(0deg, #F9DEC4 0%, #F9DEC4 100%), var(--color-neutral-background-colorbgcontainer, #fff)",
                  },
                  ...{},
                }}
                {...{ checked: false }}
              />
              {/* name=".colorPicker__colorPicker" id="189:4590" type="INSTANCE" */}
              <QodeCustom1894800
                style={{
                  ...{
                    width: "18px",
                    height: "18px",
                    borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorsplit, rgba(0, 0, 0, 0.06))",
                    background:
                      "linear-gradient(0deg, #FCF3C9 0%, #FCF3C9 100%), var(--color-neutral-background-colorbgcontainer, #fff)",
                  },
                  ...{},
                }}
                {...{ checked: false }}
              />
              {/* name=".colorPicker__colorPicker" id="189:4591" type="INSTANCE" */}
              <QodeCustom1894800
                style={{
                  ...{
                    width: "18px",
                    height: "18px",
                    borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorsplit, rgba(0, 0, 0, 0.06))",
                    background:
                      "linear-gradient(0deg, #DFE9C4 0%, #DFE9C4 100%), var(--color-neutral-background-colorbgcontainer, #fff)",
                  },
                  ...{},
                }}
                {...{ checked: false }}
              />
              {/* name=".colorPicker__colorPicker" id="189:4592" type="INSTANCE" */}
              <QodeCustom1894800
                style={{
                  ...{
                    width: "18px",
                    height: "18px",
                    borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorsplit, rgba(0, 0, 0, 0.06))",
                    background:
                      "linear-gradient(0deg, #D4EBC5 0%, #D4EBC5 100%), var(--color-neutral-background-colorbgcontainer, #fff)",
                  },
                  ...{},
                }}
                {...{ checked: false }}
              />
              {/* name=".colorPicker__colorPicker" id="189:4593" type="INSTANCE" */}
              <QodeCustom1894800
                style={{
                  ...{
                    width: "18px",
                    height: "18px",
                    borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorsplit, rgba(0, 0, 0, 0.06))",
                    background:
                      "linear-gradient(0deg, #C9E4E4 0%, #C9E4E4 100%), var(--color-neutral-background-colorbgcontainer, #fff)",
                  },
                  ...{},
                }}
                {...{ checked: false }}
              />
              {/* name=".colorPicker__colorPicker" id="189:4594" type="INSTANCE" */}
              <QodeCustom1894800
                style={{
                  ...{
                    width: "18px",
                    height: "18px",
                    borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorsplit, rgba(0, 0, 0, 0.06))",
                    background:
                      "linear-gradient(0deg, #C2D6FC 0%, #C2D6FC 100%), var(--color-neutral-background-colorbgcontainer, #fff)",
                  },
                  ...{},
                }}
                {...{ checked: false }}
              />
              {/* name=".colorPicker__colorPicker" id="189:4595" type="INSTANCE" */}
              <QodeCustom1894800
                style={{
                  ...{
                    width: "18px",
                    height: "18px",
                    borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorsplit, rgba(0, 0, 0, 0.06))",
                    background:
                      "linear-gradient(0deg, #C3CCF6 0%, #C3CCF6 100%), var(--color-neutral-background-colorbgcontainer, #fff)",
                  },
                  ...{},
                }}
                {...{ checked: false }}
              />
              {/* name=".colorPicker__colorPicker" id="189:4596" type="INSTANCE" */}
              <QodeCustom1894800
                style={{
                  ...{
                    width: "18px",
                    height: "18px",
                    borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorsplit, rgba(0, 0, 0, 0.06))",
                    background:
                      "linear-gradient(0deg, #D2C2EF 0%, #D2C2EF 100%), var(--color-neutral-background-colorbgcontainer, #fff)",
                  },
                  ...{},
                }}
                {...{ checked: false }}
              />
              {/* name=".colorPicker__colorPicker" id="189:4597" type="INSTANCE" */}
              <QodeCustom1894800
                style={{
                  ...{
                    width: "18px",
                    height: "18px",
                    borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorsplit, rgba(0, 0, 0, 0.06))",
                    background:
                      "linear-gradient(0deg, #F3C6DF 0%, #F3C6DF 100%), var(--color-neutral-background-colorbgcontainer, #fff)",
                  },
                  ...{},
                }}
                {...{ checked: false }}
              />
            </div>
          </div>
          {/* name="Preset Collapse" id="189:4598" type="FRAME" */}
          <div
            style={{
              ...{
                display: "flex",
                paddingBottom: "var(--size-padding-paddingxs, 8px)",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                alignSelf: "stretch",
              },
              ...{},
            }}
          >
            {/* name="Collapse Trigger" id="189:4599" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  alignSelf: "stretch",
                },
                ...{},
              }}
            >
              {/* name="Down" id="189:4600" type="INSTANCE" */}
              <QodeCustom3511250
                style={{
                  ...{
                    display: "flex",
                    width: "12px",
                    height: "12px",
                    padding: "2.572px 0.911px 2.571px 0.91px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    flex: "1 0 0",
                    color: "var(--color-neutral-text-colortext, #000)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-small, 12px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                  },
                  ...{},
                }}
              >{`Recent`}</span>
            </div>
            <span
              style={{
                ...{
                  flex: "1 0 0",
                  alignSelf: "stretch",
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-small, 12px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                },
                ...{},
              }}
            >{`Empty`}</span>
          </div>
        </div>
        {/* name="Arrow" id="189:4659" type="VECTOR" */}
        <QodeSvg1894659
          style={{
            ...{
              width: "16px",
              height: "8px",
              position: "absolute",
              left: "12px",
              top: "-8px",
              fill: "var(--color-neutral-background-colorbgelevated, #f8f6f6)",
            },
            ...{},
          }}
          {...{}}
        />
      </div>
    </>
  )
}
