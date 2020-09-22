import {useTranslation} from 'react-i18next';

const MONTHS_IN_A_YEAR = 12;

export function monthDifferenceBetweenDates(startDate: Date, endDate: Date) {
  return (
    endDate.getMonth() -
    startDate.getMonth() +
    MONTHS_IN_A_YEAR * (endDate.getFullYear() - startDate.getFullYear())
  );
}

export function useDateTransformer() {
  const {t} = useTranslation();

  return (amountOfMonths: number) => {
    if (amountOfMonths < MONTHS_IN_A_YEAR) {
      return t('DateRange.onlyMonths', {
        count: amountOfMonths,
      });
    }

    const years = Math.floor(amountOfMonths / MONTHS_IN_A_YEAR);
    const monthsRemaining = amountOfMonths - years * MONTHS_IN_A_YEAR;

    if (monthsRemaining === 0) {
      return t('DateRange.onlyYears', {
        count: years,
      });
    }

    const counts = {yearCount: years, monthCount: monthsRemaining};

    if (years === 1) {
      if (monthsRemaining === 1) {
        return t('DateRange.yearSingularMonthSingular', counts);
      }

      return t('DateRange.yearSingularMonthPlural', counts);
    }

    if (years > 1) {
      if (monthsRemaining === 1) {
        return t('DateRange.yearPluralMonthSingular', counts);
      }

      return t('DateRange.yearPluralMonthPlural', counts);
    }

    return t('DateRange.yearPluralMonthPlural', counts);
  };
}
