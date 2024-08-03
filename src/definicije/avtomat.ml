type stanje = Stanje.t

type t = {
  stanja : stanje list;
  zacetno_stanje : stanje;
  prehodi : (stanje * char * stanje * string) list;
}

let prazen_avtomat zacetno_stanje =
  {
    stanja = [zacetno_stanje];
    zacetno_stanje;
    prehodi = [];
  }

let dodaj_stanje stanje avtomat =
  { avtomat with stanja = stanje :: avtomat.stanja }

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

  let preberi_niz avtomat q niz =
    let rec aux acc stanje niz =
      if String.length niz = 0 then (acc, Some stanje)
      else
        match prehodna_funkcija avtomat stanje (String.get niz 0) with
        | None -> (acc, None)
        | Some (new_state, izhod) ->
          aux (acc ^ izhod) new_state (String.sub niz 1 (String.length niz - 1))
    in
    aux "" q niz