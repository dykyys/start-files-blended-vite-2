import s from './GridItem.module.css';
const GridItem = ({ children }) => {
  return <li className={s.item}>{children}</li>;
};
export default GridItem;
