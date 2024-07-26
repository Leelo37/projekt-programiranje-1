(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_check_bound=runtime.caml_check_bound,
     caml_equal=runtime.caml_equal,
     caml_fresh_oo_id=runtime.caml_fresh_oo_id,
     caml_js_from_string=runtime.caml_js_from_string,
     caml_js_to_string=runtime.caml_js_to_string,
     caml_js_wrap_callback_strict=runtime.caml_js_wrap_callback_strict,
     caml_obj_tag=runtime.caml_obj_tag,
     caml_ojs_new_arr=runtime.caml_ojs_new_arr,
     caml_register_global=runtime.caml_register_global,
     caml_string_compare=runtime.caml_string_compare,
     caml_string_equal=runtime.caml_string_equal,
     caml_string_lessthan=runtime.caml_string_lessthan,
     caml_string_notequal=runtime.caml_string_notequal,
     caml_string_of_jsbytes=runtime.caml_string_of_jsbytes,
     caml_update_dummy=runtime.caml_update_dummy,
     caml_wrap_exception=runtime.caml_wrap_exception;
    function caml_call1(f,a0)
     {return f.length == 1?f(a0):runtime.caml_call_gen(f,[a0])}
    function caml_call2(f,a0,a1)
     {return f.length == 2?f(a0,a1):runtime.caml_call_gen(f,[a0,a1])}
    function caml_call3(f,a0,a1,a2)
     {return f.length == 3?f(a0,a1,a2):runtime.caml_call_gen(f,[a0,a1,a2])}
    function caml_call4(f,a0,a1,a2,a3)
     {return f.length == 4
              ?f(a0,a1,a2,a3)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3])}
    var
     global_data=runtime.caml_get_global_data(),
     cst_custom=caml_string_of_jsbytes("_custom"),
     cst_memo=caml_string_of_jsbytes("_memo"),
     cst_map=caml_string_of_jsbytes("_map"),
     cst_span=caml_string_of_jsbytes("span"),
     cst_input=caml_string_of_jsbytes("input"),
     cst_div=caml_string_of_jsbytes("div"),
     cst=caml_string_of_jsbytes(""),
     cst_txt=caml_string_of_jsbytes("_txt"),
     cst_className$1=caml_string_of_jsbytes("className"),
     cst_className$2=caml_string_of_jsbytes("className"),
     cst_className$0=caml_string_of_jsbytes("className"),
     cst_disabled=caml_string_of_jsbytes("disabled"),
     cst_value=caml_string_of_jsbytes("value"),
     cst_type=caml_string_of_jsbytes("type"),
     cst_className=caml_string_of_jsbytes("className"),
     cst_relative_dropdown=caml_string_of_jsbytes("relative-dropdown"),
     cst_autofocus$0=caml_string_of_jsbytes("autofocus"),
     cst_Vdom_Cmd_Echo=caml_string_of_jsbytes("Vdom.Cmd.Echo"),
     cst_Vdom_Cmd_Batch=caml_string_of_jsbytes("Vdom.Cmd.Batch"),
     cst_Vdom_Cmd_Map=caml_string_of_jsbytes("Vdom.Cmd.Map"),
     cst_scroll_to_show=caml_string_of_jsbytes("scroll-to-show"),
     cst_autofocus=caml_string_of_jsbytes("autofocus"),
     cst_button=caml_string_of_jsbytes("button"),
     svg_ns=caml_string_of_jsbytes("http://www.w3.org/2000/svg"),
     cst_overflowY=caml_string_of_jsbytes("overflowY"),
     cst_visible=caml_string_of_jsbytes("visible"),
     cst_hidden=caml_string_of_jsbytes("hidden"),
     cst$0=caml_string_of_jsbytes(""),
     cst$1=caml_string_of_jsbytes(""),
     cst_focus=caml_string_of_jsbytes("focus"),
     cst_blur=caml_string_of_jsbytes("blur"),
     cst_change=caml_string_of_jsbytes("change"),
     cst_click=caml_string_of_jsbytes("click"),
     cst_contextmenu=caml_string_of_jsbytes("contextmenu"),
     cst_dblclick=caml_string_of_jsbytes("dblclick"),
     cst_input$0=caml_string_of_jsbytes("input"),
     cst_keydown=caml_string_of_jsbytes("keydown"),
     cst_mousedown=caml_string_of_jsbytes("mousedown"),
     cst_mousemove=caml_string_of_jsbytes("mousemove"),
     cst_focus$0=caml_string_of_jsbytes("focus"),
     cst_checked=caml_string_of_jsbytes("checked"),
     cst_value$1=caml_string_of_jsbytes("value"),
     cst_input$1=caml_string_of_jsbytes("input"),
     cst_blur$0=caml_string_of_jsbytes("blur"),
     cst_div$0=caml_string_of_jsbytes("div"),
     prev_value_attribute=caml_string_of_jsbytes("data-ocaml-vdom-prev-value"),
     cst_value$0=caml_string_of_jsbytes("value"),
     cst_autofocus$1=caml_string_of_jsbytes("autofocus"),
     cst_relative_dropdown$0=caml_string_of_jsbytes("relative-dropdown"),
     cst_scroll_to_show$0=caml_string_of_jsbytes("scroll-to-show"),
     cst_absolute=caml_string_of_jsbytes("absolute"),
     cst_Vdom_blit_no_custom_elemen=
      caml_string_of_jsbytes("Vdom_blit: no custom element handler found"),
     empty=[0,0,0],
     Assert_failure=global_data.Assert_failure,
     Ojs=global_data.Ojs,
     Stdlib_list=global_data.Stdlib__list,
     Stdlib_printf=global_data.Stdlib__printf,
     Stdlib=global_data.Stdlib,
     Stdlib_printexc=global_data.Stdlib__printexc,
     Stdlib_obj=global_data.Stdlib__obj,
     Stdlib_array=global_data.Stdlib__array,
     Stdlib_hashtbl=global_data.Stdlib__hashtbl,
     Stdlib_option=global_data.Stdlib__option,
     CamlinternalLazy=global_data.CamlinternalLazy,
     _d_=[0,caml_string_of_jsbytes("lib/js_browser.ml"),2273,15],
     _c_=[0,caml_string_of_jsbytes("lib/js_browser.ml"),1829,15],
     _b_=[0,caml_string_of_jsbytes("lib/js_browser.ml"),1687,15],
     _h_=[0,[2,0,[12,32,[2,0,0]]],caml_string_of_jsbytes("%s %s")],
     _m_=
      [0,
       [11,
        caml_string_of_jsbytes("Error during vdom Custom "),
        [2,0,[11,caml_string_of_jsbytes(" lookup: "),[2,0,[12,10,[10,0]]]]]],
       caml_string_of_jsbytes("Error during vdom Custom %s lookup: %s\n%!")],
     _q_=[0,caml_string_of_jsbytes("lib/vdom_blit.ml"),522,13],
     _r_=[0,caml_string_of_jsbytes("lib/vdom_blit.ml"),517,35],
     _u_=
      [0,
       [11,
        caml_string_of_jsbytes("Error during vdom process: "),
        [2,0,[12,10,[10,0]]]],
       caml_string_of_jsbytes("Error during vdom process: %s\n%!")],
     _v_=
      [0,
       [11,
        caml_string_of_jsbytes("Error in event handler "),
        [3,0,[11,caml_string_of_jsbytes(": "),[2,0,[12,10,[10,0]]]]]],
       caml_string_of_jsbytes("Error in event handler %S: %s\n%!")],
     _t_=
      [0,
       [11,
        caml_string_of_jsbytes("Error during vdom view: "),
        [2,0,[12,10,[10,0]]]],
       caml_string_of_jsbytes("Error during vdom view: %s\n%!")],
     _s_=[0,caml_string_of_jsbytes("lib/vdom_blit.ml"),593,43],
     _w_=
      [0,
       [0,22,0],
       [0,
        [0,31,0],
        [0,
         [0,74,0],
         [0,
          [0,18,0],
          [0,
           [0,65,1],
           [0,[0,13,1],[0,[0,93,1],[0,[0,90,1],[0,[0,76,1],[0,[0,28,1],0]]]]]]]]]],
     _p_=
      [0,
       [11,
        caml_string_of_jsbytes("Error during vdom sync: "),
        [2,0,[12,10,[10,0]]]],
       caml_string_of_jsbytes("Error during vdom sync: %s\n%!")],
     _j_=
      [0,
       [11,caml_string_of_jsbytes("scroll: "),[2,0,[12,10,[10,0]]]],
       caml_string_of_jsbytes("scroll: %s\n%!")],
     _k_=
      [0,
       [8,[0,0,0],0,0,[11,caml_string_of_jsbytes("px"),0]],
       caml_string_of_jsbytes("%fpx")],
     _i_=
      [0,
       [11,
        caml_string_of_jsbytes("No command handler found! ("),
        [2,0,[12,41,0]]],
       caml_string_of_jsbytes("No command handler found! (%s)")];
    function then(error,success,param)
     {var ojs=param[2],alpha_of_js=param[1];
      function x1(x){return caml_call1(success,caml_call1(alpha_of_js,x))}
      function _cY_(x4){return caml_js_wrap_callback_strict(1,x4)}
      ojs.then
       (caml_js_wrap_callback_strict(1,x1),caml_call2(Ojs[8],_cY_,error));
      return 0}
    function t_of_js(x8){return x8}
    function t_to_js(x7){return x7}
    function length(x11){return x11.length}
    function key(x13,x12)
     {var _cX_=x13.key(x12);return caml_call2(Ojs[7],caml_js_to_string,_cX_)}
    function get_item(x16,x15)
     {var _cW_=x16.getItem(caml_js_from_string(x15));
      return caml_call2(Ojs[7],caml_js_to_string,_cW_)}
    function set_item(x20,x18,x19)
     {x20.setItem(caml_js_from_string(x18),caml_js_from_string(x19));return 0}
    function remove_item(x22,x21)
     {x22.removeItem(caml_js_from_string(x21));return 0}
    function clear(x23){x23.clear();return 0}
    var
     Storage=
      [0,t_of_js,t_to_js,length,key,get_item,set_item,remove_item,clear];
    function t_of_js$0(x25){return x25}
    function t_to_js$0(x24){return x24}
    function new_reg_exp(x28,x29,param)
     {var x30=new (Ojs[16].Array)();
      x30.push(caml_js_from_string(x28));
      if(x29){var x31=x29[1];x30.push(caml_js_from_string(x31))}
      return caml_ojs_new_arr(Ojs[16].RegExp,x30)}
    var RegExp=[0,t_of_js$0,t_to_js$0,new_reg_exp];
    function t_of_js$1(x33){return x33}
    function t_to_js$1(x32){return x32}
    function of_string(s){return caml_js_from_string(s)}
    function to_string(x){return caml_js_to_string(x)}
    function to_lower_case(x36){return x36.toLowerCase()}
    function to_upper_case(x37){return x37.toUpperCase()}
    function concat(x42,x38)
     {var x39=new (Ojs[16].Array)();
      function _cV_(x40){x39.push(x40);return 0}
      caml_call2(Stdlib_list[15],_cV_,x38);
      return x42.concat.apply(x42,x39)}
    function includes(x44,x43){return x44.includes(x43) | 0}
    function ends_with(x46,x45){return x46.endsWith(x45) | 0}
    function index_of(x48,x47){return x48.indexOf(x47)}
    function repeat(x50,x49){return x50.repeat(x49)}
    function search(x52,x51){return x52.search(caml_call1(RegExp[2],x51))}
    function trim(x53){return x53.trim()}
    var
     JsString=
      [0,
       t_of_js$1,
       t_to_js$1,
       of_string,
       to_string,
       to_lower_case,
       to_upper_case,
       concat,
       includes,
       ends_with,
       index_of,
       repeat,
       search,
       trim];
    function t_of_js$2(x55){return x55}
    function t_to_js$2(x54){return x54}
    function new_date(x58){return new (Ojs[16].Date)(x58)}
    function now(param){return Ojs[16].Date.now()}
    function parse(x59){return Ojs[16].Date.parse(caml_js_from_string(x59))}
    function get_date(x60){return x60.getDate()}
    function get_day(x61){return x61.getDay()}
    function get_full_year(x62){return x62.getFullYear()}
    function get_hours(x63){return x63.getHours()}
    function get_milliseconds(x64){return x64.getMilliseconds()}
    function get_minutes(x65){return x65.getMinutes()}
    function get_month(x66){return x66.getMonth()}
    function get_seconds(x67){return x67.getSeconds()}
    function get_time(x68){return x68.getTime()}
    function get_timezone_offset(x69){return x69.getTimezoneOffset()}
    function get_UTC_date(x70){return x70.getUTCDate()}
    function get_UTC_day(x71){return x71.getUTCDay()}
    function get_UTC_full_year(x72){return x72.getUTCFullYear()}
    function get_UTC_hours(x73){return x73.getUTCHours()}
    function get_UTC_milliseconds(x74){return x74.getUTCMilliseconds()}
    function get_UTC_minutes(x75){return x75.getUTCMinutes()}
    function get_UTC_month(x76){return x76.getUTCMonth()}
    function get_UTC_seconds(x77){return x77.getUTCSeconds()}
    function get_year(x78){return x78.getYear()}
    function set_date(x80,x79){x80.setDate(x79);return 0}
    function set_full_year(x82,x81){x82.setFullYear(x81);return 0}
    function set_hours(x84,x83){x84.setHours(x83);return 0}
    function set_milliseconds(x86,x85){x86.setMilliseconds(x85);return 0}
    function set_minutes(x88,x87){x88.setMinutes(x87);return 0}
    function set_month(x90,x89){x90.setMonth(x89);return 0}
    function set_seconds(x92,x91){x92.setSeconds(x91);return 0}
    function set_time(x94,x93){x94.setTime(x93);return 0}
    function set_UTC_date(x96,x95){x96.setUTCDate(x95);return 0}
    function set_UTC_full_year(x98,x97){x98.setUTCFullYear(x97);return 0}
    function set_UTC_hours(x100,x99){x100.setUTCHours(x99);return 0}
    function set_UTC_milliseconds(x102,x101)
     {x102.setUTCMilliseconds(x101);return 0}
    function set_UTC_minutes(x104,x103){x104.setUTCMinutes(x103);return 0}
    function set_UTC_month(x106,x105){x106.setUTCMonth(x105);return 0}
    function set_UTC_seconds(x108,x107){x108.setUTCSeconds(x107);return 0}
    function set_year(x110,x109){x110.setYear(x109);return 0}
    function to_date_string(x111)
     {return caml_js_to_string(x111.toDateString())}
    function to_GMT_string(x112){return caml_js_to_string(x112.toGMTString())}
    function to_ISO_string(x113){return caml_js_to_string(x113.toISOString())}
    function to_locale_string(x114)
     {return caml_js_to_string(x114.toLocaleString())}
    function to_string$0(x115){return caml_js_to_string(x115.toString())}
    function to_time_string(x116)
     {return caml_js_to_string(x116.toTimeString())}
    function to_UTC_string(x117){return caml_js_to_string(x117.toUTCString())}
    var
     Date=
      [0,
       t_of_js$2,
       t_to_js$2,
       new_date,
       now,
       parse,
       get_date,
       get_day,
       get_full_year,
       get_hours,
       get_milliseconds,
       get_minutes,
       get_month,
       get_seconds,
       get_time,
       get_timezone_offset,
       get_UTC_date,
       get_UTC_day,
       get_UTC_full_year,
       get_UTC_hours,
       get_UTC_milliseconds,
       get_UTC_minutes,
       get_UTC_month,
       get_UTC_seconds,
       get_year,
       set_date,
       set_full_year,
       set_hours,
       set_milliseconds,
       set_minutes,
       set_month,
       set_seconds,
       set_time,
       set_UTC_date,
       set_UTC_full_year,
       set_UTC_hours,
       set_UTC_milliseconds,
       set_UTC_minutes,
       set_UTC_month,
       set_UTC_seconds,
       set_year,
       to_date_string,
       to_GMT_string,
       to_ISO_string,
       to_locale_string,
       to_string$0,
       to_time_string,
       to_UTC_string];
    function t_of_js$3(x119){return x119}
    function t_to_js$3(x118){return x118}
    function name(x122){return caml_js_to_string(x122.name)}
    function size(x123){return x123.size}
    function type(x124){return caml_js_to_string(x124.type)}
    var File=[0,t_of_js$3,t_to_js$3,name,size,type];
    function t_of_js$4(x126){return x126}
    function t_to_js$4(x125){return x125}
    function files(x129){return caml_call2(Ojs[3],File[1],x129.files)}
    var DataTransfer=[0,t_of_js$4,t_to_js$4,files];
    function t_of_js$5(x132){return x132}
    function t_to_js$5(x131){return x131}
    function kind_to_js(x135)
     {if(typeof x135 === "number")
       {var _cU_=x135;
        if(88 <= _cU_)
         {if(132 <= _cU_)
           switch(_cU_)
            {case 132:return "resume";
             case 133:return "scroll";
             case 134:return "seeked";
             case 135:return "seeking";
             case 136:return "select";
             case 137:return "selectionchange";
             case 138:return "selectstart";
             case 139:return "show";
             case 140:return "slotchange";
             case 141:return "soundend";
             case 142:return "soundstart";
             case 143:return "speechend";
             case 144:return "speechstart";
             case 145:return "stalled";
             case 146:return "start";
             case 147:return "storage";
             case 148:return "submit";
             case 149:return "success";
             case 150:return "suspend";
             case 151:return "SVGAbort";
             case 152:return "SVGError";
             case 153:return "SVGLoad";
             case 154:return "SVGResize";
             case 155:return "SVGScroll";
             case 156:return "SVGUnload";
             case 157:return "SVGZoom";
             case 158:return "timeout";
             case 159:return "timeupdate";
             case 160:return "touchcancel";
             case 161:return "touchend";
             case 162:return "touchmove";
             case 163:return "touchstart";
             case 164:return "transitionend";
             case 165:return "unload";
             case 166:return "updateready";
             case 167:return "upgradeneeded";
             case 168:return "userproximity";
             case 169:return "versionchange";
             case 170:return "visibilitychange";
             case 171:return "voiceschanged";
             case 172:return "volumechange";
             case 173:return "waiting";
             default:return "wheel"}
          switch(_cU_)
           {case 88:return "message";
            case 89:return "messageerror";
            case 90:return "mousedown";
            case 91:return "mouseenter";
            case 92:return "mouseleave";
            case 93:return "mousemove";
            case 94:return "mouseout";
            case 95:return "mouseover";
            case 96:return "mouseup";
            case 97:return "nomatch";
            case 98:return "notificationclick";
            case 99:return "noupdate";
            case 100:return "obsolete";
            case 101:return "offline";
            case 102:return "online";
            case 103:return "open";
            case 104:return "orientationchange";
            case 105:return "pagehide";
            case 106:return "pageshow";
            case 107:return "paste";
            case 108:return "pause";
            case 109:return "play";
            case 110:return "playing";
            case 111:return "pointercancel";
            case 112:return "pointerdown";
            case 113:return "pointerenter";
            case 114:return "pointerleave";
            case 115:return "pointerlockchange";
            case 116:return "pointerlockerror";
            case 117:return "pointermove";
            case 118:return "pointerout";
            case 119:return "pointerover";
            case 120:return "pointerup";
            case 121:return "popstate";
            case 122:return "progress";
            case 123:return "push";
            case 124:return "pushsubscriptionchange";
            case 125:return "ratechange";
            case 126:return "readystatechange";
            case 127:return "repeatEvent";
            case 128:return "reset";
            case 129:return "resize";
            case 130:return "resourcetimingbufferfull";
            default:return "result"}}
        if(44 <= _cU_)
         switch(_cU_)
          {case 44:return "DOMFocusIn";
           case 45:return "DOMFocusOut";
           case 46:return "DOMNodeInserted";
           case 47:return "DOMNodeInsertedIntoDocument";
           case 48:return "DOMNodeRemoved";
           case 49:return "DOMNodeRemovedFromDocument";
           case 50:return "DOMSubtreeModified";
           case 51:return "downloading";
           case 52:return "drag";
           case 53:return "dragend";
           case 54:return "dragenter";
           case 55:return "dragleave";
           case 56:return "dragover";
           case 57:return "dragstart";
           case 58:return "drop";
           case 59:return "durationchange";
           case 60:return "emptied";
           case 61:return "end";
           case 62:return "ended";
           case 63:return "endEvent";
           case 64:return "error";
           case 65:return "focus";
           case 66:return "focusin";
           case 67:return "focusout";
           case 68:return "fullscreenchange";
           case 69:return "fullscreenerror";
           case 70:return "gamepadconnected";
           case 71:return "gamepaddisconnected";
           case 72:return "gotpointercapture";
           case 73:return "hashchange";
           case 74:return "input";
           case 75:return "invalid";
           case 76:return "keydown";
           case 77:return "keypress";
           case 78:return "keyup";
           case 79:return "languagechange";
           case 80:return "levelchange";
           case 81:return "load";
           case 82:return "loadeddata";
           case 83:return "loadedmetadata";
           case 84:return "loadend";
           case 85:return "loadstart";
           case 86:return "lostpointercapture";
           default:return "mark"}
        switch(_cU_)
         {case 0:return "abort";
          case 1:return "afterprint";
          case 2:return "animationend";
          case 3:return "animationiteration";
          case 4:return "animationstart";
          case 5:return "appinstalled";
          case 6:return "audioend";
          case 7:return "audioprocess";
          case 8:return "audiostart";
          case 9:return "beforeprint";
          case 10:return "beforeunload";
          case 11:return "beginEvent";
          case 12:return "blocked";
          case 13:return "blur";
          case 14:return "boundary";
          case 15:return "cached";
          case 16:return "canplay";
          case 17:return "canplaythrough";
          case 18:return "change";
          case 19:return "chargingchange";
          case 20:return "chargingtimechange";
          case 21:return "checking";
          case 22:return "click";
          case 23:return "close";
          case 24:return "complete";
          case 25:return "compositionend";
          case 26:return "compositionstart";
          case 27:return "compositionupdate";
          case 28:return "contextmenu";
          case 29:return "copy";
          case 30:return "cut";
          case 31:return "dblclick";
          case 32:return "devicechange";
          case 33:return "devicelight";
          case 34:return "devicemotion";
          case 35:return "deviceorientation";
          case 36:return "deviceproximity";
          case 37:return "dischargingtimechange";
          case 38:return "DOMActivate";
          case 39:return "DOMAttributeNameChanged";
          case 40:return "DOMAttrModified";
          case 41:return "DOMCharacterDataModified";
          case 42:return "DOMContentLoaded";
          default:return "DOMElementNameChanged"}}
      var x136=x135[1];
      return caml_js_from_string(x136)}
    function target(x140){return x140.target}
    function prevent_default(x141){x141.preventDefault();return 0}
    function type$0(x142){return caml_js_to_string(x142.type)}
    function init_event(x146,x143,x144,x145)
     {x146.initEvent(kind_to_js(x143),! ! x144,! ! x145);return 0}
    function client_x(x147){return x147.clientX}
    function client_y(x148){return x148.clientY}
    function page_x(x149){return x149.pageX}
    function page_y(x150){return x150.pageY}
    function screen_x(x151){return x151.screenX}
    function screen_y(x152){return x152.screenY}
    function movement_x(x153){return x153.movementX}
    function movement_y(x154){return x154.movementY}
    function buttons(x155){return x155.buttons}
    function alt_key(x156){return x156.altKey | 0}
    function ctrl_key(x157){return x157.ctrlKey | 0}
    function shift_key(x158){return x158.shiftKey | 0}
    function which(x159){return x159.which}
    function code(x160){return caml_js_to_string(x160.code)}
    function key$0(x161){return caml_js_to_string(x161.key)}
    function delta_y(x162){return x162.deltaY}
    function delta_x(x163){return x163.deltaX}
    function data_transfer(x164)
     {return caml_call1(DataTransfer[1],x164.dataTransfer)}
    function data(x165){return x165.data}
    function origin(x166){return caml_js_to_string(x166.origin)}
    function t_of_js$6(x168){return x168}
    function t_to_js$6(x167){return x167}
    function height(x171){return x171.height}
    function width(x172){return x172.width}
    function left(x173){return x173.left}
    function right(x174){return x174.right}
    function top(x175){return x175.top}
    function bottom(x176){return x176.bottom}
    var Rect=[0,t_of_js$6,t_to_js$6,height,width,left,right,top,bottom];
    function t_of_js$7(x178){return x178}
    function t_to_js$7(x177){return x177}
    function x(x181){return x181.x}
    function y(x182){return x182.y}
    function height$0(x183){return x183.height}
    function width$0(x184){return x184.width}
    var SVGRect=[0,t_of_js$7,t_to_js$7,x,y,height$0,width$0];
    function t_of_js$8(x186){return x186}
    function t_to_js$8(x185){return x185}
    function set(style,prop,value)
     {return style[prop] = caml_js_from_string(value)}
    function set_color(x189,x190)
     {return x189.color = caml_js_from_string(x190)}
    function set_border(x191,x192)
     {return x191.border = caml_js_from_string(x192)}
    function set_background(x193,x194)
     {return x193.background = caml_js_from_string(x194)}
    function set_background_color(x195,x196)
     {return x195.backgroundColor = caml_js_from_string(x196)}
    function set_height(x197,x198)
     {return x197.height = caml_js_from_string(x198)}
    function set_width(x199,x200)
     {return x199.width = caml_js_from_string(x200)}
    function set_bottom(x201,x202)
     {return x201.bottom = caml_js_from_string(x202)}
    function set_left(x203,x204){return x203.left = caml_js_from_string(x204)}
    function set_top(x205,x206){return x205.top = caml_js_from_string(x206)}
    function set_right(x207,x208)
     {return x207.right = caml_js_from_string(x208)}
    function set_position(x209,x210)
     {return x209.position = caml_js_from_string(x210)}
    function set_cursor(x211,x212)
     {return x211.cursor = caml_js_from_string(x212)}
    function set_display(x213,x214)
     {return x213.display = caml_js_from_string(x214)}
    function get(style,prop){return caml_js_to_string(style[prop])}
    var
     Style=
      [0,
       t_of_js$8,
       t_to_js$8,
       set,
       set_color,
       set_border,
       set_background,
       set_background_color,
       set_height,
       set_width,
       set_bottom,
       set_left,
       set_top,
       set_right,
       set_position,
       set_cursor,
       set_display,
       get];
    function t_of_js$9(x216){return x216}
    function t_to_js$9(x215){return x215}
    var _a_=Ojs[17];
    function clone_node(x220,x219){return x220.cloneNode(! ! x219)}
    function contains(x222,x221){return x222.contains(x221) | 0}
    function append_child(x224,x223){x224.appendChild(x223);return 0}
    function insert_before(x227,x225,x226)
     {x227.insertBefore(x225,x226);return 0}
    function replace_child(x230,x228,x229)
     {x230.replaceChild(x228,x229);return 0}
    function remove_child(x232,x231){x232.removeChild(x231);return 0}
    function first_child(x233){return x233.firstChild}
    function last_child(x234){return x234.lastChild}
    function next_sibling(x235){return x235.nextSibling}
    function remove_all_children(x)
     {var child$1=x.firstChild,child=child$1;
      for(;;)
       {if(caml_equal(child,_a_))return 0;
        remove_child(x,child);
        var child$0=x.firstChild,child=child$0;
        continue}}
    function has_child_nodes(x236){return x236.hasChildNodes() | 0}
    function add_event_listener(x241,x237,x238,x240)
     {var
       _cS_=! ! x240,
       _cT_=
        caml_js_wrap_callback_strict
         (1,function(x239){return caml_call1(x238,x239)});
      x241.addEventListener(kind_to_js(x237),_cT_,_cS_);
      return 0}
    function add_cancellable_event_listener(x,k,f,c)
     {var
       x247=
        caml_js_wrap_callback_strict(1,function(x){return caml_call1(f,x)});
      x.addEventListener(kind_to_js(k),x247,! ! c);
      return function(param)
       {x.removeEventListener(kind_to_js(k),x247,! ! c);return 0}}
    function inner_text(x250){return caml_js_to_string(x250.innerText)}
    function get_elements_by_tag_name(x252,x251)
     {var _cR_=x252.getElementsByTagName(caml_js_from_string(x251));
      return caml_call2(Ojs[1],t_of_js$9,_cR_)}
    function get_elements_by_class_name(x255,x254)
     {var _cQ_=x255.getElementsByClassName(caml_js_from_string(x254));
      return caml_call2(Ojs[1],t_of_js$9,_cQ_)}
    function has_attribute(x258,x257)
     {return x258.hasAttribute(caml_js_from_string(x257)) | 0}
    function get_attribute(x260,x259)
     {return caml_js_to_string(x260.getAttribute(caml_js_from_string(x259)))}
    function remove_attribute(x262,x261)
     {x262.removeAttribute(caml_js_from_string(x261));return 0}
    function set_attribute(x265,x263,x264)
     {x265.setAttribute(caml_js_from_string(x263),caml_js_from_string(x264));
      return 0}
    function get_bounding_client_rect(x266)
     {var _cP_=x266.getBoundingClientRect();return caml_call1(Rect[1],_cP_)}
    function get_bounding_box(x267)
     {var _cO_=x267.getBBox();return caml_call1(SVGRect[1],_cO_)}
    function normalize(x268){x268.normalize();return 0}
    function value(x269){return caml_js_to_string(x269.value)}
    function set_value(x270,x271)
     {return x270.value = caml_js_from_string(x271)}
    function select(x272){x272.select();return 0}
    function files$0(x273){return caml_call2(Ojs[3],File[1],x273.files)}
    function selected_index(x275){return x275.selectedIndex}
    function checked(x276){return x276.checked | 0}
    function set_checked(x277,x278){return x277.checked = ! ! x278}
    function node_value(x279){return caml_js_to_string(x279.nodeValue)}
    function set_node_value(x280,x281)
     {return x280.nodeValue = caml_js_from_string(x281)}
    function parent_node(x282){return x282.parentNode}
    function node_name(x283){return caml_js_to_string(x283.nodeName)}
    function dispatch_event(x285,x284){return x285.dispatchEvent(x284) | 0}
    function style(x286){return caml_call1(Style[1],x286.style)}
    function set_inner_HTML(x287,x288)
     {return x287.innerHTML = caml_js_from_string(x288)}
    function set_text_content(x289,x290)
     {return x289.textContent = caml_js_from_string(x290)}
    function set_class_name(x291,x292)
     {return x291.className = caml_js_from_string(x292)}
    function class_name(x293){return caml_js_to_string(x293.className)}
    function client_width(x294){return x294.clientWidth}
    function client_height(x295){return x295.clientHeight}
    function scroll_width(x296){return x296.scrollWidth}
    function scroll_height(x297){return x297.scrollHeight}
    function width$1(x298){return x298.width}
    function height$1(x299){return x299.height}
    function offset_parent(x300)
     {return caml_call2(Ojs[7],t_of_js$9,x300.offsetParent)}
    function offset_top(x302){return x302.offsetTop}
    function offset_left(x303){return x303.offsetLeft}
    function offset_width(x304){return x304.offsetWidth}
    function offset_height(x305){return x305.offsetHeight}
    function scroll_top(x306){return x306.scrollTop}
    function set_scroll_top(x307,x308){return x307.scrollTop = x308}
    function focus(x309){x309.focus();return 0}
    function blur(x310){x310.blur();return 0}
    function selection_start(x311){return x311.selectionStart}
    function selection_end(x312){return x312.selectionEnd}
    function set_selection_start(x313,x314){return x313.selectionStart = x314}
    function set_selection_end(x315,x316){return x315.selectionEnd = x316}
    function remove(x317){x317.remove();return 0}
    function click(x318){x318.click();return 0}
    function t_of_js$10(x320){return x320}
    function t_to_js$10(x319){return x319}
    function create_element(x324,x323)
     {return x324.createElement(caml_js_from_string(x323))}
    function create_element_ns(x327,x325,x326)
     {return x327.createElementNS
              (caml_js_from_string(x325),caml_js_from_string(x326))}
    function create_text_node(x329,x328)
     {return x329.createTextNode(caml_js_from_string(x328))}
    function create_event(x331,x330)
     {return x331.createEvent(caml_js_from_string(x330))}
    function get_element_by_id(x333,x332)
     {var _cN_=x333.getElementById(caml_js_from_string(x332));
      return caml_call2(Ojs[7],t_of_js$9,_cN_)}
    function get_elements_by_class_name$0(x336,x335)
     {var _cM_=x336.getElementsByClassName(caml_js_from_string(x335));
      return caml_call2(Ojs[1],t_of_js$9,_cM_)}
    function body(x338){return x338.body}
    function document_element(x339){return x339.documentElement}
    function active_element(x340){return x340.activeElement}
    function cookie(x341){return caml_js_to_string(x341.cookie)}
    function set_cookie(x342,x343)
     {return x342.cookie = caml_js_from_string(x343)}
    function set_title(x344,x345)
     {return x344.title = caml_js_from_string(x345)}
    function open(x352,x346,x347,param)
     {var x348=new (Ojs[16].Array)();
      if(x346){var x350=x346[1];x348.push(caml_js_from_string(x350))}
      if(x347){var x349=x347[1];x348.push(caml_js_from_string(x349))}
      x352.open.apply(x352,x348);
      return 0}
    function write(x354,x353){x354.write(caml_js_from_string(x353));return 0}
    function writeln(x356,x355)
     {x356.writeln(caml_js_from_string(x355));return 0}
    function close(x357){x357.close();return 0}
    function exec_command(x359,x358)
     {return x359.execCommand(caml_js_from_string(x358)) | 0}
    function query_selector(x361,x360)
     {return x361.querySelector(caml_js_from_string(x360))}
    function remove_all_selection_ranges(x362)
     {x362.getSelection().removeAllRanges();return 0}
    var
     Document=
      [0,
       t_of_js$10,
       t_to_js$10,
       create_element,
       create_element_ns,
       create_text_node,
       create_event,
       get_element_by_id,
       get_elements_by_class_name$0,
       body,
       document_element,
       active_element,
       cookie,
       set_cookie,
       set_title,
       open,
       write,
       writeln,
       close,
       exec_command,
       query_selector,
       remove_all_selection_ranges];
    function t_of_js$11(x364){return x364}
    function t_to_js$11(x363){return x363}
    function length$0(x367){return x367.length}
    function back(x368){x368.back();return 0}
    function forward(x369){x369.forward();return 0}
    function go(x373,x370)
     {if(349440947 <= x370[1])
       var x371=x370[2],x371$0=x371;
      else
       var x372=x370[2],x371$0=caml_js_from_string(x372);
      x373.go(x371$0);
      return 0}
    function replace_state(x377,x374,x375,x376)
     {x377.replaceState
       (x374,caml_js_from_string(x375),caml_js_from_string(x376));
      return 0}
    function push_state(x381,x378,x379,x380)
     {x381.pushState(x378,caml_js_from_string(x379),caml_js_from_string(x380));
      return 0}
    var
     History=
      [0,
       t_of_js$11,
       t_to_js$11,
       length$0,
       back,
       forward,
       go,
       replace_state,
       push_state];
    function t_of_js$12(x383){return x383}
    function t_to_js$12(x382){return x382}
    function get_hash(param){return caml_js_to_string(Ojs[16].location.hash)}
    function set_hash(x386)
     {return Ojs[16].location.hash = caml_js_from_string(x386)}
    function host(x387){return caml_js_to_string(x387.host)}
    function set_host(x388,x389){return x388.host = caml_js_from_string(x389)}
    function hostname(x390){return caml_js_to_string(x390.hostname)}
    function set_hostname(x391,x392)
     {return x391.hostname = caml_js_from_string(x392)}
    function href(param){return caml_js_to_string(Ojs[16].location.href)}
    function set_href(x393)
     {return Ojs[16].location.href = caml_js_from_string(x393)}
    function pathname(x394){return caml_js_to_string(x394.pathname)}
    function set_pathname(x395,x396)
     {return x395.pathname = caml_js_from_string(x396)}
    function port(x397){return caml_js_to_string(x397.port)}
    function set_port(x398,x399){return x398.port = caml_js_from_string(x399)}
    function protocol(x400){return caml_js_to_string(x400.protocol)}
    function set_protocol(x401,x402)
     {return x401.protocol = caml_js_from_string(x402)}
    function search$0(x403){return caml_js_to_string(x403.search)}
    function set_search(x404,x405)
     {return x404.search = caml_js_from_string(x405)}
    function assign(x407,x406)
     {x407.assign(caml_js_from_string(x406));return 0}
    function reload(x412,x408,param)
     {var x409=new (Ojs[16].Array)();
      if(x408){var x410=x408[1];x409.push(! ! x410)}
      x412.reload.apply(x412,x409);
      return 0}
    function replace(x414,x413)
     {x414.replace(caml_js_from_string(x413));return 0}
    var
     Location=
      [0,
       t_of_js$12,
       t_to_js$12,
       get_hash,
       set_hash,
       host,
       set_host,
       hostname,
       set_hostname,
       href,
       set_href,
       pathname,
       set_pathname,
       port,
       set_port,
       protocol,
       set_protocol,
       search$0,
       set_search,
       assign,
       reload,
       replace];
    function t_of_js$13(x416){return x416}
    function t_to_js$13(x415){return x415}
    function add_event_listener$0(x427,x423,x424,x426)
     {var
       _cK_=! ! x426,
       _cL_=
        caml_js_wrap_callback_strict
         (1,function(x425){return caml_call1(x424,x425)});
      x427.addEventListener(kind_to_js(x423),_cL_,_cK_);
      return 0}
    function add_cancellable_event_listener$0(x,k,f,c)
     {var
       x433=
        caml_js_wrap_callback_strict(1,function(x){return caml_call1(f,x)});
      x.addEventListener(kind_to_js(k),x433,! ! c);
      return function(param)
       {x.removeEventListener(kind_to_js(k),x433,! ! c);return 0}}
    function document(x436){return caml_call1(Document[1],x436.document)}
    function set_onload(x437,x438)
     {return x437.onload
             =
             caml_js_wrap_callback_strict
              (1,function(param){return caml_call1(x438,0)})}
    function set_interval(x441,x439,x440)
     {return x441.setInterval
              (caml_js_wrap_callback_strict
                (1,function(param){return caml_call1(x439,0)}),
               x440)}
    function set_timeout(x444,x442,x443)
     {return x444.setTimeout
              (caml_js_wrap_callback_strict
                (1,function(param){return caml_call1(x442,0)}),
               x443)}
    function clear_timeout(x446,x445){x446.clearTimeout(x445);return 0}
    function clear_interval(x448,x447){x448.clearInterval(x447);return 0}
    function request_animation_frame(x451,x449)
     {x451.requestAnimationFrame
       (caml_js_wrap_callback_strict
         (1,function(x450){return caml_call1(x449,x450)}));
      return 0}
    function open$0(x462,x452,x453,x454,x455,param)
     {var x456=new (Ojs[16].Array)();
      if(x452){var x460=x452[1];x456.push(caml_js_from_string(x460))}
      if(x453){var x459=x453[1];x456.push(caml_js_from_string(x459))}
      if(x454){var x458=x454[1];x456.push(caml_js_from_string(x458))}
      if(x455){var x457=x455[1];x456.push(! ! x457)}
      return x462.open.apply(x462,x456)}
    function alert(x464,x463){x464.alert(caml_js_from_string(x463));return 0}
    function session_storage(x465)
     {return caml_call2(Ojs[7],Storage[1],x465.sessionStorage)}
    function local_storage(x467)
     {return caml_call2(Ojs[7],Storage[1],x467.localStorage)}
    function inner_width(x469){return x469.innerWidth}
    function inner_height(x470){return x470.innerHeight}
    function page_x_offset(x471){return x471.pageXOffset}
    function page_y_offset(x472){return x472.pageYOffset}
    function scroll_by(x475,x473,x474){x475.scrollBy(x473,x474);return 0}
    function scroll_to(x478,x476,x477){x478.scrollTo(x476,x477);return 0}
    function history(x479){return caml_call1(History[1],x479.history)}
    function location(x480){return caml_call1(Location[1],x480.location)}
    function frame_element(x481){return x481.frameElement}
    function get_computed_style(x483,x482)
     {var _cJ_=x483.getComputedStyle(x482);return caml_call1(Style[1],_cJ_)}
    function decode_URI_component(x485,x484)
     {return caml_js_to_string
              (x485.decodeURIComponent(caml_js_from_string(x484)))}
    function event_source(x486){return x486.source}
    function post_message(x489,x487,x488)
     {x489.postMessage(x487,caml_js_from_string(x488));return 0}
    function content_window(x490)
     {return caml_call2(Ojs[7],t_of_js$13,x490.contentWindow)}
    function content_document(x492)
     {return caml_call2(Ojs[7],Document[1],x492.contentDocument)}
    var IFrame=[0,content_window,content_document];
    function parse$0(x494)
     {return Ojs[16].JSON.parse(caml_js_from_string(x494))}
    function stringify(x495)
     {return caml_js_to_string(Ojs[16].JSON.stringify(x495))}
    var JSON=[0,parse$0,stringify];
    function t_of_js$14(x500){return x500}
    function t_to_js$14(x499){return x499}
    function create(param){return new (Ojs[16].FileReader)()}
    function ready_state(x503)
     {var x497=x503.readyState;
      if(2 < x497 >>> 0)throw [0,Assert_failure,_b_];
      switch(x497){case 0:return 0;case 1:return 1;default:return 2}}
    function result(x504){return caml_js_to_string(x504.result)}
    function set_onload$0(x505,x506)
     {return x505.onload
             =
             caml_js_wrap_callback_strict
              (1,function(param){return caml_call1(x506,0)})}
    function read_as_binary_string(x508,x507)
     {x508.readAsBinaryString(caml_call1(File[2],x507));return 0}
    function read_as_text(x510,x509)
     {x510.readAsText(caml_call1(File[2],x509));return 0}
    function t_of_js$15(x512){return x512}
    function t_to_js$15(x511){return x511}
    function create$0(param){return new (Ojs[16].XMLHttpRequest)()}
    function open$1(x517,x515,x516)
     {x517.open(caml_js_from_string(x515),caml_js_from_string(x516));return 0}
    function send(x519,x518){x519.send(x518);return 0}
    function set_request_header(x522,x520,x521)
     {x522.setRequestHeader
       (caml_js_from_string(x520),caml_js_from_string(x521));
      return 0}
    function get_response_header(x524,x523)
     {var _cI_=x524.getResponseHeader(caml_js_from_string(x523));
      return caml_call2(Ojs[7],caml_js_to_string,_cI_)}
    function set_response_type(x526,x527)
     {return x526.responseType = caml_js_from_string(x527)}
    function override_mime_type(x529,x528)
     {x529.overrideMimeType(caml_js_from_string(x528));return 0}
    function set_with_credentials(x530,x531)
     {return x530.withCredentials = ! ! x531}
    function status(x537){return x537.status}
    function ready_state$0(x538)
     {var x534=x538.readyState;
      if(4 < x534 >>> 0)return [0,x534];
      switch(x534)
       {case 0:return 0;
        case 1:return 1;
        case 2:return 2;
        case 3:return 3;
        default:return 4}}
    function response_text(x539){return caml_js_to_string(x539.responseText)}
    function response(x540){return x540.response}
    function set_onreadystatechange(x541,x542)
     {return x541.onreadystatechange
             =
             caml_js_wrap_callback_strict
              (1,function(param){return caml_call1(x542,0)})}
    function t_of_js$16(x544){return x544}
    function t_to_js$16(x543){return x543}
    function create$1(x550,x551,param)
     {var x552=new (Ojs[16].Array)();
      x552.push(caml_js_from_string(x550));
      if(x551)
       {var x553=x551[1];
        x552.push(caml_call2(Ojs[4],caml_js_from_string,x553))}
      return caml_ojs_new_arr(Ojs[16].WebSocket,x552)}
    function send$0(x556,x555){x556.send(caml_js_from_string(x555));return 0}
    function close$0(x563,x557,x558,param)
     {var x559=new (Ojs[16].Array)();
      if(x557){var x561=x557[1];x559.push(x561)}
      if(x558){var x560=x558[1];x559.push(caml_js_from_string(x560))}
      x563.close.apply(x563,x559);
      return 0}
    function binary_type(x564){return caml_js_to_string(x564.binaryType)}
    function set_binary_type(x565,x566)
     {return x565.binaryType = caml_js_from_string(x566)}
    function ready_state$1(x567)
     {var x548=x567.readyState;
      if(3 < x548 >>> 0)throw [0,Assert_failure,_c_];
      switch(x548)
       {case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}}
    function add_event_listener$1(x572,x568,x569,x571)
     {var
       _cG_=! ! x571,
       _cH_=
        caml_js_wrap_callback_strict
         (1,function(x570){return caml_call1(x569,x570)});
      x572.addEventListener(kind_to_js(x568),_cH_,_cG_);
      return 0}
    function code$0(x575){return x575.code}
    var
     window=Ojs[16].window,
     document$0=caml_call1(Document[1],Ojs[16].document);
    function context_of_js(x577){return x577}
    function context_to_js(x576){return x576}
    function gradient_of_js(x581){return x581}
    function gradient_to_js(x580){return x580}
    function get_context(opt,canvas)
     {if(opt)var sth=opt[1],alpha=sth;else var alpha=1;
      var _cF_=canvas.getContext("2d",{"alpha":! ! alpha});
      return caml_call2(Ojs[7],context_of_js,_cF_)}
    function to_data_URL(x592){return caml_js_to_string(x592.toDataURL())}
    function set_fill_style(x593,x594)
     {if(66123280 <= x594[1])
       var x596=x594[2],_cE_=x596;
      else
       var x595=x594[2],_cE_=caml_js_from_string(x595);
      return x593.fillStyle = _cE_}
    function set_stroke_style(x597,x598)
     {if(66123280 <= x598[1])
       var x600=x598[2],_cD_=x600;
      else
       var x599=x598[2],_cD_=caml_js_from_string(x599);
      return x597.strokeStyle = _cD_}
    function set_line_width(x601,x602){return x601.lineWidth = x602}
    function create_linear_gradient(x607,x603,x604,x605,x606)
     {return x607.createLinearGradient(x603,x604,x605,x606)}
    function add_color_stop(x610,x608,x609)
     {x610.addColorStop(x608,caml_js_from_string(x609));return 0}
    function begin_path(x611){x611.beginPath();return 0}
    function close_path(x612){x612.closePath();return 0}
    function arc(x618,x613,x614,x615,x616,x617)
     {x618.arc(x613,x614,x615,x616,x617);return 0}
    function move_to(x621,x619,x620){x621.moveTo(x619,x620);return 0}
    function line_to(x624,x622,x623){x624.lineTo(x622,x623);return 0}
    function fill(x625){x625.fill();return 0}
    function stroke(x626){x626.stroke();return 0}
    function stroke_rect(x631,x627,x628,x629,x630)
     {x631.strokeRect(x627,x628,x629,x630);return 0}
    function fill_rect(x636,x632,x633,x634,x635)
     {x636.fillRect(x632,x633,x634,x635);return 0}
    function set_font(x637,x638){return x637.font = caml_js_from_string(x638)}
    function fill_text(x642,x639,x640,x641)
     {x642.fillText(caml_js_from_string(x639),x640,x641);return 0}
    function stroke_text(x646,x643,x644,x645)
     {x646.strokeText(caml_js_from_string(x643),x644,x645);return 0}
    function t_of_js$17(x648){return x648}
    function t_to_js$17(x647){return x647}
    function width$2(x651){return x651.width}
    var TextMetrics=[0,t_of_js$17,t_to_js$17,width$2];
    function measure_text(x653,x652)
     {var _cC_=x653.measureText(caml_js_from_string(x652));
      return caml_call1(TextMetrics[1],_cC_)}
    function rotate(x655,x654){x655.rotate(x654);return 0}
    function translate(x658,x656,x657){x658.translate(x656,x657);return 0}
    function scale(x661,x659,x660){x661.scale(x659,x660);return 0}
    function clear_rect(x666,x662,x663,x664,x665)
     {x666.clearRect(x662,x663,x664,x665);return 0}
    function now$0(param){return Ojs[16].performance.now()}
    var Performance=[0,now$0];
    function log(x670,x669){x670.log(x669);return 0}
    var console=Ojs[16].console;
    function create$2(x673){return new (Ojs[16].ArrayBuffer)(x673)}
    function from_buffer(x676){return new (Ojs[16].Uint8Array)(x676)}
    function set$0(x680,x677,x679)
     {function _cA_(_cB_){return _cB_}
      x680.set(caml_call2(Ojs[2],_cA_,x677),x679);
      return 0}
    function options(x683,x684,param)
     {var x685=caml_call1(Ojs[9],0);
      if(x683){var x687=x683[1];x685.type = caml_js_from_string(x687)}
      if(x684){var x686=x684[1];x685.endings = caml_js_from_string(x686)}
      return x685}
    function t_of_js$18(x689){return x689}
    function t_to_js$18(x688){return x688}
    function create$3(x692,x693,param)
     {var x694=new (Ojs[16].Array)();
      function _cz_(x696)
       {if(571404121 <= x696[1]){var x697=x696[2];return x697}
        var x698=x696[2];
        return x698}
      x694.push(caml_call2(Ojs[4],_cz_,x692));
      if(x693){var x695=x693[1];x694.push(x695)}
      return caml_ojs_new_arr(Ojs[16].Blob,x694)}
    function text(x699,param){return [0,caml_js_to_string,x699.text()]}
    function of_blob(x701)
     {return caml_js_to_string(Ojs[16].URL.createObjectURL(x701))}
    function revoke(x702)
     {Ojs[16].URL.revokeObjectURL(caml_js_from_string(x702));return 0}
    var ObjectURL=[0,of_blob,revoke];
    function t_of_js$19(x704){return x704}
    function t_to_js$19(x703){return x703}
    function unit_type(x707){return x707.unitType}
    function value$0(x708){return x708.value}
    function value_as_string(x709)
     {return caml_js_to_string(x709.valueAsString)}
    function value_in_specified_units(x710){return x710.valueInSpecifiedUnits}
    var
     Length=
      [0,
       t_of_js$19,
       t_to_js$19,
       unit_type,
       value$0,
       value_as_string,
       value_in_specified_units];
    function t_of_js$20(x712){return x712}
    function t_to_js$20(x711){return x711}
    function anim_val(x715){return caml_call1(Length[1],x715.animVal)}
    function base_val(x716){return caml_call1(Length[1],x716.baseVal)}
    var AnimatedLength=[0,t_of_js$20,t_to_js$20,anim_val,base_val];
    function t_of_js$21(x721){return x721}
    function t_to_js$21(x720){return x720}
    function x$0(x724){return x724.x}
    function y$0(x725){return x725.y}
    function x1(x726){return x726.x1}
    function y1(x727){return x727.y1}
    function x2(x728){return x728.x2}
    function y2(x729){return x729.y2}
    function path_seg_type(x730)
     {var x718=x730.pathSegType;
      if(9 < x718 >>> 0)throw [0,Assert_failure,_d_];
      switch(x718)
       {case 0:return 0;
        case 1:return 1;
        case 2:return 2;
        case 3:return 3;
        case 4:return 4;
        case 5:return 5;
        case 6:return 6;
        case 7:return 7;
        case 8:return 8;
        default:return 9}}
    function path_seg_type_as_letter(x731)
     {return caml_js_to_string(x731.pathSegTypeAsLetter)}
    var
     PathSeg=
      [0,
       t_of_js$21,
       t_to_js$21,
       x$0,
       y$0,
       x1,
       y1,
       x2,
       y2,
       path_seg_type,
       path_seg_type_as_letter];
    function t_of_js$22(x733){return x733}
    function t_to_js$22(x732){return x732}
    function number_of_items(x736){return x736.numberOfItems}
    function get_item$0(x738,x737)
     {var _cy_=x738.getItem(x737);return caml_call1(PathSeg[1],_cy_)}
    function insert_item_before(x741,x739,x740)
     {x741.insertItemBefore(caml_call1(PathSeg[2],x739),x740);return 0}
    function replace_item(x744,x742,x743)
     {x744.replaceItem(caml_call1(PathSeg[2],x742),x743);return 0}
    function remove_item$0(x746,x745){x746.removeItem(x745);return 0}
    function append_item(x748,x747)
     {x748.appendItem(caml_call1(PathSeg[2],x747));return 0}
    var
     PathSegList=
      [0,
       t_of_js$22,
       t_to_js$22,
       number_of_items,
       get_item$0,
       insert_item_before,
       replace_item,
       remove_item$0,
       append_item];
    function t_of_js$23(x750){return x750}
    function t_to_js$23(x749){return x749}
    function path_seg_list(x753)
     {return caml_call1(PathSegList[1],x753.pathSegList)}
    function normalized_path_seg_list(x754)
     {return caml_call1(PathSegList[1],x754.normalizedPathSegList)}
    function animated_path_seg_list(x755)
     {return caml_call1(PathSegList[1],x755.animatedPathSegList)}
    function animated_normalized_path_seg_l(x756)
     {return caml_call1(PathSegList[1],x756.animatedNormalizedPathSegList)}
    function create_close_path(x757,param)
     {var _cx_=x757.createSVGPathSegClosePath();
      return caml_call1(PathSeg[1],_cx_)}
    function create_moveto_abs(x760,x758,x759)
     {var _cw_=x760.createSVGPathSegMovetoAbs(x758,x759);
      return caml_call1(PathSeg[1],_cw_)}
    function create_moveto_rel(x763,x761,x762)
     {var _cv_=x763.createSVGPathSegMovetoRel(x761,x762);
      return caml_call1(PathSeg[1],_cv_)}
    function create_lineto_abs(x766,x764,x765)
     {var _cu_=x766.createSVGPathSegLinetoAbs(x764,x765);
      return caml_call1(PathSeg[1],_cu_)}
    function create_lineto_rel(x769,x767,x768)
     {var _ct_=x769.createSVGPathSegLinetoRel(x767,x768);
      return caml_call1(PathSeg[1],_ct_)}
    var
     PathElement=
      [0,
       t_of_js$23,
       t_to_js$23,
       path_seg_list,
       normalized_path_seg_list,
       animated_path_seg_list,
       animated_normalized_path_seg_l,
       create_close_path,
       create_moveto_abs,
       create_moveto_rel,
       create_lineto_abs,
       create_lineto_rel],
     _e_=
      [0,
       t_of_js$13,
       t_to_js$13,
       add_event_listener$0,
       add_cancellable_event_listener$0,
       document,
       set_onload,
       set_interval,
       set_timeout,
       clear_timeout,
       clear_interval,
       request_animation_frame,
       open$0,
       alert,
       session_storage,
       local_storage,
       inner_width,
       inner_height,
       page_x_offset,
       page_y_offset,
       scroll_by,
       scroll_to,
       history,
       location,
       frame_element,
       get_computed_style,
       decode_URI_component,
       event_source,
       post_message],
     _f_=
      [0,
       t_of_js$9,
       t_to_js$9,
       _a_,
       clone_node,
       contains,
       append_child,
       insert_before,
       replace_child,
       remove_child,
       first_child,
       last_child,
       next_sibling,
       remove_all_children,
       has_child_nodes,
       add_event_listener,
       add_cancellable_event_listener,
       inner_text,
       get_elements_by_tag_name,
       get_elements_by_class_name,
       has_attribute,
       get_attribute,
       remove_attribute,
       set_attribute,
       get_bounding_client_rect,
       get_bounding_box,
       normalize,
       value,
       set_value,
       select,
       files$0,
       selected_index,
       checked,
       set_checked,
       node_value,
       set_node_value,
       parent_node,
       node_name,
       dispatch_event,
       style,
       set_inner_HTML,
       set_text_content,
       set_class_name,
       class_name,
       client_width,
       client_height,
       scroll_width,
       scroll_height,
       width$1,
       height$1,
       offset_parent,
       offset_top,
       offset_left,
       offset_width,
       offset_height,
       scroll_top,
       set_scroll_top,
       focus,
       blur,
       selection_start,
       selection_end,
       set_selection_start,
       set_selection_end,
       remove,
       click],
     _g_=
      [0,
       t_of_js$5,
       t_to_js$5,
       target,
       prevent_default,
       type$0,
       init_event,
       client_x,
       client_y,
       page_x,
       page_y,
       screen_x,
       screen_y,
       movement_x,
       movement_y,
       buttons,
       alt_key,
       ctrl_key,
       shift_key,
       which,
       code,
       key$0,
       delta_y,
       delta_x,
       data_transfer,
       data,
       origin],
     Js_browser=
      [0,
       [0,then],
       Storage,
       RegExp,
       JsString,
       Date,
       File,
       DataTransfer,
       _g_,
       Rect,
       SVGRect,
       Style,
       _f_,
       Document,
       History,
       Location,
       _e_,
       IFrame,
       JSON,
       [0,
        t_of_js$14,
        t_to_js$14,
        create,
        ready_state,
        result,
        set_onload$0,
        read_as_binary_string,
        read_as_text],
       [0,
        t_of_js$15,
        t_to_js$15,
        create$0,
        open$1,
        send,
        set_request_header,
        get_response_header,
        set_response_type,
        override_mime_type,
        set_with_credentials,
        status,
        ready_state$0,
        response_text,
        response,
        set_onreadystatechange],
       [0,
        t_of_js$16,
        t_to_js$16,
        create$1,
        send$0,
        close$0,
        binary_type,
        set_binary_type,
        ready_state$1,
        add_event_listener$1,
        [0,code$0]],
       window,
       document$0,
       [0,
        context_of_js,
        context_to_js,
        gradient_of_js,
        gradient_to_js,
        get_context,
        to_data_URL,
        set_fill_style,
        set_stroke_style,
        set_line_width,
        create_linear_gradient,
        add_color_stop,
        begin_path,
        close_path,
        arc,
        move_to,
        line_to,
        fill,
        stroke,
        stroke_rect,
        fill_rect,
        set_font,
        fill_text,
        stroke_text,
        TextMetrics,
        measure_text,
        rotate,
        translate,
        scale,
        clear_rect],
       Performance,
       [0,log],
       console,
       [0,create$2],
       [0,from_buffer,set$0],
       [0,options,t_of_js$18,t_to_js$18,create$3,text],
       ObjectURL,
       [0,Length,AnimatedLength,PathSeg,PathSegList,PathElement]];
    caml_register_global(825,Js_browser,"Js_browser");
    var
     Echo=[248,cst_Vdom_Cmd_Echo,caml_fresh_oo_id(0)],
     Batch=[248,cst_Vdom_Cmd_Batch,caml_fresh_oo_id(0)],
     Map=[248,cst_Vdom_Cmd_Map,caml_fresh_oo_id(0)];
    function echo(msg){return [0,Echo,msg]}
    function batch(l){return [0,Batch,l]}
    function map(f,x){return [0,Map,f,x]}
    var Cmd=[0,Echo,Batch,Map,echo,batch,map],Custom=[0];
    function onmousedown(msg){return [2,[0,msg]]}
    function onclick(msg){return [2,[1,msg]]}
    function ondblclick(msg){return [2,[2,msg]]}
    function oncontextmenu(msg){return [2,[12,msg]]}
    function onfocus(msg){return [2,[3,msg]]}
    function oninput(msg){return [2,[5,msg]]}
    function onchange(msg){return [2,[6,msg]]}
    function onchange_index(msg){return [2,[7,msg]]}
    function onchange_checked(msg){return [2,[8,msg]]}
    function onblur(msg){return [2,[4,msg]]}
    function onmousemove(msg){return [2,[9,msg]]}
    function onkeydown(msg){return [2,[10,msg]]}
    function onkeydown_cancel(msg){return [2,[11,msg]]}
    function oncustomevent(msg){return [2,[13,msg]]}
    function str_prop(k,v){return [0,k,[0,v]]}
    function int_prop(k,v){return [0,k,[1,v]]}
    function bool_prop(k,v){return [0,k,[3,v]]}
    function float_prop(k,v){return [0,k,[2,v]]}
    function style$0(k,v){return [1,k,v]}
    function attr(k,v){return [3,k,v]}
    function int_attr(k,v){return [3,k,caml_call1(Stdlib[33],v)]}
    function float_attr(k,v){return [3,k,caml_call1(Stdlib[35],v)]}
    var
     scroll_to_show=bool_prop(cst_scroll_to_show,1),
     autofocus=bool_prop(cst_autofocus,1);
    function autofocus_counter(x){return int_prop(cst_autofocus$0,x)}
    function relative_dropdown(x){return int_prop(cst_relative_dropdown,x)}
    function class$0(x){return [0,cst_className,[0,x]]}
    function type$1(x){return [0,cst_type,[0,x]]}
    var type_button=type$1(cst_button);
    function value$1(x){return [0,cst_value,[0,x]]}
    function disabled(x){return [0,cst_disabled,[3,x]]}
    function add_class(x,attrs)
     {function _cq_(param)
       {if(0 === param[0] && ! caml_string_notequal(param[1],cst_className$0))
         return 1;
        return 0}
      var has_className=caml_call2(Stdlib_list[31],_cq_,attrs);
      if(has_className)
       {var
         _cr_=
          function(a)
           {if(0 === a[0] && ! caml_string_notequal(a[1],cst_className$1))
             {var _cs_=a[2];
              if(0 === _cs_[0])
               {var s=_cs_[1];
                return [0,
                        cst_className$2,
                        [0,caml_call3(Stdlib_printf[4],_h_,s,x)]]}}
            return a};
        return caml_call2(Stdlib_list[17],_cr_,attrs)}
      return [0,class$0(x),attrs]}
    function text$0(opt,txt)
     {if(opt)var sth=opt[1],key=sth;else var key=cst_txt;return [0,key,txt]}
    function elt(opt,tag,key,_cp_,l)
     {if(opt)var sth=opt[1],ns=sth;else var ns=cst;
      if(_cp_)var sth$0=_cp_[1],a=sth$0;else var a=0;
      if(key)var k=key[1],k$0=k;else var k$0=tag;
      return [1,k$0,ns,tag,a,l]}
    function svg_elt(tag,key,a,l){return elt([0,svg_ns],tag,key,a,l)}
    function div(key,a,l){return elt(0,cst_div,key,a,l)}
    function input(key,a,l){return elt(0,cst_input,key,a,l)}
    function txt_span(key,a,s){return elt(0,cst_span,key,a,[0,text$0(0,s),0])}
    function map_attr(f,init)
     {switch(init[0])
       {case 1:
         var attributes=init[4],_cm_=init[5],_cn_=caml_call1(f,attributes);
         return [1,init[1],init[2],init[3],_cn_,_cm_];
        case 4:
         var attributes$0=init[3],_co_=caml_call1(f,attributes$0);
         return [4,init[1],init[2],_co_];
        default:return init}}
    function map$0(opt,f,child)
     {if(opt)var sth=opt[1],key=sth;else var key=cst_map;
      return [2,key,f,child]}
    function memo(opt,f,arg)
     {if(opt)var sth=opt[1],key=sth;else var key=cst_memo;
      return [3,key,f,arg]}
    function custom(opt,_cl_,elt)
     {if(opt)var sth=opt[1],key=sth;else var key=cst_custom;
      if(_cl_)var sth$0=_cl_[1],a=sth$0;else var a=0;
      return [4,key,elt,a]}
    function return$0(opt,model)
     {if(opt)var sth=opt[1],c=sth;else var c=0;
      return [0,model,caml_call1(Cmd[5],c)]}
    function app(init,update,view,param){return [0,init,update,view]}
    function simple_app(init,update,view,param)
     {function _ck_(model,msg)
       {return return$0(0,caml_call2(update,model,msg))}
      return [0,return$0(0,init),_ck_,view]}
    var
     blur_event=
      [0,
       function(param)
        {if(4 === param[0]){var msg=param[1];return [0,msg]}return 0}];
    function input_event(s)
     {return [0,
              function(param)
               {if(5 === param[0]){var f=param[1];return [0,caml_call1(f,s)]}
                return 0}]}
    function checked_event(b)
     {return [0,
              function(param)
               {if(8 === param[0]){var f=param[1];return [0,caml_call1(f,b)]}
                return 0}]}
    function change_event(s)
     {return [0,
              function(param)
               {if(6 === param[0]){var f=param[1];return [0,caml_call1(f,s)]}
                return 0}]}
    function change_index_event(i)
     {return [0,
              function(param)
               {if(7 === param[0]){var f=param[1];return [0,caml_call1(f,i)]}
                return 0}]}
    function custom_event(e)
     {return [0,
              function(param)
               {if(13 === param[0]){var f=param[1];return caml_call1(f,e)}
                return 0}]}
    var
     Vdom=
      [0,
       Cmd,
       Custom,
       onmousedown,
       onclick,
       ondblclick,
       oncontextmenu,
       onfocus,
       onblur,
       oninput,
       onchange_checked,
       onchange,
       onchange_index,
       onmousemove,
       onkeydown,
       onkeydown_cancel,
       oncustomevent,
       str_prop,
       int_prop,
       bool_prop,
       float_prop,
       style$0,
       attr,
       int_attr,
       float_attr,
       class$0,
       type$1,
       type_button,
       value$1,
       disabled,
       add_class,
       scroll_to_show,
       autofocus,
       relative_dropdown,
       autofocus_counter,
       blur_event,
       input_event,
       checked_event,
       change_event,
       change_index_event,
       custom_event,
       elt,
       svg_elt,
       text$0,
       map_attr,
       map$0,
       memo,
       custom,
       div,
       input,
       txt_span,
       return$0,
       app,
       simple_app];
    caml_register_global(828,Vdom,"Vdom");
    function send_msg(ctx){return ctx[1]}
    function run(param,p,x)
     {var p$0=p,x$0=x;
      for(;;)
       {if(x$0[1] === Cmd[1]){var msg=x$0[2];return caml_call1(p$0,msg)}
        if(x$0[1] === Cmd[2])
         {var l=x$0[2],_cf_=function(_cj_){return run(param,p$0,_cj_)};
          return caml_call2(Stdlib_list[15],_cf_,l)}
        if(x$0[1] === Cmd[3])
         {var
           x$1=x$0[3],
           f=x$0[2],
           p$2=
            function(p,f)
             {function p$0(x){return caml_call1(p,caml_call1(f,x))}return p$0},
           p$1=p$2(p$0,f),
           p$0=p$1,
           x$0=x$1;
          continue}
        var ctx=[0,p$0],param$0=param;
        for(;;)
         {if(param$0)
           {var tl=param$0[2],hd=param$0[1];
            if(caml_call2(hd[1],ctx,x$0))return 0;
            var param$0=tl;
            continue}
          var
           _cg_=caml_call1(Stdlib_obj[21][1],x$0),
           _ch_=caml_call1(Stdlib_obj[21][2],_cg_),
           _ci_=caml_call2(Stdlib_printf[4],_i_,_ch_);
          return caml_call1(Stdlib[2],_ci_)}}}
    function make(opt,sync,dom)
     {if(opt)
       var sth=opt[1],dispose=sth;
      else
       var dispose=function(_ce_){return 0};
      return [0,dom,sync,dispose]}
    function parent(ctx){return ctx[1]}
    function send_event(ctx){return ctx[2]}
    function after_redraw(ctx){return ctx[3]}
    function lookup(parent,process_custom,after_redraw,elt,handlers)
     {var dom=[],send_event=function _cd_(_cc_){return _cd_.fun(_cc_)},el=[];
      caml_update_dummy
       (dom,
        [246,
         function(_b$_)
          {var
            _ca_=caml_obj_tag(el),
            _cb_=
             250 === _ca_
              ?el[1]
              :246 === _ca_?caml_call1(CamlinternalLazy[2],el):el;
           return _cb_[1]}]);
      caml_update_dummy
       (send_event,
        function(e)
         {var
           _b9_=caml_obj_tag(dom),
           _b__=
            250 === _b9_
             ?dom[1]
             :246 === _b9_?caml_call1(CamlinternalLazy[2],dom):dom;
          return caml_call2(process_custom,_b__,e)});
      caml_update_dummy
       (el,
        [246,
         function(_b8_)
          {var ctx=[0,parent,send_event,after_redraw],param=handlers;
           for(;;)
            {if(param)
              {var tl=param[2],hd=param[1],match=caml_call2(hd,ctx,elt);
               if(match){var f=match[1];return f}
               var param=tl;
               continue}
             return caml_call1(Stdlib[2],cst_Vdom_blit_no_custom_elemen)}}]);
      var _b7_=caml_obj_tag(el);
      return 250 === _b7_
              ?el[1]
              :246 === _b7_?caml_call1(CamlinternalLazy[2],el):el}
    function scroll_to_make_visible(child)
     {var node=child;
      for(;;)
       {if(caml_equal(node,_f_[3]))
         var parent=caml_call1(Document[9],document$0);
        else
         {var
           _b1_=caml_call2(_e_[25],window,node),
           overflow_y=caml_call2(Style[17],_b1_,cst_overflowY),
           _b2_=caml_string_notequal(overflow_y,cst_visible),
           is_scrollable=_b2_?caml_string_notequal(overflow_y,cst_hidden):_b2_,
           switch$0=0;
          if(is_scrollable)
           {var _b3_=caml_call1(_f_[45],node);
            if(_b3_ <= caml_call1(_f_[47],node)){var parent=node;switch$0 = 1}}
          if(! switch$0)
           {var node$0=caml_call1(_f_[36],node),node=node$0;continue}}
        var
         r_parent=caml_call1(_f_[24],parent),
         r_child=caml_call1(_f_[24],child),
         y1=caml_call1(Rect[8],r_parent),
         y2=caml_call1(Rect[8],r_child);
        if(y1 < y2)
         {var _b4_=caml_call1(_f_[55],parent) + y2 - y1;
          return caml_call2(_f_[56],parent,_b4_)}
        var
         y1$0=caml_call1(Rect[7],r_parent),
         y2$0=caml_call1(Rect[7],r_child),
         _b5_=y2$0 < y1$0?1:0;
        if(_b5_)
         {var _b6_=caml_call1(_f_[55],parent) + y2$0 - y1$0;
          return caml_call2(_f_[56],parent,_b6_)}
        return _b5_}}
    function get_dom(param)
     {switch(param[0])
       {case 0:return param[2];
        case 1:return param[2];
        case 2:return param[2];
        case 3:return param[2];
        default:return param[2][1]}}
    function get_vdom(param)
     {switch(param[0])
       {case 0:return param[1];
        case 1:return param[1];
        case 2:return param[1];
        case 3:return param[1];
        default:return param[1]}}
    function eval_prop(param)
     {switch(param[0])
       {case 0:var x=param[1];return caml_js_from_string(x);
        case 1:var x$0=param[1];return x$0;
        case 2:var x$1=param[1];return x$1;
        default:var x$2=param[1];return ! ! x$2}}
    function string_of_prop(param)
     {switch(param[0])
       {case 0:var s=param[1];return s;
        case 1:var x=param[1];return caml_call1(Stdlib[33],x);
        case 2:var x$0=param[1];return caml_call1(Stdlib[35],x$0);
        default:var x$1=param[1];return caml_call1(Stdlib[30],x$1)}}
    function same_prop(v1,match)
     {var _bZ_=v1 === match?1:0;
      if(_bZ_)
       var _b0_=_bZ_;
      else
       {switch(v1[0])
         {case 0:
           if(0 === match[0])
            {var x2=match[1],x1=v1[1];return caml_string_equal(x1,x2)}
           break;
          case 1:
           if(1 === match[0])
            {var x2$0=match[1],x1$0=v1[1];return x1$0 === x2$0?1:0}
           break;
          case 2:
           if(2 === match[0])
            {var x2$1=match[1],x1$1=v1[1];return x1$1 == x2$1?1:0}
           break;
          default:
           if(3 === match[0])
            {var x2$2=match[1],x1$2=v1[1];return x1$2 === x2$2?1:0}}
        var _b0_=0}
      return _b0_}
    function bmemo(vdom,child){return [3,vdom,get_dom(child),child]}
    function async(f){caml_call3(_e_[8],window,f,0);return 0}
    function custom_attribute(dom,param)
     {if(caml_string_notequal(param,cst_autofocus$1))
       {if(caml_string_notequal(param,cst_relative_dropdown$0))
         return caml_string_notequal(param,cst_scroll_to_show$0)
                 ?0
                 :(async
                    (function(param)
                      {try
                        {var _bY_=scroll_to_make_visible(dom);return _bY_}
                       catch(exn)
                        {exn = caml_wrap_exception(exn);
                         var _bX_=caml_call1(Stdlib_printexc[1],exn);
                         return caml_call2(Stdlib_printf[2],_j_,_bX_)}}),
                   1);
        var style=caml_call1(_f_[39],dom),_bR_=caml_call1(_f_[39],dom);
        caml_call2(Style[14],_bR_,cst_absolute);
        var px=caml_call1(Stdlib_printf[4],_k_);
        async
         (function(param)
           {var match=caml_call1(_f_[50],dom);
            if(match)
             {var
               offset_parent=match[1],
               parent=caml_call1(_f_[36],dom),
               rect=caml_call1(_f_[24],parent),
               offset_rect=caml_call1(_f_[24],offset_parent),
               _bS_=caml_call1(Rect[7],offset_rect),
               top=caml_call1(Rect[7],rect) - _bS_,
               _bT_=caml_call1(Rect[5],offset_rect),
               left=caml_call1(Rect[5],rect) - _bT_,
               _bU_=caml_call1(px,top + caml_call1(_f_[54],parent));
              caml_call2(Style[12],style,_bU_);
              var _bV_=caml_call1(px,left);
              caml_call2(Style[11],style,_bV_);
              var _bW_=caml_call1(px,caml_call1(_f_[53],parent));
              return caml_call2(Style[9],style,_bW_)}
            return 0});
        return 1}
      async(function(param){return caml_call1(_f_[57],dom)});
      return 1}
    function apply_attributes(dom,attributes)
     {function _bM_(param)
       {switch(param[0])
         {case 0:
           var v=param[2],k=param[1],_bN_=1 - custom_attribute(dom,k);
           if(_bN_)
            var _bO_=eval_prop(v),_bP_=caml_call1(_f_[2],dom)[k] = _bO_;
           else
            var _bP_=_bN_;
           return _bP_;
          case 1:
           var v$0=param[2],k$0=param[1],_bQ_=caml_js_from_string(v$0);
           return caml_call1(_f_[2],dom).style[k$0] = _bQ_;
          case 2:return 0;
          default:
           var v$1=param[2],k$1=param[1];
           return caml_call3(_f_[23],dom,k$1,v$1)}}
      return caml_call2(Stdlib_list[15],_bM_,attributes)}
    function _l_(parent,ctx,vdom)
     {switch(vdom[0])
       {case 0:
         var txt=vdom[2];
         return [0,vdom,caml_call2(Document[5],document$0,txt)];
        case 1:
         var
          children=vdom[5],
          attributes=vdom[4],
          tag=vdom[3],
          ns=vdom[2],
          dom=
           caml_string_equal(ns,cst$0)
            ?caml_call2(Document[3],document$0,tag)
            :caml_call3(Document[4],document$0,ns,tag),
          _bF_=function(_bL_){return _l_(dom,ctx,_bL_)},
          children$0=caml_call2(Stdlib_list[17],_bF_,children),
          _bG_=
           function(c){var _bK_=get_dom(c);return caml_call2(_f_[6],dom,_bK_)};
         caml_call2(Stdlib_list[15],_bG_,children$0);
         apply_attributes(dom,attributes);
         return [1,vdom,dom,children$0];
        case 2:
         var child=vdom[3],f=vdom[2],child$0=_l_(parent,ctx,child);
         return [2,vdom,get_dom(child$0),f,child$0];
        case 3:
         var arg=vdom[3],f$0=vdom[2];
         return bmemo(vdom,_l_(parent,ctx,caml_call1(f$0,arg)));
        default:
         var attributes$0=vdom[3],elt=vdom[2];
         try
          {var elt$0=lookup(parent,ctx[1],ctx[3],elt,ctx[2])}
         catch(exn)
          {exn = caml_wrap_exception(exn);
           var
            _bH_=caml_call1(Stdlib_printexc[1],exn),
            _bI_=caml_call1(Stdlib_obj[21][1],elt),
            _bJ_=caml_call1(Stdlib_obj[21][2],_bI_);
           caml_call3(Stdlib_printf[2],_m_,_bJ_,_bH_);
           throw exn}
         apply_attributes(elt$0[1],attributes$0);
         return [4,vdom,elt$0]}}
    function blit(ctx,vdom){return function(_bE_){return _l_(_bE_,ctx,vdom)}}
    function sync_props(to_string,same,set,clear,l1,l2)
     {function _by_(param,_bD_)
       {var k2=_bD_[1],k1=param[1];return caml_string_compare(k1,k2)}
      var
       sort=caml_call1(Stdlib_list[53],_by_),
       l1$0=caml_call1(sort,l1),
       l2$0=caml_call1(sort,l2),
       l1$1=l1$0,
       l2$1=l2$0;
      for(;;)
       {if(l1$1)
         {var _bz_=l1$1[2],_bA_=l1$1[1],_bC_=_bA_[1],_bB_=_bA_[2];
          if(l2$1)
           {var match=l2$1[1],k2=match[1],v2=match[2];
            if(caml_string_lessthan(_bC_,k2))
             {caml_call1(clear,_bC_);var l1$1=_bz_;continue}
            var tl2=l2$1[2];
            if(caml_string_lessthan(k2,_bC_))
             {caml_call2(set,k2,v2);var l2$1=tl2;continue}
            var tl2$0=l2$1[2],v2$0=match[2];
            if(1 - caml_call2(same,_bB_,v2$0))caml_call2(set,k2,v2$0);
            var l1$1=_bz_,l2$1=tl2$0;
            continue}
          caml_call1(clear,_bC_);
          var l1$1=_bz_,l2$1=0;
          continue}
        if(l2$1)
         {var tl2$1=l2$1[2],match$0=l2$1[1],v2$1=match$0[2],k2$0=match$0[1];
          caml_call2(set,k2$0,v2$1);
          var l1$1=0,l2$1=tl2$1;
          continue}
        return 0}}
    function choose(f,param)
     {var param$0=param;
      for(;;)
       {if(param$0)
         {var tl=param$0[2],hd=param$0[1],match=caml_call1(f,hd);
          if(match){var x=match[1];return [0,x,choose(f,tl)]}
          var param$0=tl;
          continue}
        return 0}}
    function sync_attributes(dom,a1,a2)
     {function props(param)
       {if(0 === param[0]){var v=param[2],k=param[1];return [0,[0,k,v]]}
        return 0}
      function set(k,v)
       {if(! caml_string_notequal(k,cst_value$0) && 0 === v[0])
         {var s=v[1];if(caml_string_equal(s,caml_call1(_f_[27],dom)))return 0}
        var _bv_=1 - custom_attribute(dom,k);
        if(_bv_)
         var _bw_=eval_prop(v),_bx_=caml_call1(_f_[2],dom)[k] = _bw_;
        else
         var _bx_=_bv_;
        return _bx_}
      function clear(k)
       {var _bu_=Ojs[17];return caml_call1(_f_[2],dom)[k] = _bu_}
      var _bn_=choose(props,a2);
      sync_props(string_of_prop,same_prop,set,clear,choose(props,a1),_bn_);
      function styles(param)
       {if(1 === param[0]){var v=param[2],k=param[1];return [0,[0,k,[0,v]]]}
        return 0}
      function set$0(k,v)
       {var _bt_=eval_prop(v);return caml_call1(_f_[2],dom).style[k] = _bt_}
      function clear$0(k){return caml_call1(_f_[2],dom).style[k] = ""}
      var _bo_=choose(styles,a2);
      sync_props
       (string_of_prop,same_prop,set$0,clear$0,choose(styles,a1),_bo_);
      function attrs(param)
       {if(3 === param[0]){var v=param[2],k=param[1];return [0,[0,k,v]]}
        return 0}
      function set$1(k,v){return caml_call3(_f_[23],dom,k,v)}
      function clear$1(k){return caml_call2(_f_[22],dom,k)}
      var _bp_=choose(attrs,a2),_bq_=choose(attrs,a1);
      function _br_(s1,s2){return caml_string_equal(s1,s2)}
      return sync_props
              (function(_bs_){return _bs_},_br_,set$1,clear$1,_bq_,_bp_)}
    function _n_(ctrl)
     {var ctrl$0=ctrl;
      for(;;)
       switch(ctrl$0[0])
        {case 0:return 0;
         case 1:
          var children=ctrl$0[3];
          return caml_call2(Stdlib_list[15],_n_,children);
         case 2:var ctrl$1=ctrl$0[4],ctrl$0=ctrl$1;continue;
         case 3:var ctrl$2=ctrl$0[3],ctrl$0=ctrl$2;continue;
         default:var elt=ctrl$0[2];return caml_call1(elt[3],0)}}
    function _o_(ctx,parent,old,vdom)
     {if(vdom === get_vdom(old))return old;
      switch(old[0])
       {case 0:
         var _a0_=old[1];
         if(0 === _a0_[0] && 0 === vdom[0])
          {var s2=vdom[2],dom=old[2],s1=_a0_[2];
           if(caml_string_notequal(s1,s2))caml_call2(_f_[35],dom,s2);
           return [0,vdom,dom]}
         break;
        case 1:
         var _a3_=old[1];
         if(1 === _a3_[0] && 1 === vdom[0])
          {var children=old[3],dom$0=old[2];
           if
            (caml_string_equal(_a3_[3],vdom[3])
             &&
             caml_string_equal(_a3_[2],vdom[2])
             &&
             caml_string_equal(_a3_[1],vdom[1]))
            {var
              old_children=caml_call1(Stdlib_array[12],children),
              new_children=caml_call1(Stdlib_array[12],vdom[5]),
              by_key=caml_call2(Stdlib_hashtbl[1],0,8),
              _a4_=old_children.length - 1 - 1 | 0;
             if(! (_a4_ < 0))
              {var i$1=_a4_;
               for(;;)
                {var
                  k$0=
                   get_vdom(caml_check_bound(old_children,i$1)[1 + i$1])[1];
                 caml_call3(Stdlib_hashtbl[5],by_key,k$0,i$1);
                 var _bh_=i$1 - 1 | 0;
                 if(0 !== i$1){var i$1=_bh_;continue}
                 break}}
             var
              indices=runtime.caml_make_vect(new_children.length - 1,-1),
              _a6_=indices.length - 1 - 1 | 0,
              _a5_=0;
             if(! (_a6_ < 0))
              {var i$0=_a5_;
               for(;;)
                {var k=caml_check_bound(new_children,i$0)[1 + i$0][1];
                 try
                  {var
                    switch$0=0,
                    idx$0=caml_call2(Stdlib_hashtbl[6],by_key,k);
                   switch$0 = 1}
                 catch(_bm_)
                  {_bm_ = caml_wrap_exception(_bm_);
                   if(_bm_ !== Stdlib[8])throw _bm_;
                   var _bk_=_bm_}
                 if(switch$0)
                  {caml_check_bound(indices,i$0)[1 + i$0] = idx$0;
                   caml_call2(Stdlib_hashtbl[10],by_key,k)}
                 var _bg_=i$0 + 1 | 0;
                 if(_a6_ !== i$0){var i$0=_bg_;continue}
                 break}}
             var
              _a7_=
               function(param,i)
                {var
                  to_remove=caml_check_bound(old_children,i)[1 + i],
                  _bl_=get_dom(to_remove);
                 caml_call2(_f_[9],dom$0,_bl_);
                 return _n_(to_remove)};
             caml_call2(Stdlib_hashtbl[12],_a7_,by_key);
             var
              ctrls=[0,0],
              next=[0,caml_call1(_f_[1],Ojs[17])],
              _a8_=new_children.length - 1 - 1 | 0;
             if(! (_a8_ < 0))
              {var i=_a8_;
               for(;;)
                {var idx=caml_check_bound(indices,i)[1 + i];
                 if(0 <= idx)
                  var
                   _a9_=caml_check_bound(new_children,i)[1 + i],
                   c=
                    _o_
                     (ctx,dom$0,caml_check_bound(old_children,idx)[1 + idx],_a9_);
                 else
                  var
                   c=
                    caml_call1
                     (blit(ctx,caml_check_bound(new_children,i)[1 + i]),parent);
                 var _a__=idx < 0?1:0;
                 if(_a__)
                  var move=_a__;
                 else
                  {if(i === (new_children.length - 1 - 1 | 0))
                    var _bc_=idx !== (old_children.length - 1 - 1 | 0)?1:0;
                   else
                    var
                     _bf_=i + 1 | 0,
                     _bc_=
                      caml_check_bound(indices,_bf_)[1 + _bf_] !== (idx + 1 | 0)
                       ?1
                       :0;
                   if(_bc_)
                    var
                     _bd_=next[1],
                     _be_=get_dom(c),
                     move=caml_call1(_f_[12],_be_) !== _bd_?1:0;
                   else
                    var move=_bc_}
                 if(move)
                  {var _a$_=next[1],_ba_=get_dom(c);
                   caml_call3(_f_[7],dom$0,_ba_,_a$_)}
                 next[1] = get_dom(c);
                 ctrls[1] = [0,c,ctrls[1]];
                 var _bb_=i - 1 | 0;
                 if(0 !== i){var i=_bb_;continue}
                 break}}
             var children$0=ctrls[1];
             sync_attributes(dom$0,_a3_[4],vdom[4]);
             return [1,vdom,dom$0,children$0]}}
         break;
        case 2:
         if(2 === vdom[0])
          {var c2=vdom[3],f=vdom[2],c1=old[4],child=_o_(ctx,parent,c1,c2);
           return [2,vdom,get_dom(child),f,child]}
         break;
        case 3:
         var _bi_=old[1];
         if(3 === _bi_[0] && 3 === vdom[0])
          {var a2=vdom[3],f2=vdom[2],c1$0=old[3],a1=_bi_[3],f1=_bi_[2];
           if(f1 === f2 && a1 === a2)return bmemo(vdom,c1$0);
           return bmemo(vdom,_o_(ctx,parent,c1$0,caml_call1(f2,a2)))}
         break;
        default:
         var _bj_=old[1];
         if(4 === _bj_[0] && 4 === vdom[0])
          {var
            a2$0=vdom[3],
            arg2=vdom[2],
            key2=vdom[1],
            elt=old[2],
            a1$0=_bj_[3],
            arg1=_bj_[2],
            key1=_bj_[1];
           if(caml_string_equal(key1,key2))
            {var switch$1=0;
             if(arg1 !== arg2 && ! caml_call1(elt[2],arg2))switch$1 = 1;
             if(! switch$1)
              {sync_attributes(elt[1],a1$0,a2$0);return [4,vdom,elt]}}}}
      var
       x=caml_call1(blit(ctx,vdom),parent),
       _a1_=get_dom(old),
       _a2_=get_dom(x);
      caml_call3(_f_[8],parent,_a2_,_a1_);
      _n_(old);
      return x}
    function sync(ctx,parent,old,vdom)
     {try
       {var _aZ_=_o_(ctx,parent,old,vdom);return _aZ_}
      catch(exn)
       {exn = caml_wrap_exception(exn);
        var _aY_=caml_call1(Stdlib_printexc[1],exn);
        caml_call2(Stdlib_printf[2],_p_,_aY_);
        throw exn}}
    function found(mapper,parent,inner)
     {var mapper$0=mapper,inner$0=inner;
      for(;;)
       switch(inner$0[0])
        {case 2:
          var
           inner$1=inner$0[4],
           f=inner$0[3],
           mapper$2=
            function(mapper,f)
             {function mapper$0(x){return caml_call1(mapper,caml_call1(f,x))}
              return mapper$0},
           mapper$1=mapper$2(mapper$0,f),
           mapper$0=mapper$1,
           inner$0=inner$1;
          continue;
         case 3:var inner$2=inner$0[3],inner$0=inner$2;continue;
         default:return [0,mapper$0,inner$0,parent]}}
    function vdom_of_dom(root,dom)
     {var _aR_=caml_call1(_f_[2],dom),match=caml_call2(Ojs[7],_f_[1],_aR_);
      if(match)
       {var dom$0=match[1];
        if(dom$0 === get_dom(root))
         {var _aS_=0;return found(function(_aX_){return _aX_},_aS_,root)}
        var parent=vdom_of_dom(root,caml_call1(_f_[36],dom$0));
        if(parent)
         {var _aT_=parent[2],_aU_=parent[1];
          switch(_aT_[0])
           {case 1:
             var children=_aT_[3];
             try
              {var
                _aV_=function(c){return get_dom(c) === dom$0?1:0},
                c=caml_call2(Stdlib_list[36],_aV_,children)}
             catch(_aW_)
              {_aW_ = caml_wrap_exception(_aW_);
               if(_aW_ === Stdlib[8])throw [0,Assert_failure,_r_];
               throw _aW_}
             return found(_aU_,parent,c);
            case 4:return 0;
            default:throw [0,Assert_failure,_q_]}}
        return 0}
      return 0}
    function mouse_event(e)
     {var
       _aK_=caml_call1(_g_[18],e),
       _aL_=caml_call1(_g_[17],e),
       _aM_=caml_call1(_g_[16],e),
       _aN_=caml_call1(_g_[15],e),
       _aO_=caml_call1(_g_[10],e),
       _aP_=caml_call1(_g_[9],e),
       _aQ_=caml_call1(_g_[8],e);
      return [0,caml_call1(_g_[7],e),_aQ_,_aP_,_aO_,_aN_,_aM_,_aL_,_aK_]}
    function key_event(e)
     {var
       _aH_=caml_call1(_g_[18],e),
       _aI_=caml_call1(_g_[17],e),
       _aJ_=caml_call1(_g_[16],e);
      return [0,caml_call1(_g_[19],e),_aJ_,_aI_,_aH_]}
    function dom(x){return x[1]}
    function process(x){return x[2]}
    function get$0(x){return caml_call1(x[3],0)}
    function after_redraw$0(x){return x[4]}
    function cmd(h){return [0,[0,h,0],empty[2]]}
    function custom$0(h){return [0,empty[1],[0,h,0]]}
    function merge(envs)
     {function _aC_(e){return e[2]}
      var
       _aD_=caml_call2(Stdlib_list[17],_aC_,envs),
       _aE_=caml_call1(Stdlib_list[13],_aD_);
      function _aF_(e){return e[1]}
      var _aG_=caml_call2(Stdlib_list[17],_aF_,envs);
      return [0,caml_call1(Stdlib_list[13],_aG_),_aE_]}
    var global=[0,empty];
    function register(e){global[1] = merge([0,e,[0,global[1],0]]);return 0}
    function run$0(opt,container,param)
     {var
       view=param[3],
       update=param[2],
       match=param[1],
       cmd0=match[2],
       model0=match[1];
      if(opt)var sth=opt[1],env=sth;else var env=empty;
      var env$0=merge([0,env,[0,global[1],0]]);
      if(container)
       var
        container$0=container[1],
        container$1=container$0,
        container_created=0;
      else
       var
        container$2=caml_call2(Document[3],document$0,cst_div$0),
        container$1=container$2,
        container_created=1;
      var post_redraw=[0,0];
      function after_redraw(f){post_redraw[1] = [0,f,post_redraw[1]];return 0}
      function flush(param)
       {var l=caml_call1(Stdlib_list[9],post_redraw[1]);
        post_redraw[1] = 0;
        function _aB_(f){return caml_call1(f,0)}
        return caml_call2(Stdlib_list[15],_aB_,l)}
      var
       process_custom_fwd=
        [0,function(param,_aA_){throw [0,Assert_failure,_s_]}],
       _x_=env$0[2],
       ctx=
        [0,
         function(elt,evt){return caml_call2(process_custom_fwd[1],elt,evt)},
         _x_,
         after_redraw];
      function view$0(model)
       {try
         {var _az_=caml_call1(view,model);return _az_}
        catch(exn)
         {exn = caml_wrap_exception(exn);
          var _ay_=caml_call1(Stdlib_printexc[1],exn);
          caml_call2(Stdlib_printf[2],_t_,_ay_);
          throw exn}}
      var x=caml_call1(blit(ctx,view$0(model0)),container$1);
      caml_call2(_e_[11],window,flush);
      var model=[0,model0],current=[0,[0,x]],pending_redraw=[0,0];
      function redraw(param)
       {var _ax_=current[1];
        if(_ax_)
         {var root=_ax_[1];
          pending_redraw[1] = 0;
          var x=sync(ctx,container$1,root,view$0(model[1]));
          current[1] = [0,x];
          return flush(0)}
        return 0}
      function process(msg)
       {try
         {var
           match=caml_call2(update,model[1],msg),
           cmd=match[2],
           new_model=match[1];
          model[1] = new_model;
          run(env$0[1],process,cmd);
          var
           _av_=1 - pending_redraw[1],
           _aw_=
            _av_
             ?(pending_redraw[1] = 1,caml_call2(_e_[11],window,redraw))
             :_av_;
          return _aw_}
        catch(exn)
         {exn = caml_wrap_exception(exn);
          var _au_=caml_call1(Stdlib_printexc[1],exn);
          caml_call2(Stdlib_printf[2],_u_,_au_);
          throw exn}}
      var _y_=get_dom(x);
      caml_call2(_f_[6],container$1,_y_);
      function onevent(evt)
       {var ty=caml_call1(_g_[5],evt);
        try
         {var
           _J_=caml_call1(_g_[3],evt),
           tgt=caml_call1(_f_[1],_J_),
           _K_=current[1],
           _L_=
            function(root)
             {var param$1=vdom_of_dom(root,tgt),param$0=param$1;
              a:
              for(;;)
               {if(param$0)
                 {var _am_=param$0[2],switch$1=0,_an_=param$0[1];
                  switch(_am_[0])
                   {case 1:
                     var _ao_=_am_[1];
                     if(1 === _ao_[0]){var attributes=_ao_[4];switch$1 = 1}
                     break;
                    case 4:
                     var _at_=_am_[1];
                     if(4 === _at_[0]){var attributes=_at_[3];switch$1 = 1}
                     break
                    }
                  if(switch$1)
                   {var
                     parent=param$0[3],
                     _ap_=caml_string_equal(ty,cst_focus$0);
                    if(_ap_)
                     var
                      _aq_=
                       function(param)
                        {if(2 === param[0] && 6 === param[1][0])return 1;return 0},
                      _ar_=caml_call2(Stdlib_list[31],_aq_,attributes);
                    else
                     var _ar_=_ap_;
                    if(_ar_)
                     {var _as_=caml_call1(_f_[27],tgt);
                      caml_call3(_f_[23],tgt,prev_value_attribute,_as_)}
                    var param=attributes;
                    for(;;)
                     {if(param)
                       {var
                         tl=param[2],
                         hd=param[1],
                         switch$0=caml_string_compare(ty,cst_focus),
                         switch$2=0;
                        if(0 <= switch$0)
                         {if(0 < switch$0)
                           {if(caml_string_notequal(ty,cst_input$0))
                             {if(caml_string_notequal(ty,cst_keydown))
                               {if(caml_string_notequal(ty,cst_mousedown))
                                 {if(! caml_string_notequal(ty,cst_mousemove) && 2 === hd[0])
                                   {var _Y_=hd[1];
                                    if(9 === _Y_[0])
                                     {var f=_Y_[1],_Z_=[0,caml_call1(f,mouse_event(evt))];
                                      switch$2 = 1}}}
                                else
                                 if(2 === hd[0])
                                  {var ___=hd[1];
                                   if(0 === ___[0])
                                    {var f$0=___[1],_Z_=[0,caml_call1(f$0,mouse_event(evt))];
                                     switch$2 = 1}}}
                              else
                               if(2 === hd[0])
                                {var _$_=hd[1],switch$3=0;
                                 switch(_$_[0])
                                  {case 10:
                                    var f$1=_$_[1],_aa_=[0,caml_call1(f$1,key_event(evt))];
                                    break;
                                   case 11:
                                    var
                                     f$2=_$_[1],
                                     r=caml_call1(f$2,key_event(evt)),
                                     r$0=r?(caml_call1(_g_[4],evt),r):0,
                                     _aa_=r$0;
                                    break;
                                   default:switch$3 = 1}
                                 if(! switch$3){var _Z_=_aa_;switch$2 = 1}}}
                            else
                             if(2 === hd[0])
                              {var _ab_=hd[1];
                               if(5 === _ab_[0])
                                {var
                                  f$3=_ab_[1],
                                  _Z_=[0,caml_call1(f$3,caml_call1(_f_[27],tgt))];
                                 switch$2 = 1}}}
                          else
                           if(2 === hd[0])
                            {var _ac_=hd[1];
                             if(3 === _ac_[0]){var msg=_ac_[1],_Z_=[0,msg];switch$2 = 1}}}
                        else
                         if(caml_string_notequal(ty,cst_blur))
                          {if(caml_string_notequal(ty,cst_change))
                            {if(caml_string_notequal(ty,cst_click))
                              {if(caml_string_notequal(ty,cst_contextmenu))
                                {if(! caml_string_notequal(ty,cst_dblclick) && 2 === hd[0])
                                  {var _ad_=hd[1];
                                   if(2 === _ad_[0])
                                    {var f$4=_ad_[1],_Z_=[0,caml_call1(f$4,mouse_event(evt))];
                                     switch$2 = 1}}}
                               else
                                if(2 === hd[0])
                                 {var _ae_=hd[1];
                                  if(12 === _ae_[0])
                                   {var f$5=_ae_[1];
                                    caml_call1(_g_[4],evt);
                                    var _Z_=[0,caml_call1(f$5,mouse_event(evt))];
                                    switch$2 = 1}}}
                             else
                              if(2 === hd[0])
                               {var _af_=hd[1],switch$4=0;
                                switch(_af_[0])
                                 {case 1:
                                   var f$6=_af_[1],_ag_=[0,caml_call1(f$6,mouse_event(evt))];
                                   break;
                                  case 8:
                                   var
                                    f$7=_af_[1],
                                    _ag_=[0,caml_call1(f$7,caml_call1(_f_[32],tgt))];
                                   break;
                                  default:switch$4 = 1}
                                if(! switch$4){var _Z_=_ag_;switch$2 = 1}}}
                           else
                            if(2 === hd[0])
                             {var _ah_=hd[1];
                              if(7 === _ah_[0])
                               {var
                                 f$8=_ah_[1],
                                 _Z_=[0,caml_call1(f$8,caml_call1(_f_[31],tgt))];
                                switch$2 = 1}}}
                         else
                          if(2 === hd[0])
                           {var _ai_=hd[1],switch$5=0;
                            switch(_ai_[0])
                             {case 4:var msg$0=_ai_[1],_aj_=[0,msg$0];switch$5 = 1;break;
                              case 6:
                               var
                                f$9=_ai_[1],
                                curr_value=caml_call1(_f_[27],tgt),
                                _ak_=1 - caml_call2(_f_[20],tgt,prev_value_attribute),
                                changed=
                                 _ak_
                                 ||
                                 caml_string_notequal
                                  (caml_call2(_f_[21],tgt,prev_value_attribute),curr_value),
                                _al_=changed?[0,caml_call1(f$9,curr_value)]:0,
                                _aj_=_al_;
                               switch$5 = 1;
                               break
                              }
                            if(switch$5){var _Z_=_aj_;switch$2 = 1}}
                        var res=switch$2?_Z_:0;
                        if(! res){var param=tl;continue}
                        var match=res}
                      else
                       var match=0;
                      if(match)
                       {var msg$1=match[1];return process(caml_call1(_an_,msg$1))}
                      var param$0=parent;
                      continue a}}}
                return 0}};
          caml_call2(Stdlib_option[9],_L_,_K_);
          var
           _M_=caml_string_equal(ty,cst_input$1),
           _N_=_M_ || caml_string_equal(ty,cst_blur$0);
          if(_N_)
           var
            f=
             function(param)
              {var _Q_=current[1];
               function _R_(root)
                {var match=vdom_of_dom(root,tgt);
                 if(match)
                  {var _S_=match[2];
                   if(1 === _S_[0])
                    {var _T_=_S_[1];
                     if(1 === _T_[0])
                      {var
                        attributes=_T_[4],
                        _U_=
                         function(param)
                          {if(0 === param[0])
                            {var _V_=param[1];
                             if(caml_string_notequal(_V_,cst_checked))
                              {if(! caml_string_notequal(_V_,cst_value$1))
                                {var _W_=param[2];
                                 if(0 === _W_[0])
                                  {var s2=_W_[1];
                                   if(caml_string_notequal(s2,caml_call1(_f_[27],tgt)))
                                    return caml_call2(_f_[28],tgt,s2)}}}
                             else
                              {var _X_=param[2];
                               if(3 === _X_[0])
                                {var s2$0=_X_[1];return caml_call2(_f_[33],tgt,s2$0)}}}
                           return 0};
                       return caml_call2(Stdlib_list[15],_U_,attributes)}}}
                 return 0}
               return caml_call2(Stdlib_option[9],_R_,_Q_)},
            _O_=pending_redraw[1]?after_redraw(f):f(0),
            _P_=_O_;
          else
           var _P_=_N_;
          return _P_}
        catch(exn)
         {exn = caml_wrap_exception(exn);
          var _I_=caml_call1(Stdlib_printexc[1],exn);
          return caml_call3(Stdlib_printf[2],_v_,ty,_I_)}}
      function process_custom(tgt,event)
       {var _D_=current[1];
        function _E_(root)
         {var match=vdom_of_dom(root,tgt);
          if(match)
           {var _F_=match[2];
            if(4 === _F_[0])
             {var _G_=_F_[1];
              if(4 === _G_[0])
               {var
                 attributes=_G_[3],
                 mapper=match[1],
                 select_handler=
                  function(param)
                   {if(2 === param[0])
                     {var h=param[1];return caml_call1(event[1],h)}
                    return 0},
                 msgs=caml_call2(Stdlib_list[20],select_handler,attributes),
                 _H_=function(msg){return process(caml_call1(mapper,msg))};
                return caml_call2(Stdlib_list[15],_H_,msgs)}}}
          return 0}
        return caml_call2(Stdlib_option[9],_E_,_D_)}
      process_custom_fwd[1] = process_custom;
      function _z_(param)
       {var capture=param[2],event=param[1];
        return caml_call4(_f_[16],container$1,event,onevent,capture)}
      var listeners=caml_call2(Stdlib_list[17],_z_,_w_);
      run(env$0[1],process,cmd0);
      function dispose(param)
       {var _A_=current[1];
        function _B_(root)
         {current[1] = 0;
          _n_(root);
          function _C_(f){return caml_call1(f,0)}
          caml_call2(Stdlib_list[15],_C_,listeners);
          return container_created
                  ?caml_call1(_f_[63],container$1)
                  :caml_call2(_f_[40],container$1,cst$1)}
        return caml_call2(Stdlib_option[9],_B_,_A_)}
      return [0,
              container$1,
              process,
              function(param){return model[1]},
              after_redraw,
              dispose]}
    function dispose(param){var dispose=param[5];return caml_call1(dispose,0)}
    var
     Vdom_blit=
      [0,
       [0,send_msg],
       [0,make,parent,send_event,after_redraw],
       cmd,
       custom$0,
       merge,
       empty,
       register,
       run$0,
       dispose,
       dom,
       process,
       get$0,
       after_redraw$0];
    caml_register_global(835,Vdom_blit,"Vdom_blit");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJ2ZG9tLmNtYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJuYW1lcyI6W10sInNvdXJjZXMiOltdLCJtYXBwaW5ncyI6Ijs7SSIsInNvdXJjZXNDb250ZW50IjpbXX0=
