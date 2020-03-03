import React from 'react';
import { Item } from '../../types/Item';
import styled from 'styled-components';
import oc from 'open-color';
import moment from 'moment';
import { LinkButton } from '../common/Button';
import { newItemPath } from '../../lib/paths';

const itemListDummy: Item[] = [
  {
    id: 1,
    title: '점심식사',
    description: '오늘 점심은 고기반찬이어따! 마시써따!',
    startDateTime: new Date(2019, 1, 27, 11, 30),
    endDateTime: new Date(2019, 1, 27, 12),
  },
  {
    id: 2,
    title: '공부',
    description: '킹로퍼트님의 리액트 책 읽기',
    startDateTime: new Date(2019, 1, 27, 12, 0),
    endDateTime: new Date(2019, 1, 27, 13),
  },
  {
    id: 3,
    title: '일',
    description: '젤리는 뚠뚠 오늘도 뚠뚠 열심히 일을 하네 뚠뚠 젤리는..',
    startDateTime: new Date(2019, 1, 27, 13, 15),
    endDateTime: new Date(2019, 1, 27, 14),
  },
];

const TimeBlock = styled.div`
  width: 3rem;
  font-size: 1rem;
  color: ${oc.gray[8]};
  padding: 5px;
  text-align: center;
  border-right: 1px ${oc.gray[4]} solid;

  span {
    font-weight: bold;
  }
`;

interface ItemWrapperType {
  timeDiff: number;
}

const DescriptionBlock = styled.div<ItemWrapperType>`
  height: ${props => 2 + props.timeDiff * 0.5}rem;
  width: calc(100% - 8rem);  
  justify-content: center;
  border-radius: 4px;
  border: 6px rgba(0, 0, 0, 0.21);
  margin: 4px;
  text-overflow: ellipsis;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 0 2px 0 6px;
  color: ${oc.gray[9]};
  
  p {
    margin: 0;
  }
  
  p.item-title {
    text-overflow: ellipsis;
    font-size: 1.2rem;
    font-weight: bold;
  }
  
  p.item-description {
    font-size: 0.8rem;
    color: ${oc.gray[7]};
  }
`;

const ItemWrapper = styled.div<ItemWrapperType>`
  width: 100%;
  height: ${props => 3 + props.timeDiff * 0.5}rem;
  border-bottom: 1px ${oc.gray[3]} dashed;
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  
  &:nth-child(even) > div:nth-child(even) {
    background: ${oc.blue[2]};
  }
  &:nth-child(odd) > div:nth-child(even) {
    background: ${oc.blue[3]};
  }
  
  &:last-child {
    border: none;
  }
`;

const ItemListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const ItemBlock = ({ item }: any) => {
  const timeDiff = (item.endDateTime - item.startDateTime) / 600 / 1000;
  console.log(timeDiff);
  return (
    <ItemWrapper timeDiff={timeDiff}>
      <TimeBlock>
        <span>{moment(item.startDateTime).format('hh:mm')}</span>
      </TimeBlock>
      <DescriptionBlock timeDiff={timeDiff}>
        <p className={'item-title'}>{item.title}</p>
        <p className={'item-description'}>{item.description}</p>
      </DescriptionBlock>
    </ItemWrapper>
  );
};

const ItemList = () => {
  return (
    <ItemListWrapper>
      {itemListDummy.map(item => (
        <ItemBlock item={item} key={item.id} />
      ))}
      <hr/>
      <LinkButton to={newItemPath} background={oc.blue[4]} color={'black'}>
        Add Item
      </LinkButton>
    </ItemListWrapper>
  );
};

export default ItemList;
