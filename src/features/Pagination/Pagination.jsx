import React from 'react';
import styles from './Pagination.module.scss'
import { useState } from 'react';

const Pagination = ({ totalPosts, postsPerPage, setCurrentPage, currentPage, lastPage }) => {
    const setPreBtn = (currentPage > 1) ? true : false;
    const setAftBtn = (currentPage < lastPage) ? true : false;
    let pages = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pages.push(i);
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    const handlePrevious = () => {
        scrollToTop();
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    }

    const handleAfter = () => {
        scrollToTop();
        if (currentPage < lastPage) {
            setCurrentPage(currentPage + 1);
        }
    }

    return (
        <div className={styles.page_btn}>
            <span className={styles.arrow}>
                {setPreBtn &&
                    (<i className="fa-solid fa-chevron-left"
                        onClick={handlePrevious}></i>)
                }
            </span>
            <div className={styles.number_page}>
                {pages.map((page, index) => {
                    return (
                        <span
                            className={(page == currentPage) ? `${styles.active}` : ``}
                            key={index}
                            onClick={() => (setCurrentPage(page), scrollToTop())}
                        >{page}</span>
                    )
                })}
            </div>
            <span className={styles.arrow_right}>
            {setAftBtn &&
                    (<i className="fa-solid fa-chevron-right"
                        onClick={handleAfter}></i>)
                }
            </span>
        </div>
    )
}

export default Pagination;