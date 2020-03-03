import React, { PropsWithChildren, useState } from 'react';
import styled from 'styled-components';
import 'material-icons/iconfont/material-icons.scss';
import oc from 'open-color';
import Button from '../common/Button';
import { Item } from '../../types/Item';

interface JobProps {
  icon: string;
  title: string;
  item: Item;
  setItem: Function;
  setEditable: Function;
}

const JobBlock = styled.div`
  min-width: 6rem;
  text-align: center;
  color: ${oc.gray[6]};
  border-radius: 1rem;
  border: 2px solid rgba(0, 0, 0, 0);
  &:hover {
    background: ${oc.orange[4]};
    box-shadow: 5px 5px blur ${oc.orange[6]} inset;
    color: black;
    border: 2px solid rgba(0, 0, 0, 0.2);
    border-top: 0;
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

const Job = ({
  item,
  setItem,
  setEditable,
  icon,
  title,
}: PropsWithChildren<JobProps>) => {
  const onClick = () => {
    setItem({ ...item, title, description: '' });
    setEditable(title === '기타');
  };
  return (
    <JobBlock onClick={onClick}>
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

const JobTitle = styled.input`
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
  const [item, setItem] = useState<Item>({
    title: '',
    description: '',
    startDateTime: new Date(2019, 1, 27, 15),
    endDateTime: new Date(2019, 1, 27, 17),
  });

  const [editable, setEditable] = useState<boolean>(false);

  return (
    <ItemWriteBlock>
      <JobBlockWrapper>
        <Job
          item={item}
          setItem={setItem}
          setEditable={setEditable}
          title={'공부'}
          icon={'face'}
        />
        <Job
          item={item}
          setItem={setItem}
          setEditable={setEditable}
          title={'공부'}
          icon={'face'}
        />
        <Job
          item={item}
          setItem={setItem}
          setEditable={setEditable}
          title={'공부'}
          icon={'face'}
        />
        <Job
          item={item}
          setItem={setItem}
          setEditable={setEditable}
          title={'공부'}
          icon={'face'}
        />
        <Job
          item={item}
          setItem={setItem}
          setEditable={setEditable}
          title={'공부'}
          icon={'face'}
        />
        <Job
          item={item}
          setItem={setItem}
          setEditable={setEditable}
          title={'공부'}
          icon={'face'}
        />
        <Job
          item={item}
          setItem={setItem}
          setEditable={setEditable}
          title={'공부'}
          icon={'face'}
        />
        <Job
          item={item}
          setItem={setItem}
          setEditable={setEditable}
          title={'공부'}
          icon={'face'}
        />
        <Job
          item={item}
          setItem={setItem}
          setEditable={setEditable}
          title={'공부'}
          icon={'face'}
        />
        <Job
          item={item}
          setItem={setItem}
          setEditable={setEditable}
          title={'공부'}
          icon={'face'}
        />
        <Job
          item={item}
          setItem={setItem}
          setEditable={setEditable}
          title={'공부'}
          icon={'face'}
        />
        <Job
          item={item}
          setItem={setItem}
          setEditable={setEditable}
          title={'기타'}
          icon={'book'}
        />
      </JobBlockWrapper>
      // TODO ONCHANGE 구현
      <JobTitle
        placeholder={'한 일을 적어주세요!'}
        value={item.title}
        disabled={!editable}
      />
      <DescriptionBlock placeholder={'한 일에 대한 간단한 설명을 적습니다.'} />
      <Button background={oc.cyan[3]}>Register</Button>
    </ItemWriteBlock>
  );
};

export default ItemWrite;
