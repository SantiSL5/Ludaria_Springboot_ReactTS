import DataTable from 'react-data-table-component';
import React from "react";


const List = ({ list, deleteProduct, deleteManyProducts, changeForm }: any) => {
    const [selectedRows, setSelectedRows]: any = React.useState(false);
    const [toggledClearRows] = React.useState(false);

    const handleChange = ({ selectedRows }: any) => {
        setSelectedRows(selectedRows);
    };

    const customSort = (rows: any, selector: any, direction: any) => {
        return rows.sort((rowA: any, rowB: any) => {
            const aField = selector(rowA)
            const bField = selector(rowB)

            let comparison = 0;
            if (aField.props || bField.props) {
                if (aField.props.checked) {
                    comparison = 1;
                } else if (bField.props.checked) {
                    comparison = -1;
                }
            } else {
                if (aField > bField) {
                    comparison = 1;
                } else if (aField < bField) {
                    comparison = -1;
                }
            }

            return direction === 'desc' ? comparison * -1 : comparison;
        });
    };

    const columns = [
        {
            name: 'ID',
            selector: (row: any) => row.id,
            sortable: true
        },
        {
            name: 'Name',
            selector: (row: any) => row.name,
            sortable: true
        },
        {
            name: 'Description',
            selector: (row: any) => row.description,
            sortable: true
        },
        {
            name: 'Price',
            selector: (row: any) => row.price,
            sortable: true
        },
        {
            name: 'Img',
            selector: (row: any) => row.img,
            sortable: true
        },
        {
            name: 'Age',
            selector: (row: any) => row.age,
            sortable: true
        },
        {
            name: 'Stock',
            selector: (row: any) => row.stock,
            sortable: true
        },
        {
            name: 'Brand',
            selector: (row: any) => row.brand.name,
            sortable: true
        },
        {
            name: 'Category',
            selector: (row: any) => row.category.name,
            sortable: true
        },
        {
            name: 'Author',
            selector: (row: any) => row.author,
            sortable: true
        },
        {
            name: 'Num Pieces',
            selector: (row: any) => row.numPieces,
            sortable: true
        },
        {
            name: 'Difficulty',
            selector: (row: any) => row.difficulty,
            sortable: true
        },
        {
            name: 'Operations',
            selector: (row: any) =>
                <div>
                    <button type="button" className="bg-blue-600 text-white px-4 py-2 rounded mr-2"
                        onClick={() => {
                            changeForm(row, "update");
                        }}
                    >Update</button>
                    <button type="button" className="bg-red-600 text-white px-4 py-2 rounded"
                        onClick={() => {
                            deleteProduct(row.id);
                        }}
                    > Delete</button>
                </div>,
            sortable: false
        },
    ];

    return (
        <div>
            <button type="button" className="mt-2 mb-2 ml-2 bg-red-600 text-white text-base px-4 py-2 rounded disabled:opacity-50" disabled={selectedRows.length === 0}
            onClick={() => {
                deleteManyProducts(selectedRows);
            }}>Delete selected</button>
            {
                <DataTable
                    sortFunction={customSort}
                    columns={columns}
                    data={list}
                    pagination
                    selectableRows
                    onSelectedRowsChange={handleChange}
                    clearSelectedRows={toggledClearRows}
                />
            }
        </div>
    );
}

export default List;
