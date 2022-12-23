import styled from 'styled-components';
import { Text } from '../../components/Text';
import ReactDatePicker, { CalendarContainer } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

type DatePickerProps = {
  value: Date | null;
  handleForm: (
    key: string,
    value: Date | [Date | null, Date | null] | null
  ) => void;
};

type MyContainerPropsType = {
  className: string;
  children: React.ReactNode;
};

export function DatePicker({ value, handleForm }: DatePickerProps) {
  const MyContainer = ({ className, children }: MyContainerPropsType) => {
    return (
      <Calendar>
        <CalendarContainer className={className}>
          <div style={{ position: 'relative' }}>{children}</div>
        </CalendarContainer>
      </Calendar>
    );
  };
  return (
    <Container>
      <Text fontSize="xl" bold>
        Data
      </Text>
      <InputContainer disabled={false}>
        <Input>
          <StyledDatePicker
            selected={value}
            onChange={(date) => handleForm('date', date)}
            calendarContainer={MyContainer}
            dateFormat="dd/MM/yyyy"
          />
        </Input>
      </InputContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
`;

const Calendar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  background-color: ${({ theme }) => theme.color.primary};
  border-radius: 4px;
`;

type InputContainerProps = {
  disabled: boolean;
};

const InputContainer = styled.div<InputContainerProps>`
  display: flex;

  width: 100%;
  height: 60px;
  border-radius: 10px;
  padding-left: 15px;
  padding: 10px 10px 10px 16px;

  background-color: ${({ disabled, theme }) =>
    disabled ? theme.color.input.locked : theme.color.input.active};

  cursor: ${({ disabled }) => (disabled ? 'default' : 'text')};

  &:focus-within {
    border: 2px solid ${({ theme }) => theme.color.primary};
    padding: 8px 8px 8px 14px;
  }
`;

const Input = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

const StyledDatePicker = styled(ReactDatePicker)`
  all: unset;
  width: calc(100% - 14px);
  height: 25px;
  border: 0;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: ${({ theme }) => theme.text.size['2xl']};
  color: ${({ theme }) => theme.color.primary};

  input {
  }
`;
