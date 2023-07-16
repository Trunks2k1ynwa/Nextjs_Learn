interface Data {
  text: string;
  id: number;
}
type Props = {
  data: Data[] | null;
  showAlert?: (item: Data) => void;
};
export default function List({ data, showAlert }: Props) {
  return (
    <div>
      {data &&
        data.map((item) => (
          <div key={item.id} className='flex items-center gap-x-3 mb-2'>
            <span>{item.text}</span>
            <button
              onClick={() => showAlert?.(item)}
              className='p-2 rounded-lg bg-red-500 text-white text-center'
            >
              Alert
            </button>
          </div>
        ))}
    </div>
  );
}
