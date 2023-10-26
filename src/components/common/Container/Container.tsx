import css from "./Container.module.css";

import clsx from "clsx";

const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={clsx(css.container, className)}>{children}</div>;
};

export default Container;
