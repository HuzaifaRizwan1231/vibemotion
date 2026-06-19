import { Gamepad2 } from 'lucide-react'
import SectionTitle from './SectionTitle.tsx'
import GameCard from './GameCard.tsx'
import { games } from '../../data/games.ts'

const GamesSection = () => {
  return (
    <section id="games" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          eyebrow="Our Portfolio"
          icon={<Gamepad2 size={14} />}
          title="Featured Games"
          description="Every MindIt Games title is built around one idea: satisfying, replayable gameplay that respects your time and your mind."
        />

        {/* Game list — stacks vertically, alternating layout for rhythm.
            Scales cleanly: add a new object to src/data/games.ts and it
            slots in automatically, alternating sides as it goes. */}
        <div className="flex flex-col gap-10">
          {games.map((game, index) => (
            <GameCard key={game.id} game={game} reverse={index % 2 === 1} />
          ))}
        </div>

        {/* Forward-looking CTA for the catalog growing over time */}
        <div className="mt-12 flex flex-col items-center gap-3 rounded-2xl border border-dashed border-brand-border/80 px-8 py-10 text-center">
          <Gamepad2 size={22} className="text-brand-blue-soft" />
          <p className="text-sm font-medium text-slate-400">
            More games are in development — check back soon for new releases.
          </p>
        </div>
      </div>
    </section>
  )
}

export default GamesSection
