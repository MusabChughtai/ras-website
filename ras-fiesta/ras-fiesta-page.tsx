import EventHero from "../raswars/components/event-hero"
import EventHighlights from "../raswars/components/event-highlights"
import EventGallery from "../raswars/components/event-gallery"
import { rasFiestaData } from "./data/event-data"

export default function RasFiestaPage() {
  return (
    <main className="min-h-screen bg-[#1a1a1a]">
      <EventHero data={rasFiestaData} />
      <EventHighlights data={rasFiestaData} />
      <EventGallery data={rasFiestaData} />
    </main>
  )
}
