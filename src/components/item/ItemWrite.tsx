import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import 'material-icons/iconfont/material-icons.scss';

const JobBlock = styled.div`
  min-width: 6rem;
  text-align: center;
`;

const JobBlockWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: row;
`;

interface JobProps {
  icon: string;
  title: string;
}
const Job = ({ icon, title }: PropsWithChildren<JobProps>) => {
  return (
    <JobBlock>
      <p>
        <span className={'material-icons'}>{icon}</span>
      </p>
      <p>{title}</p>
    </JobBlock>
  );
};

const ItemWrite = () => {
  return (
    <JobBlockWrapper>
      <Job title={'공부'} icon={'face'} />
      <Job title={'공부'} icon={'face'} />
      <Job title={'공부'} icon={'face'} />
      <Job title={'공부'} icon={'face'} />
      <Job title={'공부'} icon={'face'} />
      <Job title={'공부'} icon={'face'} />
      <Job title={'공부'} icon={'face'} />
      <Job title={'공부'} icon={'face'} />
      <Job title={'공부'} icon={'face'} />
      <Job title={'공부'} icon={'face'} />
      <Job title={'공부'} icon={'face'} />
      <Job title={'공부'} icon={'face'} />
    </JobBlockWrapper>
  );
};

export default ItemWrite;
