export const separadorBlanco = {
  separadortop: "./assets/separador3.png",
  separadorNameLeftURL: "./assets/finaldefinales.png",
  separadorNameRightURL: "./assets/separadorfinal.png",
  separadorNameBottomURL: "./assets/separador.png",
};

export const separadorNegro = {
  separadortop: "./assets/separador3noir.png",
  separadorNameLeftURL: "./assets/finaldefinalesnoir.png",
  separadorNameRightURL: "./assets/separadorfinalnoir.png",
  separadorNameBottomURL: "./assets/separadornoir.png",
};

export const br = {
  mainColor: "rgb(168, 165, 0)",
  secondColor: "rgb(10, 119, 0)",
  thirdColor: "rgb(10, 119, 0)",
  mainColorTp: "rgba(168, 165, 0, 0.9)",
  secondColorTp: "rgba(217, 220, 173, 0.6)",
  thirdColorTp: "rgba(7, 85, 0, 0.4)",
};

export const ar = {
  mainColor: "rgb(0, 158, 179)",
  secondColor: "rgb(0, 54, 155)",
  thirdColor: "rgb(218, 218, 218)",
  mainColorTp: "rgba(0, 158, 179, 0.6)",
  secondColorTp: "rgba(218, 218, 218, 0.4)",
  thirdColorTp: "rgba(0, 54, 155, 0.6)",
};
export const fr = {
  mainColor: "rgb(22, 52, 134)",
  secondColor: "rgb(146, 0, 0)",
  thirdColor: "rgb(219, 219, 219)",
  mainColorTp: "rgba(22, 52, 134, 0.6)",
  secondColorTp: "rgba(219, 219, 219, 0.4)",
  thirdColorTp: "rgba(146, 0, 0, 0.6)",
};
export const nl = {
  mainColor: "rgb(206, 117, 0)",
  secondColor: "rgb(29, 29, 29)",
  thirdColor: "rgb(219, 219, 219)",
  mainColorTp: "rgba(206, 117, 0, 0.8)",
  secondColorTp: "rgba(182, 148, 103, 0.8)",
  thirdColorTp: "rgba(184,104,0, 0.8)",
};
export const it = {
  mainColor: "rgb(24, 80, 199)",
  secondColor: "rgb(15, 112, 31)",
  thirdColor: "rgb(146, 7, 7)",
  mainColorTp: "rgba(24, 80, 199, 0.8)",
  secondColorTp: "rgba(233, 233, 233, 0.8)",
  thirdColorTp: "rgba(0, 184, 31, 0.9)",
};

export const gbENG = {
  mainColor: "rgb(240, 240, 240)",
  secondColor: "rgb(163, 44, 23)",
  thirdColor: "rgb(223, 223, 223)",
  mainColorTp: "rgba(163, 44, 2, 0.8)",
  secondColorTp: "rgba(233, 233, 233, 0.8)",
  thirdColorTp: "rgba(0, 184, 31, 0.9)",
  mainTextColor: "rgb(19, 19, 19)",
};
export const pt = {
  mainColor: "rgb(163, 40, 40)",
  secondColor: "rgb(31, 134, 57)",
  thirdColor: "rgb(31, 134, 57)",
  mainColorTp: "rgba(163, 44, 2, 0.8)",
  secondColorTp: "rgba(233, 233, 233, 0.8)",
  thirdColorTp: "rgba(0, 184, 31, 0.9)",
};
export const de = {
  mainColor: "rgb(240, 240, 240)",
  secondColor: "rgb(29, 29, 29)",
  thirdColor: "rgb(146, 7, 7)",
  mainColorTp: "rgba(29, 29, 29, 0.9)",
  secondColorTp: "rgba(233, 233, 233, 0.8)",
  thirdColorTp: "rgba(0, 184, 31, 0.9)",
  mainTextColor: "rgb(19, 19, 19)",
};
export const bg = {
  mainColor: "rgb(240, 240, 240)",
  secondColor: "rgb(0, 129, 65)",
  thirdColor: "rgb(187, 0, 0)",
  mainColorTp: "rgba(0, 129, 65, 0.8)",
  secondColorTp: "rgba(233, 233, 233, 0.8)",
  thirdColorTp: "rgba(187, 0, 0, 0.9)",
  mainTextColor: "rgb(19, 19, 19)",
};
export const es = {
  mainColor: "rgb(187, 0, 0)",
  secondColor: "rgb(216, 212, 0)",
  thirdColor: "rgb(216, 212, 0)",
  mainColorTp: "rgba(216, 212, 0, 0.8)",
  secondColorTp: "rgba(233, 233, 233, 0.8)",
  thirdColorTp: "rgba(187, 0, 0, 0.9)",
};

export const cardContainerStyle = (country) => {
  let mainColor,
    secondColor,
    thirdColor,
    mainColorTp,
    secondColorTp,
    thirdColorTp,
    mainTextColor,
    separadorTopURL,
    separadorNameLeftURL,
    separadorNameRightURL,
    separadorNameBottomURL,
    cardContainer,
    leftTop,
    rightTop,
    namesContainer,
    bottomContainer,
    rectangle,
    separadortop,
    separadorNameLeft,
    separadorNameRight,
    separadorNameBottom,
    styles;
  if (country === "br") {
    mainColor = br.mainColor;
    secondColor = br.secondColor;
    thirdColor = br.thirdColor;
    mainColorTp = br.mainColorTp;
    secondColorTp = br.secondColorTp;
    thirdColorTp = br.thirdColorTp;
    separadorTopURL = separadorBlanco.separadortop;
    separadorNameLeftURL = separadorBlanco.separadorNameLeftURL;
    separadorNameRightURL = separadorBlanco.separadorNameRightURL;
    separadorNameBottomURL = separadorBlanco.separadorNameBottomURL;
  } else if (country === "ar") {
    mainColor = ar.mainColor;
    secondColor = ar.secondColor;
    thirdColor = ar.thirdColor;
    mainColorTp = ar.mainColorTp;
    secondColorTp = ar.secondColorTp;
    thirdColorTp = ar.thirdColorTp;
    separadorTopURL = separadorBlanco.separadortop;
    separadorNameLeftURL = separadorBlanco.separadorNameLeftURL;
    separadorNameRightURL = separadorBlanco.separadorNameRightURL;
    separadorNameBottomURL = separadorBlanco.separadorNameBottomURL;
  } else if (country === "fr") {
    mainColor = fr.mainColor;
    secondColor = fr.secondColor;
    thirdColor = fr.thirdColor;
    mainColorTp = fr.mainColorTp;
    secondColorTp = fr.secondColorTp;
    thirdColorTp = fr.thirdColorTp;
    separadorTopURL = separadorBlanco.separadortop;
    separadorNameLeftURL = separadorBlanco.separadorNameLeftURL;
    separadorNameRightURL = separadorBlanco.separadorNameRightURL;
    separadorNameBottomURL = separadorBlanco.separadorNameBottomURL;
  } else if (country === "nl") {
    mainColor = nl.mainColor;
    secondColor = nl.secondColor;
    thirdColor = nl.thirdColor;
    mainColorTp = nl.mainColorTp;
    secondColorTp = nl.secondColorTp;
    thirdColorTp = nl.thirdColorTp;
    separadorTopURL = separadorBlanco.separadortop;
    separadorNameLeftURL = separadorBlanco.separadorNameLeftURL;
    separadorNameRightURL = separadorBlanco.separadorNameRightURL;
    separadorNameBottomURL = separadorBlanco.separadorNameBottomURL;
  } else if (country === "it") {
    mainColor = it.mainColor;
    secondColor = it.secondColor;
    thirdColor = it.thirdColor;
    mainColorTp = it.mainColorTp;
    secondColorTp = it.secondColorTp;
    thirdColorTp = it.thirdColorTp;
    separadorTopURL = separadorBlanco.separadortop;
    separadorNameLeftURL = separadorBlanco.separadorNameLeftURL;
    separadorNameRightURL = separadorBlanco.separadorNameRightURL;
    separadorNameBottomURL = separadorBlanco.separadorNameBottomURL;
  } else if (country === "GB-ENG") {
    mainColor = gbENG.mainColor;
    secondColor = gbENG.secondColor;
    thirdColor = gbENG.thirdColor;
    mainColorTp = gbENG.mainColorTp;
    secondColorTp = gbENG.secondColorTp;
    thirdColorTp = gbENG.thirdColorTp;
    mainTextColor = gbENG.mainTextColor;
    separadorTopURL = separadorNegro.separadortop;
    separadorNameLeftURL = separadorNegro.separadorNameLeftURL;
    separadorNameRightURL = separadorNegro.separadorNameRightURL;
    separadorNameBottomURL = separadorNegro.separadorNameBottomURL;
  } else if (country === "pt") {
    mainColor = pt.mainColor;
    secondColor = pt.secondColor;
    thirdColor = pt.thirdColor;
    mainColorTp = pt.mainColorTp;
    secondColorTp = pt.secondColorTp;
    thirdColorTp = pt.thirdColorTp;
    separadorTopURL = separadorBlanco.separadortop;
    separadorNameLeftURL = separadorBlanco.separadorNameLeftURL;
    separadorNameRightURL = separadorBlanco.separadorNameRightURL;
    separadorNameBottomURL = separadorBlanco.separadorNameBottomURL;
  } else if (country === "de") {
    mainColor = de.mainColor;
    secondColor = de.secondColor;
    thirdColor = de.thirdColor;
    mainColorTp = de.mainColorTp;
    secondColorTp = de.secondColorTp;
    thirdColorTp = de.thirdColorTp;
    mainTextColor = de.mainTextColor;
    separadorTopURL = separadorNegro.separadortop;
    separadorNameLeftURL = separadorNegro.separadorNameLeftURL;
    separadorNameRightURL = separadorNegro.separadorNameRightURL;
    separadorNameBottomURL = separadorNegro.separadorNameBottomURL;
  } else if (country === "bg") {
    mainColor = bg.mainColor;
    secondColor = bg.secondColor;
    thirdColor = bg.thirdColor;
    mainColorTp = bg.mainColorTp;
    secondColorTp = bg.secondColorTp;
    thirdColorTp = bg.thirdColorTp;
    mainTextColor = bg.mainTextColor;
    separadorTopURL = separadorNegro.separadortop;
    separadorNameLeftURL = separadorNegro.separadorNameLeftURL;
    separadorNameRightURL = separadorNegro.separadorNameRightURL;
    separadorNameBottomURL = separadorNegro.separadorNameBottomURL;
  } else if (country === "es") {
    mainColor = es.mainColor;
    secondColor = es.secondColor;
    thirdColor = es.thirdColor;
    mainColorTp = es.mainColorTp;
    secondColorTp = es.secondColorTp;
    thirdColorTp = es.thirdColorTp;
    separadorTopURL = separadorBlanco.separadortop;
    separadorNameLeftURL = separadorBlanco.separadorNameLeftURL;
    separadorNameRightURL = separadorBlanco.separadorNameRightURL;
    separadorNameBottomURL = separadorBlanco.separadorNameBottomURL;
  } else {
    mainColor = "blue";
    secondColor = "red";
    thirdColor = "pink";
    mainColorTp = "teal";
    secondColorTp = "white";
    separadorTopURL = separadorBlanco.separadortop;
    separadorNameLeft = separadorBlanco.separadorNameLeftURL;
    separadorNameRight = separadorBlanco.separadorNameRightURL;
    separadorNameBottomURL = separadorBlanco.separadorNameBottomURL;
  }
  cardContainer = {
    background: `linear-gradient(0deg,${mainColor} 0%,${thirdColor} 50%,${mainColor} 100%)`,
  };
  leftTop = {
    background: mainColor,
    background: `linear-gradient(0deg,${mainColor} 0%,${secondColor} 100%)`,
  };
  rightTop = {
    background: thirdColor,
    background: `linear-gradient(0deg,${secondColorTp} 32%,${mainColorTp} 100%)`,
  };
  namesContainer = { backgroundColor: mainColor, color: mainTextColor };
  bottomContainer = {
    background: secondColor,
    background: `linear-gradient(0deg,${mainColorTp} 0%,${secondColorTp} 50%,${mainColor} 100%`,
  };
  rectangle = {
    border: `1px ${mainTextColor} solid`,
  };
  separadortop = {
    backgroundImage: `url(${separadorTopURL})`,
  };
  separadorNameLeft = { backgroundImage: `url(${separadorNameLeftURL})` };
  separadorNameRight = { backgroundImage: `url(${separadorNameRightURL})` };
  separadorNameBottom = { backgroundImage: `url(${separadorNameBottomURL})` };
  return (styles = {
    cardContainer,
    leftTop,
    rightTop,
    namesContainer,
    bottomContainer,
    rectangle,
    separadortop,
    separadorNameLeft,
    separadorNameRight,
    separadorNameBottom,
  });
};
