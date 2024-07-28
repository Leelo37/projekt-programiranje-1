type t = { avtomat : Avtomat.t; trak : Trak.t; stanje : Stanje.t }

let pozeni avtomat trak =
  { avtomat; trak; stanje = Avtomat.zacetno_stanje avtomat }

let avtomat { avtomat; _ } = avtomat
let trak { trak; _ } = trak
let stanje { stanje; _ } = stanje

let korak_naprej { avtomat; trak; stanje } =
  if Trak.je_na_koncu trak then None
  else
    let (stanje', _) =
      match Avtomat.prehodna_funkcija avtomat stanje (Trak.trenutni_znak trak) with
      | None -> (stanje, "")  (* No transition found, stay in current state *)
      | Some (stanje', _) -> (stanje', "")  (* Transition found, move to next state *)
    in
    Some { avtomat; trak = Trak.premakni_naprej trak; stanje = stanje' }
