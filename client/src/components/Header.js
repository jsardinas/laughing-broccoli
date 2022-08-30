import React from "react";
import NavTabs from './NavTabs';

export default function Header({ currentPage, setCurrentPage }) {
    const handlePageChange = (page) => setCurrentPage(page);
    return (
        <div>
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
        </div>
    )
}
