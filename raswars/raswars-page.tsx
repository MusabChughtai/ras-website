import EventHero from "./components/event-hero"
import EventHighlights from "./components/event-highlights"
import EventGallery from "./components/event-gallery"
import { raswarsData } from "./data/event-data"

export default function RaswarsPage() {
  return (
    <main className="min-h-screen bg-[#1a1a1a]">
      <EventHero data={raswarsData} />
      <EventHighlights data={raswarsData} />
      <EventGallery data={raswarsData} />
    </main>
  )
}
