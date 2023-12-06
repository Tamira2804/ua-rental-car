import styled from 'styled-components';
import Select from 'react-select';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 18px;
  }
`;

export const SelectBrand = styled(Select).attrs({
  styles: {
    control: (provided, { isSelected }) => ({
      ...provided,
      width: '224px',
      height: '48px',
      cursor: 'pointer',
      backgroundColor: 'var(--colors-ui-base)',
      color: 'var(--colors-text)',
      borderRadius: 'var(--radius-sm)',
      padding: '8px',
      border: 'none',
      boxShadow: 'var(--shadow)',

      fontSize: 'var(--fs-md)',
      fontFamily: 'var(--family)',
      appearance: 'none',
    }),

    option: (provided, { isFocused }) => ({
      ...provided,
      cursor: 'pointer',
      color: isFocused ? 'var(--colors-text)' : 'var(--colors-text-secondary)',
      backgroundColor: isFocused ? 'var(--colors-bg)' : 'var(--colors-ui-base)',
    }),

    placeholder: provided => ({
      ...provided,
      color: 'var(--colors-text)',
    }),
  },
})`
  font-family: var(--family);
  border: 1px solid rgba(18, 20, 23, 0.05);
  border-radius: var(--radius-sm);

  & > * {
    box-shadow: var(--shadow);
  }
  & input {
    padding-left: 0.25rem;
  }
  /* & * {
    color: var(--colors-text-secondary) !important;
  } */

  & [class$='-menu'] {
    background-color: var(--colors-ui-base);
  }
`;

export const SelectPrice = styled(Select).attrs({
  styles: {
    control: provided => ({
      ...provided,
      width: '125px',
      height: '48px',
      cursor: 'pointer',
      backgroundColor: 'var(--colors-ui-base)',
      color: 'var(--colors-text)',
      borderRadius: 'var(--radius-sm)',
      padding: '8px',
      border: 'none',
      boxShadow: 'var(--shadow)',

      fontSize: 'var(--fs-md)',
      fontFamily: 'var(--family)',
      appearance: 'none',
    }),

    option: (provided, { isFocused }) => ({
      ...provided,
      cursor: 'pointer',
      color: isFocused ? 'var(--colors-text)' : 'var(--colors-text-secondary)',
      backgroundColor: isFocused ? 'var(--colors-bg)' : 'var(--colors-ui-base)',
    }),

    placeholder: provided => ({
      ...provided,
      color: 'var(--colors-text)',
    }),
  },
})`
  font-family: var(--family);
  border: 1px solid rgba(18, 20, 23, 0.05);
  border-radius: var(--radius-sm);

  & > * {
    box-shadow: var(--shadow);
  }
  & input {
    padding-left: 0.25rem;
  }
  /* & * {
    color: var(--colors-text-secondary) !important;
  } */
`;

export const SelectMileage = styled(Select).attrs({
  styles: {
    control: provided => ({
      ...provided,
      bacgroundColor: 'var(--colors-ui-base)',
      color: 'var(--colors-text)',
      borderRadius: 'var(--radius-sm)',
      padding: '0.25rem',
      border: 'none',
      boxShadow: 'var(--shadow)',
      height: '48px',
    }),
    option: (provided, state) => ({
      ...provided,
      cursor: 'pointer',
      color: state.isSelected ? 'var()' : 'var()',
      backgroundColor: state.isSelected
        ? 'var(--colors-bg)'
        : 'var(--colors-ui-base)',
    }),
  },
})``;
