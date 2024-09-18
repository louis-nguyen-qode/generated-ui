// id="204:10182"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom20410182Props {
  size?: "default" | "small"
  status?: "default" | "error" | "success"
  showInfo?: "true" | "false"
}

export const QodeCustom20410182: React.FC<
  QodeCustom20410182Props & { style?: CSSProperties }
> = ({ size = "default", status = "default", showInfo = "true", ...rest }) => {
  return (
    <>
      {/* name="Progress__Steps" id="204:10182" type="COMPONENT_SET" */}
      {/* id="204:9502" */}
      {`${size}` === `small` &&
        `${status}` === `default` &&
        `${showInfo}` === `true` && (
          <>
            {/* name="size=small, status=default, show info=true" id="204:9502" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
              }}
            >
              {/* name="progress-steps-item" id="204:9503" type="FRAME" */}
              <div
                style={{ display: "flex", alignItems: "center", gap: "2px" }}
              >
                {/* name="item" id="204:9504" type="RECTANGLE" */}
                <Flex
                  style={{
                    width: "2px",
                    height: "6px",
                    background: "var(--color-primary-colorprimary, #1597f4)",
                  }}
                >
                  {/* name="item" id=204:9504 type=RECTANGLE */}
                  <></>
                </Flex>
                {/* name="item" id="204:9505" type="RECTANGLE" */}
                <Flex
                  style={{
                    width: "2px",
                    height: "6px",
                    background: "var(--color-primary-colorprimary, #1597f4)",
                  }}
                >
                  {/* name="item" id=204:9505 type=RECTANGLE */}
                  <></>
                </Flex>
                {/* name="item" id="204:9506" type="RECTANGLE" */}
                <Flex
                  style={{
                    width: "2px",
                    height: "6px",
                    background:
                      "var(--color-neutral-fill-colorfillsecondary, rgba(0, 0, 0, 0.06))",
                  }}
                >
                  {/* name="item" id=204:9506 type=RECTANGLE */}
                  <></>
                </Flex>
                {/* name="item" id="204:9507" type="RECTANGLE" */}
                <Flex
                  style={{
                    width: "2px",
                    height: "6px",
                    background:
                      "var(--color-neutral-fill-colorfillsecondary, rgba(0, 0, 0, 0.06))",
                  }}
                >
                  {/* name="item" id=204:9507 type=RECTANGLE */}
                  <></>
                </Flex>
              </div>
              <span
                style={{
                  width: "28px",
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-small, 12px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                }}
              >{`50%`}</span>
            </div>
          </>
        )}
      {/* id="204:11538" */}
      {`${size}` === `small` &&
        `${status}` === `error` &&
        `${showInfo}` === `true` && (
          <>
            {/* name="size=small, status=error, show info=true" id="204:11538" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
              }}
            >
              {/* name="progress-steps-item" id="204:11539" type="FRAME" */}
              <div
                style={{ display: "flex", alignItems: "center", gap: "2px" }}
              >
                {/* name="item" id="204:11540" type="RECTANGLE" */}
                <Flex
                  style={{
                    width: "2px",
                    height: "6px",
                    background: "var(--color-error-colorerror, #dc3812)",
                  }}
                >
                  {/* name="item" id=204:11540 type=RECTANGLE */}
                  <></>
                </Flex>
                {/* name="item" id="204:11541" type="RECTANGLE" */}
                <Flex
                  style={{
                    width: "2px",
                    height: "6px",
                    background: "var(--color-error-colorerror, #dc3812)",
                  }}
                >
                  {/* name="item" id=204:11541 type=RECTANGLE */}
                  <></>
                </Flex>
                {/* name="item" id="204:11542" type="RECTANGLE" */}
                <Flex
                  style={{
                    width: "2px",
                    height: "6px",
                    background:
                      "var(--color-neutral-fill-colorfillsecondary, rgba(0, 0, 0, 0.06))",
                  }}
                >
                  {/* name="item" id=204:11542 type=RECTANGLE */}
                  <></>
                </Flex>
                {/* name="item" id="204:11543" type="RECTANGLE" */}
                <Flex
                  style={{
                    width: "2px",
                    height: "6px",
                    background:
                      "var(--color-neutral-fill-colorfillsecondary, rgba(0, 0, 0, 0.06))",
                  }}
                >
                  {/* name="item" id=204:11543 type=RECTANGLE */}
                  <></>
                </Flex>
              </div>
              {/* name="circle-xmark" id="204:11586" type="INSTANCE" */}
              <Icon.QodeCircleXmark
                style={{ width: "12px", height: "12px" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="204:11566" */}
      {`${size}` === `small` &&
        `${status}` === `success` &&
        `${showInfo}` === `true` && (
          <>
            {/* name="size=small, status=success, show info=true" id="204:11566" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
              }}
            >
              {/* name="progress-steps-item" id="204:11567" type="FRAME" */}
              <div
                style={{ display: "flex", alignItems: "center", gap: "2px" }}
              >
                {/* name="item" id="204:11568" type="RECTANGLE" */}
                <Flex
                  style={{
                    width: "2px",
                    height: "6px",
                    background: "var(--color-success-colorsuccess, #11a620)",
                  }}
                >
                  {/* name="item" id=204:11568 type=RECTANGLE */}
                  <></>
                </Flex>
                {/* name="item" id="204:11569" type="RECTANGLE" */}
                <Flex
                  style={{
                    width: "2px",
                    height: "6px",
                    background: "var(--color-success-colorsuccess, #11a620)",
                  }}
                >
                  {/* name="item" id=204:11569 type=RECTANGLE */}
                  <></>
                </Flex>
                {/* name="item" id="204:11570" type="RECTANGLE" */}
                <Flex
                  style={{
                    width: "2px",
                    height: "6px",
                    background: "var(--color-success-colorsuccess, #11a620)",
                  }}
                >
                  {/* name="item" id=204:11570 type=RECTANGLE */}
                  <></>
                </Flex>
                {/* name="item" id="204:11571" type="RECTANGLE" */}
                <Flex
                  style={{
                    width: "2px",
                    height: "6px",
                    background: "var(--color-success-colorsuccess, #11a620)",
                  }}
                >
                  {/* name="item" id=204:11571 type=RECTANGLE */}
                  <></>
                </Flex>
              </div>
              {/* name="circle-check" id="204:11590" type="INSTANCE" */}
              <Icon.QodeCircleCheck
                style={{ width: "12px", height: "12px" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="204:9515" */}
      {`${size}` === `default` &&
        `${status}` === `default` &&
        `${showInfo}` === `true` && (
          <>
            {/* name="size=default, status=default, show info=true" id="204:9515" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "106px",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
              }}
            >
              {/* name="Progress Steps Item" id="204:9516" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "2px",
                  flex: "1 0 0",
                }}
              >
                {/* name="item" id="204:9517" type="RECTANGLE" */}
                <Flex
                  style={{
                    height: "8px",
                    flex: "1 0 0",
                    background: "var(--color-primary-colorprimary, #1597f4)",
                  }}
                >
                  {/* name="item" id=204:9517 type=RECTANGLE */}
                  <></>
                </Flex>
                {/* name="item" id="204:9518" type="RECTANGLE" */}
                <Flex
                  style={{
                    height: "8px",
                    flex: "1 0 0",
                    background: "var(--color-primary-colorprimary, #1597f4)",
                  }}
                >
                  {/* name="item" id=204:9518 type=RECTANGLE */}
                  <></>
                </Flex>
                {/* name="item" id="204:9519" type="RECTANGLE" */}
                <Flex
                  style={{
                    height: "8px",
                    flex: "1 0 0",
                    background:
                      "var(--color-neutral-fill-colorfillsecondary, rgba(0, 0, 0, 0.06))",
                  }}
                >
                  {/* name="item" id=204:9519 type=RECTANGLE */}
                  <></>
                </Flex>
                {/* name="item" id="204:11506" type="RECTANGLE" */}
                <Flex
                  style={{
                    height: "8px",
                    flex: "1 0 0",
                    background:
                      "var(--color-neutral-fill-colorfillsecondary, rgba(0, 0, 0, 0.06))",
                  }}
                >
                  {/* name="item" id=204:11506 type=RECTANGLE */}
                  <></>
                </Flex>
              </div>
              <span
                style={{
                  width: "28px",
                  flexShrink: "0",
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-small, 12px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                }}
              >{`50%`}</span>
            </div>
          </>
        )}
      {/* id="204:11545" */}
      {`${size}` === `default` &&
        `${status}` === `error` &&
        `${showInfo}` === `true` && (
          <>
            {/* name="size=default, status=error, show info=true" id="204:11545" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "106px",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
              }}
            >
              {/* name="Progress Steps Item" id="204:11546" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "2px",
                  flex: "1 0 0",
                }}
              >
                {/* name="item" id="204:11547" type="RECTANGLE" */}
                <Flex
                  style={{
                    height: "8px",
                    flex: "1 0 0",
                    background: "var(--color-error-colorerror, #dc3812)",
                  }}
                >
                  {/* name="item" id=204:11547 type=RECTANGLE */}
                  <></>
                </Flex>
                {/* name="item" id="204:11548" type="RECTANGLE" */}
                <Flex
                  style={{
                    height: "8px",
                    flex: "1 0 0",
                    background: "var(--color-error-colorerror, #dc3812)",
                  }}
                >
                  {/* name="item" id=204:11548 type=RECTANGLE */}
                  <></>
                </Flex>
                {/* name="item" id="204:11549" type="RECTANGLE" */}
                <Flex
                  style={{
                    height: "8px",
                    flex: "1 0 0",
                    background:
                      "var(--color-neutral-fill-colorfillsecondary, rgba(0, 0, 0, 0.06))",
                  }}
                >
                  {/* name="item" id=204:11549 type=RECTANGLE */}
                  <></>
                </Flex>
                {/* name="item" id="204:11550" type="RECTANGLE" */}
                <Flex
                  style={{
                    height: "8px",
                    flex: "1 0 0",
                    background:
                      "var(--color-neutral-fill-colorfillsecondary, rgba(0, 0, 0, 0.06))",
                  }}
                >
                  {/* name="item" id=204:11550 type=RECTANGLE */}
                  <></>
                </Flex>
              </div>
              {/* name="circle-xmark" id="204:11582" type="INSTANCE" */}
              <Icon.QodeCircleXmark
                style={{ width: "12px", height: "12px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="204:11573" */}
      {`${size}` === `default` &&
        `${status}` === `success` &&
        `${showInfo}` === `true` && (
          <>
            {/* name="size=default, status=success, show info=true" id="204:11573" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "106px",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
              }}
            >
              {/* name="Progress Steps Item" id="204:11574" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "2px",
                  flex: "1 0 0",
                }}
              >
                {/* name="item" id="204:11575" type="RECTANGLE" */}
                <Flex
                  style={{
                    height: "8px",
                    flex: "1 0 0",
                    background: "var(--color-success-colorsuccess, #11a620)",
                  }}
                >
                  {/* name="item" id=204:11575 type=RECTANGLE */}
                  <></>
                </Flex>
                {/* name="item" id="204:11576" type="RECTANGLE" */}
                <Flex
                  style={{
                    height: "8px",
                    flex: "1 0 0",
                    background: "var(--color-success-colorsuccess, #11a620)",
                  }}
                >
                  {/* name="item" id=204:11576 type=RECTANGLE */}
                  <></>
                </Flex>
                {/* name="item" id="204:11577" type="RECTANGLE" */}
                <Flex
                  style={{
                    height: "8px",
                    flex: "1 0 0",
                    background: "var(--color-success-colorsuccess, #11a620)",
                  }}
                >
                  {/* name="item" id=204:11577 type=RECTANGLE */}
                  <></>
                </Flex>
                {/* name="item" id="204:11578" type="RECTANGLE" */}
                <Flex
                  style={{
                    height: "8px",
                    flex: "1 0 0",
                    background: "var(--color-success-colorsuccess, #11a620)",
                  }}
                >
                  {/* name="item" id=204:11578 type=RECTANGLE */}
                  <></>
                </Flex>
              </div>
              {/* name="circle-check" id="204:11588" type="INSTANCE" */}
              <Icon.QodeCircleCheck
                style={{ width: "12px", height: "12px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="204:11594" */}
      {`${size}` === `small` &&
        `${status}` === `default` &&
        `${showInfo}` === `false` && (
          <>
            {/* name="size=small, status=default, show info=false" id="204:11594" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
              }}
            >
              {/* name="progress-steps-item" id="204:11595" type="FRAME" */}
              <div
                style={{ display: "flex", alignItems: "center", gap: "2px" }}
              >
                {/* name="item" id="204:11596" type="RECTANGLE" */}
                <Flex
                  style={{
                    width: "2px",
                    height: "6px",
                    background: "var(--color-primary-colorprimary, #1597f4)",
                  }}
                >
                  {/* name="item" id=204:11596 type=RECTANGLE */}
                  <></>
                </Flex>
                {/* name="item" id="204:11597" type="RECTANGLE" */}
                <Flex
                  style={{
                    width: "2px",
                    height: "6px",
                    background: "var(--color-primary-colorprimary, #1597f4)",
                  }}
                >
                  {/* name="item" id=204:11597 type=RECTANGLE */}
                  <></>
                </Flex>
                {/* name="item" id="204:11598" type="RECTANGLE" */}
                <Flex
                  style={{
                    width: "2px",
                    height: "6px",
                    background:
                      "var(--color-neutral-fill-colorfillsecondary, rgba(0, 0, 0, 0.06))",
                  }}
                >
                  {/* name="item" id=204:11598 type=RECTANGLE */}
                  <></>
                </Flex>
                {/* name="item" id="204:11599" type="RECTANGLE" */}
                <Flex
                  style={{
                    width: "2px",
                    height: "6px",
                    background:
                      "var(--color-neutral-fill-colorfillsecondary, rgba(0, 0, 0, 0.06))",
                  }}
                >
                  {/* name="item" id=204:11599 type=RECTANGLE */}
                  <></>
                </Flex>
              </div>
            </div>
          </>
        )}
      {/* id="204:11601" */}
      {`${size}` === `small` &&
        `${status}` === `error` &&
        `${showInfo}` === `false` && (
          <>
            {/* name="size=small, status=error, show info=false" id="204:11601" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
              }}
            >
              {/* name="progress-steps-item" id="204:11602" type="FRAME" */}
              <div
                style={{ display: "flex", alignItems: "center", gap: "2px" }}
              >
                {/* name="item" id="204:11603" type="RECTANGLE" */}
                <Flex
                  style={{
                    width: "2px",
                    height: "6px",
                    background: "var(--color-error-colorerror, #dc3812)",
                  }}
                >
                  {/* name="item" id=204:11603 type=RECTANGLE */}
                  <></>
                </Flex>
                {/* name="item" id="204:11604" type="RECTANGLE" */}
                <Flex
                  style={{
                    width: "2px",
                    height: "6px",
                    background: "var(--color-error-colorerror, #dc3812)",
                  }}
                >
                  {/* name="item" id=204:11604 type=RECTANGLE */}
                  <></>
                </Flex>
                {/* name="item" id="204:11605" type="RECTANGLE" */}
                <Flex
                  style={{
                    width: "2px",
                    height: "6px",
                    background:
                      "var(--color-neutral-fill-colorfillsecondary, rgba(0, 0, 0, 0.06))",
                  }}
                >
                  {/* name="item" id=204:11605 type=RECTANGLE */}
                  <></>
                </Flex>
                {/* name="item" id="204:11606" type="RECTANGLE" */}
                <Flex
                  style={{
                    width: "2px",
                    height: "6px",
                    background:
                      "var(--color-neutral-fill-colorfillsecondary, rgba(0, 0, 0, 0.06))",
                  }}
                >
                  {/* name="item" id=204:11606 type=RECTANGLE */}
                  <></>
                </Flex>
              </div>
            </div>
          </>
        )}
      {/* id="204:11608" */}
      {`${size}` === `small` &&
        `${status}` === `success` &&
        `${showInfo}` === `false` && (
          <>
            {/* name="size=small, status=success, show info=false" id="204:11608" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
              }}
            >
              {/* name="progress-steps-item" id="204:11609" type="FRAME" */}
              <div
                style={{ display: "flex", alignItems: "center", gap: "2px" }}
              >
                {/* name="item" id="204:11610" type="RECTANGLE" */}
                <Flex
                  style={{
                    width: "2px",
                    height: "6px",
                    background: "var(--color-success-colorsuccess, #11a620)",
                  }}
                >
                  {/* name="item" id=204:11610 type=RECTANGLE */}
                  <></>
                </Flex>
                {/* name="item" id="204:11611" type="RECTANGLE" */}
                <Flex
                  style={{
                    width: "2px",
                    height: "6px",
                    background: "var(--color-success-colorsuccess, #11a620)",
                  }}
                >
                  {/* name="item" id=204:11611 type=RECTANGLE */}
                  <></>
                </Flex>
                {/* name="item" id="204:11612" type="RECTANGLE" */}
                <Flex
                  style={{
                    width: "2px",
                    height: "6px",
                    background: "var(--color-success-colorsuccess, #11a620)",
                  }}
                >
                  {/* name="item" id=204:11612 type=RECTANGLE */}
                  <></>
                </Flex>
                {/* name="item" id="204:11613" type="RECTANGLE" */}
                <Flex
                  style={{
                    width: "2px",
                    height: "6px",
                    background: "var(--color-success-colorsuccess, #11a620)",
                  }}
                >
                  {/* name="item" id=204:11613 type=RECTANGLE */}
                  <></>
                </Flex>
              </div>
            </div>
          </>
        )}
      {/* id="204:11615" */}
      {`${size}` === `default` &&
        `${status}` === `default` &&
        `${showInfo}` === `false` && (
          <>
            {/* name="size=default, status=default, show info=false" id="204:11615" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "106px",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
              }}
            >
              {/* name="Progress Steps Item" id="204:11616" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "2px",
                  flex: "1 0 0",
                }}
              >
                {/* name="item" id="204:11617" type="RECTANGLE" */}
                <Flex
                  style={{
                    height: "8px",
                    flex: "1 0 0",
                    background: "var(--color-primary-colorprimary, #1597f4)",
                  }}
                >
                  {/* name="item" id=204:11617 type=RECTANGLE */}
                  <></>
                </Flex>
                {/* name="item" id="204:11618" type="RECTANGLE" */}
                <Flex
                  style={{
                    height: "8px",
                    flex: "1 0 0",
                    background: "var(--color-primary-colorprimary, #1597f4)",
                  }}
                >
                  {/* name="item" id=204:11618 type=RECTANGLE */}
                  <></>
                </Flex>
                {/* name="item" id="204:11619" type="RECTANGLE" */}
                <Flex
                  style={{
                    height: "8px",
                    flex: "1 0 0",
                    background:
                      "var(--color-neutral-fill-colorfillsecondary, rgba(0, 0, 0, 0.06))",
                  }}
                >
                  {/* name="item" id=204:11619 type=RECTANGLE */}
                  <></>
                </Flex>
                {/* name="item" id="204:11620" type="RECTANGLE" */}
                <Flex
                  style={{
                    height: "8px",
                    flex: "1 0 0",
                    background:
                      "var(--color-neutral-fill-colorfillsecondary, rgba(0, 0, 0, 0.06))",
                  }}
                >
                  {/* name="item" id=204:11620 type=RECTANGLE */}
                  <></>
                </Flex>
              </div>
            </div>
          </>
        )}
      {/* id="204:11622" */}
      {`${size}` === `default` &&
        `${status}` === `error` &&
        `${showInfo}` === `false` && (
          <>
            {/* name="size=default, status=error, show info=false" id="204:11622" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "106px",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
              }}
            >
              {/* name="Progress Steps Item" id="204:11623" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "2px",
                  flex: "1 0 0",
                }}
              >
                {/* name="item" id="204:11624" type="RECTANGLE" */}
                <Flex
                  style={{
                    height: "8px",
                    flex: "1 0 0",
                    background: "var(--color-error-colorerror, #dc3812)",
                  }}
                >
                  {/* name="item" id=204:11624 type=RECTANGLE */}
                  <></>
                </Flex>
                {/* name="item" id="204:11625" type="RECTANGLE" */}
                <Flex
                  style={{
                    height: "8px",
                    flex: "1 0 0",
                    background: "var(--color-error-colorerror, #dc3812)",
                  }}
                >
                  {/* name="item" id=204:11625 type=RECTANGLE */}
                  <></>
                </Flex>
                {/* name="item" id="204:11626" type="RECTANGLE" */}
                <Flex
                  style={{
                    height: "8px",
                    flex: "1 0 0",
                    background:
                      "var(--color-neutral-fill-colorfillsecondary, rgba(0, 0, 0, 0.06))",
                  }}
                >
                  {/* name="item" id=204:11626 type=RECTANGLE */}
                  <></>
                </Flex>
                {/* name="item" id="204:11627" type="RECTANGLE" */}
                <Flex
                  style={{
                    height: "8px",
                    flex: "1 0 0",
                    background:
                      "var(--color-neutral-fill-colorfillsecondary, rgba(0, 0, 0, 0.06))",
                  }}
                >
                  {/* name="item" id=204:11627 type=RECTANGLE */}
                  <></>
                </Flex>
              </div>
            </div>
          </>
        )}
      {/* id="204:11629" */}
      {`${size}` === `default` &&
        `${status}` === `success` &&
        `${showInfo}` === `false` && (
          <>
            {/* name="size=default, status=success, show info=false" id="204:11629" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "106px",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
              }}
            >
              {/* name="Progress Steps Item" id="204:11630" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "2px",
                  flex: "1 0 0",
                }}
              >
                {/* name="item" id="204:11631" type="RECTANGLE" */}
                <Flex
                  style={{
                    height: "8px",
                    flex: "1 0 0",
                    background: "var(--color-success-colorsuccess, #11a620)",
                  }}
                >
                  {/* name="item" id=204:11631 type=RECTANGLE */}
                  <></>
                </Flex>
                {/* name="item" id="204:11632" type="RECTANGLE" */}
                <Flex
                  style={{
                    height: "8px",
                    flex: "1 0 0",
                    background: "var(--color-success-colorsuccess, #11a620)",
                  }}
                >
                  {/* name="item" id=204:11632 type=RECTANGLE */}
                  <></>
                </Flex>
                {/* name="item" id="204:11633" type="RECTANGLE" */}
                <Flex
                  style={{
                    height: "8px",
                    flex: "1 0 0",
                    background: "var(--color-success-colorsuccess, #11a620)",
                  }}
                >
                  {/* name="item" id=204:11633 type=RECTANGLE */}
                  <></>
                </Flex>
                {/* name="item" id="204:11634" type="RECTANGLE" */}
                <Flex
                  style={{
                    height: "8px",
                    flex: "1 0 0",
                    background: "var(--color-success-colorsuccess, #11a620)",
                  }}
                >
                  {/* name="item" id=204:11634 type=RECTANGLE */}
                  <></>
                </Flex>
              </div>
            </div>
          </>
        )}
    </>
  )
}
