function E() {
  var o, t, r, s, y, T, M, S;
  const c = Array.from(document.querySelectorAll("[countdown-timer]"));
  for (const e of c) {
    const f = new Date(e.getAttribute("data-date"));
    if (isNaN(f.getTime())) {
      console.error("Invalid date:", e.getAttribute("data-date")), e.innerHTML = "** Countdown Timer Invalid Date, check console for more info **";
      continue;
    }
    const a = e.querySelector("[days]"), u = e.querySelector("[hours]"), d = e.querySelector("[minutes]"), l = e.querySelector("[seconds]");
    if (!a || !u || !d || !l) {
      console.error("Missing elements:", e), e.innerHTML = "** Countdown Timer Error, check console for more info **";
      continue;
    }
    const i = e.querySelector("[data-expired-message]"), L = (i == null ? void 0 : i.innerHTML) ?? "Expired";
    i == null || i.remove();
    const h = [((o = a.querySelector("[data-unit]")) == null ? void 0 : o.innerHTML) ?? "day", ((t = a.querySelector("[data-days]")) == null ? void 0 : t.innerHTML) ?? "days"], q = [((r = u.querySelector("[data-init]")) == null ? void 0 : r.innerHTML) ?? "hour", ((s = u.querySelector("[data-inits]")) == null ? void 0 : s.innerHTML) ?? "hours"], H = [((y = d.querySelector("[data-unit]")) == null ? void 0 : y.innerHTML) ?? "minute", ((T = d.querySelector("[data-units]")) == null ? void 0 : T.innerHTML) ?? "minutes"], g = [((M = l.querySelector("[data-unit]")) == null ? void 0 : M.innerHTML) ?? "seconds", ((S = l.querySelector("[data-units]")) == null ? void 0 : S.innerHTML) ?? "seconds"], v = w(f);
    if (!v) {
      e.innerHTML = L;
      continue;
    }
    const { days: p, hours: A, minutes: I, seconds: U } = v;
    n(a, p, h), n(u, A, q), n(d, I, H), n(l, U, g);
    const D = setInterval(() => {
      const m = w(f);
      if (!m) {
        clearInterval(D), e.innerHTML = L;
        return;
      }
      n(a, m.days, h), n(u, m.hours, q), n(d, m.minutes, H), n(l, m.seconds, g);
    }, 1e3);
  }
}
const n = (c, o, t) => {
  const r = o.toString().padStart(2, "0"), s = o === 1 ? t[0] : t[1];
  c.innerHTML = `${r} ${s}`;
}, w = (c) => {
  const o = /* @__PURE__ */ new Date(), t = c.getTime() - o.getTime();
  if (t < 0)
    return null;
  const r = Math.floor(t / (1e3 * 60 * 60 * 24)), s = Math.floor(t % (1e3 * 60 * 60 * 24) / (1e3 * 60 * 60)), y = Math.floor(t % (1e3 * 60 * 60) / (1e3 * 60)), T = Math.floor(t % (1e3 * 60) / 1e3);
  return { days: r, hours: s, minutes: y, seconds: T };
};
export {
  E as setupTimers
};
