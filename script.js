document.addEventListener('DOMContentLoaded', function () {
  const daysInput = document.getElementById('days');
  const travelersInput = document.getElementById('travelers');
  const styleInput = document.getElementById('style');
  const dailyBudgetInput = document.getElementById('dailyBudget');
  const totalCostEl = document.getElementById('totalCost');
  const summaryTextEl = document.getElementById('summaryText');

  const styleMultiplier = {
    standard: 1,
    comfort: 1.3,
    luxury: 1.7,
  };

  function updateBudget() {
    const days = Math.max(1, Number(daysInput.value));
    const travelers = Math.max(1, Number(travelersInput.value));
    const daily = Math.max(50, Number(dailyBudgetInput.value));
    const style = styleInput.value;
    const multiplier = styleMultiplier[style] || 1;
    const total = Math.round(days * travelers * daily * multiplier);

    totalCostEl.textContent = `$${total.toLocaleString()}`;
    summaryTextEl.textContent = `Based on ${days} day${days === 1 ? '' : 's'}, ${travelers} traveler${travelers === 1 ? '' : 's'}, and ${style.charAt(0).toUpperCase() + style.slice(1)} travel style.`;
  }

  [daysInput, travelersInput, styleInput, dailyBudgetInput].forEach((element) => {
    element.addEventListener('input', updateBudget);
  });

  updateBudget();
});
