import { IconTrash } from "@tabler/icons";
import type { Alternative } from "../domain/question";
import Checkbox from "./checkbox";
import InputPrimary from "./inputs/input-primary";

interface AlternativeProps {
  alternative: Alternative;
  editable: boolean;
  index: number;
  updateAlternative: (index: number, Alternative: Alternative) => void;
  removeAlternative: (index: number) => void;
}

export default function Alternative({
  alternative,
  editable,
  index,
  updateAlternative,
  removeAlternative,
}: AlternativeProps) {
  const handleClickRemoveAlternative = () => {
    removeAlternative(index);
  };

  return (
    <div className="flex items-center gap-6">
      <span>{index + 1}</span>
      {editable ? (
        <>
          <Checkbox
            id={alternative.id}
            title="Marcar como resposta"
            onChange={() =>
              updateAlternative(index, {
                ...alternative,
                isAnswer: !alternative.isAnswer,
              })
            }
          />
          <InputPrimary
            width="96"
            placeholder={`Alternativa ${index + 1}`}
            onChange={(e) =>
              updateAlternative(index, {
                ...alternative,
                content: e.target.value,
              })
            }
          />
          <button
            className="rounded-full bg-red-500 p-1 hover:bg-red-400 transition-all"
            title={`Remover Alternativa ${index + 1}`}
            onClick={handleClickRemoveAlternative}
          >
            <IconTrash color="white" />
          </button>
        </>
      ) : (
        <>
          <p>{alternative.content}</p>
        </>
      )}
    </div>
  );
}
