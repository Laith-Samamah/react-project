import React from 'react'
import { Pagination } from '@mui/material';

const MyPagination = ({ totalPosts, postsPerPage, setCurrentPage }) => {
    // let pages = [];
    // for (let i = 0; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    //     pages.push(i)
    // }

    return (
        <div>
            {
            }
            <Pagination count={Math.ceil(totalPosts / postsPerPage)}
                color="primary" showFirstButton showLastButton size="large"
                onChange={(e, p) => setCurrentPage(p)}
            />
        </div>
    )
}

export default MyPagination