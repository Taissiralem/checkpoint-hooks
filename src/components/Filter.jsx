const Filtre = ({
  filterTitle,
  filterRate,
  handleTitleChange,
  handleRateChange,
}) => {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filtrer par titre"
        value={filterTitle}
        onChange={handleTitleChange}
      />
      <input
        type="number"
        placeholder="Filtrer par note"
        value={filterRate}
        onChange={handleRateChange}
      />
    </div>
  );
};

export default Filtre;
