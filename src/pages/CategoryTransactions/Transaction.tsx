import styled from 'styled-components';
import { Text } from '../../components';
import { TransactionType } from '../../types';
import { isoDateToLocalDate } from '../../utils/isoDateToLocalDate';
import { formatMoney } from '../../utils/formatMoney';
import { MdMoreVert, MdClear, MdEdit } from 'react-icons/md';
import { useDeleteTransactionMutation } from '../../hooks/mutations/useDeleteTransactionMutation';
import { useNavigate, useParams } from 'react-router-dom';

type TransactionProps = TransactionType & {
  selectedId: string | null;
};

export function Transaction({
  id,
  categoryId,
  description,
  value,
  date,
  note,
  selectedId,
}: TransactionProps) {
  const navigate = useNavigate();
  const { categoryType } = useParams();
  const { mutate: deleteTransaction } = useDeleteTransactionMutation(id);

  return (
    <Container>
      <InfoContainer>
        <NameContainer>
          <Text fontSize="xl" bold>
            {description}
          </Text>
          <Text>{isoDateToLocalDate(date)}</Text>
        </NameContainer>
        <ValueContainer>
          <Text>R$ {formatMoney(value)}</Text>
          <MenuIcon />
        </ValueContainer>
      </InfoContainer>
      {selectedId === id && (
        <>
          {note && <Note>{note}</Note>}
          <IconsContainer>
            <MdClear onClick={() => deleteTransaction()} />
            <MdEdit
              onClick={() =>
                navigate(
                  `/${categoryType}/editar?id=${id}&description=${description}&value=${value}&date=${date}&note=${note}&categoryId=${categoryId}`
                )
              }
            />
          </IconsContainer>
        </>
      )}
    </Container>
  );
}

const Container = styled.div`
  padding-bottom: 6px;
  border-bottom: 1px solid #ccc;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    background-color: #cccccc1a;
    transition: transform 300ms ease-in-out;
    transform: scaleX(0);
    z-index: -1;
  }
  &:hover::before {
    transform: scaleX(1);
  }
`;

const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 6px 0;
  margin-left: calc(100% - 84px);

  svg {
    box-sizing: unset;
    font-size: 24px;
    padding: 4px;
    cursor: pointer;
  }
`;

const Note = styled.div`
  width: 100%;
  height: 100px;
  padding: 8px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.color.input.active};
  box-sizing: border-box;

  font-family: ${({ theme }) => theme.text.fontFamily.base};
  font-size: ${({ theme }) => theme.text.size.lg};
  word-wrap: break-word;
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 6px 0;

  position: relative;

  cursor: pointer;
`;

const NameContainer = styled.div``;

const ValueContainer = styled.div`
  display: flex;
  align-items: center;
`;

const MenuIcon = styled(MdMoreVert)`
  box-sizing: unset;
  font-size: 26px;
  padding-left: 10px;
  cursor: pointer;
`;
