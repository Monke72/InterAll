import React, { FC } from "react";
import arrayTasks from "./../taskArray";
import Theme from "./Theme";

const ThemesAll: FC = () => {
  return (
    <>
      <section>
        <h1>HTML/CSS</h1>
        <Theme themeName="HTML/CSS" array={arrayTasks} />
      </section>
      <section>
        <h1>React</h1>
        <Theme themeName="React" array={arrayTasks} />
      </section>
      <section>
        <h1>JS</h1>
        <Theme themeName="JS" array={arrayTasks} />
      </section>
      <section>
        <h1>Git</h1>
        <Theme themeName="Git" array={arrayTasks} />
      </section>
      <section>
        <h1>Инструменты</h1>
        <Theme themeName="Инструменты" array={arrayTasks} />
      </section>
      <section>
        <h1>Веб Технологии</h1>
        <Theme themeName="Веб Технологии" array={arrayTasks} />
      </section>
      <section>
        <h1>TypeScript</h1>
        <Theme themeName="TypeScript" array={arrayTasks} />
      </section>
    </>
  );
};

export default ThemesAll;
