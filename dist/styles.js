(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/app/styles.scss":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--13-1!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/dist/cjs.js??ref--13-3!./src/app/styles.scss ***!
  \****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "/* http://meyerweb.com/eric/tools/css/reset/\n   v2.0 | 20110126\n   License: none (public domain)\n*/\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n@font-face {\n  font-family: didot;\n  src: url(\"/assets/fonts/didot/Didot.otf\") format(\"otf\");\n}\n/*....................................SCSS VARIABLES..................................*/\n/*....................................................................................*/\n/*.................................................................................*/\n/*$break-large-desktop: 2500px;*/\n/*$break-infinite: 500000px;*/\n/*....................................SCSS MIXINS..................................*/\n/*....................................General settings..................................*/\n/*.....................TEXT MARK STYLES......................*/\n::-moz-selection {\n  background: transparent;\n  text-shadow: none;\n}\n::selection {\n  background: transparent;\n  text-shadow: none;\n}\n/*.....................ACTIVE CLASSES......................*/\n.active {\n  opacity: 0.1;\n}\n.blacked_text {\n  color: #FFFFFF;\n}\n.blacked_path {\n  fill: #FFFFFF;\n}\n.blacked_background {\n  background-color: #000000;\n}\n/*....................HIDING SCROLLBAR.....................*/\n::-webkit-scrollbar {\n  display: none;\n}\n* {\n  -webkit-overflow-scrolling: touch;\n}\n*, *:before, *:after {\n  box-sizing: inherit;\n  outline: 0;\n}\n/*.....................GENERAL STYLES......................*/\nhtml {\n  font-family: helvetica;\n  width: 100%;\n  margin: 0, 0;\n  padding: 0, 0;\n  box-sizing: border-box;\n  background-color: transparent;\n}\nbody {\n  width: 100vw;\n  height: auto;\n  margin: 0, 0;\n  padding: 0, 0;\n  display: block;\n  position: relative;\n  background: #FFFFFF;\n}\np, a, li {\n  font-size: 10px;\n  list-style-type: none;\n  letter-spacing: 1px;\n  color: #000000;\n}\ninput, textarea, select, a, li {\n  text-decoration: none;\n}\na {\n  cursor: pointer;\n  font-size: 10px;\n  line-height: 26px;\n  font-family: helvetica;\n  letter-spacing: 1px;\n  /*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/\n}\n@media only screen and (min-width: 0px) and (max-width: 767px) {\n  a {\n    font-size: 12px;\n    line-height: 17px;\n  }\n}\n.a-hover {\n  color: #000000;\n  transition: color 0.4s ease;\n  -webkit-transition: color 0.4s ease;\n  -moz-transition: color 0.4s ease;\n  -ms-transition: color 0.4s ease;\n  -o-transition: color 0.4s ease;\n}\n.a-hover:hover {\n  color: #F5F5F5;\n  /*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/\n  /*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/\n  /*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/\n}\n@media only screen and (min-width: 0px) and (max-device-width: 767px) {\n  .a-hover:hover {\n    color: #000000 !important;\n  }\n}\n@media only screen and (min-device-width: 768px) and (max-device-width: 1022px) and (orientation: portrait) {\n  .a-hover:hover {\n    color: #000000 !important;\n  }\n}\n@media only screen and (min-device-width: 768px) and (max-device-width: 1022px) and (orientation: landscape) {\n  .a-hover:hover {\n    color: #000000 !important;\n  }\n}\np {\n  font-size: 10px;\n  line-height: 26px;\n  font-family: helvetica;\n  letter-spacing: 1px;\n  /*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/\n}\n@media only screen and (min-width: 0px) and (max-width: 767px) {\n  p {\n    font-size: 12px;\n    line-height: 17px;\n  }\n}\nh1 {\n  font-size: 30px;\n  line-height: 50px;\n  font-family: \"didot\";\n  letter-spacing: 2px;\n  /*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/\n}\n@media only screen and (min-width: 0px) and (max-width: 767px) {\n  h1 {\n    font-size: 25px;\n  }\n}\nh2 {\n  font-size: 22px;\n  line-height: 36px;\n  font-family: \"didot\";\n  letter-spacing: 0px;\n  /*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/\n}\n@media only screen and (min-width: 0px) and (max-width: 767px) {\n  h2 {\n    font-size: 20px;\n    line-height: 36px;\n  }\n}\n.pop {\n  display: none;\n  width: 100vw;\n  height: 50px;\n  position: fixed;\n  bottom: 0;\n  z-index: 14;\n  border-top: 1px solid black;\n  background: rgba(255, 255, 255, 0.2);\n  /*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/\n}\n@media only screen and (min-width: 0px) and (max-width: 767px) {\n  .pop {\n    display: block;\n  }\n}\n/*.........................MAIN............................*/\nmain {\n  padding: 0 0px;\n  min-height: 300px;\n  /*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/\n  /* side form */\n}\n@media only screen and (min-width: 0px) and (max-width: 767px) {\n  main {\n    height: 100vh;\n  }\n}\nmain .view-side-form .side-form {\n  position: absolute;\n  z-index: 100;\n  top: 0;\n  right: 0;\n  width: 80%;\n  height: 100%;\n  overflow: auto;\n  background: #fff;\n  padding: 20px;\n  border-left: 1px solid #e0e0e0;\n}\ntable {\n  width: 100vw;\n  height: 100vh;\n}\ntable tr td {\n  vertical-align: middle;\n}\n", "",{"version":3,"sources":["/Users/elia/Documents/web/aleali/src/app/styles/reset.scss","styles.scss","/Users/elia/Documents/web/aleali/src/app/styles/fonts.scss","/Users/elia/Documents/web/aleali/src/app/styles/variables.scss","/Users/elia/Documents/web/aleali/src/app/styles/mixins.scss","/Users/elia/Documents/web/aleali/src/app/styles/general.scss"],"names":[],"mappings":"AAAA;;;CCGC;ADED;;;;;;;;;;;;;EAaC,SAAS;EACT,UAAU;EACV,SAAS;EACT,eAAe;EACf,aAAa;EACb,wBAAwB;ACAzB;ADEA,gDAAA;AACA;;EAEC,cAAc;ACCf;ADCA;EACC,cAAc;ACEf;ADAA;EACC,gBAAgB;ACGjB;ADDA;EACC,YAAY;ACIb;ADFA;;EAEC,WAAW;EACX,aAAa;ACKd;ADHA;EACC,yBAAyB;EACzB,iBAAiB;ACMlB;ACnDA;EACI,kBAAkB;EAClB,uDAAuD;ADsD3D;AEzDA,uFAAA;AAgGA,uFAAA;AChGA,oFAAA;AAUA,gCAAA;AACA,6BAAA;AAoRA,oFAAA;AC/RA,yFAAA;AAKA,8DAAA;AAEA;EACI,uBAAuB;EACvB,iBAAiB;AJ6DrB;AIzDA;EACI,uBAAuB;EACvB,iBAAiB;AJ4DrB;AIpDA,4DAAA;AAEA;EACE,YAAW;AJsDb;AI7CA;EACE,cFaa;AFmCf;AI7CA;EACE,aFSa;AFuCf;AI9CA;EACE,yBFKa;AF4Cf;AI1CA,4DAAA;AAEA;EACI,aAAa;AJ4CjB;AIzCA;EACE,iCAAiC;AJ4CnC;AIzCA;EACE,mBAAmB;EACnB,UAAS;AJ4CX;AItCA,4DAAA;AAEA;EACE,sBAAsB;EACtB,WAAW;EACX,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,6BAA6B;AJwC/B;AIpCA;EACE,YAAY;EACZ,YAAY;EACZ,YAAY;EACZ,aAAa;EACb,cAAc;EACd,kBAAkB;EAClB,mBFtCa;AF6Ef;AIlCA;EACE,eFhFgB;EEiFhB,qBAAqB;EACrB,mBFvDkB;EEwDlB,cFhDa;AFqFf;AIjCA;EACE,qBAAqB;AJoCvB;AIjCA;EACE,eAAc;EDwad,eDpgBgB;ECqgBhB,iBDlfkB;ECmflB,sBD3fuB;EC4fvB,mBDxe2B;EC9B7B;;IHqII;AACJ;AG7GI;ECiEJ;ID8aI,eDpgBqB;ICqgBrB,iBDlfuB;EFqHzB;AACF;AI9CA;EDgUE,cD7Xa;EC8Xb,2BAAiD;EACjD,mCAAiD;EACjD,gCAAiD;EACjD,+BAAiD;EACjD,8BAAiD;AH9QnD;AGiRE;EACE,cD/Xe;ECzCnB;;IH4JI;EG5JJ;;IH+JI;EG/JJ;;IHkKI;AACJ;AG/HI;EAmYF;IAGM,yBAAwB;EHlQ9B;AACF;AGxII;EAsYF;IAMM,yBAAwB;EH/P9B;AACF;AGjJI;EAyYF;IASM,yBAAwB;EH5P9B;AACF;AIlFA;EDgaE,eDpgBgB;ECqgBhB,iBDlfkB;ECmflB,sBD3fuB;EC4fvB,mBDxe2B;EC9B7B;;IH8LI;AACJ;AGtKI;EC0EJ;IDqaI,eDpgBqB;ICqgBrB,iBDlfuB;EF8KzB;AACF;AI/FA;ED6XE,eDxegB;ECyehB,iBDtdmB;ECudnB,oBD/dsB;ECgetB,mBD5cqB;EC3BvB;;IH+MI;AACJ;AGvLI;EC8EJ;IDkYI,eDxesB;EFoNxB;AACF;AI3GA;EDkYE,eDhfgB;ECifhB,iBD9dmB;EC+dnB,oBDvesB;ECwetB,mBDpdqB;EC5BvB;;IH+NI;AACJ;AGvMI;ECkFJ;IDuYI,eDhfsB;ICiftB,iBD9dwB;EFiN1B;AACF;AItHA;EACE,aAAa;EACb,YAAY;EACZ,YAAY;EACZ,eAAe;EACf,SAAS;EACT,WFxDO;EEyDP,2BAA2B;EAC3B,oCAAiC;EDzHnC;;IHoPI;AACJ;AG5NI;ECwFJ;IAUI,cAAa;EJ+Hf;AACF;AI1HA,4DAAA;AACA;EACI,cAAc;EACd,iBAAiB;EDpIrB;;IHmQI;EI1HA,cAAA;AJ4HJ;AG5OI;ECyGJ;IAIM,aAAY;EJoIhB;AACF;AIzIA;EAUY,kBAAkB;EAClB,YAAY;EACZ,MAAM;EACN,QAAQ;EACR,UAAU;EACV,YAAY;EACZ,cAAc;EACd,gBAAgB;EAChB,aAAa;EACb,8BAA8B;AJmI1C;AIzHA;EACE,YAAY;EACZ,aAAa;AJ4Hf;AI9HA;EAKM,sBAAsB;AJ6H5B","file":"styles.scss","sourcesContent":["/* http://meyerweb.com/eric/tools/css/reset/\n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n","/* http://meyerweb.com/eric/tools/css/reset/\n   v2.0 | 20110126\n   License: none (public domain)\n*/\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol, ul {\n  list-style: none;\n}\n\nblockquote, q {\n  quotes: none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n@font-face {\n  font-family: didot;\n  src: url(\"/assets/fonts/didot/Didot.otf\") format(\"otf\");\n}\n\n/*....................................SCSS VARIABLES..................................*/\n/*....................................................................................*/\n/*.................................................................................*/\n/*$break-large-desktop: 2500px;*/\n/*$break-infinite: 500000px;*/\n/*....................................SCSS MIXINS..................................*/\n/*....................................General settings..................................*/\n/*.....................TEXT MARK STYLES......................*/\n::-moz-selection {\n  background: transparent;\n  text-shadow: none;\n}\n\n::selection {\n  background: transparent;\n  text-shadow: none;\n}\n\n/*.....................ACTIVE CLASSES......................*/\n.active {\n  opacity: 0.1;\n}\n\n.blacked_text {\n  color: #FFFFFF;\n}\n\n.blacked_path {\n  fill: #FFFFFF;\n}\n\n.blacked_background {\n  background-color: #000000;\n}\n\n/*....................HIDING SCROLLBAR.....................*/\n::-webkit-scrollbar {\n  display: none;\n}\n\n* {\n  -webkit-overflow-scrolling: touch;\n}\n\n*, *:before, *:after {\n  box-sizing: inherit;\n  outline: 0;\n}\n\n/*.....................GENERAL STYLES......................*/\nhtml {\n  font-family: helvetica;\n  width: 100%;\n  margin: 0, 0;\n  padding: 0, 0;\n  box-sizing: border-box;\n  background-color: transparent;\n}\n\nbody {\n  width: 100vw;\n  height: auto;\n  margin: 0, 0;\n  padding: 0, 0;\n  display: block;\n  position: relative;\n  background: #FFFFFF;\n}\n\np, a, li {\n  font-size: 10px;\n  list-style-type: none;\n  letter-spacing: 1px;\n  color: #000000;\n}\n\ninput, textarea, select, a, li {\n  text-decoration: none;\n}\n\na {\n  cursor: pointer;\n  font-size: 10px;\n  line-height: 26px;\n  font-family: helvetica;\n  letter-spacing: 1px;\n  /*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/\n}\n\n@media only screen and (min-width: 0px) and (max-width: 767px) {\n  a {\n    font-size: 12px;\n    line-height: 17px;\n  }\n}\n\n.a-hover {\n  color: #000000;\n  transition: color 0.4s ease;\n  -webkit-transition: color 0.4s ease;\n  -moz-transition: color 0.4s ease;\n  -ms-transition: color 0.4s ease;\n  -o-transition: color 0.4s ease;\n}\n\n.a-hover:hover {\n  color: #F5F5F5;\n  /*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/\n  /*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/\n  /*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/\n}\n\n@media only screen and (min-width: 0px) and (max-device-width: 767px) {\n  .a-hover:hover {\n    color: #000000 !important;\n  }\n}\n\n@media only screen and (min-device-width: 768px) and (max-device-width: 1022px) and (orientation: portrait) {\n  .a-hover:hover {\n    color: #000000 !important;\n  }\n}\n\n@media only screen and (min-device-width: 768px) and (max-device-width: 1022px) and (orientation: landscape) {\n  .a-hover:hover {\n    color: #000000 !important;\n  }\n}\n\np {\n  font-size: 10px;\n  line-height: 26px;\n  font-family: helvetica;\n  letter-spacing: 1px;\n  /*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/\n}\n\n@media only screen and (min-width: 0px) and (max-width: 767px) {\n  p {\n    font-size: 12px;\n    line-height: 17px;\n  }\n}\n\nh1 {\n  font-size: 30px;\n  line-height: 50px;\n  font-family: \"didot\";\n  letter-spacing: 2px;\n  /*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/\n}\n\n@media only screen and (min-width: 0px) and (max-width: 767px) {\n  h1 {\n    font-size: 25px;\n  }\n}\n\nh2 {\n  font-size: 22px;\n  line-height: 36px;\n  font-family: \"didot\";\n  letter-spacing: 0px;\n  /*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/\n}\n\n@media only screen and (min-width: 0px) and (max-width: 767px) {\n  h2 {\n    font-size: 20px;\n    line-height: 36px;\n  }\n}\n\n.pop {\n  display: none;\n  width: 100vw;\n  height: 50px;\n  position: fixed;\n  bottom: 0;\n  z-index: 14;\n  border-top: 1px solid black;\n  background: rgba(255, 255, 255, 0.2);\n  /*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/\n}\n\n@media only screen and (min-width: 0px) and (max-width: 767px) {\n  .pop {\n    display: block;\n  }\n}\n\n/*.........................MAIN............................*/\nmain {\n  padding: 0 0px;\n  min-height: 300px;\n  /*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/\n  /* side form */\n}\n\n@media only screen and (min-width: 0px) and (max-width: 767px) {\n  main {\n    height: 100vh;\n  }\n}\n\nmain .view-side-form .side-form {\n  position: absolute;\n  z-index: 100;\n  top: 0;\n  right: 0;\n  width: 80%;\n  height: 100%;\n  overflow: auto;\n  background: #fff;\n  padding: 20px;\n  border-left: 1px solid #e0e0e0;\n}\n\ntable {\n  width: 100vw;\n  height: 100vh;\n}\n\ntable tr td {\n  vertical-align: middle;\n}\n","\n@font-face {\n    font-family: didot;\n    src: url('/assets/fonts/didot/Didot.otf') format('otf');\n}\n","/*....................................SCSS VARIABLES..................................*/\n\n\n// ........................................................FONT WEIGHTS\n$font-weight-light: 300;\n$font-weight-regular: 400;\n$font-weight-heavy: 900;\n\n\n// ........................................................FONT SIZES\n$font-size-h1:30px;\n$font-size-h2:22px;\n$font-size-h3:18px;\n$font-size-p: 10px;\n\n$font-size-h1-mobile: 25px;\n$font-size-h2-mobile: 20px;\n$font-size-h3-mobile: 18px;\n$font-size-p-mobile: 12px;\n\n// ........................................................FONT FAMILIES\n$font-family-h1: 'didot';\n$font-family-h2: 'didot';\n$font-family-h3: 'didot';\n$font-family-p: helvetica;\n\n\n\n// ........................................................FONT LINEHEIGHTS\n$line-height-h1: 50px;\n$line-height-h2: 36px;\n$line-height-h3: 30px;\n$line-height-p: 26px;\n\n$line-height-h1-mobile: 40px;\n$line-height-h2-mobile: 36px;\n$line-height-h3-mobile: 20px;\n$line-height-p-mobile: 17px;\n\n\n$letter-spacing: 1px;\n$letter-spacing-h1: 2px;\n$letter-spacing-h2: 0px;\n$letter-spacing-h3: 1px;\n$letter-spacing-paragraph:1px;\n\n\n// ........................................................COLORS\n$black: #000000;\n$white: #FFFFFF;\n$yellow: #ede611;\n$green: #00FF00;\n$red:#FF0000;\n$pink:#f7c0cd;\n$grey:#a8a8a8;\n$light-grey:#F5F5F5;\n\n\n// ........................................................MARGINS\n$margin-sides: 25px;\n$margin-bottom: 35px;\n$margin-top: 150px;\n$margin-sides-mobile:10px;\n$margin-left-paragraph:5px;\n$margin-top-li:100px;\n$margin-top-p:20px;\n\n// ........................................................TRANSITION TIMINGS\n$transition-extreme-slow: 1.4s;\n$transition-slow: .6s;\n$transition-medium: .4s;\n$transition-fast: .2s;\n\n\n\n// ........................................................Z-INDEXES\n$z-loader:15;\n$z-pop:14;\n$z-nav:13;\n$z-share:13;\n\n$z-clickOut: 12;\n$z-nav:10;\n$z-credits:8;\n$z-feed:7;\n\n$z-detail-li:4;\n$z-detail-cover:3;\n\n\n\n$z-logo:0;\n\n\n\n\n/*....................................................................................*/\n","/*.................................................................................*/\n//---------------------------------------------------------------MEDIA QUERIES---------------------------------------------------------------------\n$break-phone: 767px;\n$break-phone-landscape: 767px;\n$break-tablet: 1022px;\n$break-tablet-landscape: 1024px;\n$break-laptop-small: 1280px;\n$break-laptop-medium: 1440px;\n$break-laptop-large: 1920px;\n$break-desktop: 50000px;\n/*$break-large-desktop: 2500px;*/\n/*$break-infinite: 500000px;*/\n\n@mixin respond-to($media) {\n/*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/\n  @if $media == desktop {\n    @media only screen and (min-width: $break-laptop-large + 1) and (max-width: $break-desktop) { @content; }\n  }\n  @else if $media == laptop-large {\n    @media only screen and (min-width: $break-laptop-medium + 1) and (max-width: $break-laptop-large) { @content; }\n  }\n  @else if $media == laptop-medium {\n    @media only screen and (min-width: $break-laptop-small + 1) and (max-width: $break-laptop-medium) { @content; }\n  }\n  @else if $media == laptop-small {\n    @media only screen and (min-width: $break-tablet + 1) and (max-width: $break-laptop-small) { @content; }\n  }\n\n  ////////////|||||||||||..just changed the tablet media query below because it was not reading the landscape view: 1024px is the tablet landscape width..||||||||||||||\\\\\\\\\\\\\\\\\\\\\n\n  @else if $media == tablet-landscape {\n    @media only screen and (min-width: $break-phone + 1) and (max-width: $break-tablet-landscape) and (orientation: landscape) { @content; }\n  }\n  @else if $media == tablet-portrait {\n    @media only screen and (min-width: $break-phone + 1) and (max-width: $break-tablet) and (orientation: portrait) { @content; }\n  }\n  @else if $media == phone {\n    @media only screen and (min-width: 0px) and (max-width: $break-phone) { @content; }\n  }\n\n  //These are only for the real device\n  @else if $media == tablet-landscape-device {\n    @media only screen and (min-device-width: $break-phone + 1) and (max-device-width: $break-tablet) and (orientation: landscape) { @content; }\n  }\n  @else if $media == tablet-portrait-device {\n    @media only screen and (min-device-width: $break-phone + 1) and (max-device-width: $break-tablet) and (orientation: portrait) { @content; }\n  }\n  @else if $media == phone-device {\n    @media only screen and (min-width: 0px) and (max-device-width: $break-phone) { @content; }\n  }\n  @else if $media == phone-landscape-device {\n        @media only screen and (min-width: 0px) and (max-width: $break-phone) and (orientation: landscape) { @content; }\n      }\n}\n\n\n\n\n\n\n\n\n\n@mixin hover-effect-fill($color, $hover, $type){\n\n\n  @if $type == 'fill' {\n\n    svg, g, path, rect, line{\n      fill: $color;\n      transition:         fill $transition-medium ease;\n      -webkit-transition: fill $transition-medium ease;\n      -moz-transition:    fill $transition-medium ease;\n      -ms-transition:     fill $transition-medium ease;\n      -o-transition:      fill $transition-medium ease;\n\n    }\n\n    &:hover {\n        svg, g, path, rect, line{\n          fill: $hover;\n          @include respond-to(phone-device) {\n              fill: $color !important;\n          }\n          @include respond-to(tablet-portrait-device) {\n              fill: $color !important;\n          }\n          @include respond-to(tablet-landscape-device) {\n              fill: $color !important;\n          }\n        }\n    }\n\n  } @else if $type == 'stroke' {\n      svg, g, path, rect, line{\n        stroke: $color;\n        transition:         stroke $transition-medium ease;\n        -webkit-transition: stroke $transition-medium ease;\n        -moz-transition:    stroke $transition-medium ease;\n        -ms-transition:     stroke $transition-medium ease;\n        -o-transition:      stroke $transition-medium ease;\n      }\n\n      &:hover {\n          svg, g, path, rect, line{\n            stroke: $hover;\n            @include respond-to(phone-device) {\n                stroke: $color !important;\n            }\n            @include respond-to(tablet-portrait-device) {\n                stroke: $color !important;\n            }\n            @include respond-to(tablet-landscape-device) {\n                stroke: $color !important;\n            }\n          }\n      }\n  }\n  @else if $type == 'g' {\n\n    svg{\n      g{\n        g{\n          path{\n            fill: $color;\n            transition:         fill $transition-medium ease;\n            -webkit-transition: fill $transition-medium ease;\n            -moz-transition:    fill $transition-medium ease;\n            -ms-transition:     fill $transition-medium ease;\n            -o-transition:      fill $transition-medium ease;\n          }\n        }\n      }\n    }\n\n    &:hover {\n      svg{\n        g{\n          g{\n            path{\n              fill: $hover !important;\n              @include respond-to(phone-device) {\n                  fill: $color !important;\n              }\n              @include respond-to(tablet-portrait-device) {\n                  fill: $color !important;\n              }\n              @include respond-to(tablet-landscape-device) {\n                  fill: $color !important;\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n  @else if $type == 'facebook' {\n\n    svg{\n      #Blue_1_{\n        fill: $color;\n        transition:         fill $transition-medium ease;\n        -webkit-transition: fill $transition-medium ease;\n        -moz-transition:    fill $transition-medium ease;\n        -ms-transition:     fill $transition-medium ease;\n        -o-transition:      fill $transition-medium ease;\n      }\n    }\n\n\n    &:hover {\n      svg{\n        #Blue_1_{\n          fill: $hover;\n          @include respond-to(phone-device) {\n              fill: $color !important;\n          }\n          @include respond-to(tablet-portrait-device) {\n              fill: $color !important;\n          }\n          @include respond-to(tablet-landscape-device) {\n              fill: $color !important;\n          }\n        }\n      }\n    }\n  }\n  @else if $type == 'itunes' {\n\n    svg{\n      #background{\n        fill: $color;\n        transition:         fill $transition-medium ease;\n        -webkit-transition: fill $transition-medium ease;\n        -moz-transition:    fill $transition-medium ease;\n        -ms-transition:     fill $transition-medium ease;\n        -o-transition:      fill $transition-medium ease;\n      }\n    }\n\n    &:hover {\n        svg{\n          #background{\n            fill: $hover !important;\n            @include respond-to(phone-device) {\n                fill: $color !important;\n            }\n            @include respond-to(tablet-portrait-device) {\n                fill: $color !important;\n            }\n            @include respond-to(tablet-landscape-device) {\n                fill: $color !important;\n            }\n          }\n        }\n    }\n  }\n  @else if $type == 'twitter' {\n\n    svg{\n      path{\n        fill: $color;\n        transition:         fill $transition-medium ease;\n        -webkit-transition: fill $transition-medium ease;\n        -moz-transition:    fill $transition-medium ease;\n        -ms-transition:     fill $transition-medium ease;\n        -o-transition:      fill $transition-medium ease;\n      }\n    }\n\n\n    &:hover {\n      svg{\n        path{\n          fill: $hover !important;\n          @include respond-to(phone-device) {\n              fill: $color !important;\n          }\n          @include respond-to(tablet-portrait-device) {\n              fill: $color !important;\n          }\n          @include respond-to(tablet-landscape-device) {\n              fill: $color !important;\n          }\n        }\n      }\n    }\n  }\n  @else if $type == 'youtube' {\n\n    svg{\n      #The_Sharpness{\n        fill: $color;\n        transition:         fill $transition-medium ease;\n        -webkit-transition: fill $transition-medium ease;\n        -moz-transition:    fill $transition-medium ease;\n        -ms-transition:     fill $transition-medium ease;\n        -o-transition:      fill $transition-medium ease;\n      }\n    }\n\n\n    &:hover {\n      svg{\n        #The_Sharpness{\n          fill: $hover !important;\n          @include respond-to(phone-device) {\n              fill: $color !important;\n          }\n          @include respond-to(tablet-portrait-device) {\n              fill: $color !important;\n          }\n          @include respond-to(tablet-landscape-device) {\n              fill: $color !important;\n          }\n        }\n      }\n    }\n  }\n}\n\n\n\n$transition-slow: 1s;\n\n/*....................................SCSS MIXINS..................................*/\n\n\n@mixin hover-effect-opacity($opacity: 1, $hover: .2){\n  opacity: $opacity;\n  transition:         all $transition-medium ease;\n  -webkit-transition: all $transition-medium ease;\n  -moz-transition:    all $transition-medium ease;\n  -ms-transition:     all $transition-medium ease;\n  -o-transition:      all $transition-medium ease;\n\n\n  &:hover {\n    opacity: $hover;\n\n    @include respond-to(phone-device) {\n        opacity: $opacity !important;\n    }\n    @include respond-to(tablet-portrait-device) {\n        opacity: $opacity !important;\n    }\n    @include respond-to(tablet-landscape-device) {\n        opacity: $opacity !important;\n    }\n  }\n}\n\n@mixin hover-effect-fade($px){\n\n  filter: blur(0px);\n  -webkit-filter:blur(0px);\n  -o-filter: blur(0px);\n  -moz-filter: blur(0px);\n  transition:         all $transition-slow ease;\n  -webkit-transition: all $transition-slow ease;\n  -moz-transition:    all $transition-slow ease;\n  -ms-transition:     all $transition-slow ease;\n  -o-transition:      all $transition-slow ease;\n\n\n  &:hover {\n    filter: blur($px);\n    -webkit-filter: blur($px);\n    -o-filter: blur($px);\n    -moz-filter: blur($px);\n\n    @include respond-to(phone-device) {\n      filter: blur(0);\n      -webkit-filter: blur(0);\n      -o-filter: blur(0);\n      -moz-filter: blur(0);\n    }\n    @include respond-to(tablet-portrait-device) {\n      filter: blur(0);\n      -webkit-filter: blur(0);\n      -o-filter: blur(0);\n      -moz-filter: blur(0);\n    }\n    @include respond-to(tablet-landscape-device) {\n      filter: blur(0);\n      -webkit-filter: blur(0);\n      -o-filter: blur(0);\n      -moz-filter: blur(0);\n    }\n  }\n}\n\n\n\n@mixin hover-effect-saturation($initial, $final){\n\n  filter:grayscale($initial);\n  -webkit-filter:grayscale($initial);\n  -o-filter: grayscale($initial);\n  -moz-filter: grayscale($initial);\n  transition:         all $transition-medium ease;\n  -webkit-transition: all $transition-medium ease;\n  -moz-transition:    all $transition-medium ease;\n  -ms-transition:     all $transition-medium ease;\n  -o-transition:      all $transition-medium ease;\n\n\n  &:hover {\n    filter: grayscale($final);\n    -webkit-filter: grayscale($final);\n    -o-filter: grayscale($final);\n    -moz-filter: grayscale($final);\n\n    @include respond-to(phone-device) {\n      filter: grayscale($initial);\n      -webkit-filter: grayscale($initial);\n      -o-filter: grayscale($initial);\n      -moz-filter: grayscale($initial);\n    }\n    @include respond-to(tablet-portrait-device) {\n      filter: grayscale($initial);\n      -webkit-filter: grayscale($initial);\n      -o-filter: grayscale($initial);\n      -moz-filter: grayscale($initial);\n    }\n    @include respond-to(tablet-landscape-device) {\n      filter: grayscale($initial);\n      -webkit-filter: grayscale($initial);\n      -o-filter: grayscale($initial);\n      -moz-filter: grayscale($initial);\n    }\n  }\n}\n\n\n\n\n\n\n\n\n\n\n@mixin hover-effect-background-color($color, $hover){\n  background-color: $color;\n  transition:         background-color $transition-medium ease;\n  -webkit-transition: background-color $transition-medium ease;\n  -moz-transition:    background-color $transition-medium ease;\n  -ms-transition:     background-color $transition-medium ease;\n  -o-transition:      background-color $transition-medium ease;\n\n  &:hover {\n    background-color: $hover;\n    @include respond-to(phone-device) {\n        background-color: $color !important;\n    }\n    @include respond-to(tablet-portrait-device) {\n        background-color: $color !important;\n    }\n    @include respond-to(tablet-landscape-device) {\n        background-color: $color !important;\n    }\n  }\n}\n\n\n@mixin hover-effect-color($color, $hover){\n  color: $color;\n  transition:         color $transition-medium ease;\n  -webkit-transition: color $transition-medium ease;\n  -moz-transition:    color $transition-medium ease;\n  -ms-transition:     color $transition-medium ease;\n  -o-transition:      color $transition-medium ease;\n  // opacity: $hover;\n\n  &:hover {\n    color: $hover;\n    @include respond-to(phone-device) {\n        color: $color !important;\n    }\n    @include respond-to(tablet-portrait-device) {\n        color: $color !important;\n    }\n    @include respond-to(tablet-landscape-device) {\n        color: $color !important;\n    }\n  }\n}\n\n@mixin transform-transition($duration: $transition-slow){\n  transition:         transform $duration ease-in-out;\n  -webkit-transition: -webkit-transform $duration ease-in-out;\n  -moz-transition:    -moz-transform $duration ease-in-out;\n  -ms-transition:     -ms-transform $duration ease-in-out;\n  -o-transition:      -o-transform $duration ease-in-out;\n}\n\n@mixin transform-element($coordinate){\n  transform: $coordinate;\n  -ms-transform: $coordinate; /* IE 9 */\n \t-webkit-transform: $coordinate; /* Safari */\n  transform-origin: 0 0;\n}\n\n\n@mixin transform-position($position: -100%){\n  transform: translateX($position);\n  -webkit-transform:  translateX($position);\n  -moz-transform:     translateX($position);\n  -ms-transform:      translateX($position);\n  -o-transform:       translateX($position);\n}\n\n\n@mixin center-transform($left, $top){\n  transform: translate3d($left,$top, 0);\n  -webkit-transform:  translate3d($left,$top, 0);\n  -moz-transform:     translate3d($left,$top, 0);\n  -ms-transform:      translate3d($left,$top, 0);\n  -o-transform:       translate3d($left,$top, 0);\n}\n\n\n@mixin transform-origin($coordinates){\n  transform-origin: $coordinates;\n  -webkit-transform-origin:  $coordinates;\n  -moz-transform-origin:     $coordinates;\n  -ms-transform-origin:      $coordinates;\n  -o-transform-origin:       $coordinates;\n}\n\n\n\n\n\n@mixin h1(){\n  font-size: $font-size-h1;\n  line-height: $line-height-h1;\n  font-family: $font-family-h1;\n  letter-spacing: $letter-spacing-h1;\n  @include respond-to(phone){\n    font-size: $font-size-h1-mobile;\n  }\n}\n@mixin h2(){\n  font-size: $font-size-h2;\n  line-height: $line-height-h2;\n  font-family: $font-family-h2;\n  letter-spacing: $letter-spacing-h2;\n  @include respond-to(phone){\n    font-size: $font-size-h2-mobile;\n    line-height: $line-height-h2-mobile;\n  }\n}\n\n@mixin h3(){\n  font-size: $font-size-h3;\n  line-height: $line-height-h3;\n  font-family: $font-family-h3;\n  letter-spacing: $letter-spacing-h3;\n  @include respond-to(phone){\n    font-size: $font-size-h3-mobile;\n    line-height: $line-height-h3-mobile;\n  }\n}\n\n@mixin p(){\n  font-size: $font-size-p;\n  line-height: $line-height-p;\n  font-family: $font-family-p;\n  letter-spacing: $letter-spacing-paragraph;\n  @include respond-to(phone){\n    font-size: $font-size-p-mobile;\n    line-height: $line-height-p-mobile;\n  }\n}\n\n@mixin raised($opacity, $horizontal-initial: 2px, $vertical-initial:2px,$horizontal-final: 6px, $vertical-final:6px, $thickness-initial:10px, $thickness-final:10px){\n\n  box-shadow: $horizontal-initial $vertical-initial $thickness-initial 0 rgba(0, 0, 0, $opacity);\n  transition:         all 0.4s ease-in-out;\n  -webkit-transition: all 0.4s ease-in-out;\n  -moz-transition:    all 0.4s ease-in-out;\n  -ms-transition:     all 0.4s ease-in-out;\n  -o-transition:      all 0.4s ease-in-out;\n  &:hover {\n    box-shadow: $horizontal-final $vertical-final $thickness-final 0 rgba(0, 0, 0, $opacity);\n  }\n}\n\n@mixin raised-grey($horizontal-shift, $vertical-shift, $thickness, $opacity){\n  box-shadow: $horizontal-shift $vertical-shift $thickness 0 rgba(255, 255, 255, $opacity);\n  transition:         all 0.4s ease-in-out;\n  -webkit-transition: all 0.4s ease-in-out;\n  -moz-transition:    all 0.4s ease-in-out;\n  -ms-transition:     all 0.4s ease-in-out;\n  -o-transition:      all 0.4s ease-in-out;\n}\n\n@mixin transform-keyframe($name, $initial, $final){\n\n  // -webkit-transform: $final;\n  // transform: $final;\n  // -ms-transform: $final;\n  // -moz-transform: $final;\n  // -o-transform: $final;\n  transform-origin: center 100% !important;\n\n  @keyframes $name{\n    from{\n      -webkit-transform: $initial;\n      transform: $initial;\n    }\n    to{\n      -webkit-transform: $final;\n      transform: $final;\n    }\n  }\n  @-webkit-keyframes $name{\n    from{\n      -webkit-transform: $initial;\n      transform: $initial;\n    }\n    to{\n      -webkit-transform: $final;\n      transform: $final;\n    }\n  }\n  @-ms-keyframes $name{\n    from{\n      -ms-transform: $initial;\n    }\n    to{\n      -ms-transform: $final;\n    }\n  }\n  @-moz-keyframes $name{\n    from{\n      -moz-transform: $initial;\n    }\n    to{\n      -moz-transform: $final;\n    }\n  }\n  @-o-keyframes $name{\n    from{\n      -o-transform: $initial;\n    }\n    to{\n      -o-transform: $final;\n    }\n  }\n}\n","/*....................................General settings..................................*/\n\n\n\n\n/*.....................TEXT MARK STYLES......................*/\n\n::-moz-selection {\n    background: transparent;\n    text-shadow: none;\n}\n\n\n::selection {\n    background: transparent;\n    text-shadow: none;\n}\n\n\n\n\n\n\n/*.....................ACTIVE CLASSES......................*/\n\n.active{\n  opacity:0.1;\n}\n\na:active{\n\n}\n\n\n\n.blacked_text{\n  color:$white;\n}\n\n.blacked_path{\n  fill:$white;\n}\n.blacked_background{\n  background-color: $black;\n}\n\n\n\n\n\n/*....................HIDING SCROLLBAR.....................*/\n\n::-webkit-scrollbar {\n    display: none;\n}\n\n*{\n  -webkit-overflow-scrolling: touch;\n}\n\n*, *:before, *:after {\n  box-sizing: inherit;\n  outline:0;\n}\n\n\n\n\n/*.....................GENERAL STYLES......................*/\n\nhtml{\n  font-family: helvetica;\n  width: 100%;\n  margin: 0, 0;\n  padding: 0, 0;\n  box-sizing: border-box;\n  background-color: transparent;\n}\n\n\nbody {\n  width: 100vw;\n  height: auto;\n  margin: 0, 0;\n  padding: 0, 0;\n  display: block;\n  position: relative;\n  background: $white;\n\n}\n\n\np, a, li {\n  font-size: $font-size-p;\n  list-style-type: none;\n  letter-spacing:$letter-spacing;\n  color: $black;\n}\n\n\ninput, textarea, select, a, li {\n  text-decoration: none;\n}\n\na{\n  cursor:pointer;\n  @include p();\n}\n\n.a-hover{\n  @include hover-effect-color($black, $light-grey);\n}\n\np{\n  @include p();\n}\n\nh1{\n  @include h1();\n}\n\nh2{\n  @include h2();\n}\n\n\n\n.pop{\n  display: none;\n  width: 100vw;\n  height: 50px;\n  position: fixed;\n  bottom: 0;\n  z-index:$z-pop;\n  border-top: 1px solid black;\n  background: rgba(255,255,255,0.2);\n  @include respond-to(phone){\n    display:block;\n  }\n}\n\n\n\n/*.........................MAIN............................*/\nmain {\n    padding: 0 0px;\n    min-height: 300px;\n    @include respond-to(phone){\n      height:100vh;\n    }\n\n    /* side form */\n    .view-side-form {\n        .side-form {\n            position: absolute;\n            z-index: 100;\n            top: 0;\n            right: 0;\n            width: 80%;\n            height: 100%;\n            overflow: auto;\n            background: #fff;\n            padding: 20px;\n            border-left: 1px solid #e0e0e0;\n        }\n    }\n}\n\n\n\n\n\n\ntable{\n  width: 100vw;\n  height: 100vh;\n  tr{\n    td{\n      vertical-align: middle;\n    }\n  }\n}\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/app/styles.scss":
/*!*****************************!*\
  !*** ./src/app/styles.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--13-1!../../node_modules/postcss-loader/src??embedded!../../node_modules/sass-loader/dist/cjs.js??ref--13-3!./styles.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/app/styles.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ 3:
/*!***********************************!*\
  !*** multi ./src/app/styles.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/elia/Documents/web/aleali/src/app/styles.scss */"./src/app/styles.scss");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles.js.map