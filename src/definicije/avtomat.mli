type stanje

type t

val prazen_avtomat : Stanje.t -> t
val dodaj_stanje : Stanje.t -> t -> t
val dodaj_prehod : Stanje.t -> char -> Stanje.t -> string -> t -> t
val prehodna_funkcija : t -> Stanje.t -> char -> (Stanje.t * string) option
val zacetno_stanje : t -> Stanje.t
val seznam_stanj : t -> Stanje.t list
val seznam_prehodov : t -> (Stanje.t * char * Stanje.t * string) list
val enke_1mod3 : t
val preberi_niz : t -> Stanje.t -> string -> string * Stanje.t option
