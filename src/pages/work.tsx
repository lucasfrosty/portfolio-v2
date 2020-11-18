import React from 'react';
import styled from 'styled-components';
import {useTranslation} from 'react-i18next';

import {Layout, Title, SEO, JobDetails} from '../components';
import {useWorkData} from '../utilities/work-data';
import {Work} from '../icons';

const ImageWrapper = styled.div`
  z-index: 1;
  margin: auto;

  @media only screen and (max-width: 1200px) {
    > svg {
      width: 400px;
      height: 400px;
    }
  }

  @media only screen and (max-width: 1000px) {
    display: none;
  }
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 40px;
`;

const TextWrapper = styled.div`
  max-width: 480px;
  width: 100%;
`;

export default function Blog() {
  const {t} = useTranslation();
  const {shopify, firstI} = useWorkData();

  return (
    <Layout paddingOverride="10px 30px 30px 30px">
      <SEO title={t('work')} />
      <Wrapper>
        <TextWrapper>
          <Title>{t('work')}</Title>
          {[shopify, firstI].map((company) => (
            <JobDetails company={company} key={company.name} />
          ))}
        </TextWrapper>
        <ImageWrapper>
          <Work width="550" height="550" />
        </ImageWrapper>
      </Wrapper>
    </Layout>
  );
}
