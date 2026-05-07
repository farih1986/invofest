import { Button } from "../components/ui/button";
import SpeakerCard from "../components/speaker_card";

export default function Seminar() {
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
  ];

  return (
    <div className="flex flex-col">
      
      {/* HERO */}
      <section className="flex flex-col-reverse items-center justify-center gap-10 px-4 py-12 md:flex-row">
        {/* TEXT */}
        <div className="flex max-w-xl flex-col gap-6 text-center md:text-left">
          <div className="space-y-2 text-red-900">
            <h1 className="text-4xl font-bold md:text-5xl">
              IT Seminar
            </h1>
            <h2 className="text-xl font-semibold md:text-2xl">
              “Human-AI Integration: Merancang Arsitektur Kolaboratif, Bukan Kompetitif”
            </h2>
          </div>

          <p className="leading-relaxed text-slate-500">
            Seminar nasional yang membahas strategi dan arsitektur teknologi untuk menciptakan sistem di mana manusia dan AI bekerja sebagai mitra yang sinergis.Yang bertujuan mengubah paradigma dari persaingan menjadi kolaborasi, serta meningkatkan pengetahuan peserta dalam merancang teknologi AI yang berpusat pada manusia.
          </p>

          <div className="flex justify-center gap-3 md:justify-start">
            <Button label="Daftar Sekarang" variant="primary" />
          </div>
        </div>

        {/* IMAGE */}
        <div className="w-2/3 max-w-sm md:w-1/3">
          <img
            src="https://www.invofest-harkatnegeri.com/assets/Maskot-Seminar.png"
            alt="Maskot Invofest"
            className="h-auto w-full object-contain"
          />
        </div>
      </section>

      {/* ABOUT */}
      <section className="flex justify-center bg-red-100 px-4 py-16">
        <div className="max-w-3xl text-center">
          <h1 className="mb-6 text-3xl font-medium text-red-900 md:text-5xl">
            Tentang IT Seminar
          </h1>

          <p className="leading-relaxed text-slate-500">
            Seminar bertajuk “Human-AI Integration: Merancang Arsitektur Kolaboratif, Di tengah pesatnya kemajuan kecerdasan buatan (AI), narasi yang sering muncul adalah tentang persaingan antara manusia dan mesin. Kekhawatiran akan penggantian peran manusia oleh teknologi cerdas menjadi diskusi utama di berbagai sektor. Namun, bagaimana jika kita mengubah paradigma tersebut? Seminar Nasional Teknologi Informasi ini hadir untuk menjawab tantangan itu dengan mengangkat tema "Human-AI Integration: Merancang Arsitektur Kolaboratif, Bukan Kompetitif.” Kami bertujuan untuk menggeser fokus dari ketakutan akan kompetisi menjadi eksplorasi peluang kolaborasi. Seminar ini akan mengupas tuntas bagaimana kita dapat merancang sistem, etika, dan lingkungan kerja di mana AI berfungsi sebagai mitra yang memperkuat kecerdasan, kreativitas, dan produktivitas manusia—bukan sebagai pengganti.
          </p>
        </div>
      </section>

      {/* SPEAKER */}
      <section id="speaker" className="px-4 py-20">
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="mb-12 text-3xl font-semibold text-red-900 md:text-5xl">
            Temui Pembicara Khusus Kami
          </h1>

          <div className="flex flex-wrap justify-center gap-10">
            {speakers.map((speaker) => (
              <SpeakerCard key={speaker.name} {...speaker} />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}