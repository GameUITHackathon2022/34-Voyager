import Button from "./Button";

type Props = {
  title: string;
  desc: string;
  button?: boolean;
  textAction?: string;
};

export function TransactionItem({ title, desc, button, textAction }: Props) {
  return (
    <div className="bg-white flex flex-row">
      <div className="grow">
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
      <Button type={"button"} />
    </div>
  );
}
