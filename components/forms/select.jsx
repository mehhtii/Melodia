const Select = ({ options, onchange, name, label }) => {
  return (
    <>
      <div>
        <label
          className="block text-sm text-blue-white-active-customer"
          htmlFor={name}
        >
          {label}
        </label>
        <select
          className="w-48 py-1 rounded outline-none border block border-white-customer focus:border-blue-customer focus:shadow-sm focus:shadow-blue-customer"
          onChange={onchange}
        >
          {options.map((option, index) => (
            <option
              name={name}
              className="text-blue-active-customer bg-dark-customer "
              key={index}
              value={option.value}
            >
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default Select;
