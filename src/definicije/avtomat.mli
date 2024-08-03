type stanje = Stanje.t

type t

val prazen_avtomat : stanje -> t
val dodaj_stanje : stanje -> t -> t
val dodaj_prehod : stanje -> char -> stanje -> string -> t -> t
val prehodna_funkcija : t -> stanje -> char -> (stanje * string) option
val zacetno_stanje : t -> stanje
val seznam_stanj : t -> stanje list
val seznam_prehodov : t -> (stanje * char * stanje * string) list
val preberi_niz : t -> stanje -> string -> string * stanje option