/* eslint-disable consistent-return */
const shmoment = (date) => {
  const res = new Date(date);

  const methods = {
    add(view, value) {
      if (view === "years") {
        res.setFullYear(res.getFullYear() + value);
        return this;
      }
      if (view === "months") {
        res.setMonth(res.getMonth() + value);
        return this;
      }
      if (view === "days") {
        res.setDate(res.getDate() + value);
        return this;
      }
      if (view === "hours") {
        res.setHours(res.getHours() + value);
        return this;
      }
      if (view === "minutes") {
        res.setMinutes(res.getMinutes() + value);
        return this;
      }
      if (view === "seconds") {
        res.setSeconds(res.getSeconds() + value);
        return this;
      }
      if (view === "milliseconds") {
        res.setMilliseconds(res.getMilliseconds() + value);
        return this;
      }
    },

    subtract(view, value) {
      if (view === "years") {
        res.setFullYear(res.getFullYear() - value);
        return this;
      }
      if (view === "months") {
        res.setMonth(res.getMonth() - value);
        return this;
      }
      if (view === "days") {
        res.setDate(res.getDate() - value);
        return this;
      }
      if (view === "hours") {
        res.setHours(res.getHours() - value);
        return this;
      }
      if (view === "minutes") {
        res.setMinutes(res.getMinutes() - value);
        return this;
      }
      if (view === "seconds") {
        res.setSeconds(res.getSeconds() - value);
        return this;
      }
      if (view === "milliseconds") {
        res.setMilliseconds(res.getMilliseconds() - value);
        return this;
      }
    },
    result() {
      return new Date(res);
    },
  };
  return methods;
};

console.log(
  shmoment(new Date(2020, 0, 7, 17, 17, 17))
    .add("minutes", 2)
    .add("days", 8)
    .subtract("years", 1)
    .result()
);
