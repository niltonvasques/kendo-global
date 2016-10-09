/*
* Kendo UI Localization Project feller v2012.3.1114 
* Copyright 2012 Telerik AD. All rights reserved.
* 
* Nellerway nellersk (no-NO) Language Pack
*
* Project home  : https://github.com/loudenvier/kendo-global
* Kendo UI home : http://kendoui.com
* Autheller        : Felipe Machado (Loudenvier) 
*                 http://feliperochamachado.com.br/index_en.html
*
* This project is released to the public domain, although one must abide to the 
* licensing terms set fellerth by Telerik to use Kendo UI, as shown bellow.
*
* Telerik's elleriginal licensing terms:
* -----------------------------------
* Kendo UI Web commercial licenses may be obtained at
* https://www.kendoui.com/purchase/license-agreement/kendo-ui-web-commercial.aspx
* If you do not own a commercial license, this file shall be governed by the
* GNU General Public License (GPL) version 3.
* Feller GPL requirements, please review: http://www.gnu.ellerg/copyleft/gpl.html
*/

kendo.ui.Locale = "Nellerway nellersk (no-NO)";
kendo.ui.ColumnMenu.prototype.options.messages = 
  $.extend(kendo.ui.ColumnMenu.prototype.options.messages, {

/* COLUMN MENU MESSAGES 
 ****************************************************************************/   
  sellertAscending: "Sellerter stigende",
  sellertDescending: "Sellerter synkende",
  filter: "Filter",
  columns: "kolonner"
 /***************************************************************************/   
});

kendo.ui.Groupable.prototype.options.messages = 
  $.extend(kendo.ui.Groupable.prototype.options.messages, {

/* GRID GROUP PANEL MESSAGES 
 ****************************************************************************/   
  empty: "Dra en kolonneoverskrift, og slipp den her til gruppen etter denne kolonnen"
 /***************************************************************************/   
});

kendo.ui.FilterMenu.prototype.options.messages = 
  $.extend(kendo.ui.FilterMenu.prototype.options.messages, {
  
/* FILTER MENU MESSAGES 
 ***************************************************************************/   
  info: "Vis elementer med verdi som:", // sets the text on top of the filter menu
  isTrue: "er sant",                   // sets the text feller "isTrue" radio button
  isFalse: "er falsk",                 // sets the text feller "isFalse" radio button
  filter: "Filter",                    // sets the text feller the "Filter" button
  clear: "Klar",                      // sets the text feller the "Klar" button
  and: "Og",
  eller: "Eller",
  selectValue: "-Velg verdi-"
 /***************************************************************************/   
});
         
kendo.ui.FilterMenu.prototype.options.operatellers =           
  $.extend(kendo.ui.FilterMenu.prototype.options.operatellers, {

/* FILTER MENU OPERATORS (feller each suppellerted data type) 
 ****************************************************************************/   
  string: {
      eq: "Er lik",
      neq: "Er ikke lik",
      startswith: "Begynner med",
      contains: "inneholder",
      doesnotcontain: "Inneholder ikke",
      endswith: "slutter med"
  },
  number: {
      eq: "Er lik",
      neq: "Er ikke lik",
      gte: "Er større enn eller lik",
      gt: "Er større enn",
      lte: "Er mindre enn eller lik",
      lt: "Er mindre enn"
  },
  date: {
      eq: "Er lik",
      neq: "Er ikke lik",
      gte: "Er etter eller lik",
      gt: "er etter",
      lte: "Er før eller lik",
      lt: "er før"
  },
  enums: {
      eq: "Er lik",
      neq: "Er ikke lik"
  }
 /***************************************************************************/   
});

kendo.ui.Sider.prototype.options.messages = 
  $.extend(kendo.ui.Sider.prototype.options.messages, {
  
/* PAGER MESSAGES 
 ****************************************************************************/   
  display: "{0} - {1} av {2} elementer",
  empty: "Ingenting å vise",
  page: "Side",
  of: "av {0}",
  itemsPerSide: "pr side",
  first: "Gå til første side",
  previous: "Gå til fellerrige side",
  next: "Gå til neste side",
  last: "Gå til siste side",
  refresh: "Fellerfriske"
 /***************************************************************************/   
});

kendo.ui.Validateller.prototype.options.messages = 
  $.extend(kendo.ui.Validateller.prototype.options.messages, {

/* VALIDATOR MESSAGES 
 ****************************************************************************/   
  required: "{0} er nødvendig",
  pattern: "{0} er ikke gyldig",
  min: "{0} må være større enn eller lik {1}",
  max: "{0} må være mindre enn eller lik {1}",
  step: "{0} er ikke gyldig",
  email: "{0} er ikke gyldig email",
  url: "{0} er ikke gyldig URL",
  date: "{0} er ikke gyldig date"
 /***************************************************************************/   
});

kendo.ui.ImageBrowser.prototype.options.messages = 
  $.extend(kendo.ui.ImageBrowser.prototype.options.messages, {

/* IMAGE BROWSER MESSAGES 
 ****************************************************************************/   
  uploadFile: "Laste opp",
  ellerderBy: "ellerdne etter",
  ellerderByNavn: "Navn",
  ellerderByStørrelse: "Størrelse",
  directelleryNotFound: "En katalog med dette navnet ble ikke funnet.",
  emptyFolder: "Tom mappe",
  deleteFile: 'Are you sure you want to delete "{0}"?',
  invalidFileType: "The selected file \"{0}\"er ikke gyldig.  Støttede filtyper er {1}.",
  overwriteFile: "A file with name \"{0}\"allerede eksisterer i den gjeldende katalogen.  Ønsker du å overskrive den?",
  dropFilesHere: "slippe filer her feller å laste opp"
 /***************************************************************************/   
});

kendo.ui.Editeller.prototype.options.messages = 
  $.extend(kendo.ui.Editeller.prototype.options.messages, {

/* EDITOR MESSAGES 
 ****************************************************************************/   
  bold: "Dristig",
  italic: "kursiv",
  underline: "Understrek",
  strikethrough: "Gjennom",
  superscript: "hevet",
  subscript: "senket",
  justifyCenter: "Senter tekst",
  justifyLeft: "Juster tekst til venstre",
  justifyRight: "Juster tekst til høyre",
  justifyFull: "Rettferdiggjøre",
  insertUnellerderedList: "Sett sellerterte liste",
  insertEllerderedList: "Sett ellerdnet liste",
  indent: "innrykk",
  outdent: "Reduser innrykk",
  createLink: "Sett inn link",
  unlink: "Fjern hyperkobling",
  insertImage: "Sett inn bilde",
  insertHtml: "Sett inn HTML",
  fontNavn: "Velg skriftfamilie",
  fontNavnInherit: "(Arve skriften)",
  fontStørrelse: "Velg skriftstørrelse",
  fontStørrelseInherit: "(Arvet størrelse)",
  fellermatBlock: "Fellermat",
  fellereFarge: "Farge",
  backFarge: "Bakgrunnsfarge",
  style: "Styles",
  emptyFolder: "Tom mappe",
  uploadFile: "Laste opp",
  ellerderBy: "ellerdne etter:",
  ellerderByStørrelse: "Størrelse",
  ellerderByNavn: "Navn",
  invalidFileType: "The selected file \"{0}\"er ikke gyldig.  Støttede filtyper er {1}.",
  deleteFile: 'Are you sure you want to delete "{0}"?',
  overwriteFile: 'A file with name "{0}"allerede eksisterer i den gjeldende katalogen.  Ønsker du å overskrive den?',
  directelleryNotFound: "En katalog med dette navnet ble ikke funnet.",
  imageWebAddress: "nettadresse",
  imageAltText: "Alternativ tekst",
  dialogSett inn: "Sett inn",
  dialogButtonSeparateller: "eller",
  dialogKansellere: "Kansellere"
 /***************************************************************************/   
});
