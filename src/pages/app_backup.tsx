import Header from "../components/header";
import Button from "../components/ui/button";
import Collapse from "../components/Collapse";
import SpeakerCard from "../components/speaker_card";

function App() {
  const speakers = [
    {
      name: "Dery Agung Triyadi",
      role: "AWS Indonesia",
      imageUrl:
        "https://www.invofest-harkatnegeri.com/assets/seminar/Seminar%20Dery.png",
    },
    {
      name: "Sowam Habibi",
      role: "Google Indonesia",
      imageUrl:
        "https://www.invofest-harkatnegeri.com/assets/seminar/seminar%20sowam.png",
    },
    {
      name: "Lhuqita Fazry",
      role: "Mobile Developer, Founder Rumah Coding Indonesia",
      imageUrl:
        "https://www.invofest-harkatnegeri.com/assets/workshop/workshop%20mobile.png",
    },
  ];

  const collapseItems = [
    {
      title: "Apa itu Invofest?",
      description:
        `Invofest (Informatics Vocational Festival) adalah festival tahunan yang bertujuan untuk menginspirasi dan memberdayakan generasi muda Indonesia dalam menghadapi era digital. Dengan mengusung tema "Beyond Limits, Beyond Intelligence: Innovate for a Smarter Tomorrow."`,
    },
    {
      title: "Kapan dan di mana Invofest akan diselenggarakan?",
      description:
        `Invofest akan diselenggarakan pada tanggal 15-17 November 2024 di Jakarta Convention Center (JCC), Jakarta, Indonesia.`,
    },
    {
      title: "Siapa saja yang dapat mengikuti Invofest?",
      description:
        `Invofest terbuka untuk semua kalangan, terutama mahasiswa, pelajar, dan profesional muda yang tertarik dengan teknologi dan inovasi.`,
    },
  ];


  return (
    <>
      <Header  />

      <main className="mx-auto max-w-7xl">
        <section
          id="hero"
          className="flex items-center justify-center gap-10 py-10 "
        >
          <div className="flex flex-1 flex-col gap-6 max-w-xl">
            <img
              src="https://www.invofest-harkatnegeri.com/assets/text-image.png"
              alt="Invofest"
              className="w-96"
            />

            <p>
              Invofest (Informatics Vocational Festival) adalah festival tahunan yang bertujuan untuk menginspirasi dan memberdayakan generasi muda Indonesia dalam menghadapi era digital. Dengan mengusung tema <b>"Beyond Limits, Beyond Intelligence: Innovate for a Smarter Tomorrow"</b>.
            </p>

            <div className="flex gap-3">
              <Button label="Info Selengkapnya" variant="primary" />
              <Button label="Hubungi Panitia" variant="outline" />
            </div>
          </div>

          <div className="w-1/3">
            <img
              src="https://www.invofest-harkatnegeri.com/assets/Maskot-Hero.png"
              alt="Maskot Invofest"
            />
          </div>
        </section>

        <section id="speaker" className="px-3 py-24">
          <div className="grid grid-cols-2 gap-10 md:grid-cols-3">
            {speakers.map((speaker) => (
              <SpeakerCard key={speaker.name} {...speaker} />
            ))}
          </div>
        </section>

        <section
          id="cards"
          className="grid grid-cols-1 gap-10 px-3 py-24 md:grid-cols-2"
        >
        </section>

        <section id="collapse" className="flex flex-col gap-2 px-3 py-24">
          {collapseItems.map((item) => (
            <Collapse key={item.title} {...item} />
          ))}
        </section>
      </main>
    </>
  );
}

export default App;