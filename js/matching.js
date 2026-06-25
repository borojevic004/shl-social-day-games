const SHLMatching = (() => {
  const MAX_JOB_WEIGHT = 5;
  const MIN_TOP_SCORE = 82;
  const MAX_TOP_SCORE = 96;
  const INTEREST_GROUP_BONUSES = {
    animals: { "Tiere, Natur & Umwelt": 9 },
    outdoor: { "Tiere, Natur & Umwelt": 8, "Handwerk & Technik": 3 },
    plants: { "Tiere, Natur & Umwelt": 10 },
    food: { "Verkauf, Service & Gastronomie": 10 },
    service: { "Verkauf, Service & Gastronomie": 8, "Öffentlicher Dienst, Sport & Freizeit": 3 },
    customer_contact: { "Verkauf, Service & Gastronomie": 7 },
    children: { "Soziales, Bildung & Betreuung": 10 },
    education: { "Soziales, Bildung & Betreuung": 8 },
    helping_people: { "Soziales, Bildung & Betreuung": 10 },
    health: { "Soziales, Bildung & Betreuung": 8 },
    media: { "Büro, Medien & Kreatives": 10 },
    creative: { "Büro, Medien & Kreatives": 8, "Kultur, Freizeit & Event": 4 },
    office: { "Büro, Medien & Kreatives": 6, "Öffentlicher Dienst, Sport & Freizeit": 4 },
    culture: { "Kultur, Freizeit & Event": 10 },
    entertainment: { "Kultur, Freizeit & Event": 8 },
    sports: { "Öffentlicher Dienst, Sport & Freizeit": 8 },
    warehouse: { "Handwerk & Technik": 5, "Verkauf, Service & Gastronomie": 3 },
    technology: { "Büro, Medien & Kreatives": 6, "Handwerk & Technik": 5 },
    technical_practical: { "Handwerk & Technik": 13, "Tiere, Natur & Umwelt": 3 }
  };

  function calculateJobScore(job, selectedInterestIds, allInterests) {
    const selectedInterests = allInterests.filter((interest) =>
      selectedInterestIds.includes(interest.id)
    );

    let rawScore = 0;
    let maxPossibleScore = 0;

    for (const interest of selectedInterests) {
      for (const [category, interestWeight] of Object.entries(interest.weights || {})) {
        const jobWeight = (job.weights && job.weights[category]) || 0;

        rawScore += interestWeight * jobWeight;
        maxPossibleScore += interestWeight * MAX_JOB_WEIGHT;
      }
    }

    if (maxPossibleScore === 0) return 0;

    return Math.round((rawScore / maxPossibleScore) * 100);
  }

  function calculateGroupBonus(job, selectedInterestIds) {
    return selectedInterestIds.reduce((bonus, interestId) => {
      const bonuses = INTEREST_GROUP_BONUSES[interestId] || {};
      return bonus + (bonuses[job.group] || 0);
    }, 0);
  }

  function calculateJobSimilarity(jobA, jobB) {
    if (!jobA || !jobB) return 0;

    const weightsA = jobA.weights || {};
    const weightsB = jobB.weights || {};
    const categories = new Set([...Object.keys(weightsA), ...Object.keys(weightsB)]);

    let sharedStrength = jobA.group === jobB.group ? 18 : 0;
    let maxStrength = jobA.group === jobB.group ? 18 : 0;

    for (const category of categories) {
      const weightA = weightsA[category] || 0;
      const weightB = weightsB[category] || 0;

      sharedStrength += Math.min(weightA, weightB);
      maxStrength += Math.max(weightA, weightB);
    }

    return maxStrength === 0 ? 0 : sharedStrength / maxStrength;
  }

  function displayScoreFromRank(rawScore, rankIndex, topScore) {
    const safeTopScore = Math.max(topScore, rawScore, 1);
    const topDisplayScore = Math.max(
      MIN_TOP_SCORE,
      Math.min(MAX_TOP_SCORE, Math.round(84 + Math.sqrt(safeTopScore / 100) * 13))
    );
    const relativeStrength = Math.max(0.82, rawScore / safeTopScore);
    const rankDrop = rankIndex === 0 ? 0 : 5 + rankIndex * 2;
    const rankFloor = rankIndex === 0 ? topDisplayScore : topDisplayScore - (rankIndex === 1 ? 8 : 14);
    const calculatedScore = Math.round(topDisplayScore * relativeStrength - rankDrop);

    return Math.max(74, Math.min(100, Math.max(calculatedScore, rankFloor)));
  }

  function getBestMatches(allJobs, allInterests, selectedInterestIds, limit = 8) {
    return allJobs
      .map((job) => ({
        ...job,
        rawMatchScore: calculateJobScore(job, selectedInterestIds, allInterests),
        rankingScore: calculateJobScore(job, selectedInterestIds, allInterests) + calculateGroupBonus(job, selectedInterestIds),
        tieBreaker: Math.random()
      }))
      .sort((a, b) => b.rankingScore - a.rankingScore || b.rawMatchScore - a.rawMatchScore || b.tieBreaker - a.tieBreaker)
      .slice(0, limit);
  }

  return {
    calculateJobScore,
    calculateJobSimilarity,
    displayScoreFromRank,
    getBestMatches
  };
})();
