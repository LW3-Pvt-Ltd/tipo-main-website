import MobileNavbar from "./MobileNavbar";
import MobileHero from "./MobileHero";
import MobileCraft from "./MobileCraft";
import MobileStoryRow from "./MobileStoryRow";
import MobileVideoBlock from "./MobileVideoBlock";
import MobileMapBlock from "./MobileMapBlock";
import MobileFooter from "./MobileFooter";

export default function MobileSite() {
  return (
    <div className="md:hidden">
      <MobileNavbar />
      <MobileHero />
      {/* Wrapper slides up over the sticky hero for a parallax reveal */}
      <div className="relative z-[2] bg-black" style={{ marginTop: 0 }}>
        <MobileCraft />

        <div style={{ marginTop: -40 }}>
        <div>
          <MobileStoryRow
            bold="The Forest"
            light="& the Herb collectors"
            imageOffsetY={0}
            boldFirst
            body={[
              "Each season begins in the forest at the foothills of the Himalayas.",
              "Women trained in botanical knowledge enter the surrounding landscape to gather what the year allows. They collect with restraint, selecting from more than sixty forest botanicals based on smell, maturity, texture, and memory.",
              "The forest decides what is available. The collectors decide what should be taken and what should be left behind.",
            ]}
            image="/images/latest new herb-collector .webp"
            imageAlt="Women herb collectors gathering botanicals in the Himalayan foothills"
          />
        </div>

        <MobileStoryRow
          bold="Magic"
          light="The Brewmaster's"
          boldFirst={false}
          offsetTop={-24}
          body={[
            "The gathered botanicals are handed to the women brewmasters.",
            "There is no recipe to follow. Proportions are decided anew every season, based on climate, humidity, the character of the herbs, and the brewmaster's accumulated experience.",
            "The botanicals are dried, ground, and combined with rice flour to form e-pob, the traditional starter cake.",
            "This starter does not impose flavor. It invites fermentation — recruiting native yeasts and microbes specific to this place.",
          ]}
          image="/images/latest brewmaster 1.webp"
          imageAlt="Illustration of a brewmaster figure in traditional clothing with botanicals"
        />

        <MobileStoryRow
          bold="Fire, Rice"
          light="and the restraint"
          offsetTop={-24}
          imageScale={1.0}
          body={[
            "Before fermentation, rice husk is burned to a precise point — ember-brown, never carbonized. This is not ritual for symbolism; it is technical discipline. Too much burn overwhelms the wine. Too little leaves it incomplete.",
            "Steamed rice is combined with the starter cake and smoked husk in proportions set by the brewmaster. From this moment onward, the process is left largely undisturbed.",
            "Control gives way to observation.",
          ]}
          image="/images/latest mandala 1.webp"
          imageAlt="Intricate circular mandala illustration of rice and botanicals"
        />

        <MobileStoryRow
          bold="Grain Boundary"
          light="Fermentation"
          offsetTop={-24}
          imageScale={1.0}
          body={[
            "“Every grain becomes its own cellar.”",
            "Coated first with Epob, then with finely burnt husk, each grain of rice turns into a micro chamber of fermentation. But the true magic lies at the boundary — not within the grain, not outside it, but at the delicate meeting line where rice, starter, and husk touch.",
            "At this razor-thin interface, alcohol is born droplet by droplet, giving Po:ro Apong its rare depth, texture, and character.",
          ]}
          image="/images/latest new-grain-boundary 1.webp"
          imageAlt="Oval illustration representing the grain boundary fermentation process"
        />

        <MobileStoryRow
          bold="A Rare Solid-State"
          light="Fermentation"
          offsetTop={-24}
          imageGap={14}
          body={[
            "Po:ro Apong ferments in solid state, not liquid.",
            "Fermentation takes place in small batches, typically 5 to 7 kilograms, allowing close attention rather than mechanical intervention.",
            "The ferment beds are not stirred or corrected. The brewmasters monitor progress by sight, scent, and time. Intervention is rare, and only when necessary.",
            "This process resists massive scale by design.",
            "It depends on judgment rather than automation, and on time rather than speed.",
          ]}
          image="/images/latest solid-state 1.webp"
          imageAlt="Folk art figure with floral motifs representing solid-state fermentation"
        />

        <MobileStoryRow
          bold="The Drawing"
          offsetTop={-24}
          imageScale={1.0}
          imageOffsetY={0}
          body={[
            "In the traditional method, when fermentation is complete, the wine is gently drawn from the grain. What emerges reflects the forest, the season, and the decisions made during that cycle.",
            "Each batch is distinct. Variation is not corrected; it is accepted as truth.",
          ]}
          pullQuote={["This is not an inconsistency.", "This is nature."]}
          image="/images/latest drawing 1.webp"
          imageAlt="Detailed illustrated scene showing the drawing process"
        />

        <MobileStoryRow
          offsetTop={-24}
          bold="Technology is the valet,"
          light="not the star."
          imageContainerStyle={{ aspectRatio: "4/3", height: "auto" }}
          goldenLines={[0]}
          body={[
            "Tipo did not reinterpret Po:ro Apong.",
            "Our role is deliberately modest: introduce hygiene, scientific filtration, and clean bottling in modern winery setting so the Po:ro Apong can travel without altering its character.",
            "This quiet preservation is overseen by Ajoy Shaw, DipWSET, our Chief Winemaker, ensuring what reaches you is what was made at the source.",
          ]}
          image="/images/latest new winery .webp"
          imageAlt="Traditional winery with worker overseeing the process"
        />

        <div style={{ marginTop: 32 }}>
          <MobileVideoBlock />
        </div>

        <div style={{ marginTop: 32 }}>
        <MobileStoryRow
          id="mobile-heritage"
          eyebrow="The Team"
          glowEyebrow
          underlineEyebrow
          eyebrowAboveImage
          bold="It takes a village,"
          light="they say!"
          body={[
            "Po:ro Apong is made by women, and it has always been so. Knowledge is passed through apprenticeship, not instruction. Girls grow up assisting long before they are trusted to decide.",
            "Authority is not granted; it is recognized.",
            "The role of the brewmaster is earned through time, judgment, and restraint. What exists is a lineage — a continuous chain of women who carry the responsibility of brewing the Po:ro Apong, season after season.",
            "This structure has preserved the craft not by freezing it in time, but by keeping it human.",
          ]}
          image="/images/it-takes-a-village.webp"
          imageAlt="Women brewmasters of the village in traditional attire"
        />

        <MobileStoryRow
          offsetTop={-30}
          bold="Value lives"
          light="in the system"
          body={[
            "Tipo rests on seasonal botanicals, forest judgment, and women trained through long apprenticeship — a living system that cannot be rushed or flattened.",
            "To keep it intact, we spent two years selecting and partnering with two Self Help Groups: Polo SHG (Leimekuri) and Aaradha SHG (Memberchuk), who are now part of the supply chain.",
            "The tradition stays with its rightful owners: the women brewmasters remain in control; we didn't outsource heritage, we safeguarded it.",
          ]}
          image="/images/value-lives.webp"
          imageAlt="Women of the Self Help Groups in traditional dresses"
        />
        </div>

        <MobileMapBlock />
        </div> {/* end -40 wrapper */}
      </div>
      <div style={{ marginTop: -40, position: "relative", zIndex: 3 }}>
        <MobileFooter />
      </div>
    </div>
  );
}
