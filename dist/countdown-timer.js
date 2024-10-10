function E() {
  var o, t, r, s, y, T, M, S;
  const i = Array.from(document.querySelectorAll("[countdown-timer]"));
  for (const e of i) {
    console.log("element:", e);
    const f = new Date(e.getAttribute("data-date"));
    if (isNaN(f.getTime())) {
      console.error("Invalid date:", e.getAttribute("data-date")), e.innerHTML = "** Countdown Timer Invalid Date, check console for more info **";
      continue;
    }
    const u = e.querySelector("[days]"), a = e.querySelector("[hours]"), l = e.querySelector("[minutes]"), d = e.querySelector("[seconds]");
    if (!u || !a || !l || !d) {
      console.error("Missing elements:", e), e.innerHTML = "** Countdown Timer Error, check console for more info **";
      continue;
    }
    const c = e.querySelector("[data-expired-message]"), L = (c == null ? void 0 : c.innerHTML) ?? "Expired";
    c == null || c.remove();
    const h = [((o = u.querySelector("[data-unit]")) == null ? void 0 : o.innerHTML) ?? "day", ((t = u.querySelector("[data-units]")) == null ? void 0 : t.innerHTML) ?? "days"], q = [((r = a.querySelector("[data-unit]")) == null ? void 0 : r.innerHTML) ?? "hour", ((s = a.querySelector("[data-units]")) == null ? void 0 : s.innerHTML) ?? "hours"], H = [((y = l.querySelector("[data-unit]")) == null ? void 0 : y.innerHTML) ?? "minute", ((T = l.querySelector("[data-units]")) == null ? void 0 : T.innerHTML) ?? "minutes"], g = [((M = d.querySelector("[data-unit]")) == null ? void 0 : M.innerHTML) ?? "seconds", ((S = d.querySelector("[data-units]")) == null ? void 0 : S.innerHTML) ?? "seconds"], v = w(f);
    if (!v) {
      e.innerHTML = L;
      continue;
    }
    const { days: p, hours: A, minutes: I, seconds: U } = v;
    n(u, p, h), n(a, A, q), n(l, I, H), n(d, U, g);
    const D = setInterval(() => {
      const m = w(f);
      if (!m) {
        clearInterval(D), e.innerHTML = L;
        return;
      }
      n(u, m.days, h), n(a, m.hours, q), n(l, m.minutes, H), n(d, m.seconds, g);
    }, 1e3);
  }
}
const n = (i, o, t) => {
  const r = o.toString().padStart(2, "0"), s = o <= 1 ? t[0] : t[1];
  i.innerHTML = `${r} ${s}`;
}, w = (i) => {
  const o = /* @__PURE__ */ new Date(), t = i.getTime() - o.getTime();
  if (t < 0)
    return null;
  const r = Math.floor(t / (1e3 * 60 * 60 * 24)), s = Math.floor(t % (1e3 * 60 * 60 * 24) / (1e3 * 60 * 60)), y = Math.floor(t % (1e3 * 60 * 60) / (1e3 * 60)), T = Math.floor(t % (1e3 * 60) / 1e3);
  return { days: r, hours: s, minutes: y, seconds: T };
};
export {
  E as setupTimers
};
