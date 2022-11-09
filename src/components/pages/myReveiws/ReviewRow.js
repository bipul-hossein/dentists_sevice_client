import { Table } from 'flowbite-react';
import React from 'react';

const ReviewRow = ({review}) => {
    console.log(review)
    const{serviceName,reviewField,rating,price,serviceImg} =review
    return (
        <Table.Body className="divide-y">
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
        <Table.Cell>
                <a
                    href="/tables"
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                >
                   {serviceImg}
                </a>
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            {serviceName}
            </Table.Cell>
            <Table.Cell>
            {reviewField}
            </Table.Cell>
            <Table.Cell>
              {rating}
            </Table.Cell>
            <Table.Cell>
                ${price}
            </Table.Cell>
            <Table.Cell>
                <a
                    href="/tables"
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                >
                    Edit
                </a>
            </Table.Cell>
            <Table.Cell>
                <a
                    href="/tables"
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                >
                   Delete
                </a>
            </Table.Cell>
        </Table.Row>
    </Table.Body>
    );
};

export default ReviewRow;