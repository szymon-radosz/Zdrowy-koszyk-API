<?php

use Illuminate\Database\Seeder;
use App\Ingredient;

class IngredientsTableDataSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $ingredients = [
            [
                "name" => "Metyloceluloza",
                "keywords" => "Metyloceluloza,E461,metyloceluloza",
                "description" => "Spożyta w nadmiarze może wywołać dolegliwości w postaci wzdęć i biegunek.",
                "wiki_url" => "https://vitalia.pl/ch_add,96,0_Metyloceluloza.html",
                "wiki_title" => "vitalia.pl",
                "type" => "not good"
            ],
            [
                "name" => "Siarczan wapnia",
                "keywords" => "siarczan wapnia,Siarczan Wapnia",
                "description" => "Medycyna: profilaktyka osteoporozy, uzupełnianie niedoborów wapnia w organizmie. Uwodniowy siarczan wapnia to inaczej gips - minerał wykorzystywany w budownictwie jako materiał wiążący, jako materiał rzeźbiarski, a także w stomatologii i chirurgii, np. do usztywnienia zlamanej kończyny.",
                "wiki_url" => "https://vitalia.pl/ch_add,252,0_Siarczan-wapnia.html",
                "wiki_title" => "vitalia.pl",
                "type" => "good"
            ],
            [
                "name" => "Skrobia kukurydziana modyfikowana ",
                "keywords" => "skrobia kukurydziana modyfikowana",
                "description" => "Alergia na skrobię nie ma prawa występować. Reakcje alergiczne powodują białka, natomiast skrobia jest wielocukrem. Trzeba jednak pamiętać, że skrobia jest węglowodanem, których nadmiar w diecie jest niepożądany z wielu przyczyn. IG skrobi modyfikowanej jest równy 100, co mówi o tym, że po jej spożyciu następuje gwałtowny wyrzut glukozy do krwi.
                                    Czy skrobia jest zdrowa? Nie mniej zdrowa i nie mniej szkodliwa niż inne węglowodany. Chyba że mówimy o skrobi opornej, która jest prebiotykiem. Wtedy wykazuje ona pozytywne działanie zdrowotne. O szkodliwość E1422 nie trzeba się martwić. Jednak dokonując wyborów żywieniowych, warto się zastanowić, czy kupowanie kiełbasy, która ma tak słaby skład, że musi być sklejana skrobią, ma sens. Bowiem najczęściej skrobia spożywcza jest używana w żywności o bardzo niskiej jakości",
                "wiki_url" => "https://wylecz.to/zywnosc/skrobia-modyfikowana-e1422-wlasciwosci-zastosowanie-szkodliwosc/",
                "wiki_title" => "wylecz.to",
                "type" => "bad"
            ],
            [
                "name" => "Syrop glukozowo-fruktozowy",
                "keywords" => "syrop glukozowy,Syrop glukozowo-fruktozowy",
                "description" => "Niekorzystne oddziaływanie syropu na zdrowie człowieka obserwuje się najczęściej przy jego udziale w diecie pomiędzy 35 a 65%[5]. Dotąd ustalono, że spożywanie dużych ilości produktów zawierających syrop glukozowo-fruktozowy:
                                    powoduje szybkie tycie i chroniczną otyłość (fruktoza spożywana nawet w niewielkich ilościach, nastawia organizm na produkcję tkanki tłuszczowej, zwłaszcza gromadzącej się wokół narządów wewnętrznych). Według prof. Grażyny Cichosz, żaden inny składnik diety nie sprzyja otyłości tak, jak fruktoza,
                                    zwiększa ryzyko wystąpienia cukrzycy typu 2, potęguje apetyt, prowadzi do reaktywnej hipoglikemii (gwałtownych zmian poziomu insuliny oraz glukozy we krwi),
                                    podwyższa poziom lipoproteiny niskiej gęstości i trójglicerydów, powoduje spadek wrażliwości organizmu na leptynę,
                                    hamuje wytwarzanie ATP,
                                    przyczynia się do zwiększenia możliwości wystąpienia zespołu jelita drażliwego,
                                    sprzyja rozwojowi nowotworu jelita grubego u myszy[21]
                                    może powodować zaćmę cukrzycową.",
                "wiki_url" => "https://pl.wikipedia.org/wiki/Syrop_glukozowo-fruktozowy",
                "wiki_title" => "wikipedia",
                "type" => "bad"
            ]
        ];

        //clean table before set all records
        Ingredient::truncate();

        foreach($ingredients as $ingredient){
            Ingredient::create([
	            "name" => $ingredient["name"],
	            "keywords" => $ingredient["keywords"],
                "description" => $ingredient["description"],
                "wiki_url" => $ingredient["wiki_url"],
                "wiki_title" => $ingredient["wiki_title"],
                "type" => $ingredient["type"]
	        ]);
        }
    }
}
