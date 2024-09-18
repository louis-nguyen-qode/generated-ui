// id="167:2031"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom1671997 } from "@designSystem/custom/QodeCustom1671997"
import { QodeCustom1671983 } from "@designSystem/custom/QodeCustom1671983"
import { QodeCustom1672011 } from "@designSystem/custom/QodeCustom1672011"
import { QodeCustom267732414 } from "@designSystem/custom/QodeCustom267732414"

export interface QodeCustom1672031Props {
  items?: "2" | "3" | "4" | "5" | "6"
  theme?: "line" | "box"
}

export const QodeCustom1672031: React.FC<
  QodeCustom1672031Props & { style?: CSSProperties }
> = ({ items = "2", theme = "line", ...rest }) => {
  return (
    <>
      {/* name="Menu__TopNavigation" id="167:2031" type="COMPONENT_SET" */}
      {/* id="167:2030" */}
      {`${items}` === `2` && `${theme}` === `line` && (
        <>
          {/* name="items=2, theme=line" id="167:2030" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "flex-start",
              borderBottom:
                "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorsplit, rgba(0, 0, 0, 0.06))",
              background:
                "var(--color-neutral-background-colorbgcontainer, #fff)",
            }}
          >
            {/* name="🧬 item 1" id="167:2021" type="INSTANCE" */}
            <QodeCustom1671997
              style={{
                display: "flex",
                padding:
                  "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                borderBottom:
                  "var(--style-line-width-linewidthbold, 2px) solid var(--color-primary-colorprimary, #1597f4)",
                background: "var(--primary-primary-50, #1597f4)",
              }}
              {...{
                title: "Navigation Item",
                showLIcon: true,
                state: "active",
                theme: "line",
              }}
            />
            {/* name="🧬 item 2" id="167:2025" type="INSTANCE" */}
            <QodeCustom1671983
              style={{
                display: "flex",
                padding:
                  "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
              }}
              {...{
                title: "Navigation Item",
                showLIcon: true,
                state: "default",
                theme: "line",
              }}
            />
          </div>
        </>
      )}
      {/* id="167:2044" */}
      {`${items}` === `3` && `${theme}` === `line` && (
        <>
          {/* name="items=3, theme=line" id="167:2044" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "flex-start",
              borderBottom:
                "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorsplit, rgba(0, 0, 0, 0.06))",
              background:
                "var(--color-neutral-background-colorbgcontainer, #fff)",
            }}
          >
            {/* name="🧬 item 1" id="167:2045" type="INSTANCE" */}
            <QodeCustom1671997
              style={{
                display: "flex",
                padding:
                  "var(--size-padding-paddingsm, 12px) var(--size-padding-padding, 16px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                borderBottom:
                  "var(--style-line-width-linewidthbold, 2px) solid var(--color-primary-colorprimary, #1597f4)",
                background: "var(--primary-primary-50, #1597f4)",
              }}
              {...{
                title: "Navigation Item",
                showLIcon: true,
                state: "active",
                theme: "line",
              }}
            />
            {/* name="🧬 item 2" id="167:2046" type="INSTANCE" */}
            <QodeCustom1671983
              style={{
                display: "flex",
                padding:
                  "var(--size-padding-paddingsm, 12px) var(--size-padding-padding, 16px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
              }}
              {...{
                title: "Navigation Item",
                showLIcon: true,
                state: "default",
                theme: "line",
              }}
            />
            {/* name="🧬 item 3" id="167:2053" type="INSTANCE" */}
            <QodeCustom1671983
              style={{
                display: "flex",
                padding:
                  "var(--size-padding-paddingsm, 12px) var(--size-padding-padding, 16px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
              }}
              {...{
                title: "Navigation Item",
                showLIcon: true,
                state: "default",
                theme: "line",
              }}
            />
          </div>
        </>
      )}
      {/* id="167:2057" */}
      {`${items}` === `4` && `${theme}` === `line` && (
        <>
          {/* name="items=4, theme=line" id="167:2057" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "flex-start",
              borderBottom:
                "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorsplit, rgba(0, 0, 0, 0.06))",
              background:
                "var(--color-neutral-background-colorbgcontainer, #fff)",
            }}
          >
            {/* name="🧬 item 1" id="167:2058" type="INSTANCE" */}
            <QodeCustom1671997
              style={{
                display: "flex",
                padding:
                  "var(--size-padding-paddingsm, 12px) var(--size-padding-padding, 16px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                borderBottom:
                  "var(--style-line-width-linewidthbold, 2px) solid var(--color-primary-colorprimary, #1597f4)",
                background: "var(--primary-primary-50, #1597f4)",
              }}
              {...{
                title: "Navigation Item",
                showLIcon: true,
                state: "active",
                theme: "line",
              }}
            />
            {/* name="🧬 item 2" id="167:2059" type="INSTANCE" */}
            <QodeCustom1671983
              style={{
                display: "flex",
                padding:
                  "var(--size-padding-paddingsm, 12px) var(--size-padding-padding, 16px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
              }}
              {...{
                title: "Navigation Item",
                showLIcon: true,
                state: "default",
                theme: "line",
              }}
            />
            {/* name="🧬 item 3" id="167:2060" type="INSTANCE" */}
            <QodeCustom1671983
              style={{
                display: "flex",
                padding:
                  "var(--size-padding-paddingsm, 12px) var(--size-padding-padding, 16px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
              }}
              {...{
                title: "Navigation Item",
                showLIcon: true,
                state: "default",
                theme: "line",
              }}
            />
            {/* name="🧬 item 4" id="167:2070" type="INSTANCE" */}
            <QodeCustom1671983
              style={{
                display: "flex",
                padding:
                  "var(--size-padding-paddingsm, 12px) var(--size-padding-padding, 16px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
              }}
              {...{
                title: "Navigation Item",
                showLIcon: true,
                state: "default",
                theme: "line",
              }}
            />
          </div>
        </>
      )}
      {/* id="167:2074" */}
      {`${items}` === `5` && `${theme}` === `line` && (
        <>
          {/* name="items=5, theme=line" id="167:2074" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "flex-start",
              borderBottom:
                "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorsplit, rgba(0, 0, 0, 0.06))",
              background:
                "var(--color-neutral-background-colorbgcontainer, #fff)",
            }}
          >
            {/* name="🧬 item 1" id="167:2075" type="INSTANCE" */}
            <QodeCustom1671997
              style={{
                display: "flex",
                padding:
                  "var(--size-padding-paddingsm, 12px) var(--size-padding-padding, 16px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                borderBottom:
                  "var(--style-line-width-linewidthbold, 2px) solid var(--color-primary-colorprimary, #1597f4)",
                background: "var(--primary-primary-50, #1597f4)",
              }}
              {...{
                title: "Navigation Item",
                showLIcon: true,
                state: "active",
                theme: "line",
              }}
            />
            {/* name="🧬 item 2" id="167:2076" type="INSTANCE" */}
            <QodeCustom1671983
              style={{
                display: "flex",
                padding:
                  "var(--size-padding-paddingsm, 12px) var(--size-padding-padding, 16px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
              }}
              {...{
                title: "Navigation Item",
                showLIcon: true,
                state: "default",
                theme: "line",
              }}
            />
            {/* name="🧬 item 3" id="167:2077" type="INSTANCE" */}
            <QodeCustom1671983
              style={{
                display: "flex",
                padding:
                  "var(--size-padding-paddingsm, 12px) var(--size-padding-padding, 16px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
              }}
              {...{
                title: "Navigation Item",
                showLIcon: true,
                state: "default",
                theme: "line",
              }}
            />
            {/* name="🧬 item 4" id="167:2078" type="INSTANCE" */}
            <QodeCustom1671983
              style={{
                display: "flex",
                padding:
                  "var(--size-padding-paddingsm, 12px) var(--size-padding-padding, 16px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
              }}
              {...{
                title: "Navigation Item",
                showLIcon: true,
                state: "default",
                theme: "line",
              }}
            />
            {/* name="🧬 item 5" id="167:2091" type="INSTANCE" */}
            <QodeCustom1671983
              style={{
                display: "flex",
                padding:
                  "var(--size-padding-paddingsm, 12px) var(--size-padding-padding, 16px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
              }}
              {...{
                title: "Navigation Item",
                showLIcon: true,
                state: "default",
                theme: "line",
              }}
            />
          </div>
        </>
      )}
      {/* id="167:2095" */}
      {`${items}` === `6` && `${theme}` === `line` && (
        <>
          {/* name="items=6, theme=line" id="167:2095" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "flex-start",
              borderBottom:
                "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorsplit, rgba(0, 0, 0, 0.06))",
              background:
                "var(--color-neutral-background-colorbgcontainer, #fff)",
            }}
          >
            {/* name="🧬 item 1" id="167:2096" type="INSTANCE" */}
            <QodeCustom1671997
              style={{
                display: "flex",
                padding:
                  "var(--size-padding-paddingsm, 12px) var(--size-padding-padding, 16px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                borderBottom:
                  "var(--style-line-width-linewidthbold, 2px) solid var(--color-primary-colorprimary, #1597f4)",
                background: "var(--primary-primary-50, #1597f4)",
              }}
              {...{
                title: "Navigation Item",
                showLIcon: true,
                state: "active",
                theme: "line",
              }}
            />
            {/* name="🧬 item 2" id="167:2097" type="INSTANCE" */}
            <QodeCustom1671983
              style={{
                display: "flex",
                padding:
                  "var(--size-padding-paddingsm, 12px) var(--size-padding-padding, 16px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
              }}
              {...{
                title: "Navigation Item",
                showLIcon: true,
                state: "default",
                theme: "line",
              }}
            />
            {/* name="🧬 item 3" id="167:2098" type="INSTANCE" */}
            <QodeCustom1671983
              style={{
                display: "flex",
                padding:
                  "var(--size-padding-paddingsm, 12px) var(--size-padding-padding, 16px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
              }}
              {...{
                title: "Navigation Item",
                showLIcon: true,
                state: "default",
                theme: "line",
              }}
            />
            {/* name="🧬 item 4" id="167:2099" type="INSTANCE" */}
            <QodeCustom1671983
              style={{
                display: "flex",
                padding:
                  "var(--size-padding-paddingsm, 12px) var(--size-padding-padding, 16px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
              }}
              {...{
                title: "Navigation Item",
                showLIcon: true,
                state: "default",
                theme: "line",
              }}
            />
            {/* name="🧬 item 5" id="167:2100" type="INSTANCE" */}
            <QodeCustom1671983
              style={{
                display: "flex",
                padding:
                  "var(--size-padding-paddingsm, 12px) var(--size-padding-padding, 16px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
              }}
              {...{
                title: "Navigation Item",
                showLIcon: true,
                state: "default",
                theme: "line",
              }}
            />
            {/* name="🧬 item 6" id="167:2116" type="INSTANCE" */}
            <QodeCustom1671983
              style={{
                display: "flex",
                padding:
                  "var(--size-padding-paddingsm, 12px) var(--size-padding-padding, 16px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
              }}
              {...{
                title: "Navigation Item",
                showLIcon: true,
                state: "default",
                theme: "line",
              }}
            />
          </div>
        </>
      )}
      {/* id="167:2219" */}
      {`${items}` === `2` && `${theme}` === `box` && (
        <>
          {/* name="items=2, theme=box" id="167:2219" type="COMPONENT" */}
          <div style={{ display: "inline-flex", alignItems: "flex-start" }}>
            {/* name="🧬 item 1" id="167:2220" type="INSTANCE" */}
            <QodeCustom1672011
              style={{
                display: "flex",
                padding:
                  "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                borderRadius: "var(--style-radius-borderround, 999px)",
                background: "var(--primary-primary-50, #1597f4)",
                boxShadow:
                  "0px 2px 4px 0px rgba(0, 0, 0, 0.02), 0px 1px 6px -1px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.03)",
              }}
              {...{
                title: "Navigation Item",
                showLIcon: true,
                state: "active",
                theme: "solid",
              }}
            />
            {/* name="🧬 item 2" id="167:2221" type="INSTANCE" */}
            <QodeCustom267732414
              style={{
                display: "flex",
                padding:
                  "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                borderRadius: "var(--style-radius-borderround, 999px)",
              }}
              {...{
                title: "Navigation Item",
                showLIcon: true,
                state: "default",
                theme: "solid",
              }}
            />
          </div>
        </>
      )}
      {/* id="167:2222" */}
      {`${items}` === `3` && `${theme}` === `box` && (
        <>
          {/* name="items=3, theme=box" id="167:2222" type="COMPONENT" */}
          <div style={{ display: "inline-flex", alignItems: "flex-start" }}>
            {/* name="🧬 item 1" id="167:2223" type="INSTANCE" */}
            <QodeCustom1672011
              style={{
                display: "flex",
                padding:
                  "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                borderRadius: "var(--style-radius-borderround, 999px)",
                background: "var(--primary-primary-50, #1597f4)",
                boxShadow:
                  "0px 2px 4px 0px rgba(0, 0, 0, 0.02), 0px 1px 6px -1px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.03)",
              }}
              {...{
                title: "Navigation Item",
                showLIcon: true,
                state: "active",
                theme: "solid",
              }}
            />
            {/* name="🧬 item 2" id="167:2224" type="INSTANCE" */}
            <QodeCustom267732414
              style={{
                display: "flex",
                padding:
                  "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                borderRadius: "var(--style-radius-borderround, 999px)",
              }}
              {...{
                title: "Navigation Item",
                showLIcon: true,
                state: "default",
                theme: "solid",
              }}
            />
            {/* name="🧬 item 3" id="167:2225" type="INSTANCE" */}
            <QodeCustom267732414
              style={{
                display: "flex",
                padding:
                  "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                borderRadius: "var(--style-radius-borderround, 999px)",
              }}
              {...{
                title: "Navigation Item",
                showLIcon: true,
                state: "default",
                theme: "solid",
              }}
            />
          </div>
        </>
      )}
      {/* id="167:2226" */}
      {`${items}` === `4` && `${theme}` === `box` && (
        <>
          {/* name="items=4, theme=box" id="167:2226" type="COMPONENT" */}
          <div style={{ display: "inline-flex", alignItems: "flex-start" }}>
            {/* name="🧬 item 1" id="167:2227" type="INSTANCE" */}
            <QodeCustom1672011
              style={{
                display: "flex",
                padding:
                  "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                borderRadius: "var(--style-radius-borderround, 999px)",
                background: "var(--primary-primary-50, #1597f4)",
                boxShadow:
                  "0px 2px 4px 0px rgba(0, 0, 0, 0.02), 0px 1px 6px -1px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.03)",
              }}
              {...{
                title: "Navigation Item",
                showLIcon: true,
                state: "active",
                theme: "solid",
              }}
            />
            {/* name="🧬 item 2" id="167:2228" type="INSTANCE" */}
            <QodeCustom267732414
              style={{
                display: "flex",
                padding:
                  "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                borderRadius: "var(--style-radius-borderround, 999px)",
              }}
              {...{
                title: "Navigation Item",
                showLIcon: true,
                state: "default",
                theme: "solid",
              }}
            />
            {/* name="🧬 item 3" id="167:2229" type="INSTANCE" */}
            <QodeCustom267732414
              style={{
                display: "flex",
                padding:
                  "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                borderRadius: "var(--style-radius-borderround, 999px)",
              }}
              {...{
                title: "Navigation Item",
                showLIcon: true,
                state: "default",
                theme: "solid",
              }}
            />
            {/* name="🧬 item 4" id="167:2230" type="INSTANCE" */}
            <QodeCustom267732414
              style={{
                display: "flex",
                padding:
                  "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                borderRadius: "var(--style-radius-borderround, 999px)",
              }}
              {...{
                title: "Navigation Item",
                showLIcon: true,
                state: "default",
                theme: "solid",
              }}
            />
          </div>
        </>
      )}
      {/* id="167:2231" */}
      {`${items}` === `5` && `${theme}` === `box` && (
        <>
          {/* name="items=5, theme=box" id="167:2231" type="COMPONENT" */}
          <div style={{ display: "inline-flex", alignItems: "flex-start" }}>
            {/* name="🧬 item 1" id="167:2232" type="INSTANCE" */}
            <QodeCustom1672011
              style={{
                display: "flex",
                padding:
                  "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                borderRadius: "var(--style-radius-borderround, 999px)",
                background: "var(--primary-primary-50, #1597f4)",
                boxShadow:
                  "0px 2px 4px 0px rgba(0, 0, 0, 0.02), 0px 1px 6px -1px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.03)",
              }}
              {...{
                title: "Navigation Item",
                showLIcon: true,
                state: "active",
                theme: "solid",
              }}
            />
            {/* name="🧬 item 2" id="167:2233" type="INSTANCE" */}
            <QodeCustom267732414
              style={{
                display: "flex",
                padding:
                  "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                borderRadius: "var(--style-radius-borderround, 999px)",
              }}
              {...{
                title: "Navigation Item",
                showLIcon: true,
                state: "default",
                theme: "solid",
              }}
            />
            {/* name="🧬 item 3" id="167:2234" type="INSTANCE" */}
            <QodeCustom267732414
              style={{
                display: "flex",
                padding:
                  "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                borderRadius: "var(--style-radius-borderround, 999px)",
              }}
              {...{
                title: "Navigation Item",
                showLIcon: true,
                state: "default",
                theme: "solid",
              }}
            />
            {/* name="🧬 item 4" id="167:2235" type="INSTANCE" */}
            <QodeCustom267732414
              style={{
                display: "flex",
                padding:
                  "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                borderRadius: "var(--style-radius-borderround, 999px)",
              }}
              {...{
                title: "Navigation Item",
                showLIcon: true,
                state: "default",
                theme: "solid",
              }}
            />
            {/* name="🧬 item 5" id="167:2236" type="INSTANCE" */}
            <QodeCustom267732414
              style={{
                display: "flex",
                padding:
                  "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                borderRadius: "var(--style-radius-borderround, 999px)",
              }}
              {...{
                title: "Navigation Item",
                showLIcon: true,
                state: "default",
                theme: "solid",
              }}
            />
          </div>
        </>
      )}
      {/* id="167:2237" */}
      {`${items}` === `6` && `${theme}` === `box` && (
        <>
          {/* name="items=6, theme=box" id="167:2237" type="COMPONENT" */}
          <div style={{ display: "inline-flex", alignItems: "flex-start" }}>
            {/* name="🧬 item 1" id="167:2238" type="INSTANCE" */}
            <QodeCustom1672011
              style={{
                display: "flex",
                padding:
                  "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                borderRadius: "var(--style-radius-borderround, 999px)",
                background: "var(--primary-primary-50, #1597f4)",
                boxShadow:
                  "0px 2px 4px 0px rgba(0, 0, 0, 0.02), 0px 1px 6px -1px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.03)",
              }}
              {...{
                title: "Navigation Item",
                showLIcon: true,
                state: "active",
                theme: "solid",
              }}
            />
            {/* name="🧬 item 2" id="167:2239" type="INSTANCE" */}
            <QodeCustom267732414
              style={{
                display: "flex",
                padding:
                  "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                borderRadius: "var(--style-radius-borderround, 999px)",
              }}
              {...{
                title: "Navigation Item",
                showLIcon: true,
                state: "default",
                theme: "solid",
              }}
            />
            {/* name="🧬 item 3" id="167:2240" type="INSTANCE" */}
            <QodeCustom267732414
              style={{
                display: "flex",
                padding:
                  "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                borderRadius: "var(--style-radius-borderround, 999px)",
              }}
              {...{
                title: "Navigation Item",
                showLIcon: true,
                state: "default",
                theme: "solid",
              }}
            />
            {/* name="🧬 item 4" id="167:2241" type="INSTANCE" */}
            <QodeCustom267732414
              style={{
                display: "flex",
                padding:
                  "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                borderRadius: "var(--style-radius-borderround, 999px)",
              }}
              {...{
                title: "Navigation Item",
                showLIcon: true,
                state: "default",
                theme: "solid",
              }}
            />
            {/* name="🧬 item 5" id="167:2242" type="INSTANCE" */}
            <QodeCustom267732414
              style={{
                display: "flex",
                padding:
                  "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                borderRadius: "var(--style-radius-borderround, 999px)",
              }}
              {...{
                title: "Navigation Item",
                showLIcon: true,
                state: "default",
                theme: "solid",
              }}
            />
            {/* name="🧬 item 6" id="167:2243" type="INSTANCE" */}
            <QodeCustom267732414
              style={{
                display: "flex",
                padding:
                  "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                borderRadius: "var(--style-radius-borderround, 999px)",
              }}
              {...{
                title: "Navigation Item",
                showLIcon: true,
                state: "default",
                theme: "solid",
              }}
            />
          </div>
        </>
      )}
    </>
  )
}
