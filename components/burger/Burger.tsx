'use client'
import MenuIcon from "../icons/MenuIcon";
import styles from "./burger.module.css";

interface BurgerProps {
    isOpen: boolean;
    toggleMenu: () => void;
  }


const Burger = ({isOpen, toggleMenu}: BurgerProps) => {
    return <div className={isOpen ? styles.open : styles.hide} onClick={toggleMenu}>
                <MenuIcon/>
            </div>
}

export default Burger;