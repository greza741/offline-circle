import { NAVS } from "./icon";
import Items from "./items";
import {} from "@iconify-json/mdi";
const ContainerIcons = () => {
  return (
    <div>
      {NAVS.map((item, index) => {
        return <Items key={index} {...item} />;
      })}
    </div>
  );
};
export default ContainerIcons;
