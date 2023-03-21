function Filter() {
  return (
    <>
      <label htmlFor="year-select"></label>
      <select name="year" id="year-select">
        <option value="2022">2022</option>
        <option value="2023">2023</option>
      </select>

      <label htmlFor="month-select"></label>
      <select name="month" id="month-select">
        <option value="Январь">Январь</option>
        <option value="Февраль">Февраль</option>
        <option value="Март">Март</option>
        <option value="Апрель">Апрель</option>
        <option value="Май">Май</option>
        <option value="Июнь">Июнь</option>
        <option value="Июль">Июль</option>
        <option value="Август">Август</option>
        <option value="Сентябрь">Сентябрь</option>
        <option value="Октябрь">Октябрь</option>
        <option value="Ноябрь">Ноябрь</option>
        <option value="Декабрь">Декабрь</option>
      </select>
    </>
  );
}

export default Filter;
