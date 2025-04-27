import { FC } from "react";
import { ITasks } from "../taskArray";
import ThemeEl from "./ThemeEl";

export interface ITheme {
  array: ITasks[];
  themeName: string;
}

const Theme: FC<ITheme> = ({ array, themeName }) => {
  return (
    <>
      <ul>
        {array
          .filter((el) => el.theme === themeName)
          .map((el, i) => (
            <ThemeEl key={i} el={el} />
          ))}
      </ul>
    </>
  );
};

export default Theme;
