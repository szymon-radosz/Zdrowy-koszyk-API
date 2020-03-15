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
            //bad
            [
                "name" => "Skrobia kukurydziana modyfikowana",
                "keywords" => "skrobia kukurydziana modyfikowana",
                "description" => "Alergia na skrobię nie ma prawa występować. Reakcje alergiczne powodują białka, natomiast skrobia jest wielocukrem. Trzeba jednak pamiętać, że skrobia jest węglowodanem, których nadmiar w diecie jest niepożądany z wielu przyczyn. IG skrobi modyfikowanej jest równy 100, co mówi o tym, że po jej spożyciu następuje gwałtowny wyrzut glukozy do krwi. Czy skrobia jest zdrowa? Nie mniej zdrowa i nie mniej szkodliwa niż inne węglowodany. Chyba że mówimy o skrobi opornej, która jest prebiotykiem. Wtedy wykazuje ona pozytywne działanie zdrowotne. O szkodliwość E1422 nie trzeba się martwić. Jednak dokonując wyborów żywieniowych, warto się zastanowić, czy kupowanie kiełbasy, która ma tak słaby skład, że musi być sklejana skrobią, ma sens. Bowiem najczęściej skrobia spożywcza jest używana w żywności o bardzo niskiej jakości",
                "wiki_url" => "https://wylecz.to/zywnosc/skrobia-modyfikowana-e1422-wlasciwosci-zastosowanie-szkodliwosc/",
                "wiki_title" => "wylecz.to",
                "type" => "bad"
            ],
            [
                "name" => "Syrop glukozowo-fruktozowy",
                "keywords" => "syrop glukozowy,Syrop glukozowo-fruktozowy",
                "description" => "Niekorzystne oddziaływanie syropu na zdrowie człowieka obserwuje się najczęściej przy jego udziale w diecie pomiędzy 35 a 65%[5]. Dotąd ustalono, że spożywanie dużych ilości produktów zawierających syrop glukozowo-fruktozowy: powoduje szybkie tycie i chroniczną otyłość (fruktoza spożywana nawet w niewielkich ilościach, nastawia organizm na produkcję tkanki tłuszczowej, zwłaszcza gromadzącej się wokół narządów wewnętrznych). Według prof. Grażyny Cichosz, żaden inny składnik diety nie sprzyja otyłości tak, jak fruktoza, zwiększa ryzyko wystąpienia cukrzycy typu 2, potęguje apetyt, prowadzi do reaktywnej hipoglikemii (gwałtownych zmian poziomu insuliny oraz glukozy we krwi), podwyższa poziom lipoproteiny niskiej gęstości i trójglicerydów, powoduje spadek wrażliwości organizmu na leptynę, hamuje wytwarzanie ATP, przyczynia się do zwiększenia możliwości wystąpienia zespołu jelita drażliwego, sprzyja rozwojowi nowotworu jelita grubego u myszy[21] może powodować zaćmę cukrzycową.",
                "wiki_url" => "https://pl.wikipedia.org/wiki/Syrop_glukozowo-fruktozowy",
                "wiki_title" => "Wikipedia",
                "type" => "bad"
            ],
            [
                "name" => "Olej palmowy",
                "keywords" => "tłuszcz palmowy, olej palmowy",
                "description" => "Olej palmowy używany jest najczęściej do smażenia, co powoduje jego stopniowe utlenianie się. Produkty utleniania oleju oraz innych tłuszczów uznawane są za szkodliwe dla zdrowia[5].<br/>Kwas palmitynowy według badań amerykańskiego Center for Science in the Public Interest (CSPI) spożywany w nadmiarze podnosi zawartość cholesterolu we krwi i może prowadzić do chorób serca[6]. Według raportu CSPI, Światowa Organizacja Zdrowia (WHO) oraz amerykański National Heart, Lung and Blood Institute (NHLBI) zalecają ograniczenie spożycia kwasu palmitynowego i produktów bogatych w tłuszcze nasycone. WHO wykazało związek spożycia kwasu palmitynowego (podobnie jak izomerów trans kwasów tłuszczowych) z chorobami układu krążenia[7].Ponadto w maju 2016 roku Europejski Urząd ds. Bezpieczeństwa Żywności wydał raport, w którym stwierdzono, że olej palmowy (i inne tłuszcze palmowe) zawiera najwyższe wśród tłuszczów roślinnych stężenia szkodliwych, potencjalnie rakotwórczych chloropochodnych. Powstają one w procesie produkcji tłuszczu, zwłaszcza rafinacji oleju prowadzonej w temperaturze powyżej 200 °C[8].",
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
            //not good
            [
                "name" => "Metyloceluloza",
                "keywords" => "Metyloceluloza,E461,metyloceluloza",
                "description" => "Spożyta w nadmiarze może wywołać dolegliwości w postaci wzdęć i biegunek.",
                "wiki_url" => "https://vitalia.pl/ch_add,96,0_Metyloceluloza.html",
                "wiki_title" => "vitalia.pl",
                "type" => "not good"
            ],
            [
                "name" => "Glikozydy stewiolowe",
                "keywords" => "Glikozydy stewiolowe, glikozydy stewiolowe",
                "description" => "Glikozydy stewiolowe wyodrębnione ze Stevia rebaudiana są według różnych źródeł od 30 do 320 razy słodsze od zwykłego cukru spożywczego, choć te dane są kwestionowane. Związki te są stabilne termicznie, odporne na zmienne warunki pH i nie ulegają procesom fermentacji. Ponadto nie wywołują one zmian stężenia glukozy we krwi, są więc atrakcyjnym zamiennikiem cukru dla chorych na cukrzycę. Bezpieczna dawka dzienna (ADI) dla tych związków, w przeliczeniu na czysty stewiol została ustalona na 4 mg/kg ciała na dobę.",
                "wiki_url" => "https://pl.wikipedia.org/wiki/Glikozydy_stewiolowe",
                "wiki_title" => "Wikipedia",
                "type" => "not good"
            ],
            [
                "name" => "Węglany sodu",
                "keywords" => "e500, węglan sodu, wodorowęglan sodu, półtorawęglan sodu",
                "description" => "Węglany sodu są w organizmie rozkładane do dwutlenku węgla i wydychane. Nie ma zatem mowy o szkodliwości E500 przy jego spożywaniu. Z powodu rozkładu do związków neutralnych nie ustalono limitu dziennego spożycia węglanu sodu, a w produkcji żywności można go stosować na zasadzie quantum satis, czyli w ilości do uzyskania pożądanego efektu. Węglan sodu w ciąży w racjonalnych ilościach (np. do pieczenia domowego ciasta, a nie przy zajadaniu się codziennie sklepowymi ciasteczkami) jest bezpieczny. Szkodliwość węglanów sodu może być związana jedynie z bezpośrednim kontaktem ze stężonym czystym związkiem. Wtedy działa drażniąco na błony śluzowe i skórę.",
                "wiki_url" => "https://wylecz.to/diety/weglan-sodu-e500-wlasciwosci-zastosowanie-szkodliwosc/",
                "wiki_title" => "wylecz.to",
                "type" => "not good"
            ],
            [
                "name" => "Węglany sodu",
                "keywords" => "e500, węglan sodu, wodorowęglan sodu, półtorawęglan sodu",
                "description" => "Węglany sodu są w organizmie rozkładane do dwutlenku węgla i wydychane. Nie ma zatem mowy o szkodliwości E500 przy jego spożywaniu. Z powodu rozkładu do związków neutralnych nie ustalono limitu dziennego spożycia węglanu sodu, a w produkcji żywności można go stosować na zasadzie quantum satis, czyli w ilości do uzyskania pożądanego efektu. Węglan sodu w ciąży w racjonalnych ilościach (np. do pieczenia domowego ciasta, a nie przy zajadaniu się codziennie sklepowymi ciasteczkami) jest bezpieczny. Szkodliwość węglanów sodu może być związana jedynie z bezpośrednim kontaktem ze stężonym czystym związkiem. Wtedy działa drażniąco na błony śluzowe i skórę.",
                "wiki_url" => "https://wylecz.to/diety/weglan-sodu-e500-wlasciwosci-zastosowanie-szkodliwosc/",
                "wiki_title" => "wylecz.to",
                "type" => "not good"
            ],
            [
                "name" => "Karmel",
                "keywords" => "e150a, karmel",
                "description" => "Uważany jest za nieszkodliwy, wymaga jednak zweryfikowania pod kątem kancerogenności, wywoływania stanów zapalnych i obniżenia płodności. Może wywoływać dolegliwości żołądkowo - jelitowe.",
                "wiki_url" => "https://vitalia.pl/ch_add,17,0_Karmel.html",
                "wiki_title" => "vitalia.pl",
                "type" => "not good"
            ],
            [
                "name" => "Guma guar",
                "keywords" => "e412, Guma guar, guma guar",
                "description" => "Guma guar źle się kojarzy, ale sama w sobie nie jest szkodliwa. E 412 należy do rozpuszczalnych frakcji błonnika pokarmowego, który może szkodzić jedynie w ten sposób, iż jego nadmierne spożycie wywoła biegunkę bądź inne skutki uboczne ze strony układu pokarmowego. Problem z gumą guar wynika z tego, że dodaje się ją najczęściej do produktów niskiej jakości, o wysokim stopniu przetworzenia. Gumę guar w keczupie znajdziemy tylko wtedy, gdy użyto do jego produkcji mało pulpy pomidorowej, a dużo wody. Guma guar w dżemach maskuje zbyt małą ilość owoców, a w wędlinach niewielki udział mięsa. Guma guar w mleku kokosowym zwykle nie jest szkodliwym dodatkiem. Sprawia, że mleko się nie rozwarstwia, czego oczekuje część konsumentów. Sama guma guar nie jest groźna dla zdrowia. Szkodliwe i mało wartościowe są zwykle produkty, do których ją się dodaje. Jednak nic nie stoi na przeszkodzie, aby używać gumy guar w kuchni. Guma guar w ciąży również jest bezpieczna.",
                "wiki_url" => "https://wylecz.to/diety/guma-guar-e412-wlasciwosci-zastosowanie-szkodliwosc-wplyw-na-zdrowie/",
                "wiki_title" => "wylecz.to",
                "type" => "not good"
            ],
            [
                "name" => "Trifosforany",
                "keywords" => "trifosforany, e451",
                "description" => "Wysokie stężenia fosforanów mogą zakłócić niektóre procesy metaboliczne, ponieważ fosforan odgrywa ważną rolę w ogólnym metabolizmie.",
                "wiki_url" => "http://www.food-info.net/pl/e/e451.htm",
                "wiki_title" => "food-info.net/",
                "type" => "not good"
            ],
            [
                "name" => "Dwutlenek krzemu",
                "keywords" => "Dwutlenek krzemu, e551",
                "description" => "Europejski Urząd ds. Bezpieczeństwa Żywności (EFSA) w 2018 roku opublikował ponowną ocenę zagrożenia zdrowotnego związanego ze spożyciem dodatku do żywności E551 – amorficznej, syntetycznej postaci dwutlenku krzemu. Według opinii ekspertów EFSA dwutlenek krzemu jest słabo absorbowany w organizmie, jednak jego niewielkie ilości można znaleźć w niektórych tkankach. Na podstawie analizy dostępnych badań stwierdzono, że E551 jest bezpieczny dla zdrowia. Nie wykazuje toksyczności przewlekłej ani nie powoduje zaburzeń rozwoju płodu oraz nie wpływa na płodność. SAS stosowany jako dodatek do żywności nie wykazuje właściwości genotoksycznych i rakotwórczych. Czy dwutlenek krzemu jest rakotwórczy? Istnieją pewne obawy, że postaci dwutlenku krzemu, które nie są stosowane w żywności, mogą wykazywać działanie rakotwórcze, jednak kwestia ta wymaga dokładnej analizy. Problem zdrowotny potencjalnie stanowią nanocząstki dwutlenku krzemu, które mogą znajdować się w E551 w niewielkich ilościach, gdyż specyfikacja tego dodatku do żywności jest zbyt mało szczegółowa. Skutki uboczne dwutlenku krzemu są związane z obecnością cząstek o rozmiarze poniżej 100 nm. Na podstawie dostępnych badań naukowych nie stwierdzono żadnych oznak toksyczności dwutlenku krzemu E551 przy zgłoszonych zastosowaniach i poziomach użytkowania. Na dzień dzisiejszy nie określono poziomu ADI, czyli dopuszczalnego dziennego spożycia dla dwutlenku krzemu.",
                "wiki_url" => "https://wylecz.to/diety/dwutlenek-krzemu-e551-wlasciwosci-wystepowanie-w-zywnosci-zastosowanie-szkodliwosc/",
                "wiki_title" => "wylecz.to",
                "type" => "not good"
            ],
            [
                "name" => "Glutaminian sodu",
                "keywords" => "Glutaminian sodu, E621",
                "description" => "Nie jest klasyfikowany jako substancja szkodliwa[4] i jest zalegalizowany w Unii Europejskiej jako dodatek do żywności pod numerem E621. Jego toksyczność jest kilkanaście razy niższa[1] od soli kuchennej[8]. Glutaminian sodu bywa uznawany za przyczynę tzw. syndromu chińskiej restauracji – choroby związanej z nadmiernym spożyciem glutaminianu sodu lub nadwrażliwością na niego. Objawy to zawroty głowy, palpitacje serca, nadmierna potliwość i uczucie niepokoju, notowane po spożyciu posiłku w azjatyckich restauracjach. Jednak dokładna weryfikacja danych[9] nie potwierdziła, aby przyczyną tych dolegliwości był glutaminian sodu, zaś pewne typy reakcji alergicznych na potrawy kuchni chińskiej mogą być powodowane innymi jej składnikami, jak np. grzyby, orzechy i zioła. Część badań wskazuje na związek pomiędzy spożyciem glutaminianu sodu a występowaniem bólów głowy[10]. Przegląd systematyczny opublikowany w 2016 roku wskazuje, że dotychczasowe badania nie potwierdzają takiej zależności, a część z nich mogła zostać przeprowadzona w niewłaściwy sposób[11].",
                "wiki_url" => "https://pl.wikipedia.org/wiki/Glutaminian_sodu",
                "wiki_title" => "Wikipedia",
                "type" => "not good"
            ],
            [
                "name" => "Guanylan disodowy",
                "keywords" => "Guanylan disodowy, E627",
                "description" => "Szkodliwość guanylanu disodowego jest mitem. Jest to związek występujący w każdej komórce wszystkich organizmów żywych, tworzy materiał genetyczny. GMP jest szeroko rozpowszechniony we wszystkich tkankach roślinnych i zwierzęcych. Codziennie dostarczamy go w diecie z żywnością nieprzetworzoną. Związek ten jest metabolizowany do nieszkodliwych dla zdrowia substancji. Według raportu amerykańskiej organizacji Food and Drug Administration sporządzonego na podstawie wiarygodnych badań naukowych, guanylan disodowy nie jest toksyczny, rakotwórczy, nie wpływa na rozrodczość ani na rozwój płodu. W związku z tym nie ustalono norm dopuszczalnego dziennego spożycia dla GMP. Szacuje się, że codziennie wraz z pożywieniem zjadamy około 2 g nukleotydów (w tym GMP). Jednocześnie z dietą dostarczamy dziennie 4 mg tychże nukleotydów w postaci dodatków do żywności (wzmacniaczy smaku). Guanylan disodowy jest dodatkiem do żywności bezpiecznym dla zdrowia. Problemem nie jest sam GMP, a żywność, do którego jest dodawany. Bardzo często są to produkty bardzo niskiej jakości, w których wzmacniacz smaku ma za zadanie zamaskować fatalną jakość użytych surowców.",
                "wiki_url" => "https://wylecz.to/diety/guanylan-disodowy-e627-wlasciwosci-pochodzenie-wplyw-na-organizm-szkodliwosc/",
                "wiki_title" => "wylecz.to",
                "type" => "not good"
            ],
            [
                "name" => "Inozynian disodowy",
                "keywords" => "Inozynian disodowy, E631",
                "description" => "Według opinii EFSA (Europejskiego Urzędu ds. Bezpieczeństwa Żywności) z 2014 roku inozynian disodowy – jako substancja powszechnie występująca w komórkach organizmów, budująca DNA i RNA – jest całkowicie bezpieczny do stosowania. Nie stwierdza się żadnej szkodliwości inozynianu disodowego dla ludzi i zwierząt. Z powyższego powodu dawkowanie inozynianu sodowego również nie zostało ustalone. Ponadto, według analiz, średnie dzienne spożycie inozynianu, guanylanu i adenylanu jako dodatku do żywności jest 500 razy mniejsze niż spożycie tych substancji naturalnie obecnych w żywności. W związku z tym, że inozynian disodowy jest substancją purynową, powinny na niego uważać osoby z wysokim poziomem kwasu moczowego i chorujące na dnę moczanową. Jednak w ich wypadku ograniczenie to dotyczy wszystkich mięsnych produktów. Inozynian disodowy w ciąży może być spożywany bez przeszkód. Pamiętajmy jednak, że E631 jest dodawane zwykle do produktów niskiej jakości, a wzmacniacz smaku ma za zadanie tę niedostateczną jakość zamaskować.",
                "wiki_url" => "https://wylecz.to/diety/inozynian-disodowy-e631-pochodzenie-wplyw-na-organizm-szkodliwosc/",
                "wiki_title" => "wylecz.to",
                "type" => "not good"
            ],
            [
                "name" => "Kurkumina",
                "keywords" => "Kurkumina, E100",
                "description" => "Wiele dowodów wskazuję na to, iż w modelach in vitro, w których testowano działanie kurkuminy, powoduje ona wiele zaburzeń normalnego funkcjonowania komórek, co może prowadzić do błędnej interpretacji wyników[12][13][14]. Chociaż kurkumina miała pozytywne efekty w licznych eksperymentach laboratoryjnych i klinicznych, nie potwierdzono jednak jej działania w żadnym z oficjalnych, rzetelnych i ustrukturyzowanych badaniach klinicznych[15][16]. Według przeglądu systematycznego z 2017 roku, który uwzględniał ponad 120 badań, wykorzystanie kurkuminy jako leku nie zakończyło się sukcesem[12]. W kwietniu 2018 r. Bharat Aggarwal badacz prowadzący badaniami nad nowotworami z University of Texas MD Anderson Cancer Center, wycofał 19 artykułów za oszustwa badawcze[17][18]. Badania Aggarwal koncentrowały się na potencjalnych właściwościach przeciwnowotworowych ziół i przypraw, szczególnie kurkuminy. Według Houston Chronicle badania te „przyciągnęły zainteresowanie mediów krajowych i położyły podwaliny pod trwające badania kliniczne”[19][20].",
                "wiki_url" => "https://pl.wikipedia.org/wiki/Kurkumina",
                "wiki_title" => "Wikipedia",
                "type" => "not good"
            ]
            //good
            ,
            [
                "name" => "Witamina B6",
                "keywords" => "witamina B6",
                "description" => "Niedobór witaminy B6 może wywoływać objawy ze strony układu nerwowego, takie jak: drgawki, depresja, apatia, bezsenność, ogólne pogorszenie samopoczucia, obniżenie sprawności procesów myślowych, zapalenie nerwów. Do innych objawów niedoboru witaminy B6 należą: zmniejszenie odporności na infekcje, stany zapalne skóry (łojotokowe zmiany na twarzy, podrażnienie języka i błon śluzowych jamy ustnej), niedokrwistość, kamica nerkowa, zmęczenie, nudności, odruchy wymiotne, zaburzenia w funkcjonowaniu mięśnia sercowego, zwiększenie ryzyka powstawania nowotworów, natomiast u dzieci – opóźnienie umysłowe, nieprawidłowości w budowie kości, objawy padaczkowe, drażliwość. Niedobór witaminy B6 jest ważnym czynnikiem ryzyka rozwoju miażdżycy, stąd niedobór tej witaminy zwiększa ryzyko udaru i choroby niedokrwiennej serca.",
                "wiki_url" => "https://pl.wikipedia.org/wiki/Witamina_B6",
                "wiki_title" => "Wikipedia",
                "type" => "good"
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
                "name" => "Tokoferol",
                "keywords" => "Tokoferol, E306",
                "description" => "Tokoferole mają bardzo duże znaczenie dla prawidłowego funkcjonowania organizmu. Tokoferol jako przeciwutleniacz chroni przed oksydacją i uszkodzeniem wielonienasyconych kwasów tłuszczowych i fosfolipidów obecnych w błonach komórkowych każdej komórki ciała. Tokoferole biorą także udział w procesach metabolicznych. Skutki niedoboru tokoferoli są szczególnie dotkliwe u noworodków i dzieci. Mogą prowadzić do niedokrwistości, zaburzeń wzroku, dysplazji oskrzelowo-płucnej, a nawet nagłego zgonu. Tokoferol w ciąży przechodzi przez łożysko w III trymestrze, dlatego niedobory często dotyczą wcześniaków. Jako przeciwutleniacz tokoferol neutralizuje wolne rodniki, przez co spowalnia procesy starzenia się. Dowiedziono naukowo, że chroni organizm przed powstawaniem miażdżycy i nowotworów. Witaminę E stosuje się w leczeniu chorób serca. Ułatwia ona transport tlenu do komórek, wzmacnia naczynia krwionośne i zmniejsza krzepliwość krwi.",
                "wiki_url" => "https://wylecz.to/diety/tokoferol-co-to-jest-dzialanie-wlasciwosci-wystepowanie-zastosowanie-szkodliwosc/",
                "wiki_title" => "wylecz.to",
                "type" => "good"
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
