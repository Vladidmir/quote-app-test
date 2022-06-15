import "./categoryList.scss";
const CategoryList = ({ categories, currentCategory, onChangeCategory }) => {
  return (
    <div className="category__list">
      {categories.map((item, i) => (
        <button
          className={
            item === currentCategory
              ? "category__item_active"
              : "category__item"
          }
          key={i}
          onClick={() => onChangeCategory(categories[i])}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default CategoryList;
