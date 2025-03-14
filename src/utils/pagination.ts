interface GetPageSizeParams {
  totalItems: number;
  itemsPerPage?: number;
}

export const getPageSize = ({
  totalItems,
  itemsPerPage = 20,
}: GetPageSizeParams): number => {
  const remainder: number = totalItems % itemsPerPage;
  const integerPart: number = (totalItems - remainder) / itemsPerPage;

  return remainder > 0 ? integerPart + 1 : integerPart;
};

export const displayPagination = (totalPage: number, currentPage: number) => {
  const pages: number[] = [];
  const prevPage = currentPage - 1;
  const nextPage = currentPage + 1;
  const leftEllipsis = currentPage - 2;
  const rightEllipsis = currentPage + 2;

  pages.push(1);

  if (prevPage > 1) pages.push(prevPage);

  if (currentPage !== 1 && currentPage !== totalPage) pages.push(currentPage);

  if (nextPage < totalPage) pages.push(nextPage);

  if (leftEllipsis > 2) pages.splice(1, 0, 0);

  if (rightEllipsis < totalPage) pages.push(0);

  if (totalPage !== 1) pages.push(totalPage);

  if (currentPage === totalPage) {
    pages.splice(pages.indexOf(rightEllipsis) - 1);
    pages.push(totalPage - 2, totalPage - 1, totalPage);
  }

  return pages;
};
