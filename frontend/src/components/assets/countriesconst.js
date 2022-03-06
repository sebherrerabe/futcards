export const br = {
  mainColor: "rgb(168, 165, 0)",
  secondColor: "rgb(63, 98, 252)",
  thirdColor: "rgb(10, 119, 0)",
  /* TEXT COLOURS */
  mainTextColor: "rgb(247, 247, 247)",
  secondTextColor: "rgb(19, 19, 19)",
  /* TRANSPARENT COLOURS */
  mainColorTp: "rgba(168, 165, 0, 0.6)",
  secondColorTp: "rgba(217, 220, 173, 0.6)",
  thirdColorTp: "rgba(10, 119, 0, 0.4)"
};

export const cardContainerStyle = (country) => {
  let mainColor, secondColor, thirdColor, mainColorTp, secondColorTp, thirdColorTp, cardContainer, leftTop, rightTop, namesContainer, bottomContainer, styles;
  if (country === "br") {
    mainColor = br.mainColor;
    secondColor = br.secondColor;
    thirdColor = br.thirdColor;
    mainColorTp = br.mainColorTp
    secondColorTp = br.secondColorTp
    thirdColorTp = br.thirdColorTp
  } else {
      mainColor = "blue"
      secondColor = "red"
      thirdColor = "pink"
      mainColorTp = "teal"
    secondColorTp = "white"
  }
  cardContainer = {background: `linear-gradient(0deg,${mainColor} 0%,${thirdColor} 50%,${mainColor} 100%)`}
  leftTop = {background: mainColor, background: `linear-gradient(0deg,${mainColor} 0%,${secondColor} 100%)`}
  rightTop = {background: thirdColor ,background: `linear-gradient(0deg,${secondColorTp} 32%,${mainColorTp} 100%)`}
  namesContainer = {backgroundColor: mainColor}
  bottomContainer = { background: secondColor,background: `linear-gradient(0deg,${thirdColorTp} 0%,${thirdColorTp} 50%,${mainColor} 100%`}
  return (
    styles = {cardContainer,leftTop, rightTop, namesContainer, bottomContainer}
)
};

