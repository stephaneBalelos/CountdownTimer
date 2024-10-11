function b() {
  var n, t, o, s, y, f, M, S;
  const c = Array.from(document.querySelectorAll("[countdown-timer]"));
  for (const e of c) {
    console.log("element:", e);
    const T = new Date(e.getAttribute("data-date"));
    if (isNaN(T.getTime())) {
      console.error("Invalid date:", e.getAttribute("data-date")), e.innerHTML = "** Countdown Timer Invalid Date, check console for more info **";
      continue;
    }
    const a = e.querySelector("[days]"), u = e.querySelector("[hours]"), l = e.querySelector("[minutes]"), d = e.querySelector("[seconds]");
    if (!a || !u || !l || !d) {
      console.error("Missing elements:", e), e.innerHTML = "** Countdown Timer Error, check console for more info **";
      continue;
    }
    const q = e.querySelector("[data-active-message]"), i = e.querySelector("[data-expired-message]"), L = (i == null ? void 0 : i.innerHTML) ?? "Expired";
    i == null || i.remove();
    const h = [((n = a.querySelector("[data-unit]")) == null ? void 0 : n.innerHTML) ?? "day", ((t = a.querySelector("[data-units]")) == null ? void 0 : t.innerHTML) ?? "days"], H = [((o = u.querySelector("[data-unit]")) == null ? void 0 : o.innerHTML) ?? "hour", ((s = u.querySelector("[data-units]")) == null ? void 0 : s.innerHTML) ?? "hours"], g = [((y = l.querySelector("[data-unit]")) == null ? void 0 : y.innerHTML) ?? "minute", ((f = l.querySelector("[data-units]")) == null ? void 0 : f.innerHTML) ?? "minutes"], v = [((M = d.querySelector("[data-unit]")) == null ? void 0 : M.innerHTML) ?? "seconds", ((S = d.querySelector("[data-units]")) == null ? void 0 : S.innerHTML) ?? "seconds"], w = p(T);
    if (!w) {
      e.innerHTML = L;
      continue;
    }
    const { days: A, hours: E, minutes: I, seconds: U } = w;
    r(a, A, h), r(u, E, H), r(l, I, g), r(d, U, v);
    const D = setInterval(() => {
      const m = p(T);
      if (!m) {
        clearInterval(D), q && q.remove(), e.innerHTML = L;
        return;
      }
      r(a, m.days, h), r(u, m.hours, H), r(l, m.minutes, g), r(d, m.seconds, v);
    }, 1e3);
  }
}
const r = (c, n, t) => {
  let o = n.toString();
  n != 0 && (o = o.padStart(2, "0"));
  const s = n <= 1 ? t[0] : t[1];
  c.innerHTML = `${o} ${s}`;
}, p = (c) => {
  const n = /* @__PURE__ */ new Date(), t = c.getTime() - n.getTime();
  if (t < 0)
    return null;
  const o = Math.floor(t / (1e3 * 60 * 60 * 24)), s = Math.floor(t % (1e3 * 60 * 60 * 24) / (1e3 * 60 * 60)), y = Math.floor(t % (1e3 * 60 * 60) / (1e3 * 60)), f = Math.floor(t % (1e3 * 60) / 1e3);
  return { days: o, hours: s, minutes: y, seconds: f };
};
export {
  b as setupTimers
};
