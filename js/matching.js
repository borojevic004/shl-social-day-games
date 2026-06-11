const SHLMatching = (() => {
  const MAX_JOB_WEIGHT = 5;

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

  function getBestMatches(allJobs, allInterests, selectedInterestIds, limit = 8) {
    return allJobs
      .map((job) => ({
        ...job,
        matchScore: calculateJobScore(job, selectedInterestIds, allInterests)
      }))
      .sort((a, b) => b.matchScore - a.matchScore || a.title.localeCompare(b.title, "de"))
      .slice(0, limit);
  }

  return {
    calculateJobScore,
    getBestMatches
  };
})();
