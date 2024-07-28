type t

val pozeni : Avtomat.t -> Trak.t -> t
val avtomat : t -> Avtomat.t
val trak : t -> Trak.t
val stanje : t -> Stanje.t
val korak_naprej : t -> t option
