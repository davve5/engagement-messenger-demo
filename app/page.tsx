
import { AppSidebar } from "@/components/app-sidebar"
import { ChartAreaInteractive } from "@/components/chart-area-interactive"
import { DataTable } from "@/components/data-table"
import { SectionCards } from "@/components/section-cards"
import { SiteHeader } from "@/components/site-header"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"

import Script from "next/script"
import data from "./data.json"

export default function Page() {
  return (
    <>
    <Script strategy="beforeInteractive"  src="https://ven03799.service-now.com/scripts/sn_csm_ec.js?v=5.6"/>
      <Script
        id="em"
        strategy="afterInteractive"
      >
        {`
        SN_CSM_EC.init({
          moduleID: "https://ven03799.service-now.com/#9c293dcf9731a6108534b286f053af4e",
          loadFeature: SN_CSM_EC.loadEMFeature()
        });
        `}</Script>
        
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <SectionCards />
              <div className="px-4 lg:px-6">
                <ChartAreaInteractive />
              </div>
              <DataTable data={data} />
            </div>
          </div>
        </div>
      </SidebarInset>
      </SidebarProvider>
      </>
  )
}
