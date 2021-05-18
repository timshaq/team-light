!function (e) {
  var t = {};

  function n(c) {
    if (t[c]) return t[c].exports;
    var o = t[c] = {
      i: c,
      l: !1,
      exports: {}
    };
    return e[c].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
  }

  n.m = e, n.c = t, n.d = function (e, t, c) {
    n.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: c
    });
  }, n.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, n.t = function (e, t) {
    if (1 & t && (e = n(e)), 8 & t) return e;
    if (4 & t && "object" == typeof e && e && e.__esModule) return e;
    var c = Object.create(null);
    if (n.r(c), Object.defineProperty(c, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var o in e) n.d(c, o, function (t) {
      return e[t];
    }.bind(null, o));
    return c;
  }, n.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default;
    } : function () {
      return e;
    };
    return n.d(t, "a", t), t;
  }, n.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, n.p = "", n(n.s = 16);
}([function (e, t, n) {
  "use strict";

  n.r(t), t.default = function () {
    const e = document.getElementById("bestestSlider");
    if (!e) return;
    const t = window.matchMedia("(min-width:768px)");
    let n;

    const c = function () {
      !0 !== t.matches ? !1 !== t.matches || (n = new Swiper(e, {
        pagination: {
          el: "#bestestSliderPagination",
          type: "bullets",
          clickable: !1
        },
        slidesPerView: 1,
        spaceBetween: 10,
        autoHeight: !0
      })) : void 0 !== n && n.destroy(!0, !0);
    };

    t.addListener(c), c();
  };
}, function (e, t, n) {
  "use strict";

  n.r(t), t.default = function () {
    const e = document.getElementById("blogLineFeed");
    if (!e) return;
    const t = [document.getElementById("newsBlogLineTab"), document.getElementById("articlesBlogLineTab"), document.getElementById("reviewsBlogLineTab")],
          n = e.querySelectorAll(".feed__list"),
          c = Array.prototype.slice.call(n);
    t.forEach((e, n) => {
      e.addEventListener("click", function () {
        let o = c[n];
        o.classList.contains("active") || (t.forEach(e => e.classList.remove("active")), e.classList.add("active"), c.forEach(e => e.classList.remove("active")), function (e) {
          e.classList.add("active");
        }(o));
      });
    });
  };
}, function (e, t, n) {
  "use strict";

  n.r(t), t.default = function () {
    const e = document.querySelectorAll(".cab-orders .cab-orders-item");
    if (!e) return;
    Array.prototype.slice.call(e).forEach(e => {
      e.addEventListener("click", function () {
        return e.classList.contains("active") ? e.classList.remove("active") : e.classList.add("active");
      });
    });
  };
}, function (e, t, n) {
  "use strict";

  n.r(t), t.default = function () {
    const e = document.querySelectorAll(".input-calc");
    Array.prototype.slice.call(e).forEach(e => {
      const t = e.querySelector("button.minus"),
            n = e.querySelector("button.plus"),
            c = e.querySelector("input");
      t.addEventListener("click", () => c.stepDown()), n.addEventListener("click", () => c.stepUp());
    });
  };
}, function (e, t, n) {
  "use strict";

  n.r(t), t.default = function () {
    const e = document.querySelectorAll(".catalog-filter-form__fieldset");
    if (!e.length) return;

    function t(e) {
      e.classList.remove("open"), html.style.overflowX = "hidden", html.style.overflowY = "scroll";
    }

    function n(e) {
      e.classList.add("open"), html.style.overflowX = "hidden", html.style.overflowY = "hidden";
    }

    Array.prototype.slice.call(e).forEach(e => {
      e.querySelector("legend").addEventListener("click", function () {
        e.classList.contains("active") ? e.classList.remove("active") : e.classList.add("active");
      });
      const t = e.querySelector(".catalog-filter-form__fieldset-more");
      t && t.addEventListener("click", function () {
        const n = e.querySelector(".catalog-filter-form__fieldset-content");
        n.classList.contains("open") ? (n.classList.remove("open"), t.innerText = "Смотреть все") : (n.classList.add("open"), t.innerText = "Скрыть");
      });
    });
    const c = document.getElementById("catalogFilter"),
          o = document.getElementById("catalogOpenFilterBtn"),
          i = document.getElementById("catalogFilterClose");
    o.addEventListener("click", function (e) {
      e.preventDefault(), n(c);
    }), i.addEventListener("click", function (e) {
      e.preventDefault(), t(c);
    }), c.addEventListener("click", function (e) {
      e.target === this && t(c);
    });
    const r = document.querySelectorAll(".price-slider");
    Array.prototype.slice.call(r).forEach(e => {
      var t = e,
          n = [e.querySelector(".slider-input1"), e.querySelector(".slider-input2")],
          c = parseInt(e.getAttribute("data-min")),
          o = parseInt(e.getAttribute("data-max")),
          i = 10 * o / 100,
          r = 90 * o / 100,
          l = e.getAttribute("data-symbol");
      noUiSlider.create(t, {
        start: [i, r],
        connect: [!1, !0, !1],
        range: {
          min: [c],
          max: o
        },
        format: {
          to: function (e) {
            return Math.ceil(e) + " " + l;
          },
          from: function (e) {
            return e.replace(" " + l, "");
          }
        }
      }), t.noUiSlider.on("update", function (e, t) {
        n[t].value = e[t];
      });
    });
  };
}, function (e, t, n) {
  "use strict";

  n.r(t), t.default = function () {
    const e = document.querySelectorAll(".drag-to-scroll");
    if (!e.length) return;
    Array.prototype.slice.call(e).forEach(e => {
      let t = {
        top: 0,
        left: 0,
        x: 0,
        y: 0
      };

      const n = function (n) {
        const c = n.clientX - t.x,
              o = n.clientY - t.y;
        e.scrollTop = t.top - o, e.scrollLeft = t.left - c;
      },
            c = function () {
        e.removeEventListener("mousemove", n), e.removeEventListener("mouseup", c), e.style.removeProperty("user-linect");
      };

      e.addEventListener("mousedown", function (o) {
        t = {
          left: e.scrollLeft,
          top: e.scrollTop,
          x: o.clientX,
          y: o.clientY
        }, e.addEventListener("mousemove", n), e.addEventListener("mouseup", c);
      });
    });
  };
}, function (e, t, n) {
  "use strict";

  n.r(t), t.default = function () {
    const e = document.getElementById("headerMenuBtn"),
          t = document.getElementById("menuCloseBtn"),
          n = document.getElementById("menuBox"),
          c = document.getElementById("catalogOpenBtn"),
          o = document.getElementById("catalogContent");

    function i(e) {
      e.classList.remove("mob-active"), html.style.overflowX = "hidden", html.style.overflowY = "scroll";
    }

    function r(e) {
      e.classList.add("mob-active"), html.style.overflowX = "hidden", html.style.overflowY = "hidden";
    }

    e.addEventListener("click", function () {
      r(n);
    }), t.addEventListener("click", function () {
      i(n);
    }), n.addEventListener("click", function (e) {
      e.target === this && i(n);
    }), c.addEventListener("click", function (e) {
      window.innerWidth > 1199 || (e.preventDefault(), c.classList.contains("back") ? (c.classList.remove("back"), o.classList.remove("mob-active")) : (c.classList.add("back"), o.classList.add("mob-active")));
    });
    const l = document.querySelectorAll(".catalog-modal__category");
    Array.prototype.slice.call(l).forEach(e => {
      e.addEventListener("click", function (t) {
        window.innerWidth > 1199 || (t.preventDefault(), e.classList.contains("mob-open") ? e.classList.remove("mob-open") : e.classList.add("mob-open"));
      });
    });
    const s = document.getElementById("searchInput"),
          a = document.getElementById("searchResults"),
          d = document.getElementById("mobSearchToggle"),
          u = document.getElementById("mobSearch");
    s.onfocus = function () {
      a.classList.add("active");
    }, s.onblur = function () {
      a.classList.remove("active");
    }, d.addEventListener("click", function () {
      u.classList.contains("active-mob") ? u.classList.remove("active-mob") : u.classList.add("active-mob");
    });
  };
}, function (e, t, n) {
  "use strict";

  n.r(t), t.default = function () {
    onmouseover;
    const e = document.querySelectorAll(".catalog-modal__category"),
          t = Array.prototype.slice.call(e);
    t.forEach(e => {
      e.onmouseover = function () {
        e.classList.contains("active") || (t.forEach(e => e.classList.remove("active")), e.classList.add("active"));
      };
    });
  };
}, function (e, t, n) {
  "use strict";

  n.r(t), t.default = function () {
    const e = document.querySelectorAll(".product-card");

    function t(e, t) {
      e.classList.remove("hidden"), t.classList.remove("active");
    }

    Array.prototype.slice.call(e).forEach(e => {
      const n = e.querySelector(".fake-order-button"),
            c = e.querySelector(".product-card__order-box");
      !function (e) {
        const t = e.querySelector("input"),
              n = e.querySelector(".num-input-down"),
              c = e.querySelector(".num-input-up");
        n.addEventListener("click", () => t.stepDown()), c.addEventListener("click", () => t.stepUp());
      }(c);
      const o = c.querySelector(".product-card__order");
      n.addEventListener("click", () => {
        var e;
        console.log("fake click"), e = c, n.classList.add("hidden"), e.classList.add("active");
      }), o.addEventListener("click", () => {
        console.log("order click"), t(n, c);
      }), e.onmouseleave = () => {
        console.log("prod out");
        setTimeout(() => t(n, c), 3e3);
      };
    });
  };
}, function (e, t, n) {
  "use strict";

  n.r(t), t.default = function () {
    const e = document.getElementById("lightgallery");
    e && lightGallery(e, {
      download: !1,
      thumbnail: !0,
      speed: 400,
      mousewheel: !0
    });
  };
}, function (e, t, n) {
  "use strict";

  n.r(t), t.default = function () {
    var e = new Swiper("#productPageThumbNail", {
      loop: !0,
      spaceBetween: 15,
      slidesPerView: 4.5,
      freeMode: !0,
      watchSlidesVisibility: !0,
      watchSlidesProgress: !0
    });
    new Swiper("#productPageLarge", {
      loop: !0,
      spaceBetween: 10,
      thumbs: {
        swiper: e
      },
      navigation: {
        nextEl: "#productPageNextBtn"
      },
      pagination: {
        el: "#productPageLargePagination",
        type: "bullets",
        clickable: !1
      }
    });
  };
}, function (e, t, n) {
  "use strict";

  n.r(t), t.default = function () {
    const e = document.querySelectorAll(".product-page .product-page__tabs .product-page__tab"),
          t = Array.prototype.slice.call(e),
          n = document.querySelectorAll(".product-page .product-page__drop-down-list .product-drop-down"),
          c = Array.prototype.slice.call(n);

    function o() {
      t.forEach(e => e.classList.remove("active"));
    }

    function i() {
      c.forEach(e => e.classList.remove("open"));
    }

    t.forEach((e, t) => {
      e.addEventListener("click", function () {
        const n = c[t];
        n.classList.contains("open") || (i(), o(), e.classList.add("active"), n.classList.add("open"));
      });
    });
    const r = document.querySelectorAll(".product-page .product-drop-down__header");
    Array.prototype.slice.call(r).forEach((e, n) => {
      e.addEventListener("click", function () {
        const r = c[n];
        r.classList.contains("open") || (i(), o(), t[n].classList.add("active"), r.classList.add("open"), html.scrollTo({
          top: e.offsetTop,
          behavior: "smooth"
        }));
      });
    });
  };
}, function (e, t, n) {
  "use strict";

  n.r(t), t.default = function () {
    const e = document.querySelector(".recommends__mob-slider.swiper-container");
    if (!e) return;
    const t = window.matchMedia("(min-width:1200px)");
    let n;

    const c = function () {
      !0 !== t.matches ? !1 !== t.matches || (n = new Swiper(e, {
        breakpoints: {
          320: {
            slidesPerView: 1.5,
            spaceBetween: 10
          },
          768: {
            slidesPerView: 2.5,
            spaceBetween: 30
          }
        }
      })) : void 0 !== n && n.destroy(!0, !0);
    };

    t.addListener(c), c();
  };
}, function (e, t, n) {
  "use strict";

  n.r(t), t.default = function () {
    new Swiper("#indexHeroSlider", {
      navigation: {
        nextEl: "#indexHeroSliderNextBtn",
        prevEl: "#indexHeroSliderPrevBtn"
      },
      pagination: {
        el: "#indexHeroSliderPagination",
        type: "fraction"
      },
      slidesPerView: 1,
      spaceBetween: 10
    });
    const e = document.querySelectorAll(".product-line");
    Array.prototype.slice.call(e).forEach(e => {
      const t = e.querySelector(".section-header__btn.prev"),
            n = e.querySelector(".section-header__btn.next"),
            c = e.querySelector(".swiper-container");
      new Swiper(c, {
        navigation: {
          nextEl: n,
          prevEl: t
        },
        watchOverflow: !0,
        breakpoints: {
          320: {
            slidesPerView: 1.5,
            spaceBetween: 10
          },
          768: {
            slidesPerView: 2.5,
            spaceBetween: 30
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 30
          }
        }
      });
    });
    new Swiper("#reviewsSlider", {
      navigation: {
        nextEl: "#reviewsSliderNextBtn",
        prevEl: "#reviewsSliderPrevBtn"
      },
      pagination: {
        el: "#reviewsSliderPagination",
        type: "bullets",
        clickable: !0
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        1200: {
          slidesPerView: 2,
          spaceBetween: 30
        }
      }
    }), new Swiper("#chanceSlider", {
      pagination: {
        el: "#chanceSliderPagination",
        type: "bullets",
        clickable: !0
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 0,
          loop: !0
        },
        768: {
          slidesPerView: 1.5,
          spaceBetween: 30,
          centeredSlides: !0,
          loop: !0,
          width: 768
        },
        1200: {
          slidesPerView: 2,
          spaceBetween: 30,
          centeredSlides: !0,
          loop: !0,
          width: 1170
        }
      }
    });
  };
}, function (e, t, n) {
  "use strict";

  n.r(t), t.default = function () {
    const e = [55.726048, 37.785159];
    document.getElementById("contactsMap") && ymaps.ready(function () {
      var t = new ymaps.Map("contactsMap", {
        center: e,
        zoom: 17
      }),
          n = new ymaps.Placemark(e, {}, {
        iconLayout: "default#image",
        iconImageHref: "assets/img/yamap-tag.png",
        iconImageSize: [130, 85],
        iconImageOffset: [-56, -85]
      });
      t.geoObjects.add(n);
    });
  };
}, function (e, t, n) {
  "use strict";

  n.r(t), t.default = function () {
    const e = document.querySelectorAll(".sms-code input");
    if (!e.length) return;
    const t = Array.prototype.slice.call(e);
    t.forEach((e, n) => {
      e.addEventListener("keyup", function (c) {
        if (69 === c.which) return e.value = "";
        let o = e.value,
            i = o.length;
        if (8 === c.which && t[n - 1]) return t[n - 1].focus();
        1 === i ? (e.value = o.substr(0, 1), t[n + 1] && t[n + 1].focus()) : t[n + 1] && 8 != c.which ? (e.value = o.substr(0, 1), t[n + 1].focus(), t[n + 1].value = o.substr(1, 1)) : i > 1 && !t[n + 1] && (e.value = o.substr(0, 1));
      });
    });
  };
}, function (e, t, n) {
  n(0), n(1), n(2), n(3), n(4), n(5), n(6), n(7), n(8), n(9), n(10), n(11), n(12), n(17), n(13), n(15), e.exports = n(14);
}, function (e, t, n) {
  "use strict";

  n.r(t);
  var c = n(13),
      o = n(0),
      i = n(12),
      r = n(3),
      l = n(14),
      s = n(1),
      a = n(2),
      d = n(8),
      u = n(4),
      f = n(11),
      p = n(10),
      m = n(7),
      v = n(5),
      y = n(15),
      g = n(6),
      w = n(9);
  document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("header");
    Object(c.default)(), Object(o.default)(), Object(i.default)(), Object(d.default)(), Object(l.default)(), Object(s.default)(), Object(a.default)(), Object(r.default)(), Object(u.default)(), Object(f.default)(), Object(p.default)(), Object(m.default)(), Object(v.default)(), Object(y.default)(), Object(g.default)(), Object(w.default)();
  });
}]);