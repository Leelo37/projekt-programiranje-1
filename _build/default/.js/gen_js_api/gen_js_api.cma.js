(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_js_to_string=runtime.caml_js_to_string,
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
     cst=caml_string_of_jsbytes(""),
     shared=
      [0,
       caml_string_of_jsbytes("to_js"),
       caml_string_of_jsbytes("*dummy method*")],
     cst_Ojs_exn_Error=caml_string_of_jsbytes("Ojs_exn.Error"),
     cst_jsError=caml_string_of_jsbytes("jsError"),
     CamlinternalOO=global_data.CamlinternalOO,
     Stdlib_array=global_data.Stdlib__array,
     Stdlib_callback=global_data.Stdlib__callback,
     Stdlib_printexc=global_data.Stdlib__printexc,
     _a_=[0,caml_string_of_jsbytes("to_js")];
    function type_of(x){return caml_js_to_string(typeof x)}
    var null$0=null,undefined$0=undefined,global=joo_global_object;
    function array_make(n){return new (global.Array)(n)}
    function array_get(t,i){return t[i]}
    function array_set(t,i,x){return t[i] = x}
    function array_of_js_from(f,objs,start)
     {var n=objs.length;
      function _p_(i){return caml_call1(f,objs[start + i | 0])}
      return caml_call2(Stdlib_array[2],n - start | 0,_p_)}
    function array_of_js(f,objs){return array_of_js_from(f,objs,0)}
    function array_to_js(f,arr)
     {var n=arr.length - 1,a=array_make(n),_n_=n - 1 | 0,_m_=0;
      if(! (_n_ < 0))
       {var i=_m_;
        for(;;)
         {a[i] = caml_call1(f,runtime.caml_check_bound(arr,i)[1 + i]);
          var _o_=i + 1 | 0;
          if(_n_ !== i){var i=_o_;continue}
          break}}
      return a}
    function list_of_js_from(f,objs,start)
     {var _l_=array_of_js_from(f,objs,start);
      return caml_call1(Stdlib_array[11],_l_)}
    function list_of_js(f,objs){return list_of_js_from(f,objs,0)}
    function list_to_js(f,l)
     {return array_to_js(f,caml_call1(Stdlib_array[12],l))}
    function option_of_js(f,x)
     {if(x != null$0 && x !== undefined$0)return [0,caml_call1(f,x)];return 0}
    function option_to_js(f,param)
     {if(param){var x=param[1];return caml_call1(f,x)}return null$0}
    function _b_(_d_)
     {var
       _e_=caml_call2(CamlinternalOO[3],_d_,cst),
       _f_=caml_call2(CamlinternalOO[8],_d_,shared)[1];
      function _g_(self_1){return self_1[1 + _e_]}
      caml_call3(CamlinternalOO[10],_d_,_f_,_g_);
      return function(_j_,_i_,_h_)
       {var _k_=caml_call2(CamlinternalOO[24],_i_,_d_);
        _k_[1 + _e_] = _h_;
        return _k_}}
    var obj=caml_call2(CamlinternalOO[19],_a_,_b_);
    function has_property(o,x){return 1 - (o[x] === undefined$0?1:0)}
    function empty_obj(param){return new (global.Object)()}
    function apply_arr(o,arr){return o.apply(null$0,arr)}
    function call_arr(o,s,arr){return o[s].apply(o,arr)}
    function is_null(x){return x == null$0?1:0}
    function obj_type(x)
     {return caml_js_to_string(Object.prototype.toString.call(x))}
    var
     Ojs=
      [0,
       array_of_js,
       array_to_js,
       list_of_js,
       list_to_js,
       array_of_js_from,
       list_of_js_from,
       option_of_js,
       option_to_js,
       empty_obj,
       has_property,
       call_arr,
       apply_arr,
       array_make,
       array_get,
       array_set,
       global,
       null$0,
       type_of,
       obj,
       is_null,
       obj_type];
    caml_register_global(21,Ojs,"Ojs");
    function name(x){return caml_js_to_string(x.name)}
    function message(x){return caml_js_to_string(x.message)}
    function stack(x){return option_of_js(caml_js_to_string,x.stack)}
    function to_string(x){return caml_js_to_string(x.toString())}
    var Error=[248,cst_Ojs_exn_Error,runtime.caml_fresh_oo_id(0)];
    caml_call2(Stdlib_callback[2],cst_jsError,[0,Error,{}]);
    function _c_(param)
     {if(param[1] === Error){var x=param[2];return [0,to_string(x)]}return 0}
    caml_call1(Stdlib_printexc[9],_c_);
    var Ojs_exn=[0,name,message,stack,to_string,Error];
    caml_register_global(24,Ojs_exn,"Ojs_exn");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJnZW5fanNfYXBpLmNtYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJuYW1lcyI6WyJudWxsIiwidW5kZWZpbmVkIiwiam9vX2dsb2JhbF9vYmplY3QiLCJPYmplY3QiXSwic291cmNlcyI6WyIiXSwibWFwcGluZ3MiOiI7O0k7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2VBQUFBLEssWUFBQUMsVSxPQUFBQztJIiwic291cmNlc0NvbnRlbnQiOltudWxsXX0=
