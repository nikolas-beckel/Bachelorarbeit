# Bachelorarbeit
**Thema**: Entwicklung von Darstellungs- und Interaktionsmöglichkeiten in Virtual Reality für das Cranach Digital Archive  
**Autor**: Nikolas Beckel  
**Matrikelnummer**: 11103435  
**1. Prüfer**: Prof. Christian Noss  
**2. Prüfer**: Matthias Groß  
**Startdatum**: 21.09.2020  
**Abgabedatum**: 23.11.2020  

# Hinweis
Hier werden einige Hinweise für die Prüfer notiert, um Missverständnisse zu vermeiden.
1. **Kommentare**: Einige Kommentare existieren doppelt (z.B. Methodenbeschreibung im Interface und in der Klasse). In der Regel würde ich nur die Methoden innerhalb des Interfaces kommentieren. Für das Verständnis des Codes ist es aber einfacher, wenn die Kommentare einmal im Interface und einmal in der Klasse vorhanden sind. So muss man, falls man sich fragt, was die Methode macht, nicht extra nochmal zum Interface springen. Manche IDEs zeigen beim Hovern der Methode die Beschreibung im Interface an, jedoch nicht alle. Da ich nicht weiß, welche die Prüfer verwenden werden, wurden die Kommentare sicherheitshalber doppelt gepflegt.
2. Beim ersten Laden der Anwendung können kurze Standbilder auftreten. Einfach mit dem Kopf hin und her bewegen, etwas drehen, damit die vollständige Umgebung geladen
werden kann.

# Branchbeschreibung
In diesem Branch landen unter anderem bereits überprüften Codestellen oder Texte, die aus dem Branch [doc/preliminary-work](https://github.com/nikolasbeckel/Bachelorarbeit/tree/doc/preliminary-work) (Noch nicht korrekturgelesene Bachelorarbeit) oder [code/playground-and-testarea](https://github.com/nikolasbeckel/Bachelorarbeit/tree/code/playground-and-test-area) (Testumgebung für A-Frame und Spielplatz für Ideen) stammen. Der master branch stellt das Endergebnis dar. Natürlich kann nicht zu 100% garantiert werden, dass jeder Pull Request vollkommen final ist, deshalb können immer noch Änderungen bereits gepushter Informationen oder Codestellen überarbeitet werden. Für Änderungen innerhalb des master branches muss immer ein feature/* oder bugfix/* (für Code) und doc/* (für Doku) branch erstellt werden. Bei erfolgreichter Prüfung des branches kann dieser mittels Pull Request gemerged werden. So kann gewährleistet werden, dass parallel ausgeführte Aufgaben nicht in Konflikt geraten. Vor jedem Pull Request rebase nicht vergessen 😉.

# Branching-Modell
Es wird nach einem vereinfachten Git-flow-Workflow gearbeitet. Da es sich hierbei nicht um ein Produkt handelt, welches öffentlich zugänglich ist und regelmäßig Produktupdates erhält, entfällt hier der develop branch. Neue Funktionen werden sofort in ihrem feature branch getestet und sobald der Code refactort und die Funktionen getestet wurden, kann er in den master branch gemergt werden. In diesem Projekt würde ein develop branch nur unnötig Zeit verschwenden und Verwaltungsaufwand mit sich bringen.

# Installationsanleitung für die VR-Anwendung
Zum Ausführen der Anwendung wird Node.js benötigt.
1. Code/ Ordner aus dem USB-Stick auf den Computer ziehen und mit der Kommandoleiste dorthin navigieren
2. Wurde der Code über GitHub geladen, `npm i` ausführen.
3. `npm run serve` ausführen
4. Prototypen aufrufen
  - Technischer Prototyp: https://localhost:8080/public/prototypes/technical-prototype-v1/
  - Lucas Cranachs Werkstatt: https://localhost:8080/public/prototypes/workshop-v1/
  - Neuronales Netz: https://localhost:8080/public/prototypes/neural-network-v1/

Die Anwendung kann dann mit der VR-Brille über das lokale Netz erreicht werden. A-Frame bietet aber auch eine 3D-Darstellung im Browser an. Sofern keine Möglichkeit besteht
innerhalb des Netzwerks darauf zuzugreifen, kann ich [ngrok](https://ngrok.com/) zum Aufrufen der Prototypen empfehlen.
Dafür einfach die Kommandozeile aufrufen, `ngrok http https://localhost:8080/` eingeben. Man erhält eine https-URL von ngrok. Zu dieser muss noch `/public/prototypes/neural-network-v1/` angefügt werden. Diese kann man dann in der VR-Brille aufrufen. Aber vorsicht: Das erste Laden der Anwendung dauert hierbei ein wenig länger.
Zusätzlich empfehle in innerhalb der VR-Brille, auf dem Smartphone oder auf dem PC die Anwendung mit Firefox zu öffnen. Auf dem PC funktionieren aber auch Chromium-basierte Browser.

# 3D-Modelle
- Books [[Mikael Ganehag Brorsson](https://poly.google.com/view/3ZqFRk2aK65)]
- Stuhl [[Poly by Google](https://poly.google.com/view/7Jl72KgiRl-)]
- Staffelei [[S. Paul Michael](https://poly.google.com/view/7Ma1NdvyAZn)]
- Hocker [[Poly by Google](https://poly.google.com/view/38ObxgL6fP7)]
- Säge [[sirkitree](https://poly.google.com/view/6Zn4fd-twjB)]
- Hammer [[sirkitree](https://poly.google.com/view/4vFXBg4-1yW)]
- Bürotisch [[tsishir](https://sketchfab.com/3d-models/bookshelf-34f20abd9ac04717a4bd74f23183078e)]
- Werktisch [[Miguelangelo Rosario](https://poly.google.com/view/2q-JgcTaDeW)]
- Holzbrett [[Jeremy Eyring](https://poly.google.com/view/esOASDtsMZH)]
- Kronleuchter [[Poly by Google](https://poly.google.com/view/bXveeuhkcZY)]
- Farbpalette [[Poly by Google](https://poly.google.com/view/94Eii6n3_fI)]
- Kleiner Tisch [[Brandon Abbott](https://poly.google.com/view/2SeBsVXa3Uj)]
- Truhe [[Poly by Google](https://poly.google.com/view/9sYjmY44GaD)]
- Tür [[Poly by Google ](https://poly.google.com/view/aQp17eqOPFn)]

# Icons
- Fußabdrücke [[Freepik](https://www.flaticon.com/free-icon/footsteps-silhouette-variant_32523?term=footsteps&page=1&position=2&related_item_id=32523)]
- Volume [[Google](https://www.flaticon.com/free-icon/volume_565296?term=volume&page=1&position=2&related_item_id=565296)]
- Browsersymbol [[Freepik](https://www.flaticon.com/free-icon/browser_3781666?term=browser&page=1&position=86&related_item_id=3781666)]

# Texturen
- Steinwand [[textures.com](https://www.textures.com/download/3dscans0058/127590?q=stone+wall)]
- Baumstruktur [[textures.com](https://www.textures.com/download/3dscans0059/127594?q=tree)]
- Holzboden [[textures.com](https://www.textures.com/download/woodplanksold0215/117352?q=wooden)]
- Himmel [[A-Frame](https://aframe.io/)]

# Sound
- Sounddatei eingesprochen von Nikolas Beckel.



