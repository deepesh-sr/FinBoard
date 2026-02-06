# 📈 FinBoard

A modern, real-time stock portfolio dashboard built with React, TypeScript, and Vite. Track your stock investments with live price updates, advanced filtering, and professional analytics.

![FinBoard](https://img.shields.io/badge/React-18+-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5+-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5+-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3+-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

## ✨ Features

- **Real-Time Price Updates**: Automatic CMP (Current Market Price) updates every 10 seconds
- **Comprehensive Stock Data**: 34+ data points including P/E ratio, market cap, EBITDA, cash flow metrics, and more
- **Sector Filtering**: Dynamic dropdown to filter stocks by sector
- **Advanced Calculations**: 
  - Investment value tracking
  - Gain/Loss calculations with percentages
  - Portfolio allocation percentages
  - Price-to-book, price-to-sales ratios
- **Professional UI**: Sleek black metallic theme with smooth animations
- **Responsive Design**: Mobile-friendly layout that adapts to all screen sizes
- **Modular Architecture**: Clean component-based structure for easy maintenance

## 🚀 Tech Stack

- **Frontend Framework**: React 18+ with TypeScript
- **Build Tool**: Vite 5+
- **Styling**: Tailwind CSS with custom zinc color palette
- **UI Components**: shadcn/ui (Table, Button, DropdownMenu)
- **Typography**: Google Fonts (Poppins)
- **API Integration**: REST API with dual endpoint architecture
- **Development Proxy**: Vite proxy for local development with ngrok

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/deepesh-sr/FinBoard.git
   cd FinBoard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   VITE_API_URL=your_api_url_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:5173`

## 🏗️ Project Structure

```
FinBoard/
├── src/
│   ├── components/
│   │   ├── ui/              # shadcn/ui components
│   │   │   ├── button.tsx
│   │   │   ├── table.tsx
│   │   │   └── dropdown-menu.tsx
│   │   ├── Dashboard.tsx    # Main dashboard component
│   │   └── Home.tsx         # Landing page component
│   ├── lib/
│   │   └── utils.ts         # Utility functions
│   ├── App.tsx              # Main app with routing logic
│   ├── main.tsx             # React entry point
│   └── index.css            # Global styles
├── public/
├── .env                     # Environment variables
├── vite.config.ts          # Vite configuration
├── tailwind.config.js      # Tailwind configuration
├── components.json         # shadcn/ui configuration
└── package.json
```

## 🔌 API Integration

FinBoard uses a dual API architecture for optimal performance:

### 1. Full Stock Data API
```
GET /api/stocks
```
- Fetched once on component mount
- Returns comprehensive stock details (34+ fields)
- Includes company info, financial metrics, and ratios

### 2. Price Updates API
```
GET /api/prices
```
- Polled every 10 seconds
- Returns only CMP (Current Market Price)
- Lightweight and fast for real-time updates

### Required Headers
```javascript
{
  'ngrok-skip-browser-warning': 'true'
}
```

## 📊 Stock Data Fields

The dashboard displays the following information for each stock:

**Basic Info**: Company name, Symbol (NSE/BSE), Sector

**Pricing**: Purchase Price, Current Market Price (CMP), Quantity

**Calculations**: Investment, Present Value, Gain/Loss, Gain/Loss %, Portfolio %

**Financial Metrics**: 
- Market Cap
- P/E Ratio (TTM)
- Latest Earnings
- Revenue (TTM)
- EBITDA (TTM) & EBITDA %
- PAT (Profit After Tax) & PAT %

**Cash Flow**: 
- CFO (March 24)
- CFO (5 years)
- Free Cash Flow (5 years)

**Ratios**:
- Debt to Equity
- Book Value
- Price to Sales
- Price to Book
- CFO to EBITDA
- CFO to PAT

## 🎨 UI/UX Features

- **Black Metallic Theme**: Professional zinc color palette (zinc-900, zinc-800, zinc-700)
- **Poppins Font**: Clean, modern typography
- **Color-Coded Gains/Losses**: Green for profits, red for losses
- **Hover Effects**: Smooth transitions on interactive elements
- **Responsive Header**: Adapts layout for mobile devices
- **Smooth Scrolling**: Horizontal scroll for table on smaller screens

## 🔧 Configuration

### Vite Proxy (Development)
```typescript
// vite.config.ts
server: {
  proxy: {
    '/api': {
      target: 'your_ngrok_url',
      changeOrigin: true,
      configure: (proxy) => {
        proxy.on('proxyReq', (proxyReq) => {
          proxyReq.setHeader('ngrok-skip-browser-warning', 'true');
        });
      }
    }
  }
}
```

### Environment Variables (Production)
For deployment on platforms like Vercel, add the following environment variable:
```
VITE_API_URL=https://your-ngrok-url.ngrok-free.dev
```

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variable: `VITE_API_URL`
4. Deploy!

### Other Platforms

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy the `dist` folder to your hosting platform

3. Ensure environment variables are configured

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Adding shadcn/ui Components

```bash
npx shadcn@latest add [component-name]
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Deepesh Singh Rathore**

- GitHub: [@deepesh-sr](https://github.com/deepesh-sr)
- Project Link: [https://github.com/deepesh-sr/FinBoard](https://github.com/deepesh-sr/FinBoard)

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the beautiful UI components
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Vite](https://vitejs.dev/) for the blazing fast build tool
- [React](https://react.dev/) for the awesome framework

---

⭐ If you found this project helpful, please give it a star!
