type stanje = Stanje.t

type t = {
  stanja : stanje list;
  zacetno_stanje : stanje;
  sprejemna_stanja : stanje list;
  prehodi : (stanje * char * stanje * string) list;  (* Updated to include output *)
}

let prazen_avtomat zacetno_stanje =
  {
    stanja = [ zacetno_stanje ];
    zacetno_stanje;
    sprejemna_stanja = [];
    prehodi = [];
  }

let dodaj_nesprejemno_stanje stanje avtomat =
  { avtomat with stanja = stanje :: avtomat.stanja }

let dodaj_sprejemno_stanje stanje avtomat =
  {
    avtomat with
    stanja = stanje :: avtomat.stanja;
    sprejemna_stanja = stanje :: avtomat.sprejemna_stanja;
  }

let dodaj_prehod stanje1 znak stanje2 izhod avtomat =
  { avtomat with prehodi = (stanje1, znak, stanje2, izhod) :: avtomat.prehodi }

let prehodna_funkcija avtomat stanje znak =
  match
    List.find_opt
      (fun (stanje1, znak', _stanje2, _) -> stanje1 = stanje && znak = znak')
      avtomat.prehodi
  with
  | None -> None
  | Some (_, _, stanje2, izhod) -> Some (stanje2, izhod)

let zacetno_stanje avtomat = avtomat.zacetno_stanje
let seznam_stanj avtomat = avtomat.stanja
let seznam_prehodov avtomat = avtomat.prehodi

let je_sprejemno_stanje avtomat stanje =
  List.mem stanje avtomat.sprejemna_stanja

let enke_1mod3 =
  let q0 = Stanje.iz_niza "q0"
  and q1 = Stanje.iz_niza "q1"
  and q2 = Stanje.iz_niza "q2" in
  prazen_avtomat q0
  |> dodaj_sprejemno_stanje q1
  |> dodaj_nesprejemno_stanje q2
  |> dodaj_prehod q0 '0' q0 "A"
  |> dodaj_prehod q1 '0' q1 "B"
  |> dodaj_prehod q2 '0' q2 "C"
  |> dodaj_prehod q0 '1' q1 "D"
  |> dodaj_prehod q1 '1' q2 "E"
  |> dodaj_prehod q2 '1' q0 "F"

let preberi_niz avtomat q niz =
  let rec aux acc stanje niz =
    if String.length niz = 0 then (acc, Some stanje)
    else
      match prehodna_funkcija avtomat stanje (String.get niz 0) with
      | None -> (acc, None)
      | Some (stanje', izhod) ->
        aux (acc ^ izhod) stanje' (String.sub niz 1 (String.length niz - 1))
  in
  aux "" q niz