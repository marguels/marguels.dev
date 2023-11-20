'use client'
import { useState } from "react";
import MenuIcon from "../icons/MenuIcon";
import styles from "./burger.module.css";

const Burger = ({isOpen, toggleMenu}) => {
    return <div className={isOpen ? styles.open : styles.hide} onClick={toggleMenu}>
                <MenuIcon/>
            </div>
}

export default Burger;