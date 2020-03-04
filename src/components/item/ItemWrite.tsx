import React, {
  PropsWithChildren,
  useState,
} from 'react';
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

interface Task {
  title: string;
  icon: string;
}

const tasks: Task[] = [
  {
    title: '공부',
    icon: 'book',
  },
  { title: '운동', icon: 'face' },
  { title: '쇼핑', icon: 'face' },
  { title: '업무', icon: 'face' },
  { title: '휴식', icon: 'face' },
  { title: '낮잠', icon: 'face' },
  { title: '게임', icon: 'games' },
  { title: '산책', icon: 'face' },
  { title: '운전', icon: 'face' },
  { title: '청소', icon: 'face' },
  { title: '식사', icon: 'face' },
  { title: '기타', icon: 'face' },
];

const ItemWrite = () => {
  const [item, setItem] = useState<Item>({
    title: '',
    description: '',
    startDateTime: new Date(2019, 1, 27, 15),
    endDateTime: new Date(2019, 1, 27, 17),
  });

  const [editable, setEditable] = useState<boolean>(false);

  const onChangeJobTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setItem({ ...item, title: e.target.value });
  };

  return (
    <ItemWriteBlock>
      <JobBlockWrapper>
        {tasks.map(task => (
          <Job
            item={item}
            title={task.title}
            icon={task.icon}
            setItem={setItem}
            setEditable={setEditable}
          />
        ))}
      </JobBlockWrapper>
      <JobTitle
        placeholder={'한 일을 적어주세요!'}
        value={item.title}
        disabled={!editable}
        onChange={onChangeJobTitle}
      />
      <DescriptionBlock placeholder={'한 일에 대한 간단한 설명을 적습니다.'} />
      <Button background={oc.cyan[3]}>Register</Button>
    </ItemWriteBlock>
  );
};

export default ItemWrite;
