export const transformMounth = (param) => {
  let months = {
    1: "Jan",
    2: "Fev",
    3: "Mar",
    4: "Abr",
    5: "Mai",
    6: "Jun",
    7: "Jul",
    8: "Agos",
    9: "Setem",
    10: "Outu",
    11: "Nov",
    12: "Dez",
  };
  return months[param];
};
