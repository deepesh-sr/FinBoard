import { useState } from 'react'
import { Button } from './components/ui/button';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className='h-screen bg-gray-900'>
        <div className='w-full text-white'>
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow >
              <TableHead className="text-white">No</TableHead>
              <TableHead className="text-white">Particulars</TableHead>
              <TableHead className="text-white">Purchase Price</TableHead>
              <TableHead className="text-white">Qty</TableHead>
              <TableHead className="text-white">Investment</TableHead>
              <TableHead className="text-white">Portfolio (%)</TableHead>
              <TableHead className="text-white">NSE/BSE</TableHead>
              <TableHead className="text-white">CMP</TableHead>
              <TableHead className="text-white">Present value</TableHead>
              <TableHead className="text-white">Gain/Loss</TableHead>
              <TableHead className="text-white">Gain/Loss (%)</TableHead>
              <TableHead className="text-white">Market Cap</TableHead>
              <TableHead className="text-white">P/E (TTM)</TableHead>
              <TableHead className="text-white">Latest Earnings</TableHead>
              <TableHead className="text-white">Revenue (TTM)</TableHead>
              <TableHead className="text-white">EBITDA (TTM)</TableHead>
              <TableHead className="text-white">EBITDA (%)</TableHead>
              <TableHead className="text-white">PAT</TableHead>
              <TableHead className="text-white">PAT (%)</TableHead>
              <TableHead className="text-white">CFO (March 24)</TableHead>
              <TableHead className="text-white">CFO (5 years)</TableHead>
              <TableHead className="text-white">Free Cash Flow (5 years)</TableHead>
              <TableHead className="text-white">Debt to Equity</TableHead>
              <TableHead className="text-white">Book Value</TableHead>
              <TableHead className="text-white">Revenue</TableHead>
              <TableHead className="text-white">EBITDA</TableHead>
              <TableHead className="text-white">Profit</TableHead>
              <TableHead className="text-white">Market Cap</TableHead>
              <TableHead className="text-white">Price to Sales</TableHead>
              <TableHead className="text-white">CFO to EBITDA</TableHead>
              <TableHead className="text-white">CFO to PAT</TableHead>
              <TableHead className="text-white">Price to book</TableHead>
              <TableHead className="text-white">Stage-2</TableHead>
              <TableHead className="text-white">Sale price</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">INV001</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        </div>
      </div>
    </>
  )
}

export default App
