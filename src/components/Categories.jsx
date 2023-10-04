export const Categories = ({ categoryId, handleChangeCategory }) => {
  const categories = ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые'];

  return (
    <div className='categories'>
      <ul>
        {categories.map((categoryName, index) => (
          <li
            key={categoryName}
            onClick={() => handleChangeCategory(index)}
            className={categoryId === index ? 'active' : ''}>
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
};
