import {useTranslation} from 'react-i18next';

export function monthDifferenceBetweenDates(startDate: Date, endDate: Date) {
  return (
    endDate.getMonth() -
    startDate.getMonth() +
    12 * (endDate.getFullYear() - startDate.getFullYear())
  );
}

export function useDateTransformer() {
  const {t} = useTranslation();

  return (amountOfMonths: number) => {
    const monthsInYear = 12;
    if (amountOfMonths < 12) {
      return t('DateRange.onlyMonths', {
        count: amountOfMonths,
      });
    }

    const years = Math.floor(amountOfMonths / 12);
    const monthsRemaining = amountOfMonths - years * monthsInYear;

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
