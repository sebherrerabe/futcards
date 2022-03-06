export const br = {
  mainColor: "rgb(168, 165, 0)",
  secondColor: "rgb(10, 119, 0)",
  thirdColor: "rgb(10, 119, 0)",
  mainColorTp: "rgba(168, 165, 0, 0.6)",
  secondColorTp: "rgba(217, 220, 173, 0.6)",
  thirdColorTp: "rgba(7, 85, 0, 0.4)",
};

export const ar = {
  mainColor: "rgb(0, 158, 179)",
  secondColor: "rgb(0, 54, 155)",
  thirdColor: "rgb(218, 218, 218)",
  mainColorTp: "rgba(0, 158, 179, 0.6)",
  secondColorTp: "rgba(218, 218, 218, 0.4)",
  thirdColorTp: "rgba(0, 54, 155, 0.6)"
};
export const fr = {
  mainColor: "rgb(22, 52, 134)",
  secondColor: "rgb(146, 0, 0)",
  thirdColor: "rgb(219, 219, 219)",
  mainColorTp: "rgba(22, 52, 134, 0.6)",
  secondColorTp: "rgba(219, 219, 219, 0.4)",
  thirdColorTp: "rgba(146, 0, 0, 0.6)"
};


export const cardContainerStyle = (country) => {
  let mainColor,
    secondColor,
    thirdColor,
    mainColorTp,
    secondColorTp,
    thirdColorTp,
    cardContainer,
    leftTop,
    rightTop,
    namesContainer,
    bottomContainer,
    styles;
  if (country === "br") {
    mainColor = br.mainColor;
    secondColor = br.secondColor;
    thirdColor = br.thirdColor;
    mainColorTp = br.mainColorTp;
    secondColorTp = br.secondColorTp;
    thirdColorTp = br.thirdColorTp;
  } else if (country === "ar") {
    mainColor = ar.mainColor;
    secondColor = ar.secondColor;
    thirdColor = ar.thirdColor;
    mainColorTp = ar.mainColorTp;
    secondColorTp = ar.secondColorTp;
    thirdColorTp = ar.thirdColorTp;
  } else if (country === "fr") {
    mainColor = fr.mainColor;
    secondColor = fr.secondColor;
    thirdColor = fr.thirdColor;
    mainColorTp = fr.mainColorTp;
    secondColorTp = fr.secondColorTp;
    thirdColorTp = fr.thirdColorTp;
  } else {
    mainColor = "blue";
    secondColor = "red";
    thirdColor = "pink";
    mainColorTp = "teal";
    secondColorTp = "white";
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
  namesContainer = { backgroundColor: mainColor };
  bottomContainer = {
    background: secondColor,
    background: `linear-gradient(0deg,${mainColorTp} 0%,${secondColorTp} 50%,${mainColor} 100%`,
  };
  return (styles = {
    cardContainer,
    leftTop,
    rightTop,
    namesContainer,
    bottomContainer,
  });
};
