import { useEffect, useState } from 'react'
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
  const [arrayData, setArrayData] = useState<any[]>([]);

  useEffect(()=>{
    const fetchData = async () => {
      try {
        const res = await fetch("/api/stocks");
        const data = await res.json();

        console.log(data);
        setArrayData(data.data);
      } catch (error) {
        console.error("Error:", error);
        setTimeout(fetchData, 30000);
      }
    };
    
    fetchData(); 
    
    const interval = setInterval(fetchData, 10000);
    return () => clearInterval(interval);
  },[])

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
            {arrayData.map((stock, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium text-white">{index + 1}</TableCell>
                <TableCell className="text-white">{stock.company_name || 'N/A'}</TableCell>
                <TableCell className="text-white">N/A</TableCell>
                <TableCell className="text-white">N/A</TableCell>
                <TableCell className="text-white">N/A</TableCell>
                <TableCell className="text-white">N/A</TableCell>
                <TableCell className="text-white">{stock.symbol || 'N/A'}</TableCell>
                <TableCell className="text-white">{stock.cmp || 'N/A'}</TableCell>
                <TableCell className="text-white">N/A</TableCell>
                <TableCell className="text-white">N/A</TableCell>
                <TableCell className="text-white">N/A</TableCell>
                <TableCell className="text-white">{stock.market_cap || 'N/A'}</TableCell>
                <TableCell className="text-white">{stock.pe_ratio || 'N/A'}</TableCell>
                <TableCell className="text-white">{stock.latest_earnings || 'N/A'}</TableCell>
                <TableCell className="text-white">{stock.revenue_ttm || 'N/A'}</TableCell>
                <TableCell className="text-white">{stock.ebitda_ttm || 'N/A'}</TableCell>
                <TableCell className="text-white">{stock.ebitda_percentage || 'N/A'}</TableCell>
                <TableCell className="text-white">{stock.pat || 'N/A'}</TableCell>
                <TableCell className="text-white">{stock.pat_percentage || 'N/A'}</TableCell>
                <TableCell className="text-white">{stock.cfo_march_24 || 'N/A'}</TableCell>
                <TableCell className="text-white">{stock.cfo_5_years || 'N/A'}</TableCell>
                <TableCell className="text-white">{stock.free_cash_flow_5_years || 'N/A'}</TableCell>
                <TableCell className="text-white">{stock.debt_to_equity || 'N/A'}</TableCell>
                <TableCell className="text-white">{stock.book_value || 'N/A'}</TableCell>
                <TableCell className="text-white">{stock.revenue_ttm || 'N/A'}</TableCell>
                <TableCell className="text-white">{stock.ebitda_ttm || 'N/A'}</TableCell>
                <TableCell className="text-white">{stock.pat || 'N/A'}</TableCell>
                <TableCell className="text-white">{stock.market_cap || 'N/A'}</TableCell>
                <TableCell className="text-white">{stock.price_to_sales || 'N/A'}</TableCell>
                <TableCell className="text-white">{stock.cfo_to_ebitda || 'N/A'}</TableCell>
                <TableCell className="text-white">{stock.cfo_to_pat || 'N/A'}</TableCell>
                <TableCell className="text-white">{stock.price_to_book || 'N/A'}</TableCell>
                <TableCell className="text-white">N/A</TableCell>
                <TableCell className="text-white">N/A</TableCell>
              </TableRow>
            ))}
             
          </TableBody>
        </Table>
        </div>
      </div>
    </>
  )
}

export default App
