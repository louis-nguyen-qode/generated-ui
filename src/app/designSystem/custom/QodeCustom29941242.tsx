// id="2994:1242"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom20242575 } from "@designSystem/custom/QodeCustom20242575"
import { QodeCustom20242595 } from "@designSystem/custom/QodeCustom20242595"
import { QodeCustom20242607 } from "@designSystem/custom/QodeCustom20242607"
import { QodeCustom20242610 } from "@designSystem/custom/QodeCustom20242610"
import { QodeCustom20242623 } from "@designSystem/custom/QodeCustom20242623"
import { QodeCustom20242626 } from "@designSystem/custom/QodeCustom20242626"

export interface QodeCustom29941242Props {
  items?: "2" | "3" | "4" | "5" | "6"
  size?: "default" | "large" | "small"
  type?: "Text" | "icon"
}

export const QodeCustom29941242: React.FC<
  QodeCustom29941242Props & { style?: CSSProperties }
> = ({ items = "2", size = "default", type = "Text", ...rest }) => {
  return (
    <>
      {/* name="segmentedVertical" id="2994:1242" type="COMPONENT_SET" */}
      {/* id="2994:1243" */}
      {`${items}` === `2` &&
        `${size}` === `default` &&
        `${type}` === `Text` && (
          <>
            {/* name="items=2, size=default, type=Text" id="2994:1243" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                padding: "2px",
                flexDirection: "column",
                alignItems: "center",
                borderRadius: "var(--border-radius-small, 4px)",
                background:
                  "var(--color-neutral-fill-colorfilltertiary, rgba(0, 0, 0, 0.04))",
              }}
            >
              {/* name=".segmented__item" id="2994:1244" type="INSTANCE" */}
              <QodeCustom20242575
                style={{
                  display: "flex",
                  height: "28px",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  borderRadius: "var(--border-radius-small, 4px)",
                  background: "var(--background-bg-white, #fff)",
                  boxShadow:
                    "0px 2px 4px 0px rgba(0, 0, 0, 0.02), 0px 1px 6px -1px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.03)",
                }}
                {...{
                  title: "Item",
                  showTitle: true,
                  size: "default",
                  active: true,
                  disabled: false,
                }}
              />
              {/* name=".segmented__item" id="2994:1245" type="INSTANCE" */}
              <QodeCustom20242595
                style={{
                  display: "flex",
                  height: "28px",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  borderRadius: "var(--border-radius-small, 4px)",
                }}
                {...{
                  title: "Item",
                  showTitle: true,
                  size: "default",
                  active: false,
                  disabled: false,
                }}
              />
            </div>
          </>
        )}
      {/* id="2994:1732" */}
      {`${items}` === `2` &&
        `${size}` === `default` &&
        `${type}` === `icon` && (
          <>
            {/* name="items=2, size=default, type=icon" id="2994:1732" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                padding: "2px",
                flexDirection: "column",
                alignItems: "center",
                borderRadius: "var(--border-radius-small, 4px)",
                background:
                  "var(--color-neutral-fill-colorfilltertiary, rgba(0, 0, 0, 0.04))",
              }}
            >
              {/* name=".segmented__item" id="2994:1733" type="INSTANCE" */}
              <QodeCustom20242575
                style={{
                  display: "flex",
                  height: "28px",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  borderRadius: "var(--border-radius-small, 4px)",
                  background: "var(--background-bg-white, #fff)",
                  boxShadow:
                    "0px 2px 4px 0px rgba(0, 0, 0, 0.02), 0px 1px 6px -1px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.03)",
                }}
                {...{
                  title: "Item",
                  showIcon: true,
                  size: "default",
                  active: true,
                  disabled: false,
                }}
              />
              {/* name=".segmented__item" id="2994:1734" type="INSTANCE" */}
              <QodeCustom20242595
                style={{
                  display: "flex",
                  height: "28px",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  borderRadius: "var(--border-radius-small, 4px)",
                }}
                {...{
                  title: "Item",
                  showIcon: true,
                  size: "default",
                  active: false,
                  disabled: false,
                }}
              />
            </div>
          </>
        )}
      {/* id="2994:1246" */}
      {`${items}` === `3` &&
        `${size}` === `default` &&
        `${type}` === `Text` && (
          <>
            {/* name="items=3, size=default, type=Text" id="2994:1246" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                padding: "2px",
                flexDirection: "column",
                alignItems: "center",
                borderRadius: "var(--border-radius-small, 4px)",
                background:
                  "var(--color-neutral-fill-colorfilltertiary, rgba(0, 0, 0, 0.04))",
              }}
            >
              {/* name=".segmented__item" id="2994:1247" type="INSTANCE" */}
              <QodeCustom20242575
                style={{
                  display: "flex",
                  height: "28px",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  borderRadius: "var(--border-radius-small, 4px)",
                  background: "var(--background-bg-white, #fff)",
                  boxShadow:
                    "0px 2px 4px 0px rgba(0, 0, 0, 0.02), 0px 1px 6px -1px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.03)",
                }}
                {...{
                  title: "Item",
                  showTitle: true,
                  size: "default",
                  active: true,
                  disabled: false,
                }}
              />
              {/* name=".segmented__item" id="2994:1248" type="INSTANCE" */}
              <QodeCustom20242595
                style={{
                  display: "flex",
                  height: "28px",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  borderRadius: "var(--border-radius-small, 4px)",
                }}
                {...{
                  title: "Item",
                  showTitle: true,
                  size: "default",
                  active: false,
                  disabled: false,
                }}
              />
              {/* name=".segmented__item" id="2994:1249" type="INSTANCE" */}
              <QodeCustom20242595
                style={{
                  display: "flex",
                  height: "28px",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  borderRadius: "var(--border-radius-small, 4px)",
                }}
                {...{
                  title: "Item",
                  showTitle: true,
                  size: "default",
                  active: false,
                  disabled: false,
                }}
              />
            </div>
          </>
        )}
      {/* id="2994:1735" */}
      {`${items}` === `3` &&
        `${size}` === `default` &&
        `${type}` === `icon` && (
          <>
            {/* name="items=3, size=default, type=icon" id="2994:1735" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                padding: "2px",
                flexDirection: "column",
                alignItems: "center",
                borderRadius: "var(--border-radius-small, 4px)",
                background:
                  "var(--color-neutral-fill-colorfilltertiary, rgba(0, 0, 0, 0.04))",
              }}
            >
              {/* name=".segmented__item" id="2994:1736" type="INSTANCE" */}
              <QodeCustom20242575
                style={{
                  display: "flex",
                  height: "28px",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  borderRadius: "var(--border-radius-small, 4px)",
                  background: "var(--background-bg-white, #fff)",
                  boxShadow:
                    "0px 2px 4px 0px rgba(0, 0, 0, 0.02), 0px 1px 6px -1px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.03)",
                }}
                {...{
                  title: "Item",
                  showIcon: true,
                  size: "default",
                  active: true,
                  disabled: false,
                }}
              />
              {/* name=".segmented__item" id="2994:1737" type="INSTANCE" */}
              <QodeCustom20242595
                style={{
                  display: "flex",
                  height: "28px",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  borderRadius: "var(--border-radius-small, 4px)",
                }}
                {...{
                  title: "Item",
                  showIcon: true,
                  size: "default",
                  active: false,
                  disabled: false,
                }}
              />
              {/* name=".segmented__item" id="2994:1738" type="INSTANCE" */}
              <QodeCustom20242595
                style={{
                  display: "flex",
                  height: "28px",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  borderRadius: "var(--border-radius-small, 4px)",
                }}
                {...{
                  title: "Item",
                  showIcon: true,
                  size: "default",
                  active: false,
                  disabled: false,
                }}
              />
            </div>
          </>
        )}
      {/* id="2994:1250" */}
      {`${items}` === `4` &&
        `${size}` === `default` &&
        `${type}` === `Text` && (
          <>
            {/* name="items=4, size=default, type=Text" id="2994:1250" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                padding: "2px",
                flexDirection: "column",
                alignItems: "center",
                borderRadius: "var(--border-radius-small, 4px)",
                background:
                  "var(--color-neutral-fill-colorfilltertiary, rgba(0, 0, 0, 0.04))",
              }}
            >
              {/* name=".segmented__item" id="2994:1251" type="INSTANCE" */}
              <QodeCustom20242575
                style={{
                  display: "flex",
                  height: "28px",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  borderRadius: "var(--border-radius-small, 4px)",
                  background: "var(--background-bg-white, #fff)",
                  boxShadow:
                    "0px 2px 4px 0px rgba(0, 0, 0, 0.02), 0px 1px 6px -1px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.03)",
                }}
                {...{
                  title: "Item",
                  showTitle: true,
                  size: "default",
                  active: true,
                  disabled: false,
                }}
              />
              {/* name=".segmented__item" id="2994:1252" type="INSTANCE" */}
              <QodeCustom20242595
                style={{
                  display: "flex",
                  height: "28px",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  borderRadius: "var(--border-radius-small, 4px)",
                }}
                {...{
                  title: "Item",
                  showTitle: true,
                  size: "default",
                  active: false,
                  disabled: false,
                }}
              />
              {/* name=".segmented__item" id="2994:1253" type="INSTANCE" */}
              <QodeCustom20242595
                style={{
                  display: "flex",
                  height: "28px",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  borderRadius: "var(--border-radius-small, 4px)",
                }}
                {...{
                  title: "Item",
                  showTitle: true,
                  size: "default",
                  active: false,
                  disabled: false,
                }}
              />
              {/* name=".segmented__item" id="2994:1254" type="INSTANCE" */}
              <QodeCustom20242595
                style={{
                  display: "flex",
                  height: "28px",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  borderRadius: "var(--border-radius-small, 4px)",
                }}
                {...{
                  title: "Item",
                  showTitle: true,
                  size: "default",
                  active: false,
                  disabled: false,
                }}
              />
            </div>
          </>
        )}
      {/* id="2994:1739" */}
      {`${items}` === `4` &&
        `${size}` === `default` &&
        `${type}` === `icon` && (
          <>
            {/* name="items=4, size=default, type=icon" id="2994:1739" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                padding: "2px",
                flexDirection: "column",
                alignItems: "center",
                borderRadius: "var(--border-radius-small, 4px)",
                background:
                  "var(--color-neutral-fill-colorfilltertiary, rgba(0, 0, 0, 0.04))",
              }}
            >
              {/* name=".segmented__item" id="2994:1740" type="INSTANCE" */}
              <QodeCustom20242575
                style={{
                  display: "flex",
                  height: "28px",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  borderRadius: "var(--border-radius-small, 4px)",
                  background: "var(--background-bg-white, #fff)",
                  boxShadow:
                    "0px 2px 4px 0px rgba(0, 0, 0, 0.02), 0px 1px 6px -1px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.03)",
                }}
                {...{
                  title: "Item",
                  showIcon: true,
                  size: "default",
                  active: true,
                  disabled: false,
                }}
              />
              {/* name=".segmented__item" id="2994:1741" type="INSTANCE" */}
              <QodeCustom20242595
                style={{
                  display: "flex",
                  height: "28px",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  borderRadius: "var(--border-radius-small, 4px)",
                }}
                {...{
                  title: "Item",
                  showIcon: true,
                  size: "default",
                  active: false,
                  disabled: false,
                }}
              />
              {/* name=".segmented__item" id="2994:1742" type="INSTANCE" */}
              <QodeCustom20242595
                style={{
                  display: "flex",
                  height: "28px",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  borderRadius: "var(--border-radius-small, 4px)",
                }}
                {...{
                  title: "Item",
                  showIcon: true,
                  size: "default",
                  active: false,
                  disabled: false,
                }}
              />
              {/* name=".segmented__item" id="2994:1743" type="INSTANCE" */}
              <QodeCustom20242595
                style={{
                  display: "flex",
                  height: "28px",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  borderRadius: "var(--border-radius-small, 4px)",
                }}
                {...{
                  title: "Item",
                  showIcon: true,
                  size: "default",
                  active: false,
                  disabled: false,
                }}
              />
            </div>
          </>
        )}
      {/* id="2994:1255" */}
      {`${items}` === `5` &&
        `${size}` === `default` &&
        `${type}` === `Text` && (
          <>
            {/* name="items=5, size=default, type=Text" id="2994:1255" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                padding: "2px",
                flexDirection: "column",
                alignItems: "center",
                borderRadius: "var(--border-radius-small, 4px)",
                background:
                  "var(--color-neutral-fill-colorfilltertiary, rgba(0, 0, 0, 0.04))",
              }}
            >
              {/* name=".segmented__item" id="2994:1256" type="INSTANCE" */}
              <QodeCustom20242575
                style={{
                  display: "flex",
                  height: "28px",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  borderRadius: "var(--border-radius-small, 4px)",
                  background: "var(--background-bg-white, #fff)",
                  boxShadow:
                    "0px 2px 4px 0px rgba(0, 0, 0, 0.02), 0px 1px 6px -1px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.03)",
                }}
                {...{
                  title: "Item",
                  showTitle: true,
                  size: "default",
                  active: true,
                  disabled: false,
                }}
              />
              {/* name=".segmented__item" id="2994:1257" type="INSTANCE" */}
              <QodeCustom20242595
                style={{
                  display: "flex",
                  height: "28px",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  borderRadius: "var(--border-radius-small, 4px)",
                }}
                {...{
                  title: "Item",
                  showTitle: true,
                  size: "default",
                  active: false,
                  disabled: false,
                }}
              />
              {/* name=".segmented__item" id="2994:1258" type="INSTANCE" */}
              <QodeCustom20242595
                style={{
                  display: "flex",
                  height: "28px",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  borderRadius: "var(--border-radius-small, 4px)",
                }}
                {...{
                  title: "Item",
                  showTitle: true,
                  size: "default",
                  active: false,
                  disabled: false,
                }}
              />
              {/* name=".segmented__item" id="2994:1259" type="INSTANCE" */}
              <QodeCustom20242595
                style={{
                  display: "flex",
                  height: "28px",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  borderRadius: "var(--border-radius-small, 4px)",
                }}
                {...{
                  title: "Item",
                  showTitle: true,
                  size: "default",
                  active: false,
                  disabled: false,
                }}
              />
              {/* name=".segmented__item" id="2994:1260" type="INSTANCE" */}
              <QodeCustom20242595
                style={{
                  display: "flex",
                  height: "28px",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  borderRadius: "var(--border-radius-small, 4px)",
                }}
                {...{
                  title: "Item",
                  showTitle: true,
                  size: "default",
                  active: false,
                  disabled: false,
                }}
              />
            </div>
          </>
        )}
      {/* id="2994:1744" */}
      {`${items}` === `5` &&
        `${size}` === `default` &&
        `${type}` === `icon` && (
          <>
            {/* name="items=5, size=default, type=icon" id="2994:1744" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                padding: "2px",
                flexDirection: "column",
                alignItems: "center",
                borderRadius: "var(--border-radius-small, 4px)",
                background:
                  "var(--color-neutral-fill-colorfilltertiary, rgba(0, 0, 0, 0.04))",
              }}
            >
              {/* name=".segmented__item" id="2994:1745" type="INSTANCE" */}
              <QodeCustom20242575
                style={{
                  display: "flex",
                  height: "28px",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  borderRadius: "var(--border-radius-small, 4px)",
                  background: "var(--background-bg-white, #fff)",
                  boxShadow:
                    "0px 2px 4px 0px rgba(0, 0, 0, 0.02), 0px 1px 6px -1px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.03)",
                }}
                {...{
                  title: "Item",
                  showIcon: true,
                  size: "default",
                  active: true,
                  disabled: false,
                }}
              />
              {/* name=".segmented__item" id="2994:1746" type="INSTANCE" */}
              <QodeCustom20242595
                style={{
                  display: "flex",
                  height: "28px",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  borderRadius: "var(--border-radius-small, 4px)",
                }}
                {...{
                  title: "Item",
                  showIcon: true,
                  size: "default",
                  active: false,
                  disabled: false,
                }}
              />
              {/* name=".segmented__item" id="2994:1747" type="INSTANCE" */}
              <QodeCustom20242595
                style={{
                  display: "flex",
                  height: "28px",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  borderRadius: "var(--border-radius-small, 4px)",
                }}
                {...{
                  title: "Item",
                  showIcon: true,
                  size: "default",
                  active: false,
                  disabled: false,
                }}
              />
              {/* name=".segmented__item" id="2994:1748" type="INSTANCE" */}
              <QodeCustom20242595
                style={{
                  display: "flex",
                  height: "28px",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  borderRadius: "var(--border-radius-small, 4px)",
                }}
                {...{
                  title: "Item",
                  showIcon: true,
                  size: "default",
                  active: false,
                  disabled: false,
                }}
              />
              {/* name=".segmented__item" id="2994:1749" type="INSTANCE" */}
              <QodeCustom20242595
                style={{
                  display: "flex",
                  height: "28px",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  borderRadius: "var(--border-radius-small, 4px)",
                }}
                {...{
                  title: "Item",
                  showIcon: true,
                  size: "default",
                  active: false,
                  disabled: false,
                }}
              />
            </div>
          </>
        )}
      {/* id="2994:1261" */}
      {`${items}` === `6` &&
        `${size}` === `default` &&
        `${type}` === `Text` && (
          <>
            {/* name="items=6, size=default, type=Text" id="2994:1261" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                padding: "2px",
                flexDirection: "column",
                alignItems: "center",
                borderRadius: "var(--border-radius-small, 4px)",
                background:
                  "var(--color-neutral-fill-colorfilltertiary, rgba(0, 0, 0, 0.04))",
              }}
            >
              {/* name=".segmented__item" id="2994:1262" type="INSTANCE" */}
              <QodeCustom20242575
                style={{
                  display: "flex",
                  height: "28px",
                  padding: "0px var(--size-padding-paddingsm, 12px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  borderRadius: "var(--border-radius-small, 4px)",
                  background: "var(--background-bg-white, #fff)",
                  boxShadow:
                    "0px 2px 4px 0px rgba(0, 0, 0, 0.02), 0px 1px 6px -1px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.03)",
                }}
                {...{
                  title: "Item",
                  showTitle: true,
                  size: "default",
                  active: true,
                  disabled: false,
                }}
              />
              {/* name=".segmented__item" id="2994:1263" type="INSTANCE" */}
              <QodeCustom20242595
                style={{
                  display: "flex",
                  height: "28px",
                  padding: "0px var(--size-padding-paddingsm, 12px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  borderRadius: "var(--border-radius-small, 4px)",
                }}
                {...{
                  title: "Item",
                  showTitle: true,
                  size: "default",
                  active: false,
                  disabled: false,
                }}
              />
              {/* name=".segmented__item" id="2994:1264" type="INSTANCE" */}
              <QodeCustom20242595
                style={{
                  display: "flex",
                  height: "28px",
                  padding: "0px var(--size-padding-paddingsm, 12px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  borderRadius: "var(--border-radius-small, 4px)",
                }}
                {...{
                  title: "Item",
                  showTitle: true,
                  size: "default",
                  active: false,
                  disabled: false,
                }}
              />
              {/* name=".segmented__item" id="2994:1265" type="INSTANCE" */}
              <QodeCustom20242595
                style={{
                  display: "flex",
                  height: "28px",
                  padding: "0px var(--size-padding-paddingsm, 12px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  borderRadius: "var(--border-radius-small, 4px)",
                }}
                {...{
                  title: "Item",
                  showTitle: true,
                  size: "default",
                  active: false,
                  disabled: false,
                }}
              />
              {/* name=".segmented__item" id="2994:1266" type="INSTANCE" */}
              <QodeCustom20242595
                style={{
                  display: "flex",
                  height: "28px",
                  padding: "0px var(--size-padding-paddingsm, 12px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  borderRadius: "var(--border-radius-small, 4px)",
                }}
                {...{
                  title: "Item",
                  showTitle: true,
                  size: "default",
                  active: false,
                  disabled: false,
                }}
              />
              {/* name=".segmented__item" id="2994:1267" type="INSTANCE" */}
              <QodeCustom20242595
                style={{
                  display: "flex",
                  height: "28px",
                  padding: "0px var(--size-padding-paddingsm, 12px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  borderRadius: "var(--border-radius-small, 4px)",
                }}
                {...{
                  title: "Item",
                  showTitle: true,
                  size: "default",
                  active: false,
                  disabled: false,
                }}
              />
            </div>
          </>
        )}
      {/* id="2994:1750" */}
      {`${items}` === `6` &&
        `${size}` === `default` &&
        `${type}` === `icon` && (
          <>
            {/* name="items=6, size=default, type=icon" id="2994:1750" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                padding: "2px",
                flexDirection: "column",
                alignItems: "center",
                borderRadius: "var(--border-radius-small, 4px)",
                background:
                  "var(--color-neutral-fill-colorfilltertiary, rgba(0, 0, 0, 0.04))",
              }}
            >
              {/* name=".segmented__item" id="2994:1751" type="INSTANCE" */}
              <QodeCustom20242575
                style={{
                  display: "flex",
                  height: "28px",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  borderRadius: "var(--border-radius-small, 4px)",
                  background: "var(--background-bg-white, #fff)",
                  boxShadow:
                    "0px 2px 4px 0px rgba(0, 0, 0, 0.02), 0px 1px 6px -1px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.03)",
                }}
                {...{
                  title: "Item",
                  showIcon: true,
                  size: "default",
                  active: true,
                  disabled: false,
                }}
              />
              {/* name=".segmented__item" id="2994:1752" type="INSTANCE" */}
              <QodeCustom20242595
                style={{
                  display: "flex",
                  height: "28px",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  borderRadius: "var(--border-radius-small, 4px)",
                }}
                {...{
                  title: "Item",
                  showIcon: true,
                  size: "default",
                  active: false,
                  disabled: false,
                }}
              />
              {/* name=".segmented__item" id="2994:1753" type="INSTANCE" */}
              <QodeCustom20242595
                style={{
                  display: "flex",
                  height: "28px",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  borderRadius: "var(--border-radius-small, 4px)",
                }}
                {...{
                  title: "Item",
                  showIcon: true,
                  size: "default",
                  active: false,
                  disabled: false,
                }}
              />
              {/* name=".segmented__item" id="2994:1754" type="INSTANCE" */}
              <QodeCustom20242595
                style={{
                  display: "flex",
                  height: "28px",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  borderRadius: "var(--border-radius-small, 4px)",
                }}
                {...{
                  title: "Item",
                  showIcon: true,
                  size: "default",
                  active: false,
                  disabled: false,
                }}
              />
              {/* name=".segmented__item" id="2994:1755" type="INSTANCE" */}
              <QodeCustom20242595
                style={{
                  display: "flex",
                  height: "28px",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  borderRadius: "var(--border-radius-small, 4px)",
                }}
                {...{
                  title: "Item",
                  showIcon: true,
                  size: "default",
                  active: false,
                  disabled: false,
                }}
              />
              {/* name=".segmented__item" id="2994:1756" type="INSTANCE" */}
              <QodeCustom20242595
                style={{
                  display: "flex",
                  height: "28px",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  borderRadius: "var(--border-radius-small, 4px)",
                }}
                {...{
                  title: "Item",
                  showIcon: true,
                  size: "default",
                  active: false,
                  disabled: false,
                }}
              />
            </div>
          </>
        )}
      {/* id="2994:1268" */}
      {`${items}` === `2` && `${size}` === `large` && `${type}` === `Text` && (
        <>
          {/* name="items=2, size=large, type=Text" id="2994:1268" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              padding: "2px",
              flexDirection: "column",
              alignItems: "center",
              borderRadius: "var(--border-radius-small, 4px)",
              background:
                "var(--color-neutral-fill-colorfilltertiary, rgba(0, 0, 0, 0.04))",
            }}
          >
            {/* name=".segmented__item" id="2994:1269" type="INSTANCE" */}
            <QodeCustom20242607
              style={{
                display: "flex",
                height: "36px",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                borderRadius: "var(--border-radius-small, 4px)",
                background: "var(--background-bg-white, #fff)",
                boxShadow:
                  "0px 2px 4px 0px rgba(0, 0, 0, 0.02), 0px 1px 6px -1px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.03)",
              }}
              {...{
                title: "Item",
                showTitle: true,
                size: "large",
                active: true,
                disabled: false,
              }}
            />
            {/* name=".segmented__item" id="2994:1270" type="INSTANCE" */}
            <QodeCustom20242610
              style={{
                display: "flex",
                height: "36px",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                borderRadius: "var(--border-radius-small, 4px)",
              }}
              {...{
                title: "Item",
                showTitle: true,
                size: "large",
                active: false,
                disabled: false,
              }}
            />
          </div>
        </>
      )}
      {/* id="2994:1757" */}
      {`${items}` === `2` && `${size}` === `large` && `${type}` === `icon` && (
        <>
          {/* name="items=2, size=large, type=icon" id="2994:1757" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              padding: "2px",
              flexDirection: "column",
              alignItems: "center",
              borderRadius: "var(--border-radius-small, 4px)",
              background:
                "var(--color-neutral-fill-colorfilltertiary, rgba(0, 0, 0, 0.04))",
            }}
          >
            {/* name=".segmented__item" id="2994:1758" type="INSTANCE" */}
            <QodeCustom20242607
              style={{
                display: "flex",
                height: "36px",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                borderRadius: "var(--border-radius-small, 4px)",
                background: "var(--background-bg-white, #fff)",
                boxShadow:
                  "0px 2px 4px 0px rgba(0, 0, 0, 0.02), 0px 1px 6px -1px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.03)",
              }}
              {...{
                title: "Item",
                showIcon: true,
                size: "large",
                active: true,
                disabled: false,
              }}
            />
            {/* name=".segmented__item" id="2994:1759" type="INSTANCE" */}
            <QodeCustom20242610
              style={{
                display: "flex",
                height: "36px",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                borderRadius: "var(--border-radius-small, 4px)",
              }}
              {...{
                title: "Item",
                showIcon: true,
                size: "large",
                active: false,
                disabled: false,
              }}
            />
          </div>
        </>
      )}
      {/* id="2994:1271" */}
      {`${items}` === `3` && `${size}` === `large` && `${type}` === `Text` && (
        <>
          {/* name="items=3, size=large, type=Text" id="2994:1271" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              padding: "2px",
              flexDirection: "column",
              alignItems: "center",
              borderRadius: "var(--border-radius-small, 4px)",
              background:
                "var(--color-neutral-fill-colorfilltertiary, rgba(0, 0, 0, 0.04))",
            }}
          >
            {/* name=".segmented__item" id="2994:1272" type="INSTANCE" */}
            <QodeCustom20242607
              style={{
                display: "flex",
                height: "36px",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                borderRadius: "var(--border-radius-small, 4px)",
                background: "var(--background-bg-white, #fff)",
                boxShadow:
                  "0px 2px 4px 0px rgba(0, 0, 0, 0.02), 0px 1px 6px -1px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.03)",
              }}
              {...{
                title: "Item",
                showTitle: true,
                size: "large",
                active: true,
                disabled: false,
              }}
            />
            {/* name=".segmented__item" id="2994:1273" type="INSTANCE" */}
            <QodeCustom20242610
              style={{
                display: "flex",
                height: "36px",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                borderRadius: "var(--border-radius-small, 4px)",
              }}
              {...{
                title: "Item",
                showTitle: true,
                size: "large",
                active: false,
                disabled: false,
              }}
            />
            {/* name=".segmented__item" id="2994:1274" type="INSTANCE" */}
            <QodeCustom20242610
              style={{
                display: "flex",
                height: "36px",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                borderRadius: "var(--border-radius-small, 4px)",
              }}
              {...{
                title: "Item",
                showTitle: true,
                size: "large",
                active: false,
                disabled: false,
              }}
            />
          </div>
        </>
      )}
      {/* id="2994:1760" */}
      {`${items}` === `3` && `${size}` === `large` && `${type}` === `icon` && (
        <>
          {/* name="items=3, size=large, type=icon" id="2994:1760" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              padding: "2px",
              flexDirection: "column",
              alignItems: "center",
              borderRadius: "var(--border-radius-small, 4px)",
              background:
                "var(--color-neutral-fill-colorfilltertiary, rgba(0, 0, 0, 0.04))",
            }}
          >
            {/* name=".segmented__item" id="2994:1761" type="INSTANCE" */}
            <QodeCustom20242607
              style={{
                display: "flex",
                height: "36px",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                borderRadius: "var(--border-radius-small, 4px)",
                background: "var(--background-bg-white, #fff)",
                boxShadow:
                  "0px 2px 4px 0px rgba(0, 0, 0, 0.02), 0px 1px 6px -1px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.03)",
              }}
              {...{
                title: "Item",
                showIcon: true,
                size: "large",
                active: true,
                disabled: false,
              }}
            />
            {/* name=".segmented__item" id="2994:1762" type="INSTANCE" */}
            <QodeCustom20242610
              style={{
                display: "flex",
                height: "36px",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                borderRadius: "var(--border-radius-small, 4px)",
              }}
              {...{
                title: "Item",
                showIcon: true,
                size: "large",
                active: false,
                disabled: false,
              }}
            />
            {/* name=".segmented__item" id="2994:1763" type="INSTANCE" */}
            <QodeCustom20242610
              style={{
                display: "flex",
                height: "36px",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                borderRadius: "var(--border-radius-small, 4px)",
              }}
              {...{
                title: "Item",
                showIcon: true,
                size: "large",
                active: false,
                disabled: false,
              }}
            />
          </div>
        </>
      )}
      {/* id="2994:1275" */}
      {`${items}` === `4` && `${size}` === `large` && `${type}` === `Text` && (
        <>
          {/* name="items=4, size=large, type=Text" id="2994:1275" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              padding: "2px",
              flexDirection: "column",
              alignItems: "center",
              borderRadius: "var(--border-radius-small, 4px)",
              background:
                "var(--color-neutral-fill-colorfilltertiary, rgba(0, 0, 0, 0.04))",
            }}
          >
            {/* name=".segmented__item" id="2994:1276" type="INSTANCE" */}
            <QodeCustom20242607
              style={{
                display: "flex",
                height: "36px",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                borderRadius: "var(--border-radius-small, 4px)",
                background: "var(--background-bg-white, #fff)",
                boxShadow:
                  "0px 2px 4px 0px rgba(0, 0, 0, 0.02), 0px 1px 6px -1px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.03)",
              }}
              {...{
                title: "Item",
                showTitle: true,
                size: "large",
                active: true,
                disabled: false,
              }}
            />
            {/* name=".segmented__item" id="2994:1277" type="INSTANCE" */}
            <QodeCustom20242610
              style={{
                display: "flex",
                height: "36px",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                borderRadius: "var(--border-radius-small, 4px)",
              }}
              {...{
                title: "Item",
                showTitle: true,
                size: "large",
                active: false,
                disabled: false,
              }}
            />
            {/* name=".segmented__item" id="2994:1278" type="INSTANCE" */}
            <QodeCustom20242610
              style={{
                display: "flex",
                height: "36px",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                borderRadius: "var(--border-radius-small, 4px)",
              }}
              {...{
                title: "Item",
                showTitle: true,
                size: "large",
                active: false,
                disabled: false,
              }}
            />
            {/* name=".segmented__item" id="2994:1279" type="INSTANCE" */}
            <QodeCustom20242610
              style={{
                display: "flex",
                height: "36px",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                borderRadius: "var(--border-radius-small, 4px)",
              }}
              {...{
                title: "Item",
                showTitle: true,
                size: "large",
                active: false,
                disabled: false,
              }}
            />
          </div>
        </>
      )}
      {/* id="2994:1764" */}
      {`${items}` === `4` && `${size}` === `large` && `${type}` === `icon` && (
        <>
          {/* name="items=4, size=large, type=icon" id="2994:1764" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              padding: "2px",
              flexDirection: "column",
              alignItems: "center",
              borderRadius: "var(--border-radius-small, 4px)",
              background:
                "var(--color-neutral-fill-colorfilltertiary, rgba(0, 0, 0, 0.04))",
            }}
          >
            {/* name=".segmented__item" id="2994:1765" type="INSTANCE" */}
            <QodeCustom20242607
              style={{
                display: "flex",
                height: "36px",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                borderRadius: "var(--border-radius-small, 4px)",
                background: "var(--background-bg-white, #fff)",
                boxShadow:
                  "0px 2px 4px 0px rgba(0, 0, 0, 0.02), 0px 1px 6px -1px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.03)",
              }}
              {...{
                title: "Item",
                showIcon: true,
                size: "large",
                active: true,
                disabled: false,
              }}
            />
            {/* name=".segmented__item" id="2994:1766" type="INSTANCE" */}
            <QodeCustom20242610
              style={{
                display: "flex",
                height: "36px",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                borderRadius: "var(--border-radius-small, 4px)",
              }}
              {...{
                title: "Item",
                showIcon: true,
                size: "large",
                active: false,
                disabled: false,
              }}
            />
            {/* name=".segmented__item" id="2994:1767" type="INSTANCE" */}
            <QodeCustom20242610
              style={{
                display: "flex",
                height: "36px",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                borderRadius: "var(--border-radius-small, 4px)",
              }}
              {...{
                title: "Item",
                showIcon: true,
                size: "large",
                active: false,
                disabled: false,
              }}
            />
            {/* name=".segmented__item" id="2994:1768" type="INSTANCE" */}
            <QodeCustom20242610
              style={{
                display: "flex",
                height: "36px",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                borderRadius: "var(--border-radius-small, 4px)",
              }}
              {...{
                title: "Item",
                showIcon: true,
                size: "large",
                active: false,
                disabled: false,
              }}
            />
          </div>
        </>
      )}
      {/* id="2994:1280" */}
      {`${items}` === `5` && `${size}` === `large` && `${type}` === `Text` && (
        <>
          {/* name="items=5, size=large, type=Text" id="2994:1280" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              padding: "2px",
              flexDirection: "column",
              alignItems: "center",
              borderRadius: "var(--border-radius-small, 4px)",
              background:
                "var(--color-neutral-fill-colorfilltertiary, rgba(0, 0, 0, 0.04))",
            }}
          >
            {/* name=".segmented__item" id="2994:1281" type="INSTANCE" */}
            <QodeCustom20242607
              style={{
                display: "flex",
                height: "36px",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                borderRadius: "var(--border-radius-small, 4px)",
                background: "var(--background-bg-white, #fff)",
                boxShadow:
                  "0px 2px 4px 0px rgba(0, 0, 0, 0.02), 0px 1px 6px -1px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.03)",
              }}
              {...{
                title: "Item",
                showTitle: true,
                size: "large",
                active: true,
                disabled: false,
              }}
            />
            {/* name=".segmented__item" id="2994:1282" type="INSTANCE" */}
            <QodeCustom20242610
              style={{
                display: "flex",
                height: "36px",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                borderRadius: "var(--border-radius-small, 4px)",
              }}
              {...{
                title: "Item",
                showTitle: true,
                size: "large",
                active: false,
                disabled: false,
              }}
            />
            {/* name=".segmented__item" id="2994:1283" type="INSTANCE" */}
            <QodeCustom20242610
              style={{
                display: "flex",
                height: "36px",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                borderRadius: "var(--border-radius-small, 4px)",
              }}
              {...{
                title: "Item",
                showTitle: true,
                size: "large",
                active: false,
                disabled: false,
              }}
            />
            {/* name=".segmented__item" id="2994:1284" type="INSTANCE" */}
            <QodeCustom20242610
              style={{
                display: "flex",
                height: "36px",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                borderRadius: "var(--border-radius-small, 4px)",
              }}
              {...{
                title: "Item",
                showTitle: true,
                size: "large",
                active: false,
                disabled: false,
              }}
            />
            {/* name=".segmented__item" id="2994:1285" type="INSTANCE" */}
            <QodeCustom20242610
              style={{
                display: "flex",
                height: "36px",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                borderRadius: "var(--border-radius-small, 4px)",
              }}
              {...{
                title: "Item",
                showTitle: true,
                size: "large",
                active: false,
                disabled: false,
              }}
            />
          </div>
        </>
      )}
      {/* id="2994:1769" */}
      {`${items}` === `5` && `${size}` === `large` && `${type}` === `icon` && (
        <>
          {/* name="items=5, size=large, type=icon" id="2994:1769" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              padding: "2px",
              flexDirection: "column",
              alignItems: "center",
              borderRadius: "var(--border-radius-small, 4px)",
              background:
                "var(--color-neutral-fill-colorfilltertiary, rgba(0, 0, 0, 0.04))",
            }}
          >
            {/* name=".segmented__item" id="2994:1770" type="INSTANCE" */}
            <QodeCustom20242607
              style={{
                display: "flex",
                height: "36px",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                borderRadius: "var(--border-radius-small, 4px)",
                background: "var(--background-bg-white, #fff)",
                boxShadow:
                  "0px 2px 4px 0px rgba(0, 0, 0, 0.02), 0px 1px 6px -1px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.03)",
              }}
              {...{
                title: "Item",
                showIcon: true,
                size: "large",
                active: true,
                disabled: false,
              }}
            />
            {/* name=".segmented__item" id="2994:1771" type="INSTANCE" */}
            <QodeCustom20242610
              style={{
                display: "flex",
                height: "36px",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                borderRadius: "var(--border-radius-small, 4px)",
              }}
              {...{
                title: "Item",
                showIcon: true,
                size: "large",
                active: false,
                disabled: false,
              }}
            />
            {/* name=".segmented__item" id="2994:1772" type="INSTANCE" */}
            <QodeCustom20242610
              style={{
                display: "flex",
                height: "36px",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                borderRadius: "var(--border-radius-small, 4px)",
              }}
              {...{
                title: "Item",
                showIcon: true,
                size: "large",
                active: false,
                disabled: false,
              }}
            />
            {/* name=".segmented__item" id="2994:1773" type="INSTANCE" */}
            <QodeCustom20242610
              style={{
                display: "flex",
                height: "36px",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                borderRadius: "var(--border-radius-small, 4px)",
              }}
              {...{
                title: "Item",
                showIcon: true,
                size: "large",
                active: false,
                disabled: false,
              }}
            />
            {/* name=".segmented__item" id="2994:1774" type="INSTANCE" */}
            <QodeCustom20242610
              style={{
                display: "flex",
                height: "36px",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                borderRadius: "var(--border-radius-small, 4px)",
              }}
              {...{
                title: "Item",
                showIcon: true,
                size: "large",
                active: false,
                disabled: false,
              }}
            />
          </div>
        </>
      )}
      {/* id="2994:1286" */}
      {`${items}` === `6` && `${size}` === `large` && `${type}` === `Text` && (
        <>
          {/* name="items=6, size=large, type=Text" id="2994:1286" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              padding: "2px",
              flexDirection: "column",
              alignItems: "center",
              borderRadius: "var(--border-radius-small, 4px)",
              background:
                "var(--color-neutral-fill-colorfilltertiary, rgba(0, 0, 0, 0.04))",
            }}
          >
            {/* name=".segmented__item" id="2994:1287" type="INSTANCE" */}
            <QodeCustom20242607
              style={{
                display: "flex",
                height: "36px",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                borderRadius: "var(--border-radius-small, 4px)",
                background: "var(--background-bg-white, #fff)",
                boxShadow:
                  "0px 2px 4px 0px rgba(0, 0, 0, 0.02), 0px 1px 6px -1px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.03)",
              }}
              {...{
                title: "Item",
                showTitle: true,
                size: "large",
                active: true,
                disabled: false,
              }}
            />
            {/* name=".segmented__item" id="2994:1288" type="INSTANCE" */}
            <QodeCustom20242610
              style={{
                display: "flex",
                height: "36px",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                borderRadius: "var(--border-radius-small, 4px)",
              }}
              {...{
                title: "Item",
                showTitle: true,
                size: "large",
                active: false,
                disabled: false,
              }}
            />
            {/* name=".segmented__item" id="2994:1289" type="INSTANCE" */}
            <QodeCustom20242610
              style={{
                display: "flex",
                height: "36px",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                borderRadius: "var(--border-radius-small, 4px)",
              }}
              {...{
                title: "Item",
                showTitle: true,
                size: "large",
                active: false,
                disabled: false,
              }}
            />
            {/* name=".segmented__item" id="2994:1290" type="INSTANCE" */}
            <QodeCustom20242610
              style={{
                display: "flex",
                height: "36px",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                borderRadius: "var(--border-radius-small, 4px)",
              }}
              {...{
                title: "Item",
                showTitle: true,
                size: "large",
                active: false,
                disabled: false,
              }}
            />
            {/* name=".segmented__item" id="2994:1291" type="INSTANCE" */}
            <QodeCustom20242610
              style={{
                display: "flex",
                height: "36px",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                borderRadius: "var(--border-radius-small, 4px)",
              }}
              {...{
                title: "Item",
                showTitle: true,
                size: "large",
                active: false,
                disabled: false,
              }}
            />
            {/* name=".segmented__item" id="2994:1292" type="INSTANCE" */}
            <QodeCustom20242610
              style={{
                display: "flex",
                height: "36px",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                borderRadius: "var(--border-radius-small, 4px)",
              }}
              {...{
                title: "Item",
                showTitle: true,
                size: "large",
                active: false,
                disabled: false,
              }}
            />
          </div>
        </>
      )}
      {/* id="2994:1775" */}
      {`${items}` === `6` && `${size}` === `large` && `${type}` === `icon` && (
        <>
          {/* name="items=6, size=large, type=icon" id="2994:1775" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              padding: "2px",
              flexDirection: "column",
              alignItems: "center",
              borderRadius: "var(--border-radius-small, 4px)",
              background:
                "var(--color-neutral-fill-colorfilltertiary, rgba(0, 0, 0, 0.04))",
            }}
          >
            {/* name=".segmented__item" id="2994:1776" type="INSTANCE" */}
            <QodeCustom20242607
              style={{
                display: "flex",
                height: "36px",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                borderRadius: "var(--border-radius-small, 4px)",
                background: "var(--background-bg-white, #fff)",
                boxShadow:
                  "0px 2px 4px 0px rgba(0, 0, 0, 0.02), 0px 1px 6px -1px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.03)",
              }}
              {...{
                title: "Item",
                showIcon: true,
                size: "large",
                active: true,
                disabled: false,
              }}
            />
            {/* name=".segmented__item" id="2994:1777" type="INSTANCE" */}
            <QodeCustom20242610
              style={{
                display: "flex",
                height: "36px",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                borderRadius: "var(--border-radius-small, 4px)",
              }}
              {...{
                title: "Item",
                showIcon: true,
                size: "large",
                active: false,
                disabled: false,
              }}
            />
            {/* name=".segmented__item" id="2994:1778" type="INSTANCE" */}
            <QodeCustom20242610
              style={{
                display: "flex",
                height: "36px",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                borderRadius: "var(--border-radius-small, 4px)",
              }}
              {...{
                title: "Item",
                showIcon: true,
                size: "large",
                active: false,
                disabled: false,
              }}
            />
            {/* name=".segmented__item" id="2994:1779" type="INSTANCE" */}
            <QodeCustom20242610
              style={{
                display: "flex",
                height: "36px",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                borderRadius: "var(--border-radius-small, 4px)",
              }}
              {...{
                title: "Item",
                showIcon: true,
                size: "large",
                active: false,
                disabled: false,
              }}
            />
            {/* name=".segmented__item" id="2994:1780" type="INSTANCE" */}
            <QodeCustom20242610
              style={{
                display: "flex",
                height: "36px",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                borderRadius: "var(--border-radius-small, 4px)",
              }}
              {...{
                title: "Item",
                showIcon: true,
                size: "large",
                active: false,
                disabled: false,
              }}
            />
            {/* name=".segmented__item" id="2994:1781" type="INSTANCE" */}
            <QodeCustom20242610
              style={{
                display: "flex",
                height: "36px",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                borderRadius: "var(--border-radius-small, 4px)",
              }}
              {...{
                title: "Item",
                showIcon: true,
                size: "large",
                active: false,
                disabled: false,
              }}
            />
          </div>
        </>
      )}
      {/* id="2994:1293" */}
      {`${items}` === `2` && `${size}` === `small` && `${type}` === `Text` && (
        <>
          {/* name="items=2, size=small, type=Text" id="2994:1293" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              height: "48px",
              padding: "2px",
              flexDirection: "column",
              alignItems: "center",
              flexShrink: "0",
              borderRadius: "var(--border-radius-small, 4px)",
              background:
                "var(--color-neutral-fill-colorfilltertiary, rgba(0, 0, 0, 0.04))",
            }}
          >
            {/* name=".segmented__item" id="2994:1294" type="INSTANCE" */}
            <QodeCustom20242623
              style={{
                display: "flex",
                height: "22px",
                padding: "0px var(--size-padding-paddingxxs, 4px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-small, 4px)",
                background: "var(--background-bg-white, #fff)",
                boxShadow:
                  "0px 2px 4px 0px rgba(0, 0, 0, 0.02), 0px 1px 6px -1px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.03)",
              }}
              {...{
                title: "Item",
                showTitle: true,
                size: "small",
                active: true,
                disabled: false,
              }}
            />
            {/* name=".segmented__item" id="2994:1295" type="INSTANCE" */}
            <QodeCustom20242626
              style={{
                display: "flex",
                height: "22px",
                padding: "0px var(--size-padding-paddingxxs, 4px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-small, 4px)",
              }}
              {...{
                title: "Item",
                showTitle: true,
                size: "small",
                active: false,
                disabled: false,
              }}
            />
          </div>
        </>
      )}
      {/* id="2994:1782" */}
      {`${items}` === `2` && `${size}` === `small` && `${type}` === `icon` && (
        <>
          {/* name="items=2, size=small, type=icon" id="2994:1782" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              height: "48px",
              padding: "2px",
              flexDirection: "column",
              alignItems: "center",
              flexShrink: "0",
              borderRadius: "var(--border-radius-small, 4px)",
              background:
                "var(--color-neutral-fill-colorfilltertiary, rgba(0, 0, 0, 0.04))",
            }}
          >
            {/* name=".segmented__item" id="2994:1783" type="INSTANCE" */}
            <QodeCustom20242623
              style={{
                display: "flex",
                height: "22px",
                padding: "0px var(--size-padding-paddingxxs, 4px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-small, 4px)",
                background: "var(--background-bg-white, #fff)",
                boxShadow:
                  "0px 2px 4px 0px rgba(0, 0, 0, 0.02), 0px 1px 6px -1px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.03)",
              }}
              {...{
                title: "Item",
                showIcon: true,
                size: "small",
                active: true,
                disabled: false,
              }}
            />
            {/* name=".segmented__item" id="2994:1784" type="INSTANCE" */}
            <QodeCustom20242626
              style={{
                display: "flex",
                height: "22px",
                padding: "0px var(--size-padding-paddingxxs, 4px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-small, 4px)",
              }}
              {...{
                title: "Item",
                showIcon: true,
                size: "small",
                active: false,
                disabled: false,
              }}
            />
          </div>
        </>
      )}
      {/* id="2994:1296" */}
      {`${items}` === `3` && `${size}` === `small` && `${type}` === `Text` && (
        <>
          {/* name="items=3, size=small, type=Text" id="2994:1296" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              height: "70px",
              padding: "2px",
              flexDirection: "column",
              alignItems: "center",
              flexShrink: "0",
              borderRadius: "var(--border-radius-small, 4px)",
              background:
                "var(--color-neutral-fill-colorfilltertiary, rgba(0, 0, 0, 0.04))",
            }}
          >
            {/* name=".segmented__item" id="2994:1297" type="INSTANCE" */}
            <QodeCustom20242623
              style={{
                display: "flex",
                height: "22px",
                padding: "0px var(--size-padding-paddingxxs, 4px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-small, 4px)",
                background: "var(--background-bg-white, #fff)",
                boxShadow:
                  "0px 2px 4px 0px rgba(0, 0, 0, 0.02), 0px 1px 6px -1px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.03)",
              }}
              {...{
                title: "Item",
                showTitle: true,
                size: "small",
                active: true,
                disabled: false,
              }}
            />
            {/* name=".segmented__item" id="2994:1298" type="INSTANCE" */}
            <QodeCustom20242626
              style={{
                display: "flex",
                height: "22px",
                padding: "0px var(--size-padding-paddingxxs, 4px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-small, 4px)",
              }}
              {...{
                title: "Item",
                showTitle: true,
                size: "small",
                active: false,
                disabled: false,
              }}
            />
            {/* name=".segmented__item" id="2994:1299" type="INSTANCE" */}
            <QodeCustom20242626
              style={{
                display: "flex",
                height: "22px",
                padding: "0px var(--size-padding-paddingxxs, 4px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-small, 4px)",
              }}
              {...{
                title: "Item",
                showTitle: true,
                size: "small",
                active: false,
                disabled: false,
              }}
            />
          </div>
        </>
      )}
      {/* id="2994:1785" */}
      {`${items}` === `3` && `${size}` === `small` && `${type}` === `icon` && (
        <>
          {/* name="items=3, size=small, type=icon" id="2994:1785" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              height: "70px",
              padding: "2px",
              flexDirection: "column",
              alignItems: "center",
              flexShrink: "0",
              borderRadius: "var(--border-radius-small, 4px)",
              background:
                "var(--color-neutral-fill-colorfilltertiary, rgba(0, 0, 0, 0.04))",
            }}
          >
            {/* name=".segmented__item" id="2994:1786" type="INSTANCE" */}
            <QodeCustom20242623
              style={{
                display: "flex",
                height: "22px",
                padding: "0px var(--size-padding-paddingxxs, 4px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-small, 4px)",
                background: "var(--background-bg-white, #fff)",
                boxShadow:
                  "0px 2px 4px 0px rgba(0, 0, 0, 0.02), 0px 1px 6px -1px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.03)",
              }}
              {...{
                title: "Item",
                showIcon: true,
                size: "small",
                active: true,
                disabled: false,
              }}
            />
            {/* name=".segmented__item" id="2994:1787" type="INSTANCE" */}
            <QodeCustom20242626
              style={{
                display: "flex",
                height: "22px",
                padding: "0px var(--size-padding-paddingxxs, 4px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-small, 4px)",
              }}
              {...{
                title: "Item",
                showIcon: true,
                size: "small",
                active: false,
                disabled: false,
              }}
            />
            {/* name=".segmented__item" id="2994:1788" type="INSTANCE" */}
            <QodeCustom20242626
              style={{
                display: "flex",
                height: "22px",
                padding: "0px var(--size-padding-paddingxxs, 4px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-small, 4px)",
              }}
              {...{
                title: "Item",
                showIcon: true,
                size: "small",
                active: false,
                disabled: false,
              }}
            />
          </div>
        </>
      )}
      {/* id="2994:1300" */}
      {`${items}` === `4` && `${size}` === `small` && `${type}` === `Text` && (
        <>
          {/* name="items=4, size=small, type=Text" id="2994:1300" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              height: "92px",
              padding: "2px",
              flexDirection: "column",
              alignItems: "center",
              flexShrink: "0",
              borderRadius: "var(--border-radius-small, 4px)",
              background:
                "var(--color-neutral-fill-colorfilltertiary, rgba(0, 0, 0, 0.04))",
            }}
          >
            {/* name=".segmented__item" id="2994:1301" type="INSTANCE" */}
            <QodeCustom20242623
              style={{
                display: "flex",
                height: "22px",
                padding: "0px var(--size-padding-paddingxxs, 4px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-small, 4px)",
                background: "var(--background-bg-white, #fff)",
                boxShadow:
                  "0px 2px 4px 0px rgba(0, 0, 0, 0.02), 0px 1px 6px -1px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.03)",
              }}
              {...{
                title: "Item",
                showTitle: true,
                size: "small",
                active: true,
                disabled: false,
              }}
            />
            {/* name=".segmented__item" id="2994:1302" type="INSTANCE" */}
            <QodeCustom20242626
              style={{
                display: "flex",
                height: "22px",
                padding: "0px var(--size-padding-paddingxxs, 4px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-small, 4px)",
              }}
              {...{
                title: "Item",
                showTitle: true,
                size: "small",
                active: false,
                disabled: false,
              }}
            />
            {/* name=".segmented__item" id="2994:1303" type="INSTANCE" */}
            <QodeCustom20242626
              style={{
                display: "flex",
                height: "22px",
                padding: "0px var(--size-padding-paddingxxs, 4px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-small, 4px)",
              }}
              {...{
                title: "Item",
                showTitle: true,
                size: "small",
                active: false,
                disabled: false,
              }}
            />
            {/* name=".segmented__item" id="2994:1304" type="INSTANCE" */}
            <QodeCustom20242626
              style={{
                display: "flex",
                height: "22px",
                padding: "0px var(--size-padding-paddingxxs, 4px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-small, 4px)",
              }}
              {...{
                title: "Item",
                showTitle: true,
                size: "small",
                active: false,
                disabled: false,
              }}
            />
          </div>
        </>
      )}
      {/* id="2994:1789" */}
      {`${items}` === `4` && `${size}` === `small` && `${type}` === `icon` && (
        <>
          {/* name="items=4, size=small, type=icon" id="2994:1789" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              height: "92px",
              padding: "2px",
              flexDirection: "column",
              alignItems: "center",
              flexShrink: "0",
              borderRadius: "var(--border-radius-small, 4px)",
              background:
                "var(--color-neutral-fill-colorfilltertiary, rgba(0, 0, 0, 0.04))",
            }}
          >
            {/* name=".segmented__item" id="2994:1790" type="INSTANCE" */}
            <QodeCustom20242623
              style={{
                display: "flex",
                height: "22px",
                padding: "0px var(--size-padding-paddingxxs, 4px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-small, 4px)",
                background: "var(--background-bg-white, #fff)",
                boxShadow:
                  "0px 2px 4px 0px rgba(0, 0, 0, 0.02), 0px 1px 6px -1px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.03)",
              }}
              {...{
                title: "Item",
                showIcon: true,
                size: "small",
                active: true,
                disabled: false,
              }}
            />
            {/* name=".segmented__item" id="2994:1791" type="INSTANCE" */}
            <QodeCustom20242626
              style={{
                display: "flex",
                height: "22px",
                padding: "0px var(--size-padding-paddingxxs, 4px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-small, 4px)",
              }}
              {...{
                title: "Item",
                showIcon: true,
                size: "small",
                active: false,
                disabled: false,
              }}
            />
            {/* name=".segmented__item" id="2994:1792" type="INSTANCE" */}
            <QodeCustom20242626
              style={{
                display: "flex",
                height: "22px",
                padding: "0px var(--size-padding-paddingxxs, 4px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-small, 4px)",
              }}
              {...{
                title: "Item",
                showIcon: true,
                size: "small",
                active: false,
                disabled: false,
              }}
            />
            {/* name=".segmented__item" id="2994:1793" type="INSTANCE" */}
            <QodeCustom20242626
              style={{
                display: "flex",
                height: "22px",
                padding: "0px var(--size-padding-paddingxxs, 4px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-small, 4px)",
              }}
              {...{
                title: "Item",
                showIcon: true,
                size: "small",
                active: false,
                disabled: false,
              }}
            />
          </div>
        </>
      )}
      {/* id="2994:1305" */}
      {`${items}` === `5` && `${size}` === `small` && `${type}` === `Text` && (
        <>
          {/* name="items=5, size=small, type=Text" id="2994:1305" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              height: "114px",
              padding: "2px",
              flexDirection: "column",
              alignItems: "center",
              flexShrink: "0",
              borderRadius: "var(--border-radius-small, 4px)",
              background:
                "var(--color-neutral-fill-colorfilltertiary, rgba(0, 0, 0, 0.04))",
            }}
          >
            {/* name=".segmented__item" id="2994:1306" type="INSTANCE" */}
            <QodeCustom20242623
              style={{
                display: "flex",
                height: "22px",
                padding: "0px var(--size-padding-paddingxxs, 4px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-small, 4px)",
                background: "var(--background-bg-white, #fff)",
                boxShadow:
                  "0px 2px 4px 0px rgba(0, 0, 0, 0.02), 0px 1px 6px -1px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.03)",
              }}
              {...{
                title: "Item",
                showTitle: true,
                size: "small",
                active: true,
                disabled: false,
              }}
            />
            {/* name=".segmented__item" id="2994:1307" type="INSTANCE" */}
            <QodeCustom20242626
              style={{
                display: "flex",
                height: "22px",
                padding: "0px var(--size-padding-paddingxxs, 4px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-small, 4px)",
              }}
              {...{
                title: "Item",
                showTitle: true,
                size: "small",
                active: false,
                disabled: false,
              }}
            />
            {/* name=".segmented__item" id="2994:1308" type="INSTANCE" */}
            <QodeCustom20242626
              style={{
                display: "flex",
                height: "22px",
                padding: "0px var(--size-padding-paddingxxs, 4px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-small, 4px)",
              }}
              {...{
                title: "Item",
                showTitle: true,
                size: "small",
                active: false,
                disabled: false,
              }}
            />
            {/* name=".segmented__item" id="2994:1309" type="INSTANCE" */}
            <QodeCustom20242626
              style={{
                display: "flex",
                height: "22px",
                padding: "0px var(--size-padding-paddingxxs, 4px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-small, 4px)",
              }}
              {...{
                title: "Item",
                showTitle: true,
                size: "small",
                active: false,
                disabled: false,
              }}
            />
            {/* name=".segmented__item" id="2994:1310" type="INSTANCE" */}
            <QodeCustom20242626
              style={{
                display: "flex",
                height: "22px",
                padding: "0px var(--size-padding-paddingxxs, 4px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-small, 4px)",
              }}
              {...{
                title: "Item",
                showTitle: true,
                size: "small",
                active: false,
                disabled: false,
              }}
            />
          </div>
        </>
      )}
      {/* id="2994:1794" */}
      {`${items}` === `5` && `${size}` === `small` && `${type}` === `icon` && (
        <>
          {/* name="items=5, size=small, type=icon" id="2994:1794" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              height: "114px",
              padding: "2px",
              flexDirection: "column",
              alignItems: "center",
              flexShrink: "0",
              borderRadius: "var(--border-radius-small, 4px)",
              background:
                "var(--color-neutral-fill-colorfilltertiary, rgba(0, 0, 0, 0.04))",
            }}
          >
            {/* name=".segmented__item" id="2994:1795" type="INSTANCE" */}
            <QodeCustom20242623
              style={{
                display: "flex",
                height: "22px",
                padding: "0px var(--size-padding-paddingxxs, 4px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-small, 4px)",
                background: "var(--background-bg-white, #fff)",
                boxShadow:
                  "0px 2px 4px 0px rgba(0, 0, 0, 0.02), 0px 1px 6px -1px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.03)",
              }}
              {...{
                title: "Item",
                showIcon: true,
                size: "small",
                active: true,
                disabled: false,
              }}
            />
            {/* name=".segmented__item" id="2994:1796" type="INSTANCE" */}
            <QodeCustom20242626
              style={{
                display: "flex",
                height: "22px",
                padding: "0px var(--size-padding-paddingxxs, 4px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-small, 4px)",
              }}
              {...{
                title: "Item",
                showIcon: true,
                size: "small",
                active: false,
                disabled: false,
              }}
            />
            {/* name=".segmented__item" id="2994:1797" type="INSTANCE" */}
            <QodeCustom20242626
              style={{
                display: "flex",
                height: "22px",
                padding: "0px var(--size-padding-paddingxxs, 4px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-small, 4px)",
              }}
              {...{
                title: "Item",
                showIcon: true,
                size: "small",
                active: false,
                disabled: false,
              }}
            />
            {/* name=".segmented__item" id="2994:1798" type="INSTANCE" */}
            <QodeCustom20242626
              style={{
                display: "flex",
                height: "22px",
                padding: "0px var(--size-padding-paddingxxs, 4px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-small, 4px)",
              }}
              {...{
                title: "Item",
                showIcon: true,
                size: "small",
                active: false,
                disabled: false,
              }}
            />
            {/* name=".segmented__item" id="2994:1799" type="INSTANCE" */}
            <QodeCustom20242626
              style={{
                display: "flex",
                height: "22px",
                padding: "0px var(--size-padding-paddingxxs, 4px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-small, 4px)",
              }}
              {...{
                title: "Item",
                showIcon: true,
                size: "small",
                active: false,
                disabled: false,
              }}
            />
          </div>
        </>
      )}
      {/* id="2994:1311" */}
      {`${items}` === `6` && `${size}` === `small` && `${type}` === `Text` && (
        <>
          {/* name="items=6, size=small, type=Text" id="2994:1311" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              height: "136px",
              padding: "2px",
              flexDirection: "column",
              alignItems: "center",
              flexShrink: "0",
              borderRadius: "var(--border-radius-small, 4px)",
              background:
                "var(--color-neutral-fill-colorfilltertiary, rgba(0, 0, 0, 0.04))",
            }}
          >
            {/* name=".segmented__item" id="2994:1312" type="INSTANCE" */}
            <QodeCustom20242623
              style={{
                display: "flex",
                height: "22px",
                padding: "0px var(--size-padding-paddingxxs, 4px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-small, 4px)",
                background: "var(--background-bg-white, #fff)",
                boxShadow:
                  "0px 2px 4px 0px rgba(0, 0, 0, 0.02), 0px 1px 6px -1px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.03)",
              }}
              {...{
                title: "Item",
                showTitle: true,
                size: "small",
                active: true,
                disabled: false,
              }}
            />
            {/* name=".segmented__item" id="2994:1313" type="INSTANCE" */}
            <QodeCustom20242626
              style={{
                display: "flex",
                height: "22px",
                padding: "0px var(--size-padding-paddingxxs, 4px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-small, 4px)",
              }}
              {...{
                title: "Item",
                showTitle: true,
                size: "small",
                active: false,
                disabled: false,
              }}
            />
            {/* name=".segmented__item" id="2994:1314" type="INSTANCE" */}
            <QodeCustom20242626
              style={{
                display: "flex",
                height: "22px",
                padding: "0px var(--size-padding-paddingxxs, 4px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-small, 4px)",
              }}
              {...{
                title: "Item",
                showTitle: true,
                size: "small",
                active: false,
                disabled: false,
              }}
            />
            {/* name=".segmented__item" id="2994:1315" type="INSTANCE" */}
            <QodeCustom20242626
              style={{
                display: "flex",
                height: "22px",
                padding: "0px var(--size-padding-paddingxxs, 4px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-small, 4px)",
              }}
              {...{
                title: "Item",
                showTitle: true,
                size: "small",
                active: false,
                disabled: false,
              }}
            />
            {/* name=".segmented__item" id="2994:1316" type="INSTANCE" */}
            <QodeCustom20242626
              style={{
                display: "flex",
                height: "22px",
                padding: "0px var(--size-padding-paddingxxs, 4px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-small, 4px)",
              }}
              {...{
                title: "Item",
                showTitle: true,
                size: "small",
                active: false,
                disabled: false,
              }}
            />
            {/* name=".segmented__item" id="2994:1317" type="INSTANCE" */}
            <QodeCustom20242626
              style={{
                display: "flex",
                height: "22px",
                padding: "0px var(--size-padding-paddingxxs, 4px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-small, 4px)",
              }}
              {...{
                title: "Item",
                showTitle: true,
                size: "small",
                active: false,
                disabled: false,
              }}
            />
          </div>
        </>
      )}
      {/* id="2994:1800" */}
      {`${items}` === `6` && `${size}` === `small` && `${type}` === `icon` && (
        <>
          {/* name="items=6, size=small, type=icon" id="2994:1800" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              height: "136px",
              padding: "2px",
              flexDirection: "column",
              alignItems: "center",
              flexShrink: "0",
              borderRadius: "var(--border-radius-small, 4px)",
              background:
                "var(--color-neutral-fill-colorfilltertiary, rgba(0, 0, 0, 0.04))",
            }}
          >
            {/* name=".segmented__item" id="2994:1801" type="INSTANCE" */}
            <QodeCustom20242623
              style={{
                display: "flex",
                height: "22px",
                padding: "0px var(--size-padding-paddingxxs, 4px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-small, 4px)",
                background: "var(--background-bg-white, #fff)",
                boxShadow:
                  "0px 2px 4px 0px rgba(0, 0, 0, 0.02), 0px 1px 6px -1px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.03)",
              }}
              {...{
                title: "Item",
                showIcon: true,
                size: "small",
                active: true,
                disabled: false,
              }}
            />
            {/* name=".segmented__item" id="2994:1802" type="INSTANCE" */}
            <QodeCustom20242626
              style={{
                display: "flex",
                height: "22px",
                padding: "0px var(--size-padding-paddingxxs, 4px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-small, 4px)",
              }}
              {...{
                title: "Item",
                showIcon: true,
                size: "small",
                active: false,
                disabled: false,
              }}
            />
            {/* name=".segmented__item" id="2994:1803" type="INSTANCE" */}
            <QodeCustom20242626
              style={{
                display: "flex",
                height: "22px",
                padding: "0px var(--size-padding-paddingxxs, 4px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-small, 4px)",
              }}
              {...{
                title: "Item",
                showIcon: true,
                size: "small",
                active: false,
                disabled: false,
              }}
            />
            {/* name=".segmented__item" id="2994:1804" type="INSTANCE" */}
            <QodeCustom20242626
              style={{
                display: "flex",
                height: "22px",
                padding: "0px var(--size-padding-paddingxxs, 4px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-small, 4px)",
              }}
              {...{
                title: "Item",
                showIcon: true,
                size: "small",
                active: false,
                disabled: false,
              }}
            />
            {/* name=".segmented__item" id="2994:1805" type="INSTANCE" */}
            <QodeCustom20242626
              style={{
                display: "flex",
                height: "22px",
                padding: "0px var(--size-padding-paddingxxs, 4px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-small, 4px)",
              }}
              {...{
                title: "Item",
                showIcon: true,
                size: "small",
                active: false,
                disabled: false,
              }}
            />
            {/* name=".segmented__item" id="2994:1806" type="INSTANCE" */}
            <QodeCustom20242626
              style={{
                display: "flex",
                height: "22px",
                padding: "0px var(--size-padding-paddingxxs, 4px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-small, 4px)",
              }}
              {...{
                title: "Item",
                showIcon: true,
                size: "small",
                active: false,
                disabled: false,
              }}
            />
          </div>
        </>
      )}
    </>
  )
}
