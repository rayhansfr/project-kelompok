import Item from "./Item";
import { PRODUCTS, ARTICLE, COMPANY, SUPPORT } from "./Menus";
const ItemsContainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16">
      <Item Links={PRODUCTS} title="PRODUCTS" />
      <Item Links={ARTICLE} title="ARTICLE" />
      <Item Links={COMPANY} title="OUR TEAM" />
      <Item Links={SUPPORT} title="SUPPORT" />
    </div>
  );
};

export default ItemsContainer;
