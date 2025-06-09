function getFeedback(score, name) {
  const passingScore = 51;

  if (score < passingScore) {
    const failureScore = passingScore - score;
    console.log(`სამწუხაროდ ${name}, თქვენ ვერ გადალახეთ მინიმალური ბარიერი, თქვენ დაგაკლდათ ${failureScore} ქულა, უკეთესად მოემზადეთ.`);
  } else if (score <= 90) {
    const passedScore = score - passingScore;
    console.log(`გილოცავთ ${name}, თქვენ ${passedScore} ქულით მეტი აიღეთ ბარიერზე.`);
  } else {
    console.log(`ბრავო ${name}! თქვენ ძალიან კარგი შედეგი გაქვთ!`);
  }
}
getFeedback(30, "მინდია");
