import { Button } from "../components/ui/button";

export default function Beranda() {
    return (
        <div>
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
        </div>
    );
}