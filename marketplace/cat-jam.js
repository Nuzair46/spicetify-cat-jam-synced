!(async function () {
  for (; !Spicetify.React || !Spicetify.ReactDOM; )
    await new Promise((e) => setTimeout(e, 10));
  var p, s, l, d, c, u, m, e, t, a, o, n, f, y, i;
  (s = Object.create),
    (l = Object.defineProperty),
    (d = Object.getOwnPropertyDescriptor),
    (c = Object.getOwnPropertyNames),
    (u = Object.getPrototypeOf),
    (m = Object.prototype.hasOwnProperty),
    (a = (e = (e, t) =>
      function () {
        return (
          t || (0, e[c(e)[0]])((t = { exports: {} }).exports, t), t.exports
        );
      })({
      "external-global-plugin:react-dom"(e, t) {
        t.exports = Spicetify.ReactDOM;
      },
    })),
    (o = (t = (e, t, a) => {
      a = null != e ? s(u(e)) : {};
      var n =
          !t && e && e.__esModule
            ? a
            : l(a, "default", { value: e, enumerable: !0 }),
        i = e,
        r = void 0,
        o = void 0;
      if ((i && "object" == typeof i) || "function" == typeof i)
        for (let e of c(i))
          m.call(n, e) ||
            e === r ||
            l(n, e, {
              get: () => i[e],
              enumerable: !(o = d(i, e)) || o.enumerable,
            });
      return n;
    })(
      e({
        "external-global-plugin:react"(e, t) {
          t.exports = Spicetify.React;
        },
      })()
    )),
    (n = t(a())),
    (f = new (class {
      constructor(e, t, a = {}) {
        (this.name = e),
          (this.settingsId = t),
          (this.initialSettingsFields = a),
          (this.settingsFields = this.initialSettingsFields),
          (this.setRerender = null),
          (this.pushSettings = async () => {
            for (
              Object.entries(this.settingsFields).forEach(([e, t]) => {
                "button" !== t.type &&
                  void 0 === this.getFieldValue(e) &&
                  this.setFieldValue(e, t.defaultValue);
              });
              !Spicetify?.Platform?.History?.listen;

            )
              await new Promise((e) => setTimeout(e, 100));
            this.stopHistoryListener && this.stopHistoryListener(),
              (this.stopHistoryListener = Spicetify.Platform.History.listen(
                (e) => {
                  "/preferences" === e.pathname && this.render();
                }
              )),
              "/preferences" === Spicetify.Platform.History.location.pathname &&
                (await this.render());
          }),
          (this.rerender = () => {
            this.setRerender && this.setRerender(Math.random());
          }),
          (this.render = async () => {
            for (
              ;
              !document.getElementById("desktop.settings.selectLanguage");

            ) {
              if (
                "/preferences" !== Spicetify.Platform.History.location.pathname
              )
                return;
              await new Promise((e) => setTimeout(e, 100));
            }
            var e = document.querySelector(
              ".main-view-container__scroll-node-child main div"
            );
            if (!e)
              return console.error(
                "[spcr-settings] settings container not found"
              );
            let t = Array.from(e.children).find(
              (e) => e.id === this.settingsId
            );
            t
              ? console.log(t)
              : (((t = document.createElement("div")).id = this.settingsId),
                e.appendChild(t)),
              n.default.render(
                o.default.createElement(this.FieldsContainer, null),
                t
              );
          }),
          (this.addButton = (e, t, a, n, i) => {
            this.settingsFields[e] = {
              type: "button",
              description: t,
              value: a,
              events: { onClick: n, ...i },
            };
          }),
          (this.addInput = (e, t, a, n, i, r) => {
            this.settingsFields[e] = {
              type: "input",
              description: t,
              defaultValue: a,
              inputType: i,
              events: { onChange: n, ...r },
            };
          }),
          (this.addHidden = (e, t) => {
            this.settingsFields[e] = { type: "hidden", defaultValue: t };
          }),
          (this.addToggle = (e, t, a, n, i) => {
            this.settingsFields[e] = {
              type: "toggle",
              description: t,
              defaultValue: a,
              events: { onChange: n, ...i },
            };
          }),
          (this.addDropDown = (e, t, a, n, i, r) => {
            this.settingsFields[e] = {
              type: "dropdown",
              description: t,
              defaultValue: a[n],
              options: a,
              events: { onSelect: i, ...r },
            };
          }),
          (this.getFieldValue = (e) =>
            JSON.parse(
              Spicetify.LocalStorage.get(this.settingsId + "." + e) || "{}"
            )?.value),
          (this.setFieldValue = (e, t) => {
            Spicetify.LocalStorage.set(
              this.settingsId + "." + e,
              JSON.stringify({ value: t })
            );
          }),
          (this.FieldsContainer = () => {
            var [e, t] = (0, o.useState)(0);
            return (
              (this.setRerender = t),
              o.default.createElement(
                "div",
                { className: "x-settings-section", key: e },
                o.default.createElement(
                  "h2",
                  { className: "TypeElement-cello-textBase-type" },
                  this.name
                ),
                Object.entries(this.settingsFields).map(([e, t]) =>
                  o.default.createElement(this.Field, { nameId: e, field: t })
                )
              )
            );
          }),
          (this.Field = (a) => {
            var e = this.settingsId + "." + a.nameId;
            let t;
            if (
              ((t =
                "button" === a.field.type
                  ? a.field.value
                  : this.getFieldValue(a.nameId)),
              "hidden" === a.field.type)
            )
              return o.default.createElement(o.default.Fragment, null);
            const [n, i] = (0, o.useState)(t),
              r = (e) => {
                void 0 !== e && (i(e), this.setFieldValue(a.nameId, e));
              };
            return o.default.createElement(
              "div",
              { className: "x-settings-row" },
              o.default.createElement(
                "div",
                { className: "x-settings-firstColumn" },
                o.default.createElement(
                  "label",
                  {
                    className: "TypeElement-viola-textSubdued-type",
                    htmlFor: e,
                  },
                  a.field.description || ""
                )
              ),
              o.default.createElement(
                "div",
                { className: "x-settings-secondColumn" },
                "input" === a.field.type
                  ? o.default.createElement("input", {
                      className: "x-settings-input",
                      id: e,
                      dir: "ltr",
                      value: n,
                      type: a.field.inputType || "text",
                      ...a.field.events,
                      onChange: (e) => {
                        r(e.currentTarget.value);
                        var t = a.field.events?.onChange;
                        t && t(e);
                      },
                    })
                  : "button" === a.field.type
                  ? o.default.createElement(
                      "span",
                      null,
                      o.default.createElement(
                        "button",
                        {
                          id: e,
                          className:
                            "Button-sc-y0gtbx-0 Button-small-buttonSecondary-useBrowserDefaultFocusStyle x-settings-button",
                          ...a.field.events,
                          onClick: (e) => {
                            r();
                            var t = a.field.events?.onClick;
                            t && t(e);
                          },
                          type: "button",
                        },
                        n
                      )
                    )
                  : "toggle" === a.field.type
                  ? o.default.createElement(
                      "label",
                      { className: "x-settings-secondColumn x-toggle-wrapper" },
                      o.default.createElement("input", {
                        id: e,
                        className: "x-toggle-input",
                        type: "checkbox",
                        checked: n,
                        ...a.field.events,
                        onClick: (e) => {
                          r(e.currentTarget.checked);
                          var t = a.field.events?.onClick;
                          t && t(e);
                        },
                      }),
                      o.default.createElement(
                        "span",
                        { className: "x-toggle-indicatorWrapper" },
                        o.default.createElement("span", {
                          className: "x-toggle-indicator",
                        })
                      )
                    )
                  : "dropdown" === a.field.type
                  ? o.default.createElement(
                      "select",
                      {
                        className: "main-dropDown-dropDown",
                        id: e,
                        ...a.field.events,
                        onChange: (e) => {
                          r(a.field.options[e.currentTarget.selectedIndex]);
                          var t = a.field.events?.onChange;
                          t && t(e);
                        },
                      },
                      a.field.options.map((e, t) =>
                        o.default.createElement(
                          "option",
                          { selected: e === n, value: t + 1 },
                          e
                        )
                      )
                    )
                  : o.default.createElement(o.default.Fragment, null)
              )
            );
          });
      }
    })("Cat-Jam Settings", "catjam-settings")),
    (y = `
    @keyframes gradient {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }

    #catjam-rgb-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(45deg, rgba(255, 0, 0, 0.5), rgba(0, 255, 0, 0.5), rgba(0, 0, 255, 0.5));
        background-size: 200% 200%;
        animation: gradient 5s ease infinite;
        mix-blend-mode: screen;
        pointer-events: none;
        background-blend-mode: multiply;
        z-index: 2;
    }
`),
    (i = async function () {
      for (
        var e;
        null == (e = null == Spicetify ? void 0 : Spicetify.Player) ||
        !e.addEventListener ||
        null == Spicetify ||
        !Spicetify.getAudioData;

      )
        await new Promise((e) => setTimeout(e, 100));
      console.log("[CAT-JAM] Extension loaded.");
      let n,
        i =
          (f.addInput(
            "catjam-webm-link",
            "Custom webM video URL (Link does not work if no video shows)",
            ""
          ),
          f.addInput(
            "catjam-webm-bpm",
            "Custom default BPM of webM video (Example: 135.48)",
            ""
          ),
          f.addDropDown(
            "catjam-webm-position",
            "Position where webM video should be rendered",
            ["Bottom (Player)", "Left (Library)"],
            1
          ),
          f.addInput(
            "catjam-webm-position-left-size",
            "Size of webM video on the left library (Only works for left library, Default: 100)",
            ""
          ),
          f.addButton(
            "catjam-reload",
            "Reload custom values",
            "Save and reload",
            () => {
              b();
            }
          ),
          f.pushSettings(),
          b(),
          Spicetify.Player.addEventListener("onplaypause", async () => {
            var e = performance.now(),
              t = Spicetify.Player.getProgress();
            r(e, (i = t));
          }),
          0);
      Spicetify.Player.addEventListener("onprogress", async () => {
        var e = performance.now(),
          t = Spicetify.Player.getProgress();
        500 <= Math.abs(t - i) && r(e, t), (i = t);
      }),
        Spicetify.Player.addEventListener("songchange", async () => {
          var e,
            t = performance.now();
          i = Spicetify.Player.getProgress();
          const a = document.getElementById("catjam-webm");
          a
            ? (n = await h()) && n.beats && 0 < n.beats.length
              ? ((e = n.beats[0].start),
                (a.playbackRate = await g(n)),
                (t = performance.now() - t),
                (e = Math.max(0, 1e3 * e - t)),
                setTimeout(() => {
                  (a.currentTime = 0), a.play();
                }, e))
              : ((a.playbackRate = await g(n)), (a.currentTime = 0), a.play())
            : console.error("[CAT-JAM] Video element not found.");
        });
    }),
    (async () => {
      await i();
    })();
  async function g(t) {
    let a = Number(f.getFieldValue("catjam-webm-bpm"));
    if ((console.log(a), (a = a || 135.48), t && null != t && t.track)) {
      t = null == (t = null == t ? void 0 : t.track) ? void 0 : t.tempo;
      let e = 1;
      return (
        t && (e = t / a),
        console.log("[CAT-JAM] Track BPM:", t),
        console.log("[CAT-JAM] Cat jam synchronized, playback rate set to:", e),
        e
      );
    }
    return (
      console.warn(
        "[CAT-JAM] BPM data not available for this track, cat will not be jamming accurately :("
      ),
      1
    );
  }
  async function h(t = 200, a = 10) {
    try {
      return await Spicetify.getAudioData();
    } catch (e) {
      if ("object" == typeof e && null !== e && "message" in e) {
        if (e.message.includes("Cannot read properties of undefined") && 0 < a)
          return (
            console.log("[CAT-JAM] Retrying to fetch audio data..."),
            await new Promise((e) => setTimeout(e, t)),
            h(t, a - 1)
          );
      } else console.warn("[CAT-JAM] Error fetching audio data: " + e);
      return null;
    }
  }
  async function r(e, t) {
    const a = document.getElementById("catjam-webm");
    var n;
    a
      ? Spicetify.Player.isPlaying()
        ? ((t /= 1e3),
          p && p.beats
            ? ((n = p.beats.find((e) => e.start > t))
                ? ((e = performance.now() - e),
                  (n = Math.max(0, 1e3 * (n.start - t) - e)),
                  setTimeout(() => {
                    (a.currentTime = 0), a.play();
                  }, n))
                : ((a.currentTime = 0), a.play()),
              console.log("[CAT-JAM] Resynchronized to nearest beat"))
            : ((a.currentTime = 0), a.play()))
        : a.pause()
      : console.error("[CAT-JAM] Video element not found.");
  }
  async function b() {
    try {
      let e = Number(f.getFieldValue("catjam-webm-position-left-size"));
      e = e || 100;
      var a = `width: ${e}%; max-width: 300px; height: 100%; max-height: 229px; bottom: 0; pointer-events: none; z-index: 1; position: absolute;`,
        n = f.getFieldValue("catjam-webm-position"),
        i = "Bottom (Player)" === n ? "width: 65px; height: 65px;" : a,
        r = await (async function (e, t = 50, a = 100) {
          let n = 0;
          for (; n < t; ) {
            var i = document.querySelector(e);
            if (i) return i;
            await new Promise((e) => setTimeout(e, a)), n++;
          }
          throw new Error(`Element ${e} not found after ${t} attempts.`);
        })(
          "Bottom (Player)" === n
            ? ".main-nowPlayingBar-right"
            : ".main-yourLibraryX-libraryItemContainer"
        ),
        o = document.getElementById("catjam-webm"),
        s = (o && o.remove(), document.getElementById("catjam-webm-container")),
        l = (s && s.remove(), document.getElementById("catjam-rgb-overlay"));
      l && l.remove();
      let t = String(f.getFieldValue("catjam-webm-link"));
      t =
        t ||
        "https://github.com/BlafKing/spicetify-cat-jam-synced/raw/main/src/resources/catjam.webm";
      var d = document.createElement("div"),
        c =
          (d.setAttribute("id", "catjam-webm-container"),
          d.setAttribute("style", i),
          document.createElement("style")),
        u =
          ((c.textContent = y),
          document.head.appendChild(c),
          document.createElement("div")),
        m =
          (u.setAttribute("id", "catjam-rgb-overlay"),
          document.createElement("video"));
      m.setAttribute("loop", "true"),
        m.setAttribute("autoplay", "true"),
        m.setAttribute("muted", "true"),
        m.setAttribute("style", i),
        (m.src = t),
        (m.id = "catjam-webm"),
        (p = await h()),
        (m.playbackRate = await g(p)),
        d.appendChild(m),
        d.appendChild(u),
        r.firstChild ? r.insertBefore(d, r.firstChild) : r.appendChild(d),
        Spicetify.Player.isPlaying() ? m.play() : m.pause();
    } catch (e) {
      console.error("[CAT-JAM] Could not create cat-jam video element: ", e);
    }
  }
})();
