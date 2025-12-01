const COPYRIGHT_START_YEAR = 2025;

document.addEventListener("DOMContentLoaded", () => {
  const currentYear = new Date().getFullYear();
  const copyrightYears = currentYear > COPYRIGHT_START_YEAR ? `${COPYRIGHT_START_YEAR} - ${currentYear}` : COPYRIGHT_START_YEAR;
  const copyrightYearsEl = document.querySelector(".copyright-years");
  copyrightYearsEl.textContent = copyrightYears;
});
