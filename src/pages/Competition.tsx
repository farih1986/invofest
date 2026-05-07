import { Button } from "../components/ui/button";

export default function Competition() {
  return (
    <>
    <section
      id="hero"
      className="flex items-center justify-center gap-10 py-10"
      >
      <div className="flex flex-1 flex-col gap-6 max-w-xl">
        <div className="text-red-900 space-y-2">
          <h1 className="text-5xl font-bold">IT Competition</h1>
          <h2 className="text-2xl font-semibold">
            "From Creation to Innovation"
          </h2>
        </div>

        <p className="text-slate-500 leading-relaxed">
          Kompetisi dalam INVOFEST ini mengusung tema “From Creation to
          Innovation”. Tema ini bertujuan mengajak generasi muda untuk
          mengembangkan inovasi dan kreativitas guna membentuk kelompok yang
          memiliki potensi luar biasa, serta mampu mewujudkan masa depan yang
          berkelanjutan.
        </p>

        <div className="flex gap-3">
          <Button label="Info Selengkapnya" variant="primary" />
          <Button label="Hubungi Panitia" variant="outline" />
        </div>
      </div>

      <div className="w-1/3">
        <img
          src="https://www.invofest-harkatnegeri.com/assets/Maskot-Lomba.png"
          alt="Maskot Invofest"
          className="w-full h-auto object-contain"
          />
      </div>
    </section>

    <section className="flex justify-center items-center py-16 px-4 bg-red-100">
    <div className="max-w-3xl text-center">
        <h1 className="font-medium text-4xl md:text-6xl text-red-900 mb-6">
        DESKRIPSI KOMPETISI
        </h1>

        <p className="text-slate-500 leading-relaxed">
        Kompetisi atau perlombaan yang ada dalam kegiatan INVOFEST (Infomatics
        Vocational Festival) 2025 adalah diantaranya National Poster Design
        Competition, UI UX Design Competition, dan juga UI/UX Design Competition.
        Kompetisi dalam INVOFEST ini mengusung tema “From Creation to Innovation”.
        Tema ini bertujuan mengajak generasi muda untuk mengembangkan inovasi dan
        kreativitas guna membentuk kelompok yang memiliki potensi luar biasa, yang
        mampu mewujudkan masa depan yang berkelanjutan...
        </p>
    </div>
    </section>

    </>
  );
}