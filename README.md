# Mealyjevi avtomati

Projekt vsebuje implementacijo Mealyjevih avtomatov, enega najpogostejših tipov končnih avtomatov. Mealyjev avtomat je računski model, pri katerem so izhodi določeni glede na trenutno stanje in trenutni vhod. Avtomat začne v enem izmed možnih stanj, nato pa glede na trenutno stanje in trenutni simbol preide v neko novo stanje in vrne ustrezni izhod. Proces ponavlja, dokler ne zmanjka črk v nizu.

Projekt razširja koncept končnih avtomatov z uporabo Mealyjevih avtomatov za prevajanje Morsejeve kode. Avtomat sprejme niz v obliki Morsejeve abecede in ga prevede v besedilo.

## Matematična definicija

Mealyjev avtomat je definiran kot nabor $(Q, q_0, \Sigma, \Lambda, \delta)$ , kjer so:

- množica stanj $Q$,
- začetno stanje $q_0 \in Q$,
- vhodna abeceda $\Sigma$,
- izhodna abeceda $\Lambda$ in
- prehodna funkcija $\delta : Q \times \Sigma \to Q \times \Lambda$, ki slika pare stanj in vhodov v ustrezne pare stanj in izhodov

## Navodila za uporabo

Za uporabo je na voljo je tekstovni vmesnik. Prevedemo ga z ukazom `dune build`, ki v korenskem imeniku ustvari datoteko `tekstovniVmesnik.exe`.

### Zahteve

Prepričajte se, da imate na vašem sistemu naložen OCaml in Dune.

### Gradnja projekta

Za gradnjo projekta uporabite naslednje ukaze:

```bash
# Klonirajte repozitorij
git clone https://github.com/Leelo37/projekt-programiranje-1

# Zgradite projekt z uporabo Dune
dune build
```

To bo ustvarilo izvedljivo datoteko tekstovniVmesnik.exe za tekstovni vmesnik.

### Tekstovni vmesnik

Za uporabo tekstovnega vmesnika za dekodiranje Morsejeve kode zaženite naslednji ukaz:

```bash
dune exec ./tekstovniVmesnik.exe
```

Program vas bo pozval, da izberete eno izmed dveh možnosti:

```plaintext
1) izpiši avtomat
2) prevedi kodo
```

Če si želite pogledati strukturo avtomata, izberite prvo možnost. Če pa želite prevesti Morsejevo kodo, izberite drugo možnost. Program vas bo pozval, da vnesete niz Morsejeve kode. Na primer:

```plaintext
Vnesi niz > - . ... - --..-- / .---- ..--- ...--
TEST, 123
```

Vnos naj bo niz pik (.), črtic (-) in presledkov ( ), ki ločijo črke. Za presledek med besedami uporabite presledek-poševnica-presledek ( / ). Avtomat podpira črke angleške in slovenske abecede, števila 0 - 9 ter znake za piko, vejico in vprašaj.

## Implementacija

Implementacija je strukturirana v več OCaml modulov, vsak odgovoren za različne dele logike Mealyjevega avtomata in uporabniškega vmesnika.

### Struktura datotek

Projekt je sestavljen iz naslednjih datotek:

- avtomat.ml: Definira strukturo Mealyjevega avtomata in specifično avtomat za prevajanje Morsejeve abecede.
- stanje.ml: Preprost tip stanja.
- trak.ml: Predstavlja vhodni trak za avtomat.
- zagnaniAvtomat.ml: Delovanje zagnanega avtomata korak za korakom, ko obdeluje vhod iz traka.
- tekstovniVmesnik.ml: Vmesnik za dekodiranje Morsejeve kode iz terminala.
