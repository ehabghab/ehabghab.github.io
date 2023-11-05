const _0x2ec614 = _0x5834;
function _0x5834(_0x5f252f, _0x1e6394) {
  const _0x3c3f71 = _0x3c3f();
  return (
    (_0x5834 = function (_0x583475, _0x4bf3cb) {
      _0x583475 = _0x583475 - 0xe0;
      let _0x565933 = _0x3c3f71[_0x583475];
      return _0x565933;
    }),
    _0x5834(_0x5f252f, _0x1e6394)
  );
}
(function (_0x12a635, _0x37de83) {
  const _0x265145 = _0x5834,
    _0x41bfce = _0x12a635();
  while (!![]) {
    try {
      const _0x112b13 =
        parseInt(_0x265145(0xe3)) / 0x1 +
        (parseInt(_0x265145(0x10b)) / 0x2) * (parseInt(_0x265145(0xf8)) / 0x3) +
        (parseInt(_0x265145(0xff)) / 0x4) * (parseInt(_0x265145(0x11d)) / 0x5) +
        parseInt(_0x265145(0xea)) / 0x6 +
        parseInt(_0x265145(0xf0)) / 0x7 +
        (-parseInt(_0x265145(0x111)) / 0x8) *
          (-parseInt(_0x265145(0xf5)) / 0x9) +
        (-parseInt(_0x265145(0x110)) / 0xa) * (parseInt(_0x265145(0xf4)) / 0xb);
      if (_0x112b13 === _0x37de83) break;
      else _0x41bfce["push"](_0x41bfce["shift"]());
    } catch (_0x29eef7) {
      _0x41bfce["push"](_0x41bfce["shift"]());
    }
  }
})(_0x3c3f, 0xaf3f6);
function adjustPageComponents() {
  const _0x45064e = _0x5834;
  introElement = document[_0x45064e(0xf9)](_0x45064e(0x106));
  let _0x4a9feb = document["getElementById"](_0x45064e(0xe9));
  (window[_0x45064e(0xfa)] > 0x190) & (window[_0x45064e(0xfa)] < 0x280)
    ? (introElement[_0x45064e(0xe7)][_0x45064e(0xe8)] =
        (_0x4a9feb[_0x45064e(0x118)] * 0.1)[_0x45064e(0xe1)]() + "px")
    : (introElement[_0x45064e(0xe7)][_0x45064e(0xe8)] = _0x45064e(0x105));
  let _0x340675 = 0x16 + (window[_0x45064e(0xfa)] - 0x280) * -0.01302,
    _0x122d16 = document[_0x45064e(0xe5)]("section-title-container");
  if (
    (window[_0x45064e(0xfa)] > 0x280) &
    (window[_0x45064e(0xfa)] < 0x2ff) &
    ((window[_0x45064e(0xfa)] > 0x341) & (window[_0x45064e(0xfa)] < 0x400))
  )
    for (
      var _0x5f2663 = 0x0;
      _0x5f2663 < _0x122d16[_0x45064e(0xef)];
      _0x5f2663++
    ) {
      _0x122d16[_0x5f2663][_0x45064e(0xe7)][_0x45064e(0x103)] = _0x340675;
    }
  else {
    if ((window[_0x45064e(0xfa)] > 0x2ff) & (window[_0x45064e(0xfa)] < 0x341))
      for (var _0x5f2663 = 0x0; _0x5f2663 < _0x122d16["length"]; _0x5f2663++) {
        _0x122d16[_0x5f2663][_0x45064e(0xe7)][_0x45064e(0x103)] = 0x18;
      }
    else
      for (var _0x5f2663 = 0x0; _0x5f2663 < _0x122d16["length"]; _0x5f2663++) {
        _0x122d16[_0x5f2663][_0x45064e(0xe7)]["flex"] = 0x16;
      }
  }
  addParticles();
  if (window[_0x45064e(0xfa)] < 0x400) {
    let _0x491066 = document["getElementById"](_0x45064e(0xf2));
    const _0x4c4626 =
        document[_0x45064e(0xf9)](_0x45064e(0x11b))[_0x45064e(0x118)] + 0x29,
      _0xb4fc70 = document["getElementsByTagName"](_0x45064e(0xec))[0x0][
        _0x45064e(0x118)
      ];
    (_0x491066[_0x45064e(0xe7)][_0x45064e(0xeb)] =
      (_0xb4fc70 - _0x4c4626)[_0x45064e(0xe1)]() + "px"),
      (_0x491066[_0x45064e(0xe7)]["maxHeight"] =
        (_0xb4fc70 - _0x4c4626)[_0x45064e(0xe1)]() + "px"),
      _0x491066[_0x45064e(0x10c)] == 0x0 && addSepParticles();
  } else {
    let _0x55e014 = document[_0x45064e(0xf9)](_0x45064e(0xf2));
    _0x55e014["childElementCount"] > 0x0 &&
      (_0x55e014[_0x45064e(0xf3)](),
      (_0x55e014["style"][_0x45064e(0xfc)] = "0px"),
      (_0x55e014[_0x45064e(0xe7)][_0x45064e(0xeb)] = "0px"));
  }
  let _0x192fd9 = this["document"][_0x45064e(0xf9)]("personalImg");
  this[_0x45064e(0xfa)] < 0x280
    ? (_0x192fd9[_0x45064e(0xee)][_0x45064e(0xe2)](_0x45064e(0x113)),
      (_0x192fd9["style"]["opacity"] = _0x45064e(0x10f)))
    : (_0x192fd9[_0x45064e(0xee)][_0x45064e(0xe2)](_0x45064e(0x112)),
      (_0x192fd9["style"][_0x45064e(0x109)] = ".9"));
}
let screenWidth = window[_0x2ec614(0xfa)];
window[_0x2ec614(0xe6)](_0x2ec614(0x116), function () {
  const _0x3764af = _0x2ec614;
  let _0x500263 = this[_0x3764af(0x119)][_0x3764af(0xf9)](_0x3764af(0x108));
  _0x500263[_0x3764af(0xe6)]("load", () => {
    const _0x38a3b4 = _0x3764af;
    console[_0x38a3b4(0x11e)]("Image\x20loaded!");
    var _0x25c12a = document[_0x38a3b4(0x10e)](_0x38a3b4(0x10d))[0x0],
      _0xf241f0 = document["createElement"]("link");
    (_0xf241f0[_0x38a3b4(0x11a)] = "stylesheet"),
      (_0xf241f0[_0x38a3b4(0x104)] = _0x38a3b4(0x114)),
      _0x25c12a[_0x38a3b4(0xfd)](_0xf241f0);
  }),
    this[_0x3764af(0xfa)] < 0x280
      ? _0x500263["classList"][_0x3764af(0x102)](_0x3764af(0x112))
      : _0x500263[_0x3764af(0xee)][_0x3764af(0x102)](_0x3764af(0x113)),
    adjustPageComponents();
});
function addParticles() {
  const _0x12f94f = _0x2ec614;
  let _0xe5fe95 = new particlesJS(_0x12f94f(0xf1), {
    particles: {
      number: { value: 0x64, density: { enable: !![], value_area: 0x190 } },
      color: { value: _0x12f94f(0xf7) },
      shape: {
        type: _0x12f94f(0x117),
        stroke: { width: 0x0, color: _0x12f94f(0x11f) },
        polygon: { nb_sides: 0x5 },
        image: { src: _0x12f94f(0x107), width: 0x64, height: 0x64 },
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
        color: _0x12f94f(0x101),
        opacity: 0.8,
        width: 1.1,
      },
      move: {
        enable: !![],
        speed: 0x2,
        direction: _0x12f94f(0xfb),
        random: !![],
        straight: ![],
        out_mode: _0x12f94f(0xfe),
        bounce: ![],
        attract: { enable: ![], rotateX: 0x258, rotateY: 0x4b0 },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: ![], mode: _0x12f94f(0x10a) },
        onclick: { enable: !![], mode: _0x12f94f(0xe4) },
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
  const _0xca3dd0 = _0x2ec614;
  let _0x204f5c = document[_0xca3dd0(0xf9)](_0xca3dd0(0xf2));
  new particlesJS("firstSkySep", {
    particles: {
      number: { value: 0x64, density: { enable: !![], value_area: 0x258 } },
      color: { value: [_0xca3dd0(0x100), _0xca3dd0(0xf6)] },
      shape: {
        type: _0xca3dd0(0xed),
        stroke: { width: 0x0, color: "#000000" },
        polygon: { nb_sides: 0x5 },
        image: { src: _0xca3dd0(0x107), width: 0x64, height: 0x64 },
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
        color: _0xca3dd0(0xe0),
        opacity: 0.7776525115871227,
        width: 0.9620443442314919,
      },
      move: {
        enable: !![],
        speed: 0x1,
        direction: "none",
        random: ![],
        straight: ![],
        out_mode: "out",
        bounce: ![],
        attract: { enable: ![], rotateX: 0x258, rotateY: 0x4b0 },
      },
    },
    interactivity: {
      detect_on: _0xca3dd0(0x115),
      events: {
        onhover: { enable: ![], mode: "repulse" },
        onclick: { enable: ![], mode: "push" },
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
function addSepParticlesq(_0x91ee6d) {
  const _0x202704 = _0x2ec614;
  let _0x4fbd3a = document[_0x202704(0xf9)](_0x202704(0xf2));
  (options = {
    count: 0x3e8,
    shape: [_0x202704(0xed)],
    speed: 0x0,
    maxSize: 0x5,
    direction: 0x0,
    rotation: 0x0,
    drift: 0x3,
    bounce: 0x0,
    xVariance: 0x2,
    yVariance: 0x2,
    glow: 0x1,
    color: [_0x202704(0x100), _0x202704(0xf6)],
  }),
    new Sparticles(_0x4fbd3a, options);
}
window[_0x2ec614(0xe6)](_0x2ec614(0x11c), adjustPageComponents);
function _0x3c3f() {
  const _0x9cfdd6 = [
    "toggle",
    "flex",
    "href",
    "0px",
    "intro",
    "img/github.svg",
    "personalImg",
    "opacity",
    "repulse",
    "14HlcbUB",
    "childElementCount",
    "head",
    "getElementsByTagName",
    ".25",
    "150oLXbEp",
    "8NZFGGL",
    "showModeOpaque",
    "showModeFull",
    "/assets/dist/output.css",
    "canvas",
    "load",
    "triangle",
    "offsetHeight",
    "document",
    "rel",
    "opening",
    "resize",
    "355FqbQUx",
    "log",
    "#e30000",
    "#7c78c5",
    "toString",
    "remove",
    "615102pXeLYE",
    "push",
    "getElementsByClassName",
    "addEventListener",
    "style",
    "marginTop",
    "personalImgContainer",
    "3787248oZtbdd",
    "minHeight",
    "body",
    "circle",
    "classList",
    "length",
    "752836TWoPrf",
    "left-border",
    "firstSkySep",
    "replaceChildren",
    "2232681nmponW",
    "7555113HsHBOy",
    "#67e8f9",
    "#0059ff",
    "256254CyytLv",
    "getElementById",
    "innerWidth",
    "none",
    "maxHeight",
    "appendChild",
    "out",
    "54712cwmoPe",
    "#7547c0",
    "#00d1ff",
  ];
  _0x3c3f = function () {
    return _0x9cfdd6;
  };
  return _0x3c3f();
}
