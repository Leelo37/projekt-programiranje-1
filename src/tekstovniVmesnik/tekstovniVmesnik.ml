open Definicije
open Avtomat

type stanje_vmesnika =
  | SeznamMoznosti
  | IzpisAvtomata
  | BranjeNiza
  | RezultatPrebranegaNiza
  | OpozoriloONapacnemNizu

type model = {
  avtomat : t;
  stanje_avtomata : Stanje.t;
  stanje_vmesnika : stanje_vmesnika;
  input_string : string option;
}

type msg =
  | PreberiNiz of string
  | ZamenjajVmesnik of stanje_vmesnika

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

let update model = function
  | PreberiNiz str -> (
      let (izhod, stanje_opt) = preberi_niz model.avtomat model.stanje_avtomata str in
      match stanje_opt with
      | None -> { model with stanje_vmesnika = OpozoriloONapacnemNizu; input_string = Some str }
      | Some stanje_avtomata ->
          {
            model with
            stanje_avtomata;
            stanje_vmesnika = RezultatPrebranegaNiza;
            input_string = Some izhod;
          })
  | ZamenjajVmesnik stanje_vmesnika -> { model with stanje_vmesnika }

let rec izpisi_moznosti () =
  print_endline "1) izpiši avtomat";
  print_endline "2) prevedi kodo";
  print_string "> ";
  match read_line () with
  | "1" -> ZamenjajVmesnik IzpisAvtomata
  | "2" -> ZamenjajVmesnik BranjeNiza
  | _ ->
      print_endline "** VNESI 1 ALI 2 **";
      izpisi_moznosti ()

let izpisi_avtomat avtomat =
  let izpisi_stanje stanje =
    let prikaz = Stanje.v_niz stanje in
    let prikaz =
      if stanje = zacetno_stanje avtomat then "-> " ^ prikaz else prikaz
    in
    print_endline prikaz
  in
  List.iter izpisi_stanje (seznam_stanj avtomat)

let beri_niz () =
  print_string "Vnesi niz > ";
  let str = read_line () ^ " " in (* Tukaj sem dodal presledek, da se na koncu vsakega vnosa avtomat premakne v začetno stanje. Tako se vedno izpiše zadnja črka, hkrati pa ni več potrebe po ročni ponastavitvi avtomata.*)
  PreberiNiz str

let izpisi_rezultat model =
  match model.input_string with
  | Some izhod ->
      print_endline izhod;
  | None ->
      print_endline "Nobene vhodne vrstice za prikaz rezultata"

let view model =
  match model.stanje_vmesnika with
  | SeznamMoznosti -> izpisi_moznosti ()
  | IzpisAvtomata ->
      izpisi_avtomat model.avtomat;
      ZamenjajVmesnik SeznamMoznosti
  | BranjeNiza -> beri_niz ()
  | RezultatPrebranegaNiza ->
      izpisi_rezultat model;
      ZamenjajVmesnik SeznamMoznosti
  | OpozoriloONapacnemNizu ->
      print_endline "Niz ni veljaven";
      ZamenjajVmesnik SeznamMoznosti

let init avtomat =
  {
    avtomat;
    stanje_avtomata = zacetno_stanje avtomat;
    stanje_vmesnika = SeznamMoznosti;
    input_string = None;
  }

let rec loop model =
  let msg = view model in
  let model' = update model msg in
  loop model'

let _ = loop (init Model.prevajalnik_morsejeve_kode)