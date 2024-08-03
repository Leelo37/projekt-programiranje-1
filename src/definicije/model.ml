type avtomat = Avtomat.t

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
  and ch = Stanje.iz_niza "Č"
  and zh = Stanje.iz_niza "Ž"
  and sh2 = Stanje.iz_niza "Š2"
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
  and pika = Stanje.iz_niza "."
  and vprasaj = Stanje.iz_niza "?"
  and vejica = Stanje.iz_niza ","
  and neveljaven_vnos = Stanje.iz_niza "neveljaven_vnos" in
  
  Avtomat.prazen_avtomat koren
  |> Avtomat.dodaj_stanje e |> Avtomat.dodaj_stanje t
  |> Avtomat.dodaj_stanje i |> Avtomat.dodaj_stanje a
  |> Avtomat.dodaj_stanje n |> Avtomat.dodaj_stanje m
  |> Avtomat.dodaj_stanje s |> Avtomat.dodaj_stanje u
  |> Avtomat.dodaj_stanje r |> Avtomat.dodaj_stanje w
  |> Avtomat.dodaj_stanje d |> Avtomat.dodaj_stanje k
  |> Avtomat.dodaj_stanje g |> Avtomat.dodaj_stanje o
  |> Avtomat.dodaj_stanje h |> Avtomat.dodaj_stanje v
  |> Avtomat.dodaj_stanje f |> Avtomat.dodaj_stanje l
  |> Avtomat.dodaj_stanje p |> Avtomat.dodaj_stanje j
  |> Avtomat.dodaj_stanje b |> Avtomat.dodaj_stanje x
  |> Avtomat.dodaj_stanje c |> Avtomat.dodaj_stanje y
  |> Avtomat.dodaj_stanje z |> Avtomat.dodaj_stanje q
  |> Avtomat.dodaj_stanje a_s_pikicami |> Avtomat.dodaj_stanje u_s_pikicami
  |> Avtomat.dodaj_stanje sh |> Avtomat.dodaj_stanje o_s_pikicami
  |> Avtomat.dodaj_stanje ch |> Avtomat.dodaj_stanje zh |> Avtomat.dodaj_stanje sh2
  |> Avtomat.dodaj_stanje stevilo_1 |> Avtomat.dodaj_stanje stevilo_2
  |> Avtomat.dodaj_stanje stevilo_3 |> Avtomat.dodaj_stanje stevilo_4
  |> Avtomat.dodaj_stanje stevilo_5 |> Avtomat.dodaj_stanje stevilo_6
  |> Avtomat.dodaj_stanje stevilo_7 |> Avtomat.dodaj_stanje stevilo_8
  |> Avtomat.dodaj_stanje stevilo_9 |> Avtomat.dodaj_stanje stevilo_0
  |> Avtomat.dodaj_stanje pika |> Avtomat.dodaj_stanje vprasaj |> Avtomat.dodaj_stanje vejica
  |> Avtomat.dodaj_stanje pika_prehodno |> Avtomat.dodaj_stanje vprasaj_prehodno
  |> Avtomat.dodaj_stanje neveljaven_vnos

  |> Avtomat.dodaj_prehod koren '.' e "" 
  |> Avtomat.dodaj_prehod koren '-' t ""
  |> Avtomat.dodaj_prehod koren ' ' koren ""
  |> Avtomat.dodaj_prehod koren '/' koren " "

  |> Avtomat.dodaj_prehod e '.' i "" 
  |> Avtomat.dodaj_prehod e '-' a ""
  |> Avtomat.dodaj_prehod e ' ' koren "E"

  |> Avtomat.dodaj_prehod t '.' n "" 
  |> Avtomat.dodaj_prehod t '-' m ""
  |> Avtomat.dodaj_prehod t ' ' koren "T"

  |> Avtomat.dodaj_prehod i '.' s "" 
  |> Avtomat.dodaj_prehod i '-' u ""
  |> Avtomat.dodaj_prehod i ' ' koren "I"

  |> Avtomat.dodaj_prehod a '.' r "" 
  |> Avtomat.dodaj_prehod a '-' w ""
  |> Avtomat.dodaj_prehod a ' ' koren "A"

  |> Avtomat.dodaj_prehod n '.' d "" 
  |> Avtomat.dodaj_prehod n '-' k ""
  |> Avtomat.dodaj_prehod n ' ' koren "N"

  |> Avtomat.dodaj_prehod m '.' g "" 
  |> Avtomat.dodaj_prehod m '-' o ""
  |> Avtomat.dodaj_prehod m ' ' koren "M"

  |> Avtomat.dodaj_prehod s '.' h "" 
  |> Avtomat.dodaj_prehod s '-' v ""
  |> Avtomat.dodaj_prehod s ' ' koren "S"

  |> Avtomat.dodaj_prehod u '.' f "" 
  |> Avtomat.dodaj_prehod u '-' u_s_pikicami ""
  |> Avtomat.dodaj_prehod u ' ' koren "U"

  |> Avtomat.dodaj_prehod r '.' l "" 
  |> Avtomat.dodaj_prehod r '-' a_s_pikicami "" 
  |> Avtomat.dodaj_prehod r ' ' koren "R"

  |> Avtomat.dodaj_prehod w '.' p "" 
  |> Avtomat.dodaj_prehod w '-' j ""
  |> Avtomat.dodaj_prehod w ' ' koren "W"

  |> Avtomat.dodaj_prehod d '.' b "" 
  |> Avtomat.dodaj_prehod d '-' x ""
  |> Avtomat.dodaj_prehod d ' ' koren "D"

  |> Avtomat.dodaj_prehod k '.' c "" 
  |> Avtomat.dodaj_prehod k '-' y ""
  |> Avtomat.dodaj_prehod k ' ' koren "K"

  |> Avtomat.dodaj_prehod g '.' z "" 
  |> Avtomat.dodaj_prehod g '-' q ""
  |> Avtomat.dodaj_prehod g ' ' koren "G"

  |> Avtomat.dodaj_prehod o '.' o_s_pikicami "" 
  |> Avtomat.dodaj_prehod o '-' sh ""
  |> Avtomat.dodaj_prehod o ' ' koren "O"

  |> Avtomat.dodaj_prehod h '.' stevilo_5 "" 
  |> Avtomat.dodaj_prehod h '-' stevilo_4 "" 
  |> Avtomat.dodaj_prehod h ' ' koren "H"

  |> Avtomat.dodaj_prehod v '.' neveljaven_vnos "" 
  |> Avtomat.dodaj_prehod v '-' stevilo_3 "" 
  |> Avtomat.dodaj_prehod v ' ' koren "V"

  |> Avtomat.dodaj_prehod f '.' neveljaven_vnos "" 
  |> Avtomat.dodaj_prehod f '-' neveljaven_vnos "" 
  |> Avtomat.dodaj_prehod f ' ' koren "F"

  |> Avtomat.dodaj_prehod l '.' neveljaven_vnos "" 
  |> Avtomat.dodaj_prehod l '-' neveljaven_vnos "" 
  |> Avtomat.dodaj_prehod l ' ' koren "L"

  |> Avtomat.dodaj_prehod p '.' neveljaven_vnos "" 
  |> Avtomat.dodaj_prehod p '-' neveljaven_vnos ""
  |> Avtomat.dodaj_prehod p ' ' koren "P"

  |> Avtomat.dodaj_prehod j '.' neveljaven_vnos "" 
  |> Avtomat.dodaj_prehod j '-' stevilo_1 ""
  |> Avtomat.dodaj_prehod j ' ' koren "J"

  |> Avtomat.dodaj_prehod b '.' stevilo_6 "" 
  |> Avtomat.dodaj_prehod b '-' neveljaven_vnos ""
  |> Avtomat.dodaj_prehod b ' ' koren "B"

  |> Avtomat.dodaj_prehod x '.' neveljaven_vnos "" 
  |> Avtomat.dodaj_prehod x '-' neveljaven_vnos "" 
  |> Avtomat.dodaj_prehod x ' ' koren "X"

  |> Avtomat.dodaj_prehod c '.' neveljaven_vnos "" 
  |> Avtomat.dodaj_prehod c '-' neveljaven_vnos "" 
  |> Avtomat.dodaj_prehod c ' ' koren "C"

  |> Avtomat.dodaj_prehod y '.' ch "" 
  |> Avtomat.dodaj_prehod y '-' neveljaven_vnos "" 
  |> Avtomat.dodaj_prehod y ' ' koren "Y"

  |> Avtomat.dodaj_prehod z '.' stevilo_7 "" 
  |> Avtomat.dodaj_prehod z '-' zh "" 
  |> Avtomat.dodaj_prehod z ' ' koren "Z"

  |> Avtomat.dodaj_prehod q '.' neveljaven_vnos "" 
  |> Avtomat.dodaj_prehod q '-' neveljaven_vnos "" 
  |> Avtomat.dodaj_prehod q ' ' koren "Q"

  |> Avtomat.dodaj_prehod a_s_pikicami '.' pika_prehodno "" 
  |> Avtomat.dodaj_prehod a_s_pikicami '-' neveljaven_vnos "" 
  |> Avtomat.dodaj_prehod a_s_pikicami ' ' koren "Ä"

  |> Avtomat.dodaj_prehod u_s_pikicami '.' vprasaj_prehodno "" 
  |> Avtomat.dodaj_prehod u_s_pikicami '-' stevilo_2 "" 
  |> Avtomat.dodaj_prehod u_s_pikicami ' ' koren "Ü"

  |> Avtomat.dodaj_prehod sh '.' stevilo_9 "" 
  |> Avtomat.dodaj_prehod sh '-' stevilo_0 "" 
  |> Avtomat.dodaj_prehod sh ' ' koren "Š"

  |> Avtomat.dodaj_prehod o_s_pikicami '.' stevilo_8 "" 
  |> Avtomat.dodaj_prehod o_s_pikicami '-' sh2 "" 
  |> Avtomat.dodaj_prehod o_s_pikicami ' ' koren "Ö"

  |> Avtomat.dodaj_prehod ch '.' neveljaven_vnos "" 
  |> Avtomat.dodaj_prehod ch '-' neveljaven_vnos "" 
  |> Avtomat.dodaj_prehod ch ' ' koren "Č"

  |> Avtomat.dodaj_prehod zh '.' neveljaven_vnos "" 
  |> Avtomat.dodaj_prehod zh '-' vejica "" 
  |> Avtomat.dodaj_prehod zh ' ' koren "Ž"

  |> Avtomat.dodaj_prehod sh2 '.' neveljaven_vnos "" 
  |> Avtomat.dodaj_prehod sh2 '-' neveljaven_vnos "" 
  |> Avtomat.dodaj_prehod sh2 ' ' koren "Š"

  |> Avtomat.dodaj_prehod stevilo_1 '.' neveljaven_vnos "" 
  |> Avtomat.dodaj_prehod stevilo_1 '-' neveljaven_vnos "" 
  |> Avtomat.dodaj_prehod stevilo_1 ' ' koren "1"

  |> Avtomat.dodaj_prehod stevilo_2 '.' neveljaven_vnos "" 
  |> Avtomat.dodaj_prehod stevilo_2 '-' neveljaven_vnos "" 
  |> Avtomat.dodaj_prehod stevilo_2 ' ' koren "2"

  |> Avtomat.dodaj_prehod stevilo_3 '.' neveljaven_vnos "" 
  |> Avtomat.dodaj_prehod stevilo_3 '-' neveljaven_vnos "" 
  |> Avtomat.dodaj_prehod stevilo_3 ' ' koren "3"

  |> Avtomat.dodaj_prehod stevilo_4 '.' neveljaven_vnos "" 
  |> Avtomat.dodaj_prehod stevilo_4 '-' neveljaven_vnos "" 
  |> Avtomat.dodaj_prehod stevilo_4 ' ' koren "4"

  |> Avtomat.dodaj_prehod stevilo_5 '.' neveljaven_vnos "" 
  |> Avtomat.dodaj_prehod stevilo_5 '-' neveljaven_vnos "" 
  |> Avtomat.dodaj_prehod stevilo_5 ' ' koren "5"

  |> Avtomat.dodaj_prehod stevilo_6 '.' neveljaven_vnos "" 
  |> Avtomat.dodaj_prehod stevilo_6 '-' neveljaven_vnos "" 
  |> Avtomat.dodaj_prehod stevilo_6 ' ' koren "6"

  |> Avtomat.dodaj_prehod stevilo_7 '.' neveljaven_vnos "" 
  |> Avtomat.dodaj_prehod stevilo_7 '-' neveljaven_vnos "" 
  |> Avtomat.dodaj_prehod stevilo_7 ' ' koren "7"

  |> Avtomat.dodaj_prehod stevilo_8 '.' neveljaven_vnos "" 
  |> Avtomat.dodaj_prehod stevilo_8 '-' neveljaven_vnos "" 
  |> Avtomat.dodaj_prehod stevilo_8 ' ' koren "8"

  |> Avtomat.dodaj_prehod stevilo_9 '.' neveljaven_vnos "" 
  |> Avtomat.dodaj_prehod stevilo_9 '-' neveljaven_vnos "" 
  |> Avtomat.dodaj_prehod stevilo_9 ' ' koren "9"

  |> Avtomat.dodaj_prehod stevilo_0 '.' neveljaven_vnos "" 
  |> Avtomat.dodaj_prehod stevilo_0 '-' neveljaven_vnos "" 
  |> Avtomat.dodaj_prehod stevilo_0 ' ' koren "0"

  |> Avtomat.dodaj_prehod pika_prehodno '.' neveljaven_vnos "" 
  |> Avtomat.dodaj_prehod pika_prehodno '-' pika "" 

  |> Avtomat.dodaj_prehod vprasaj_prehodno '.' vprasaj "" 
  |> Avtomat.dodaj_prehod vprasaj_prehodno '-' neveljaven_vnos "" 

  |> Avtomat.dodaj_prehod pika '.' neveljaven_vnos "" 
  |> Avtomat.dodaj_prehod pika '-' neveljaven_vnos "" 
  |> Avtomat.dodaj_prehod pika ' ' koren "."

  |> Avtomat.dodaj_prehod vprasaj '.' neveljaven_vnos "" 
  |> Avtomat.dodaj_prehod vprasaj '-' neveljaven_vnos "" 
  |> Avtomat.dodaj_prehod vprasaj ' ' koren "?"

  |> Avtomat.dodaj_prehod vejica '.' neveljaven_vnos "" 
  |> Avtomat.dodaj_prehod vejica '-' neveljaven_vnos "" 
  |> Avtomat.dodaj_prehod vejica ' ' koren ","

  |> Avtomat.dodaj_prehod neveljaven_vnos '.' neveljaven_vnos "" 
  |> Avtomat.dodaj_prehod neveljaven_vnos '-' neveljaven_vnos "" 