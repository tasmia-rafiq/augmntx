import './Pagination.css';
import { BiChevronsLeft, BiChevronsRight } from 'react-icons/bi';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav>
      <ul className="pagination">
        {/* Previous button */}
        {currentPage > 1 && (
          <li>
            <button onClick={() => onPageChange(currentPage - 1)}>
              {<BiChevronsLeft />}
            </button>
          </li>
        )}

        {/* Page numbers */}
        {pageNumbers.map((number) => (
          <li key={number} className={currentPage === number ? "active" : ""}>
            <button onClick={() => onPageChange(number)}>{number}</button>
          </li>
        ))}

        {/* Next button */}
        {currentPage < totalPages && (
          <li>
            <button onClick={() => onPageChange(currentPage + 1)}>
            {<BiChevronsRight />}
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Pagination;
