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
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
function App() {
  const [arrayData, setArrayData] = useState<any[]>([]);
  const [selectedSector, setSelectedSector] = useState<string>("All");

  const API_URL = import.meta.env.VITE_API_URL || '';

  // Fetch full stock details once
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${API_URL}/api/stocks`, {
          method: 'GET',
          headers: {
            'ngrok-skip-browser-warning': 'true'
          }
        });
        const data = await res.json();
        console.log("Full data:", data);
        setArrayData(data.data || []);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, [])

  // Fetch only CMP prices every 10 seconds
  useEffect(() => {
    const fetchCMP = async () => {
      try {
        const res = await fetch("/api/prices",{
          method : 'GET',
          headers : {
            'ngrok-skip-browser-warning' : 'true'
          }
        });
        const data = await res.json();
        console.log(data)
        console.log("CMP updated at:", new Date().toLocaleTimeString());
        
        // Update CMP prices by index (API returns prices in same order as stocks)
        setArrayData(prevData => 
          prevData.map((stock, index) => ({
            ...stock,
            cmp: data.data[index]?.cmp
          }))
        );
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchCMP(); 
    const interval = setInterval(fetchCMP, 10000); 
    return () => clearInterval(interval);
  }, [])

  // Default values for calculations
  const purchasePrice = 100;
  const qty = 1;

  // Calculate total investment
  const totalInvestment = arrayData.length * purchasePrice * qty;

  // Get unique sectors
  const sectors = ["All", ...new Set(arrayData.map(stock => stock.sector).filter(Boolean))];

  // Filter stocks by sector
  const filteredData = selectedSector === "All" 
    ? arrayData 
    : arrayData.filter(stock => stock.sector === selectedSector);

  return (
    <div className='min-h-screen bg-black text-white'>
      <header className='border-b border-zinc-800 bg-zinc-950'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-4 px-4 md:px-8 py-4'>
          <h1 className='text-lg md:text-xl font-semibold tracking-wide'>FINBOARD</h1>
          
          <div className='flex gap-3 items-center'>
            <h1 className='text-sm md:text-xl font-sans tracking-wide'>Filter</h1>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className='bg-zinc-900 border-zinc-700 text-white hover:bg-zinc-800 text-sm md:text-base'>
                  {selectedSector}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className='bg-zinc-900 border-zinc-700'>
                {sectors.map(sector => (
                  <DropdownMenuItem 
                    key={sector} 
                    onClick={() => setSelectedSector(sector)}
                    className='text-zinc-300 hover:bg-zinc-800 hover:text-white focus:bg-zinc-800 focus:text-white'
                  >
                    {sector}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          
          <a href='https://github.com/deepesh-sr/FinBoard.git' className='text-xs md:text-sm text-zinc-400 hover:text-white transition'>
            SOURCE CODE
          </a>
        </div>
      </header>

      <div className='overflow-x-auto'>
        <Table>
          <TableCaption className='text-zinc-500'>Stock Portfolio Overview</TableCaption>
          <TableHeader>
            <TableRow className='border-zinc-800 hover:bg-zinc-900/50'>
              <TableHead className="text-zinc-300 font-medium">No</TableHead>
              <TableHead className="text-zinc-300 font-medium">Particulars</TableHead>
              <TableHead className="text-zinc-300 font-medium">Purchase Price</TableHead>
              <TableHead className="text-zinc-300 font-medium">Qty</TableHead>
              <TableHead className="text-zinc-300 font-medium">Investment</TableHead>
              <TableHead className="text-zinc-300 font-medium">Portfolio (%)</TableHead>
              <TableHead className="text-zinc-300 font-medium">NSE/BSE</TableHead>
              <TableHead className="text-zinc-300 font-medium">CMP</TableHead>
              <TableHead className="text-zinc-300 font-medium">Present Value</TableHead>
              <TableHead className="text-zinc-300 font-medium">Gain/Loss</TableHead>
              <TableHead className="text-zinc-300 font-medium">Gain/Loss (%)</TableHead>
              <TableHead className="text-zinc-300 font-medium">Market Cap</TableHead>
              <TableHead className="text-zinc-300 font-medium">P/E (TTM)</TableHead>
              <TableHead className="text-zinc-300 font-medium">Latest Earnings</TableHead>
              <TableHead className="text-zinc-300 font-medium">Revenue (TTM)</TableHead>
              <TableHead className="text-zinc-300 font-medium">EBITDA (TTM)</TableHead>
              <TableHead className="text-zinc-300 font-medium">EBITDA (%)</TableHead>
              <TableHead className="text-zinc-300 font-medium">PAT</TableHead>
              <TableHead className="text-zinc-300 font-medium">PAT (%)</TableHead>
              <TableHead className="text-zinc-300 font-medium">CFO (March 24)</TableHead>
              <TableHead className="text-zinc-300 font-medium">CFO (5 years)</TableHead>
              <TableHead className="text-zinc-300 font-medium">Free Cash Flow (5 years)</TableHead>
              <TableHead className="text-zinc-300 font-medium">Debt to Equity</TableHead>
              <TableHead className="text-zinc-300 font-medium">Book Value</TableHead>
              <TableHead className="text-zinc-300 font-medium">Revenue</TableHead>
              <TableHead className="text-zinc-300 font-medium">EBITDA</TableHead>
              <TableHead className="text-zinc-300 font-medium">Profit</TableHead>
              <TableHead className="text-zinc-300 font-medium">Market Cap</TableHead>
              <TableHead className="text-zinc-300 font-medium">Price to Sales</TableHead>
              <TableHead className="text-zinc-300 font-medium">CFO to EBITDA</TableHead>
              <TableHead className="text-zinc-300 font-medium">CFO to PAT</TableHead>
              <TableHead className="text-zinc-300 font-medium">Price to Book</TableHead>
              <TableHead className="text-zinc-300 font-medium">Stage-2</TableHead>
              <TableHead className="text-zinc-300 font-medium">Sale Price</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredData.map((stock, index) => {
              const investment = purchasePrice * qty;
              const presentValue = stock.cmp * qty;
              const gainLoss = presentValue - investment;
              const gainLossPercent = ((gainLoss / investment) * 100).toFixed(2);
              const portfolioPercent = ((investment / totalInvestment) * 100).toFixed(2);

              return (
                <TableRow key={index} className='border-zinc-800 hover:bg-zinc-900/30 transition'>
                  <TableCell className="text-zinc-400">{index + 1}</TableCell>
                  <TableCell className="text-white font-medium">{stock.company_name || 'N/A'}</TableCell>
                  <TableCell className="text-zinc-300">₹{purchasePrice}</TableCell>
                  <TableCell className="text-zinc-300">{qty}</TableCell>
                  <TableCell className="text-zinc-300">₹{investment}</TableCell>
                  <TableCell className="text-zinc-300">{portfolioPercent}%</TableCell>
                  <TableCell className="text-zinc-400">{stock.symbol || 'N/A'}</TableCell>
                  <TableCell className="text-zinc-300">₹{stock.cmp?.toFixed(2) || 'N/A'}</TableCell>
                  <TableCell className="text-zinc-300">₹{presentValue.toFixed(2)}</TableCell>
                  <TableCell className={gainLoss >= 0 ? 'text-emerald-400' : 'text-rose-400'}>
                    ₹{gainLoss.toFixed(2)}
                  </TableCell>
                  <TableCell className={gainLoss >= 0 ? 'text-emerald-400' : 'text-rose-400'}>
                    {gainLossPercent}%
                  </TableCell>
                  <TableCell className="text-zinc-300">{stock.market_cap || 'N/A'}</TableCell>
                  <TableCell className="text-zinc-300">{stock.pe_ratio || 'N/A'}</TableCell>
                  <TableCell className="text-zinc-300">{stock.latest_earnings || 'N/A'}</TableCell>
                  <TableCell className="text-zinc-300">{stock.revenue_ttm || 'N/A'}</TableCell>
                  <TableCell className="text-zinc-300">{stock.ebitda_ttm || 'N/A'}</TableCell>
                  <TableCell className="text-zinc-300">{stock.ebitda_percentage || 'N/A'}</TableCell>
                  <TableCell className="text-zinc-300">{stock.pat || 'N/A'}</TableCell>
                  <TableCell className="text-zinc-300">{stock.pat_percentage || 'N/A'}</TableCell>
                  <TableCell className="text-zinc-300">{stock.cfo_march_24 || 'N/A'}</TableCell>
                  <TableCell className="text-zinc-300">{stock.cfo_5_years || 'N/A'}</TableCell>
                  <TableCell className="text-zinc-300">{stock.free_cash_flow_5_years || 'N/A'}</TableCell>
                  <TableCell className="text-zinc-300">{stock.debt_to_equity || 'N/A'}</TableCell>
                  <TableCell className="text-zinc-300">{stock.book_value || 'N/A'}</TableCell>
                  <TableCell className="text-zinc-300">{stock.revenue_ttm || 'N/A'}</TableCell>
                  <TableCell className="text-zinc-300">{stock.ebitda_ttm || 'N/A'}</TableCell>
                  <TableCell className="text-zinc-300">{stock.pat || 'N/A'}</TableCell>
                  <TableCell className="text-zinc-300">{stock.market_cap || 'N/A'}</TableCell>
                  <TableCell className="text-zinc-300">{stock.price_to_sales || 'N/A'}</TableCell>
                  <TableCell className="text-zinc-300">{stock.cfo_to_ebitda || 'N/A'}</TableCell>
                  <TableCell className="text-zinc-300">{stock.cfo_to_pat || 'N/A'}</TableCell>
                  <TableCell className="text-zinc-300">{stock.price_to_book || 'N/A'}</TableCell>
                  <TableCell className="text-zinc-400">N/A</TableCell>
                  <TableCell className="text-zinc-400">N/A</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default App
