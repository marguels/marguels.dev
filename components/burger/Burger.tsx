"use client";
import { useKBar } from "kbar";
import IconMenuGridO from "../icons/MenuGridIcon";
import MenuIcon from "../icons/MenuIcon";
import styles from "./burger.module.css";
import {FiCommand} from 'react-icons/fi';

interface BurgerProps {
  isOpen: boolean;
  toggleMenu: () => void;
  grid?: boolean;
}

const Burger = ({ isOpen, toggleMenu, grid }: BurgerProps) => {
  const kbar = useKBar();
  
  return (
    <div className={styles.fitSvg && isOpen ? styles.open : styles.hide} onClick={kbar.query.toggle}>
     {grid ? <FiCommand size={26}/> : <MenuIcon />}
    </div>
  );
};

export default Burger;
