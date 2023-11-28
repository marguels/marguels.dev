"use client";
import IconMenuGridO from "../icons/MenuGridIcon";
import MenuIcon from "../icons/MenuIcon";
import styles from "./burger.module.css";

interface BurgerProps {
  isOpen: boolean;
  toggleMenu: () => void;
  grid?: boolean;
}

const Burger = ({ isOpen, toggleMenu, grid }: BurgerProps) => {
  return (
    <div className={isOpen ? styles.open : styles.hide} onClick={toggleMenu}>
     {grid ? <IconMenuGridO /> : <MenuIcon />}
    </div>
  );
};

export default Burger;
