import { Helmet } from 'react-helmet-async'

import { DayOrdersAmountCard } from './day-orders-amount-card'
import { MonthCanceledOrdersAmountCard } from './month-canceled-orders-amount'
import { MonthOrdersAmountCard } from './month-orders-amount-card'
import { MonthRevenueCard } from './month-revenue-card'
import { RevenueChart } from './revenue-chart'

export const Dashboard = () => {
  return (
    <>
      <Helmet title="Dashboard" />
      <main className="flex flex-col gap-4">
        <h1 className="text-3xl font-semibold tracking-tight">Dashboard</h1>

        <section className="grid grid-cols-4 gap-4">
          <MonthRevenueCard />
          <MonthOrdersAmountCard />
          <DayOrdersAmountCard />
          <MonthCanceledOrdersAmountCard />
        </section>

        <section className="grid grid-cols-9 gap-4">
          <RevenueChart />
        </section>
      </main>
    </>
  )
}
