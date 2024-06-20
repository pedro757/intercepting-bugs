export default function Page(props: { params: { id: string } }) {
  return (
    <>
      {props.params.id}
      Nested route
    </>
  );
}
