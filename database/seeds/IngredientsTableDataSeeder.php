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
                "description" => "Alergia na skrobię nie ma prawa występować. Reakcje alergiczne powodują białka, natomiast skrobia jest wielocukrem. Trzeba jednak pamiętać, że skrobia jest węglowodanem, których nadmiar w diecie jest niepożądany z wielu przyczyn. IG skrobi modyfikowanej jest równy 100, co mówi o tym, że po jej spożyciu następuje gwałtowny wyrzut glukozy do krwi. <br />Czy skrobia jest zdrowa? Nie mniej zdrowa i nie mniej szkodliwa niż inne węglowodany. Chyba że mówimy o skrobi opornej, która jest prebiotykiem. Wtedy wykazuje ona pozytywne działanie zdrowotne. O szkodliwość E1422 nie trzeba się martwić. Jednak dokonując wyborów żywieniowych, warto się zastanowić, czy kupowanie kiełbasy, która ma tak słaby skład, że musi być sklejana skrobią, ma sens. Bowiem najczęściej skrobia spożywcza jest używana w żywności o bardzo niskiej jakości",
                "wiki_url" => "https://wylecz.to/zywnosc/skrobia-modyfikowana-e1422-wlasciwosci-zastosowanie-szkodliwosc/",
                "wiki_title" => "wylecz.to",
                "type" => "bad"
            ],
            [
                "name" => "Syrop glukozowo-fruktozowy",
                "keywords" => "syrop glukozowy,Syrop glukozowo-fruktozowy",
                "description" => "Niekorzystne oddziaływanie syropu na zdrowie człowieka obserwuje się najczęściej przy jego udziale w diecie pomiędzy 35 a 65%[5].<br /> Dotąd ustalono, że spożywanie dużych ilości produktów zawierających syrop glukozowo-fruktozowy: powoduje szybkie tycie i chroniczną otyłość (fruktoza spożywana nawet w niewielkich ilościach, nastawia organizm na produkcję tkanki tłuszczowej, zwłaszcza gromadzącej się wokół narządów wewnętrznych). Według prof. Grażyny Cichosz, żaden inny składnik diety nie sprzyja otyłości tak, jak fruktoza, zwiększa ryzyko wystąpienia cukrzycy typu 2, potęguje apetyt, prowadzi do reaktywnej hipoglikemii (gwałtownych zmian poziomu insuliny oraz glukozy we krwi), podwyższa poziom lipoproteiny niskiej gęstości i trójglicerydów, powoduje spadek wrażliwości organizmu na leptynę, hamuje wytwarzanie ATP, przyczynia się do zwiększenia możliwości wystąpienia zespołu jelita drażliwego, sprzyja rozwojowi nowotworu jelita grubego u myszy[21] <br />może powodować zaćmę cukrzycową.",
                "wiki_url" => "https://pl.wikipedia.org/wiki/Syrop_glukozowo-fruktozowy",
                "wiki_title" => "Wikipedia",
                "type" => "bad"
            ],
            [
                "name" => "Olej palmowy",
                "keywords" => "tłuszcz palmowy, olej palmowy",
                "description" => "Olej palmowy używany jest najczęściej do smażenia, co powoduje jego stopniowe utlenianie się. Produkty utleniania oleju oraz innych tłuszczów uznawane są za szkodliwe dla zdrowia[5].<br/>Kwas palmitynowy według badań amerykańskiego Center for Science in the Public Interest (CSPI) spożywany w nadmiarze podnosi zawartość cholesterolu we krwi i może prowadzić do chorób serca[6]. Według raportu CSPI, Światowa Organizacja Zdrowia (WHO) oraz amerykański National Heart, Lung and Blood Institute (NHLBI) zalecają ograniczenie spożycia kwasu palmitynowego i produktów bogatych w tłuszcze nasycone. WHO wykazało związek spożycia kwasu palmitynowego (podobnie jak izomerów trans kwasów tłuszczowych) z chorobami układu krążenia[7].<br />Ponadto w maju 2016 roku Europejski Urząd ds. Bezpieczeństwa Żywności wydał raport, w którym stwierdzono, że olej palmowy (i inne tłuszcze palmowe) zawiera najwyższe wśród tłuszczów roślinnych stężenia szkodliwych, potencjalnie rakotwórczych chloropochodnych. Powstają one w procesie produkcji tłuszczu, zwłaszcza rafinacji oleju prowadzonej w temperaturze powyżej 200 °C[8].",
                "wiki_url" => "https://pl.wikipedia.org/wiki/Olej_palmowy",
                "wiki_title" => "Wikipedia",
                "type" => "bad"
            ],
            [
                "name" => "Błękit brylantowy FCF",
                "keywords" => "Błękit brylantowy",
                "description" => "Może wywoływać astmę, pokrzywkę, katar sienny oraz reakcje alergiczne. Może spowodować nasilenie objawów nietolerancji salicylanów (np. aspiryny). Powinny unikać go osoby z zespołem jelita nadwrażliwego i innymi schorzeniami przewodu pokarmowego, osoby uczulone na salicylany. Substancja nie jest klasyfikowana jako substancja kancerogenna u ludzi, a u zwierząt dowody te są ograniczone[8]. Według RTECS - Błękit brylantowy FCF wykazuje „niejednoznaczne działanie rakotwórcze”, jednak - agenda WHO, Międzynarodowa Agencja Badań nad Rakiem, IARC  nie zaklasyfikowała tego barwnika jako czynnika rakotwórczego dla ludzi.",
                "wiki_url" => "https://pl.wikipedia.org/wiki/B%C5%82%C4%99kit_brylantowy_FCF",
                "wiki_title" => "Wikipedia",
                "type" => "bad"
            ],
            [
                "name" => "Witamina B6",
                "keywords" => "witamina B6",
                "description" => "Niedobór witaminy B6 może wywoływać objawy ze strony układu nerwowego, takie jak: drgawki, depresja, apatia, bezsenność, ogólne pogorszenie samopoczucia, obniżenie sprawności procesów myślowych, zapalenie nerwów. Do innych objawów niedoboru witaminy B6 należą: zmniejszenie odporności na infekcje, stany zapalne skóry (łojotokowe zmiany na twarzy, podrażnienie języka i błon śluzowych jamy ustnej), niedokrwistość, kamica nerkowa, zmęczenie, nudności, odruchy wymiotne, zaburzenia w funkcjonowaniu mięśnia sercowego, zwiększenie ryzyka powstawania nowotworów, natomiast u dzieci – opóźnienie umysłowe, nieprawidłowości w budowie kości, objawy padaczkowe, drażliwość. Niedobór witaminy B6 jest ważnym czynnikiem ryzyka rozwoju miażdżycy, stąd niedobór tej witaminy zwiększa ryzyko udaru i choroby niedokrwiennej serca.",
                "wiki_url" => "https://pl.wikipedia.org/wiki/Witamina_B6",
                "wiki_title" => "Wikipedia",
                "type" => "good"
            ],
            [
                "name" => "Glikozydy stewiolowe",
                "keywords" => "Glikozydy stewiolowe, glikozydy stewiolowe",
                "description" => "Glikozydy stewiolowe wyodrębnione ze Stevia rebaudiana są według różnych źródeł od 30 do 320 razy słodsze od zwykłego cukru spożywczego, choć te dane są kwestionowane. Związki te są stabilne termicznie, odporne na zmienne warunki pH i nie ulegają procesom fermentacji. Ponadto nie wywołują one zmian stężenia glukozy we krwi, są więc atrakcyjnym zamiennikiem cukru dla chorych na cukrzycę. Bezpieczna dawka dzienna (ADI) dla tych związków, w przeliczeniu na czysty stewiol została ustalona na 4 mg/kg ciała na dobę.",
                "wiki_url" => "https://pl.wikipedia.org/wiki/Glikozydy_stewiolowe",
                "wiki_title" => "Wikipedia",
                "type" => "not good"
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
