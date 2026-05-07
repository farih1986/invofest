import Button from "../components/ui/button";
import SpeakerCard from "../components/speaker_card";

export default function Workshop() {
  const speakers = [
      {
        name: "Lhuqita Fazry",
        role: "Mobile Developer, Founder Rumah Coding Indonesia",
        imageUrl:
          "https://www.invofest-harkatnegeri.com/assets/workshop/workshop%20mobile.png",
      },
    {
      name: "DM. Dendi Purwanto",
      role: "Artificial Intelligence Software Engineer, PT. Mayar Kernel Supernova",
      imageUrl:
        "https://www.invofest-harkatnegeri.com/assets/workshop/workshop%20AI.png",
    },
    {
      name: "Danang Avan M",
      role: "Cyber Security Security Analyst, Founder | Contributor TegalSec",
      imageUrl:
        "https://www.invofest-harkatnegeri.com/assets/workshop/talkshow%20cyber.png",
    },
  ];

  return (
    <>
      <div>
        <section
          id="hero"
          className="flex items-center justify-center gap-10 py-10"
        >
          <div className="flex flex-1 flex-col gap-6 max-w-xl">
            <div className="text-red-900 space-y-2">
              <h1 className="text-5xl font-bold">IT Workshop</h1>
              <h2 className="text-2xl font-semibold">
                “AI for a Sustainable Future: The Role of Z Generation in the
                Digital Era”
              </h2>
            </div>

            <p className="text-slate-500 leading-relaxed">
              IT Workshop ini menjembatani antara potensi Generasi Z dan
              kekuatan AI untuk menciptakan masa depan yang berkelanjutan.
              Peserta akan dibekali wawasan dan alat untuk mentransformasi
              ide-ide inovatif menjadi solusi lingkungan yang nyata dan terukur
              di era digital.
            </p>

            <div className="flex gap-3">
              <Button label="Daftar Sekarang" variant="primary" />
            </div>
          </div>

          <div className="w-1/3">
            <img
              src="https://www.invofest-harkatnegeri.com/assets/Maskot-Workshop.png"
              alt="Maskot Invofest"
              className="w-full h-auto object-contain"
            />
          </div>
        </section>

        <section className="flex justify-center items-center py-16 px-4 bg-red-100">
          <div className="max-w-3xl text-center">
            <h1 className="font-medium text-4xl md:text-6xl text-red-900 mb-6">
              Tentang IT Workshop
            </h1>

            <p className="text-slate-500 leading-relaxed">
              Workshop “AI for a Sustainable Future: The Role of Z Generation in
              the Digital Era” ini didesain khusus untuk Generasi Z, para
              digital natives yang berada di persimpangan antara inovasi
              teknologi dan tantangan keberlanjutan global. Peserta akan diajak
              untuk menyelami bagaimana Kecerdasan Buatan (AI) bukan hanya
              sekadar teknologi canggih, tetapi juga alat yang ampuh untuk
              menciptakan solusi nyata bagi isu-isu lingkungan. Melalui sesi
              inspiratif, pengenalan konsep, dan praktik langsung (hands-on),
              workshop ini bertujuan memberdayakan Gen Z untuk menjadi agen
              perubahan di era digital, menggunakan keahlian mereka untuk masa
              depan bumi yang lebih baik.
            </p>
          </div>
        </section>

        <section id="speaker" className="px-3 py-24">
          <div className="grid grid-cols-2 gap-10 md:grid-cols-3">
            {speakers.map((speaker) => (
              <SpeakerCard key={speaker.name} {...speaker} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}