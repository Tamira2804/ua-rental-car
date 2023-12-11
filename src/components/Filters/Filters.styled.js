import styled from "styled-components";
import Select from "react-select";

export const FilterForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
    gap: 18px;
  }
`;

export const Label = styled.label`
  color: var(--colors-text-label);
`;

export const SelectBrand = styled(Select).attrs({
  styles: {
    control: (provided) => ({
      ...provided,
      width: "224px",
      height: "48px",
      cursor: "pointer",
      backgroundColor: "var(--colors-bg-input)",
      color: "var(--colors-text)",
      borderRadius: "var(--radius-md)",
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
      color: isFocused ? "var(--colors-text)" : "var(--colors-text-inactive)",
      backgroundColor: isFocused
        ? "var(--colors-bg-input)"
        : "var(--colors-bg)",
    }),
    inputLabel: (provided) => ({
      ...provided,
      color: "var(--colors-text)",
    }),

    placeholder: (provided) => ({
      ...provided,
      color: "var(--colors-text)",
    }),
  },
})`
  font-family: var(--family);
  border: 1px solid rgba(18, 20, 23, 0.05);
  border-radius: var(--radius-md);
  margin-top: 4px;

  & > * {
    box-shadow: var(--shadow);
  }
  & input {
    padding-left: 0.25rem;
  }

  & [class$="-menu"] {
    background-color: var(--colors-bg);
  }

  & [class$="-singleValue"] {
    color: var(--colors-text);
  }
`;

export const SelectPrice = styled(Select).attrs({
  styles: {
    control: (provided) => ({
      ...provided,
      width: "144px",
      height: "48px",
      cursor: "pointer",
      backgroundColor: "var(--colors-bg-input)",
      color: "var(--colors-text)",

      borderRadius: "var(--radius-md)",
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
      color: isFocused ? "var(--colors-text)" : "var(--colors-text-inactive)",
      backgroundColor: isFocused
        ? "var(--colors-bg-input)"
        : "var(--colors-bg)",
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
  margin-top: 4px;

  & > * {
    box-shadow: var(--shadow);
  }
  & input {
    padding-left: 0.25rem;
    color: var(--colors-text);
  }

  & [class$="-menu"] {
    background-color: var(--colors-bg);
  }

  & [class$="-singleValue"] {
    color: var(--colors-text);
  }
`;

export const MileageWrapper = styled.div`
  position: relative;
  margin-top: 4px;

  &:before {
    content: "From:";
    color: var(--colors-text);
    font-size: var(--fs-lg);
    font-weight: var(--fw-normal);
    line-height: 1.11;

    position: absolute;
    top: 50%;
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
    top: 50%;
    right: 90px;
    transform: translateY(-50%);
  }
`;
export const MileageInput = styled.input`
  font-size: var(--fs-lg);
  font-weight: var(--fw-normal);
  line-height: 1.11;
  color: var(--colors-text);
  background-color: var(--colors-bg-input);

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
