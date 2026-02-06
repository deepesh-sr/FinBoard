import { Button } from "@/components/ui/button"

interface HomeProps {
  onNavigate: () => void;
}

function Home({ onNavigate }: HomeProps) {
  return (
    <div className='min-h-screen bg-black text-white flex flex-col items-center justify-center gap-8'>
      <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-center px-4'>
        FINBOARD
      </h1>
      <Button 
        onClick={onNavigate}
        className='bg-white text-black hover:bg-zinc-200 px-8 py-6 text-lg font-semibold'
      >
        View Dashboard
      </Button>
    </div>
  )
}

export default Home
