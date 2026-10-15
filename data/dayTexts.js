// "So könnte dein Sozialer Tag aussehen:" – drei Aussagen je Job-ID
const dayTexts = {
  1: [
    "Morgens begrüßt du die Kinder und baust mit ihnen Türme in der Bauecke.",
    "Du bastelst mit der Gruppe bunte Laternen oder malst Bilder für die Wand.",
    "Beim Mittagessen deckst du den Tisch und hilfst den Kindern beim Essen."
  ],
  2: [
    "Du sitzt mit im Unterricht und hilfst einem Kind beim Lesen üben.",
    "Im Matheunterricht gehst du mit herum und erklärst Aufgaben noch einmal in Ruhe.",
    "In der großen Pause passt du mit auf dem Schulhof auf."
  ],
  3: [
    "Du bereitest mit der Sozialarbeiter*in ein Spiel zum Thema Teamgeist für eine Klasse vor.",
    "In der Pause bist du im offenen Treff und spielst Kicker mit Schüler*innen.",
    "Du erfährst, wie Streit geschlichtet wird und wie Kinder bei Problemen Hilfe bekommen."
  ],
  4: [
    "Du spielst mit Bewohner*innen eine Runde Mensch ärgere dich nicht oder Bingo.",
    "Du begleitest eine ältere Dame im Rollstuhl beim Spaziergang durch den Garten.",
    "Beim Nachmittagskaffee verteilst du Kuchen und hörst spannende Geschichten von früher."
  ],
  5: [
    "Du bringst den Patient*innen Frühstück und Getränke direkt ans Bett.",
    "Du füllst Handtücher, Handschuhe und andere Vorräte in den Schränken auf.",
    "Du begleitest Menschen zu Untersuchungen im Haus und leistest ihnen dabei Gesellschaft."
  ],
  6: [
    "Du planst mit den Betreuer*innen eine Schnitzeljagd für die Kinder im Jugendtreff.",
    "Du leitest selbst ein Spiel an und erklärst der Gruppe die Regeln.",
    "Am Nachmittag backt ihr gemeinsam Waffeln und spielt Tischtennis oder Billard."
  ],
  7: [
    "Du bereitest mit dem Team einen Beratungsraum vor und legst hilfreiche Infomaterialien bereit.",
    "Du erfährst, wie Familien und andere Menschen in schwierigen Situationen Unterstützung bekommen.",
    "Du hilfst bei einem offenen Angebot für Kinder, Jugendliche oder Familien mit."
  ],
  8: [
    "Du legst Knete, Perlen und Steckspiele für die nächste Therapiestunde bereit.",
    "Du schaust zu, wie ein Kind mit Geschicklichkeitsspielen seine Hände trainiert.",
    "Gemeinsam mit einer Patientin übst du, Knöpfe zu schließen oder Schuhe zu binden."
  ],
  9: [
    "Du bereitest die Liegen vor und legst Handtücher, Bälle und Bänder bereit.",
    "Du schaust zu, wie ein Fußballer nach seiner Knieverletzung wieder laufen lernt.",
    "Auf dem Wackelbrett probierst du selbst Gleichgewichtsübungen aus der Therapie aus."
  ],
  10: [
    "Du schaust dir einen Rettungswagen mit Trage, Sauerstoff und Defibrillator von innen an.",
    "Du hilfst beim Zählen und Auffüllen von Verbänden, Pflastern und Handschuhen.",
    "An einer Übungspuppe übst du Herzdruckmassage und die stabile Seitenlage."
  ],
  16: [
    "Morgens füllst du Futternäpfe und frisches Wasser für Hunde und Katzen auf.",
    "Du gehst mit einem Hund aus dem Tierheim eine große Runde Gassi.",
    "Im Katzenzimmer bürstest du das Fell und spielst mit den Katzen."
  ],
  17: [
    "Du bist dabei, wenn ein Hund geimpft oder eine Katze abgehört wird.",
    "Du hältst ein aufgeregtes Kaninchen sanft fest und beruhigst es mit Streicheln.",
    "Auf dem Ultraschallbild siehst du vielleicht sogar, wie viele Welpen erwartet werden."
  ],
  18: [
    "Am Empfang begrüßt du Hunde, Katzen und ihre Besitzer*innen und vergibst Termine.",
    "Du wiegst Tiere auf der Waage und trägst das Gewicht in die Akte ein.",
    "Nach jeder Behandlung desinfizierst du den Tisch für das nächste Tier."
  ],
  19: [
    "Du hilfst dabei, einen Pudel oder Golden Retriever in der Wanne zu baden.",
    "Mit dem großen Föhn trocknest du das Fell und bürstest Knoten heraus.",
    "Zum Schluss bekommen die Hunde ein Halstuch und gehen frisch gestylt nach Hause."
  ],
  20: [
    "Früh am Morgen fütterst du die Kühe und streust frisches Stroh in den Stall.",
    "Du fährst auf dem Traktor mit und schaust zu, wie das Feld bearbeitet wird.",
    "Du hilfst dabei, Kartoffeln oder Kürbisse zu ernten und in Kisten zu sortieren."
  ],
  21: [
    "Du topfst kleine Pflanzen in größere Töpfe um und gießt sie anschließend.",
    "Im Gewächshaus säst du Samen aus, aus denen bald neue Pflanzen wachsen.",
    "Draußen zupfst du Unkraut aus den Beeten und pflanzt bunte Blumen ein."
  ],
  22: [
    "Du schneidest die Stiele von frischen Rosen an und stellst sie ins Wasser.",
    "Mit Hilfe bindest du deinen allerersten eigenen Blumenstrauß und packst ihn hübsch ein.",
    "Du gestaltest einen Herbstkranz mit Zapfen, Blättern und kleinen Kürbissen."
  ],
  23: [
    "Du gehst mit der Försterin durch den Wald und lernst Baumarten kennen.",
    "Du pflanzt kleine Bäume und schützt sie mit einem Zaun vor hungrigen Rehen.",
    "Mit dem Fernglas suchst du nach Spuren von Rehen, Wildschweinen oder Füchsen."
  ],
  24: [
    "Du hilfst dabei, Steine für einen neuen Gartenweg zu verlegen.",
    "Mit einer Schubkarre fährst du Erde zu einem Beet und pflanzt Sträucher ein.",
    "Du schneidest Hecken in Form und rechst danach das Laub zusammen."
  ],
  25: [
    "Du ziehst einen weißen Schutzanzug mit Schleier an und gehst zu den Bienenstöcken.",
    "Gemeinsam mit der Imkerin hebst du eine Wabe voller Bienen aus dem Kasten.",
    "Du hilfst beim Abfüllen von Honig in Gläser und klebst die Etiketten auf."
  ],
  26: [
    "Du schaust ins Lager, wo tausende Steine, Fossilien und Tierpräparate aufbewahrt werden.",
    "Du hilfst beim Aufbau einer Ausstellung und stellst Schilder an die Ausstellungsstücke.",
    "Du begleitest eine Schulklasse und zeigst ihr ein echtes Dinosaurierskelett."
  ],
  27: [
    "Du mistest die Pferdeboxen aus und verteilst frisches Stroh und Heu.",
    "Mit Striegel und Bürste putzt du ein Pferd, bis sein Fell glänzt.",
    "Am Nachmittag führst du die Pferde auf die Koppel und füllst Wasser auf."
  ],
  28: [
    "Morgens sammelst du die frischen Eier aus dem Hühnerstall in einen Korb.",
    "Du fütterst Kälbchen mit der Milchflasche und streichelst die Ziegen auf der Weide.",
    "Im Hofladen hilfst du, Kartoffeln, Äpfel und Eier für die Kund*innen auszulegen."
  ],
  31: [
    "In der Backstube formst du Brötchen und belegst die Bleche mit Teigstücken.",
    "Du streust Körner und Mohn auf die Brote, bevor sie in den Ofen kommen.",
    "Mittags darfst du ein noch warmes Brötchen probieren, das du selbst geformt hast."
  ],
  32: [
    "Du schlägst Sahne steif und hilfst beim Füllen einer großen Geburtstagstorte.",
    "Mit dem Spritzbeutel verzierst du Törtchen mit Cremetupfen und Schokostreuseln.",
    "Du formst kleine Figuren aus Marzipan und setzt sie auf die Kuchen."
  ],
  33: [
    "Du schälst Kartoffeln, schneidest Gemüse und lernst dabei echte Profitricks mit dem Messer.",
    "Mittags reichst du den Köch*innen Teller an, wenn viele Bestellungen auf einmal kommen.",
    "Nach dem Essen hilfst du beim Aufräumen und probierst das Tagesgericht."
  ],
  34: [
    "Du wäschst Kund*innen die Haare und massierst dabei sanft die Kopfhaut.",
    "Du schaust genau zu, wie Haare geschnitten, gefärbt oder zu Locken gedreht werden.",
    "Zwischen den Terminen fegst du Haare zusammen und räumst den Arbeitsplatz auf."
  ],
  35: [
    "Du fährst mit dem Team zu Kund*innen und hilfst beim Einbauen einer Küche.",
    "Du trägst Material, reichst Schrauben an und misst mit dem Zollstock nach.",
    "Mit dem Akkuschrauber schraubst du unter Anleitung Griffe an die neuen Schranktüren."
  ],
  36: [
    "In der Werkstatt schleifst du Holzbretter, bis sie ganz glatt sind.",
    "Du ölst eine Tischplatte und siehst, wie die Holzmaserung schön zum Vorschein kommt.",
    "Unter Anleitung baust du ein kleines Vogelhaus oder eine Kiste für dich selbst."
  ],
  37: [
    "Du deckst den Boden mit Folie ab und klebst Fenster und Steckdosen sorgfältig ab.",
    "Mit der Farbrolle streichst du selbst eine ganze Wand in einer neuen Farbe.",
    "Am Ende ziehst du das Klebeband ab und siehst den fertigen Raum."
  ],
  38: [
    "Du begleitest das Team auf eine Baustelle, wo Kabel in einem Neubau verlegt werden.",
    "Du reichst Werkzeug an und schaust zu, wie Steckdosen und Lichtschalter angeschlossen werden.",
    "Mit einem Messgerät lernst du, wie man prüft, ob Strom in der Leitung ist."
  ],
  39: [
    "Du hilfst beim Reifenwechsel und ziehst mit dem Schlagschrauber die Radmuttern fest.",
    "Du schaust zu, wie das Auto auf der Hebebühne nach oben fährt.",
    "Am Diagnosecomputer siehst du, wie Fehler im Auto ausgelesen werden."
  ],
  40: [
    "Du baust einen Reifen aus und flickst den Schlauch mit Flickzeug selbst.",
    "Du stellst Bremsen nach und ölst Ketten, bis das Rad wieder leise läuft.",
    "Im Laden zeigst du Kund*innen Helme, Lampen und Schlösser für ihr Fahrrad."
  ],
  41: [
    "Du begleitest den Schornsteinfeger von Haus zu Haus und schaust dir Heizungen an.",
    "Mit einem Messgerät prüft ihr, ob die Heizung saubere Abgase in die Luft lässt.",
    "Vielleicht steigst du mit aufs Dach und siehst die Stadt von oben."
  ],
  42: [
    "Im Studio baust du Lampen, Schirme und einen Hintergrund für ein Porträtfoto auf.",
    "Du hältst einen Reflektor, damit das Licht genau auf das Gesicht fällt.",
    "Am Computer suchst du mit der Fotografin die besten Bilder des Shootings aus."
  ],
  46: [
    "Du packst Kartons aus und räumst Joghurt, Nudeln oder Getränke ordentlich ins Regal.",
    "In der Obstabteilung sortierst du Äpfel und Bananen und entfernst die schlechten Stücke.",
    "Wenn Kund*innen etwas suchen, bringst du sie direkt zum richtigen Regal."
  ],
  47: [
    "Du packst Kartons mit brandneuen Büchern aus und sortierst sie ins Regal.",
    "Du gestaltest einen Büchertisch zum Thema Herbst oder Gruselgeschichten mit kleinen Dekoideen.",
    "Du schreibst einen Lesetipp zu deinem Lieblingsbuch und stellst ihn im Laden aus."
  ],
  48: [
    "Du packst Brötchen, Brezeln und Kuchen für die Kund*innen in Tüten.",
    "Du füllst die Auslage mit frischen Croissants und belegten Brötchen wieder auf.",
    "Du bereitest Kakao oder Kaffee zu und reichst ihn freundlich über die Theke."
  ],
  49: [
    "Du faltest Pullover ordentlich und hängst neue Jacken nach Größen sortiert auf.",
    "Du ziehst einer Schaufensterpuppe ein neues Outfit an und dekorierst das Schaufenster.",
    "Du hilfst Kund*innen, die richtige Größe zu finden, und bringst Sachen zur Umkleide."
  ],
  50: [
    "Du stehst neben der Kasse und hilfst Kund*innen beim Einpacken ihrer Einkäufe.",
    "Du schaust zu, wie Waren gescannt werden und das Wechselgeld berechnet wird.",
    "Du sammelst Einkaufskörbe ein und füllst die Süßigkeiten an der Kasse auf."
  ],
  51: [
    "Du nimmst Bestellungen auf und bringst Kakao, Kaffee und Kuchen an die Tische.",
    "Du räumst benutztes Geschirr ab und wischst die Tische für die nächsten Gäste.",
    "Hinter der Theke schneidest du Kuchen und legst ihn schön auf Teller."
  ],
  52: [
    "Du lernst an der Kaffeemaschine, wie man Milch zu cremigem Schaum aufschäumt.",
    "Du versuchst dich an Latte Art und malst ein Herz in den Kakao.",
    "Du mixt bunte alkoholfreie Cocktails mit Saft, Früchten und Eiswürfeln."
  ],
  53: [
    "Vor der Öffnung deckst du die Tische mit Besteck, Gläsern und Servietten ein.",
    "Du bringst Getränke an die Tische und trägst dabei mehrere Gläser auf dem Tablett.",
    "Wenn Gäste fertig sind, räumst du ab und bringst das Geschirr zur Küche."
  ],
  54: [
    "Morgens füllst du das Frühstücksbuffet mit Brötchen, Obst und Müsli auf.",
    "Mit dem Housekeeping bereitest du Zimmer vor und legst frische Handtücher bereit.",
    "An der Rezeption siehst du, wie Gäste aus anderen Ländern einchecken."
  ],
  55: [
    "Du begrüßt Besucher*innen am Empfang und zeigst ihnen den Weg zum richtigen Raum.",
    "Du nimmst Anrufe entgegen und notierst Nachrichten für die Kolleg*innen.",
    "Am Computer hilfst du dabei, Termine einzutragen und Besucherausweise vorzubereiten."
  ],
  56: [
    "Du füllst frisches Popcorn in Tüten und verkaufst Nachos und Getränke.",
    "Am Einlass kontrollierst du die Tickets und zeigst den Gästen ihren Kinosaal.",
    "Vielleicht darfst du in den Vorführraum schauen, wo die Filme gestartet werden."
  ],
  57: [
    "Mit dem Portionierer formst du Eiskugeln und setzt sie in die Waffel.",
    "Du dekorierst Eisbecher mit Sahne, Früchten, Soße und einer bunten Waffel.",
    "Du schaust zu, wie neues Eis hergestellt wird, und probierst die Sorten."
  ],
  58: [
    "Früh morgens baust du den Marktstand auf und legst Obst und Gemüse aus.",
    "Du wiegst Äpfel und Tomaten ab und packst sie für die Kund*innen ein.",
    "Mittags hilfst du beim Abbauen und lädst die Kisten zurück in den Wagen."
  ],
  59: [
    "Du gießt Topfpflanzen und entfernst welke Blätter, damit alles frisch aussieht.",
    "Du stellst Eimer mit bunten Blumen vor den Laden, damit Vorbeigehende stehen bleiben.",
    "Du packst Sträuße in Papier ein und bindest eine schöne Schleife darum."
  ],
  61: [
    "Du sortierst die Post und verteilst Briefe an die richtigen Abteilungen im Rathaus.",
    "Am Computer gibst du Daten in Listen ein und druckst Unterlagen aus.",
    "Du bereitest einen Besprechungsraum mit Getränken und Unterlagen für ein Meeting vor."
  ],
  62: [
    "Du bist bei einem Gespräch dabei, in dem jemand ein Girokonto eröffnet.",
    "Du lernst, wie Überweisungen funktionieren und warum man seine PIN geheim hält.",
    "Du hilfst am Servicepunkt und erklärst Kund*innen den Weg zum Geldautomaten."
  ],
  63: [
    "Du begleitest eine Journalistin zu einem Termin und machst dir Notizen.",
    "Du fragst Menschen auf der Straße nach ihrer Meinung zu einem aktuellen Thema.",
    "Aus deinen Notizen schreibst du einen kurzen Text oder eine Bildunterschrift."
  ],
  64: [
    "In der Redaktionskonferenz hörst du zu, welche Themen morgen in die Zeitung kommen.",
    "Du liest Texte Korrektur und suchst nach Rechtschreibfehlern und Tippfehlern.",
    "Du suchst passende Fotos aus und überlegst dir eine spannende Überschrift."
  ],
  65: [
    "Du sitzt live im Studio, wenn die Moderatorin die Sendung macht.",
    "Du suchst Lieder für die Playlist aus und recherchierst lustige Fakten für die Sendung.",
    "Vielleicht nimmst du selbst einen kurzen Wetterbericht oder Veranstaltungstipp auf."
  ],
  66: [
    "Du trägst Stative und Lampen zum Drehort und hilfst beim Aufbauen.",
    "Du hältst das Mikrofon an der langen Tonangel über die Schauspieler*innen.",
    "Durch den Sucher siehst du, wie eine Szene aus verschiedenen Blickwinkeln gefilmt wird."
  ],
  67: [
    "Du schaust zu, wie am Computer ein Logo für eine Firma entsteht.",
    "Du probierst verschiedene Schriften und Farben für ein Plakat aus.",
    "Mit einem Grafikprogramm gestaltest du deinen eigenen Flyer für eine Veranstaltung."
  ],
  68: [
    "Du zeichnest auf Papier, wie die Startseite einer neuen Website aussehen könnte.",
    "Du schaust zu, wie aus deinem Entwurf mit Code eine echte Seite wird.",
    "Du testest die Website auf dem Handy und suchst nach Fehlern."
  ],
  69: [
    "Du sammelst Ideen für Posts und überlegst, was Jugendliche spannend finden würden.",
    "Mit dem Handy drehst du ein kurzes Video oder machst Fotos für Instagram.",
    "Du schreibst einen passenden Text mit Hashtags und planst, wann er erscheint."
  ],
  70: [
    "Am Computer hilfst du dabei, neue Bücher bei Verlagen zu bestellen.",
    "Du stellst eine Bücherkiste mit Lesetipps für eine Schulklasse zusammen.",
    "Du hilfst beim Vorbereiten einer Lesung und stellst Stühle für die Gäste auf."
  ],
  71: [
    "Du stellst zurückgegebene Bücher, Comics und DVDs wieder an ihren richtigen Platz.",
    "An der Ausleihe hilfst du dabei, Bücher einzuscannen und zu verbuchen.",
    "Bei der Vorlesestunde liest du kleinen Kindern vielleicht selbst eine Geschichte vor."
  ],
  72: [
    "Du begleitest eine Schulklasse bei einer Führung durch das Museum.",
    "Du hilfst bei einer Mitmach-Aktion, bei der Kinder wie früher schreiben oder malen.",
    "Du bereitest Bastelmaterial und Arbeitsblätter für den nächsten Workshop vor."
  ],
  73: [
    "Du hilfst beim Aufbau eines Festes und stellst Tische, Stühle und Deko auf.",
    "Du hakst auf einer Checkliste ab, ob an alles gedacht wurde.",
    "Während der Veranstaltung begrüßt du Gäste und zeigst ihnen den Weg."
  ],
  74: [
    "Du sitzt bei einer echten Probe im Zuschauerraum und schaust den Schauspieler*innen zu.",
    "In der Requisite suchst du Gegenstände für die Bühne heraus und sortierst sie.",
    "In der Kostümabteilung siehst du, wie Kostüme genäht und angepasst werden."
  ],
  76: [
    "Du schaust dir ein großes Löschfahrzeug an und siehst, was alles darin steckt.",
    "Du hilfst beim Reinigen und Aufrollen der Schläuche nach einer Übung.",
    "Du probierst eine Feuerwehrjacke und einen Helm an und merkst, wie schwer sie sind."
  ],
  77: [
    "Du schaust in den Technikraum, wo das Wasser gefiltert und geprüft wird.",
    "Du hilfst beim Aufbau von Schwimmnudeln, Matten und Spielgeräten für einen Kinderkurs.",
    "Am Beckenrand passt du mit auf und lernst, worauf man achten muss."
  ],
  78: [
    "Am Eingang eines Fahrgeschäfts begrüßt du Gäste und erklärst die Sicherheitsregeln.",
    "Du hilfst an einem Spielestand, an dem Kinder Bälle werfen und Preise gewinnen.",
    "Du verteilst Parkpläne und zeigst Besucher*innen den Weg zur nächsten Achterbahn."
  ],
  79: [
    "Du schneidest Tomaten, Gurken und Zwiebeln und füllst die Behälter an der Theke auf.",
    "Du rührst Soßen an und hilfst beim Zusammenstellen von Döner und Dürüm.",
    "In der Mittagspause arbeitest du Hand in Hand mit dem Team am Tresen."
  ],
  80: [
    "Du pflückst Äpfel oder Birnen direkt vom Baum und legst sie vorsichtig in Kisten.",
    "Du sortierst das Obst nach Größe und legst beschädigte Früchte zur Seite.",
    "Mit dem Bollerwagen bringst du die vollen Kisten zum Hofladen."
  ],
  81: [
    "Du gibst Helme und Klettergurte aus und hilfst beim richtigen Anlegen.",
    "Bei der Sicherheitseinweisung zeigst du, wie man die Karabiner richtig einhängt.",
    "Am Ende darfst du vielleicht selbst einen Parcours in luftiger Höhe klettern."
  ]
};
