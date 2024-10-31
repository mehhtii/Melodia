const Input = ({ placeholder, type, name, label ,className}) => {
  return (
    <>
      <div>
        <label className="text-blue-white-active-customer block text-sm" htmlFor={name}>
          {label}
        </label>
        <input type={type} placeholder={placeholder} name={name} className={`outline-none rounded py-1 px-2 placeholder:text-sm text-blue-customer border border-white-customer focus:border-blue-customer focus:shadow-sm focus:shadow-blue-customer ${className}`}/>
      </div>
    </>
  );
};

export default Input;
