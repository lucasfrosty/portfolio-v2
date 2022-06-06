import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import {useTranslation} from 'react-i18next';

import type {Company, JobPosition} from '../../utilities/work-data';
import {capitalize} from '../../utilities/string';
import {
  monthDifferenceBetweenDates,
  useDateTransformer,
} from '../../utilities/dates';

import {Text} from '../Text';

interface Props {
  company: Company;
}

const JobDetailsWrapper = styled.div`
  display: flex;
  margin-bottom: 30px;
`;

const CompanyInfoWrapper = styled.div`
  justify-content: center;
  line-height: 1.1;
  margin-left: 10px;
`;

const CompanyNameWrapper = styled.h3`
  font-weight: 600;
  margin: 0;
  font-size: 18px;
  color: ${(props) => props.theme.highlight};
`;

const PositionsWrapper = styled.div`
  line-hight: 1.2;
  margin-top: 15px;

  & > div:not(:last-child) {
    margin-bottom: 10px;
  }
`;

const PositionWrapper = styled.div`
  border-left: 1px solid ${(props) => props.theme.border};
  margin-left: -26px;
  padding-left: 26px;
  position: relative;

  &:before {
    content: '';
    width: 12px;
    height: 12px;
    background: ${(props) => props.theme.circleColor};
    border: 1px solid ${(props) => props.theme.border};
    border-radius: 50%;
    position: absolute;
    left: -7.6px;
    top: 1px;
    z-index: 999;
  }
`;

const Description = styled.p`
  color: ${(props) => props.theme.descriptionColor};
  font-size: 14.5px;
`;

export function JobDetails({company}: Props) {
  const {t, i18n} = useTranslation();
  const dateTransformer = useDateTransformer();

  const imageMarkup = (
    <div>
      <Img fixed={company.logo} />
    </div>
  );

  return (
    <JobDetailsWrapper>
      {imageMarkup}
      <CompanyInfoWrapper>
        <CompanyNameWrapper>{company.name}</CompanyNameWrapper>
        <Text caption>{calculateTimeAtCompany(company.jobPositions)}</Text>
        <PositionsWrapper>
          {company.jobPositions.map((position) => (
            <PositionWrapper key={position.startDate.toString()}>
              <Text highlight style={{fontSize: 16}}>
                {position.name}
              </Text>
              <Text caption>
                {getJobTimeframe({
                  startDate: position.startDate,
                  endDate: position.endDate,
                  isPresent: position.isPresent,
                })}
              </Text>
              <Text caption>{position.place}</Text>
              {position.description && (
                <div style={{marginTop: 10}}>
                  {position.description.map((description, index) => (
                    // the company description data is static so we won't remove/add/sort the array at all
                    // so because of that, using index in this case is fine
                    // eslint-disable-next-line react/no-array-index-key
                    <Description key={`company-description-${index}`}>
                      {description}
                    </Description>
                  ))}
                </div>
              )}
            </PositionWrapper>
          ))}
        </PositionsWrapper>
      </CompanyInfoWrapper>
    </JobDetailsWrapper>
  );

  function calculateTimeAtCompany(jobPositions: Company['jobPositions']) {
    const firstPositionIndex = 0;
    const lastPositionIndex = jobPositions.length - 1;

    const startDateAtCompany = jobPositions[lastPositionIndex].startDate;
    const endDateAtCompany = jobPositions[firstPositionIndex].endDate;

    const monthDiff = monthDifferenceBetweenDates(
      startDateAtCompany,
      endDateAtCompany,
    );

    return dateTransformer(monthDiff);
  }

  function getJobTimeframe({
    startDate,
    endDate,
    isPresent,
  }: Pick<JobPosition, 'startDate' | 'endDate' | 'isPresent'>) {
    const formattedEndDate = isPresent
      ? t('present')
      : endDate.toLocaleDateString(i18n.language, {
          day: undefined,
          month: 'long',
          year: 'numeric',
        });

    const formattedStartDate = startDate.toLocaleString(i18n.language, {
      day: undefined,
      month: 'long',
      year: 'numeric',
    });

    const [capitalizedStartDate, capitalizeEndDate] = [
      formattedStartDate,
      formattedEndDate,
    ].map(capitalize);

    return `${capitalizedStartDate} — ${capitalizeEndDate}`;
  }
}
