import { useEffect, useState } from "react";
import type { Page } from "../types/page";
import type { CustomerWithOrderCount } from "../types/customer";

export default function Customers() {
    const [page, setPage] = useState<Page<CustomerWithOrderCount>>({
        content: [],
        number: 0,
        size: 10,
        totalElements: 0,
        totalPages: 0,
        first: true,
        last: true,
    });

    useEffect(() => {
        fetch("/api/customers?page=0&size=10")
            .then((r) => r.json())
            .then((json: Page<CustomerWithOrderCount>) => setPage(json))
            .catch(console.error);
    }, []);

    return (
        <ul>
            {page.content.map((c) => (
                <li key={c.customerId}>
                    {c.firstName} {c.lastName} — orders: {c.orderCount}
                </li>
            ))}
        </ul>
    );
}
