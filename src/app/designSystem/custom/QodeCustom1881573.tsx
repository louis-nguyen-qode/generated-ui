// id="188:1573"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeRadio } from "@designSystem/ant/QodeRadio"

export interface QodeCustom1881573Props {
  items?: "2" | "3" | "4" | "5" | "6"
  size?: "default" | "large" | "small"
  style?: "outlined" | "solid"
}

export const QodeCustom1881573: React.FC<
  QodeCustom1881573Props & { style?: CSSProperties }
> = ({ items = "2", size = "default", style = "outlined", ...rest }) => {
  return (
    <>
      {/* name="Radio/Buttons" id="188:1573" type="COMPONENT_SET" */}
      {/* id="188:1572" */}
      {`${items}` === `2` &&
        `${size}` === `default` &&
        `${style}` === `outlined` && (
          <>
            {/* name="items=2, size=default, style=outlined" id="188:1572" type="COMPONENT" */}
            <div style={{ display: "inline-flex", alignItems: "center" }}>
              {/* name=".radioButton__item" id="188:1567" type="INSTANCE" */}
              <QodeRadio
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderRadius:
                    "var(--style-radius-borderround, 999px) 0px 0px var(--style-radius-borderround, 999px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--primary-primary-50, #1597f4)",
                  background: "var(--text-text-white, #fff)",
                }}
                {...{
                  label: true,
                  iconL: false,
                  state: "active",
                  size: "default",
                  style: "outlined",
                  position: "first",
                }}
              />
              {/* name=".radioButton__item" id="188:1563" type="INSTANCE" */}
              <QodeRadio
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderRadius:
                    "0px var(--style-radius-borderround, 999px) var(--style-radius-borderround, 999px) 0px",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
                {...{
                  label: true,
                  iconL: false,
                  iconR: false,
                  state: "default",
                  size: "default",
                  style: "outlined",
                  position: "last",
                }}
              />
            </div>
          </>
        )}
      {/* id="188:1579" */}
      {`${items}` === `3` &&
        `${size}` === `default` &&
        `${style}` === `outlined` && (
          <>
            {/* name="items=3, size=default, style=outlined" id="188:1579" type="COMPONENT" */}
            <div style={{ display: "inline-flex", alignItems: "center" }}>
              {/* name=".radioButton__item" id="188:1580" type="INSTANCE" */}
              <QodeRadio
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderRadius:
                    "var(--style-radius-borderround, 999px) 0px 0px var(--style-radius-borderround, 999px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--primary-primary-50, #1597f4)",
                  background: "var(--text-text-white, #fff)",
                }}
                {...{
                  label: true,
                  iconL: false,
                  state: "active",
                  size: "default",
                  style: "outlined",
                  position: "first",
                }}
              />
              {/* name=".radioButton__item" id="188:1581" type="INSTANCE" */}
              <QodeRadio
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
                {...{
                  label: true,
                  state: "default",
                  size: "default",
                  style: "outlined",
                  position: "center",
                }}
              />
              {/* name=".radioButton__item" id="188:1584" type="INSTANCE" */}
              <QodeRadio
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderRadius:
                    "0px var(--style-radius-borderround, 999px) var(--style-radius-borderround, 999px) 0px",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
                {...{
                  label: true,
                  iconL: false,
                  iconR: false,
                  state: "default",
                  size: "default",
                  style: "outlined",
                  position: "last",
                }}
              />
            </div>
          </>
        )}
      {/* id="188:1587" */}
      {`${items}` === `4` &&
        `${size}` === `default` &&
        `${style}` === `outlined` && (
          <>
            {/* name="items=4, size=default, style=outlined" id="188:1587" type="COMPONENT" */}
            <div style={{ display: "inline-flex", alignItems: "center" }}>
              {/* name=".radioButton__item" id="188:1588" type="INSTANCE" */}
              <QodeRadio
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderRadius:
                    "var(--style-radius-borderround, 999px) 0px 0px var(--style-radius-borderround, 999px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--primary-primary-50, #1597f4)",
                  background: "var(--text-text-white, #fff)",
                }}
                {...{
                  label: true,
                  iconL: false,
                  state: "active",
                  size: "default",
                  style: "outlined",
                  position: "first",
                }}
              />
              {/* name=".radioButton__item" id="188:1589" type="INSTANCE" */}
              <QodeRadio
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
                {...{
                  label: true,
                  state: "default",
                  size: "default",
                  style: "outlined",
                  position: "center",
                }}
              />
              {/* name=".radioButton__item" id="188:1590" type="INSTANCE" */}
              <QodeRadio
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
                {...{
                  label: true,
                  state: "default",
                  size: "default",
                  style: "outlined",
                  position: "center",
                }}
              />
              {/* name=".radioButton__item" id="188:1594" type="INSTANCE" */}
              <QodeRadio
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderRadius:
                    "0px var(--style-radius-borderround, 999px) var(--style-radius-borderround, 999px) 0px",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
                {...{
                  label: true,
                  iconL: false,
                  iconR: false,
                  state: "default",
                  size: "default",
                  style: "outlined",
                  position: "last",
                }}
              />
            </div>
          </>
        )}
      {/* id="188:1597" */}
      {`${items}` === `5` &&
        `${size}` === `default` &&
        `${style}` === `outlined` && (
          <>
            {/* name="items=5, size=default, style=outlined" id="188:1597" type="COMPONENT" */}
            <div style={{ display: "inline-flex", alignItems: "center" }}>
              {/* name=".radioButton__item" id="188:1598" type="INSTANCE" */}
              <QodeRadio
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderRadius:
                    "var(--style-radius-borderround, 999px) 0px 0px var(--style-radius-borderround, 999px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--primary-primary-50, #1597f4)",
                  background: "var(--text-text-white, #fff)",
                }}
                {...{
                  label: true,
                  iconL: false,
                  state: "active",
                  size: "default",
                  style: "outlined",
                  position: "first",
                }}
              />
              {/* name=".radioButton__item" id="188:1599" type="INSTANCE" */}
              <QodeRadio
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
                {...{
                  label: true,
                  state: "default",
                  size: "default",
                  style: "outlined",
                  position: "center",
                }}
              />
              {/* name=".radioButton__item" id="188:1600" type="INSTANCE" */}
              <QodeRadio
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
                {...{
                  label: true,
                  state: "default",
                  size: "default",
                  style: "outlined",
                  position: "center",
                }}
              />
              {/* name=".radioButton__item" id="188:1601" type="INSTANCE" */}
              <QodeRadio
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
                {...{
                  label: true,
                  state: "default",
                  size: "default",
                  style: "outlined",
                  position: "center",
                }}
              />
              {/* name=".radioButton__item" id="188:1606" type="INSTANCE" */}
              <QodeRadio
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderRadius:
                    "0px var(--style-radius-borderround, 999px) var(--style-radius-borderround, 999px) 0px",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
                {...{
                  label: true,
                  iconL: false,
                  iconR: false,
                  state: "default",
                  size: "default",
                  style: "outlined",
                  position: "last",
                }}
              />
            </div>
          </>
        )}
      {/* id="188:1609" */}
      {`${items}` === `6` &&
        `${size}` === `default` &&
        `${style}` === `outlined` && (
          <>
            {/* name="items=6, size=default, style=outlined" id="188:1609" type="COMPONENT" */}
            <div style={{ display: "inline-flex", alignItems: "center" }}>
              {/* name=".radioButton__item" id="188:1610" type="INSTANCE" */}
              <QodeRadio
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderRadius:
                    "var(--style-radius-borderround, 999px) 0px 0px var(--style-radius-borderround, 999px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--primary-primary-50, #1597f4)",
                  background: "var(--text-text-white, #fff)",
                }}
                {...{
                  label: true,
                  iconL: false,
                  state: "active",
                  size: "default",
                  style: "outlined",
                  position: "first",
                }}
              />
              {/* name=".radioButton__item" id="188:1611" type="INSTANCE" */}
              <QodeRadio
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
                {...{
                  label: true,
                  state: "default",
                  size: "default",
                  style: "outlined",
                  position: "center",
                }}
              />
              {/* name=".radioButton__item" id="188:1612" type="INSTANCE" */}
              <QodeRadio
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
                {...{
                  label: true,
                  state: "default",
                  size: "default",
                  style: "outlined",
                  position: "center",
                }}
              />
              {/* name=".radioButton__item" id="188:1613" type="INSTANCE" */}
              <QodeRadio
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
                {...{
                  label: true,
                  state: "default",
                  size: "default",
                  style: "outlined",
                  position: "center",
                }}
              />
              {/* name=".radioButton__item" id="188:1614" type="INSTANCE" */}
              <QodeRadio
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
                {...{
                  label: true,
                  state: "default",
                  size: "default",
                  style: "outlined",
                  position: "center",
                }}
              />
              {/* name=".radioButton__item" id="188:1620" type="INSTANCE" */}
              <QodeRadio
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderRadius:
                    "0px var(--style-radius-borderround, 999px) var(--style-radius-borderround, 999px) 0px",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
                {...{
                  label: true,
                  iconL: false,
                  iconR: false,
                  state: "default",
                  size: "default",
                  style: "outlined",
                  position: "last",
                }}
              />
            </div>
          </>
        )}
      {/* id="188:1623" */}
      {`${items}` === `2` &&
        `${size}` === `large` &&
        `${style}` === `outlined` && (
          <>
            {/* name="items=2, size=large, style=outlined" id="188:1623" type="COMPONENT" */}
            <div style={{ display: "inline-flex", alignItems: "center" }}>
              {/* name=".radioButton__item" id="188:1624" type="INSTANCE" */}
              <QodeRadio
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightlg, 40px)",
                  padding:
                    "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderRadius:
                    "var(--style-radius-borderround, 999px) 0px 0px var(--style-radius-borderround, 999px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--primary-primary-50, #1597f4)",
                  background: "var(--text-text-white, #fff)",
                }}
                {...{
                  label: true,
                  state: "active",
                  size: "large",
                  style: "outlined",
                  position: "first",
                }}
              />
              {/* name=".radioButton__item" id="188:1625" type="INSTANCE" */}
              <QodeRadio
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightlg, 40px)",
                  padding:
                    "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderRadius:
                    "0px var(--style-radius-borderround, 999px) var(--style-radius-borderround, 999px) 0px",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
                {...{
                  label: true,
                  state: "default",
                  size: "large",
                  style: "outlined",
                  position: "last",
                }}
              />
            </div>
          </>
        )}
      {/* id="188:1626" */}
      {`${items}` === `3` &&
        `${size}` === `large` &&
        `${style}` === `outlined` && (
          <>
            {/* name="items=3, size=large, style=outlined" id="188:1626" type="COMPONENT" */}
            <div style={{ display: "inline-flex", alignItems: "center" }}>
              {/* name=".radioButton__item" id="188:1627" type="INSTANCE" */}
              <QodeRadio
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightlg, 40px)",
                  padding:
                    "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderRadius:
                    "var(--style-radius-borderround, 999px) 0px 0px var(--style-radius-borderround, 999px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--primary-primary-50, #1597f4)",
                  background: "var(--text-text-white, #fff)",
                }}
                {...{
                  label: true,
                  state: "active",
                  size: "large",
                  style: "outlined",
                  position: "first",
                }}
              />
              {/* name=".radioButton__item" id="188:1628" type="INSTANCE" */}
              <QodeRadio
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightlg, 40px)",
                  padding:
                    "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
                {...{
                  label: true,
                  iconR: false,
                  state: "default",
                  size: "large",
                  style: "outlined",
                  position: "center",
                }}
              />
              {/* name=".radioButton__item" id="188:1629" type="INSTANCE" */}
              <QodeRadio
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightlg, 40px)",
                  padding:
                    "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderRadius:
                    "0px var(--style-radius-borderround, 999px) var(--style-radius-borderround, 999px) 0px",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
                {...{
                  label: true,
                  state: "default",
                  size: "large",
                  style: "outlined",
                  position: "last",
                }}
              />
            </div>
          </>
        )}
      {/* id="188:1630" */}
      {`${items}` === `4` &&
        `${size}` === `large` &&
        `${style}` === `outlined` && (
          <>
            {/* name="items=4, size=large, style=outlined" id="188:1630" type="COMPONENT" */}
            <div style={{ display: "inline-flex", alignItems: "center" }}>
              {/* name=".radioButton__item" id="188:1631" type="INSTANCE" */}
              <QodeRadio
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightlg, 40px)",
                  padding:
                    "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderRadius:
                    "var(--style-radius-borderround, 999px) 0px 0px var(--style-radius-borderround, 999px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--primary-primary-50, #1597f4)",
                  background: "var(--text-text-white, #fff)",
                }}
                {...{
                  label: true,
                  state: "active",
                  size: "large",
                  style: "outlined",
                  position: "first",
                }}
              />
              {/* name=".radioButton__item" id="188:1632" type="INSTANCE" */}
              <QodeRadio
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightlg, 40px)",
                  padding:
                    "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
                {...{
                  label: true,
                  iconR: false,
                  state: "default",
                  size: "large",
                  style: "outlined",
                  position: "center",
                }}
              />
              {/* name=".radioButton__item" id="188:1633" type="INSTANCE" */}
              <QodeRadio
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightlg, 40px)",
                  padding:
                    "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
                {...{
                  label: true,
                  iconR: false,
                  state: "default",
                  size: "large",
                  style: "outlined",
                  position: "center",
                }}
              />
              {/* name=".radioButton__item" id="188:1634" type="INSTANCE" */}
              <QodeRadio
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightlg, 40px)",
                  padding:
                    "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderRadius:
                    "0px var(--style-radius-borderround, 999px) var(--style-radius-borderround, 999px) 0px",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
                {...{
                  label: true,
                  state: "default",
                  size: "large",
                  style: "outlined",
                  position: "last",
                }}
              />
            </div>
          </>
        )}
      {/* id="188:1635" */}
      {`${items}` === `5` &&
        `${size}` === `large` &&
        `${style}` === `outlined` && (
          <>
            {/* name="items=5, size=large, style=outlined" id="188:1635" type="COMPONENT" */}
            <div style={{ display: "inline-flex", alignItems: "center" }}>
              {/* name=".radioButton__item" id="188:1636" type="INSTANCE" */}
              <QodeRadio
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightlg, 40px)",
                  padding:
                    "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderRadius:
                    "var(--style-radius-borderround, 999px) 0px 0px var(--style-radius-borderround, 999px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--primary-primary-50, #1597f4)",
                  background: "var(--text-text-white, #fff)",
                }}
                {...{
                  label: true,
                  state: "active",
                  size: "large",
                  style: "outlined",
                  position: "first",
                }}
              />
              {/* name=".radioButton__item" id="188:1637" type="INSTANCE" */}
              <QodeRadio
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightlg, 40px)",
                  padding:
                    "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
                {...{
                  label: true,
                  iconR: false,
                  state: "default",
                  size: "large",
                  style: "outlined",
                  position: "center",
                }}
              />
              {/* name=".radioButton__item" id="188:1638" type="INSTANCE" */}
              <QodeRadio
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightlg, 40px)",
                  padding:
                    "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
                {...{
                  label: true,
                  iconR: false,
                  state: "default",
                  size: "large",
                  style: "outlined",
                  position: "center",
                }}
              />
              {/* name=".radioButton__item" id="188:1639" type="INSTANCE" */}
              <QodeRadio
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightlg, 40px)",
                  padding:
                    "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
                {...{
                  label: true,
                  iconR: false,
                  state: "default",
                  size: "large",
                  style: "outlined",
                  position: "center",
                }}
              />
              {/* name=".radioButton__item" id="188:1640" type="INSTANCE" */}
              <QodeRadio
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightlg, 40px)",
                  padding:
                    "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderRadius:
                    "0px var(--style-radius-borderround, 999px) var(--style-radius-borderround, 999px) 0px",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
                {...{
                  label: true,
                  state: "default",
                  size: "large",
                  style: "outlined",
                  position: "last",
                }}
              />
            </div>
          </>
        )}
      {/* id="188:1641" */}
      {`${items}` === `6` &&
        `${size}` === `large` &&
        `${style}` === `outlined` && (
          <>
            {/* name="items=6, size=large, style=outlined" id="188:1641" type="COMPONENT" */}
            <div style={{ display: "inline-flex", alignItems: "center" }}>
              {/* name=".radioButton__item" id="188:1642" type="INSTANCE" */}
              <QodeRadio
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightlg, 40px)",
                  padding:
                    "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderRadius:
                    "var(--style-radius-borderround, 999px) 0px 0px var(--style-radius-borderround, 999px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--primary-primary-50, #1597f4)",
                  background: "var(--text-text-white, #fff)",
                }}
                {...{
                  label: true,
                  state: "active",
                  size: "large",
                  style: "outlined",
                  position: "first",
                }}
              />
              {/* name=".radioButton__item" id="188:1643" type="INSTANCE" */}
              <QodeRadio
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightlg, 40px)",
                  padding:
                    "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
                {...{
                  label: true,
                  iconR: false,
                  state: "default",
                  size: "large",
                  style: "outlined",
                  position: "center",
                }}
              />
              {/* name=".radioButton__item" id="188:1644" type="INSTANCE" */}
              <QodeRadio
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightlg, 40px)",
                  padding:
                    "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
                {...{
                  label: true,
                  iconR: false,
                  state: "default",
                  size: "large",
                  style: "outlined",
                  position: "center",
                }}
              />
              {/* name=".radioButton__item" id="188:1645" type="INSTANCE" */}
              <QodeRadio
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightlg, 40px)",
                  padding:
                    "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
                {...{
                  label: true,
                  iconR: false,
                  state: "default",
                  size: "large",
                  style: "outlined",
                  position: "center",
                }}
              />
              {/* name=".radioButton__item" id="188:1646" type="INSTANCE" */}
              <QodeRadio
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightlg, 40px)",
                  padding:
                    "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
                {...{
                  label: true,
                  iconR: false,
                  state: "default",
                  size: "large",
                  style: "outlined",
                  position: "center",
                }}
              />
              {/* name=".radioButton__item" id="188:1647" type="INSTANCE" */}
              <QodeRadio
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightlg, 40px)",
                  padding:
                    "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderRadius:
                    "0px var(--style-radius-borderround, 999px) var(--style-radius-borderround, 999px) 0px",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
                {...{
                  label: true,
                  state: "default",
                  size: "large",
                  style: "outlined",
                  position: "last",
                }}
              />
            </div>
          </>
        )}
      {/* id="188:1668" */}
      {`${items}` === `2` &&
        `${size}` === `small` &&
        `${style}` === `outlined` && (
          <>
            {/* name="items=2, size=small, style=outlined" id="188:1668" type="COMPONENT" */}
            <div style={{ display: "inline-flex", alignItems: "center" }}>
              {/* name=".radioButton__item" id="188:1669" type="INSTANCE" */}
              <QodeRadio
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderRadius:
                    "var(--style-radius-borderround, 999px) 0px 0px var(--style-radius-borderround, 999px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--primary-primary-50, #1597f4)",
                  background: "var(--text-text-white, #fff)",
                }}
                {...{
                  label: true,
                  iconR: false,
                  state: "active",
                  size: "small",
                  style: "outlined",
                  position: "first",
                }}
              />
              {/* name=".radioButton__item" id="188:1670" type="INSTANCE" */}
              <QodeRadio
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderRadius:
                    "0px var(--style-radius-borderround, 999px) var(--style-radius-borderround, 999px) 0px",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
                {...{
                  label: true,
                  state: "default",
                  size: "small",
                  style: "outlined",
                  position: "last",
                }}
              />
            </div>
          </>
        )}
      {/* id="188:1671" */}
      {`${items}` === `3` &&
        `${size}` === `small` &&
        `${style}` === `outlined` && (
          <>
            {/* name="items=3, size=small, style=outlined" id="188:1671" type="COMPONENT" */}
            <div style={{ display: "inline-flex", alignItems: "center" }}>
              {/* name=".radioButton__item" id="188:1672" type="INSTANCE" */}
              <QodeRadio
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderRadius:
                    "var(--style-radius-borderround, 999px) 0px 0px var(--style-radius-borderround, 999px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--primary-primary-50, #1597f4)",
                  background: "var(--text-text-white, #fff)",
                }}
                {...{
                  label: true,
                  iconR: false,
                  state: "active",
                  size: "small",
                  style: "outlined",
                  position: "first",
                }}
              />
              {/* name=".radioButton__item" id="188:1673" type="INSTANCE" */}
              <QodeRadio
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
                {...{
                  label: true,
                  iconR: false,
                  state: "default",
                  size: "small",
                  style: "outlined",
                  position: "center",
                }}
              />
              {/* name=".radioButton__item" id="188:1674" type="INSTANCE" */}
              <QodeRadio
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderRadius:
                    "0px var(--style-radius-borderround, 999px) var(--style-radius-borderround, 999px) 0px",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
                {...{
                  label: true,
                  state: "default",
                  size: "small",
                  style: "outlined",
                  position: "last",
                }}
              />
            </div>
          </>
        )}
      {/* id="188:1675" */}
      {`${items}` === `4` &&
        `${size}` === `small` &&
        `${style}` === `outlined` && (
          <>
            {/* name="items=4, size=small, style=outlined" id="188:1675" type="COMPONENT" */}
            <div style={{ display: "inline-flex", alignItems: "center" }}>
              {/* name=".radioButton__item" id="188:1676" type="INSTANCE" */}
              <QodeRadio
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderRadius:
                    "var(--style-radius-borderround, 999px) 0px 0px var(--style-radius-borderround, 999px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--primary-primary-50, #1597f4)",
                  background: "var(--text-text-white, #fff)",
                }}
                {...{
                  label: true,
                  iconR: false,
                  state: "active",
                  size: "small",
                  style: "outlined",
                  position: "first",
                }}
              />
              {/* name=".radioButton__item" id="188:1677" type="INSTANCE" */}
              <QodeRadio
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
                {...{
                  label: true,
                  iconR: false,
                  state: "default",
                  size: "small",
                  style: "outlined",
                  position: "center",
                }}
              />
              {/* name=".radioButton__item" id="188:1678" type="INSTANCE" */}
              <QodeRadio
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
                {...{
                  label: true,
                  iconR: false,
                  state: "default",
                  size: "small",
                  style: "outlined",
                  position: "center",
                }}
              />
              {/* name=".radioButton__item" id="188:1679" type="INSTANCE" */}
              <QodeRadio
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderRadius:
                    "0px var(--style-radius-borderround, 999px) var(--style-radius-borderround, 999px) 0px",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
                {...{
                  label: true,
                  state: "default",
                  size: "small",
                  style: "outlined",
                  position: "last",
                }}
              />
            </div>
          </>
        )}
      {/* id="188:1680" */}
      {`${items}` === `5` &&
        `${size}` === `small` &&
        `${style}` === `outlined` && (
          <>
            {/* name="items=5, size=small, style=outlined" id="188:1680" type="COMPONENT" */}
            <div style={{ display: "inline-flex", alignItems: "center" }}>
              {/* name=".radioButton__item" id="188:1681" type="INSTANCE" */}
              <QodeRadio
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderRadius:
                    "var(--style-radius-borderround, 999px) 0px 0px var(--style-radius-borderround, 999px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--primary-primary-50, #1597f4)",
                  background: "var(--text-text-white, #fff)",
                }}
                {...{
                  label: true,
                  iconR: false,
                  state: "active",
                  size: "small",
                  style: "outlined",
                  position: "first",
                }}
              />
              {/* name=".radioButton__item" id="188:1682" type="INSTANCE" */}
              <QodeRadio
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
                {...{
                  label: true,
                  iconR: false,
                  state: "default",
                  size: "small",
                  style: "outlined",
                  position: "center",
                }}
              />
              {/* name=".radioButton__item" id="188:1683" type="INSTANCE" */}
              <QodeRadio
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
                {...{
                  label: true,
                  iconR: false,
                  state: "default",
                  size: "small",
                  style: "outlined",
                  position: "center",
                }}
              />
              {/* name=".radioButton__item" id="188:1684" type="INSTANCE" */}
              <QodeRadio
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
                {...{
                  label: true,
                  iconR: false,
                  state: "default",
                  size: "small",
                  style: "outlined",
                  position: "center",
                }}
              />
              {/* name=".radioButton__item" id="188:1685" type="INSTANCE" */}
              <QodeRadio
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderRadius:
                    "0px var(--style-radius-borderround, 999px) var(--style-radius-borderround, 999px) 0px",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
                {...{
                  label: true,
                  state: "default",
                  size: "small",
                  style: "outlined",
                  position: "last",
                }}
              />
            </div>
          </>
        )}
      {/* id="188:1686" */}
      {`${items}` === `6` &&
        `${size}` === `small` &&
        `${style}` === `outlined` && (
          <>
            {/* name="items=6, size=small, style=outlined" id="188:1686" type="COMPONENT" */}
            <div style={{ display: "inline-flex", alignItems: "center" }}>
              {/* name=".radioButton__item" id="188:1687" type="INSTANCE" */}
              <QodeRadio
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderRadius:
                    "var(--style-radius-borderround, 999px) 0px 0px var(--style-radius-borderround, 999px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--primary-primary-50, #1597f4)",
                  background: "var(--text-text-white, #fff)",
                }}
                {...{
                  label: true,
                  iconR: false,
                  state: "active",
                  size: "small",
                  style: "outlined",
                  position: "first",
                }}
              />
              {/* name=".radioButton__item" id="188:1688" type="INSTANCE" */}
              <QodeRadio
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
                {...{
                  label: true,
                  iconR: false,
                  state: "default",
                  size: "small",
                  style: "outlined",
                  position: "center",
                }}
              />
              {/* name=".radioButton__item" id="188:1689" type="INSTANCE" */}
              <QodeRadio
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
                {...{
                  label: true,
                  iconR: false,
                  state: "default",
                  size: "small",
                  style: "outlined",
                  position: "center",
                }}
              />
              {/* name=".radioButton__item" id="188:1690" type="INSTANCE" */}
              <QodeRadio
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
                {...{
                  label: true,
                  iconR: false,
                  state: "default",
                  size: "small",
                  style: "outlined",
                  position: "center",
                }}
              />
              {/* name=".radioButton__item" id="188:1691" type="INSTANCE" */}
              <QodeRadio
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
                {...{
                  label: true,
                  iconR: false,
                  state: "default",
                  size: "small",
                  style: "outlined",
                  position: "center",
                }}
              />
              {/* name=".radioButton__item" id="188:1692" type="INSTANCE" */}
              <QodeRadio
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderRadius:
                    "0px var(--style-radius-borderround, 999px) var(--style-radius-borderround, 999px) 0px",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
                {...{
                  label: true,
                  state: "default",
                  size: "small",
                  style: "outlined",
                  position: "last",
                }}
              />
            </div>
          </>
        )}
      {/* id="188:1753" */}
      {`${items}` === `2` &&
        `${size}` === `default` &&
        `${style}` === `solid` && (
          <>
            {/* name="items=2, size=default, style=solid" id="188:1753" type="COMPONENT" */}
            <div style={{ display: "inline-flex", alignItems: "center" }}>
              {/* name=".radioButton__item" id="188:1754" type="INSTANCE" */}
              <QodeRadio
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderRadius:
                    "var(--style-radius-borderround, 999px) 0px 0px var(--style-radius-borderround, 999px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--primary-primary-50, #1597f4)",
                  background: "var(--primary-primary-50, #1597f4)",
                }}
                {...{
                  label: true,
                  iconR: false,
                  state: "active",
                  size: "default",
                  style: "solid",
                  position: "first",
                }}
              />
              {/* name=".radioButton__item" id="188:1755" type="INSTANCE" */}
              <QodeRadio
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderRadius:
                    "0px var(--style-radius-borderround, 999px) var(--style-radius-borderround, 999px) 0px",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
                {...{
                  label: true,
                  iconR: false,
                  state: "default",
                  size: "default",
                  style: "solid",
                  position: "last",
                }}
              />
            </div>
          </>
        )}
      {/* id="188:1756" */}
      {`${items}` === `3` &&
        `${size}` === `default` &&
        `${style}` === `solid` && (
          <>
            {/* name="items=3, size=default, style=solid" id="188:1756" type="COMPONENT" */}
            <div style={{ display: "inline-flex", alignItems: "center" }}>
              {/* name=".radioButton__item" id="188:1757" type="INSTANCE" */}
              <QodeRadio
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderRadius:
                    "var(--style-radius-borderround, 999px) 0px 0px var(--style-radius-borderround, 999px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--primary-primary-50, #1597f4)",
                  background: "var(--primary-primary-50, #1597f4)",
                }}
                {...{
                  label: true,
                  iconR: false,
                  state: "active",
                  size: "default",
                  style: "solid",
                  position: "first",
                }}
              />
              {/* name=".radioButton__item" id="188:1758" type="INSTANCE" */}
              <QodeRadio
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
                {...{
                  label: true,
                  state: "default",
                  size: "default",
                  style: "solid",
                  position: "center",
                }}
              />
              {/* name=".radioButton__item" id="188:1759" type="INSTANCE" */}
              <QodeRadio
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderRadius:
                    "0px var(--style-radius-borderround, 999px) var(--style-radius-borderround, 999px) 0px",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
                {...{
                  label: true,
                  iconR: false,
                  state: "default",
                  size: "default",
                  style: "solid",
                  position: "last",
                }}
              />
            </div>
          </>
        )}
      {/* id="188:1760" */}
      {`${items}` === `4` &&
        `${size}` === `default` &&
        `${style}` === `solid` && (
          <>
            {/* name="items=4, size=default, style=solid" id="188:1760" type="COMPONENT" */}
            <div style={{ display: "inline-flex", alignItems: "center" }}>
              {/* name=".radioButton__item" id="188:1761" type="INSTANCE" */}
              <QodeRadio
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderRadius:
                    "var(--style-radius-borderround, 999px) 0px 0px var(--style-radius-borderround, 999px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--primary-primary-50, #1597f4)",
                  background: "var(--primary-primary-50, #1597f4)",
                }}
                {...{
                  label: true,
                  iconR: false,
                  state: "active",
                  size: "default",
                  style: "solid",
                  position: "first",
                }}
              />
              {/* name=".radioButton__item" id="188:1762" type="INSTANCE" */}
              <QodeRadio
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
                {...{
                  label: true,
                  state: "default",
                  size: "default",
                  style: "solid",
                  position: "center",
                }}
              />
              {/* name=".radioButton__item" id="188:1763" type="INSTANCE" */}
              <QodeRadio
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
                {...{
                  label: true,
                  state: "default",
                  size: "default",
                  style: "solid",
                  position: "center",
                }}
              />
              {/* name=".radioButton__item" id="188:1764" type="INSTANCE" */}
              <QodeRadio
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderRadius:
                    "0px var(--style-radius-borderround, 999px) var(--style-radius-borderround, 999px) 0px",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
                {...{
                  label: true,
                  iconR: false,
                  state: "default",
                  size: "default",
                  style: "solid",
                  position: "last",
                }}
              />
            </div>
          </>
        )}
      {/* id="188:1765" */}
      {`${items}` === `5` &&
        `${size}` === `default` &&
        `${style}` === `solid` && (
          <>
            {/* name="items=5, size=default, style=solid" id="188:1765" type="COMPONENT" */}
            <div style={{ display: "inline-flex", alignItems: "center" }}>
              {/* name=".radioButton__item" id="188:1766" type="INSTANCE" */}
              <QodeRadio
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderRadius:
                    "var(--style-radius-borderround, 999px) 0px 0px var(--style-radius-borderround, 999px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--primary-primary-50, #1597f4)",
                  background: "var(--primary-primary-50, #1597f4)",
                }}
                {...{
                  label: true,
                  iconR: false,
                  state: "active",
                  size: "default",
                  style: "solid",
                  position: "first",
                }}
              />
              {/* name=".radioButton__item" id="188:1767" type="INSTANCE" */}
              <QodeRadio
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
                {...{
                  label: true,
                  state: "default",
                  size: "default",
                  style: "solid",
                  position: "center",
                }}
              />
              {/* name=".radioButton__item" id="188:1768" type="INSTANCE" */}
              <QodeRadio
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
                {...{
                  label: true,
                  state: "default",
                  size: "default",
                  style: "solid",
                  position: "center",
                }}
              />
              {/* name=".radioButton__item" id="188:1769" type="INSTANCE" */}
              <QodeRadio
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
                {...{
                  label: true,
                  state: "default",
                  size: "default",
                  style: "solid",
                  position: "center",
                }}
              />
              {/* name=".radioButton__item" id="188:1770" type="INSTANCE" */}
              <QodeRadio
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderRadius:
                    "0px var(--style-radius-borderround, 999px) var(--style-radius-borderround, 999px) 0px",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
                {...{
                  label: true,
                  iconR: false,
                  state: "default",
                  size: "default",
                  style: "solid",
                  position: "last",
                }}
              />
            </div>
          </>
        )}
      {/* id="188:1771" */}
      {`${items}` === `6` &&
        `${size}` === `default` &&
        `${style}` === `solid` && (
          <>
            {/* name="items=6, size=default, style=solid" id="188:1771" type="COMPONENT" */}
            <div style={{ display: "inline-flex", alignItems: "center" }}>
              {/* name=".radioButton__item" id="188:1772" type="INSTANCE" */}
              <QodeRadio
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderRadius:
                    "var(--style-radius-borderround, 999px) 0px 0px var(--style-radius-borderround, 999px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--primary-primary-50, #1597f4)",
                  background: "var(--primary-primary-50, #1597f4)",
                }}
                {...{
                  label: true,
                  iconR: false,
                  state: "active",
                  size: "default",
                  style: "solid",
                  position: "first",
                }}
              />
              {/* name=".radioButton__item" id="188:1773" type="INSTANCE" */}
              <QodeRadio
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
                {...{
                  label: true,
                  state: "default",
                  size: "default",
                  style: "solid",
                  position: "center",
                }}
              />
              {/* name=".radioButton__item" id="188:1774" type="INSTANCE" */}
              <QodeRadio
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
                {...{
                  label: true,
                  state: "default",
                  size: "default",
                  style: "solid",
                  position: "center",
                }}
              />
              {/* name=".radioButton__item" id="188:1775" type="INSTANCE" */}
              <QodeRadio
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
                {...{
                  label: true,
                  state: "default",
                  size: "default",
                  style: "solid",
                  position: "center",
                }}
              />
              {/* name=".radioButton__item" id="188:1776" type="INSTANCE" */}
              <QodeRadio
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
                {...{
                  label: true,
                  state: "default",
                  size: "default",
                  style: "solid",
                  position: "center",
                }}
              />
              {/* name=".radioButton__item" id="188:1777" type="INSTANCE" */}
              <QodeRadio
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderRadius:
                    "0px var(--style-radius-borderround, 999px) var(--style-radius-borderround, 999px) 0px",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
                {...{
                  label: true,
                  iconR: false,
                  state: "default",
                  size: "default",
                  style: "solid",
                  position: "last",
                }}
              />
            </div>
          </>
        )}
      {/* id="188:1778" */}
      {`${items}` === `2` &&
        `${size}` === `large` &&
        `${style}` === `solid` && (
          <>
            {/* name="items=2, size=large, style=solid" id="188:1778" type="COMPONENT" */}
            <div style={{ display: "inline-flex", alignItems: "center" }}>
              {/* name=".radioButton__item" id="188:1779" type="INSTANCE" */}
              <QodeRadio
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightlg, 40px)",
                  padding:
                    "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderRadius:
                    "var(--style-radius-borderround, 999px) 0px 0px var(--style-radius-borderround, 999px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--primary-primary-50, #1597f4)",
                  background: "var(--primary-primary-50, #1597f4)",
                }}
                {...{
                  label: true,
                  state: "active",
                  size: "large",
                  style: "solid",
                  position: "first",
                }}
              />
              {/* name=".radioButton__item" id="188:1780" type="INSTANCE" */}
              <QodeRadio
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightlg, 40px)",
                  padding:
                    "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderRadius:
                    "0px var(--style-radius-borderround, 999px) var(--style-radius-borderround, 999px) 0px",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
                {...{
                  label: true,
                  iconR: false,
                  state: "default",
                  size: "large",
                  style: "solid",
                  position: "last",
                }}
              />
            </div>
          </>
        )}
      {/* id="188:1781" */}
      {`${items}` === `3` &&
        `${size}` === `large` &&
        `${style}` === `solid` && (
          <>
            {/* name="items=3, size=large, style=solid" id="188:1781" type="COMPONENT" */}
            <div style={{ display: "inline-flex", alignItems: "center" }}>
              {/* name=".radioButton__item" id="188:1782" type="INSTANCE" */}
              <QodeRadio
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightlg, 40px)",
                  padding:
                    "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderRadius:
                    "var(--style-radius-borderround, 999px) 0px 0px var(--style-radius-borderround, 999px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--primary-primary-50, #1597f4)",
                  background: "var(--primary-primary-50, #1597f4)",
                }}
                {...{
                  label: true,
                  state: "active",
                  size: "large",
                  style: "solid",
                  position: "first",
                }}
              />
              {/* name=".radioButton__item" id="188:1783" type="INSTANCE" */}
              <QodeRadio
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightlg, 40px)",
                  padding:
                    "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
                {...{
                  label: true,
                  iconR: false,
                  iconL: false,
                  state: "default",
                  size: "large",
                  style: "solid",
                  position: "center",
                }}
              />
              {/* name=".radioButton__item" id="188:1784" type="INSTANCE" */}
              <QodeRadio
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightlg, 40px)",
                  padding:
                    "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderRadius:
                    "0px var(--style-radius-borderround, 999px) var(--style-radius-borderround, 999px) 0px",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
                {...{
                  label: true,
                  iconR: false,
                  state: "default",
                  size: "large",
                  style: "solid",
                  position: "last",
                }}
              />
            </div>
          </>
        )}
      {/* id="188:1785" */}
      {`${items}` === `4` &&
        `${size}` === `large` &&
        `${style}` === `solid` && (
          <>
            {/* name="items=4, size=large, style=solid" id="188:1785" type="COMPONENT" */}
            <div style={{ display: "inline-flex", alignItems: "center" }}>
              {/* name=".radioButton__item" id="188:1786" type="INSTANCE" */}
              <QodeRadio
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightlg, 40px)",
                  padding:
                    "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderRadius:
                    "var(--style-radius-borderround, 999px) 0px 0px var(--style-radius-borderround, 999px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--primary-primary-50, #1597f4)",
                  background: "var(--primary-primary-50, #1597f4)",
                }}
                {...{
                  label: true,
                  state: "active",
                  size: "large",
                  style: "solid",
                  position: "first",
                }}
              />
              {/* name=".radioButton__item" id="188:1787" type="INSTANCE" */}
              <QodeRadio
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightlg, 40px)",
                  padding:
                    "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
                {...{
                  label: true,
                  iconR: false,
                  iconL: false,
                  state: "default",
                  size: "large",
                  style: "solid",
                  position: "center",
                }}
              />
              {/* name=".radioButton__item" id="188:1788" type="INSTANCE" */}
              <QodeRadio
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightlg, 40px)",
                  padding:
                    "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
                {...{
                  label: true,
                  iconR: false,
                  iconL: false,
                  state: "default",
                  size: "large",
                  style: "solid",
                  position: "center",
                }}
              />
              {/* name=".radioButton__item" id="188:1789" type="INSTANCE" */}
              <QodeRadio
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightlg, 40px)",
                  padding:
                    "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderRadius:
                    "0px var(--style-radius-borderround, 999px) var(--style-radius-borderround, 999px) 0px",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
                {...{
                  label: true,
                  iconR: false,
                  state: "default",
                  size: "large",
                  style: "solid",
                  position: "last",
                }}
              />
            </div>
          </>
        )}
      {/* id="188:1790" */}
      {`${items}` === `5` &&
        `${size}` === `large` &&
        `${style}` === `solid` && (
          <>
            {/* name="items=5, size=large, style=solid" id="188:1790" type="COMPONENT" */}
            <div style={{ display: "inline-flex", alignItems: "center" }}>
              {/* name=".radioButton__item" id="188:1791" type="INSTANCE" */}
              <QodeRadio
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightlg, 40px)",
                  padding:
                    "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderRadius:
                    "var(--style-radius-borderround, 999px) 0px 0px var(--style-radius-borderround, 999px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--primary-primary-50, #1597f4)",
                  background: "var(--primary-primary-50, #1597f4)",
                }}
                {...{
                  label: true,
                  state: "active",
                  size: "large",
                  style: "solid",
                  position: "first",
                }}
              />
              {/* name=".radioButton__item" id="188:1792" type="INSTANCE" */}
              <QodeRadio
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightlg, 40px)",
                  padding:
                    "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
                {...{
                  label: true,
                  iconR: false,
                  iconL: false,
                  state: "default",
                  size: "large",
                  style: "solid",
                  position: "center",
                }}
              />
              {/* name=".radioButton__item" id="188:1793" type="INSTANCE" */}
              <QodeRadio
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightlg, 40px)",
                  padding:
                    "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
                {...{
                  label: true,
                  iconR: false,
                  iconL: false,
                  state: "default",
                  size: "large",
                  style: "solid",
                  position: "center",
                }}
              />
              {/* name=".radioButton__item" id="188:1794" type="INSTANCE" */}
              <QodeRadio
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightlg, 40px)",
                  padding:
                    "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
                {...{
                  label: true,
                  iconR: false,
                  iconL: false,
                  state: "default",
                  size: "large",
                  style: "solid",
                  position: "center",
                }}
              />
              {/* name=".radioButton__item" id="188:1795" type="INSTANCE" */}
              <QodeRadio
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightlg, 40px)",
                  padding:
                    "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderRadius:
                    "0px var(--style-radius-borderround, 999px) var(--style-radius-borderround, 999px) 0px",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
                {...{
                  label: true,
                  iconR: false,
                  state: "default",
                  size: "large",
                  style: "solid",
                  position: "last",
                }}
              />
            </div>
          </>
        )}
      {/* id="188:1796" */}
      {`${items}` === `6` &&
        `${size}` === `large` &&
        `${style}` === `solid` && (
          <>
            {/* name="items=6, size=large, style=solid" id="188:1796" type="COMPONENT" */}
            <div style={{ display: "inline-flex", alignItems: "center" }}>
              {/* name=".radioButton__item" id="188:1797" type="INSTANCE" */}
              <QodeRadio
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightlg, 40px)",
                  padding:
                    "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderRadius:
                    "var(--style-radius-borderround, 999px) 0px 0px var(--style-radius-borderround, 999px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--primary-primary-50, #1597f4)",
                  background: "var(--primary-primary-50, #1597f4)",
                }}
                {...{
                  label: true,
                  state: "active",
                  size: "large",
                  style: "solid",
                  position: "first",
                }}
              />
              {/* name=".radioButton__item" id="188:1798" type="INSTANCE" */}
              <QodeRadio
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightlg, 40px)",
                  padding:
                    "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
                {...{
                  label: true,
                  iconR: false,
                  iconL: false,
                  state: "default",
                  size: "large",
                  style: "solid",
                  position: "center",
                }}
              />
              {/* name=".radioButton__item" id="188:1799" type="INSTANCE" */}
              <QodeRadio
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightlg, 40px)",
                  padding:
                    "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
                {...{
                  label: true,
                  iconR: false,
                  iconL: false,
                  state: "default",
                  size: "large",
                  style: "solid",
                  position: "center",
                }}
              />
              {/* name=".radioButton__item" id="188:1800" type="INSTANCE" */}
              <QodeRadio
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightlg, 40px)",
                  padding:
                    "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
                {...{
                  label: true,
                  iconR: false,
                  iconL: false,
                  state: "default",
                  size: "large",
                  style: "solid",
                  position: "center",
                }}
              />
              {/* name=".radioButton__item" id="188:1801" type="INSTANCE" */}
              <QodeRadio
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightlg, 40px)",
                  padding:
                    "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
                {...{
                  label: true,
                  iconR: false,
                  iconL: false,
                  state: "default",
                  size: "large",
                  style: "solid",
                  position: "center",
                }}
              />
              {/* name=".radioButton__item" id="188:1802" type="INSTANCE" */}
              <QodeRadio
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightlg, 40px)",
                  padding:
                    "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderRadius:
                    "0px var(--style-radius-borderround, 999px) var(--style-radius-borderround, 999px) 0px",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
                {...{
                  label: true,
                  iconR: false,
                  state: "default",
                  size: "large",
                  style: "solid",
                  position: "last",
                }}
              />
            </div>
          </>
        )}
      {/* id="188:1803" */}
      {`${items}` === `2` &&
        `${size}` === `small` &&
        `${style}` === `solid` && (
          <>
            {/* name="items=2, size=small, style=solid" id="188:1803" type="COMPONENT" */}
            <div style={{ display: "inline-flex", alignItems: "center" }}>
              {/* name=".radioButton__item" id="188:1804" type="INSTANCE" */}
              <QodeRadio
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderRadius:
                    "var(--style-radius-borderround, 999px) 0px 0px var(--style-radius-borderround, 999px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--primary-primary-50, #1597f4)",
                  background: "var(--primary-primary-50, #1597f4)",
                }}
                {...{
                  label: true,
                  iconR: false,
                  iconL: false,
                  state: "active",
                  size: "small",
                  style: "solid",
                  position: "first",
                }}
              />
              {/* name=".radioButton__item" id="188:1805" type="INSTANCE" */}
              <QodeRadio
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderRadius:
                    "0px var(--style-radius-borderround, 999px) var(--style-radius-borderround, 999px) 0px",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
                {...{
                  label: true,
                  iconL: false,
                  state: "default",
                  size: "small",
                  style: "solid",
                  position: "last",
                }}
              />
            </div>
          </>
        )}
      {/* id="188:1806" */}
      {`${items}` === `3` &&
        `${size}` === `small` &&
        `${style}` === `solid` && (
          <>
            {/* name="items=3, size=small, style=solid" id="188:1806" type="COMPONENT" */}
            <div style={{ display: "inline-flex", alignItems: "center" }}>
              {/* name=".radioButton__item" id="188:1807" type="INSTANCE" */}
              <QodeRadio
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderRadius:
                    "var(--style-radius-borderround, 999px) 0px 0px var(--style-radius-borderround, 999px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--primary-primary-50, #1597f4)",
                  background: "var(--primary-primary-50, #1597f4)",
                }}
                {...{
                  label: true,
                  iconR: false,
                  iconL: false,
                  state: "active",
                  size: "small",
                  style: "solid",
                  position: "first",
                }}
              />
              {/* name=".radioButton__item" id="188:1808" type="INSTANCE" */}
              <QodeRadio
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
                {...{
                  iconR: false,
                  label: true,
                  state: "default",
                  size: "small",
                  style: "solid",
                  position: "center",
                }}
              />
              {/* name=".radioButton__item" id="188:1809" type="INSTANCE" */}
              <QodeRadio
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderRadius:
                    "0px var(--style-radius-borderround, 999px) var(--style-radius-borderround, 999px) 0px",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
                {...{
                  label: true,
                  iconL: false,
                  state: "default",
                  size: "small",
                  style: "solid",
                  position: "last",
                }}
              />
            </div>
          </>
        )}
      {/* id="188:1810" */}
      {`${items}` === `4` &&
        `${size}` === `small` &&
        `${style}` === `solid` && (
          <>
            {/* name="items=4, size=small, style=solid" id="188:1810" type="COMPONENT" */}
            <div style={{ display: "inline-flex", alignItems: "center" }}>
              {/* name=".radioButton__item" id="188:1811" type="INSTANCE" */}
              <QodeRadio
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderRadius:
                    "var(--style-radius-borderround, 999px) 0px 0px var(--style-radius-borderround, 999px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--primary-primary-50, #1597f4)",
                  background: "var(--primary-primary-50, #1597f4)",
                }}
                {...{
                  label: true,
                  iconR: false,
                  iconL: false,
                  state: "active",
                  size: "small",
                  style: "solid",
                  position: "first",
                }}
              />
              {/* name=".radioButton__item" id="188:1812" type="INSTANCE" */}
              <QodeRadio
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
                {...{
                  iconR: false,
                  label: true,
                  state: "default",
                  size: "small",
                  style: "solid",
                  position: "center",
                }}
              />
              {/* name=".radioButton__item" id="188:1813" type="INSTANCE" */}
              <QodeRadio
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
                {...{
                  iconR: false,
                  label: true,
                  state: "default",
                  size: "small",
                  style: "solid",
                  position: "center",
                }}
              />
              {/* name=".radioButton__item" id="188:1814" type="INSTANCE" */}
              <QodeRadio
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderRadius:
                    "0px var(--style-radius-borderround, 999px) var(--style-radius-borderround, 999px) 0px",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
                {...{
                  label: true,
                  iconL: false,
                  state: "default",
                  size: "small",
                  style: "solid",
                  position: "last",
                }}
              />
            </div>
          </>
        )}
      {/* id="188:1815" */}
      {`${items}` === `5` &&
        `${size}` === `small` &&
        `${style}` === `solid` && (
          <>
            {/* name="items=5, size=small, style=solid" id="188:1815" type="COMPONENT" */}
            <div style={{ display: "inline-flex", alignItems: "center" }}>
              {/* name=".radioButton__item" id="188:1816" type="INSTANCE" */}
              <QodeRadio
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderRadius:
                    "var(--style-radius-borderround, 999px) 0px 0px var(--style-radius-borderround, 999px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--primary-primary-50, #1597f4)",
                  background: "var(--primary-primary-50, #1597f4)",
                }}
                {...{
                  label: true,
                  iconR: false,
                  iconL: false,
                  state: "active",
                  size: "small",
                  style: "solid",
                  position: "first",
                }}
              />
              {/* name=".radioButton__item" id="188:1817" type="INSTANCE" */}
              <QodeRadio
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
                {...{
                  iconR: false,
                  label: true,
                  state: "default",
                  size: "small",
                  style: "solid",
                  position: "center",
                }}
              />
              {/* name=".radioButton__item" id="188:1818" type="INSTANCE" */}
              <QodeRadio
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
                {...{
                  iconR: false,
                  label: true,
                  state: "default",
                  size: "small",
                  style: "solid",
                  position: "center",
                }}
              />
              {/* name=".radioButton__item" id="188:1819" type="INSTANCE" */}
              <QodeRadio
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
                {...{
                  iconR: false,
                  label: true,
                  state: "default",
                  size: "small",
                  style: "solid",
                  position: "center",
                }}
              />
              {/* name=".radioButton__item" id="188:1820" type="INSTANCE" */}
              <QodeRadio
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderRadius:
                    "0px var(--style-radius-borderround, 999px) var(--style-radius-borderround, 999px) 0px",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
                {...{
                  label: true,
                  iconL: false,
                  state: "default",
                  size: "small",
                  style: "solid",
                  position: "last",
                }}
              />
            </div>
          </>
        )}
      {/* id="188:1821" */}
      {`${items}` === `6` &&
        `${size}` === `small` &&
        `${style}` === `solid` && (
          <>
            {/* name="items=6, size=small, style=solid" id="188:1821" type="COMPONENT" */}
            <div style={{ display: "inline-flex", alignItems: "center" }}>
              {/* name=".radioButton__item" id="188:1822" type="INSTANCE" */}
              <QodeRadio
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderRadius:
                    "var(--style-radius-borderround, 999px) 0px 0px var(--style-radius-borderround, 999px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--primary-primary-50, #1597f4)",
                  background: "var(--primary-primary-50, #1597f4)",
                }}
                {...{
                  label: true,
                  iconR: false,
                  iconL: false,
                  state: "active",
                  size: "small",
                  style: "solid",
                  position: "first",
                }}
              />
              {/* name=".radioButton__item" id="188:1823" type="INSTANCE" */}
              <QodeRadio
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
                {...{
                  iconR: false,
                  label: true,
                  state: "default",
                  size: "small",
                  style: "solid",
                  position: "center",
                }}
              />
              {/* name=".radioButton__item" id="188:1824" type="INSTANCE" */}
              <QodeRadio
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
                {...{
                  iconR: false,
                  label: true,
                  state: "default",
                  size: "small",
                  style: "solid",
                  position: "center",
                }}
              />
              {/* name=".radioButton__item" id="188:1825" type="INSTANCE" */}
              <QodeRadio
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
                {...{
                  iconR: false,
                  label: true,
                  state: "default",
                  size: "small",
                  style: "solid",
                  position: "center",
                }}
              />
              {/* name=".radioButton__item" id="188:1826" type="INSTANCE" */}
              <QodeRadio
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
                {...{
                  iconR: false,
                  label: true,
                  state: "default",
                  size: "small",
                  style: "solid",
                  position: "center",
                }}
              />
              {/* name=".radioButton__item" id="188:1827" type="INSTANCE" */}
              <QodeRadio
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  borderRadius:
                    "0px var(--style-radius-borderround, 999px) var(--style-radius-borderround, 999px) 0px",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--text-text-white, #fff)",
                }}
                {...{
                  label: true,
                  iconL: false,
                  state: "default",
                  size: "small",
                  style: "solid",
                  position: "last",
                }}
              />
            </div>
          </>
        )}
    </>
  )
}
