(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_ml_string_length=runtime.caml_ml_string_length,
     caml_register_global=runtime.caml_register_global,
     caml_string_of_jsbytes=runtime.caml_string_of_jsbytes;
    function caml_call1(f,a0)
     {return f.length == 1?f(a0):runtime.caml_call_gen(f,[a0])}
    function caml_call2(f,a0,a1)
     {return f.length == 2?f(a0,a1):runtime.caml_call_gen(f,[a0,a1])}
    function caml_call3(f,a0,a1,a2)
     {return f.length == 3?f(a0,a1,a2):runtime.caml_call_gen(f,[a0,a1,a2])}
    var
     global_data=runtime.caml_get_global_data(),
     cst_q0=caml_string_of_jsbytes("q0"),
     cst_q1=caml_string_of_jsbytes("q1"),
     cst_q2=caml_string_of_jsbytes("q2"),
     cst=caml_string_of_jsbytes(""),
     Stdlib_string=global_data.Stdlib__string,
     Stdlib_seq=global_data.Stdlib__seq,
     Stdlib_list=global_data.Stdlib__list,
     Definicije=[0];
    caml_register_global(4,Definicije,"Definicije");
    function iz_niza(oznaka){return [0,oznaka]}
    function v_niz(param){var oznaka=param[1];return oznaka}
    var Definicije_Stanje=[0,iz_niza,v_niz];
    caml_register_global(5,Definicije_Stanje,"Definicije__Stanje");
    function prazen_avtomat(zacetno_stanje)
     {return [0,[0,zacetno_stanje,0],zacetno_stanje,0,0]}
    function dodaj_nesprejemno_stanje(stanje,avtomat)
     {return [0,[0,stanje,avtomat[1]],avtomat[2],avtomat[3],avtomat[4]]}
    function dodaj_sprejemno_stanje(stanje,avtomat)
     {return [0,
              [0,stanje,avtomat[1]],
              avtomat[2],
              [0,stanje,avtomat[3]],
              avtomat[4]]}
    function dodaj_prehod(stanje1,znak,stanje2,avtomat)
     {return [0,
              avtomat[1],
              avtomat[2],
              avtomat[3],
              [0,[0,stanje1,znak,stanje2],avtomat[4]]]}
    function prehodna_funkcija(avtomat,stanje,znak)
     {var _b_=avtomat[4];
      function _c_(param)
       {var
         znak$0=param[2],
         stanje1=param[1],
         _d_=runtime.caml_equal(stanje1,stanje),
         _e_=_d_?znak === znak$0?1:0:_d_;
        return _e_}
      var match=caml_call2(Stdlib_list[37],_c_,_b_);
      if(match){var match$0=match[1],stanje2=match$0[3];return [0,stanje2]}
      return 0}
    function zacetno_stanje(avtomat){return avtomat[2]}
    function seznam_stanj(avtomat){return avtomat[1]}
    function seznam_prehodov(avtomat){return avtomat[4]}
    function je_sprejemno_stanje(avtomat,stanje)
     {return caml_call2(Stdlib_list[34],stanje,avtomat[3])}
    var
     q0=[0,cst_q0],
     q1=[0,cst_q1],
     q2=[0,cst_q2],
     enke_1mod3=
      dodaj_prehod
       (q2,
        49,
        q0,
        dodaj_prehod
         (q1,
          49,
          q2,
          dodaj_prehod
           (q0,
            49,
            q1,
            dodaj_prehod
             (q2,
              48,
              q2,
              dodaj_prehod
               (q1,
                48,
                q1,
                dodaj_prehod
                 (q0,
                  48,
                  q0,
                  dodaj_nesprejemno_stanje
                   (q2,dodaj_sprejemno_stanje(q1,prazen_avtomat(q0)))))))));
    function preberi_niz(avtomat,q,niz)
     {function aux(acc,znak)
       {if(acc){var q=acc[1];return prehodna_funkcija(avtomat,q,znak)}
        return 0}
      var _a_=caml_call1(Stdlib_string[36],niz);
      return caml_call3(Stdlib_seq[9],aux,[0,q],_a_)}
    var
     Definicije_Avtomat=
      [0,
       prazen_avtomat,
       dodaj_nesprejemno_stanje,
       dodaj_sprejemno_stanje,
       dodaj_prehod,
       prehodna_funkcija,
       zacetno_stanje,
       seznam_stanj,
       seznam_prehodov,
       je_sprejemno_stanje,
       enke_1mod3,
       preberi_niz];
    caml_register_global(9,Definicije_Avtomat,"Definicije__Avtomat");
    function trenutni_znak(trak)
     {return runtime.caml_string_get(trak[1],trak[2])}
    function je_na_koncu(trak)
     {return caml_ml_string_length(trak[1]) === trak[2]?1:0}
    function premakni_naprej(trak){return [0,trak[1],trak[2] + 1 | 0]}
    function iz_niza$0(niz){return [0,niz,0]}
    var prazen=iz_niza$0(cst);
    function v_niz$0(trak){return trak[1]}
    function prebrani(trak)
     {return caml_call3(Stdlib_string[4],trak[1],0,trak[2])}
    function neprebrani(trak)
     {return caml_call3
              (Stdlib_string[4],
               trak[1],
               trak[2],
               caml_ml_string_length(trak[1]) - trak[2] | 0)}
    var
     Definicije_Trak=
      [0,
       prazen,
       trenutni_znak,
       je_na_koncu,
       premakni_naprej,
       iz_niza$0,
       v_niz$0,
       prebrani,
       neprebrani];
    caml_register_global(10,Definicije_Trak,"Definicije__Trak");
    function pozeni(avtomat,trak){return [0,avtomat,trak,avtomat[2]]}
    function avtomat(param){var avtomat=param[1];return avtomat}
    function trak(param){var trak=param[2];return trak}
    function stanje(param){var stanje=param[3];return stanje}
    function korak_naprej(param)
     {var stanje=param[3],trak=param[2],avtomat=param[1];
      if(je_na_koncu(trak))return 0;
      var stanje$0=prehodna_funkcija(avtomat,stanje,trenutni_znak(trak));
      if(stanje$0)
       {var stanje$1=stanje$0[1];
        return [0,[0,avtomat,premakni_naprej(trak),stanje$1]]}
      return 0}
    function je_v_sprejemnem_stanju(param)
     {var stanje=param[3],avtomat=param[1];
      return je_sprejemno_stanje(avtomat,stanje)}
    var
     Definicije_ZagnaniAvtomat=
      [0,pozeni,avtomat,trak,stanje,korak_naprej,je_v_sprejemnem_stanju];
    caml_register_global
     (11,Definicije_ZagnaniAvtomat,"Definicije__ZagnaniAvtomat");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiIuZGVmaW5pY2lqZS5vYmpzL2RlZmluaWNpamUuY21hLmpzIiwic291cmNlUm9vdCI6IiIsIm5hbWVzIjpbXSwic291cmNlcyI6W10sIm1hcHBpbmdzIjoiOztJIiwic291cmNlc0NvbnRlbnQiOltdfQ==
