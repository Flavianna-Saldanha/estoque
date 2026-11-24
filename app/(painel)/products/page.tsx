import { Pagination } from "@/components/pagination";
import { PageTitle } from "@/components/page-title";
import { EmptyProducts } from "@/components/products/empty-products";
import { ProductItem } from "@/components/products/product-item";
import { ProductSearch } from "@/components/products/product-search";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { productService } from "@/services/product";
import { Product } from "@/types/product";
import Link from "next/link";

const pageTitle = (
    <PageTitle
        title="Produtos"
        rightSide={
            <Link href="/products/add">
                <Button>Novo Produto</Button>
            </Link>
        }
    />
);

type Props = {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function Page({ searchParams }: Props) {
    const params = await searchParams;
    const name = typeof params.name === 'string' ? params.name : undefined;
    const page = typeof params.page === 'string' ? parseInt(params.page) : 1;
    const limit = 10;
    const offset = (page - 1) * limit;

    const productsRes = await productService.getProducts(offset, limit, name);

    const products = (productsRes.data as Product[]) || [];

    // No products and no active search → show empty state
    if (products.length === 0 && !name) {
        return (
            <div>
                {pageTitle}
                <EmptyProducts />
            </div>
        );
    }

    return (
        <div>
            {pageTitle}
            <ProductSearch />

            {products.length === 0 ? (
                <div className="text-center p-8 text-muted-foreground">
                    Nenhum produto encontrado para <strong>{name}</strong>.
                </div>
            ) : (
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Nome</TableHead>
                            <TableHead className="hidden lg:block">Categoria</TableHead>
                            <TableHead className="w-25">Preço Unit.</TableHead>
                            <TableHead className="w-25">Qt. em Estoque</TableHead>
                            <TableHead className="w-37.5">Ações</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {products.map((item) => (
                            <ProductItem key={item.id} product={item} />
                        ))}
                    </TableBody>
                </Table>
            )}

            <Pagination disablePrev={page <= 1} disableNext={products.length < limit} />
        </div>
    );
}
