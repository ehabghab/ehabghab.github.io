var _0x31b866 = _0x189d;
function _0x189d(_0x42640f, _0x192a42) {
  var _0x462c60 = _0x462c();
  return (
    (_0x189d = function (_0x189d9e, _0x49d240) {
      _0x189d9e = _0x189d9e - 0x87;
      var _0x3a68a8 = _0x462c60[_0x189d9e];
      return _0x3a68a8;
    }),
    _0x189d(_0x42640f, _0x192a42)
  );
}
function _0x462c() {
  var _0x1de459 = [
    "toggle",
    "innerWidth",
    "children",
    "698irvgYz",
    "102728KPSqIT",
    "1671237uOCxZB",
    "scrollTo",
    "8DUdYmo",
    "scroll",
    "section-sep",
    "getElementsByClassName",
    "load",
    "4710CpjTxS",
    "education",
    "section-container",
    "animationDelay",
    "0.3s",
    "toString",
    "classList",
    "contains",
    "style",
    "screen",
    "3dEoGzm",
    "length",
    "70SYSDvH",
    "push",
    "2175565oqOTWH",
    "addEventListener",
    "show-large",
    "1315fZAuEm",
    "2180436bCKotd",
    "245NprksM",
    "732941yswFkM",
    "section-title-container",
    "section-cover",
  ];
  _0x462c = function () {
    return _0x1de459;
  };
  return _0x462c();
}
(function (_0x28f88a, _0x37a1e0) {
  var _0xf3176 = _0x189d,
    _0x6695f7 = _0x28f88a();
  while (!![]) {
    try {
      var _0x36622a =
        (parseInt(_0xf3176(0x96)) / 0x1) * (-parseInt(_0xf3176(0x9f)) / 0x2) +
        (-parseInt(_0xf3176(0x8f)) / 0x3) * (parseInt(_0xf3176(0xa0)) / 0x4) +
        (parseInt(_0xf3176(0x98)) / 0x5) * (-parseInt(_0xf3176(0xa8)) / 0x6) +
        parseInt(_0xf3176(0x93)) / 0x7 +
        (-parseInt(_0xf3176(0xa3)) / 0x8) * (-parseInt(_0xf3176(0xa1)) / 0x9) +
        (-parseInt(_0xf3176(0x91)) / 0xa) * (-parseInt(_0xf3176(0x99)) / 0xb) +
        -parseInt(_0xf3176(0x97)) / 0xc;
      if (_0x36622a === _0x37a1e0) break;
      else _0x6695f7["push"](_0x6695f7["shift"]());
    } catch (_0x44e3c0) {
      _0x6695f7["push"](_0x6695f7["shift"]());
    }
  }
})(_0x462c, 0x3f048);
function toggleElement(_0xec62d8) {
  var _0x57a18d = _0x189d;
  window[_0x57a18d(0x9d)] < 0x400
    ? _0xec62d8[_0x57a18d(0x8b)]["toggle"]("show")
    : _0xec62d8[_0x57a18d(0x8b)][_0x57a18d(0x9c)](_0x57a18d(0x95));
}
function animateSectionTitle(_0x4f8455) {
  var _0x2cd779 = _0x189d;
  let _0xb2a28d = _0x4f8455[_0x2cd779(0xa6)](_0x2cd779(0x9a))[0x0],
    _0x58764b = _0x4f8455[_0x2cd779(0xa6)](_0x2cd779(0xa5))[0x0];
  (_0xb2a28d[_0x2cd779(0x8d)][_0x2cd779(0x88)] = "0s"),
    toggleElement(_0xb2a28d),
    (_0x58764b[_0x2cd779(0x8d)][_0x2cd779(0x88)] = _0x2cd779(0x89)),
    toggleElement(_0x58764b);
}
function animateEducationSection(_0x3f2664) {
  var _0x975b33 = _0x189d;
  let _0x27f3ef = _0x3f2664[_0x975b33(0xa6)](_0x975b33(0x9b))[0x0][
    _0x975b33(0x9e)
  ];
  var _0x4459bd = 0.7;
  for (
    var _0x54a64a = 0x0;
    _0x54a64a < _0x27f3ef[_0x975b33(0x90)];
    _0x54a64a++
  ) {
    (_0x27f3ef[_0x54a64a]["style"][_0x975b33(0x88)] =
      _0x4459bd[_0x975b33(0x8a)]() + "s"),
      toggleElement(_0x27f3ef[_0x54a64a]),
      (_0x4459bd += 0.3);
  }
}
function animateSubSection(_0x1b0581) {
  var _0x51effd = _0x189d;
  let _0x418ab1 = _0x1b0581["getElementsByClassName"](_0x51effd(0x9b))[0x0][
    "children"
  ];
  var _0x44be62 = 0.7;
  for (
    var _0x3a9f4c = 0x0;
    _0x3a9f4c < _0x418ab1[_0x51effd(0x90)];
    _0x3a9f4c++
  ) {
    (_0x418ab1[_0x3a9f4c][_0x51effd(0x8d)]["animationDelay"] =
      _0x44be62["toString"]() + "s"),
      toggleElement(_0x418ab1[_0x3a9f4c]),
      _0x418ab1[_0x3a9f4c][_0x51effd(0x8b)]["contains"]("preface") &&
        (_0x44be62 += 0.3),
      (_0x44be62 += 0.3);
  }
}
function animateSectionCover(_0x1ffb8e) {
  var _0x4ec963 = _0x189d;
  let _0x49251d = _0x1ffb8e[_0x4ec963(0xa6)](_0x4ec963(0x9b))[0x0];
  toggleElement(_0x49251d);
}
function overlap(_0x311ca5) {
  var _0x1f5b1e = _0x189d;
  let _0x4462b5 =
    (window["screen"]["height"] - _0x311ca5["getBoundingClientRect"]()["top"]) /
    window[_0x1f5b1e(0x8e)]["height"];
  var _0x54459d = 0.4;
  window[_0x1f5b1e(0x9d)] < 0x400 && (_0x54459d = 0.3);
  if (_0x4462b5 > _0x54459d)
    return (
      animateSectionCover(_0x311ca5),
      animateSectionTitle(_0x311ca5),
      _0x311ca5[_0x1f5b1e(0x8b)][_0x1f5b1e(0x8c)](_0x1f5b1e(0xa9))
        ? animateEducationSection(_0x311ca5)
        : animateSubSection(_0x311ca5),
      !![]
    );
  return ![];
}
function handleScroll() {
  var _0x78dc4f = _0x189d,
    _0x2a7e55 = [];
  for (var _0x3051fc in sectionDivs) {
    overlap(sectionDivs[_0x3051fc]) && _0x2a7e55[_0x78dc4f(0x92)](_0x3051fc);
  }
  for (var _0x5009f6 in _0x2a7e55) {
    delete sectionDivs[_0x2a7e55[_0x5009f6]];
  }
}
let sectionDivs = [];
function initContentDivList() {
  var _0x10990c = _0x189d;
  window[_0x10990c(0xa2)](0x0, 0x0);
  let _0x3aeb0a = document["getElementsByClassName"](_0x10990c(0x87));
  for (
    var _0x4fc3e7 = 0x0;
    _0x4fc3e7 < _0x3aeb0a[_0x10990c(0x90)];
    _0x4fc3e7++
  ) {
    sectionDivs[_0x10990c(0x92)](_0x3aeb0a[_0x4fc3e7]);
  }
}
window[_0x31b866(0x94)](_0x31b866(0xa4), handleScroll),
  window[_0x31b866(0x94)](_0x31b866(0xa7), initContentDivList);
