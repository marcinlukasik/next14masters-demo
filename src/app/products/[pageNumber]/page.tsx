import { getProducts, getProductsByOrder } from "@/api/products";
import {
	type InputMaybe,
	type ProductSortBy,
	type SortDirection,
} from "@/gql/graphql";
import { SortSelect } from "@/ui/atoms/SortSelect";
import { paginationItemsPerPage } from "@/ui/constants";
import { Pagination } from "@/ui/molecules/Pagination";
import { ProductList } from "@/ui/organism/ProductList";

export async function generateStaticParams() {
	const products = await getProducts(paginationItemsPerPage);

	const numberOfStaticPages = 3;
	const total = products.data.length;

	if (total <= 0) {
		return [];
	}

	const numberOfAllPages = Math.ceil(total / paginationItemsPerPage);

	const loopCount = Math.min(numberOfStaticPages, numberOfAllPages);

	return Array.from({ length: loopCount }, (_value, index) => {
		return {
			pageNumber: (index + 1).toString(),
		};
	});
}

export default async function ProductsPage({
	params,
	searchParams,
}: {
	params: { pageNumber: string };
	searchParams: { orderBy: string; order: string };
}) {
	const skip =
		(Number(params.pageNumber) - 1) * paginationItemsPerPage;

	const { orderBy, order } = searchParams;

	const products =
		orderBy && order
			? await getProductsByOrder(
					paginationItemsPerPage,
					skip,
					orderBy as InputMaybe<ProductSortBy>,
					order as InputMaybe<SortDirection> | undefined,
				)
			: await getProducts(paginationItemsPerPage, skip);

	return (
		<>
			<div className="mb-8 flex items-center justify-between">
				<h2 className="text-xl font-semibold leading-6 text-gray-900">
					All products
				</h2>
				<SortSelect
					type={searchParams.orderBy}
					direction={searchParams.order}
					pageNumber={params.pageNumber}
				/>
			</div>
			<ProductList products={products.data} />
			<Pagination
				total={products.meta.total}
				itemsPerPage={paginationItemsPerPage}
				route="/products"
				searchParams={
					searchParams.orderBy && searchParams.order
						? `?orderBy=${searchParams.orderBy}&order=${searchParams.order}`
						: ""
				}
			/>
		</>
	);
}
