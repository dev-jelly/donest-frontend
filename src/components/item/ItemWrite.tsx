import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import 'material-icons/iconfont/material-icons.scss';
import oc from 'open-color';
import Button from "../common/Button";
const JobBlock = styled.div`
  min-width: 6rem;
  text-align: center;
  color: ${oc.gray[6]};
  &:hover {
    background: ${oc.orange[3]};
    box-shadow: 5px 5px blur ${oc.orange[6]} inset;
    color: black;
  }

  &:focus {
    background: ${oc.orange[7]};
    box-shadow: 5px 5px blur ${oc.orange[6]} inset;
    color: black;
  }
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

const ItemWriteBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  margin: 1rem 0;
`;


const EtcTitle = styled.input`
  margin: 0.5rem 2rem;
  padding: 0.2rem;
  font-size: 1.2rem;
`;

const DescriptionBlock = styled.textarea`
  margin: 0.5rem 2rem;
  padding: 0.2rem;
  font-size: 1.2rem;  
  
  height: 6rem;
`;

const ItemWrite = () => {
  return (
    <ItemWriteBlock>
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
        <Job title={'기타'} icon={'book'} />
      </JobBlockWrapper>
      <EtcTitle placeholder={"한 일을 적어주세요!"} disabled />
      <DescriptionBlock placeholder={"한 일에 대한 간단한 설명을 적습니다."}/>
      <Button background={oc.cyan[3]}>Register</Button>
    </ItemWriteBlock>
  );
};

export default ItemWrite;
