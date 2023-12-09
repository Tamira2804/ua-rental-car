import styled from "styled-components";
import Select from "react-select";

export const FilterForm = styled.form`
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
    control: (provided) => ({
      ...provided,
      width: "224px",
      height: "48px",
      cursor: "pointer",
      backgroundColor: "var(--colors-ui-base)",
      color: "var(--colors-text)",
      borderRadius: "var(--radius-sm)",
      padding: "8px",
      border: "none",
      boxShadow: "var(--shadow)",

      fontSize: "var(--fs-lg)",
      fontFamily: "var(--family)",
      appearance: "none",
    }),

    option: (provided, { isFocused }) => ({
      ...provided,
      cursor: "pointer",
      color: isFocused ? "var(--colors-text)" : "var(--colors-text-secondary)",
      backgroundColor: isFocused ? "var(--colors-bg)" : "var(--colors-ui-base)",
    }),

    placeholder: (provided) => ({
      ...provided,
      color: "var(--colors-text)",
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
  & [class$="-menu"] {
    background-color: var(--colors-ui-base);
  }
`;

export const SelectPrice = styled(Select).attrs({
  styles: {
    control: (provided) => ({
      ...provided,
      width: "125px",
      height: "48px",
      cursor: "pointer",
      backgroundColor: "var(--colors-ui-base)",
      color: "var(--colors-text)",
      borderRadius: "var(--radius-sm)",
      padding: "8px",
      border: "none",
      boxShadow: "var(--shadow)",

      fontSize: "var(--fs-lg)",
      fontFamily: "var(--family)",
      appearance: "none",
    }),

    option: (provided, { isFocused }) => ({
      ...provided,
      cursor: "pointer",
      color: isFocused ? "var(--colors-text)" : "var(--colors-text-secondary)",
      backgroundColor: isFocused ? "var(--colors-bg)" : "var(--colors-ui-base)",
    }),

    placeholder: (provided) => ({
      ...provided,
      color: "var(--colors-text)",
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
  & [class$="-menu"] {
    background-color: var(--colors-ui-base);
  }
`;

export const MileageWrapper = styled.div`
  position: relative;

  &:before {
    content: "From:";
    color: var(--colors-text);
    font-size: var(--fs-lg);
    font-weight: var(--fw-normal);
    line-height: 1.11;

    position: absolute;
    top: 57%;
    left: 12px;
    transform: translateY(-50%);
  }

  &:after {
    content: "To:";
    color: var(--colors-text);
    font-size: var(--fs-lg);
    font-weight: var(--fw-normal);
    line-height: 1.11;

    position: absolute;
    top: 57%;
    right: 90px;
    transform: translateY(-50%);
  }
`;
export const MileageInput = styled.input`
  font-size: var(--fs-lg);
  font-weight: var(--fw-normal);
  line-height: 1.11;
  color: var(--colors-text);

  border: none;
  outline: none;

  width: 137px;

  &:first-child {
    border-top-left-radius: var(--radius-md);
    border-bottom-left-radius: var(--radius-md);
    border-right: 1px solid rgba(138, 138, 137, 0.2);
    padding: 14px 5px 14px 68px;
    height: 48px;
  }

  &:last-child {
    border-top-right-radius: var(--radius-md);
    border-bottom-right-radius: var(--radius-md);
    padding: 14px 5px 14px 52px;
    height: 48px;
  }
`;
