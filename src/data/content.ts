export const content = {
	abstract: {
		content: `
		Das Ziel dieser Bachelorarbeit ist es die Forschungsfrage zu beantworten, ob CSS Präprozessoren in der Entwicklung moderner Single Page Applications
		nach wie vor, unter der Berücksichtigung der stetigen Weiterentwicklung der CSS Spezifikation, einen signifikanten Vorteil bieten. Zur Beantwortung der gestellten
		Forschungsfrage wurde der Funktionsumfang der Präprozessoren Sass, Less und Stylus mit den gegenwärtigen oder zukünftigen Möglichkeiten von klassischem CSS verglichen.
		Zusätzlich wurde eine Single Page Application, zur Überprüfung der Anwendbarkeit beider Ansätze entwickelt und eine quantitative sowie qualitative Untersuchung von 26.220
		Präprozessordateien unternommen, um die Relevanz einzelner Funktionen einschätzen zu können. Der Vergleich der Funktionen beider Ansätze ergab, dass die CSS Spezifikation
		in absehbarer Zeit lediglich 3 von 10 Funktionen ersetzen wird, diese jedoch zu den am häufigsten angewandten Funktionen von Präprozessoren gehören. Bei der Anwendbarkeit
		beider Ansätze in Single Page Applications gibt es keine merkbaren Unterschiede. Die Ergebnisse dieser Arbeit zeigen, dass in Zukunft die Verwendung von CSS Präprozessoren
		für die meisten Entwickler*innen, welche sich lediglich auf die am häufigsten verwendeten Funktionen beschränken, nicht länger notwendig ist.
		`,
	},
	variablen: {
		frequence: 67.41,
		content: `
		Variablen können durch das Modul <a href="https://www.w3.org/TR/css-variables-1/" target="_blank">CSS Custom Properties for Cascading Variables Level 1</a> vollständig ersetzt werden. Diese Variablen lassen sich entgegen der Variablen in CSS Präprozessoren
		zur Laufzeit verändern, da diese nicht durch einen Kompilierungsprozess in ihre zugewiesenen Werte aufgelöst werden. 67.41% aller geprüften Präprozessordateien wurden unter Anwendung von Variablen
		geschrieben, wodurch dieser Funktion eine höhere Häufigkeit zugeschrieben wird. Unter Betrachtung der enormen Vorteile, welche durch die Verwendung von Variablen, insbesondere jene die durch die
		Veränderbarkeit während der Laufzeit, entstehen ist die Funktion sowohl qualitativ als auch quantitativ als sehr Relevant anzuerkennen.
		`,
	},
	mixins: {
		frequence: 41.56,
		content: `
		Mixins sind eine Möglichkeit, eine Gruppe von CSS-Regeln zu kombinieren, um diese in mehreren CSS-Regelblöcken wiederverwenden zu können und gegebenenfalls anhand von parametern zu verändern. Einer der Hauptnutzungsgründe
		für Mixins ist laut <a href="https://users.encs.concordia.ca/~nikolaos/publications/SANER_2016.pdf#page=8" target="_blank">Mazinanian und Tsantalis </a> die Verwendung von CSS-Regeln, welche ein zusätzliches Herstellerpräfix (z.B. -webkit-) enthalten und somit nicht für jeden Anwendungsfall einzeln
		definiert werden müssen. In dem von Mazinanian und Tsantalis untersuchten Datensatz wurden 42% aller Mixins zur Lösung des Herstellerpräfix-Problems genutzt. 41.56% aller für diese Bachelorarbeit gesammelten Präprozessordateien wurden unter Anwendung von Mixins geschrieben, wodurch dieser Funktion eine mäßige Häufigkeit zugeschrieben wird.
		Der bereits angesprochene Anwendungsfall, welcher durch Mixins gelöst werden kann, wird in Single Page Applications jedoch oft durch die Nutzung der Bibliothek <a href="https://github.com/postcss/autoprefixer">Autoprefixer</a> gelöst.
		`,
	},
	verschachtelung: {
		frequence: 82.65,
		content: `
		Die Verschachtelungsfunktion in CSS Präprozessoren dient dazu, verwandte aber verschiedene Selektoren, Pseudoselektoren und Media Queries kompakt innerhalb eines Regelblocks zu bündeln.
		82.65% aller geprüften Präprozessordateien wurden unter Anwendung von Verschachtelungsfunktionen geschrieben, wodurch dieser Funktion eine sehr hohe Häufigkeit zugeschrieben wird. Die Verschachtelungsfunktion
		ist somit die am häufigsten genutzte Funktionalität in CSS Präprozessoren. Das Modul <a href="https://www.w3.org/TR/css-nesting-1/" target="_blank">CSS Nesting Module</a> wird diese Funktion restlos mit einer
		nahezu identischen Syntax ersetzen, sobald dieser Entwurf von dem W3C als Empfehlung übernommen und durch die Browserhersteller übernommen wurde.
		`,
	},
	vererbung: {
		frequence: 7.14,
		content: `
		Die Vererbungsfunktion in CSS Präprozessoren dient dazu, einen CSS Regelblock um einen bereits bestehenden Block zu erweitern.
		Wie bereits in Mazinanians und Tsantalis <a href="https://users.encs.concordia.ca/~nikolaos/publications/SANER_2016.pdf#page=8" target="_blank">Studie</a>
		herausgefunden wurde, tendieren Entwickler*innen zur Erlangung dieses Ziels jedoch eher dazu Mixins zu verwenden. 7.14% aller geprüften Präprozessordateien wurden unter Anwendung von Vererbungsfunktionen geschrieben,
		wodurch dieser Funktion eine sehr geringe Häufigkeit zugeschrieben wird. Dennoch gab es in der Vergangenheit einen <a href="https://tabatkins.github.io/specs/css-extend-rule/" target="_blank">Entwurf</a>, welcher darauf
		abzielte die Vererbungsfunktion in CSS zu implementieren, da davon ausgegangen wurde, dass diese Funktion sehr häufig von Entwickler*innen genutzt wird. Angesichts der dargelegten Zahlen stellt sich dies jedoch als eine
		Falschannahme dar.
		`,
	},
	iteration: {
		frequence: 4.47,
		content: `
		Die Verwendung von Schleifen in CSS Präprozessoren dient dazu, eine im Schleifenrumpf festgelegte Anweisung zu wiederholen bis eine bestimmte Bedingung erfüllt ist. 4.47% aller geprüften Präprozessordateien wurden unter Anwendung von Schleifen geschrieben,
		wodurch dieser Funktion eine sehr geringe Häufigkeit zugeschrieben wird. Die Verwendung von Schleifen ist somit die am wenigsten genutzte Funktionalität in CSS Präprozessoren.
		Angesichts dieser geringen Anwendungshäufigkeit wurde bislang kein Entwurf für eine äquivalente Funktion von der W3C vorgestellt oder angedacht.
		`,
	},
	bedingteanweisungen: {
		frequence: 11.57,
		content: `
		Die Bedienung von Bedingungen in CSS Präprozessoren dient dazu, eine bestimmte Anweisung zu ausführen, wenn eine bestimmte Bedingung erfüllt ist. 11.57% aller geprüften Präprozessordateien wurden unter Anwendung von Bedingungen geschrieben,
		wodurch dieser Funktion eine sehr geringe Häufigkeit zugeschrieben wird. Die qualitative Auswertung der gesammelten Präprozessordateien ergab, dass die Nutzung von bedingten Anweisungen in Stylesheets lediglich in den meisten Fällen
		von Nutzen ist, wenn auch andere Funktionen, welche in Präprozessoren vorhanden sind, unterstützt werden. Angesichts der Veränderbarkeit von Variablen während der Laufzeit, würde eine Einführung von bedingten Anweisungen
		in CSS jedoch interessante Anwendungsfälle bieten. Die aktuelle CSS Spezifikation beinhaltet zwar ein Modul namens <a href="https://www.w3.org/TR/css-conditional-3/" target="_blank">CSS Conditional Rules Module Level 3</a>, welches das bedingte
		Ausführen von Anweisungen in CSS ermöglicht, lässt jedoch nur Bedingungen technischer Natur (z.B. <code>@supports (display: flex)</code>) definieren und ist daher nicht vergleichbar mit den bedingten Anweisungen in CSS Präprozessoren.
		`,
	},
	eingebautefunktionen: {
		frequence: 31.27,
		content: `
		Eingebaute Funktionen werden in 31.27% aller gesammelten CSS Präprozessordateien verwendet, wodurch dieser Funktionsgruppe eine mäßige Häufigkeit zugeschrieben wird. 71,26% aller angewandten Funktionen belaufen sich dabei auf mathematische
		Funktionen oder Farbfunktionen. Durch die Weiterentwicklung des <a href="https://www.w3.org/TR/css-values-3/" target="_blank">CSS Values and Units Module</a> und der <a href="https://www.w3.org/TR/css-color-4/" target="_blank">CSS Color Module</a>
		lassen sich nahezu 100% aller Funktionen durch CSS ersetzen.
		`,
	},
	benutzerdefiniertefunktionen: {
		frequence: 'N.A.',
		content: `
		Die Häufigkeit von benutzerdefinierten Funktionen konnte anhand der in der Arbeit vorgestellten Methoden nicht zweifelsfrei ermittelt werden. In dem GitHub Respository der CSSWG wurde bei geringer Beteiligung eine
		<a href="https://github.com/w3c/css-houdini-drafts/issues/1007" target="_blank">Diskussion</a> zur Einführung von benutzerdefinierten Funktionen in CSS angestoßen. Offizielle CSSWG-Mitglieder haben sich an dieser Diskussion jedoch
		nicht beteiligt, weshalb keine Meinung der CSSWG zu diesem Thema festzuhalten ist oder prognostiziert werden kann ob eine ähnliche Funktion in die CSS Spezifikation in absehbarer Zeit eingeführt wird. Anhand der geringen Beteiligung innerhalb
		der Community an dieser Diskussion lässt sich jedoch darauf schließen, dass es sich um eine Forderung handelt, welche nicht besonders stark von der Community gestützt wird.
		`,
	},
	alternativesyntax: {
		frequence: 'N.A.',
		content: `
		Die Möglichkeit eine Alternative zu der klassichen CSS Syntax zu verwenden wird von den Präprozessoren Sass und Stylus unterstützt. Die Häufigkeit mit der die alternative Syntax wird unterscheidet sich zwischen diesen beiden Präprozessoren jedoch
		stark. 97,82% aller öffentlich gehostet Dateien, welche durch den Sass Präprozessor kompiliert werden können, werden ohne die alternative Syntax geschrieben. Entwickler*innen, welche den Stylus Präprozessor nutzen greifen jedoch in 70,5% der
		ausgewerteten Stylus Dateien auf die alternative Syntax zurück, was eine manuelle Auszählung ergab. Dieser Unterschied kann möglicherweise dadurch begründet werden, dass die Dokumentation des Stylus Präprozessors Beispiele mit der alternativen
		Syntax, die Dokumentation des Sass Präprozessors hingegen nur Beispiele mit der klassischen Syntax darstellt. In dem GitHub Respository der CSSWG wurde eine <a href="https://github.com/w3c/csswg-drafts/issues/5413" target="_blank">Diskussion</a> zur Erweiterung der bestehenden Syntax angestoßen, mit dem Ziel die Verwendung
		von Semikolons in CSS-Code optional zu machen. Diese Diskussion wurde jedoch nach Gegenargumenten der CSSWG, welche im Kern die Lesbarkeit des Codes betrafen, abgelehnt.
		`,
	},
};
