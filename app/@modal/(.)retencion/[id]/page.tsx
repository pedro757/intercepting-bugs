import { getProps } from "../../../retencion/[id]/page";
import RetencionTable from "../../../retencion/[id]/table";
import { Modal } from "./modal";

export default async function Page(props: { params: { id: string } }) {
  const properties = await getProps(Number(props.params.id));
  return (
    <Modal>
      <RetencionTable {...properties} />
    </Modal>
  );
}
