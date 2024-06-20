export default function Layout(
  props: Readonly<{
    children: React.ReactNode;
    modal: React.ReactNode;
  }>,
) {
  return (
    <>
      {props.modal}
      {props.children}
    </>
  );
}
