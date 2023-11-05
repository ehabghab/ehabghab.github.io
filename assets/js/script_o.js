const _0x4f69df = _0x2196;
(function (_0x26067a, _0x42efe0) {
  const _0xfa5750 = _0x2196,
    _0x2b90b8 = _0x26067a();
  while (!![]) {
    try {
      const _0x1f329d =
        (parseInt(_0xfa5750(0xaf)) / 0x1) * (parseInt(_0xfa5750(0xd0)) / 0x2) +
        (parseInt(_0xfa5750(0xab)) / 0x3) * (parseInt(_0xfa5750(0xbc)) / 0x4) +
        -parseInt(_0xfa5750(0xd7)) / 0x5 +
        parseInt(_0xfa5750(0xae)) / 0x6 +
        -parseInt(_0xfa5750(0xac)) / 0x7 +
        -parseInt(_0xfa5750(0xd9)) / 0x8 +
        (-parseInt(_0xfa5750(0xdb)) / 0x9) * (-parseInt(_0xfa5750(0xc3)) / 0xa);
      if (_0x1f329d === _0x42efe0) break;
      else _0x2b90b8["push"](_0x2b90b8["shift"]());
    } catch (_0x20c16d) {
      _0x2b90b8["push"](_0x2b90b8["shift"]());
    }
  }
})(_0x7ebb, 0x831d0);
function adjustPageComponents() {
  const _0x34f9ae = _0x2196;
  introElement = document["getElementById"](_0x34f9ae(0xb3));
  let _0x536b20 = document["getElementById"]("personalImgContainer");
  (window["innerWidth"] > 0x190) & (window[_0x34f9ae(0xad)] < 0x280)
    ? (introElement[_0x34f9ae(0xbb)][_0x34f9ae(0xbe)] =
        (_0x536b20[_0x34f9ae(0xb4)] * 0.1)[_0x34f9ae(0xb0)]() + "px")
    : (introElement[_0x34f9ae(0xbb)]["marginTop"] = _0x34f9ae(0xb5));
  let _0x2873ba = 0x16 + (window[_0x34f9ae(0xad)] - 0x280) * -0.01302,
    _0x111029 = document[_0x34f9ae(0xce)](_0x34f9ae(0xb2));
  if (
    (window[_0x34f9ae(0xad)] > 0x280) &
    (window[_0x34f9ae(0xad)] < 0x2ff) &
    ((window[_0x34f9ae(0xad)] > 0x341) & (window[_0x34f9ae(0xad)] < 0x400))
  )
    for (
      var _0x69e5ee = 0x0;
      _0x69e5ee < _0x111029[_0x34f9ae(0xbf)];
      _0x69e5ee++
    ) {
      _0x111029[_0x69e5ee][_0x34f9ae(0xbb)]["flex"] = _0x2873ba;
    }
  else {
    if ((window[_0x34f9ae(0xad)] > 0x2ff) & (window["innerWidth"] < 0x341))
      for (
        var _0x69e5ee = 0x0;
        _0x69e5ee < _0x111029[_0x34f9ae(0xbf)];
        _0x69e5ee++
      ) {
        _0x111029[_0x69e5ee][_0x34f9ae(0xbb)][_0x34f9ae(0xb6)] = 0x18;
      }
    else
      for (var _0x69e5ee = 0x0; _0x69e5ee < _0x111029["length"]; _0x69e5ee++) {
        _0x111029[_0x69e5ee][_0x34f9ae(0xbb)][_0x34f9ae(0xb6)] = 0x16;
      }
  }
  addParticles();
  if (window[_0x34f9ae(0xad)] < 0x400) {
    let _0x1c7bea = document[_0x34f9ae(0xd1)]("firstSkySep");
    const _0x315edf =
        document[_0x34f9ae(0xd1)](_0x34f9ae(0xc2))[_0x34f9ae(0xb4)] + 0x29,
      _0x35bbf5 = document[_0x34f9ae(0xca)](_0x34f9ae(0xa8))[0x0][
        _0x34f9ae(0xb4)
      ];
    (_0x1c7bea[_0x34f9ae(0xbb)][_0x34f9ae(0xd4)] =
      (_0x35bbf5 - _0x315edf)[_0x34f9ae(0xb0)]() + "px"),
      (_0x1c7bea["style"]["maxHeight"] =
        (_0x35bbf5 - _0x315edf)[_0x34f9ae(0xb0)]() + "px"),
      _0x1c7bea[_0x34f9ae(0xc0)] == 0x0 && addSepParticles();
  } else {
    let _0x3ffd05 = document[_0x34f9ae(0xd1)]("firstSkySep");
    _0x3ffd05[_0x34f9ae(0xc0)] > 0x0 &&
      (_0x3ffd05[_0x34f9ae(0xc8)](),
      (_0x3ffd05[_0x34f9ae(0xbb)]["maxHeight"] = _0x34f9ae(0xb5)),
      (_0x3ffd05[_0x34f9ae(0xbb)][_0x34f9ae(0xd4)] = _0x34f9ae(0xb5)));
  }
  let _0x3fc7ed = this[_0x34f9ae(0xbd)][_0x34f9ae(0xd1)](_0x34f9ae(0xcd));
  this["innerWidth"] < 0x280
    ? (_0x3fc7ed["classList"][_0x34f9ae(0xcf)](_0x34f9ae(0xcb)),
      (_0x3fc7ed["style"][_0x34f9ae(0xc6)] = _0x34f9ae(0xc9)))
    : (_0x3fc7ed[_0x34f9ae(0xd3)][_0x34f9ae(0xcf)](_0x34f9ae(0xc7)),
      (_0x3fc7ed[_0x34f9ae(0xbb)][_0x34f9ae(0xc6)] = ".9"));
}
let screenWidth = window[_0x4f69df(0xad)];
window[_0x4f69df(0xc1)]("load", function () {
  const _0x127557 = _0x4f69df;
  let _0x276869 = this[_0x127557(0xbd)][_0x127557(0xd1)](_0x127557(0xcd));
  this[_0x127557(0xad)] < 0x280
    ? _0x276869[_0x127557(0xd3)][_0x127557(0xcc)]("showModeOpaque")
    : _0x276869[_0x127557(0xd3)][_0x127557(0xcc)]("showModeFull"),
    adjustPageComponents();
});
function addParticles() {
  const _0x1d5425 = _0x4f69df;
  let _0x1cfc92 = new particlesJS(_0x1d5425(0xc5), {
    particles: {
      number: { value: 0x64, density: { enable: !![], value_area: 0x190 } },
      color: { value: "#0059ff" },
      shape: {
        type: _0x1d5425(0xb1),
        stroke: { width: 0x0, color: _0x1d5425(0xa7) },
        polygon: { nb_sides: 0x5 },
        image: { src: _0x1d5425(0xaa), width: 0x64, height: 0x64 },
      },
      opacity: {
        value: 0.5,
        random: ![],
        anim: { enable: ![], speed: 0x1, opacity_min: 0.1, sync: ![] },
      },
      size: {
        value: 0x3,
        random: !![],
        anim: {
          enable: ![],
          speed: 112.68731268731268,
          size_min: 0.1,
          sync: ![],
        },
      },
      line_linked: {
        enable: !![],
        distance: 0xb4,
        color: "#00d1ff",
        opacity: 0.8,
        width: 1.1,
      },
      move: {
        enable: !![],
        speed: 0x2,
        direction: _0x1d5425(0xb7),
        random: !![],
        straight: ![],
        out_mode: _0x1d5425(0xb8),
        bounce: ![],
        attract: { enable: ![], rotateX: 0x258, rotateY: 0x4b0 },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: ![], mode: _0x1d5425(0xc4) },
        onclick: { enable: !![], mode: _0x1d5425(0xd2) },
        resize: !![],
      },
      modes: {
        grab: { distance: 0x190, line_linked: { opacity: 0x1 } },
        bubble: {
          distance: 0x190,
          size: 0x28,
          duration: 0x2,
          opacity: 0x8,
          speed: 0x3,
        },
        repulse: { distance: 0xc8, duration: 0.4 },
        push: { particles_nb: 0x4 },
        remove: { particles_nb: 0x2 },
      },
    },
    retina_detect: !![],
  });
}
function addSepParticles() {
  const _0x1ebe7a = _0x4f69df;
  let _0x57e2f3 = document[_0x1ebe7a(0xd1)](_0x1ebe7a(0xa6));
  new particlesJS(_0x1ebe7a(0xa6), {
    particles: {
      number: { value: 0x64, density: { enable: !![], value_area: 0x258 } },
      color: { value: [_0x1ebe7a(0xb9), "#67e8f9"] },
      shape: {
        type: "circle",
        stroke: { width: 0x0, color: _0x1ebe7a(0xda) },
        polygon: { nb_sides: 0x5 },
        image: { src: _0x1ebe7a(0xaa), width: 0x64, height: 0x64 },
      },
      opacity: {
        value: 0.5,
        random: ![],
        anim: { enable: !![], speed: 0.5, opacity_min: 0x0, sync: ![] },
      },
      size: {
        value: 1.5,
        random: !![],
        anim: {
          enable: !![],
          speed: 0x1,
          size_min: 95.01332318233726,
          sync: ![],
        },
      },
      line_linked: {
        enable: ![],
        distance: 0x96,
        color: _0x1ebe7a(0xba),
        opacity: 0.7776525115871227,
        width: 0.9620443442314919,
      },
      move: {
        enable: !![],
        speed: 0x1,
        direction: "none",
        random: ![],
        straight: ![],
        out_mode: _0x1ebe7a(0xb8),
        bounce: ![],
        attract: { enable: ![], rotateX: 0x258, rotateY: 0x4b0 },
      },
    },
    interactivity: {
      detect_on: _0x1ebe7a(0xd6),
      events: {
        onhover: { enable: ![], mode: _0x1ebe7a(0xc4) },
        onclick: { enable: ![], mode: _0x1ebe7a(0xd2) },
        resize: !![],
      },
      modes: {
        grab: { distance: 0x190, line_linked: { opacity: 0x1 } },
        bubble: {
          distance: 0x190,
          size: 0x28,
          duration: 0x2,
          opacity: 0x8,
          speed: 0x3,
        },
        repulse: { distance: 0xc8, duration: 0.4 },
        push: { particles_nb: 0x4 },
        remove: { particles_nb: 0x2 },
      },
    },
    retina_detect: !![],
  });
}
function _0x2196(_0x71aa9, _0x4b3531) {
  const _0x7ebb9c = _0x7ebb();
  return (
    (_0x2196 = function (_0x21968b, _0x56314b) {
      _0x21968b = _0x21968b - 0xa6;
      let _0x537b92 = _0x7ebb9c[_0x21968b];
      return _0x537b92;
    }),
    _0x2196(_0x71aa9, _0x4b3531)
  );
}
function _0x7ebb() {
  const _0xf2ebe8 = [
    "opening",
    "10giEafX",
    "repulse",
    "left-border",
    "opacity",
    "showModeOpaque",
    "replaceChildren",
    ".25",
    "getElementsByTagName",
    "showModeFull",
    "toggle",
    "personalImg",
    "getElementsByClassName",
    "remove",
    "370ktGfNT",
    "getElementById",
    "push",
    "classList",
    "minHeight",
    "#67e8f9",
    "canvas",
    "2630070rwBUaR",
    "resize",
    "7076032WaeQpo",
    "#000000",
    "13607631kACIjA",
    "firstSkySep",
    "#e30000",
    "body",
    "circle",
    "img/github.svg",
    "12021AQWDwh",
    "4261005aQcldQ",
    "innerWidth",
    "1744368OhvCOQ",
    "2384qqXPDL",
    "toString",
    "triangle",
    "section-title-container",
    "intro",
    "offsetHeight",
    "0px",
    "flex",
    "none",
    "out",
    "#7547c0",
    "#7c78c5",
    "style",
    "312EtZBKi",
    "document",
    "marginTop",
    "length",
    "childElementCount",
    "addEventListener",
  ];
  _0x7ebb = function () {
    return _0xf2ebe8;
  };
  return _0x7ebb();
}
function addSepParticlesq(_0x558ab0) {
  const _0x523646 = _0x4f69df;
  let _0x1333ad = document["getElementById"](_0x523646(0xa6));
  (options = {
    count: 0x3e8,
    shape: [_0x523646(0xa9)],
    speed: 0x0,
    maxSize: 0x5,
    direction: 0x0,
    rotation: 0x0,
    drift: 0x3,
    bounce: 0x0,
    xVariance: 0x2,
    yVariance: 0x2,
    glow: 0x1,
    color: ["#7547c0", _0x523646(0xd5)],
  }),
    new Sparticles(_0x1333ad, options);
}
window["addEventListener"](_0x4f69df(0xd8), adjustPageComponents);
