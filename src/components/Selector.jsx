const Selector = ({ data, selected, setSelected }) => {
  const handleChange = (e) => {
    const selectedValue = e.target.value;
    const selectedOption = data.find((option) => option.isoCode === selectedValue);
    setSelected(selectedOption);
  };

  return (
    <select value={selected?.isoCode} onChange={handleChange}>
      {data.map((option) => (
        <option key={option.isoCode} value={option.isoCode}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default Selector;
