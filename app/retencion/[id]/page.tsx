import RetencionTable from "./table";

export default async function Page(props: { params: { id: string } }) {
  const properties = await getProps(Number(props.params.id));
  return (
    <>
      <RetencionTable {...properties} />
    </>
  );
}

export async function getProps(ventaId: number) {
  if (Number.isNaN(ventaId)) {
    throw new Error("Invalid id");
  }
  return {
    elements: [
      {
        id: 1,
        numero: 1,
        fecha: new Date(),
        monto: BigInt(1000),
      },
      {
        id: 1,
        numero: 1,
        fecha: new Date(),
        monto: BigInt(1000),
      },
    ],
  };
}

export type PageProps = Awaited<ReturnType<typeof getProps>>;
