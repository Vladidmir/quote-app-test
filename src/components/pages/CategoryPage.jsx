import React, { useState, useEffect } from "react";

import CategoryList from "../categoryList/CatygoryList";
import CategoryQuote from "../categoryQueate/categoryQueate";

import useChuckService from "../../services/useChuckService";

import "./catrgory.scss";
import Spinner from "../spinner/Spinner";

const CategoryPage = ({ onSetIcon }) => {
  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("food");
  const [categoryQuote, setCategoryQuute] = useState("");

  const { getAllCategories, getQueate, error, loading } = useChuckService();

  const onQuoteLoaded = (newQuote, iconUrl) => {
    setCategoryQuute(newQuote);
    onSetIcon(iconUrl);
  };

  const onCategoriesLoaded = (data) => {
    setCategories(data);
  };

  useEffect(() => {
    getAllCategories().then(onCategoriesLoaded);
  }, []);

  useEffect(() => {
    getQueate(currentCategory).then((data) => {
      onQuoteLoaded(data.value, data.icon_url);
    });
  }, [currentCategory]);

  const onChangeCategory = (categoryName) => {
    setCurrentCategory(categoryName);
  };

  if (error) {
    return <h2> An error has occured. Please try again later</h2>;
  }

  return (
    <div className="category">
      <h1 className="category_title">Categories</h1>

      {loading && !categories.length ? (
        <Spinner />
      ) : (
        <CategoryList
          onChangeCategory={onChangeCategory}
          currentCategory={currentCategory}
          categories={categories}
        />
      )}

      {categories.length && <CategoryQuote quote={categoryQuote} />}
    </div>
  );
};

export default CategoryPage;
