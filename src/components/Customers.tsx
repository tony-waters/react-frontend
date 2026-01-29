import { useEffect, useState } from "react";
import type { Page } from "../types/page";
import type { CustomerWithOrderCount } from "../types/customer";

const DEFAULT_SIZE = 10;

export default function Customers() {
    const [pageIndex, setPageIndex] = useState(0);
    const [pageSize, setPageSize] = useState(DEFAULT_SIZE);

    const [page, setPage] = useState<Page<CustomerWithOrderCount>>({
        content: [],
        number: 0,
        size: DEFAULT_SIZE,
        totalElements: 0,
        totalPages: 0,
        first: true,
        last: true,
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let cancelled = false;

        async function load() {
            setLoading(true);
            setError(null);

            try {
                const res = await fetch(`/api/customers?page=${pageIndex}&size=${pageSize}`);
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                const json = (await res.json()) as Page<CustomerWithOrderCount>;
                if (!cancelled) setPage(json);
            } catch (e) {
                if (!cancelled) setError(e instanceof Error ? e.message : "Failed to load");
            } finally {
                if (!cancelled) setLoading(false);
            }
        }

        load();
        return () => {
            cancelled = true;
        };
    }, [pageIndex, pageSize]);

    const prevDisabled = loading || page.first || pageIndex <= 0;
    const nextDisabled = loading || page.last || pageIndex >= (page.totalPages - 1);

    return (
        <div style={{ display: "grid", gap: 12 }}>
            <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
                <button onClick={() => setPageIndex(0)} disabled={prevDisabled}>
                    ⏮ First
                </button>
                <button onClick={() => setPageIndex((p) => Math.max(0, p - 1))} disabled={prevDisabled}>
                    ◀ Prev
                </button>
                <button onClick={() => setPageIndex((p) => p + 1)} disabled={nextDisabled}>
                    Next ▶
                </button>

                <span style={{ marginLeft: 8 }}>
                    Page <strong>{page.number + 1}</strong> of <strong>{Math.max(page.totalPages, 1)}</strong>
                    {" "}({page.totalElements} total)
                </span>
                <span style={{ marginLeft: 12, opacity: 0.7 }}>
                  Sorted by: lastName, id
                </span>

                <label style={{ marginLeft: 12 }}>
                    Page size{" "}
                    <select
                        value={pageSize}
                        onChange={(e) => {
                            const newSize = Number(e.target.value);
                            setPageSize(newSize);
                            setPageIndex(0); // reset to first page when size changes
                        }}
                        disabled={loading}
                    >
                        {[5, 10, 20, 50].map((n) => (
                            <option key={n} value={n}>
                                {n}
                            </option>
                        ))}
                    </select>
                </label>
            </div>

            {error && <div style={{ color: "crimson" }}>Error: {error}</div>}
            {loading && <div>Loading…</div>}

            <ul>
                {page.content.map((c) => (
                    <li key={c.customerId}>
                        {c.lastName}, {c.firstName} — orders: {c.orderCount}
                    </li>
                ))}
            </ul>
        </div>
    );
}
