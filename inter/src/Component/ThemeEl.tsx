import { FC } from "react";
import { useState } from "react";
import { ITasks } from "../taskArray";
interface IThemeEl {
  el: ITasks;
}

const ThemeEl: FC<IThemeEl> = ({ el }) => {
  const [show, setShow] = useState<boolean>(false);
  return (
    <li>
      <h3 onClick={() => setShow((prev) => !prev)}>{el.question}</h3>
      {show && <p>{el.answer}</p>}
    </li>
  );
};

export default ThemeEl;
