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

let prevajalnik_morsejeve_kode =
  let koren = Stanje.iz_niza "Koren" 
  and e = Stanje.iz_niza "E"
  and t = Stanje.iz_niza "T"
  and i = Stanje.iz_niza "I"
  and a = Stanje.iz_niza "A"
  and n = Stanje.iz_niza "N"
  and m = Stanje.iz_niza "M"
  and s = Stanje.iz_niza "S"
  and u = Stanje.iz_niza "U"
  and r = Stanje.iz_niza "R"
  and w = Stanje.iz_niza "W"
  and d = Stanje.iz_niza "D"
  and k = Stanje.iz_niza "K"
  and g = Stanje.iz_niza "G"
  and o = Stanje.iz_niza "O"
  and h = Stanje.iz_niza "H"
  and v = Stanje.iz_niza "V"
  and f = Stanje.iz_niza "F"
  and l = Stanje.iz_niza "L"
  and p = Stanje.iz_niza "P"
  and j = Stanje.iz_niza "J"
  and b = Stanje.iz_niza "B"
  and x = Stanje.iz_niza "X"
  and c = Stanje.iz_niza "C"
  and y = Stanje.iz_niza "Y"
  and z = Stanje.iz_niza "Z"
  and q = Stanje.iz_niza "Q"
  and a_s_pikicami = Stanje.iz_niza "Ä"
  and u_s_pikicami = Stanje.iz_niza "Ü"
  and sh = Stanje.iz_niza "Š"
  and o_s_pikicami = Stanje.iz_niza "Ö"
  and stevilo_1 = Stanje.iz_niza "1"
  and stevilo_2 = Stanje.iz_niza "2"
  and stevilo_3 = Stanje.iz_niza "3"
  and stevilo_4 = Stanje.iz_niza "4"
  and stevilo_5 = Stanje.iz_niza "5"
  and stevilo_6 = Stanje.iz_niza "6"
  and stevilo_7 = Stanje.iz_niza "7"
  and stevilo_8 = Stanje.iz_niza "8"
  and stevilo_9 = Stanje.iz_niza "9"
  and stevilo_0 = Stanje.iz_niza "0" 
  and pika_prehodno = Stanje.iz_niza "pika_prehodno"
  and vprasaj_prehodno = Stanje.iz_niza "vprasaj_prehodno"
  and vejica_prehodno = Stanje.iz_niza "vejica_prehodno"
  and pika = Stanje.iz_niza "."
  and vprasaj = Stanje.iz_niza "?"
  and vejica = Stanje.iz_niza ","
  and neveljaven_vnos = Stanje.iz_niza "neveljaven_vnos" in
  
  prazen_avtomat koren
  |> dodaj_stanje e |> dodaj_stanje t
  |> dodaj_stanje i |> dodaj_stanje a
  |> dodaj_stanje n |> dodaj_stanje m
  |> dodaj_stanje s |> dodaj_stanje u
  |> dodaj_stanje r |> dodaj_stanje w
  |> dodaj_stanje d |> dodaj_stanje k
  |> dodaj_stanje g |> dodaj_stanje o
  |> dodaj_stanje h |> dodaj_stanje v
  |> dodaj_stanje f |> dodaj_stanje l
  |> dodaj_stanje p |> dodaj_stanje j
  |> dodaj_stanje b |> dodaj_stanje x
  |> dodaj_stanje c |> dodaj_stanje y
  |> dodaj_stanje z |> dodaj_stanje q
  |> dodaj_stanje a_s_pikicami |> dodaj_stanje u_s_pikicami
  |> dodaj_stanje sh |> dodaj_stanje o_s_pikicami
  |> dodaj_stanje stevilo_1 |> dodaj_stanje stevilo_2
  |> dodaj_stanje stevilo_3 |> dodaj_stanje stevilo_4
  |> dodaj_stanje stevilo_5 |> dodaj_stanje stevilo_6
  |> dodaj_stanje stevilo_7 |> dodaj_stanje stevilo_8
  |> dodaj_stanje stevilo_9 |> dodaj_stanje stevilo_0
  |> dodaj_stanje pika |> dodaj_stanje vprasaj |> dodaj_stanje vejica
  |> dodaj_stanje pika_prehodno |> dodaj_stanje vprasaj_prehodno |> dodaj_stanje vejica_prehodno
  |> dodaj_stanje neveljaven_vnos

  |> dodaj_prehod koren '.' e "" 
  |> dodaj_prehod koren '-' t ""
  |> dodaj_prehod koren ' ' koren ""
  |> dodaj_prehod koren '/' koren " "

  |> dodaj_prehod e '.' i "" 
  |> dodaj_prehod e '-' a ""
  |> dodaj_prehod e ' ' koren "E"

  |> dodaj_prehod t '.' n "" 
  |> dodaj_prehod t '-' m ""
  |> dodaj_prehod t ' ' koren "T"

  |> dodaj_prehod i '.' s "" 
  |> dodaj_prehod i '-' u ""
  |> dodaj_prehod i ' ' koren "I"

  |> dodaj_prehod a '.' r "" 
  |> dodaj_prehod a '-' w ""
  |> dodaj_prehod a ' ' koren "A"

  |> dodaj_prehod n '.' d "" 
  |> dodaj_prehod n '-' k ""
  |> dodaj_prehod n ' ' koren "N"

  |> dodaj_prehod m '.' g "" 
  |> dodaj_prehod m '-' o ""
  |> dodaj_prehod m ' ' koren "M"

  |> dodaj_prehod s '.' h "" 
  |> dodaj_prehod s '-' v ""
  |> dodaj_prehod s ' ' koren "S"

  |> dodaj_prehod u '.' f "" 
  |> dodaj_prehod u '-' u_s_pikicami ""
  |> dodaj_prehod u ' ' koren "U"

  |> dodaj_prehod r '.' l "" 
  |> dodaj_prehod r '-' a_s_pikicami "" 
  |> dodaj_prehod r ' ' koren "R"

  |> dodaj_prehod w '.' p "" 
  |> dodaj_prehod w '-' j ""
  |> dodaj_prehod w ' ' koren "W"

  |> dodaj_prehod d '.' b "" 
  |> dodaj_prehod d '-' x ""
  |> dodaj_prehod d ' ' koren "D"

  |> dodaj_prehod k '.' c "" 
  |> dodaj_prehod k '-' y ""
  |> dodaj_prehod k ' ' koren "K"

  |> dodaj_prehod g '.' z "" 
  |> dodaj_prehod g '-' q ""
  |> dodaj_prehod g ' ' koren "G"

  |> dodaj_prehod o '.' o_s_pikicami "" 
  |> dodaj_prehod o '-' sh ""
  |> dodaj_prehod o ' ' koren "O"

  |> dodaj_prehod h '.' stevilo_5 "" 
  |> dodaj_prehod h '-' stevilo_4 "" 
  |> dodaj_prehod h ' ' koren "H"

  |> dodaj_prehod v '.' neveljaven_vnos "" 
  |> dodaj_prehod v '-' stevilo_3 "" 
  |> dodaj_prehod v ' ' koren "V"

  |> dodaj_prehod f '.' neveljaven_vnos "" 
  |> dodaj_prehod f '-' neveljaven_vnos "" 
  |> dodaj_prehod f ' ' koren "F"

  |> dodaj_prehod l '.' neveljaven_vnos "" 
  |> dodaj_prehod l '-' neveljaven_vnos "" 
  |> dodaj_prehod l ' ' koren "L"

  |> dodaj_prehod p '.' neveljaven_vnos "" 
  |> dodaj_prehod p '-' neveljaven_vnos ""
  |> dodaj_prehod p ' ' koren "P"

  |> dodaj_prehod j '.' neveljaven_vnos "" 
  |> dodaj_prehod j '-' stevilo_1 ""
  |> dodaj_prehod j ' ' koren "J"

  |> dodaj_prehod b '.' stevilo_6 "" 
  |> dodaj_prehod b '-' neveljaven_vnos ""
  |> dodaj_prehod b ' ' koren "B"

  |> dodaj_prehod x '.' neveljaven_vnos "" 
  |> dodaj_prehod x '-' neveljaven_vnos "" 
  |> dodaj_prehod x ' ' koren "X"

  |> dodaj_prehod c '.' neveljaven_vnos "" 
  |> dodaj_prehod c '-' neveljaven_vnos "" 
  |> dodaj_prehod c ' ' koren "C"

  |> dodaj_prehod y '.' neveljaven_vnos "" 
  |> dodaj_prehod y '-' neveljaven_vnos "" 
  |> dodaj_prehod y ' ' koren "Y"

  |> dodaj_prehod z '.' stevilo_7 "" 
  |> dodaj_prehod z '-' vejica_prehodno "" 
  |> dodaj_prehod z ' ' koren "Z"

  |> dodaj_prehod q '.' neveljaven_vnos "" 
  |> dodaj_prehod q '-' neveljaven_vnos "" 
  |> dodaj_prehod q ' ' koren "Q"

  |> dodaj_prehod a_s_pikicami '.' pika_prehodno "" 
  |> dodaj_prehod a_s_pikicami '-' neveljaven_vnos "" 
  |> dodaj_prehod a_s_pikicami ' ' koren "Ä"

  |> dodaj_prehod u_s_pikicami '.' vprasaj_prehodno "" 
  |> dodaj_prehod u_s_pikicami '-' stevilo_2 "" 
  |> dodaj_prehod u_s_pikicami ' ' koren "Ü"

  |> dodaj_prehod sh '.' stevilo_9 "" 
  |> dodaj_prehod sh '-' stevilo_0 "" 
  |> dodaj_prehod sh ' ' koren "Š"

  |> dodaj_prehod o_s_pikicami '.' stevilo_8 "" 
  |> dodaj_prehod o_s_pikicami '-' neveljaven_vnos "" 
  |> dodaj_prehod o_s_pikicami ' ' koren "Ö"

  |> dodaj_prehod stevilo_1 '.' neveljaven_vnos "" 
  |> dodaj_prehod stevilo_1 '-' neveljaven_vnos "" 
  |> dodaj_prehod stevilo_1 ' ' koren "1"

  |> dodaj_prehod stevilo_2 '.' neveljaven_vnos "" 
  |> dodaj_prehod stevilo_2 '-' neveljaven_vnos "" 
  |> dodaj_prehod stevilo_2 ' ' koren "2"

  |> dodaj_prehod stevilo_3 '.' neveljaven_vnos "" 
  |> dodaj_prehod stevilo_3 '-' neveljaven_vnos "" 
  |> dodaj_prehod stevilo_3 ' ' koren "3"

  |> dodaj_prehod stevilo_4 '.' neveljaven_vnos "" 
  |> dodaj_prehod stevilo_4 '-' neveljaven_vnos "" 
  |> dodaj_prehod stevilo_4 ' ' koren "4"

  |> dodaj_prehod stevilo_5 '.' neveljaven_vnos "" 
  |> dodaj_prehod stevilo_5 '-' neveljaven_vnos "" 
  |> dodaj_prehod stevilo_5 ' ' koren "5"

  |> dodaj_prehod stevilo_6 '.' neveljaven_vnos "" 
  |> dodaj_prehod stevilo_6 '-' neveljaven_vnos "" 
  |> dodaj_prehod stevilo_6 ' ' koren "6"

  |> dodaj_prehod stevilo_7 '.' neveljaven_vnos "" 
  |> dodaj_prehod stevilo_7 '-' neveljaven_vnos "" 
  |> dodaj_prehod stevilo_7 ' ' koren "7"

  |> dodaj_prehod stevilo_8 '.' neveljaven_vnos "" 
  |> dodaj_prehod stevilo_8 '-' neveljaven_vnos "" 
  |> dodaj_prehod stevilo_8 ' ' koren "8"

  |> dodaj_prehod stevilo_9 '.' neveljaven_vnos "" 
  |> dodaj_prehod stevilo_9 '-' neveljaven_vnos "" 
  |> dodaj_prehod stevilo_9 ' ' koren "9"

  |> dodaj_prehod stevilo_0 '.' neveljaven_vnos "" 
  |> dodaj_prehod stevilo_0 '-' neveljaven_vnos "" 
  |> dodaj_prehod stevilo_0 ' ' koren "0"

  |> dodaj_prehod pika_prehodno '.' neveljaven_vnos "" 
  |> dodaj_prehod pika_prehodno '-' pika "" 

  |> dodaj_prehod vprasaj_prehodno '.' vprasaj "" 
  |> dodaj_prehod vprasaj_prehodno '-' neveljaven_vnos "" 

  |> dodaj_prehod vejica_prehodno '.' neveljaven_vnos "" 
  |> dodaj_prehod vejica_prehodno '-' vejica "" 

  |> dodaj_prehod pika '.' neveljaven_vnos "" 
  |> dodaj_prehod pika '-' neveljaven_vnos "" 
  |> dodaj_prehod pika ' ' koren "."

  |> dodaj_prehod vprasaj '.' neveljaven_vnos "" 
  |> dodaj_prehod vprasaj '-' neveljaven_vnos "" 
  |> dodaj_prehod vprasaj ' ' koren "?"

  |> dodaj_prehod vejica '.' neveljaven_vnos "" 
  |> dodaj_prehod vejica '-' neveljaven_vnos "" 
  |> dodaj_prehod vejica ' ' koren ","

  |> dodaj_prehod neveljaven_vnos '.' neveljaven_vnos "" 
  |> dodaj_prehod neveljaven_vnos '-' neveljaven_vnos "" 

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